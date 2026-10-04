import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DECKS, TESTS} from '../src/library.js';
import {FIGURES} from '../src/diagrams.js';
const cards=DECKS[9].cards;
test('class overview adds eight distinct objectives and seven scored questions; drawing is self-assessed',()=>{
 const added=cards.filter(c=>c.id.startsWith('biol112-class-'));assert.equal(added.length,8);assert.equal(new Set(added.map(c=>c.concept)).size,8);
 for(const c of added){const q=TESTS.find(q=>q.cardId===c.id);if(c.kind==='Draw from memory'){assert.equal(c.figure,'');assert.ok(FIGURES[c.answerFigure]);assert.equal(q,undefined);}else{assert.ok(q);assert.equal(q.explanation,c.back);assert.equal(q.options[0],c.back);assert.equal(q.figure,c.figure);}}
});
test('diagram identification fronts show direction without naming the answer',()=>{
 for(const key of ['transport-symport','transport-antiport']){const f=FIGURES[key];assert.doesNotMatch(f.draw(false),/symport|antiport/i);assert.doesNotMatch(f.desc,/symport|antiport/i);assert.match(f.draw(false),/Outside/);assert.match(f.draw(false),/Inside/);}
 const c=cards.find(c=>c.kind==='Draw from memory');assert.match(c.prompt,/Sketch/);
 const source=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');assert.match(source,/figure\(c.answerFigure,true\)/);
});
test('revised transport concepts keep stable IDs and tests agree with updated answers',()=>{
 for(const id of ['1a1629ee8c2db1','0f1df698561d7c','d07897c49018fb','edfb4e1bbe486a','biol112-transport-cotransport-directions']){
  const c=cards.find(c=>c.id===id);assert.ok(c);for(const q of TESTS.filter(q=>q.cardId===id)){assert.equal(q.prompt,c.prompt);assert.equal(q.options[0],c.back);assert.equal(q.explanation,c.back);assert.equal(q.figure,c.figure);}
 }
 assert.equal(cards.find(c=>c.id==='c88e0cacd1b53f').concept,'Selective permeability');
});
