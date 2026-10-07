import {createLectureUI} from './lecture-ui.js';
import {SYLLABUS_TEXT,MODULES,UNIT_TITLES,syllabusSection,moduleLabel,readableOriginal} from './curriculum.js';
import {esc} from './diagrams.js';
export function createSyllabusUI(){
 const lectureUI=createLectureUI();
 const dialog=document.createElement('dialog');dialog.id='syllabus-dialog';dialog.setAttribute('aria-labelledby','syllabus-title');
 dialog.innerHTML=`<button class="close" aria-label="Close syllabus">×</button><h2 id="syllabus-title">BIOL 112 · Syllabus & learning objectives</h2><p class="source-note">Teacher text supplied by you · The full original is archived. Module views quote the same source, retaining repeated and unfinished sections.</p><label class="field">View original requirements<select class="control" id="syllabus-scope"><option value="all">All original requirements · Full original</option>${Object.entries(UNIT_TITLES).map(([id,label])=>`<option value="${id}">${esc(label)}</option>`).join('')}${MODULES.map(m=>`<option value="${m.id}">${esc(moduleLabel(m.id))}</option>`).join('')}</select></label><div class="syllabus-actions"><button type="button" class="secondary" id="lecture-archive-open">Lecture PPT · Original requirements</button><button type="button" id="syllabus-all" class="secondary">Show complete original</button><a class="secondary" href="/BIOL112_Syllabus_Original.txt" download>Download original text</a><label><input id="syllabus-raw" type="checkbox"> Show original formatting</label></div><div id="syllabus-content" class="syllabus-content"></div>`;
 document.body.append(dialog);
 const select=dialog.querySelector('select'),raw=dialog.querySelector('#syllabus-raw'),content=dialog.querySelector('#syllabus-content');
 function render(){
  const source=syllabusSection(select.value);
  if(raw.checked){content.innerHTML='<pre class="syllabus-raw"></pre>';content.firstChild.textContent=source;return;}
  // Only decode formatting and apply emphasis; no text is corrected, omitted or summarized.
  content.innerHTML=readableOriginal(source).split('\n').map(line=>{
   if(!line.trim())return '<div class="source-gap"></div>';
   const heading=/^(#{1,3})\s+/.test(line),depth=(line.match(/^ */)?.[0].length||0);
   const text=esc(heading?line.replace(/^#{1,3}\s+/,''):line).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
   return `<div class="${heading?'source-heading':'source-line'}" style="padding-left:${Math.min(depth,12)*8}px">${text}</div>`;
  }).join('');
 }
 dialog.querySelector('#lecture-archive-open').onclick=()=>lectureUI.open();
 select.addEventListener('change',render);raw.addEventListener('change',render);
 dialog.querySelector('#syllabus-all').onclick=()=>{select.value='all';render();};
 dialog.querySelector('.close').onclick=()=>dialog.close();
 return {open(scope='all',options={}){select.value=scope;raw.checked=Boolean(options.raw);render();dialog.showModal();dialog.scrollTop=0;}};
}
