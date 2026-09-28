import test from 'node:test';
import assert from 'node:assert/strict';
import { projectStudy,changesToEvents,emptyStudy,emptyRecord,copy } from '../src/sync-core.js';
import { CloudSync } from '../src/cloud-sync.js';

const review=(id,seq,ok=false,at=1000,entity='card1')=>({event_id:id,seq,kind:'review',entity,occurred_at:new Date(at).toISOString(),payload:{at,ok,source:'Swipe review',chosen:ok?'Remembered':'Forgot',expected:'Answer'}});
const event=(id,seq,kind,entity,payload)=>({event_id:id,seq,kind,entity,payload,occurred_at:new Date(seq*1000).toISOString()});

test('two devices keep both reviews of the same card and retry IDs deduplicate',()=>{
 const a=review('a',1,false,1000),b=review('b',2,false,2000);const db=projectStudy([],[a,b,a],[b]);
 assert.equal(db.progress.card1.misses,2);assert.equal(db.progress.card1.history.length,2);assert.equal(db.progress.card1.lastWrong.at,2000);
});
test('favorite changes do not overwrite reviews; removing a star synchronizes',()=>{
 const db=projectStudy([],[event('star1',1,'favorite','card1',true),review('r1',2),event('star2',3,'favorite','card1',false)]);
 assert.equal(db.progress.card1.star,false);assert.equal(db.progress.card1.misses,1);
});
test('a remembered review resolves the active wrong flag but preserves history',()=>{
 const db=projectStudy([],[review('a',1),review('b',2,true,2000)]);
 assert.equal(db.progress.card1.status,'known');assert.equal(db.progress.card1.misses,1);assert.equal(db.progress.card1.due,2000+86400000);
});
test('pending offline edits survive a cloud pull and event acknowledgement',()=>{
 const pending=event('mine',null,'favorite','card1',true);
 assert.equal(projectStudy([],[event('remote',8,'favorite','card1',false)],[pending]).progress.card1.star,true);
 assert.equal(projectStudy([],[{...pending,seq:9}],[pending]).progress.card1.star,true);
});
test('legacy import preserves misses, streak and favorites without mutating its input',()=>{
 const old={...emptyRecord(),star:true,misses:12,status:'practice',due:100,history:[]};const baseline=[{card_id:'card1',value:old}];
 const db=projectStudy(baseline,[review('a',1,true,1000)]);
 assert.equal(db.progress.card1.misses,12);assert.equal(db.progress.card1.star,true);assert.equal(db.progress.card1.streak,1);assert.equal(old.status,'practice');
});
test('test reset is a tombstone and a repeated result does not duplicate history',()=>{
 const t={items:[],pos:0};const r={course:'CHEM 121',at:1000,total:5,correct:4};
 const db=projectStudy([],[event('t1',1,'test','CHEM 121',t),event('r1',2,'result','CHEM 121:1000',r),event('r2',3,'result','CHEM 121:1000',r),event('t2',4,'test','CHEM 121',null)]);
 assert.equal(db.activeTests['CHEM 121'],undefined);assert.equal(db.testHistory.length,1);
});
test('only changed fields are queued; cloud hydration cannot re-upload whole progress',()=>{
 const prev=emptyStudy();prev.progress.card1={...emptyRecord(),star:true};const next=copy(prev);next.progress.card1.star=false;
 const events=changesToEvents(prev,next,()=> 'id',()=>1000);
 assert.equal(events.length,1);assert.equal(events[0].kind,'favorite');assert.equal(events[0].payload,false);assert.deepEqual(changesToEvents(next,next),[]);
});

function harness(){
 const backend={rows:[],baselines:[],seq:0,offline:false};
 const storage={map:new Map(),getItem(k){return this.map.get(k)||null},setItem(k,v){this.map.set(k,v)}};
 function device(userId){let ui=emptyStudy();const statuses=[];
 const client={from(table){const filters=[];let lo=0,hi=Infinity;
  const q={select(){return q},eq(k,v){filters.push(r=>r[k]===v);return q},gt(k,v){filters.push(r=>r[k]>v);return q},order(){return q},range(a,b){lo=a;hi=b+1;return q},limit(n){hi=n;return q},then(resolve){const rows=table==='study_events'?backend.rows:backend.baselines;return Promise.resolve(backend.offline?{error:{message:'Offline'}}:{data:copy(rows.filter(r=>filters.every(f=>f(r))).slice(lo,hi))}).then(resolve)}};return q},
  async rpc(name,{items}){if(backend.offline)return {error:{message:'Offline'}};
   if(name==='append_study_events'){const added=[];for(const row of items){if(!backend.rows.some(r=>r.user_id===userId&&r.event_id===row.event_id)){const e={...copy(row),user_id:userId,seq:++backend.seq};backend.rows.push(e);added.push(e)}}return {data:added}}
   if(name==='import_study_baselines'){for(const row of items)if(!backend.baselines.some(r=>r.user_id===userId&&r.card_id===row.card_id)&&!backend.rows.some(r=>r.user_id===userId&&r.entity===row.card_id))backend.baselines.push({...row,user_id:userId});return {data:[]}}
  }};
 const engine=new CloudSync({client,storage,onData:d=>{ui=copy(d)},onStatus:s=>statuses.push(s),readUI:()=>ui});
 return {engine,statuses,get ui(){return ui},set ui(v){ui=v}};
 }
 return {backend,storage,device};
}
test('two signed-in devices converge without overwriting different cards',async()=>{
 const h=harness(),a=h.device('userA'),b=h.device('userA');await a.engine.setUser({id:'userA'});await b.engine.setUser({id:'userA'});
 a.ui.progress.card1={...emptyRecord(),star:true};a.engine.capture(a.ui);await a.engine.sync();
 b.ui.progress.card2={...emptyRecord(),star:true};b.engine.capture(b.ui);await b.engine.sync();await a.engine.sync();
 assert.equal(a.ui.progress.card1.star,true);assert.equal(a.ui.progress.card2.star,true);assert.deepEqual(a.ui.progress,b.ui.progress);clearTimeout(a.engine.timer);clearTimeout(b.engine.timer);
});
test('offline edits survive reload and upload once after reconnect',async()=>{
 const h=harness(),a=h.device('userA');await a.engine.setUser({id:'userA'});h.backend.offline=true;
 a.ui.progress.card1={...emptyRecord(),star:true};a.engine.capture(a.ui);await a.engine.sync();assert.equal(a.engine.pending.length,1);
 const restarted=h.device('userA');await restarted.engine.setUser({id:'userA'});assert.equal(restarted.ui.progress.card1.star,true);
 h.backend.offline=false;await restarted.engine.sync();await restarted.engine.sync();assert.equal(h.backend.rows.length,1);assert.equal(restarted.engine.pending.length,0);clearTimeout(a.engine.timer);clearTimeout(restarted.engine.timer);
});
test('account data is partitioned and cannot leak into another account',async()=>{
 const h=harness(),a=h.device('userA');await a.engine.setUser({id:'userA'});a.ui.progress.card1={...emptyRecord(),star:true};a.engine.capture(a.ui);await a.engine.sync();
 await a.engine.setUser(null);const b=h.device('userB');await b.engine.setUser({id:'userB'});assert.deepEqual(b.ui.progress,{});assert.equal(b.engine.pending.length,0);clearTimeout(a.engine.timer);
});
test('legacy backup import fills missing cards and keeps existing cloud progress',async()=>{
 const h=harness(),a=h.device('userA');await a.engine.setUser({id:'userA'});a.ui.progress.card1={...emptyRecord(),star:true};a.engine.capture(a.ui);await a.engine.sync();
 const imported=emptyStudy();imported.progress.card1={...emptyRecord(),star:false};imported.progress.card2={...emptyRecord(),misses:4,status:'practice'};
 await a.engine.importBackup(imported);assert.equal(a.ui.progress.card1.star,true);assert.equal(a.ui.progress.card2.misses,4);clearTimeout(a.engine.timer);
});
