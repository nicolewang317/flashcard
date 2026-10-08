const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function createAIStudyAssistant({getContext,getAccessToken}){
 const dialog=document.createElement('dialog');dialog.className='ai-study-drawer';dialog.setAttribute('aria-labelledby','ai-study-title');
 dialog.innerHTML=`<header class="ai-study-header"><div><span class="ai-study-eyebrow">MOLECULE STUDY</span><h2 id="ai-study-title">AI Study Assistant</h2></div><button type="button" class="ai-close" aria-label="Close AI Study Assistant">×</button></header><section class="ai-study-context" aria-label="Current flashcard"></section><nav class="ai-study-actions" aria-label="Study prompts"><button type="button" data-ai-action="explain"><strong>Explain this</strong><span>Detailed explanation</span></button><button type="button" data-ai-action="simplify"><strong>Simplify</strong><span>Use simpler language</span></button><button type="button" data-ai-action="compare"><strong>Compare</strong><span>Connect a related concept</span></button><button type="button" data-ai-action="why"><strong>Why?</strong><span>Why the answer is correct</span></button><button type="button" data-ai-action="diagram"><strong>Generate diagram</strong><span>A visual explanation for this card</span></button></nav><section class="ai-study-messages" aria-label="Assistant conversation" aria-live="polite"></section><form class="ai-study-compose"><label class="visually-hidden" for="ai-study-question">Ask a question about this card</label><textarea id="ai-study-question" rows="2" maxlength="1200" placeholder="Ask a question about this card…"></textarea><button class="primary" type="submit" aria-label="Send question">Send</button></form><p class="ai-study-footnote">AI can make mistakes. Check exact structures against your course material.</p>`;
 document.body.append(dialog);
 const close=dialog.querySelector('.ai-close'),contextNode=dialog.querySelector('.ai-study-context'),messagesNode=dialog.querySelector('.ai-study-messages'),form=dialog.querySelector('form'),input=dialog.querySelector('textarea'),quick=[...dialog.querySelectorAll('[data-ai-action]')];
 let context=null,messages=[],busy=false,lastRequest=null;

 function renderContext(){contextNode.innerHTML=`<span class="ai-context-label">STUDYING NOW</span><strong>${escapeHTML(context?.topic||context?.unit||'Current flashcard')}</strong><span>${escapeHTML([context?.course,context?.module,context?.mode].filter(Boolean).join(' · '))}</span><p>${escapeHTML(context?.cardFront||'')}</p>`}
 function renderMessages(){messagesNode.innerHTML=messages.map(m=>`<article class="ai-message ${m.role==='user'?'user':'assistant'}"><strong>${m.role==='user'?'You':'Study assistant'}</strong><p>${escapeHTML(m.content)}</p>${m.image?`<img src="${m.image}" alt="AI-generated study diagram for ${escapeHTML(context?.topic||'the current flashcard')}" loading="lazy">`:''}${m.retry?'<button type="button" class="ai-retry">Retry</button>':''}</article>`).join('')+ (busy?'<p class="ai-thinking" role="status"><span class="ai-spinner" aria-hidden="true"></span>Thinking…</p>':'');messagesNode.scrollTop=messagesNode.scrollHeight;messagesNode.querySelector('.ai-retry')?.addEventListener('click',()=>{if(lastRequest)send(lastRequest.action,lastRequest.question,true,lastRequest.history)})}
 function setBusy(value){busy=value;quick.forEach(b=>b.disabled=value);input.disabled=value;form.querySelector('button').disabled=value;renderMessages()}
 async function send(action,question='',retry=false,historyOverride=null){
  if(busy||!context)return;
  question=String(question||'').trim();if(action==='question'&&!question)return;
  const history=historyOverride||messages.filter(m=>!m.retry).map(m=>({role:m.role,content:m.historyContent||m.content}));
  lastRequest={action,question,history};
  if(!retry)messages.push({role:'user',content:question||({explain:'Explain this card',simplify:'Simplify',compare:'Compare with a related concept',why:'Why is this correct?',diagram:'Generate an educational diagram'}[action]||'Study this card')});
  messages=messages.filter(m=>!m.retry);setBusy(true);
  try{
   const token=await getAccessToken?.();if(!token)throw Error('Sign in to your Molecule Study account to use Ask AI.');
   const response=await fetch('/api/ai/study',{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},body:JSON.stringify({action,question,context,history}),signal:AbortSignal.timeout(150_000)});
   const data=await response.json().catch(()=>null);if(!response.ok)throw Error(data?.error||'AI response could not be generated. Try again.');
   const answer=data.answer||'Here is an explanation for this card.',image=data.image||null;
   messages.push({role:'assistant',content:answer,historyContent:image?`${answer}\n[An educational diagram for this flashcard is displayed to the student; they may ask follow-up questions about it.]`:answer,image});
  }catch(error){messages.push({role:'assistant',content:error.name==='TimeoutError'?'This is taking longer than expected. Please retry.':error.message||'AI response could not be generated. Try again.',retry:true})}
  finally{setBusy(false);input.value='';input.focus()}
 }
 function open(){context=getContext?.();if(!context)return;messages=[];lastRequest=null;renderContext();renderMessages();if(!dialog.open)dialog.showModal();requestAnimationFrame(()=>input.focus())}
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});quick.forEach(button=>button.addEventListener('click',()=>send(button.dataset.aiAction)));
 form.addEventListener('submit',e=>{e.preventDefault();send('question',input.value)});
 return{open,isOpen:()=>dialog.open};
}
