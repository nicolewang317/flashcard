import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DECKS,TESTS} from '../src/library.js';
import {courseUnits,sameUnit,defaultFigure,sourceLabel,unitExportName} from '../src/deck-navigation.js';

test('Proteins is nested in Macromolecules without changing existing deck indices',()=>{
 assert.deepEqual(DECKS.slice(0,8).map(d=>d.title),['Functional groups & linkages','Structures & directionality','Lipids & membranes','Hydrophobic effect','AXE & parent shapes','Molecular shapes','Bond angles','Visual recognition']);
 const groups=courseUnits(DECKS,'BIOL 112');assert.deepEqual(groups.map(g=>g.unit),['Macromolecules']);assert.deepEqual(groups[0].decks.map(d=>d.index),[0,1,2,3,8]);assert.equal(courseUnits(DECKS,'CHEM 121')[0].decks[0].index,4);
});
test('new Protein set has 30 unique objectives with matching scored questions',()=>{
 const d=DECKS[8],qs=TESTS.filter(q=>q.deck===8);assert.equal(d.cards.length,30);assert.equal(qs.length,30);assert.equal(new Set(d.cards.map(c=>c.concept)).size,30);
 for(const c of d.cards){assert.equal(c.deck,8);const q=qs.find(q=>q.cardId===c.id);assert.ok(q);assert.equal(q.prompt,c.prompt);assert.equal(q.explanation,c.back);assert.equal(new Set(q.options).size,4);assert.ok(!DECKS.slice(0,8).some(d=>d.cards.some(x=>x.id===c.id||x.front===c.front)));}
});
test('unit scope includes all macromolecule sets, excludes chemistry, and preserves protein source metadata',()=>{
 assert.equal(DECKS.filter(d=>sameUnit(d,DECKS[8])).length,5);assert.equal(TESTS.filter(q=>sameUnit(DECKS[q.deck],DECKS[8])).length,TESTS.filter(q=>DECKS[q.deck].course==='BIOL 112').length);
 assert.equal(defaultFigure(DECKS[8]),'peptide');assert.equal(defaultFigure(DECKS[4]),'v-ax4');assert.match(sourceLabel(DECKS[8]),/September 27/);assert.equal(unitExportName(DECKS[8]),'BIOL_Macromolecules_Master.txt');
 const source=readFileSync(new URL('../src/app.js',import.meta.url),'utf8');assert.doesNotMatch(source,/state\.deck\s*[<>]=?\s*4|c\.deck\s*>=\s*4|i%4/);
});
test('the BIOL course and Macromolecules exports both include the Protein set',()=>{
 const file=name=>readFileSync(new URL('../public/'+name,import.meta.url),'utf8').trim().split('\n');
 assert.equal(file('BIOL112_Proteins_Sept27.txt').length,30);assert.equal(file('BIOL112_All_Units_Master.txt').length,194);assert.equal(file('BIOL_Macromolecules_Master.txt').length,194);
});
