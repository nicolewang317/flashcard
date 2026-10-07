import {normalizeImages} from './notebook-media.js';
const text=(v,max)=>typeof v==='string'?v.trim().slice(0,max):'';
export const isCustomId=id=>/^custom-[a-f0-9-]{36}$/.test(id);
export function normalizeCardEdits(raw){
 const edits={};
 for(const [id,v] of Object.entries(raw||{})){
  if(!v||!/^[-\w]{1,100}$/.test(id)||typeof v.deleted!=='boolean')continue;
  const common={id,deleted:v.deleted,updatedAt:Number(v.updatedAt)||0};
  if(!isCustomId(id)){edits[id]=common;continue}
  const front=text(v.front,8000),back=text(v.back,8000),frontImages=normalizeImages(v.frontImages),backImages=normalizeImages(v.backImages);
  if(!text(v.deckKey,200)||(!front&&!frontImages.length)||(!back&&!backImages.length))continue;
  edits[id]={...common,deckKey:text(v.deckKey,200),front,back,concept:text(v.concept,150)||'My flashcard',frontImages,backImages,createdAt:Number(v.createdAt)||common.updatedAt};
 }
 return edits;
}
export function mergeCardEdits(current,incoming){
 const merged=normalizeCardEdits(current);
 for(const[id,v]of Object.entries(normalizeCardEdits(incoming)))if(!merged[id]||v.updatedAt>merged[id].updatedAt)merged[id]=v;
 return merged;
}
export function cardLibrary(base,raw){
 const edits=normalizeCardEdits(raw),decks=base.map(d=>({...d,cards:[...d.cards]}));
 for(const v of Object.values(edits))if(isCustomId(v.id)){
  const deck=decks.findIndex(d=>d.file===v.deckKey);if(deck<0)continue;
  decks[deck].cards.push({...v,deck,prompt:v.front,kind:'My flashcard',figure:'',sourceLabel:'Your flashcard'});
 }
 const all=decks.flatMap(d=>d.cards),map=new Map(all.map(c=>[c.id,c]));
 const deleted=all.filter(c=>edits[c.id]?.deleted);
 for(const d of decks)d.cards=d.cards.filter(c=>!edits[c.id]?.deleted);
 return {decks,map,deleted,all:decks.flatMap(d=>d.cards)};
}
