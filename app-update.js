/* Tankregister: appbestanden vernieuwen zonder lokale gebruikersgegevens te wissen. */
(()=>{'use strict';
const CURRENT='2.1.2';let reg=null,showing=false,updating=false;
function newer(a,b){const x=String(a).split('.').map(Number),y=String(b).split('.').map(Number);for(let i=0;i<3;i++){if((x[i]||0)>(y[i]||0))return true;if((x[i]||0)<(y[i]||0))return false}return false}
function promptUpdate(version,notes){if(showing)return;showing=true;
 const shade=document.createElement('div');shade.id='tankregister-update-notice';shade.setAttribute('role','dialog');shade.setAttribute('aria-label','Nieuwe Tankregister-update');shade.style.cssText='position:fixed;inset:0;z-index:99999;background:#020915bb;display:flex;align-items:center;justify-content:center;padding:20px';
 const box=document.createElement('div');box.style.cssText='background:#10243b;color:#f4f9ff;border:1px solid #37749c;border-radius:18px;padding:22px;max-width:420px;width:100%;box-shadow:0 18px 55px #0009;font:inherit';
 const title=document.createElement('h2');title.textContent='🔔 Nieuwe update beschikbaar';title.style.margin='0 0 12px';box.append(title);
 const msg=document.createElement('p');msg.textContent='Tankregister '+version+' is beschikbaar.';box.append(msg);
 if(Array.isArray(notes)&&notes.length){const ul=document.createElement('ul');notes.forEach(n=>{const li=document.createElement('li');li.textContent=String(n);ul.append(li)});box.append(ul)}
 const buttons=document.createElement('div');buttons.style.cssText='display:flex;gap:12px;flex-wrap:wrap;margin-top:18px';
 const now=document.createElement('button');now.textContent='Nu bijwerken';now.type='button';now.style.cssText='background:#1686cf;color:white;border:0;border-radius:10px;padding:12px 16px;cursor:pointer';
 const later=document.createElement('button');later.textContent='Later';later.type='button';later.style.cssText='background:#263e54;color:white;border:0;border-radius:10px;padding:12px 16px;cursor:pointer';
 later.onclick=()=>{shade.remove();showing=false};
 now.onclick=async()=>{now.disabled=true;later.disabled=true;now.textContent='Bijwerken…';try{updating=true;reg=await navigator.serviceWorker.getRegistration('./')||reg;if(reg){await reg.update();if(reg.waiting){reg.waiting.postMessage({type:'SKIP_WAITING'});return}if(reg.installing){reg.installing.addEventListener('statechange',()=>{if(reg.waiting)reg.waiting.postMessage({type:'SKIP_WAITING'});else if(reg.installing?.state==='activated')location.reload()});return}}location.reload()}catch(e){now.textContent='Opnieuw proberen';now.disabled=false;later.disabled=false;updating=false}};
 buttons.append(now,later);box.append(buttons);shade.append(box);document.body.append(shade)}
 async function check(){if(!navigator.onLine)return;try{const r=await fetch('./version.json?check='+Date.now(),{cache:'no-store'});if(!r.ok)return;const data=await r.json();if(newer(data.version,CURRENT))promptUpdate(data.version,data.notes)}catch(e){}}
 if('serviceWorker' in navigator){navigator.serviceWorker.addEventListener('controllerchange',()=>{if(updating)location.reload()});window.addEventListener('load',async()=>{try{reg=await navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'});await reg.update();if(reg.waiting&&navigator.serviceWorker.controller){const response=await fetch('./version.json?check='+Date.now(),{cache:'no-store'}).then(r=>r.json());if(newer(response.version,CURRENT))promptUpdate(response.version,response.notes)}}catch(e){}await check()})}else window.addEventListener('load',check);
})();
