import {LECTURES} from './lecture-sources.js';
import {esc} from './diagrams.js';
export function createLectureUI(){
 const dialog=document.createElement('dialog');dialog.id='lecture-dialog';dialog.setAttribute('aria-labelledby','lecture-title');
 dialog.innerHTML=`<button class="close" aria-label="Close lecture archive">×</button><h2 id="lecture-title">Lecture PPT · Original archive</h2><p>Learning objectives, scope and requirements are preserved on the original pages. Extracted text supports search; original pages retain the exact wording and layout.</p><label class="field">Lecture<select id="lecture-select" class="control">${LECTURES.map(l=>`<option value="${l.id}">Lecture ${l.id} · ${esc(l.title)}</option>`).join('')}</select></label><p id="lecture-file" class="source-note"></p><div id="lecture-original-pages"></div>`;
 document.body.append(dialog);const select=dialog.querySelector('select'),panel=dialog.querySelector('#lecture-original-pages');let request=0;
 async function render(){const token=++request,l=LECTURES.find(l=>l.id===Number(select.value));dialog.querySelector('#lecture-file').textContent=l.file+' · '+l.pageCount+' PDF pages';panel.innerHTML='<p role="status">Loading original pages…</p>';
  try{const response=await fetch('/lecture-originals/L'+l.id+'-requirements.json');if(!response.ok)throw Error('Could not load lecture pages');const pages=await response.json();if(token!==request)return;
   panel.innerHTML=pages.map((p,i)=>`<details class="lecture-page" ${i===0?'open':''}><summary>PDF page ${p.page} · Original page</summary><a href="${esc(p.image)}" target="_blank" rel="noopener" class="lecture-original-link"><img loading="lazy" src="${esc(p.image)}" alt="Lecture ${l.id}, original PDF page ${p.page}; extracted text follows"/><span>Open full-size original page ↗</span></a><details class="lecture-extracted"><summary>Extracted text · Searchable text</summary><pre>${esc(p.text)}</pre></details></details>`).join('');
  }catch(e){if(token===request)panel.innerHTML='<p role="alert">Original pages could not load. Please retry by selecting the lecture again.</p>';}
 }
 select.onchange=render;dialog.querySelector('.close').onclick=()=>dialog.close();
 return {open(id=2){select.value=String(id);render();dialog.showModal();dialog.scrollTop=0;}};
}
export function cardSourceHTML(c){
 const source=c.sourceLabel||(c.sources||[]).map(s=>'Lecture '+s.lecture+' · PDF p'+(s.pages.length>1?'p':'')+'. '+s.pages.join(', ')).join(' · ');
 const note=c.studyNote?`<p class="card-study-note">${esc(c.studyNote)}</p>`:'';
 return `${source?`<p class="card-source">Source: ${esc(source)}</p>`:c.lectureReview?'<p class="card-source">Source: earlier notes / supplementary practice · not explicitly covered in these slides</p>':''}${note}`;
}
