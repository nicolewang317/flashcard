import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DECKS} from '../src/library.js';
import {normalizeCardEdits,mergeCardEdits,cardLibrary} from '../src/custom-cards.js';
import {emptyStudy,changesToEvents,projectStudy} from '../src/sync-core.js';
import {courseProgress} from '../src/deck-progress.js';
const id='custom-11111111-1111-4111-8111-111111111111';
const image={path:'11111111-1111-4111-8111-111111111111/22222222-2222-4222-8222-222222222222.png',name:'question.png',type:'image/png',size:90};
const card={id,deckKey:DECKS[15].file,front:'Which division separates sister chromatids?',back:'Meiosis II.',concept:'Meiosis',frontImages:[image],backImages:[],deleted:false,createdAt:1,updatedAt:1};
test('a new image card belongs only to the selected set and changes that course total',()=>{
 const lib=cardLibrary(DECKS,{[id]:card});assert.equal(lib.decks[15].cards.at(-1).id,id);assert.equal(lib.all.length,360);assert.equal(DECKS[15].cards.length,4);
 assert.equal(courseProgress(lib.decks,'BIOL 121',{}).total,5);assert.equal(courseProgress(lib.decks,'BIOL 112',{}).total,293);
 assert.deepEqual(lib.map.get(id).frontImages,[image]);
});
test('card creation, ratings, deletion and restoration replay on a second device without losing history',()=>{
 let db=emptyStudy(),seq=0;const cloud=[];
 const sync=next=>{cloud.push(...changesToEvents(db,next).map(e=>({...e,seq:++seq})));db=projectStudy([],cloud);return db};
 let next=structuredClone(db);next.cardEdits[id]=card;sync(next);
 next=structuredClone(db);next.progress[id]={status:'known',star:true,due:1,streak:1,misses:0,lastWrong:null,history:[{at:10,ok:true,source:'Flashcards',chosen:'Remembered',expected:card.back}]};sync(next);
 next=structuredClone(db);next.cardEdits[id]={...card,deleted:true,updatedAt:2};sync(next);
 assert.equal(cardLibrary(DECKS,db.cardEdits).decks[15].cards.length,4);assert.equal(db.progress[id].star,true);assert.equal(db.progress[id].history.length,1);
 next=structuredClone(db);next.cardEdits[id]={...card,deleted:false,updatedAt:3};sync(next);
 const phone=projectStudy([],cloud);assert.equal(cardLibrary(DECKS,phone.cardEdits).decks[15].cards.length,5);assert.deepEqual(phone.cardEdits[id].frontImages,[image]);assert.deepEqual(phone.progress[id],db.progress[id]);assert.deepEqual(phone.activeTests,{});
 assert.equal(cardLibrary(DECKS,emptyStudy().cardEdits).decks[15].cards.length,4);
});
test('built-in deletion is reversible and never mutates the shared library',()=>{
 const builtin=DECKS[0].cards[0];const edits={[builtin.id]:{id:builtin.id,deleted:true,updatedAt:2}};
 const lib=cardLibrary(DECKS,edits);assert.equal(lib.decks[0].cards.length,54);assert.ok(lib.map.has(builtin.id));assert.equal(lib.deleted.length,1);assert.equal(DECKS[0].cards.length,55);
 edits[builtin.id].deleted=false;assert.equal(cardLibrary(DECKS,edits).decks[0].cards.length,55);
});
test('backup merge preserves a newer deletion and rejects incomplete or unsafe image cards',()=>{
 const deleted={...card,deleted:true,updatedAt:5};assert.equal(mergeCardEdits({[id]:deleted},{[id]:card})[id].deleted,true);
 assert.deepEqual(normalizeCardEdits({[id]:{...card,front:'',frontImages:[{...image,path:'https://external.test/x.png'}]}}),{});
 assert.deepEqual(normalizeCardEdits({[id]:{...card,back:'',backImages:[]}}),{});
 assert.ok(normalizeCardEdits({[id]:{...card,front:'',frontImages:[image]}})[id]);
});
test('duplicate retries do not duplicate custom cards; pending deletion stays visible',()=>{
 const empty=emptyStudy(),next=structuredClone(empty);next.cardEdits[id]=card;
 const events=changesToEvents(empty,next).map(e=>({...e,seq:1}));const deleted=changesToEvents(next,{...next,cardEdits:{[id]:{...card,deleted:true,updatedAt:2}}});
 const db=projectStudy([],events,[...events,...deleted]);assert.equal(Object.keys(db.cardEdits).length,1);assert.equal(cardLibrary(DECKS,db.cardEdits).deleted.length,1);
});
test('application interface and bundled cards contain no Chinese text',()=>{
 for(const file of fs.readdirSync(new URL('../src/',import.meta.url)).filter(x=>x.endsWith('.js'))){const source=fs.readFileSync(new URL('../src/'+file,import.meta.url),'utf8');assert.doesNotMatch(source,/[\p{Script=Han}]/u,file)}
 assert.doesNotMatch(fs.readFileSync(new URL('../index.html',import.meta.url),'utf8'),/[\p{Script=Han}]/u);
});
