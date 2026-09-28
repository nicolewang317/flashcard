import test from 'node:test';
import assert from 'node:assert/strict';
import { passwordAuth,passwordError } from '../src/sync-ui.js';

const session={user:{id:'account-a',email:'student@example.com'}};
const credentials={mode:'signup',email:' student@example.com ',password:'study-password',confirmPassword:'study-password'};
function authHarness(){
 const calls=[];
 const auth={
  async signInWithPassword(value){calls.push(['signin',value]);return {data:{session},error:null}},
  async signUp(value){calls.push(['signup',value]);return {data:{session},error:null}},
  async updateUser(value){calls.push(['update',value]);return {data:{user:session.user},error:null}},
  async signInWithOtp(){throw Error('Unexpected email request')},
  async resetPasswordForEmail(){throw Error('Unexpected recovery email')}
 };
 return {auth,calls};
}

test('password login does not depend on email settings or send an email',async()=>{
 const {auth,calls}=authHarness();
 const result=await passwordAuth(auth,{...credentials,mode:'signin'},()=>{throw Error('Login must not fetch signup settings')});
 assert.equal(result.session,session);
 assert.deepEqual(calls,[['signin',{email:'student@example.com',password:'study-password'}]]);
});
test('signup proceeds immediately when email confirmation is disabled',async()=>{
 const {auth,calls}=authHarness();
 const result=await passwordAuth(auth,credentials,async()=>({mailer_autoconfirm:true,disable_signup:false}));
 assert.equal(result.session,session);
 assert.deepEqual(calls,[['signup',{email:'student@example.com',password:'study-password'}]]);
});
test('signup stops before sending anything if email confirmation is still enabled or unknown',async()=>{
 for(const settings of [{mailer_autoconfirm:false},{}]){
  const {auth,calls}=authHarness();
  await assert.rejects(passwordAuth(auth,credentials,async()=>settings),/Confirm email/);
  assert.equal(calls.length,0);
 }
});
test('unavailable settings and closed registration cannot fall through to sending signup mail',async()=>{
 const {auth,calls}=authHarness();
 await assert.rejects(passwordAuth(auth,credentials,async()=>{throw Error('Offline')}),/Offline/);
 await assert.rejects(passwordAuth(auth,credentials,async()=>({disable_signup:true,mailer_autoconfirm:true})),/closed/);
 assert.equal(calls.length,0);
});
test('short and mismatched new passwords are rejected before any server call',async()=>{
 const {auth,calls}=authHarness();
 const read=()=>{throw Error('Validation should run first')};
 await assert.rejects(passwordAuth(auth,{...credentials,password:'short'},read),/8 characters/);
 await assert.rejects(passwordAuth(auth,{...credentials,confirmPassword:'different'},read),/do not match/);
 assert.equal(calls.length,0);
});
test('an authenticated user can set a password without starting a reset-email flow',async()=>{
 const {auth,calls}=authHarness();
 const result=await passwordAuth(auth,{...credentials,mode:'password'},()=>{throw Error('No signup settings needed')});
 assert.equal(result.user,session.user);
 assert.deepEqual(calls,[['update',{password:'study-password'}]]);
});
test('failed credentials never turn into signup and preserve a useful error',async()=>{
 const {auth,calls}=authHarness();
 const error={code:'invalid_credentials',message:'Invalid login credentials'};
 auth.signInWithPassword=async()=>({data:{session:null},error});
 await assert.rejects(passwordAuth(auth,{...credentials,mode:'signin'}),e=>e===error);
 assert.equal(calls.length,0);
 assert.match(passwordError(error),/Email or password is incorrect/);
});
test('signup without a session cannot be mistaken for a successful login',async()=>{
 const {auth}=authHarness();auth.signUp=async()=>({data:{user:session.user,session:null},error:null});
 await assert.rejects(passwordAuth(auth,credentials,async()=>({mailer_autoconfirm:true})),/No sign-in session/);
});
test('passwords retain intentional whitespace; only email whitespace is trimmed',async()=>{
 const {auth,calls}=authHarness();
 await passwordAuth(auth,{...credentials,mode:'signin',password:'  original password  '});
 assert.equal(calls[0][1].password,'  original password  ');
});
