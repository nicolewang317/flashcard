import {createNotebookMedia} from './notebook-media.js';
import { createClient } from '@supabase/supabase-js';
import { CloudSync } from './cloud-sync.js';

export async function passwordAuth(auth,{mode,email,password,confirmPassword},readSettings){
 if(!['signin','signup','password'].includes(mode))throw Error('Choose sign in or create account.');
 if(mode!=='signin'){
  if(password.length<8)throw Error('Use a password with at least 8 characters.');
  if(password!==confirmPassword)throw Error('The passwords do not match.');
 }
 let result;
 if(mode==='signup'){
  // Check before submitting: a misconfigured project must not trigger a confirmation email.
  const settings=await readSettings();
  if(settings.disable_signup)throw Error('New account registration is currently closed.');
  if(settings.mailer_autoconfirm!==true)throw Error('Registration setup is incomplete. The site owner needs to turn off “Confirm email” in Supabase. No registration request was sent.');
  result=await auth.signUp({email:email.trim(),password});
 }else if(mode==='password')result=await auth.updateUser({password});
 else result=await auth.signInWithPassword({email:email.trim(),password});
 if(result.error)throw result.error;
 if(mode!=='password'&&!result.data?.session)throw Error('No sign-in session was returned. Please sign in again or contact the site owner.');
 return result.data;
}

export function passwordError(error){
 const errors={
  invalid_credentials:'Email or password is incorrect. If you previously used an email link, you may not have a password yet.',
  email_not_confirmed:'This older account still needs confirmation by the site owner. This app does not send verification emails.',
  user_already_exists:'An account with this email already exists. Sign in instead. If you never set a password, contact the site owner.',
  email_exists:'An account with this email already exists. Sign in instead.',
  weak_password:'Please choose a stronger password with at least 8 characters.',
  over_request_rate_limit:'Too many attempts. Please wait a little before trying again.',
  reauthentication_needed:'Please sign out and sign in with your current password, then try again. If you never set a password, contact the site owner.'
 };
 return errors[error.code]||error.message||'Could not complete the request. Please try again.';
}

export function createSyncUI({getData,onData,getGuest,onAccountSwitch,qa=false}){
 const bar=document.querySelector('#sync-bar');
 const url=import.meta.env.VITE_SUPABASE_URL;
 const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
 const configured=!!url&&!!key&&!url.includes('YOUR_PROJECT')&&!key.includes('YOUR_KEY');
 const accountRequired=!qa&&(configured||!['localhost','127.0.0.1',''].includes(location.hostname));
 let sessionReady=!configured||qa,authMode='signin',authNotice='',authBusy=false;
 let user=null,status={state:'local',message:'Guest · saved on this device'},sessionGeneration=0;
 const dialog=document.createElement('dialog');dialog.id='account-dialog';dialog.setAttribute('aria-labelledby','account-title');
 dialog.innerHTML=`<button class="close" aria-label="Close account">×</button><h2 id="account-title">Your study account</h2><p id="account-description"></p><div id="auth-tabs" class="auth-tabs" aria-label="Account access"><button type="button" data-auth-mode="signin" aria-pressed="true">Sign in</button><button type="button" data-auth-mode="signup" aria-pressed="false">Create account</button></div><form id="signin-form"><div id="email-field" class="auth-field"><label for="signin-email">Email</label><input class="control" id="signin-email" name="email" type="email" autocomplete="username" required placeholder="you@example.com"></div><div class="auth-field"><label for="signin-password" id="password-label">Password</label><input class="control" id="signin-password" name="password" type="password" autocomplete="current-password" required></div><div id="confirm-field" class="auth-field" hidden><label for="confirm-password">Confirm password</label><input class="control" id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" disabled></div><label class="show-password"><input id="show-password" type="checkbox">Show password</label><button class="primary" id="auth-submit">Sign in</button><button class="quiet" id="cancel-password" type="button" hidden>Back to account</button></form><button class="auth-help" id="password-help" type="button">Forgot your password or never set one?</button><div id="signed-in-actions" hidden><p id="account-email"></p><div class="dialog-actions"><button class="primary" id="sync-now">Sync now</button><button class="secondary" id="set-password">Set / change password</button><button class="secondary" id="import-guest">Import this device’s guest progress</button><button class="secondary" id="signout">Sign out</button></div><p>To import your original Mac file, open Study guide & backups → Restore backup. Existing cloud cards are kept.</p></div><p id="account-message" class="status-note" role="status" aria-live="polite"></p><p class="account-footnote"></p>`;
 document.body.append(dialog);
 const welcome=document.createElement('p');welcome.className='account-brand';welcome.textContent='MOLECULE STUDY';dialog.prepend(welcome);
 dialog.addEventListener('cancel',e=>{if(accountRequired&&!user)e.preventDefault()});
 dialog.addEventListener('close',()=>{clearPasswords();if(accountRequired&&!user)queueMicrotask(()=>{if(!user&&!dialog.open)dialog.showModal()})});
 function clearPasswords(){dialog.querySelector('#signin-password').value='';dialog.querySelector('#confirm-password').value='';dialog.querySelector('#show-password').checked=false;for(const input of dialog.querySelectorAll('input[name="password"],input[name="confirmPassword"]'))input.type='password'}
 function setMode(mode){if(authBusy)return;authMode=mode;authNotice='';clearPasswords();renderAccount()}
 function updateEntry(){
  const locked=accountRequired&&!user;
  document.body.classList.toggle('account-required',locked);
  dialog.classList.toggle('account-entry',locked);
  dialog.querySelector('.close').hidden=locked;
  document.querySelector('.shell')?.toggleAttribute('inert',locked);
  renderAccount();
  if(locked&&!dialog.open)dialog.showModal();
  else if(!locked&&dialog.open&&dialog.dataset.entry==='true')dialog.close();
  dialog.dataset.entry=String(locked);
 }
 const message=text=>{authNotice=text;dialog.querySelector('#account-message').textContent=text};
 const showStatus=next=>{status=next;renderBar();if(dialog.open&&!authNotice&&next.detail)dialog.querySelector('#account-message').textContent=next.detail};
 function renderBar(){bar.replaceChildren();const dot=document.createElement('span');dot.className='sync-dot '+status.state;dot.setAttribute('aria-hidden','true');const text=document.createElement('span');text.className='sync-status';text.setAttribute('role','status');text.textContent=status.message;const button=document.createElement('button');button.className='sync-account';button.textContent=user?'Account & sync':'Sign in';button.addEventListener('click',()=>{setMode('signin');dialog.showModal()});bar.append(dot,text,button)}
 function renderAccount(){
  const changing=!!user&&authMode==='password',newPassword=authMode!=='signin',available=configured&&!qa&&sessionReady;
  dialog.querySelector('#signin-form').hidden=!available||(!!user&&!changing);
  dialog.querySelector('#auth-tabs').hidden=!available||!!user;
  dialog.querySelector('#signed-in-actions').hidden=!user||changing;
  dialog.querySelector('#password-help').hidden=!available||!!user;
  dialog.querySelector('#email-field').hidden=changing;
  dialog.querySelector('#signin-email').disabled=changing;
  dialog.querySelector('#signin-email').autocomplete=authMode==='signup'?'email':'username';
  dialog.querySelector('#confirm-field').hidden=!newPassword;
  dialog.querySelector('#confirm-password').disabled=!newPassword;
  dialog.querySelector('#confirm-password').required=newPassword;
  const password=dialog.querySelector('#signin-password');password.autocomplete=newPassword?'new-password':'current-password';password.minLength=newPassword?8:1;
  dialog.querySelector('#password-label').textContent=newPassword?'New password · at least 8 characters':'Password';
  dialog.querySelector('#auth-submit').textContent=authBusy?'Please wait…':changing?'Save password':authMode==='signup'?'Create account':'Sign in';
  dialog.querySelector('#auth-submit').disabled=authBusy;
  dialog.querySelector('#cancel-password').hidden=!changing;
  dialog.querySelector('#cancel-password').disabled=authBusy;
  for(const button of dialog.querySelectorAll('[data-auth-mode]')){button.setAttribute('aria-pressed',String(button.dataset.authMode===authMode));button.disabled=authBusy}
  dialog.querySelector('#account-email').textContent=user?.email||'';
  dialog.querySelector('#account-title').textContent=changing?'Set your password':user?'Your study account':!sessionReady?'Opening your account…':authMode==='signup'?'Make this space yours.':'Welcome back.';
  dialog.querySelector('#account-description').textContent=qa?'This is an isolated preview. Cloud sync is disabled.':!configured?'Account sign-in is temporarily unavailable. Please try again after the site configuration is updated.':!sessionReady?'Checking your saved sign-in…':changing?'Choose a password to use with this email on your phone and computer.':user?'Favorites, mistakes, reviews, and tests are saved to your account.':authMode==='signup'?'Create an account with your email and a password. Your progress will follow you between your phone and computer.':'Sign in with your email and password to continue studying.';
  dialog.querySelector('.account-footnote').textContent=user?'Your progress belongs to this account. Use the same email on every device.':'No email links or verification codes. Keep your password safe; email recovery is not enabled.';
  dialog.querySelector('#account-message').textContent=authNotice||status.detail||'';
 }
 for(const button of dialog.querySelectorAll('[data-auth-mode]'))button.addEventListener('click',()=>setMode(button.dataset.authMode));
 dialog.querySelector('#show-password').addEventListener('change',e=>{for(const input of dialog.querySelectorAll('input[name="password"],input[name="confirmPassword"]'))input.type=e.target.checked?'text':'password'});
 dialog.querySelector('#cancel-password').addEventListener('click',()=>setMode('signin'));
 dialog.querySelector('#password-help').addEventListener('click',()=>message('If you are still signed in on another device, open Account & sync → Set / change password there. Otherwise, contact the site owner to set or reset your password. No email is sent.'));
 if(!configured||qa){renderBar();updateEntry();return {getAccountId:()=>null,media:createNotebookMedia({getUser:()=>null,local:true}),isSignedIn:()=>false,capture:()=>{},importBackup:async()=>{throw Error('Sign in to import into your cloud account.')}}}
 const client=createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'implicit'}});
 const media=createNotebookMedia({client,getUser:()=>user});
 const engine=new CloudSync({client,storage:localStorage,onData,onStatus:showStatus,readUI:getData});
 async function acceptSession(session){
  const next=session?.user||null;sessionReady=true;if(user?.id===next?.id){updateEntry();return}
  const gen=++sessionGeneration;media.reset();user=next;authMode='signin';authNotice='';clearPasswords();
  updateEntry();
  if(next){onAccountSwitch({progress:{},activeTests:{},testHistory:[]});await engine.setUser(next)}
  else{await engine.setUser(null);onAccountSwitch(getGuest());showStatus({state:'local',message:'Guest · saved on this device'})}
  if(gen===sessionGeneration&&dialog.open)renderAccount();
 }
 // Auth callbacks are synchronous; database calls run outside Supabase's auth lock.
 client.auth.onAuthStateChange((_event,session)=>setTimeout(()=>acceptSession(session),0));
 client.auth.getSession().then(({data,error})=>{if(error){sessionReady=true;showStatus({state:'error',message:'Could not restore sign-in',detail:error.message});updateEntry()}else acceptSession(data.session)}).catch(error=>{sessionReady=true;showStatus({state:'error',message:'Could not restore sign-in',detail:error.message});updateEntry()});
 async function readSettings(){const response=await fetch(url.replace(/\/$/,'')+'/auth/v1/settings',{headers:{apikey:key},cache:'no-store',signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('Could not check registration settings. Please try again.');return response.json()}
 dialog.querySelector('#signin-form').addEventListener('submit',async e=>{
  e.preventDefault();if(authBusy)return;const mode=authMode;
  const credentials={mode,email:dialog.querySelector('#signin-email').value,password:dialog.querySelector('#signin-password').value,confirmPassword:dialog.querySelector('#confirm-password').value};
  authBusy=true;message(mode==='signup'?'Creating your account…':mode==='password'?'Saving password…':'Signing in…');renderAccount();
  try{
   const data=await passwordAuth(client.auth,credentials,readSettings);
   clearPasswords();
   if(mode==='password'){authMode='signin';message('Password saved. Use your email and password on your other device.');renderAccount()}
   else{authNotice='';await acceptSession(data.session)}
  }catch(error){message(passwordError(error))}
  finally{credentials.password='';credentials.confirmPassword='';authBusy=false;renderAccount()}
 });
 dialog.querySelector('#set-password').addEventListener('click',()=>setMode('password'));
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
 updateEntry();
 return {getAccountId:()=>user?.id,media,isSignedIn:()=>!!user,capture:data=>engine.capture(data),importBackup:data=>engine.importBackup(data)};
}
