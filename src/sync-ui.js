import { createClient } from '@supabase/supabase-js';
import { CloudSync } from './cloud-sync.js';

export function createSyncUI({getData,onData,getGuest,onAccountSwitch,qa=false}){
 const bar=document.querySelector('#sync-bar');
 const url=import.meta.env.VITE_SUPABASE_URL;
 const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
 const configured=!!url&&!!key&&!url.includes('YOUR_PROJECT')&&!key.includes('YOUR_KEY');
 let user=null,status={state:'local',message:'Guest · saved on this device'},sessionGeneration=0;
 const dialog=document.createElement('dialog');dialog.id='account-dialog';dialog.setAttribute('aria-labelledby','account-title');
 dialog.innerHTML=`<button class="close" aria-label="Close account">×</button><h2 id="account-title">Study here. Continue anywhere.</h2><p id="account-description">Use the same email on your phone and Mac to sync favorites, mistakes, reviews, and tests.</p><form id="signin-form"><label for="signin-email">Email</label><input class="control" id="signin-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"><button class="primary" id="send-link">Email me a sign-in link</button></form><div id="signed-in-actions" hidden><p id="account-email"></p><div class="dialog-actions"><button class="primary" id="sync-now">Sync now</button><button class="secondary" id="import-guest">Import this device’s guest progress</button><button class="secondary" id="signout">Sign out</button></div><p>To import your original Mac file, open Study guide & backups → Restore backup. Existing cloud cards are kept.</p></div><p id="account-message" class="status-note" role="status"></p><p class="account-footnote">Reviews are kept separately. For simultaneous favorite or active-test changes, the last change received by the cloud wins.</p>`;
 document.body.append(dialog);
 const message=text=>dialog.querySelector('#account-message').textContent=text;
 const showStatus=next=>{status=next;renderBar();if(dialog.open&&next.detail)message(next.detail)};
 function renderBar(){bar.replaceChildren();const dot=document.createElement('span');dot.className='sync-dot '+status.state;dot.setAttribute('aria-hidden','true');const text=document.createElement('span');text.className='sync-status';text.setAttribute('role','status');text.textContent=status.message;const button=document.createElement('button');button.className='sync-account';button.textContent=user?'Account & sync':'Sign in to sync';button.addEventListener('click',()=>{renderAccount();dialog.showModal()});bar.append(dot,text,button)}
 function renderAccount(){dialog.querySelector('#signin-form').hidden=!!user||!configured||qa;dialog.querySelector('#signed-in-actions').hidden=!user;dialog.querySelector('#account-email').textContent=user?.email||'';dialog.querySelector('#account-description').textContent=qa?'This is an isolated preview. Cloud sync is disabled.':!configured?'Cloud sync is not configured for this deployment yet. Add the Supabase project URL and publishable key in Vercel, then redeploy.':'Use the same email on your phone and Mac to sync favorites, mistakes, reviews, and tests.';message(status.detail||'')}
 if(!configured||qa){renderBar();return {isSignedIn:()=>false,capture:()=>{},importBackup:async()=>{throw Error('Sign in to import into your cloud account.')}}}
 const client=createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'implicit'}});
 const engine=new CloudSync({client,storage:localStorage,onData,onStatus:showStatus,readUI:getData});
 async function acceptSession(session){
  const next=session?.user||null;if(user?.id===next?.id)return;
  const gen=++sessionGeneration;user=next;
  if(next){onAccountSwitch({progress:{},activeTests:{},testHistory:[]});await engine.setUser(next)}
  else{await engine.setUser(null);onAccountSwitch(getGuest());showStatus({state:'local',message:'Guest · saved on this device'})}
  if(gen===sessionGeneration&&dialog.open)renderAccount();
 }
 // Auth callbacks are synchronous; database calls run outside Supabase's auth lock.
 client.auth.onAuthStateChange((_event,session)=>setTimeout(()=>acceptSession(session),0));
 client.auth.getSession().then(({data,error})=>{if(error)showStatus({state:'error',message:'Could not restore sign-in',detail:error.message});else acceptSession(data.session)});
 dialog.querySelector('#signin-form').addEventListener('submit',async e=>{e.preventDefault();const button=dialog.querySelector('#send-link');button.disabled=true;message('Sending sign-in link…');try{const email=dialog.querySelector('#signin-email').value.trim();const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+'/'}});if(error)throw error;message('Check your email, then open the sign-in link in this browser. Use the same email on your other device.')}catch(error){message(error.message||'Could not send the sign-in link.')}finally{button.disabled=false}});
 dialog.querySelector('#sync-now').addEventListener('click',()=>engine.sync());
 dialog.querySelector('#import-guest').addEventListener('click',async e=>{e.target.disabled=true;try{await engine.importBackup(getGuest());message('Guest progress imported. Existing cloud cards were kept.')}catch(error){message(error.message)}finally{e.target.disabled=false}});
 dialog.querySelector('#signout').addEventListener('click',async e=>{e.target.disabled=true;try{await engine.sync();if(engine.pending.length)throw Error('Some changes are still waiting to sync. Reconnect and try signing out again.');const {error}=await client.auth.signOut({scope:'local'});if(error)throw error;message('Signed out on this device.')}catch(error){message(error.message)}finally{e.target.disabled=false}});
 const poll=setInterval(()=>{if(user&&document.visibilityState==='visible')engine.sync()},15000);
 window.addEventListener('online',()=>engine.sync());
 window.addEventListener('focus',()=>engine.sync());
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')engine.sync()});
 window.addEventListener('storage',e=>{if(user&&e.key===engine.key())engine.mergeOtherTab()});
 window.addEventListener('pagehide',()=>engine.persist());
 renderBar();
 return {isSignedIn:()=>!!user,capture:data=>engine.capture(data),importBackup:data=>engine.importBackup(data)};
}
