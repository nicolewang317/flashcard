// One question record, independent review events, and shared cross-chapter issues.
export const emptyNotebook=()=>({questions:{},issues:{},attempts:{}});
const courses=['BIOL 112','CHEM 121'];
const text=(v,n=8000)=>typeof v==='string'?v.slice(0,n):'';
const list=v=>Array.isArray(v)?[...new Set(v.filter(x=>typeof x==='string').map(x=>x.trim().slice(0,150)).filter(Boolean))].slice(0,50):[];
export function normalizeNotebook(raw){
 const n=emptyNotebook();
 for(const type of Object.keys(n))for(const [id,v]of Object.entries(raw?.[type]||{})){
  if(!v||typeof v!=='object'||!courses.includes(v.course)||!/^[-\w:]{1,120}$/.test(id))continue;
  if(type==='questions'&&text(v.prompt)&&text(v.chapter))n.questions[id]={id,course:v.course,chapter:text(v.chapter,150),sourceCardId:text(v.sourceCardId,120),prompt:text(v.prompt),answer:text(v.answer),notes:text(v.notes),reason:text(v.reason,150),concepts:list(v.concepts),issueIds:list(v.issueIds),createdAt:Number(v.createdAt)||0,updatedAt:Number(v.updatedAt)||0};
  if(type==='issues'&&text(v.title))n.issues[id]={id,course:v.course,title:text(v.title,150),summary:text(v.summary),updatedAt:Number(v.updatedAt)||0};
  if(type==='attempts'&&typeof v.ok==='boolean'&&Number.isFinite(v.at)&&text(v.questionId))n.attempts[id]={id,course:v.course,questionId:text(v.questionId,120),ok:v.ok,at:v.at,chosen:text(v.chosen),source:text(v.source,100)};
 }
 return n;
}
export function mergeNotebooks(a,b){const n=normalizeNotebook(a),other=normalizeNotebook(b);for(const type of Object.keys(n))for(const[id,v]of Object.entries(other[type]))if(!n[type][id]||(v.updatedAt||0)>(n[type][id].updatedAt||0))n[type][id]=v;return n}
export function questionStats(n,q,now=Date.now()){
 const events=Object.values(n.attempts).filter(a=>a.questionId===q.id&&a.course===q.course).sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id));
 const last=events.at(-1),misses=events.filter(a=>!a.ok).length;
 const consecutive=events.slice(events.findLastIndex(a=>!a.ok)+1).length;
 const status=!last||!last.ok?'unresolved':misses>=2&&consecutive<2?'reviewing':'mastered';
 return {events,misses,last,status,recent:Math.max(q.updatedAt,last?.at||0),due:status==='unresolved'||status==='reviewing'&&last.at+86400000<=now};
}
export function issueStats(n,issue){const questions=Object.values(n.questions).filter(q=>q.course===issue.course&&q.issueIds.includes(issue.id));return {questions,count:questions.length,misses:questions.reduce((v,q)=>v+questionStats(n,q).misses,0)}}
export function addAttempt(n,q,ok,chosen='',source='复习',at=Date.now(),id=crypto.randomUUID()){n.attempts[id]={id,questionId:q.id,course:q.course,ok,chosen,source,at};return n.attempts[id]}
export function recordTest(n,{id,course,chapter,prompt,answer,concept,sourceCardId=''},ok,chosen,at=Date.now()){
 const key='test:'+id;
 if(ok&&!n.questions[key])return;
 n.questions[key]??={id:key,course,chapter,prompt,answer,sourceCardId,concepts:[concept],issueIds:[],reason:'待分析',notes:'',createdAt:at,updatedAt:at};
 addAttempt(n,n.questions[key],ok,chosen,'Test',at);
}
