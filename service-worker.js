if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const n=e=>d(e,a),f={module:{uri:a},exports:s,require:n};i[a]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/26/hello-world/index.html",revision:"698b37ea44f1494de38d8f81bcb5f0be"},{url:"2022/07/26/hexo/index.html",revision:"23dc6135bff2dad700787918f877a0ea"},{url:"2022/07/26/美化/index.html",revision:"9b28d22e2c15a7101092d047bd3f4f00"},{url:"2022/07/27/hexo搭建blog/index.html",revision:"e1eceb4e7bfdca3cd08b206e9a027b20"},{url:"2022/07/27/yarn-下载与环境配置/index.html",revision:"68f5188cd1fc4c6b8f9931b419bc09a2"},{url:"about/index.html",revision:"f3244fa14f5df11c8323b82355e73f8d"},{url:"archives/2022/07/index.html",revision:"25fe22ffe5af70caefbc29e40ba0d3bb"},{url:"archives/2022/index.html",revision:"4b8efcc0b19b4683e9d728fe8ab364df"},{url:"archives/index.html",revision:"9a222f45ce23f7ed1762af364c631a53"},{url:"categories/index.html",revision:"b743bbb570f5f9b6ea7486f09c3b7266"},{url:"categories/study/index.html",revision:"565c591b5a279076b068f9baaa9189b0"},{url:"css/index.css",revision:"3ca891976c47a6acbac87230d40dc1f2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pwa/favicon-16x16.png",revision:"50f4a8c6cc2c7ef0ad38011c6acd1047"},{url:"img/pwa/favicon-32x32.png",revision:"3a9e40e48984a78b25bb298d354f0ab8"},{url:"index.html",revision:"740dc4db5ae3336755b8a1343d2a3ac7"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"237edb7cdd64f785d171c3c4b7ed3643"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"resources/index.html",revision:"1c4d91d7562714625fdac602fd114027"},{url:"schedule/index.html",revision:"f74fc00809761b6cc7278044c1aec909"},{url:"tags/hexo/index.html",revision:"08fe5a4ee5b6142a20008673d4ed3dad"},{url:"tags/index.html",revision:"33fe8da5e94120b669aec64fb8150d9a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
