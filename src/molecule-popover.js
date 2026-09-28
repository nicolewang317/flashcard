import {MOLECULES} from './molecule-glossary.js';
import {esc} from './diagrams.js';
export function createMoleculePopover(){
 const panel=document.createElement('section');
 panel.id='molecule-popover';panel.className='molecule-popover';panel.hidden=true;
 panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','false');panel.setAttribute('aria-labelledby','molecule-title');
 document.body.append(panel);
 let anchor=null,pinned=false,timer,suppressFocus=false;
 function close(restore=false){
  clearTimeout(timer);const old=anchor;
  if(old)old.setAttribute('aria-expanded','false');
  anchor=null;pinned=false;panel.hidden=true;
  if(restore&&old?.isConnected&&!old.closest('[inert]')){suppressFocus=true;old.focus({preventScroll:true});suppressFocus=false;}
 }
 function position(){
  if(!anchor)return;
  if(!anchor.isConnected||anchor.closest('[inert]')){close();return;}
  const r=anchor.getBoundingClientRect(),v=window.visualViewport;
  const left=v?.offsetLeft||0,top=v?.offsetTop||0,width=v?.width||innerWidth,height=v?.height||innerHeight;
  const above=Math.max(0,r.top-top-22),below=Math.max(0,top+height-r.bottom-22);
  panel.style.width=Math.min(430,width-24)+'px';
  // Keep the hovered term exposed, even when the information needs to scroll.
  panel.style.maxHeight=Math.min(height-24,Math.max(above,below))+'px';
  const h=panel.offsetHeight,w=panel.offsetWidth;
  const y=below>=h?r.bottom+10:Math.max(top+12,r.top-10-h);
  panel.style.left=Math.max(left+12,Math.min(r.left+r.width/2-w/2,left+width-w-12))+'px';
  panel.style.top=y+'px';
 }
 function show(button){
  clearTimeout(timer);if(button===anchor){position();return;}
  const m=MOLECULES[button.dataset.molecule];if(!m)return;
  close();anchor=button;button.setAttribute('aria-expanded','true');
  panel.innerHTML=`<header><div><span class="molecule-kicker">MOLECULE NOTES</span><h2 id="molecule-title">${esc(m.name)}</h2></div><button type="button" class="molecule-close" aria-label="Close molecule information">×</button></header><div class="molecule-structure">${m.image}</div><p class="molecule-caption">${esc(m.caption)}</p><p class="molecule-description">${esc(m.body)}</p>`;
  panel.hidden=false;position();
 }
 function later(){clearTimeout(timer);timer=setTimeout(()=>{if(!pinned&&!panel.matches(':hover')&&!anchor?.matches(':hover')&&!panel.contains(document.activeElement)&&document.activeElement!==anchor)close();},220);}
 document.addEventListener('pointerover',e=>{
  if(e.pointerType!=='mouse')return;
  const b=e.target.closest('.molecule-term');
  if(b)show(b);else if(panel.contains(e.target))clearTimeout(timer);
 });
 document.addEventListener('pointerout',e=>{if(e.target.closest('.molecule-term')||panel.contains(e.target))later();});
 document.addEventListener('focusin',e=>{if(suppressFocus)return;const b=e.target.closest('.molecule-term');if(b)show(b);else if(!panel.contains(e.target)&&anchor)close();});
 document.addEventListener('focusout',()=>{if(anchor)later();});
 // Capture prevents a term tap from reaching the card's flip handler.
 document.addEventListener('click',e=>{
  const b=e.target.closest('.molecule-term');
  if(b){e.preventDefault();e.stopPropagation();if(anchor===b&&pinned)close();else{show(b);pinned=true;panel.querySelector('.molecule-close').focus({preventScroll:true});}return;}
  if(e.target.closest('.molecule-close')){close(true);return;}
  if(anchor&&!panel.contains(e.target))close();
 },true);
 document.addEventListener('keydown',e=>{if(anchor&&e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();close(true);}},true);
 window.addEventListener('resize',position);
 document.addEventListener('scroll',e=>{if(!panel.contains(e.target))position();},true);
 window.visualViewport?.addEventListener('resize',position);
 new MutationObserver(()=>{if(anchor&&!anchor.isConnected)close();}).observe(document.querySelector('#panel'),{childList:true,subtree:true});
 return {close};
}
