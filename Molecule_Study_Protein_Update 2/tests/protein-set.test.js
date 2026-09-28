import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DECKS,TESTS} from '../src/library.js';
import {courseUnits,sameUnit,defaultFigure,sourceLabel,unitExportName} from '../src/deck-navigation.js';

test('Proteins is a separate BIOL unit without changing the eight existing deck indices',()=>{
 assert.deepEqual(DECKS.slice(0,8).map(d=>d.title),['Functional groups & linkages','Structures & directionality','Lipids & membranes','Hydrophobic effect','AXE & parent shapes','Molecular shapes','Bond angles','Visual recognition']);
 const groups=courseUnits(DECKS,'BIOL 112');assert.deepEqual(groups.map(g=>g.unit),['Macromolecules','Proteins']);assert.deepEqual(groups[1].decks.map(d=>d.index),[8]);assert.equal(courseUnits(DECKS,'CHEM 121')[0].decks[0].index,4);
});
test('new Protein set has 30 unique objectives with matching scored questions',()=>{
 const d=DECKS[8],qs=TESTS.filter(q=>q.deck===8);assert.equal(d.cards.length,30);assert.equal(qs.length,30);assert.equal(new Set(d.cards.map(c=>c.concept)).size,30);
 for(const c of d.cards){assert.equal(c.deck,8);const q=qs.find(q=>q.cardId===c.id);assert.ok(q);assert.equal(q.prompt,c.prompt);assert.equal(q.explanation,c.back);assert.equal(new Set(q.options).size,4);assert.ok(!DECKS.slice(0,8).some(d=>d.cards.some(x=>x.id===c.id||x.front===c.front)));}
});
test('unit scope excludes macromolecules and chemistry; protein diagrams and source metadata are appropriate',()=>{
 assert.equal(DECKS.filter(d=>sameUnit(d,DECKS[8])).length,1);assert.equal(TESTS.filter(q=>sameUnit(DECKS[q.deck],DECKS[8])).length,30);
 assert.equal(defaultFigure(DECKS[8]),'peptide');assert.equal(defaultFigure(DECKS[4]),'v-ax4');assert.match(sourceLabel(DECKS[8]),/September 27/);assert.equal(unitExportName(DECKS[8]),'BIOL112_Proteins_Master.txt');
 const source=readFileSync(new URL('../src/app.js',import.meta.url),'utf8');assert.doesNotMatch(source,/state\.deck\s*[<>]=?\s*4|c\.deck\s*>=\s*4|i%4/);
});
test('the complete BIOL course export includes both units, while the old unit master stays scoped',()=>{
 const file=name=>readFileSync(new URL('../public/'+name,import.meta.url),'utf8').trim().split('\n');
 assert.equal(file('BIOL112_Proteins_Sept27.txt').length,30);assert.equal(file('BIOL112_All_Units_Master.txt').length,194);assert.equal(file('BIOL_Macromolecules_Master.txt').length,164);
});
