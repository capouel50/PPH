if(!self.define){let e,n={};const r=(r,o)=>(r=new URL(r+".js",o).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let l={};const t=e=>r(e,i),f={module:{uri:i},exports:l,require:t};n[i]=Promise.all(o.map((e=>f[e]||t(e)))).then((e=>(s(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/frontend/css/app.784b3ea6.css",revision:null},{url:"/frontend/css/chunk-vendors.6344838e.css",revision:null},{url:"/frontend/fonts/Bellota-Light.0277ce35.ttf",revision:null},{url:"/frontend/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4ad034d2.woff",revision:null},{url:"/frontend/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.13749f83.woff2",revision:null},{url:"/frontend/guest-particlesjs-config.json",revision:"aab449b324c5a17b76401ad39f50090b"},{url:"/frontend/img/capsule2.efa435a4.png",revision:null},{url:"/frontend/img/gelules.e6c37735.png",revision:null},{url:"/frontend/img/molecule.f42c6dc4.jpg",revision:null},{url:"/frontend/index.html",revision:"d1791fcbc20dd762f41c8598b33e4b8f"},{url:"/frontend/js/app.674d7d26.js",revision:null},{url:"/frontend/js/chunk-vendors.1a80fd5e.js",revision:null},{url:"/frontend/manifest.json",revision:"629c49e8179ec2ae20fb5c76f49dcc44"},{url:"/frontend/particlesjs-config.json",revision:"5a44728a5d93b079d7375160c4ac15d2"},{url:"/frontend/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
