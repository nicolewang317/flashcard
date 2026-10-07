import {mergeCardEdits} from './custom-cards.js';
import {mergeNotebooks} from './notebook-core.js';
import { emptyStudy,copy,same,projectStudy,changesToEvents } from './sync-core.js';
import { canonicalCardId } from './card-migrations.js';

export class CloudSync {
 constructor({client,storage,onData,onStatus,readUI}){
  Object.assign(this,{client,storage,onData,onStatus,readUI});this.user=null;this.generation=0;this.timer=null;this.inflight=null;this.reset();
 }
 reset(){this.baselines=[];this.events=new Map();this.pending=[];this.cursor=0;this.previous=emptyStudy();this.lastPublished=null;this.cacheOK=true}
 key(){return 'molecule-study-account-v1:'+this.user.id}
 persist(){if(!this.user)return;this.compact();try{this.storage.setItem(this.key(),JSON.stringify({baselines:this.baselines,events:[...this.events.values()],pending:this.pending,cursor:this.cursor}));this.cacheOK=true}catch{this.cacheOK=false;this.onStatus({state:'error',message:'Device storage is full. Keep this page open until changes sync.'})}}
 compact(){
  const latest=new Map(),keep=new Map();
  for(const e of this.events.values())if(e.kind==='test'&&e.entity.startsWith('notebook:')&&e.payload===null)continue;else if(e.kind==='review')keep.set(e.event_id,e);else{const k=e.kind+':'+e.entity;if(!latest.has(k)||latest.get(k).seq<e.seq)latest.set(k,e)}
  for(const e of latest.values())keep.set(e.event_id,e);this.events=keep;
 }
 async setUser(user){
  if(this.user?.id===user?.id)return;
  this.generation++;clearTimeout(this.timer);this.user=user;this.reset();
  if(!user)return;
  try{const c=JSON.parse(this.storage.getItem(this.key())||'{}');this.baselines=Array.isArray(c.baselines)?c.baselines:[];this.events=new Map((c.events||[]).map(e=>[e.event_id,e]));this.pending=Array.isArray(c.pending)?c.pending:[];this.cursor=Number(c.cursor)||0}catch{this.onStatus({state:'error',message:'Could not read this device’s sync cache. Your cloud data will be loaded.'})}
  this.publish(true);await this.sync();
 }
 data(){return projectStudy(this.baselines,[...this.events.values()],this.pending)}
 publish(force=false){const data=this.data();if(force||!same(data,this.lastPublished)){this.onData(data);this.lastPublished=copy(data)}this.previous=copy(this.readUI())}
 capture(data){
  if(!this.user)return;
  const changes=changesToEvents(this.previous,data);this.previous=copy(data);
  if(!changes.length)return;
  for(const e of changes){if(['favorite','test'].includes(e.kind))this.pending=this.pending.filter(p=>p.kind!==e.kind||p.entity!==e.entity);this.pending.push(e)}this.persist();this.onStatus({state:'pending',message:`${this.pending.length} change${this.pending.length===1?'':'s'} waiting to sync`});clearTimeout(this.timer);this.timer=setTimeout(()=>this.sync(),500);
 }
 async allBaselines(uid){let rows=[];for(let offset=0;;offset+=500){const {data,error}=await this.client.from('study_baselines').select('card_id,value').eq('user_id',uid).order('card_id').range(offset,offset+499);if(error)throw error;rows.push(...data);if(data.length<500)return rows}}
 async sync(){
  if(!this.user)return;
  if(this.inflight){await this.inflight;if(this.user)return this.sync();return}
  const generation=this.generation,uid=this.user.id;
  this.inflight=(async()=>{
   try{
    this.onStatus({state:'syncing',message:'Syncing…'});
    // Load cloud state first. The outbox remains visible and is never overwritten by a pull.
    const baselines=await this.allBaselines(uid);if(generation!==this.generation)return;this.baselines=baselines;
    for(;;){const {data,error}=await this.client.from('study_events').select('seq,event_id,kind,entity,payload,occurred_at').eq('user_id',uid).gt('seq',this.cursor).order('seq').limit(500);if(error)throw error;if(generation!==this.generation)return;for(const row of data){this.events.set(row.event_id,row);this.cursor=Math.max(this.cursor,Number(row.seq))}if(data.length<500)break}
    // Each batch is atomic and idempotent. Concurrent edits created during a request stay queued.
    while(this.pending.length){const batch=this.pending.slice(0,100);const {data,error}=await this.client.rpc('append_study_events',{items:batch});if(error)throw error;if(generation!==this.generation)return;for(const row of data||[])this.events.set(row.event_id,row);const acknowledged=new Set(batch.map(e=>e.event_id));this.pending=this.pending.filter(e=>!acknowledged.has(e.event_id));this.persist()}
    if(generation!==this.generation)return;
    this.persist();this.publish();this.onStatus({state:this.cacheOK?'synced':'error',message:this.cacheOK?'All changes synced':'Synced to cloud; device storage is full',at:Date.now()});
   }catch(error){if(generation===this.generation){this.persist();this.onStatus({state:'error',message:'Changes saved on this device. Sync will retry.',detail:error.message||String(error)})}}
  })();
  try{await this.inflight}finally{this.inflight=null}
 }
 async importBackup(data){
  if(!this.user)throw Error('Sign in before importing into your cloud account.');
  await this.sync();if(this.pending.length)throw Error('Finish syncing pending changes before importing.');
  const generation=this.generation;
  // Import only absent concept groups. Keep raw IDs so retrying an old backup
  // remains idempotent in the existing baseline RPC as well as in the UI.
  const existing=this.data().progress;
  const cards=Object.entries(data.progress||{}).filter(([id])=>!existing[canonicalCardId(id)]).map(([card_id,value])=>({card_id,value}));
  for(let i=0;i<cards.length;i+=50){const {error}=await this.client.rpc('import_study_baselines',{items:cards.slice(i,i+50)});if(error)throw error;if(generation!==this.generation)throw Error('Account changed during import.');}
  await this.sync();const current=this.readUI(),merged=copy(current);
  for(const[course,test]of Object.entries(data.activeTests||{}))if(!merged.activeTests[course])merged.activeTests[course]=test;
  merged.cardEdits=mergeCardEdits(merged.cardEdits,data.cardEdits);
  merged.notebook=mergeNotebooks(merged.notebook,data.notebook);
  merged.testHistory.push(...(data.testHistory||[]));this.capture(merged);await this.sync();
 }
 mergeOtherTab(){
  if(!this.user)return;
  try{const c=JSON.parse(this.storage.getItem(this.key())||'{}');for(const e of c.events||[])this.events.set(e.event_id,e);const pending=new Map([...this.pending,...(c.pending||[])].map(e=>[e.event_id,e]));this.pending=[...pending.values()].filter(e=>!this.events.has(e.event_id));for(const row of c.baselines||[])if(!this.baselines.some(b=>b.card_id===row.card_id))this.baselines.push(row);this.publish();this.sync()}catch{}
 }
}
