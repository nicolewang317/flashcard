import {esc} from './diagrams.js';
import {validateImage} from './notebook-media.js';
import {isCustomId} from './custom-cards.js';
import './card-manager.css';
export function createCardManager({getData,getDecks,getDeck,getOwner,getMedia,getCard,getDeleted,save,onChange,onStudy,toast}){
 const dialog=document.createElement('dialog');dialog.className='card-editor';dialog.setAttribute('aria-label','Flashcard manager');document.body.append(dialog);
 let owner=null,version=0,busy=false;
 function accountChanged(){version++;busy=false;dialog.close()}
 function deletedCards(){
  owner=getOwner();const items=getDeleted().filter(c=>c.deck===getDeck());
  dialog.innerHTML=`<h2>Deleted cards</h2><p>Restore a card with its learning history and favorites.</p>${items.length?items.map(c=>`<div class="deleted-card"><p>${esc(c.front||'Image flashcard')}</p><button class="secondary" data-restore="${c.id}">Restore</button></div>`).join(''):'<p>No deleted cards in this set.</p>'}<button type="button" class="secondary" data-close>Close</button><p role="status"></p>`;
  dialog.querySelector('[data-close]').onclick=()=>dialog.close();
  dialog.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{if(owner!==getOwner())return accountChanged();const v=getData().cardEdits[b.dataset.restore];const old=structuredClone(v);v.deleted=false;v.updatedAt=Date.now();if(!save()){getData().cardEdits[b.dataset.restore]=old;dialog.querySelector('[role=status]').textContent='Could not save. Please try again.';return}onChange();deletedCards();toast('Card restored')});
  if(!dialog.open)dialog.showModal();
 }
 function remove(id){
  const c=getCard(id);if(!c)return;
  const db=getData(),old=db.cardEdits[id];db.cardEdits[id]={...old,id,deleted:true,updatedAt:Date.now()};
  if(!save()){if(old)db.cardEdits[id]=old;else delete db.cardEdits[id];toast('Could not save. Please try again.');return}
  onChange();toast('Card deleted. Restore it from Deleted cards.');
 }
 function add(){
  owner=getOwner();const ticket=++version;busy=false;let closed=false;const staged={front:[],back:[]};
  dialog.innerHTML=`<form><h2>Add flashcard</h2><label>Set<select name="deck" required>${getDecks().map((d,i)=>`<option value="${i}" ${i===getDeck()?'selected':''}>${esc(d.course+' / '+d.title)}</option>`).join('')}</select></label><label>Knowledge point (optional)<input name="concept" maxlength="150" placeholder="For example: Meiosis II"></label>${['front','back'].map(side=>`<section class="card-editor-side" data-side="${side}"><label>${side==='front'?'Front · Question':'Back · Answer'}<textarea name="${side}" rows="3" maxlength="8000" placeholder="${side==='front'?'What do you want to recall?':'Write a clear, concise answer.'}"></textarea></label><label class="image-picker">Add ${side} images<input name="${side}Images" type="file" accept="image/png,image/jpeg,image/webp,image/gif" multiple></label><p class="hint">Paste or drop images here. PNG, JPEG, WebP or GIF; up to 5 MB each.</p><div class="card-image-previews" data-previews="${side}"></div></section>`).join('')}<p class="hint">Up to 6 images per card. Each side needs text or an image. Sign in to sync cards and images across devices.</p><p role="status" class="editor-message" aria-live="polite"></p><div class="dialog-actions"><button class="primary" type="submit">Save flashcard</button><button class="secondary" type="button" data-cancel>Cancel</button></div></form>`;
  const form=dialog.querySelector('form'),message=form.querySelector('[role=status]');
  function lock(value){busy=value;form.querySelectorAll('input,textarea,select,button').forEach(el=>el.disabled=value)}
  function preview(side){const root=form.querySelector(`[data-previews="${side}"]`);root.innerHTML=staged[side].map((item,i)=>`<figure><img src="${esc(item.url)}" alt="${side} image ${i+1}"><figcaption>${esc(item.file.name)}</figcaption><button type="button" class="quiet" data-remove="${i}">Remove image</button></figure>`).join('');root.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{URL.revokeObjectURL(staged[side].splice(Number(b.dataset.remove),1)[0].url);preview(side)})}
  async function images(side,files){
   if(busy)return;const added=[];lock(true);message.textContent='';
   try{const incoming=Array.from(files);if(staged.front.length+staged.back.length+incoming.length>6)throw Error('Use at most 6 images per card.');for(const file of incoming){validateImage(file);const bitmap=await createImageBitmap(file);bitmap.close();added.push({file,url:URL.createObjectURL(file)})}if(closed||ticket!==version){added.forEach(x=>URL.revokeObjectURL(x.url));return}staged[side].push(...added);preview(side)}catch(e){added.forEach(x=>URL.revokeObjectURL(x.url));message.textContent=e.message||'Could not read this image.'}finally{if(ticket===version){lock(false);form.elements[side+'Images'].value=''}}
  }
  for(const side of ['front','back']){form.elements[side+'Images'].onchange=e=>images(side,e.target.files);const section=form.querySelector(`[data-side="${side}"]`);section.onpaste=e=>{if(e.clipboardData?.files.length){e.preventDefault();images(side,e.clipboardData.files)}};section.ondragover=e=>e.preventDefault();section.ondrop=e=>{e.preventDefault();images(side,e.dataTransfer.files)}}
  form.querySelector('[data-cancel]').onclick=()=>{if(!busy)dialog.close()};dialog.oncancel=e=>{if(busy)e.preventDefault()};dialog.onclose=()=>{closed=true;Object.values(staged).flat().forEach(x=>URL.revokeObjectURL(x.url))};
  const id='custom-'+crypto.randomUUID();
  form.onsubmit=async e=>{
   e.preventDefault();if(busy)return;if(owner!==getOwner())return accountChanged();
   const front=form.elements.front.value.trim(),back=form.elements.back.value.trim(),concept=form.elements.concept.value.trim(),deck=Number(form.elements.deck.value);
   if((!front&&!staged.front.length)||(!back&&!staged.back.length)){message.textContent='Add text or an image to both the front and back.';return}
   lock(true);message.textContent='Saving flashcard…';
   try{
    const uploaded={};for(const side of ['front','back']){uploaded[side+'Images']=[];for(const item of staged[side]){if(ticket!==version||getOwner()!==owner)throw Error('Account changed. Please reopen the editor.');item.image??=await getMedia().upload(item.file);uploaded[side+'Images'].push(item.image)}}
    if(ticket!==version||getOwner()!==owner)throw Error('Account changed. Please reopen the editor.');
    const at=Date.now(),db=getData();db.cardEdits[id]={id,deckKey:getDecks()[deck].file,front,back,concept:concept||'My flashcard',...uploaded,deleted:false,createdAt:at,updatedAt:at};
    if(!save()){delete db.cardEdits[id];throw Error('Could not save. Keep this editor open and try again.')}
    dialog.close();onChange();onStudy(id);toast('Flashcard added');
   }catch(error){if(ticket===version)message.textContent=error.message||'Could not save. Please try again.'}finally{if(ticket===version)lock(false)}
  };
  dialog.showModal();
 }
 function imageHTML(c,side){return (c[side+'Images']||[]).length?`<div class="flashcard-images">${c[side+'Images'].map((img,i)=>`<figure data-card-image="${c.id}" data-side="${side}" data-index="${i}"><img alt="${side==='front'?'Question':'Answer'} image ${i+1}"><button type="button" class="quiet" data-view-card-image>Loading image…</button></figure>`).join('')}</div>`:''}
 function loadImages(root){const account=getOwner();root.querySelectorAll('[data-card-image]').forEach(el=>{const c=getCard(el.dataset.cardImage),img=c?.[el.dataset.side+'Images']?.[Number(el.dataset.index)],button=el.querySelector('button');if(!img)return;const load=async()=>{try{const url=await getMedia().url(img);if(!el.isConnected||getOwner()!==account)return;el.querySelector('img').src=url;button.textContent='View image';button.onclick=()=>{const viewer=document.createElement('dialog');viewer.className='notebook-image-viewer';viewer.innerHTML=`<button type="button" class="secondary">Close image</button><img src="${esc(url)}" alt="Flashcard image">`;document.body.append(viewer);viewer.querySelector('button').onclick=()=>viewer.close();viewer.onclose=()=>viewer.remove();viewer.showModal()}}catch(e){if(el.isConnected){button.textContent=e.message+' Click to retry.';button.onclick=load}}};load()})}
 return {add,remove,deletedCards,imageHTML,loadImages,accountChanged,isOpen:()=>dialog.open};
}
