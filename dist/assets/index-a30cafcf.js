(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Sc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const at={},Ar=[],gn=()=>{},qm=()=>!1,$m=/^on[^a-z]/,ao=t=>$m.test(t),bc=t=>t.startsWith("onUpdate:"),yt=Object.assign,Ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Km=Object.prototype.hasOwnProperty,Qe=(t,e)=>Km.call(t,e),He=Array.isArray,fa=t=>so(t)==="[object Map]",Zm=t=>so(t)==="[object Set]",Ye=t=>typeof t=="function",Mt=t=>typeof t=="string",Tc=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",Ch=t=>dt(t)&&Ye(t.then)&&Ye(t.catch),Jm=Object.prototype.toString,so=t=>Jm.call(t),Qm=t=>so(t).slice(8,-1),eg=t=>so(t)==="[object Object]",Ac=t=>Mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=Sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tg=/-(\w)/g,Rn=oo(t=>t.replace(tg,(e,n)=>n?n.toUpperCase():"")),ng=/\B([A-Z])/g,Xr=oo(t=>t.replace(ng,"-$1").toLowerCase()),lo=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bo=oo(t=>t?`on${lo(t)}`:""),Sa=(t,e)=>!Object.is(t,e),ko=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ws=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ig=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rg=t=>{const e=Mt(t)?Number(t):NaN;return isNaN(e)?t:e};let Eu;const Ol=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function co(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Mt(i)?lg(i):co(i);if(r)for(const a in r)e[a]=r[a]}return e}else{if(Mt(t))return t;if(dt(t))return t}}const ag=/;(?![^(]*\))/g,sg=/:([^]+)/,og=/\/\*[^]*?\*\//g;function lg(t){const e={};return t.replace(og,"").split(ag).forEach(n=>{if(n){const i=n.split(sg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function uo(t){let e="";if(Mt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=uo(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ug=Sc(cg);function Ph(t){return!!t||t===""}let cn;class fg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=cn;try{return cn=this,e()}finally{cn=n}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function dg(t,e=cn){e&&e.active&&e.effects.push(t)}function hg(){return cn}const wc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lh=t=>(t.w&gi)>0,Dh=t=>(t.n&gi)>0,pg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gi},mg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Lh(r)&&!Dh(r)?r.delete(t):e[n++]=r,r.w&=~gi,r.n&=~gi}e.length=n}},Fl=new WeakMap;let sa=0,gi=1;const zl=30;let fn;const Wi=Symbol(""),Bl=Symbol("");class Rc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dg(this,i)}run(){if(!this.active)return this.fn();let e=fn,n=fi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,fi=!0,gi=1<<++sa,sa<=zl?pg(this):Tu(this),this.fn()}finally{sa<=zl&&mg(this),gi=1<<--sa,fn=this.parent,fi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Tu(this),this.onStop&&this.onStop(),this.active=!1)}}function Tu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fi=!0;const Ih=[];function Yr(){Ih.push(fi),fi=!1}function jr(){const t=Ih.pop();fi=t===void 0?!0:t}function Xt(t,e,n){if(fi&&fn){let i=Fl.get(t);i||Fl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=wc()),Uh(r)}}function Uh(t,e){let n=!1;sa<=zl?Dh(t)||(t.n|=gi,n=!Lh(t)):n=!t.has(fn),n&&(t.add(fn),fn.deps.push(t))}function Vn(t,e,n,i,r,a){const o=Fl.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&He(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":He(t)?Ac(n)&&s.push(o.get("length")):(s.push(o.get(Wi)),fa(t)&&s.push(o.get(Bl)));break;case"delete":He(t)||(s.push(o.get(Wi)),fa(t)&&s.push(o.get(Bl)));break;case"set":fa(t)&&s.push(o.get(Wi));break}if(s.length===1)s[0]&&kl(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);kl(wc(l))}}function kl(t,e){const n=He(t)?t:[...t];for(const i of n)i.computed&&Au(i);for(const i of n)i.computed||Au(i)}function Au(t,e){(t!==fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gg=Sc("__proto__,__v_isRef,__isVue"),Nh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tc)),_g=Cc(),vg=Cc(!1,!0),xg=Cc(!0),wu=yg();function yg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=et(this);for(let a=0,o=this.length;a<o;a++)Xt(i,"get",a+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(et)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yr();const i=et(this)[e].apply(this,n);return jr(),i}}),t}function Mg(t){const e=et(this);return Xt(e,"has",t),e.hasOwnProperty(t)}function Cc(t=!1,e=!1){return function(i,r,a){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&a===(t?e?Fg:kh:e?Bh:zh).get(i))return i;const o=He(i);if(!t){if(o&&Qe(wu,r))return Reflect.get(wu,r,a);if(r==="hasOwnProperty")return Mg}const s=Reflect.get(i,r,a);return(Tc(r)?Nh.has(r):gg(r))||(t||Xt(i,"get",r),e)?s:It(s)?o&&Ac(r)?s:s.value:dt(s)?t?Hh(s):za(s):s}}const Sg=Oh(),bg=Oh(!0);function Oh(t=!1){return function(n,i,r,a){let o=n[i];if(Nr(o)&&It(o)&&!It(r))return!1;if(!t&&(!Xs(r)&&!Nr(r)&&(o=et(o),r=et(r)),!He(n)&&It(o)&&!It(r)))return o.value=r,!0;const s=He(n)&&Ac(i)?Number(i)<n.length:Qe(n,i),l=Reflect.set(n,i,r,a);return n===et(a)&&(s?Sa(r,o)&&Vn(n,"set",i,r):Vn(n,"add",i,r)),l}}function Eg(t,e){const n=Qe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Vn(t,"delete",e,void 0),i}function Tg(t,e){const n=Reflect.has(t,e);return(!Tc(e)||!Nh.has(e))&&Xt(t,"has",e),n}function Ag(t){return Xt(t,"iterate",He(t)?"length":Wi),Reflect.ownKeys(t)}const Fh={get:_g,set:Sg,deleteProperty:Eg,has:Tg,ownKeys:Ag},wg={get:xg,set(t,e){return!0},deleteProperty(t,e){return!0}},Rg=yt({},Fh,{get:vg,set:bg}),Pc=t=>t,fo=t=>Reflect.getPrototypeOf(t);function $a(t,e,n=!1,i=!1){t=t.__v_raw;const r=et(t),a=et(e);n||(e!==a&&Xt(r,"get",e),Xt(r,"get",a));const{has:o}=fo(r),s=i?Pc:n?Ic:ba;if(o.call(r,e))return s(t.get(e));if(o.call(r,a))return s(t.get(a));t!==r&&t.get(e)}function Ka(t,e=!1){const n=this.__v_raw,i=et(n),r=et(t);return e||(t!==r&&Xt(i,"has",t),Xt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Za(t,e=!1){return t=t.__v_raw,!e&&Xt(et(t),"iterate",Wi),Reflect.get(t,"size",t)}function Ru(t){t=et(t);const e=et(this);return fo(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function Cu(t,e){e=et(e);const n=et(this),{has:i,get:r}=fo(n);let a=i.call(n,t);a||(t=et(t),a=i.call(n,t));const o=r.call(n,t);return n.set(t,e),a?Sa(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function Pu(t){const e=et(this),{has:n,get:i}=fo(e);let r=n.call(e,t);r||(t=et(t),r=n.call(e,t)),i&&i.call(e,t);const a=e.delete(t);return r&&Vn(e,"delete",t,void 0),a}function Lu(){const t=et(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function Ja(t,e){return function(i,r){const a=this,o=a.__v_raw,s=et(o),l=e?Pc:t?Ic:ba;return!t&&Xt(s,"iterate",Wi),o.forEach((c,u)=>i.call(r,l(c),l(u),a))}}function Qa(t,e,n){return function(...i){const r=this.__v_raw,a=et(r),o=fa(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Pc:e?Ic:ba;return!e&&Xt(a,"iterate",l?Bl:Wi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:s?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:this}}function Cg(){const t={get(a){return $a(this,a)},get size(){return Za(this)},has:Ka,add:Ru,set:Cu,delete:Pu,clear:Lu,forEach:Ja(!1,!1)},e={get(a){return $a(this,a,!1,!0)},get size(){return Za(this)},has:Ka,add:Ru,set:Cu,delete:Pu,clear:Lu,forEach:Ja(!1,!0)},n={get(a){return $a(this,a,!0)},get size(){return Za(this,!0)},has(a){return Ka.call(this,a,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Ja(!0,!1)},i={get(a){return $a(this,a,!0,!0)},get size(){return Za(this,!0)},has(a){return Ka.call(this,a,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Ja(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=Qa(a,!1,!1),n[a]=Qa(a,!0,!1),e[a]=Qa(a,!1,!0),i[a]=Qa(a,!0,!0)}),[t,n,e,i]}const[Pg,Lg,Dg,Ig]=Cg();function Lc(t,e){const n=e?t?Ig:Dg:t?Lg:Pg;return(i,r,a)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Qe(n,r)&&r in i?n:i,r,a)}const Ug={get:Lc(!1,!1)},Ng={get:Lc(!1,!0)},Og={get:Lc(!0,!1)},zh=new WeakMap,Bh=new WeakMap,kh=new WeakMap,Fg=new WeakMap;function zg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bg(t){return t.__v_skip||!Object.isExtensible(t)?0:zg(Qm(t))}function za(t){return Nr(t)?t:Dc(t,!1,Fh,Ug,zh)}function kg(t){return Dc(t,!1,Rg,Ng,Bh)}function Hh(t){return Dc(t,!0,wg,Og,kh)}function Dc(t,e,n,i,r){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=r.get(t);if(a)return a;const o=Bg(t);if(o===0)return t;const s=new Proxy(t,o===2?i:n);return r.set(t,s),s}function wr(t){return Nr(t)?wr(t.__v_raw):!!(t&&t.__v_isReactive)}function Nr(t){return!!(t&&t.__v_isReadonly)}function Xs(t){return!!(t&&t.__v_isShallow)}function Gh(t){return wr(t)||Nr(t)}function et(t){const e=t&&t.__v_raw;return e?et(e):t}function Vh(t){return Ws(t,"__v_skip",!0),t}const ba=t=>dt(t)?za(t):t,Ic=t=>dt(t)?Hh(t):t;function Wh(t){fi&&fn&&(t=et(t),Uh(t.dep||(t.dep=wc())))}function Xh(t,e){t=et(t);const n=t.dep;n&&kl(n)}function It(t){return!!(t&&t.__v_isRef===!0)}function Hg(t){return Yh(t,!1)}function Gg(t){return Yh(t,!0)}function Yh(t,e){return It(t)?t:new Vg(t,e)}class Vg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:et(e),this._value=n?e:ba(e)}get value(){return Wh(this),this._value}set value(e){const n=this.__v_isShallow||Xs(e)||Nr(e);e=n?e:et(e),Sa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ba(e),Xh(this))}}function Rr(t){return It(t)?t.value:t}const Wg={get:(t,e,n)=>Rr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return It(r)&&!It(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function jh(t){return wr(t)?t:new Proxy(t,Wg)}class Xg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rc(e,()=>{this._dirty||(this._dirty=!0,Xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=et(this);return Wh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yg(t,e,n=!1){let i,r;const a=Ye(t);return a?(i=t,r=gn):(i=t.get,r=t.set),new Xg(i,r,a||!r,n)}function di(t,e,n,i){let r;try{r=i?t(...i):t()}catch(a){ho(a,e,n)}return r}function an(t,e,n,i){if(Ye(t)){const a=di(t,e,n,i);return a&&Ch(a)&&a.catch(o=>{ho(o,e,n)}),a}const r=[];for(let a=0;a<t.length;a++)r.push(an(t[a],e,n,i));return r}function ho(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=n;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){di(l,null,10,[t,o,s]);return}}jg(t,n,r,i)}function jg(t,e,n,i=!0){console.error(t)}let Ea=!1,Hl=!1;const Dt=[];let An=0;const Cr=[];let Fn=null,Ni=0;const qh=Promise.resolve();let Uc=null;function $h(t){const e=Uc||qh;return t?e.then(this?t.bind(this):t):e}function qg(t){let e=An+1,n=Dt.length;for(;e<n;){const i=e+n>>>1;Ta(Dt[i])<t?e=i+1:n=i}return e}function Nc(t){(!Dt.length||!Dt.includes(t,Ea&&t.allowRecurse?An+1:An))&&(t.id==null?Dt.push(t):Dt.splice(qg(t.id),0,t),Kh())}function Kh(){!Ea&&!Hl&&(Hl=!0,Uc=qh.then(Jh))}function $g(t){const e=Dt.indexOf(t);e>An&&Dt.splice(e,1)}function Kg(t){He(t)?Cr.push(...t):(!Fn||!Fn.includes(t,t.allowRecurse?Ni+1:Ni))&&Cr.push(t),Kh()}function Du(t,e=Ea?An+1:0){for(;e<Dt.length;e++){const n=Dt[e];n&&n.pre&&(Dt.splice(e,1),e--,n())}}function Zh(t){if(Cr.length){const e=[...new Set(Cr)];if(Cr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fn.sort((n,i)=>Ta(n)-Ta(i)),Ni=0;Ni<Fn.length;Ni++)Fn[Ni]();Fn=null,Ni=0}}const Ta=t=>t.id==null?1/0:t.id,Zg=(t,e)=>{const n=Ta(t)-Ta(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jh(t){Hl=!1,Ea=!0,Dt.sort(Zg);const e=gn;try{for(An=0;An<Dt.length;An++){const n=Dt[An];n&&n.active!==!1&&di(n,null,14)}}finally{An=0,Dt.length=0,Zh(),Ea=!1,Uc=null,(Dt.length||Cr.length)&&Jh()}}function Jg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||at;let r=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||at;d&&(r=n.map(p=>Mt(p)?p.trim():p)),f&&(r=n.map(ig))}let s,l=i[s=Bo(e)]||i[s=Bo(Rn(e))];!l&&a&&(l=i[s=Bo(Xr(e))]),l&&an(l,t,6,r);const c=i[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,an(c,t,6,r)}}function Qh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const a=t.emits;let o={},s=!1;if(!Ye(t)){const l=c=>{const u=Qh(c,e,!0);u&&(s=!0,yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(dt(t)&&i.set(t,null),null):(He(a)?a.forEach(l=>o[l]=null):yt(o,a),dt(t)&&i.set(t,o),o)}function po(t,e){return!t||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(t,e[0].toLowerCase()+e.slice(1))||Qe(t,Xr(e))||Qe(t,e))}let Zt=null,mo=null;function Ys(t){const e=Zt;return Zt=t,mo=t&&t.type.__scopeId||null,e}function Qg(t){mo=t}function e1(){mo=null}function Bn(t,e=Zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Wu(-1);const a=Ys(e);let o;try{o=t(...r)}finally{Ys(a),i._d&&Wu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ho(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:x,inheritAttrs:v}=t;let m,h;const _=Ys(t);try{if(n.shapeFlag&4){const b=r||i;m=bn(u.call(b,b,f,a,p,d,x)),h=l}else{const b=e;m=bn(b.length>1?b(a,{attrs:l,slots:s,emit:c}):b(a,null)),h=e.props?l:t1(l)}}catch(b){ha.length=0,ho(b,t,1),m=ft(Gn)}let g=m;if(h&&v!==!1){const b=Object.keys(h),{shapeFlag:E}=g;b.length&&E&7&&(o&&b.some(bc)&&(h=n1(h,o)),g=_i(g,h))}return n.dirs&&(g=_i(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),m=g,Ys(_),m}const t1=t=>{let e;for(const n in t)(n==="class"||n==="style"||ao(n))&&((e||(e={}))[n]=t[n]);return e},n1=(t,e)=>{const n={};for(const i in t)(!bc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function i1(t,e,n){const{props:i,children:r,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Iu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!po(c,d))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===o?!1:i?o?Iu(i,o,c):!0:!!o;return!1}function Iu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const a=i[r];if(e[a]!==t[a]&&!po(n,a))return!0}return!1}function r1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const a1=t=>t.__isSuspense;function s1(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Kg(t)}const es={};function Pr(t,e,n){return ep(t,e,n)}function ep(t,e,{immediate:n,deep:i,flush:r,onTrack:a,onTrigger:o}=at){var s;const l=hg()===((s=wt)==null?void 0:s.scope)?wt:null;let c,u=!1,f=!1;if(It(t)?(c=()=>t.value,u=Xs(t)):wr(t)?(c=()=>t,i=!0):He(t)?(f=!0,u=t.some(b=>wr(b)||Xs(b)),c=()=>t.map(b=>{if(It(b))return b.value;if(wr(b))return Hi(b);if(Ye(b))return di(b,l,2)})):Ye(t)?e?c=()=>di(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),an(t,l,3,[p])}:c=gn,e&&i){const b=c;c=()=>Hi(b())}let d,p=b=>{d=_.onStop=()=>{di(b,l,4)}},x;if(wa)if(p=gn,e?n&&an(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const b=n0();x=b.__watcherHandles||(b.__watcherHandles=[])}else return gn;let v=f?new Array(t.length).fill(es):es;const m=()=>{if(_.active)if(e){const b=_.run();(i||u||(f?b.some((E,C)=>Sa(E,v[C])):Sa(b,v)))&&(d&&d(),an(e,l,3,[b,v===es?void 0:f&&v[0]===es?[]:v,p]),v=b)}else _.run()};m.allowRecurse=!!e;let h;r==="sync"?h=m:r==="post"?h=()=>Ht(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),h=()=>Nc(m));const _=new Rc(c,h);e?n?m():v=_.run():r==="post"?Ht(_.run.bind(_),l&&l.suspense):_.run();const g=()=>{_.stop(),l&&l.scope&&Ec(l.scope.effects,_)};return x&&x.push(g),g}function o1(t,e,n){const i=this.proxy,r=Mt(t)?t.includes(".")?tp(i,t):()=>i[t]:t.bind(i,i);let a;Ye(e)?a=e:(a=e.handler,n=e);const o=wt;Fr(this);const s=ep(r,a.bind(i),n);return o?Fr(o):Xi(),s}function tp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Hi(t,e){if(!dt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),It(t))Hi(t.value,e);else if(He(t))for(let n=0;n<t.length;n++)Hi(t[n],e);else if(Zm(t)||fa(t))t.forEach(n=>{Hi(n,e)});else if(eg(t))for(const n in t)Hi(t[n],e);return t}function l1(t,e){const n=Zt;if(n===null)return t;const i=yo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[o,s,l,c=at]=e[a];o&&(Ye(o)&&(o={mounted:o,updated:o}),o.deep&&Hi(s),r.push({dir:o,instance:i,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ti(t,e,n,i){const r=t.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){const s=r[o];a&&(s.oldValue=a[o].value);let l=s.dir[i];l&&(Yr(),an(l,n,8,[t.el,s,t,e]),jr())}}function c1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fc(()=>{t.isMounted=!0}),sp(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],np={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},u1={name:"BaseTransition",props:np,setup(t,{slots:e}){const n=q1(),i=c1();let r;return()=>{const a=e.default&&rp(e.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const v of a)if(v.type!==Gn){o=v;break}}const s=et(t),{mode:l}=s;if(i.isLeaving)return Go(o);const c=Uu(o);if(!c)return Go(o);const u=Gl(c,s,i,n);Vl(c,u);const f=n.subTree,d=f&&Uu(f);let p=!1;const{getTransitionKey:x}=c.type;if(x){const v=x();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==Gn&&(!Oi(c,d)||p)){const v=Gl(d,s,i,n);if(Vl(d,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Go(o);l==="in-out"&&c.type!==Gn&&(v.delayLeave=(m,h,_)=>{const g=ip(i,d);g[String(d.key)]=d,m._leaveCb=()=>{h(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},f1=u1;function ip(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Gl(t,e,n,i){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:x,onBeforeAppear:v,onAppear:m,onAfterAppear:h,onAppearCancelled:_}=e,g=String(t.key),b=ip(n,t),E=(P,S)=>{P&&an(P,i,9,S)},C=(P,S)=>{const A=S[1];E(P,S),He(P)?P.every(B=>B.length<=1)&&A():P.length<=1&&A()},w={mode:a,persisted:o,beforeEnter(P){let S=s;if(!n.isMounted)if(r)S=v||s;else return;P._leaveCb&&P._leaveCb(!0);const A=b[g];A&&Oi(t,A)&&A.el._leaveCb&&A.el._leaveCb(),E(S,[P])},enter(P){let S=l,A=c,B=u;if(!n.isMounted)if(r)S=m||l,A=h||c,B=_||u;else return;let N=!1;const G=P._enterCb=D=>{N||(N=!0,D?E(B,[P]):E(A,[P]),w.delayedLeave&&w.delayedLeave(),P._enterCb=void 0)};S?C(S,[P,G]):G()},leave(P,S){const A=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return S();E(f,[P]);let B=!1;const N=P._leaveCb=G=>{B||(B=!0,S(),G?E(x,[P]):E(p,[P]),P._leaveCb=void 0,b[A]===t&&delete b[A])};b[A]=t,d?C(d,[P,N]):N()},clone(P){return Gl(P,e,n,i)}};return w}function Go(t){if(go(t))return t=_i(t),t.children=null,t}function Uu(t){return go(t)?t.children?t.children[0]:void 0:t}function Vl(t,e){t.shapeFlag&6&&t.component?Vl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rp(t,e=!1,n){let i=[],r=0;for(let a=0;a<t.length;a++){let o=t[a];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===Sn?(o.patchFlag&128&&r++,i=i.concat(rp(o.children,e,s))):(e||o.type!==Gn)&&i.push(s!=null?_i(o,{key:s}):o)}if(r>1)for(let a=0;a<i.length;a++)i[a].patchFlag=-2;return i}function Oc(t,e){return Ye(t)?(()=>yt({name:t.name},e,{setup:t}))():t}const Fs=t=>!!t.type.__asyncLoader,go=t=>t.type.__isKeepAlive;function d1(t,e){ap(t,"a",e)}function h1(t,e){ap(t,"da",e)}function ap(t,e,n=wt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(_o(e,i,n),n){let r=n.parent;for(;r&&r.parent;)go(r.parent.vnode)&&p1(i,e,n,r),r=r.parent}}function p1(t,e,n,i){const r=_o(e,t,i,!0);op(()=>{Ec(i[e],r)},n)}function _o(t,e,n=wt,i=!1){if(n){const r=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yr(),Fr(n);const s=an(e,n,t,o);return Xi(),jr(),s});return i?r.unshift(a):r.push(a),a}}const qn=t=>(e,n=wt)=>(!wa||t==="sp")&&_o(t,(...i)=>e(...i),n),m1=qn("bm"),Fc=qn("m"),g1=qn("bu"),_1=qn("u"),sp=qn("bum"),op=qn("um"),v1=qn("sp"),x1=qn("rtg"),y1=qn("rtc");function M1(t,e=wt){_o("ec",t,e)}const zc="components";function Bc(t,e){return cp(zc,t,!0,e)||t}const lp=Symbol.for("v-ndc");function S1(t){return Mt(t)?cp(zc,t,!1)||t:t||lp}function cp(t,e,n=!0,i=!1){const r=Zt||wt;if(r){const a=r.type;if(t===zc){const s=Q1(a,!1);if(s&&(s===e||s===Rn(e)||s===lo(Rn(e))))return a}const o=Nu(r[t]||a[t],e)||Nu(r.appContext[t],e);return!o&&i?a:o}}function Nu(t,e){return t&&(t[e]||t[Rn(e)]||t[lo(Rn(e))])}const Wl=t=>t?yp(t)?yo(t)||t.proxy:Wl(t.parent):null,da=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wl(t.parent),$root:t=>Wl(t.root),$emit:t=>t.emit,$options:t=>kc(t),$forceUpdate:t=>t.f||(t.f=()=>Nc(t.update)),$nextTick:t=>t.n||(t.n=$h.bind(t.proxy)),$watch:t=>o1.bind(t)}),Vo=(t,e)=>t!==at&&!t.__isScriptSetup&&Qe(t,e),b1={get({_:t},e){const{ctx:n,setupState:i,data:r,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return a[e]}else{if(Vo(i,e))return o[e]=1,i[e];if(r!==at&&Qe(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Qe(c,e))return o[e]=3,a[e];if(n!==at&&Qe(n,e))return o[e]=4,n[e];Xl&&(o[e]=0)}}const u=da[e];let f,d;if(u)return e==="$attrs"&&Xt(t,"get",e),u(t);if((f=s.__cssModules)&&(f=f[e]))return f;if(n!==at&&Qe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:a}=t;return Vo(r,e)?(r[e]=n,!0):i!==at&&Qe(i,e)?(i[e]=n,!0):Qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:a}},o){let s;return!!n[o]||t!==at&&Qe(t,o)||Vo(e,o)||(s=a[0])&&Qe(s,o)||Qe(i,o)||Qe(da,o)||Qe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ou(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xl=!0;function E1(t){const e=kc(t),n=t.proxy,i=t.ctx;Xl=!1,e.beforeCreate&&Fu(e.beforeCreate,t,"bc");const{data:r,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:x,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:_,destroyed:g,unmounted:b,render:E,renderTracked:C,renderTriggered:w,errorCaptured:P,serverPrefetch:S,expose:A,inheritAttrs:B,components:N,directives:G,filters:D}=e;if(c&&T1(c,i,null),o)for(const Y in o){const Q=o[Y];Ye(Q)&&(i[Y]=Q.bind(n))}if(r){const Y=r.call(n,n);dt(Y)&&(t.data=za(Y))}if(Xl=!0,a)for(const Y in a){const Q=a[Y],ee=Ye(Q)?Q.bind(n,n):Ye(Q.get)?Q.get.bind(n,n):gn,le=!Ye(Q)&&Ye(Q.set)?Q.set.bind(n):gn,O=pt({get:ee,set:le});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>O.value,set:$=>O.value=$})}if(s)for(const Y in s)up(s[Y],i,n,Y);if(l){const Y=Ye(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(Q=>{zs(Q,Y[Q])})}u&&Fu(u,t,"c");function q(Y,Q){He(Q)?Q.forEach(ee=>Y(ee.bind(n))):Q&&Y(Q.bind(n))}if(q(m1,f),q(Fc,d),q(g1,p),q(_1,x),q(d1,v),q(h1,m),q(M1,P),q(y1,C),q(x1,w),q(sp,_),q(op,b),q(v1,S),He(A))if(A.length){const Y=t.exposed||(t.exposed={});A.forEach(Q=>{Object.defineProperty(Y,Q,{get:()=>n[Q],set:ee=>n[Q]=ee})})}else t.exposed||(t.exposed={});E&&t.render===gn&&(t.render=E),B!=null&&(t.inheritAttrs=B),N&&(t.components=N),G&&(t.directives=G)}function T1(t,e,n=gn){He(t)&&(t=Yl(t));for(const i in t){const r=t[i];let a;dt(r)?"default"in r?a=_n(r.from||i,r.default,!0):a=_n(r.from||i):a=_n(r),It(a)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function Fu(t,e,n){an(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function up(t,e,n,i){const r=i.includes(".")?tp(n,i):()=>n[i];if(Mt(t)){const a=e[t];Ye(a)&&Pr(r,a)}else if(Ye(t))Pr(r,t.bind(n));else if(dt(t))if(He(t))t.forEach(a=>up(a,e,n,i));else{const a=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(a)&&Pr(r,a,t)}}function kc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>js(l,c,o,!0)),js(l,e,o)),dt(e)&&a.set(e,l),l}function js(t,e,n,i=!1){const{mixins:r,extends:a}=e;a&&js(t,a,n,!0),r&&r.forEach(o=>js(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const s=A1[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const A1={data:zu,props:Bu,emits:Bu,methods:oa,computed:oa,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:oa,directives:oa,watch:R1,provide:zu,inject:w1};function zu(t,e){return e?t?function(){return yt(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function w1(t,e){return oa(Yl(t),Yl(e))}function Yl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function oa(t,e){return t?yt(Object.create(null),t,e):e}function Bu(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:yt(Object.create(null),Ou(t),Ou(e??{})):e}function R1(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const i in e)n[i]=Ft(t[i],e[i]);return n}function fp(){return{app:null,config:{isNativeTag:qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C1=0;function P1(t,e){return function(i,r=null){Ye(i)||(i=yt({},i)),r!=null&&!dt(r)&&(r=null);const a=fp(),o=new Set;let s=!1;const l=a.app={_uid:C1++,_component:i,_props:r,_container:null,_context:a,_instance:null,version:i0,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ye(c.install)?(o.add(c),c.install(l,...u)):Ye(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,f){if(!s){const d=ft(i,r);return d.appContext=a,u&&e?e(d,c):t(d,c,f),s=!0,l._container=c,c.__vue_app__=l,yo(d.component)||d.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){qs=l;try{return c()}finally{qs=null}}};return l}}let qs=null;function zs(t,e){if(wt){let n=wt.provides;const i=wt.parent&&wt.parent.provides;i===n&&(n=wt.provides=Object.create(i)),n[t]=e}}function _n(t,e,n=!1){const i=wt||Zt;if(i||qs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:qs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function L1(t,e,n,i=!1){const r={},a={};Ws(a,xo,1),t.propsDefaults=Object.create(null),dp(t,e,r,a);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:kg(r):t.type.props?t.props=r:t.props=a,t.attrs=a}function D1(t,e,n,i){const{props:r,attrs:a,vnode:{patchFlag:o}}=t,s=et(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(po(t.emitsOptions,d))continue;const p=e[d];if(l)if(Qe(a,d))p!==a[d]&&(a[d]=p,c=!0);else{const x=Rn(d);r[x]=jl(l,s,x,p,t,!1)}else p!==a[d]&&(a[d]=p,c=!0)}}}else{dp(t,e,r,a)&&(c=!0);let u;for(const f in s)(!e||!Qe(e,f)&&((u=Xr(f))===f||!Qe(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=jl(l,s,f,void 0,t,!0)):delete r[f]);if(a!==s)for(const f in a)(!e||!Qe(e,f))&&(delete a[f],c=!0)}c&&Vn(t,"set","$attrs")}function dp(t,e,n,i){const[r,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Os(l))continue;const c=e[l];let u;r&&Qe(r,u=Rn(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:po(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(a){const l=et(n),c=s||at;for(let u=0;u<a.length;u++){const f=a[u];n[f]=jl(r,l,f,c[f],t,!Qe(c,f))}}return o}function jl(t,e,n,i,r,a){const o=t[n];if(o!=null){const s=Qe(o,"default");if(s&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Fr(r),i=c[n]=l.call(null,e),Xi())}else i=l}o[0]&&(a&&!s?i=!1:o[1]&&(i===""||i===Xr(n))&&(i=!0))}return i}function hp(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const a=t.props,o={},s=[];let l=!1;if(!Ye(t)){const u=f=>{l=!0;const[d,p]=hp(f,e,!0);yt(o,d),p&&s.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return dt(t)&&i.set(t,Ar),Ar;if(He(a))for(let u=0;u<a.length;u++){const f=Rn(a[u]);ku(f)&&(o[f]=at)}else if(a)for(const u in a){const f=Rn(u);if(ku(f)){const d=a[u],p=o[f]=He(d)||Ye(d)?{type:d}:yt({},d);if(p){const x=Vu(Boolean,p.type),v=Vu(String,p.type);p[0]=x>-1,p[1]=v<0||x<v,(x>-1||Qe(p,"default"))&&s.push(f)}}}const c=[o,s];return dt(t)&&i.set(t,c),c}function ku(t){return t[0]!=="$"}function Hu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gu(t,e){return Hu(t)===Hu(e)}function Vu(t,e){return He(e)?e.findIndex(n=>Gu(n,t)):Ye(e)&&Gu(e,t)?0:-1}const pp=t=>t[0]==="_"||t==="$stable",Hc=t=>He(t)?t.map(bn):[bn(t)],I1=(t,e,n)=>{if(e._n)return e;const i=Bn((...r)=>Hc(e(...r)),n);return i._c=!1,i},mp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(pp(r))continue;const a=t[r];if(Ye(a))e[r]=I1(r,a,i);else if(a!=null){const o=Hc(a);e[r]=()=>o}}},gp=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},U1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=et(e),Ws(e,"_",n)):mp(e,t.slots={})}else t.slots={},e&&gp(t,e);Ws(t.slots,xo,1)},N1=(t,e,n)=>{const{vnode:i,slots:r}=t;let a=!0,o=at;if(i.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(yt(r,e),!n&&s===1&&delete r._):(a=!e.$stable,mp(e,r)),o=e}else e&&(gp(t,e),o={default:1});if(a)for(const s in r)!pp(s)&&!(s in o)&&delete r[s]};function ql(t,e,n,i,r=!1){if(He(t)){t.forEach((d,p)=>ql(d,e&&(He(e)?e[p]:e),n,i,r));return}if(Fs(i)&&!r)return;const a=i.shapeFlag&4?yo(i.component)||i.component.proxy:i.el,o=r?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===at?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,Qe(f,c)&&(f[c]=null)):It(c)&&(c.value=null)),Ye(l))di(l,s,12,[o,u]);else{const d=Mt(l),p=It(l);if(d||p){const x=()=>{if(t.f){const v=d?Qe(f,l)?f[l]:u[l]:l.value;r?He(v)&&Ec(v,a):He(v)?v.includes(a)||v.push(a):d?(u[l]=[a],Qe(f,l)&&(f[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Qe(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,Ht(x,n)):x()}}}const Ht=s1;function O1(t){return F1(t)}function F1(t,e){const n=Ol();n.__VUE__=!0;const{insert:i,remove:r,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=gn,insertStaticContent:x}=t,v=(y,L,I,k=null,j=null,ae=null,fe=!1,te=null,de=!!L.dynamicChildren)=>{if(y===L)return;y&&!Oi(y,L)&&(k=X(y),$(y,j,ae,!0),y=null),L.patchFlag===-2&&(de=!1,L.dynamicChildren=null);const{type:ce,ref:Re,shapeFlag:T}=L;switch(ce){case vo:m(y,L,I,k);break;case Gn:h(y,L,I,k);break;case Bs:y==null&&_(L,I,k,fe);break;case Sn:N(y,L,I,k,j,ae,fe,te,de);break;default:T&1?E(y,L,I,k,j,ae,fe,te,de):T&6?G(y,L,I,k,j,ae,fe,te,de):(T&64||T&128)&&ce.process(y,L,I,k,j,ae,fe,te,de,ne)}Re!=null&&j&&ql(Re,y&&y.ref,ae,L||y,!L)},m=(y,L,I,k)=>{if(y==null)i(L.el=s(L.children),I,k);else{const j=L.el=y.el;L.children!==y.children&&c(j,L.children)}},h=(y,L,I,k)=>{y==null?i(L.el=l(L.children||""),I,k):L.el=y.el},_=(y,L,I,k)=>{[y.el,y.anchor]=x(y.children,L,I,k,y.el,y.anchor)},g=({el:y,anchor:L},I,k)=>{let j;for(;y&&y!==L;)j=d(y),i(y,I,k),y=j;i(L,I,k)},b=({el:y,anchor:L})=>{let I;for(;y&&y!==L;)I=d(y),r(y),y=I;r(L)},E=(y,L,I,k,j,ae,fe,te,de)=>{fe=fe||L.type==="svg",y==null?C(L,I,k,j,ae,fe,te,de):S(y,L,j,ae,fe,te,de)},C=(y,L,I,k,j,ae,fe,te)=>{let de,ce;const{type:Re,props:T,shapeFlag:M,transition:z,dirs:ie}=y;if(de=y.el=o(y.type,ae,T&&T.is,T),M&8?u(de,y.children):M&16&&P(y.children,de,null,k,j,ae&&Re!=="foreignObject",fe,te),ie&&Ti(y,null,k,"created"),w(de,y,y.scopeId,fe,k),T){for(const ue in T)ue!=="value"&&!Os(ue)&&a(de,ue,null,T[ue],ae,y.children,k,j,we);"value"in T&&a(de,"value",null,T.value),(ce=T.onVnodeBeforeMount)&&yn(ce,k,y)}ie&&Ti(y,null,k,"beforeMount");const oe=(!j||j&&!j.pendingBranch)&&z&&!z.persisted;oe&&z.beforeEnter(de),i(de,L,I),((ce=T&&T.onVnodeMounted)||oe||ie)&&Ht(()=>{ce&&yn(ce,k,y),oe&&z.enter(de),ie&&Ti(y,null,k,"mounted")},j)},w=(y,L,I,k,j)=>{if(I&&p(y,I),k)for(let ae=0;ae<k.length;ae++)p(y,k[ae]);if(j){let ae=j.subTree;if(L===ae){const fe=j.vnode;w(y,fe,fe.scopeId,fe.slotScopeIds,j.parent)}}},P=(y,L,I,k,j,ae,fe,te,de=0)=>{for(let ce=de;ce<y.length;ce++){const Re=y[ce]=te?si(y[ce]):bn(y[ce]);v(null,Re,L,I,k,j,ae,fe,te)}},S=(y,L,I,k,j,ae,fe)=>{const te=L.el=y.el;let{patchFlag:de,dynamicChildren:ce,dirs:Re}=L;de|=y.patchFlag&16;const T=y.props||at,M=L.props||at;let z;I&&Ai(I,!1),(z=M.onVnodeBeforeUpdate)&&yn(z,I,L,y),Re&&Ti(L,y,I,"beforeUpdate"),I&&Ai(I,!0);const ie=j&&L.type!=="foreignObject";if(ce?A(y.dynamicChildren,ce,te,I,k,ie,ae):fe||Q(y,L,te,null,I,k,ie,ae,!1),de>0){if(de&16)B(te,L,T,M,I,k,j);else if(de&2&&T.class!==M.class&&a(te,"class",null,M.class,j),de&4&&a(te,"style",T.style,M.style,j),de&8){const oe=L.dynamicProps;for(let ue=0;ue<oe.length;ue++){const be=oe[ue],me=T[be],Ee=M[be];(Ee!==me||be==="value")&&a(te,be,me,Ee,j,y.children,I,k,we)}}de&1&&y.children!==L.children&&u(te,L.children)}else!fe&&ce==null&&B(te,L,T,M,I,k,j);((z=M.onVnodeUpdated)||Re)&&Ht(()=>{z&&yn(z,I,L,y),Re&&Ti(L,y,I,"updated")},k)},A=(y,L,I,k,j,ae,fe)=>{for(let te=0;te<L.length;te++){const de=y[te],ce=L[te],Re=de.el&&(de.type===Sn||!Oi(de,ce)||de.shapeFlag&70)?f(de.el):I;v(de,ce,Re,null,k,j,ae,fe,!0)}},B=(y,L,I,k,j,ae,fe)=>{if(I!==k){if(I!==at)for(const te in I)!Os(te)&&!(te in k)&&a(y,te,I[te],null,fe,L.children,j,ae,we);for(const te in k){if(Os(te))continue;const de=k[te],ce=I[te];de!==ce&&te!=="value"&&a(y,te,ce,de,fe,L.children,j,ae,we)}"value"in k&&a(y,"value",I.value,k.value)}},N=(y,L,I,k,j,ae,fe,te,de)=>{const ce=L.el=y?y.el:s(""),Re=L.anchor=y?y.anchor:s("");let{patchFlag:T,dynamicChildren:M,slotScopeIds:z}=L;z&&(te=te?te.concat(z):z),y==null?(i(ce,I,k),i(Re,I,k),P(L.children,I,Re,j,ae,fe,te,de)):T>0&&T&64&&M&&y.dynamicChildren?(A(y.dynamicChildren,M,I,j,ae,fe,te),(L.key!=null||j&&L===j.subTree)&&_p(y,L,!0)):Q(y,L,I,Re,j,ae,fe,te,de)},G=(y,L,I,k,j,ae,fe,te,de)=>{L.slotScopeIds=te,y==null?L.shapeFlag&512?j.ctx.activate(L,I,k,fe,de):D(L,I,k,j,ae,fe,de):V(y,L,de)},D=(y,L,I,k,j,ae,fe)=>{const te=y.component=j1(y,k,j);if(go(y)&&(te.ctx.renderer=ne),$1(te),te.asyncDep){if(j&&j.registerDep(te,q),!y.el){const de=te.subTree=ft(Gn);h(null,de,L,I)}return}q(te,y,L,I,j,ae,fe)},V=(y,L,I)=>{const k=L.component=y.component;if(i1(y,L,I))if(k.asyncDep&&!k.asyncResolved){Y(k,L,I);return}else k.next=L,$g(k.update),k.update();else L.el=y.el,k.vnode=L},q=(y,L,I,k,j,ae,fe)=>{const te=()=>{if(y.isMounted){let{next:Re,bu:T,u:M,parent:z,vnode:ie}=y,oe=Re,ue;Ai(y,!1),Re?(Re.el=ie.el,Y(y,Re,fe)):Re=ie,T&&ko(T),(ue=Re.props&&Re.props.onVnodeBeforeUpdate)&&yn(ue,z,Re,ie),Ai(y,!0);const be=Ho(y),me=y.subTree;y.subTree=be,v(me,be,f(me.el),X(me),y,j,ae),Re.el=be.el,oe===null&&r1(y,be.el),M&&Ht(M,j),(ue=Re.props&&Re.props.onVnodeUpdated)&&Ht(()=>yn(ue,z,Re,ie),j)}else{let Re;const{el:T,props:M}=L,{bm:z,m:ie,parent:oe}=y,ue=Fs(L);if(Ai(y,!1),z&&ko(z),!ue&&(Re=M&&M.onVnodeBeforeMount)&&yn(Re,oe,L),Ai(y,!0),T&&Se){const be=()=>{y.subTree=Ho(y),Se(T,y.subTree,y,j,null)};ue?L.type.__asyncLoader().then(()=>!y.isUnmounted&&be()):be()}else{const be=y.subTree=Ho(y);v(null,be,I,k,y,j,ae),L.el=be.el}if(ie&&Ht(ie,j),!ue&&(Re=M&&M.onVnodeMounted)){const be=L;Ht(()=>yn(Re,oe,be),j)}(L.shapeFlag&256||oe&&Fs(oe.vnode)&&oe.vnode.shapeFlag&256)&&y.a&&Ht(y.a,j),y.isMounted=!0,L=I=k=null}},de=y.effect=new Rc(te,()=>Nc(ce),y.scope),ce=y.update=()=>de.run();ce.id=y.uid,Ai(y,!0),ce()},Y=(y,L,I)=>{L.component=y;const k=y.vnode.props;y.vnode=L,y.next=null,D1(y,L.props,k,I),N1(y,L.children,I),Yr(),Du(),jr()},Q=(y,L,I,k,j,ae,fe,te,de=!1)=>{const ce=y&&y.children,Re=y?y.shapeFlag:0,T=L.children,{patchFlag:M,shapeFlag:z}=L;if(M>0){if(M&128){le(ce,T,I,k,j,ae,fe,te,de);return}else if(M&256){ee(ce,T,I,k,j,ae,fe,te,de);return}}z&8?(Re&16&&we(ce,j,ae),T!==ce&&u(I,T)):Re&16?z&16?le(ce,T,I,k,j,ae,fe,te,de):we(ce,j,ae,!0):(Re&8&&u(I,""),z&16&&P(T,I,k,j,ae,fe,te,de))},ee=(y,L,I,k,j,ae,fe,te,de)=>{y=y||Ar,L=L||Ar;const ce=y.length,Re=L.length,T=Math.min(ce,Re);let M;for(M=0;M<T;M++){const z=L[M]=de?si(L[M]):bn(L[M]);v(y[M],z,I,null,j,ae,fe,te,de)}ce>Re?we(y,j,ae,!0,!1,T):P(L,I,k,j,ae,fe,te,de,T)},le=(y,L,I,k,j,ae,fe,te,de)=>{let ce=0;const Re=L.length;let T=y.length-1,M=Re-1;for(;ce<=T&&ce<=M;){const z=y[ce],ie=L[ce]=de?si(L[ce]):bn(L[ce]);if(Oi(z,ie))v(z,ie,I,null,j,ae,fe,te,de);else break;ce++}for(;ce<=T&&ce<=M;){const z=y[T],ie=L[M]=de?si(L[M]):bn(L[M]);if(Oi(z,ie))v(z,ie,I,null,j,ae,fe,te,de);else break;T--,M--}if(ce>T){if(ce<=M){const z=M+1,ie=z<Re?L[z].el:k;for(;ce<=M;)v(null,L[ce]=de?si(L[ce]):bn(L[ce]),I,ie,j,ae,fe,te,de),ce++}}else if(ce>M)for(;ce<=T;)$(y[ce],j,ae,!0),ce++;else{const z=ce,ie=ce,oe=new Map;for(ce=ie;ce<=M;ce++){const Ie=L[ce]=de?si(L[ce]):bn(L[ce]);Ie.key!=null&&oe.set(Ie.key,ce)}let ue,be=0;const me=M-ie+1;let Ee=!1,U=0;const _e=new Array(me);for(ce=0;ce<me;ce++)_e[ce]=0;for(ce=z;ce<=T;ce++){const Ie=y[ce];if(be>=me){$(Ie,j,ae,!0);continue}let Ce;if(Ie.key!=null)Ce=oe.get(Ie.key);else for(ue=ie;ue<=M;ue++)if(_e[ue-ie]===0&&Oi(Ie,L[ue])){Ce=ue;break}Ce===void 0?$(Ie,j,ae,!0):(_e[Ce-ie]=ce+1,Ce>=U?U=Ce:Ee=!0,v(Ie,L[Ce],I,null,j,ae,fe,te,de),be++)}const he=Ee?z1(_e):Ar;for(ue=he.length-1,ce=me-1;ce>=0;ce--){const Ie=ie+ce,Ce=L[Ie],Oe=Ie+1<Re?L[Ie+1].el:k;_e[ce]===0?v(null,Ce,I,Oe,j,ae,fe,te,de):Ee&&(ue<0||ce!==he[ue]?O(Ce,I,Oe,2):ue--)}}},O=(y,L,I,k,j=null)=>{const{el:ae,type:fe,transition:te,children:de,shapeFlag:ce}=y;if(ce&6){O(y.component.subTree,L,I,k);return}if(ce&128){y.suspense.move(L,I,k);return}if(ce&64){fe.move(y,L,I,ne);return}if(fe===Sn){i(ae,L,I);for(let T=0;T<de.length;T++)O(de[T],L,I,k);i(y.anchor,L,I);return}if(fe===Bs){g(y,L,I);return}if(k!==2&&ce&1&&te)if(k===0)te.beforeEnter(ae),i(ae,L,I),Ht(()=>te.enter(ae),j);else{const{leave:T,delayLeave:M,afterLeave:z}=te,ie=()=>i(ae,L,I),oe=()=>{T(ae,()=>{ie(),z&&z()})};M?M(ae,ie,oe):oe()}else i(ae,L,I)},$=(y,L,I,k=!1,j=!1)=>{const{type:ae,props:fe,ref:te,children:de,dynamicChildren:ce,shapeFlag:Re,patchFlag:T,dirs:M}=y;if(te!=null&&ql(te,null,I,y,!0),Re&256){L.ctx.deactivate(y);return}const z=Re&1&&M,ie=!Fs(y);let oe;if(ie&&(oe=fe&&fe.onVnodeBeforeUnmount)&&yn(oe,L,y),Re&6)Ae(y.component,I,k);else{if(Re&128){y.suspense.unmount(I,k);return}z&&Ti(y,null,L,"beforeUnmount"),Re&64?y.type.remove(y,L,I,j,ne,k):ce&&(ae!==Sn||T>0&&T&64)?we(ce,L,I,!1,!0):(ae===Sn&&T&384||!j&&Re&16)&&we(de,L,I),k&&pe(y)}(ie&&(oe=fe&&fe.onVnodeUnmounted)||z)&&Ht(()=>{oe&&yn(oe,L,y),z&&Ti(y,null,L,"unmounted")},I)},pe=y=>{const{type:L,el:I,anchor:k,transition:j}=y;if(L===Sn){ye(I,k);return}if(L===Bs){b(y);return}const ae=()=>{r(I),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(y.shapeFlag&1&&j&&!j.persisted){const{leave:fe,delayLeave:te}=j,de=()=>fe(I,ae);te?te(y.el,ae,de):de()}else ae()},ye=(y,L)=>{let I;for(;y!==L;)I=d(y),r(y),y=I;r(L)},Ae=(y,L,I)=>{const{bum:k,scope:j,update:ae,subTree:fe,um:te}=y;k&&ko(k),j.stop(),ae&&(ae.active=!1,$(fe,y,L,I)),te&&Ht(te,L),Ht(()=>{y.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},we=(y,L,I,k=!1,j=!1,ae=0)=>{for(let fe=ae;fe<y.length;fe++)$(y[fe],L,I,k,j)},X=y=>y.shapeFlag&6?X(y.component.subTree):y.shapeFlag&128?y.suspense.next():d(y.anchor||y.el),re=(y,L,I)=>{y==null?L._vnode&&$(L._vnode,null,null,!0):v(L._vnode||null,y,L,null,null,null,I),Du(),Zh(),L._vnode=y},ne={p:v,um:$,m:O,r:pe,mt:D,mc:P,pc:Q,pbc:A,n:X,o:t};let ve,Se;return e&&([ve,Se]=e(ne)),{render:re,hydrate:ve,createApp:P1(re,ve)}}function Ai({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _p(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let a=0;a<i.length;a++){const o=i[a];let s=r[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[a]=si(r[a]),s.el=o.el),n||_p(o,s)),s.type===vo&&(s.el=o.el)}}function z1(t){const e=t.slice(),n=[0];let i,r,a,o,s;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[i]=n[a-1]),n[a]=i)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}const B1=t=>t.__isTeleport,Sn=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Bs=Symbol.for("v-stc"),ha=[];let pn=null;function Or(t=!1){ha.push(pn=t?null:[])}function k1(){ha.pop(),pn=ha[ha.length-1]||null}let Aa=1;function Wu(t){Aa+=t}function vp(t){return t.dynamicChildren=Aa>0?pn||Ar:null,k1(),Aa>0&&pn&&pn.push(t),t}function Ba(t,e,n,i,r,a){return vp(vt(t,e,n,i,r,a,!0))}function H1(t,e,n,i,r){return vp(ft(t,e,n,i,r,!0))}function $l(t){return t?t.__v_isVNode===!0:!1}function Oi(t,e){return t.type===e.type&&t.key===e.key}const xo="__vInternal",xp=({key:t})=>t??null,ks=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Mt(t)||It(t)||Ye(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function vt(t,e=null,n=null,i=0,r=null,a=t===Sn?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xp(e),ref:e&&ks(e),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zt};return s?(Gc(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=Mt(n)?8:16),Aa>0&&!o&&pn&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&pn.push(l),l}const ft=G1;function G1(t,e=null,n=null,i=0,r=null,a=!1){if((!t||t===lp)&&(t=Gn),$l(t)){const s=_i(t,e,!0);return n&&Gc(s,n),Aa>0&&!a&&pn&&(s.shapeFlag&6?pn[pn.indexOf(t)]=s:pn.push(s)),s.patchFlag|=-2,s}if(e0(t)&&(t=t.__vccOpts),e){e=V1(e);let{class:s,style:l}=e;s&&!Mt(s)&&(e.class=uo(s)),dt(l)&&(Gh(l)&&!He(l)&&(l=yt({},l)),e.style=co(l))}const o=Mt(t)?1:a1(t)?128:B1(t)?64:dt(t)?4:Ye(t)?2:0;return vt(t,e,n,i,r,o,a,!0)}function V1(t){return t?Gh(t)||xo in t?yt({},t):t:null}function _i(t,e,n=!1){const{props:i,ref:r,patchFlag:a,children:o}=t,s=e?W1(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&xp(s),ref:e&&e.ref?n&&r?He(r)?r.concat(ks(e)):[r,ks(e)]:ks(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Sn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_i(t.ssContent),ssFallback:t.ssFallback&&_i(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Kl(t=" ",e=0){return ft(vo,null,t,e)}function WA(t,e){const n=ft(Bs,null,t);return n.staticCount=e,n}function bn(t){return t==null||typeof t=="boolean"?ft(Gn):He(t)?ft(Sn,null,t.slice()):typeof t=="object"?si(t):ft(vo,null,String(t))}function si(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_i(t)}function Gc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(xo in e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),i&64?(n=16,e=[Kl(e)]):n=8);t.children=e,t.shapeFlag|=n}function W1(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=uo([e.class,i.class]));else if(r==="style")e.style=co([e.style,i.style]);else if(ao(r)){const a=e[r],o=i[r];o&&a!==o&&!(He(a)&&a.includes(o))&&(e[r]=a?[].concat(a,o):o)}else r!==""&&(e[r]=i[r])}return e}function yn(t,e,n,i=null){an(t,e,7,[n,i])}const X1=fp();let Y1=0;function j1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||X1,a={uid:Y1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(i,r),emitsOptions:Qh(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Jg.bind(null,a),t.ce&&t.ce(a),a}let wt=null;const q1=()=>wt||Zt;let Vc,nr,Xu="__VUE_INSTANCE_SETTERS__";(nr=Ol()[Xu])||(nr=Ol()[Xu]=[]),nr.push(t=>wt=t),Vc=t=>{nr.length>1?nr.forEach(e=>e(t)):nr[0](t)};const Fr=t=>{Vc(t),t.scope.on()},Xi=()=>{wt&&wt.scope.off(),Vc(null)};function yp(t){return t.vnode.shapeFlag&4}let wa=!1;function $1(t,e=!1){wa=e;const{props:n,children:i}=t.vnode,r=yp(t);L1(t,n,r,e),U1(t,i);const a=r?K1(t,e):void 0;return wa=!1,a}function K1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vh(new Proxy(t.ctx,b1));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?J1(t):null;Fr(t),Yr();const a=di(i,t,0,[t.props,r]);if(jr(),Xi(),Ch(a)){if(a.then(Xi,Xi),e)return a.then(o=>{Yu(t,o,e)}).catch(o=>{ho(o,t,0)});t.asyncDep=a}else Yu(t,a,e)}else Mp(t,e)}function Yu(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=jh(e)),Mp(t,n)}let ju;function Mp(t,e,n){const i=t.type;if(!t.render){if(!e&&ju&&!i.render){const r=i.template||kc(t).template;if(r){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=i,c=yt(yt({isCustomElement:a,delimiters:s},o),l);i.render=ju(r,c)}}t.render=i.render||gn}Fr(t),Yr(),E1(t),jr(),Xi()}function Z1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Xt(t,"get","$attrs"),e[n]}}))}function J1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Z1(t)},slots:t.slots,emit:t.emit,expose:e}}function yo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jh(Vh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in da)return da[n](t)},has(e,n){return n in e||n in da}}))}function Q1(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function e0(t){return Ye(t)&&"__vccOpts"in t}const pt=(t,e)=>Yg(t,e,wa);function Mo(t,e,n){const i=arguments.length;return i===2?dt(e)&&!He(e)?$l(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$l(n)&&(n=[n]),ft(t,e,n))}const t0=Symbol.for("v-scx"),n0=()=>_n(t0),i0="3.3.4",r0="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,qu=Fi&&Fi.createElement("template"),a0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Fi.createElementNS(r0,t):Fi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Fi.createTextNode(t),createComment:t=>Fi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,a){const o=n?n.previousSibling:e.lastChild;if(r&&(r===a||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{qu.innerHTML=i?`<svg>${t}</svg>`:t;const s=qu.content;if(i){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function s0(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function o0(t,e,n){const i=t.style,r=Mt(n);if(n&&!r){if(e&&!Mt(e))for(const a in e)n[a]==null&&Zl(i,a,"");for(const a in n)Zl(i,a,n[a])}else{const a=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=a)}}const $u=/\s*!important$/;function Zl(t,e,n){if(He(n))n.forEach(i=>Zl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=l0(t,e);$u.test(n)?t.setProperty(Xr(i),n.replace($u,""),"important"):t[i]=n}}const Ku=["Webkit","Moz","ms"],Wo={};function l0(t,e){const n=Wo[e];if(n)return n;let i=Rn(e);if(i!=="filter"&&i in t)return Wo[e]=i;i=lo(i);for(let r=0;r<Ku.length;r++){const a=Ku[r]+i;if(a in t)return Wo[e]=a}return e}const Zu="http://www.w3.org/1999/xlink";function c0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zu,e.slice(6,e.length)):t.setAttributeNS(Zu,e,n);else{const a=ug(e);n==null||a&&!Ph(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function u0(t,e,n,i,r,a,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ph(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function f0(t,e,n,i){t.addEventListener(e,n,i)}function d0(t,e,n,i){t.removeEventListener(e,n,i)}function h0(t,e,n,i,r=null){const a=t._vei||(t._vei={}),o=a[e];if(i&&o)o.value=i;else{const[s,l]=p0(e);if(i){const c=a[e]=_0(i,r);f0(t,s,c,l)}else o&&(d0(t,s,o,l),a[e]=void 0)}}const Ju=/(?:Once|Passive|Capture)$/;function p0(t){let e;if(Ju.test(t)){e={};let i;for(;i=t.match(Ju);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let Xo=0;const m0=Promise.resolve(),g0=()=>Xo||(m0.then(()=>Xo=0),Xo=Date.now());function _0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;an(v0(i,n.value),e,5,[i])};return n.value=t,n.attached=g0(),n}function v0(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qu=/^on[a-z]/,x0=(t,e,n,i,r=!1,a,o,s,l)=>{e==="class"?s0(t,i,r):e==="style"?o0(t,n,i):ao(e)?bc(e)||h0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):y0(t,e,i,r))?u0(t,e,i,a,o,s,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),c0(t,e,i,r))};function y0(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Qu.test(e)&&Ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qu.test(e)&&Mt(n)?!1:e in t}const Zn="transition",Jr="animation",So=(t,{slots:e})=>Mo(f1,M0(t),e);So.displayName="Transition";const Sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};So.props=yt({},np,Sp);const wi=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},ef=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function M0(t){const e={};for(const N in t)N in Sp||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=o,appearToClass:u=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,x=S0(r),v=x&&x[0],m=x&&x[1],{onBeforeEnter:h,onEnter:_,onEnterCancelled:g,onLeave:b,onLeaveCancelled:E,onBeforeAppear:C=h,onAppear:w=_,onAppearCancelled:P=g}=e,S=(N,G,D)=>{Ri(N,G?u:s),Ri(N,G?c:o),D&&D()},A=(N,G)=>{N._isLeaving=!1,Ri(N,f),Ri(N,p),Ri(N,d),G&&G()},B=N=>(G,D)=>{const V=N?w:_,q=()=>S(G,N,D);wi(V,[G,q]),tf(()=>{Ri(G,N?l:a),Jn(G,N?u:s),ef(V)||nf(G,i,v,q)})};return yt(e,{onBeforeEnter(N){wi(h,[N]),Jn(N,a),Jn(N,o)},onBeforeAppear(N){wi(C,[N]),Jn(N,l),Jn(N,c)},onEnter:B(!1),onAppear:B(!0),onLeave(N,G){N._isLeaving=!0;const D=()=>A(N,G);Jn(N,f),T0(),Jn(N,d),tf(()=>{N._isLeaving&&(Ri(N,f),Jn(N,p),ef(b)||nf(N,i,m,D))}),wi(b,[N,D])},onEnterCancelled(N){S(N,!1),wi(g,[N])},onAppearCancelled(N){S(N,!0),wi(P,[N])},onLeaveCancelled(N){A(N),wi(E,[N])}})}function S0(t){if(t==null)return null;if(dt(t))return[Yo(t.enter),Yo(t.leave)];{const e=Yo(t);return[e,e]}}function Yo(t){return rg(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ri(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function tf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let b0=0;function nf(t,e,n,i){const r=t._endId=++b0,a=()=>{r===t._endId&&i()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=E0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),a()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},s+1),t.addEventListener(c,d)}function E0(t,e){const n=window.getComputedStyle(t),i=x=>(n[x]||"").split(", "),r=i(`${Zn}Delay`),a=i(`${Zn}Duration`),o=rf(r,a),s=i(`${Jr}Delay`),l=i(`${Jr}Duration`),c=rf(s,l);let u=null,f=0,d=0;e===Zn?o>0&&(u=Zn,f=o,d=a.length):e===Jr?c>0&&(u=Jr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Zn:Jr:null,d=u?u===Zn?a.length:l.length:0);const p=u===Zn&&/\b(transform|all)(,|$)/.test(i(`${Zn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function rf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>af(n)+af(t[i])))}function af(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function T0(){return document.body.offsetHeight}const A0={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Qr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Qr(t,!0),i.enter(t)):i.leave(t,()=>{Qr(t,!1)}):Qr(t,e))},beforeUnmount(t,{value:e}){Qr(t,e)}};function Qr(t,e){t.style.display=e?t._vod:"none"}const w0=yt({patchProp:x0},a0);let sf;function R0(){return sf||(sf=O1(w0))}const Wc=(...t)=>{const e=R0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=C0(i);if(!r)return;const a=e._component;!Ye(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function C0(t){return Mt(t)?document.querySelector(t):t}const bp="/assets/manapuraza-logo-162fb913.svg";/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function P0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const tt=Object.assign;function jo(t,e){const n={};for(const i in e){const r=e[i];n[i]=vn(r)?r.map(t):t(r)}return n}const pa=()=>{},vn=Array.isArray,L0=/\/$/,D0=t=>t.replace(L0,"");function qo(t,e,n="/"){let i,r={},a="",o="";const s=e.indexOf("#");let l=e.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(i=e.slice(0,l),a=e.slice(l+1,s>-1?s:e.length),r=t(a)),s>-1&&(i=i||e.slice(0,s),o=e.slice(s,e.length)),i=O0(i??e,n),{fullPath:i+(a&&"?")+a+o,path:i,query:r,hash:o}}function I0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function of(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function U0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&zr(e.matched[i],n.matched[r])&&Ep(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ep(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!N0(t[n],e[n]))return!1;return!0}function N0(t,e){return vn(t)?lf(t,e):vn(e)?lf(e,t):t===e}function lf(t,e){return vn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function O0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let a=n.length-1,o,s;for(o=0;o<i.length;o++)if(s=i[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ra;(function(t){t.pop="pop",t.push="push"})(Ra||(Ra={}));var ma;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ma||(ma={}));function F0(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),D0(t)}const z0=/^[^#]+#/;function B0(t,e){return t.replace(z0,"#")+e}function k0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const bo=()=>({left:window.pageXOffset,top:window.pageYOffset});function H0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=k0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cf(t,e){return(history.state?history.state.position-e:-1)+t}const Jl=new Map;function G0(t,e){Jl.set(t,e)}function V0(t){const e=Jl.get(t);return Jl.delete(t),e}let W0=()=>location.protocol+"//"+location.host;function Tp(t,e){const{pathname:n,search:i,hash:r}=e,a=t.indexOf("#");if(a>-1){let s=r.includes(t.slice(a))?t.slice(a).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),of(l,"")}return of(n,t)+i+r}function X0(t,e,n,i){let r=[],a=[],o=null;const s=({state:d})=>{const p=Tp(t,location),x=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===x){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(n.value,x,{delta:m,type:Ra.pop,direction:m?m>0?ma.forward:ma.back:ma.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const x=r.indexOf(d);x>-1&&r.splice(x,1)};return a.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(tt({},d.state,{scroll:bo()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function uf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?bo():null}}function Y0(t){const{history:e,location:n}=window,i={value:Tp(t,n)},r={value:e.state};r.value||a(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:W0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=tt({},e.state,uf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});a(l,u,!0),i.value=l}function s(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:bo()});a(u.current,u,!0);const f=tt({},uf(i.value,l,null),{position:u.position+1},c);a(l,f,!1),i.value=l}return{location:i,state:r,push:s,replace:o}}function j0(t){t=F0(t);const e=Y0(t),n=X0(t,e.state,e.location,e.replace);function i(a,o=!0){o||n.pauseListeners(),history.go(a)}const r=tt({location:"",base:t,go:i,createHref:B0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function q0(t){return typeof t=="string"||t&&typeof t=="object"}function Ap(t){return typeof t=="string"||typeof t=="symbol"}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wp=Symbol("");var ff;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ff||(ff={}));function Br(t,e){return tt(new Error,{type:t,[wp]:!0},e)}function Pn(t,e){return t instanceof Error&&wp in t&&(e==null||!!(t.type&e))}const df="[^/]+?",$0={sensitive:!1,strict:!1,start:!0,end:!0},K0=/[.+*?^${}()[\]/\\]/g;function Z0(t,e){const n=tt({},$0,e),i=[];let r=n.start?"^":"";const a=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(K0,"\\$&"),p+=40;else if(d.type===1){const{value:x,repeatable:v,optional:m,regexp:h}=d;a.push({name:x,repeatable:v,optional:m});const _=h||df;if(_!==df){p+=10;try{new RegExp(`(${_})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${x}" (${_}): `+b.message)}}let g=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(g=m&&c.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,p+=20,m&&(p+=-8),v&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function s(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",x=a[d-1];f[x.name]=p&&x.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:x,repeatable:v,optional:m}=p,h=x in c?c[x]:"";if(vn(h)&&!v)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const _=vn(h)?h.join("/"):h;if(!_)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=_}}return u||"/"}return{re:o,score:i,keys:a,parse:s,stringify:l}}function J0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Q0(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const a=J0(i[n],r[n]);if(a)return a;n++}if(Math.abs(r.length-i.length)===1){if(hf(i))return 1;if(hf(r))return-1}return r.length-i.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const e_={type:0,value:""},t_=/[a-zA-Z0-9_]/;function n_(t){if(!t)return[[]];if(t==="/")return[[e_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let a;function o(){a&&r.push(a),a=[]}let s=0,l,c="",u="";function f(){c&&(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;s<t.length;){if(l=t[s++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:t_.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function i_(t,e,n){const i=Z0(n_(t.path),n),r=tt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function r_(t,e){const n=[],i=new Map;e=gf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function a(u,f,d){const p=!d,x=a_(u);x.aliasOf=d&&d.record;const v=gf(e,u),m=[x];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of g)m.push(tt({},x,{components:d?d.record.components:x.components,path:b,aliasOf:d?d.record:x}))}let h,_;for(const g of m){const{path:b}=g;if(f&&b[0]!=="/"){const E=f.record.path,C=E[E.length-1]==="/"?"":"/";g.path=f.record.path+(b&&C+b)}if(h=i_(g,f,v),d?d.alias.push(h):(_=_||h,_!==h&&_.alias.push(h),p&&u.name&&!mf(h)&&o(u.name)),x.children){const E=x.children;for(let C=0;C<E.length;C++)a(E[C],h,d&&d.children[C])}d=d||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return _?()=>{o(_)}:pa}function o(u){if(Ap(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function s(){return n}function l(u){let f=0;for(;f<n.length&&Q0(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Rp(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!mf(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},x,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Br(1,{location:u});v=d.record.name,p=tt(pf(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&pf(u.params,d.keys.map(_=>_.name))),x=d.stringify(p)}else if("path"in u)x=u.path,d=n.find(_=>_.re.test(x)),d&&(p=d.parse(x),v=d.record.name);else{if(d=f.name?i.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw Br(1,{location:u,currentLocation:f});v=d.record.name,p=tt({},f.params,u.params),x=d.stringify(p)}const m=[];let h=d;for(;h;)m.unshift(h.record),h=h.parent;return{name:v,path:x,params:p,matched:m,meta:o_(m)}}return t.forEach(u=>a(u)),{addRoute:a,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:r}}function pf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function a_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:s_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function s_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function o_(t){return t.reduce((e,n)=>tt(e,n.meta),{})}function gf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Rp(t,e){return e.children.some(n=>n===t||Rp(t,n))}const Cp=/#/g,l_=/&/g,c_=/\//g,u_=/=/g,f_=/\?/g,Pp=/\+/g,d_=/%5B/g,h_=/%5D/g,Lp=/%5E/g,p_=/%60/g,Dp=/%7B/g,m_=/%7C/g,Ip=/%7D/g,g_=/%20/g;function Xc(t){return encodeURI(""+t).replace(m_,"|").replace(d_,"[").replace(h_,"]")}function __(t){return Xc(t).replace(Dp,"{").replace(Ip,"}").replace(Lp,"^")}function Ql(t){return Xc(t).replace(Pp,"%2B").replace(g_,"+").replace(Cp,"%23").replace(l_,"%26").replace(p_,"`").replace(Dp,"{").replace(Ip,"}").replace(Lp,"^")}function v_(t){return Ql(t).replace(u_,"%3D")}function x_(t){return Xc(t).replace(Cp,"%23").replace(f_,"%3F")}function y_(t){return t==null?"":x_(t).replace(c_,"%2F")}function $s(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function M_(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const a=i[r].replace(Pp," "),o=a.indexOf("="),s=$s(o<0?a:a.slice(0,o)),l=o<0?null:$s(a.slice(o+1));if(s in e){let c=e[s];vn(c)||(c=e[s]=[c]),c.push(l)}else e[s]=l}return e}function _f(t){let e="";for(let n in t){const i=t[n];if(n=v_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(i)?i.map(a=>a&&Ql(a)):[i&&Ql(i)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function S_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const b_=Symbol(""),vf=Symbol(""),Eo=Symbol(""),Yc=Symbol(""),ec=Symbol("");function ea(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function oi(t,e,n,i,r){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(Br(4,{from:n,to:e})):f instanceof Error?s(f):q0(f)?s(Br(2,{from:e,to:f})):(a&&i.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>s(f))})}function $o(t,e,n,i){const r=[];for(const a of t)for(const o in a.components){let s=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(E_(s)){const c=(s.__vccOpts||s)[e];c&&r.push(oi(c,n,i,a,o))}else{let l=s();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const u=P0(c)?c.default:c;a.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&oi(d,n,i,a,o)()}))}}return r}function E_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xf(t){const e=_n(Eo),n=_n(Yc),i=pt(()=>e.resolve(Rr(t.to))),r=pt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(zr.bind(null,u));if(d>-1)return d;const p=yf(l[c-2]);return c>1&&yf(u)===p&&f[f.length-1].path!==p?f.findIndex(zr.bind(null,l[c-2])):d}),a=pt(()=>r.value>-1&&w_(n.params,i.value.params)),o=pt(()=>r.value>-1&&r.value===n.matched.length-1&&Ep(n.params,i.value.params));function s(l={}){return A_(l)?e[Rr(t.replace)?"replace":"push"](Rr(t.to)).catch(pa):Promise.resolve()}return{route:i,href:pt(()=>i.value.href),isActive:a,isExactActive:o,navigate:s}}const T_=Oc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xf,setup(t,{slots:e}){const n=za(xf(t)),{options:i}=_n(Eo),r=pt(()=>({[Mf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Mf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:Mo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),Up=T_;function A_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function w_(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!vn(r)||r.length!==i.length||i.some((a,o)=>a!==r[o]))return!1}return!0}function yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mf=(t,e,n)=>t??e??n,R_=Oc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=_n(ec),r=pt(()=>t.route||i.value),a=_n(vf,0),o=pt(()=>{let c=Rr(a);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),s=pt(()=>r.value.matched[o.value]);zs(vf,pt(()=>o.value+1)),zs(b_,s),zs(ec,r);const l=Hg();return Pr(()=>[l.value,s.value,t.name],([c,u,f],[d,p,x])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!zr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=s.value,d=f&&f.components[u];if(!d)return Sf(n.default,{Component:d,route:c});const p=f.props[u],x=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Mo(d,tt({},x,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sf(n.default,{Component:m,route:c})||m}}});function Sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const C_=R_;function P_(t){const e=r_(t.routes,t),n=t.parseQuery||M_,i=t.stringifyQuery||_f,r=t.history,a=ea(),o=ea(),s=ea(),l=Gg(Qn);let c=Qn;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,X=>""+X),f=jo.bind(null,y_),d=jo.bind(null,$s);function p(X,re){let ne,ve;return Ap(X)?(ne=e.getRecordMatcher(X),ve=re):ve=X,e.addRoute(ve,ne)}function x(X){const re=e.getRecordMatcher(X);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(X=>X.record)}function m(X){return!!e.getRecordMatcher(X)}function h(X,re){if(re=tt({},re||l.value),typeof X=="string"){const I=qo(n,X,re.path),k=e.resolve({path:I.path},re),j=r.createHref(I.fullPath);return tt(I,k,{params:d(k.params),hash:$s(I.hash),redirectedFrom:void 0,href:j})}let ne;if("path"in X)ne=tt({},X,{path:qo(n,X.path,re.path).path});else{const I=tt({},X.params);for(const k in I)I[k]==null&&delete I[k];ne=tt({},X,{params:f(I)}),re.params=f(re.params)}const ve=e.resolve(ne,re),Se=X.hash||"";ve.params=u(d(ve.params));const y=I0(i,tt({},X,{hash:__(Se),path:ve.path})),L=r.createHref(y);return tt({fullPath:y,hash:Se,query:i===_f?S_(X.query):X.query||{}},ve,{redirectedFrom:void 0,href:L})}function _(X){return typeof X=="string"?qo(n,X,l.value.path):tt({},X)}function g(X,re){if(c!==X)return Br(8,{from:re,to:X})}function b(X){return w(X)}function E(X){return b(tt(_(X),{replace:!0}))}function C(X){const re=X.matched[X.matched.length-1];if(re&&re.redirect){const{redirect:ne}=re;let ve=typeof ne=="function"?ne(X):ne;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=_(ve):{path:ve},ve.params={}),tt({query:X.query,hash:X.hash,params:"path"in ve?{}:X.params},ve)}}function w(X,re){const ne=c=h(X),ve=l.value,Se=X.state,y=X.force,L=X.replace===!0,I=C(ne);if(I)return w(tt(_(I),{state:typeof I=="object"?tt({},Se,I.state):Se,force:y,replace:L}),re||ne);const k=ne;k.redirectedFrom=re;let j;return!y&&U0(i,ve,ne)&&(j=Br(16,{to:k,from:ve}),O(ve,ve,!0,!1)),(j?Promise.resolve(j):A(k,ve)).catch(ae=>Pn(ae)?Pn(ae,2)?ae:le(ae):Q(ae,k,ve)).then(ae=>{if(ae){if(Pn(ae,2))return w(tt({replace:L},_(ae.to),{state:typeof ae.to=="object"?tt({},Se,ae.to.state):Se,force:y}),re||k)}else ae=N(k,ve,!0,L,Se);return B(k,ve,ae),ae})}function P(X,re){const ne=g(X,re);return ne?Promise.reject(ne):Promise.resolve()}function S(X){const re=ye.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(X):X()}function A(X,re){let ne;const[ve,Se,y]=L_(X,re);ne=$o(ve.reverse(),"beforeRouteLeave",X,re);for(const I of ve)I.leaveGuards.forEach(k=>{ne.push(oi(k,X,re))});const L=P.bind(null,X,re);return ne.push(L),we(ne).then(()=>{ne=[];for(const I of a.list())ne.push(oi(I,X,re));return ne.push(L),we(ne)}).then(()=>{ne=$o(Se,"beforeRouteUpdate",X,re);for(const I of Se)I.updateGuards.forEach(k=>{ne.push(oi(k,X,re))});return ne.push(L),we(ne)}).then(()=>{ne=[];for(const I of X.matched)if(I.beforeEnter&&!re.matched.includes(I))if(vn(I.beforeEnter))for(const k of I.beforeEnter)ne.push(oi(k,X,re));else ne.push(oi(I.beforeEnter,X,re));return ne.push(L),we(ne)}).then(()=>(X.matched.forEach(I=>I.enterCallbacks={}),ne=$o(y,"beforeRouteEnter",X,re),ne.push(L),we(ne))).then(()=>{ne=[];for(const I of o.list())ne.push(oi(I,X,re));return ne.push(L),we(ne)}).catch(I=>Pn(I,8)?I:Promise.reject(I))}function B(X,re,ne){for(const ve of s.list())S(()=>ve(X,re,ne))}function N(X,re,ne,ve,Se){const y=g(X,re);if(y)return y;const L=re===Qn,I=Mr?history.state:{};ne&&(ve||L?r.replace(X.fullPath,tt({scroll:L&&I&&I.scroll},Se)):r.push(X.fullPath,Se)),l.value=X,O(X,re,ne,L),le()}let G;function D(){G||(G=r.listen((X,re,ne)=>{if(!Ae.listening)return;const ve=h(X),Se=C(ve);if(Se){w(tt(Se,{replace:!0}),ve).catch(pa);return}c=ve;const y=l.value;Mr&&G0(cf(y.fullPath,ne.delta),bo()),A(ve,y).catch(L=>Pn(L,12)?L:Pn(L,2)?(w(L.to,ve).then(I=>{Pn(I,20)&&!ne.delta&&ne.type===Ra.pop&&r.go(-1,!1)}).catch(pa),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),Q(L,ve,y))).then(L=>{L=L||N(ve,y,!1),L&&(ne.delta&&!Pn(L,8)?r.go(-ne.delta,!1):ne.type===Ra.pop&&Pn(L,20)&&r.go(-1,!1)),B(ve,y,L)}).catch(pa)}))}let V=ea(),q=ea(),Y;function Q(X,re,ne){le(X);const ve=q.list();return ve.length?ve.forEach(Se=>Se(X,re,ne)):console.error(X),Promise.reject(X)}function ee(){return Y&&l.value!==Qn?Promise.resolve():new Promise((X,re)=>{V.add([X,re])})}function le(X){return Y||(Y=!X,D(),V.list().forEach(([re,ne])=>X?ne(X):re()),V.reset()),X}function O(X,re,ne,ve){const{scrollBehavior:Se}=t;if(!Mr||!Se)return Promise.resolve();const y=!ne&&V0(cf(X.fullPath,0))||(ve||!ne)&&history.state&&history.state.scroll||null;return $h().then(()=>Se(X,re,y)).then(L=>L&&H0(L)).catch(L=>Q(L,X,re))}const $=X=>r.go(X);let pe;const ye=new Set,Ae={currentRoute:l,listening:!0,addRoute:p,removeRoute:x,hasRoute:m,getRoutes:v,resolve:h,options:t,push:b,replace:E,go:$,back:()=>$(-1),forward:()=>$(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:q.add,isReady:ee,install(X){const re=this;X.component("RouterLink",Up),X.component("RouterView",C_),X.config.globalProperties.$router=re,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>Rr(l)}),Mr&&!pe&&l.value===Qn&&(pe=!0,b(r.location).catch(Se=>{}));const ne={};for(const Se in Qn)ne[Se]=pt(()=>l.value[Se]);X.provide(Eo,re),X.provide(Yc,za(ne)),X.provide(ec,l);const ve=X.unmount;ye.add(X),X.unmount=function(){ye.delete(X),ye.size<1&&(c=Qn,G&&G(),G=null,l.value=Qn,pe=!1,Y=!1),ve()}}};function we(X){return X.reduce((re,ne)=>re.then(()=>S(ne)),Promise.resolve())}return Ae}function L_(t,e){const n=[],i=[],r=[],a=Math.max(e.matched.length,t.matched.length);for(let o=0;o<a;o++){const s=e.matched[o];s&&(t.matched.find(c=>zr(c,s))?i.push(s):n.push(s));const l=t.matched[o];l&&(e.matched.find(c=>zr(c,l))||r.push(l))}return[n,i,r]}function D_(){return _n(Eo)}function I_(){return _n(Yc)}const ka=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},U_={},To=t=>(Qg("data-v-ae253b67"),t=t(),e1(),t),N_={id:"main"},O_={class:"menu-circle-social"},F_=To(()=>vt("input",{type:"checkbox",href:"#",class:"menu-circle-open",name:"menu-circle-open",id:"menu-open"},null,-1)),z_=To(()=>vt("label",{class:"menu-circle-open-button",for:"menu-open"},[vt("svg",{class:"mp icons",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",zoomAndPan:"magnify",viewBox:"0 0 1440 1439.999935",preserveAspectRatio:"xMidYMid meet",version:"1.0"},[vt("path",{fill:"#ffffff",d:"M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"}),vt("path",{fill:"#dddddd",d:"M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"}),vt("path",{fill:"#ffffff",d:"M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"})])],-1)),B_=To(()=>vt("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 35",fill:"#ffffff"},[vt("path",{d:"M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z",fill:"#ffffff"})],-1)),k_=To(()=>vt("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"#ffffff"},[vt("path",{d:"M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"})],-1));function H_(t,e){const n=Bc("router-link");return Or(),Ba("div",N_,[vt("nav",O_,[F_,z_,ft(n,{to:"/about",class:"menu-circle-item"},{default:Bn(()=>[B_]),_:1}),ft(n,{to:"/works",class:"menu-circle-item"},{default:Bn(()=>[k_]),_:1})])])}const G_=ka(U_,[["render",H_],["__scopeId","data-v-ae253b67"]]);const V_={id:"main"},W_={href:"https://manapuraza.com"},X_={class:"app"},Y_={__name:"App",setup(t){const e=I_(),n=D_(),i=async()=>{await n.isReady()};Pr(e,()=>{console.log("current route: ",e.name),e.name==="home"?(document.querySelector(".app").style.top="20vh",document.querySelector(".app").style.opacity="0"):(document.querySelector(".app").style.top="0",document.querySelector(".app").style.opacity="1")}),Fc(()=>{i()});const r=pt(()=>e.path),a=pt(()=>r.value==="/"?"route-home":"route-other"),o=pt(()=>r.value==="/"?{opacity:"1",transition:"all .4s ease-in-out"}:{opacity:"0",filter:"blur(2rem)",transition:"all .4s ease-in-out"});return(s,l)=>{const c=Bc("router-view");return Or(),Ba("div",V_,[vt("a",W_,[vt("img",{src:bp,id:"center-logo",class:uo(a.value),style:co(o.value)},null,6)]),vt("div",X_,[ft(c,null,{default:Bn(({Component:u})=>[ft(So,{name:"slide",mode:"out-in"},{default:Bn(()=>[(Or(),H1(S1(u)))]),_:2},1024)]),_:1})]),ft(G_,{id:"sp-nav"})])}}},j_=ka(Y_,[["__scopeId","data-v-e1a28593"]]),q_="modulepreload",$_=function(t){return"/"+t},bf={},Ko=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=$_(a),a in bf)return;bf[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":q_,o||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};const K_={};function Z_(t,e){return Or(),Ba("div")}const J_=ka(K_,[["render",Z_],["__scopeId","data-v-08771042"]]),jc=P_({history:j0("/"),routes:[{path:"/",name:"home",component:J_},{path:"/about",name:"about",component:()=>Ko(()=>import("./AboutView-0047becc.js"),["assets/AboutView-0047becc.js","assets/AboutView-08f621e0.css"])},{path:"/works",name:"works",component:()=>Ko(()=>import("./WorksView-74042199.js"),["assets/WorksView-74042199.js","assets/WorksView-55d6ea91.css"]),meta:{style:{top:"0"}}},{path:"/contact",name:"contact",component:()=>Ko(()=>import("./ContactView-670fd692.js"),["assets/ContactView-670fd692.js","assets/ContactView-e3b0c442.css"]),meta:{style:{top:"0"}}}]});const Q_={name:"Navbar",components:{RouterLink:Up},data(){return{currentPath:this.$route.path}},watch:{$route(t,e){this.currentPath=t.path}}},ev={class:"navbar"},tv={class:"logo"},nv={src:bp,alt:"logo"},iv={class:"default-menu"};function rv(t,e,n,i,r,a){const o=Bc("RouterLink");return Or(),Ba("div",ev,[vt("div",tv,[ft(o,{to:"/"},{default:Bn(()=>[ft(So,{name:"slide",mode:"out-in"},{default:Bn(()=>[l1(vt("img",nv,null,512),[[A0,r.currentPath!=="/"]])]),_:1})]),_:1})]),vt("nav",iv,[ft(o,{to:"/about",class:"rlink"},{default:Bn(()=>[Kl("About")]),_:1}),ft(o,{to:"/works",class:"rlink"},{default:Bn(()=>[Kl("Works")]),_:1})])])}const av=ka(Q_,[["render",rv],["__scopeId","data-v-ec8de5ad"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="158",ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sv=0,Ef=1,ov=2,Np=1,lv=2,On=3,vi=0,Vt=1,zn=2,hi=0,Lr=1,Tf=2,Af=3,wf=4,cv=5,zi=100,uv=101,fv=102,Rf=103,Cf=104,dv=200,hv=201,pv=202,mv=203,tc=204,nc=205,gv=206,_v=207,vv=208,xv=209,yv=210,Mv=211,Sv=212,bv=213,Ev=214,Tv=0,Av=1,wv=2,Ks=3,Rv=4,Cv=5,Pv=6,Lv=7,$c=0,Dv=1,Iv=2,pi=0,Uv=1,Nv=2,Ov=3,Fv=4,zv=5,Op=300,kr=301,Hr=302,ic=303,rc=304,Ao=306,ac=1e3,dn=1001,sc=1002,kt=1003,Pf=1004,Zo=1005,nn=1006,Bv=1007,Ca=1008,mi=1009,kv=1010,Hv=1011,Kc=1012,Fp=1013,ci=1014,ui=1015,Pa=1016,zp=1017,Bp=1018,Yi=1020,Gv=1021,hn=1023,Vv=1024,Wv=1025,ji=1026,Gr=1027,Xv=1028,kp=1029,Yv=1030,Hp=1031,Gp=1033,Jo=33776,Qo=33777,el=33778,tl=33779,Lf=35840,Df=35841,If=35842,Uf=35843,jv=36196,Nf=37492,Of=37496,Ff=37808,zf=37809,Bf=37810,kf=37811,Hf=37812,Gf=37813,Vf=37814,Wf=37815,Xf=37816,Yf=37817,jf=37818,qf=37819,$f=37820,Kf=37821,nl=36492,Zf=36494,Jf=36495,qv=36283,Qf=36284,ed=36285,td=36286,Vp=3e3,qi=3001,$v=3200,Kv=3201,Wp=0,Zv=1,rn="",Rt="srgb",Wn="srgb-linear",Zc="display-p3",wo="display-p3-linear",Zs="linear",rt="srgb",Js="rec709",Qs="p3",ar=7680,nd=519,Jv=512,Qv=513,ex=514,tx=515,nx=516,ix=517,rx=518,ax=519,id=35044,ts=35048,rd="300 es",oc=1035,kn=2e3,eo=2001;class tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ad=1234567;const ga=Math.PI/180,La=180/Math.PI;function qr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[t&255]+Ct[t>>8&255]+Ct[t>>16&255]+Ct[t>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Lt(t,e,n){return Math.max(e,Math.min(n,t))}function Jc(t,e){return(t%e+e)%e}function sx(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ox(t,e,n){return t!==e?(n-t)/(e-t):0}function _a(t,e,n){return(1-n)*t+n*e}function lx(t,e,n,i){return _a(t,e,1-Math.exp(-n*i))}function cx(t,e=1){return e-Math.abs(Jc(t,e*2)-e)}function ux(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function dx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function hx(t,e){return t+Math.random()*(e-t)}function px(t){return t*(.5-Math.random())}function mx(t){t!==void 0&&(ad=t);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gx(t){return t*ga}function _x(t){return t*La}function lc(t){return(t&t-1)===0&&t!==0}function vx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function to(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xx(t,e,n,i,r){const a=Math.cos,o=Math.sin,s=a(n/2),l=o(n/2),c=a((e+i)/2),u=o((e+i)/2),f=a((e-i)/2),d=o((e-i)/2),p=a((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(s*u,l*f,l*d,s*c);break;case"YZY":t.set(l*d,s*u,l*f,s*c);break;case"ZXZ":t.set(l*f,l*d,s*u,s*c);break;case"XZX":t.set(s*u,l*x,l*p,s*c);break;case"YXY":t.set(l*p,s*u,l*x,s*c);break;case"ZYZ":t.set(l*x,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const yx={DEG2RAD:ga,RAD2DEG:La,generateUUID:qr,clamp:Lt,euclideanModulo:Jc,mapLinear:sx,inverseLerp:ox,lerp:_a,damp:lx,pingpong:cx,smoothstep:ux,smootherstep:fx,randInt:dx,randFloat:hx,randFloatSpread:px,seededRandom:mx,degToRad:gx,radToDeg:_x,isPowerOfTwo:lc,ceilPowerOfTwo:vx,floorPowerOfTwo:to,setQuaternionFromProperEuler:xx,normalize:zt,denormalize:Sr};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,a,o,s,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],v=r[0],m=r[3],h=r[6],_=r[1],g=r[4],b=r[7],E=r[2],C=r[5],w=r[8];return a[0]=o*v+s*_+l*E,a[3]=o*m+s*g+l*C,a[6]=o*h+s*b+l*w,a[1]=c*v+u*_+f*E,a[4]=c*m+u*g+f*C,a[7]=c*h+u*b+f*w,a[2]=d*v+p*_+x*E,a[5]=d*m+p*g+x*C,a[8]=d*h+p*b+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,p=c*a-o*l,x=n*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(s*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*a-s*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*a)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(il.makeScale(e,n)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,n){return this.premultiply(il.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new qe;function Xp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Da(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Mx(){const t=Da("canvas");return t.style.display="block",t}const sd={};function va(t){t in sd||(sd[t]=!0,console.warn(t))}const od=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ld=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Wn]:{transfer:Zs,primaries:Js,toReference:t=>t,fromReference:t=>t},[Rt]:{transfer:rt,primaries:Js,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wo]:{transfer:Zs,primaries:Qs,toReference:t=>t.applyMatrix3(ld),fromReference:t=>t.applyMatrix3(od)},[Zc]:{transfer:rt,primaries:Qs,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ld),fromReference:t=>t.applyMatrix3(od).convertLinearToSRGB()}},Sx=new Set([Wn,wo]),nt={enabled:!0,_workingColorSpace:Wn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Sx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ns[e].toReference,r=ns[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ns[t].primaries},getTransfer:function(t){return t===rn?Zs:ns[t].transfer}};function Dr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function rl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let sr;class Yp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=Da("canvas")),sr.width=e.width,sr.height=e.height;const i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=sr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Da("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Dr(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Dr(n[i]/255)*255):n[i]=Dr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bx=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=qr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(al(r[o].image)):a.push(al(r[o]))}else a=al(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function al(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ex=0;class Wt extends tr{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=dn,r=dn,a=nn,o=Ca,s=hn,l=mi,c=Wt.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=qr(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qi?Rt:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?qi:Vp}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?Rt:rn}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Op;Wt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,b=(p+1)/2,E=(h+1)/2,C=(u+d)/4,w=(f+v)/4,P=(x+m)/4;return g>b&&g>E?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=C/i,a=w/i):b>E?b<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),i=C/r,a=P/r):E<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(E),i=w/a,r=P/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(f-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tx extends tr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qi?Rt:rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Tx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qp extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=a[o+0],p=a[o+1],x=a[o+2],v=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==x){let m=1-s;const h=l*d+c*p+u*x+f*v,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const E=Math.sqrt(g),C=Math.atan2(E,h*_);m=Math.sin(m*C)/E,s=Math.sin(s*C)/E}const b=s*_;if(l=l*m+d*b,c=c*m+p*b,u=u*m+x*b,f=f*m+v*b,m===1-s){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],d=a[o+1],p=a[o+2],x=a[o+3];return e[n]=s*x+u*f+l*p-c*d,e[n+1]=l*x+u*d+c*f-s*p,e[n+2]=c*x+u*p+s*d-l*f,e[n+3]=u*x-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),d=l(i/2),p=l(r/2),x=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*n-a*r),f=2*(a*i-o*n);return this.x=n+l*c+o*f-s*u,this.y=i+l*u+s*c-a*f,this.z=r+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new H,cd=new Zi;class Ha{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(a,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),rs.subVectors(this.max,ta),or.subVectors(e.a,ta),lr.subVectors(e.b,ta),cr.subVectors(e.c,ta),ei.subVectors(lr,or),ti.subVectors(cr,lr),Ci.subVectors(or,cr);let n=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Ci.z,Ci.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Ci.z,0,-Ci.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Ci.y,Ci.x,0];return!ol(n,or,lr,cr,rs)||(n=[1,0,0,0,1,0,0,0,1],!ol(n,or,lr,cr,rs))?!1:(as.crossVectors(ei,ti),n=[as.x,as.y,as.z],ol(n,or,lr,cr,rs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new H,new H,new H,new H,new H,new H,new H,new H],sn=new H,is=new Ha,or=new H,lr=new H,cr=new H,ei=new H,ti=new H,Ci=new H,ta=new H,rs=new H,as=new H,Pi=new H;function ol(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){Pi.fromArray(t,a);const s=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=n.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const wx=new Ha,na=new H,ll=new H;class Ro{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wx.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(ll)),this.expandByPoint(na.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new H,cl=new H,ss=new H,ni=new H,ul=new H,os=new H,fl=new H;class $p{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Dn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,n),Dn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cl.copy(e).add(n).multiplyScalar(.5),ss.copy(n).sub(e).normalize(),ni.copy(this.origin).sub(cl);const a=e.distanceTo(n)*.5,o=-this.direction.dot(ss),s=ni.dot(this.direction),l=-ni.dot(ss),c=ni.lengthSq(),u=Math.abs(1-o*o);let f,d,p,x;if(u>0)if(f=o*l-s,d=o*s-l,x=a*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cl).addScaledVector(ss,d),p}intersectSphere(e,n){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,n,i,r,a){ul.subVectors(n,e),os.subVectors(i,e),fl.crossVectors(ul,os);let o=this.direction.dot(fl),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=s*this.direction.dot(os.crossVectors(ni,os));if(l<0)return null;const c=s*this.direction.dot(ul.cross(ni));if(c<0||l+c>o)return null;const u=-s*ni.dot(fl);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,a,o,s,l,c,u,f,d,p,x,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,f,d,p,x,v,m)}set(e,n,i,r,a,o,s,l,c,u,f,d,p,x,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),a=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,x=s*u,v=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=d-v*c,n[9]=-s*l,n[2]=v-d*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,v=c*f;n[0]=d+v*s,n[4]=x*s-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-s,n[2]=p*s-x,n[6]=v+d*s,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,v=c*f;n[0]=d-v*s,n[4]=-o*f,n[8]=x+p*s,n[1]=p+x*s,n[5]=o*u,n[9]=v-d*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,x=s*u,v=s*f;n[0]=l*u,n[4]=x*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-x,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,x=s*l,v=s*c;n[0]=l*u,n[4]=v-d*f,n[8]=x*f+p,n[1]=f,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+x,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,x=s*l,v=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-x,n[2]=x*f-p,n[6]=s*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Cx)}lookAt(e,n,i){const r=this.elements;return qt.subVectors(e,n),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ii.crossVectors(i,qt),ii.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ii.crossVectors(i,qt)),ii.normalize(),ls.crossVectors(qt,ii),r[0]=ii.x,r[4]=ls.x,r[8]=qt.x,r[1]=ii.y,r[5]=ls.y,r[9]=qt.y,r[2]=ii.z,r[6]=ls.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],v=i[6],m=i[10],h=i[14],_=i[3],g=i[7],b=i[11],E=i[15],C=r[0],w=r[4],P=r[8],S=r[12],A=r[1],B=r[5],N=r[9],G=r[13],D=r[2],V=r[6],q=r[10],Y=r[14],Q=r[3],ee=r[7],le=r[11],O=r[15];return a[0]=o*C+s*A+l*D+c*Q,a[4]=o*w+s*B+l*V+c*ee,a[8]=o*P+s*N+l*q+c*le,a[12]=o*S+s*G+l*Y+c*O,a[1]=u*C+f*A+d*D+p*Q,a[5]=u*w+f*B+d*V+p*ee,a[9]=u*P+f*N+d*q+p*le,a[13]=u*S+f*G+d*Y+p*O,a[2]=x*C+v*A+m*D+h*Q,a[6]=x*w+v*B+m*V+h*ee,a[10]=x*P+v*N+m*q+h*le,a[14]=x*S+v*G+m*Y+h*O,a[3]=_*C+g*A+b*D+E*Q,a[7]=_*w+g*B+b*V+E*ee,a[11]=_*P+g*N+b*q+E*le,a[15]=_*S+g*G+b*Y+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],v=e[7],m=e[11],h=e[15];return x*(+a*l*f-r*c*f-a*s*d+i*c*d+r*s*p-i*l*p)+v*(+n*l*p-n*c*d+a*o*d-r*o*p+r*c*u-a*l*u)+m*(+n*c*f-n*s*p-a*o*f+i*o*p+a*s*u-i*c*u)+h*(-r*s*u-n*l*f+n*s*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],v=e[13],m=e[14],h=e[15],_=f*m*c-v*d*c+v*l*p-s*m*p-f*l*h+s*d*h,g=x*d*c-u*m*c-x*l*p+o*m*p+u*l*h-o*d*h,b=u*v*c-x*f*c+x*s*p-o*v*p-u*s*h+o*f*h,E=x*f*l-u*v*l-x*s*d+o*v*d+u*s*m-o*f*m,C=n*_+i*g+r*b+a*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(v*d*a-f*m*a-v*r*p+i*m*p+f*r*h-i*d*h)*w,e[2]=(s*m*a-v*l*a+v*r*c-i*m*c-s*r*h+i*l*h)*w,e[3]=(f*l*a-s*d*a-f*r*c+i*d*c+s*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*a-x*d*a+x*r*p-n*m*p-u*r*h+n*d*h)*w,e[6]=(x*l*a-o*m*a-x*r*c+n*m*c+o*r*h-n*l*h)*w,e[7]=(o*d*a-u*l*a+u*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=b*w,e[9]=(x*f*a-u*v*a-x*i*p+n*v*p+u*i*h-n*f*h)*w,e[10]=(o*v*a-x*s*a+x*i*c-n*v*c-o*i*h+n*s*h)*w,e[11]=(u*s*a-o*f*a-u*i*c+n*f*c+o*i*p-n*s*p)*w,e[12]=E*w,e[13]=(u*v*r-x*f*r+x*i*d-n*v*d-u*i*m+n*f*m)*w,e[14]=(x*s*r-o*v*r-x*i*l+n*v*l+o*i*m-n*s*m)*w,e[15]=(o*f*r-u*s*r+u*i*l-n*f*l-o*i*d+n*s*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,f=s+s,d=a*c,p=a*u,x=a*f,v=o*u,m=o*f,h=s*f,_=l*c,g=l*u,b=l*f,E=i.x,C=i.y,w=i.z;return r[0]=(1-(v+h))*E,r[1]=(p+b)*E,r[2]=(x-g)*E,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(d+h))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(x+g)*w,r[9]=(m-_)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),s=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/a,u=1/o,f=1/s;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,n.setFromRotationMatrix(on),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=kn){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,x;if(s===kn)p=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===eo)p=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=kn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-a),d=(n+e)*c,p=(i+r)*u;let x,v;if(s===kn)x=(o+a)*f,v=-2*f;else if(s===eo)x=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ur=new H,on=new xt,Rx=new H(0,0,0),Cx=new H(1,1,1),ii=new H,ls=new H,qt=new H,ud=new xt,fd=new Zi;class Co{constructor(e=0,n=0,i=0,r=Co.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Co.DEFAULT_ORDER="XYZ";let Kp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Px=0;const dd=new H,fr=new Zi,In=new xt,cs=new H,ia=new H,Lx=new H,Dx=new Zi,hd=new H(1,0,0),pd=new H(0,1,0),md=new H(0,0,1),Ix={type:"added"},Ux={type:"removed"};class Ut extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new H,n=new Co,i=new Zi,r=new H(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new qe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fr.setFromAxisAngle(e,n),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,n){return fr.setFromAxisAngle(e,n),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,n){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cs.copy(e):cs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ia,cs,this.up):In.lookAt(cs,ia,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(In),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ix)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ux)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new H(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new H,Un=new H,dl=new H,Nn=new H,dr=new H,hr=new H,gd=new H,hl=new H,pl=new H,ml=new H;let us=!1;class un{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ln.subVectors(e,n),r.cross(ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){ln.subVectors(r,n),Un.subVectors(i,n),dl.subVectors(e,n);const o=ln.dot(ln),s=ln.dot(Un),l=ln.dot(dl),c=Un.dot(Un),u=Un.dot(dl),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const d=1/f,p=(c*l-s*u)*d,x=(o*u-s*l)*d;return a.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,n,i,r,a,o,s,l){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Nn),l.setScalar(0),l.addScaledVector(a,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(s,Nn.z),l}static isFrontFacing(e,n,i,r){return ln.subVectors(i,n),Un.subVectors(e,n),ln.cross(Un).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),ln.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),un.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return un.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;dr.subVectors(r,i),hr.subVectors(a,i),hl.subVectors(e,i);const l=dr.dot(hl),c=hr.dot(hl);if(l<=0&&c<=0)return n.copy(i);pl.subVectors(e,r);const u=dr.dot(pl),f=hr.dot(pl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(dr,o);ml.subVectors(e,a);const p=dr.dot(ml),x=hr.dot(ml);if(x>=0&&p<=x)return n.copy(a);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return s=c/(c-x),n.copy(i).addScaledVector(hr,s);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return gd.subVectors(a,r),s=(f-u)/(f-u+(p-x)),n.copy(r).addScaledVector(gd,s);const h=1/(m+v+d);return o=v*h,s=d*h,n.copy(i).addScaledVector(dr,o).addScaledVector(hr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},fs={h:0,s:0,l:0};function gl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Jc(e,1),n=Lt(n,0,1),i=Lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=gl(o,a,e+1/3),this.g=gl(o,a,e),this.b=gl(o,a,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Rt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rt){const i=Zp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return nt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Lt(Pt.r*255,0,255))*65536+Math.round(Lt(Pt.g*255,0,255))*256+Math.round(Lt(Pt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Pt.copy(this),n);const i=Pt.r,r=Pt.g,a=Pt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Pt.copy(this),n),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Rt){nt.fromWorkingColorSpace(Pt.copy(this),e);const n=Pt.r,i=Pt.g,r=Pt.b;return e!==Rt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+n,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ri),e.getHSL(fs);const i=_a(ri.h,fs.h,n),r=_a(ri.s,fs.s,n),a=_a(ri.l,fs.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new $e;$e.NAMES=Zp;let Nx=0;class Ga extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Lr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jp extends Ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,ds=new Ve;class Gt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=id,this.updateRange={offset:0,count:-1},this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ds.fromBufferAttribute(this,n),ds.applyMatrix3(e),this.setXY(n,ds.x,ds.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Sr(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Sr(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Sr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Sr(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Qp extends Gt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class em extends Gt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $i extends Gt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ox=0;const tn=new xt,_l=new Ut,pr=new H,$t=new Ha,ra=new Ha,At=new H;class Si extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?em:Qp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,n,i){return tn.makeTranslation(e,n,i),this.applyMatrix4(tn),this}scale(e,n,i){return tn.makeScale(e,n,i),this.applyMatrix4(tn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $i(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];ra.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors($t.min,ra.min),$t.expandByPoint(At),At.addVectors($t.max,ra.max),$t.expandByPoint(At)):($t.expandByPoint(ra.min),$t.expandByPoint(ra.max))}$t.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)At.fromBufferAttribute(s,c),l&&(pr.fromBufferAttribute(e,c),At.add(pr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<s;A++)c[A]=new H,u[A]=new H;const f=new H,d=new H,p=new H,x=new Ve,v=new Ve,m=new Ve,h=new H,_=new H;function g(A,B,N){f.fromArray(r,A*3),d.fromArray(r,B*3),p.fromArray(r,N*3),x.fromArray(o,A*2),v.fromArray(o,B*2),m.fromArray(o,N*2),d.sub(f),p.sub(f),v.sub(x),m.sub(x);const G=1/(v.x*m.y-m.x*v.y);isFinite(G)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(G),_.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(G),c[A].add(h),c[B].add(h),c[N].add(h),u[A].add(_),u[B].add(_),u[N].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let A=0,B=b.length;A<B;++A){const N=b[A],G=N.start,D=N.count;for(let V=G,q=G+D;V<q;V+=3)g(i[V+0],i[V+1],i[V+2])}const E=new H,C=new H,w=new H,P=new H;function S(A){w.fromArray(a,A*3),P.copy(w);const B=c[A];E.copy(B),E.sub(w.multiplyScalar(w.dot(B))).normalize(),C.crossVectors(P,B);const G=C.dot(u[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=G}for(let A=0,B=b.length;A<B;++A){const N=b[A],G=N.start,D=N.count;for(let V=G,q=G+D;V<q;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,a=new H,o=new H,s=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),a.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(x,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new Gt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new xt,Li=new $p,hs=new Ro,vd=new H,mr=new H,gr=new H,_r=new H,vl=new H,ps=new H,ms=new Ve,gs=new Ve,_s=new Ve,xd=new H,yd=new H,Md=new H,vs=new H,xs=new H;class Hn extends Ut{constructor(e=new Si,n=new Jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){ps.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(vl.fromBufferAttribute(f,e),o?ps.addScaledVector(vl,u):ps.addScaledVector(vl.sub(n),u))}n.add(ps)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(a),Li.copy(e.ray).recast(e.near),!(hs.containsPoint(Li.origin)===!1&&(Li.intersectSphere(hs,vd)===null||Li.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(_d.copy(a).invert(),Li.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Li)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,E=g;b<E;b+=3){const C=s.getX(b),w=s.getX(b+1),P=s.getX(b+2);r=ys(this,h,e,i,c,u,f,C,w,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=x,h=v;m<h;m+=3){const _=s.getX(m),g=s.getX(m+1),b=s.getX(m+2);r=ys(this,o,e,i,c,u,f,_,g,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,E=g;b<E;b+=3){const C=b,w=b+1,P=b+2;r=ys(this,h,e,i,c,u,f,C,w,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,h=v;m<h;m+=3){const _=m,g=m+1,b=m+2;r=ys(this,o,e,i,c,u,f,_,g,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Fx(t,e,n,i,r,a,o,s){let l;if(e.side===Vt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===vi,s),l===null)return null;xs.copy(s),xs.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xs);return c<n.near||c>n.far?null:{distance:c,point:xs.clone(),object:t}}function ys(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,mr),t.getVertexPosition(l,gr),t.getVertexPosition(c,_r);const u=Fx(t,e,n,i,mr,gr,_r,vs);if(u){r&&(ms.fromBufferAttribute(r,s),gs.fromBufferAttribute(r,l),_s.fromBufferAttribute(r,c),u.uv=un.getInterpolation(vs,mr,gr,_r,ms,gs,_s,new Ve)),a&&(ms.fromBufferAttribute(a,s),gs.fromBufferAttribute(a,l),_s.fromBufferAttribute(a,c),u.uv1=un.getInterpolation(vs,mr,gr,_r,ms,gs,_s,new Ve),u.uv2=u.uv1),o&&(xd.fromBufferAttribute(o,s),yd.fromBufferAttribute(o,l),Md.fromBufferAttribute(o,c),u.normal=un.getInterpolation(vs,mr,gr,_r,xd,yd,Md,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new H,materialIndex:0};un.getNormal(mr,gr,_r,f.normal),u.face=f}return u}class Va extends Si{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,o,a,0),x("z","y","x",1,-1,i,n,-e,o,a,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,a,4),x("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new $i(c,3)),this.setAttribute("normal",new $i(u,3)),this.setAttribute("uv",new $i(f,2));function x(v,m,h,_,g,b,E,C,w,P,S){const A=b/w,B=E/P,N=b/2,G=E/2,D=C/2,V=w+1,q=P+1;let Y=0,Q=0;const ee=new H;for(let le=0;le<q;le++){const O=le*B-G;for(let $=0;$<V;$++){const pe=$*A-N;ee[v]=pe*_,ee[m]=O*g,ee[h]=D,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[h]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push($/w),f.push(1-le/P),Y+=1}}for(let le=0;le<P;le++)for(let O=0;O<w;O++){const $=d+O+V*le,pe=d+O+V*(le+1),ye=d+(O+1)+V*(le+1),Ae=d+(O+1)+V*le;l.push($,pe,Ae),l.push(pe,ye,Ae),Q+=6}s.addGroup(p,Q,S),p+=Q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=Vr(t[n]);for(const r in i)e[r]=i[r]}return e}function zx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tm(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const Bx={clone:Vr,merge:Bt};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nm extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=kn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends nm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vr=-90,xr=1;class Gx extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(vr,xr,e,n);r.layers=this.layers,this.add(r);const a=new Kt(vr,xr,e,n);a.layers=this.layers,this.add(a);const o=new Kt(vr,xr,e,n);o.layers=this.layers,this.add(o);const s=new Kt(vr,xr,e,n);s.layers=this.layers,this.add(s);const l=new Kt(vr,xr,e,n);l.layers=this.layers,this.add(l);const c=new Kt(vr,xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class im extends Wt{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:kr,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?Rt:rn),this.texture=new im(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Va(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:hi});a.uniforms.tEquirect.value=n;const o=new Hn(r,a),s=n.minFilter;return n.minFilter===Ca&&(n.minFilter=nn),new Gx(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const xl=new H,Wx=new H,Xx=new qe;class li{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xl.subVectors(i,n).cross(Wx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Xx.getNormalMatrix(e),r=this.coplanarPoint(xl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ro,Ms=new H;class Qc{constructor(e=new li,n=new li,i=new li,r=new li,a=new li,o=new li){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=kn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],v=r[10],m=r[11],h=r[12],_=r[13],g=r[14],b=r[15];if(i[0].setComponents(l-a,d-c,m-p,b-h).normalize(),i[1].setComponents(l+a,d+c,m+p,b+h).normalize(),i[2].setComponents(l+o,d+u,m+x,b+_).normalize(),i[3].setComponents(l-o,d-u,m-x,b-_).normalize(),i[4].setComponents(l-s,d-f,m-v,b-g).normalize(),n===kn)i[5].setComponents(l+s,d+f,m+v,b+g).normalize();else if(n===eo)i[5].setComponents(s,f,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ms.x=r.normal.x>0?e.max.x:e.min.x,Ms.y=r.normal.y>0?e.max.y:e.min.y,Ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Yx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class eu extends Si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,d=n/l,p=[],x=[],v=[],m=[];for(let h=0;h<u;h++){const _=h*d-o;for(let g=0;g<c;g++){const b=g*f-a;x.push(b,-_,0),v.push(0,0,1),m.push(g/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<s;_++){const g=_+c*h,b=_+c*(h+1),E=_+1+c*(h+1),C=_+1+c*h;p.push(g,b,C),p.push(b,E,C)}this.setIndex(p),this.setAttribute("position",new $i(x,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ry=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,by=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,JM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rS=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:jx,alphahash_pars_fragment:qx,alphamap_fragment:$x,alphamap_pars_fragment:Kx,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:Qx,aomap_pars_fragment:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:ay,clipping_planes_fragment:sy,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:uy,color_pars_fragment:fy,color_pars_vertex:dy,color_vertex:hy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:vy,emissivemap_fragment:xy,emissivemap_pars_fragment:yy,colorspace_fragment:My,colorspace_pars_fragment:Sy,envmap_fragment:by,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:zy,envmap_vertex:wy,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Py,fog_pars_fragment:Ly,gradientmap_pars_fragment:Dy,lightmap_fragment:Iy,lightmap_pars_fragment:Uy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Oy,lights_pars_begin:Fy,lights_toon_fragment:By,lights_toon_pars_fragment:ky,lights_phong_fragment:Hy,lights_phong_pars_fragment:Gy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Wy,lights_fragment_begin:Xy,lights_fragment_maps:Yy,lights_fragment_end:jy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:Qy,map_particle_fragment:eM,map_particle_pars_fragment:tM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphcolor_vertex:rM,morphnormal_vertex:aM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:fM,normal_vertex:dM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,opaque_fragment:vM,packing:xM,premultiplied_alpha_fragment:yM,project_vertex:MM,dithering_fragment:SM,dithering_pars_fragment:bM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:wM,shadowmap_vertex:RM,shadowmask_pars_fragment:CM,skinbase_vertex:PM,skinning_pars_vertex:LM,skinning_vertex:DM,skinnormal_vertex:IM,specularmap_fragment:UM,specularmap_pars_fragment:NM,tonemapping_fragment:OM,tonemapping_pars_fragment:FM,transmission_fragment:zM,transmission_pars_fragment:BM,uv_pars_fragment:kM,uv_pars_vertex:HM,uv_vertex:GM,worldpos_vertex:VM,background_vert:WM,background_frag:XM,backgroundCube_vert:YM,backgroundCube_frag:jM,cube_vert:qM,cube_frag:$M,depth_vert:KM,depth_frag:ZM,distanceRGBA_vert:JM,distanceRGBA_frag:QM,equirect_vert:eS,equirect_frag:tS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:rS,meshbasic_frag:aS,meshlambert_vert:sS,meshlambert_frag:oS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:uS,meshnormal_frag:fS,meshphong_vert:dS,meshphong_frag:hS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:vS,points_frag:xS,shadow_vert:yS,shadow_frag:MS,sprite_vert:SS,sprite_frag:bS},Te={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},En={basic:{uniforms:Bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Bt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Bt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Bt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Bt([Te.points,Te.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Bt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Bt([Te.common,Te.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Bt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Bt([Te.sprite,Te.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Bt([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Bt([Te.lights,Te.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};En.physical={uniforms:Bt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ss={r:0,b:0,g:0};function ES(t,e,n,i,r,a,o){const s=new $e(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function x(m,h){let _=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?v(s,l):g&&g.isColor&&(v(g,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ao)?(u===void 0&&(u=new Hn(new Va(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Vr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=nt.getTransfer(g.colorSpace)!==rt,(f!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Hn(new eu(2,2),new Ji({name:"BackgroundMaterial",uniforms:Vr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=nt.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(Ss,tm(t)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(s,l)},render:x}}function TS(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(D,V,q,Y,Q){let ee=!1;if(o){const le=v(Y,q,V);c!==le&&(c=le,p(c.object)),ee=h(D,Y,q,Q),ee&&_(D,Y,q,Q)}else{const le=V.wireframe===!0;(c.geometry!==Y.id||c.program!==q.id||c.wireframe!==le)&&(c.geometry=Y.id,c.program=q.id,c.wireframe=le,ee=!0)}Q!==null&&n.update(Q,t.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,P(D,V,q,Y),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Q).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):a.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?t.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function v(D,V,q){const Y=q.wireframe===!0;let Q=s[D.id];Q===void 0&&(Q={},s[D.id]=Q);let ee=Q[V.id];ee===void 0&&(ee={},Q[V.id]=ee);let le=ee[Y];return le===void 0&&(le=m(d()),ee[Y]=le),le}function m(D){const V=[],q=[],Y=[];for(let Q=0;Q<r;Q++)V[Q]=0,q[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function h(D,V,q,Y){const Q=c.attributes,ee=V.attributes;let le=0;const O=q.getAttributes();for(const $ in O)if(O[$].location>=0){const ye=Q[$];let Ae=ee[$];if(Ae===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),ye===void 0||ye.attribute!==Ae||Ae&&ye.data!==Ae.data)return!0;le++}return c.attributesNum!==le||c.index!==Y}function _(D,V,q,Y){const Q={},ee=V.attributes;let le=0;const O=q.getAttributes();for(const $ in O)if(O[$].location>=0){let ye=ee[$];ye===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const Ae={};Ae.attribute=ye,ye&&ye.data&&(Ae.data=ye.data),Q[$]=Ae,le++}c.attributes=Q,c.attributesNum=le,c.index=Y}function g(){const D=c.newAttributes;for(let V=0,q=D.length;V<q;V++)D[V]=0}function b(D){E(D,0)}function E(D,V){const q=c.newAttributes,Y=c.enabledAttributes,Q=c.attributeDivisors;q[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),Q[D]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),Q[D]=V)}function C(){const D=c.newAttributes,V=c.enabledAttributes;for(let q=0,Y=V.length;q<Y;q++)V[q]!==D[q]&&(t.disableVertexAttribArray(q),V[q]=0)}function w(D,V,q,Y,Q,ee,le){le===!0?t.vertexAttribIPointer(D,V,q,Q,ee):t.vertexAttribPointer(D,V,q,Y,Q,ee)}function P(D,V,q,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const Q=Y.attributes,ee=q.getAttributes(),le=V.defaultAttributeValues;for(const O in ee){const $=ee[O];if($.location>=0){let pe=Q[O];if(pe===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),pe!==void 0){const ye=pe.normalized,Ae=pe.itemSize,we=n.get(pe);if(we===void 0)continue;const X=we.buffer,re=we.type,ne=we.bytesPerElement,ve=i.isWebGL2===!0&&(re===t.INT||re===t.UNSIGNED_INT||pe.gpuType===Fp);if(pe.isInterleavedBufferAttribute){const Se=pe.data,y=Se.stride,L=pe.offset;if(Se.isInstancedInterleavedBuffer){for(let I=0;I<$.locationSize;I++)E($.location+I,Se.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let I=0;I<$.locationSize;I++)b($.location+I);t.bindBuffer(t.ARRAY_BUFFER,X);for(let I=0;I<$.locationSize;I++)w($.location+I,Ae/$.locationSize,re,ye,y*ne,(L+Ae/$.locationSize*I)*ne,ve)}else{if(pe.isInstancedBufferAttribute){for(let Se=0;Se<$.locationSize;Se++)E($.location+Se,pe.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Se=0;Se<$.locationSize;Se++)b($.location+Se);t.bindBuffer(t.ARRAY_BUFFER,X);for(let Se=0;Se<$.locationSize;Se++)w($.location+Se,Ae/$.locationSize,re,ye,Ae*ne,Ae/$.locationSize*Se*ne,ve)}}else if(le!==void 0){const ye=le[O];if(ye!==void 0)switch(ye.length){case 2:t.vertexAttrib2fv($.location,ye);break;case 3:t.vertexAttrib3fv($.location,ye);break;case 4:t.vertexAttrib4fv($.location,ye);break;default:t.vertexAttrib1fv($.location,ye)}}}}C()}function S(){N();for(const D in s){const V=s[D];for(const q in V){const Y=V[q];for(const Q in Y)x(Y[Q].object),delete Y[Q];delete V[q]}delete s[D]}}function A(D){if(s[D.id]===void 0)return;const V=s[D.id];for(const q in V){const Y=V[q];for(const Q in Y)x(Y[Q].object),delete Y[Q];delete V[q]}delete s[D.id]}function B(D){for(const V in s){const q=s[V];if(q[D.id]===void 0)continue;const Y=q[D.id];for(const Q in Y)x(Y[Q].object),delete Y[Q];delete q[D.id]}}function N(){G(),u=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:b,disableUnusedAttributes:C}}function AS(t,e,n,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){t.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,c,u,f),n.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function wS(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,b=o||e.has("OES_texture_float"),E=g&&b,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:C}}function RS(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new li,s=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||a&&!m)a?u(null):c();else{const _=a?0:i,g=_*4;let b=h.clippingState||null;l.value=b,b=u(x,d,g,p);for(let E=0;E!==g;++E)b[E]=n[E];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const h=p+v*4,_=d.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,b=p;g!==v;++g,b+=4)o.copy(f[g]).applyMatrix4(_,s),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function CS(t){let e=new WeakMap;function n(o,s){return s===ic?o.mapping=kr:s===rc&&(o.mapping=Hr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ic||s===rc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vx(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class am extends nm{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const br=4,Sd=[.125,.215,.35,.446,.526,.582],Bi=20,yl=new am,bd=new $e;let Ml=null,Sl=0,bl=0;const Ii=(1+Math.sqrt(5))/2,yr=1/Ii,Ed=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ii,yr),new H(0,Ii,-yr),new H(yr,0,Ii),new H(-yr,0,Ii),new H(Ii,yr,0),new H(-Ii,yr,0)];class Td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,Sl,bl),e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Pa,format:hn,colorSpace:Wn,depthBuffer:!1},r=Ad(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PS(a)),this._blurMaterial=LS(a,e,n)}return r}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,yl)}_sceneToCubeUV(e,n,i,r){const s=new Kt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bd),u.toneMapping=pi,u.autoClear=!1;const p=new Jp({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),x=new Hn(new Va,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(bd),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):_===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const g=this._cubeSize;bs(r,_*g,h>2?g:0,g,g),u.setRenderTarget(r),v&&u.render(x,s),u.render(e,s)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===kr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ed[(r-1)%Ed.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Hn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),v=a/x,m=isFinite(a)?1+Math.floor(u*v):Bi;m>Bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const h=[];let _=0;for(let w=0;w<Bi;++w){const P=w/v,S=Math.exp(-P*P/2);h.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const b=this._sizeLods[r],E=3*b*(r>g-br?r-g+br:0),C=4*(this._cubeSize-b);bs(n,E,C,3*b,2*b),l.setRenderTarget(n),l.render(f,yl)}}function PS(t){const e=[],n=[],i=[];let r=t;const a=t-br+1+Sd.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-br?l=Sd[o-t+br-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,v=3,m=2,h=1,_=new Float32Array(v*x*p),g=new Float32Array(m*x*p),b=new Float32Array(h*x*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,P=C>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(S,v*x*C),g.set(d,m*x*C);const A=[C,C,C,C,C,C];b.set(A,h*x*C)}const E=new Si;E.setAttribute("position",new Gt(_,v)),E.setAttribute("uv",new Gt(g,m)),E.setAttribute("faceIndex",new Gt(b,h)),e.push(E),r>br&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ad(t,e,n){const i=new Ki(t,e,n);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LS(t,e,n){const i=new Float32Array(Bi),r=new H(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function wd(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Rd(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DS(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===ic||l===rc,u=l===kr||l===Hr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new Td(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Td(t));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function IS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function US(t,e,n,i){const r={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const v=p[x];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,x=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let g=0,b=_.length;g<b;g+=3){const E=_[g+0],C=_[g+1],w=_[g+2];d.push(E,C,C,w,w,E)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,b=_.length/3-1;g<b;g+=3){const E=g+0,C=g+1,w=g+2;d.push(E,C,C,w,w,E)}}else return;const m=new(Xp(d)?em:Qp)(d,1);m.version=v;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function NS(t,e,n,i){const r=i.isWebGL2;let a;function o(d){a=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(a,p,s,d*l),n.update(p,a,1)}function f(d,p,x){if(x===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,p,s,d*l,x),n.update(p,a,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function OS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FS(t,e){return t[0]-e[0]}function zS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function BS(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new lt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=p!==void 0?p.length:0;let v=a.get(u);if(v===void 0||v.count!==x){let D=function(){N.dispose(),a.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let P=0;_===!0&&(P=1),g===!0&&(P=2),b===!0&&(P=3);let S=u.attributes.position.count*P,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const B=new Float32Array(S*A*4*x),N=new qp(B,S,A,x);N.type=ui,N.needsUpdate=!0;const G=P*4;for(let V=0;V<x;V++){const q=E[V],Y=C[V],Q=w[V],ee=S*A*4*V;for(let le=0;le<q.count;le++){const O=le*G;_===!0&&(o.fromBufferAttribute(q,le),B[ee+O+0]=o.x,B[ee+O+1]=o.y,B[ee+O+2]=o.z,B[ee+O+3]=0),g===!0&&(o.fromBufferAttribute(Y,le),B[ee+O+4]=o.x,B[ee+O+5]=o.y,B[ee+O+6]=o.z,B[ee+O+7]=0),b===!0&&(o.fromBufferAttribute(Q,le),B[ee+O+8]=o.x,B[ee+O+9]=o.y,B[ee+O+10]=o.z,B[ee+O+11]=Q.itemSize===4?o.w:1)}}v={count:x,texture:N,size:new Ve(S,A)},a.set(u,v),u.addEventListener("dispose",D)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const h=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let x=i[u.id];if(x===void 0||x.length!==p){x=[];for(let g=0;g<p;g++)x[g]=[g,0];i[u.id]=x}for(let g=0;g<p;g++){const b=x[g];b[0]=g,b[1]=d[g]}x.sort(zS);for(let g=0;g<8;g++)g<p&&x[g][1]?(s[g][0]=x[g][0],s[g][1]=x[g][1]):(s[g][0]=Number.MAX_SAFE_INTEGER,s[g][1]=0);s.sort(FS);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const b=s[g],E=b[0],C=b[1];E!==Number.MAX_SAFE_INTEGER&&C?(v&&u.getAttribute("morphTarget"+g)!==v[E]&&u.setAttribute("morphTarget"+g,v[E]),m&&u.getAttribute("morphNormal"+g)!==m[E]&&u.setAttribute("morphNormal"+g,m[E]),r[g]=C,h+=C):(v&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const _=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function kS(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const sm=new Wt,om=new qp,lm=new Ax,cm=new im,Cd=[],Pd=[],Ld=new Float32Array(16),Dd=new Float32Array(9),Id=new Float32Array(4);function $r(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Cd[r];if(a===void 0&&(a=new Float32Array(r),Cd[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Po(t,e){let n=Pd[e];n===void 0&&(n=new Int32Array(e),Pd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function VS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function WS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function XS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(St(n,i))return;Id.set(i),t.uniformMatrix2fv(this.addr,!1,Id),bt(n,i)}}function YS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(St(n,i))return;Dd.set(i),t.uniformMatrix3fv(this.addr,!1,Dd),bt(n,i)}}function jS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(St(n,i))return;Ld.set(i),t.uniformMatrix4fv(this.addr,!1,Ld),bt(n,i)}}function qS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function KS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function ZS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function JS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||sm,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lm,r)}function rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||cm,r)}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||om,r)}function sb(t){switch(t){case 5126:return HS;case 35664:return GS;case 35665:return VS;case 35666:return WS;case 35674:return XS;case 35675:return YS;case 35676:return jS;case 5124:case 35670:return qS;case 35667:case 35671:return $S;case 35668:case 35672:return KS;case 35669:case 35673:return ZS;case 5125:return JS;case 36294:return QS;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}function ob(t,e){t.uniform1fv(this.addr,e)}function lb(t,e){const n=$r(e,this.size,2);t.uniform2fv(this.addr,n)}function cb(t,e){const n=$r(e,this.size,3);t.uniform3fv(this.addr,n)}function ub(t,e){const n=$r(e,this.size,4);t.uniform4fv(this.addr,n)}function fb(t,e){const n=$r(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function db(t,e){const n=$r(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hb(t,e){const n=$r(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pb(t,e){t.uniform1iv(this.addr,e)}function mb(t,e){t.uniform2iv(this.addr,e)}function gb(t,e){t.uniform3iv(this.addr,e)}function _b(t,e){t.uniform4iv(this.addr,e)}function vb(t,e){t.uniform1uiv(this.addr,e)}function xb(t,e){t.uniform2uiv(this.addr,e)}function yb(t,e){t.uniform3uiv(this.addr,e)}function Mb(t,e){t.uniform4uiv(this.addr,e)}function Sb(t,e,n){const i=this.cache,r=e.length,a=Po(n,r);St(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||sm,a[o])}function bb(t,e,n){const i=this.cache,r=e.length,a=Po(n,r);St(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||lm,a[o])}function Eb(t,e,n){const i=this.cache,r=e.length,a=Po(n,r);St(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||cm,a[o])}function Tb(t,e,n){const i=this.cache,r=e.length,a=Po(n,r);St(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||om,a[o])}function Ab(t){switch(t){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return fb;case 35675:return db;case 35676:return hb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}class wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=sb(n.type)}}class Rb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Ab(n.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Ud(t,e){t.seq.push(e),t.map[e.id]=e}function Pb(t,e,n){const i=t.name,r=i.length;for(El.lastIndex=0;;){const a=El.exec(i),o=El.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Ud(n,c===void 0?new wb(s,t,e):new Rb(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new Cb(s),Ud(n,f)),n=f}}}class Hs{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);Pb(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Nd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lb=37297;let Db=0;function Ib(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function Ub(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Qs&&n===Js?i="LinearDisplayP3ToLinearSRGB":e===Js&&n===Qs&&(i="LinearSRGBToLinearDisplayP3"),t){case Wn:case wo:return[i,"LinearTransferOETF"];case Rt:case Zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Od(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Ib(t.getShaderSource(e),o)}else return r}function Nb(t,e){const n=Ub(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ob(t,e){let n;switch(e){case Uv:n="Linear";break;case Nv:n="Reinhard";break;case Ov:n="OptimizedCineon";break;case Fv:n="ACESFilmic";break;case zv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Fb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function zb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function la(t){return t!==""}function Fd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(t){return t.replace(kb,Gb)}const Hb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gb(t,e){let n=Xe[e];if(n===void 0){const i=Hb.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(n)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(t){return t.replace(Vb,Wb)}function Wb(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function kd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Np?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function Yb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case kr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Iv:e="ENVMAP_BLENDING_ADD";break}return e}function $b(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Kb(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=Xb(n),c=Yb(n),u=jb(n),f=qb(n),d=$b(n),p=n.isWebGL2?"":Fb(n),x=zb(a),v=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(la).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(la).join(`
`),h.length>0&&(h+=`
`)):(m=[kd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),h=[p,kd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==pi?Ob("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Nb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),o=cc(o),o=Fd(o,n),o=zd(o,n),s=cc(s),s=Fd(s,n),s=zd(s,n),o=Bd(o),s=Bd(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=_+m+o,b=_+h+s,E=Nd(r,r.VERTEX_SHADER,g),C=Nd(r,r.FRAGMENT_SHADER,b);r.attachShader(v,E),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(B){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(E).trim(),D=r.getShaderInfoLog(C).trim();let V=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,C);else{const Y=Od(r,E,"vertex"),Q=Od(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+Y+`
`+Q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||D==="")&&(q=!1);q&&(B.diagnostics={runnable:V,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:D,prefix:h}})}r.deleteShader(E),r.deleteShader(C),P=new Hs(r,v),S=Bb(r,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,Lb)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=C,this}let Zb=0;class Jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Qb(e),n.set(e,i)),i}}class Qb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function eE(t,e,n,i,r,a,o){const s=new Kp,l=new Jb,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,A,B,N,G){const D=N.fog,V=G.geometry,q=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),Q=Y&&Y.mapping===Ao?Y.image.height:null,ee=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,O=le!==void 0?le.length:0;let $=0;V.morphAttributes.position!==void 0&&($=1),V.morphAttributes.normal!==void 0&&($=2),V.morphAttributes.color!==void 0&&($=3);let pe,ye,Ae,we;if(ee){const mt=En[ee];pe=mt.vertexShader,ye=mt.fragmentShader}else pe=S.vertexShader,ye=S.fragmentShader,l.update(S),Ae=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const X=t.getRenderTarget(),re=G.isInstancedMesh===!0,ne=!!S.map,ve=!!S.matcap,Se=!!Y,y=!!S.aoMap,L=!!S.lightMap,I=!!S.bumpMap,k=!!S.normalMap,j=!!S.displacementMap,ae=!!S.emissiveMap,fe=!!S.metalnessMap,te=!!S.roughnessMap,de=S.anisotropy>0,ce=S.clearcoat>0,Re=S.iridescence>0,T=S.sheen>0,M=S.transmission>0,z=de&&!!S.anisotropyMap,ie=ce&&!!S.clearcoatMap,oe=ce&&!!S.clearcoatNormalMap,ue=ce&&!!S.clearcoatRoughnessMap,be=Re&&!!S.iridescenceMap,me=Re&&!!S.iridescenceThicknessMap,Ee=T&&!!S.sheenColorMap,U=T&&!!S.sheenRoughnessMap,_e=!!S.specularMap,he=!!S.specularColorMap,Ie=!!S.specularIntensityMap,Ce=M&&!!S.transmissionMap,Oe=M&&!!S.thicknessMap,Ne=!!S.gradientMap,De=!!S.alphaMap,Ke=S.alphaTest>0,F=!!S.alphaHash,Me=!!S.extensions,ge=!!V.attributes.uv1,se=!!V.attributes.uv2,xe=!!V.attributes.uv3;let ze=pi;return S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ze=t.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:pe,fragmentShader:ye,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:re,instancingColor:re&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:X===null?t.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Wn,map:ne,matcap:ve,envMap:Se,envMapMode:Se&&Y.mapping,envMapCubeUVHeight:Q,aoMap:y,lightMap:L,bumpMap:I,normalMap:k,displacementMap:d&&j,emissiveMap:ae,normalMapObjectSpace:k&&S.normalMapType===Zv,normalMapTangentSpace:k&&S.normalMapType===Wp,metalnessMap:fe,roughnessMap:te,anisotropy:de,anisotropyMap:z,clearcoat:ce,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,iridescence:Re,iridescenceMap:be,iridescenceThicknessMap:me,sheen:T,sheenColorMap:Ee,sheenRoughnessMap:U,specularMap:_e,specularColorMap:he,specularIntensityMap:Ie,transmission:M,transmissionMap:Ce,thicknessMap:Oe,gradientMap:Ne,opaque:S.transparent===!1&&S.blending===Lr,alphaMap:De,alphaTest:Ke,alphaHash:F,combine:S.combine,mapUv:ne&&v(S.map.channel),aoMapUv:y&&v(S.aoMap.channel),lightMapUv:L&&v(S.lightMap.channel),bumpMapUv:I&&v(S.bumpMap.channel),normalMapUv:k&&v(S.normalMap.channel),displacementMapUv:j&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:fe&&v(S.metalnessMap.channel),roughnessMapUv:te&&v(S.roughnessMap.channel),anisotropyMapUv:z&&v(S.anisotropyMap.channel),clearcoatMapUv:ie&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:U&&v(S.sheenRoughnessMap.channel),specularMapUv:_e&&v(S.specularMap.channel),specularColorMapUv:he&&v(S.specularColorMap.channel),specularIntensityMapUv:Ie&&v(S.specularIntensityMap.channel),transmissionMapUv:Ce&&v(S.transmissionMap.channel),thicknessMapUv:Oe&&v(S.thicknessMap.channel),alphaMapUv:De&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(k||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:se,vertexUv3s:xe,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(ne||De),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zn,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Me&&S.extensions.derivatives===!0,extensionFragDepth:Me&&S.extensions.fragDepth===!0,extensionDrawBuffers:Me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)A.push(B),A.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(_(A,S),g(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),S.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function b(S){const A=x[S.type];let B;if(A){const N=En[A];B=Bx.clone(N.uniforms)}else B=S.uniforms;return B}function E(S,A){let B;for(let N=0,G=c.length;N<G;N++){const D=c[N];if(D.cacheKey===A){B=D,++B.usedTimes;break}}return B===void 0&&(B=new Kb(t,A,S,a),c.push(B)),B}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:E,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:P}}function tE(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gd(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,x,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function s(f,d,p,x,v,m){const h=o(f,d,p,x,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,x,v,m){const h=o(f,d,p,x,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||nE),i.length>1&&i.sort(d||Hd),r.length>1&&r.sort(d||Hd)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function iE(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new Gd,t.set(i,[o])):r>=a.length?(o=new Gd,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new $e};break;case"SpotLight":n={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function aE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sE=0;function oE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lE(t,e){const n=new rE,i=aE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const a=new H,o=new xt,s=new xt;function l(u,f){let d=0,p=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let v=0,m=0,h=0,_=0,g=0,b=0,E=0,C=0,w=0,P=0,S=0;u.sort(oE);const A=f===!0?Math.PI:1;for(let N=0,G=u.length;N<G;N++){const D=u[N],V=D.color,q=D.intensity,Y=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=V.r*q*A,p+=V.g*q*A,x+=V.b*q*A;else if(D.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(D.sh.coefficients[ee],q);S++}else if(D.isDirectionalLight){const ee=n.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const le=D.shadow,O=i.get(D);O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.directionalShadow[v]=O,r.directionalShadowMap[v]=Q,r.directionalShadowMatrix[v]=D.shadow.matrix,b++}r.directional[v]=ee,v++}else if(D.isSpotLight){const ee=n.get(D);ee.position.setFromMatrixPosition(D.matrixWorld),ee.color.copy(V).multiplyScalar(q*A),ee.distance=Y,ee.coneCos=Math.cos(D.angle),ee.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ee.decay=D.decay,r.spot[h]=ee;const le=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,le.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[h]=le.matrix,D.castShadow){const O=i.get(D);O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.spotShadow[h]=O,r.spotShadowMap[h]=Q,C++}h++}else if(D.isRectAreaLight){const ee=n.get(D);ee.color.copy(V).multiplyScalar(q),ee.halfWidth.set(D.width*.5,0,0),ee.halfHeight.set(0,D.height*.5,0),r.rectArea[_]=ee,_++}else if(D.isPointLight){const ee=n.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity*A),ee.distance=D.distance,ee.decay=D.decay,D.castShadow){const le=D.shadow,O=i.get(D);O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,O.shadowCameraNear=le.camera.near,O.shadowCameraFar=le.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=D.shadow.matrix,E++}r.point[m]=ee,m++}else if(D.isHemisphereLight){const ee=n.get(D);ee.skyColor.copy(D.color).multiplyScalar(q*A),ee.groundColor.copy(D.groundColor).multiplyScalar(q*A),r.hemi[g]=ee,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==h||B.rectAreaLength!==_||B.hemiLength!==g||B.numDirectionalShadows!==b||B.numPointShadows!==E||B.numSpotShadows!==C||B.numSpotMaps!==w||B.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=C+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,B.directionalLength=v,B.pointLength=m,B.spotLength=h,B.rectAreaLength=_,B.hemiLength=g,B.numDirectionalShadows=b,B.numPointShadows=E,B.numSpotShadows=C,B.numSpotMaps=w,B.numLightProbes=S,r.version=sE++)}function c(u,f){let d=0,p=0,x=0,v=0,m=0;const h=f.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const b=u[_];if(b.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),d++}else if(b.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),x++}else if(b.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(h),s.identity(),o.copy(b.matrixWorld),o.premultiply(h),s.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(h),p++}else if(b.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Vd(t,e){const n=new lE(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function cE(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new Vd(t,e),n.set(a,[l])):o>=s.length?(l=new Vd(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class uE extends Ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends Ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pE(t,e,n){let i=new Qc;const r=new Ve,a=new Ve,o=new lt,s=new uE({depthPacking:Kv}),l=new fE,c={},u=n.maxTextureSize,f={[vi]:Vt,[Vt]:vi,[zn]:zn},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:dE,fragmentShader:hE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Si;x.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Hn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Np;let h=this.type;this.render=function(E,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),B=t.state;B.setBlending(hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=h!==On&&this.type===On,G=h===On&&this.type!==On;for(let D=0,V=E.length;D<V;D++){const q=E[D],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const Q=Y.getFrameExtents();if(r.multiply(Q),a.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/Q.x),r.x=a.x*Q.x,Y.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/Q.y),r.y=a.y*Q.y,Y.mapSize.y=a.y)),Y.map===null||N===!0||G===!0){const le=this.type!==On?{minFilter:kt,magFilter:kt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ki(r.x,r.y,le),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const ee=Y.getViewportCount();for(let le=0;le<ee;le++){const O=Y.getViewport(le);o.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),B.viewport(o),Y.updateMatrices(q,le),i=Y.getFrustum(),b(C,w,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===On&&_(Y,w),Y.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(P,S,A)};function _(E,C){const w=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ki(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,w,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,w,p,v,null)}function g(E,C,w,P){let S=null;const A=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)S=A;else if(S=w.isPointLight===!0?l:s,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=S.uuid,N=C.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let D=G[N];D===void 0&&(D=S.clone(),G[N]=D),S=D}if(S.visible=C.visible,S.wireframe=C.wireframe,P===On?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=w}return S}function b(E,C,w,P,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===On)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const N=e.update(E),G=E.material;if(Array.isArray(G)){const D=N.groups;for(let V=0,q=D.length;V<q;V++){const Y=D[V],Q=G[Y.materialIndex];if(Q&&Q.visible){const ee=g(E,Q,P,S);t.renderBufferDirect(w,null,N,ee,E,Y)}}}else if(G.visible){const D=g(E,G,P,S);t.renderBufferDirect(w,null,N,D,E,null)}}const B=E.children;for(let N=0,G=B.length;N<G;N++)b(B[N],C,w,P,S)}}function mE(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const Me=new lt;let ge=null;const se=new lt(0,0,0,0);return{setMask:function(xe){ge!==xe&&!F&&(t.colorMask(xe,xe,xe,xe),ge=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ze,Ze,mt,Qt){Qt===!0&&(xe*=mt,ze*=mt,Ze*=mt),Me.set(xe,ze,Ze,mt),se.equals(Me)===!1&&(t.clearColor(xe,ze,Ze,mt),se.copy(Me))},reset:function(){F=!1,ge=null,se.set(-1,0,0,0)}}}function a(){let F=!1,Me=null,ge=null,se=null;return{setTest:function(xe){xe?ne(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(xe){Me!==xe&&!F&&(t.depthMask(xe),Me=xe)},setFunc:function(xe){if(ge!==xe){switch(xe){case Tv:t.depthFunc(t.NEVER);break;case Av:t.depthFunc(t.ALWAYS);break;case wv:t.depthFunc(t.LESS);break;case Ks:t.depthFunc(t.LEQUAL);break;case Rv:t.depthFunc(t.EQUAL);break;case Cv:t.depthFunc(t.GEQUAL);break;case Pv:t.depthFunc(t.GREATER);break;case Lv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=xe}},setLocked:function(xe){F=xe},setClear:function(xe){se!==xe&&(t.clearDepth(xe),se=xe)},reset:function(){F=!1,Me=null,ge=null,se=null}}}function o(){let F=!1,Me=null,ge=null,se=null,xe=null,ze=null,Ze=null,mt=null,Qt=null;return{setTest:function(it){F||(it?ne(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(it){Me!==it&&!F&&(t.stencilMask(it),Me=it)},setFunc:function(it,Nt,xn){(ge!==it||se!==Nt||xe!==xn)&&(t.stencilFunc(it,Nt,xn),ge=it,se=Nt,xe=xn)},setOp:function(it,Nt,xn){(ze!==it||Ze!==Nt||mt!==xn)&&(t.stencilOp(it,Nt,xn),ze=it,Ze=Nt,mt=xn)},setLocked:function(it){F=it},setClear:function(it){Qt!==it&&(t.clearStencil(it),Qt=it)},reset:function(){F=!1,Me=null,ge=null,se=null,xe=null,ze=null,Ze=null,mt=null,Qt=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},x=new WeakMap,v=[],m=null,h=!1,_=null,g=null,b=null,E=null,C=null,w=null,P=null,S=new $e(0,0,0),A=0,B=!1,N=null,G=null,D=null,V=null,q=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ee=0;const le=t.getParameter(t.VERSION);le.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(le)[1]),Q=ee>=1):le.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Q=ee>=2);let O=null,$={};const pe=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Ae=new lt().fromArray(pe),we=new lt().fromArray(ye);function X(F,Me,ge,se){const xe=new Uint8Array(4),ze=t.createTexture();t.bindTexture(F,ze),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ge;Ze++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Me,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(Me+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ze}const re={};re[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(re[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ne(t.DEPTH_TEST),l.setFunc(Ks),fe(!1),te(Ef),ne(t.CULL_FACE),j(hi);function ne(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function ve(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Se(F,Me){return p[F]!==Me?(t.bindFramebuffer(F,Me),p[F]=Me,i&&(F===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Me),F===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Me)),!0):!1}function y(F,Me){let ge=v,se=!1;if(F)if(ge=x.get(Me),ge===void 0&&(ge=[],x.set(Me,ge)),F.isWebGLMultipleRenderTargets){const xe=F.texture;if(ge.length!==xe.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let ze=0,Ze=xe.length;ze<Ze;ze++)ge[ze]=t.COLOR_ATTACHMENT0+ze;ge.length=xe.length,se=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,se=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,se=!0);se&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function L(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const I={[zi]:t.FUNC_ADD,[uv]:t.FUNC_SUBTRACT,[fv]:t.FUNC_REVERSE_SUBTRACT};if(i)I[Rf]=t.MIN,I[Cf]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(I[Rf]=F.MIN_EXT,I[Cf]=F.MAX_EXT)}const k={[dv]:t.ZERO,[hv]:t.ONE,[pv]:t.SRC_COLOR,[tc]:t.SRC_ALPHA,[yv]:t.SRC_ALPHA_SATURATE,[vv]:t.DST_COLOR,[gv]:t.DST_ALPHA,[mv]:t.ONE_MINUS_SRC_COLOR,[nc]:t.ONE_MINUS_SRC_ALPHA,[xv]:t.ONE_MINUS_DST_COLOR,[_v]:t.ONE_MINUS_DST_ALPHA,[Mv]:t.CONSTANT_COLOR,[Sv]:t.ONE_MINUS_CONSTANT_COLOR,[bv]:t.CONSTANT_ALPHA,[Ev]:t.ONE_MINUS_CONSTANT_ALPHA};function j(F,Me,ge,se,xe,ze,Ze,mt,Qt,it){if(F===hi){h===!0&&(ve(t.BLEND),h=!1);return}if(h===!1&&(ne(t.BLEND),h=!0),F!==cv){if(F!==_||it!==B){if((g!==zi||C!==zi)&&(t.blendEquation(t.FUNC_ADD),g=zi,C=zi),it)switch(F){case Lr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tf:t.blendFunc(t.ONE,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Lr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,E=null,w=null,P=null,S.set(0,0,0),A=0,_=F,B=it}return}xe=xe||Me,ze=ze||ge,Ze=Ze||se,(Me!==g||xe!==C)&&(t.blendEquationSeparate(I[Me],I[xe]),g=Me,C=xe),(ge!==b||se!==E||ze!==w||Ze!==P)&&(t.blendFuncSeparate(k[ge],k[se],k[ze],k[Ze]),b=ge,E=se,w=ze,P=Ze),(mt.equals(S)===!1||Qt!==A)&&(t.blendColor(mt.r,mt.g,mt.b,Qt),S.copy(mt),A=Qt),_=F,B=!1}function ae(F,Me){F.side===zn?ve(t.CULL_FACE):ne(t.CULL_FACE);let ge=F.side===Vt;Me&&(ge=!ge),fe(ge),F.blending===Lr&&F.transparent===!1?j(hi):j(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),s.setMask(F.colorWrite);const se=F.stencilWrite;c.setTest(se),se&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(F){N!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),N=F)}function te(F){F!==sv?(ne(t.CULL_FACE),F!==G&&(F===Ef?t.cullFace(t.BACK):F===ov?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),G=F}function de(F){F!==D&&(Q&&t.lineWidth(F),D=F)}function ce(F,Me,ge){F?(ne(t.POLYGON_OFFSET_FILL),(V!==Me||q!==ge)&&(t.polygonOffset(Me,ge),V=Me,q=ge)):ve(t.POLYGON_OFFSET_FILL)}function Re(F){F?ne(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function T(F){F===void 0&&(F=t.TEXTURE0+Y-1),O!==F&&(t.activeTexture(F),O=F)}function M(F,Me,ge){ge===void 0&&(O===null?ge=t.TEXTURE0+Y-1:ge=O);let se=$[ge];se===void 0&&(se={type:void 0,texture:void 0},$[ge]=se),(se.type!==F||se.texture!==Me)&&(O!==ge&&(t.activeTexture(ge),O=ge),t.bindTexture(F,Me||re[F]),se.type=F,se.texture=Me)}function z(){const F=$[O];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(F){Ae.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ae.copy(F))}function Oe(F){we.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),we.copy(F))}function Ne(F,Me){let ge=f.get(Me);ge===void 0&&(ge=new WeakMap,f.set(Me,ge));let se=ge.get(F);se===void 0&&(se=t.getUniformBlockIndex(Me,F.name),ge.set(F,se))}function De(F,Me){const se=f.get(Me).get(F);u.get(Me)!==se&&(t.uniformBlockBinding(Me,se,F.__bindingPointIndex),u.set(Me,se))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},O=null,$={},p={},x=new WeakMap,v=[],m=null,h=!1,_=null,g=null,b=null,E=null,C=null,w=null,P=null,S=new $e(0,0,0),A=0,B=!1,N=null,G=null,D=null,V=null,q=null,Ae.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:ne,disable:ve,bindFramebuffer:Se,drawBuffers:y,useProgram:L,setBlending:j,setMaterial:ae,setFlipSided:fe,setCullFace:te,setLineWidth:de,setPolygonOffset:ce,setScissorTest:Re,activeTexture:T,bindTexture:M,unbindTexture:z,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:he,texImage3D:Ie,updateUBOMapping:Ne,uniformBlockBinding:De,texStorage2D:U,texStorage3D:_e,texSubImage2D:ue,texSubImage3D:be,compressedTexSubImage2D:me,compressedTexSubImage3D:Ee,scissor:Ce,viewport:Oe,reset:Ke}}function gE(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return h?new OffscreenCanvas(T,M):Da("canvas")}function g(T,M,z,ie){let oe=1;if((T.width>ie||T.height>ie)&&(oe=ie/Math.max(T.width,T.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=M?to:Math.floor,be=ue(oe*T.width),me=ue(oe*T.height);v===void 0&&(v=_(be,me));const Ee=z?_(be,me):v;return Ee.width=be,Ee.height=me,Ee.getContext("2d").drawImage(T,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+me+")."),Ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return lc(T.width)&&lc(T.height)}function E(T){return s?!1:T.wrapS!==dn||T.wrapT!==dn||T.minFilter!==kt&&T.minFilter!==nn}function C(T,M){return T.generateMipmaps&&M&&T.minFilter!==kt&&T.minFilter!==nn}function w(T){t.generateMipmap(T)}function P(T,M,z,ie,oe=!1){if(s===!1)return M;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=M;if(M===t.RED&&(z===t.FLOAT&&(ue=t.R32F),z===t.HALF_FLOAT&&(ue=t.R16F),z===t.UNSIGNED_BYTE&&(ue=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ue=t.R8UI),z===t.UNSIGNED_SHORT&&(ue=t.R16UI),z===t.UNSIGNED_INT&&(ue=t.R32UI),z===t.BYTE&&(ue=t.R8I),z===t.SHORT&&(ue=t.R16I),z===t.INT&&(ue=t.R32I)),M===t.RG&&(z===t.FLOAT&&(ue=t.RG32F),z===t.HALF_FLOAT&&(ue=t.RG16F),z===t.UNSIGNED_BYTE&&(ue=t.RG8)),M===t.RGBA){const be=oe?Zs:nt.getTransfer(ie);z===t.FLOAT&&(ue=t.RGBA32F),z===t.HALF_FLOAT&&(ue=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ue=be===rt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(T,M,z){return C(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){return T===kt||T===Pf||T===Zo?t.NEAREST:t.LINEAR}function B(T){const M=T.target;M.removeEventListener("dispose",B),G(M),M.isVideoTexture&&x.delete(M)}function N(T){const M=T.target;M.removeEventListener("dispose",N),V(M)}function G(T){const M=i.get(T);if(M.__webglInit===void 0)return;const z=T.source,ie=m.get(z);if(ie){const oe=ie[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&D(T),Object.keys(ie).length===0&&m.delete(z)}i.remove(T)}function D(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const z=T.source,ie=m.get(z);delete ie[M.__cacheKey],o.memory.textures--}function V(T){const M=T.texture,z=i.get(T),ie=i.get(M);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(z.__webglFramebuffer[oe]))for(let ue=0;ue<z.__webglFramebuffer[oe].length;ue++)t.deleteFramebuffer(z.__webglFramebuffer[oe][ue]);else t.deleteFramebuffer(z.__webglFramebuffer[oe]);z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[oe])}else{if(Array.isArray(z.__webglFramebuffer))for(let oe=0;oe<z.__webglFramebuffer.length;oe++)t.deleteFramebuffer(z.__webglFramebuffer[oe]);else t.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let oe=0;oe<z.__webglColorRenderbuffer.length;oe++)z.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[oe]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,ue=M.length;oe<ue;oe++){const be=i.get(M[oe]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(T)}let q=0;function Y(){q=0}function Q(){const T=q;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),q+=1,T}function ee(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function le(T,M){const z=i.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(z,T,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function O(T,M){const z=i.get(T);if(T.version>0&&z.__version!==T.version){ne(z,T,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function $(T,M){const z=i.get(T);if(T.version>0&&z.__version!==T.version){ne(z,T,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function pe(T,M){const z=i.get(T);if(T.version>0&&z.__version!==T.version){ve(z,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const ye={[ac]:t.REPEAT,[dn]:t.CLAMP_TO_EDGE,[sc]:t.MIRRORED_REPEAT},Ae={[kt]:t.NEAREST,[Pf]:t.NEAREST_MIPMAP_NEAREST,[Zo]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Bv]:t.LINEAR_MIPMAP_NEAREST,[Ca]:t.LINEAR_MIPMAP_LINEAR},we={[Jv]:t.NEVER,[ax]:t.ALWAYS,[Qv]:t.LESS,[tx]:t.LEQUAL,[ex]:t.EQUAL,[rx]:t.GEQUAL,[nx]:t.GREATER,[ix]:t.NOTEQUAL};function X(T,M,z){if(z?(t.texParameteri(T,t.TEXTURE_WRAP_S,ye[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ye[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ye[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Ae[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Ae[M.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==dn||M.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==kt&&M.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===kt||M.minFilter!==Zo&&M.minFilter!==Ca||M.type===ui&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===Pa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function re(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",B));const ie=M.source;let oe=m.get(ie);oe===void 0&&(oe={},m.set(ie,oe));const ue=ee(M);if(ue!==T.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[ue].usedTimes++;const be=oe[T.__cacheKey];be!==void 0&&(oe[T.__cacheKey].usedTimes--,be.usedTimes===0&&D(M)),T.__cacheKey=ue,T.__webglTexture=oe[ue].texture}return z}function ne(T,M,z){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const oe=re(T,M),ue=M.source;n.bindTexture(ie,T.__webglTexture,t.TEXTURE0+z);const be=i.get(ue);if(ue.version!==be.__version||oe===!0){n.activeTexture(t.TEXTURE0+z);const me=nt.getPrimaries(nt.workingColorSpace),Ee=M.colorSpace===rn?null:nt.getPrimaries(M.colorSpace),U=M.colorSpace===rn||me===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const _e=E(M)&&b(M.image)===!1;let he=g(M.image,_e,!1,u);he=Re(M,he);const Ie=b(he)||s,Ce=a.convert(M.format,M.colorSpace);let Oe=a.convert(M.type),Ne=P(M.internalFormat,Ce,Oe,M.colorSpace,M.isVideoTexture);X(ie,M,Ie);let De;const Ke=M.mipmaps,F=s&&M.isVideoTexture!==!0,Me=be.__version===void 0||oe===!0,ge=S(M,he,Ie);if(M.isDepthTexture)Ne=t.DEPTH_COMPONENT,s?M.type===ui?Ne=t.DEPTH_COMPONENT32F:M.type===ci?Ne=t.DEPTH_COMPONENT24:M.type===Yi?Ne=t.DEPTH24_STENCIL8:Ne=t.DEPTH_COMPONENT16:M.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ji&&Ne===t.DEPTH_COMPONENT&&M.type!==Kc&&M.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ci,Oe=a.convert(M.type)),M.format===Gr&&Ne===t.DEPTH_COMPONENT&&(Ne=t.DEPTH_STENCIL,M.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Yi,Oe=a.convert(M.type))),Me&&(F?n.texStorage2D(t.TEXTURE_2D,1,Ne,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ne,he.width,he.height,0,Ce,Oe,null));else if(M.isDataTexture)if(Ke.length>0&&Ie){F&&Me&&n.texStorage2D(t.TEXTURE_2D,ge,Ne,Ke[0].width,Ke[0].height);for(let se=0,xe=Ke.length;se<xe;se++)De=Ke[se],F?n.texSubImage2D(t.TEXTURE_2D,se,0,0,De.width,De.height,Ce,Oe,De.data):n.texImage2D(t.TEXTURE_2D,se,Ne,De.width,De.height,0,Ce,Oe,De.data);M.generateMipmaps=!1}else F?(Me&&n.texStorage2D(t.TEXTURE_2D,ge,Ne,he.width,he.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Ce,Oe,he.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,he.width,he.height,0,Ce,Oe,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Ne,Ke[0].width,Ke[0].height,he.depth);for(let se=0,xe=Ke.length;se<xe;se++)De=Ke[se],M.format!==hn?Ce!==null?F?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,De.width,De.height,he.depth,Ce,De.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ne,De.width,De.height,he.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,De.width,De.height,he.depth,Ce,Oe,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ne,De.width,De.height,he.depth,0,Ce,Oe,De.data)}else{F&&Me&&n.texStorage2D(t.TEXTURE_2D,ge,Ne,Ke[0].width,Ke[0].height);for(let se=0,xe=Ke.length;se<xe;se++)De=Ke[se],M.format!==hn?Ce!==null?F?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,De.width,De.height,Ce,De.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?n.texSubImage2D(t.TEXTURE_2D,se,0,0,De.width,De.height,Ce,Oe,De.data):n.texImage2D(t.TEXTURE_2D,se,Ne,De.width,De.height,0,Ce,Oe,De.data)}else if(M.isDataArrayTexture)F?(Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Ne,he.width,he.height,he.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,Oe,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,Ce,Oe,he.data);else if(M.isData3DTexture)F?(Me&&n.texStorage3D(t.TEXTURE_3D,ge,Ne,he.width,he.height,he.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,Oe,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,Ce,Oe,he.data);else if(M.isFramebufferTexture){if(Me)if(F)n.texStorage2D(t.TEXTURE_2D,ge,Ne,he.width,he.height);else{let se=he.width,xe=he.height;for(let ze=0;ze<ge;ze++)n.texImage2D(t.TEXTURE_2D,ze,Ne,se,xe,0,Ce,Oe,null),se>>=1,xe>>=1}}else if(Ke.length>0&&Ie){F&&Me&&n.texStorage2D(t.TEXTURE_2D,ge,Ne,Ke[0].width,Ke[0].height);for(let se=0,xe=Ke.length;se<xe;se++)De=Ke[se],F?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ce,Oe,De):n.texImage2D(t.TEXTURE_2D,se,Ne,Ce,Oe,De);M.generateMipmaps=!1}else F?(Me&&n.texStorage2D(t.TEXTURE_2D,ge,Ne,he.width,he.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Oe,he)):n.texImage2D(t.TEXTURE_2D,0,Ne,Ce,Oe,he);C(M,Ie)&&w(ie),be.__version=ue.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ve(T,M,z){if(M.image.length!==6)return;const ie=re(T,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+z);const ue=i.get(oe);if(oe.version!==ue.__version||ie===!0){n.activeTexture(t.TEXTURE0+z);const be=nt.getPrimaries(nt.workingColorSpace),me=M.colorSpace===rn?null:nt.getPrimaries(M.colorSpace),Ee=M.colorSpace===rn||be===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const U=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,he=[];for(let se=0;se<6;se++)!U&&!_e?he[se]=g(M.image[se],!1,!0,c):he[se]=_e?M.image[se].image:M.image[se],he[se]=Re(M,he[se]);const Ie=he[0],Ce=b(Ie)||s,Oe=a.convert(M.format,M.colorSpace),Ne=a.convert(M.type),De=P(M.internalFormat,Oe,Ne,M.colorSpace),Ke=s&&M.isVideoTexture!==!0,F=ue.__version===void 0||ie===!0;let Me=S(M,Ie,Ce);X(t.TEXTURE_CUBE_MAP,M,Ce);let ge;if(U){Ke&&F&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,De,Ie.width,Ie.height);for(let se=0;se<6;se++){ge=he[se].mipmaps;for(let xe=0;xe<ge.length;xe++){const ze=ge[xe];M.format!==hn?Oe!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,De,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,ze.width,ze.height,Oe,Ne,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,De,ze.width,ze.height,0,Oe,Ne,ze.data)}}}else{ge=M.mipmaps,Ke&&F&&(ge.length>0&&Me++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,De,he[0].width,he[0].height));for(let se=0;se<6;se++)if(_e){Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,he[se].width,he[se].height,Oe,Ne,he[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,De,he[se].width,he[se].height,0,Oe,Ne,he[se].data);for(let xe=0;xe<ge.length;xe++){const Ze=ge[xe].image[se].image;Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Ze.width,Ze.height,Oe,Ne,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,De,Ze.width,Ze.height,0,Oe,Ne,Ze.data)}}else{Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Ne,he[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,De,Oe,Ne,he[se]);for(let xe=0;xe<ge.length;xe++){const ze=ge[xe];Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Oe,Ne,ze.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,De,Oe,Ne,ze.image[se])}}}C(M,Ce)&&w(t.TEXTURE_CUBE_MAP),ue.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Se(T,M,z,ie,oe,ue){const be=a.convert(z.format,z.colorSpace),me=a.convert(z.type),Ee=P(z.internalFormat,be,me,z.colorSpace);if(!i.get(M).__hasExternalTextures){const _e=Math.max(1,M.width>>ue),he=Math.max(1,M.height>>ue);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ue,Ee,_e,he,M.depth,0,be,me,null):n.texImage2D(oe,ue,Ee,_e,he,0,be,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),de(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,oe,i.get(z).__webglTexture,0,te(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,oe,i.get(z).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function y(T,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let ie=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(z||de(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ui?ie=t.DEPTH_COMPONENT32F:oe.type===ci&&(ie=t.DEPTH_COMPONENT24));const ue=te(M);de(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ie,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ie,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const ie=te(M);z&&de(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):de(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ie.length;oe++){const ue=ie[oe],be=a.convert(ue.format,ue.colorSpace),me=a.convert(ue.type),Ee=P(ue.internalFormat,be,me,ue.colorSpace),U=te(M);z&&de(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,U,Ee,M.width,M.height):de(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,U,Ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function L(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,oe=te(M);if(M.depthTexture.format===ji)de(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Gr)de(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function I(T){const M=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");L(M.__webglFramebuffer,T)}else if(z){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),y(M.__webglDepthbuffer[ie],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),y(M.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(T,M,z){const ie=i.get(T);M!==void 0&&Se(ie.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&I(T)}function j(T){const M=T.texture,z=i.get(T),ie=i.get(M);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++);const oe=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,be=b(T)||s;if(oe){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(s&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)z.__webglFramebuffer[me][Ee]=t.createFramebuffer()}else z.__webglFramebuffer[me]=t.createFramebuffer()}else{if(s&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)z.__webglFramebuffer[me]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ue)if(r.drawBuffers){const me=T.texture;for(let Ee=0,U=me.length;Ee<U;Ee++){const _e=i.get(me[Ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&de(T)===!1){const me=ue?M:[M];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const U=me[Ee];z.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[Ee]);const _e=a.convert(U.format,U.colorSpace),he=a.convert(U.type),Ie=P(U.internalFormat,_e,he,U.colorSpace,T.isXRRenderTarget===!0),Ce=te(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ie,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,z.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),y(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),X(t.TEXTURE_CUBE_MAP,M,be);for(let me=0;me<6;me++)if(s&&M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Se(z.__webglFramebuffer[me][Ee],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else Se(z.__webglFramebuffer[me],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);C(M,be)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const me=T.texture;for(let Ee=0,U=me.length;Ee<U;Ee++){const _e=me[Ee],he=i.get(_e);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),X(t.TEXTURE_2D,_e,be),Se(z.__webglFramebuffer,T,_e,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),C(_e,be)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?me=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,ie.__webglTexture),X(me,M,be),s&&M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Se(z.__webglFramebuffer[Ee],T,M,t.COLOR_ATTACHMENT0,me,Ee);else Se(z.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,me,0);C(M,be)&&w(me),n.unbindTexture()}T.depthBuffer&&I(T)}function ae(T){const M=b(T)||s,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,oe=z.length;ie<oe;ie++){const ue=z[ie];if(C(ue,M)){const be=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(ue).__webglTexture;n.bindTexture(be,me),w(be),n.unbindTexture()}}}function fe(T){if(s&&T.samples>0&&de(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,ie=T.height;let oe=t.COLOR_BUFFER_BIT;const ue=[],be=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(T),Ee=T.isWebGLMultipleRenderTargets===!0;if(Ee)for(let U=0;U<M.length;U++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let U=0;U<M.length;U++){ue.push(t.COLOR_ATTACHMENT0+U),T.depthBuffer&&ue.push(be);const _e=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(_e===!1&&(T.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),Ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[U]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Ee){const he=i.get(M[U]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,z,ie,0,0,z,ie,oe,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let U=0;U<M.length;U++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,me.__webglColorRenderbuffer[U]);const _e=i.get(M[U]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function te(T){return Math.min(f,T.samples)}function de(T){const M=i.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(T){const M=o.render.frame;x.get(T)!==M&&(x.set(T,M),T.update())}function Re(T,M){const z=T.colorSpace,ie=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===oc||z!==Wn&&z!==rn&&(nt.getTransfer(z)===rt?s===!1?e.has("EXT_sRGB")===!0&&ie===hn?(T.format=oc,T.minFilter=nn,T.generateMipmaps=!1):M=Yp.sRGBToLinear(M):(ie!==hn||oe!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=pe,this.rebindTextures=k,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=de}function _E(t,e,n){const i=n.isWebGL2;function r(a,o=rn){let s;const l=nt.getTransfer(o);if(a===mi)return t.UNSIGNED_BYTE;if(a===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Bp)return t.UNSIGNED_SHORT_5_5_5_1;if(a===kv)return t.BYTE;if(a===Hv)return t.SHORT;if(a===Kc)return t.UNSIGNED_SHORT;if(a===Fp)return t.INT;if(a===ci)return t.UNSIGNED_INT;if(a===ui)return t.FLOAT;if(a===Pa)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Gv)return t.ALPHA;if(a===hn)return t.RGBA;if(a===Vv)return t.LUMINANCE;if(a===Wv)return t.LUMINANCE_ALPHA;if(a===ji)return t.DEPTH_COMPONENT;if(a===Gr)return t.DEPTH_STENCIL;if(a===oc)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Xv)return t.RED;if(a===kp)return t.RED_INTEGER;if(a===Yv)return t.RG;if(a===Hp)return t.RG_INTEGER;if(a===Gp)return t.RGBA_INTEGER;if(a===Jo||a===Qo||a===el||a===tl)if(l===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Lf||a===Df||a===If||a===Uf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Lf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===If)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Uf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===jv)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Nf||a===Of)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Nf)return l===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Of)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ff||a===zf||a===Bf||a===kf||a===Hf||a===Gf||a===Vf||a===Wf||a===Xf||a===Yf||a===jf||a===qf||a===$f||a===Kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ff)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===zf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Bf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===kf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Hf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Vf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Wf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Xf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===qf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===$f)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Kf)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nl||a===Zf||a===Jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===nl)return l===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===qv||a===Qf||a===ed||a===td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Yi?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class vE extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yE extends Wt{constructor(e,n,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:ji,u!==ji&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ji&&(i=ci),i===void 0&&u===Gr&&(i=Yi),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ME extends tr{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const v=n.getContextAttributes();let m=null,h=null;const _=[],g=[],b=new Kt;b.layers.enable(1),b.viewport=new lt;const E=new Kt;E.layers.enable(2),E.viewport=new lt;const C=[b,E],w=new vE;w.layers.enable(1),w.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=_[O];return $===void 0&&($=new Tl,_[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=_[O];return $===void 0&&($=new Tl,_[O]=$),$.getGripSpace()},this.getHand=function(O){let $=_[O];return $===void 0&&($=new Tl,_[O]=$),$.getHandSpace()};function A(O){const $=g.indexOf(O.inputSource);if($===-1)return;const pe=_[$];pe!==void 0&&(pe.update(O.inputSource,O.frame,c||o),pe.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",N);for(let O=0;O<_.length;O++){const $=g[O];$!==null&&(g[O]=null,_[O].disconnect($))}P=null,S=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",B),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:p}),h=new Ki(p.framebufferWidth,p.framebufferHeight,{format:hn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,pe=null,ye=null;v.depth&&(ye=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=v.stencil?Gr:ji,pe=v.stencil?Yi:ci);const Ae={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:a};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),h=new Ki(d.textureWidth,d.textureHeight,{format:hn,type:mi,depthTexture:new yE(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const we=e.properties.get(h);we.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(O){for(let $=0;$<O.removed.length;$++){const pe=O.removed[$],ye=g.indexOf(pe);ye>=0&&(g[ye]=null,_[ye].disconnect(pe))}for(let $=0;$<O.added.length;$++){const pe=O.added[$];let ye=g.indexOf(pe);if(ye===-1){for(let we=0;we<_.length;we++)if(we>=g.length){g.push(pe),ye=we;break}else if(g[we]===null){g[we]=pe,ye=we;break}if(ye===-1)break}const Ae=_[ye];Ae&&Ae.connect(pe)}}const G=new H,D=new H;function V(O,$,pe){G.setFromMatrixPosition($.matrixWorld),D.setFromMatrixPosition(pe.matrixWorld);const ye=G.distanceTo(D),Ae=$.projectionMatrix.elements,we=pe.projectionMatrix.elements,X=Ae[14]/(Ae[10]-1),re=Ae[14]/(Ae[10]+1),ne=(Ae[9]+1)/Ae[5],ve=(Ae[9]-1)/Ae[5],Se=(Ae[8]-1)/Ae[0],y=(we[8]+1)/we[0],L=X*Se,I=X*y,k=ye/(-Se+y),j=k*-Se;$.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(j),O.translateZ(k),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ae=X+k,fe=re+k,te=L-j,de=I+(ye-j),ce=ne*re/fe*ae,Re=ve*re/fe*ae;O.projectionMatrix.makePerspective(te,de,ce,Re,ae,fe),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function q(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;w.near=E.near=b.near=O.near,w.far=E.far=b.far=O.far,(P!==w.near||S!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,S=w.far);const $=O.parent,pe=w.cameras;q(w,$);for(let ye=0;ye<pe.length;ye++)q(pe[ye],$);pe.length===2?V(w,b,E):w.projectionMatrix.copy(b.projectionMatrix),Y(O,w,$)};function Y(O,$,pe){pe===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(pe.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=La*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let Q=null;function ee(O,$){if(u=$.getViewerPose(c||o),x=$,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ye=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Ae=0;Ae<pe.length;Ae++){const we=pe[Ae];let X=null;if(p!==null)X=p.getViewport(we);else{const ne=f.getViewSubImage(d,we);X=ne.viewport,Ae===0&&(e.setRenderTargetTextures(h,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(h))}let re=C[Ae];re===void 0&&(re=new Kt,re.layers.enable(Ae),re.viewport=new lt,C[Ae]=re),re.matrix.fromArray(we.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(we.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(X.x,X.y,X.width,X.height),Ae===0&&(w.matrix.copy(re.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(re)}}for(let pe=0;pe<_.length;pe++){const ye=g[pe],Ae=_[pe];ye!==null&&Ae!==void 0&&Ae.update(ye,$,c||o)}Q&&Q(O,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const le=new rm;le.setAnimationLoop(ee),this.setAnimationLoop=function(O){Q=O},this.dispose=function(){}}}function SE(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,tm(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,g,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(a(m,h),x(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,_,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Vt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Vt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bE(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const b=g.program;i.uniformBlockBinding(_,b)}function c(_,g){let b=r[_.id];b===void 0&&(x(_),b=u(_),r[_.id]=b,_.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(_,E);const C=e.render.frame;a[_.id]!==C&&(d(_),a[_.id]=C)}function u(_){const g=f();_.__bindingPointIndex=g;const b=t.createBuffer(),E=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,E,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,b),b}function f(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],b=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=b.length;C<w;C++){const P=b[C];if(p(P,C,E)===!0){const S=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let N=0;N<A.length;N++){const G=A[N],D=v(G);typeof G=="number"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,S+B,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=G.elements[0],P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=G.elements[0],P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=G.elements[0]):(G.toArray(P.__data,B),B+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,b){const E=_.value;if(b[g]===void 0){if(typeof E=="number")b[g]=E;else{const C=Array.isArray(E)?E:[E],w=[];for(let P=0;P<C.length;P++)w.push(C[P].clone());b[g]=w}return!0}else if(typeof E=="number"){if(b[g]!==E)return b[g]=E,!0}else{const C=Array.isArray(b[g])?b[g]:[b[g]],w=Array.isArray(E)?E:[E];for(let P=0;P<C.length;P++){const S=C[P];if(S.equals(w[P])===!1)return S.copy(w[P]),!0}}return!1}function x(_){const g=_.uniforms;let b=0;const E=16;let C=0;for(let w=0,P=g.length;w<P;w++){const S=g[w],A={boundary:0,storage:0},B=Array.isArray(S.value)?S.value:[S.value];for(let N=0,G=B.length;N<G;N++){const D=B[N],V=v(D);A.boundary+=V.boundary,A.storage+=V.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,w>0){C=b%E;const N=E-C;C!==0&&N-A.boundary<0&&(b+=E-C,S.__offset=b)}b+=A.storage}return C=b%E,C>0&&(b+=E-C),_.__size=b,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const b=o.indexOf(g.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class um{constructor(e={}){const{canvas:n=Mx(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const g=this;let b=!1,E=0,C=0,w=null,P=-1,S=null;const A=new lt,B=new lt;let N=null;const G=new $e(0);let D=0,V=n.width,q=n.height,Y=1,Q=null,ee=null;const le=new lt(0,0,V,q),O=new lt(0,0,V,q);let $=!1;const pe=new Qc;let ye=!1,Ae=!1,we=null;const X=new xt,re=new Ve,ne=new H,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return w===null?Y:1}let y=i;function L(R,W){for(let K=0;K<R.length;K++){const Z=R[K],J=n.getContext(Z,W);if(J!==null)return J}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qc}`),n.addEventListener("webglcontextlost",Ke,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Me,!1),y===null){const W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),y=L(W,R),y===null)throw L(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let I,k,j,ae,fe,te,de,ce,Re,T,M,z,ie,oe,ue,be,me,Ee,U,_e,he,Ie,Ce,Oe;function Ne(){I=new IS(y),k=new wS(y,I,e),I.init(k),Ie=new _E(y,I,k),j=new mE(y,I,k),ae=new OS(y),fe=new tE,te=new gE(y,I,j,fe,k,Ie,ae),de=new CS(g),ce=new DS(g),Re=new Yx(y,k),Ce=new TS(y,I,Re,k),T=new US(y,Re,ae,Ce),M=new kS(y,T,Re,ae),U=new BS(y,k,te),be=new RS(fe),z=new eE(g,de,ce,I,k,Ce,be),ie=new SE(g,fe),oe=new iE,ue=new cE(I,k),Ee=new ES(g,de,ce,j,M,d,l),me=new pE(g,M,k),Oe=new bE(y,ae,k,j),_e=new AS(y,I,ae,k),he=new NS(y,I,ae,k),ae.programs=z.programs,g.capabilities=k,g.extensions=I,g.properties=fe,g.renderLists=oe,g.shadowMap=me,g.state=j,g.info=ae}Ne();const De=new ME(g,y);this.xr=De,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=I.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=I.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(V,q,!1))},this.getSize=function(R){return R.set(V,q)},this.setSize=function(R,W,K=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,q=W,n.width=Math.floor(R*Y),n.height=Math.floor(W*Y),K===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(V*Y,q*Y).floor()},this.setDrawingBufferSize=function(R,W,K){V=R,q=W,Y=K,n.width=Math.floor(R*K),n.height=Math.floor(W*K),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,W,K,Z){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,W,K,Z),j.viewport(A.copy(le).multiplyScalar(Y).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,W,K,Z){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,W,K,Z),j.scissor(B.copy(O).multiplyScalar(Y).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(R){j.setScissorTest($=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(R=!0,W=!0,K=!0){let Z=0;if(R){let J=!1;if(w!==null){const Pe=w.texture.format;J=Pe===Gp||Pe===Hp||Pe===kp}if(J){const Pe=w.texture.type,Fe=Pe===mi||Pe===ci||Pe===Kc||Pe===Yi||Pe===zp||Pe===Bp,Be=Ee.getClearColor(),ke=Ee.getClearAlpha(),je=Be.r,Ge=Be.g,We=Be.b;Fe?(p[0]=je,p[1]=Ge,p[2]=We,p[3]=ke,y.clearBufferuiv(y.COLOR,0,p)):(x[0]=je,x[1]=Ge,x[2]=We,x[3]=ke,y.clearBufferiv(y.COLOR,0,x))}else Z|=y.COLOR_BUFFER_BIT}W&&(Z|=y.DEPTH_BUFFER_BIT),K&&(Z|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ke,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),oe.dispose(),ue.dispose(),fe.dispose(),de.dispose(),ce.dispose(),M.dispose(),Ce.dispose(),Oe.dispose(),z.dispose(),De.dispose(),De.removeEventListener("sessionstart",Qt),De.removeEventListener("sessionend",it),we&&(we.dispose(),we=null),Nt.stop()};function Ke(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=ae.autoReset,W=me.enabled,K=me.autoUpdate,Z=me.needsUpdate,J=me.type;Ne(),ae.autoReset=R,me.enabled=W,me.autoUpdate=K,me.needsUpdate=Z,me.type=J}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ge(R){const W=R.target;W.removeEventListener("dispose",ge),se(W)}function se(R){xe(R),fe.remove(R)}function xe(R){const W=fe.get(R).programs;W!==void 0&&(W.forEach(function(K){z.releaseProgram(K)}),R.isShaderMaterial&&z.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,K,Z,J,Pe){W===null&&(W=ve);const Fe=J.isMesh&&J.matrixWorld.determinant()<0,Be=Wm(R,W,K,Z,J);j.setMaterial(Z,Fe);let ke=K.index,je=1;if(Z.wireframe===!0){if(ke=T.getWireframeAttribute(K),ke===void 0)return;je=2}const Ge=K.drawRange,We=K.attributes.position;let ht=Ge.start*je,Yt=(Ge.start+Ge.count)*je;Pe!==null&&(ht=Math.max(ht,Pe.start*je),Yt=Math.min(Yt,(Pe.start+Pe.count)*je)),ke!==null?(ht=Math.max(ht,0),Yt=Math.min(Yt,ke.count)):We!=null&&(ht=Math.max(ht,0),Yt=Math.min(Yt,We.count));const Tt=Yt-ht;if(Tt<0||Tt===1/0)return;Ce.setup(J,Z,Be,K,ke);let Cn,ct=_e;if(ke!==null&&(Cn=Re.get(ke),ct=he,ct.setIndex(Cn)),J.isMesh)Z.wireframe===!0?(j.setLineWidth(Z.wireframeLinewidth*Se()),ct.setMode(y.LINES)):ct.setMode(y.TRIANGLES);else if(J.isLine){let Je=Z.linewidth;Je===void 0&&(Je=1),j.setLineWidth(Je*Se()),J.isLineSegments?ct.setMode(y.LINES):J.isLineLoop?ct.setMode(y.LINE_LOOP):ct.setMode(y.LINE_STRIP)}else J.isPoints?ct.setMode(y.POINTS):J.isSprite&&ct.setMode(y.TRIANGLES);if(J.isInstancedMesh)ct.renderInstances(ht,Tt,J.count);else if(K.isInstancedBufferGeometry){const Je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,No=Math.min(K.instanceCount,Je);ct.renderInstances(ht,Tt,No)}else ct.render(ht,Tt)};function ze(R,W,K){R.transparent===!0&&R.side===zn&&R.forceSinglePass===!1?(R.side=Vt,R.needsUpdate=!0,qa(R,W,K),R.side=vi,R.needsUpdate=!0,qa(R,W,K),R.side=zn):qa(R,W,K)}this.compile=function(R,W,K=null){K===null&&(K=R),m=ue.get(K),m.init(),_.push(m),K.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),R!==K&&R.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(g._useLegacyLights);const Z=new Set;return R.traverse(function(J){const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const Be=Pe[Fe];ze(Be,K,J),Z.add(Be)}else ze(Pe,K,J),Z.add(Pe)}),_.pop(),m=null,Z},this.compileAsync=function(R,W,K=null){const Z=this.compile(R,W,K);return new Promise(J=>{function Pe(){if(Z.forEach(function(Fe){fe.get(Fe).currentProgram.isReady()&&Z.delete(Fe)}),Z.size===0){J(R);return}setTimeout(Pe,10)}I.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ze=null;function mt(R){Ze&&Ze(R)}function Qt(){Nt.stop()}function it(){Nt.start()}const Nt=new rm;Nt.setAnimationLoop(mt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(R){Ze=R,De.setAnimationLoop(R),R===null?Nt.stop():Nt.start()},De.addEventListener("sessionstart",Qt),De.addEventListener("sessionend",it),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(W),W=De.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,W,w),m=ue.get(R,_.length),m.init(),_.push(m),X.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),pe.setFromProjectionMatrix(X),Ae=this.localClippingEnabled,ye=be.init(this.clippingPlanes,Ae),v=oe.get(R,h.length),v.init(),h.push(v),xn(R,W,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(Q,ee),this.info.render.frame++,ye===!0&&be.beginShadows();const K=m.state.shadowsArray;if(me.render(K,R,W),ye===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(v,R),m.setupLights(g._useLegacyLights),W.isArrayCamera){const Z=W.cameras;for(let J=0,Pe=Z.length;J<Pe;J++){const Fe=Z[J];vu(v,R,Fe,Fe.viewport)}}else vu(v,R,W);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(g,R,W),Ce.resetDefaultState(),P=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function xn(R,W,K,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pe.intersectsSprite(R)){Z&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const Fe=M.update(R),Be=R.material;Be.visible&&v.push(R,Fe,Be,K,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pe.intersectsObject(R))){const Fe=M.update(R),Be=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ne.copy(Fe.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(X)),Array.isArray(Be)){const ke=Fe.groups;for(let je=0,Ge=ke.length;je<Ge;je++){const We=ke[je],ht=Be[We.materialIndex];ht&&ht.visible&&v.push(R,Fe,ht,K,ne.z,We)}}else Be.visible&&v.push(R,Fe,Be,K,ne.z,null)}}const Pe=R.children;for(let Fe=0,Be=Pe.length;Fe<Be;Fe++)xn(Pe[Fe],W,K,Z)}function vu(R,W,K,Z){const J=R.opaque,Pe=R.transmissive,Fe=R.transparent;m.setupLightsView(K),ye===!0&&be.setGlobalState(g.clippingPlanes,K),Pe.length>0&&Vm(J,Pe,W,K),Z&&j.viewport(A.copy(Z)),J.length>0&&ja(J,W,K),Pe.length>0&&ja(Pe,W,K),Fe.length>0&&ja(Fe,W,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Vm(R,W,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Pe=k.isWebGL2;we===null&&(we=new Ki(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?Pa:mi,minFilter:Ca,samples:Pe?4:0})),g.getDrawingBufferSize(re),Pe?we.setSize(re.x,re.y):we.setSize(to(re.x),to(re.y));const Fe=g.getRenderTarget();g.setRenderTarget(we),g.getClearColor(G),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Be=g.toneMapping;g.toneMapping=pi,ja(R,K,Z),te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we);let ke=!1;for(let je=0,Ge=W.length;je<Ge;je++){const We=W[je],ht=We.object,Yt=We.geometry,Tt=We.material,Cn=We.group;if(Tt.side===zn&&ht.layers.test(Z.layers)){const ct=Tt.side;Tt.side=Vt,Tt.needsUpdate=!0,xu(ht,K,Z,Yt,Tt,Cn),Tt.side=ct,Tt.needsUpdate=!0,ke=!0}}ke===!0&&(te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we)),g.setRenderTarget(Fe),g.setClearColor(G,D),g.toneMapping=Be}function ja(R,W,K){const Z=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Pe=R.length;J<Pe;J++){const Fe=R[J],Be=Fe.object,ke=Fe.geometry,je=Z===null?Fe.material:Z,Ge=Fe.group;Be.layers.test(K.layers)&&xu(Be,W,K,ke,je,Ge)}}function xu(R,W,K,Z,J,Pe){R.onBeforeRender(g,W,K,Z,J,Pe),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(g,W,K,Z,R,Pe),J.transparent===!0&&J.side===zn&&J.forceSinglePass===!1?(J.side=Vt,J.needsUpdate=!0,g.renderBufferDirect(K,W,Z,J,R,Pe),J.side=vi,J.needsUpdate=!0,g.renderBufferDirect(K,W,Z,J,R,Pe),J.side=zn):g.renderBufferDirect(K,W,Z,J,R,Pe),R.onAfterRender(g,W,K,Z,J,Pe)}function qa(R,W,K){W.isScene!==!0&&(W=ve);const Z=fe.get(R),J=m.state.lights,Pe=m.state.shadowsArray,Fe=J.state.version,Be=z.getParameters(R,J.state,Pe,W,K),ke=z.getProgramCacheKey(Be);let je=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?ce:de).get(R.envMap||Z.environment),je===void 0&&(R.addEventListener("dispose",ge),je=new Map,Z.programs=je);let Ge=je.get(ke);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===Fe)return Mu(R,Be),Ge}else Be.uniforms=z.getUniforms(R),R.onBuild(K,Be,g),R.onBeforeCompile(Be,g),Ge=z.acquireProgram(Be,ke),je.set(ke,Ge),Z.uniforms=Be.uniforms;const We=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=be.uniform),Mu(R,Be),Z.needsLights=Ym(R),Z.lightsStateVersion=Fe,Z.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.directionalShadowMap.value=J.state.directionalShadowMap,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotShadowMap.value=J.state.spotShadowMap,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMap.value=J.state.pointShadowMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function yu(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Hs.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Mu(R,W){const K=fe.get(R);K.outputColorSpace=W.outputColorSpace,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Wm(R,W,K,Z,J){W.isScene!==!0&&(W=ve),te.resetTextureUnits();const Pe=W.fog,Fe=Z.isMeshStandardMaterial?W.environment:null,Be=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wn,ke=(Z.isMeshStandardMaterial?ce:de).get(Z.envMap||Fe),je=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!K.morphAttributes.position,ht=!!K.morphAttributes.normal,Yt=!!K.morphAttributes.color;let Tt=pi;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const Cn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=Cn!==void 0?Cn.length:0,Je=fe.get(Z),No=m.state.lights;if(ye===!0&&(Ae===!0||R!==S)){const jt=R===S&&Z.id===P;be.setState(Z,R,jt)}let gt=!1;Z.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==No.state.version||Je.outputColorSpace!==Be||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||Je.envMap!==ke||Z.fog===!0&&Je.fog!==Pe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==je||Je.vertexTangents!==Ge||Je.morphTargets!==We||Je.morphNormals!==ht||Je.morphColors!==Yt||Je.toneMapping!==Tt||k.isWebGL2===!0&&Je.morphTargetsCount!==ct)&&(gt=!0):(gt=!0,Je.__version=Z.version);let bi=Je.currentProgram;gt===!0&&(bi=qa(Z,W,J));let Su=!1,Zr=!1,Oo=!1;const Ot=bi.getUniforms(),Ei=Je.uniforms;if(j.useProgram(bi.program)&&(Su=!0,Zr=!0,Oo=!0),Z.id!==P&&(P=Z.id,Zr=!0),Su||S!==R){Ot.setValue(y,"projectionMatrix",R.projectionMatrix),Ot.setValue(y,"viewMatrix",R.matrixWorldInverse);const jt=Ot.map.cameraPosition;jt!==void 0&&jt.setValue(y,ne.setFromMatrixPosition(R.matrixWorld)),k.logarithmicDepthBuffer&&Ot.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Zr=!0,Oo=!0)}if(J.isSkinnedMesh){Ot.setOptional(y,J,"bindMatrix"),Ot.setOptional(y,J,"bindMatrixInverse");const jt=J.skeleton;jt&&(k.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Ot.setValue(y,"boneTexture",jt.boneTexture,te),Ot.setValue(y,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fo=K.morphAttributes;if((Fo.position!==void 0||Fo.normal!==void 0||Fo.color!==void 0&&k.isWebGL2===!0)&&U.update(J,K,bi),(Zr||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,Ot.setValue(y,"receiveShadow",J.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ei.envMap.value=ke,Ei.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Zr&&(Ot.setValue(y,"toneMappingExposure",g.toneMappingExposure),Je.needsLights&&Xm(Ei,Oo),Pe&&Z.fog===!0&&ie.refreshFogUniforms(Ei,Pe),ie.refreshMaterialUniforms(Ei,Z,Y,q,we),Hs.upload(y,yu(Je),Ei,te)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Hs.upload(y,yu(Je),Ei,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(y,"center",J.center),Ot.setValue(y,"modelViewMatrix",J.modelViewMatrix),Ot.setValue(y,"normalMatrix",J.normalMatrix),Ot.setValue(y,"modelMatrix",J.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const jt=Z.uniformsGroups;for(let zo=0,jm=jt.length;zo<jm;zo++)if(k.isWebGL2){const bu=jt[zo];Oe.update(bu,bi),Oe.bind(bu,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Xm(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ym(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,K){fe.get(R.texture).__webglTexture=W,fe.get(R.depthTexture).__webglTexture=K;const Z=fe.get(R);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const K=fe.get(R);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,K=0){w=R,E=W,C=K;let Z=!0,J=null,Pe=!1,Fe=!1;if(R){const ke=fe.get(R);ke.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(y.FRAMEBUFFER,null),Z=!1):ke.__webglFramebuffer===void 0?te.setupRenderTarget(R):ke.__hasExternalTextures&&te.rebindTextures(R,fe.get(R.texture).__webglTexture,fe.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const Ge=fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[W])?J=Ge[W][K]:J=Ge[W],Pe=!0):k.isWebGL2&&R.samples>0&&te.useMultisampledRTT(R)===!1?J=fe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?J=Ge[K]:J=Ge,A.copy(R.viewport),B.copy(R.scissor),N=R.scissorTest}else A.copy(le).multiplyScalar(Y).floor(),B.copy(O).multiplyScalar(Y).floor(),N=$;if(j.bindFramebuffer(y.FRAMEBUFFER,J)&&k.drawBuffers&&Z&&j.drawBuffers(R,J),j.viewport(A),j.scissor(B),j.setScissorTest(N),Pe){const ke=fe.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,K)}else if(Fe){const ke=fe.get(R.texture),je=W||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,je)}P=-1},this.readRenderTargetPixels=function(R,W,K,Z,J,Pe,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){j.bindFramebuffer(y.FRAMEBUFFER,Be);try{const ke=R.texture,je=ke.format,Ge=ke.type;if(je!==hn&&Ie.convert(je)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Pa&&(I.has("EXT_color_buffer_half_float")||k.isWebGL2&&I.has("EXT_color_buffer_float"));if(Ge!==mi&&Ie.convert(Ge)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ui&&(k.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&K>=0&&K<=R.height-J&&y.readPixels(W,K,Z,J,Ie.convert(je),Ie.convert(Ge),Pe)}finally{const ke=w!==null?fe.get(w).__webglFramebuffer:null;j.bindFramebuffer(y.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,W,K=0){const Z=Math.pow(2,-K),J=Math.floor(W.image.width*Z),Pe=Math.floor(W.image.height*Z);te.setTexture2D(W,0),y.copyTexSubImage2D(y.TEXTURE_2D,K,0,0,R.x,R.y,J,Pe),j.unbindTexture()},this.copyTextureToTexture=function(R,W,K,Z=0){const J=W.image.width,Pe=W.image.height,Fe=Ie.convert(K.format),Be=Ie.convert(K.type);te.setTexture2D(K,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,K.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Z,R.x,R.y,J,Pe,Fe,Be,W.image.data):W.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Z,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Fe,W.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,Z,R.x,R.y,Fe,Be,W.image),Z===0&&K.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(R,W,K,Z,J=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=R.max.x-R.min.x+1,Fe=R.max.y-R.min.y+1,Be=R.max.z-R.min.z+1,ke=Ie.convert(Z.format),je=Ie.convert(Z.type);let Ge;if(Z.isData3DTexture)te.setTexture3D(Z,0),Ge=y.TEXTURE_3D;else if(Z.isDataArrayTexture)te.setTexture2DArray(Z,0),Ge=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Z.unpackAlignment);const We=y.getParameter(y.UNPACK_ROW_LENGTH),ht=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Yt=y.getParameter(y.UNPACK_SKIP_PIXELS),Tt=y.getParameter(y.UNPACK_SKIP_ROWS),Cn=y.getParameter(y.UNPACK_SKIP_IMAGES),ct=K.isCompressedTexture?K.mipmaps[0]:K.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,ct.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ct.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,R.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,R.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?y.texSubImage3D(Ge,J,W.x,W.y,W.z,Pe,Fe,Be,ke,je,ct.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(Ge,J,W.x,W.y,W.z,Pe,Fe,Be,ke,ct.data)):y.texSubImage3D(Ge,J,W.x,W.y,W.z,Pe,Fe,Be,ke,je,ct),y.pixelStorei(y.UNPACK_ROW_LENGTH,We),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ht),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Yt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Tt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Cn),J===0&&Z.generateMipmaps&&y.generateMipmap(Ge),j.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){E=0,C=0,w=null,j.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zc?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===wo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?qi:Vp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?Rt:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class EE extends um{}EE.prototype.isWebGL1Renderer=!0;class TE extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class AE extends Ga{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wp,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class wE{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const RE=new wE;class nu{constructor(e){this.manager=e!==void 0?e:RE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nu.DEFAULT_MATERIAL_NAME="__DEFAULT";class CE extends nu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=Wd.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=Da("img");function l(){u(),Wd.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class PE extends nu{constructor(e){super(e)}load(e,n,i,r){const a=new Wt,o=new CE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class iu extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Al=new xt,Xd=new H,Yd=new H;class fm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Xd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xd),Yd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yd),n.updateMatrixWorld(),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jd=new xt,aa=new H,wl=new H;class LE extends fm{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(aa),wl.copy(i.position),wl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wl),i.updateMatrixWorld(),r.makeTranslation(-aa.x,-aa.y,-aa.z),jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}}class DE extends iu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IE extends fm{constructor(){super(new am(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UE extends iu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new IE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NE extends iu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=qd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function qd(){return(typeof performance>"u"?Date:performance).now()}class $d{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);const Kd={type:"change"},Rl={type:"start"},Zd={type:"end"},Ts=new $p,Jd=new li,FE=Math.cos(70*yx.DEG2RAD);class zE extends tr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",M),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Kd),i.update(),a=r.NONE},this.update=function(){const U=new H,_e=new Zi().setFromUnitVectors(e.up,new H(0,1,0)),he=_e.clone().invert(),Ie=new H,Ce=new Zi,Oe=new H,Ne=2*Math.PI;return function(Ke=null){const F=i.object.position;U.copy(F).sub(i.target),U.applyQuaternion(_e),s.setFromVector3(U),i.autoRotate&&a===r.NONE&&B(S(Ke)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Me=i.minAzimuthAngle,ge=i.maxAzimuthAngle;isFinite(Me)&&isFinite(ge)&&(Me<-Math.PI?Me+=Ne:Me>Math.PI&&(Me-=Ne),ge<-Math.PI?ge+=Ne:ge>Math.PI&&(ge-=Ne),Me<=ge?s.theta=Math.max(Me,Math.min(ge,s.theta)):s.theta=s.theta>(Me+ge)/2?Math.max(Me,s.theta):Math.min(ge,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=ee(s.radius):s.radius=ee(s.radius*c),U.setFromSpherical(s),U.applyQuaternion(he),F.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&C){let xe=null;if(i.object.isPerspectiveCamera){const ze=U.length();xe=ee(ze*c);const Ze=ze-xe;i.object.position.addScaledVector(b,Ze),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ze=new H(E.x,E.y,0);ze.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),se=!0;const Ze=new H(E.x,E.y,0);Ze.unproject(i.object),i.object.position.sub(Ze).add(ze),i.object.updateMatrixWorld(),xe=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(xe).add(i.object.position):(Ts.origin.copy(i.object.position),Ts.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ts.direction))<FE?e.lookAt(i.target):(Jd.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ts.intersectPlane(Jd,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),se=!0);return c=1,C=!1,se||Ie.distanceToSquared(i.object.position)>o||8*(1-Ce.dot(i.object.quaternion))>o||Oe.distanceToSquared(i.target)>0?(i.dispatchEvent(Kd),Ie.copy(i.object.position),Ce.copy(i.object.quaternion),Oe.copy(i.target),se=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",oe),i.domElement.removeEventListener("pointerdown",fe),i.domElement.removeEventListener("pointercancel",de),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",te),i.domElement.removeEventListener("pointerup",de),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new $d,l=new $d;let c=1;const u=new H,f=new Ve,d=new Ve,p=new Ve,x=new Ve,v=new Ve,m=new Ve,h=new Ve,_=new Ve,g=new Ve,b=new H,E=new Ve;let C=!1;const w=[],P={};function S(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function B(U){l.theta-=U}function N(U){l.phi-=U}const G=function(){const U=new H;return function(he,Ie){U.setFromMatrixColumn(Ie,0),U.multiplyScalar(-he),u.add(U)}}(),D=function(){const U=new H;return function(he,Ie){i.screenSpacePanning===!0?U.setFromMatrixColumn(Ie,1):(U.setFromMatrixColumn(Ie,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(he),u.add(U)}}(),V=function(){const U=new H;return function(he,Ie){const Ce=i.domElement;if(i.object.isPerspectiveCamera){const Oe=i.object.position;U.copy(Oe).sub(i.target);let Ne=U.length();Ne*=Math.tan(i.object.fov/2*Math.PI/180),G(2*he*Ne/Ce.clientHeight,i.object.matrix),D(2*Ie*Ne/Ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(he*(i.object.right-i.object.left)/i.object.zoom/Ce.clientWidth,i.object.matrix),D(Ie*(i.object.top-i.object.bottom)/i.object.zoom/Ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(U){if(!i.zoomToCursor)return;C=!0;const _e=i.domElement.getBoundingClientRect(),he=U.clientX-_e.left,Ie=U.clientY-_e.top,Ce=_e.width,Oe=_e.height;E.x=he/Ce*2-1,E.y=-(Ie/Oe)*2+1,b.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function le(U){f.set(U.clientX,U.clientY)}function O(U){Q(U),h.set(U.clientX,U.clientY)}function $(U){x.set(U.clientX,U.clientY)}function pe(U){d.set(U.clientX,U.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const _e=i.domElement;B(2*Math.PI*p.x/_e.clientHeight),N(2*Math.PI*p.y/_e.clientHeight),f.copy(d),i.update()}function ye(U){_.set(U.clientX,U.clientY),g.subVectors(_,h),g.y>0?q(A()):g.y<0&&Y(A()),h.copy(_),i.update()}function Ae(U){v.set(U.clientX,U.clientY),m.subVectors(v,x).multiplyScalar(i.panSpeed),V(m.x,m.y),x.copy(v),i.update()}function we(U){Q(U),U.deltaY<0?Y(A()):U.deltaY>0&&q(A()),i.update()}function X(U){let _e=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),_e=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),_e=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),_e=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),_e=!0;break}_e&&(U.preventDefault(),i.update())}function re(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const U=.5*(w[0].pageX+w[1].pageX),_e=.5*(w[0].pageY+w[1].pageY);f.set(U,_e)}}function ne(){if(w.length===1)x.set(w[0].pageX,w[0].pageY);else{const U=.5*(w[0].pageX+w[1].pageX),_e=.5*(w[0].pageY+w[1].pageY);x.set(U,_e)}}function ve(){const U=w[0].pageX-w[1].pageX,_e=w[0].pageY-w[1].pageY,he=Math.sqrt(U*U+_e*_e);h.set(0,he)}function Se(){i.enableZoom&&ve(),i.enablePan&&ne()}function y(){i.enableZoom&&ve(),i.enableRotate&&re()}function L(U){if(w.length==1)d.set(U.pageX,U.pageY);else{const he=Ee(U),Ie=.5*(U.pageX+he.x),Ce=.5*(U.pageY+he.y);d.set(Ie,Ce)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const _e=i.domElement;B(2*Math.PI*p.x/_e.clientHeight),N(2*Math.PI*p.y/_e.clientHeight),f.copy(d)}function I(U){if(w.length===1)v.set(U.pageX,U.pageY);else{const _e=Ee(U),he=.5*(U.pageX+_e.x),Ie=.5*(U.pageY+_e.y);v.set(he,Ie)}m.subVectors(v,x).multiplyScalar(i.panSpeed),V(m.x,m.y),x.copy(v)}function k(U){const _e=Ee(U),he=U.pageX-_e.x,Ie=U.pageY-_e.y,Ce=Math.sqrt(he*he+Ie*Ie);_.set(0,Ce),g.set(0,Math.pow(_.y/h.y,i.zoomSpeed)),q(g.y),h.copy(_)}function j(U){i.enableZoom&&k(U),i.enablePan&&I(U)}function ae(U){i.enableZoom&&k(U),i.enableRotate&&L(U)}function fe(U){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",te),i.domElement.addEventListener("pointerup",de)),ue(U),U.pointerType==="touch"?z(U):ce(U))}function te(U){i.enabled!==!1&&(U.pointerType==="touch"?ie(U):Re(U))}function de(U){be(U),w.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",te),i.domElement.removeEventListener("pointerup",de)),i.dispatchEvent(Zd),a=r.NONE}function ce(U){let _e;switch(U.button){case 0:_e=i.mouseButtons.LEFT;break;case 1:_e=i.mouseButtons.MIDDLE;break;case 2:_e=i.mouseButtons.RIGHT;break;default:_e=-1}switch(_e){case ir.DOLLY:if(i.enableZoom===!1)return;O(U),a=r.DOLLY;break;case ir.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;$(U),a=r.PAN}else{if(i.enableRotate===!1)return;le(U),a=r.ROTATE}break;case ir.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;le(U),a=r.ROTATE}else{if(i.enablePan===!1)return;$(U),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Rl)}function Re(U){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;pe(U);break;case r.DOLLY:if(i.enableZoom===!1)return;ye(U);break;case r.PAN:if(i.enablePan===!1)return;Ae(U);break}}function T(U){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(U.preventDefault(),i.dispatchEvent(Rl),we(U),i.dispatchEvent(Zd))}function M(U){i.enabled===!1||i.enablePan===!1||X(U)}function z(U){switch(me(U),w.length){case 1:switch(i.touches.ONE){case rr.ROTATE:if(i.enableRotate===!1)return;re(),a=r.TOUCH_ROTATE;break;case rr.PAN:if(i.enablePan===!1)return;ne(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case rr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(),a=r.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;y(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Rl)}function ie(U){switch(me(U),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;L(U),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;I(U),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(U),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ae(U),i.update();break;default:a=r.NONE}}function oe(U){i.enabled!==!1&&U.preventDefault()}function ue(U){w.push(U)}function be(U){delete P[U.pointerId];for(let _e=0;_e<w.length;_e++)if(w[_e].pointerId==U.pointerId){w.splice(_e,1);return}}function me(U){let _e=P[U.pointerId];_e===void 0&&(_e=new Ve,P[U.pointerId]=_e),_e.set(U.pageX,U.pageY)}function Ee(U){const _e=U.pointerId===w[0].pointerId?w[1]:w[0];return P[_e.pointerId]}i.domElement.addEventListener("contextmenu",oe),i.domElement.addEventListener("pointerdown",fe),i.domElement.addEventListener("pointercancel",de),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}class BE extends Hn{constructor(e,n,i=!1,r=!1,a=1e4){const o=new Si;super(o,n),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(_){this.resolution=_,this.isolation=80,this.size=_,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=a*3;this.positionArray=new Float32Array(g*3);const b=new Gt(this.positionArray,3);b.setUsage(ts),o.setAttribute("position",b),this.normalArray=new Float32Array(g*3);const E=new Gt(this.normalArray,3);if(E.setUsage(ts),o.setAttribute("normal",E),this.enableUvs){this.uvArray=new Float32Array(g*2);const C=new Gt(this.uvArray,2);C.setUsage(ts),o.setAttribute("uv",C)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const C=new Gt(this.colorArray,3);C.setUsage(ts),o.setAttribute("color",C)}o.boundingSphere=new Ro(new H,1)};function f(_,g,b){return _+(g-_)*b}function d(_,g,b,E,C,w,P,S,A,B){const N=(b-P)/(S-P),G=s.normal_cache;l[g+0]=E+N*s.delta,l[g+1]=C,l[g+2]=w,c[g+0]=f(G[_+0],G[_+3],N),c[g+1]=f(G[_+1],G[_+4],N),c[g+2]=f(G[_+2],G[_+5],N),u[g+0]=f(s.palette[A*3+0],s.palette[B*3+0],N),u[g+1]=f(s.palette[A*3+1],s.palette[B*3+1],N),u[g+2]=f(s.palette[A*3+2],s.palette[B*3+2],N)}function p(_,g,b,E,C,w,P,S,A,B){const N=(b-P)/(S-P),G=s.normal_cache;l[g+0]=E,l[g+1]=C+N*s.delta,l[g+2]=w;const D=_+s.yd*3;c[g+0]=f(G[_+0],G[D+0],N),c[g+1]=f(G[_+1],G[D+1],N),c[g+2]=f(G[_+2],G[D+2],N),u[g+0]=f(s.palette[A*3+0],s.palette[B*3+0],N),u[g+1]=f(s.palette[A*3+1],s.palette[B*3+1],N),u[g+2]=f(s.palette[A*3+2],s.palette[B*3+2],N)}function x(_,g,b,E,C,w,P,S,A,B){const N=(b-P)/(S-P),G=s.normal_cache;l[g+0]=E,l[g+1]=C,l[g+2]=w+N*s.delta;const D=_+s.zd*3;c[g+0]=f(G[_+0],G[D+0],N),c[g+1]=f(G[_+1],G[D+1],N),c[g+2]=f(G[_+2],G[D+2],N),u[g+0]=f(s.palette[A*3+0],s.palette[B*3+0],N),u[g+1]=f(s.palette[A*3+1],s.palette[B*3+1],N),u[g+2]=f(s.palette[A*3+2],s.palette[B*3+2],N)}function v(_){const g=_*3;s.normal_cache[g]===0&&(s.normal_cache[g+0]=s.field[_-1]-s.field[_+1],s.normal_cache[g+1]=s.field[_-s.yd]-s.field[_+s.yd],s.normal_cache[g+2]=s.field[_-s.zd]-s.field[_+s.zd])}function m(_,g,b,E,C){const w=E+1,P=E+s.yd,S=E+s.zd,A=w+s.yd,B=w+s.zd,N=E+s.yd+s.zd,G=w+s.yd+s.zd;let D=0;const V=s.field[E],q=s.field[w],Y=s.field[P],Q=s.field[A],ee=s.field[S],le=s.field[B],O=s.field[N],$=s.field[G];V<C&&(D|=1),q<C&&(D|=2),Y<C&&(D|=8),Q<C&&(D|=4),ee<C&&(D|=16),le<C&&(D|=32),O<C&&(D|=128),$<C&&(D|=64);const pe=kE[D];if(pe===0)return 0;const ye=s.delta,Ae=_+ye,we=g+ye,X=b+ye;pe&1&&(v(E),v(w),d(E*3,0,C,_,g,b,V,q,E,w)),pe&2&&(v(w),v(A),p(w*3,3,C,Ae,g,b,q,Q,w,A)),pe&4&&(v(P),v(A),d(P*3,6,C,_,we,b,Y,Q,P,A)),pe&8&&(v(E),v(P),p(E*3,9,C,_,g,b,V,Y,E,P)),pe&16&&(v(S),v(B),d(S*3,12,C,_,g,X,ee,le,S,B)),pe&32&&(v(B),v(G),p(B*3,15,C,Ae,g,X,le,$,B,G)),pe&64&&(v(N),v(G),d(N*3,18,C,_,we,X,O,$,N,G)),pe&128&&(v(S),v(N),p(S*3,21,C,_,g,X,ee,O,S,N)),pe&256&&(v(E),v(S),x(E*3,24,C,_,g,b,V,ee,E,S)),pe&512&&(v(w),v(B),x(w*3,27,C,Ae,g,b,q,le,w,B)),pe&1024&&(v(A),v(G),x(A*3,30,C,Ae,we,b,Q,$,A,G)),pe&2048&&(v(P),v(N),x(P*3,33,C,_,we,b,Y,O,P,N)),D<<=4;let re,ne,ve,Se=0,y=0;for(;As[D+y]!=-1;)re=D+y,ne=re+1,ve=re+2,h(l,c,u,3*As[re],3*As[ne],3*As[ve]),y+=3,Se++;return Se}function h(_,g,b,E,C,w){const P=s.count*3;if(s.positionArray[P+0]=_[E],s.positionArray[P+1]=_[E+1],s.positionArray[P+2]=_[E+2],s.positionArray[P+3]=_[C],s.positionArray[P+4]=_[C+1],s.positionArray[P+5]=_[C+2],s.positionArray[P+6]=_[w],s.positionArray[P+7]=_[w+1],s.positionArray[P+8]=_[w+2],s.material.flatShading===!0){const S=(g[E+0]+g[C+0]+g[w+0])/3,A=(g[E+1]+g[C+1]+g[w+1])/3,B=(g[E+2]+g[C+2]+g[w+2])/3;s.normalArray[P+0]=S,s.normalArray[P+1]=A,s.normalArray[P+2]=B,s.normalArray[P+3]=S,s.normalArray[P+4]=A,s.normalArray[P+5]=B,s.normalArray[P+6]=S,s.normalArray[P+7]=A,s.normalArray[P+8]=B}else s.normalArray[P+0]=g[E+0],s.normalArray[P+1]=g[E+1],s.normalArray[P+2]=g[E+2],s.normalArray[P+3]=g[C+0],s.normalArray[P+4]=g[C+1],s.normalArray[P+5]=g[C+2],s.normalArray[P+6]=g[w+0],s.normalArray[P+7]=g[w+1],s.normalArray[P+8]=g[w+2];if(s.enableUvs){const S=s.count*2;s.uvArray[S+0]=_[E+0],s.uvArray[S+1]=_[E+2],s.uvArray[S+2]=_[C+0],s.uvArray[S+3]=_[C+2],s.uvArray[S+4]=_[w+0],s.uvArray[S+5]=_[w+2]}s.enableColors&&(s.colorArray[P+0]=b[E+0],s.colorArray[P+1]=b[E+1],s.colorArray[P+2]=b[E+2],s.colorArray[P+3]=b[C+0],s.colorArray[P+4]=b[C+1],s.colorArray[P+5]=b[C+2],s.colorArray[P+6]=b[w+0],s.colorArray[P+7]=b[w+1],s.colorArray[P+8]=b[w+2]),s.count+=3}this.addBall=function(_,g,b,E,C,w){const P=Math.sign(E);E=Math.abs(E);const S=w!=null;let A=new $e(_,g,b);if(S)try{A=w instanceof $e?w:Array.isArray(w)?new $e(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new $e(w)}catch{A=new $e(_,g,b)}const B=this.size*Math.sqrt(E/C),N=b*this.size,G=g*this.size,D=_*this.size;let V=Math.floor(N-B);V<1&&(V=1);let q=Math.floor(N+B);q>this.size-1&&(q=this.size-1);let Y=Math.floor(G-B);Y<1&&(Y=1);let Q=Math.floor(G+B);Q>this.size-1&&(Q=this.size-1);let ee=Math.floor(D-B);ee<1&&(ee=1);let le=Math.floor(D+B);le>this.size-1&&(le=this.size-1);let O,$,pe,ye,Ae,we,X,re,ne,ve,Se;for(pe=V;pe<q;pe++)for(Ae=this.size2*pe,re=pe/this.size-b,ne=re*re,$=Y;$<Q;$++)for(ye=Ae+this.size*$,X=$/this.size-g,ve=X*X,O=ee;O<le;O++)if(we=O/this.size-_,Se=E/(1e-6+we*we+ve+ne)-C,Se>0){this.field[ye+O]+=Se*P;const y=Math.sqrt((O-D)*(O-D)+($-G)*($-G)+(pe-N)*(pe-N))/B,L=1-y*y*y*(y*(y*6-15)+10);this.palette[(ye+O)*3+0]+=A.r*L,this.palette[(ye+O)*3+1]+=A.g*L,this.palette[(ye+O)*3+2]+=A.b*L}},this.addPlaneX=function(_,g){const b=this.size,E=this.yd,C=this.zd,w=this.field;let P,S,A,B,N,G,D,V=b*Math.sqrt(_/g);for(V>b&&(V=b),P=0;P<V;P++)if(G=P/b,B=G*G,N=_/(1e-4+B)-g,N>0)for(S=0;S<b;S++)for(D=P+S*E,A=0;A<b;A++)w[C*A+D]+=N},this.addPlaneY=function(_,g){const b=this.size,E=this.yd,C=this.zd,w=this.field;let P,S,A,B,N,G,D,V,q=b*Math.sqrt(_/g);for(q>b&&(q=b),S=0;S<q;S++)if(G=S/b,B=G*G,N=_/(1e-4+B)-g,N>0)for(D=S*E,P=0;P<b;P++)for(V=D+P,A=0;A<b;A++)w[C*A+V]+=N},this.addPlaneZ=function(_,g){const b=this.size,E=this.yd,C=this.zd,w=this.field;let P,S,A,B,N,G,D,V,q=b*Math.sqrt(_/g);for(q>b&&(q=b),A=0;A<q;A++)if(G=A/b,B=G*G,N=_/(1e-4+B)-g,N>0)for(D=C*A,S=0;S<b;S++)for(V=D+S*E,P=0;P<b;P++)w[V+P]+=N},this.setCell=function(_,g,b,E){const C=this.size2*b+this.size*g+_;this.field[C]=E},this.getCell=function(_,g,b){const E=this.size2*b+this.size*g+_;return this.field[E]},this.blur=function(_=1){const g=this.field,b=g.slice(),E=this.size,C=this.size2;for(let w=0;w<E;w++)for(let P=0;P<E;P++)for(let S=0;S<E;S++){const A=C*S+E*P+w;let B=b[A],N=1;for(let G=-1;G<=1;G+=2){const D=G+w;if(!(D<0||D>=E))for(let V=-1;V<=1;V+=2){const q=V+P;if(!(q<0||q>=E))for(let Y=-1;Y<=1;Y+=2){const Q=Y+S;if(Q<0||Q>=E)continue;const ee=C*Q+E*q+D,le=b[ee];N++,B+=_*(le-B)/N}}}g[A]=B}},this.reset=function(){for(let _=0;_<this.size3;_++)this.normal_cache[_*3]=0,this.field[_]=0,this.palette[_*3]=this.palette[_*3+1]=this.palette[_*3+2]=0},this.update=function(){this.count=0;const _=this.size-2;for(let g=1;g<_;g++){const b=this.size2*g,E=(g-this.halfsize)/this.halfsize;for(let C=1;C<_;C++){const w=b+this.size*C,P=(C-this.halfsize)/this.halfsize;for(let S=1;S<_;S++){const A=(S-this.halfsize)/this.halfsize,B=w+S;m(A,P,E,B,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const kE=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),As=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);let Ir,Ui,ki,Qd,eh,Cl,Pl,th,Tn,xa,Mn,nh=0;const HE=new OE;function GE(){Ir.aspect=window.innerWidth/window.innerHeight,Ir.updateProjectionMatrix(),ki.setSize(window.innerWidth,window.innerHeight)}function VE(){return{plastic:new AE({specular:16747520,shininess:250,color:16757504})}}function WE(){Mn={material:"plastic",speed:.1,numBlobs:3,resolution:50,isolation:4}}function XE(t,e,n,i,r,a){t.reset();const o=10,s=.6/((Math.sqrt(n)-1)/4+1);for(let l=0;l<n;l++){const c=Math.sin(l+1.26*e*(1.03+.5*Math.cos(.21*l)))*.27+.5,u=Math.abs(Math.cos(l+1.12*e*Math.cos(1.22+.1424*l)))*.77,f=Math.cos(l+1.32*e*.1*Math.sin(.92+.53*l))*.27+.5;t.addBall(c,u,f,s,o)}t.update()}function YE(){const t=HE.getDelta();nh+=t*Mn.speed*.5,Mn.resolution!==xa&&(xa=Mn.resolution,Tn.init(Math.floor(xa))),Mn.isolation!==Tn.isolation&&(Tn.isolation=Mn.isolation),XE(Tn,nh,Mn.numBlobs,Mn.floor,Mn.wallx,Mn.wallz),ki.render(Ui,Ir)}const jE={name:"MetaBall",mounted(){this.init(),this.animate()},methods:{init(){const t=this.$refs.container;Ir=new Kt(45,window.innerWidth/window.innerHeight,1,1e4),Ir.position.set(-100,1e3,800),Ui=new TE;const e="src/assets/y.svg",i=new PE().load(e);Ui.background=i,Cl=new UE(16777215,3),Cl.position.set(.5,.5,1),Ui.add(Cl),Pl=new DE(16743424,3,0,0),Pl.position.set(0,0,100),Ui.add(Pl),th=new NE(3289650,3),Ui.add(th),Qd=VE(),eh="plastic",xa=50,Tn=new BE(xa,Qd[eh],!0,!0,1e5),Tn.position.set(0,0,0),Tn.scale.set(700,700,700),Tn.enableUvs=!1,Tn.enableColors=!1,Ui.add(Tn),ki=new um,ki.setPixelRatio(window.devicePixelRatio),ki.setSize(window.innerWidth,window.innerHeight),t.appendChild(ki.domElement);const r=new zE(Ir,ki.domElement);r.minDistance=500,r.maxDistance=5e3,WE(),window.addEventListener("resize",GE)},animate(){requestAnimationFrame(this.animate),YE()}}},qE={id:"main"},$E={id:"container",ref:"container"};function KE(t,e,n,i,r,a){return Or(),Ba("div",qE,[vt("div",$E,null,512)])}const ZE=ka(jE,[["render",KE]]);function ih(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ih(Object(n),!0).forEach(function(i){Et(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ih(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function no(t){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},no(t)}function JE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rh(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function QE(t,e,n){return e&&rh(t.prototype,e),n&&rh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ru(t,e){return tT(t)||iT(t,e)||dm(t,e)||aT()}function Wa(t){return eT(t)||nT(t)||dm(t)||rT()}function eT(t){if(Array.isArray(t))return uc(t)}function tT(t){if(Array.isArray(t))return t}function nT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function iT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function dm(t,e){if(t){if(typeof t=="string")return uc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uc(t,e)}}function uc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function rT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ah=function(){},au={},hm={},pm=null,mm={mark:ah,measure:ah};try{typeof window<"u"&&(au=window),typeof document<"u"&&(hm=document),typeof MutationObserver<"u"&&(pm=MutationObserver),typeof performance<"u"&&(mm=performance)}catch{}var sT=au.navigator||{},sh=sT.userAgent,oh=sh===void 0?"":sh,xi=au,ot=hm,lh=pm,ws=mm;xi.document;var $n=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",gm=~oh.indexOf("MSIE")||~oh.indexOf("Trident/"),Rs,Cs,Ps,Ls,Ds,Xn="___FONT_AWESOME___",fc=16,_m="fa",vm="svg-inline--fa",Qi="data-fa-i2svg",dc="data-fa-pseudo-element",oT="data-fa-pseudo-element-pending",su="data-prefix",ou="data-icon",ch="fontawesome-i2svg",lT="async",cT=["HTML","HEAD","STYLE","SCRIPT"],xm=function(){try{return!0}catch{return!1}}(),st="classic",ut="sharp",lu=[st,ut];function Xa(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[st]}})}var Ia=Xa((Rs={},Et(Rs,st,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Et(Rs,ut,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Rs)),Ua=Xa((Cs={},Et(Cs,st,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Et(Cs,ut,{solid:"fass",regular:"fasr",light:"fasl"}),Cs)),Na=Xa((Ps={},Et(Ps,st,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Et(Ps,ut,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ps)),uT=Xa((Ls={},Et(Ls,st,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Et(Ls,ut,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ls)),fT=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ym="fa-layers-text",dT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hT=Xa((Ds={},Et(Ds,st,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Et(Ds,ut,{900:"fass",400:"fasr",300:"fasl"}),Ds)),Mm=[1,2,3,4,5,6,7,8,9,10],pT=Mm.concat([11,12,13,14,15,16,17,18,19,20]),mT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oa=new Set;Object.keys(Ua[st]).map(Oa.add.bind(Oa));Object.keys(Ua[ut]).map(Oa.add.bind(Oa));var gT=[].concat(lu,Wa(Oa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gi.GROUP,Gi.SWAP_OPACITY,Gi.PRIMARY,Gi.SECONDARY]).concat(Mm.map(function(t){return"".concat(t,"x")})).concat(pT.map(function(t){return"w-".concat(t)})),ya=xi.FontAwesomeConfig||{};function _T(t){var e=ot.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ot&&typeof ot.querySelector=="function"){var xT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xT.forEach(function(t){var e=ru(t,2),n=e[0],i=e[1],r=vT(_T(n));r!=null&&(ya[i]=r)})}var Sm={styleDefault:"solid",familyDefault:"classic",cssPrefix:_m,replacementClass:vm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ya.familyPrefix&&(ya.cssPrefix=ya.familyPrefix);var Wr=Le(Le({},Sm),ya);Wr.autoReplaceSvg||(Wr.observeMutations=!1);var Ue={};Object.keys(Sm).forEach(function(t){Object.defineProperty(Ue,t,{enumerable:!0,set:function(n){Wr[t]=n,Ma.forEach(function(i){return i(Ue)})},get:function(){return Wr[t]}})});Object.defineProperty(Ue,"familyPrefix",{enumerable:!0,set:function(e){Wr.cssPrefix=e,Ma.forEach(function(n){return n(Ue)})},get:function(){return Wr.cssPrefix}});xi.FontAwesomeConfig=Ue;var Ma=[];function yT(t){return Ma.push(t),function(){Ma.splice(Ma.indexOf(t),1)}}var ai=fc,wn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function MT(t){if(!(!t||!$n)){var e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ot.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return ot.head.insertBefore(e,i),t}}var ST="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fa(){for(var t=12,e="";t-- >0;)e+=ST[Math.random()*62|0];return e}function Kr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function cu(t){return t.classList?Kr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bm(t[n]),'" ')},"").trim()}function Lo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function uu(t){return t.size!==wn.size||t.x!==wn.x||t.y!==wn.y||t.rotate!==wn.rotate||t.flipX||t.flipY}function ET(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function TT(t){var e=t.transform,n=t.width,i=n===void 0?fc:n,r=t.height,a=r===void 0?fc:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&gm?l+="translate(".concat(e.x/ai-i/2,"em, ").concat(e.y/ai-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/ai,"em), calc(-50% + ").concat(e.y/ai,"em)) "):l+="translate(".concat(e.x/ai,"em, ").concat(e.y/ai,"em) "),l+="scale(".concat(e.size/ai*(e.flipX?-1:1),", ").concat(e.size/ai*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var AT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Em(){var t=_m,e=vm,n=Ue.cssPrefix,i=Ue.replacementClass,r=AT;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var uh=!1;function Ll(){Ue.autoAddCss&&!uh&&(MT(Em()),uh=!0)}var wT={mixout:function(){return{dom:{css:Em,insertCss:Ll}}},hooks:function(){return{beforeDOMElementCreation:function(){Ll()},beforeI2svg:function(){Ll()}}}},Yn=xi||{};Yn[Xn]||(Yn[Xn]={});Yn[Xn].styles||(Yn[Xn].styles={});Yn[Xn].hooks||(Yn[Xn].hooks={});Yn[Xn].shims||(Yn[Xn].shims=[]);var mn=Yn[Xn],Tm=[],RT=function t(){ot.removeEventListener("DOMContentLoaded",t),io=1,Tm.map(function(e){return e()})},io=!1;$n&&(io=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),io||ot.addEventListener("DOMContentLoaded",RT));function CT(t){$n&&(io?setTimeout(t,0):Tm.push(t))}function Ya(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?bm(t):"<".concat(e," ").concat(bT(i),">").concat(a.map(Ya).join(""),"</").concat(e,">")}function fh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var PT=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},Dl=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?PT(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function LT(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function hc(t){var e=LT(t);return e.length===1?e[0].toString(16):null}function DT(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function dh(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function pc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=dh(e);typeof mn.hooks.addPack=="function"&&!r?mn.hooks.addPack(t,dh(e)):mn.styles[t]=Le(Le({},mn.styles[t]||{}),a),t==="fas"&&pc("fa",e)}var Is,Us,Ns,Er=mn.styles,IT=mn.shims,UT=(Is={},Et(Is,st,Object.values(Na[st])),Et(Is,ut,Object.values(Na[ut])),Is),fu=null,Am={},wm={},Rm={},Cm={},Pm={},NT=(Us={},Et(Us,st,Object.keys(Ia[st])),Et(Us,ut,Object.keys(Ia[ut])),Us);function OT(t){return~gT.indexOf(t)}function FT(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!OT(r)?r:null}var Lm=function(){var e=function(a){return Dl(Er,function(o,s,l){return o[l]=Dl(s,a,{}),o},{})};Am=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),wm=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Pm=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Er||Ue.autoFetchSvg,i=Dl(IT,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Rm=i.names,Cm=i.unicodes,fu=Do(Ue.styleDefault,{family:Ue.familyDefault})};yT(function(t){fu=Do(t.styleDefault,{family:Ue.familyDefault})});Lm();function du(t,e){return(Am[t]||{})[e]}function zT(t,e){return(wm[t]||{})[e]}function Vi(t,e){return(Pm[t]||{})[e]}function Dm(t){return Rm[t]||{prefix:null,iconName:null}}function BT(t){var e=Cm[t],n=du("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yi(){return fu}var hu=function(){return{prefix:null,iconName:null,rest:[]}};function Do(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?st:n,r=Ia[i][t],a=Ua[i][t]||Ua[i][r],o=t in mn.styles?t:null;return a||o||null}var hh=(Ns={},Et(Ns,st,Object.keys(Na[st])),Et(Ns,ut,Object.keys(Na[ut])),Ns);function Io(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Et(e,st,"".concat(Ue.cssPrefix,"-").concat(st)),Et(e,ut,"".concat(Ue.cssPrefix,"-").concat(ut)),e),o=null,s=st;(t.includes(a[st])||t.some(function(c){return hh[st].includes(c)}))&&(s=st),(t.includes(a[ut])||t.some(function(c){return hh[ut].includes(c)}))&&(s=ut);var l=t.reduce(function(c,u){var f=FT(Ue.cssPrefix,u);if(Er[u]?(u=UT[s].includes(u)?uT[s][u]:u,o=u,c.prefix=u):NT[s].indexOf(u)>-1?(o=u,c.prefix=Do(u,{family:s})):f?c.iconName=f:u!==Ue.replacementClass&&u!==a[st]&&u!==a[ut]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?Dm(c.iconName):{},p=Vi(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Er.far&&Er.fas&&!Ue.autoFetchSvg&&(c.prefix="fas")}return c},hu());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ut&&(Er.fass||Ue.autoFetchSvg)&&(l.prefix="fass",l.iconName=Vi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yi()||"fas"),l}var kT=function(){function t(){JE(this,t),this.definitions={}}return QE(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=Le(Le({},n.definitions[s]||{}),o[s]),pc(s,o[s]);var l=Na[st][s];l&&pc(l,o[s]),Lm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),ph=[],Tr={},Ur={},HT=Object.keys(Ur);function GT(t,e){var n=e.mixoutsTo;return ph=t,Tr={},Object.keys(Ur).forEach(function(i){HT.indexOf(i)===-1&&delete Ur[i]}),ph.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),no(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){Tr[o]||(Tr[o]=[]),Tr[o].push(a[o])})}i.provides&&i.provides(Ur)}),n}function mc(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=Tr[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function er(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Tr[t]||[];r.forEach(function(a){a.apply(null,n)})}function jn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ur[t]?Ur[t].apply(null,e):void 0}function gc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yi();if(e)return e=Vi(n,e)||e,fh(Im.definitions,n,e)||fh(mn.styles,n,e)}var Im=new kT,VT=function(){Ue.autoReplaceSvg=!1,Ue.observeMutations=!1,er("noAuto")},WT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $n?(er("beforeI2svg",e),jn("pseudoElements2svg",e),jn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Ue.autoReplaceSvg===!1&&(Ue.autoReplaceSvg=!0),Ue.observeMutations=!0,CT(function(){YT({autoReplaceSvgRoot:n}),er("watch",e)})}},XT={icon:function(e){if(e===null)return null;if(no(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Vi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Do(e[0]);return{prefix:i,iconName:Vi(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Ue.cssPrefix,"-"))>-1||e.match(fT))){var r=Io(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||yi(),iconName:Vi(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=yi();return{prefix:a,iconName:Vi(a,e)||e}}}},Jt={noAuto:VT,config:Ue,dom:WT,parse:XT,library:Im,findIconDefinition:gc,toHtml:Ya},YT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ot:n;(Object.keys(mn.styles).length>0||Ue.autoFetchSvg)&&$n&&Ue.autoReplaceSvg&&Jt.dom.i2svg({node:i})};function Uo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Ya(i)})}}),Object.defineProperty(t,"node",{get:function(){if($n){var i=ot.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function jT(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(uu(o)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=Lo(Le(Le({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function qT(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(Ue.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Le(Le({},r),{},{id:o}),children:i}]}]}function pu(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,x=i.found?i:n,v=x.width,m=x.height,h=r==="fak",_=[Ue.replacementClass,a?"".concat(Ue.cssPrefix,"-").concat(a):""].filter(function(S){return f.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(f.classes).join(" "),g={children:[],attributes:Le(Le({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(m)})},b=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/m*16*.0625,"em")}:{};p&&(g.attributes[Qi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||Fa())},children:[l]}),delete g.attributes.title);var E=Le(Le({},g),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:o,symbol:s,styles:Le(Le({},b),f.styles)}),C=i.found&&n.found?jn("generateAbstractMask",E)||{children:[],attributes:{}}:jn("generateAbstractIcon",E)||{children:[],attributes:{}},w=C.children,P=C.attributes;return E.children=w,E.attributes=P,s?qT(E):jT(E)}function mh(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=Le(Le(Le({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[Qi]="");var u=Le({},o.styles);uu(r)&&(u.transform=TT({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=Lo(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function $T(t){var e=t.content,n=t.title,i=t.extra,r=Le(Le(Le({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=Lo(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Il=mn.styles;function _c(t){var e=t[0],n=t[1],i=t.slice(4),r=ru(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(Gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(Gi.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(Gi.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var KT={found:!1,width:512,height:512};function ZT(t,e){!xm&&!Ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function vc(t,e){var n=e;return e==="fa"&&Ue.styleDefault!==null&&(e=yi()),new Promise(function(i,r){if(jn("missingIconAbstract"),n==="fa"){var a=Dm(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Il[e]&&Il[e][t]){var o=Il[e][t];return i(_c(o))}ZT(t,e),i(Le(Le({},KT),{},{icon:Ue.showMissingIcons&&t?jn("missingIconAbstract")||{}:{}}))})}var gh=function(){},xc=Ue.measurePerformance&&ws&&ws.mark&&ws.measure?ws:{mark:gh,measure:gh},ca='FA "6.4.2"',JT=function(e){return xc.mark("".concat(ca," ").concat(e," begins")),function(){return Um(e)}},Um=function(e){xc.mark("".concat(ca," ").concat(e," ends")),xc.measure("".concat(ca," ").concat(e),"".concat(ca," ").concat(e," begins"),"".concat(ca," ").concat(e," ends"))},mu={begin:JT,end:Um},Gs=function(){};function _h(t){var e=t.getAttribute?t.getAttribute(Qi):null;return typeof e=="string"}function QT(t){var e=t.getAttribute?t.getAttribute(su):null,n=t.getAttribute?t.getAttribute(ou):null;return e&&n}function eA(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Ue.replacementClass)}function tA(){if(Ue.autoReplaceSvg===!0)return Vs.replace;var t=Vs[Ue.autoReplaceSvg];return t||Vs.replace}function nA(t){return ot.createElementNS("http://www.w3.org/2000/svg",t)}function iA(t){return ot.createElement(t)}function Nm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?nA:iA:n;if(typeof t=="string")return ot.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(Nm(o,{ceFn:i}))}),r}function rA(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Vs={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Nm(r),n)}),n.getAttribute(Qi)===null&&Ue.keepOriginalSource){var i=ot.createComment(rA(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~cu(n).indexOf(Ue.replacementClass))return Vs.replace(e);var r=new RegExp("".concat(Ue.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===Ue.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Ya(s)}).join(`
`);n.setAttribute(Qi,""),n.innerHTML=o}};function vh(t){t()}function Om(t,e){var n=typeof e=="function"?e:Gs;if(t.length===0)n();else{var i=vh;Ue.mutateApproach===lT&&(i=xi.requestAnimationFrame||vh),i(function(){var r=tA(),a=mu.begin("mutate");t.map(r),a(),n()})}}var gu=!1;function Fm(){gu=!0}function yc(){gu=!1}var ro=null;function xh(t){if(lh&&Ue.observeMutations){var e=t.treeCallback,n=e===void 0?Gs:e,i=t.nodeCallback,r=i===void 0?Gs:i,a=t.pseudoElementsCallback,o=a===void 0?Gs:a,s=t.observeMutationsRoot,l=s===void 0?ot:s;ro=new lh(function(c){if(!gu){var u=yi();Kr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!_h(f.addedNodes[0])&&(Ue.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&Ue.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&_h(f.target)&&~mT.indexOf(f.attributeName))if(f.attributeName==="class"&&QT(f.target)){var d=Io(cu(f.target)),p=d.prefix,x=d.iconName;f.target.setAttribute(su,p||u),x&&f.target.setAttribute(ou,x)}else eA(f.target)&&r(f.target)})}}),$n&&ro.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function aA(){ro&&ro.disconnect()}function sA(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function oA(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Io(cu(t));return r.prefix||(r.prefix=yi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=zT(r.prefix,t.innerText)||du(r.prefix,hc(t.innerText))),!r.iconName&&Ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function lA(t){var e=Kr(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Ue.autoA11y&&(n?e["aria-labelledby"]="".concat(Ue.replacementClass,"-title-").concat(i||Fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function cA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=oA(t),i=n.iconName,r=n.prefix,a=n.rest,o=lA(t),s=mc("parseNodeAttributes",{},t),l=e.styleParser?sA(t):[];return Le({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var uA=mn.styles;function zm(t){var e=Ue.autoReplaceSvg==="nest"?yh(t,{styleParser:!1}):yh(t);return~e.extra.classes.indexOf(ym)?jn("generateLayersText",t,e):jn("generateSvgReplacementMutation",t,e)}var Mi=new Set;lu.map(function(t){Mi.add("fa-".concat(t))});Object.keys(Ia[st]).map(Mi.add.bind(Mi));Object.keys(Ia[ut]).map(Mi.add.bind(Mi));Mi=Wa(Mi);function Mh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$n)return Promise.resolve();var n=ot.documentElement.classList,i=function(f){return n.add("".concat(ch,"-").concat(f))},r=function(f){return n.remove("".concat(ch,"-").concat(f))},a=Ue.autoFetchSvg?Mi:lu.map(function(u){return"fa-".concat(u)}).concat(Object.keys(uA));a.includes("fa")||a.push("fa");var o=[".".concat(ym,":not([").concat(Qi,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(Qi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kr(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=mu.begin("onTree"),c=s.reduce(function(u,f){try{var d=zm(f);d&&u.push(d)}catch(p){xm||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Om(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function fA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zm(t).then(function(n){n&&Om([n],e)})}function dA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:gc(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:gc(r||{})),t(i,Le(Le({},n),{},{mask:r}))}}var hA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?wn:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,x=p===void 0?null:p,v=n.classes,m=v===void 0?[]:v,h=n.attributes,_=h===void 0?{}:h,g=n.styles,b=g===void 0?{}:g;if(e){var E=e.prefix,C=e.iconName,w=e.icon;return Uo(Le({type:"icon"},e),function(){return er("beforeDOMElementCreation",{iconDefinition:e,params:n}),Ue.autoA11y&&(d?_["aria-labelledby"]="".concat(Ue.replacementClass,"-title-").concat(x||Fa()):(_["aria-hidden"]="true",_.focusable="false")),pu({icons:{main:_c(w),mask:l?_c(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:Le(Le({},wn),r),symbol:o,title:d,maskId:u,titleId:x,extra:{attributes:_,styles:b,classes:m}})})}},pA={mixout:function(){return{icon:dA(hA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mh,n.nodeCallback=fA,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?ot:i,a=n.callback,o=a===void 0?function(){}:a;return Mh(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,x){Promise.all([vc(r,s),u.iconName?vc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var m=ru(v,2),h=m[0],_=m[1];p([n,pu({icons:{main:h,mask:_},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Lo(s);l.length>0&&(r.style=l);var c;return uu(o)&&(c=jn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},mA={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return Uo({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Ue.cssPrefix,"-layers")].concat(Wa(a)).join(" ")},children:o}]})}}}},gA={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Uo({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:i}),$T({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(Ue.cssPrefix,"-layers-counter")].concat(Wa(s))}})})}}}},_A={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?wn:r,o=i.title,s=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return Uo({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:i}),mh({content:n,transform:Le(Le({},wn),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(Ue.cssPrefix,"-layers-text")].concat(Wa(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(gm){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return Ue.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mh({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},vA=new RegExp('"',"ug"),Sh=[1105920,1112319];function xA(t){var e=t.replace(vA,""),n=DT(e,0),i=n>=Sh[0]&&n<=Sh[1],r=e.length===2?e[0]===e[1]:!1;return{value:hc(r?e[0]:e),isSecondary:i||r}}function bh(t,e){var n="".concat(oT).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=Kr(t.children),o=a.filter(function(w){return w.getAttribute(dc)===e})[0],s=xi.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(dT),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ut:st,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ua[d][l[2].toLowerCase()]:hT[d][c],x=xA(f),v=x.value,m=x.isSecondary,h=l[0].startsWith("FontAwesome"),_=du(p,v),g=_;if(h){var b=BT(v);b.iconName&&b.prefix&&(_=b.iconName,p=b.prefix)}if(_&&!m&&(!o||o.getAttribute(su)!==p||o.getAttribute(ou)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var E=cA(),C=E.extra;C.attributes[dc]=e,vc(_,p).then(function(w){var P=pu(Le(Le({},E),{},{icons:{main:w,mask:hu()},prefix:p,iconName:g,extra:C,watchable:!0})),S=ot.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=P.map(function(A){return Ya(A)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function yA(t){return Promise.all([bh(t,"::before"),bh(t,"::after")])}function MA(t){return t.parentNode!==document.head&&!~cT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Eh(t){if($n)return new Promise(function(e,n){var i=Kr(t.querySelectorAll("*")).filter(MA).map(yA),r=mu.begin("searchPseudoElements");Fm(),Promise.all(i).then(function(){r(),yc(),e()}).catch(function(){r(),yc(),n()})})}var SA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Eh,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?ot:i;Ue.searchPseudoElements&&Eh(r)}}},Th=!1,bA={mixout:function(){return{dom:{unwatch:function(){Fm(),Th=!0}}}},hooks:function(){return{bootstrap:function(){xh(mc("mutationObserverCallbacks",{}))},noAuto:function(){aA()},watch:function(n){var i=n.observeMutationsRoot;Th?yc():xh(mc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Ah=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},EA={mixout:function(){return{parse:{transform:function(n){return Ah(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Ah(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:Le({},p.outer),children:[{tag:"g",attributes:Le({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Le(Le({},i.icon.attributes),p.path)}]}]}}}},Ul={x:0,y:0,width:"100%",height:"100%"};function wh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function TA(t){return t.tag==="g"?t.children:[t]}var AA={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?Io(r.split(" ").map(function(o){return o.trim()})):hu();return a.prefix||(a.prefix=yi()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,f=o.width,d=o.icon,p=ET({transform:l,containerWidth:f,iconWidth:c}),x={tag:"rect",attributes:Le(Le({},Ul),{},{fill:"white"})},v=u.children?{children:u.children.map(wh)}:{},m={tag:"g",attributes:Le({},p.inner),children:[wh(Le({tag:u.tag,attributes:Le(Le({},u.attributes),p.path)},v))]},h={tag:"g",attributes:Le({},p.outer),children:[m]},_="mask-".concat(s||Fa()),g="clip-".concat(s||Fa()),b={tag:"mask",attributes:Le(Le({},Ul),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,h]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:TA(d)},b]};return i.push(E,{tag:"rect",attributes:Le({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(_,")")},Ul)}),{children:i,attributes:r}}}},wA={provides:function(e){var n=!1;xi.matchMedia&&(n=xi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Le(Le({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Le(Le({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:Le(Le({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:Le(Le({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Le(Le({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:Le(Le({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Le(Le({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:Le(Le({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Le(Le({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},RA={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},CA=[wT,pA,mA,gA,_A,SA,bA,EA,AA,wA,RA];GT(CA,{mixoutsTo:Jt});Jt.noAuto;Jt.config;var PA=Jt.library;Jt.dom;var LA=Jt.parse;Jt.findIconDefinition;Jt.toHtml;var DA=Jt.icon;Jt.layer;Jt.text;Jt.counter;var IA={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},UA=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function NA(t,e){return e={exports:{}},t(e,e.exports),e.exports}var OA=NA(function(t){(function(e){var n=function(h,_,g){if(!c(_)||f(_)||d(_)||p(_)||l(_))return _;var b,E=0,C=0;if(u(_))for(b=[],C=_.length;E<C;E++)b.push(n(h,_[E],g));else{b={};for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(b[h(w,g)]=n(h,_[w],g))}return b},i=function(h,_){_=_||{};var g=_.separator||"_",b=_.split||/(?=[A-Z])/;return h.split(b).join(g)},r=function(h){return x(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(_,g){return g?g.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},a=function(h){var _=r(h);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(h,_){return i(h,_).toLowerCase()},s=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},u=function(h){return s.call(h)=="[object Array]"},f=function(h){return s.call(h)=="[object Date]"},d=function(h){return s.call(h)=="[object RegExp]"},p=function(h){return s.call(h)=="[object Boolean]"},x=function(h){return h=h-0,h===h},v=function(h,_){var g=_&&"process"in _?_.process:_;return typeof g!="function"?h:function(b,E){return g(b,h,E)}},m={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(h,_){return n(v(r,_),h)},decamelizeKeys:function(h,_){return n(v(o,_),h,_)},pascalizeKeys:function(h,_){return n(v(a,_),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(UA)}),FA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ua=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Mc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zA=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n};function BA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=OA.camelize(n.slice(0,i)),a=n.slice(i+1).trim();return e[r]=a,e},{})}function kA(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Bm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Bm(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=kA(u);break;case"style":l.style=BA(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=zA(n,["class","style"]);return Mo(t.tag,Mc({},e,{class:r.class,style:Mc({},r.style,o)},r.attrs,s),i)}var km=!1;try{km=!0}catch{}function HA(){if(!km&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Nl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ua({},t,e):{}}function GA(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ua(e,"fa-"+t.size,t.size!==null),ua(e,"fa-rotate-"+t.rotation,t.rotation!==null),ua(e,"fa-pull-"+t.pull,t.pull!==null),ua(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Rh(t){if(t===null)return null;if((typeof t>"u"?"undefined":FA(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var VA=Oc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=pt(function(){return Rh(e.icon)}),a=pt(function(){return Nl("classes",GA(e))}),o=pt(function(){return Nl("transform",typeof e.transform=="string"?LA.transform(e.transform):e.transform)}),s=pt(function(){return Nl("mask",Rh(e.mask))}),l=pt(function(){return DA(r.value,Mc({},a.value,o.value,s.value,{symbol:e.symbol,title:e.title}))});Pr(l,function(u){if(!u)return HA("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=pt(function(){return l.value?Bm(l.value.abstract[0],{},i):null});return function(){return c.value}}});PA.add(IA);const _u=Wc(j_),Hm=Wc(av),Gm=Wc(ZE);_u.component("fa",VA);Hm.use(jc);Gm.use(jc);_u.use(jc);_u.mount("#app");Hm.mount("#navbar");Gm.mount("#back");export{ka as _,WA as a,vt as b,Ba as c,ft as d,e1 as e,Kl as f,Or as o,Qg as p,Bc as r};
