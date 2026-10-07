export const IMAGE_LIMIT=5*1024*1024;
export const IMAGE_TYPES={'image/png':'png','image/jpeg':'jpg','image/webp':'webp','image/gif':'gif'};
export function validateImage(file){
 if(!IMAGE_TYPES[file.type])throw Error('Choose a PNG, JPEG, WebP or GIF image.');
 if(!file.size||file.size>IMAGE_LIMIT)throw Error('Each image must be 5 MB or smaller.');
}
export function normalizeImages(raw){
 return (Array.isArray(raw)?raw:[]).filter(v=>v&&typeof v.path==='string'&&/^(?:local:|[a-f0-9-]{36}\/)[a-f0-9-]{36}\.(png|jpg|webp|gif)$/.test(v.path)&&IMAGE_TYPES[v.type]&&Number.isInteger(v.size)&&v.size>0&&v.size<=IMAGE_LIMIT).slice(0,6).map(v=>({path:v.path,name:String(v.name||'Image').slice(0,200),type:v.type,size:v.size}));
}
// Private cloud objects are immutable; removing a reference keeps older backups usable.
export function createNotebookMedia({client,getUser,local=false}){
 const cache=new Map();
 async function localStore(mode,key,value){
  const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('molecule-notebook-images',1);r.onupgradeneeded=()=>r.result.createObjectStore('images');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
  try{return await new Promise((resolve,reject)=>{const tx=db.transaction('images',mode),store=tx.objectStore('images'),r=mode==='readwrite'?store.put(value,key):store.get(key);tx.oncomplete=()=>resolve(r.result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error)})}finally{db.close()}
 }
 return {
  async upload(file){
   validateImage(file);const user=getUser(),owner=user?.id;
   if(!owner&&!local)throw Error('Sign in before saving images.');
   const path=(owner?owner+'/':'local:')+crypto.randomUUID()+'.'+IMAGE_TYPES[file.type];
   if(owner){const {error}=await client.storage.from('notebook-images').upload(path,file,{contentType:file.type,upsert:false});if(error)throw Error('Image upload failed. Check your connection and try again.');if(getUser()?.id!==owner)throw Error('Account changed. Please reopen the question.')}
   else await localStore('readwrite',path,file);
   return {path,name:file.name||'Image',type:file.type,size:file.size};
  },
  async url(image){
   if(!normalizeImages([image]).length)throw Error('Invalid image information.');
   if(cache.has(image.path))return cache.get(image.path);
   const owner=getUser()?.id;
   let blob;
   if(image.path.startsWith('local:')){if(!local)throw Error('This image is only on its original device. Upload it again from that device.');blob=await localStore('readonly',image.path)}
   else{if(!owner||!image.path.startsWith(owner+'/'))throw Error('Sign in with the account that saved this image.');const {data,error}=await client.storage.from('notebook-images').download(image.path);if(error)throw Error('Could not load this image. Check your connection and try again.');if(getUser()?.id!==owner)throw Error('Account changed.');blob=data}
   if(!blob)throw Error('Image not found. Please upload it again.');
   const url=URL.createObjectURL(blob);cache.set(image.path,url);return url;
  },
  reset(){for(const url of cache.values())URL.revokeObjectURL(url);cache.clear()}
 };
}
