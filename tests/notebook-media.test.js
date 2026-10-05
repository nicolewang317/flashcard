import test from 'node:test';
import assert from 'node:assert/strict';
import {validateImage,normalizeImages,createNotebookMedia,IMAGE_LIMIT} from '../src/notebook-media.js';
const uid='11111111-1111-4111-8111-111111111111';
const photo={path:uid+'/22222222-2222-4222-8222-222222222222.png',name:'x.png',type:'image/png',size:10};
test('reject active formats, oversized files, external and traversing image references',()=>{
 assert.throws(()=>validateImage({type:'image/svg+xml',size:1}));assert.throws(()=>validateImage({type:'image/png',size:IMAGE_LIMIT+1}));
 assert.deepEqual(normalizeImages([{...photo,path:'https://other.test/image.png'},{...photo,path:uid+'/../image.png'}]),[]);
 assert.deepEqual(normalizeImages([photo]),[photo]);
});
test('cloud upload keeps originals private, and failed upload remains an error',async()=>{
 let received;
 const file=new File(['image'],'original.png',{type:'image/png'});
 const client={storage:{from(bucket){assert.equal(bucket,'notebook-images');return {async upload(path,body,options){received={path,body,options};return {error:null}}}}}};
 const media=createNotebookMedia({client,getUser:()=>({id:uid})});const result=await media.upload(file);
 assert.equal(received.body,file);assert.equal(received.options.upsert,false);assert.ok(result.path.startsWith(uid+'/'));assert.equal(result.name,'original.png');
 const failing=createNotebookMedia({client:{storage:{from:()=>({upload:async()=>({error:new Error('offline')})})}},getUser:()=>({id:uid})});
 await assert.rejects(failing.upload(file),/上传失败/);
});
test('account switching during upload and foreign image reads are rejected',async()=>{
 let user={id:uid};const client={storage:{from:()=>({upload:async()=>{user={id:'another'};return {error:null}}})}};
 const media=createNotebookMedia({client,getUser:()=>user});await assert.rejects(media.upload(new File(['x'],'x.png',{type:'image/png'})),/账号已切换/);
 await assert.rejects(media.url(photo),/保存截图的账号/);
});
