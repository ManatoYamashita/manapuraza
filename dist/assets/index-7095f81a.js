(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Cu(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const dt={},na=[],Nn=()=>{},E1=()=>!1,b1=/^on[^a-z]/,qo=t=>b1.test(t),Ru=t=>t.startsWith("onUpdate:"),wt=Object.assign,Lu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},M1=Object.prototype.hasOwnProperty,it=(t,e)=>M1.call(t,e),Ge=Array.isArray,ia=t=>Ko(t)==="[object Map]",Tm=t=>Ko(t)==="[object Set]",je=t=>typeof t=="function",Ct=t=>typeof t=="string",Pu=t=>typeof t=="symbol",_t=t=>t!==null&&typeof t=="object",Am=t=>_t(t)&&je(t.then)&&je(t.catch),wm=Object.prototype.toString,Ko=t=>wm.call(t),S1=t=>Ko(t).slice(8,-1),Cm=t=>Ko(t)==="[object Object]",Iu=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,To=Cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},T1=/-(\w)/g,Wn=Zo(t=>t.replace(T1,(e,n)=>n?n.toUpperCase():"")),A1=/\B([A-Z])/g,Ma=Zo(t=>t.replace(A1,"-$1").toLowerCase()),Jo=Zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pl=Zo(t=>t?`on${Jo(t)}`:""),ss=(t,e)=>!Object.is(t,e),Il=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Do=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},w1=t=>{const e=parseFloat(t);return isNaN(e)?t:e},C1=t=>{const e=Ct(t)?Number(t):NaN;return isNaN(e)?t:e};let Bf;const Lc=()=>Bf||(Bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qo(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ct(i)?I1(i):Qo(i);if(r)for(const a in r)e[a]=r[a]}return e}else{if(Ct(t))return t;if(_t(t))return t}}const R1=/;(?![^(]*\))/g,L1=/:([^]+)/,P1=/\/\*[^]*?\*\//g;function I1(t){const e={};return t.replace(P1,"").split(R1).forEach(n=>{if(n){const i=n.split(L1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function el(t){let e="";if(Ct(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=el(t[n]);i&&(e+=i+" ")}else if(_t(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const N1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",D1=Cu(N1);function Rm(t){return!!t||t===""}const Ao=t=>Ct(t)?t:t==null?"":Ge(t)||_t(t)&&(t.toString===wm||!je(t.toString))?JSON.stringify(t,Lm,2):String(t),Lm=(t,e)=>e&&e.__v_isRef?Lm(t,e.value):ia(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Tm(e)?{[`Set(${e.size})`]:[...e.values()]}:_t(e)&&!Ge(e)&&!Cm(e)?String(e):e;let Tn;class Pm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tn;try{return Tn=this,e()}finally{Tn=n}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function O1(t){return new Pm(t)}function U1(t,e=Tn){e&&e.active&&e.effects.push(t)}function F1(){return Tn}const Nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Im=t=>(t.w&Bi)>0,Nm=t=>(t.n&Bi)>0,k1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bi},B1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Im(r)&&!Nm(r)?r.delete(t):e[n++]=r,r.w&=~Bi,r.n&=~Bi}e.length=n}},Pc=new WeakMap;let Wa=0,Bi=1;const Ic=30;let wn;const _r=Symbol(""),Nc=Symbol("");class Du{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,U1(this,i)}run(){if(!this.active)return this.fn();let e=wn,n=Di;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wn,wn=this,Di=!0,Bi=1<<++Wa,Wa<=Ic?k1(this):zf(this),this.fn()}finally{Wa<=Ic&&B1(this),Bi=1<<--Wa,wn=this.parent,Di=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wn===this?this.deferStop=!0:this.active&&(zf(this),this.onStop&&this.onStop(),this.active=!1)}}function zf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Di=!0;const Dm=[];function Sa(){Dm.push(Di),Di=!1}function Ta(){const t=Dm.pop();Di=t===void 0?!0:t}function an(t,e,n){if(Di&&wn){let i=Pc.get(t);i||Pc.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Nu()),Om(r)}}function Om(t,e){let n=!1;Wa<=Ic?Nm(t)||(t.n|=Bi,n=!Im(t)):n=!t.has(wn),n&&(t.add(wn),wn.deps.push(t))}function li(t,e,n,i,r,a){const o=Pc.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&Ge(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":Ge(t)?Iu(n)&&s.push(o.get("length")):(s.push(o.get(_r)),ia(t)&&s.push(o.get(Nc)));break;case"delete":Ge(t)||(s.push(o.get(_r)),ia(t)&&s.push(o.get(Nc)));break;case"set":ia(t)&&s.push(o.get(_r));break}if(s.length===1)s[0]&&Dc(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Dc(Nu(l))}}function Dc(t,e){const n=Ge(t)?t:[...t];for(const i of n)i.computed&&Hf(i);for(const i of n)i.computed||Hf(i)}function Hf(t,e){(t!==wn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const z1=Cu("__proto__,__v_isRef,__isVue"),Um=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pu)),H1=Ou(),G1=Ou(!1,!0),V1=Ou(!0),Gf=W1();function W1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=rt(this);for(let a=0,o=this.length;a<o;a++)an(i,"get",a+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(rt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sa();const i=rt(this)[e].apply(this,n);return Ta(),i}}),t}function X1(t){const e=rt(this);return an(e,"has",t),e.hasOwnProperty(t)}function Ou(t=!1,e=!1){return function(i,r,a){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&a===(t?e?o0:Hm:e?zm:Bm).get(i))return i;const o=Ge(i);if(!t){if(o&&it(Gf,r))return Reflect.get(Gf,r,a);if(r==="hasOwnProperty")return X1}const s=Reflect.get(i,r,a);return(Pu(r)?Um.has(r):z1(r))||(t||an(i,"get",r),e)?s:Bt(s)?o&&Iu(r)?s:s.value:_t(s)?t?Gm(s):Ts(s):s}}const Y1=Fm(),$1=Fm(!0);function Fm(t=!1){return function(n,i,r,a){let o=n[i];if(ua(o)&&Bt(o)&&!Bt(r))return!1;if(!t&&(!Oo(r)&&!ua(r)&&(o=rt(o),r=rt(r)),!Ge(n)&&Bt(o)&&!Bt(r)))return o.value=r,!0;const s=Ge(n)&&Iu(i)?Number(i)<n.length:it(n,i),l=Reflect.set(n,i,r,a);return n===rt(a)&&(s?ss(r,o)&&li(n,"set",i,r):li(n,"add",i,r)),l}}function j1(t,e){const n=it(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&li(t,"delete",e,void 0),i}function q1(t,e){const n=Reflect.has(t,e);return(!Pu(e)||!Um.has(e))&&an(t,"has",e),n}function K1(t){return an(t,"iterate",Ge(t)?"length":_r),Reflect.ownKeys(t)}const km={get:H1,set:Y1,deleteProperty:j1,has:q1,ownKeys:K1},Z1={get:V1,set(t,e){return!0},deleteProperty(t,e){return!0}},J1=wt({},km,{get:G1,set:$1}),Uu=t=>t,tl=t=>Reflect.getPrototypeOf(t);function Os(t,e,n=!1,i=!1){t=t.__v_raw;const r=rt(t),a=rt(e);n||(e!==a&&an(r,"get",e),an(r,"get",a));const{has:o}=tl(r),s=i?Uu:n?Bu:os;if(o.call(r,e))return s(t.get(e));if(o.call(r,a))return s(t.get(a));t!==r&&t.get(e)}function Us(t,e=!1){const n=this.__v_raw,i=rt(n),r=rt(t);return e||(t!==r&&an(i,"has",t),an(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Fs(t,e=!1){return t=t.__v_raw,!e&&an(rt(t),"iterate",_r),Reflect.get(t,"size",t)}function Vf(t){t=rt(t);const e=rt(this);return tl(e).has.call(e,t)||(e.add(t),li(e,"add",t,t)),this}function Wf(t,e){e=rt(e);const n=rt(this),{has:i,get:r}=tl(n);let a=i.call(n,t);a||(t=rt(t),a=i.call(n,t));const o=r.call(n,t);return n.set(t,e),a?ss(e,o)&&li(n,"set",t,e):li(n,"add",t,e),this}function Xf(t){const e=rt(this),{has:n,get:i}=tl(e);let r=n.call(e,t);r||(t=rt(t),r=n.call(e,t)),i&&i.call(e,t);const a=e.delete(t);return r&&li(e,"delete",t,void 0),a}function Yf(){const t=rt(this),e=t.size!==0,n=t.clear();return e&&li(t,"clear",void 0,void 0),n}function ks(t,e){return function(i,r){const a=this,o=a.__v_raw,s=rt(o),l=e?Uu:t?Bu:os;return!t&&an(s,"iterate",_r),o.forEach((c,u)=>i.call(r,l(c),l(u),a))}}function Bs(t,e,n){return function(...i){const r=this.__v_raw,a=rt(r),o=ia(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Uu:e?Bu:os;return!e&&an(a,"iterate",l?Nc:_r),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:s?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function mi(t){return function(...e){return t==="delete"?!1:this}}function Q1(){const t={get(a){return Os(this,a)},get size(){return Fs(this)},has:Us,add:Vf,set:Wf,delete:Xf,clear:Yf,forEach:ks(!1,!1)},e={get(a){return Os(this,a,!1,!0)},get size(){return Fs(this)},has:Us,add:Vf,set:Wf,delete:Xf,clear:Yf,forEach:ks(!1,!0)},n={get(a){return Os(this,a,!0)},get size(){return Fs(this,!0)},has(a){return Us.call(this,a,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:ks(!0,!1)},i={get(a){return Os(this,a,!0,!0)},get size(){return Fs(this,!0)},has(a){return Us.call(this,a,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=Bs(a,!1,!1),n[a]=Bs(a,!0,!1),e[a]=Bs(a,!1,!0),i[a]=Bs(a,!0,!0)}),[t,n,e,i]}const[e0,t0,n0,i0]=Q1();function Fu(t,e){const n=e?t?i0:n0:t?t0:e0;return(i,r,a)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(it(n,r)&&r in i?n:i,r,a)}const r0={get:Fu(!1,!1)},a0={get:Fu(!1,!0)},s0={get:Fu(!0,!1)},Bm=new WeakMap,zm=new WeakMap,Hm=new WeakMap,o0=new WeakMap;function l0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c0(t){return t.__v_skip||!Object.isExtensible(t)?0:l0(S1(t))}function Ts(t){return ua(t)?t:ku(t,!1,km,r0,Bm)}function u0(t){return ku(t,!1,J1,a0,zm)}function Gm(t){return ku(t,!0,Z1,s0,Hm)}function ku(t,e,n,i,r){if(!_t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=r.get(t);if(a)return a;const o=c0(t);if(o===0)return t;const s=new Proxy(t,o===2?i:n);return r.set(t,s),s}function ra(t){return ua(t)?ra(t.__v_raw):!!(t&&t.__v_isReactive)}function ua(t){return!!(t&&t.__v_isReadonly)}function Oo(t){return!!(t&&t.__v_isShallow)}function Vm(t){return ra(t)||ua(t)}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function Wm(t){return Do(t,"__v_skip",!0),t}const os=t=>_t(t)?Ts(t):t,Bu=t=>_t(t)?Gm(t):t;function Xm(t){Di&&wn&&(t=rt(t),Om(t.dep||(t.dep=Nu())))}function Ym(t,e){t=rt(t);const n=t.dep;n&&Dc(n)}function Bt(t){return!!(t&&t.__v_isRef===!0)}function Cn(t){return jm(t,!1)}function $m(t){return jm(t,!0)}function jm(t,e){return Bt(t)?t:new f0(t,e)}class f0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:rt(e),this._value=n?e:os(e)}get value(){return Xm(this),this._value}set value(e){const n=this.__v_isShallow||Oo(e)||ua(e);e=n?e:rt(e),ss(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:os(e),Ym(this))}}function aa(t){return Bt(t)?t.value:t}const d0={get:(t,e,n)=>aa(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function qm(t){return ra(t)?t:new Proxy(t,d0)}class h0{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Du(e,()=>{this._dirty||(this._dirty=!0,Ym(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=rt(this);return Xm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function p0(t,e,n=!1){let i,r;const a=je(t);return a?(i=t,r=Nn):(i=t.get,r=t.set),new h0(i,r,a||!r,n)}function Oi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(a){nl(a,e,n)}return r}function yn(t,e,n,i){if(je(t)){const a=Oi(t,e,n,i);return a&&Am(a)&&a.catch(o=>{nl(o,e,n)}),a}const r=[];for(let a=0;a<t.length;a++)r.push(yn(t[a],e,n,i));return r}function nl(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=n;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){Oi(l,null,10,[t,o,s]);return}}m0(t,n,r,i)}function m0(t,e,n,i=!0){console.error(t)}let ls=!1,Oc=!1;const Wt=[];let Gn=0;const sa=[];let ei=null,sr=0;const Km=Promise.resolve();let zu=null;function Zm(t){const e=zu||Km;return t?e.then(this?t.bind(this):t):e}function g0(t){let e=Gn+1,n=Wt.length;for(;e<n;){const i=e+n>>>1;cs(Wt[i])<t?e=i+1:n=i}return e}function Hu(t){(!Wt.length||!Wt.includes(t,ls&&t.allowRecurse?Gn+1:Gn))&&(t.id==null?Wt.push(t):Wt.splice(g0(t.id),0,t),Jm())}function Jm(){!ls&&!Oc&&(Oc=!0,zu=Km.then(eg))}function _0(t){const e=Wt.indexOf(t);e>Gn&&Wt.splice(e,1)}function v0(t){Ge(t)?sa.push(...t):(!ei||!ei.includes(t,t.allowRecurse?sr+1:sr))&&sa.push(t),Jm()}function $f(t,e=ls?Gn+1:0){for(;e<Wt.length;e++){const n=Wt[e];n&&n.pre&&(Wt.splice(e,1),e--,n())}}function Qm(t){if(sa.length){const e=[...new Set(sa)];if(sa.length=0,ei){ei.push(...e);return}for(ei=e,ei.sort((n,i)=>cs(n)-cs(i)),sr=0;sr<ei.length;sr++)ei[sr]();ei=null,sr=0}}const cs=t=>t.id==null?1/0:t.id,x0=(t,e)=>{const n=cs(t)-cs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eg(t){Oc=!1,ls=!0,Wt.sort(x0);const e=Nn;try{for(Gn=0;Gn<Wt.length;Gn++){const n=Wt[Gn];n&&n.active!==!1&&Oi(n,null,14)}}finally{Gn=0,Wt.length=0,Qm(),ls=!1,zu=null,(Wt.length||sa.length)&&eg()}}function y0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||dt;let r=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||dt;h&&(r=n.map(p=>Ct(p)?p.trim():p)),f&&(r=n.map(w1))}let s,l=i[s=Pl(e)]||i[s=Pl(Wn(e))];!l&&a&&(l=i[s=Pl(Ma(e))]),l&&yn(l,t,6,r);const c=i[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,yn(c,t,6,r)}}function tg(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const a=t.emits;let o={},s=!1;if(!je(t)){const l=c=>{const u=tg(c,e,!0);u&&(s=!0,wt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(_t(t)&&i.set(t,null),null):(Ge(a)?a.forEach(l=>o[l]=null):wt(o,a),_t(t)&&i.set(t,o),o)}function il(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(t,e[0].toLowerCase()+e.slice(1))||it(t,Ma(e))||it(t,e))}let fn=null,rl=null;function Uo(t){const e=fn;return fn=t,rl=t&&t.type.__scopeId||null,e}function ng(t){rl=t}function ig(){rl=null}function ii(t,e=fn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ad(-1);const a=Uo(e);let o;try{o=t(...r)}finally{Uo(a),i._d&&ad(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Nl(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:b,inheritAttrs:y}=t;let m,d;const _=Uo(t);try{if(n.shapeFlag&4){const E=r||i;m=Bn(u.call(E,E,f,a,p,h,b)),d=l}else{const E=e;m=Bn(E.length>1?E(a,{attrs:l,slots:s,emit:c}):E(a,null)),d=e.props?l:E0(l)}}catch(E){Ka.length=0,nl(E,t,1),m=xt(oi)}let g=m;if(d&&y!==!1){const E=Object.keys(d),{shapeFlag:A}=g;E.length&&A&7&&(o&&E.some(Ru)&&(d=b0(d,o)),g=zi(g,d))}return n.dirs&&(g=zi(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),m=g,Uo(_),m}const E0=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},b0=(t,e)=>{const n={};for(const i in t)(!Ru(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function M0(t,e,n){const{props:i,children:r,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?jf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!il(c,h))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===o?!1:i?o?jf(i,o,c):!0:!!o;return!1}function jf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const a=i[r];if(e[a]!==t[a]&&!il(n,a))return!0}return!1}function S0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const T0=t=>t.__isSuspense;function A0(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):v0(t)}const zs={};function si(t,e,n){return rg(t,e,n)}function rg(t,e,{immediate:n,deep:i,flush:r,onTrack:a,onTrigger:o}=dt){var s;const l=F1()===((s=Ut)==null?void 0:s.scope)?Ut:null;let c,u=!1,f=!1;if(Bt(t)?(c=()=>t.value,u=Oo(t)):ra(t)?(c=()=>t,i=!0):Ge(t)?(f=!0,u=t.some(E=>ra(E)||Oo(E)),c=()=>t.map(E=>{if(Bt(E))return E.value;if(ra(E))return dr(E);if(je(E))return Oi(E,l,2)})):je(t)?e?c=()=>Oi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),yn(t,l,3,[p])}:c=Nn,e&&i){const E=c;c=()=>dr(E())}let h,p=E=>{h=_.onStop=()=>{Oi(E,l,4)}},b;if(fs)if(p=Nn,e?n&&yn(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const E=Ev();b=E.__watcherHandles||(E.__watcherHandles=[])}else return Nn;let y=f?new Array(t.length).fill(zs):zs;const m=()=>{if(_.active)if(e){const E=_.run();(i||u||(f?E.some((A,C)=>ss(A,y[C])):ss(E,y)))&&(h&&h(),yn(e,l,3,[E,y===zs?void 0:f&&y[0]===zs?[]:y,p]),y=E)}else _.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>en(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Hu(m));const _=new Du(c,d);e?n?m():y=_.run():r==="post"?en(_.run.bind(_),l&&l.suspense):_.run();const g=()=>{_.stop(),l&&l.scope&&Lu(l.scope.effects,_)};return b&&b.push(g),g}function w0(t,e,n){const i=this.proxy,r=Ct(t)?t.includes(".")?ag(i,t):()=>i[t]:t.bind(i,i);let a;je(e)?a=e:(a=e.handler,n=e);const o=Ut;da(this);const s=rg(r,a.bind(i),n);return o?da(o):vr(),s}function ag(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function dr(t,e){if(!_t(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Bt(t))dr(t.value,e);else if(Ge(t))for(let n=0;n<t.length;n++)dr(t[n],e);else if(Tm(t)||ia(t))t.forEach(n=>{dr(n,e)});else if(Cm(t))for(const n in t)dr(t[n],e);return t}function C0(t,e){const n=fn;if(n===null)return t;const i=cl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[o,s,l,c=dt]=e[a];o&&(je(o)&&(o={mounted:o,updated:o}),o.deep&&dr(s),r.push({dir:o,instance:i,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function Zi(t,e,n,i){const r=t.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){const s=r[o];a&&(s.oldValue=a[o].value);let l=s.dir[i];l&&(Sa(),yn(l,n,8,[t.el,s,t,e]),Ta())}}function R0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ol(()=>{t.isMounted=!0}),fg(()=>{t.isUnmounting=!0}),t}const pn=[Function,Array],sg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},L0={name:"BaseTransition",props:sg,setup(t,{slots:e}){const n=fa(),i=R0();let r;return()=>{const a=e.default&&lg(e.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const y of a)if(y.type!==oi){o=y;break}}const s=rt(t),{mode:l}=s;if(i.isLeaving)return Dl(o);const c=qf(o);if(!c)return Dl(o);const u=Uc(c,s,i,n);Fc(c,u);const f=n.subTree,h=f&&qf(f);let p=!1;const{getTransitionKey:b}=c.type;if(b){const y=b();r===void 0?r=y:y!==r&&(r=y,p=!0)}if(h&&h.type!==oi&&(!or(c,h)||p)){const y=Uc(h,s,i,n);if(Fc(h,y),l==="out-in")return i.isLeaving=!0,y.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Dl(o);l==="in-out"&&c.type!==oi&&(y.delayLeave=(m,d,_)=>{const g=og(i,h);g[String(h.key)]=h,m._leaveCb=()=>{d(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},P0=L0;function og(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Uc(t,e,n,i){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:b,onBeforeAppear:y,onAppear:m,onAfterAppear:d,onAppearCancelled:_}=e,g=String(t.key),E=og(n,t),A=(D,T)=>{D&&yn(D,i,9,T)},C=(D,T)=>{const L=T[1];A(D,T),Ge(D)?D.every(z=>z.length<=1)&&L():D.length<=1&&L()},w={mode:a,persisted:o,beforeEnter(D){let T=s;if(!n.isMounted)if(r)T=y||s;else return;D._leaveCb&&D._leaveCb(!0);const L=E[g];L&&or(t,L)&&L.el._leaveCb&&L.el._leaveCb(),A(T,[D])},enter(D){let T=l,L=c,z=u;if(!n.isMounted)if(r)T=m||l,L=d||c,z=_||u;else return;let F=!1;const G=D._enterCb=O=>{F||(F=!0,O?A(z,[D]):A(L,[D]),w.delayedLeave&&w.delayedLeave(),D._enterCb=void 0)};T?C(T,[D,G]):G()},leave(D,T){const L=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return T();A(f,[D]);let z=!1;const F=D._leaveCb=G=>{z||(z=!0,T(),G?A(b,[D]):A(p,[D]),D._leaveCb=void 0,E[L]===t&&delete E[L])};E[L]=t,h?C(h,[D,F]):F()},clone(D){return Uc(D,e,n,i)}};return w}function Dl(t){if(al(t))return t=zi(t),t.children=null,t}function qf(t){return al(t)?t.children?t.children[0]:void 0:t}function Fc(t,e){t.shapeFlag&6&&t.component?Fc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lg(t,e=!1,n){let i=[],r=0;for(let a=0;a<t.length;a++){let o=t[a];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===gn?(o.patchFlag&128&&r++,i=i.concat(lg(o.children,e,s))):(e||o.type!==oi)&&i.push(s!=null?zi(o,{key:s}):o)}if(r>1)for(let a=0;a<i.length;a++)i[a].patchFlag=-2;return i}function Aa(t,e){return je(t)?(()=>wt({name:t.name},e,{setup:t}))():t}const wo=t=>!!t.type.__asyncLoader,al=t=>t.type.__isKeepAlive;function I0(t,e){cg(t,"a",e)}function N0(t,e){cg(t,"da",e)}function cg(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(sl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)al(r.parent.vnode)&&D0(i,e,n,r),r=r.parent}}function D0(t,e,n,i){const r=sl(e,t,i,!0);Gu(()=>{Lu(i[e],r)},n)}function sl(t,e,n=Ut,i=!1){if(n){const r=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sa(),da(n);const s=yn(e,n,t,o);return vr(),Ta(),s});return i?r.unshift(a):r.push(a),a}}const hi=t=>(e,n=Ut)=>(!fs||t==="sp")&&sl(t,(...i)=>e(...i),n),ug=hi("bm"),ol=hi("m"),O0=hi("bu"),U0=hi("u"),fg=hi("bum"),Gu=hi("um"),F0=hi("sp"),k0=hi("rtg"),B0=hi("rtc");function z0(t,e=Ut){sl("ec",t,e)}const Vu="components";function Wu(t,e){return hg(Vu,t,!0,e)||t}const dg=Symbol.for("v-ndc");function H0(t){return Ct(t)?hg(Vu,t,!1)||t:t||dg}function hg(t,e,n=!0,i=!1){const r=fn||Ut;if(r){const a=r.type;if(t===Vu){const s=vv(a,!1);if(s&&(s===e||s===Wn(e)||s===Jo(Wn(e))))return a}const o=Kf(r[t]||a[t],e)||Kf(r.appContext[t],e);return!o&&i?a:o}}function Kf(t,e){return t&&(t[e]||t[Wn(e)]||t[Jo(Wn(e))])}const kc=t=>t?Sg(t)?cl(t)||t.proxy:kc(t.parent):null,qa=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kc(t.parent),$root:t=>kc(t.root),$emit:t=>t.emit,$options:t=>Xu(t),$forceUpdate:t=>t.f||(t.f=()=>Hu(t.update)),$nextTick:t=>t.n||(t.n=Zm.bind(t.proxy)),$watch:t=>w0.bind(t)}),Ol=(t,e)=>t!==dt&&!t.__isScriptSetup&&it(t,e),G0={get({_:t},e){const{ctx:n,setupState:i,data:r,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return a[e]}else{if(Ol(i,e))return o[e]=1,i[e];if(r!==dt&&it(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&it(c,e))return o[e]=3,a[e];if(n!==dt&&it(n,e))return o[e]=4,n[e];Bc&&(o[e]=0)}}const u=qa[e];let f,h;if(u)return e==="$attrs"&&an(t,"get",e),u(t);if((f=s.__cssModules)&&(f=f[e]))return f;if(n!==dt&&it(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,it(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:a}=t;return Ol(r,e)?(r[e]=n,!0):i!==dt&&it(i,e)?(i[e]=n,!0):it(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:a}},o){let s;return!!n[o]||t!==dt&&it(t,o)||Ol(e,o)||(s=a[0])&&it(s,o)||it(i,o)||it(qa,o)||it(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:it(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zf(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bc=!0;function V0(t){const e=Xu(t),n=t.proxy,i=t.ctx;Bc=!1,e.beforeCreate&&Jf(e.beforeCreate,t,"bc");const{data:r,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:b,activated:y,deactivated:m,beforeDestroy:d,beforeUnmount:_,destroyed:g,unmounted:E,render:A,renderTracked:C,renderTriggered:w,errorCaptured:D,serverPrefetch:T,expose:L,inheritAttrs:z,components:F,directives:G,filters:O}=e;if(c&&W0(c,i,null),o)for(const $ in o){const ie=o[$];je(ie)&&(i[$]=ie.bind(n))}if(r){const $=r.call(n,n);_t($)&&(t.data=Ts($))}if(Bc=!0,a)for(const $ in a){const ie=a[$],ee=je(ie)?ie.bind(n,n):je(ie.get)?ie.get.bind(n,n):Nn,le=!je(ie)&&je(ie.set)?ie.set.bind(n):Nn,B=st({get:ee,set:le});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>B.value,set:Z=>B.value=Z})}if(s)for(const $ in s)pg(s[$],i,n,$);if(l){const $=je(l)?l.call(n):l;Reflect.ownKeys($).forEach(ie=>{Co(ie,$[ie])})}u&&Jf(u,t,"c");function q($,ie){Ge(ie)?ie.forEach(ee=>$(ee.bind(n))):ie&&$(ie.bind(n))}if(q(ug,f),q(ol,h),q(O0,p),q(U0,b),q(I0,y),q(N0,m),q(z0,D),q(B0,C),q(k0,w),q(fg,_),q(Gu,E),q(F0,T),Ge(L))if(L.length){const $=t.exposed||(t.exposed={});L.forEach(ie=>{Object.defineProperty($,ie,{get:()=>n[ie],set:ee=>n[ie]=ee})})}else t.exposed||(t.exposed={});A&&t.render===Nn&&(t.render=A),z!=null&&(t.inheritAttrs=z),F&&(t.components=F),G&&(t.directives=G)}function W0(t,e,n=Nn){Ge(t)&&(t=zc(t));for(const i in t){const r=t[i];let a;_t(r)?"default"in r?a=En(r.from||i,r.default,!0):a=En(r.from||i):a=En(r),Bt(a)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function Jf(t,e,n){yn(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function pg(t,e,n,i){const r=i.includes(".")?ag(n,i):()=>n[i];if(Ct(t)){const a=e[t];je(a)&&si(r,a)}else if(je(t))si(r,t.bind(n));else if(_t(t))if(Ge(t))t.forEach(a=>pg(a,e,n,i));else{const a=je(t.handler)?t.handler.bind(n):e[t.handler];je(a)&&si(r,a,t)}}function Xu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Fo(l,c,o,!0)),Fo(l,e,o)),_t(e)&&a.set(e,l),l}function Fo(t,e,n,i=!1){const{mixins:r,extends:a}=e;a&&Fo(t,a,n,!0),r&&r.forEach(o=>Fo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const s=X0[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const X0={data:Qf,props:ed,emits:ed,methods:Xa,computed:Xa,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Xa,directives:Xa,watch:$0,provide:Qf,inject:Y0};function Qf(t,e){return e?t?function(){return wt(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function Y0(t,e){return Xa(zc(t),zc(e))}function zc(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Xa(t,e){return t?wt(Object.create(null),t,e):e}function ed(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:wt(Object.create(null),Zf(t),Zf(e??{})):e}function $0(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const i in e)n[i]=jt(t[i],e[i]);return n}function mg(){return{app:null,config:{isNativeTag:E1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j0=0;function q0(t,e){return function(i,r=null){je(i)||(i=wt({},i)),r!=null&&!_t(r)&&(r=null);const a=mg(),o=new Set;let s=!1;const l=a.app={_uid:j0++,_component:i,_props:r,_container:null,_context:a,_instance:null,version:bv,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(l,...u)):je(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,f){if(!s){const h=xt(i,r);return h.appContext=a,u&&e?e(h,c):t(h,c,f),s=!0,l._container=c,c.__vue_app__=l,cl(h.component)||h.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){ko=l;try{return c()}finally{ko=null}}};return l}}let ko=null;function Co(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function En(t,e,n=!1){const i=Ut||fn;if(i||ko){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ko._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function K0(t,e,n,i=!1){const r={},a={};Do(a,ll,1),t.propsDefaults=Object.create(null),gg(t,e,r,a);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:u0(r):t.type.props?t.props=r:t.props=a,t.attrs=a}function Z0(t,e,n,i){const{props:r,attrs:a,vnode:{patchFlag:o}}=t,s=rt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(il(t.emitsOptions,h))continue;const p=e[h];if(l)if(it(a,h))p!==a[h]&&(a[h]=p,c=!0);else{const b=Wn(h);r[b]=Hc(l,s,b,p,t,!1)}else p!==a[h]&&(a[h]=p,c=!0)}}}else{gg(t,e,r,a)&&(c=!0);let u;for(const f in s)(!e||!it(e,f)&&((u=Ma(f))===f||!it(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Hc(l,s,f,void 0,t,!0)):delete r[f]);if(a!==s)for(const f in a)(!e||!it(e,f))&&(delete a[f],c=!0)}c&&li(t,"set","$attrs")}function gg(t,e,n,i){const[r,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(To(l))continue;const c=e[l];let u;r&&it(r,u=Wn(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:il(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(a){const l=rt(n),c=s||dt;for(let u=0;u<a.length;u++){const f=a[u];n[f]=Hc(r,l,f,c[f],t,!it(c,f))}}return o}function Hc(t,e,n,i,r,a){const o=t[n];if(o!=null){const s=it(o,"default");if(s&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(da(r),i=c[n]=l.call(null,e),vr())}else i=l}o[0]&&(a&&!s?i=!1:o[1]&&(i===""||i===Ma(n))&&(i=!0))}return i}function _g(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const a=t.props,o={},s=[];let l=!1;if(!je(t)){const u=f=>{l=!0;const[h,p]=_g(f,e,!0);wt(o,h),p&&s.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return _t(t)&&i.set(t,na),na;if(Ge(a))for(let u=0;u<a.length;u++){const f=Wn(a[u]);td(f)&&(o[f]=dt)}else if(a)for(const u in a){const f=Wn(u);if(td(f)){const h=a[u],p=o[f]=Ge(h)||je(h)?{type:h}:wt({},h);if(p){const b=rd(Boolean,p.type),y=rd(String,p.type);p[0]=b>-1,p[1]=y<0||b<y,(b>-1||it(p,"default"))&&s.push(f)}}}const c=[o,s];return _t(t)&&i.set(t,c),c}function td(t){return t[0]!=="$"}function nd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function id(t,e){return nd(t)===nd(e)}function rd(t,e){return Ge(e)?e.findIndex(n=>id(n,t)):je(e)&&id(e,t)?0:-1}const vg=t=>t[0]==="_"||t==="$stable",Yu=t=>Ge(t)?t.map(Bn):[Bn(t)],J0=(t,e,n)=>{if(e._n)return e;const i=ii((...r)=>Yu(e(...r)),n);return i._c=!1,i},xg=(t,e,n)=>{const i=t._ctx;for(const r in t){if(vg(r))continue;const a=t[r];if(je(a))e[r]=J0(r,a,i);else if(a!=null){const o=Yu(a);e[r]=()=>o}}},yg=(t,e)=>{const n=Yu(e);t.slots.default=()=>n},Q0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=rt(e),Do(e,"_",n)):xg(e,t.slots={})}else t.slots={},e&&yg(t,e);Do(t.slots,ll,1)},ev=(t,e,n)=>{const{vnode:i,slots:r}=t;let a=!0,o=dt;if(i.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(wt(r,e),!n&&s===1&&delete r._):(a=!e.$stable,xg(e,r)),o=e}else e&&(yg(t,e),o={default:1});if(a)for(const s in r)!vg(s)&&!(s in o)&&delete r[s]};function Gc(t,e,n,i,r=!1){if(Ge(t)){t.forEach((h,p)=>Gc(h,e&&(Ge(e)?e[p]:e),n,i,r));return}if(wo(i)&&!r)return;const a=i.shapeFlag&4?cl(i.component)||i.component.proxy:i.el,o=r?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===dt?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,it(f,c)&&(f[c]=null)):Bt(c)&&(c.value=null)),je(l))Oi(l,s,12,[o,u]);else{const h=Ct(l),p=Bt(l);if(h||p){const b=()=>{if(t.f){const y=h?it(f,l)?f[l]:u[l]:l.value;r?Ge(y)&&Lu(y,a):Ge(y)?y.includes(a)||y.push(a):h?(u[l]=[a],it(f,l)&&(f[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,it(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,en(b,n)):b()}}}const en=A0;function tv(t){return nv(t)}function nv(t,e){const n=Lc();n.__VUE__=!0;const{insert:i,remove:r,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Nn,insertStaticContent:b}=t,y=(S,M,x,P=null,U=null,V=null,J=!1,te=null,fe=!!M.dynamicChildren)=>{if(S===M)return;S&&!or(S,M)&&(P=Y(S),Z(S,U,V,!0),S=null),M.patchFlag===-2&&(fe=!1,M.dynamicChildren=null);const{type:de,ref:Ce,shapeFlag:R}=M;switch(de){case As:m(S,M,x,P);break;case oi:d(S,M,x,P);break;case Ro:S==null&&_(M,x,P,J);break;case gn:F(S,M,x,P,U,V,J,te,fe);break;default:R&1?A(S,M,x,P,U,V,J,te,fe):R&6?G(S,M,x,P,U,V,J,te,fe):(R&64||R&128)&&de.process(S,M,x,P,U,V,J,te,fe,re)}Ce!=null&&U&&Gc(Ce,S&&S.ref,V,M||S,!M)},m=(S,M,x,P)=>{if(S==null)i(M.el=s(M.children),x,P);else{const U=M.el=S.el;M.children!==S.children&&c(U,M.children)}},d=(S,M,x,P)=>{S==null?i(M.el=l(M.children||""),x,P):M.el=S.el},_=(S,M,x,P)=>{[S.el,S.anchor]=b(S.children,M,x,P,S.el,S.anchor)},g=({el:S,anchor:M},x,P)=>{let U;for(;S&&S!==M;)U=h(S),i(S,x,P),S=U;i(M,x,P)},E=({el:S,anchor:M})=>{let x;for(;S&&S!==M;)x=h(S),r(S),S=x;r(M)},A=(S,M,x,P,U,V,J,te,fe)=>{J=J||M.type==="svg",S==null?C(M,x,P,U,V,J,te,fe):T(S,M,U,V,J,te,fe)},C=(S,M,x,P,U,V,J,te)=>{let fe,de;const{type:Ce,props:R,shapeFlag:v,transition:N,dirs:K}=S;if(fe=S.el=o(S.type,V,R&&R.is,R),v&8?u(fe,S.children):v&16&&D(S.children,fe,null,P,U,V&&Ce!=="foreignObject",J,te),K&&Zi(S,null,P,"created"),w(fe,S,S.scopeId,J,P),R){for(const ce in R)ce!=="value"&&!To(ce)&&a(fe,ce,null,R[ce],V,S.children,P,U,Ae);"value"in R&&a(fe,"value",null,R.value),(de=R.onVnodeBeforeMount)&&Un(de,P,S)}K&&Zi(S,null,P,"beforeMount");const Q=(!U||U&&!U.pendingBranch)&&N&&!N.persisted;Q&&N.beforeEnter(fe),i(fe,M,x),((de=R&&R.onVnodeMounted)||Q||K)&&en(()=>{de&&Un(de,P,S),Q&&N.enter(fe),K&&Zi(S,null,P,"mounted")},U)},w=(S,M,x,P,U)=>{if(x&&p(S,x),P)for(let V=0;V<P.length;V++)p(S,P[V]);if(U){let V=U.subTree;if(M===V){const J=U.vnode;w(S,J,J.scopeId,J.slotScopeIds,U.parent)}}},D=(S,M,x,P,U,V,J,te,fe=0)=>{for(let de=fe;de<S.length;de++){const Ce=S[de]=te?Ci(S[de]):Bn(S[de]);y(null,Ce,M,x,P,U,V,J,te)}},T=(S,M,x,P,U,V,J)=>{const te=M.el=S.el;let{patchFlag:fe,dynamicChildren:de,dirs:Ce}=M;fe|=S.patchFlag&16;const R=S.props||dt,v=M.props||dt;let N;x&&Ji(x,!1),(N=v.onVnodeBeforeUpdate)&&Un(N,x,M,S),Ce&&Zi(M,S,x,"beforeUpdate"),x&&Ji(x,!0);const K=U&&M.type!=="foreignObject";if(de?L(S.dynamicChildren,de,te,x,P,K,V):J||ie(S,M,te,null,x,P,K,V,!1),fe>0){if(fe&16)z(te,M,R,v,x,P,U);else if(fe&2&&R.class!==v.class&&a(te,"class",null,v.class,U),fe&4&&a(te,"style",R.style,v.style,U),fe&8){const Q=M.dynamicProps;for(let ce=0;ce<Q.length;ce++){const be=Q[ce],me=R[be],Se=v[be];(Se!==me||be==="value")&&a(te,be,me,Se,U,S.children,x,P,Ae)}}fe&1&&S.children!==M.children&&u(te,M.children)}else!J&&de==null&&z(te,M,R,v,x,P,U);((N=v.onVnodeUpdated)||Ce)&&en(()=>{N&&Un(N,x,M,S),Ce&&Zi(M,S,x,"updated")},P)},L=(S,M,x,P,U,V,J)=>{for(let te=0;te<M.length;te++){const fe=S[te],de=M[te],Ce=fe.el&&(fe.type===gn||!or(fe,de)||fe.shapeFlag&70)?f(fe.el):x;y(fe,de,Ce,null,P,U,V,J,!0)}},z=(S,M,x,P,U,V,J)=>{if(x!==P){if(x!==dt)for(const te in x)!To(te)&&!(te in P)&&a(S,te,x[te],null,J,M.children,U,V,Ae);for(const te in P){if(To(te))continue;const fe=P[te],de=x[te];fe!==de&&te!=="value"&&a(S,te,de,fe,J,M.children,U,V,Ae)}"value"in P&&a(S,"value",x.value,P.value)}},F=(S,M,x,P,U,V,J,te,fe)=>{const de=M.el=S?S.el:s(""),Ce=M.anchor=S?S.anchor:s("");let{patchFlag:R,dynamicChildren:v,slotScopeIds:N}=M;N&&(te=te?te.concat(N):N),S==null?(i(de,x,P),i(Ce,x,P),D(M.children,x,Ce,U,V,J,te,fe)):R>0&&R&64&&v&&S.dynamicChildren?(L(S.dynamicChildren,v,x,U,V,J,te),(M.key!=null||U&&M===U.subTree)&&Eg(S,M,!0)):ie(S,M,x,Ce,U,V,J,te,fe)},G=(S,M,x,P,U,V,J,te,fe)=>{M.slotScopeIds=te,S==null?M.shapeFlag&512?U.ctx.activate(M,x,P,J,fe):O(M,x,P,U,V,J,fe):W(S,M,fe)},O=(S,M,x,P,U,V,J)=>{const te=S.component=hv(S,P,U);if(al(S)&&(te.ctx.renderer=re),pv(te),te.asyncDep){if(U&&U.registerDep(te,q),!S.el){const fe=te.subTree=xt(oi);d(null,fe,M,x)}return}q(te,S,M,x,U,V,J)},W=(S,M,x)=>{const P=M.component=S.component;if(M0(S,M,x))if(P.asyncDep&&!P.asyncResolved){$(P,M,x);return}else P.next=M,_0(P.update),P.update();else M.el=S.el,P.vnode=M},q=(S,M,x,P,U,V,J)=>{const te=()=>{if(S.isMounted){let{next:Ce,bu:R,u:v,parent:N,vnode:K}=S,Q=Ce,ce;Ji(S,!1),Ce?(Ce.el=K.el,$(S,Ce,J)):Ce=K,R&&Il(R),(ce=Ce.props&&Ce.props.onVnodeBeforeUpdate)&&Un(ce,N,Ce,K),Ji(S,!0);const be=Nl(S),me=S.subTree;S.subTree=be,y(me,be,f(me.el),Y(me),S,U,V),Ce.el=be.el,Q===null&&S0(S,be.el),v&&en(v,U),(ce=Ce.props&&Ce.props.onVnodeUpdated)&&en(()=>Un(ce,N,Ce,K),U)}else{let Ce;const{el:R,props:v}=M,{bm:N,m:K,parent:Q}=S,ce=wo(M);if(Ji(S,!1),N&&Il(N),!ce&&(Ce=v&&v.onVnodeBeforeMount)&&Un(Ce,Q,M),Ji(S,!0),R&&ye){const be=()=>{S.subTree=Nl(S),ye(R,S.subTree,S,U,null)};ce?M.type.__asyncLoader().then(()=>!S.isUnmounted&&be()):be()}else{const be=S.subTree=Nl(S);y(null,be,x,P,S,U,V),M.el=be.el}if(K&&en(K,U),!ce&&(Ce=v&&v.onVnodeMounted)){const be=M;en(()=>Un(Ce,Q,be),U)}(M.shapeFlag&256||Q&&wo(Q.vnode)&&Q.vnode.shapeFlag&256)&&S.a&&en(S.a,U),S.isMounted=!0,M=x=P=null}},fe=S.effect=new Du(te,()=>Hu(de),S.scope),de=S.update=()=>fe.run();de.id=S.uid,Ji(S,!0),de()},$=(S,M,x)=>{M.component=S;const P=S.vnode.props;S.vnode=M,S.next=null,Z0(S,M.props,P,x),ev(S,M.children,x),Sa(),$f(),Ta()},ie=(S,M,x,P,U,V,J,te,fe=!1)=>{const de=S&&S.children,Ce=S?S.shapeFlag:0,R=M.children,{patchFlag:v,shapeFlag:N}=M;if(v>0){if(v&128){le(de,R,x,P,U,V,J,te,fe);return}else if(v&256){ee(de,R,x,P,U,V,J,te,fe);return}}N&8?(Ce&16&&Ae(de,U,V),R!==de&&u(x,R)):Ce&16?N&16?le(de,R,x,P,U,V,J,te,fe):Ae(de,U,V,!0):(Ce&8&&u(x,""),N&16&&D(R,x,P,U,V,J,te,fe))},ee=(S,M,x,P,U,V,J,te,fe)=>{S=S||na,M=M||na;const de=S.length,Ce=M.length,R=Math.min(de,Ce);let v;for(v=0;v<R;v++){const N=M[v]=fe?Ci(M[v]):Bn(M[v]);y(S[v],N,x,null,U,V,J,te,fe)}de>Ce?Ae(S,U,V,!0,!1,R):D(M,x,P,U,V,J,te,fe,R)},le=(S,M,x,P,U,V,J,te,fe)=>{let de=0;const Ce=M.length;let R=S.length-1,v=Ce-1;for(;de<=R&&de<=v;){const N=S[de],K=M[de]=fe?Ci(M[de]):Bn(M[de]);if(or(N,K))y(N,K,x,null,U,V,J,te,fe);else break;de++}for(;de<=R&&de<=v;){const N=S[R],K=M[v]=fe?Ci(M[v]):Bn(M[v]);if(or(N,K))y(N,K,x,null,U,V,J,te,fe);else break;R--,v--}if(de>R){if(de<=v){const N=v+1,K=N<Ce?M[N].el:P;for(;de<=v;)y(null,M[de]=fe?Ci(M[de]):Bn(M[de]),x,K,U,V,J,te,fe),de++}}else if(de>v)for(;de<=R;)Z(S[de],U,V,!0),de++;else{const N=de,K=de,Q=new Map;for(de=K;de<=v;de++){const De=M[de]=fe?Ci(M[de]):Bn(M[de]);De.key!=null&&Q.set(De.key,de)}let ce,be=0;const me=v-K+1;let Se=!1,k=0;const xe=new Array(me);for(de=0;de<me;de++)xe[de]=0;for(de=N;de<=R;de++){const De=S[de];if(be>=me){Z(De,U,V,!0);continue}let Le;if(De.key!=null)Le=Q.get(De.key);else for(ce=K;ce<=v;ce++)if(xe[ce-K]===0&&or(De,M[ce])){Le=ce;break}Le===void 0?Z(De,U,V,!0):(xe[Le-K]=de+1,Le>=k?k=Le:Se=!0,y(De,M[Le],x,null,U,V,J,te,fe),be++)}const he=Se?iv(xe):na;for(ce=he.length-1,de=me-1;de>=0;de--){const De=K+de,Le=M[De],Fe=De+1<Ce?M[De+1].el:P;xe[de]===0?y(null,Le,x,Fe,U,V,J,te,fe):Se&&(ce<0||de!==he[ce]?B(Le,x,Fe,2):ce--)}}},B=(S,M,x,P,U=null)=>{const{el:V,type:J,transition:te,children:fe,shapeFlag:de}=S;if(de&6){B(S.component.subTree,M,x,P);return}if(de&128){S.suspense.move(M,x,P);return}if(de&64){J.move(S,M,x,re);return}if(J===gn){i(V,M,x);for(let R=0;R<fe.length;R++)B(fe[R],M,x,P);i(S.anchor,M,x);return}if(J===Ro){g(S,M,x);return}if(P!==2&&de&1&&te)if(P===0)te.beforeEnter(V),i(V,M,x),en(()=>te.enter(V),U);else{const{leave:R,delayLeave:v,afterLeave:N}=te,K=()=>i(V,M,x),Q=()=>{R(V,()=>{K(),N&&N()})};v?v(V,K,Q):Q()}else i(V,M,x)},Z=(S,M,x,P=!1,U=!1)=>{const{type:V,props:J,ref:te,children:fe,dynamicChildren:de,shapeFlag:Ce,patchFlag:R,dirs:v}=S;if(te!=null&&Gc(te,null,x,S,!0),Ce&256){M.ctx.deactivate(S);return}const N=Ce&1&&v,K=!wo(S);let Q;if(K&&(Q=J&&J.onVnodeBeforeUnmount)&&Un(Q,M,S),Ce&6)Me(S.component,x,P);else{if(Ce&128){S.suspense.unmount(x,P);return}N&&Zi(S,null,M,"beforeUnmount"),Ce&64?S.type.remove(S,M,x,U,re,P):de&&(V!==gn||R>0&&R&64)?Ae(de,M,x,!1,!0):(V===gn&&R&384||!U&&Ce&16)&&Ae(fe,M,x),P&&pe(S)}(K&&(Q=J&&J.onVnodeUnmounted)||N)&&en(()=>{Q&&Un(Q,M,S),N&&Zi(S,null,M,"unmounted")},x)},pe=S=>{const{type:M,el:x,anchor:P,transition:U}=S;if(M===gn){ve(x,P);return}if(M===Ro){E(S);return}const V=()=>{r(x),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(S.shapeFlag&1&&U&&!U.persisted){const{leave:J,delayLeave:te}=U,fe=()=>J(x,V);te?te(S.el,V,fe):fe()}else V()},ve=(S,M)=>{let x;for(;S!==M;)x=h(S),r(S),S=x;r(M)},Me=(S,M,x)=>{const{bum:P,scope:U,update:V,subTree:J,um:te}=S;P&&Il(P),U.stop(),V&&(V.active=!1,Z(J,S,M,x)),te&&en(te,M),en(()=>{S.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},Ae=(S,M,x,P=!1,U=!1,V=0)=>{for(let J=V;J<S.length;J++)Z(S[J],M,x,P,U)},Y=S=>S.shapeFlag&6?Y(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),oe=(S,M,x)=>{S==null?M._vnode&&Z(M._vnode,null,null,!0):y(M._vnode||null,S,M,null,null,null,x),$f(),Qm(),M._vnode=S},re={p:y,um:Z,m:B,r:pe,mt:O,mc:D,pc:ie,pbc:L,n:Y,o:t};let ge,ye;return e&&([ge,ye]=e(re)),{render:oe,hydrate:ge,createApp:q0(oe,ge)}}function Ji({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Eg(t,e,n=!1){const i=t.children,r=e.children;if(Ge(i)&&Ge(r))for(let a=0;a<i.length;a++){const o=i[a];let s=r[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[a]=Ci(r[a]),s.el=o.el),n||Eg(o,s)),s.type===As&&(s.el=o.el)}}function iv(t){const e=t.slice(),n=[0];let i,r,a,o,s;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[i]=n[a-1]),n[a]=i)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}const rv=t=>t.__isTeleport,gn=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),oi=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),Ka=[];let Pn=null;function Mr(t=!1){Ka.push(Pn=t?null:[])}function av(){Ka.pop(),Pn=Ka[Ka.length-1]||null}let us=1;function ad(t){us+=t}function bg(t){return t.dynamicChildren=us>0?Pn||na:null,av(),us>0&&Pn&&Pn.push(t),t}function wa(t,e,n,i,r,a){return bg(at(t,e,n,i,r,a,!0))}function sv(t,e,n,i,r){return bg(xt(t,e,n,i,r,!0))}function Vc(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const ll="__vInternal",Mg=({key:t})=>t??null,Lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||Bt(t)||je(t)?{i:fn,r:t,k:e,f:!!n}:t:null);function at(t,e=null,n=null,i=0,r=null,a=t===gn?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mg(e),ref:e&&Lo(e),scopeId:rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return s?($u(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),us>0&&!o&&Pn&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Pn.push(l),l}const xt=ov;function ov(t,e=null,n=null,i=0,r=null,a=!1){if((!t||t===dg)&&(t=oi),Vc(t)){const s=zi(t,e,!0);return n&&$u(s,n),us>0&&!a&&Pn&&(s.shapeFlag&6?Pn[Pn.indexOf(t)]=s:Pn.push(s)),s.patchFlag|=-2,s}if(xv(t)&&(t=t.__vccOpts),e){e=lv(e);let{class:s,style:l}=e;s&&!Ct(s)&&(e.class=el(s)),_t(l)&&(Vm(l)&&!Ge(l)&&(l=wt({},l)),e.style=Qo(l))}const o=Ct(t)?1:T0(t)?128:rv(t)?64:_t(t)?4:je(t)?2:0;return at(t,e,n,i,r,o,a,!0)}function lv(t){return t?Vm(t)||ll in t?wt({},t):t:null}function zi(t,e,n=!1){const{props:i,ref:r,patchFlag:a,children:o}=t,s=e?uv(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Mg(s),ref:e&&e.ref?n&&r?Ge(r)?r.concat(Lo(e)):[r,Lo(e)]:Lo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zi(t.ssContent),ssFallback:t.ssFallback&&zi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Wc(t=" ",e=0){return xt(As,null,t,e)}function cv(t,e){const n=xt(Ro,null,t);return n.staticCount=e,n}function Bn(t){return t==null||typeof t=="boolean"?xt(oi):Ge(t)?xt(gn,null,t.slice()):typeof t=="object"?Ci(t):xt(As,null,String(t))}function Ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zi(t)}function $u(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),$u(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ll in e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:fn},n=32):(e=String(e),i&64?(n=16,e=[Wc(e)]):n=8);t.children=e,t.shapeFlag|=n}function uv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=el([e.class,i.class]));else if(r==="style")e.style=Qo([e.style,i.style]);else if(qo(r)){const a=e[r],o=i[r];o&&a!==o&&!(Ge(a)&&a.includes(o))&&(e[r]=a?[].concat(a,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){yn(t,e,7,[n,i])}const fv=mg();let dv=0;function hv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||fv,a={uid:dv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_g(i,r),emitsOptions:tg(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=y0.bind(null,a),t.ce&&t.ce(a),a}let Ut=null;const fa=()=>Ut||fn;let ju,Lr,sd="__VUE_INSTANCE_SETTERS__";(Lr=Lc()[sd])||(Lr=Lc()[sd]=[]),Lr.push(t=>Ut=t),ju=t=>{Lr.length>1?Lr.forEach(e=>e(t)):Lr[0](t)};const da=t=>{ju(t),t.scope.on()},vr=()=>{Ut&&Ut.scope.off(),ju(null)};function Sg(t){return t.vnode.shapeFlag&4}let fs=!1;function pv(t,e=!1){fs=e;const{props:n,children:i}=t.vnode,r=Sg(t);K0(t,n,r,e),Q0(t,i);const a=r?mv(t,e):void 0;return fs=!1,a}function mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wm(new Proxy(t.ctx,G0));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?_v(t):null;da(t),Sa();const a=Oi(i,t,0,[t.props,r]);if(Ta(),vr(),Am(a)){if(a.then(vr,vr),e)return a.then(o=>{od(t,o,e)}).catch(o=>{nl(o,t,0)});t.asyncDep=a}else od(t,a,e)}else Tg(t,e)}function od(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_t(e)&&(t.setupState=qm(e)),Tg(t,n)}let ld;function Tg(t,e,n){const i=t.type;if(!t.render){if(!e&&ld&&!i.render){const r=i.template||Xu(t).template;if(r){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=i,c=wt(wt({isCustomElement:a,delimiters:s},o),l);i.render=ld(r,c)}}t.render=i.render||Nn}da(t),Sa(),V0(t),Ta(),vr()}function gv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return an(t,"get","$attrs"),e[n]}}))}function _v(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return gv(t)},slots:t.slots,emit:t.emit,expose:e}}function cl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qm(Wm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qa)return qa[n](t)},has(e,n){return n in e||n in qa}}))}function vv(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function xv(t){return je(t)&&"__vccOpts"in t}const st=(t,e)=>p0(t,e,fs);function Ca(t,e,n){const i=arguments.length;return i===2?_t(e)&&!Ge(e)?Vc(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Vc(n)&&(n=[n]),xt(t,e,n))}const yv=Symbol.for("v-scx"),Ev=()=>En(yv),bv="3.3.4",Mv="http://www.w3.org/2000/svg",lr=typeof document<"u"?document:null,cd=lr&&lr.createElement("template"),Sv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?lr.createElementNS(Mv,t):lr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,a){const o=n?n.previousSibling:e.lastChild;if(r&&(r===a||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{cd.innerHTML=i?`<svg>${t}</svg>`:t;const s=cd.content;if(i){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Tv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Av(t,e,n){const i=t.style,r=Ct(n);if(n&&!r){if(e&&!Ct(e))for(const a in e)n[a]==null&&Xc(i,a,"");for(const a in n)Xc(i,a,n[a])}else{const a=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=a)}}const ud=/\s*!important$/;function Xc(t,e,n){if(Ge(n))n.forEach(i=>Xc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=wv(t,e);ud.test(n)?t.setProperty(Ma(i),n.replace(ud,""),"important"):t[i]=n}}const fd=["Webkit","Moz","ms"],Ul={};function wv(t,e){const n=Ul[e];if(n)return n;let i=Wn(e);if(i!=="filter"&&i in t)return Ul[e]=i;i=Jo(i);for(let r=0;r<fd.length;r++){const a=fd[r]+i;if(a in t)return Ul[e]=a}return e}const dd="http://www.w3.org/1999/xlink";function Cv(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n);else{const a=D1(e);n==null||a&&!Rm(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function Rv(t,e,n,i,r,a,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Lv(t,e,n,i){t.addEventListener(e,n,i)}function Pv(t,e,n,i){t.removeEventListener(e,n,i)}function Iv(t,e,n,i,r=null){const a=t._vei||(t._vei={}),o=a[e];if(i&&o)o.value=i;else{const[s,l]=Nv(e);if(i){const c=a[e]=Uv(i,r);Lv(t,s,c,l)}else o&&(Pv(t,s,o,l),a[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function Nv(t){let e;if(hd.test(t)){e={};let i;for(;i=t.match(hd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ma(t.slice(2)),e]}let Fl=0;const Dv=Promise.resolve(),Ov=()=>Fl||(Dv.then(()=>Fl=0),Fl=Date.now());function Uv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;yn(Fv(i,n.value),e,5,[i])};return n.value=t,n.attached=Ov(),n}function Fv(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const pd=/^on[a-z]/,kv=(t,e,n,i,r=!1,a,o,s,l)=>{e==="class"?Tv(t,i,r):e==="style"?Av(t,n,i):qo(e)?Ru(e)||Iv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(t,e,i,r))?Rv(t,e,i,a,o,s,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Cv(t,e,i,r))};function Bv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&pd.test(e)&&je(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||pd.test(e)&&Ct(n)?!1:e in t}const gi="transition",Oa="animation",ul=(t,{slots:e})=>Ca(P0,zv(t),e);ul.displayName="Transition";const Ag={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ul.props=wt({},sg,Ag);const Qi=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},md=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function zv(t){const e={};for(const F in t)F in Ag||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=o,appearToClass:u=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,b=Hv(r),y=b&&b[0],m=b&&b[1],{onBeforeEnter:d,onEnter:_,onEnterCancelled:g,onLeave:E,onLeaveCancelled:A,onBeforeAppear:C=d,onAppear:w=_,onAppearCancelled:D=g}=e,T=(F,G,O)=>{er(F,G?u:s),er(F,G?c:o),O&&O()},L=(F,G)=>{F._isLeaving=!1,er(F,f),er(F,p),er(F,h),G&&G()},z=F=>(G,O)=>{const W=F?w:_,q=()=>T(G,F,O);Qi(W,[G,q]),gd(()=>{er(G,F?l:a),_i(G,F?u:s),md(W)||_d(G,i,y,q)})};return wt(e,{onBeforeEnter(F){Qi(d,[F]),_i(F,a),_i(F,o)},onBeforeAppear(F){Qi(C,[F]),_i(F,l),_i(F,c)},onEnter:z(!1),onAppear:z(!0),onLeave(F,G){F._isLeaving=!0;const O=()=>L(F,G);_i(F,f),Wv(),_i(F,h),gd(()=>{F._isLeaving&&(er(F,f),_i(F,p),md(E)||_d(F,i,m,O))}),Qi(E,[F,O])},onEnterCancelled(F){T(F,!1),Qi(g,[F])},onAppearCancelled(F){T(F,!0),Qi(D,[F])},onLeaveCancelled(F){L(F),Qi(A,[F])}})}function Hv(t){if(t==null)return null;if(_t(t))return[kl(t.enter),kl(t.leave)];{const e=kl(t);return[e,e]}}function kl(t){return C1(t)}function _i(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function er(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function gd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Gv=0;function _d(t,e,n,i){const r=t._endId=++Gv,a=()=>{r===t._endId&&i()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=Vv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),a()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},s+1),t.addEventListener(c,h)}function Vv(t,e){const n=window.getComputedStyle(t),i=b=>(n[b]||"").split(", "),r=i(`${gi}Delay`),a=i(`${gi}Duration`),o=vd(r,a),s=i(`${Oa}Delay`),l=i(`${Oa}Duration`),c=vd(s,l);let u=null,f=0,h=0;e===gi?o>0&&(u=gi,f=o,h=a.length):e===Oa?c>0&&(u=Oa,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?gi:Oa:null,h=u?u===gi?a.length:l.length:0);const p=u===gi&&/\b(transform|all)(,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function vd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>xd(n)+xd(t[i])))}function xd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Wv(){return document.body.offsetHeight}const Xv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ua(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ua(t,!0),i.enter(t)):i.leave(t,()=>{Ua(t,!1)}):Ua(t,e))},beforeUnmount(t,{value:e}){Ua(t,e)}};function Ua(t,e){t.style.display=e?t._vod:"none"}const Yv=wt({patchProp:kv},Sv);let yd;function $v(){return yd||(yd=tv(Yv))}const qu=(...t)=>{const e=$v().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=jv(i);if(!r)return;const a=e._component;!je(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function jv(t){return Ct(t)?document.querySelector(t):t}const wg="/assets/manapuraza-logo-162fb913.svg";/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const qr=typeof window<"u";function qv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ot=Object.assign;function Bl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Dn(r)?r.map(t):t(r)}return n}const Za=()=>{},Dn=Array.isArray,Kv=/\/$/,Zv=t=>t.replace(Kv,"");function zl(t,e,n="/"){let i,r={},a="",o="";const s=e.indexOf("#");let l=e.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(i=e.slice(0,l),a=e.slice(l+1,s>-1?s:e.length),r=t(a)),s>-1&&(i=i||e.slice(0,s),o=e.slice(s,e.length)),i=tx(i??e,n),{fullPath:i+(a&&"?")+a+o,path:i,query:r,hash:o}}function Jv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qv(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ha(e.matched[i],n.matched[r])&&Cg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ha(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ex(t[n],e[n]))return!1;return!0}function ex(t,e){return Dn(t)?bd(t,e):Dn(e)?bd(e,t):t===e}function bd(t,e){return Dn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function tx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let a=n.length-1,o,s;for(o=0;o<i.length;o++)if(s=i[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ds;(function(t){t.pop="pop",t.push="push"})(ds||(ds={}));var Ja;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ja||(Ja={}));function nx(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zv(t)}const ix=/^[^#]+#/;function rx(t,e){return t.replace(ix,"#")+e}function ax(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const fl=()=>({left:window.pageXOffset,top:window.pageYOffset});function sx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ax(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Md(t,e){return(history.state?history.state.position-e:-1)+t}const Yc=new Map;function ox(t,e){Yc.set(t,e)}function lx(t){const e=Yc.get(t);return Yc.delete(t),e}let cx=()=>location.protocol+"//"+location.host;function Rg(t,e){const{pathname:n,search:i,hash:r}=e,a=t.indexOf("#");if(a>-1){let s=r.includes(t.slice(a))?t.slice(a).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Ed(l,"")}return Ed(n,t)+i+r}function ux(t,e,n,i){let r=[],a=[],o=null;const s=({state:h})=>{const p=Rg(t,location),b=n.value,y=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===b){o=null;return}m=y?h.position-y.position:0}else i(p);r.forEach(d=>{d(n.value,b,{delta:m,type:ds.pop,direction:m?m>0?Ja.forward:Ja.back:Ja.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return a.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:fl()}),"")}function f(){for(const h of a)h();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Sd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?fl():null}}function fx(t){const{history:e,location:n}=window,i={value:Rg(t,n)},r={value:e.state};r.value||a(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:cx()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,Sd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});a(l,u,!0),i.value=l}function s(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:fl()});a(u.current,u,!0);const f=ot({},Sd(i.value,l,null),{position:u.position+1},c);a(l,f,!1),i.value=l}return{location:i,state:r,push:s,replace:o}}function dx(t){t=nx(t);const e=fx(t),n=ux(t,e.state,e.location,e.replace);function i(a,o=!0){o||n.pauseListeners(),history.go(a)}const r=ot({location:"",base:t,go:i,createHref:rx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hx(t){return typeof t=="string"||t&&typeof t=="object"}function Lg(t){return typeof t=="string"||typeof t=="symbol"}const vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pg=Symbol("");var Td;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Td||(Td={}));function pa(t,e){return ot(new Error,{type:t,[Pg]:!0},e)}function Yn(t,e){return t instanceof Error&&Pg in t&&(e==null||!!(t.type&e))}const Ad="[^/]+?",px={sensitive:!1,strict:!1,start:!0,end:!0},mx=/[.+*?^${}()[\]/\\]/g;function gx(t,e){const n=ot({},px,e),i=[];let r=n.start?"^":"";const a=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(mx,"\\$&"),p+=40;else if(h.type===1){const{value:b,repeatable:y,optional:m,regexp:d}=h;a.push({name:b,repeatable:y,optional:m});const _=d||Ad;if(_!==Ad){p+=10;try{new RegExp(`(${_})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+E.message)}}let g=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(g=m&&c.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,p+=20,m&&(p+=-8),y&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function s(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",b=a[h-1];f[b.name]=p&&b.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:b,repeatable:y,optional:m}=p,d=b in c?c[b]:"";if(Dn(d)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Dn(d)?d.join("/"):d;if(!_)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=_}}return u||"/"}return{re:o,score:i,keys:a,parse:s,stringify:l}}function _x(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vx(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const a=_x(i[n],r[n]);if(a)return a;n++}if(Math.abs(r.length-i.length)===1){if(wd(i))return 1;if(wd(r))return-1}return r.length-i.length}function wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xx={type:0,value:""},yx=/[a-zA-Z0-9_]/;function Ex(t){if(!t)return[[]];if(t==="/")return[[xx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let a;function o(){a&&r.push(a),a=[]}let s=0,l,c="",u="";function f(){c&&(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<t.length;){if(l=t[s++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:yx.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function bx(t,e,n){const i=gx(Ex(t.path),n),r=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Mx(t,e){const n=[],i=new Map;e=Ld({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function a(u,f,h){const p=!h,b=Sx(u);b.aliasOf=h&&h.record;const y=Ld(e,u),m=[b];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of g)m.push(ot({},b,{components:h?h.record.components:b.components,path:E,aliasOf:h?h.record:b}))}let d,_;for(const g of m){const{path:E}=g;if(f&&E[0]!=="/"){const A=f.record.path,C=A[A.length-1]==="/"?"":"/";g.path=f.record.path+(E&&C+E)}if(d=bx(g,f,y),h?h.alias.push(d):(_=_||d,_!==d&&_.alias.push(d),p&&u.name&&!Rd(d)&&o(u.name)),b.children){const A=b.children;for(let C=0;C<A.length;C++)a(A[C],d,h&&h.children[C])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return _?()=>{o(_)}:Za}function o(u){if(Lg(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function s(){return n}function l(u){let f=0;for(;f<n.length&&vx(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Ig(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Rd(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},b,y;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw pa(1,{location:u});y=h.record.name,p=ot(Cd(f.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&Cd(u.params,h.keys.map(_=>_.name))),b=h.stringify(p)}else if("path"in u)b=u.path,h=n.find(_=>_.re.test(b)),h&&(p=h.parse(b),y=h.record.name);else{if(h=f.name?i.get(f.name):n.find(_=>_.re.test(f.path)),!h)throw pa(1,{location:u,currentLocation:f});y=h.record.name,p=ot({},f.params,u.params),b=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:y,path:b,params:p,matched:m,meta:Ax(m)}}return t.forEach(u=>a(u)),{addRoute:a,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:r}}function Cd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Sx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Tx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Tx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ax(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function Ld(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Ig(t,e){return e.children.some(n=>n===t||Ig(t,n))}const Ng=/#/g,wx=/&/g,Cx=/\//g,Rx=/=/g,Lx=/\?/g,Dg=/\+/g,Px=/%5B/g,Ix=/%5D/g,Og=/%5E/g,Nx=/%60/g,Ug=/%7B/g,Dx=/%7C/g,Fg=/%7D/g,Ox=/%20/g;function Ku(t){return encodeURI(""+t).replace(Dx,"|").replace(Px,"[").replace(Ix,"]")}function Ux(t){return Ku(t).replace(Ug,"{").replace(Fg,"}").replace(Og,"^")}function $c(t){return Ku(t).replace(Dg,"%2B").replace(Ox,"+").replace(Ng,"%23").replace(wx,"%26").replace(Nx,"`").replace(Ug,"{").replace(Fg,"}").replace(Og,"^")}function Fx(t){return $c(t).replace(Rx,"%3D")}function kx(t){return Ku(t).replace(Ng,"%23").replace(Lx,"%3F")}function Bx(t){return t==null?"":kx(t).replace(Cx,"%2F")}function Bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function zx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const a=i[r].replace(Dg," "),o=a.indexOf("="),s=Bo(o<0?a:a.slice(0,o)),l=o<0?null:Bo(a.slice(o+1));if(s in e){let c=e[s];Dn(c)||(c=e[s]=[c]),c.push(l)}else e[s]=l}return e}function Pd(t){let e="";for(let n in t){const i=t[n];if(n=Fx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dn(i)?i.map(a=>a&&$c(a)):[i&&$c(i)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function Hx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Gx=Symbol(""),Id=Symbol(""),dl=Symbol(""),Zu=Symbol(""),jc=Symbol("");function Fa(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ri(t,e,n,i,r){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(pa(4,{from:n,to:e})):f instanceof Error?s(f):hx(f)?s(pa(2,{from:e,to:f})):(a&&i.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>s(f))})}function Hl(t,e,n,i){const r=[];for(const a of t)for(const o in a.components){let s=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Vx(s)){const c=(s.__vccOpts||s)[e];c&&r.push(Ri(c,n,i,a,o))}else{let l=s();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const u=qv(c)?c.default:c;a.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ri(h,n,i,a,o)()}))}}return r}function Vx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nd(t){const e=En(dl),n=En(Zu),i=st(()=>e.resolve(aa(t.to))),r=st(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ha.bind(null,u));if(h>-1)return h;const p=Dd(l[c-2]);return c>1&&Dd(u)===p&&f[f.length-1].path!==p?f.findIndex(ha.bind(null,l[c-2])):h}),a=st(()=>r.value>-1&&Yx(n.params,i.value.params)),o=st(()=>r.value>-1&&r.value===n.matched.length-1&&Cg(n.params,i.value.params));function s(l={}){return Xx(l)?e[aa(t.replace)?"replace":"push"](aa(t.to)).catch(Za):Promise.resolve()}return{route:i,href:st(()=>i.value.href),isActive:a,isExactActive:o,navigate:s}}const Wx=Aa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=Ts(Nd(t)),{options:i}=En(dl),r=st(()=>({[Od(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Od(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:Ca("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),kg=Wx;function Xx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yx(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Dn(r)||r.length!==i.length||i.some((a,o)=>a!==r[o]))return!1}return!0}function Dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Od=(t,e,n)=>t??e??n,$x=Aa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=En(jc),r=st(()=>t.route||i.value),a=En(Id,0),o=st(()=>{let c=aa(a);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),s=st(()=>r.value.matched[o.value]);Co(Id,st(()=>o.value+1)),Co(Gx,s),Co(jc,r);const l=Cn();return si(()=>[l.value,s.value,t.name],([c,u,f],[h,p,b])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ha(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=s.value,h=f&&f.components[u];if(!h)return Ud(n.default,{Component:h,route:c});const p=f.props[u],b=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ca(h,ot({},b,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ud(n.default,{Component:m,route:c})||m}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jx=$x;function qx(t){const e=Mx(t.routes,t),n=t.parseQuery||zx,i=t.stringifyQuery||Pd,r=t.history,a=Fa(),o=Fa(),s=Fa(),l=$m(vi);let c=vi;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bl.bind(null,Y=>""+Y),f=Bl.bind(null,Bx),h=Bl.bind(null,Bo);function p(Y,oe){let re,ge;return Lg(Y)?(re=e.getRecordMatcher(Y),ge=oe):ge=Y,e.addRoute(ge,re)}function b(Y){const oe=e.getRecordMatcher(Y);oe&&e.removeRoute(oe)}function y(){return e.getRoutes().map(Y=>Y.record)}function m(Y){return!!e.getRecordMatcher(Y)}function d(Y,oe){if(oe=ot({},oe||l.value),typeof Y=="string"){const x=zl(n,Y,oe.path),P=e.resolve({path:x.path},oe),U=r.createHref(x.fullPath);return ot(x,P,{params:h(P.params),hash:Bo(x.hash),redirectedFrom:void 0,href:U})}let re;if("path"in Y)re=ot({},Y,{path:zl(n,Y.path,oe.path).path});else{const x=ot({},Y.params);for(const P in x)x[P]==null&&delete x[P];re=ot({},Y,{params:f(x)}),oe.params=f(oe.params)}const ge=e.resolve(re,oe),ye=Y.hash||"";ge.params=u(h(ge.params));const S=Jv(i,ot({},Y,{hash:Ux(ye),path:ge.path})),M=r.createHref(S);return ot({fullPath:S,hash:ye,query:i===Pd?Hx(Y.query):Y.query||{}},ge,{redirectedFrom:void 0,href:M})}function _(Y){return typeof Y=="string"?zl(n,Y,l.value.path):ot({},Y)}function g(Y,oe){if(c!==Y)return pa(8,{from:oe,to:Y})}function E(Y){return w(Y)}function A(Y){return E(ot(_(Y),{replace:!0}))}function C(Y){const oe=Y.matched[Y.matched.length-1];if(oe&&oe.redirect){const{redirect:re}=oe;let ge=typeof re=="function"?re(Y):re;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=_(ge):{path:ge},ge.params={}),ot({query:Y.query,hash:Y.hash,params:"path"in ge?{}:Y.params},ge)}}function w(Y,oe){const re=c=d(Y),ge=l.value,ye=Y.state,S=Y.force,M=Y.replace===!0,x=C(re);if(x)return w(ot(_(x),{state:typeof x=="object"?ot({},ye,x.state):ye,force:S,replace:M}),oe||re);const P=re;P.redirectedFrom=oe;let U;return!S&&Qv(i,ge,re)&&(U=pa(16,{to:P,from:ge}),B(ge,ge,!0,!1)),(U?Promise.resolve(U):L(P,ge)).catch(V=>Yn(V)?Yn(V,2)?V:le(V):ie(V,P,ge)).then(V=>{if(V){if(Yn(V,2))return w(ot({replace:M},_(V.to),{state:typeof V.to=="object"?ot({},ye,V.to.state):ye,force:S}),oe||P)}else V=F(P,ge,!0,M,ye);return z(P,ge,V),V})}function D(Y,oe){const re=g(Y,oe);return re?Promise.reject(re):Promise.resolve()}function T(Y){const oe=ve.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(Y):Y()}function L(Y,oe){let re;const[ge,ye,S]=Kx(Y,oe);re=Hl(ge.reverse(),"beforeRouteLeave",Y,oe);for(const x of ge)x.leaveGuards.forEach(P=>{re.push(Ri(P,Y,oe))});const M=D.bind(null,Y,oe);return re.push(M),Ae(re).then(()=>{re=[];for(const x of a.list())re.push(Ri(x,Y,oe));return re.push(M),Ae(re)}).then(()=>{re=Hl(ye,"beforeRouteUpdate",Y,oe);for(const x of ye)x.updateGuards.forEach(P=>{re.push(Ri(P,Y,oe))});return re.push(M),Ae(re)}).then(()=>{re=[];for(const x of Y.matched)if(x.beforeEnter&&!oe.matched.includes(x))if(Dn(x.beforeEnter))for(const P of x.beforeEnter)re.push(Ri(P,Y,oe));else re.push(Ri(x.beforeEnter,Y,oe));return re.push(M),Ae(re)}).then(()=>(Y.matched.forEach(x=>x.enterCallbacks={}),re=Hl(S,"beforeRouteEnter",Y,oe),re.push(M),Ae(re))).then(()=>{re=[];for(const x of o.list())re.push(Ri(x,Y,oe));return re.push(M),Ae(re)}).catch(x=>Yn(x,8)?x:Promise.reject(x))}function z(Y,oe,re){for(const ge of s.list())T(()=>ge(Y,oe,re))}function F(Y,oe,re,ge,ye){const S=g(Y,oe);if(S)return S;const M=oe===vi,x=qr?history.state:{};re&&(ge||M?r.replace(Y.fullPath,ot({scroll:M&&x&&x.scroll},ye)):r.push(Y.fullPath,ye)),l.value=Y,B(Y,oe,re,M),le()}let G;function O(){G||(G=r.listen((Y,oe,re)=>{if(!Me.listening)return;const ge=d(Y),ye=C(ge);if(ye){w(ot(ye,{replace:!0}),ge).catch(Za);return}c=ge;const S=l.value;qr&&ox(Md(S.fullPath,re.delta),fl()),L(ge,S).catch(M=>Yn(M,12)?M:Yn(M,2)?(w(M.to,ge).then(x=>{Yn(x,20)&&!re.delta&&re.type===ds.pop&&r.go(-1,!1)}).catch(Za),Promise.reject()):(re.delta&&r.go(-re.delta,!1),ie(M,ge,S))).then(M=>{M=M||F(ge,S,!1),M&&(re.delta&&!Yn(M,8)?r.go(-re.delta,!1):re.type===ds.pop&&Yn(M,20)&&r.go(-1,!1)),z(ge,S,M)}).catch(Za)}))}let W=Fa(),q=Fa(),$;function ie(Y,oe,re){le(Y);const ge=q.list();return ge.length?ge.forEach(ye=>ye(Y,oe,re)):console.error(Y),Promise.reject(Y)}function ee(){return $&&l.value!==vi?Promise.resolve():new Promise((Y,oe)=>{W.add([Y,oe])})}function le(Y){return $||($=!Y,O(),W.list().forEach(([oe,re])=>Y?re(Y):oe()),W.reset()),Y}function B(Y,oe,re,ge){const{scrollBehavior:ye}=t;if(!qr||!ye)return Promise.resolve();const S=!re&&lx(Md(Y.fullPath,0))||(ge||!re)&&history.state&&history.state.scroll||null;return Zm().then(()=>ye(Y,oe,S)).then(M=>M&&sx(M)).catch(M=>ie(M,Y,oe))}const Z=Y=>r.go(Y);let pe;const ve=new Set,Me={currentRoute:l,listening:!0,addRoute:p,removeRoute:b,hasRoute:m,getRoutes:y,resolve:d,options:t,push:E,replace:A,go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:q.add,isReady:ee,install(Y){const oe=this;Y.component("RouterLink",kg),Y.component("RouterView",jx),Y.config.globalProperties.$router=oe,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>aa(l)}),qr&&!pe&&l.value===vi&&(pe=!0,E(r.location).catch(ye=>{}));const re={};for(const ye in vi)re[ye]=st(()=>l.value[ye]);Y.provide(dl,oe),Y.provide(Zu,Ts(re)),Y.provide(jc,l);const ge=Y.unmount;ve.add(Y),Y.unmount=function(){ve.delete(Y),ve.size<1&&(c=vi,G&&G(),G=null,l.value=vi,pe=!1,$=!1),ge()}}};function Ae(Y){return Y.reduce((oe,re)=>oe.then(()=>T(re)),Promise.resolve())}return Me}function Kx(t,e){const n=[],i=[],r=[],a=Math.max(e.matched.length,t.matched.length);for(let o=0;o<a;o++){const s=e.matched[o];s&&(t.matched.find(c=>ha(c,s))?i.push(s):n.push(s));const l=t.matched[o];l&&(e.matched.find(c=>ha(c,l))||r.push(l))}return[n,i,r]}function Zx(){return En(dl)}function Jx(){return En(Zu)}const Ra=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Qx={name:"spNav",methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},hl=t=>(ng("data-v-ac3b634e"),t=t(),ig(),t),ey={id:"main"},ty={class:"menu-circle-social"},ny=hl(()=>at("input",{type:"checkbox",href:"#",class:"menu-circle-open",name:"menu-circle-open",id:"menu-open"},null,-1)),iy=hl(()=>at("label",{class:"menu-circle-open-button",for:"menu-open"},[at("svg",{class:"mp icons",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",zoomAndPan:"magnify",viewBox:"0 0 1440 1439.999935",preserveAspectRatio:"xMidYMid meet",version:"1.0"},[at("path",{fill:"#ffffff",d:"M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"}),at("path",{fill:"#dddddd",d:"M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"}),at("path",{fill:"#ffffff",d:"M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"})])],-1)),ry=hl(()=>at("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 35",fill:"#ffffff"},[at("path",{d:"M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z",fill:"#ffffff"})],-1)),ay=hl(()=>at("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"#ffffff"},[at("path",{d:"M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"})],-1));function sy(t,e,n,i,r,a){const o=Wu("router-link");return Mr(),wa("div",ey,[at("nav",ty,[ny,iy,xt(o,{to:"/about",class:"menu-circle-item"},{default:ii(()=>[ry]),_:1}),xt(o,{to:"/works",class:"menu-circle-item"},{default:ii(()=>[ay]),_:1})])])}const oy=Ra(Qx,[["render",sy],["__scopeId","data-v-ac3b634e"]]);const ly={id:"main"},cy={href:"https://manapuraza.com"},uy={class:"app"},fy={__name:"App",setup(t){const e=Jx(),n=Zx(),i=async()=>{await n.isReady()};si(e,()=>{console.log("current route: ",e.name),e.name==="home"?(document.querySelector(".app").style.top="20vh",document.querySelector(".app").style.opacity="0"):(document.querySelector(".app").style.top="0",document.querySelector(".app").style.opacity="1")}),ol(()=>{i()});const r=st(()=>e.path),a=st(()=>r.value==="/"?"route-home":"route-other"),o=st(()=>r.value==="/"?{opacity:"1",transition:"all .4s ease-in-out"}:{opacity:"0",filter:"blur(2rem)",transition:"all .4s ease-in-out"});return(s,l)=>{const c=Wu("router-view");return Mr(),wa("div",ly,[at("a",cy,[at("img",{src:wg,draggable:"false",id:"center-logo",class:el(a.value),style:Qo(o.value)},null,6)]),at("div",uy,[xt(c,null,{default:ii(({Component:u})=>[xt(ul,{name:"slide",mode:"out-in"},{default:ii(()=>[(Mr(),sv(H0(u)))]),_:2},1024)]),_:1})]),xt(oy,{id:"sp-nav"})])}}},dy=Ra(fy,[["__scopeId","data-v-623f17a8"]]),hy="modulepreload",py=function(t){return"/"+t},Fd={},Gl=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=py(a),a in Fd)return;Fd[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":hy,o||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};const my={};function gy(t,e){return Mr(),wa("div")}const _y=Ra(my,[["render",gy],["__scopeId","data-v-08771042"]]);const vy={},xy={class:"container"},yy={class:"error"},Ey={class:"content"},by=cv('<br data-v-d6877ee7><button class="goback" data-v-d6877ee7><a href="https://manapuraza.com" data-v-d6877ee7><span class="circle" aria-hidden="true" data-v-d6877ee7><span class="icon arrow" data-v-d6877ee7></span></span><span class="button-text" data-v-d6877ee7>Back to Home</span></a></button>',2);function My(t,e){return Mr(),wa("div",null,[at("div",xy,[at("div",yy,[at("div",Ey,[at("h1",null,Ao(t.$t("404.title")),1),at("h2",null,Ao(t.$t("404.notfound")),1),at("p",null,Ao(t.$t("404.message")),1),by])])])])}const Sy=Ra(vy,[["render",My],["__scopeId","data-v-d6877ee7"]]),Ju=qx({history:dx("/"),routes:[{path:"/",name:"home",component:_y},{path:"/about",name:"about",component:()=>Gl(()=>import("./AboutView-7650a317.js"),["assets/AboutView-7650a317.js","assets/AboutView-03cffe65.css"])},{path:"/works",name:"works",component:()=>Gl(()=>import("./WorksView-a1ac6633.js"),["assets/WorksView-a1ac6633.js","assets/WorksView-ad588d0e.css"]),meta:{style:{top:"0"}}},{path:"/contact",name:"contact",component:()=>Gl(()=>import("./ContactView-65ad6752.js"),["assets/ContactView-65ad6752.js","assets/ContactView-e3b0c442.css"]),meta:{style:{top:"0"}}},{path:"/:pathMatch(.*)*",name:"not-found",component:Sy}]});const Ty={name:"Navbar",components:{RouterLink:kg},data(){return{currentPath:this.$route.path}},watch:{$route(t,e){this.currentPath=t.path}},methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},Ay=t=>(ng("data-v-841477f4"),t=t(),ig(),t),wy={class:"navbar"},Cy={class:"logo"},Ry={src:wg,alt:"logo"},Ly={class:"default-menu"},Py={id:"lang-switch"},Iy={class:"toggle-switch"},Ny=Ay(()=>at("label",{class:"toggle-label",for:"toggle"},null,-1));function Dy(t,e,n,i,r,a){const o=Wu("RouterLink");return Mr(),wa("div",wy,[at("div",Cy,[xt(o,{to:"/"},{default:ii(()=>[xt(ul,{name:"slide",mode:"out-in"},{default:ii(()=>[C0(at("img",Ry,null,512),[[Xv,r.currentPath!=="/"]])]),_:1})]),_:1})]),at("nav",Ly,[xt(o,{to:"/about",class:"rlink"},{default:ii(()=>[Wc("About")]),_:1}),xt(o,{to:"/works",class:"rlink"},{default:ii(()=>[Wc("Works")]),_:1})]),at("div",Py,[at("span",null,Ao(t.$t("navbar.toggle")),1),at("div",Iy,[at("input",{class:"toggle-input",id:"toggle",type:"checkbox",onClick:e[0]||(e[0]=(...s)=>a.toggleLanguage&&a.toggleLanguage(...s))}),Ny])])])}const Oy=Ra(Ty,[["render",Dy],["__scopeId","data-v-841477f4"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qu="158",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uy=0,kd=1,Fy=2,Bg=1,ky=2,Qn=3,Hi=0,nn=1,ti=2,Ui=0,oa=1,Bd=2,zd=3,Hd=4,By=5,cr=100,zy=101,Hy=102,Gd=103,Vd=104,Gy=200,Vy=201,Wy=202,Xy=203,qc=204,Kc=205,Yy=206,$y=207,jy=208,qy=209,Ky=210,Zy=211,Jy=212,Qy=213,eE=214,tE=0,nE=1,iE=2,zo=3,rE=4,aE=5,sE=6,oE=7,ef=0,lE=1,cE=2,Fi=0,uE=1,fE=2,dE=3,hE=4,pE=5,zg=300,ma=301,ga=302,Zc=303,Jc=304,pl=306,Qc=1e3,Rn=1001,eu=1002,Jt=1003,Wd=1004,Vl=1005,_n=1006,mE=1007,hs=1008,ki=1009,gE=1010,_E=1011,tf=1012,Hg=1013,Pi=1014,Ii=1015,ps=1016,Gg=1017,Vg=1018,xr=1020,vE=1021,Ln=1023,xE=1024,yE=1025,yr=1026,_a=1027,EE=1028,Wg=1029,bE=1030,Xg=1031,Yg=1033,Wl=33776,Xl=33777,Yl=33778,$l=33779,Xd=35840,Yd=35841,$d=35842,jd=35843,ME=36196,qd=37492,Kd=37496,Zd=37808,Jd=37809,Qd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,ah=37816,sh=37817,oh=37818,lh=37819,ch=37820,uh=37821,jl=36492,fh=36494,dh=36495,SE=36283,hh=36284,ph=36285,mh=36286,$g=3e3,Er=3001,TE=3200,AE=3201,jg=0,wE=1,xn="",kt="srgb",ci="srgb-linear",nf="display-p3",ml="display-p3-linear",Ho="linear",ft="srgb",Go="rec709",Vo="p3",Nr=7680,gh=519,CE=512,RE=513,LE=514,PE=515,IE=516,NE=517,DE=518,OE=519,_h=35044,Hs=35048,vh="300 es",tu=1035,ri=2e3,Wo=2001;class Rr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const Qa=Math.PI/180,ms=180/Math.PI;function La(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function rf(t,e){return(t%e+e)%e}function UE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function FE(t,e,n){return t!==e?(n-t)/(e-t):0}function es(t,e,n){return(1-n)*t+n*e}function kE(t,e,n,i){return es(t,e,1-Math.exp(-n*i))}function BE(t,e=1){return e-Math.abs(rf(t,e*2)-e)}function zE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function HE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function GE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function VE(t,e){return t+Math.random()*(e-t)}function WE(t){return t*(.5-Math.random())}function XE(t){t!==void 0&&(xh=t);let e=xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YE(t){return t*Qa}function $E(t){return t*ms}function nu(t){return(t&t-1)===0&&t!==0}function jE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Xo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function qE(t,e,n,i,r){const a=Math.cos,o=Math.sin,s=a(n/2),l=o(n/2),c=a((e+i)/2),u=o((e+i)/2),f=a((e-i)/2),h=o((e-i)/2),p=a((i-e)/2),b=o((i-e)/2);switch(r){case"XYX":t.set(s*u,l*f,l*h,s*c);break;case"YZY":t.set(l*h,s*u,l*f,s*c);break;case"ZXZ":t.set(l*f,l*h,s*u,s*c);break;case"XZX":t.set(s*u,l*b,l*p,s*c);break;case"YXY":t.set(l*p,s*u,l*b,s*c);break;case"ZYZ":t.set(l*b,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const KE={DEG2RAD:Qa,RAD2DEG:ms,generateUUID:La,clamp:Vt,euclideanModulo:rf,mapLinear:UE,inverseLerp:FE,lerp:es,damp:kE,pingpong:BE,smoothstep:zE,smootherstep:HE,randInt:GE,randFloat:VE,randFloatSpread:WE,seededRandom:XE,degToRad:YE,radToDeg:$E,isPowerOfTwo:nu,ceilPowerOfTwo:jE,floorPowerOfTwo:Xo,setQuaternionFromProperEuler:qE,normalize:qt,denormalize:Kr};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,a,o,s,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],b=i[8],y=r[0],m=r[3],d=r[6],_=r[1],g=r[4],E=r[7],A=r[2],C=r[5],w=r[8];return a[0]=o*y+s*_+l*A,a[3]=o*m+s*g+l*C,a[6]=o*d+s*E+l*w,a[1]=c*y+u*_+f*A,a[4]=c*m+u*g+f*C,a[7]=c*d+u*E+f*w,a[2]=h*y+p*_+b*A,a[5]=h*m+p*g+b*C,a[8]=h*d+p*E+b*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,h=s*l-u*a,p=c*a-o*l,b=n*f+i*h+r*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(s*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*a-s*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(ql.makeScale(e,n)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,n){return this.premultiply(ql.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new Ze;function qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZE(){const t=gs("canvas");return t.style.display="block",t}const yh={};function ts(t){t in yh||(yh[t]=!0,console.warn(t))}const Eh=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[ci]:{transfer:Ho,primaries:Go,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ft,primaries:Go,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ml]:{transfer:Ho,primaries:Vo,toReference:t=>t.applyMatrix3(bh),fromReference:t=>t.applyMatrix3(Eh)},[nf]:{transfer:ft,primaries:Vo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(bh),fromReference:t=>t.applyMatrix3(Eh).convertLinearToSRGB()}},JE=new Set([ci,ml]),ct={enabled:!0,_workingColorSpace:ci,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!JE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Gs[e].toReference,r=Gs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Gs[t].primaries},getTransfer:function(t){return t===xn?Ho:Gs[t].transfer}};function la(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class Kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=gs("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=la(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(la(n[i]/255)*255):n[i]=la(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QE=0;class Zg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=La(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Zl(r[o].image)):a.push(Zl(r[o]))}else a=Zl(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Zl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Kg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eb=0;class rn extends Rr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Rn,r=Rn,a=_n,o=hs,s=Ln,l=ki,c=rn.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=La(),this.name="",this.source=new Zg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Er?kt:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Er:$g}set encoding(e){ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Er?kt:xn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=zg;rn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],b=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(b-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(b+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(p+1)/2,A=(d+1)/2,C=(u+h)/4,w=(f+y)/4,D=(b+m)/4;return g>E&&g>A?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=C/i,a=w/i):E>A?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=C/r,a=D/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=w/a,r=D/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-b)*(m-b)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-b)/_,this.y=(f-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tb extends Rr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Er?kt:xn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Zg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends tb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jg extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nb extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=a[o+0],p=a[o+1],b=a[o+2],y=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=b,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==b){let m=1-s;const d=l*h+c*p+u*b+f*y,_=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const A=Math.sqrt(g),C=Math.atan2(A,d*_);m=Math.sin(m*C)/A,s=Math.sin(s*C)/A}const E=s*_;if(l=l*m+h*E,c=c*m+p*E,u=u*m+b*E,f=f*m+y*E,m===1-s){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],h=a[o+1],p=a[o+2],b=a[o+3];return e[n]=s*b+u*f+l*p-c*h,e[n+1]=l*b+u*h+c*f-s*p,e[n+2]=c*b+u*p+s*h-l*f,e[n+3]=u*b-s*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),h=l(i/2),p=l(r/2),b=l(a/2);switch(o){case"XYZ":this._x=h*u*f+c*p*b,this._y=c*p*f-h*u*b,this._z=c*u*b+h*p*f,this._w=c*u*f-h*p*b;break;case"YXZ":this._x=h*u*f+c*p*b,this._y=c*p*f-h*u*b,this._z=c*u*b-h*p*f,this._w=c*u*f+h*p*b;break;case"ZXY":this._x=h*u*f-c*p*b,this._y=c*p*f+h*u*b,this._z=c*u*b+h*p*f,this._w=c*u*f-h*p*b;break;case"ZYX":this._x=h*u*f-c*p*b,this._y=c*p*f+h*u*b,this._z=c*u*b-h*p*f,this._w=c*u*f+h*p*b;break;case"YZX":this._x=h*u*f+c*p*b,this._y=c*p*f+h*u*b,this._z=c*u*b-h*p*f,this._w=c*u*f-h*p*b;break;case"XZY":this._x=h*u*f-c*p*b,this._y=c*p*f-h*u*b,this._z=c*u*b+h*p*f,this._w=c*u*f+h*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*n-a*r),f=2*(a*i-o*n);return this.x=n+l*c+o*f-s*u,this.y=i+l*u+s*c-a*f,this.z=r+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new X,Mh=new Tr;class ws{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(a,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Ws.subVectors(this.max,ka),Or.subVectors(e.a,ka),Ur.subVectors(e.b,ka),Fr.subVectors(e.c,ka),xi.subVectors(Ur,Or),yi.subVectors(Fr,Ur),tr.subVectors(Or,Fr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-tr.z,tr.y,xi.z,0,-xi.x,yi.z,0,-yi.x,tr.z,0,-tr.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-tr.y,tr.x,0];return!Ql(n,Or,Ur,Fr,Ws)||(n=[1,0,0,0,1,0,0,0,1],!Ql(n,Or,Ur,Fr,Ws))?!1:(Xs.crossVectors(xi,yi),n=[Xs.x,Xs.y,Xs.z],Ql(n,Or,Ur,Fr,Ws))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new X,new X,new X,new X,new X,new X,new X,new X],bn=new X,Vs=new ws,Or=new X,Ur=new X,Fr=new X,xi=new X,yi=new X,tr=new X,ka=new X,Ws=new X,Xs=new X,nr=new X;function Ql(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){nr.fromArray(t,a);const s=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const ib=new ws,Ba=new X,ec=new X;class gl{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ib.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const n=Ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(ec)),this.expandByPoint(Ba.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new X,tc=new X,Ys=new X,Ei=new X,nc=new X,$s=new X,ic=new X;class af{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tc.copy(e).add(n).multiplyScalar(.5),Ys.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(tc);const a=e.distanceTo(n)*.5,o=-this.direction.dot(Ys),s=Ei.dot(this.direction),l=-Ei.dot(Ys),c=Ei.lengthSq(),u=Math.abs(1-o*o);let f,h,p,b;if(u>0)if(f=o*l-s,h=o*s-l,b=a*u,f>=0)if(h>=-b)if(h<=b){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-b?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c):h<=b?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tc).addScaledVector(Ys,h),p}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,a){nc.subVectors(n,e),$s.subVectors(i,e),ic.crossVectors(nc,$s);let o=this.direction.dot(ic),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=s*this.direction.dot($s.crossVectors(Ei,$s));if(l<0)return null;const c=s*this.direction.dot(nc.cross(Ei));if(c<0||l+c>o)return null;const u=-s*Ei.dot(ic);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,a,o,s,l,c,u,f,h,p,b,y,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,f,h,p,b,y,m)}set(e,n,i,r,a,o,s,l,c,u,f,h,p,b,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=b,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),a=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*u,p=o*f,b=s*u,y=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+b*c,n[5]=h-y*c,n[9]=-s*l,n[2]=y-h*c,n[6]=b+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,b=c*u,y=c*f;n[0]=h+y*s,n[4]=b*s-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-s,n[2]=p*s-b,n[6]=y+h*s,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,b=c*u,y=c*f;n[0]=h-y*s,n[4]=-o*f,n[8]=b+p*s,n[1]=p+b*s,n[5]=o*u,n[9]=y-h*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,b=s*u,y=s*f;n[0]=l*u,n[4]=b*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-b,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,b=s*l,y=s*c;n[0]=l*u,n[4]=y-h*f,n[8]=b*f+p,n[1]=f,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+b,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,b=s*l,y=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=p*f-b,n[2]=b*f-p,n[6]=s*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,ab)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),bi.crossVectors(i,ln),bi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),bi.crossVectors(i,ln)),bi.normalize(),js.crossVectors(ln,bi),r[0]=bi.x,r[4]=js.x,r[8]=ln.x,r[1]=bi.y,r[5]=js.y,r[9]=ln.y,r[2]=bi.z,r[6]=js.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],b=i[2],y=i[6],m=i[10],d=i[14],_=i[3],g=i[7],E=i[11],A=i[15],C=r[0],w=r[4],D=r[8],T=r[12],L=r[1],z=r[5],F=r[9],G=r[13],O=r[2],W=r[6],q=r[10],$=r[14],ie=r[3],ee=r[7],le=r[11],B=r[15];return a[0]=o*C+s*L+l*O+c*ie,a[4]=o*w+s*z+l*W+c*ee,a[8]=o*D+s*F+l*q+c*le,a[12]=o*T+s*G+l*$+c*B,a[1]=u*C+f*L+h*O+p*ie,a[5]=u*w+f*z+h*W+p*ee,a[9]=u*D+f*F+h*q+p*le,a[13]=u*T+f*G+h*$+p*B,a[2]=b*C+y*L+m*O+d*ie,a[6]=b*w+y*z+m*W+d*ee,a[10]=b*D+y*F+m*q+d*le,a[14]=b*T+y*G+m*$+d*B,a[3]=_*C+g*L+E*O+A*ie,a[7]=_*w+g*z+E*W+A*ee,a[11]=_*D+g*F+E*q+A*le,a[15]=_*T+g*G+E*$+A*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],b=e[3],y=e[7],m=e[11],d=e[15];return b*(+a*l*f-r*c*f-a*s*h+i*c*h+r*s*p-i*l*p)+y*(+n*l*p-n*c*h+a*o*h-r*o*p+r*c*u-a*l*u)+m*(+n*c*f-n*s*p-a*o*f+i*o*p+a*s*u-i*c*u)+d*(-r*s*u-n*l*f+n*s*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],b=e[12],y=e[13],m=e[14],d=e[15],_=f*m*c-y*h*c+y*l*p-s*m*p-f*l*d+s*h*d,g=b*h*c-u*m*c-b*l*p+o*m*p+u*l*d-o*h*d,E=u*y*c-b*f*c+b*s*p-o*y*p-u*s*d+o*f*d,A=b*f*l-u*y*l-b*s*h+o*y*h+u*s*m-o*f*m,C=n*_+i*g+r*E+a*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(y*h*a-f*m*a-y*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(s*m*a-y*l*a+y*r*c-i*m*c-s*r*d+i*l*d)*w,e[3]=(f*l*a-s*h*a-f*r*c+i*h*c+s*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*a-b*h*a+b*r*p-n*m*p-u*r*d+n*h*d)*w,e[6]=(b*l*a-o*m*a-b*r*c+n*m*c+o*r*d-n*l*d)*w,e[7]=(o*h*a-u*l*a+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=E*w,e[9]=(b*f*a-u*y*a-b*i*p+n*y*p+u*i*d-n*f*d)*w,e[10]=(o*y*a-b*s*a+b*i*c-n*y*c-o*i*d+n*s*d)*w,e[11]=(u*s*a-o*f*a-u*i*c+n*f*c+o*i*p-n*s*p)*w,e[12]=A*w,e[13]=(u*y*r-b*f*r+b*i*h-n*y*h-u*i*m+n*f*m)*w,e[14]=(b*s*r-o*y*r-b*i*l+n*y*l+o*i*m-n*s*m)*w,e[15]=(o*f*r-u*s*r+u*i*l-n*f*l-o*i*h+n*s*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,f=s+s,h=a*c,p=a*u,b=a*f,y=o*u,m=o*f,d=s*f,_=l*c,g=l*u,E=l*f,A=i.x,C=i.y,w=i.z;return r[0]=(1-(y+d))*A,r[1]=(p+E)*A,r[2]=(b-g)*A,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(h+d))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(b+g)*w,r[9]=(m-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),s=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/a,u=1/o,f=1/s;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=ri){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,b;if(s===ri)p=-(o+a)/(o-a),b=-2*o*a/(o-a);else if(s===Wo)p=-o/(o-a),b=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=ri){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-a),h=(n+e)*c,p=(i+r)*u;let b,y;if(s===ri)b=(o+a)*f,y=-2*f;else if(s===Wo)b=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new X,Mn=new At,rb=new X(0,0,0),ab=new X(1,1,1),bi=new X,js=new X,ln=new X,Sh=new At,Th=new Tr;class _l{constructor(e=0,n=0,i=0,r=_l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_l.DEFAULT_ORDER="XYZ";let sf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sb=0;const Ah=new X,Br=new Tr,qn=new At,qs=new X,za=new X,ob=new X,lb=new Tr,wh=new X(1,0,0),Ch=new X(0,1,0),Rh=new X(0,0,1),cb={type:"added"},ub={type:"removed"};class Xt extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new X,n=new _l,i=new Tr,r=new X(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,n){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qs.copy(e):qs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(za,qs,this.up):qn.lookAt(qs,za,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(qn),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ub)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),b=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),b.length>0&&(i.nodes=b)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new X(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new X,Kn=new X,rc=new X,Zn=new X,zr=new X,Hr=new X,Lh=new X,ac=new X,sc=new X,oc=new X;let Ks=!1;class An{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Sn.subVectors(e,n),r.cross(Sn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Sn.subVectors(r,n),Kn.subVectors(i,n),rc.subVectors(e,n);const o=Sn.dot(Sn),s=Sn.dot(Kn),l=Sn.dot(rc),c=Kn.dot(Kn),u=Kn.dot(rc),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const h=1/f,p=(c*l-s*u)*h,b=(o*u-s*l)*h;return a.set(1-p-b,b,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,a,o,s,l){return Ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ks=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Zn),l.setScalar(0),l.addScaledVector(a,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(s,Zn.z),l}static isFrontFacing(e,n,i,r){return Sn.subVectors(i,n),Kn.subVectors(e,n),Sn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ks=!0),An.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;zr.subVectors(r,i),Hr.subVectors(a,i),ac.subVectors(e,i);const l=zr.dot(ac),c=Hr.dot(ac);if(l<=0&&c<=0)return n.copy(i);sc.subVectors(e,r);const u=zr.dot(sc),f=Hr.dot(sc);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(zr,o);oc.subVectors(e,a);const p=zr.dot(oc),b=Hr.dot(oc);if(b>=0&&p<=b)return n.copy(a);const y=p*c-l*b;if(y<=0&&c>=0&&b<=0)return s=c/(c-b),n.copy(i).addScaledVector(Hr,s);const m=u*b-p*f;if(m<=0&&f-u>=0&&p-b>=0)return Lh.subVectors(a,r),s=(f-u)/(f-u+(p-b)),n.copy(r).addScaledVector(Lh,s);const d=1/(m+y+h);return o=y*d,s=h*d,n.copy(i).addScaledVector(zr,o).addScaledVector(Hr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=rf(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=lc(o,a,e+1/3),this.g=lc(o,a,e),this.b=lc(o,a,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=Qg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Kl(e.r),this.g=Kl(e.g),this.b=Kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ct.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Vt(Gt.r*255,0,255))*65536+Math.round(Vt(Gt.g*255,0,255))*256+Math.round(Vt(Gt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,a=Gt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=kt){ct.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(Zs);const i=es(Mi.h,Zs.h,n),r=es(Mi.s,Zs.s,n),a=es(Mi.l,Zs.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Qe;Qe.NAMES=Qg;let fb=0;class Cs extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=La(),this.name="",this.type="Material",this.blending=oa,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Kc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class e_ extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new X,Js=new Xe;class tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_h,this.updateRange={offset:0,count:-1},this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Js.fromBufferAttribute(this,n),Js.applyMatrix3(e),this.setXY(n,Js.x,Js.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kr(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kr(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kr(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class t_ extends tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class n_ extends tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class br extends tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let db=0;const mn=new At,cc=new Xt,Gr=new X,cn=new ws,Ha=new ws,Ot=new X;class Yi extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?n_:t_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new br(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];cn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Ha.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(cn.min,Ha.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,Ha.max),cn.expandByPoint(Ot)):(cn.expandByPoint(Ha.min),cn.expandByPoint(Ha.max))}cn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Ot.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Ot.fromBufferAttribute(s,c),l&&(Gr.fromBufferAttribute(e,c),Ot.add(Gr)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new X,u[L]=new X;const f=new X,h=new X,p=new X,b=new Xe,y=new Xe,m=new Xe,d=new X,_=new X;function g(L,z,F){f.fromArray(r,L*3),h.fromArray(r,z*3),p.fromArray(r,F*3),b.fromArray(o,L*2),y.fromArray(o,z*2),m.fromArray(o,F*2),h.sub(f),p.sub(f),y.sub(b),m.sub(b);const G=1/(y.x*m.y-m.x*y.y);isFinite(G)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(G),_.copy(p).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(G),c[L].add(d),c[z].add(d),c[F].add(d),u[L].add(_),u[z].add(_),u[F].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let L=0,z=E.length;L<z;++L){const F=E[L],G=F.start,O=F.count;for(let W=G,q=G+O;W<q;W+=3)g(i[W+0],i[W+1],i[W+2])}const A=new X,C=new X,w=new X,D=new X;function T(L){w.fromArray(a,L*3),D.copy(w);const z=c[L];A.copy(z),A.sub(w.multiplyScalar(w.dot(z))).normalize(),C.crossVectors(D,z);const G=C.dot(u[L])<0?-1:1;l[L*4]=A.x,l[L*4+1]=A.y,l[L*4+2]=A.z,l[L*4+3]=G}for(let L=0,z=E.length;L<z;++L){const F=E[L],G=F.start,O=F.count;for(let W=G,q=G+O;W<q;W+=3)T(i[W+0]),T(i[W+1]),T(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,a=new X,o=new X,s=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const b=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,b),a.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,b),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(b,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let p=0,b=0;for(let y=0,m=l.length;y<m;y++){s.isInterleavedBufferAttribute?p=l[y]*s.data.stride+s.offset:p=l[y]*u;for(let d=0;d<u;d++)h[b++]=c[p++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new At,ir=new af,Qs=new gl,Ih=new X,Vr=new X,Wr=new X,Xr=new X,uc=new X,eo=new X,to=new Xe,no=new Xe,io=new Xe,Nh=new X,Dh=new X,Oh=new X,ro=new X,ao=new X;class ai extends Xt{constructor(e=new Yi,n=new e_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){eo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(uc.fromBufferAttribute(f,e),o?eo.addScaledVector(uc,u):eo.addScaledVector(uc.sub(n),u))}n.add(eo)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(a),ir.copy(e.ray).recast(e.near),!(Qs.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Qs,Ih)===null||ir.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Ph.copy(a).invert(),ir.copy(e.ray).applyMatrix4(Ph),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let b=0,y=h.length;b<y;b++){const m=h[b],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,A=g;E<A;E+=3){const C=s.getX(E),w=s.getX(E+1),D=s.getX(E+2);r=so(this,d,e,i,c,u,f,C,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const b=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let m=b,d=y;m<d;m+=3){const _=s.getX(m),g=s.getX(m+1),E=s.getX(m+2);r=so(this,o,e,i,c,u,f,_,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let b=0,y=h.length;b<y;b++){const m=h[b],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,A=g;E<A;E+=3){const C=E,w=E+1,D=E+2;r=so(this,d,e,i,c,u,f,C,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const b=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=b,d=y;m<d;m+=3){const _=m,g=m+1,E=m+2;r=so(this,o,e,i,c,u,f,_,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hb(t,e,n,i,r,a,o,s){let l;if(e.side===nn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Hi,s),l===null)return null;ao.copy(s),ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ao);return c<n.near||c>n.far?null:{distance:c,point:ao.clone(),object:t}}function so(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,Vr),t.getVertexPosition(l,Wr),t.getVertexPosition(c,Xr);const u=hb(t,e,n,i,Vr,Wr,Xr,ro);if(u){r&&(to.fromBufferAttribute(r,s),no.fromBufferAttribute(r,l),io.fromBufferAttribute(r,c),u.uv=An.getInterpolation(ro,Vr,Wr,Xr,to,no,io,new Xe)),a&&(to.fromBufferAttribute(a,s),no.fromBufferAttribute(a,l),io.fromBufferAttribute(a,c),u.uv1=An.getInterpolation(ro,Vr,Wr,Xr,to,no,io,new Xe),u.uv2=u.uv1),o&&(Nh.fromBufferAttribute(o,s),Dh.fromBufferAttribute(o,l),Oh.fromBufferAttribute(o,c),u.normal=An.getInterpolation(ro,Vr,Wr,Xr,Nh,Dh,Oh,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new X,materialIndex:0};An.getNormal(Vr,Wr,Xr,f.normal),u.face=f}return u}class Rs extends Yi{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;b("z","y","x",-1,-1,i,n,e,o,a,0),b("z","y","x",1,-1,i,n,-e,o,a,1),b("x","z","y",1,1,e,i,n,r,o,2),b("x","z","y",1,-1,e,i,-n,r,o,3),b("x","y","z",1,-1,e,n,i,r,a,4),b("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new br(c,3)),this.setAttribute("normal",new br(u,3)),this.setAttribute("uv",new br(f,2));function b(y,m,d,_,g,E,A,C,w,D,T){const L=E/w,z=A/D,F=E/2,G=A/2,O=C/2,W=w+1,q=D+1;let $=0,ie=0;const ee=new X;for(let le=0;le<q;le++){const B=le*z-G;for(let Z=0;Z<W;Z++){const pe=Z*L-F;ee[y]=pe*_,ee[m]=B*g,ee[d]=O,c.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[d]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Z/w),f.push(1-le/D),$+=1}}for(let le=0;le<D;le++)for(let B=0;B<w;B++){const Z=h+B+W*le,pe=h+B+W*(le+1),ve=h+(B+1)+W*(le+1),Me=h+(B+1)+W*le;l.push(Z,pe,Me),l.push(pe,ve,Me),ie+=6}s.addGroup(p,ie,T),p+=ie,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function va(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=va(t[n]);for(const r in i)e[r]=i[r]}return e}function pb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function i_(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const mb={clone:va,merge:Kt};var gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class r_ extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends r_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class vb extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Yr,$r,e,n);r.layers=this.layers,this.add(r);const a=new un(Yr,$r,e,n);a.layers=this.layers,this.add(a);const o=new un(Yr,$r,e,n);o.layers=this.layers,this.add(o);const s=new un(Yr,$r,e,n);s.layers=this.layers,this.add(s);const l=new un(Yr,$r,e,n);l.layers=this.layers,this.add(l);const c=new un(Yr,$r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class a_ extends rn{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ma,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xb extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Er?kt:xn),this.texture=new a_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rs(5,5,5),a=new Ar({name:"CubemapFromEquirect",uniforms:va(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ui});a.uniforms.tEquirect.value=n;const o=new ai(r,a),s=n.minFilter;return n.minFilter===hs&&(n.minFilter=_n),new vb(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const fc=new X,yb=new X,Eb=new Ze;class Li{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fc.subVectors(i,n).cross(yb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Eb.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new gl,oo=new X;class of{constructor(e=new Li,n=new Li,i=new Li,r=new Li,a=new Li,o=new Li){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],b=r[9],y=r[10],m=r[11],d=r[12],_=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-a,h-c,m-p,E-d).normalize(),i[1].setComponents(l+a,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+b,E+_).normalize(),i[3].setComponents(l-o,h-u,m-b,E-_).normalize(),i[4].setComponents(l-s,h-f,m-y,E-g).normalize(),n===ri)i[5].setComponents(l+s,h+f,m+y,E+g).normalize();else if(n===Wo)i[5].setComponents(s,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function s_(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function bb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,h),c.onUploadCallback();let b;if(f instanceof Float32Array)b=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)b=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)b=t.SHORT;else if(f instanceof Uint32Array)b=t.UNSIGNED_INT;else if(f instanceof Int32Array)b=t.INT;else if(f instanceof Int8Array)b=t.BYTE;else if(f instanceof Uint8Array)b=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)b=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:b,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const h=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class lf extends Yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,h=n/l,p=[],b=[],y=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let g=0;g<c;g++){const E=g*f-a;b.push(E,-_,0),y.push(0,0,1),m.push(g/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<s;_++){const g=_+c*d,E=_+c*(d+1),A=_+1+c*(d+1),C=_+1+c*d;p.push(g,E,C),p.push(E,A,C)}this.setIndex(p),this.setAttribute("position",new br(b,3)),this.setAttribute("normal",new br(y,3)),this.setAttribute("uv",new br(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sb=`#ifdef USE_ALPHAHASH
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
#endif`,Tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rb=`#ifdef USE_AOMAP
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
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Ob=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wb=`#define PI 3.141592653589793
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`
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
}`,Qb=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,cM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,EM=`
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PM=`#if defined( USE_POINTS_UV )
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
#endif`,IM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
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
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aS=`float getShadowMask() {
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
}`,sS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cS=`#ifdef USE_SKINNING
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
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
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
#endif`,mS=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
}`,CS=`#define DISTANCE
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
}`,RS=`#define DISTANCE
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
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
}`,NS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,OS=`uniform vec3 diffuse;
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
}`,US=`#define LAMBERT
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
}`,FS=`#define LAMBERT
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
}`,kS=`#define MATCAP
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
}`,BS=`#define MATCAP
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
}`,zS=`#define NORMAL
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
}`,HS=`#define NORMAL
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
}`,GS=`#define PHONG
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
}`,VS=`#define PHONG
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
}`,WS=`#define STANDARD
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
}`,XS=`#define STANDARD
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
}`,YS=`#define TOON
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
}`,$S=`#define TOON
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
}`,jS=`uniform float size;
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
}`,qS=`uniform vec3 diffuse;
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
}`,KS=`#include <common>
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
}`,ZS=`uniform vec3 color;
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
}`,JS=`uniform float rotation;
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
}`,QS=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Mb,alphahash_pars_fragment:Sb,alphamap_fragment:Tb,alphamap_pars_fragment:Ab,alphatest_fragment:wb,alphatest_pars_fragment:Cb,aomap_fragment:Rb,aomap_pars_fragment:Lb,begin_vertex:Pb,beginnormal_vertex:Ib,bsdfs:Nb,iridescence_fragment:Db,bumpmap_pars_fragment:Ob,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Fb,clipping_planes_pars_vertex:kb,clipping_planes_vertex:Bb,color_fragment:zb,color_pars_fragment:Hb,color_pars_vertex:Gb,color_vertex:Vb,common:Wb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:$b,displacementmap_vertex:jb,emissivemap_fragment:qb,emissivemap_pars_fragment:Kb,colorspace_fragment:Zb,colorspace_pars_fragment:Jb,envmap_fragment:Qb,envmap_common_pars_fragment:eM,envmap_pars_fragment:tM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:pM,envmap_vertex:iM,fog_vertex:rM,fog_pars_vertex:aM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:lM,lightmap_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:dM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:EM,lights_fragment_maps:bM,lights_fragment_end:MM,logdepthbuf_fragment:SM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:wM,map_fragment:CM,map_pars_fragment:RM,map_particle_fragment:LM,map_particle_pars_fragment:PM,metalnessmap_fragment:IM,metalnessmap_pars_fragment:NM,morphcolor_vertex:DM,morphnormal_vertex:OM,morphtarget_pars_vertex:UM,morphtarget_vertex:FM,normal_fragment_begin:kM,normal_fragment_maps:BM,normal_pars_fragment:zM,normal_pars_vertex:HM,normal_vertex:GM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:$M,opaque_fragment:jM,packing:qM,premultiplied_alpha_fragment:KM,project_vertex:ZM,dithering_fragment:JM,dithering_pars_fragment:QM,roughnessmap_fragment:eS,roughnessmap_pars_fragment:tS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:aS,skinbase_vertex:sS,skinning_pars_vertex:oS,skinning_vertex:lS,skinnormal_vertex:cS,specularmap_fragment:uS,specularmap_pars_fragment:fS,tonemapping_fragment:dS,tonemapping_pars_fragment:hS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:_S,uv_vertex:vS,worldpos_vertex:xS,background_vert:yS,background_frag:ES,backgroundCube_vert:bS,backgroundCube_frag:MS,cube_vert:SS,cube_frag:TS,depth_vert:AS,depth_frag:wS,distanceRGBA_vert:CS,distanceRGBA_frag:RS,equirect_vert:LS,equirect_frag:PS,linedashed_vert:IS,linedashed_frag:NS,meshbasic_vert:DS,meshbasic_frag:OS,meshlambert_vert:US,meshlambert_frag:FS,meshmatcap_vert:kS,meshmatcap_frag:BS,meshnormal_vert:zS,meshnormal_frag:HS,meshphong_vert:GS,meshphong_frag:VS,meshphysical_vert:WS,meshphysical_frag:XS,meshtoon_vert:YS,meshtoon_frag:$S,points_vert:jS,points_frag:qS,shadow_vert:KS,shadow_frag:ZS,sprite_vert:JS,sprite_frag:QS},we={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},zn={basic:{uniforms:Kt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Kt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Kt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Kt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Kt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Kt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Kt([we.points,we.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Kt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Kt([we.common,we.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Kt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Kt([we.sprite,we.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Kt([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Kt([we.lights,we.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};zn.physical={uniforms:Kt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const lo={r:0,b:0,g:0};function eT(t,e,n,i,r,a,o){const s=new Qe(0);let l=a===!0?0:1,c,u,f=null,h=0,p=null;function b(m,d){let _=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?y(s,l):g&&g.isColor&&(y(g,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===pl)?(u===void 0&&(u=new ai(new Rs(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:va(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ct.getTransfer(g.colorSpace)!==ft,(f!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ai(new lf(2,2),new Ar({name:"BackgroundMaterial",uniforms:va(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ct.getTransfer(g.colorSpace)!==ft,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(lo,i_(t)),i.buffers.color.setClear(lo.r,lo.g,lo.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(s,l)},render:b}}function tT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(O,W,q,$,ie){let ee=!1;if(o){const le=y($,q,W);c!==le&&(c=le,p(c.object)),ee=d(O,$,q,ie),ee&&_(O,$,q,ie)}else{const le=W.wireframe===!0;(c.geometry!==$.id||c.program!==q.id||c.wireframe!==le)&&(c.geometry=$.id,c.program=q.id,c.wireframe=le,ee=!0)}ie!==null&&n.update(ie,t.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,D(O,W,q,$),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(ie).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(O){return i.isWebGL2?t.bindVertexArray(O):a.bindVertexArrayOES(O)}function b(O){return i.isWebGL2?t.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function y(O,W,q){const $=q.wireframe===!0;let ie=s[O.id];ie===void 0&&(ie={},s[O.id]=ie);let ee=ie[W.id];ee===void 0&&(ee={},ie[W.id]=ee);let le=ee[$];return le===void 0&&(le=m(h()),ee[$]=le),le}function m(O){const W=[],q=[],$=[];for(let ie=0;ie<r;ie++)W[ie]=0,q[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:$,object:O,attributes:{},index:null}}function d(O,W,q,$){const ie=c.attributes,ee=W.attributes;let le=0;const B=q.getAttributes();for(const Z in B)if(B[Z].location>=0){const ve=ie[Z];let Me=ee[Z];if(Me===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;le++}return c.attributesNum!==le||c.index!==$}function _(O,W,q,$){const ie={},ee=W.attributes;let le=0;const B=q.getAttributes();for(const Z in B)if(B[Z].location>=0){let ve=ee[Z];ve===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ve=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ve=O.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),ie[Z]=Me,le++}c.attributes=ie,c.attributesNum=le,c.index=$}function g(){const O=c.newAttributes;for(let W=0,q=O.length;W<q;W++)O[W]=0}function E(O){A(O,0)}function A(O,W){const q=c.newAttributes,$=c.enabledAttributes,ie=c.attributeDivisors;q[O]=1,$[O]===0&&(t.enableVertexAttribArray(O),$[O]=1),ie[O]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),ie[O]=W)}function C(){const O=c.newAttributes,W=c.enabledAttributes;for(let q=0,$=W.length;q<$;q++)W[q]!==O[q]&&(t.disableVertexAttribArray(q),W[q]=0)}function w(O,W,q,$,ie,ee,le){le===!0?t.vertexAttribIPointer(O,W,q,ie,ee):t.vertexAttribPointer(O,W,q,$,ie,ee)}function D(O,W,q,$){if(i.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const ie=$.attributes,ee=q.getAttributes(),le=W.defaultAttributeValues;for(const B in ee){const Z=ee[B];if(Z.location>=0){let pe=ie[B];if(pe===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),pe!==void 0){const ve=pe.normalized,Me=pe.itemSize,Ae=n.get(pe);if(Ae===void 0)continue;const Y=Ae.buffer,oe=Ae.type,re=Ae.bytesPerElement,ge=i.isWebGL2===!0&&(oe===t.INT||oe===t.UNSIGNED_INT||pe.gpuType===Hg);if(pe.isInterleavedBufferAttribute){const ye=pe.data,S=ye.stride,M=pe.offset;if(ye.isInstancedInterleavedBuffer){for(let x=0;x<Z.locationSize;x++)A(Z.location+x,ye.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let x=0;x<Z.locationSize;x++)E(Z.location+x);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let x=0;x<Z.locationSize;x++)w(Z.location+x,Me/Z.locationSize,oe,ve,S*re,(M+Me/Z.locationSize*x)*re,ge)}else{if(pe.isInstancedBufferAttribute){for(let ye=0;ye<Z.locationSize;ye++)A(Z.location+ye,pe.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ye=0;ye<Z.locationSize;ye++)E(Z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let ye=0;ye<Z.locationSize;ye++)w(Z.location+ye,Me/Z.locationSize,oe,ve,Me*re,Me/Z.locationSize*ye*re,ge)}}else if(le!==void 0){const ve=le[B];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(Z.location,ve);break;case 3:t.vertexAttrib3fv(Z.location,ve);break;case 4:t.vertexAttrib4fv(Z.location,ve);break;default:t.vertexAttrib1fv(Z.location,ve)}}}}C()}function T(){F();for(const O in s){const W=s[O];for(const q in W){const $=W[q];for(const ie in $)b($[ie].object),delete $[ie];delete W[q]}delete s[O]}}function L(O){if(s[O.id]===void 0)return;const W=s[O.id];for(const q in W){const $=W[q];for(const ie in $)b($[ie].object),delete $[ie];delete W[q]}delete s[O.id]}function z(O){for(const W in s){const q=s[W];if(q[O.id]===void 0)continue;const $=q[O.id];for(const ie in $)b($[ie].object),delete $[ie];delete q[O.id]}}function F(){G(),u=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:E,disableUnusedAttributes:C}}function nT(t,e,n,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){t.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](a,c,u,f),n.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function iT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),b=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,E=o||e.has("OES_texture_float"),A=g&&E,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:C}}function rT(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new Li,s=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const b=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||b===null||b.length===0||a&&!m)a?u(null):c();else{const _=a?0:i,g=_*4;let E=d.clippingState||null;l.value=E,E=u(b,h,g,p);for(let A=0;A!==g;++A)E[A]=n[A];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,b){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,b!==!0||m===null){const d=p+y*4,_=h.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,E=p;g!==y;++g,E+=4)o.copy(f[g]).applyMatrix4(_,s),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function aT(t){let e=new WeakMap;function n(o,s){return s===Zc?o.mapping=ma:s===Jc&&(o.mapping=ga),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Zc||s===Jc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xb(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class o_ extends r_{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,Uh=[.125,.215,.35,.446,.526,.582],ur=20,dc=new o_,Fh=new Qe;let hc=null,pc=0,mc=0;const ar=(1+Math.sqrt(5))/2,jr=1/ar,kh=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ar,jr),new X(0,ar,-jr),new X(jr,0,ar),new X(-jr,0,ar),new X(ar,jr,0),new X(-ar,jr,0)];class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,pc,mc),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ma||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ps,format:Ln,colorSpace:ci,depthBuffer:!1},r=zh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(a)),this._blurMaterial=oT(a,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,dc)}_sceneToCubeUV(e,n,i,r){const s=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Fi,u.autoClear=!1;const p=new e_({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),b=new ai(new Rs,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Fh),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):_===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const g=this._cubeSize;co(r,_*g,d>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(b,s),u.render(e,s)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ma||e.mapping===ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;co(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kh[(r-1)%kh.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ai(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,b=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ur-1),y=a/b,m=isFinite(a)?1+Math.floor(u*y):ur;m>ur&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const d=[];let _=0;for(let w=0;w<ur;++w){const D=w/y,T=Math.exp(-D*D/2);d.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=b,h.mipInt.value=g-i;const E=this._sizeLods[r],A=3*E*(r>g-Jr?r-g+Jr:0),C=4*(this._cubeSize-E);co(n,A,C,3*E,2*E),l.setRenderTarget(n),l.render(f,dc)}}function sT(t){const e=[],n=[],i=[];let r=t;const a=t-Jr+1+Uh.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-Jr?l=Uh[o-t+Jr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,b=6,y=3,m=2,d=1,_=new Float32Array(y*b*p),g=new Float32Array(m*b*p),E=new Float32Array(d*b*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,D=C>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(T,y*b*C),g.set(h,m*b*C);const L=[C,C,C,C,C,C];E.set(L,d*b*C)}const A=new Yi;A.setAttribute("position",new tn(_,y)),A.setAttribute("uv",new tn(g,m)),A.setAttribute("faceIndex",new tn(E,d)),e.push(A),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zh(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oT(t,e,n){const i=new Float32Array(ur),r=new X(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Hh(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Gh(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function lT(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Zc||l===Jc,u=l===ma||l===ga;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new Bh(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Bh(t));const h=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function cT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uT(t,e,n,i){const r={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const b in h.attributes)e.remove(h.attributes[b]);for(const b in h.morphAttributes){const y=h.morphAttributes[b];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const b in h)e.update(h[b],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const b in p){const y=p[b];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,b=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,E=_.length;g<E;g+=3){const A=_[g+0],C=_[g+1],w=_[g+2];h.push(A,C,C,w,w,A)}}else if(b!==void 0){const _=b.array;y=b.version;for(let g=0,E=_.length/3-1;g<E;g+=3){const A=g+0,C=g+1,w=g+2;h.push(A,C,C,w,w,A)}}else return;const m=new(qg(h)?n_:t_)(h,1);m.version=y;const d=a.get(f);d&&e.remove(d),a.set(f,m)}function u(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function fT(t,e,n,i){const r=i.isWebGL2;let a;function o(h){a=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(a,p,s,h*l),n.update(p,a,1)}function f(h,p,b){if(b===0)return;let y,m;if(r)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](a,p,s,h*l,b),n.update(p,a,b)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function dT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hT(t,e){return t[0]-e[0]}function pT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function mT(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new gt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,b=p!==void 0?p.length:0;let y=a.get(u);if(y===void 0||y.count!==b){let O=function(){F.dispose(),a.delete(u),u.removeEventListener("dispose",O)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;_===!0&&(D=1),g===!0&&(D=2),E===!0&&(D=3);let T=u.attributes.position.count*D,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*L*4*b),F=new Jg(z,T,L,b);F.type=Ii,F.needsUpdate=!0;const G=D*4;for(let W=0;W<b;W++){const q=A[W],$=C[W],ie=w[W],ee=T*L*4*W;for(let le=0;le<q.count;le++){const B=le*G;_===!0&&(o.fromBufferAttribute(q,le),z[ee+B+0]=o.x,z[ee+B+1]=o.y,z[ee+B+2]=o.z,z[ee+B+3]=0),g===!0&&(o.fromBufferAttribute($,le),z[ee+B+4]=o.x,z[ee+B+5]=o.y,z[ee+B+6]=o.z,z[ee+B+7]=0),E===!0&&(o.fromBufferAttribute(ie,le),z[ee+B+8]=o.x,z[ee+B+9]=o.y,z[ee+B+10]=o.z,z[ee+B+11]=ie.itemSize===4?o.w:1)}}y={count:b,texture:F,size:new Xe(T,L)},a.set(u,y),u.addEventListener("dispose",O)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",d),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{const p=h===void 0?0:h.length;let b=i[u.id];if(b===void 0||b.length!==p){b=[];for(let g=0;g<p;g++)b[g]=[g,0];i[u.id]=b}for(let g=0;g<p;g++){const E=b[g];E[0]=g,E[1]=h[g]}b.sort(pT);for(let g=0;g<8;g++)g<p&&b[g][1]?(s[g][0]=b[g][0],s[g][1]=b[g][1]):(s[g][0]=Number.MAX_SAFE_INTEGER,s[g][1]=0);s.sort(hT);const y=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let g=0;g<8;g++){const E=s[g],A=E[0],C=E[1];A!==Number.MAX_SAFE_INTEGER&&C?(y&&u.getAttribute("morphTarget"+g)!==y[A]&&u.setAttribute("morphTarget"+g,y[A]),m&&u.getAttribute("morphNormal"+g)!==m[A]&&u.setAttribute("morphNormal"+g,m[A]),r[g]=C,d+=C):(y&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function gT(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const l_=new rn,c_=new Jg,u_=new nb,f_=new a_,Vh=[],Wh=[],Xh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function Pa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Vh[r];if(a===void 0&&(a=new Float32Array(r),Vh[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vl(t,e){let n=Wh[e];n===void 0&&(n=new Int32Array(e),Wh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;$h.set(i),t.uniformMatrix2fv(this.addr,!1,$h),It(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Yh.set(i),t.uniformMatrix3fv(this.addr,!1,Yh),It(n,i)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Xh.set(i),t.uniformMatrix4fv(this.addr,!1,Xh),It(n,i)}}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||l_,r)}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||u_,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||f_,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||c_,r)}function UT(t){switch(t){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return yT;case 35674:return ET;case 35675:return bT;case 35676:return MT;case 5124:case 35670:return ST;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return wT;case 5125:return CT;case 36294:return RT;case 36295:return LT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return OT}}function FT(t,e){t.uniform1fv(this.addr,e)}function kT(t,e){const n=Pa(e,this.size,2);t.uniform2fv(this.addr,n)}function BT(t,e){const n=Pa(e,this.size,3);t.uniform3fv(this.addr,n)}function zT(t,e){const n=Pa(e,this.size,4);t.uniform4fv(this.addr,n)}function HT(t,e){const n=Pa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GT(t,e){const n=Pa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function VT(t,e){const n=Pa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WT(t,e){t.uniform1iv(this.addr,e)}function XT(t,e){t.uniform2iv(this.addr,e)}function YT(t,e){t.uniform3iv(this.addr,e)}function $T(t,e){t.uniform4iv(this.addr,e)}function jT(t,e){t.uniform1uiv(this.addr,e)}function qT(t,e){t.uniform2uiv(this.addr,e)}function KT(t,e){t.uniform3uiv(this.addr,e)}function ZT(t,e){t.uniform4uiv(this.addr,e)}function JT(t,e,n){const i=this.cache,r=e.length,a=vl(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||l_,a[o])}function QT(t,e,n){const i=this.cache,r=e.length,a=vl(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||u_,a[o])}function eA(t,e,n){const i=this.cache,r=e.length,a=vl(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||f_,a[o])}function tA(t,e,n){const i=this.cache,r=e.length,a=vl(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||c_,a[o])}function nA(t){switch(t){case 5126:return FT;case 35664:return kT;case 35665:return BT;case 35666:return zT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return YT;case 35669:case 35673:return $T;case 5125:return jT;case 36294:return qT;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}class iA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=UT(n.type)}}class rA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=nA(n.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function jh(t,e){t.seq.push(e),t.map[e.id]=e}function sA(t,e,n){const i=t.name,r=i.length;for(gc.lastIndex=0;;){const a=gc.exec(i),o=gc.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){jh(n,c===void 0?new iA(s,t,e):new rA(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new aA(s),jh(n,f)),n=f}}}class Po{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);sA(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oA=37297;let lA=0;function cA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function uA(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Vo&&n===Go?i="LinearDisplayP3ToLinearSRGB":e===Go&&n===Vo&&(i="LinearSRGBToLinearDisplayP3"),t){case ci:case ml:return[i,"LinearTransferOETF"];case kt:case nf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+cA(t.getShaderSource(e),o)}else return r}function fA(t,e){const n=uA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function dA(t,e){let n;switch(e){case uE:n="Linear";break;case fE:n="Reinhard";break;case dE:n="OptimizedCineon";break;case hE:n="ACESFilmic";break;case pE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ya).join(`
`)}function pA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Ya(t){return t!==""}function Zh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(t){return t.replace(gA,vA)}const _A=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vA(t,e){let n=qe[e];if(n===void 0){const i=_A.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(n)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(t){return t.replace(xA,yA)}function yA(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ep(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ky?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function bA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ma:case ga:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ga:e="ENVMAP_MODE_REFRACTION";break}return e}function SA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ef:e="ENVMAP_BLENDING_MULTIPLY";break;case lE:e="ENVMAP_BLENDING_MIX";break;case cE:e="ENVMAP_BLENDING_ADD";break}return e}function TA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AA(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=EA(n),c=bA(n),u=MA(n),f=SA(n),h=TA(n),p=n.isWebGL2?"":hA(n),b=pA(a),y=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ya).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ya).join(`
`),d.length>0&&(d+=`
`)):(m=[ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),d=[p,ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?qe.tonemapping_pars_fragment:"",n.toneMapping!==Fi?dA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,fA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ya).join(`
`)),o=iu(o),o=Zh(o,n),o=Jh(o,n),s=iu(s),s=Zh(s,n),s=Jh(s,n),o=Qh(o),s=Qh(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=_+m+o,E=_+d+s,A=qh(r,r.VERTEX_SHADER,g),C=qh(r,r.FRAGMENT_SHADER,E);r.attachShader(y,A),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(z){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(C).trim();let W=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,C);else{const $=Kh(r,A,"vertex"),ie=Kh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+$+`
`+ie)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||O==="")&&(q=!1);q&&(z.diagnostics={runnable:W,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(A),r.deleteShader(C),D=new Po(r,y),T=mA(r,y)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,oA)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}let wA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RA(e),n.set(e,i)),i}}class RA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function LA(t,e,n,i,r,a,o){const s=new sf,l=new CA,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return T===0?"uv":`uv${T}`}function m(T,L,z,F,G){const O=F.fog,W=G.geometry,q=T.isMeshStandardMaterial?F.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||q),ie=$&&$.mapping===pl?$.image.height:null,ee=b[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,B=le!==void 0?le.length:0;let Z=0;W.morphAttributes.position!==void 0&&(Z=1),W.morphAttributes.normal!==void 0&&(Z=2),W.morphAttributes.color!==void 0&&(Z=3);let pe,ve,Me,Ae;if(ee){const Mt=zn[ee];pe=Mt.vertexShader,ve=Mt.fragmentShader}else pe=T.vertexShader,ve=T.fragmentShader,l.update(T),Me=l.getVertexShaderID(T),Ae=l.getFragmentShaderID(T);const Y=t.getRenderTarget(),oe=G.isInstancedMesh===!0,re=!!T.map,ge=!!T.matcap,ye=!!$,S=!!T.aoMap,M=!!T.lightMap,x=!!T.bumpMap,P=!!T.normalMap,U=!!T.displacementMap,V=!!T.emissiveMap,J=!!T.metalnessMap,te=!!T.roughnessMap,fe=T.anisotropy>0,de=T.clearcoat>0,Ce=T.iridescence>0,R=T.sheen>0,v=T.transmission>0,N=fe&&!!T.anisotropyMap,K=de&&!!T.clearcoatMap,Q=de&&!!T.clearcoatNormalMap,ce=de&&!!T.clearcoatRoughnessMap,be=Ce&&!!T.iridescenceMap,me=Ce&&!!T.iridescenceThicknessMap,Se=R&&!!T.sheenColorMap,k=R&&!!T.sheenRoughnessMap,xe=!!T.specularMap,he=!!T.specularColorMap,De=!!T.specularIntensityMap,Le=v&&!!T.transmissionMap,Fe=v&&!!T.thicknessMap,Ue=!!T.gradientMap,Ne=!!T.alphaMap,et=T.alphaTest>0,H=!!T.alphaHash,Te=!!T.extensions,_e=!!W.attributes.uv1,ue=!!W.attributes.uv2,Ee=!!W.attributes.uv3;let Be=Fi;return T.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Be=t.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:ve,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,instancing:oe,instancingColor:oe&&G.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ci,map:re,matcap:ge,envMap:ye,envMapMode:ye&&$.mapping,envMapCubeUVHeight:ie,aoMap:S,lightMap:M,bumpMap:x,normalMap:P,displacementMap:h&&U,emissiveMap:V,normalMapObjectSpace:P&&T.normalMapType===wE,normalMapTangentSpace:P&&T.normalMapType===jg,metalnessMap:J,roughnessMap:te,anisotropy:fe,anisotropyMap:N,clearcoat:de,clearcoatMap:K,clearcoatNormalMap:Q,clearcoatRoughnessMap:ce,iridescence:Ce,iridescenceMap:be,iridescenceThicknessMap:me,sheen:R,sheenColorMap:Se,sheenRoughnessMap:k,specularMap:xe,specularColorMap:he,specularIntensityMap:De,transmission:v,transmissionMap:Le,thicknessMap:Fe,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===oa,alphaMap:Ne,alphaTest:et,alphaHash:H,combine:T.combine,mapUv:re&&y(T.map.channel),aoMapUv:S&&y(T.aoMap.channel),lightMapUv:M&&y(T.lightMap.channel),bumpMapUv:x&&y(T.bumpMap.channel),normalMapUv:P&&y(T.normalMap.channel),displacementMapUv:U&&y(T.displacementMap.channel),emissiveMapUv:V&&y(T.emissiveMap.channel),metalnessMapUv:J&&y(T.metalnessMap.channel),roughnessMapUv:te&&y(T.roughnessMap.channel),anisotropyMapUv:N&&y(T.anisotropyMap.channel),clearcoatMapUv:K&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Q&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:k&&y(T.sheenRoughnessMap.channel),specularMapUv:xe&&y(T.specularMap.channel),specularColorMapUv:he&&y(T.specularColorMap.channel),specularIntensityMapUv:De&&y(T.specularIntensityMap.channel),transmissionMapUv:Le&&y(T.transmissionMap.channel),thicknessMapUv:Fe&&y(T.thicknessMap.channel),alphaMapUv:Ne&&y(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(P||fe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:ue,vertexUv3s:Ee,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(re||Ne),fog:!!O,useFog:T.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,useLegacyLights:t._useLegacyLights,decodeVideoTexture:re&&T.map.isVideoTexture===!0&&ct.getTransfer(T.map.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ti,flipSided:T.side===nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Te&&T.extensions.derivatives===!0,extensionFragDepth:Te&&T.extensions.fragDepth===!0,extensionDrawBuffers:Te&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function d(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)L.push(z),L.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(_(L,T),g(L,T),L.push(t.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function _(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function g(T,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.matcap&&s.enable(4),L.envMap&&s.enable(5),L.normalMapObjectSpace&&s.enable(6),L.normalMapTangentSpace&&s.enable(7),L.clearcoat&&s.enable(8),L.iridescence&&s.enable(9),L.alphaTest&&s.enable(10),L.vertexColors&&s.enable(11),L.vertexAlphas&&s.enable(12),L.vertexUv1s&&s.enable(13),L.vertexUv2s&&s.enable(14),L.vertexUv3s&&s.enable(15),L.vertexTangents&&s.enable(16),L.anisotropy&&s.enable(17),L.alphaHash&&s.enable(18),T.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.useLegacyLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.transmission&&s.enable(15),L.sheen&&s.enable(16),L.opaque&&s.enable(17),L.pointsUvs&&s.enable(18),L.decodeVideoTexture&&s.enable(19),T.push(s.mask)}function E(T){const L=b[T.type];let z;if(L){const F=zn[L];z=mb.clone(F.uniforms)}else z=T.uniforms;return z}function A(T,L){let z;for(let F=0,G=c.length;F<G;F++){const O=c[F];if(O.cacheKey===L){z=O,++z.usedTimes;break}}return z===void 0&&(z=new AA(t,L,T,a),c.push(z)),z}function C(T){if(--T.usedTimes===0){const L=c.indexOf(T);c[L]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:D}}function PA(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function IA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function np(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,b,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:b,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=b,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function s(f,h,p,b,y,m){const d=o(f,h,p,b,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,b,y,m){const d=o(f,h,p,b,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||IA),i.length>1&&i.sort(h||tp),r.length>1&&r.sort(h||tp)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function NA(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new np,t.set(i,[o])):r>=a.length?(o=new np,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Qe};break;case"SpotLight":n={position:new X,direction:new X,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UA=0;function FA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kA(t,e){const n=new DA,i=OA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new X);const a=new X,o=new At,s=new At;function l(u,f){let h=0,p=0,b=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,m=0,d=0,_=0,g=0,E=0,A=0,C=0,w=0,D=0,T=0;u.sort(FA);const L=f===!0?Math.PI:1;for(let F=0,G=u.length;F<G;F++){const O=u[F],W=O.color,q=O.intensity,$=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=W.r*q*L,p+=W.g*q*L,b+=W.b*q*L;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(O.sh.coefficients[ee],q);T++}else if(O.isDirectionalLight){const ee=n.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const le=O.shadow,B=i.get(O);B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=ie,r.directionalShadowMatrix[y]=O.shadow.matrix,E++}r.directional[y]=ee,y++}else if(O.isSpotLight){const ee=n.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(W).multiplyScalar(q*L),ee.distance=$,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,r.spot[d]=ee;const le=O.shadow;if(O.map&&(r.spotLightMap[w]=O.map,w++,le.updateMatrices(O),O.castShadow&&D++),r.spotLightMatrix[d]=le.matrix,O.castShadow){const B=i.get(O);B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[d]=B,r.spotShadowMap[d]=ie,C++}d++}else if(O.isRectAreaLight){const ee=n.get(O);ee.color.copy(W).multiplyScalar(q),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=ee,_++}else if(O.isPointLight){const ee=n.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity*L),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){const le=O.shadow,B=i.get(O);B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=O.shadow.matrix,A++}r.point[m]=ee,m++}else if(O.isHemisphereLight){const ee=n.get(O);ee.skyColor.copy(O.color).multiplyScalar(q*L),ee.groundColor.copy(O.groundColor).multiplyScalar(q*L),r.hemi[g]=ee,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=b;const z=r.hash;(z.directionalLength!==y||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==_||z.hemiLength!==g||z.numDirectionalShadows!==E||z.numPointShadows!==A||z.numSpotShadows!==C||z.numSpotMaps!==w||z.numLightProbes!==T)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=T,z.directionalLength=y,z.pointLength=m,z.spotLength=d,z.rectAreaLength=_,z.hemiLength=g,z.numDirectionalShadows=E,z.numPointShadows=A,z.numSpotShadows=C,z.numSpotMaps=w,z.numLightProbes=T,r.version=UA++)}function c(u,f){let h=0,p=0,b=0,y=0,m=0;const d=f.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const E=u[_];if(E.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),h++}else if(E.isSpotLight){const A=r.spot[b];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),b++}else if(E.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),s.identity(),o.copy(E.matrixWorld),o.premultiply(d),s.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),y++}else if(E.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function ip(t,e){const n=new kA(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function BA(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new ip(t,e),n.set(a,[l])):o>=s.length?(l=new ip(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class zA extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HA extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
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
}`;function WA(t,e,n){let i=new of;const r=new Xe,a=new Xe,o=new gt,s=new zA({depthPacking:AE}),l=new HA,c={},u=n.maxTextureSize,f={[Hi]:nn,[nn]:Hi,[ti]:ti},h=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const b=new Yi;b.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ai(b,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let d=this.type;this.render=function(A,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const D=t.getRenderTarget(),T=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ui),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=d!==Qn&&this.type===Qn,G=d===Qn&&this.type!==Qn;for(let O=0,W=A.length;O<W;O++){const q=A[O],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ie=$.getFrameExtents();if(r.multiply(ie),a.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ie.x),r.x=a.x*ie.x,$.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ie.y),r.y=a.y*ie.y,$.mapSize.y=a.y)),$.map===null||F===!0||G===!0){const le=this.type!==Qn?{minFilter:Jt,magFilter:Jt}:{};$.map!==null&&$.map.dispose(),$.map=new Sr(r.x,r.y,le),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const ee=$.getViewportCount();for(let le=0;le<ee;le++){const B=$.getViewport(le);o.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),z.viewport(o),$.updateMatrices(q,le),i=$.getFrustum(),E(C,w,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Qn&&_($,w),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(D,T,L)};function _(A,C){const w=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,w,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,w,p,y,null)}function g(A,C,w,D){let T=null;const L=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)T=L;else if(T=w.isPointLight===!0?l:s,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=T.uuid,F=C.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let O=G[F];O===void 0&&(O=T.clone(),G[F]=O),T=O}if(T.visible=C.visible,T.wireframe=C.wireframe,D===Qn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,w.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=t.properties.get(T);z.light=w}return T}function E(A,C,w,D,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const F=e.update(A),G=A.material;if(Array.isArray(G)){const O=F.groups;for(let W=0,q=O.length;W<q;W++){const $=O[W],ie=G[$.materialIndex];if(ie&&ie.visible){const ee=g(A,ie,D,T);t.renderBufferDirect(w,null,F,ee,A,$)}}}else if(G.visible){const O=g(A,G,D,T);t.renderBufferDirect(w,null,F,O,A,null)}}const z=A.children;for(let F=0,G=z.length;F<G;F++)E(z[F],C,w,D,T)}}function XA(t,e,n){const i=n.isWebGL2;function r(){let H=!1;const Te=new gt;let _e=null;const ue=new gt(0,0,0,0);return{setMask:function(Ee){_e!==Ee&&!H&&(t.colorMask(Ee,Ee,Ee,Ee),_e=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,Be,tt,Mt,hn){hn===!0&&(Ee*=Mt,Be*=Mt,tt*=Mt),Te.set(Ee,Be,tt,Mt),ue.equals(Te)===!1&&(t.clearColor(Ee,Be,tt,Mt),ue.copy(Te))},reset:function(){H=!1,_e=null,ue.set(-1,0,0,0)}}}function a(){let H=!1,Te=null,_e=null,ue=null;return{setTest:function(Ee){Ee?re(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(Ee){Te!==Ee&&!H&&(t.depthMask(Ee),Te=Ee)},setFunc:function(Ee){if(_e!==Ee){switch(Ee){case tE:t.depthFunc(t.NEVER);break;case nE:t.depthFunc(t.ALWAYS);break;case iE:t.depthFunc(t.LESS);break;case zo:t.depthFunc(t.LEQUAL);break;case rE:t.depthFunc(t.EQUAL);break;case aE:t.depthFunc(t.GEQUAL);break;case sE:t.depthFunc(t.GREATER);break;case oE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Ee}},setLocked:function(Ee){H=Ee},setClear:function(Ee){ue!==Ee&&(t.clearDepth(Ee),ue=Ee)},reset:function(){H=!1,Te=null,_e=null,ue=null}}}function o(){let H=!1,Te=null,_e=null,ue=null,Ee=null,Be=null,tt=null,Mt=null,hn=null;return{setTest:function(ut){H||(ut?re(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(ut){Te!==ut&&!H&&(t.stencilMask(ut),Te=ut)},setFunc:function(ut,Yt,On){(_e!==ut||ue!==Yt||Ee!==On)&&(t.stencilFunc(ut,Yt,On),_e=ut,ue=Yt,Ee=On)},setOp:function(ut,Yt,On){(Be!==ut||tt!==Yt||Mt!==On)&&(t.stencilOp(ut,Yt,On),Be=ut,tt=Yt,Mt=On)},setLocked:function(ut){H=ut},setClear:function(ut){hn!==ut&&(t.clearStencil(ut),hn=ut)},reset:function(){H=!1,Te=null,_e=null,ue=null,Ee=null,Be=null,tt=null,Mt=null,hn=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},b=new WeakMap,y=[],m=null,d=!1,_=null,g=null,E=null,A=null,C=null,w=null,D=null,T=new Qe(0,0,0),L=0,z=!1,F=null,G=null,O=null,W=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ee=0;const le=t.getParameter(t.VERSION);le.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(le)[1]),ie=ee>=1):le.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ie=ee>=2);let B=null,Z={};const pe=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Me=new gt().fromArray(pe),Ae=new gt().fromArray(ve);function Y(H,Te,_e,ue){const Ee=new Uint8Array(4),Be=t.createTexture();t.bindTexture(H,Be),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<_e;tt++)i&&(H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY)?t.texImage3D(Te,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Te+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Be}const oe={};oe[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(t.DEPTH_TEST),l.setFunc(zo),J(!1),te(kd),re(t.CULL_FACE),U(Ui);function re(H){h[H]!==!0&&(t.enable(H),h[H]=!0)}function ge(H){h[H]!==!1&&(t.disable(H),h[H]=!1)}function ye(H,Te){return p[H]!==Te?(t.bindFramebuffer(H,Te),p[H]=Te,i&&(H===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Te),H===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Te)),!0):!1}function S(H,Te){let _e=y,ue=!1;if(H)if(_e=b.get(Te),_e===void 0&&(_e=[],b.set(Te,_e)),H.isWebGLMultipleRenderTargets){const Ee=H.texture;if(_e.length!==Ee.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,tt=Ee.length;Be<tt;Be++)_e[Be]=t.COLOR_ATTACHMENT0+Be;_e.length=Ee.length,ue=!0}}else _e[0]!==t.COLOR_ATTACHMENT0&&(_e[0]=t.COLOR_ATTACHMENT0,ue=!0);else _e[0]!==t.BACK&&(_e[0]=t.BACK,ue=!0);ue&&(n.isWebGL2?t.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function M(H){return m!==H?(t.useProgram(H),m=H,!0):!1}const x={[cr]:t.FUNC_ADD,[zy]:t.FUNC_SUBTRACT,[Hy]:t.FUNC_REVERSE_SUBTRACT};if(i)x[Gd]=t.MIN,x[Vd]=t.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(x[Gd]=H.MIN_EXT,x[Vd]=H.MAX_EXT)}const P={[Gy]:t.ZERO,[Vy]:t.ONE,[Wy]:t.SRC_COLOR,[qc]:t.SRC_ALPHA,[Ky]:t.SRC_ALPHA_SATURATE,[jy]:t.DST_COLOR,[Yy]:t.DST_ALPHA,[Xy]:t.ONE_MINUS_SRC_COLOR,[Kc]:t.ONE_MINUS_SRC_ALPHA,[qy]:t.ONE_MINUS_DST_COLOR,[$y]:t.ONE_MINUS_DST_ALPHA,[Zy]:t.CONSTANT_COLOR,[Jy]:t.ONE_MINUS_CONSTANT_COLOR,[Qy]:t.CONSTANT_ALPHA,[eE]:t.ONE_MINUS_CONSTANT_ALPHA};function U(H,Te,_e,ue,Ee,Be,tt,Mt,hn,ut){if(H===Ui){d===!0&&(ge(t.BLEND),d=!1);return}if(d===!1&&(re(t.BLEND),d=!0),H!==By){if(H!==_||ut!==z){if((g!==cr||C!==cr)&&(t.blendEquation(t.FUNC_ADD),g=cr,C=cr),ut)switch(H){case oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.ONE,t.ONE);break;case zd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,A=null,w=null,D=null,T.set(0,0,0),L=0,_=H,z=ut}return}Ee=Ee||Te,Be=Be||_e,tt=tt||ue,(Te!==g||Ee!==C)&&(t.blendEquationSeparate(x[Te],x[Ee]),g=Te,C=Ee),(_e!==E||ue!==A||Be!==w||tt!==D)&&(t.blendFuncSeparate(P[_e],P[ue],P[Be],P[tt]),E=_e,A=ue,w=Be,D=tt),(Mt.equals(T)===!1||hn!==L)&&(t.blendColor(Mt.r,Mt.g,Mt.b,hn),T.copy(Mt),L=hn),_=H,z=!1}function V(H,Te){H.side===ti?ge(t.CULL_FACE):re(t.CULL_FACE);let _e=H.side===nn;Te&&(_e=!_e),J(_e),H.blending===oa&&H.transparent===!1?U(Ui):U(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),s.setMask(H.colorWrite);const ue=H.stencilWrite;c.setTest(ue),ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),de(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(H){F!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),F=H)}function te(H){H!==Uy?(re(t.CULL_FACE),H!==G&&(H===kd?t.cullFace(t.BACK):H===Fy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),G=H}function fe(H){H!==O&&(ie&&t.lineWidth(H),O=H)}function de(H,Te,_e){H?(re(t.POLYGON_OFFSET_FILL),(W!==Te||q!==_e)&&(t.polygonOffset(Te,_e),W=Te,q=_e)):ge(t.POLYGON_OFFSET_FILL)}function Ce(H){H?re(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function R(H){H===void 0&&(H=t.TEXTURE0+$-1),B!==H&&(t.activeTexture(H),B=H)}function v(H,Te,_e){_e===void 0&&(B===null?_e=t.TEXTURE0+$-1:_e=B);let ue=Z[_e];ue===void 0&&(ue={type:void 0,texture:void 0},Z[_e]=ue),(ue.type!==H||ue.texture!==Te)&&(B!==_e&&(t.activeTexture(_e),B=_e),t.bindTexture(H,Te||oe[H]),ue.type=H,ue.texture=Te)}function N(){const H=Z[B];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(H){Me.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function Fe(H){Ae.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Ae.copy(H))}function Ue(H,Te){let _e=f.get(Te);_e===void 0&&(_e=new WeakMap,f.set(Te,_e));let ue=_e.get(H);ue===void 0&&(ue=t.getUniformBlockIndex(Te,H.name),_e.set(H,ue))}function Ne(H,Te){const ue=f.get(Te).get(H);u.get(Te)!==ue&&(t.uniformBlockBinding(Te,ue,H.__bindingPointIndex),u.set(Te,ue))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,Z={},p={},b=new WeakMap,y=[],m=null,d=!1,_=null,g=null,E=null,A=null,C=null,w=null,D=null,T=new Qe(0,0,0),L=0,z=!1,F=null,G=null,O=null,W=null,q=null,Me.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:re,disable:ge,bindFramebuffer:ye,drawBuffers:S,useProgram:M,setBlending:U,setMaterial:V,setFlipSided:J,setCullFace:te,setLineWidth:fe,setPolygonOffset:de,setScissorTest:Ce,activeTexture:R,bindTexture:v,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:he,texImage3D:De,updateUBOMapping:Ue,uniformBlockBinding:Ne,texStorage2D:k,texStorage3D:xe,texSubImage2D:ce,texSubImage3D:be,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Le,viewport:Fe,reset:et}}function YA(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let y;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return d?new OffscreenCanvas(R,v):gs("canvas")}function g(R,v,N,K){let Q=1;if((R.width>K||R.height>K)&&(Q=K/Math.max(R.width,R.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=v?Xo:Math.floor,be=ce(Q*R.width),me=ce(Q*R.height);y===void 0&&(y=_(be,me));const Se=N?_(be,me):y;return Se.width=be,Se.height=me,Se.getContext("2d").drawImage(R,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+me+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function E(R){return nu(R.width)&&nu(R.height)}function A(R){return s?!1:R.wrapS!==Rn||R.wrapT!==Rn||R.minFilter!==Jt&&R.minFilter!==_n}function C(R,v){return R.generateMipmaps&&v&&R.minFilter!==Jt&&R.minFilter!==_n}function w(R){t.generateMipmap(R)}function D(R,v,N,K,Q=!1){if(s===!1)return v;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=v;if(v===t.RED&&(N===t.FLOAT&&(ce=t.R32F),N===t.HALF_FLOAT&&(ce=t.R16F),N===t.UNSIGNED_BYTE&&(ce=t.R8)),v===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(ce=t.R8UI),N===t.UNSIGNED_SHORT&&(ce=t.R16UI),N===t.UNSIGNED_INT&&(ce=t.R32UI),N===t.BYTE&&(ce=t.R8I),N===t.SHORT&&(ce=t.R16I),N===t.INT&&(ce=t.R32I)),v===t.RG&&(N===t.FLOAT&&(ce=t.RG32F),N===t.HALF_FLOAT&&(ce=t.RG16F),N===t.UNSIGNED_BYTE&&(ce=t.RG8)),v===t.RGBA){const be=Q?Ho:ct.getTransfer(K);N===t.FLOAT&&(ce=t.RGBA32F),N===t.HALF_FLOAT&&(ce=t.RGBA16F),N===t.UNSIGNED_BYTE&&(ce=be===ft?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function T(R,v,N){return C(R,N)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==_n?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function L(R){return R===Jt||R===Wd||R===Vl?t.NEAREST:t.LINEAR}function z(R){const v=R.target;v.removeEventListener("dispose",z),G(v),v.isVideoTexture&&b.delete(v)}function F(R){const v=R.target;v.removeEventListener("dispose",F),W(v)}function G(R){const v=i.get(R);if(v.__webglInit===void 0)return;const N=R.source,K=m.get(N);if(K){const Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(R),Object.keys(K).length===0&&m.delete(N)}i.remove(R)}function O(R){const v=i.get(R);t.deleteTexture(v.__webglTexture);const N=R.source,K=m.get(N);delete K[v.__cacheKey],o.memory.textures--}function W(R){const v=R.texture,N=i.get(R),K=i.get(v);if(K.__webglTexture!==void 0&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let ce=0;ce<N.__webglFramebuffer[Q].length;ce++)t.deleteFramebuffer(N.__webglFramebuffer[Q][ce]);else t.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)t.deleteFramebuffer(N.__webglFramebuffer[Q]);else t.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,ce=v.length;Q<ce;Q++){const be=i.get(v[Q]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(v[Q])}i.remove(v),i.remove(R)}let q=0;function $(){q=0}function ie(){const R=q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),q+=1,R}function ee(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function le(R,v){const N=i.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(N,R,v);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+v)}function B(R,v){const N=i.get(R);if(R.version>0&&N.__version!==R.version){re(N,R,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+v)}function Z(R,v){const N=i.get(R);if(R.version>0&&N.__version!==R.version){re(N,R,v);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+v)}function pe(R,v){const N=i.get(R);if(R.version>0&&N.__version!==R.version){ge(N,R,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+v)}const ve={[Qc]:t.REPEAT,[Rn]:t.CLAMP_TO_EDGE,[eu]:t.MIRRORED_REPEAT},Me={[Jt]:t.NEAREST,[Wd]:t.NEAREST_MIPMAP_NEAREST,[Vl]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[mE]:t.LINEAR_MIPMAP_NEAREST,[hs]:t.LINEAR_MIPMAP_LINEAR},Ae={[CE]:t.NEVER,[OE]:t.ALWAYS,[RE]:t.LESS,[PE]:t.LEQUAL,[LE]:t.EQUAL,[DE]:t.GEQUAL,[IE]:t.GREATER,[NE]:t.NOTEQUAL};function Y(R,v,N){if(N?(t.texParameteri(R,t.TEXTURE_WRAP_S,ve[v.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ve[v.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ve[v.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Me[v.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Me[v.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(v.wrapS!==Rn||v.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,L(v.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,L(v.minFilter)),v.minFilter!==Jt&&v.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Jt||v.minFilter!==Vl&&v.minFilter!==hs||v.type===Ii&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(t.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function oe(R,v){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",z));const K=v.source;let Q=m.get(K);Q===void 0&&(Q={},m.set(K,Q));const ce=ee(v);if(ce!==R.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[ce].usedTimes++;const be=Q[R.__cacheKey];be!==void 0&&(Q[R.__cacheKey].usedTimes--,be.usedTimes===0&&O(v)),R.__cacheKey=ce,R.__webglTexture=Q[ce].texture}return N}function re(R,v,N){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const Q=oe(R,v),ce=v.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+N);const be=i.get(ce);if(ce.version!==be.__version||Q===!0){n.activeTexture(t.TEXTURE0+N);const me=ct.getPrimaries(ct.workingColorSpace),Se=v.colorSpace===xn?null:ct.getPrimaries(v.colorSpace),k=v.colorSpace===xn||me===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const xe=A(v)&&E(v.image)===!1;let he=g(v.image,xe,!1,u);he=Ce(v,he);const De=E(he)||s,Le=a.convert(v.format,v.colorSpace);let Fe=a.convert(v.type),Ue=D(v.internalFormat,Le,Fe,v.colorSpace,v.isVideoTexture);Y(K,v,De);let Ne;const et=v.mipmaps,H=s&&v.isVideoTexture!==!0,Te=be.__version===void 0||Q===!0,_e=T(v,he,De);if(v.isDepthTexture)Ue=t.DEPTH_COMPONENT,s?v.type===Ii?Ue=t.DEPTH_COMPONENT32F:v.type===Pi?Ue=t.DEPTH_COMPONENT24:v.type===xr?Ue=t.DEPTH24_STENCIL8:Ue=t.DEPTH_COMPONENT16:v.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===yr&&Ue===t.DEPTH_COMPONENT&&v.type!==tf&&v.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Pi,Fe=a.convert(v.type)),v.format===_a&&Ue===t.DEPTH_COMPONENT&&(Ue=t.DEPTH_STENCIL,v.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=xr,Fe=a.convert(v.type))),Te&&(H?n.texStorage2D(t.TEXTURE_2D,1,Ue,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ue,he.width,he.height,0,Le,Fe,null));else if(v.isDataTexture)if(et.length>0&&De){H&&Te&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,et[0].width,et[0].height);for(let ue=0,Ee=et.length;ue<Ee;ue++)Ne=et[ue],H?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,Le,Fe,Ne.data):n.texImage2D(t.TEXTURE_2D,ue,Ue,Ne.width,Ne.height,0,Le,Fe,Ne.data);v.generateMipmaps=!1}else H?(Te&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,he.width,he.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Le,Fe,he.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,he.width,he.height,0,Le,Fe,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){H&&Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Ue,et[0].width,et[0].height,he.depth);for(let ue=0,Ee=et.length;ue<Ee;ue++)Ne=et[ue],v.format!==Ln?Le!==null?H?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ne.width,Ne.height,he.depth,Le,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Ue,Ne.width,Ne.height,he.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ne.width,Ne.height,he.depth,Le,Fe,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Ue,Ne.width,Ne.height,he.depth,0,Le,Fe,Ne.data)}else{H&&Te&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,et[0].width,et[0].height);for(let ue=0,Ee=et.length;ue<Ee;ue++)Ne=et[ue],v.format!==Ln?Le!==null?H?n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,Le,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Ue,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,Le,Fe,Ne.data):n.texImage2D(t.TEXTURE_2D,ue,Ue,Ne.width,Ne.height,0,Le,Fe,Ne.data)}else if(v.isDataArrayTexture)H?(Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Ue,he.width,he.height,he.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Le,Fe,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Le,Fe,he.data);else if(v.isData3DTexture)H?(Te&&n.texStorage3D(t.TEXTURE_3D,_e,Ue,he.width,he.height,he.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Le,Fe,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Le,Fe,he.data);else if(v.isFramebufferTexture){if(Te)if(H)n.texStorage2D(t.TEXTURE_2D,_e,Ue,he.width,he.height);else{let ue=he.width,Ee=he.height;for(let Be=0;Be<_e;Be++)n.texImage2D(t.TEXTURE_2D,Be,Ue,ue,Ee,0,Le,Fe,null),ue>>=1,Ee>>=1}}else if(et.length>0&&De){H&&Te&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,et[0].width,et[0].height);for(let ue=0,Ee=et.length;ue<Ee;ue++)Ne=et[ue],H?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Le,Fe,Ne):n.texImage2D(t.TEXTURE_2D,ue,Ue,Le,Fe,Ne);v.generateMipmaps=!1}else H?(Te&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,he.width,he.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Fe,he)):n.texImage2D(t.TEXTURE_2D,0,Ue,Le,Fe,he);C(v,De)&&w(K),be.__version=ce.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ge(R,v,N){if(v.image.length!==6)return;const K=oe(R,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+N);const ce=i.get(Q);if(Q.version!==ce.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const be=ct.getPrimaries(ct.workingColorSpace),me=v.colorSpace===xn?null:ct.getPrimaries(v.colorSpace),Se=v.colorSpace===xn||be===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const k=v.isCompressedTexture||v.image[0].isCompressedTexture,xe=v.image[0]&&v.image[0].isDataTexture,he=[];for(let ue=0;ue<6;ue++)!k&&!xe?he[ue]=g(v.image[ue],!1,!0,c):he[ue]=xe?v.image[ue].image:v.image[ue],he[ue]=Ce(v,he[ue]);const De=he[0],Le=E(De)||s,Fe=a.convert(v.format,v.colorSpace),Ue=a.convert(v.type),Ne=D(v.internalFormat,Fe,Ue,v.colorSpace),et=s&&v.isVideoTexture!==!0,H=ce.__version===void 0||K===!0;let Te=T(v,De,Le);Y(t.TEXTURE_CUBE_MAP,v,Le);let _e;if(k){et&&H&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ne,De.width,De.height);for(let ue=0;ue<6;ue++){_e=he[ue].mipmaps;for(let Ee=0;Ee<_e.length;Ee++){const Be=_e[Ee];v.format!==Ln?Fe!==null?et?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,Be.width,Be.height,Fe,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,Ne,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,Be.width,Be.height,Fe,Ue,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,Ne,Be.width,Be.height,0,Fe,Ue,Be.data)}}}else{_e=v.mipmaps,et&&H&&(_e.length>0&&Te++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ne,he[0].width,he[0].height));for(let ue=0;ue<6;ue++)if(xe){et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,he[ue].width,he[ue].height,Fe,Ue,he[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ne,he[ue].width,he[ue].height,0,Fe,Ue,he[ue].data);for(let Ee=0;Ee<_e.length;Ee++){const tt=_e[Ee].image[ue].image;et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,tt.width,tt.height,Fe,Ue,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,Ne,tt.width,tt.height,0,Fe,Ue,tt.data)}}else{et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Fe,Ue,he[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ne,Fe,Ue,he[ue]);for(let Ee=0;Ee<_e.length;Ee++){const Be=_e[Ee];et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,Fe,Ue,Be.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,Ne,Fe,Ue,Be.image[ue])}}}C(v,Le)&&w(t.TEXTURE_CUBE_MAP),ce.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ye(R,v,N,K,Q,ce){const be=a.convert(N.format,N.colorSpace),me=a.convert(N.type),Se=D(N.internalFormat,be,me,N.colorSpace);if(!i.get(v).__hasExternalTextures){const xe=Math.max(1,v.width>>ce),he=Math.max(1,v.height>>ce);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ce,Se,xe,he,v.depth,0,be,me,null):n.texImage2D(Q,ce,Se,xe,he,0,be,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),fe(v)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Q,i.get(N).__webglTexture,0,te(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Q,i.get(N).__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function S(R,v,N){if(t.bindRenderbuffer(t.RENDERBUFFER,R),v.depthBuffer&&!v.stencilBuffer){let K=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(N||fe(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ii?K=t.DEPTH_COMPONENT32F:Q.type===Pi&&(K=t.DEPTH_COMPONENT24));const ce=te(v);fe(v)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,K,v.width,v.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,K,v.width,v.height)}else t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(v.depthBuffer&&v.stencilBuffer){const K=te(v);N&&fe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,v.width,v.height):fe(v)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<K.length;Q++){const ce=K[Q],be=a.convert(ce.format,ce.colorSpace),me=a.convert(ce.type),Se=D(ce.internalFormat,be,me,ce.colorSpace),k=te(v);N&&fe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,Se,v.width,v.height):fe(v)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,Se,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Se,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function M(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),le(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,Q=te(v);if(v.depthTexture.format===yr)fe(v)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(v.depthTexture.format===_a)fe(v)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function x(R){const v=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");M(v.__webglFramebuffer,R)}else if(N){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=t.createRenderbuffer(),S(v.__webglDepthbuffer[K],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),S(v.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(R,v,N){const K=i.get(R);v!==void 0&&ye(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&x(R)}function U(R){const v=R.texture,N=i.get(R),K=i.get(v);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,o.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,be=E(R)||s;if(Q){N.__webglFramebuffer=[];for(let me=0;me<6;me++)if(s&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[me]=[];for(let Se=0;Se<v.mipmaps.length;Se++)N.__webglFramebuffer[me][Se]=t.createFramebuffer()}else N.__webglFramebuffer[me]=t.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)N.__webglFramebuffer[me]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ce)if(r.drawBuffers){const me=R.texture;for(let Se=0,k=me.length;Se<k;Se++){const xe=i.get(me[Se]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&fe(R)===!1){const me=ce?v:[v];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Se=0;Se<me.length;Se++){const k=me[Se];N.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Se]);const xe=a.convert(k.format,k.colorSpace),he=a.convert(k.type),De=D(k.internalFormat,xe,he,k.colorSpace,R.isXRRenderTarget===!0),Le=te(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,De,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,N.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),S(N.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Y(t.TEXTURE_CUBE_MAP,v,be);for(let me=0;me<6;me++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)ye(N.__webglFramebuffer[me][Se],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else ye(N.__webglFramebuffer[me],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);C(v,be)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const me=R.texture;for(let Se=0,k=me.length;Se<k;Se++){const xe=me[Se],he=i.get(xe);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),Y(t.TEXTURE_2D,xe,be),ye(N.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),C(xe,be)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,K.__webglTexture),Y(me,v,be),s&&v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)ye(N.__webglFramebuffer[Se],R,v,t.COLOR_ATTACHMENT0,me,Se);else ye(N.__webglFramebuffer,R,v,t.COLOR_ATTACHMENT0,me,0);C(v,be)&&w(me),n.unbindTexture()}R.depthBuffer&&x(R)}function V(R){const v=E(R)||s,N=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let K=0,Q=N.length;K<Q;K++){const ce=N[K];if(C(ce,v)){const be=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(ce).__webglTexture;n.bindTexture(be,me),w(be),n.unbindTexture()}}}function J(R){if(s&&R.samples>0&&fe(R)===!1){const v=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],N=R.width,K=R.height;let Q=t.COLOR_BUFFER_BIT;const ce=[],be=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(R),Se=R.isWebGLMultipleRenderTargets===!0;if(Se)for(let k=0;k<v.length;k++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let k=0;k<v.length;k++){ce.push(t.COLOR_ATTACHMENT0+k),R.depthBuffer&&ce.push(be);const xe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(xe===!1&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),Se&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[k]),xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Se){const he=i.get(v[k]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,N,K,0,0,N,K,Q,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let k=0;k<v.length;k++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,me.__webglColorRenderbuffer[k]);const xe=i.get(v[k]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function te(R){return Math.min(f,R.samples)}function fe(R){const v=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function de(R){const v=o.render.frame;b.get(R)!==v&&(b.set(R,v),R.update())}function Ce(R,v){const N=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===tu||N!==ci&&N!==xn&&(ct.getTransfer(N)===ft?s===!1?e.has("EXT_sRGB")===!0&&K===Ln?(R.format=tu,R.minFilter=_n,R.generateMipmaps=!1):v=Kg.sRGBToLinear(v):(K!==Ln||Q!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=ie,this.resetTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=pe,this.rebindTextures=P,this.setupRenderTarget=U,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=x,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=fe}function $A(t,e,n){const i=n.isWebGL2;function r(a,o=xn){let s;const l=ct.getTransfer(o);if(a===ki)return t.UNSIGNED_BYTE;if(a===Gg)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Vg)return t.UNSIGNED_SHORT_5_5_5_1;if(a===gE)return t.BYTE;if(a===_E)return t.SHORT;if(a===tf)return t.UNSIGNED_SHORT;if(a===Hg)return t.INT;if(a===Pi)return t.UNSIGNED_INT;if(a===Ii)return t.FLOAT;if(a===ps)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===vE)return t.ALPHA;if(a===Ln)return t.RGBA;if(a===xE)return t.LUMINANCE;if(a===yE)return t.LUMINANCE_ALPHA;if(a===yr)return t.DEPTH_COMPONENT;if(a===_a)return t.DEPTH_STENCIL;if(a===tu)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===EE)return t.RED;if(a===Wg)return t.RED_INTEGER;if(a===bE)return t.RG;if(a===Xg)return t.RG_INTEGER;if(a===Yg)return t.RGBA_INTEGER;if(a===Wl||a===Xl||a===Yl||a===$l)if(l===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Xd||a===Yd||a===$d||a===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Yd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ME)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===qd||a===Kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===qd)return l===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Kd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Zd||a===Jd||a===Qd||a===eh||a===th||a===nh||a===ih||a===rh||a===ah||a===sh||a===oh||a===lh||a===ch||a===uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Zd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Jd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Qd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===eh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===th)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===nh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ih)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===rh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ah)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===sh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===oh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===lh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ch)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===uh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===jl||a===fh||a===dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===jl)return l===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===SE||a===hh||a===ph||a===mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===jl)return s.COMPRESSED_RED_RGTC1_EXT;if(a===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xr?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class jA extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,b=.005;c.inputState.pinching&&h>p+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class KA extends rn{constructor(e,n,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:yr,u!==yr&&u!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yr&&(i=Pi),i===void 0&&u===_a&&(i=xr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ZA extends Rr{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,b=null;const y=n.getContextAttributes();let m=null,d=null;const _=[],g=[],E=new un;E.layers.enable(1),E.viewport=new gt;const A=new un;A.layers.enable(2),A.viewport=new gt;const C=[E,A],w=new jA;w.layers.enable(1),w.layers.enable(2);let D=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=_[B];return Z===void 0&&(Z=new _c,_[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=_[B];return Z===void 0&&(Z=new _c,_[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=_[B];return Z===void 0&&(Z=new _c,_[B]=Z),Z.getHandSpace()};function L(B){const Z=g.indexOf(B.inputSource);if(Z===-1)return;const pe=_[Z];pe!==void 0&&(pe.update(B.inputSource,B.frame,c||o),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",F);for(let B=0;B<_.length;B++){const Z=g[B];Z!==null&&(g[B]=null,_[B].disconnect(Z))}D=null,T=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),d=new Sr(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Z=null,pe=null,ve=null;y.depth&&(ve=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=y.stencil?_a:yr,pe=y.stencil?xr:Pi);const Me={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:a};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),d=new Sr(h.textureWidth,h.textureHeight,{format:Ln,type:ki,depthTexture:new KA(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ae=e.properties.get(d);Ae.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(B){for(let Z=0;Z<B.removed.length;Z++){const pe=B.removed[Z],ve=g.indexOf(pe);ve>=0&&(g[ve]=null,_[ve].disconnect(pe))}for(let Z=0;Z<B.added.length;Z++){const pe=B.added[Z];let ve=g.indexOf(pe);if(ve===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=g.length){g.push(pe),ve=Ae;break}else if(g[Ae]===null){g[Ae]=pe,ve=Ae;break}if(ve===-1)break}const Me=_[ve];Me&&Me.connect(pe)}}const G=new X,O=new X;function W(B,Z,pe){G.setFromMatrixPosition(Z.matrixWorld),O.setFromMatrixPosition(pe.matrixWorld);const ve=G.distanceTo(O),Me=Z.projectionMatrix.elements,Ae=pe.projectionMatrix.elements,Y=Me[14]/(Me[10]-1),oe=Me[14]/(Me[10]+1),re=(Me[9]+1)/Me[5],ge=(Me[9]-1)/Me[5],ye=(Me[8]-1)/Me[0],S=(Ae[8]+1)/Ae[0],M=Y*ye,x=Y*S,P=ve/(-ye+S),U=P*-ye;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(U),B.translateZ(P),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const V=Y+P,J=oe+P,te=M-U,fe=x+(ve-U),de=re*oe/J*V,Ce=ge*oe/J*V;B.projectionMatrix.makePerspective(te,fe,de,Ce,V,J),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;w.near=A.near=E.near=B.near,w.far=A.far=E.far=B.far,(D!==w.near||T!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,T=w.far);const Z=B.parent,pe=w.cameras;q(w,Z);for(let ve=0;ve<pe.length;ve++)q(pe[ve],Z);pe.length===2?W(w,E,A):w.projectionMatrix.copy(E.projectionMatrix),$(B,w,Z)};function $(B,Z,pe){pe===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ms*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let ie=null;function ee(B,Z){if(u=Z.getViewerPose(c||o),b=Z,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ve=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Me=0;Me<pe.length;Me++){const Ae=pe[Me];let Y=null;if(p!==null)Y=p.getViewport(Ae);else{const re=f.getViewSubImage(h,Ae);Y=re.viewport,Me===0&&(e.setRenderTargetTextures(d,re.colorTexture,h.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(d))}let oe=C[Me];oe===void 0&&(oe=new un,oe.layers.enable(Me),oe.viewport=new gt,C[Me]=oe),oe.matrix.fromArray(Ae.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ae.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Y.x,Y.y,Y.width,Y.height),Me===0&&(w.matrix.copy(oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(oe)}}for(let pe=0;pe<_.length;pe++){const ve=g[pe],Me=_[pe];ve!==null&&Me!==void 0&&Me.update(ve,Z,c||o)}ie&&ie(B,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),b=null}const le=new s_;le.setAnimationLoop(ee),this.setAnimationLoop=function(B){ie=B},this.dispose=function(){}}}function JA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,i_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,g,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),f(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d)):d.isMeshStandardMaterial?(a(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(a(m,d),b(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),y(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,_,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QA(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const E=g.program;i.uniformBlockBinding(_,E)}function c(_,g){let E=r[_.id];E===void 0&&(b(_),E=u(_),r[_.id]=E,_.addEventListener("dispose",m));const A=g.program;i.updateUBOMapping(_,A);const C=e.render.frame;a[_.id]!==C&&(h(_),a[_.id]=C)}function u(_){const g=f();_.__bindingPointIndex=g;const E=t.createBuffer(),A=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function f(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],E=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=E.length;C<w;C++){const D=E[C];if(p(D,C,A)===!0){const T=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let F=0;F<L.length;F++){const G=L[F],O=y(G);typeof G=="number"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,T+z,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=G.elements[0],D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=G.elements[0],D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=G.elements[0]):(G.toArray(D.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,T,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,E){const A=_.value;if(E[g]===void 0){if(typeof A=="number")E[g]=A;else{const C=Array.isArray(A)?A:[A],w=[];for(let D=0;D<C.length;D++)w.push(C[D].clone());E[g]=w}return!0}else if(typeof A=="number"){if(E[g]!==A)return E[g]=A,!0}else{const C=Array.isArray(E[g])?E[g]:[E[g]],w=Array.isArray(A)?A:[A];for(let D=0;D<C.length;D++){const T=C[D];if(T.equals(w[D])===!1)return T.copy(w[D]),!0}}return!1}function b(_){const g=_.uniforms;let E=0;const A=16;let C=0;for(let w=0,D=g.length;w<D;w++){const T=g[w],L={boundary:0,storage:0},z=Array.isArray(T.value)?T.value:[T.value];for(let F=0,G=z.length;F<G;F++){const O=z[F],W=y(O);L.boundary+=W.boundary,L.storage+=W.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,w>0){C=E%A;const F=A-C;C!==0&&F-L.boundary<0&&(E+=A-C,T.__offset=E)}E+=L.storage}return C=E%A,C>0&&(E+=A-C),_.__size=E,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const E=o.indexOf(g.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},a={}}return{bind:l,update:c,dispose:d}}class d_{constructor(e={}){const{canvas:n=ZE(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),b=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const g=this;let E=!1,A=0,C=0,w=null,D=-1,T=null;const L=new gt,z=new gt;let F=null;const G=new Qe(0);let O=0,W=n.width,q=n.height,$=1,ie=null,ee=null;const le=new gt(0,0,W,q),B=new gt(0,0,W,q);let Z=!1;const pe=new of;let ve=!1,Me=!1,Ae=null;const Y=new At,oe=new Xe,re=new X,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return w===null?$:1}let S=i;function M(I,j){for(let ne=0;ne<I.length;ne++){const ae=I[ne],se=n.getContext(ae,j);if(se!==null)return se}return null}try{const I={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qu}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",Te,!1),S===null){const j=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&j.shift(),S=M(j,I),S===null)throw M(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let x,P,U,V,J,te,fe,de,Ce,R,v,N,K,Q,ce,be,me,Se,k,xe,he,De,Le,Fe;function Ue(){x=new cT(S),P=new iT(S,x,e),x.init(P),De=new $A(S,x,P),U=new XA(S,x,P),V=new dT(S),J=new PA,te=new YA(S,x,U,J,P,De,V),fe=new aT(g),de=new lT(g),Ce=new bb(S,P),Le=new tT(S,x,Ce,P),R=new uT(S,Ce,V,Le),v=new gT(S,R,Ce,V),k=new mT(S,P,te),be=new rT(J),N=new LA(g,fe,de,x,P,Le,be),K=new JA(g,J),Q=new NA,ce=new BA(x,P),Se=new eT(g,fe,de,U,v,h,l),me=new WA(g,v,P),Fe=new QA(S,V,P,U),xe=new nT(S,x,V,P),he=new fT(S,x,V,P),V.programs=N.programs,g.capabilities=P,g.extensions=x,g.properties=J,g.renderLists=Q,g.shadowMap=me,g.state=U,g.info=V}Ue();const Ne=new ZA(g,S);this.xr=Ne,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const I=x.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=x.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(W,q,!1))},this.getSize=function(I){return I.set(W,q)},this.setSize=function(I,j,ne=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=I,q=j,n.width=Math.floor(I*$),n.height=Math.floor(j*$),ne===!0&&(n.style.width=I+"px",n.style.height=j+"px"),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(W*$,q*$).floor()},this.setDrawingBufferSize=function(I,j,ne){W=I,q=j,$=ne,n.width=Math.floor(I*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(le)},this.setViewport=function(I,j,ne,ae){I.isVector4?le.set(I.x,I.y,I.z,I.w):le.set(I,j,ne,ae),U.viewport(L.copy(le).multiplyScalar($).floor())},this.getScissor=function(I){return I.copy(B)},this.setScissor=function(I,j,ne,ae){I.isVector4?B.set(I.x,I.y,I.z,I.w):B.set(I,j,ne,ae),U.scissor(z.copy(B).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(I){U.setScissorTest(Z=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){ee=I},this.getClearColor=function(I){return I.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(I=!0,j=!0,ne=!0){let ae=0;if(I){let se=!1;if(w!==null){const Pe=w.texture.format;se=Pe===Yg||Pe===Xg||Pe===Wg}if(se){const Pe=w.texture.type,ke=Pe===ki||Pe===Pi||Pe===tf||Pe===xr||Pe===Gg||Pe===Vg,He=Se.getClearColor(),Ve=Se.getClearAlpha(),Ke=He.r,Ye=He.g,$e=He.b;ke?(p[0]=Ke,p[1]=Ye,p[2]=$e,p[3]=Ve,S.clearBufferuiv(S.COLOR,0,p)):(b[0]=Ke,b[1]=Ye,b[2]=$e,b[3]=Ve,S.clearBufferiv(S.COLOR,0,b))}else ae|=S.COLOR_BUFFER_BIT}j&&(ae|=S.DEPTH_BUFFER_BIT),ne&&(ae|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Q.dispose(),ce.dispose(),J.dispose(),fe.dispose(),de.dispose(),v.dispose(),Le.dispose(),Fe.dispose(),N.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",hn),Ne.removeEventListener("sessionend",ut),Ae&&(Ae.dispose(),Ae=null),Yt.stop()};function et(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=V.autoReset,j=me.enabled,ne=me.autoUpdate,ae=me.needsUpdate,se=me.type;Ue(),V.autoReset=I,me.enabled=j,me.autoUpdate=ne,me.needsUpdate=ae,me.type=se}function Te(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function _e(I){const j=I.target;j.removeEventListener("dispose",_e),ue(j)}function ue(I){Ee(I),J.remove(I)}function Ee(I){const j=J.get(I).programs;j!==void 0&&(j.forEach(function(ne){N.releaseProgram(ne)}),I.isShaderMaterial&&N.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,ne,ae,se,Pe){j===null&&(j=ge);const ke=se.isMesh&&se.matrixWorld.determinant()<0,He=_1(I,j,ne,ae,se);U.setMaterial(ae,ke);let Ve=ne.index,Ke=1;if(ae.wireframe===!0){if(Ve=R.getWireframeAttribute(ne),Ve===void 0)return;Ke=2}const Ye=ne.drawRange,$e=ne.attributes.position;let bt=Ye.start*Ke,sn=(Ye.start+Ye.count)*Ke;Pe!==null&&(bt=Math.max(bt,Pe.start*Ke),sn=Math.min(sn,(Pe.start+Pe.count)*Ke)),Ve!==null?(bt=Math.max(bt,0),sn=Math.min(sn,Ve.count)):$e!=null&&(bt=Math.max(bt,0),sn=Math.min(sn,$e.count));const Dt=sn-bt;if(Dt<0||Dt===1/0)return;Le.setup(se,ae,He,ne,Ve);let Xn,yt=xe;if(Ve!==null&&(Xn=Ce.get(Ve),yt=he,yt.setIndex(Xn)),se.isMesh)ae.wireframe===!0?(U.setLineWidth(ae.wireframeLinewidth*ye()),yt.setMode(S.LINES)):yt.setMode(S.TRIANGLES);else if(se.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),U.setLineWidth(nt*ye()),se.isLineSegments?yt.setMode(S.LINES):se.isLineLoop?yt.setMode(S.LINE_LOOP):yt.setMode(S.LINE_STRIP)}else se.isPoints?yt.setMode(S.POINTS):se.isSprite&&yt.setMode(S.TRIANGLES);if(se.isInstancedMesh)yt.renderInstances(bt,Dt,se.count);else if(ne.isInstancedBufferGeometry){const nt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,wl=Math.min(ne.instanceCount,nt);yt.renderInstances(bt,Dt,wl)}else yt.render(bt,Dt)};function Be(I,j,ne){I.transparent===!0&&I.side===ti&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,Ds(I,j,ne),I.side=Hi,I.needsUpdate=!0,Ds(I,j,ne),I.side=ti):Ds(I,j,ne)}this.compile=function(I,j,ne=null){ne===null&&(ne=I),m=ce.get(ne),m.init(),_.push(m),ne.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(m.pushLight(se),se.castShadow&&m.pushShadow(se))}),I!==ne&&I.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(m.pushLight(se),se.castShadow&&m.pushShadow(se))}),m.setupLights(g._useLegacyLights);const ae=new Set;return I.traverse(function(se){const Pe=se.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const He=Pe[ke];Be(He,ne,se),ae.add(He)}else Be(Pe,ne,se),ae.add(Pe)}),_.pop(),m=null,ae},this.compileAsync=function(I,j,ne=null){const ae=this.compile(I,j,ne);return new Promise(se=>{function Pe(){if(ae.forEach(function(ke){J.get(ke).currentProgram.isReady()&&ae.delete(ke)}),ae.size===0){se(I);return}setTimeout(Pe,10)}x.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let tt=null;function Mt(I){tt&&tt(I)}function hn(){Yt.stop()}function ut(){Yt.start()}const Yt=new s_;Yt.setAnimationLoop(Mt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(I){tt=I,Ne.setAnimationLoop(I),I===null?Yt.stop():Yt.start()},Ne.addEventListener("sessionstart",hn),Ne.addEventListener("sessionend",ut),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(j),j=Ne.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,j,w),m=ce.get(I,_.length),m.init(),_.push(m),Y.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),pe.setFromProjectionMatrix(Y),Me=this.localClippingEnabled,ve=be.init(this.clippingPlanes,Me),y=Q.get(I,d.length),y.init(),d.push(y),On(I,j,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(ie,ee),this.info.render.frame++,ve===!0&&be.beginShadows();const ne=m.state.shadowsArray;if(me.render(ne,I,j),ve===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(y,I),m.setupLights(g._useLegacyLights),j.isArrayCamera){const ae=j.cameras;for(let se=0,Pe=ae.length;se<Pe;se++){const ke=ae[se];Nf(y,I,ke,ke.viewport)}}else Nf(y,I,j);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(g,I,j),Le.resetDefaultState(),D=-1,T=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function On(I,j,ne,ae){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)ne=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||pe.intersectsSprite(I)){ae&&re.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Y);const ke=v.update(I),He=I.material;He.visible&&y.push(I,ke,He,ne,re.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||pe.intersectsObject(I))){const ke=v.update(I),He=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),re.copy(I.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),re.copy(ke.boundingSphere.center)),re.applyMatrix4(I.matrixWorld).applyMatrix4(Y)),Array.isArray(He)){const Ve=ke.groups;for(let Ke=0,Ye=Ve.length;Ke<Ye;Ke++){const $e=Ve[Ke],bt=He[$e.materialIndex];bt&&bt.visible&&y.push(I,ke,bt,ne,re.z,$e)}}else He.visible&&y.push(I,ke,He,ne,re.z,null)}}const Pe=I.children;for(let ke=0,He=Pe.length;ke<He;ke++)On(Pe[ke],j,ne,ae)}function Nf(I,j,ne,ae){const se=I.opaque,Pe=I.transmissive,ke=I.transparent;m.setupLightsView(ne),ve===!0&&be.setGlobalState(g.clippingPlanes,ne),Pe.length>0&&g1(se,Pe,j,ne),ae&&U.viewport(L.copy(ae)),se.length>0&&Ns(se,j,ne),Pe.length>0&&Ns(Pe,j,ne),ke.length>0&&Ns(ke,j,ne),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function g1(I,j,ne,ae){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Pe=P.isWebGL2;Ae===null&&(Ae=new Sr(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?ps:ki,minFilter:hs,samples:Pe?4:0})),g.getDrawingBufferSize(oe),Pe?Ae.setSize(oe.x,oe.y):Ae.setSize(Xo(oe.x),Xo(oe.y));const ke=g.getRenderTarget();g.setRenderTarget(Ae),g.getClearColor(G),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const He=g.toneMapping;g.toneMapping=Fi,Ns(I,ne,ae),te.updateMultisampleRenderTarget(Ae),te.updateRenderTargetMipmap(Ae);let Ve=!1;for(let Ke=0,Ye=j.length;Ke<Ye;Ke++){const $e=j[Ke],bt=$e.object,sn=$e.geometry,Dt=$e.material,Xn=$e.group;if(Dt.side===ti&&bt.layers.test(ae.layers)){const yt=Dt.side;Dt.side=nn,Dt.needsUpdate=!0,Df(bt,ne,ae,sn,Dt,Xn),Dt.side=yt,Dt.needsUpdate=!0,Ve=!0}}Ve===!0&&(te.updateMultisampleRenderTarget(Ae),te.updateRenderTargetMipmap(Ae)),g.setRenderTarget(ke),g.setClearColor(G,O),g.toneMapping=He}function Ns(I,j,ne){const ae=j.isScene===!0?j.overrideMaterial:null;for(let se=0,Pe=I.length;se<Pe;se++){const ke=I[se],He=ke.object,Ve=ke.geometry,Ke=ae===null?ke.material:ae,Ye=ke.group;He.layers.test(ne.layers)&&Df(He,j,ne,Ve,Ke,Ye)}}function Df(I,j,ne,ae,se,Pe){I.onBeforeRender(g,j,ne,ae,se,Pe),I.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),se.onBeforeRender(g,j,ne,ae,I,Pe),se.transparent===!0&&se.side===ti&&se.forceSinglePass===!1?(se.side=nn,se.needsUpdate=!0,g.renderBufferDirect(ne,j,ae,se,I,Pe),se.side=Hi,se.needsUpdate=!0,g.renderBufferDirect(ne,j,ae,se,I,Pe),se.side=ti):g.renderBufferDirect(ne,j,ae,se,I,Pe),I.onAfterRender(g,j,ne,ae,se,Pe)}function Ds(I,j,ne){j.isScene!==!0&&(j=ge);const ae=J.get(I),se=m.state.lights,Pe=m.state.shadowsArray,ke=se.state.version,He=N.getParameters(I,se.state,Pe,j,ne),Ve=N.getProgramCacheKey(He);let Ke=ae.programs;ae.environment=I.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(I.isMeshStandardMaterial?de:fe).get(I.envMap||ae.environment),Ke===void 0&&(I.addEventListener("dispose",_e),Ke=new Map,ae.programs=Ke);let Ye=Ke.get(Ve);if(Ye!==void 0){if(ae.currentProgram===Ye&&ae.lightsStateVersion===ke)return Uf(I,He),Ye}else He.uniforms=N.getUniforms(I),I.onBuild(ne,He,g),I.onBeforeCompile(He,g),Ye=N.acquireProgram(He,Ve),Ke.set(Ve,Ye),ae.uniforms=He.uniforms;const $e=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&($e.clippingPlanes=be.uniform),Uf(I,He),ae.needsLights=x1(I),ae.lightsStateVersion=ke,ae.needsLights&&($e.ambientLightColor.value=se.state.ambient,$e.lightProbe.value=se.state.probe,$e.directionalLights.value=se.state.directional,$e.directionalLightShadows.value=se.state.directionalShadow,$e.spotLights.value=se.state.spot,$e.spotLightShadows.value=se.state.spotShadow,$e.rectAreaLights.value=se.state.rectArea,$e.ltc_1.value=se.state.rectAreaLTC1,$e.ltc_2.value=se.state.rectAreaLTC2,$e.pointLights.value=se.state.point,$e.pointLightShadows.value=se.state.pointShadow,$e.hemisphereLights.value=se.state.hemi,$e.directionalShadowMap.value=se.state.directionalShadowMap,$e.directionalShadowMatrix.value=se.state.directionalShadowMatrix,$e.spotShadowMap.value=se.state.spotShadowMap,$e.spotLightMatrix.value=se.state.spotLightMatrix,$e.spotLightMap.value=se.state.spotLightMap,$e.pointShadowMap.value=se.state.pointShadowMap,$e.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.currentProgram=Ye,ae.uniformsList=null,Ye}function Of(I){if(I.uniformsList===null){const j=I.currentProgram.getUniforms();I.uniformsList=Po.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function Uf(I,j){const ne=J.get(I);ne.outputColorSpace=j.outputColorSpace,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function _1(I,j,ne,ae,se){j.isScene!==!0&&(j=ge),te.resetTextureUnits();const Pe=j.fog,ke=ae.isMeshStandardMaterial?j.environment:null,He=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ci,Ve=(ae.isMeshStandardMaterial?de:fe).get(ae.envMap||ke),Ke=ae.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ye=!!ne.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),$e=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,sn=!!ne.morphAttributes.color;let Dt=Fi;ae.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=g.toneMapping);const Xn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=Xn!==void 0?Xn.length:0,nt=J.get(ae),wl=m.state.lights;if(ve===!0&&(Me===!0||I!==T)){const on=I===T&&ae.id===D;be.setState(ae,I,on)}let St=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==wl.state.version||nt.outputColorSpace!==He||se.isInstancedMesh&&nt.instancing===!1||!se.isInstancedMesh&&nt.instancing===!0||se.isSkinnedMesh&&nt.skinning===!1||!se.isSkinnedMesh&&nt.skinning===!0||se.isInstancedMesh&&nt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&nt.instancingColor===!1&&se.instanceColor!==null||nt.envMap!==Ve||ae.fog===!0&&nt.fog!==Pe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==be.numPlanes||nt.numIntersection!==be.numIntersection)||nt.vertexAlphas!==Ke||nt.vertexTangents!==Ye||nt.morphTargets!==$e||nt.morphNormals!==bt||nt.morphColors!==sn||nt.toneMapping!==Dt||P.isWebGL2===!0&&nt.morphTargetsCount!==yt)&&(St=!0):(St=!0,nt.__version=ae.version);let qi=nt.currentProgram;St===!0&&(qi=Ds(ae,j,se));let Ff=!1,Da=!1,Cl=!1;const $t=qi.getUniforms(),Ki=nt.uniforms;if(U.useProgram(qi.program)&&(Ff=!0,Da=!0,Cl=!0),ae.id!==D&&(D=ae.id,Da=!0),Ff||T!==I){$t.setValue(S,"projectionMatrix",I.projectionMatrix),$t.setValue(S,"viewMatrix",I.matrixWorldInverse);const on=$t.map.cameraPosition;on!==void 0&&on.setValue(S,re.setFromMatrixPosition(I.matrixWorld)),P.logarithmicDepthBuffer&&$t.setValue(S,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&$t.setValue(S,"isOrthographic",I.isOrthographicCamera===!0),T!==I&&(T=I,Da=!0,Cl=!0)}if(se.isSkinnedMesh){$t.setOptional(S,se,"bindMatrix"),$t.setOptional(S,se,"bindMatrixInverse");const on=se.skeleton;on&&(P.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),$t.setValue(S,"boneTexture",on.boneTexture,te),$t.setValue(S,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rl=ne.morphAttributes;if((Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0&&P.isWebGL2===!0)&&k.update(se,ne,qi),(Da||nt.receiveShadow!==se.receiveShadow)&&(nt.receiveShadow=se.receiveShadow,$t.setValue(S,"receiveShadow",se.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Ki.envMap.value=Ve,Ki.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Da&&($t.setValue(S,"toneMappingExposure",g.toneMappingExposure),nt.needsLights&&v1(Ki,Cl),Pe&&ae.fog===!0&&K.refreshFogUniforms(Ki,Pe),K.refreshMaterialUniforms(Ki,ae,$,q,Ae),Po.upload(S,Of(nt),Ki,te)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Po.upload(S,Of(nt),Ki,te),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&$t.setValue(S,"center",se.center),$t.setValue(S,"modelViewMatrix",se.modelViewMatrix),$t.setValue(S,"normalMatrix",se.normalMatrix),$t.setValue(S,"modelMatrix",se.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const on=ae.uniformsGroups;for(let Ll=0,y1=on.length;Ll<y1;Ll++)if(P.isWebGL2){const kf=on[Ll];Fe.update(kf,qi),Fe.bind(kf,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function v1(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function x1(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,j,ne){J.get(I.texture).__webglTexture=j,J.get(I.depthTexture).__webglTexture=ne;const ae=J.get(I);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=ne===void 0,ae.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,j){const ne=J.get(I);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(I,j=0,ne=0){w=I,A=j,C=ne;let ae=!0,se=null,Pe=!1,ke=!1;if(I){const Ve=J.get(I);Ve.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(S.FRAMEBUFFER,null),ae=!1):Ve.__webglFramebuffer===void 0?te.setupRenderTarget(I):Ve.__hasExternalTextures&&te.rebindTextures(I,J.get(I.texture).__webglTexture,J.get(I.depthTexture).__webglTexture);const Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ke=!0);const Ye=J.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?se=Ye[j][ne]:se=Ye[j],Pe=!0):P.isWebGL2&&I.samples>0&&te.useMultisampledRTT(I)===!1?se=J.get(I).__webglMultisampledFramebuffer:Array.isArray(Ye)?se=Ye[ne]:se=Ye,L.copy(I.viewport),z.copy(I.scissor),F=I.scissorTest}else L.copy(le).multiplyScalar($).floor(),z.copy(B).multiplyScalar($).floor(),F=Z;if(U.bindFramebuffer(S.FRAMEBUFFER,se)&&P.drawBuffers&&ae&&U.drawBuffers(I,se),U.viewport(L),U.scissor(z),U.setScissorTest(F),Pe){const Ve=J.get(I.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,ne)}else if(ke){const Ve=J.get(I.texture),Ke=j||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ve.__webglTexture,ne||0,Ke)}D=-1},this.readRenderTargetPixels=function(I,j,ne,ae,se,Pe,ke){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=J.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){U.bindFramebuffer(S.FRAMEBUFFER,He);try{const Ve=I.texture,Ke=Ve.format,Ye=Ve.type;if(Ke!==Ln&&De.convert(Ke)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ye===ps&&(x.has("EXT_color_buffer_half_float")||P.isWebGL2&&x.has("EXT_color_buffer_float"));if(Ye!==ki&&De.convert(Ye)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Ii&&(P.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-ae&&ne>=0&&ne<=I.height-se&&S.readPixels(j,ne,ae,se,De.convert(Ke),De.convert(Ye),Pe)}finally{const Ve=w!==null?J.get(w).__webglFramebuffer:null;U.bindFramebuffer(S.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(I,j,ne=0){const ae=Math.pow(2,-ne),se=Math.floor(j.image.width*ae),Pe=Math.floor(j.image.height*ae);te.setTexture2D(j,0),S.copyTexSubImage2D(S.TEXTURE_2D,ne,0,0,I.x,I.y,se,Pe),U.unbindTexture()},this.copyTextureToTexture=function(I,j,ne,ae=0){const se=j.image.width,Pe=j.image.height,ke=De.convert(ne.format),He=De.convert(ne.type);te.setTexture2D(ne,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ne.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ae,I.x,I.y,se,Pe,ke,He,j.image.data):j.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ae,I.x,I.y,j.mipmaps[0].width,j.mipmaps[0].height,ke,j.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,ae,I.x,I.y,ke,He,j.image),ae===0&&ne.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(I,j,ne,ae,se=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=I.max.x-I.min.x+1,ke=I.max.y-I.min.y+1,He=I.max.z-I.min.z+1,Ve=De.convert(ae.format),Ke=De.convert(ae.type);let Ye;if(ae.isData3DTexture)te.setTexture3D(ae,0),Ye=S.TEXTURE_3D;else if(ae.isDataArrayTexture)te.setTexture2DArray(ae,0),Ye=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ae.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ae.unpackAlignment);const $e=S.getParameter(S.UNPACK_ROW_LENGTH),bt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),sn=S.getParameter(S.UNPACK_SKIP_PIXELS),Dt=S.getParameter(S.UNPACK_SKIP_ROWS),Xn=S.getParameter(S.UNPACK_SKIP_IMAGES),yt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,yt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,yt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,I.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,I.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,I.min.z),ne.isDataTexture||ne.isData3DTexture?S.texSubImage3D(Ye,se,j.x,j.y,j.z,Pe,ke,He,Ve,Ke,yt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(Ye,se,j.x,j.y,j.z,Pe,ke,He,Ve,yt.data)):S.texSubImage3D(Ye,se,j.x,j.y,j.z,Pe,ke,He,Ve,Ke,yt),S.pixelStorei(S.UNPACK_ROW_LENGTH,$e),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,sn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Dt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Xn),se===0&&ae.generateMipmaps&&S.generateMipmap(Ye),U.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?te.setTextureCube(I,0):I.isData3DTexture?te.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?te.setTexture2DArray(I,0):te.setTexture2D(I,0),U.unbindTexture()},this.resetState=function(){A=0,C=0,w=null,U.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nf?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===ml?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Er:$g}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Er?kt:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ew extends d_{}ew.prototype.isWebGL1Renderer=!0;class tw extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class nw extends Cs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class iw{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],b=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return b}return null}}}const rw=new iw;class uf{constructor(e){this.manager=e!==void 0?e:rw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}uf.DEFAULT_MATERIAL_NAME="__DEFAULT";class aw extends uf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=rp.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=gs("img");function l(){u(),rp.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class sw extends uf{constructor(e){super(e)}load(e,n,i,r){const a=new rn,o=new aw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class ff extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const vc=new At,ap=new X,sp=new X;class h_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ap.setFromMatrixPosition(e.matrixWorld),n.position.copy(ap),sp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sp),n.updateMatrixWorld(),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const op=new At,Ga=new X,xc=new X;class ow extends h_{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ga),xc.copy(i.position),xc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(xc),i.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),op.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(op)}}class lw extends ff{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cw extends h_{constructor(){super(new o_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uw extends ff{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new cw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fw extends ff{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=lp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function lp(){return(typeof performance>"u"?Date:performance).now()}class hw{constructor(e,n,i=0,r=1/0){this.ray=new af(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return ru(e,this,i,n),i.sort(cp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ru(e[r],this,i,n);return i.sort(cp),i}}function cp(t,e){return t.distance-e.distance}function ru(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let a=0,o=r.length;a<o;a++)ru(r[a],e,n,!0)}}class up{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);const fp={type:"change"},yc={type:"start"},dp={type:"end"},fo=new af,hp=new Li,pw=Math.cos(70*KE.DEG2RAD);class mw extends Rr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",v),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fp),i.update(),a=r.NONE},this.update=function(){const k=new X,xe=new Tr().setFromUnitVectors(e.up,new X(0,1,0)),he=xe.clone().invert(),De=new X,Le=new Tr,Fe=new X,Ue=2*Math.PI;return function(et=null){const H=i.object.position;k.copy(H).sub(i.target),k.applyQuaternion(xe),s.setFromVector3(k),i.autoRotate&&a===r.NONE&&z(T(et)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Te=i.minAzimuthAngle,_e=i.maxAzimuthAngle;isFinite(Te)&&isFinite(_e)&&(Te<-Math.PI?Te+=Ue:Te>Math.PI&&(Te-=Ue),_e<-Math.PI?_e+=Ue:_e>Math.PI&&(_e-=Ue),Te<=_e?s.theta=Math.max(Te,Math.min(_e,s.theta)):s.theta=s.theta>(Te+_e)/2?Math.max(Te,s.theta):Math.min(_e,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=ee(s.radius):s.radius=ee(s.radius*c),k.setFromSpherical(s),k.applyQuaternion(he),H.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ue=!1;if(i.zoomToCursor&&C){let Ee=null;if(i.object.isPerspectiveCamera){const Be=k.length();Ee=ee(Be*c);const tt=Be-Ee;i.object.position.addScaledVector(E,tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Be=new X(A.x,A.y,0);Be.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ue=!0;const tt=new X(A.x,A.y,0);tt.unproject(i.object),i.object.position.sub(tt).add(Be),i.object.updateMatrixWorld(),Ee=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ee!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ee).add(i.object.position):(fo.origin.copy(i.object.position),fo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(fo.direction))<pw?e.lookAt(i.target):(hp.setFromNormalAndCoplanarPoint(i.object.up,i.target),fo.intersectPlane(hp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ue=!0);return c=1,C=!1,ue||De.distanceToSquared(i.object.position)>o||8*(1-Le.dot(i.object.quaternion))>o||Fe.distanceToSquared(i.target)>0?(i.dispatchEvent(fp),De.copy(i.object.position),Le.copy(i.object.quaternion),Fe.copy(i.target),ue=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",J),i.domElement.removeEventListener("pointercancel",fe),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",te),i.domElement.removeEventListener("pointerup",fe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new up,l=new up;let c=1;const u=new X,f=new Xe,h=new Xe,p=new Xe,b=new Xe,y=new Xe,m=new Xe,d=new Xe,_=new Xe,g=new Xe,E=new X,A=new Xe;let C=!1;const w=[],D={};function T(k){return k!==null?2*Math.PI/60*i.autoRotateSpeed*k:2*Math.PI/60/60*i.autoRotateSpeed}function L(){return Math.pow(.95,i.zoomSpeed)}function z(k){l.theta-=k}function F(k){l.phi-=k}const G=function(){const k=new X;return function(he,De){k.setFromMatrixColumn(De,0),k.multiplyScalar(-he),u.add(k)}}(),O=function(){const k=new X;return function(he,De){i.screenSpacePanning===!0?k.setFromMatrixColumn(De,1):(k.setFromMatrixColumn(De,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(he),u.add(k)}}(),W=function(){const k=new X;return function(he,De){const Le=i.domElement;if(i.object.isPerspectiveCamera){const Fe=i.object.position;k.copy(Fe).sub(i.target);let Ue=k.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),G(2*he*Ue/Le.clientHeight,i.object.matrix),O(2*De*Ue/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(he*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),O(De*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(k){if(!i.zoomToCursor)return;C=!0;const xe=i.domElement.getBoundingClientRect(),he=k.clientX-xe.left,De=k.clientY-xe.top,Le=xe.width,Fe=xe.height;A.x=he/Le*2-1,A.y=-(De/Fe)*2+1,E.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function le(k){f.set(k.clientX,k.clientY)}function B(k){ie(k),d.set(k.clientX,k.clientY)}function Z(k){b.set(k.clientX,k.clientY)}function pe(k){h.set(k.clientX,k.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const xe=i.domElement;z(2*Math.PI*p.x/xe.clientHeight),F(2*Math.PI*p.y/xe.clientHeight),f.copy(h),i.update()}function ve(k){_.set(k.clientX,k.clientY),g.subVectors(_,d),g.y>0?q(L()):g.y<0&&$(L()),d.copy(_),i.update()}function Me(k){y.set(k.clientX,k.clientY),m.subVectors(y,b).multiplyScalar(i.panSpeed),W(m.x,m.y),b.copy(y),i.update()}function Ae(k){ie(k),k.deltaY<0?$(L()):k.deltaY>0&&q(L()),i.update()}function Y(k){let xe=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),xe=!0;break}xe&&(k.preventDefault(),i.update())}function oe(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),xe=.5*(w[0].pageY+w[1].pageY);f.set(k,xe)}}function re(){if(w.length===1)b.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),xe=.5*(w[0].pageY+w[1].pageY);b.set(k,xe)}}function ge(){const k=w[0].pageX-w[1].pageX,xe=w[0].pageY-w[1].pageY,he=Math.sqrt(k*k+xe*xe);d.set(0,he)}function ye(){i.enableZoom&&ge(),i.enablePan&&re()}function S(){i.enableZoom&&ge(),i.enableRotate&&oe()}function M(k){if(w.length==1)h.set(k.pageX,k.pageY);else{const he=Se(k),De=.5*(k.pageX+he.x),Le=.5*(k.pageY+he.y);h.set(De,Le)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const xe=i.domElement;z(2*Math.PI*p.x/xe.clientHeight),F(2*Math.PI*p.y/xe.clientHeight),f.copy(h)}function x(k){if(w.length===1)y.set(k.pageX,k.pageY);else{const xe=Se(k),he=.5*(k.pageX+xe.x),De=.5*(k.pageY+xe.y);y.set(he,De)}m.subVectors(y,b).multiplyScalar(i.panSpeed),W(m.x,m.y),b.copy(y)}function P(k){const xe=Se(k),he=k.pageX-xe.x,De=k.pageY-xe.y,Le=Math.sqrt(he*he+De*De);_.set(0,Le),g.set(0,Math.pow(_.y/d.y,i.zoomSpeed)),q(g.y),d.copy(_)}function U(k){i.enableZoom&&P(k),i.enablePan&&x(k)}function V(k){i.enableZoom&&P(k),i.enableRotate&&M(k)}function J(k){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",te),i.domElement.addEventListener("pointerup",fe)),ce(k),k.pointerType==="touch"?N(k):de(k))}function te(k){i.enabled!==!1&&(k.pointerType==="touch"?K(k):Ce(k))}function fe(k){be(k),w.length===0&&(i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",te),i.domElement.removeEventListener("pointerup",fe)),i.dispatchEvent(dp),a=r.NONE}function de(k){let xe;switch(k.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Pr.DOLLY:if(i.enableZoom===!1)return;B(k),a=r.DOLLY;break;case Pr.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;Z(k),a=r.PAN}else{if(i.enableRotate===!1)return;le(k),a=r.ROTATE}break;case Pr.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;le(k),a=r.ROTATE}else{if(i.enablePan===!1)return;Z(k),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(yc)}function Ce(k){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;pe(k);break;case r.DOLLY:if(i.enableZoom===!1)return;ve(k);break;case r.PAN:if(i.enablePan===!1)return;Me(k);break}}function R(k){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(k.preventDefault(),i.dispatchEvent(yc),Ae(k),i.dispatchEvent(dp))}function v(k){i.enabled===!1||i.enablePan===!1||Y(k)}function N(k){switch(me(k),w.length){case 1:switch(i.touches.ONE){case Ir.ROTATE:if(i.enableRotate===!1)return;oe(),a=r.TOUCH_ROTATE;break;case Ir.PAN:if(i.enablePan===!1)return;re(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Ir.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(),a=r.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(yc)}function K(k){switch(me(k),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;M(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;x(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;V(k),i.update();break;default:a=r.NONE}}function Q(k){i.enabled!==!1&&k.preventDefault()}function ce(k){w.push(k)}function be(k){delete D[k.pointerId];for(let xe=0;xe<w.length;xe++)if(w[xe].pointerId==k.pointerId){w.splice(xe,1);return}}function me(k){let xe=D[k.pointerId];xe===void 0&&(xe=new Xe,D[k.pointerId]=xe),xe.set(k.pageX,k.pageY)}function Se(k){const xe=k.pointerId===w[0].pointerId?w[1]:w[0];return D[xe.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",J),i.domElement.addEventListener("pointercancel",fe),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}class gw extends ai{constructor(e,n,i=!1,r=!1,a=1e4){const o=new Yi;super(o,n),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(_){this.resolution=_,this.isolation=80,this.size=_,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=a*3;this.positionArray=new Float32Array(g*3);const E=new tn(this.positionArray,3);E.setUsage(Hs),o.setAttribute("position",E),this.normalArray=new Float32Array(g*3);const A=new tn(this.normalArray,3);if(A.setUsage(Hs),o.setAttribute("normal",A),this.enableUvs){this.uvArray=new Float32Array(g*2);const C=new tn(this.uvArray,2);C.setUsage(Hs),o.setAttribute("uv",C)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const C=new tn(this.colorArray,3);C.setUsage(Hs),o.setAttribute("color",C)}o.boundingSphere=new gl(new X,1)};function f(_,g,E){return _+(g-_)*E}function h(_,g,E,A,C,w,D,T,L,z){const F=(E-D)/(T-D),G=s.normal_cache;l[g+0]=A+F*s.delta,l[g+1]=C,l[g+2]=w,c[g+0]=f(G[_+0],G[_+3],F),c[g+1]=f(G[_+1],G[_+4],F),c[g+2]=f(G[_+2],G[_+5],F),u[g+0]=f(s.palette[L*3+0],s.palette[z*3+0],F),u[g+1]=f(s.palette[L*3+1],s.palette[z*3+1],F),u[g+2]=f(s.palette[L*3+2],s.palette[z*3+2],F)}function p(_,g,E,A,C,w,D,T,L,z){const F=(E-D)/(T-D),G=s.normal_cache;l[g+0]=A,l[g+1]=C+F*s.delta,l[g+2]=w;const O=_+s.yd*3;c[g+0]=f(G[_+0],G[O+0],F),c[g+1]=f(G[_+1],G[O+1],F),c[g+2]=f(G[_+2],G[O+2],F),u[g+0]=f(s.palette[L*3+0],s.palette[z*3+0],F),u[g+1]=f(s.palette[L*3+1],s.palette[z*3+1],F),u[g+2]=f(s.palette[L*3+2],s.palette[z*3+2],F)}function b(_,g,E,A,C,w,D,T,L,z){const F=(E-D)/(T-D),G=s.normal_cache;l[g+0]=A,l[g+1]=C,l[g+2]=w+F*s.delta;const O=_+s.zd*3;c[g+0]=f(G[_+0],G[O+0],F),c[g+1]=f(G[_+1],G[O+1],F),c[g+2]=f(G[_+2],G[O+2],F),u[g+0]=f(s.palette[L*3+0],s.palette[z*3+0],F),u[g+1]=f(s.palette[L*3+1],s.palette[z*3+1],F),u[g+2]=f(s.palette[L*3+2],s.palette[z*3+2],F)}function y(_){const g=_*3;s.normal_cache[g]===0&&(s.normal_cache[g+0]=s.field[_-1]-s.field[_+1],s.normal_cache[g+1]=s.field[_-s.yd]-s.field[_+s.yd],s.normal_cache[g+2]=s.field[_-s.zd]-s.field[_+s.zd])}function m(_,g,E,A,C){const w=A+1,D=A+s.yd,T=A+s.zd,L=w+s.yd,z=w+s.zd,F=A+s.yd+s.zd,G=w+s.yd+s.zd;let O=0;const W=s.field[A],q=s.field[w],$=s.field[D],ie=s.field[L],ee=s.field[T],le=s.field[z],B=s.field[F],Z=s.field[G];W<C&&(O|=1),q<C&&(O|=2),$<C&&(O|=8),ie<C&&(O|=4),ee<C&&(O|=16),le<C&&(O|=32),B<C&&(O|=128),Z<C&&(O|=64);const pe=_w[O];if(pe===0)return 0;const ve=s.delta,Me=_+ve,Ae=g+ve,Y=E+ve;pe&1&&(y(A),y(w),h(A*3,0,C,_,g,E,W,q,A,w)),pe&2&&(y(w),y(L),p(w*3,3,C,Me,g,E,q,ie,w,L)),pe&4&&(y(D),y(L),h(D*3,6,C,_,Ae,E,$,ie,D,L)),pe&8&&(y(A),y(D),p(A*3,9,C,_,g,E,W,$,A,D)),pe&16&&(y(T),y(z),h(T*3,12,C,_,g,Y,ee,le,T,z)),pe&32&&(y(z),y(G),p(z*3,15,C,Me,g,Y,le,Z,z,G)),pe&64&&(y(F),y(G),h(F*3,18,C,_,Ae,Y,B,Z,F,G)),pe&128&&(y(T),y(F),p(T*3,21,C,_,g,Y,ee,B,T,F)),pe&256&&(y(A),y(T),b(A*3,24,C,_,g,E,W,ee,A,T)),pe&512&&(y(w),y(z),b(w*3,27,C,Me,g,E,q,le,w,z)),pe&1024&&(y(L),y(G),b(L*3,30,C,Me,Ae,E,ie,Z,L,G)),pe&2048&&(y(D),y(F),b(D*3,33,C,_,Ae,E,$,B,D,F)),O<<=4;let oe,re,ge,ye=0,S=0;for(;ho[O+S]!=-1;)oe=O+S,re=oe+1,ge=oe+2,d(l,c,u,3*ho[oe],3*ho[re],3*ho[ge]),S+=3,ye++;return ye}function d(_,g,E,A,C,w){const D=s.count*3;if(s.positionArray[D+0]=_[A],s.positionArray[D+1]=_[A+1],s.positionArray[D+2]=_[A+2],s.positionArray[D+3]=_[C],s.positionArray[D+4]=_[C+1],s.positionArray[D+5]=_[C+2],s.positionArray[D+6]=_[w],s.positionArray[D+7]=_[w+1],s.positionArray[D+8]=_[w+2],s.material.flatShading===!0){const T=(g[A+0]+g[C+0]+g[w+0])/3,L=(g[A+1]+g[C+1]+g[w+1])/3,z=(g[A+2]+g[C+2]+g[w+2])/3;s.normalArray[D+0]=T,s.normalArray[D+1]=L,s.normalArray[D+2]=z,s.normalArray[D+3]=T,s.normalArray[D+4]=L,s.normalArray[D+5]=z,s.normalArray[D+6]=T,s.normalArray[D+7]=L,s.normalArray[D+8]=z}else s.normalArray[D+0]=g[A+0],s.normalArray[D+1]=g[A+1],s.normalArray[D+2]=g[A+2],s.normalArray[D+3]=g[C+0],s.normalArray[D+4]=g[C+1],s.normalArray[D+5]=g[C+2],s.normalArray[D+6]=g[w+0],s.normalArray[D+7]=g[w+1],s.normalArray[D+8]=g[w+2];if(s.enableUvs){const T=s.count*2;s.uvArray[T+0]=_[A+0],s.uvArray[T+1]=_[A+2],s.uvArray[T+2]=_[C+0],s.uvArray[T+3]=_[C+2],s.uvArray[T+4]=_[w+0],s.uvArray[T+5]=_[w+2]}s.enableColors&&(s.colorArray[D+0]=E[A+0],s.colorArray[D+1]=E[A+1],s.colorArray[D+2]=E[A+2],s.colorArray[D+3]=E[C+0],s.colorArray[D+4]=E[C+1],s.colorArray[D+5]=E[C+2],s.colorArray[D+6]=E[w+0],s.colorArray[D+7]=E[w+1],s.colorArray[D+8]=E[w+2]),s.count+=3}this.addBall=function(_,g,E,A,C,w){const D=Math.sign(A);A=Math.abs(A);const T=w!=null;let L=new Qe(_,g,E);if(T)try{L=w instanceof Qe?w:Array.isArray(w)?new Qe(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Qe(w)}catch{L=new Qe(_,g,E)}const z=this.size*Math.sqrt(A/C),F=E*this.size,G=g*this.size,O=_*this.size;let W=Math.floor(F-z);W<1&&(W=1);let q=Math.floor(F+z);q>this.size-1&&(q=this.size-1);let $=Math.floor(G-z);$<1&&($=1);let ie=Math.floor(G+z);ie>this.size-1&&(ie=this.size-1);let ee=Math.floor(O-z);ee<1&&(ee=1);let le=Math.floor(O+z);le>this.size-1&&(le=this.size-1);let B,Z,pe,ve,Me,Ae,Y,oe,re,ge,ye;for(pe=W;pe<q;pe++)for(Me=this.size2*pe,oe=pe/this.size-E,re=oe*oe,Z=$;Z<ie;Z++)for(ve=Me+this.size*Z,Y=Z/this.size-g,ge=Y*Y,B=ee;B<le;B++)if(Ae=B/this.size-_,ye=A/(1e-6+Ae*Ae+ge+re)-C,ye>0){this.field[ve+B]+=ye*D;const S=Math.sqrt((B-O)*(B-O)+(Z-G)*(Z-G)+(pe-F)*(pe-F))/z,M=1-S*S*S*(S*(S*6-15)+10);this.palette[(ve+B)*3+0]+=L.r*M,this.palette[(ve+B)*3+1]+=L.g*M,this.palette[(ve+B)*3+2]+=L.b*M}},this.addPlaneX=function(_,g){const E=this.size,A=this.yd,C=this.zd,w=this.field;let D,T,L,z,F,G,O,W=E*Math.sqrt(_/g);for(W>E&&(W=E),D=0;D<W;D++)if(G=D/E,z=G*G,F=_/(1e-4+z)-g,F>0)for(T=0;T<E;T++)for(O=D+T*A,L=0;L<E;L++)w[C*L+O]+=F},this.addPlaneY=function(_,g){const E=this.size,A=this.yd,C=this.zd,w=this.field;let D,T,L,z,F,G,O,W,q=E*Math.sqrt(_/g);for(q>E&&(q=E),T=0;T<q;T++)if(G=T/E,z=G*G,F=_/(1e-4+z)-g,F>0)for(O=T*A,D=0;D<E;D++)for(W=O+D,L=0;L<E;L++)w[C*L+W]+=F},this.addPlaneZ=function(_,g){const E=this.size,A=this.yd,C=this.zd,w=this.field;let D,T,L,z,F,G,O,W,q=E*Math.sqrt(_/g);for(q>E&&(q=E),L=0;L<q;L++)if(G=L/E,z=G*G,F=_/(1e-4+z)-g,F>0)for(O=C*L,T=0;T<E;T++)for(W=O+T*A,D=0;D<E;D++)w[W+D]+=F},this.setCell=function(_,g,E,A){const C=this.size2*E+this.size*g+_;this.field[C]=A},this.getCell=function(_,g,E){const A=this.size2*E+this.size*g+_;return this.field[A]},this.blur=function(_=1){const g=this.field,E=g.slice(),A=this.size,C=this.size2;for(let w=0;w<A;w++)for(let D=0;D<A;D++)for(let T=0;T<A;T++){const L=C*T+A*D+w;let z=E[L],F=1;for(let G=-1;G<=1;G+=2){const O=G+w;if(!(O<0||O>=A))for(let W=-1;W<=1;W+=2){const q=W+D;if(!(q<0||q>=A))for(let $=-1;$<=1;$+=2){const ie=$+T;if(ie<0||ie>=A)continue;const ee=C*ie+A*q+O,le=E[ee];F++,z+=_*(le-z)/F}}}g[L]=z}},this.reset=function(){for(let _=0;_<this.size3;_++)this.normal_cache[_*3]=0,this.field[_]=0,this.palette[_*3]=this.palette[_*3+1]=this.palette[_*3+2]=0},this.update=function(){this.count=0;const _=this.size-2;for(let g=1;g<_;g++){const E=this.size2*g,A=(g-this.halfsize)/this.halfsize;for(let C=1;C<_;C++){const w=E+this.size*C,D=(C-this.halfsize)/this.halfsize;for(let T=1;T<_;T++){const L=(T-this.halfsize)/this.halfsize,z=w+T;m(L,D,A,z,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const _w=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ho=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);let hr,wi,fr,pp,mp,Ec,bc,gp,Hn,ns,kn,_p=0;const vw=new dw;function xw(){hr.aspect=window.innerWidth/window.innerHeight,hr.updateProjectionMatrix(),fr.setSize(window.innerWidth,window.innerHeight)}function yw(){return{plastic:new nw({specular:16747520,shininess:5,color:16757504})}}function Ew(){kn={material:"plastic",speed:.1,numBlobs:3,resolution:50,isolation:4}}function bw(t,e,n,i,r,a){t.reset();const o=10,s=.6/((Math.sqrt(n)-1)/4+1);for(let l=0;l<n;l++){const c=Math.sin(l+1.26*e*(1.03+.5*Math.cos(.21*l)))*.27+.5,u=Math.abs(Math.cos(l+1.12*e*Math.cos(1.22+.1424*l)))*.77,f=Math.cos(l+1.32*e*.1*Math.sin(.92+.53*l))*.27+.5;t.addBall(c,u,f,s,o)}t.update()}function Mw(){const t=vw.getDelta();_p+=t*kn.speed*.5,kn.resolution!==ns&&(ns=kn.resolution,Hn.init(Math.floor(ns))),kn.isolation!==Hn.isolation&&(Hn.isolation=kn.isolation),bw(Hn,_p,kn.numBlobs,kn.floor,kn.wallx,kn.wallz),fr.render(wi,hr)}const Sw={name:"MetaBall",mounted(){this.init(),this.animate()},methods:{init(){const t=this.$refs.container;hr=new un(45,window.innerWidth/window.innerHeight,1,1e4),hr.position.set(-100,1e3,800),wi=new tw;const e="@/assets/y.svg",i=new sw().load(e);wi.background=i,Ec=new uw(16777215,5),Ec.position.set(.5,.5,1),wi.add(Ec),bc=new lw(16743424,3,0,0),bc.position.set(0,0,100),wi.add(bc),gp=new fw(3289650,3),wi.add(gp),pp=yw(),mp="plastic",ns=50,Hn=new gw(ns,pp[mp],!0,!0,1e5),Hn.position.set(0,0,0),Hn.scale.set(700,700,700),Hn.enableUvs=!1,Hn.enableColors=!1,wi.add(Hn),fr=new d_,fr.setPixelRatio(window.devicePixelRatio),fr.setSize(window.innerWidth,window.innerHeight),t.appendChild(fr.domElement);const r=new mw(hr,fr.domElement);r.minDistance=500,r.maxDistance=5e3;const a=new hw,o=new Xe;function s(l){o.x=l.clientX/window.innerWidth*2-1,o.y=-(l.clientY/window.innerHeight)*2+1,a.setFromCamera(o,hr);const c=a.intersectObjects(wi.children);c.length>0&&(c[0].object.material.color.getHex()===16757504?c[0].object.material.color.set(16777215):c[0].object.material.color.getHex()===16777215?c[0].object.material.color.set(5816572):c[0].object.material.color.getHex()===5816572?c[0].object.material.color.set(8257429):c[0].object.material.color.set(16757504))}window.addEventListener("click",s,!1),Ew(),window.addEventListener("resize",xw)},animate(){requestAnimationFrame(this.animate),Mw()}}},Tw={id:"main"},Aw={id:"container",ref:"container"};function ww(t,e,n,i,r,a){return Mr(),wa("div",Tw,[at("div",Aw,null,512)])}const Cw=Ra(Sw,[["render",ww]]);function vp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vp(Object(n),!0).forEach(function(i){Nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Yo(t){"@babel/helpers - typeof";return Yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yo(t)}function Rw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xp(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Lw(t,e,n){return e&&xp(t.prototype,e),n&&xp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function df(t,e){return Iw(t)||Dw(t,e)||p_(t,e)||Uw()}function Ls(t){return Pw(t)||Nw(t)||p_(t)||Ow()}function Pw(t){if(Array.isArray(t))return au(t)}function Iw(t){if(Array.isArray(t))return t}function Nw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Dw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function p_(t,e){if(t){if(typeof t=="string")return au(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return au(t,e)}}function au(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ow(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yp=function(){},hf={},m_={},g_=null,__={mark:yp,measure:yp};try{typeof window<"u"&&(hf=window),typeof document<"u"&&(m_=document),typeof MutationObserver<"u"&&(g_=MutationObserver),typeof performance<"u"&&(__=performance)}catch{}var Fw=hf.navigator||{},Ep=Fw.userAgent,bp=Ep===void 0?"":Ep,Gi=hf,pt=m_,Mp=g_,po=__;Gi.document;var pi=!!pt.documentElement&&!!pt.head&&typeof pt.addEventListener=="function"&&typeof pt.createElement=="function",v_=~bp.indexOf("MSIE")||~bp.indexOf("Trident/"),mo,go,_o,vo,xo,ui="___FONT_AWESOME___",su=16,x_="fa",y_="svg-inline--fa",wr="data-fa-i2svg",ou="data-fa-pseudo-element",kw="data-fa-pseudo-element-pending",pf="data-prefix",mf="data-icon",Sp="fontawesome-i2svg",Bw="async",zw=["HTML","HEAD","STYLE","SCRIPT"],E_=function(){try{return!0}catch{return!1}}(),ht="classic",Et="sharp",gf=[ht,Et];function Ps(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ht]}})}var _s=Ps((mo={},Nt(mo,ht,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Nt(mo,Et,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),mo)),vs=Ps((go={},Nt(go,ht,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Nt(go,Et,{solid:"fass",regular:"fasr",light:"fasl"}),go)),xs=Ps((_o={},Nt(_o,ht,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Nt(_o,Et,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_o)),Hw=Ps((vo={},Nt(vo,ht,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Nt(vo,Et,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),vo)),Gw=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,b_="fa-layers-text",Vw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ww=Ps((xo={},Nt(xo,ht,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Nt(xo,Et,{900:"fass",400:"fasr",300:"fasl"}),xo)),M_=[1,2,3,4,5,6,7,8,9,10],Xw=M_.concat([11,12,13,14,15,16,17,18,19,20]),Yw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ys=new Set;Object.keys(vs[ht]).map(ys.add.bind(ys));Object.keys(vs[Et]).map(ys.add.bind(ys));var $w=[].concat(gf,Ls(ys),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pr.GROUP,pr.SWAP_OPACITY,pr.PRIMARY,pr.SECONDARY]).concat(M_.map(function(t){return"".concat(t,"x")})).concat(Xw.map(function(t){return"w-".concat(t)})),is=Gi.FontAwesomeConfig||{};function jw(t){var e=pt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(pt&&typeof pt.querySelector=="function"){var Kw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kw.forEach(function(t){var e=df(t,2),n=e[0],i=e[1],r=qw(jw(n));r!=null&&(is[i]=r)})}var S_={styleDefault:"solid",familyDefault:"classic",cssPrefix:x_,replacementClass:y_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};is.familyPrefix&&(is.cssPrefix=is.familyPrefix);var xa=Ie(Ie({},S_),is);xa.autoReplaceSvg||(xa.observeMutations=!1);var Oe={};Object.keys(S_).forEach(function(t){Object.defineProperty(Oe,t,{enumerable:!0,set:function(n){xa[t]=n,rs.forEach(function(i){return i(Oe)})},get:function(){return xa[t]}})});Object.defineProperty(Oe,"familyPrefix",{enumerable:!0,set:function(e){xa.cssPrefix=e,rs.forEach(function(n){return n(Oe)})},get:function(){return xa.cssPrefix}});Gi.FontAwesomeConfig=Oe;var rs=[];function Zw(t){return rs.push(t),function(){rs.splice(rs.indexOf(t),1)}}var Si=su,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jw(t){if(!(!t||!pi)){var e=pt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=pt.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return pt.head.insertBefore(e,i),t}}var Qw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Es(){for(var t=12,e="";t-- >0;)e+=Qw[Math.random()*62|0];return e}function Ia(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _f(t){return t.classList?Ia(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function T_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(T_(t[n]),'" ')},"").trim()}function xl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function vf(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function t2(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function n2(t){var e=t.transform,n=t.width,i=n===void 0?su:n,r=t.height,a=r===void 0?su:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&v_?l+="translate(".concat(e.x/Si-i/2,"em, ").concat(e.y/Si-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Si,"em), calc(-50% + ").concat(e.y/Si,"em)) "):l+="translate(".concat(e.x/Si,"em, ").concat(e.y/Si,"em) "),l+="scale(".concat(e.size/Si*(e.flipX?-1:1),", ").concat(e.size/Si*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var i2=`:root, :host {
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
}`;function A_(){var t=x_,e=y_,n=Oe.cssPrefix,i=Oe.replacementClass,r=i2;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var Tp=!1;function Mc(){Oe.autoAddCss&&!Tp&&(Jw(A_()),Tp=!0)}var r2={mixout:function(){return{dom:{css:A_,insertCss:Mc}}},hooks:function(){return{beforeDOMElementCreation:function(){Mc()},beforeI2svg:function(){Mc()}}}},fi=Gi||{};fi[ui]||(fi[ui]={});fi[ui].styles||(fi[ui].styles={});fi[ui].hooks||(fi[ui].hooks={});fi[ui].shims||(fi[ui].shims=[]);var In=fi[ui],w_=[],a2=function t(){pt.removeEventListener("DOMContentLoaded",t),$o=1,w_.map(function(e){return e()})},$o=!1;pi&&($o=(pt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pt.readyState),$o||pt.addEventListener("DOMContentLoaded",a2));function s2(t){pi&&($o?setTimeout(t,0):w_.push(t))}function Is(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?T_(t):"<".concat(e," ").concat(e2(i),">").concat(a.map(Is).join(""),"</").concat(e,">")}function Ap(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var o2=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},Sc=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?o2(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function l2(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function lu(t){var e=l2(t);return e.length===1?e[0].toString(16):null}function c2(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function wp(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function cu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=wp(e);typeof In.hooks.addPack=="function"&&!r?In.hooks.addPack(t,wp(e)):In.styles[t]=Ie(Ie({},In.styles[t]||{}),a),t==="fas"&&cu("fa",e)}var yo,Eo,bo,Qr=In.styles,u2=In.shims,f2=(yo={},Nt(yo,ht,Object.values(xs[ht])),Nt(yo,Et,Object.values(xs[Et])),yo),xf=null,C_={},R_={},L_={},P_={},I_={},d2=(Eo={},Nt(Eo,ht,Object.keys(_s[ht])),Nt(Eo,Et,Object.keys(_s[Et])),Eo);function h2(t){return~$w.indexOf(t)}function p2(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!h2(r)?r:null}var N_=function(){var e=function(a){return Sc(Qr,function(o,s,l){return o[l]=Sc(s,a,{}),o},{})};C_=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),R_=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),I_=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Qr||Oe.autoFetchSvg,i=Sc(u2,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});L_=i.names,P_=i.unicodes,xf=yl(Oe.styleDefault,{family:Oe.familyDefault})};Zw(function(t){xf=yl(t.styleDefault,{family:Oe.familyDefault})});N_();function yf(t,e){return(C_[t]||{})[e]}function m2(t,e){return(R_[t]||{})[e]}function mr(t,e){return(I_[t]||{})[e]}function D_(t){return L_[t]||{prefix:null,iconName:null}}function g2(t){var e=P_[t],n=yf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vi(){return xf}var Ef=function(){return{prefix:null,iconName:null,rest:[]}};function yl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ht:n,r=_s[i][t],a=vs[i][t]||vs[i][r],o=t in In.styles?t:null;return a||o||null}var Cp=(bo={},Nt(bo,ht,Object.keys(xs[ht])),Nt(bo,Et,Object.keys(xs[Et])),bo);function El(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Nt(e,ht,"".concat(Oe.cssPrefix,"-").concat(ht)),Nt(e,Et,"".concat(Oe.cssPrefix,"-").concat(Et)),e),o=null,s=ht;(t.includes(a[ht])||t.some(function(c){return Cp[ht].includes(c)}))&&(s=ht),(t.includes(a[Et])||t.some(function(c){return Cp[Et].includes(c)}))&&(s=Et);var l=t.reduce(function(c,u){var f=p2(Oe.cssPrefix,u);if(Qr[u]?(u=f2[s].includes(u)?Hw[s][u]:u,o=u,c.prefix=u):d2[s].indexOf(u)>-1?(o=u,c.prefix=yl(u,{family:s})):f?c.iconName=f:u!==Oe.replacementClass&&u!==a[ht]&&u!==a[Et]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=o==="fa"?D_(c.iconName):{},p=mr(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||p||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Qr.far&&Qr.fas&&!Oe.autoFetchSvg&&(c.prefix="fas")}return c},Ef());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Et&&(Qr.fass||Oe.autoFetchSvg)&&(l.prefix="fass",l.iconName=mr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Vi()||"fas"),l}var _2=function(){function t(){Rw(this,t),this.definitions={}}return Lw(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=Ie(Ie({},n.definitions[s]||{}),o[s]),cu(s,o[s]);var l=xs[ht][s];l&&cu(l,o[s]),N_()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),Rp=[],ea={},ca={},v2=Object.keys(ca);function x2(t,e){var n=e.mixoutsTo;return Rp=t,ea={},Object.keys(ca).forEach(function(i){v2.indexOf(i)===-1&&delete ca[i]}),Rp.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Yo(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){ea[o]||(ea[o]=[]),ea[o].push(a[o])})}i.provides&&i.provides(ca)}),n}function uu(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=ea[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Cr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=ea[t]||[];r.forEach(function(a){a.apply(null,n)})}function di(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ca[t]?ca[t].apply(null,e):void 0}function fu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Vi();if(e)return e=mr(n,e)||e,Ap(O_.definitions,n,e)||Ap(In.styles,n,e)}var O_=new _2,y2=function(){Oe.autoReplaceSvg=!1,Oe.observeMutations=!1,Cr("noAuto")},E2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pi?(Cr("beforeI2svg",e),di("pseudoElements2svg",e),di("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Oe.autoReplaceSvg===!1&&(Oe.autoReplaceSvg=!0),Oe.observeMutations=!0,s2(function(){M2({autoReplaceSvgRoot:n}),Cr("watch",e)})}},b2={icon:function(e){if(e===null)return null;if(Yo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:mr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=yl(e[0]);return{prefix:i,iconName:mr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Oe.cssPrefix,"-"))>-1||e.match(Gw))){var r=El(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Vi(),iconName:mr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Vi();return{prefix:a,iconName:mr(a,e)||e}}}},dn={noAuto:y2,config:Oe,dom:E2,parse:b2,library:O_,findIconDefinition:fu,toHtml:Is},M2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?pt:n;(Object.keys(In.styles).length>0||Oe.autoFetchSvg)&&pi&&Oe.autoReplaceSvg&&dn.dom.i2svg({node:i})};function bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Is(i)})}}),Object.defineProperty(t,"node",{get:function(){if(pi){var i=pt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function S2(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(vf(o)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=xl(Ie(Ie({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function T2(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(Oe.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ie(Ie({},r),{},{id:o}),children:i}]}]}function bf(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,b=i.found?i:n,y=b.width,m=b.height,d=r==="fak",_=[Oe.replacementClass,a?"".concat(Oe.cssPrefix,"-").concat(a):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),g={children:[],attributes:Ie(Ie({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(m)})},E=d&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/m*16*.0625,"em")}:{};p&&(g.attributes[wr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||Es())},children:[l]}),delete g.attributes.title);var A=Ie(Ie({},g),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:o,symbol:s,styles:Ie(Ie({},E),f.styles)}),C=i.found&&n.found?di("generateAbstractMask",A)||{children:[],attributes:{}}:di("generateAbstractIcon",A)||{children:[],attributes:{}},w=C.children,D=C.attributes;return A.children=w,A.attributes=D,s?T2(A):S2(A)}function Lp(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=Ie(Ie(Ie({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[wr]="");var u=Ie({},o.styles);vf(r)&&(u.transform=n2({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=xl(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function A2(t){var e=t.content,n=t.title,i=t.extra,r=Ie(Ie(Ie({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=xl(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Tc=In.styles;function du(t){var e=t[0],n=t[1],i=t.slice(4),r=df(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(pr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(pr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(pr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var w2={found:!1,width:512,height:512};function C2(t,e){!E_&&!Oe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function hu(t,e){var n=e;return e==="fa"&&Oe.styleDefault!==null&&(e=Vi()),new Promise(function(i,r){if(di("missingIconAbstract"),n==="fa"){var a=D_(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Tc[e]&&Tc[e][t]){var o=Tc[e][t];return i(du(o))}C2(t,e),i(Ie(Ie({},w2),{},{icon:Oe.showMissingIcons&&t?di("missingIconAbstract")||{}:{}}))})}var Pp=function(){},pu=Oe.measurePerformance&&po&&po.mark&&po.measure?po:{mark:Pp,measure:Pp},$a='FA "6.4.2"',R2=function(e){return pu.mark("".concat($a," ").concat(e," begins")),function(){return U_(e)}},U_=function(e){pu.mark("".concat($a," ").concat(e," ends")),pu.measure("".concat($a," ").concat(e),"".concat($a," ").concat(e," begins"),"".concat($a," ").concat(e," ends"))},Mf={begin:R2,end:U_},Io=function(){};function Ip(t){var e=t.getAttribute?t.getAttribute(wr):null;return typeof e=="string"}function L2(t){var e=t.getAttribute?t.getAttribute(pf):null,n=t.getAttribute?t.getAttribute(mf):null;return e&&n}function P2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Oe.replacementClass)}function I2(){if(Oe.autoReplaceSvg===!0)return No.replace;var t=No[Oe.autoReplaceSvg];return t||No.replace}function N2(t){return pt.createElementNS("http://www.w3.org/2000/svg",t)}function D2(t){return pt.createElement(t)}function F_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?N2:D2:n;if(typeof t=="string")return pt.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(F_(o,{ceFn:i}))}),r}function O2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var No={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(F_(r),n)}),n.getAttribute(wr)===null&&Oe.keepOriginalSource){var i=pt.createComment(O2(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~_f(n).indexOf(Oe.replacementClass))return No.replace(e);var r=new RegExp("".concat(Oe.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===Oe.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Is(s)}).join(`
`);n.setAttribute(wr,""),n.innerHTML=o}};function Np(t){t()}function k_(t,e){var n=typeof e=="function"?e:Io;if(t.length===0)n();else{var i=Np;Oe.mutateApproach===Bw&&(i=Gi.requestAnimationFrame||Np),i(function(){var r=I2(),a=Mf.begin("mutate");t.map(r),a(),n()})}}var Sf=!1;function B_(){Sf=!0}function mu(){Sf=!1}var jo=null;function Dp(t){if(Mp&&Oe.observeMutations){var e=t.treeCallback,n=e===void 0?Io:e,i=t.nodeCallback,r=i===void 0?Io:i,a=t.pseudoElementsCallback,o=a===void 0?Io:a,s=t.observeMutationsRoot,l=s===void 0?pt:s;jo=new Mp(function(c){if(!Sf){var u=Vi();Ia(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ip(f.addedNodes[0])&&(Oe.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&Oe.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Ip(f.target)&&~Yw.indexOf(f.attributeName))if(f.attributeName==="class"&&L2(f.target)){var h=El(_f(f.target)),p=h.prefix,b=h.iconName;f.target.setAttribute(pf,p||u),b&&f.target.setAttribute(mf,b)}else P2(f.target)&&r(f.target)})}}),pi&&jo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function U2(){jo&&jo.disconnect()}function F2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function k2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=El(_f(t));return r.prefix||(r.prefix=Vi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=m2(r.prefix,t.innerText)||yf(r.prefix,lu(t.innerText))),!r.iconName&&Oe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function B2(t){var e=Ia(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Oe.autoA11y&&(n?e["aria-labelledby"]="".concat(Oe.replacementClass,"-title-").concat(i||Es()):(e["aria-hidden"]="true",e.focusable="false")),e}function z2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Op(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=k2(t),i=n.iconName,r=n.prefix,a=n.rest,o=B2(t),s=uu("parseNodeAttributes",{},t),l=e.styleParser?F2(t):[];return Ie({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var H2=In.styles;function z_(t){var e=Oe.autoReplaceSvg==="nest"?Op(t,{styleParser:!1}):Op(t);return~e.extra.classes.indexOf(b_)?di("generateLayersText",t,e):di("generateSvgReplacementMutation",t,e)}var Wi=new Set;gf.map(function(t){Wi.add("fa-".concat(t))});Object.keys(_s[ht]).map(Wi.add.bind(Wi));Object.keys(_s[Et]).map(Wi.add.bind(Wi));Wi=Ls(Wi);function Up(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pi)return Promise.resolve();var n=pt.documentElement.classList,i=function(f){return n.add("".concat(Sp,"-").concat(f))},r=function(f){return n.remove("".concat(Sp,"-").concat(f))},a=Oe.autoFetchSvg?Wi:gf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(H2));a.includes("fa")||a.push("fa");var o=[".".concat(b_,":not([").concat(wr,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(wr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ia(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Mf.begin("onTree"),c=s.reduce(function(u,f){try{var h=z_(f);h&&u.push(h)}catch(p){E_||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){k_(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function G2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z_(t).then(function(n){n&&k_([n],e)})}function V2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:fu(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:fu(r||{})),t(i,Ie(Ie({},n),{},{mask:r}))}}var W2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Vn:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,p=n.titleId,b=p===void 0?null:p,y=n.classes,m=y===void 0?[]:y,d=n.attributes,_=d===void 0?{}:d,g=n.styles,E=g===void 0?{}:g;if(e){var A=e.prefix,C=e.iconName,w=e.icon;return bl(Ie({type:"icon"},e),function(){return Cr("beforeDOMElementCreation",{iconDefinition:e,params:n}),Oe.autoA11y&&(h?_["aria-labelledby"]="".concat(Oe.replacementClass,"-title-").concat(b||Es()):(_["aria-hidden"]="true",_.focusable="false")),bf({icons:{main:du(w),mask:l?du(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:C,transform:Ie(Ie({},Vn),r),symbol:o,title:h,maskId:u,titleId:b,extra:{attributes:_,styles:E,classes:m}})})}},X2={mixout:function(){return{icon:V2(W2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Up,n.nodeCallback=G2,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?pt:i,a=n.callback,o=a===void 0?function(){}:a;return Up(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(p,b){Promise.all([hu(r,s),u.iconName?hu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var m=df(y,2),d=m[0],_=m[1];p([n,bf({icons:{main:d,mask:_},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=xl(s);l.length>0&&(r.style=l);var c;return vf(o)&&(c=di("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},Y2={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return bl({type:"layer"},function(){Cr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Oe.cssPrefix,"-layers")].concat(Ls(a)).join(" ")},children:o}]})}}}},$2={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return bl({type:"counter",content:n},function(){return Cr("beforeDOMElementCreation",{content:n,params:i}),A2({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(Oe.cssPrefix,"-layers-counter")].concat(Ls(s))}})})}}}},j2={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?Vn:r,o=i.title,s=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,p=h===void 0?{}:h;return bl({type:"text",content:n},function(){return Cr("beforeDOMElementCreation",{content:n,params:i}),Lp({content:n,transform:Ie(Ie({},Vn),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(Oe.cssPrefix,"-layers-text")].concat(Ls(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(v_){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return Oe.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Lp({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},q2=new RegExp('"',"ug"),Fp=[1105920,1112319];function K2(t){var e=t.replace(q2,""),n=c2(e,0),i=n>=Fp[0]&&n<=Fp[1],r=e.length===2?e[0]===e[1]:!1;return{value:lu(r?e[0]:e),isSecondary:i||r}}function kp(t,e){var n="".concat(kw).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=Ia(t.children),o=a.filter(function(w){return w.getAttribute(ou)===e})[0],s=Gi.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Vw),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Et:ht,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?vs[h][l[2].toLowerCase()]:Ww[h][c],b=K2(f),y=b.value,m=b.isSecondary,d=l[0].startsWith("FontAwesome"),_=yf(p,y),g=_;if(d){var E=g2(y);E.iconName&&E.prefix&&(_=E.iconName,p=E.prefix)}if(_&&!m&&(!o||o.getAttribute(pf)!==p||o.getAttribute(mf)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var A=z2(),C=A.extra;C.attributes[ou]=e,hu(_,p).then(function(w){var D=bf(Ie(Ie({},A),{},{icons:{main:w,mask:Ef()},prefix:p,iconName:g,extra:C,watchable:!0})),T=pt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=D.map(function(L){return Is(L)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function Z2(t){return Promise.all([kp(t,"::before"),kp(t,"::after")])}function J2(t){return t.parentNode!==document.head&&!~zw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ou)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Bp(t){if(pi)return new Promise(function(e,n){var i=Ia(t.querySelectorAll("*")).filter(J2).map(Z2),r=Mf.begin("searchPseudoElements");B_(),Promise.all(i).then(function(){r(),mu(),e()}).catch(function(){r(),mu(),n()})})}var Q2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?pt:i;Oe.searchPseudoElements&&Bp(r)}}},zp=!1,eC={mixout:function(){return{dom:{unwatch:function(){B_(),zp=!0}}}},hooks:function(){return{bootstrap:function(){Dp(uu("mutationObserverCallbacks",{}))},noAuto:function(){U2()},watch:function(n){var i=n.observeMutationsRoot;zp?mu():Dp(uu("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Hp=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},tC={mixout:function(){return{parse:{transform:function(n){return Hp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Hp(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:h};return{tag:"g",attributes:Ie({},p.outer),children:[{tag:"g",attributes:Ie({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Ie(Ie({},i.icon.attributes),p.path)}]}]}}}},Ac={x:0,y:0,width:"100%",height:"100%"};function Gp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nC(t){return t.tag==="g"?t.children:[t]}var iC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?El(r.split(" ").map(function(o){return o.trim()})):Ef();return a.prefix||(a.prefix=Vi()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,f=o.width,h=o.icon,p=t2({transform:l,containerWidth:f,iconWidth:c}),b={tag:"rect",attributes:Ie(Ie({},Ac),{},{fill:"white"})},y=u.children?{children:u.children.map(Gp)}:{},m={tag:"g",attributes:Ie({},p.inner),children:[Gp(Ie({tag:u.tag,attributes:Ie(Ie({},u.attributes),p.path)},y))]},d={tag:"g",attributes:Ie({},p.outer),children:[m]},_="mask-".concat(s||Es()),g="clip-".concat(s||Es()),E={tag:"mask",attributes:Ie(Ie({},Ac),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,d]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:nC(h)},E]};return i.push(A,{tag:"rect",attributes:Ie({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(_,")")},Ac)}),{children:i,attributes:r}}}},rC={provides:function(e){var n=!1;Gi.matchMedia&&(n=Gi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Ie(Ie({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Ie(Ie({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:Ie(Ie({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:Ie(Ie({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ie(Ie({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:Ie(Ie({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Ie(Ie({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:Ie(Ie({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ie(Ie({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},aC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},sC=[r2,X2,Y2,$2,j2,Q2,eC,tC,iC,rC,aC];x2(sC,{mixoutsTo:dn});dn.noAuto;dn.config;var oC=dn.library;dn.dom;var lC=dn.parse;dn.findIconDefinition;dn.toHtml;var cC=dn.icon;dn.layer;dn.text;dn.counter;var uC={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},fC=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dC(t,e){return e={exports:{}},t(e,e.exports),e.exports}var hC=dC(function(t){(function(e){var n=function(d,_,g){if(!c(_)||f(_)||h(_)||p(_)||l(_))return _;var E,A=0,C=0;if(u(_))for(E=[],C=_.length;A<C;A++)E.push(n(d,_[A],g));else{E={};for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(E[d(w,g)]=n(d,_[w],g))}return E},i=function(d,_){_=_||{};var g=_.separator||"_",E=_.split||/(?=[A-Z])/;return d.split(E).join(g)},r=function(d){return b(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(_,g){return g?g.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},a=function(d){var _=r(d);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(d,_){return i(d,_).toLowerCase()},s=Object.prototype.toString,l=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},u=function(d){return s.call(d)=="[object Array]"},f=function(d){return s.call(d)=="[object Date]"},h=function(d){return s.call(d)=="[object RegExp]"},p=function(d){return s.call(d)=="[object Boolean]"},b=function(d){return d=d-0,d===d},y=function(d,_){var g=_&&"process"in _?_.process:_;return typeof g!="function"?d:function(E,A){return g(E,d,A)}},m={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(d,_){return n(y(r,_),d)},decamelizeKeys:function(d,_){return n(y(o,_),d,_)},pascalizeKeys:function(d,_){return n(y(a,_),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(fC)}),pC=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ja=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},gu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mC=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n};function gC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=hC.camelize(n.slice(0,i)),a=n.slice(i+1).trim();return e[r]=a,e},{})}function _C(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function H_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return H_(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=_C(u);break;case"style":l.style=gC(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=mC(n,["class","style"]);return Ca(t.tag,gu({},e,{class:r.class,style:gu({},r.style,o)},r.attrs,s),i)}var G_=!1;try{G_=!0}catch{}function vC(){if(!G_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function wc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ja({},t,e):{}}function xC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ja(e,"fa-"+t.size,t.size!==null),ja(e,"fa-rotate-"+t.rotation,t.rotation!==null),ja(e,"fa-pull-"+t.pull,t.pull!==null),ja(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Vp(t){if(t===null)return null;if((typeof t>"u"?"undefined":pC(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var yC=Aa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=st(function(){return Vp(e.icon)}),a=st(function(){return wc("classes",xC(e))}),o=st(function(){return wc("transform",typeof e.transform=="string"?lC.transform(e.transform):e.transform)}),s=st(function(){return wc("mask",Vp(e.mask))}),l=st(function(){return cC(r.value,gu({},a.value,o.value,s.value,{symbol:e.symbol,title:e.title}))});si(l,function(u){if(!u)return vC("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=st(function(){return l.value?H_(l.value.abstract[0],{},i):null});return function(){return c.value}}});/*!
  * shared v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const _u=typeof window<"u",$i=(t,e=!1)=>e?Symbol.for(t):Symbol(t),EC=(t,e,n)=>bC({l:t,k:e,s:n}),bC=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Rt=t=>typeof t=="number"&&isFinite(t),MC=t=>W_(t)==="[object Date]",Xi=t=>W_(t)==="[object RegExp]",Ml=t=>We(t)&&Object.keys(t).length===0,zt=Object.assign;let Wp;const ni=()=>Wp||(Wp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xp(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const SC=Object.prototype.hasOwnProperty;function bs(t,e){return SC.call(t,e)}const mt=Array.isArray,vt=t=>typeof t=="function",Re=t=>typeof t=="string",Je=t=>typeof t=="boolean",lt=t=>t!==null&&typeof t=="object",V_=Object.prototype.toString,W_=t=>V_.call(t),We=t=>{if(!lt(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},TC=t=>t==null?"":mt(t)||We(t)&&t.toString===V_?JSON.stringify(t,null,2):String(t);function AC(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function Tf(t){let e=t;return()=>++e}function wC(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Mo=t=>!lt(t)||mt(t);function as(t,e){if(Mo(t)||Mo(e))throw new Error("Invalid value");for(const n in t)bs(t,n)&&(Mo(t[n])||Mo(e[n])?e[n]=t[n]:as(t[n],e[n]))}/*!
  * message-compiler v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function CC(t,e,n){return{line:t,column:e,offset:n}}function vu(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const RC=/\{([0-9a-zA-Z]+)\}/g;function LC(t,...e){return e.length===1&&PC(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(RC,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const X_=Object.assign,Yp=t=>typeof t=="string",PC=t=>t!==null&&typeof t=="object";function Y_(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const ze={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},IC={[ze.EXPECTED_TOKEN]:"Expected token: '{0}'",[ze.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[ze.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[ze.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[ze.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[ze.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[ze.EMPTY_PLACEHOLDER]:"Empty placeholder",[ze.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[ze.INVALID_LINKED_FORMAT]:"Invalid linked format",[ze.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[ze.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[ze.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[ze.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[ze.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[ze.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Na(t,e,n={}){const{domain:i,messages:r,args:a}=n,o=LC((r||IC)[t]||"",...a||[]),s=new SyntaxError(String(o));return s.code=t,e&&(s.location=e),s.domain=i,s}function NC(t){throw t}const Jn=" ",DC="\r",Zt=`
`,OC=String.fromCharCode(8232),UC=String.fromCharCode(8233);function FC(t){const e=t;let n=0,i=1,r=1,a=0;const o=w=>e[w]===DC&&e[w+1]===Zt,s=w=>e[w]===Zt,l=w=>e[w]===UC,c=w=>e[w]===OC,u=w=>o(w)||s(w)||l(w)||c(w),f=()=>n,h=()=>i,p=()=>r,b=()=>a,y=w=>o(w)||l(w)||c(w)?Zt:e[w],m=()=>y(n),d=()=>y(n+a);function _(){return a=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function g(){return o(n+a)&&a++,a++,e[n+a]}function E(){n=0,i=1,r=1,a=0}function A(w=0){a=w}function C(){const w=n+a;for(;w!==n;)_();a=0}return{index:f,line:h,column:p,peekOffset:b,charAt:y,currentChar:m,currentPeek:d,next:_,peek:g,reset:E,resetPeek:A,skipToPeek:C}}const Ti=void 0,kC=".",$p="'",BC="tokenizer";function zC(t,e={}){const n=e.location!==!1,i=FC(t),r=()=>i.index(),a=()=>CC(i.line(),i.column(),i.index()),o=a(),s=r(),l={currentType:14,offset:s,startLoc:o,endLoc:o,lastType:14,lastOffset:s,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(M,x,P,...U){const V=c();if(x.column+=P,x.offset+=P,u){const J=n?vu(V.startLoc,x):null,te=Na(M,J,{domain:BC,args:U});u(te)}}function h(M,x,P){M.endLoc=a(),M.currentType=x;const U={type:x};return n&&(U.loc=vu(M.startLoc,M.endLoc)),P!=null&&(U.value=P),U}const p=M=>h(M,14);function b(M,x){return M.currentChar()===x?(M.next(),x):(f(ze.EXPECTED_TOKEN,a(),0,x),"")}function y(M){let x="";for(;M.currentPeek()===Jn||M.currentPeek()===Zt;)x+=M.currentPeek(),M.peek();return x}function m(M){const x=y(M);return M.skipToPeek(),x}function d(M){if(M===Ti)return!1;const x=M.charCodeAt(0);return x>=97&&x<=122||x>=65&&x<=90||x===95}function _(M){if(M===Ti)return!1;const x=M.charCodeAt(0);return x>=48&&x<=57}function g(M,x){const{currentType:P}=x;if(P!==2)return!1;y(M);const U=d(M.currentPeek());return M.resetPeek(),U}function E(M,x){const{currentType:P}=x;if(P!==2)return!1;y(M);const U=M.currentPeek()==="-"?M.peek():M.currentPeek(),V=_(U);return M.resetPeek(),V}function A(M,x){const{currentType:P}=x;if(P!==2)return!1;y(M);const U=M.currentPeek()===$p;return M.resetPeek(),U}function C(M,x){const{currentType:P}=x;if(P!==8)return!1;y(M);const U=M.currentPeek()===".";return M.resetPeek(),U}function w(M,x){const{currentType:P}=x;if(P!==9)return!1;y(M);const U=d(M.currentPeek());return M.resetPeek(),U}function D(M,x){const{currentType:P}=x;if(!(P===8||P===12))return!1;y(M);const U=M.currentPeek()===":";return M.resetPeek(),U}function T(M,x){const{currentType:P}=x;if(P!==10)return!1;const U=()=>{const J=M.currentPeek();return J==="{"?d(M.peek()):J==="@"||J==="%"||J==="|"||J===":"||J==="."||J===Jn||!J?!1:J===Zt?(M.peek(),U()):d(J)},V=U();return M.resetPeek(),V}function L(M){y(M);const x=M.currentPeek()==="|";return M.resetPeek(),x}function z(M){const x=y(M),P=M.currentPeek()==="%"&&M.peek()==="{";return M.resetPeek(),{isModulo:P,hasSpace:x.length>0}}function F(M,x=!0){const P=(V=!1,J="",te=!1)=>{const fe=M.currentPeek();return fe==="{"?J==="%"?!1:V:fe==="@"||!fe?J==="%"?!0:V:fe==="%"?(M.peek(),P(V,"%",!0)):fe==="|"?J==="%"||te?!0:!(J===Jn||J===Zt):fe===Jn?(M.peek(),P(!0,Jn,te)):fe===Zt?(M.peek(),P(!0,Zt,te)):!0},U=P();return x&&M.resetPeek(),U}function G(M,x){const P=M.currentChar();return P===Ti?Ti:x(P)?(M.next(),P):null}function O(M){return G(M,P=>{const U=P.charCodeAt(0);return U>=97&&U<=122||U>=65&&U<=90||U>=48&&U<=57||U===95||U===36})}function W(M){return G(M,P=>{const U=P.charCodeAt(0);return U>=48&&U<=57})}function q(M){return G(M,P=>{const U=P.charCodeAt(0);return U>=48&&U<=57||U>=65&&U<=70||U>=97&&U<=102})}function $(M){let x="",P="";for(;x=W(M);)P+=x;return P}function ie(M){m(M);const x=M.currentChar();return x!=="%"&&f(ze.EXPECTED_TOKEN,a(),0,x),M.next(),"%"}function ee(M){let x="";for(;;){const P=M.currentChar();if(P==="{"||P==="}"||P==="@"||P==="|"||!P)break;if(P==="%")if(F(M))x+=P,M.next();else break;else if(P===Jn||P===Zt)if(F(M))x+=P,M.next();else{if(L(M))break;x+=P,M.next()}else x+=P,M.next()}return x}function le(M){m(M);let x="",P="";for(;x=O(M);)P+=x;return M.currentChar()===Ti&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),P}function B(M){m(M);let x="";return M.currentChar()==="-"?(M.next(),x+=`-${$(M)}`):x+=$(M),M.currentChar()===Ti&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),x}function Z(M){m(M),b(M,"'");let x="",P="";const U=J=>J!==$p&&J!==Zt;for(;x=G(M,U);)x==="\\"?P+=pe(M):P+=x;const V=M.currentChar();return V===Zt||V===Ti?(f(ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,a(),0),V===Zt&&(M.next(),b(M,"'")),P):(b(M,"'"),P)}function pe(M){const x=M.currentChar();switch(x){case"\\":case"'":return M.next(),`\\${x}`;case"u":return ve(M,x,4);case"U":return ve(M,x,6);default:return f(ze.UNKNOWN_ESCAPE_SEQUENCE,a(),0,x),""}}function ve(M,x,P){b(M,x);let U="";for(let V=0;V<P;V++){const J=q(M);if(!J){f(ze.INVALID_UNICODE_ESCAPE_SEQUENCE,a(),0,`\\${x}${U}${M.currentChar()}`);break}U+=J}return`\\${x}${U}`}function Me(M){m(M);let x="",P="";const U=V=>V!=="{"&&V!=="}"&&V!==Jn&&V!==Zt;for(;x=G(M,U);)P+=x;return P}function Ae(M){let x="",P="";for(;x=O(M);)P+=x;return P}function Y(M){const x=(P=!1,U)=>{const V=M.currentChar();return V==="{"||V==="%"||V==="@"||V==="|"||V==="("||V===")"||!V||V===Jn?U:V===Zt||V===kC?(U+=V,M.next(),x(P,U)):(U+=V,M.next(),x(!0,U))};return x(!1,"")}function oe(M){m(M);const x=b(M,"|");return m(M),x}function re(M,x){let P=null;switch(M.currentChar()){case"{":return x.braceNest>=1&&f(ze.NOT_ALLOW_NEST_PLACEHOLDER,a(),0),M.next(),P=h(x,2,"{"),m(M),x.braceNest++,P;case"}":return x.braceNest>0&&x.currentType===2&&f(ze.EMPTY_PLACEHOLDER,a(),0),M.next(),P=h(x,3,"}"),x.braceNest--,x.braceNest>0&&m(M),x.inLinked&&x.braceNest===0&&(x.inLinked=!1),P;case"@":return x.braceNest>0&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),P=ge(M,x)||p(x),x.braceNest=0,P;default:let V=!0,J=!0,te=!0;if(L(M))return x.braceNest>0&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),P=h(x,1,oe(M)),x.braceNest=0,x.inLinked=!1,P;if(x.braceNest>0&&(x.currentType===5||x.currentType===6||x.currentType===7))return f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),x.braceNest=0,ye(M,x);if(V=g(M,x))return P=h(x,5,le(M)),m(M),P;if(J=E(M,x))return P=h(x,6,B(M)),m(M),P;if(te=A(M,x))return P=h(x,7,Z(M)),m(M),P;if(!V&&!J&&!te)return P=h(x,13,Me(M)),f(ze.INVALID_TOKEN_IN_PLACEHOLDER,a(),0,P.value),m(M),P;break}return P}function ge(M,x){const{currentType:P}=x;let U=null;const V=M.currentChar();switch((P===8||P===9||P===12||P===10)&&(V===Zt||V===Jn)&&f(ze.INVALID_LINKED_FORMAT,a(),0),V){case"@":return M.next(),U=h(x,8,"@"),x.inLinked=!0,U;case".":return m(M),M.next(),h(x,9,".");case":":return m(M),M.next(),h(x,10,":");default:return L(M)?(U=h(x,1,oe(M)),x.braceNest=0,x.inLinked=!1,U):C(M,x)||D(M,x)?(m(M),ge(M,x)):w(M,x)?(m(M),h(x,12,Ae(M))):T(M,x)?(m(M),V==="{"?re(M,x)||U:h(x,11,Y(M))):(P===8&&f(ze.INVALID_LINKED_FORMAT,a(),0),x.braceNest=0,x.inLinked=!1,ye(M,x))}}function ye(M,x){let P={type:14};if(x.braceNest>0)return re(M,x)||p(x);if(x.inLinked)return ge(M,x)||p(x);switch(M.currentChar()){case"{":return re(M,x)||p(x);case"}":return f(ze.UNBALANCED_CLOSING_BRACE,a(),0),M.next(),h(x,3,"}");case"@":return ge(M,x)||p(x);default:if(L(M))return P=h(x,1,oe(M)),x.braceNest=0,x.inLinked=!1,P;const{isModulo:V,hasSpace:J}=z(M);if(V)return J?h(x,0,ee(M)):h(x,4,ie(M));if(F(M))return h(x,0,ee(M));break}return P}function S(){const{currentType:M,offset:x,startLoc:P,endLoc:U}=l;return l.lastType=M,l.lastOffset=x,l.lastStartLoc=P,l.lastEndLoc=U,l.offset=r(),l.startLoc=a(),i.currentChar()===Ti?h(l,14):ye(i,l)}return{nextToken:S,currentOffset:r,currentPosition:a,context:c}}const HC="parser",GC=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function VC(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function WC(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,_,g,E,...A){const C=d.currentPosition();if(C.offset+=E,C.column+=E,n){const w=e?vu(g,C):null,D=Na(_,w,{domain:HC,args:A});n(D)}}function r(d,_,g){const E={type:d};return e&&(E.start=_,E.end=_,E.loc={start:g,end:g}),E}function a(d,_,g,E){E&&(d.type=E),e&&(d.end=_,d.loc&&(d.loc.end=g))}function o(d,_){const g=d.context(),E=r(3,g.offset,g.startLoc);return E.value=_,a(E,d.currentOffset(),d.currentPosition()),E}function s(d,_){const g=d.context(),{lastOffset:E,lastStartLoc:A}=g,C=r(5,E,A);return C.index=parseInt(_,10),d.nextToken(),a(C,d.currentOffset(),d.currentPosition()),C}function l(d,_){const g=d.context(),{lastOffset:E,lastStartLoc:A}=g,C=r(4,E,A);return C.key=_,d.nextToken(),a(C,d.currentOffset(),d.currentPosition()),C}function c(d,_){const g=d.context(),{lastOffset:E,lastStartLoc:A}=g,C=r(9,E,A);return C.value=_.replace(GC,VC),d.nextToken(),a(C,d.currentOffset(),d.currentPosition()),C}function u(d){const _=d.nextToken(),g=d.context(),{lastOffset:E,lastStartLoc:A}=g,C=r(8,E,A);return _.type!==12?(i(d,ze.UNEXPECTED_EMPTY_LINKED_MODIFIER,g.lastStartLoc,0),C.value="",a(C,E,A),{nextConsumeToken:_,node:C}):(_.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,g.lastStartLoc,0,Fn(_)),C.value=_.value||"",a(C,d.currentOffset(),d.currentPosition()),{node:C})}function f(d,_){const g=d.context(),E=r(7,g.offset,g.startLoc);return E.value=_,a(E,d.currentOffset(),d.currentPosition()),E}function h(d){const _=d.context(),g=r(6,_.offset,_.startLoc);let E=d.nextToken();if(E.type===9){const A=u(d);g.modifier=A.node,E=A.nextConsumeToken||d.nextToken()}switch(E.type!==10&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(E)),E=d.nextToken(),E.type===2&&(E=d.nextToken()),E.type){case 11:E.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(E)),g.key=f(d,E.value||"");break;case 5:E.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(E)),g.key=l(d,E.value||"");break;case 6:E.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(E)),g.key=s(d,E.value||"");break;case 7:E.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(E)),g.key=c(d,E.value||"");break;default:i(d,ze.UNEXPECTED_EMPTY_LINKED_KEY,_.lastStartLoc,0);const A=d.context(),C=r(7,A.offset,A.startLoc);return C.value="",a(C,A.offset,A.startLoc),g.key=C,a(g,A.offset,A.startLoc),{nextConsumeToken:E,node:g}}return a(g,d.currentOffset(),d.currentPosition()),{node:g}}function p(d){const _=d.context(),g=_.currentType===1?d.currentOffset():_.offset,E=_.currentType===1?_.endLoc:_.startLoc,A=r(2,g,E);A.items=[];let C=null;do{const T=C||d.nextToken();switch(C=null,T.type){case 0:T.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(o(d,T.value||""));break;case 6:T.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(s(d,T.value||""));break;case 5:T.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(l(d,T.value||""));break;case 7:T.value==null&&i(d,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(c(d,T.value||""));break;case 8:const L=h(d);A.items.push(L.node),C=L.nextConsumeToken||null;break}}while(_.currentType!==14&&_.currentType!==1);const w=_.currentType===1?_.lastOffset:d.currentOffset(),D=_.currentType===1?_.lastEndLoc:d.currentPosition();return a(A,w,D),A}function b(d,_,g,E){const A=d.context();let C=E.items.length===0;const w=r(1,_,g);w.cases=[],w.cases.push(E);do{const D=p(d);C||(C=D.items.length===0),w.cases.push(D)}while(A.currentType!==14);return C&&i(d,ze.MUST_HAVE_MESSAGES_IN_PLURAL,g,0),a(w,d.currentOffset(),d.currentPosition()),w}function y(d){const _=d.context(),{offset:g,startLoc:E}=_,A=p(d);return _.currentType===14?A:b(d,g,E,A)}function m(d){const _=zC(d,X_({},t)),g=_.context(),E=r(0,g.offset,g.startLoc);return e&&E.loc&&(E.loc.source=d),E.body=y(_),t.onCacheKey&&(E.cacheKey=t.onCacheKey(d)),g.currentType!==14&&i(_,ze.UNEXPECTED_LEXICAL_ANALYSIS,g.lastStartLoc,0,d[g.offset]||""),a(E,_.currentOffset(),_.currentPosition()),E}return{parse:m}}function Fn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function XC(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:a=>(n.helpers.add(a),a)}}function jp(t,e){for(let n=0;n<t.length;n++)Af(t[n],e)}function Af(t,e){switch(t.type){case 1:jp(t.cases,e),e.helper("plural");break;case 2:jp(t.items,e);break;case 6:Af(t.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function YC(t,e={}){const n=XC(t);n.helper("normalize"),t.body&&Af(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function $C(t){const e=t.body;return e.type===2?qp(e):e.cases.forEach(n=>qp(n)),t}function qp(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Y_(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const jC="minifier";function Zr(t){switch(t.t=t.type,t.type){case 0:const e=t;Zr(e.body),e.b=e.body,delete e.body;break;case 1:const n=t,i=n.cases;for(let u=0;u<i.length;u++)Zr(i[u]);n.c=i,delete n.cases;break;case 2:const r=t,a=r.items;for(let u=0;u<a.length;u++)Zr(a[u]);r.i=a,delete r.items,r.static&&(r.s=r.static,delete r.static);break;case 3:case 9:case 8:case 7:const o=t;o.value&&(o.v=o.value,delete o.value);break;case 6:const s=t;Zr(s.key),s.k=s.key,delete s.key,s.modifier&&(Zr(s.modifier),s.m=s.modifier,delete s.modifier);break;case 5:const l=t;l.i=l.index,delete l.index;break;case 4:const c=t;c.k=c.key,delete c.key;break;default:throw Na(ze.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:jC,args:[t.type]})}delete t.type}const qC="parser";function KC(t,e){const{sourceMap:n,filename:i,breakLineCode:r,needIndent:a}=e,o=e.location!==!1,s={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:a,indentLevel:0};o&&t.loc&&(s.source=t.loc.source);const l=()=>s;function c(m,d){s.code+=m}function u(m,d=!0){const _=d?r:"";c(a?_+"  ".repeat(m):_)}function f(m=!0){const d=++s.indentLevel;m&&u(d)}function h(m=!0){const d=--s.indentLevel;m&&u(d)}function p(){u(s.indentLevel)}return{context:l,push:c,indent:f,deindent:h,newline:p,helper:m=>`_${m}`,needIndent:()=>s.needIndent}}function ZC(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ya(t,e.key),e.modifier?(t.push(", "),ya(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function JC(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let a=0;a<r&&(ya(t,e.items[a]),a!==r-1);a++)t.push(", ");t.deindent(i()),t.push("])")}function QC(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let a=0;a<r&&(ya(t,e.cases[a]),a!==r-1);a++)t.push(", ");t.deindent(i()),t.push("])")}}function eR(t,e){e.body?ya(t,e.body):t.push("null")}function ya(t,e){const{helper:n}=t;switch(e.type){case 0:eR(t,e);break;case 1:QC(t,e);break;case 2:JC(t,e);break;case 6:ZC(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Na(ze.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:qC,args:[e.type]})}}const tR=(t,e={})=>{const n=Yp(e.mode)?e.mode:"normal",i=Yp(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,a=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",s=t.helpers||[],l=KC(t,{mode:n,filename:i,sourceMap:r,breakLineCode:a,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),s.length>0&&(l.push(`const { ${Y_(s.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),ya(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function nR(t,e={}){const n=X_({},e),i=!!n.jit,r=!!n.minify,a=n.optimize==null?!0:n.optimize,s=WC(n).parse(t);return i?(a&&$C(s),r&&Zr(s),{ast:s,code:""}):(YC(s,n),tR(s,n))}/*!
  * core-base v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function iR(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ni().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ni().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ni().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ji=[];ji[0]={w:[0],i:[3,0],["["]:[4],o:[7]};ji[1]={w:[1],["."]:[2],["["]:[4],o:[7]};ji[2]={w:[2],i:[3,0],[0]:[3,0]};ji[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};ji[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};ji[5]={["'"]:[4,0],o:8,l:[5,0]};ji[6]={['"']:[4,0],o:8,l:[6,0]};const rR=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function aR(t){return rR.test(t)}function sR(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function oR(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function lR(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:aR(e)?sR(e):"*"+e}function cR(t){const e=[];let n=-1,i=0,r=0,a,o,s,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=s:o+=s},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=lR(o),o===!1))return!1;h[1]()}};function p(){const b=t[n+1];if(i===5&&b==="'"||i===6&&b==='"')return n++,s="\\"+b,h[0](),!0}for(;i!==null;)if(n++,a=t[n],!(a==="\\"&&p())){if(l=oR(a),f=ji[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(s=a,u()===!1))))return;if(i===7)return e}}const Kp=new Map;function uR(t,e){return lt(t)?t[e]:null}function fR(t,e){if(!lt(t))return null;let n=Kp.get(e);if(n||(n=cR(e),n&&Kp.set(e,n)),!n)return null;const i=n.length;let r=t,a=0;for(;a<i;){const o=r[n[a]];if(o===void 0||vt(r))return null;r=o,a++}return r}const dR=t=>t,hR=t=>"",pR="text",mR=t=>t.length===0?"":AC(t),gR=TC;function Zp(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function _R(t){const e=Rt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Rt(t.named.count)||Rt(t.named.n))?Rt(t.named.count)?t.named.count:Rt(t.named.n)?t.named.n:e:e}function vR(t,e){e.count||(e.count=t),e.n||(e.n=t)}function xR(t={}){const e=t.locale,n=_R(t),i=lt(t.pluralRules)&&Re(e)&&vt(t.pluralRules[e])?t.pluralRules[e]:Zp,r=lt(t.pluralRules)&&Re(e)&&vt(t.pluralRules[e])?Zp:void 0,a=d=>d[i(n,d.length,r)],o=t.list||[],s=d=>o[d],l=t.named||{};Rt(t.pluralIndex)&&vR(n,l);const c=d=>l[d];function u(d){const _=vt(t.messages)?t.messages(d):lt(t.messages)?t.messages[d]:!1;return _||(t.parent?t.parent.message(d):hR)}const f=d=>t.modifiers?t.modifiers[d]:dR,h=We(t.processor)&&vt(t.processor.normalize)?t.processor.normalize:mR,p=We(t.processor)&&vt(t.processor.interpolate)?t.processor.interpolate:gR,b=We(t.processor)&&Re(t.processor.type)?t.processor.type:pR,m={list:s,named:c,plural:a,linked:(d,..._)=>{const[g,E]=_;let A="text",C="";_.length===1?lt(g)?(C=g.modifier||C,A=g.type||A):Re(g)&&(C=g||C):_.length===2&&(Re(g)&&(C=g||C),Re(E)&&(A=E||A));const w=u(d)(m),D=A==="vnode"&&mt(w)&&C?w[0]:w;return C?f(C)(D,A):D},message:u,type:b,interpolate:p,normalize:h,values:zt({},o,l)};return m}let Ms=null;function yR(t){Ms=t}function ER(t,e,n){Ms&&Ms.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const bR=MR("function:translate");function MR(t){return e=>Ms&&Ms.emit(t,e)}const SR={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function wf(t,e){return e.locale!=null?Jp(e.locale):Jp(t.locale)}let Cc;function Jp(t){return Re(t)?t:Cc!=null&&t.resolvedOnce?Cc:Cc=t()}function TR(t,e,n){return[...new Set([n,...mt(e)?e:lt(e)?Object.keys(e):Re(e)?[e]:[n]])]}function $_(t,e,n){const i=Re(n)?n:Ea,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let a=r.__localeChainCache.get(i);if(!a){a=[];let o=[n];for(;mt(o);)o=Qp(a,o,e);const s=mt(e)||!We(e)?e:e.default?e.default:null;o=Re(s)?[s]:s,mt(o)&&Qp(a,o,!1),r.__localeChainCache.set(i,a)}return a}function Qp(t,e,n){let i=!0;for(let r=0;r<e.length&&Je(i);r++){const a=e[r];Re(a)&&(i=AR(t,e[r],n))}return i}function AR(t,e,n){let i;const r=e.split("-");do{const a=r.join("-");i=wR(t,a,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function wR(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(mt(n)||We(n))&&n[r]&&(i=n[r])}return i}const CR="9.7.1",Sl=-1,Ea="en-US",em="",tm=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function RR(){return{upper:(t,e)=>e==="text"&&Re(t)?t.toUpperCase():e==="vnode"&&lt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Re(t)?t.toLowerCase():e==="vnode"&&lt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Re(t)?tm(t):e==="vnode"&&lt(t)&&"__v_isVNode"in t?tm(t.children):t}}let j_;function nm(t){j_=t}let q_;function LR(t){q_=t}let K_;function PR(t){K_=t}let Z_=null;const im=t=>{Z_=t},IR=()=>Z_;let J_=null;const rm=t=>{J_=t},NR=()=>J_;let am=0;function DR(t={}){const e=vt(t.onWarn)?t.onWarn:wC,n=Re(t.version)?t.version:CR,i=Re(t.locale)||vt(t.locale)?t.locale:Ea,r=vt(i)?Ea:i,a=mt(t.fallbackLocale)||We(t.fallbackLocale)||Re(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=We(t.messages)?t.messages:{[r]:{}},s=We(t.datetimeFormats)?t.datetimeFormats:{[r]:{}},l=We(t.numberFormats)?t.numberFormats:{[r]:{}},c=zt({},t.modifiers||{},RR()),u=t.pluralRules||{},f=vt(t.missing)?t.missing:null,h=Je(t.missingWarn)||Xi(t.missingWarn)?t.missingWarn:!0,p=Je(t.fallbackWarn)||Xi(t.fallbackWarn)?t.fallbackWarn:!0,b=!!t.fallbackFormat,y=!!t.unresolving,m=vt(t.postTranslation)?t.postTranslation:null,d=We(t.processor)?t.processor:null,_=Je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter,E=vt(t.messageCompiler)?t.messageCompiler:j_,A=vt(t.messageResolver)?t.messageResolver:q_||uR,C=vt(t.localeFallbacker)?t.localeFallbacker:K_||TR,w=lt(t.fallbackContext)?t.fallbackContext:void 0,D=t,T=lt(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,L=lt(D.__numberFormatters)?D.__numberFormatters:new Map,z=lt(D.__meta)?D.__meta:{};am++;const F={version:n,cid:am,locale:i,fallbackLocale:a,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:b,unresolving:y,postTranslation:m,processor:d,warnHtmlMessage:_,escapeParameter:g,messageCompiler:E,messageResolver:A,localeFallbacker:C,fallbackContext:w,onWarn:e,__meta:z};return F.datetimeFormats=s,F.numberFormats=l,F.__datetimeFormatters=T,F.__numberFormatters=L,__INTLIFY_PROD_DEVTOOLS__&&ER(F,n,z),F}function Cf(t,e,n,i,r){const{missing:a,onWarn:o}=t;if(a!==null){const s=a(t,n,e,r);return Re(s)?s:e}else return e}function Va(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Rc(t){return n=>OR(n,t)}function OR(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const i=n,r=i.c||i.cases;return t.plural(r.reduce((a,o)=>[...a,sm(t,o)],[]))}else return sm(t,n)}function sm(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const i=(e.i||e.items).reduce((r,a)=>[...r,xu(t,a)],[]);return t.normalize(i)}}function xu(t,e){const n=e.t||e.type;switch(n){case 3:const i=e;return i.v||i.value;case 9:const r=e;return r.v||r.value;case 4:const a=e;return t.interpolate(t.named(a.k||a.key));case 5:const o=e;return t.interpolate(t.list(o.i!=null?o.i:o.index));case 6:const s=e,l=s.m||s.modifier;return t.linked(xu(t,s.k||s.key),l?xu(t,l):void 0,t.type);case 7:const c=e;return c.v||c.value;case 8:const u=e;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${n}`)}}const Q_=ze.__EXTEND_POINT__,So=Tf(Q_),Ni={INVALID_ARGUMENT:Q_,INVALID_DATE_ARGUMENT:So(),INVALID_ISO_DATE_ARGUMENT:So(),NOT_SUPPORT_NON_STRING_MESSAGE:So(),__EXTEND_POINT__:So()};function gr(t){return Na(t,null,void 0)}const e1=t=>t;let ta=Object.create(null);const ba=t=>lt(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function t1(t,e={}){let n=!1;const i=e.onError||NC;return e.onError=r=>{n=!0,i(r)},{...nR(t,e),detectError:n}}const UR=(t,e)=>{if(!Re(t))throw gr(Ni.NOT_SUPPORT_NON_STRING_MESSAGE);{Je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||e1)(t),r=ta[i];if(r)return r;const{code:a,detectError:o}=t1(t,e),s=new Function(`return ${a}`)();return o?s:ta[i]=s}};function FR(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Re(t)){Je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||e1)(t),r=ta[i];if(r)return r;const{ast:a,detectError:o}=t1(t,{...e,location:!1,jit:!0}),s=Rc(a);return o?s:ta[i]=s}else{const n=t.cacheKey;if(n){const i=ta[n];return i||(ta[n]=Rc(t))}else return Rc(t)}}const om=()=>"",vn=t=>vt(t);function lm(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:a,fallbackLocale:o,messages:s}=t,[l,c]=yu(...e),u=Je(c.missingWarn)?c.missingWarn:t.missingWarn,f=Je(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=Je(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,b=Re(c.default)||Je(c.default)?Je(c.default)?a?l:()=>l:c.default:n?a?l:()=>l:"",y=n||b!=="",m=wf(t,c);h&&kR(c);let[d,_,g]=p?[l,m,s[m]||{}]:n1(t,l,m,o,f,u),E=d,A=l;if(!p&&!(Re(E)||ba(E)||vn(E))&&y&&(E=b,A=E),!p&&(!(Re(E)||ba(E)||vn(E))||!Re(_)))return r?Sl:l;let C=!1;const w=()=>{C=!0},D=vn(E)?E:i1(t,l,_,E,A,w);if(C)return E;const T=HR(t,_,g,c),L=xR(T),z=BR(t,D,L),F=i?i(z,l):z;if(__INTLIFY_PROD_DEVTOOLS__){const G={timestamp:Date.now(),key:Re(l)?l:vn(E)?E.key:"",locale:_||(vn(E)?E.locale:""),format:Re(E)?E:vn(E)?E.source:"",message:F};G.meta=zt({},t.__meta,IR()||{}),bR(G)}return F}function kR(t){mt(t.list)?t.list=t.list.map(e=>Re(e)?Xp(e):e):lt(t.named)&&Object.keys(t.named).forEach(e=>{Re(t.named[e])&&(t.named[e]=Xp(t.named[e]))})}function n1(t,e,n,i,r,a){const{messages:o,onWarn:s,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f={},h,p=null;const b="translate";for(let y=0;y<u.length&&(h=u[y],f=o[h]||{},(p=l(f,e))===null&&(p=f[e]),!(Re(p)||ba(p)||vn(p)));y++){const m=Cf(t,e,h,a,b);m!==e&&(p=m)}return[p,h,f]}function i1(t,e,n,i,r,a){const{messageCompiler:o,warnHtmlMessage:s}=t;if(vn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,zR(t,n,r,i,s,a));return l.locale=n,l.key=e,l.source=i,l}function BR(t,e,n){return e(n)}function yu(...t){const[e,n,i]=t,r={};if(!Re(e)&&!Rt(e)&&!vn(e)&&!ba(e))throw gr(Ni.INVALID_ARGUMENT);const a=Rt(e)?String(e):(vn(e),e);return Rt(n)?r.plural=n:Re(n)?r.default=n:We(n)&&!Ml(n)?r.named=n:mt(n)&&(r.list=n),Rt(i)?r.plural=i:Re(i)?r.default=i:We(i)&&zt(r,i),[a,r]}function zR(t,e,n,i,r,a){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw a&&a(o),o},onCacheKey:o=>EC(e,n,o)}}function HR(t,e,n,i){const{modifiers:r,pluralRules:a,messageResolver:o,fallbackLocale:s,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:a,messages:p=>{let b=o(n,p);if(b==null&&u){const[,,y]=n1(u,p,e,s,l,c);b=o(y,p)}if(Re(b)||ba(b)){let y=!1;const d=i1(t,p,e,b,p,()=>{y=!0});return y?om:d}else return vn(b)?b:om}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Rt(i.plural)&&(h.pluralIndex=i.plural),h}function cm(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:a,localeFallbacker:o}=t,{__datetimeFormatters:s}=t,[l,c,u,f]=Eu(...e),h=Je(u.missingWarn)?u.missingWarn:t.missingWarn;Je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,b=wf(t,u),y=o(t,r,b);if(!Re(l)||l==="")return new Intl.DateTimeFormat(b,f).format(c);let m={},d,_=null;const g="datetime format";for(let C=0;C<y.length&&(d=y[C],m=n[d]||{},_=m[l],!We(_));C++)Cf(t,l,d,h,g);if(!We(_)||!Re(d))return i?Sl:l;let E=`${d}__${l}`;Ml(f)||(E=`${E}__${JSON.stringify(f)}`);let A=s.get(E);return A||(A=new Intl.DateTimeFormat(d,zt({},_,f)),s.set(E,A)),p?A.formatToParts(c):A.format(c)}const r1=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Eu(...t){const[e,n,i,r]=t,a={};let o={},s;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw gr(Ni.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();s=new Date(c);try{s.toISOString()}catch{throw gr(Ni.INVALID_ISO_DATE_ARGUMENT)}}else if(MC(e)){if(isNaN(e.getTime()))throw gr(Ni.INVALID_DATE_ARGUMENT);s=e}else if(Rt(e))s=e;else throw gr(Ni.INVALID_ARGUMENT);return Re(n)?a.key=n:We(n)&&Object.keys(n).forEach(l=>{r1.includes(l)?o[l]=n[l]:a[l]=n[l]}),Re(i)?a.locale=i:We(i)&&(o=i),We(r)&&(o=r),[a.key||"",s,a,o]}function um(t,e,n){const i=t;for(const r in n){const a=`${e}__${r}`;i.__datetimeFormatters.has(a)&&i.__datetimeFormatters.delete(a)}}function fm(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:a,localeFallbacker:o}=t,{__numberFormatters:s}=t,[l,c,u,f]=bu(...e),h=Je(u.missingWarn)?u.missingWarn:t.missingWarn;Je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,b=wf(t,u),y=o(t,r,b);if(!Re(l)||l==="")return new Intl.NumberFormat(b,f).format(c);let m={},d,_=null;const g="number format";for(let C=0;C<y.length&&(d=y[C],m=n[d]||{},_=m[l],!We(_));C++)Cf(t,l,d,h,g);if(!We(_)||!Re(d))return i?Sl:l;let E=`${d}__${l}`;Ml(f)||(E=`${E}__${JSON.stringify(f)}`);let A=s.get(E);return A||(A=new Intl.NumberFormat(d,zt({},_,f)),s.set(E,A)),p?A.formatToParts(c):A.format(c)}const a1=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function bu(...t){const[e,n,i,r]=t,a={};let o={};if(!Rt(e))throw gr(Ni.INVALID_ARGUMENT);const s=e;return Re(n)?a.key=n:We(n)&&Object.keys(n).forEach(l=>{a1.includes(l)?o[l]=n[l]:a[l]=n[l]}),Re(i)?a.locale=i:We(i)&&(o=i),We(r)&&(o=r),[a.key||"",s,a,o]}function dm(t,e,n){const i=t;for(const r in n){const a=`${e}__${r}`;i.__numberFormatters.has(a)&&i.__numberFormatters.delete(a)}}iR();/*!
  * vue-i18n v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const GR="9.7.1";function VR(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ni().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ni().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ni().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ni().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ni().__INTLIFY_PROD_DEVTOOLS__=!1)}const s1=SR.__EXTEND_POINT__,Ai=Tf(s1);Ai(),Ai(),Ai(),Ai(),Ai(),Ai(),Ai(),Ai();const o1=Ni.__EXTEND_POINT__,Qt=Tf(o1),Lt={UNEXPECTED_RETURN_TYPE:o1,INVALID_ARGUMENT:Qt(),MUST_BE_CALL_SETUP_TOP:Qt(),NOT_INSTALLED:Qt(),NOT_AVAILABLE_IN_LEGACY_MODE:Qt(),REQUIRED_VALUE:Qt(),INVALID_VALUE:Qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Qt(),NOT_INSTALLED_WITH_PROVIDE:Qt(),UNEXPECTED_ERROR:Qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Qt(),BRIDGE_SUPPORT_VUE_2_ONLY:Qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Qt(),__EXTEND_POINT__:Qt()};function Ft(t,...e){return Na(t,null,void 0)}const Mu=$i("__translateVNode"),Su=$i("__datetimeParts"),Tu=$i("__numberParts"),l1=$i("__setPluralRules"),c1=$i("__injectWithOption"),Au=$i("__dispose");function Ss(t){if(!lt(t))return t;for(const e in t)if(bs(t,e))if(!e.includes("."))lt(t[e])&&Ss(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,a=!1;for(let o=0;o<i;o++){if(n[o]in r||(r[n[o]]={}),!lt(r[n[o]])){a=!0;break}r=r[n[o]]}a||(r[n[i]]=t[e],delete t[e]),lt(r[n[i]])&&Ss(r[n[i]])}return t}function Tl(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:a}=e,o=We(n)?n:mt(i)?{}:{[t]:{}};if(mt(i)&&i.forEach(s=>{if("locale"in s&&"resource"in s){const{locale:l,resource:c}=s;l?(o[l]=o[l]||{},as(c,o[l])):as(c,o)}else Re(s)&&as(JSON.parse(s),o)}),r==null&&a)for(const s in o)bs(o,s)&&Ss(o[s]);return o}function u1(t){return t.type}function f1(t,e,n){let i=lt(e.messages)?e.messages:{};"__i18nGlobal"in n&&(i=Tl(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(a=>{t.mergeLocaleMessage(a,i[a])});{if(lt(e.datetimeFormats)){const a=Object.keys(e.datetimeFormats);a.length&&a.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(lt(e.numberFormats)){const a=Object.keys(e.numberFormats);a.length&&a.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function hm(t){return xt(As,null,t,0)}const pm="__INTLIFY_META__",mm=()=>[],WR=()=>!1;let gm=0;function _m(t){return(e,n,i,r)=>t(n,i,fa()||void 0,r)}const XR=()=>{const t=fa();let e=null;return t&&(e=u1(t)[pm])?{[pm]:e}:null};function Rf(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,a=t.flatJson;let o=Je(t.inheritLocale)?t.inheritLocale:!0;const s=Cn(n&&o?n.locale.value:Re(t.locale)?t.locale:Ea),l=Cn(n&&o?n.fallbackLocale.value:Re(t.fallbackLocale)||mt(t.fallbackLocale)||We(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s.value),c=Cn(Tl(s.value,t)),u=Cn(We(t.datetimeFormats)?t.datetimeFormats:{[s.value]:{}}),f=Cn(We(t.numberFormats)?t.numberFormats:{[s.value]:{}});let h=n?n.missingWarn:Je(t.missingWarn)||Xi(t.missingWarn)?t.missingWarn:!0,p=n?n.fallbackWarn:Je(t.fallbackWarn)||Xi(t.fallbackWarn)?t.fallbackWarn:!0,b=n?n.fallbackRoot:Je(t.fallbackRoot)?t.fallbackRoot:!0,y=!!t.fallbackFormat,m=vt(t.missing)?t.missing:null,d=vt(t.missing)?_m(t.missing):null,_=vt(t.postTranslation)?t.postTranslation:null,g=n?n.warnHtmlMessage:Je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter;const A=n?n.modifiers:We(t.modifiers)?t.modifiers:{};let C=t.pluralRules||n&&n.pluralRules,w;w=(()=>{r&&rm(null);const v={version:GR,locale:s.value,fallbackLocale:l.value,messages:c.value,modifiers:A,pluralRules:C,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:y,unresolving:!0,postTranslation:_===null?void 0:_,warnHtmlMessage:g,escapeParameter:E,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};v.datetimeFormats=u.value,v.numberFormats=f.value,v.__datetimeFormatters=We(w)?w.__datetimeFormatters:void 0,v.__numberFormatters=We(w)?w.__numberFormatters:void 0;const N=DR(v);return r&&rm(N),N})(),Va(w,s.value,l.value);function T(){return[s.value,l.value,c.value,u.value,f.value]}const L=st({get:()=>s.value,set:v=>{s.value=v,w.locale=s.value}}),z=st({get:()=>l.value,set:v=>{l.value=v,w.fallbackLocale=l.value,Va(w,s.value,v)}}),F=st(()=>c.value),G=st(()=>u.value),O=st(()=>f.value);function W(){return vt(_)?_:null}function q(v){_=v,w.postTranslation=v}function $(){return m}function ie(v){v!==null&&(d=_m(v)),m=v,w.missing=d}const ee=(v,N,K,Q,ce,be)=>{T();let me;try{__INTLIFY_PROD_DEVTOOLS__&&im(XR()),r||(w.fallbackContext=n?NR():void 0),me=v(w)}finally{__INTLIFY_PROD_DEVTOOLS__&&im(null),r||(w.fallbackContext=void 0)}if(K!=="translate exists"&&Rt(me)&&me===Sl||K==="translate exists"&&!me){const[Se,k]=N();return n&&b?Q(n):ce(Se)}else{if(be(me))return me;throw Ft(Lt.UNEXPECTED_RETURN_TYPE)}};function le(...v){return ee(N=>Reflect.apply(lm,null,[N,...v]),()=>yu(...v),"translate",N=>Reflect.apply(N.t,N,[...v]),N=>N,N=>Re(N))}function B(...v){const[N,K,Q]=v;if(Q&&!lt(Q))throw Ft(Lt.INVALID_ARGUMENT);return le(N,K,zt({resolvedMessage:!0},Q||{}))}function Z(...v){return ee(N=>Reflect.apply(cm,null,[N,...v]),()=>Eu(...v),"datetime format",N=>Reflect.apply(N.d,N,[...v]),()=>em,N=>Re(N))}function pe(...v){return ee(N=>Reflect.apply(fm,null,[N,...v]),()=>bu(...v),"number format",N=>Reflect.apply(N.n,N,[...v]),()=>em,N=>Re(N))}function ve(v){return v.map(N=>Re(N)||Rt(N)||Je(N)?hm(String(N)):N)}const Ae={normalize:ve,interpolate:v=>v,type:"vnode"};function Y(...v){return ee(N=>{let K;const Q=N;try{Q.processor=Ae,K=Reflect.apply(lm,null,[Q,...v])}finally{Q.processor=null}return K},()=>yu(...v),"translate",N=>N[Mu](...v),N=>[hm(N)],N=>mt(N))}function oe(...v){return ee(N=>Reflect.apply(fm,null,[N,...v]),()=>bu(...v),"number format",N=>N[Tu](...v),mm,N=>Re(N)||mt(N))}function re(...v){return ee(N=>Reflect.apply(cm,null,[N,...v]),()=>Eu(...v),"datetime format",N=>N[Su](...v),mm,N=>Re(N)||mt(N))}function ge(v){C=v,w.pluralRules=C}function ye(v,N){return ee(()=>{if(!v)return!1;const K=Re(N)?N:s.value,Q=x(K),ce=w.messageResolver(Q,v);return ba(ce)||vn(ce)||Re(ce)},()=>[v],"translate exists",K=>Reflect.apply(K.te,K,[v,N]),WR,K=>Je(K))}function S(v){let N=null;const K=$_(w,l.value,s.value);for(let Q=0;Q<K.length;Q++){const ce=c.value[K[Q]]||{},be=w.messageResolver(ce,v);if(be!=null){N=be;break}}return N}function M(v){const N=S(v);return N??(n?n.tm(v)||{}:{})}function x(v){return c.value[v]||{}}function P(v,N){if(a){const K={[v]:N};for(const Q in K)bs(K,Q)&&Ss(K[Q]);N=K[v]}c.value[v]=N,w.messages=c.value}function U(v,N){c.value[v]=c.value[v]||{};const K={[v]:N};for(const Q in K)bs(K,Q)&&Ss(K[Q]);N=K[v],as(N,c.value[v]),w.messages=c.value}function V(v){return u.value[v]||{}}function J(v,N){u.value[v]=N,w.datetimeFormats=u.value,um(w,v,N)}function te(v,N){u.value[v]=zt(u.value[v]||{},N),w.datetimeFormats=u.value,um(w,v,N)}function fe(v){return f.value[v]||{}}function de(v,N){f.value[v]=N,w.numberFormats=f.value,dm(w,v,N)}function Ce(v,N){f.value[v]=zt(f.value[v]||{},N),w.numberFormats=f.value,dm(w,v,N)}gm++,n&&_u&&(si(n.locale,v=>{o&&(s.value=v,w.locale=v,Va(w,s.value,l.value))}),si(n.fallbackLocale,v=>{o&&(l.value=v,w.fallbackLocale=v,Va(w,s.value,l.value))}));const R={id:gm,locale:L,fallbackLocale:z,get inheritLocale(){return o},set inheritLocale(v){o=v,v&&n&&(s.value=n.locale.value,l.value=n.fallbackLocale.value,Va(w,s.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:F,get modifiers(){return A},get pluralRules(){return C||{}},get isGlobal(){return r},get missingWarn(){return h},set missingWarn(v){h=v,w.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(v){p=v,w.fallbackWarn=p},get fallbackRoot(){return b},set fallbackRoot(v){b=v},get fallbackFormat(){return y},set fallbackFormat(v){y=v,w.fallbackFormat=y},get warnHtmlMessage(){return g},set warnHtmlMessage(v){g=v,w.warnHtmlMessage=v},get escapeParameter(){return E},set escapeParameter(v){E=v,w.escapeParameter=v},t:le,getLocaleMessage:x,setLocaleMessage:P,mergeLocaleMessage:U,getPostTranslationHandler:W,setPostTranslationHandler:q,getMissingHandler:$,setMissingHandler:ie,[l1]:ge};return R.datetimeFormats=G,R.numberFormats=O,R.rt=B,R.te=ye,R.tm=M,R.d=Z,R.n=pe,R.getDateTimeFormat=V,R.setDateTimeFormat=J,R.mergeDateTimeFormat=te,R.getNumberFormat=fe,R.setNumberFormat=de,R.mergeNumberFormat=Ce,R[c1]=i,R[Mu]=Y,R[Su]=re,R[Tu]=oe,R}function YR(t){const e=Re(t.locale)?t.locale:Ea,n=Re(t.fallbackLocale)||mt(t.fallbackLocale)||We(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=vt(t.missing)?t.missing:void 0,r=Je(t.silentTranslationWarn)||Xi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,a=Je(t.silentFallbackWarn)||Xi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=Je(t.fallbackRoot)?t.fallbackRoot:!0,s=!!t.formatFallbackMessages,l=We(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=vt(t.postTranslation)?t.postTranslation:void 0,f=Re(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=Je(t.sync)?t.sync:!0;let b=t.messages;if(We(t.sharedMessages)){const A=t.sharedMessages;b=Object.keys(A).reduce((w,D)=>{const T=w[D]||(w[D]={});return zt(T,A[D]),w},b||{})}const{__i18n:y,__root:m,__injectWithOption:d}=t,_=t.datetimeFormats,g=t.numberFormats,E=t.flatJson;return{locale:e,fallbackLocale:n,messages:b,flatJson:E,datetimeFormats:_,numberFormats:g,missing:i,missingWarn:r,fallbackWarn:a,fallbackRoot:o,fallbackFormat:s,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:y,__root:m,__injectWithOption:d}}function wu(t={},e){{const n=Rf(YR(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(a){n.locale.value=a},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(a){n.fallbackLocale.value=a},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(a){},get missing(){return n.getMissingHandler()},set missing(a){n.setMissingHandler(a)},get silentTranslationWarn(){return Je(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(a){n.missingWarn=Je(a)?!a:a},get silentFallbackWarn(){return Je(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(a){n.fallbackWarn=Je(a)?!a:a},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(a){n.fallbackFormat=a},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(a){n.setPostTranslationHandler(a)},get sync(){return n.inheritLocale},set sync(a){n.inheritLocale=a},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(a){n.warnHtmlMessage=a!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(a){n.escapeParameter=a},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(a){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...a){const[o,s,l]=a,c={};let u=null,f=null;if(!Re(o))throw Ft(Lt.INVALID_ARGUMENT);const h=o;return Re(s)?c.locale=s:mt(s)?u=s:We(s)&&(f=s),mt(l)?u=l:We(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},rt(...a){return Reflect.apply(n.rt,n,[...a])},tc(...a){const[o,s,l]=a,c={plural:1};let u=null,f=null;if(!Re(o))throw Ft(Lt.INVALID_ARGUMENT);const h=o;return Re(s)?c.locale=s:Rt(s)?c.plural=s:mt(s)?u=s:We(s)&&(f=s),Re(l)?c.locale=l:mt(l)?u=l:We(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},te(a,o){return n.te(a,o)},tm(a){return n.tm(a)},getLocaleMessage(a){return n.getLocaleMessage(a)},setLocaleMessage(a,o){n.setLocaleMessage(a,o)},mergeLocaleMessage(a,o){n.mergeLocaleMessage(a,o)},d(...a){return Reflect.apply(n.d,n,[...a])},getDateTimeFormat(a){return n.getDateTimeFormat(a)},setDateTimeFormat(a,o){n.setDateTimeFormat(a,o)},mergeDateTimeFormat(a,o){n.mergeDateTimeFormat(a,o)},n(...a){return Reflect.apply(n.n,n,[...a])},getNumberFormat(a){return n.getNumberFormat(a)},setNumberFormat(a,o){n.setNumberFormat(a,o)},mergeNumberFormat(a,o){n.mergeNumberFormat(a,o)},getChoiceIndex(a,o){return-1}};return r.__extender=i,r}}const Lf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function $R({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===gn?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},{})}function d1(t){return gn}const jR=Aa({name:"i18n-t",props:zt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Rt(t)||!isNaN(t)}},Lf),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Pf({useScope:t.scope,__useComponent:!0});return()=>{const a=Object.keys(n).filter(f=>f!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Re(t.plural)?+t.plural:t.plural);const s=$R(e,a),l=r[Mu](t.keypath,s,o),c=zt({},i),u=Re(t.tag)||lt(t.tag)?t.tag:d1();return Ca(u,c,l)}}}),vm=jR;function qR(t){return mt(t)&&!Re(t[0])}function h1(t,e,n,i){const{slots:r,attrs:a}=e;return()=>{const o={part:!0};let s={};t.locale&&(o.locale=t.locale),Re(t.format)?o.key=t.format:lt(t.format)&&(Re(t.format.key)&&(o.key=t.format.key),s=Object.keys(t.format).reduce((h,p)=>n.includes(p)?zt({},h,{[p]:t.format[p]}):h,{}));const l=i(t.value,o,s);let c=[o.key];mt(l)?c=l.map((h,p)=>{const b=r[h.type],y=b?b({[h.type]:h.value,index:p,parts:l}):[h.value];return qR(y)&&(y[0].key=`${h.type}-${p}`),y}):Re(l)&&(c=[l]);const u=zt({},a),f=Re(t.tag)||lt(t.tag)?t.tag:d1();return Ca(f,u,c)}}const KR=Aa({name:"i18n-n",props:zt({value:{type:Number,required:!0},format:{type:[String,Object]}},Lf),setup(t,e){const n=t.i18n||Pf({useScope:"parent",__useComponent:!0});return h1(t,e,a1,(...i)=>n[Tu](...i))}}),xm=KR,ZR=Aa({name:"i18n-d",props:zt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Lf),setup(t,e){const n=t.i18n||Pf({useScope:"parent",__useComponent:!0});return h1(t,e,r1,(...i)=>n[Su](...i))}}),ym=ZR;function JR(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function QR(t){const e=o=>{const{instance:s,modifiers:l,value:c}=o;if(!s||!s.$)throw Ft(Lt.UNEXPECTED_ERROR);const u=JR(t,s.$),f=Em(c);return[Reflect.apply(u.t,u,[...bm(f)]),u]};return{created:(o,s)=>{const[l,c]=e(s);_u&&t.global===c&&(o.__i18nWatcher=si(c.locale,()=>{s.instance&&s.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{_u&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:s})=>{if(o.__composer){const l=o.__composer,c=Em(s);o.textContent=Reflect.apply(l.t,l,[...bm(c)])}},getSSRProps:o=>{const[s]=e(o);return{textContent:s}}}}function Em(t){if(Re(t))return{path:t};if(We(t)){if(!("path"in t))throw Ft(Lt.REQUIRED_VALUE,"path");return t}else throw Ft(Lt.INVALID_VALUE)}function bm(t){const{path:e,locale:n,args:i,choice:r,plural:a}=t,o={},s=i||{};return Re(n)&&(o.locale=n),Rt(r)&&(o.plural=r),Rt(a)&&(o.plural=a),[e,s,o]}function eL(t,e,...n){const i=We(n[0])?n[0]:{},r=!!i.useI18nComponentName;(Je(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":vm.name,"I18nT"].forEach(o=>t.component(o,vm)),[xm.name,"I18nN"].forEach(o=>t.component(o,xm)),[ym.name,"I18nD"].forEach(o=>t.component(o,ym))),t.directive("t",QR(e))}function tL(t,e,n){return{beforeCreate(){const i=fa();if(!i)throw Ft(Lt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const a=r.i18n;if(r.__i18n&&(a.__i18n=r.__i18n),a.__root=e,this===this.$root)this.$i18n=Mm(t,a);else{a.__injectWithOption=!0,a.__extender=n.__vueI18nExtend,this.$i18n=wu(a);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Mm(t,r);else{this.$i18n=wu({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&f1(e,r,r),this.$t=(...a)=>this.$i18n.t(...a),this.$rt=(...a)=>this.$i18n.rt(...a),this.$tc=(...a)=>this.$i18n.tc(...a),this.$te=(a,o)=>this.$i18n.te(a,o),this.$d=(...a)=>this.$i18n.d(...a),this.$n=(...a)=>this.$i18n.n(...a),this.$tm=a=>this.$i18n.tm(a),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=fa();if(!i)throw Ft(Lt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Mm(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[l1](e.pluralizationRules||t.pluralizationRules);const n=Tl(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const nL=$i("global-vue-i18n");function iL(t={},e){const n=__VUE_I18N_LEGACY_API__&&Je(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=Je(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,a=new Map,[o,s]=rL(t,n),l=$i("");function c(h){return a.get(h)||null}function u(h,p){a.set(h,p)}function f(h){a.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(p,...b){if(p.__VUE_I18N_SYMBOL__=l,p.provide(p.__VUE_I18N_SYMBOL__,h),We(b[0])){const d=b[0];h.__composerExtend=d.__composerExtend,h.__vueI18nExtend=d.__vueI18nExtend}let y=null;!n&&i&&(y=hL(p,h.global)),__VUE_I18N_FULL_INSTALL__&&eL(p,h,...b),__VUE_I18N_LEGACY_API__&&n&&p.mixin(tL(s,s.__composer,h));const m=p.unmount;p.unmount=()=>{y&&y(),h.dispose(),m()}},get global(){return s},dispose(){o.stop()},__instances:a,__getInstance:c,__setInstance:u,__deleteInstance:f};return h}}function Pf(t={}){const e=fa();if(e==null)throw Ft(Lt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ft(Lt.NOT_INSTALLED);const n=aL(e),i=oL(n),r=u1(e),a=sL(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Ft(Lt.NOT_AVAILABLE_IN_LEGACY_MODE);return fL(e,a,i,t)}if(a==="global")return f1(i,t,r),i;if(a==="parent"){let l=lL(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let s=o.__getInstance(e);if(s==null){const l=zt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),s=Rf(l),o.__composerExtend&&(s[Au]=o.__composerExtend(s)),uL(o,e,s),o.__setInstance(e,s)}return s}function rL(t,e,n){const i=O1();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>wu(t)):i.run(()=>Rf(t));if(r==null)throw Ft(Lt.UNEXPECTED_ERROR);return[i,r]}}function aL(t){{const e=En(t.isCE?nL:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ft(t.isCE?Lt.NOT_INSTALLED_WITH_PROVIDE:Lt.UNEXPECTED_ERROR);return e}}function sL(t,e){return Ml(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function oL(t){return t.mode==="composition"?t.global:t.global.__composer}function lL(t,e,n=!1){let i=null;const r=e.root;let a=cL(e,n);for(;a!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(a);else if(__VUE_I18N_LEGACY_API__){const s=o.__getInstance(a);s!=null&&(i=s.__composer,n&&i&&!i[c1]&&(i=null))}if(i!=null||r===a)break;a=a.parent}return i}function cL(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function uL(t,e,n){ol(()=>{},e),Gu(()=>{const i=n;t.__deleteInstance(e);const r=i[Au];r&&(r(),delete i[Au])},e)}function fL(t,e,n,i={}){const r=e==="local",a=$m(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Ft(Lt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=Je(i.inheritLocale)?i.inheritLocale:!Re(i.locale),s=Cn(!r||o?n.locale.value:Re(i.locale)?i.locale:Ea),l=Cn(!r||o?n.fallbackLocale.value:Re(i.fallbackLocale)||mt(i.fallbackLocale)||We(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:s.value),c=Cn(Tl(s.value,i)),u=Cn(We(i.datetimeFormats)?i.datetimeFormats:{[s.value]:{}}),f=Cn(We(i.numberFormats)?i.numberFormats:{[s.value]:{}}),h=r?n.missingWarn:Je(i.missingWarn)||Xi(i.missingWarn)?i.missingWarn:!0,p=r?n.fallbackWarn:Je(i.fallbackWarn)||Xi(i.fallbackWarn)?i.fallbackWarn:!0,b=r?n.fallbackRoot:Je(i.fallbackRoot)?i.fallbackRoot:!0,y=!!i.fallbackFormat,m=vt(i.missing)?i.missing:null,d=vt(i.postTranslation)?i.postTranslation:null,_=r?n.warnHtmlMessage:Je(i.warnHtmlMessage)?i.warnHtmlMessage:!0,g=!!i.escapeParameter,E=r?n.modifiers:We(i.modifiers)?i.modifiers:{},A=i.pluralRules||r&&n.pluralRules;function C(){return[s.value,l.value,c.value,u.value,f.value]}const w=st({get:()=>a.value?a.value.locale.value:s.value,set:x=>{a.value&&(a.value.locale.value=x),s.value=x}}),D=st({get:()=>a.value?a.value.fallbackLocale.value:l.value,set:x=>{a.value&&(a.value.fallbackLocale.value=x),l.value=x}}),T=st(()=>a.value?a.value.messages.value:c.value),L=st(()=>u.value),z=st(()=>f.value);function F(){return a.value?a.value.getPostTranslationHandler():d}function G(x){a.value&&a.value.setPostTranslationHandler(x)}function O(){return a.value?a.value.getMissingHandler():m}function W(x){a.value&&a.value.setMissingHandler(x)}function q(x){return C(),x()}function $(...x){return a.value?q(()=>Reflect.apply(a.value.t,null,[...x])):q(()=>"")}function ie(...x){return a.value?Reflect.apply(a.value.rt,null,[...x]):""}function ee(...x){return a.value?q(()=>Reflect.apply(a.value.d,null,[...x])):q(()=>"")}function le(...x){return a.value?q(()=>Reflect.apply(a.value.n,null,[...x])):q(()=>"")}function B(x){return a.value?a.value.tm(x):{}}function Z(x,P){return a.value?a.value.te(x,P):!1}function pe(x){return a.value?a.value.getLocaleMessage(x):{}}function ve(x,P){a.value&&(a.value.setLocaleMessage(x,P),c.value[x]=P)}function Me(x,P){a.value&&a.value.mergeLocaleMessage(x,P)}function Ae(x){return a.value?a.value.getDateTimeFormat(x):{}}function Y(x,P){a.value&&(a.value.setDateTimeFormat(x,P),u.value[x]=P)}function oe(x,P){a.value&&a.value.mergeDateTimeFormat(x,P)}function re(x){return a.value?a.value.getNumberFormat(x):{}}function ge(x,P){a.value&&(a.value.setNumberFormat(x,P),f.value[x]=P)}function ye(x,P){a.value&&a.value.mergeNumberFormat(x,P)}const S={get id(){return a.value?a.value.id:-1},locale:w,fallbackLocale:D,messages:T,datetimeFormats:L,numberFormats:z,get inheritLocale(){return a.value?a.value.inheritLocale:o},set inheritLocale(x){a.value&&(a.value.inheritLocale=x)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(c.value)},get modifiers(){return a.value?a.value.modifiers:E},get pluralRules(){return a.value?a.value.pluralRules:A},get isGlobal(){return a.value?a.value.isGlobal:!1},get missingWarn(){return a.value?a.value.missingWarn:h},set missingWarn(x){a.value&&(a.value.missingWarn=x)},get fallbackWarn(){return a.value?a.value.fallbackWarn:p},set fallbackWarn(x){a.value&&(a.value.missingWarn=x)},get fallbackRoot(){return a.value?a.value.fallbackRoot:b},set fallbackRoot(x){a.value&&(a.value.fallbackRoot=x)},get fallbackFormat(){return a.value?a.value.fallbackFormat:y},set fallbackFormat(x){a.value&&(a.value.fallbackFormat=x)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:_},set warnHtmlMessage(x){a.value&&(a.value.warnHtmlMessage=x)},get escapeParameter(){return a.value?a.value.escapeParameter:g},set escapeParameter(x){a.value&&(a.value.escapeParameter=x)},t:$,getPostTranslationHandler:F,setPostTranslationHandler:G,getMissingHandler:O,setMissingHandler:W,rt:ie,d:ee,n:le,tm:B,te:Z,getLocaleMessage:pe,setLocaleMessage:ve,mergeLocaleMessage:Me,getDateTimeFormat:Ae,setDateTimeFormat:Y,mergeDateTimeFormat:oe,getNumberFormat:re,setNumberFormat:ge,mergeNumberFormat:ye};function M(x){x.locale.value=s.value,x.fallbackLocale.value=l.value,Object.keys(c.value).forEach(P=>{x.mergeLocaleMessage(P,c.value[P])}),Object.keys(u.value).forEach(P=>{x.mergeDateTimeFormat(P,u.value[P])}),Object.keys(f.value).forEach(P=>{x.mergeNumberFormat(P,f.value[P])}),x.escapeParameter=g,x.fallbackFormat=y,x.fallbackRoot=b,x.fallbackWarn=p,x.missingWarn=h,x.warnHtmlMessage=_}return ug(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Ft(Lt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const x=a.value=t.proxy.$i18n.__composer;e==="global"?(s.value=x.locale.value,l.value=x.fallbackLocale.value,c.value=x.messages.value,u.value=x.datetimeFormats.value,f.value=x.numberFormats.value):r&&M(x)}),S}const dL=["locale","fallbackLocale","availableLocales"],Sm=["t","rt","d","n","tm","te"];function hL(t,e){const n=Object.create(null);return dL.forEach(r=>{const a=Object.getOwnPropertyDescriptor(e,r);if(!a)throw Ft(Lt.UNEXPECTED_ERROR);const o=Bt(a.value)?{get(){return a.value.value},set(s){a.value.value=s}}:{get(){return a.get&&a.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Sm.forEach(r=>{const a=Object.getOwnPropertyDescriptor(e,r);if(!a||!a.value)throw Ft(Lt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,a)}),()=>{delete t.config.globalProperties.$i18n,Sm.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}VR();__INTLIFY_JIT_COMPILATION__?nm(FR):nm(UR);LR(fR);PR($_);if(__INTLIFY_PROD_DEVTOOLS__){const t=ni();t.__INTLIFY__=!0,yR(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const pL={toggle:"Eng"},mL={ym:"Yamashita Manato",passage:"I'm Manato Yamashita. studying computer science at the Department of Informatics, at Tokyo City University. My hobbies are create digital contents(ex: illustration, animation, web and so on...) and reading. my favorite writer is Sayaka Murata.This site is for my portfolio named MANAPURAZA.COM from Manato(my name) + Tamaplaza(the station near my living) I love all of creative activities! and banana.",name:"Name","name-co":"Manato Yamashita",sex:"Sex / Gneder","sex-co":"Man",birth:"Birthday","birth-co":"2002/04/17",country:"Country","country-co":"Japan",live:"Live-in","live-co":"Kanagawa | Tokyo | Kumamoto",study:"studying","study-co":"Tokyo City University, Department of Informatics / System Engineering",research:"Research","research-co":"Information Security",like:"Like","like-co":"Banana"},gL={15:"Entered TATEISHI Junior High School",18:"Entered HONJO High School",21:"Entered Tokyo City University",22:"Entered Edith Cowan University",23:"Live in Saginuma, Kawasaki","02":"Born in Kumamoto","02-de":"2002, Kumamoto / Japan","03":"Moved to Tokyo","03-de":"2003~, Tokyo / Japan","15-de":"2015 ~ 2018, Tokyo / Japan","18-de":"2018 ~ 2021, Tokyo / Japan","21-de":"2021 ~, Tokyo / Japan","21-2":"Live in Miyazakidai, Kawasaki","21-2-de":"2021 ~, Kawasaki / Japan","22-de":"2022 ~ 2023, Perth, WA / Australia","23-de":"2023 ~, Kawasaki / Japan","23-2":"Started to research about Information Security at TCU Seki lab.","23-2-de":"2023 ~, Yokohama / Japan"},_L={w1:"A portfolio graphics and illustrations.",w2:"A git repositorys storing codes.",w3:"A web portfolio website show all of creative.",w4:"A game, mathamatical logical guessing.",w5:"A blog about my experiment study abroad in Australia.",w6:"A event website for one-year anniversary of KD, whichi is my friends community.",w7:"A web app creating passage from words templates by connecting sentences.",w8:"A Android app suggestion activity from weather forecast.",w9:"A Twitter bot of DC-chan, which is original character of my circle.",w10:"A test website for blog constracted by Jamstack(Nuxt3 + microCMS).",w11:"A website for TCU-ACC, a union of clubs in TCU.",w12:"A YouTube channel for me",w13:"A TouTube channel for my circle"},vL={404:{title:"404",notfound:"Not Found",message:"The page you are looking for does not exist."},navbar:pL,about:mL,his:gL,works:_L},xL={toggle:"日本語"},yL={ym:"山下 真和都（ヤマシタマナト）",passage:"こんにちは。「山下真和都（ヤマシタマナト）」と言います。東京都市大学のメディア情報学部の情報システム学科でコンピュータサイエンスを学んでいます。趣味はデジタルコンテンツの制作（イラスト、アニメーション、ウェブなど）と読書です。お気に入りの作家は村田沙耶香です！このサイトは、私の名前の「マナト」と、私の住んでいる場所の近くの駅「たまプラーザ」から名付けたポートフォリオサイト「MANAPURAZA.COM」です。クリエイティブな活動が大好きです！そしてバナナも",name:"名前","name-co":"山下マナト",sex:"性別","sex-co":"男",birth:"誕生日","birth-co":"2002/04/17",country:"国籍","country-co":"日本国",live:"居住地","live-co":"神奈川県 | 東京都 | 熊本県",study:"専攻","study-co":"東京都市大学 メディア情報学部 情報システム学科",research:"研究","research-co":"情報セキュリティ",like:"好きなモノ","like-co":"バナナ"},EL={15:"葛飾区立立石中学校に入学",18:"東京都立本所高等学校に入学",21:"東京都市大学に入学",22:"豪Edith Cowan Universityに留学",23:"神奈川県川崎市の鷺沼に住む","02":"熊本県で生まれる","02-de":"2002年、熊本 / 日本","03":"東京都に引っ越す","03-de":"2003年~、東京 / 日本","15-de":"2015年 〜 2018年、東京 / 日本","18-de":"2018年 〜 2021年、東京 / 日本","21-de":"2021年以降、東京 / 日本","21-2":"神奈川県川崎市の宮崎台に住む","21-2-de":"2021年以降、川崎 / 日本","22-de":"2022年 〜 2023年、パース、WA / オーストラリア","23-de":"2023年以降、川崎 / 日本","23-2":"東京都市大学関研究室で情報セキュリティについて研究を始める","23-2-de":"2023年以降、横浜 / 日本"},bL={w1:"グラフィックスとイラストのポートフォリオ",w2:"コードを保存するGitリポジトリ",w3:"クリエイティブ全般を表示するWebポートフォリオウェブサイト",w4:"数学的な論理推論を用いたゲーム",w5:"オーストラリアでの留学に関するブログ",w6:"友人コミュニティKDの一周年記念イベントウェブサイト",w7:"文章テンプレートをつなげてパッセージを作成するWebアプリ",w8:"天気予報からアクティビティを提案するAndroidアプリ",w9:"私のサークルのオリジナルキャラクターDCちゃんのTwitter bot",w10:"Jamstack（Nuxt3 + microCMS）で構築されたブログのテストウェブサイト",w11:"TCU内のクラブ連合TCU-ACCのウェブサイト",w12:"私のためのYouTubeチャンネル",w13:"私のサークル(DC)のYouTubeチャンネル"},ML={404:{title:"404",notfound:"ページが見つかりません",message:"URLが間違っているか、ページが削除された可能性があります。あるいはリンク切れとか。"},navbar:xL,about:yL,his:EL,works:bL},p1=iL({locale:"en",fallbackLocale:"en",messages:{en:vL,ja:ML}});oC.add(uC);const Al=qu(dy),If=qu(Oy),m1=qu(Cw);Al.component("fa",yC);Al.use(Ju);If.use(Ju);m1.use(Ju);Al.use(p1);If.use(p1);Al.mount("#app");If.mount("#navbar");m1.mount("#back");export{Ra as _,cv as a,at as b,wa as c,ig as d,Wc as e,xt as f,Mr as o,ng as p,Wu as r,Ao as t};
