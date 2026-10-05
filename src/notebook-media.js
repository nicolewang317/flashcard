export const IMAGE_LIMIT=5*1024*1024;
export const IMAGE_TYPES={'image/png':'png','image/jpeg':'jpg','image/webp':'webp','image/gif':'gif'};
export function validateImage(file){
 if(!IMAGE_TYPES[file.type])throw Error('请选择 PNG、JPEG、WebP 或 GIF 图片。');
 if(!file.size||file.size>IMAGE_LIMIT)throw Error('每张图片需小于或等于 5 MB。');
}
export function normalizeImages(raw){
 return (Array.isArray(raw)?raw:[]).filter(v=>v&&typeof v.path==='string'&&/^(?:local:|[a-f0-9-]{36}\/)[a-f0-9-]{36}\.(png|jpg|webp|gif)$/.test(v.path)&&IMAGE_TYPES[v.type]&&Number.isInteger(v.size)&&v.size>0&&v.size<=IMAGE_LIMIT).slice(0,6).map(v=>({path:v.path,name:String(v.name||'截图').slice(0,200),type:v.type,size:v.size}));
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
   if(!owner&&!local)throw Error('请先登录，再保存截图。');
   const path=(owner?owner+'/':'local:')+crypto.randomUUID()+'.'+IMAGE_TYPES[file.type];
   if(owner){const {error}=await client.storage.from('notebook-images').upload(path,file,{contentType:file.type,upsert:false});if(error)throw Error('截图上传失败，请检查网络后重试。');if(getUser()?.id!==owner)throw Error('账号已切换，请重新打开错题。')}
   else await localStore('readwrite',path,file);
   return {path,name:file.name||'截图',type:file.type,size:file.size};
  },
  async url(image){
   if(!normalizeImages([image]).length)throw Error('图片信息无效。');
   if(cache.has(image.path))return cache.get(image.path);
   const owner=getUser()?.id;
   let blob;
   if(image.path.startsWith('local:')){if(!local)throw Error('这张截图只保存在原设备，请在原设备重新上传。');blob=await localStore('readonly',image.path)}
   else{if(!owner||!image.path.startsWith(owner+'/'))throw Error('请使用保存截图的账号查看。');const {data,error}=await client.storage.from('notebook-images').download(image.path);if(error)throw Error('图片加载失败，请检查网络后重试。');if(getUser()?.id!==owner)throw Error('账号已切换。');blob=data}
   if(!blob)throw Error('找不到这张图片，请重新上传。');
   const url=URL.createObjectURL(blob);cache.set(image.path,url);return url;
  },
  reset(){for(const url of cache.values())URL.revokeObjectURL(url);cache.clear()}
 };
}
