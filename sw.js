const VERSION='2.1.2';
const CACHE='tankregister-v2-1-2-'+self.registration.scope;
const FILES=['./','./index.html','./core.js','./stats.js','./cost-analysis.js','./extras.js','./ui.js','./v12.css','./manifest.webmanifest','./icon-192.png','./icon-512.png','./vehicle.png','./app-update.js','./version.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>(k.startsWith('tankregister-v12-')||k.startsWith('tankregister-v2-'))&&k.endsWith(self.registration.scope)&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const url=new URL(e.request.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
if(url.pathname.endsWith('/version.json')||url.pathname.endsWith('/sw.js')){e.respondWith(fetch(e.request,{cache:'no-store'}));return}
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(async r=>{if(r.ok){const c=await caches.open(CACHE);c.put('./index.html',r.clone())}return r}).catch(async()=>await caches.match('./index.html')||Response.error()));return}
const known=FILES.some(f=>new URL(f,self.registration.scope).pathname===url.pathname);if(known)e.respondWith(caches.open(CACHE).then(async c=>(await c.match(e.request,{ignoreSearch:true}))||fetch(e.request)));
});
