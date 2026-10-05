import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyNotebook,normalizeNotebook,mergeNotebooks,recordTest,questionStats,issueStats,addAttempt} from '../src/notebook-core.js';
import {emptyStudy,changesToEvents,projectStudy} from '../src/sync-core.js';
const sample={id:'one',course:'BIOL 112',chapter:'Module 2-2',prompt:'Identify the linkage.',answer:'Ester.',concept:'Linkages'};
test('test misses reuse one question, preserve each error, and do not store previously correct questions',()=>{
 const n=emptyNotebook();recordTest(n,sample,true,'Ester',1);assert.equal(Object.keys(n.questions).length,0);
 recordTest(n,sample,false,'Amide',2);recordTest(n,sample,false,'Ether',3);recordTest(n,sample,true,'Ester',4);
 const q=n.questions['test:one'];assert.equal(Object.keys(n.questions).length,1);assert.equal(questionStats(n,q,4).misses,2);assert.equal(questionStats(n,q,4).status,'reviewing');
 assert.equal(questionStats(n,q,4).due,false);assert.equal(questionStats(n,q,86400004).due,true);
 addAttempt(n,q,true,'','复习',86400005);assert.equal(questionStats(n,q).status,'mastered');addAttempt(n,q,false);assert.equal(questionStats(n,q).due,true);
});
test('shared issues count distinct questions and actual error attempts across chapters without cross-course leakage',()=>{
 const n=emptyNotebook();recordTest(n,sample,false,'',1);recordTest(n,sample,false,'',2);recordTest(n,{...sample,id:'two',chapter:'Module 2-5'},false,'',3);recordTest(n,{...sample,id:'chem',course:'CHEM 121'},false,'',4);
 for(const q of Object.values(n.questions))q.issueIds=['issue'];const issue={id:'issue',course:'BIOL 112'};assert.deepEqual([issueStats(n,issue).count,issueStats(n,issue).misses],[2,3]);
});
test('event retries and backup imports do not inflate notebook counts or pollute active tests',()=>{
 const a=emptyStudy();recordTest(a.notebook,sample,false,'Amide',1);const events=changesToEvents(emptyStudy(),a).map((e,i)=>({...e,seq:i+1}));
 const db=projectStudy([],events.concat(events),events);assert.equal(Object.keys(db.notebook.attempts).length,1);assert.deepEqual(db.activeTests,{});assert.deepEqual(changesToEvents(db,db),[]);
 const imported=mergeNotebooks(db.notebook,db.notebook);assert.equal(Object.keys(imported.attempts).length,1);
 const tombstone={...events[0],seq:100,event_id:'old-client',payload:null};assert.equal(Object.keys(projectStudy([],events.concat(tombstone)).notebook.questions).length,1);
});
test('normalization rejects invalid notebook records and is safe for old backups',()=>{
 assert.deepEqual(normalizeNotebook(null),emptyNotebook());assert.deepEqual(normalizeNotebook({questions:{bad:{course:'OTHER',prompt:'p',chapter:'c'}}}),emptyNotebook());
});
test('image-only questions, custom chapters and tags survive cloud replay and backup merge',()=>{
 const db=emptyStudy(),image={path:'11111111-1111-4111-8111-111111111111/22222222-2222-4222-8222-222222222222.png',name:'question.png',type:'image/png',size:1024};
 db.notebook.questions.photo={...sample,id:'photo',prompt:'',concepts:['Ion–PD','完整电荷与部分电荷'],issueIds:[],images:[image],updatedAt:2};
 db.notebook.chapters.custom={id:'custom',course:sample.course,title:'MLM1 test',updatedAt:2};
 const events=changesToEvents(emptyStudy(),db).map((e,i)=>({...e,seq:i+1}));
 const restored=projectStudy([],events);assert.deepEqual(restored.notebook.questions.photo.images,[image]);assert.equal(restored.notebook.chapters.custom.title,'MLM1 test');
 assert.deepEqual(mergeNotebooks(emptyNotebook(),restored.notebook),restored.notebook);
 assert.equal(Object.keys(restored.activeTests).length,0);
});
