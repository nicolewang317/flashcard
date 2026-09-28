import test from 'node:test';
import assert from 'node:assert/strict';
import {deckProgress} from '../src/deck-progress.js';
import {DECKS} from '../src/library.js';
import {emptyRecord,projectStudy} from '../src/sync-core.js';
const deck={cards:Array.from({length:100},(_,i)=>({id:String(i)}))};
const progress=n=>Object.fromEntries(deck.cards.slice(0,n).map(c=>[c.id,{status:'known'}]));
test('rings transition through red, yellow, green and complete at actual mastery thresholds',()=>{
 for(const [n,tone]of [[0,'red'],[20,'red'],[34,'yellow'],[79,'yellow'],[80,'green'],[99,'green'],[100,'complete']]){
  const p=deckProgress(deck,progress(n));assert.equal(p.tone,tone);assert.equal(p.percent,n);assert.equal(p.complete,n===100);assert.equal(p.mastered,n);
 }
});
test('opening, favoriting and old correct history do not count as current mastery',()=>{
 const p=progress(5);p['5']={status:'new',star:true};p['6']={status:'practice',history:[{ok:true}]};p['7']={status:'practice',streak:2};
 assert.equal(deckProgress(deck,p).mastered,5);p['0'].status='practice';assert.equal(deckProgress(deck,p).mastered,4);
});
test('near completion does not round up to a completion star; empty sets are not complete',()=>{
 const large={cards:Array.from({length:1001},(_,i)=>({id:String(i)}))};const p=Object.fromEntries(large.cards.slice(0,1000).map(c=>[c.id,{status:'known'}]));
 assert.equal(deckProgress(large,p).percent,99);assert.equal(deckProgress(large,p).complete,false);assert.equal(deckProgress({cards:[]}).complete,false);
});
test('protein history keeps its IDs and still drives progress after moving into Macromolecules',()=>{
 const d=DECKS[8],id=d.cards[0].id;assert.equal(d.unit,'Macromolecules');assert.equal(d.shortTitle,'Proteins');
 const db=projectStudy([{card_id:id,value:{...emptyRecord(),status:'known'}}],[]);
 assert.equal(deckProgress(d,db.progress).mastered,1);assert.equal(deckProgress(DECKS[0],db.progress).mastered,0);
});
