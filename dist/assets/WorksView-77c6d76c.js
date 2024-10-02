import{J as g,r as h,o as n,c as p,a as t,q as k,t as m,d as v,K as _,L as u,j as b}from"./vendor-1e35b690.js";import{_ as w}from"./index-7df56618.js";import"./vendor_three-9bd6f82c.js";const f="/assets/1-133d7be9.webp",W="/assets/1-fa2694be.webp",y="/assets/10-7d4351f2.webp",$="/assets/11-549dc61d.webp",j="/assets/12-ead15f4c.webp",q="/assets/13-1cb2f421.webp",z="/assets/14-3e635ba5.webp",I="/assets/15-5c7090b6.webp",S="/assets/16-914a7e37.webp",L="/assets/17-4ea38fa7.webp",V="/assets/18-c75955b3.webp",B="/assets/2-ff7ebb5f.webp",x="/assets/3-c43eae9d.webp",N="/assets/4-352b0edc.webp",C="/assets/5-083a54ca.webp",A="/assets/6-548cabc7.webp",D="/assets/7-8978d6b3.webp",E="/assets/8-c8e7393f.webp",F="/assets/9-238f6383.webp",G="/assets/1-29a66a16.webp",J="/assets/2-6314bac5.webp";const K={name:"WorkItem",props:{url:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},thumbnail:{type:String,required:!0},index:{type:Number,required:!0}},mounted(){g.from(this.$el,{y:200,duration:1,delay:this.index*.2,ease:"power4.out"})}},M={class:"work-item"},O=["href"],P={class:"img-cover"},R=["src","alt"];function T(e,o,i,c,r,d){const l=h("fa");return n(),p("li",M,[t("a",{href:i.url,target:"_blank"},[t("div",P,[t("img",{src:i.thumbnail,alt:i.title,loading:"lazy"},null,8,R)]),t("h3",null,[k(m(i.title)+" ",1),v(l,{icon:["fas","arrow-up-right-from-square"],class:"fa"})]),t("p",null,m(i.description),1)],8,O)])}const U=w(K,[["render",T],["__scopeId","data-v-ec589325"]]),Y="/assets/dcchan-ad85b21b.webp";const H={name:"WorksView",components:{WorkItem:U},data(){return{graphicsWorks:this.generateWorks("graphics"),programmingWorks:this.generateWorks("prog"),videoWorks:this.generateWorks("video")}},methods:{generateWorks(e){return({graphics:["https://www.pixiv.net/users/87914659"],prog:["https://manapuraza.com","https://でじこんちゃん.net/","https://dum.manapuraza.com","https://tmana.sub.jp/numeron/dirs/src/numeron.html","https://amausyrup.net","https://www.comm.tcu.ac.jp/tcu-acc/","https://jamstack-blog-test.vercel.app/","https://chaintence.shokm.net/","https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html","https://www.comm.tcu.ac.jp/seki-ken","https://sekilab-quiz.vercel.app/","https://killerdie-2023.netlify.app/","https://population-todohuken.vercel.app/","https://github.com/ManatoYamashita/SysB_wtm","https://flickgame.tcu-dc.net/","https://hpb-2023.manapuraza.com/","https://tcu-animation.manapuraza.com/","https://www.sto.tcu.ac.jp/"],video:["https://www.youtube.com/@manapuraza","https://www.youtube.com/@tcu_dc"]}[e]||[]).map((c,r)=>({url:c||"",title:`works.${e}.${r+1}.title`,description:`works.${e}.${r+1}.description`,thumbnail:new URL(Object.assign({"/src/assets/works-thumbnail/graphics/1.webp":f,"/src/assets/works-thumbnail/prog/1.webp":W,"/src/assets/works-thumbnail/prog/10.webp":y,"/src/assets/works-thumbnail/prog/11.webp":$,"/src/assets/works-thumbnail/prog/12.webp":j,"/src/assets/works-thumbnail/prog/13.webp":q,"/src/assets/works-thumbnail/prog/14.webp":z,"/src/assets/works-thumbnail/prog/15.webp":I,"/src/assets/works-thumbnail/prog/16.webp":S,"/src/assets/works-thumbnail/prog/17.webp":L,"/src/assets/works-thumbnail/prog/18.webp":V,"/src/assets/works-thumbnail/prog/2.webp":B,"/src/assets/works-thumbnail/prog/3.webp":x,"/src/assets/works-thumbnail/prog/4.webp":N,"/src/assets/works-thumbnail/prog/5.webp":C,"/src/assets/works-thumbnail/prog/6.webp":A,"/src/assets/works-thumbnail/prog/7.webp":D,"/src/assets/works-thumbnail/prog/8.webp":E,"/src/assets/works-thumbnail/prog/9.webp":F,"/src/assets/works-thumbnail/video/1.webp":G,"/src/assets/works-thumbnail/video/2.webp":J})[`/src/assets/works-thumbnail/${e}/${r+1}.webp`],self.location).href}))}}},Q={class:"works"},X={id:"main-contents"};function Z(e,o,i,c,r,d){const l=h("WorkItem");return n(),p("div",Q,[o[4]||(o[4]=t("h1",null,"Works",-1)),t("main",null,[t("div",X,[o[0]||(o[0]=t("h2",null,"Illustration / Graphics",-1)),t("ul",null,[(n(!0),p(_,null,u(r.graphicsWorks,(s,a)=>(n(),b(l,{key:a,url:s.url,title:e.$t(s.title),description:e.$t(s.description),thumbnail:s.thumbnail,index:a},null,8,["url","title","description","thumbnail","index"]))),128))]),o[1]||(o[1]=t("h2",null,"Programming / Web",-1)),t("ul",null,[(n(!0),p(_,null,u(r.programmingWorks,(s,a)=>(n(),b(l,{key:a,url:s.url,title:e.$t(s.title),description:e.$t(s.description),thumbnail:s.thumbnail,index:a},null,8,["url","title","description","thumbnail","index"]))),128))]),o[2]||(o[2]=t("h2",null,"Video / Animation",-1)),t("ul",null,[(n(!0),p(_,null,u(r.videoWorks,(s,a)=>(n(),b(l,{key:a,url:s.url,title:e.$t(s.title),description:e.$t(s.description),thumbnail:s.thumbnail,index:a},null,8,["url","title","description","thumbnail","index"]))),128))])]),o[3]||(o[3]=t("a",{href:"https://でじこんちゃん.net","aria-label":"でじこんちゃんのサイトへ"},[t("div",{id:"image-content"},[t("img",{id:"dc-chan",fetchpriority:"low",loading:"lazy",src:Y,alt:"dc-chan"})])],-1))])])}const ot=w(H,[["render",Z],["__scopeId","data-v-cc7ef670"]]);export{ot as default};
//# sourceMappingURL=WorksView-77c6d76c.js.map