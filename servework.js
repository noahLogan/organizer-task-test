if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let n={};const o=e=>s(e,f),d={module:{uri:f},exports:n,require:o};i[f]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-eaffa956"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"global.css",revision:"13ef8c08858f556edff8495691c99073"},{url:"icons/chevron-left.svg",revision:"b9b7224a3d5bfef25e4d4174f66f7264"},{url:"icons/DrawKit Vector Illustration Project Manager (17).svg",revision:"347c9bd6a654f12d48c115a601edb747"},{url:"icons/email.svg",revision:"da48f7c42da2af6158622a24edf59e76"},{url:"icons/et.svg",revision:"f48903f05a938f2a51b528f91e2d218f"},{url:"icons/etiquetas.svg",revision:"be10517b70818157bacffd1833f04196"},{url:"icons/facebook.svg",revision:"e56bbadb11837d05bb029600caa4ea57"},{url:"icons/gmail.svg",revision:"00ed3f1c6f062295f907988148143ba8"},{url:"icons/group.svg",revision:"323908416bcc97aeccdcd20c2fcbe578"},{url:"icons/instagram.svg",revision:"4efd1365a6b768647fbdffba4922a6d0"},{url:"icons/lock.svg",revision:"13b429418994af4650c40c9b9b2745d3"},{url:"icons/organizacion.svg",revision:"0f31a1b87792de6ca7bc83382ffdd550"},{url:"icons/st.svg",revision:"5139a5d79fdcbb3c62759f8363a84607"},{url:"icons/status.svg",revision:"c740443022c596198360e0fefc845587"},{url:"icons/twitter.svg",revision:"6bc5bb5f9cca95d1a1d9aef23cdb4b9f"},{url:"icons/user-circle.svg",revision:"9bce02866fedc469ec69ebe7a4324f06"},{url:"icons/user-line.svg",revision:"fcc2a2cdd9ff72b8197ccf486d3ee022"},{url:"icons/user-plus.svg",revision:"d6c263b0cca620c0e8003cb4696e7461"},{url:"icons/user.svg",revision:"98c5561b94377d2dddc36ca5b66410fa"},{url:"img/background-form-login.jpg",revision:"a88cc43eb414f605ae3c050c32f582e1"},{url:"img/background-form-signup.jpg",revision:"515148bb2a6db004b8b40ac64beb6fe1"},{url:"img/icon-organizer-task.png",revision:"8ec74fe0b62cd9bf3c5d2118bd58217f"},{url:"img/OrganizerTask.png",revision:"5d25f00cd5743abcd8001f128405a480"},{url:"img/screenshot-desktop.png",revision:"9ad270f0793305b9fd5b4ee1c00190be"},{url:"img/screenshot-mobile.png",revision:"babd4e225bf4bf4afd01296e43edb77a"},{url:"img/us.jpg",revision:"b185eab822572d5429590ea49c60ed71"},{url:"index.html",revision:"b6496fdbd311836e8b62c37cbc8cd20d"},{url:"js/functions.js",revision:"4566254a041262b7d415d1883d4bcf48"},{url:"js/functions0.js",revision:"d90bde575f538dc63051b2e7ffc9f875"},{url:"js/functions1.js",revision:"d90bde575f538dc63051b2e7ffc9f875"},{url:"js/functions2.js",revision:"d90bde575f538dc63051b2e7ffc9f875"},{url:"js/functions3.js",revision:"d90bde575f538dc63051b2e7ffc9f875"},{url:"js/functions4.js",revision:"d90bde575f538dc63051b2e7ffc9f875"},{url:"login.html",revision:"1a6c8f7f59deb2d3a005f2fc1a3c4951"},{url:"manifest.json",revision:"00d69668d90e008fd173e6808b126761"},{url:"php/login.php",revision:"9606b60ba6f245e5383c4e3fc48192a2"},{url:"php/signup.php",revision:"e8acbb4c59400968f9818fafea21f16f"},{url:"privacy.html",revision:"c32ff6c1e7a9dbabfc52f92bf3e88968"},{url:"start.html",revision:"f7fef1be08feef126ade2654be8416d6"},{url:"terms.html",revision:"9af6acbed14f8655cbca6e8939c08512"},{url:"us.html",revision:"98c94d3ca27dde7448780a8556b57bfd"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=servework.js.map
