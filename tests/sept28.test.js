import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DECKS, TESTS} from '../src/library.js';
import {courseProgress} from '../src/deck-progress.js';
import {MOLECULES, highlightMolecules} from '../src/molecule-glossary.js';
import {unitExportName} from '../src/deck-navigation.js';

test('course mastery weights cards, excludes other courses, and updates after a miss',()=>{
 const decks=[{course:'BIO',cards:[{id:'a'}]},{course:'BIO',cards:[{id:'b'},{id:'c'},{id:'d'}]},{course:'CHEM',cards:[{id:'e'}]}];
 const progress={a:{status:'known'},e:{status:'known'}};
 assert.equal(courseProgress(decks,'BIO',progress).percent,25);
 progress.b=progress.c=progress.d={status:'known'};assert.equal(courseProgress(decks,'BIO',progress).tone,'complete');
 progress.c={status:'practice'};assert.equal(courseProgress(decks,'BIO',progress).percent,75);
 assert.equal(courseProgress(decks,'CHEM',progress).mastered,1);
 assert.equal(courseProgress(decks,'missing',progress).complete,false);
});
test('transport move keeps all 18 stable IDs and their scored questions under the new unit',()=>{
 const moved=['8ded866480167a','dbe974593b2efc','1c36c3640b6bce','353300d67cbfc7','c88e0cacd1b53f','edfb4e1bbe486a','0a452a9d71d327','9e9a02f1776b43','0700ae8fe9b43f','1a1629ee8c2db1','d07897c49018fb','0f1df698561d7c','32c14042b89659','29480d7477adf4','6094adf0179c40','7664b2ee0eb6e6','54fbc9d4e2d114','6a065c7fe8a263'];
 const deck=DECKS[9];assert.equal(deck.unit,'Membranes');assert.equal(deck.cards.length,28);
 for(const id of moved){assert.ok(deck.cards.some(c=>c.id===id&&c.deck===9));assert.ok(!DECKS[2].cards.some(c=>c.id===id));for(const q of TESTS.filter(q=>q.cardId===id))assert.equal(q.deck,9);}
 assert.equal(deck.cards.filter(c=>c.id.startsWith('biol112-transport-')).length,10);
 const n=unitExportName(deck);assert.equal(fs.readFileSync(new URL('../public/'+n,import.meta.url),'utf8').trim().split('\n').length,28);
});
test('glossary prioritizes full phrases and never matches inside other chemical terms',()=>{
 const html=highlightMolecules('A phosphate group, a pentose sugar, and a nitrogenous base.');
 assert.equal((html.match(/class="molecule-term"/g)||[]).length,3);
 for(const key of ['phosphate','pentose','base'])assert.match(html,new RegExp('data-molecule="'+key+'"'));
 assert.equal(highlightMolecules('esterification and carboxylated'), 'esterification and carboxylated');
 assert.match(highlightMolecules('DEOXYRIBOSE'),/data-molecule="deoxyribose"/);
 assert.match(highlightMolecules('phosphodiester bond'),/data-molecule="phosphodiester"[^>]*>phosphodiester bond</);
});
test('highlighting escapes untrusted text and all molecule entries have local accessible diagrams',()=>{
 const html=highlightMolecules('<img src=x onerror="evil()"> glucose & phosphate');
 assert.ok(!html.includes('<img'));assert.match(html,/&lt;img/);assert.match(html,/&amp;/);
 const seen=new Set();
 for(const m of Object.values(MOLECULES)){
  for(const a of m.aliases){assert.ok(!seen.has(a));seen.add(a);}
  assert.match(m.image,/<svg/);assert.match(m.image,/role="img" aria-label="/);assert.ok(m.body&&m.caption);assert.doesNotMatch(m.image,/<script|<image|(?:href|src)=["']https?:/);
 }
});
