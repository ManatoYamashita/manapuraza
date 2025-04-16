import{g as t}from"./vendor_gsap-BDVyzZVq.js";import{_ as e}from"./index-CJUQ4gBY.js";import{r as i,a,o,b as n,x as r,f as s,t as l,c,l as p,E as u,j as d,z as m,i as h,G as v,F as g,A as y,C as f}from"./vendor-COwNOKo7.js";import"./vendor_three-DsJM6PeA.js";import"./vendor_fontawesome-D9RvXfIH.js";const w={class:"creative-item"},b=["href"],x={class:"img-cover"},k=["src","alt"];const _=e({name:"creativeItem",props:{url:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},thumbnail:{type:String,required:!0},index:{type:Number,required:!0}},setup:t=>({resolvedThumbnail:c((()=>{try{return t.thumbnail.startsWith("@/")?new URL(t.thumbnail,import.meta.url).href:t.thumbnail}catch(e){return"https://via.placeholder.com/300x200?text=Image+Not+Found"}}))}),mounted(){t.from(this.$el,{y:200,duration:1,delay:.2*this.index,ease:"power4.out"})},methods:{handleImageError(t){t.target.src="https://via.placeholder.com/300x200?text=Image+Not+Found"}}},[["render",function(t,e,c,p,u,d){const m=i("fa");return o(),a("li",w,[n("a",{href:c.url,target:"_blank"},[n("div",x,[n("img",{src:p.resolvedThumbnail,alt:c.title,loading:"eager",onError:e[0]||(e[0]=(...t)=>d.handleImageError&&d.handleImageError(...t))},null,40,k)]),n("h3",null,[r(l(c.title)+" ",1),s(m,{icon:["fas","arrow-up-right-from-square"],class:"fa"})]),n("p",null,l(c.description),1)],8,b)])}],["__scopeId","data-v-644b78bd"]]),A=["aria-label"],T=e({__name:"Btn",props:{text:{type:String,default:"View More"},link:{type:String,default:""},href:{type:String,default:""},target:{type:String,default:""},icon:{type:Array,default:null},alt:{type:String,default:"button link(view more)"},showArrow:{type:Boolean,default:!1},category:{type:String,default:"",validator:t=>["","animation","programming","graphics","video"].includes(t)}},setup(t){const e=t,n=()=>{const t=e.href||e.link;t&&("_blank"===e.target?window.open(t,"_blank"):window.location.href=t)};return(e,s)=>{const c=i("font-awesome-icon");return o(),a("button",{onClick:n,"aria-label":t.alt,class:d(t.category)},[t.icon?(o(),p(c,{key:0,icon:t.icon,class:"icon"},null,8,["icon"])):u("",!0),r(" "+l(t.text)+" ",1),t.showArrow?(o(),p(c,{key:1,icon:["fas","arrow-right"],class:"icon"})):u("",!0)],10,A)}}},[["__scopeId","data-v-677c9213"]]),$={class:"hero-section"},C={class:"hero-content"},P={class:"hero-text"},S={class:"hero-description"},B={class:"cta-button"},L={key:0,class:"dropdown-menu"},z=e({__name:"CreativesHero",setup(e){const c=m(!1),p=()=>{c.value=!c.value},d=()=>{c.value=!1};return h((()=>{t.timeline().fromTo(".hero-text h1",{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out"}).fromTo(".hero-description",{y:30,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out"},"-=0.7").fromTo(".cta-button",{y:20,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out"},"-=0.7").fromTo(".sphere",{scale:.5,opacity:0},{scale:1,opacity:1,duration:1.5,ease:"elastic.out(1, 0.3)"},"-=0.8")})),(t,e)=>{const m=i("font-awesome-icon");return o(),a("section",$,[n("div",C,[n("div",P,[e[4]||(e[4]=n("h1",null,[r("Creatives "),n("span",null,"based on"),r(),n("span",{class:"highlight"},"Design")],-1)),n("p",S,l(t.$t("creatives.paragraph")),1),n("div",B,[s(T,{onClick:p,text:"Explore Now",showArrow:!0,alt:"コンテンツを探索する"}),c.value?(o(),a("div",L,[n("a",{href:"#animation",class:"dropdown-item",onClick:d},[e[0]||(e[0]=n("span",{class:"dropdown-text"},"Animation",-1)),s(m,{icon:["fas","film"],class:"dropdown-icon"})]),n("a",{href:"#programming",class:"dropdown-item",onClick:d},[e[1]||(e[1]=n("span",{class:"dropdown-text"},"Programming / Web",-1)),s(m,{icon:["fas","code"],class:"dropdown-icon"})]),n("a",{href:"#graphics",class:"dropdown-item",onClick:d},[e[2]||(e[2]=n("span",{class:"dropdown-text"},"Illustration / Graphics",-1)),s(m,{icon:["fas","palette"],class:"dropdown-icon"})]),n("a",{href:"#video",class:"dropdown-item",onClick:d},[e[3]||(e[3]=n("span",{class:"dropdown-text"},"Video / Animation",-1)),s(m,{icon:["fas","video"],class:"dropdown-icon"})])])):u("",!0)])]),e[5]||(e[5]=n("div",{class:"hero-visual"},[n("div",{class:"sphere-container"},[n("div",{class:"sphere"})])],-1))])])}}},[["__scopeId","data-v-fe267e91"]]),X={id:"animation",class:"animation-section"},Y={class:"section-description"},I={class:"animation-item"},j={class:"content-wrapper"},M={class:"video-wrapper"},K={class:"video-container"},E={key:0,src:"https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M",title:"世田谷区オリジナルアニメ「新BOPへようこそ!」",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",loading:"eager"},N={key:1,src:"https://www.youtube.com/embed/hdK1_B_Mef8?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=hdK1_B_Mef8",title:"デスクトップ表示用動画",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",loading:"eager"},W={class:"animation-info"},G={class:"animation-title"},D={class:"info-grid"},O={class:"info-item"},Q={class:"info-icon"},U={class:"credits-section"},q={class:"section-subtitle"},F={class:"animation-details"},R={key:0,class:"animation-detail-item"},H={key:1,class:"animation-detail-item highlight-item"},V={key:2,class:"animation-detail-item"},J={key:3,class:"animation-detail-item"},Z={key:4,class:"animation-detail-item"},tt={key:5,class:"animation-detail-item"},et={class:"animation-links"},it=e({__name:"AnimationSection",setup(e){const r=m(!1);let c=null;const p=t=>{r.value=t.matches};return h((()=>{c=window.matchMedia("(min-width: 968px)"),r.value=c.matches,c.addEventListener("change",p),t.from("#animation",{opacity:0,y:50,duration:1,ease:"power3.out"}),t.from(".video-container",{opacity:0,scale:.9,duration:1.2,delay:.3,ease:"back.out(1.7)"}),t.from(".animation-info",{opacity:0,x:30,duration:1,delay:.5,ease:"power2.out"}),t.from(".info-grid, .credits-section, .synopsis-section, .animation-links",{opacity:0,y:20,stagger:.15,duration:.8,delay:.7,ease:"power2.out"})})),v((()=>{c&&c.removeEventListener("change",p)})),(t,e)=>{const c=i("font-awesome-icon");return o(),a("section",X,[e[3]||(e[3]=n("div",{class:"section-header"},[n("h2",{class:"section-title"},"Animation"),n("div",{class:"section-divider"})],-1)),n("p",Y,l(t.$t("creatives.animation.paragraph")),1),n("div",I,[n("div",j,[n("div",M,[n("div",K,[r.value?(o(),a("iframe",N)):(o(),a("iframe",E))]),e[0]||(e[0]=n("div",{class:"video-overlay"},[n("div",{class:"play-button"})],-1))]),n("div",W,[n("h3",G,l(t.$t("creatives.animation.tcuAnimation.title")),1),n("div",D,[n("div",O,[n("div",Q,[s(c,{icon:["fas","calendar"]})]),e[1]||(e[1]=n("div",{class:"info-content"},[n("span",{class:"info-label"},"制作年"),n("span",{class:"info-value"},"2023年")],-1))])]),n("div",U,[n("h4",q,[s(c,{icon:["fas","users"],class:"subtitle-icon"}),e[2]||(e[2]=n("span",null,"クレジット",-1))]),n("div",F,[t.$t("creatives.animation.tcuAnimation.description.production")?(o(),a("p",R,l(t.$t("creatives.animation.tcuAnimation.description.production")),1)):u("",!0),t.$t("creatives.animation.tcuAnimation.description.director")?(o(),a("p",H,l(t.$t("creatives.animation.tcuAnimation.description.director")),1)):u("",!0),t.$t("creatives.animation.tcuAnimation.description.animationProduction")?(o(),a("p",V,l(t.$t("creatives.animation.tcuAnimation.description.animationProduction")),1)):u("",!0),t.$t("creatives.animation.tcuAnimation.description.productionSupport")?(o(),a("p",J,l(t.$t("creatives.animation.tcuAnimation.description.productionSupport")),1)):u("",!0),t.$t("creatives.animation.tcuAnimation.description.voiceActors")?(o(),a("p",Z,l(t.$t("creatives.animation.tcuAnimation.description.voiceActors")),1)):u("",!0),t.$t("creatives.animation.tcuAnimation.description.websiteProduction")?(o(),a("p",tt,l(t.$t("creatives.animation.tcuAnimation.description.websiteProduction")),1)):u("",!0)])]),n("div",et,[s(T,{href:"https://youtu.be/zLuemAdQlMs?si=YaSzwIwY0uxHelyu",target:"_blank",icon:["fas","play"],text:t.$t("creatives.animation.tcuAnimation.watch"),alt:"本編動画を見る（世田谷区公式YouTube）",class:"animation btn-primary"},null,8,["text"]),s(T,{href:"https://tcu-animation.jp",target:"_blank",icon:["fas","globe"],text:t.$t("creatives.animation.tcuAnimation.site"),alt:"公式サイトへ（都市大アニメーション）",class:"btn-secondary"},null,8,["text"])])])])])])}}},[["__scopeId","data-v-f1ff1352"]]),at={programming:[{id:"manapuraza",title:"creatives.prog.manapuraza.title",description:"creatives.prog.manapuraza.description",url:"https://manapuraza.com",thumbnail:"/assets/manapuraza-zXL48GyL.webp"},{id:"dcchan-net",title:"creatives.prog.dcchanAi.title",description:"creatives.prog.dcchanAi.description",url:"https://でじこんちゃん.net/",thumbnail:"/assets/dcchan-ai-DQMaauKo.webp"},{id:"numeron-game",title:"creatives.prog.numeron.title",description:"creatives.prog.numeron.description",url:"https://tmana.sub.jp/numeron/dirs/src/numeron.html",thumbnail:"/assets/numeron-Y2HPfB9X.webp"},{id:"amausyrup",title:"creatives.prog.amauSyrup.title",description:"creatives.prog.amauSyrup.description",url:"https://amausyrup.net",thumbnail:"/assets/amau-Bi4Rza-Y.webp"},{id:"officeTsuyuki",title:"creatives.prog.officeTsuyuki.title",description:"creatives.prog.officeTsuyuki.description",url:"https://office-tsuyuki.pom.jp",thumbnail:"/assets/office-tsuyuki-CWPlMAxz.webp"},{id:"tcudc-bot",title:"creatives.prog.dcchanBot.title",description:"creatives.prog.dcchanBot.description",url:"https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html",thumbnail:"/assets/dcchan-twitterbot-ChbbLu-N.webp"},{id:"seki-ken",title:"creatives.prog.sekiLab.title",description:"creatives.prog.sekiLab.description",url:"https://www.comm.tcu.ac.jp/seki-ken",thumbnail:"/assets/sekilab-ta5uogNW.webp"},{id:"tcu-alumni",title:"creatives.prog.tcuAlumni.title",description:"creatives.prog.tcuAlumni.description",url:"https://tcu-alumni.vercel.app",thumbnail:"/assets/tcu-alumni-CtWTDBmZ.webp"},{id:"population-todohuken",title:"creatives.prog.populationGraph.title",description:"creatives.prog.populationGraph.description",url:"https://population-todohuken.vercel.app/",thumbnail:"/assets/population-todohuken-B4KxttW4.webp"},{id:"sysb-wtm",title:"creatives.prog.wtmApp.title",description:"creatives.prog.wtmApp.description",url:"https://github.com/ManatoYamashita/SysB_wtm",thumbnail:"/assets/wtm-CGX48E82.webp"},{id:"dum-manapuraza",title:"creatives.prog.downUnder.title",description:"creatives.prog.downUnder.description",url:"https://dum.manapuraza.com",thumbnail:"/assets/dum-BfJl7Prw.webp"},{id:"flickgame",title:"creatives.prog.wagiri.title",description:"creatives.prog.wagiri.description",url:"https://flickgame.tcu-dc.net/",thumbnail:"/assets/flickgame-wagiri-QBMGbBfO.webp"},{id:"tcu-animation",title:"creatives.prog.tcuAnimation.title",description:"creatives.prog.tcuAnimation.description",url:"https://tcu-animation.jp/",thumbnail:"/assets/tcu-animation-DhhafT54.webp"},{id:"text-layout",title:"creatives.prog.textLayout.title",description:"creatives.prog.textLayout.description",url:"https://text-layout.manapuraza.com/",thumbnail:"/assets/textlayout-CIKgQXPA.webp"},{id:"cococareer-lp",title:"creatives.prog.cococareer-lp.title",description:"creatives.prog.cococareer-lp.description",url:"https://cococareer-lp.vercel.app/",thumbnail:"/assets/cococareer-lp-DN3Tw7sQ.webp"}],graphics:[{id:"pixiv-gallery",title:"creatives.graphics.pixiv.title",description:"creatives.graphics.pixiv.description",url:"https://www.pixiv.net/users/87914659",thumbnail:"/assets/illustration-NtUOENXL.webp"}],video:[{id:"manapuraza-youtube",title:"creatives.video.tcuDcChannel.title",description:"creatives.video.tcuDcChannel.description",url:"https://www.youtube.com/@manapuraza",thumbnail:"/assets/ytb-manapuraza-sMzcIrWp.webp"},{id:"tcu-dc-youtube",title:"creatives.video.personalChannel.title",description:"creatives.video.personalChannel.description",url:"https://www.youtube.com/@tcu_dc",thumbnail:"/assets/ytb-tcudc-D8vdc_2F.webp"}]};
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ot,nt,rt,st,lt,ct,pt,ut,dt=function(){return"undefined"!=typeof window},mt=function(){return ot||dt()&&(ot=window.gsap)&&ot.registerPlugin&&ot},ht=function(t){return"string"==typeof t},vt=function(t){return"function"==typeof t},gt=function(t,e){var i="x"===e?"Width":"Height",a="scroll"+i,o="client"+i;return t===rt||t===st||t===lt?Math.max(st[a],lt[a])-(rt["inner"+i]||st[o]||lt[o]):t[a]-t["offset"+i]},yt=function(t,e){var i="scroll"+("x"===e?"Left":"Top");return t===rt&&(null!=t.pageXOffset?i="page"+e.toUpperCase()+"Offset":t=null!=st[i]?st:lt),function(){return t[i]}},ft=function(t,e){if(!(t=ct(t)[0])||!t.getBoundingClientRect)return{x:0,y:0};var i=t.getBoundingClientRect(),a=!e||e===rt||e===lt,o=a?{top:st.clientTop-(rt.pageYOffset||st.scrollTop||lt.scrollTop||0),left:st.clientLeft-(rt.pageXOffset||st.scrollLeft||lt.scrollLeft||0)}:e.getBoundingClientRect(),n={x:i.left-o.left,y:i.top-o.top};return!a&&e&&(n.x+=yt(e,"x")(),n.y+=yt(e,"y")()),n},wt=function(t,e,i,a,o){return isNaN(t)||"object"==typeof t?ht(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+a-o:"max"===t?gt(e,i)-o:Math.min(gt(e,i),ft(t,e)[i]-o):parseFloat(t)-o},bt=function(){ot=mt(),dt()&&ot&&"undefined"!=typeof document&&document.body&&(rt=window,lt=document.body,st=document.documentElement,ct=ot.utils.toArray,ot.config({autoKillThreshold:7}),pt=ot.config(),nt=1)},xt={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(t){ot=t,bt()},init:function(t,e,i,a,o){nt||bt();var n=this,r=ot.getProperty(t,"scrollSnapType");n.isWin=t===rt,n.target=t,n.tween=i,e=function(t,e,i,a){if(vt(t)&&(t=t(e,i,a)),"object"!=typeof t)return ht(t)&&"max"!==t&&"="!==t.charAt(1)?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var o,n={};for(o in t)n[o]="onAutoKill"!==o&&vt(t[o])?t[o](e,i,a):t[o];return n}(e,a,t,o),n.vars=e,n.autoKill=!!e.autoKill,n.getX=yt(t,"x"),n.getY=yt(t,"y"),n.x=n.xPrev=n.getX(),n.y=n.yPrev=n.getY(),ut||(ut=ot.core.globals().ScrollTrigger),"smooth"===ot.getProperty(t,"scrollBehavior")&&ot.set(t,{scrollBehavior:"auto"}),r&&"none"!==r&&(n.snap=1,n.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),null!=e.x?(n.add(n,"x",n.x,wt(e.x,t,"x",n.x,e.offsetX||0),a,o),n._props.push("scrollTo_x")):n.skipX=1,null!=e.y?(n.add(n,"y",n.y,wt(e.y,t,"y",n.y,e.offsetY||0),a,o),n._props.push("scrollTo_y")):n.skipY=1},render:function(t,e){for(var i,a,o,n,r,s=e._pt,l=e.target,c=e.tween,p=e.autoKill,u=e.xPrev,d=e.yPrev,m=e.isWin,h=e.snap,v=e.snapInline;s;)s.r(t,s.d),s=s._next;i=m||!e.skipX?e.getX():u,o=(a=m||!e.skipY?e.getY():d)-d,n=i-u,r=pt.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),p&&(!e.skipX&&(n>r||n<-r)&&i<gt(l,"x")&&(e.skipX=1),!e.skipY&&(o>r||o<-r)&&a<gt(l,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(c.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(c,e.vars.onAutoKillParams||[]))),m?rt.scrollTo(e.skipX?i:e.x,e.skipY?a:e.y):(e.skipY||(l.scrollTop=e.y),e.skipX||(l.scrollLeft=e.x)),!h||1!==t&&0!==t||(a=l.scrollTop,i=l.scrollLeft,v?l.style.scrollSnapType=v:l.style.removeProperty("scroll-snap-type"),l.scrollTop=a+1,l.scrollLeft=i+1,l.scrollTop=a,l.scrollLeft=i),e.xPrev=e.x,e.yPrev=e.y,ut&&ut.update()},kill:function(t){var e="scrollTo"===t,i=this._props.indexOf(t);return(e||"scrollTo_x"===t)&&(this.skipX=1),(e||"scrollTo_y"===t)&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};xt.max=gt,xt.getOffset=ft,xt.buildGetter=yt,mt()&&ot.registerPlugin(xt);const kt={class:"creatives"},_t={id:"main-contents"},At={id:"programming"},Tt={id:"graphics"},$t={id:"video"},Ct=e({__name:"Creatives",setup(e,{expose:i}){t.registerPlugin(xt);const r=c((()=>[...at.programming].sort((()=>Math.random()-.5))));return i({creativesData:at}),(t,e)=>(o(),a("div",kt,[s(z),n("main",null,[n("div",_t,[s(it),n("section",At,[e[0]||(e[0]=n("h2",null,"Programming / Web",-1)),n("p",null,l(t.$t("creatives.prog.paragraph")),1),n("ul",null,[(o(!0),a(g,null,y(r.value,((e,i)=>(o(),p(_,{key:e.id,url:e.url,title:t.$t(e.title),description:t.$t(e.description),thumbnail:e.thumbnail,index:i},null,8,["url","title","description","thumbnail","index"])))),128))])]),n("section",Tt,[e[1]||(e[1]=n("h2",null,"Illustration / Graphics",-1)),n("p",null,l(t.$t("creatives.graphics.paragraph")),1),n("ul",null,[(o(!0),a(g,null,y(f(at).graphics,((e,i)=>(o(),p(_,{key:e.id,url:e.url,title:t.$t(e.title),description:t.$t(e.description),thumbnail:e.thumbnail,index:i},null,8,["url","title","description","thumbnail","index"])))),128))])]),n("section",$t,[e[2]||(e[2]=n("h2",null,"Video / Animation",-1)),n("p",null,l(t.$t("creatives.video.paragraph")),1),n("ul",null,[(o(!0),a(g,null,y(f(at).video,((e,i)=>(o(),p(_,{key:e.id,url:e.url,title:t.$t(e.title),description:t.$t(e.description),thumbnail:e.thumbnail,index:i},null,8,["url","title","description","thumbnail","index"])))),128))])])]),e[3]||(e[3]=n("a",{href:"https://でじこんちゃん.net","aria-label":"でじこんちゃんのサイトへ"},[n("div",{id:"image-content"},[n("img",{id:"dc-chan",fetchpriority:"low",loading:"lazy",src:"/assets/dcchan-C_lGACy6.webp",alt:"dc-chan"})])],-1))])]))}},[["__scopeId","data-v-af688e6d"]]);export{Ct as default};
//# sourceMappingURL=Creatives-Zcc7DrWu.js.map
