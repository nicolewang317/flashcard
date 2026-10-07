import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DECKS,TESTS} from '../src/library.js';
import {courseProgress} from '../src/deck-progress.js';
import {courseUnits,unitExportName} from '../src/deck-navigation.js';
import {emptyStudy,changesToEvents,projectStudy} from '../src/sync-core.js';
import {recordTest,questionStats} from '../src/notebook-core.js';
const deck=DECKS.find(d=>d.course==='BIOL 121');
test('BIOL 121 preserves four original definitions, exports independently and keeps original course indices',()=>{
 const originals=JSON.parse(fs.readFileSync(new URL('../docs/BIOL121_VOCABULARY_ORIGINAL.json',import.meta.url)));
 assert.equal(DECKS.indexOf(deck),15);assert.equal(DECKS[4].course,'CHEM 121');assert.equal(DECKS[11].module,'2-6');
 assert.deepEqual(deck.cards.map(c=>({term:c.front,definition:c.back})),originals);assert.ok(deck.cards.every(c=>!c.figure));
 assert.equal(unitExportName(deck),'BIOL121_Genetics_Master.txt');assert.equal(courseUnits(DECKS,'BIOL 121')[0].decks.length,1);
 const exported=fs.readFileSync(new URL('../public/'+unitExportName(deck),import.meta.url),'utf8');assert.equal(exported,deck.cards.map(c=>c.front+'\t'+c.back).join('\n')+'\n');
 const questions=TESTS.filter(q=>q.deck===15);assert.equal(questions.length,4);for(const q of questions)assert.equal(q.options[0],deck.cards.find(c=>c.id===q.cardId).front);
});
test('BIOL 121 progress and notebook attempts survive event replay and stay separate from BIOL 112',()=>{
 const card=deck.cards[0],progress={[card.id]:{status:'known'}};assert.equal(courseProgress(DECKS,'BIOL 121',progress).percent,25);assert.equal(courseProgress(DECKS,'BIOL 112',progress).mastered,0);
 const db=emptyStudy();recordTest(db.notebook,{id:'vocab',course:'BIOL 121',chapter:'Genetics',prompt:'Definition?',answer:card.front,concept:card.concept},false,'Genome',123);
 db.activeTests['BIOL 121']={items:[],pos:0};const events=changesToEvents(emptyStudy(),db).map((e,i)=>({...e,seq:i+1}));const restored=projectStudy([],events);
 assert.equal(restored.notebook.questions['test:vocab'].course,'BIOL 121');assert.equal(questionStats(restored.notebook,restored.notebook.questions['test:vocab']).misses,1);assert.ok(restored.activeTests['BIOL 121']);
});
