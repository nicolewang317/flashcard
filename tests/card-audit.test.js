import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DECKS, TESTS, CHEM_SHAPES } from '../src/library.js';
import { FIGURES } from '../src/diagrams.js';
import { CARD_REDIRECTS, RETIRED_CARD_IDS, canonicalCardId, remapProgress } from '../src/card-migrations.js';
import { emptyRecord, emptyStudy, projectStudy, changesToEvents } from '../src/sync-core.js';
const audit=JSON.parse(readFileSync(new URL('../docs/card-audit-decisions.json',import.meta.url)));
const cards=DECKS.flatMap(d=>d.cards),ids=new Set(cards.map(c=>c.id));
const [alias,target]=Object.entries(CARD_REDIRECTS)[0];
const review=(id,entity,seq,ok,at)=>({event_id:id,entity,seq,kind:'review',occurred_at:new Date(at).toISOString(),payload:{at,ok,source:'Swipe review',chosen:ok?'Remembered':'Forgot',expected:'Old answer'}});
const favorite=(id,entity,seq,value)=>({event_id:id,entity,seq,kind:'favorite',occurred_at:new Date(seq*1000).toISOString(),payload:value});

test('all 516 original cards have a decision; all merge targets survive with stable IDs',()=>{
 assert.equal(Object.keys(audit).length,516);assert.equal(cards.length,276);assert.equal(ids.size,276);
 const counts={};for(const d of Object.values(audit)){
  counts[d.action]=(counts[d.action]||0)+1;
  if(d.action==='合并'){assert.ok(audit[d.target].after);assert.equal(CARD_REDIRECTS[d.id],audit[d.target].id);assert.ok(!ids.has(d.id));}
  else if(d.action==='删除'){assert.ok(RETIRED_CARD_IDS.has(d.id));assert.ok(!ids.has(d.id));}
  else {assert.ok(ids.has(d.id));assert.equal(d.after.id,d.id);}
 }
 assert.deepEqual(counts,{'保留':151,'重写':75,'合并':270,'删除':20});
 assert.equal(Object.keys(CARD_REDIRECTS).length,270);
 for(const value of Object.values(CARD_REDIRECTS)){assert.ok(ids.has(value));assert.ok(!CARD_REDIRECTS[value]);}
});
test('all scored questions and diagrams resolve; no retired questions survive',()=>{
 const figures=new Set([...Object.keys(FIGURES),...CHEM_SHAPES.map(s=>'v-'+s.key)]);
 assert.equal(TESTS.length,163);assert.equal(new Set(TESTS.map(q=>q.id)).size,163);
 for(const [i,d]of DECKS.entries()){
  assert.ok(TESTS.some(q=>q.deck===i));
  for(const c of d.cards){assert.equal(c.deck,i);assert.ok(c.front&&c.prompt&&c.back);if(c.figure)assert.ok(figures.has(c.figure),c.figure);}
 }
 for(const q of TESTS){assert.ok(ids.has(q.cardId));assert.equal(new Set(q.options).size,4);assert.equal(q.deck,cards.find(c=>c.id===q.cardId).deck);if(q.figure)assert.ok(figures.has(q.figure));}
});
test('all text exports match deck sizes and combined course totals',()=>{
 for(const d of DECKS){const lines=readFileSync(new URL('../public/'+d.file,import.meta.url),'utf8').trim().split('\n');assert.equal(lines.length,d.cards.length);assert.ok(lines.every(l=>l.split('\t').length===2));}
 for(const[course,file]of [['BIOL 112','BIOL112_Unit2_Master.txt'],['CHEM 121','CHEM121_VSEPR_Master.txt']])assert.equal(readFileSync(new URL('../public/'+file,import.meta.url),'utf8').trim().split('\n').length,DECKS.filter(d=>d.course===course&&(course!=='BIOL 112'||d.unit==='Unit 2')).flatMap(d=>d.cards).length);
});
test('recognition and biological mechanism remain separate; glycosidic fronts conceal alpha/beta answer labels',()=>{
 for(const key of ['1.1','1.69','1.75','1.77','1.54','1.53','1.67','1.88','1.89','1.96','1.99','1.104','1.124','1.125'])assert.ok(audit[key].after,key);
 for(const figure of ['glyco16','glycob14']){assert.doesNotMatch(FIGURES[figure].draw(false),/>[αβ]</);assert.match(FIGURES[figure].draw(true),/>[αβ]</);}
 for(const c of DECKS[7].cards)assert.doesNotMatch(c.prompt,/AX[₂₃₄₅₆₇]/);
});
test('guest snapshot merges favorites, unresolved mistakes and history once, without mutating the original',()=>{
 const old={...emptyRecord(),status:'practice',star:true,misses:2,history:[{at:10,ok:false,source:'test'}],lastWrong:{at:10,ok:false}};
 const canonical={...emptyRecord(),status:'known',streak:1,misses:1,history:[{at:20,ok:true,source:'swipe'}]};
 const raw={[alias]:old,[target]:canonical};const merged=remapProgress(raw);
 assert.equal(merged[target].misses,3);assert.equal(merged[target].star,true);assert.equal(merged[target].status,'practice');assert.equal(merged[target].history.length,2);assert.ok(!merged[alias]);
 assert.deepEqual(remapProgress(merged),merged);assert.equal(old.misses,2);assert.ok(raw[alias]);
});
test('immutable cloud reviews from both IDs remain distinct; retry event IDs do not inflate mistakes',()=>{
 const a=review('a',alias,1,false,10),b=review('b',target,2,false,20);
 const data=projectStudy([],[a,b,a],[b]);assert.equal(data.progress[target].misses,2);assert.equal(data.progress[target].history.length,2);assert.ok(!data.progress[alias]);assert.equal(a.entity,alias);
});
test('new unstar and successful review override earlier alias events after reload and acknowledgment',()=>{
 const events=[favorite('old',alias,1,true),review('miss',alias,2,false,20)];
 const pending=[favorite('unstar',target,3,false),review('pass',target,4,true,40)];
 const offline=projectStudy([],events,pending),synced=projectStudy([],[...events,...pending]);
 assert.deepEqual(offline,synced);assert.equal(synced.progress[target].star,false);assert.equal(synced.progress[target].status,'known');assert.equal(synced.progress[target].misses,1);
 assert.deepEqual(changesToEvents(synced,synced),[]);
});
test('retired progress and completed test history are retained, not transferred to unrelated concepts',()=>{
 const retired=[...RETIRED_CARD_IDS][0];const history={course:'BIOL 112',at:100,total:5,correct:3};
 const result={event_id:'result',seq:2,entity:'BIOL 112:100',kind:'result',payload:history,occurred_at:new Date(100).toISOString()};
 const db=projectStudy([{card_id:retired,value:{...emptyRecord(),star:true,misses:4}}],[result]);
 assert.equal(db.progress[retired].misses,4);assert.equal(db.progress[retired].star,true);assert.ok(!ids.has(retired));assert.deepEqual(db.testHistory,[history]);
});
