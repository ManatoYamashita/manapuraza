const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-CVk74-t0.js","assets/vendor-COwNOKo7.js","assets/vendor_gsap-BDVyzZVq.js","assets/vendor_three-DsJM6PeA.js","assets/vendor_fontawesome-D9RvXfIH.js","assets/About-DdgFIefS.css","assets/Creatives-Zcc7DrWu.js","assets/Creatives-DqHoFXYD.css","assets/404-D7iCW-lh.js","assets/404-D8BXV-_3.css","assets/OrbitControls-BgfhjAKP.js","assets/MarchingCubes-AxXNbHKT.js"])))=>i.map(i=>d[i]);
import{a as e,b as t,e as n,f as a,g as s,r as i,o,w as r,i as l,c,u as d,n as u,j as h,k as m,T as f,l as p,m as g,p as v,q as w,R as C,t as b,s as _,v as y,x as L,y as E}from"./vendor-COwNOKo7.js";import{A as M,D as k,P,M as S,a as A,S as x,T as j,W as R,C as I}from"./vendor_three-DsJM6PeA.js";import{l as O,f as z,a as D,b as q,c as T,d as $,e as H,g as V,h as W,i as B,j as N,k as Z,m as F,n as U,o as K,p as Y,F as G}from"./vendor_fontawesome-D9RvXfIH.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const J={},Q=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));a=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in J)return;J[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script"),s.crossOrigin="",s.href=e,n&&s.setAttribute("nonce",n),document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function s(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return a.then((t=>{for(const e of t||[])"rejected"===e.status&&s(e.reason);return e().catch(s)}))},X="/assets/logo-C8duE7kC.webp",ee=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},te={id:"spnav"},ne={class:"menu-circle-social"};const ae=ee({name:"SpNav",methods:{toggleLanguage(){this.$i18n.locale="en"===this.$i18n.locale?"ja":"en"}}},[["render",function(r,l,c,d,u,h){const m=i("router-link");return o(),e("div",te,[t("nav",ne,[l[2]||(l[2]=t("input",{type:"checkbox",to:"#",class:"menu-circle-open",name:"menu-circle-open",id:"menu-open"},null,-1)),l[3]||(l[3]=n('<label class="menu-circle-open-button" for="menu-open" aria-label="メニューを開く" data-v-917b674d><svg class="mp icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 1440 1439.999935" preserveAspectRatio="xMidYMid meet" version="1.0" data-v-917b674d><path fill="#fff" d="M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-917b674d></path><path fill="#dddddd" d="M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-917b674d></path><path fill="#ffffff" d="M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-917b674d></path></svg></label>',1)),a(m,{to:"/about",class:"menu-circle-item","aria-label":"山下マナトについて"},{default:s((()=>l[0]||(l[0]=[t("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 35",fill:"#ffffff"},[t("path",{d:"M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z",fill:"#ffffff"})],-1)]))),_:1}),a(m,{to:"/creatives",class:"menu-circle-item","aria-label":"クリエイティブ作品を一部を紹介"},{default:s((()=>l[1]||(l[1]=[t("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"#ffffff"},[t("path",{d:"M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"})],-1)]))),_:1})])])}],["__scopeId","data-v-917b674d"]]),se={id:"main"},ie={href:"https://manapuraza.com","aria-current":"page",class:"home-logo"},oe={class:"app glass"},re=ee({__name:"App",setup(n){const v=d(),w=m();r(v,(()=>{"home"===v.name?(document.querySelector(".app").style.top="20vh",document.querySelector(".app").style.opacity="0",document.querySelector(".app").style.pointerEvents="none"):(document.querySelector(".app").style.top="0",document.querySelector(".app").style.opacity="1",document.querySelector(".app").style.pointerEvents="all")})),l((()=>{(async()=>{await w.isReady()})()}));const C=c((()=>v.path)),b=c((()=>"/"===C.value?"route-home":"route-other")),_=c((()=>"/"===C.value?{opacity:"1",transition:"all .4s ease-in-out"}:{opacity:"0",filter:"blur(2rem)",transition:"all .4s ease-in-out"}));return(n,r)=>{const l=i("router-view");return o(),e("div",se,[t("a",ie,[t("img",{fetchpriority:"high",src:X,alt:"ホームページに戻る",draggable:"false",id:"center-logo",class:h(b.value),style:u(_.value)},null,6)]),t("div",oe,[a(l,null,{default:s((({Component:e})=>[a(f,{name:"slide",mode:"out-in"},{default:s((()=>[(o(),p(g(e),{id:"scrollable-aria"}))])),_:2},1024)])),_:1})]),a(ae,{id:"sp-nav"})])}}},[["__scopeId","data-v-10e75fa5"]]),le={class:"home"};const ce=ee({},[["render",function(t,n){return o(),e("div",le)}],["__scopeId","data-v-875833fa"]]),de=v({history:w(),routes:[{path:"/",name:"home",component:ce},{path:"/about",name:"about",component:()=>Q((()=>import("./About-CVk74-t0.js")),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/creatives",name:"creatives",component:()=>Q((()=>import("./Creatives-Zcc7DrWu.js")),__vite__mapDeps([6,2,1,3,4,7])),meta:{style:{top:"0"}}},{path:"/:pathMatch(.*)*",name:"404",component:()=>Q((()=>import("./404-D7iCW-lh.js")),__vite__mapDeps([8,1,3,4,9]))}]}),ue={class:"navbar"},he={class:"logo"},me={src:X,alt:"manapuraza.com logo",loading:"lazy",class:"logo"},fe={class:"default-menu"},pe={id:"lang-switch"},ge={class:"lang"},ve={class:"toggle-switch"};const we=ee({name:"Navbar",components:{RouterLink:C},data(){return{currentPath:this.$route.path}},watch:{$route(e,t){this.currentPath=e.path}},methods:{toggleLanguage(){this.$i18n.locale="en"===this.$i18n.locale?"ja":"en"}}},[["render",function(n,r,l,c,d,u){const h=i("RouterLink");return o(),e("div",ue,[t("div",he,[a(h,{to:"/","aria-current":"page","aria-label":"ホームページに戻る"},{default:s((()=>[a(f,{name:"slide",mode:"out-in","aria-current":"page"},{default:s((()=>[_(t("img",me,null,512),[[y,"/"!==d.currentPath]])])),_:1})])),_:1})]),t("nav",fe,[a(h,{to:"/about",class:"rlink"},{default:s((()=>r[1]||(r[1]=[L("About")]))),_:1}),a(h,{to:"/creatives",class:"rlink"},{default:s((()=>r[2]||(r[2]=[L("Creatives")]))),_:1})]),t("div",pe,[t("span",ge,b(n.$t("navbar.toggle")),1),t("div",ve,[t("input",{class:"toggle-input",id:"toggle",type:"checkbox",onClick:r[0]||(r[0]=(...e)=>u.toggleLanguage&&u.toggleLanguage(...e))}),r[3]||(r[3]=t("label",{class:"toggle-label",for:"toggle"},null,-1))])])])}],["__scopeId","data-v-84bafd05"]]),Ce={id:"main"},be={id:"container",ref:"container"};const _e=ee({name:"MetaBall",data:()=>({resolution:30,effectController:{material:"plastic",speed:.1,numBlobs:3,resolution:30,isolation:10},time:0,clock:new I}),async mounted(){await this.init(),this.animate(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},methods:{async init(){this.container=this.$refs.container,this.camera=new A(50,window.innerWidth/window.innerHeight,1,700),this.camera.position.set(100,100,400),this.scene=new x;const e=(new j).load("/assets/background-DzMerwoF.webp");this.scene.background=e,this.setupLights(),this.materials=this.generateMaterials();const{OrbitControls:t}=await Q((async()=>{const{OrbitControls:e}=await import("./OrbitControls-BgfhjAKP.js");return{OrbitControls:e}}),__vite__mapDeps([10,3])),{MarchingCubes:n}=await Q((async()=>{const{MarchingCubes:e}=await import("./MarchingCubes-AxXNbHKT.js");return{MarchingCubes:e}}),__vite__mapDeps([11,3]));this.effect=new n(this.resolution,this.materials[this.effectController.material],!0,!0,1e5),this.effect.position.set(0,0,0),this.effect.scale.set(300,300,300),this.scene.add(this.effect),this.renderer=new R({antialias:!1}),this.renderer.setPixelRatio(.5*window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement);"ontouchstart"in window||navigator.maxTouchPoints>0||(this.controls=new t(this.camera,this.renderer.domElement),this.controls.minDistance=100,this.controls.maxDistance=500)},animate(){requestAnimationFrame(this.animate),this.renderScene()},renderScene(){const e=this.clock.getDelta();this.time+=e*this.effectController.speed*.5,this.effectController.resolution===this.resolution&&this.effectController.isolation===this.effect.isolation||(this.resolution=this.effectController.resolution,this.effect.init(Math.floor(this.resolution)),this.effect.isolation=this.effectController.isolation),this.updateCubes(),this.renderer.render(this.scene,this.camera)},onWindowResize(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))},generateMaterials:()=>({plastic:new S({specular:16776960,shininess:10,color:16753920,emissive:16753920,emissiveIntensity:.75})}),setupLights(){this.ambientLight=new M(16777215,1),this.scene.add(this.ambientLight),this.light=new k(16777215,.5),this.light.position.set(.5,1,.5),this.scene.add(this.light),this.pointLight=new P(16777215,10,1,1),this.pointLight.position.set(0,0,50),this.scene.add(this.pointLight)},updateCubes(){this.effect.reset();const e=this.effectController.numBlobs,t=.6/((Math.sqrt(e)-1)/4+1);for(let n=0;n<e;n++){const e=this.time,a=.27*Math.sin(n+1.26*e*(1.03+.5*Math.cos(.21*n)))+.5,s=.77*Math.abs(Math.cos(n+1.12*e*Math.cos(1.22+.1424*n))),i=.27*Math.cos(n+1.32*e*.1*Math.sin(.92+.53*n))+.5;this.effect.addBall(a,s,i,t,10)}this.effect.update()}}},[["render",function(n,a,s,i,r,l){return o(),e("div",Ce,[t("div",be,null,512)])}]]);O.add(z,D,q,T,$,H,V,W,B,N,Z,F,U,K,Y);const ye=E(re),Le=E(we),Ee=E(_e);ye.component("fa",G),ye.component("font-awesome-icon",G),Le.component("font-awesome-icon",G),Ee.component("font-awesome-icon",G),ye.use(de),Le.use(de),Ee.use(de),(async()=>{const{createI18n:e}=await Q((async()=>{const{createI18n:e}=await import("./vendor-COwNOKo7.js").then((e=>e.H));return{createI18n:e}}),[]),t=await Q((()=>import("./en-DFaUgdn_.js")),[]),n=await Q((()=>import("./ja-BeouVUuX.js")),[]);return e({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:t.default,ja:n.default}})})().then((e=>{ye.use(e),Le.use(e),Ee.use(e),ye.mount("#app"),Le.mount("#navbar"),Ee.mount("#back")})),"mediaSession"in navigator&&window.addEventListener("load",(()=>{navigator.mediaSession.setActionHandler("play",(function(){})),navigator.mediaSession.setActionHandler("pause",(function(){})),navigator.mediaSession.setActionHandler("previoustrack",(function(){})),navigator.mediaSession.setActionHandler("nexttrack",(function(){}))}));export{ee as _};
//# sourceMappingURL=index-CJUQ4gBY.js.map
