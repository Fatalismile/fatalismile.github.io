if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>d(e,r),n={module:{uri:r},exports:s,require:b};i[r]=Promise.all(a.map((e=>n[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1d99639b876ff787a14435fb0f810fd3"},{url:"archives/2022/07/index.html",revision:"d600f0ea35eee8c83a19ebb621059ec1"},{url:"archives/2022/index.html",revision:"c96ad1b8adb84004e1fdc339a6862cbe"},{url:"archives/index.html",revision:"9c61bd032d388eeca340395a0787fe6f"},{url:"article/about/index.html",revision:"088eb877f0927874f78ed9de0f797a32"},{url:"article/categories/index.html",revision:"b690360b8bb8a37db63db34875f0a171"},{url:"article/resources/index.html",revision:"5a1c6aae489bbdd5d926932dcc912124"},{url:"article/schedule/index.html",revision:"eca9ed19013cfb549df88ec3d657b1a8"},{url:"article/shuoshuo/index.html",revision:"c9a641b3c8a7f56a0b9347815258eb58"},{url:"article/tags/index.html",revision:"29aff7608305c7df4ea8af2b8002269c"},{url:"categories/study/index.html",revision:"dd4cfa839c636716794690eda5f8d9f0"},{url:"css/index.css",revision:"23a55ab5a75730c0bb5f9ca44cd06ac3"},{url:"css/my.css",revision:"29943dd5ac0eb931848db1d2b384bd74"},{url:"css/rightMenu.css",revision:"036623ed00b65cd7a5b31dffe2a25c4e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"f0af10c13accb18db11e9f95f0109001"},{url:"Gallery/wallpaper/index.html",revision:"2ed5f0e0ceb8f61d3d449ea076e5bae5"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pwa/favicon-16x16.png",revision:"50f4a8c6cc2c7ef0ad38011c6acd1047"},{url:"img/pwa/favicon-32x32.png",revision:"3a9e40e48984a78b25bb298d354f0ab8"},{url:"index.html",revision:"7a0d48099dc1d91f5841faadfa1e32ca"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/rightMenu.js",revision:"68db67f6c6ee6b8db0eb0ddd7e85d2ef"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"6bef503285a71d3211af4ebc6d491d38"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"messageboard/index.html",revision:"e3c2667a842316f14cc92e7160ef0685"},{url:"music/index.html",revision:"33b605cd22adaa9e33657ad23ef38cf5"},{url:"posts/1e963ed13b9a/index.html",revision:"75204b988b3b73b9f7813763593a0156"},{url:"posts/5cbbbf6c751b/index.html",revision:"a023ed53b01671de44512243c0945a98"},{url:"posts/78cfb279e063/index.html",revision:"87221e3574dcaecc4d3fcbf5b1a76caa"},{url:"posts/88e1b3b89d00/index.html",revision:"68dbecd397e751a0940913fc47600bbd"},{url:"posts/b521c0aad011/index.html",revision:"b2632eb30700ba81283ea61ae5b9a13f"},{url:"tags/hexo/index.html",revision:"a34468519e9ed0ed60898b7ba6649d4f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
