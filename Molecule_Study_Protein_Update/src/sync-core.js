// Pure, testable projection of immutable cloud events into the existing study UI.
import { canonicalCardId, remapProgress } from './card-migrations.js';
export const emptyStudy = () => ({version:2,progress:{},activeTests:{},testHistory:[],settings:{deck:0}});
export const emptyRecord = () => ({status:'new',due:0,streak:0,star:false,misses:0,history:[],lastWrong:null});
export const copy = value => structuredClone(value);
export const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
export const historyKey = h => JSON.stringify([h.at,h.ok,h.source,h.chosen,h.expected]);
export const resultKey = h => `${h.course}:${h.at}`;
export function projectStudy(baselines,events,pending=[]){
 const db=emptyStudy();
 for(const row of baselines)db.progress[row.card_id]={...emptyRecord(),...copy(row.value)};
 db.progress=remapProgress(db.progress);
 const byId=new Map(events.map(e=>[e.event_id,e]));
 for(const e of pending)if(!byId.has(e.event_id))byId.set(e.event_id,{...e,seq:Number.MAX_SAFE_INTEGER});
 const ordered=[...byId.values()].sort((a,b)=>(a.seq-b.seq)||a.occurred_at.localeCompare(b.occurred_at)||a.event_id.localeCompare(b.event_id));
 const reviews=new Map(),results=new Map();
 for(const raw of ordered){
  const e=['review','favorite'].includes(raw.kind)?{...raw,entity:canonicalCardId(raw.entity)}:raw;
  if(e.kind==='review'){
   if(typeof e.payload?.ok!=='boolean'||!Number.isFinite(e.payload.at))continue;
   if(!reviews.has(e.entity))reviews.set(e.entity,[]);reviews.get(e.entity).push(e);
  }else if(e.kind==='favorite'&&typeof e.payload==='boolean'){
   db.progress[e.entity]??=emptyRecord();db.progress[e.entity].star=e.payload;
  }else if(e.kind==='test'){
   if(e.payload===null)delete db.activeTests[e.entity];else db.activeTests[e.entity]=copy(e.payload);
  }else if(e.kind==='result')results.set(e.entity,copy(e.payload));
 }
 for(const[cardId,items]of reviews){
  const r=db.progress[cardId]??emptyRecord(),star=r.star;
  // Event IDs deduplicate retries. Every distinct review contributes to the history.
  items.sort((a,b)=>a.payload.at-b.payload.at||a.seq-b.seq||a.event_id.localeCompare(b.event_id));
  for(const e of items){const h=copy(e.payload);r.streak=h.ok?Math.min(r.streak+1,1000):0;r.status=h.ok?'known':'practice';r.due=h.at+(h.ok?[1,3,7,14,30][Math.min(r.streak-1,4)]*86400000:600000);r.misses+=h.ok?0:1;r.history.push(h);if(!h.ok)r.lastWrong=h}
  r.star=star;r.history=r.history.slice(-40);db.progress[cardId]=r;
 }
 db.testHistory=[...results.values()].sort((a,b)=>a.at-b.at).slice(-60);return db;
}
export function changesToEvents(previous,next,makeId=()=>crypto.randomUUID(),now=()=>Date.now()){
 const events=[];
 const add=(kind,entity,payload)=>events.push({event_id:makeId(),kind,entity,payload:copy(payload),occurred_at:new Date(now()).toISOString()});
 for(const[id,r]of Object.entries(next.progress||{})){
  const before=previous.progress[id]||emptyRecord();
  const seen=new Set(before.history.map(historyKey));
  for(const h of r.history)if(!seen.has(historyKey(h)))add('review',id,h);
  if(before.star!==r.star)add('favorite',id,r.star);
 }
 for(const course of new Set([...Object.keys(previous.activeTests),...Object.keys(next.activeTests)])){
  if(!same(previous.activeTests[course],next.activeTests[course]))add('test',course,next.activeTests[course]||null);
 }
 const oldResults=new Map(previous.testHistory.map(h=>[resultKey(h),h]));
 for(const h of next.testHistory)if(!same(oldResults.get(resultKey(h)),h))add('result',resultKey(h),h);
 return events;
}
