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

test('chapter overview pins and approved structure references survive normalization and repeated import',()=>{
 const n=emptyNotebook();recordTest(n,{...sample,id:'structure'},false,'',1);const q=n.questions['test:structure'];q.illustration='chem-ch2-boron';
 n.issues.pinned={id:'pinned',course:sample.course,title:'Octet priority',summary:'原文保留',pinnedChapters:['Chapter 2','Chapter 2'],updatedAt:2};
 const normalized=normalizeNotebook(n);assert.equal(normalized.questions[q.id].illustration,'chem-ch2-boron');assert.deepEqual(normalized.issues.pinned.pinnedChapters,['Chapter 2']);
 assert.deepEqual(mergeNotebooks(normalized,normalized),normalized);
 q.illustration='../../private';assert.equal(normalizeNotebook(n).questions[q.id].illustration,'');
});

test('one-question review keeps per-attempt reflections through sync, retries and backup imports',async()=>{
 const {recordReview}=await import('../src/notebook-core.js');const db=emptyStudy();
 recordTest(db.notebook,{...sample,originalFigure:'ester',options:['Ether','Ester','Amide','Thioester']},false,'Ether',1);
 const q=db.notebook.questions['test:one'];q.notes='Original long notes stay unchanged.';q.reminder='Check the carbonyl. Then inspect the bonded atom.';q.source='Original worksheet';
 const first={questionId:q.id,course:q.course,ok:false,reflection:'I missed the carbonyl.',id:'review-1',at:2};
 recordReview(db.notebook,first);recordReview(db.notebook,{...first,at:9});
 recordReview(db.notebook,{...first,ok:true,reflection:'Now I can distinguish O from N.',id:'review-2',at:3});
 const events=changesToEvents(emptyStudy(),db).map((e,i)=>({...e,seq:i+1}));const restored=projectStudy([],events.concat(events));
 const merged=mergeNotebooks(restored.notebook,restored.notebook);const stats=questionStats(merged,merged.questions[q.id],4);
 assert.equal(stats.events.length,3);assert.equal(stats.misses,2);assert.equal(merged.attempts['review-1'].at,2);assert.equal(merged.attempts['review-1'].reflection,first.reflection);assert.equal(merged.attempts['review-2'].reflection,'Now I can distinguish O from N.');
 assert.equal(merged.questions[q.id].notes,q.notes);assert.equal(merged.questions[q.id].source,q.source);assert.equal(merged.questions[q.id].reminder,q.reminder);assert.deepEqual(merged.questions[q.id].options,['Ether','Ester','Amide','Thioester']);assert.equal(merged.questions[q.id].originalFigure,'ester');
 assert.throws(()=>recordReview(merged,{...first,course:'CHEM 121',id:'wrong-owner-course'}));assert.equal(Object.keys(merged.questions).length,1);
});
test('key reminders show at most two sentences without changing stored long notes',async()=>{
 const {shortReminder}=await import('../src/notebook-core.js');assert.equal(shortReminder('先数电子。再检查八隅体。最后优化电荷。'),'先数电子。再检查八隅体。');assert.equal(shortReminder('Count electrons. Check the octet. Compare charges.'),'Count electrons. Check the octet.');assert.equal(shortReminder(''),'');
});

test('imported questions remain unreviewed without fabricated misses and preserve all five source fields',()=>{
 const db=emptyStudy(),original={Question:'Original prompt','Correct answer':'Original answer','My wrong answer':'Reported original error','Key concept for this question':'Original concept',"What I didn't understand":'Original uncertainty'};
 const q={...sample,id:'imported',concepts:['Resonance','Formal charge'],issueIds:[],images:[],sourceFields:original,createdAt:1,updatedAt:1};db.notebook.questions[q.id]=q;
 let stats=questionStats(db.notebook,q);assert.equal(stats.status,'unreviewed');assert.equal(stats.due,true);assert.equal(stats.misses,0);assert.equal(stats.events.length,0);
 const events=changesToEvents(emptyStudy(),db).map((e,i)=>({...e,seq:i+1}));const restored=projectStudy([],events);assert.deepEqual(restored.notebook.questions[q.id].sourceFields,original);assert.deepEqual(mergeNotebooks(restored.notebook,restored.notebook).questions[q.id].sourceFields,original);
 addAttempt(db.notebook,q,false);stats=questionStats(db.notebook,q);assert.equal(stats.status,'unresolved');assert.equal(stats.misses,1);
});
