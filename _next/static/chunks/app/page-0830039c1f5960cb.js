(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8728:function(e,t,n){Promise.resolve().then(n.bind(n,8212))},8212:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(7437),a=n(2265),s=n(7287);function l(){let[e,t]=(0,a.useState)(),[n,l]=(0,a.useState)(),[o,c]=(0,a.useState)(),[d,r]=(0,a.useState)(),[p,u]=(0,a.useState)(),[h,m]=(0,a.useState)(),[f,w]=(0,a.useState)(),[y,g]=(0,a.useState)(!1),[v,x]=(0,a.useState)(new Set),[j,E]=(0,a.useState)(new Set);(0,a.useEffect)(()=>{p&&!y&&((async()=>{await J()})(),g(!0))},[p,y]),(0,a.useEffect)(()=>{let e=async e=>{let t=e.target;if(t){let{clientHeight:e,scrollHeight:n,scrollTop:i}=t.documentElement;if(e+i+1>=n){let e=document.querySelector(".image-container");e&&(e.querySelectorAll("img").length,await J())}}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[p]);let[b,S]=(0,a.useState)(""),k=async e=>{let t=await fetch(e?"https://api.nintondo.io/api/blocks/".concat(e):"https://api.nintondo.io/api/blocks");return await t.json()},G=async()=>{let e=[],t=await k();e.push(...t);for(let n=0;n<9;n++){let n=t[t.length-1].height-1;t=await k(n),e.push(...t)}N(e)},_=(e,t)=>Math.floor(Math.abs(t-e)/60),N=e=>{let t=0,n=1;e.forEach((i,a)=>{a>0&&(t+=_(e[a-1].timestamp,i.timestamp),n++)}),S((t/n).toFixed(2))},L=async()=>{let e=document.getElementById("loader");e&&(e.style.display="flex");let t=await fetch("https://api.nintondo.io/api/address/BEGJMVqLYRJkGwvwmsZDDjERpzxGqdyzXT/utxo").then(e=>e.json()).then(e=>e);e&&(e.style.display="none"),u(t)},B=async()=>{await fetch("https://api.nintondo.io/api/blocks").then(e=>e.json()).then(async e=>{m(e)})},C=async()=>{await fetch("https://api.nintondo.io/api/blocks/tip/height").then(e=>e.json()).then(async e=>{r(e)})},M=async()=>{await fetch("https://api.nintondo.io/api/stats/bells").then(e=>e.json()).then(e=>{c(e)})},q=async()=>{await fetch("https://api.nonkyc.io/api/v2/ticker/BEL_USDT").then(e=>e.json()).then(e=>{t(e)})};async function P(e,t){let n=(await fetch("https://content.nintondo.io/api/pub/content/"+e)).url,i=document.createElement("img");i.src=n;let a=document.createElement("a");a.href="https://nintondo.io/belinals/"+e,a.target="_blank";let s=document.createElement("div");s.classList.add("img-box"),s.appendChild(i);let l=document.createElement("div");l.classList.add("img-box-info");let o=document.createElement("div");o.innerHTML=(t/1e8).toFixed(2).toString()+" bels",l.appendChild(o);let c=document.createElement("div"),d="".concat(e.slice(0,4),"...").concat(e.slice(-4));c.innerHTML=d,l.appendChild(c),s.appendChild(l);let r=document.querySelector(".image-container");r&&(a.appendChild(s),r.appendChild(a))}async function z(e,t){let n=await fetch("https://content.nintondo.io/api/pub/search?page_size=60&page="+t+"&account="+e),i=await n.json(),a=["PNG","SVG","GIF","JPEG","JPG"],s=i.inscriptions.filter(e=>a.includes(e.file_type));return s.length>0?s[s.length-1]:null}async function H(e){if(!e)return;if(j.has(e))return null;j.add(e),E(j);let t=1,n=await fetch("https://content.nintondo.io/api/pub/search?page_size=60&page="+t+"&account="+e),i=await n.json(),a=null;if(i.pages>1){if((t=i.pages)>10)return null;a=await z(e,t)}else{let e=["PNG","SVG","GIF","JPEG","JPG"],t=i.inscriptions.filter(t=>e.includes(t.file_type));a=t.length>0?t[t.length-1]:null}for(;null==a&&t>1;)a=await z(e,t),t-=1;return a}(0,a.useEffect)(()=>{q(),M(),C(),L(),B(),G();let e=document.getElementById("viewImageCloseBtn");e&&e.addEventListener("click",function(){let e=document.querySelector(".view-image");e&&e instanceof HTMLElement&&(e.style.display="none")})},[]);let I=new Set;async function J(){if(!p||!document.querySelector(".image-container"))return;let e=1;I.size>0&&(e=Array.from(I)[I.size-1]+1),I.add(e);let t=p[e],n=document.getElementById("loader");n&&(n.style.display="flex");let i=await fetch("https://api.nintondo.io/api/tx/"+t.txid),a=await i.json();a.vin[a.vin.length-1].prevout.scriptpubkey_address;let s=a.vin[a.vin.length-1].prevout.value,l=await H(a.vin[a.vin.length-1].prevout.scriptpubkey_address);l?v.has(l.id)?await J():(v.add(l.id),x(v),await P(l.id,s),v.size<12&&await J()):await J(),n&&(n.style.display="none")}return(0,i.jsxs)("div",{className:"min-h-screen",children:[(0,i.jsx)(s.wp,{}),(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"background-video",children:(0,i.jsx)("source",{src:"video/pexels_01.mp4",type:"video/mp4"})}),(0,i.jsxs)("div",{className:"view-image",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"objectFit",children:(0,i.jsx)("img",{src:"https://images.unsplash.com/photo-1668954206766-404e981f57f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60.",alt:""})}),(0,i.jsxs)("div",{className:"belinal-description",children:[(0,i.jsxs)("div",{children:["Donated ",(0,i.jsx)("span",{className:"donation"})," BELS"]}),(0,i.jsxs)("div",{children:["Address ",(0,i.jsx)("span",{className:"address"})]})]})]}),(0,i.jsx)("span",{id:"viewImageCloseBtn",children:"X"})]}),(0,i.jsx)("div",{id:"parent-image-container",children:(0,i.jsx)("div",{className:"image-container"})}),(0,i.jsx)(s.aN,{})]})}}},function(e){e.O(0,[190,291,287,971,23,744],function(){return e(e.s=8728)}),_N_E=e.O()}]);