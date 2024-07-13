(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Lu(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const dt={},ra=[],Dn=()=>{},S1=()=>!1,T1=/^on[^a-z]/,Jo=t=>T1.test(t),Pu=t=>t.startsWith("onUpdate:"),wt=Object.assign,Iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A1=Object.prototype.hasOwnProperty,it=(t,e)=>A1.call(t,e),Ge=Array.isArray,aa=t=>Qo(t)==="[object Map]",Am=t=>Qo(t)==="[object Set]",je=t=>typeof t=="function",Ct=t=>typeof t=="string",Nu=t=>typeof t=="symbol",_t=t=>t!==null&&typeof t=="object",wm=t=>_t(t)&&je(t.then)&&je(t.catch),Cm=Object.prototype.toString,Qo=t=>Cm.call(t),w1=t=>Qo(t).slice(8,-1),Rm=t=>Qo(t)==="[object Object]",Du=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wo=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},C1=/-(\w)/g,Wn=el(t=>t.replace(C1,(e,n)=>n?n.toUpperCase():"")),R1=/\B([A-Z])/g,Sa=el(t=>t.replace(R1,"-$1").toLowerCase()),tl=el(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dl=el(t=>t?`on${tl(t)}`:""),ls=(t,e)=>!Object.is(t,e),Ol=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Uo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},L1=t=>{const e=parseFloat(t);return isNaN(e)?t:e},P1=t=>{const e=Ct(t)?Number(t):NaN;return isNaN(e)?t:e};let Hf;const Ic=()=>Hf||(Hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nl(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ct(i)?O1(i):nl(i);if(r)for(const a in r)e[a]=r[a]}return e}else{if(Ct(t))return t;if(_t(t))return t}}const I1=/;(?![^(]*\))/g,N1=/:([^]+)/,D1=/\/\*[^]*?\*\//g;function O1(t){const e={};return t.replace(D1,"").split(I1).forEach(n=>{if(n){const i=n.split(N1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function il(t){let e="";if(Ct(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=il(t[n]);i&&(e+=i+" ")}else if(_t(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const U1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F1=Lu(U1);function Lm(t){return!!t||t===""}const Co=t=>Ct(t)?t:t==null?"":Ge(t)||_t(t)&&(t.toString===Cm||!je(t.toString))?JSON.stringify(t,Pm,2):String(t),Pm=(t,e)=>e&&e.__v_isRef?Pm(t,e.value):aa(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Am(e)?{[`Set(${e.size})`]:[...e.values()]}:_t(e)&&!Ge(e)&&!Rm(e)?String(e):e;let An;class Im{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=An,!e&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=An;try{return An=this,e()}finally{An=n}}}on(){An=this}off(){An=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function k1(t){return new Im(t)}function B1(t,e=An){e&&e.active&&e.effects.push(t)}function z1(){return An}const Ou=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nm=t=>(t.w&zi)>0,Dm=t=>(t.n&zi)>0,H1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zi},G1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Nm(r)&&!Dm(r)?r.delete(t):e[n++]=r,r.w&=~zi,r.n&=~zi}e.length=n}},Nc=new WeakMap;let Ya=0,zi=1;const Dc=30;let Cn;const vr=Symbol(""),Oc=Symbol("");class Uu{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,B1(this,i)}run(){if(!this.active)return this.fn();let e=Cn,n=Oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Cn,Cn=this,Oi=!0,zi=1<<++Ya,Ya<=Dc?H1(this):Gf(this),this.fn()}finally{Ya<=Dc&&G1(this),zi=1<<--Ya,Cn=this.parent,Oi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Cn===this?this.deferStop=!0:this.active&&(Gf(this),this.onStop&&this.onStop(),this.active=!1)}}function Gf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Oi=!0;const Om=[];function Ta(){Om.push(Oi),Oi=!1}function Aa(){const t=Om.pop();Oi=t===void 0?!0:t}function sn(t,e,n){if(Oi&&Cn){let i=Nc.get(t);i||Nc.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ou()),Um(r)}}function Um(t,e){let n=!1;Ya<=Dc?Dm(t)||(t.n|=zi,n=!Nm(t)):n=!t.has(Cn),n&&(t.add(Cn),Cn.deps.push(t))}function li(t,e,n,i,r,a){const o=Nc.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&Ge(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":Ge(t)?Du(n)&&s.push(o.get("length")):(s.push(o.get(vr)),aa(t)&&s.push(o.get(Oc)));break;case"delete":Ge(t)||(s.push(o.get(vr)),aa(t)&&s.push(o.get(Oc)));break;case"set":aa(t)&&s.push(o.get(vr));break}if(s.length===1)s[0]&&Uc(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Uc(Ou(l))}}function Uc(t,e){const n=Ge(t)?t:[...t];for(const i of n)i.computed&&Vf(i);for(const i of n)i.computed||Vf(i)}function Vf(t,e){(t!==Cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const V1=Lu("__proto__,__v_isRef,__isVue"),Fm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nu)),W1=Fu(),X1=Fu(!1,!0),Y1=Fu(!0),Wf=$1();function $1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=rt(this);for(let a=0,o=this.length;a<o;a++)sn(i,"get",a+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(rt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ta();const i=rt(this)[e].apply(this,n);return Aa(),i}}),t}function j1(t){const e=rt(this);return sn(e,"has",t),e.hasOwnProperty(t)}function Fu(t=!1,e=!1){return function(i,r,a){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&a===(t?e?u0:Gm:e?Hm:zm).get(i))return i;const o=Ge(i);if(!t){if(o&&it(Wf,r))return Reflect.get(Wf,r,a);if(r==="hasOwnProperty")return j1}const s=Reflect.get(i,r,a);return(Nu(r)?Fm.has(r):V1(r))||(t||sn(i,"get",r),e)?s:Bt(s)?o&&Du(r)?s:s.value:_t(s)?t?Vm(s):ws(s):s}}const q1=km(),K1=km(!0);function km(t=!1){return function(n,i,r,a){let o=n[i];if(fa(o)&&Bt(o)&&!Bt(r))return!1;if(!t&&(!Fo(r)&&!fa(r)&&(o=rt(o),r=rt(r)),!Ge(n)&&Bt(o)&&!Bt(r)))return o.value=r,!0;const s=Ge(n)&&Du(i)?Number(i)<n.length:it(n,i),l=Reflect.set(n,i,r,a);return n===rt(a)&&(s?ls(r,o)&&li(n,"set",i,r):li(n,"add",i,r)),l}}function Z1(t,e){const n=it(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&li(t,"delete",e,void 0),i}function J1(t,e){const n=Reflect.has(t,e);return(!Nu(e)||!Fm.has(e))&&sn(t,"has",e),n}function Q1(t){return sn(t,"iterate",Ge(t)?"length":vr),Reflect.ownKeys(t)}const Bm={get:W1,set:q1,deleteProperty:Z1,has:J1,ownKeys:Q1},e0={get:Y1,set(t,e){return!0},deleteProperty(t,e){return!0}},t0=wt({},Bm,{get:X1,set:K1}),ku=t=>t,rl=t=>Reflect.getPrototypeOf(t);function Fs(t,e,n=!1,i=!1){t=t.__v_raw;const r=rt(t),a=rt(e);n||(e!==a&&sn(r,"get",e),sn(r,"get",a));const{has:o}=rl(r),s=i?ku:n?Hu:cs;if(o.call(r,e))return s(t.get(e));if(o.call(r,a))return s(t.get(a));t!==r&&t.get(e)}function ks(t,e=!1){const n=this.__v_raw,i=rt(n),r=rt(t);return e||(t!==r&&sn(i,"has",t),sn(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Bs(t,e=!1){return t=t.__v_raw,!e&&sn(rt(t),"iterate",vr),Reflect.get(t,"size",t)}function Xf(t){t=rt(t);const e=rt(this);return rl(e).has.call(e,t)||(e.add(t),li(e,"add",t,t)),this}function Yf(t,e){e=rt(e);const n=rt(this),{has:i,get:r}=rl(n);let a=i.call(n,t);a||(t=rt(t),a=i.call(n,t));const o=r.call(n,t);return n.set(t,e),a?ls(e,o)&&li(n,"set",t,e):li(n,"add",t,e),this}function $f(t){const e=rt(this),{has:n,get:i}=rl(e);let r=n.call(e,t);r||(t=rt(t),r=n.call(e,t)),i&&i.call(e,t);const a=e.delete(t);return r&&li(e,"delete",t,void 0),a}function jf(){const t=rt(this),e=t.size!==0,n=t.clear();return e&&li(t,"clear",void 0,void 0),n}function zs(t,e){return function(i,r){const a=this,o=a.__v_raw,s=rt(o),l=e?ku:t?Hu:cs;return!t&&sn(s,"iterate",vr),o.forEach((c,u)=>i.call(r,l(c),l(u),a))}}function Hs(t,e,n){return function(...i){const r=this.__v_raw,a=rt(r),o=aa(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?ku:e?Hu:cs;return!e&&sn(a,"iterate",l?Oc:vr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:s?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function mi(t){return function(...e){return t==="delete"?!1:this}}function n0(){const t={get(a){return Fs(this,a)},get size(){return Bs(this)},has:ks,add:Xf,set:Yf,delete:$f,clear:jf,forEach:zs(!1,!1)},e={get(a){return Fs(this,a,!1,!0)},get size(){return Bs(this)},has:ks,add:Xf,set:Yf,delete:$f,clear:jf,forEach:zs(!1,!0)},n={get(a){return Fs(this,a,!0)},get size(){return Bs(this,!0)},has(a){return ks.call(this,a,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:zs(!0,!1)},i={get(a){return Fs(this,a,!0,!0)},get size(){return Bs(this,!0)},has(a){return ks.call(this,a,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=Hs(a,!1,!1),n[a]=Hs(a,!0,!1),e[a]=Hs(a,!1,!0),i[a]=Hs(a,!0,!0)}),[t,n,e,i]}const[i0,r0,a0,s0]=n0();function Bu(t,e){const n=e?t?s0:a0:t?r0:i0;return(i,r,a)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(it(n,r)&&r in i?n:i,r,a)}const o0={get:Bu(!1,!1)},l0={get:Bu(!1,!0)},c0={get:Bu(!0,!1)},zm=new WeakMap,Hm=new WeakMap,Gm=new WeakMap,u0=new WeakMap;function f0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d0(t){return t.__v_skip||!Object.isExtensible(t)?0:f0(w1(t))}function ws(t){return fa(t)?t:zu(t,!1,Bm,o0,zm)}function h0(t){return zu(t,!1,t0,l0,Hm)}function Vm(t){return zu(t,!0,e0,c0,Gm)}function zu(t,e,n,i,r){if(!_t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=r.get(t);if(a)return a;const o=d0(t);if(o===0)return t;const s=new Proxy(t,o===2?i:n);return r.set(t,s),s}function sa(t){return fa(t)?sa(t.__v_raw):!!(t&&t.__v_isReactive)}function fa(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function Wm(t){return sa(t)||fa(t)}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function Xm(t){return Uo(t,"__v_skip",!0),t}const cs=t=>_t(t)?ws(t):t,Hu=t=>_t(t)?Vm(t):t;function Ym(t){Oi&&Cn&&(t=rt(t),Um(t.dep||(t.dep=Ou())))}function $m(t,e){t=rt(t);const n=t.dep;n&&Uc(n)}function Bt(t){return!!(t&&t.__v_isRef===!0)}function Rn(t){return qm(t,!1)}function jm(t){return qm(t,!0)}function qm(t,e){return Bt(t)?t:new p0(t,e)}class p0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:rt(e),this._value=n?e:cs(e)}get value(){return Ym(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||fa(e);e=n?e:rt(e),ls(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cs(e),$m(this))}}function Ka(t){return Bt(t)?t.value:t}const m0={get:(t,e,n)=>Ka(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Km(t){return sa(t)?t:new Proxy(t,m0)}class g0{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Uu(e,()=>{this._dirty||(this._dirty=!0,$m(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=rt(this);return Ym(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _0(t,e,n=!1){let i,r;const a=je(t);return a?(i=t,r=Dn):(i=t.get,r=t.set),new g0(i,r,a||!r,n)}function Ui(t,e,n,i){let r;try{r=i?t(...i):t()}catch(a){al(a,e,n)}return r}function En(t,e,n,i){if(je(t)){const a=Ui(t,e,n,i);return a&&wm(a)&&a.catch(o=>{al(o,e,n)}),a}const r=[];for(let a=0;a<t.length;a++)r.push(En(t[a],e,n,i));return r}function al(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=n;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){Ui(l,null,10,[t,o,s]);return}}v0(t,n,r,i)}function v0(t,e,n,i=!0){console.error(t)}let us=!1,Fc=!1;const Wt=[];let Gn=0;const oa=[];let Qn=null,or=0;const Zm=Promise.resolve();let Gu=null;function Jm(t){const e=Gu||Zm;return t?e.then(this?t.bind(this):t):e}function x0(t){let e=Gn+1,n=Wt.length;for(;e<n;){const i=e+n>>>1;fs(Wt[i])<t?e=i+1:n=i}return e}function Vu(t){(!Wt.length||!Wt.includes(t,us&&t.allowRecurse?Gn+1:Gn))&&(t.id==null?Wt.push(t):Wt.splice(x0(t.id),0,t),Qm())}function Qm(){!us&&!Fc&&(Fc=!0,Gu=Zm.then(tg))}function y0(t){const e=Wt.indexOf(t);e>Gn&&Wt.splice(e,1)}function E0(t){Ge(t)?oa.push(...t):(!Qn||!Qn.includes(t,t.allowRecurse?or+1:or))&&oa.push(t),Qm()}function qf(t,e=us?Gn+1:0){for(;e<Wt.length;e++){const n=Wt[e];n&&n.pre&&(Wt.splice(e,1),e--,n())}}function eg(t){if(oa.length){const e=[...new Set(oa)];if(oa.length=0,Qn){Qn.push(...e);return}for(Qn=e,Qn.sort((n,i)=>fs(n)-fs(i)),or=0;or<Qn.length;or++)Qn[or]();Qn=null,or=0}}const fs=t=>t.id==null?1/0:t.id,b0=(t,e)=>{const n=fs(t)-fs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tg(t){Fc=!1,us=!0,Wt.sort(b0);const e=Dn;try{for(Gn=0;Gn<Wt.length;Gn++){const n=Wt[Gn];n&&n.active!==!1&&Ui(n,null,14)}}finally{Gn=0,Wt.length=0,eg(),us=!1,Gu=null,(Wt.length||oa.length)&&tg()}}function M0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||dt;let r=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||dt;d&&(r=n.map(p=>Ct(p)?p.trim():p)),f&&(r=n.map(L1))}let s,l=i[s=Dl(e)]||i[s=Dl(Wn(e))];!l&&a&&(l=i[s=Dl(Sa(e))]),l&&En(l,t,6,r);const c=i[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,En(c,t,6,r)}}function ng(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const a=t.emits;let o={},s=!1;if(!je(t)){const l=c=>{const u=ng(c,e,!0);u&&(s=!0,wt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(_t(t)&&i.set(t,null),null):(Ge(a)?a.forEach(l=>o[l]=null):wt(o,a),_t(t)&&i.set(t,o),o)}function sl(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(t,e[0].toLowerCase()+e.slice(1))||it(t,Sa(e))||it(t,e))}let dn=null,ol=null;function ko(t){const e=dn;return dn=t,ol=t&&t.type.__scopeId||null,e}function ig(t){ol=t}function rg(){ol=null}function ii(t,e=dn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&od(-1);const a=ko(e);let o;try{o=t(...r)}finally{ko(a),i._d&&od(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ul(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:E,inheritAttrs:x}=t;let m,h;const _=ko(t);try{if(n.shapeFlag&4){const y=r||i;m=Bn(u.call(y,y,f,a,p,d,E)),h=l}else{const y=e;m=Bn(y.length>1?y(a,{attrs:l,slots:s,emit:c}):y(a,null)),h=e.props?l:S0(l)}}catch(y){Ja.length=0,al(y,t,1),m=xt(oi)}let g=m;if(h&&x!==!1){const y=Object.keys(h),{shapeFlag:A}=g;y.length&&A&7&&(o&&y.some(Pu)&&(h=T0(h,o)),g=Hi(g,h))}return n.dirs&&(g=Hi(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),m=g,ko(_),m}const S0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},T0=(t,e)=>{const n={};for(const i in t)(!Pu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function A0(t,e,n){const{props:i,children:r,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Kf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!sl(c,d))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===o?!1:i?o?Kf(i,o,c):!0:!!o;return!1}function Kf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const a=i[r];if(e[a]!==t[a]&&!sl(n,a))return!0}return!1}function w0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const C0=t=>t.__isSuspense;function R0(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):E0(t)}const Gs={};function si(t,e,n){return ag(t,e,n)}function ag(t,e,{immediate:n,deep:i,flush:r,onTrack:a,onTrigger:o}=dt){var s;const l=z1()===((s=Ut)==null?void 0:s.scope)?Ut:null;let c,u=!1,f=!1;if(Bt(t)?(c=()=>t.value,u=Fo(t)):sa(t)?(c=()=>t,i=!0):Ge(t)?(f=!0,u=t.some(y=>sa(y)||Fo(y)),c=()=>t.map(y=>{if(Bt(y))return y.value;if(sa(y))return hr(y);if(je(y))return Ui(y,l,2)})):je(t)?e?c=()=>Ui(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),En(t,l,3,[p])}:c=Dn,e&&i){const y=c;c=()=>hr(y())}let d,p=y=>{d=_.onStop=()=>{Ui(y,l,4)}},E;if(hs)if(p=Dn,e?n&&En(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const y=Sv();E=y.__watcherHandles||(y.__watcherHandles=[])}else return Dn;let x=f?new Array(t.length).fill(Gs):Gs;const m=()=>{if(_.active)if(e){const y=_.run();(i||u||(f?y.some((A,C)=>ls(A,x[C])):ls(y,x)))&&(d&&d(),En(e,l,3,[y,x===Gs?void 0:f&&x[0]===Gs?[]:x,p]),x=y)}else _.run()};m.allowRecurse=!!e;let h;r==="sync"?h=m:r==="post"?h=()=>tn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),h=()=>Vu(m));const _=new Uu(c,h);e?n?m():x=_.run():r==="post"?tn(_.run.bind(_),l&&l.suspense):_.run();const g=()=>{_.stop(),l&&l.scope&&Iu(l.scope.effects,_)};return E&&E.push(g),g}function L0(t,e,n){const i=this.proxy,r=Ct(t)?t.includes(".")?sg(i,t):()=>i[t]:t.bind(i,i);let a;je(e)?a=e:(a=e.handler,n=e);const o=Ut;ha(this);const s=ag(r,a.bind(i),n);return o?ha(o):xr(),s}function sg(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function hr(t,e){if(!_t(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Bt(t))hr(t.value,e);else if(Ge(t))for(let n=0;n<t.length;n++)hr(t[n],e);else if(Am(t)||aa(t))t.forEach(n=>{hr(n,e)});else if(Rm(t))for(const n in t)hr(t[n],e);return t}function P0(t,e){const n=dn;if(n===null)return t;const i=dl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[o,s,l,c=dt]=e[a];o&&(je(o)&&(o={mounted:o,updated:o}),o.deep&&hr(s),r.push({dir:o,instance:i,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ji(t,e,n,i){const r=t.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){const s=r[o];a&&(s.oldValue=a[o].value);let l=s.dir[i];l&&(Ta(),En(l,n,8,[t.el,s,t,e]),Aa())}}function I0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ul(()=>{t.isMounted=!0}),dg(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],og={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},N0={name:"BaseTransition",props:og,setup(t,{slots:e}){const n=da(),i=I0();let r;return()=>{const a=e.default&&cg(e.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const x of a)if(x.type!==oi){o=x;break}}const s=rt(t),{mode:l}=s;if(i.isLeaving)return Fl(o);const c=Zf(o);if(!c)return Fl(o);const u=kc(c,s,i,n);Bc(c,u);const f=n.subTree,d=f&&Zf(f);let p=!1;const{getTransitionKey:E}=c.type;if(E){const x=E();r===void 0?r=x:x!==r&&(r=x,p=!0)}if(d&&d.type!==oi&&(!lr(c,d)||p)){const x=kc(d,s,i,n);if(Bc(d,x),l==="out-in")return i.isLeaving=!0,x.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Fl(o);l==="in-out"&&c.type!==oi&&(x.delayLeave=(m,h,_)=>{const g=lg(i,d);g[String(d.key)]=d,m._leaveCb=()=>{h(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},D0=N0;function lg(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function kc(t,e,n,i){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:E,onBeforeAppear:x,onAppear:m,onAfterAppear:h,onAppearCancelled:_}=e,g=String(t.key),y=lg(n,t),A=(D,T)=>{D&&En(D,i,9,T)},C=(D,T)=>{const L=T[1];A(D,T),Ge(D)?D.every(z=>z.length<=1)&&L():D.length<=1&&L()},w={mode:a,persisted:o,beforeEnter(D){let T=s;if(!n.isMounted)if(r)T=x||s;else return;D._leaveCb&&D._leaveCb(!0);const L=y[g];L&&lr(t,L)&&L.el._leaveCb&&L.el._leaveCb(),A(T,[D])},enter(D){let T=l,L=c,z=u;if(!n.isMounted)if(r)T=m||l,L=h||c,z=_||u;else return;let U=!1;const V=D._enterCb=O=>{U||(U=!0,O?A(z,[D]):A(L,[D]),w.delayedLeave&&w.delayedLeave(),D._enterCb=void 0)};T?C(T,[D,V]):V()},leave(D,T){const L=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return T();A(f,[D]);let z=!1;const U=D._leaveCb=V=>{z||(z=!0,T(),V?A(E,[D]):A(p,[D]),D._leaveCb=void 0,y[L]===t&&delete y[L])};y[L]=t,d?C(d,[D,U]):U()},clone(D){return kc(D,e,n,i)}};return w}function Fl(t){if(ll(t))return t=Hi(t),t.children=null,t}function Zf(t){return ll(t)?t.children?t.children[0]:void 0:t}function Bc(t,e){t.shapeFlag&6&&t.component?Bc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cg(t,e=!1,n){let i=[],r=0;for(let a=0;a<t.length;a++){let o=t[a];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===_n?(o.patchFlag&128&&r++,i=i.concat(cg(o.children,e,s))):(e||o.type!==oi)&&i.push(s!=null?Hi(o,{key:s}):o)}if(r>1)for(let a=0;a<i.length;a++)i[a].patchFlag=-2;return i}function wa(t,e){return je(t)?(()=>wt({name:t.name},e,{setup:t}))():t}const Ro=t=>!!t.type.__asyncLoader,ll=t=>t.type.__isKeepAlive;function O0(t,e){ug(t,"a",e)}function U0(t,e){ug(t,"da",e)}function ug(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(cl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ll(r.parent.vnode)&&F0(i,e,n,r),r=r.parent}}function F0(t,e,n,i){const r=cl(e,t,i,!0);Wu(()=>{Iu(i[e],r)},n)}function cl(t,e,n=Ut,i=!1){if(n){const r=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ta(),ha(n);const s=En(e,n,t,o);return xr(),Aa(),s});return i?r.unshift(a):r.push(a),a}}const hi=t=>(e,n=Ut)=>(!hs||t==="sp")&&cl(t,(...i)=>e(...i),n),fg=hi("bm"),ul=hi("m"),k0=hi("bu"),B0=hi("u"),dg=hi("bum"),Wu=hi("um"),z0=hi("sp"),H0=hi("rtg"),G0=hi("rtc");function V0(t,e=Ut){cl("ec",t,e)}const Xu="components";function Yu(t,e){return pg(Xu,t,!0,e)||t}const hg=Symbol.for("v-ndc");function W0(t){return Ct(t)?pg(Xu,t,!1)||t:t||hg}function pg(t,e,n=!0,i=!1){const r=dn||Ut;if(r){const a=r.type;if(t===Xu){const s=Ev(a,!1);if(s&&(s===e||s===Wn(e)||s===tl(Wn(e))))return a}const o=Jf(r[t]||a[t],e)||Jf(r.appContext[t],e);return!o&&i?a:o}}function Jf(t,e){return t&&(t[e]||t[Wn(e)]||t[tl(Wn(e))])}const zc=t=>t?Tg(t)?dl(t)||t.proxy:zc(t.parent):null,Za=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zc(t.parent),$root:t=>zc(t.root),$emit:t=>t.emit,$options:t=>$u(t),$forceUpdate:t=>t.f||(t.f=()=>Vu(t.update)),$nextTick:t=>t.n||(t.n=Jm.bind(t.proxy)),$watch:t=>L0.bind(t)}),kl=(t,e)=>t!==dt&&!t.__isScriptSetup&&it(t,e),X0={get({_:t},e){const{ctx:n,setupState:i,data:r,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return a[e]}else{if(kl(i,e))return o[e]=1,i[e];if(r!==dt&&it(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&it(c,e))return o[e]=3,a[e];if(n!==dt&&it(n,e))return o[e]=4,n[e];Hc&&(o[e]=0)}}const u=Za[e];let f,d;if(u)return e==="$attrs"&&sn(t,"get",e),u(t);if((f=s.__cssModules)&&(f=f[e]))return f;if(n!==dt&&it(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,it(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:a}=t;return kl(r,e)?(r[e]=n,!0):i!==dt&&it(i,e)?(i[e]=n,!0):it(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:a}},o){let s;return!!n[o]||t!==dt&&it(t,o)||kl(e,o)||(s=a[0])&&it(s,o)||it(i,o)||it(Za,o)||it(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:it(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qf(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hc=!0;function Y0(t){const e=$u(t),n=t.proxy,i=t.ctx;Hc=!1,e.beforeCreate&&ed(e.beforeCreate,t,"bc");const{data:r,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:E,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:_,destroyed:g,unmounted:y,render:A,renderTracked:C,renderTriggered:w,errorCaptured:D,serverPrefetch:T,expose:L,inheritAttrs:z,components:U,directives:V,filters:O}=e;if(c&&$0(c,i,null),o)for(const Y in o){const ie=o[Y];je(ie)&&(i[Y]=ie.bind(n))}if(r){const Y=r.call(n,n);_t(Y)&&(t.data=ws(Y))}if(Hc=!0,a)for(const Y in a){const ie=a[Y],ee=je(ie)?ie.bind(n,n):je(ie.get)?ie.get.bind(n,n):Dn,ce=!je(ie)&&je(ie.set)?ie.set.bind(n):Dn,B=st({get:ee,set:ce});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>B.value,set:Z=>B.value=Z})}if(s)for(const Y in s)mg(s[Y],i,n,Y);if(l){const Y=je(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(ie=>{Lo(ie,Y[ie])})}u&&ed(u,t,"c");function j(Y,ie){Ge(ie)?ie.forEach(ee=>Y(ee.bind(n))):ie&&Y(ie.bind(n))}if(j(fg,f),j(ul,d),j(k0,p),j(B0,E),j(O0,x),j(U0,m),j(V0,D),j(G0,C),j(H0,w),j(dg,_),j(Wu,y),j(z0,T),Ge(L))if(L.length){const Y=t.exposed||(t.exposed={});L.forEach(ie=>{Object.defineProperty(Y,ie,{get:()=>n[ie],set:ee=>n[ie]=ee})})}else t.exposed||(t.exposed={});A&&t.render===Dn&&(t.render=A),z!=null&&(t.inheritAttrs=z),U&&(t.components=U),V&&(t.directives=V)}function $0(t,e,n=Dn){Ge(t)&&(t=Gc(t));for(const i in t){const r=t[i];let a;_t(r)?"default"in r?a=bn(r.from||i,r.default,!0):a=bn(r.from||i):a=bn(r),Bt(a)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function ed(t,e,n){En(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function mg(t,e,n,i){const r=i.includes(".")?sg(n,i):()=>n[i];if(Ct(t)){const a=e[t];je(a)&&si(r,a)}else if(je(t))si(r,t.bind(n));else if(_t(t))if(Ge(t))t.forEach(a=>mg(a,e,n,i));else{const a=je(t.handler)?t.handler.bind(n):e[t.handler];je(a)&&si(r,a,t)}}function $u(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Bo(l,c,o,!0)),Bo(l,e,o)),_t(e)&&a.set(e,l),l}function Bo(t,e,n,i=!1){const{mixins:r,extends:a}=e;a&&Bo(t,a,n,!0),r&&r.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const s=j0[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const j0={data:td,props:nd,emits:nd,methods:$a,computed:$a,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:$a,directives:$a,watch:K0,provide:td,inject:q0};function td(t,e){return e?t?function(){return wt(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function q0(t,e){return $a(Gc(t),Gc(e))}function Gc(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function $a(t,e){return t?wt(Object.create(null),t,e):e}function nd(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:wt(Object.create(null),Qf(t),Qf(e??{})):e}function K0(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const i in e)n[i]=jt(t[i],e[i]);return n}function gg(){return{app:null,config:{isNativeTag:S1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Z0=0;function J0(t,e){return function(i,r=null){je(i)||(i=wt({},i)),r!=null&&!_t(r)&&(r=null);const a=gg(),o=new Set;let s=!1;const l=a.app={_uid:Z0++,_component:i,_props:r,_container:null,_context:a,_instance:null,version:Tv,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(l,...u)):je(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,f){if(!s){const d=xt(i,r);return d.appContext=a,u&&e?e(d,c):t(d,c,f),s=!0,l._container=c,c.__vue_app__=l,dl(d.component)||d.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){zo=l;try{return c()}finally{zo=null}}};return l}}let zo=null;function Lo(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function bn(t,e,n=!1){const i=Ut||dn;if(i||zo){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:zo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function Q0(t,e,n,i=!1){const r={},a={};Uo(a,fl,1),t.propsDefaults=Object.create(null),_g(t,e,r,a);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:h0(r):t.type.props?t.props=r:t.props=a,t.attrs=a}function ev(t,e,n,i){const{props:r,attrs:a,vnode:{patchFlag:o}}=t,s=rt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(sl(t.emitsOptions,d))continue;const p=e[d];if(l)if(it(a,d))p!==a[d]&&(a[d]=p,c=!0);else{const E=Wn(d);r[E]=Vc(l,s,E,p,t,!1)}else p!==a[d]&&(a[d]=p,c=!0)}}}else{_g(t,e,r,a)&&(c=!0);let u;for(const f in s)(!e||!it(e,f)&&((u=Sa(f))===f||!it(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Vc(l,s,f,void 0,t,!0)):delete r[f]);if(a!==s)for(const f in a)(!e||!it(e,f))&&(delete a[f],c=!0)}c&&li(t,"set","$attrs")}function _g(t,e,n,i){const[r,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(wo(l))continue;const c=e[l];let u;r&&it(r,u=Wn(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:sl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(a){const l=rt(n),c=s||dt;for(let u=0;u<a.length;u++){const f=a[u];n[f]=Vc(r,l,f,c[f],t,!it(c,f))}}return o}function Vc(t,e,n,i,r,a){const o=t[n];if(o!=null){const s=it(o,"default");if(s&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(ha(r),i=c[n]=l.call(null,e),xr())}else i=l}o[0]&&(a&&!s?i=!1:o[1]&&(i===""||i===Sa(n))&&(i=!0))}return i}function vg(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const a=t.props,o={},s=[];let l=!1;if(!je(t)){const u=f=>{l=!0;const[d,p]=vg(f,e,!0);wt(o,d),p&&s.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return _t(t)&&i.set(t,ra),ra;if(Ge(a))for(let u=0;u<a.length;u++){const f=Wn(a[u]);id(f)&&(o[f]=dt)}else if(a)for(const u in a){const f=Wn(u);if(id(f)){const d=a[u],p=o[f]=Ge(d)||je(d)?{type:d}:wt({},d);if(p){const E=sd(Boolean,p.type),x=sd(String,p.type);p[0]=E>-1,p[1]=x<0||E<x,(E>-1||it(p,"default"))&&s.push(f)}}}const c=[o,s];return _t(t)&&i.set(t,c),c}function id(t){return t[0]!=="$"}function rd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ad(t,e){return rd(t)===rd(e)}function sd(t,e){return Ge(e)?e.findIndex(n=>ad(n,t)):je(e)&&ad(e,t)?0:-1}const xg=t=>t[0]==="_"||t==="$stable",ju=t=>Ge(t)?t.map(Bn):[Bn(t)],tv=(t,e,n)=>{if(e._n)return e;const i=ii((...r)=>ju(e(...r)),n);return i._c=!1,i},yg=(t,e,n)=>{const i=t._ctx;for(const r in t){if(xg(r))continue;const a=t[r];if(je(a))e[r]=tv(r,a,i);else if(a!=null){const o=ju(a);e[r]=()=>o}}},Eg=(t,e)=>{const n=ju(e);t.slots.default=()=>n},nv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=rt(e),Uo(e,"_",n)):yg(e,t.slots={})}else t.slots={},e&&Eg(t,e);Uo(t.slots,fl,1)},iv=(t,e,n)=>{const{vnode:i,slots:r}=t;let a=!0,o=dt;if(i.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(wt(r,e),!n&&s===1&&delete r._):(a=!e.$stable,yg(e,r)),o=e}else e&&(Eg(t,e),o={default:1});if(a)for(const s in r)!xg(s)&&!(s in o)&&delete r[s]};function Wc(t,e,n,i,r=!1){if(Ge(t)){t.forEach((d,p)=>Wc(d,e&&(Ge(e)?e[p]:e),n,i,r));return}if(Ro(i)&&!r)return;const a=i.shapeFlag&4?dl(i.component)||i.component.proxy:i.el,o=r?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===dt?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,it(f,c)&&(f[c]=null)):Bt(c)&&(c.value=null)),je(l))Ui(l,s,12,[o,u]);else{const d=Ct(l),p=Bt(l);if(d||p){const E=()=>{if(t.f){const x=d?it(f,l)?f[l]:u[l]:l.value;r?Ge(x)&&Iu(x,a):Ge(x)?x.includes(a)||x.push(a):d?(u[l]=[a],it(f,l)&&(f[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,it(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,tn(E,n)):E()}}}const tn=R0;function rv(t){return av(t)}function av(t,e){const n=Ic();n.__VUE__=!0;const{insert:i,remove:r,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Dn,insertStaticContent:E}=t,x=(S,M,b,P=null,F=null,q=null,J=!1,te=null,fe=!!M.dynamicChildren)=>{if(S===M)return;S&&!lr(S,M)&&(P=oe(S),Z(S,F,q,!0),S=null),M.patchFlag===-2&&(fe=!1,M.dynamicChildren=null);const{type:he,ref:we,shapeFlag:R}=M;switch(he){case Cs:m(S,M,b,P);break;case oi:h(S,M,b,P);break;case Po:S==null&&_(M,b,P,J);break;case _n:U(S,M,b,P,F,q,J,te,fe);break;default:R&1?A(S,M,b,P,F,q,J,te,fe):R&6?V(S,M,b,P,F,q,J,te,fe):(R&64||R&128)&&he.process(S,M,b,P,F,q,J,te,fe,ye)}we!=null&&F&&Wc(we,S&&S.ref,q,M||S,!M)},m=(S,M,b,P)=>{if(S==null)i(M.el=s(M.children),b,P);else{const F=M.el=S.el;M.children!==S.children&&c(F,M.children)}},h=(S,M,b,P)=>{S==null?i(M.el=l(M.children||""),b,P):M.el=S.el},_=(S,M,b,P)=>{[S.el,S.anchor]=E(S.children,M,b,P,S.el,S.anchor)},g=({el:S,anchor:M},b,P)=>{let F;for(;S&&S!==M;)F=d(S),i(S,b,P),S=F;i(M,b,P)},y=({el:S,anchor:M})=>{let b;for(;S&&S!==M;)b=d(S),r(S),S=b;r(M)},A=(S,M,b,P,F,q,J,te,fe)=>{J=J||M.type==="svg",S==null?C(M,b,P,F,q,J,te,fe):T(S,M,F,q,J,te,fe)},C=(S,M,b,P,F,q,J,te)=>{let fe,he;const{type:we,props:R,shapeFlag:v,transition:N,dirs:K}=S;if(fe=S.el=o(S.type,q,R&&R.is,R),v&8?u(fe,S.children):v&16&&D(S.children,fe,null,P,F,q&&we!=="foreignObject",J,te),K&&Ji(S,null,P,"created"),w(fe,S,S.scopeId,J,P),R){for(const le in R)le!=="value"&&!wo(le)&&a(fe,le,null,R[le],q,S.children,P,F,se);"value"in R&&a(fe,"value",null,R.value),(he=R.onVnodeBeforeMount)&&Un(he,P,S)}K&&Ji(S,null,P,"beforeMount");const Q=(!F||F&&!F.pendingBranch)&&N&&!N.persisted;Q&&N.beforeEnter(fe),i(fe,M,b),((he=R&&R.onVnodeMounted)||Q||K)&&tn(()=>{he&&Un(he,P,S),Q&&N.enter(fe),K&&Ji(S,null,P,"mounted")},F)},w=(S,M,b,P,F)=>{if(b&&p(S,b),P)for(let q=0;q<P.length;q++)p(S,P[q]);if(F){let q=F.subTree;if(M===q){const J=F.vnode;w(S,J,J.scopeId,J.slotScopeIds,F.parent)}}},D=(S,M,b,P,F,q,J,te,fe=0)=>{for(let he=fe;he<S.length;he++){const we=S[he]=te?Ri(S[he]):Bn(S[he]);x(null,we,M,b,P,F,q,J,te)}},T=(S,M,b,P,F,q,J)=>{const te=M.el=S.el;let{patchFlag:fe,dynamicChildren:he,dirs:we}=M;fe|=S.patchFlag&16;const R=S.props||dt,v=M.props||dt;let N;b&&Qi(b,!1),(N=v.onVnodeBeforeUpdate)&&Un(N,b,M,S),we&&Ji(M,S,b,"beforeUpdate"),b&&Qi(b,!0);const K=F&&M.type!=="foreignObject";if(he?L(S.dynamicChildren,he,te,b,P,K,q):J||ie(S,M,te,null,b,P,K,q,!1),fe>0){if(fe&16)z(te,M,R,v,b,P,F);else if(fe&2&&R.class!==v.class&&a(te,"class",null,v.class,F),fe&4&&a(te,"style",R.style,v.style,F),fe&8){const Q=M.dynamicProps;for(let le=0;le<Q.length;le++){const Me=Q[le],ge=R[Me],Se=v[Me];(Se!==ge||Me==="value")&&a(te,Me,ge,Se,F,S.children,b,P,se)}}fe&1&&S.children!==M.children&&u(te,M.children)}else!J&&he==null&&z(te,M,R,v,b,P,F);((N=v.onVnodeUpdated)||we)&&tn(()=>{N&&Un(N,b,M,S),we&&Ji(M,S,b,"updated")},P)},L=(S,M,b,P,F,q,J)=>{for(let te=0;te<M.length;te++){const fe=S[te],he=M[te],we=fe.el&&(fe.type===_n||!lr(fe,he)||fe.shapeFlag&70)?f(fe.el):b;x(fe,he,we,null,P,F,q,J,!0)}},z=(S,M,b,P,F,q,J)=>{if(b!==P){if(b!==dt)for(const te in b)!wo(te)&&!(te in P)&&a(S,te,b[te],null,J,M.children,F,q,se);for(const te in P){if(wo(te))continue;const fe=P[te],he=b[te];fe!==he&&te!=="value"&&a(S,te,he,fe,J,M.children,F,q,se)}"value"in P&&a(S,"value",b.value,P.value)}},U=(S,M,b,P,F,q,J,te,fe)=>{const he=M.el=S?S.el:s(""),we=M.anchor=S?S.anchor:s("");let{patchFlag:R,dynamicChildren:v,slotScopeIds:N}=M;N&&(te=te?te.concat(N):N),S==null?(i(he,b,P),i(we,b,P),D(M.children,b,we,F,q,J,te,fe)):R>0&&R&64&&v&&S.dynamicChildren?(L(S.dynamicChildren,v,b,F,q,J,te),(M.key!=null||F&&M===F.subTree)&&bg(S,M,!0)):ie(S,M,b,we,F,q,J,te,fe)},V=(S,M,b,P,F,q,J,te,fe)=>{M.slotScopeIds=te,S==null?M.shapeFlag&512?F.ctx.activate(M,b,P,J,fe):O(M,b,P,F,q,J,fe):X(S,M,fe)},O=(S,M,b,P,F,q,J)=>{const te=S.component=gv(S,P,F);if(ll(S)&&(te.ctx.renderer=ye),_v(te),te.asyncDep){if(F&&F.registerDep(te,j),!S.el){const fe=te.subTree=xt(oi);h(null,fe,M,b)}return}j(te,S,M,b,F,q,J)},X=(S,M,b)=>{const P=M.component=S.component;if(A0(S,M,b))if(P.asyncDep&&!P.asyncResolved){Y(P,M,b);return}else P.next=M,y0(P.update),P.update();else M.el=S.el,P.vnode=M},j=(S,M,b,P,F,q,J)=>{const te=()=>{if(S.isMounted){let{next:we,bu:R,u:v,parent:N,vnode:K}=S,Q=we,le;Qi(S,!1),we?(we.el=K.el,Y(S,we,J)):we=K,R&&Ol(R),(le=we.props&&we.props.onVnodeBeforeUpdate)&&Un(le,N,we,K),Qi(S,!0);const Me=Ul(S),ge=S.subTree;S.subTree=Me,x(ge,Me,f(ge.el),oe(ge),S,F,q),we.el=Me.el,Q===null&&w0(S,Me.el),v&&tn(v,F),(le=we.props&&we.props.onVnodeUpdated)&&tn(()=>Un(le,N,we,K),F)}else{let we;const{el:R,props:v}=M,{bm:N,m:K,parent:Q}=S,le=Ro(M);if(Qi(S,!1),N&&Ol(N),!le&&(we=v&&v.onVnodeBeforeMount)&&Un(we,Q,M),Qi(S,!0),R&&_e){const Me=()=>{S.subTree=Ul(S),_e(R,S.subTree,S,F,null)};le?M.type.__asyncLoader().then(()=>!S.isUnmounted&&Me()):Me()}else{const Me=S.subTree=Ul(S);x(null,Me,b,P,S,F,q),M.el=Me.el}if(K&&tn(K,F),!le&&(we=v&&v.onVnodeMounted)){const Me=M;tn(()=>Un(we,Q,Me),F)}(M.shapeFlag&256||Q&&Ro(Q.vnode)&&Q.vnode.shapeFlag&256)&&S.a&&tn(S.a,F),S.isMounted=!0,M=b=P=null}},fe=S.effect=new Uu(te,()=>Vu(he),S.scope),he=S.update=()=>fe.run();he.id=S.uid,Qi(S,!0),he()},Y=(S,M,b)=>{M.component=S;const P=S.vnode.props;S.vnode=M,S.next=null,ev(S,M.props,P,b),iv(S,M.children,b),Ta(),qf(),Aa()},ie=(S,M,b,P,F,q,J,te,fe=!1)=>{const he=S&&S.children,we=S?S.shapeFlag:0,R=M.children,{patchFlag:v,shapeFlag:N}=M;if(v>0){if(v&128){ce(he,R,b,P,F,q,J,te,fe);return}else if(v&256){ee(he,R,b,P,F,q,J,te,fe);return}}N&8?(we&16&&se(he,F,q),R!==he&&u(b,R)):we&16?N&16?ce(he,R,b,P,F,q,J,te,fe):se(he,F,q,!0):(we&8&&u(b,""),N&16&&D(R,b,P,F,q,J,te,fe))},ee=(S,M,b,P,F,q,J,te,fe)=>{S=S||ra,M=M||ra;const he=S.length,we=M.length,R=Math.min(he,we);let v;for(v=0;v<R;v++){const N=M[v]=fe?Ri(M[v]):Bn(M[v]);x(S[v],N,b,null,F,q,J,te,fe)}he>we?se(S,F,q,!0,!1,R):D(M,b,P,F,q,J,te,fe,R)},ce=(S,M,b,P,F,q,J,te,fe)=>{let he=0;const we=M.length;let R=S.length-1,v=we-1;for(;he<=R&&he<=v;){const N=S[he],K=M[he]=fe?Ri(M[he]):Bn(M[he]);if(lr(N,K))x(N,K,b,null,F,q,J,te,fe);else break;he++}for(;he<=R&&he<=v;){const N=S[R],K=M[v]=fe?Ri(M[v]):Bn(M[v]);if(lr(N,K))x(N,K,b,null,F,q,J,te,fe);else break;R--,v--}if(he>R){if(he<=v){const N=v+1,K=N<we?M[N].el:P;for(;he<=v;)x(null,M[he]=fe?Ri(M[he]):Bn(M[he]),b,K,F,q,J,te,fe),he++}}else if(he>v)for(;he<=R;)Z(S[he],F,q,!0),he++;else{const N=he,K=he,Q=new Map;for(he=K;he<=v;he++){const De=M[he]=fe?Ri(M[he]):Bn(M[he]);De.key!=null&&Q.set(De.key,he)}let le,Me=0;const ge=v-K+1;let Se=!1,k=0;const xe=new Array(ge);for(he=0;he<ge;he++)xe[he]=0;for(he=N;he<=R;he++){const De=S[he];if(Me>=ge){Z(De,F,q,!0);continue}let Re;if(De.key!=null)Re=Q.get(De.key);else for(le=K;le<=v;le++)if(xe[le-K]===0&&lr(De,M[le])){Re=le;break}Re===void 0?Z(De,F,q,!0):(xe[Re-K]=he+1,Re>=k?k=Re:Se=!0,x(De,M[Re],b,null,F,q,J,te,fe),Me++)}const pe=Se?sv(xe):ra;for(le=pe.length-1,he=ge-1;he>=0;he--){const De=K+he,Re=M[De],Fe=De+1<we?M[De+1].el:P;xe[he]===0?x(null,Re,b,Fe,F,q,J,te,fe):Se&&(le<0||he!==pe[le]?B(Re,b,Fe,2):le--)}}},B=(S,M,b,P,F=null)=>{const{el:q,type:J,transition:te,children:fe,shapeFlag:he}=S;if(he&6){B(S.component.subTree,M,b,P);return}if(he&128){S.suspense.move(M,b,P);return}if(he&64){J.move(S,M,b,ye);return}if(J===_n){i(q,M,b);for(let R=0;R<fe.length;R++)B(fe[R],M,b,P);i(S.anchor,M,b);return}if(J===Po){g(S,M,b);return}if(P!==2&&he&1&&te)if(P===0)te.beforeEnter(q),i(q,M,b),tn(()=>te.enter(q),F);else{const{leave:R,delayLeave:v,afterLeave:N}=te,K=()=>i(q,M,b),Q=()=>{R(q,()=>{K(),N&&N()})};v?v(q,K,Q):Q()}else i(q,M,b)},Z=(S,M,b,P=!1,F=!1)=>{const{type:q,props:J,ref:te,children:fe,dynamicChildren:he,shapeFlag:we,patchFlag:R,dirs:v}=S;if(te!=null&&Wc(te,null,b,S,!0),we&256){M.ctx.deactivate(S);return}const N=we&1&&v,K=!Ro(S);let Q;if(K&&(Q=J&&J.onVnodeBeforeUnmount)&&Un(Q,M,S),we&6)G(S.component,b,P);else{if(we&128){S.suspense.unmount(b,P);return}N&&Ji(S,null,M,"beforeUnmount"),we&64?S.type.remove(S,M,b,F,ye,P):he&&(q!==_n||R>0&&R&64)?se(he,M,b,!1,!0):(q===_n&&R&384||!F&&we&16)&&se(fe,M,b),P&&me(S)}(K&&(Q=J&&J.onVnodeUnmounted)||N)&&tn(()=>{Q&&Un(Q,M,S),N&&Ji(S,null,M,"unmounted")},b)},me=S=>{const{type:M,el:b,anchor:P,transition:F}=S;if(M===_n){Ee(b,P);return}if(M===Po){y(S);return}const q=()=>{r(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(S.shapeFlag&1&&F&&!F.persisted){const{leave:J,delayLeave:te}=F,fe=()=>J(b,q);te?te(S.el,q,fe):fe()}else q()},Ee=(S,M)=>{let b;for(;S!==M;)b=d(S),r(S),S=b;r(M)},G=(S,M,b)=>{const{bum:P,scope:F,update:q,subTree:J,um:te}=S;P&&Ol(P),F.stop(),q&&(q.active=!1,Z(J,S,M,b)),te&&tn(te,M),tn(()=>{S.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},se=(S,M,b,P=!1,F=!1,q=0)=>{for(let J=q;J<S.length;J++)Z(S[J],M,b,P,F)},oe=S=>S.shapeFlag&6?oe(S.component.subTree):S.shapeFlag&128?S.suspense.next():d(S.anchor||S.el),de=(S,M,b)=>{S==null?M._vnode&&Z(M._vnode,null,null,!0):x(M._vnode||null,S,M,null,null,null,b),qf(),eg(),M._vnode=S},ye={p:x,um:Z,m:B,r:me,mt:O,mc:D,pc:ie,pbc:L,n:oe,o:t};let Ne,_e;return e&&([Ne,_e]=e(ye)),{render:de,hydrate:Ne,createApp:J0(de,Ne)}}function Qi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bg(t,e,n=!1){const i=t.children,r=e.children;if(Ge(i)&&Ge(r))for(let a=0;a<i.length;a++){const o=i[a];let s=r[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[a]=Ri(r[a]),s.el=o.el),n||bg(o,s)),s.type===Cs&&(s.el=o.el)}}function sv(t){const e=t.slice(),n=[0];let i,r,a,o,s;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[i]=n[a-1]),n[a]=i)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}const ov=t=>t.__isTeleport,_n=Symbol.for("v-fgt"),Cs=Symbol.for("v-txt"),oi=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),Ja=[];let In=null;function Sr(t=!1){Ja.push(In=t?null:[])}function lv(){Ja.pop(),In=Ja[Ja.length-1]||null}let ds=1;function od(t){ds+=t}function Mg(t){return t.dynamicChildren=ds>0?In||ra:null,lv(),ds>0&&In&&In.push(t),t}function Ca(t,e,n,i,r,a){return Mg(at(t,e,n,i,r,a,!0))}function cv(t,e,n,i,r){return Mg(xt(t,e,n,i,r,!0))}function Xc(t){return t?t.__v_isVNode===!0:!1}function lr(t,e){return t.type===e.type&&t.key===e.key}const fl="__vInternal",Sg=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||Bt(t)||je(t)?{i:dn,r:t,k:e,f:!!n}:t:null);function at(t,e=null,n=null,i=0,r=null,a=t===_n?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sg(e),ref:e&&Io(e),scopeId:ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return s?(qu(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),ds>0&&!o&&In&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&In.push(l),l}const xt=uv;function uv(t,e=null,n=null,i=0,r=null,a=!1){if((!t||t===hg)&&(t=oi),Xc(t)){const s=Hi(t,e,!0);return n&&qu(s,n),ds>0&&!a&&In&&(s.shapeFlag&6?In[In.indexOf(t)]=s:In.push(s)),s.patchFlag|=-2,s}if(bv(t)&&(t=t.__vccOpts),e){e=fv(e);let{class:s,style:l}=e;s&&!Ct(s)&&(e.class=il(s)),_t(l)&&(Wm(l)&&!Ge(l)&&(l=wt({},l)),e.style=nl(l))}const o=Ct(t)?1:C0(t)?128:ov(t)?64:_t(t)?4:je(t)?2:0;return at(t,e,n,i,r,o,a,!0)}function fv(t){return t?Wm(t)||fl in t?wt({},t):t:null}function Hi(t,e,n=!1){const{props:i,ref:r,patchFlag:a,children:o}=t,s=e?hv(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Sg(s),ref:e&&e.ref?n&&r?Ge(r)?r.concat(Io(e)):[r,Io(e)]:Io(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_n?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hi(t.ssContent),ssFallback:t.ssFallback&&Hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yc(t=" ",e=0){return xt(Cs,null,t,e)}function dv(t,e){const n=xt(Po,null,t);return n.staticCount=e,n}function Bn(t){return t==null||typeof t=="boolean"?xt(oi):Ge(t)?xt(_n,null,t.slice()):typeof t=="object"?Ri(t):xt(Cs,null,String(t))}function Ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hi(t)}function qu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(fl in e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:dn},n=32):(e=String(e),i&64?(n=16,e=[Yc(e)]):n=8);t.children=e,t.shapeFlag|=n}function hv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=il([e.class,i.class]));else if(r==="style")e.style=nl([e.style,i.style]);else if(Jo(r)){const a=e[r],o=i[r];o&&a!==o&&!(Ge(a)&&a.includes(o))&&(e[r]=a?[].concat(a,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){En(t,e,7,[n,i])}const pv=gg();let mv=0;function gv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||pv,a={uid:mv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vg(i,r),emitsOptions:ng(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=M0.bind(null,a),t.ce&&t.ce(a),a}let Ut=null;const da=()=>Ut||dn;let Ku,Pr,ld="__VUE_INSTANCE_SETTERS__";(Pr=Ic()[ld])||(Pr=Ic()[ld]=[]),Pr.push(t=>Ut=t),Ku=t=>{Pr.length>1?Pr.forEach(e=>e(t)):Pr[0](t)};const ha=t=>{Ku(t),t.scope.on()},xr=()=>{Ut&&Ut.scope.off(),Ku(null)};function Tg(t){return t.vnode.shapeFlag&4}let hs=!1;function _v(t,e=!1){hs=e;const{props:n,children:i}=t.vnode,r=Tg(t);Q0(t,n,r,e),nv(t,i);const a=r?vv(t,e):void 0;return hs=!1,a}function vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xm(new Proxy(t.ctx,X0));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?yv(t):null;ha(t),Ta();const a=Ui(i,t,0,[t.props,r]);if(Aa(),xr(),wm(a)){if(a.then(xr,xr),e)return a.then(o=>{cd(t,o,e)}).catch(o=>{al(o,t,0)});t.asyncDep=a}else cd(t,a,e)}else Ag(t,e)}function cd(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_t(e)&&(t.setupState=Km(e)),Ag(t,n)}let ud;function Ag(t,e,n){const i=t.type;if(!t.render){if(!e&&ud&&!i.render){const r=i.template||$u(t).template;if(r){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=i,c=wt(wt({isCustomElement:a,delimiters:s},o),l);i.render=ud(r,c)}}t.render=i.render||Dn}ha(t),Ta(),Y0(t),Aa(),xr()}function xv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return sn(t,"get","$attrs"),e[n]}}))}function yv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return xv(t)},slots:t.slots,emit:t.emit,expose:e}}function dl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Km(Xm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Za)return Za[n](t)},has(e,n){return n in e||n in Za}}))}function Ev(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function bv(t){return je(t)&&"__vccOpts"in t}const st=(t,e)=>_0(t,e,hs);function Ra(t,e,n){const i=arguments.length;return i===2?_t(e)&&!Ge(e)?Xc(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xc(n)&&(n=[n]),xt(t,e,n))}const Mv=Symbol.for("v-scx"),Sv=()=>bn(Mv),Tv="3.3.4",Av="http://www.w3.org/2000/svg",cr=typeof document<"u"?document:null,fd=cr&&cr.createElement("template"),wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?cr.createElementNS(Av,t):cr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>cr.createTextNode(t),createComment:t=>cr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,a){const o=n?n.previousSibling:e.lastChild;if(r&&(r===a||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{fd.innerHTML=i?`<svg>${t}</svg>`:t;const s=fd.content;if(i){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rv(t,e,n){const i=t.style,r=Ct(n);if(n&&!r){if(e&&!Ct(e))for(const a in e)n[a]==null&&$c(i,a,"");for(const a in n)$c(i,a,n[a])}else{const a=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=a)}}const dd=/\s*!important$/;function $c(t,e,n){if(Ge(n))n.forEach(i=>$c(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Lv(t,e);dd.test(n)?t.setProperty(Sa(i),n.replace(dd,""),"important"):t[i]=n}}const hd=["Webkit","Moz","ms"],Bl={};function Lv(t,e){const n=Bl[e];if(n)return n;let i=Wn(e);if(i!=="filter"&&i in t)return Bl[e]=i;i=tl(i);for(let r=0;r<hd.length;r++){const a=hd[r]+i;if(a in t)return Bl[e]=a}return e}const pd="http://www.w3.org/1999/xlink";function Pv(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(pd,e.slice(6,e.length)):t.setAttributeNS(pd,e,n);else{const a=F1(e);n==null||a&&!Lm(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function Iv(t,e,n,i,r,a,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Nv(t,e,n,i){t.addEventListener(e,n,i)}function Dv(t,e,n,i){t.removeEventListener(e,n,i)}function Ov(t,e,n,i,r=null){const a=t._vei||(t._vei={}),o=a[e];if(i&&o)o.value=i;else{const[s,l]=Uv(e);if(i){const c=a[e]=Bv(i,r);Nv(t,s,c,l)}else o&&(Dv(t,s,o,l),a[e]=void 0)}}const md=/(?:Once|Passive|Capture)$/;function Uv(t){let e;if(md.test(t)){e={};let i;for(;i=t.match(md);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sa(t.slice(2)),e]}let zl=0;const Fv=Promise.resolve(),kv=()=>zl||(Fv.then(()=>zl=0),zl=Date.now());function Bv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;En(zv(i,n.value),e,5,[i])};return n.value=t,n.attached=kv(),n}function zv(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const gd=/^on[a-z]/,Hv=(t,e,n,i,r=!1,a,o,s,l)=>{e==="class"?Cv(t,i,r):e==="style"?Rv(t,n,i):Jo(e)?Pu(e)||Ov(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gv(t,e,i,r))?Iv(t,e,i,a,o,s,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Pv(t,e,i,r))};function Gv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&gd.test(e)&&je(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gd.test(e)&&Ct(n)?!1:e in t}const gi="transition",Fa="animation",hl=(t,{slots:e})=>Ra(D0,Vv(t),e);hl.displayName="Transition";const wg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hl.props=wt({},og,wg);const er=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},_d=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function Vv(t){const e={};for(const U in t)U in wg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=o,appearToClass:u=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,E=Wv(r),x=E&&E[0],m=E&&E[1],{onBeforeEnter:h,onEnter:_,onEnterCancelled:g,onLeave:y,onLeaveCancelled:A,onBeforeAppear:C=h,onAppear:w=_,onAppearCancelled:D=g}=e,T=(U,V,O)=>{tr(U,V?u:s),tr(U,V?c:o),O&&O()},L=(U,V)=>{U._isLeaving=!1,tr(U,f),tr(U,p),tr(U,d),V&&V()},z=U=>(V,O)=>{const X=U?w:_,j=()=>T(V,U,O);er(X,[V,j]),vd(()=>{tr(V,U?l:a),_i(V,U?u:s),_d(X)||xd(V,i,x,j)})};return wt(e,{onBeforeEnter(U){er(h,[U]),_i(U,a),_i(U,o)},onBeforeAppear(U){er(C,[U]),_i(U,l),_i(U,c)},onEnter:z(!1),onAppear:z(!0),onLeave(U,V){U._isLeaving=!0;const O=()=>L(U,V);_i(U,f),$v(),_i(U,d),vd(()=>{U._isLeaving&&(tr(U,f),_i(U,p),_d(y)||xd(U,i,m,O))}),er(y,[U,O])},onEnterCancelled(U){T(U,!1),er(g,[U])},onAppearCancelled(U){T(U,!0),er(D,[U])},onLeaveCancelled(U){L(U),er(A,[U])}})}function Wv(t){if(t==null)return null;if(_t(t))return[Hl(t.enter),Hl(t.leave)];{const e=Hl(t);return[e,e]}}function Hl(t){return P1(t)}function _i(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function tr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function vd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xv=0;function xd(t,e,n,i){const r=t._endId=++Xv,a=()=>{r===t._endId&&i()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=Yv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),a()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},s+1),t.addEventListener(c,d)}function Yv(t,e){const n=window.getComputedStyle(t),i=E=>(n[E]||"").split(", "),r=i(`${gi}Delay`),a=i(`${gi}Duration`),o=yd(r,a),s=i(`${Fa}Delay`),l=i(`${Fa}Duration`),c=yd(s,l);let u=null,f=0,d=0;e===gi?o>0&&(u=gi,f=o,d=a.length):e===Fa?c>0&&(u=Fa,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?gi:Fa:null,d=u?u===gi?a.length:l.length:0);const p=u===gi&&/\b(transform|all)(,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function yd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ed(n)+Ed(t[i])))}function Ed(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function $v(){return document.body.offsetHeight}const jv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ka(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ka(t,!0),i.enter(t)):i.leave(t,()=>{ka(t,!1)}):ka(t,e))},beforeUnmount(t,{value:e}){ka(t,e)}};function ka(t,e){t.style.display=e?t._vod:"none"}const qv=wt({patchProp:Hv},wv);let bd;function Kv(){return bd||(bd=rv(qv))}const Zu=(...t)=>{const e=Kv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Zv(i);if(!r)return;const a=e._component;!je(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zv(t){return Ct(t)?document.querySelector(t):t}const Cg="/assets/manapuraza-logo-162fb913.svg";/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",La=t=>Rg?Symbol(t):"_vr_"+t,Jv=La("rvlm"),Md=La("rvd"),pl=La("r"),Ju=La("rl"),jc=La("rvl"),Zr=typeof window<"u";function Qv(t){return t.__esModule||Rg&&t[Symbol.toStringTag]==="Module"}const ct=Object.assign;function Gl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Array.isArray(r)?r.map(t):t(r)}return n}const Qa=()=>{},ex=/\/$/,tx=t=>t.replace(ex,"");function Vl(t,e,n="/"){let i,r={},a="",o="";const s=e.indexOf("?"),l=e.indexOf("#",s>-1?s:0);return s>-1&&(i=e.slice(0,s),a=e.slice(s+1,l>-1?l:e.length),r=t(a)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=ax(i??e,n),{fullPath:i+(a&&"?")+a+o,path:i,query:r,hash:o}}function nx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ix(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&pa(e.matched[i],n.matched[r])&&Lg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pa(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rx(t[n],e[n]))return!1;return!0}function rx(t,e){return Array.isArray(t)?Td(t,e):Array.isArray(e)?Td(e,t):t===e}function Td(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function ax(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(a-(a===i.length?1:0)).join("/")}var ps;(function(t){t.pop="pop",t.push="push"})(ps||(ps={}));var es;(function(t){t.back="back",t.forward="forward",t.unknown=""})(es||(es={}));function sx(t){if(!t)if(Zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tx(t)}const ox=/^[^#]+#/;function lx(t,e){return t.replace(ox,"#")+e}function cx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ml=()=>({left:window.pageXOffset,top:window.pageYOffset});function ux(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=cx(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ad(t,e){return(history.state?history.state.position-e:-1)+t}const qc=new Map;function fx(t,e){qc.set(t,e)}function dx(t){const e=qc.get(t);return qc.delete(t),e}let hx=()=>location.protocol+"//"+location.host;function Pg(t,e){const{pathname:n,search:i,hash:r}=e,a=t.indexOf("#");if(a>-1){let s=r.includes(t.slice(a))?t.slice(a).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Sd(l,"")}return Sd(n,t)+i+r}function px(t,e,n,i){let r=[],a=[],o=null;const s=({state:d})=>{const p=Pg(t,location),E=n.value,x=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===E){o=null;return}m=x?d.position-x.position:0}else i(p);r.forEach(h=>{h(n.value,E,{delta:m,type:ps.pop,direction:m?m>0?es.forward:es.back:es.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const E=r.indexOf(d);E>-1&&r.splice(E,1)};return a.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ct({},d.state,{scroll:ml()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function wd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ml():null}}function mx(t){const{history:e,location:n}=window,i={value:Pg(t,n)},r={value:e.state};r.value||a(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:hx()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ct({},e.state,wd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});a(l,u,!0),i.value=l}function s(l,c){const u=ct({},r.value,e.state,{forward:l,scroll:ml()});a(u.current,u,!0);const f=ct({},wd(i.value,l,null),{position:u.position+1},c);a(l,f,!1),i.value=l}return{location:i,state:r,push:s,replace:o}}function gx(t){t=sx(t);const e=mx(t),n=px(t,e.state,e.location,e.replace);function i(a,o=!0){o||n.pauseListeners(),history.go(a)}const r=ct({location:"",base:t,go:i,createHref:lx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function _x(t){return typeof t=="string"||t&&typeof t=="object"}function Ig(t){return typeof t=="string"||typeof t=="symbol"}const vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ng=La("nf");var Cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cd||(Cd={}));function ma(t,e){return ct(new Error,{type:t,[Ng]:!0},e)}function xi(t,e){return t instanceof Error&&Ng in t&&(e==null||!!(t.type&e))}const Rd="[^/]+?",vx={sensitive:!1,strict:!1,start:!0,end:!0},xx=/[.+*?^${}()[\]/\\]/g;function yx(t,e){const n=ct({},vx,e),i=[];let r=n.start?"^":"";const a=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(xx,"\\$&"),p+=40;else if(d.type===1){const{value:E,repeatable:x,optional:m,regexp:h}=d;a.push({name:E,repeatable:x,optional:m});const _=h||Rd;if(_!==Rd){p+=10;try{new RegExp(`(${_})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${E}" (${_}): `+y.message)}}let g=x?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(g=m&&c.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,p+=20,m&&(p+=-8),x&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function s(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",E=a[d-1];f[E.name]=p&&E.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:E,repeatable:x,optional:m}=p,h=E in c?c[E]:"";if(Array.isArray(h)&&!x)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(h)?h.join("/"):h;if(!_)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=_}}return u}return{re:o,score:i,keys:a,parse:s,stringify:l}}function Ex(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bx(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const a=Ex(i[n],r[n]);if(a)return a;n++}return r.length-i.length}const Mx={type:0,value:""},Sx=/[a-zA-Z0-9_]/;function Tx(t){if(!t)return[[]];if(t==="/")return[[Mx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let a;function o(){a&&r.push(a),a=[]}let s=0,l,c="",u="";function f(){c&&(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;s<t.length;){if(l=t[s++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:Sx.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Ax(t,e,n){const i=yx(Tx(t.path),n),r=ct(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function wx(t,e){const n=[],i=new Map;e=Pd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function a(u,f,d){const p=!d,E=Rx(u);E.aliasOf=d&&d.record;const x=Pd(e,u),m=[E];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of g)m.push(ct({},E,{components:d?d.record.components:E.components,path:y,aliasOf:d?d.record:E}))}let h,_;for(const g of m){const{path:y}=g;if(f&&y[0]!=="/"){const A=f.record.path,C=A[A.length-1]==="/"?"":"/";g.path=f.record.path+(y&&C+y)}if(h=Ax(g,f,x),d?d.alias.push(h):(_=_||h,_!==h&&_.alias.push(h),p&&u.name&&!Ld(h)&&o(u.name)),"children"in E){const A=E.children;for(let C=0;C<A.length;C++)a(A[C],h,d&&d.children[C])}d=d||h,l(h)}return _?()=>{o(_)}:Qa}function o(u){if(Ig(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function s(){return n}function l(u){let f=0;for(;f<n.length&&bx(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Dg(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ld(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},E,x;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw ma(1,{location:u});x=d.record.name,p=ct(Cx(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params),E=d.stringify(p)}else if("path"in u)E=u.path,d=n.find(_=>_.re.test(E)),d&&(p=d.parse(E),x=d.record.name);else{if(d=f.name?i.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw ma(1,{location:u,currentLocation:f});x=d.record.name,p=ct({},f.params,u.params),E=d.stringify(p)}const m=[];let h=d;for(;h;)m.unshift(h.record),h=h.parent;return{name:x,path:E,params:p,matched:m,meta:Px(m)}}return t.forEach(u=>a(u)),{addRoute:a,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:r}}function Cx(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Rx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Lx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Lx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Px(t){return t.reduce((e,n)=>ct(e,n.meta),{})}function Pd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Dg(t,e){return e.children.some(n=>n===t||Dg(t,n))}const Og=/#/g,Ix=/&/g,Nx=/\//g,Dx=/=/g,Ox=/\?/g,Ug=/\+/g,Ux=/%5B/g,Fx=/%5D/g,Fg=/%5E/g,kx=/%60/g,kg=/%7B/g,Bx=/%7C/g,Bg=/%7D/g,zx=/%20/g;function Qu(t){return encodeURI(""+t).replace(Bx,"|").replace(Ux,"[").replace(Fx,"]")}function Hx(t){return Qu(t).replace(kg,"{").replace(Bg,"}").replace(Fg,"^")}function Kc(t){return Qu(t).replace(Ug,"%2B").replace(zx,"+").replace(Og,"%23").replace(Ix,"%26").replace(kx,"`").replace(kg,"{").replace(Bg,"}").replace(Fg,"^")}function Gx(t){return Kc(t).replace(Dx,"%3D")}function Vx(t){return Qu(t).replace(Og,"%23").replace(Ox,"%3F")}function Wx(t){return t==null?"":Vx(t).replace(Nx,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Xx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const a=i[r].replace(Ug," "),o=a.indexOf("="),s=Ho(o<0?a:a.slice(0,o)),l=o<0?null:Ho(a.slice(o+1));if(s in e){let c=e[s];Array.isArray(c)||(c=e[s]=[c]),c.push(l)}else e[s]=l}return e}function Id(t){let e="";for(let n in t){const i=t[n];if(n=Gx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(a=>a&&Kc(a)):[i&&Kc(i)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function Yx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Ba(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Li(t,e,n,i,r){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(ma(4,{from:n,to:e})):f instanceof Error?s(f):_x(f)?s(ma(2,{from:e,to:f})):(a&&i.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>s(f))})}function Wl(t,e,n,i){const r=[];for(const a of t)for(const o in a.components){let s=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if($x(s)){const c=(s.__vccOpts||s)[e];c&&r.push(Li(c,n,i,a,o))}else{let l=s();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const u=Qv(c)?c.default:c;a.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Li(d,n,i,a,o)()}))}}return r}function $x(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nd(t){const e=bn(pl),n=bn(Ju),i=st(()=>e.resolve(Ka(t.to))),r=st(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(pa.bind(null,u));if(d>-1)return d;const p=Dd(l[c-2]);return c>1&&Dd(u)===p&&f[f.length-1].path!==p?f.findIndex(pa.bind(null,l[c-2])):d}),a=st(()=>r.value>-1&&Kx(n.params,i.value.params)),o=st(()=>r.value>-1&&r.value===n.matched.length-1&&Lg(n.params,i.value.params));function s(l={}){return qx(l)?e[Ka(t.replace)?"replace":"push"](Ka(t.to)).catch(Qa):Promise.resolve()}return{route:i,href:st(()=>i.value.href),isActive:a,isExactActive:o,navigate:s}}const jx=wa({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=ws(Nd(t)),{options:i}=bn(pl),r=st(()=>({[Od(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Od(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:Ra("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),zg=jx;function qx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kx(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((a,o)=>a!==r[o]))return!1}return!0}function Dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Od=(t,e,n)=>t??e??n,Zx=wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=bn(jc),r=st(()=>t.route||i.value),a=bn(Md,0),o=st(()=>r.value.matched[a]);Lo(Md,a+1),Lo(Jv,o),Lo(jc,r);const s=Rn();return si(()=>[s.value,o.value,t.name],([l,c,u],[f,d,p])=>{c&&(c.instances[u]=l,d&&d!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),l&&c&&(!d||!pa(c,d)||!f)&&(c.enterCallbacks[u]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],f=t.name;if(!u)return Ud(n.default,{Component:u,route:l});const d=c.props[t.name],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,x=Ra(u,ct({},p,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(c.instances[f]=null)},ref:s}));return Ud(n.default,{Component:x,route:l})||x}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jx=Zx;function Qx(t){const e=wx(t.routes,t),n=t.parseQuery||Xx,i=t.stringifyQuery||Id,r=t.history,a=Ba(),o=Ba(),s=Ba(),l=jm(vi);let c=vi;Zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gl.bind(null,G=>""+G),f=Gl.bind(null,Wx),d=Gl.bind(null,Ho);function p(G,se){let oe,de;return Ig(G)?(oe=e.getRecordMatcher(G),de=se):de=G,e.addRoute(de,oe)}function E(G){const se=e.getRecordMatcher(G);se&&e.removeRoute(se)}function x(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function h(G,se){if(se=ct({},se||l.value),typeof G=="string"){const S=Vl(n,G,se.path),M=e.resolve({path:S.path},se),b=r.createHref(S.fullPath);return ct(S,M,{params:d(M.params),hash:Ho(S.hash),redirectedFrom:void 0,href:b})}let oe;if("path"in G)oe=ct({},G,{path:Vl(n,G.path,se.path).path});else{const S=ct({},G.params);for(const M in S)S[M]==null&&delete S[M];oe=ct({},G,{params:f(G.params)}),se.params=f(se.params)}const de=e.resolve(oe,se),ye=G.hash||"";de.params=u(d(de.params));const Ne=nx(i,ct({},G,{hash:Hx(ye),path:de.path})),_e=r.createHref(Ne);return ct({fullPath:Ne,hash:ye,query:i===Id?Yx(G.query):G.query||{}},de,{redirectedFrom:void 0,href:_e})}function _(G){return typeof G=="string"?Vl(n,G,l.value.path):ct({},G)}function g(G,se){if(c!==G)return ma(8,{from:se,to:G})}function y(G){return w(G)}function A(G){return y(ct(_(G),{replace:!0}))}function C(G){const se=G.matched[G.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let de=typeof oe=="function"?oe(G):oe;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=_(de):{path:de},de.params={}),ct({query:G.query,hash:G.hash,params:G.params},de)}}function w(G,se){const oe=c=h(G),de=l.value,ye=G.state,Ne=G.force,_e=G.replace===!0,S=C(oe);if(S)return w(ct(_(S),{state:ye,force:Ne,replace:_e}),se||oe);const M=oe;M.redirectedFrom=se;let b;return!Ne&&ix(i,de,oe)&&(b=ma(16,{to:M,from:de}),ce(de,de,!0,!1)),(b?Promise.resolve(b):T(M,de)).catch(P=>xi(P)?xi(P,2)?P:ee(P):Y(P,M,de)).then(P=>{if(P){if(xi(P,2))return w(ct(_(P.to),{state:ye,force:Ne,replace:_e}),se||M)}else P=z(M,de,!0,_e,ye);return L(M,de,P),P})}function D(G,se){const oe=g(G,se);return oe?Promise.reject(oe):Promise.resolve()}function T(G,se){let oe;const[de,ye,Ne]=ey(G,se);oe=Wl(de.reverse(),"beforeRouteLeave",G,se);for(const S of de)S.leaveGuards.forEach(M=>{oe.push(Li(M,G,se))});const _e=D.bind(null,G,se);return oe.push(_e),Ir(oe).then(()=>{oe=[];for(const S of a.list())oe.push(Li(S,G,se));return oe.push(_e),Ir(oe)}).then(()=>{oe=Wl(ye,"beforeRouteUpdate",G,se);for(const S of ye)S.updateGuards.forEach(M=>{oe.push(Li(M,G,se))});return oe.push(_e),Ir(oe)}).then(()=>{oe=[];for(const S of G.matched)if(S.beforeEnter&&!se.matched.includes(S))if(Array.isArray(S.beforeEnter))for(const M of S.beforeEnter)oe.push(Li(M,G,se));else oe.push(Li(S.beforeEnter,G,se));return oe.push(_e),Ir(oe)}).then(()=>(G.matched.forEach(S=>S.enterCallbacks={}),oe=Wl(Ne,"beforeRouteEnter",G,se),oe.push(_e),Ir(oe))).then(()=>{oe=[];for(const S of o.list())oe.push(Li(S,G,se));return oe.push(_e),Ir(oe)}).catch(S=>xi(S,8)?S:Promise.reject(S))}function L(G,se,oe){for(const de of s.list())de(G,se,oe)}function z(G,se,oe,de,ye){const Ne=g(G,se);if(Ne)return Ne;const _e=se===vi,S=Zr?history.state:{};oe&&(de||_e?r.replace(G.fullPath,ct({scroll:_e&&S&&S.scroll},ye)):r.push(G.fullPath,ye)),l.value=G,ce(G,se,oe,_e),ee()}let U;function V(){U=r.listen((G,se,oe)=>{const de=h(G),ye=C(de);if(ye){w(ct(ye,{replace:!0}),de).catch(Qa);return}c=de;const Ne=l.value;Zr&&fx(Ad(Ne.fullPath,oe.delta),ml()),T(de,Ne).catch(_e=>xi(_e,12)?_e:xi(_e,2)?(w(_e.to,de).then(S=>{xi(S,20)&&!oe.delta&&oe.type===ps.pop&&r.go(-1,!1)}).catch(Qa),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),Y(_e,de,Ne))).then(_e=>{_e=_e||z(de,Ne,!1),_e&&(oe.delta?r.go(-oe.delta,!1):oe.type===ps.pop&&xi(_e,20)&&r.go(-1,!1)),L(de,Ne,_e)}).catch(Qa)})}let O=Ba(),X=Ba(),j;function Y(G,se,oe){ee(G);const de=X.list();return de.length?de.forEach(ye=>ye(G,se,oe)):console.error(G),Promise.reject(G)}function ie(){return j&&l.value!==vi?Promise.resolve():new Promise((G,se)=>{O.add([G,se])})}function ee(G){return j||(j=!G,V(),O.list().forEach(([se,oe])=>G?oe(G):se()),O.reset()),G}function ce(G,se,oe,de){const{scrollBehavior:ye}=t;if(!Zr||!ye)return Promise.resolve();const Ne=!oe&&dx(Ad(G.fullPath,0))||(de||!oe)&&history.state&&history.state.scroll||null;return Jm().then(()=>ye(G,se,Ne)).then(_e=>_e&&ux(_e)).catch(_e=>Y(_e,G,se))}const B=G=>r.go(G);let Z;const me=new Set;return{currentRoute:l,addRoute:p,removeRoute:E,hasRoute:m,getRoutes:x,resolve:h,options:t,push:y,replace:A,go:B,back:()=>B(-1),forward:()=>B(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:X.add,isReady:ie,install(G){const se=this;G.component("RouterLink",zg),G.component("RouterView",Jx),G.config.globalProperties.$router=se,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Ka(l)}),Zr&&!Z&&l.value===vi&&(Z=!0,y(r.location).catch(ye=>{}));const oe={};for(const ye in vi)oe[ye]=st(()=>l.value[ye]);G.provide(pl,se),G.provide(Ju,ws(oe)),G.provide(jc,l);const de=G.unmount;me.add(G),G.unmount=function(){me.delete(G),me.size<1&&(c=vi,U&&U(),l.value=vi,Z=!1,j=!1),de()}}}}function Ir(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ey(t,e){const n=[],i=[],r=[],a=Math.max(e.matched.length,t.matched.length);for(let o=0;o<a;o++){const s=e.matched[o];s&&(t.matched.find(c=>pa(c,s))?i.push(s):n.push(s));const l=t.matched[o];l&&(e.matched.find(c=>pa(c,l))||r.push(l))}return[n,i,r]}function ty(){return bn(pl)}function ny(){return bn(Ju)}const Pa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},iy={name:"spNav",methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},gl=t=>(ig("data-v-5cbf5720"),t=t(),rg(),t),ry={id:"main"},ay={class:"menu-circle-social"},sy=gl(()=>at("input",{type:"checkbox",href:"#",class:"menu-circle-open",name:"menu-circle-open",id:"menu-open"},null,-1)),oy=gl(()=>at("label",{class:"menu-circle-open-button",for:"menu-open"},[at("svg",{class:"mp icons",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",zoomAndPan:"magnify",viewBox:"0 0 1440 1439.999935",preserveAspectRatio:"xMidYMid meet",version:"1.0"},[at("path",{fill:"#ffffff",d:"M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"}),at("path",{fill:"#dddddd",d:"M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"}),at("path",{fill:"#ffffff",d:"M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 ","fill-opacity":"1","fill-rule":"evenodd"})])],-1)),ly=gl(()=>at("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 35",fill:"#ffffff"},[at("path",{d:"M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z",fill:"#ffffff"})],-1)),cy=gl(()=>at("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"#ffffff"},[at("path",{d:"M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"})],-1));function uy(t,e,n,i,r,a){const o=Yu("router-link");return Sr(),Ca("div",ry,[at("nav",ay,[sy,oy,xt(o,{to:"/about",class:"menu-circle-item"},{default:ii(()=>[ly]),_:1}),xt(o,{to:"/works",class:"menu-circle-item"},{default:ii(()=>[cy]),_:1})])])}const fy=Pa(iy,[["render",uy],["__scopeId","data-v-5cbf5720"]]);const dy={id:"main"},hy={href:"https://manapuraza.com"},py={class:"app glass"},my={__name:"App",setup(t){const e=ny(),n=ty(),i=async()=>{await n.isReady()};si(e,()=>{console.log("current route: ",e.name),e.name==="home"?(document.querySelector(".app").style.top="20vh",document.querySelector(".app").style.opacity="0",document.querySelector(".app").style.pointerEvents="none"):(document.querySelector(".app").style.top="0",document.querySelector(".app").style.opacity="1",document.querySelector(".app").style.pointerEvents="all")}),ul(()=>{i()});const r=st(()=>e.path),a=st(()=>r.value==="/"?"route-home":"route-other"),o=st(()=>r.value==="/"?{opacity:"1",transition:"all .4s ease-in-out"}:{opacity:"0",filter:"blur(2rem)",transition:"all .4s ease-in-out"});return(s,l)=>{const c=Yu("router-view");return Sr(),Ca("div",dy,[at("a",hy,[at("img",{src:Cg,draggable:"false",id:"center-logo",class:il(a.value),style:nl(o.value)},null,6)]),at("div",py,[xt(c,null,{default:ii(({Component:u})=>[xt(hl,{name:"slide",mode:"out-in"},{default:ii(()=>[(Sr(),cv(W0(u)))]),_:2},1024)]),_:1})]),xt(fy,{id:"sp-nav"})])}}},gy=Pa(my,[["__scopeId","data-v-b3d40236"]]),_y="modulepreload",vy=function(t){return"/"+t},Fd={},kd=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=vy(a),a in Fd)return;Fd[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_y,o||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})};const xy={};function yy(t,e){return Sr(),Ca("div")}const Ey=Pa(xy,[["render",yy],["__scopeId","data-v-5f83e376"]]);const by={},My={class:"container"},Sy={class:"error"},Ty={class:"content"},Ay=dv('<br data-v-509ae9ed><button class="goback" data-v-509ae9ed><a href="https://manapuraza.com" data-v-509ae9ed><span class="circle" aria-hidden="true" data-v-509ae9ed><span class="icon arrow" data-v-509ae9ed></span></span><span class="button-text" data-v-509ae9ed>Back to Home</span></a></button>',2);function wy(t,e){return Sr(),Ca("div",null,[at("div",My,[at("div",Sy,[at("div",Ty,[at("h1",null,Co(t.$t("404.title")),1),at("h2",null,Co(t.$t("404.notfound")),1),at("p",null,Co(t.$t("404.message")),1),Ay])])])])}const Cy=Pa(by,[["render",wy],["__scopeId","data-v-509ae9ed"]]),ef=Qx({history:gx("/"),routes:[{path:"/",name:"home",component:Ey},{path:"/about",name:"about",component:()=>kd(()=>import("./AboutView-1b3a4120.js"),["assets/AboutView-1b3a4120.js","assets/AboutView-b5c1899e.css"])},{path:"/works",name:"works",component:()=>kd(()=>import("./WorksView-4134d302.js"),["assets/WorksView-4134d302.js","assets/WorksView-f3960585.css"]),meta:{style:{top:"0"}}},{path:"/:pathMatch(.*)*",name:"not-found",component:Cy}]});const Ry={name:"Navbar",components:{RouterLink:zg},data(){return{currentPath:this.$route.path}},watch:{$route(t,e){this.currentPath=t.path}},methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},Ly=t=>(ig("data-v-3d5f606a"),t=t(),rg(),t),Py={class:"navbar"},Iy={class:"logo"},Ny={src:Cg,alt:"logo"},Dy={class:"default-menu"},Oy={id:"lang-switch"},Uy={class:"toggle-switch"},Fy=Ly(()=>at("label",{class:"toggle-label",for:"toggle"},null,-1));function ky(t,e,n,i,r,a){const o=Yu("RouterLink");return Sr(),Ca("div",Py,[at("div",Iy,[xt(o,{to:"/"},{default:ii(()=>[xt(hl,{name:"slide",mode:"out-in"},{default:ii(()=>[P0(at("img",Ny,null,512),[[jv,r.currentPath!=="/"]])]),_:1})]),_:1})]),at("nav",Dy,[xt(o,{to:"/about",class:"rlink"},{default:ii(()=>[Yc("About")]),_:1}),xt(o,{to:"/works",class:"rlink"},{default:ii(()=>[Yc("Works")]),_:1})]),at("div",Oy,[at("span",null,Co(t.$t("navbar.toggle")),1),at("div",Uy,[at("input",{class:"toggle-input",id:"toggle",type:"checkbox",onClick:e[0]||(e[0]=(...s)=>a.toggleLanguage&&a.toggleLanguage(...s))}),Fy])])])}const By=Pa(Ry,[["render",ky],["__scopeId","data-v-3d5f606a"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="158",Nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zy=0,Bd=1,Hy=2,Hg=1,Gy=2,Jn=3,Gi=0,rn=1,ei=2,Fi=0,la=1,zd=2,Hd=3,Gd=4,Vy=5,ur=100,Wy=101,Xy=102,Vd=103,Wd=104,Yy=200,$y=201,jy=202,qy=203,Zc=204,Jc=205,Ky=206,Zy=207,Jy=208,Qy=209,eE=210,tE=211,nE=212,iE=213,rE=214,aE=0,sE=1,oE=2,Go=3,lE=4,cE=5,uE=6,fE=7,nf=0,dE=1,hE=2,ki=0,pE=1,mE=2,gE=3,_E=4,vE=5,Gg=300,ga=301,_a=302,Qc=303,eu=304,_l=306,tu=1e3,Ln=1001,nu=1002,Jt=1003,Xd=1004,Xl=1005,vn=1006,xE=1007,ms=1008,Bi=1009,yE=1010,EE=1011,rf=1012,Vg=1013,Ii=1014,Ni=1015,gs=1016,Wg=1017,Xg=1018,yr=1020,bE=1021,Pn=1023,ME=1024,SE=1025,Er=1026,va=1027,TE=1028,Yg=1029,AE=1030,$g=1031,jg=1033,Yl=33776,$l=33777,jl=33778,ql=33779,Yd=35840,$d=35841,jd=35842,qd=35843,wE=36196,Kd=37492,Zd=37496,Jd=37808,Qd=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,ah=37815,sh=37816,oh=37817,lh=37818,ch=37819,uh=37820,fh=37821,Kl=36492,dh=36494,hh=36495,CE=36283,ph=36284,mh=36285,gh=36286,qg=3e3,br=3001,RE=3200,LE=3201,Kg=0,PE=1,yn="",kt="srgb",ci="srgb-linear",af="display-p3",vl="display-p3-linear",Vo="linear",ft="srgb",Wo="rec709",Xo="p3",Or=7680,_h=519,IE=512,NE=513,DE=514,OE=515,UE=516,FE=517,kE=518,BE=519,vh=35044,Vs=35048,xh="300 es",iu=1035,ri=2e3,Yo=2001;class Lr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const ts=Math.PI/180,_s=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function sf(t,e){return(t%e+e)%e}function zE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function HE(t,e,n){return t!==e?(n-t)/(e-t):0}function ns(t,e,n){return(1-n)*t+n*e}function GE(t,e,n,i){return ns(t,e,1-Math.exp(-n*i))}function VE(t,e=1){return e-Math.abs(sf(t,e*2)-e)}function WE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function XE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function YE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function $E(t,e){return t+Math.random()*(e-t)}function jE(t){return t*(.5-Math.random())}function qE(t){t!==void 0&&(yh=t);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KE(t){return t*ts}function ZE(t){return t*_s}function ru(t){return(t&t-1)===0&&t!==0}function JE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $o(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function QE(t,e,n,i,r){const a=Math.cos,o=Math.sin,s=a(n/2),l=o(n/2),c=a((e+i)/2),u=o((e+i)/2),f=a((e-i)/2),d=o((e-i)/2),p=a((i-e)/2),E=o((i-e)/2);switch(r){case"XYX":t.set(s*u,l*f,l*d,s*c);break;case"YZY":t.set(l*d,s*u,l*f,s*c);break;case"ZXZ":t.set(l*f,l*d,s*u,s*c);break;case"XZX":t.set(s*u,l*E,l*p,s*c);break;case"YXY":t.set(l*p,s*u,l*E,s*c);break;case"ZYZ":t.set(l*E,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const eb={DEG2RAD:ts,RAD2DEG:_s,generateUUID:Ia,clamp:Vt,euclideanModulo:sf,mapLinear:zE,inverseLerp:HE,lerp:ns,damp:GE,pingpong:VE,smoothstep:WE,smootherstep:XE,randInt:YE,randFloat:$E,randFloatSpread:jE,seededRandom:qE,degToRad:KE,radToDeg:ZE,isPowerOfTwo:ru,ceilPowerOfTwo:JE,floorPowerOfTwo:$o,setQuaternionFromProperEuler:QE,normalize:qt,denormalize:Jr};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,a,o,s,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],E=i[8],x=r[0],m=r[3],h=r[6],_=r[1],g=r[4],y=r[7],A=r[2],C=r[5],w=r[8];return a[0]=o*x+s*_+l*A,a[3]=o*m+s*g+l*C,a[6]=o*h+s*y+l*w,a[1]=c*x+u*_+f*A,a[4]=c*m+u*g+f*C,a[7]=c*h+u*y+f*w,a[2]=d*x+p*_+E*A,a[5]=d*m+p*g+E*C,a[8]=d*h+p*y+E*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,p=c*a-o*l,E=n*f+i*d+r*p;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/E;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(s*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*a-s*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Zl.makeScale(e,n)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new Ze;function Zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tb(){const t=vs("canvas");return t.style.display="block",t}const Eh={};function is(t){t in Eh||(Eh[t]=!0,console.warn(t))}const bh=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[ci]:{transfer:Vo,primaries:Wo,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ft,primaries:Wo,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vl]:{transfer:Vo,primaries:Xo,toReference:t=>t.applyMatrix3(Mh),fromReference:t=>t.applyMatrix3(bh)},[af]:{transfer:ft,primaries:Xo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mh),fromReference:t=>t.applyMatrix3(bh).convertLinearToSRGB()}},nb=new Set([ci,vl]),lt={enabled:!0,_workingColorSpace:ci,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ws[e].toReference,r=Ws[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ws[t].primaries},getTransfer:function(t){return t===yn?Vo:Ws[t].transfer}};function ca(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ur;class Jg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=vs("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ca(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ca(n[i]/255)*255):n[i]=ca(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ib=0;class Qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Ia(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Ql(r[o].image)):a.push(Ql(r[o]))}else a=Ql(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Ql(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rb=0;class an extends Lr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Ln,r=Ln,a=vn,o=ms,s=Pn,l=Bi,c=an.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ia(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===br?kt:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tu:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tu:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?br:qg}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?kt:yn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Gg;an.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],E=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(E-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(E+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,A=(h+1)/2,C=(u+d)/4,w=(f+x)/4,D=(E+m)/4;return g>y&&g>A?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=C/i,a=w/i):y>A?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=C/r,a=D/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=w/a,r=D/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-E)*(m-E)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-E)/_,this.y=(f-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ab extends Lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?kt:yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends ab{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class e_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sb extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=a[o+0],p=a[o+1],E=a[o+2],x=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=E,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==E){let m=1-s;const h=l*d+c*p+u*E+f*x,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const A=Math.sqrt(g),C=Math.atan2(A,h*_);m=Math.sin(m*C)/A,s=Math.sin(s*C)/A}const y=s*_;if(l=l*m+d*y,c=c*m+p*y,u=u*m+E*y,f=f*m+x*y,m===1-s){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],d=a[o+1],p=a[o+2],E=a[o+3];return e[n]=s*E+u*f+l*p-c*d,e[n+1]=l*E+u*d+c*f-s*p,e[n+2]=c*E+u*p+s*d-l*f,e[n+3]=u*E-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),d=l(i/2),p=l(r/2),E=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*p*E,this._y=c*p*f-d*u*E,this._z=c*u*E+d*p*f,this._w=c*u*f-d*p*E;break;case"YXZ":this._x=d*u*f+c*p*E,this._y=c*p*f-d*u*E,this._z=c*u*E-d*p*f,this._w=c*u*f+d*p*E;break;case"ZXY":this._x=d*u*f-c*p*E,this._y=c*p*f+d*u*E,this._z=c*u*E+d*p*f,this._w=c*u*f-d*p*E;break;case"ZYX":this._x=d*u*f-c*p*E,this._y=c*p*f+d*u*E,this._z=c*u*E-d*p*f,this._w=c*u*f+d*p*E;break;case"YZX":this._x=d*u*f+c*p*E,this._y=c*p*f+d*u*E,this._z=c*u*E-d*p*f,this._w=c*u*f-d*p*E;break;case"XZY":this._x=d*u*f-c*p*E,this._y=c*p*f-d*u*E,this._z=c*u*E+d*p*f,this._w=c*u*f+d*p*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*n-a*r),f=2*(a*i-o*n);return this.x=n+l*c+o*f-s*u,this.y=i+l*u+s*c-a*f,this.z=r+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new W,Sh=new Ar;class Rs{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Mn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Mn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Mn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(a,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),Ys.subVectors(this.max,za),Fr.subVectors(e.a,za),kr.subVectors(e.b,za),Br.subVectors(e.c,za),yi.subVectors(kr,Fr),Ei.subVectors(Br,kr),nr.subVectors(Fr,Br);let n=[0,-yi.z,yi.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,yi.z,0,-yi.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-yi.y,yi.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!tc(n,Fr,kr,Br,Ys)||(n=[1,0,0,0,1,0,0,0,1],!tc(n,Fr,kr,Br,Ys))?!1:($s.crossVectors(yi,Ei),n=[$s.x,$s.y,$s.z],tc(n,Fr,kr,Br,Ys))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new W,new W,new W,new W,new W,new W,new W,new W],Mn=new W,Xs=new Rs,Fr=new W,kr=new W,Br=new W,yi=new W,Ei=new W,nr=new W,za=new W,Ys=new W,$s=new W,ir=new W;function tc(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){ir.fromArray(t,a);const s=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const ob=new Rs,Ha=new W,nc=new W;class xl{constructor(e=new W,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ob.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const n=Ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(nc)),this.expandByPoint(Ha.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new W,ic=new W,js=new W,bi=new W,rc=new W,qs=new W,ac=new W;class of{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$n.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,n),$n.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ic.copy(e).add(n).multiplyScalar(.5),js.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(ic);const a=e.distanceTo(n)*.5,o=-this.direction.dot(js),s=bi.dot(this.direction),l=-bi.dot(js),c=bi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,E;if(u>0)if(f=o*l-s,d=o*s-l,E=a*u,f>=0)if(d>=-E)if(d<=E){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-E?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=E?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ic).addScaledVector(js,d),p}intersectSphere(e,n){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,n,i,r,a){rc.subVectors(n,e),qs.subVectors(i,e),ac.crossVectors(rc,qs);let o=this.direction.dot(ac),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=s*this.direction.dot(qs.crossVectors(bi,qs));if(l<0)return null;const c=s*this.direction.dot(rc.cross(bi));if(c<0||l+c>o)return null;const u=-s*bi.dot(ac);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,a,o,s,l,c,u,f,d,p,E,x,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,f,d,p,E,x,m)}set(e,n,i,r,a,o,s,l,c,u,f,d,p,E,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=E,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),a=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,E=s*u,x=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+E*c,n[5]=d-x*c,n[9]=-s*l,n[2]=x-d*c,n[6]=E+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,E=c*u,x=c*f;n[0]=d+x*s,n[4]=E*s-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-s,n[2]=p*s-E,n[6]=x+d*s,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,E=c*u,x=c*f;n[0]=d-x*s,n[4]=-o*f,n[8]=E+p*s,n[1]=p+E*s,n[5]=o*u,n[9]=x-d*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,E=s*u,x=s*f;n[0]=l*u,n[4]=E*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-E,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,E=s*l,x=s*c;n[0]=l*u,n[4]=x-d*f,n[8]=E*f+p,n[1]=f,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+E,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,E=s*l,x=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-E,n[2]=E*f-p,n[6]=s*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lb,e,cb)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Mi.crossVectors(i,cn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Mi.crossVectors(i,cn)),Mi.normalize(),Ks.crossVectors(cn,Mi),r[0]=Mi.x,r[4]=Ks.x,r[8]=cn.x,r[1]=Mi.y,r[5]=Ks.y,r[9]=cn.y,r[2]=Mi.z,r[6]=Ks.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],E=i[2],x=i[6],m=i[10],h=i[14],_=i[3],g=i[7],y=i[11],A=i[15],C=r[0],w=r[4],D=r[8],T=r[12],L=r[1],z=r[5],U=r[9],V=r[13],O=r[2],X=r[6],j=r[10],Y=r[14],ie=r[3],ee=r[7],ce=r[11],B=r[15];return a[0]=o*C+s*L+l*O+c*ie,a[4]=o*w+s*z+l*X+c*ee,a[8]=o*D+s*U+l*j+c*ce,a[12]=o*T+s*V+l*Y+c*B,a[1]=u*C+f*L+d*O+p*ie,a[5]=u*w+f*z+d*X+p*ee,a[9]=u*D+f*U+d*j+p*ce,a[13]=u*T+f*V+d*Y+p*B,a[2]=E*C+x*L+m*O+h*ie,a[6]=E*w+x*z+m*X+h*ee,a[10]=E*D+x*U+m*j+h*ce,a[14]=E*T+x*V+m*Y+h*B,a[3]=_*C+g*L+y*O+A*ie,a[7]=_*w+g*z+y*X+A*ee,a[11]=_*D+g*U+y*j+A*ce,a[15]=_*T+g*V+y*Y+A*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],E=e[3],x=e[7],m=e[11],h=e[15];return E*(+a*l*f-r*c*f-a*s*d+i*c*d+r*s*p-i*l*p)+x*(+n*l*p-n*c*d+a*o*d-r*o*p+r*c*u-a*l*u)+m*(+n*c*f-n*s*p-a*o*f+i*o*p+a*s*u-i*c*u)+h*(-r*s*u-n*l*f+n*s*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],E=e[12],x=e[13],m=e[14],h=e[15],_=f*m*c-x*d*c+x*l*p-s*m*p-f*l*h+s*d*h,g=E*d*c-u*m*c-E*l*p+o*m*p+u*l*h-o*d*h,y=u*x*c-E*f*c+E*s*p-o*x*p-u*s*h+o*f*h,A=E*f*l-u*x*l-E*s*d+o*x*d+u*s*m-o*f*m,C=n*_+i*g+r*y+a*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(x*d*a-f*m*a-x*r*p+i*m*p+f*r*h-i*d*h)*w,e[2]=(s*m*a-x*l*a+x*r*c-i*m*c-s*r*h+i*l*h)*w,e[3]=(f*l*a-s*d*a-f*r*c+i*d*c+s*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*a-E*d*a+E*r*p-n*m*p-u*r*h+n*d*h)*w,e[6]=(E*l*a-o*m*a-E*r*c+n*m*c+o*r*h-n*l*h)*w,e[7]=(o*d*a-u*l*a+u*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=y*w,e[9]=(E*f*a-u*x*a-E*i*p+n*x*p+u*i*h-n*f*h)*w,e[10]=(o*x*a-E*s*a+E*i*c-n*x*c-o*i*h+n*s*h)*w,e[11]=(u*s*a-o*f*a-u*i*c+n*f*c+o*i*p-n*s*p)*w,e[12]=A*w,e[13]=(u*x*r-E*f*r+E*i*d-n*x*d-u*i*m+n*f*m)*w,e[14]=(E*s*r-o*x*r-E*i*l+n*x*l+o*i*m-n*s*m)*w,e[15]=(o*f*r-u*s*r+u*i*l-n*f*l-o*i*d+n*s*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,f=s+s,d=a*c,p=a*u,E=a*f,x=o*u,m=o*f,h=s*f,_=l*c,g=l*u,y=l*f,A=i.x,C=i.y,w=i.z;return r[0]=(1-(x+h))*A,r[1]=(p+y)*A,r[2]=(E-g)*A,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+h))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(E+g)*w,r[9]=(m-_)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),s=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/a,u=1/o,f=1/s;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,n.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=ri){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,E;if(s===ri)p=-(o+a)/(o-a),E=-2*o*a/(o-a);else if(s===Yo)p=-o/(o-a),E=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=ri){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-a),d=(n+e)*c,p=(i+r)*u;let E,x;if(s===ri)E=(o+a)*f,x=-2*f;else if(s===Yo)E=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new W,Sn=new At,lb=new W(0,0,0),cb=new W(1,1,1),Mi=new W,Ks=new W,cn=new W,Th=new At,Ah=new Ar;class yl{constructor(e=0,n=0,i=0,r=yl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yl.DEFAULT_ORDER="XYZ";let lf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ub=0;const wh=new W,Hr=new Ar,jn=new At,Zs=new W,Ga=new W,fb=new W,db=new Ar,Ch=new W(1,0,0),Rh=new W(0,1,0),Lh=new W(0,0,1),hb={type:"added"},pb={type:"removed"};class Xt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new W,n=new yl,i=new Ar,r=new W(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,n){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zs.copy(e):Zs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ga,Zs,this.up):jn.lookAt(Zs,Ga,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(jn),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,fb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),E=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),E.length>0&&(i.nodes=E)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new W(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new W,qn=new W,sc=new W,Kn=new W,Gr=new W,Vr=new W,Ph=new W,oc=new W,lc=new W,cc=new W;let Js=!1;class wn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Tn.subVectors(r,n),qn.subVectors(i,n),sc.subVectors(e,n);const o=Tn.dot(Tn),s=Tn.dot(qn),l=Tn.dot(sc),c=qn.dot(qn),u=qn.dot(sc),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const d=1/f,p=(c*l-s*u)*d,E=(o*u-s*l)*d;return a.set(1-p-E,E,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,n,i,r,a,o,s,l){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Kn),l.setScalar(0),l.addScaledVector(a,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(s,Kn.z),l}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),qn.subVectors(e,n),Tn.cross(qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;Gr.subVectors(r,i),Vr.subVectors(a,i),oc.subVectors(e,i);const l=Gr.dot(oc),c=Vr.dot(oc);if(l<=0&&c<=0)return n.copy(i);lc.subVectors(e,r);const u=Gr.dot(lc),f=Vr.dot(lc);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Gr,o);cc.subVectors(e,a);const p=Gr.dot(cc),E=Vr.dot(cc);if(E>=0&&p<=E)return n.copy(a);const x=p*c-l*E;if(x<=0&&c>=0&&E<=0)return s=c/(c-E),n.copy(i).addScaledVector(Vr,s);const m=u*E-p*f;if(m<=0&&f-u>=0&&p-E>=0)return Ph.subVectors(a,r),s=(f-u)/(f-u+(p-E)),n.copy(r).addScaledVector(Ph,s);const h=1/(m+x+d);return o=x*h,s=d*h,n.copy(i).addScaledVector(Gr,o).addScaledVector(Vr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function uc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=sf(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=uc(o,a,e+1/3),this.g=uc(o,a,e),this.b=uc(o,a,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=t_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return lt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Vt(Gt.r*255,0,255))*65536+Math.round(Vt(Gt.g*255,0,255))*256+Math.round(Vt(Gt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,a=Gt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=kt){lt.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(Qs);const i=ns(Si.h,Qs.h,n),r=ns(Si.s,Qs.s,n),a=ns(Si.l,Qs.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Qe;Qe.NAMES=t_;let mb=0;class Ls extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=la,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Jc&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class n_ extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new W,eo=new Xe;class nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vh,this.updateRange={offset:0,count:-1},this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)eo.fromBufferAttribute(this,n),eo.applyMatrix3(e),this.setXY(n,eo.x,eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class i_ extends nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class r_ extends nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mr extends nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gb=0;const gn=new At,fc=new Xt,Wr=new W,un=new Rs,Va=new Rs,Ot=new W;class $i extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?r_:i_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Mr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];un.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Va.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(un.min,Va.min),un.expandByPoint(Ot),Ot.addVectors(un.max,Va.max),un.expandByPoint(Ot)):(un.expandByPoint(Va.min),un.expandByPoint(Va.max))}un.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Ot.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Ot.fromBufferAttribute(s,c),l&&(Wr.fromBufferAttribute(e,c),Ot.add(Wr)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new W,u[L]=new W;const f=new W,d=new W,p=new W,E=new Xe,x=new Xe,m=new Xe,h=new W,_=new W;function g(L,z,U){f.fromArray(r,L*3),d.fromArray(r,z*3),p.fromArray(r,U*3),E.fromArray(o,L*2),x.fromArray(o,z*2),m.fromArray(o,U*2),d.sub(f),p.sub(f),x.sub(E),m.sub(E);const V=1/(x.x*m.y-m.x*x.y);isFinite(V)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(V),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(V),c[L].add(h),c[z].add(h),c[U].add(h),u[L].add(_),u[z].add(_),u[U].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,z=y.length;L<z;++L){const U=y[L],V=U.start,O=U.count;for(let X=V,j=V+O;X<j;X+=3)g(i[X+0],i[X+1],i[X+2])}const A=new W,C=new W,w=new W,D=new W;function T(L){w.fromArray(a,L*3),D.copy(w);const z=c[L];A.copy(z),A.sub(w.multiplyScalar(w.dot(z))).normalize(),C.crossVectors(D,z);const V=C.dot(u[L])<0?-1:1;l[L*4]=A.x,l[L*4+1]=A.y,l[L*4+2]=A.z,l[L*4+3]=V}for(let L=0,z=y.length;L<z;++L){const U=y[L],V=U.start,O=U.count;for(let X=V,j=V+O;X<j;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,a=new W,o=new W,s=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const E=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,E),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(E,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,E=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?p=l[x]*s.data.stride+s.offset:p=l[x]*u;for(let h=0;h<u;h++)d[E++]=c[p++]}return new nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $i,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new At,rr=new of,to=new xl,Nh=new W,Xr=new W,Yr=new W,$r=new W,dc=new W,no=new W,io=new Xe,ro=new Xe,ao=new Xe,Dh=new W,Oh=new W,Uh=new W,so=new W,oo=new W;class ai extends Xt{constructor(e=new $i,n=new n_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){no.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(dc.fromBufferAttribute(f,e),o?no.addScaledVector(dc,u):no.addScaledVector(dc.sub(n),u))}n.add(no)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(a),rr.copy(e.ray).recast(e.near),!(to.containsPoint(rr.origin)===!1&&(rr.intersectSphere(to,Nh)===null||rr.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Ih.copy(a).invert(),rr.copy(e.ray).applyMatrix4(Ih),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let E=0,x=d.length;E<x;E++){const m=d[E],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=g;y<A;y+=3){const C=s.getX(y),w=s.getX(y+1),D=s.getX(y+2);r=lo(this,h,e,i,c,u,f,C,w,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const E=Math.max(0,p.start),x=Math.min(s.count,p.start+p.count);for(let m=E,h=x;m<h;m+=3){const _=s.getX(m),g=s.getX(m+1),y=s.getX(m+2);r=lo(this,o,e,i,c,u,f,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let E=0,x=d.length;E<x;E++){const m=d[E],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=g;y<A;y+=3){const C=y,w=y+1,D=y+2;r=lo(this,h,e,i,c,u,f,C,w,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const E=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=E,h=x;m<h;m+=3){const _=m,g=m+1,y=m+2;r=lo(this,o,e,i,c,u,f,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _b(t,e,n,i,r,a,o,s){let l;if(e.side===rn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Gi,s),l===null)return null;oo.copy(s),oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oo);return c<n.near||c>n.far?null:{distance:c,point:oo.clone(),object:t}}function lo(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,Xr),t.getVertexPosition(l,Yr),t.getVertexPosition(c,$r);const u=_b(t,e,n,i,Xr,Yr,$r,so);if(u){r&&(io.fromBufferAttribute(r,s),ro.fromBufferAttribute(r,l),ao.fromBufferAttribute(r,c),u.uv=wn.getInterpolation(so,Xr,Yr,$r,io,ro,ao,new Xe)),a&&(io.fromBufferAttribute(a,s),ro.fromBufferAttribute(a,l),ao.fromBufferAttribute(a,c),u.uv1=wn.getInterpolation(so,Xr,Yr,$r,io,ro,ao,new Xe),u.uv2=u.uv1),o&&(Dh.fromBufferAttribute(o,s),Oh.fromBufferAttribute(o,l),Uh.fromBufferAttribute(o,c),u.normal=wn.getInterpolation(so,Xr,Yr,$r,Dh,Oh,Uh,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new W,materialIndex:0};wn.getNormal(Xr,Yr,$r,f.normal),u.face=f}return u}class Ps extends $i{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;E("z","y","x",-1,-1,i,n,e,o,a,0),E("z","y","x",1,-1,i,n,-e,o,a,1),E("x","z","y",1,1,e,i,n,r,o,2),E("x","z","y",1,-1,e,i,-n,r,o,3),E("x","y","z",1,-1,e,n,i,r,a,4),E("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Mr(c,3)),this.setAttribute("normal",new Mr(u,3)),this.setAttribute("uv",new Mr(f,2));function E(x,m,h,_,g,y,A,C,w,D,T){const L=y/w,z=A/D,U=y/2,V=A/2,O=C/2,X=w+1,j=D+1;let Y=0,ie=0;const ee=new W;for(let ce=0;ce<j;ce++){const B=ce*z-V;for(let Z=0;Z<X;Z++){const me=Z*L-U;ee[x]=me*_,ee[m]=B*g,ee[h]=O,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[h]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Z/w),f.push(1-ce/D),Y+=1}}for(let ce=0;ce<D;ce++)for(let B=0;B<w;B++){const Z=d+B+X*ce,me=d+B+X*(ce+1),Ee=d+(B+1)+X*(ce+1),G=d+(B+1)+X*ce;l.push(Z,me,G),l.push(me,Ee,G),ie+=6}s.addGroup(p,ie,T),p+=ie,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=xa(t[n]);for(const r in i)e[r]=i[r]}return e}function vb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){return t.getRenderTarget()===null?t.outputColorSpace:lt.workingColorSpace}const xb={clone:xa,merge:Kt};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=vb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class s_ extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends s_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ts*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,qr=1;class bb extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(jr,qr,e,n);r.layers=this.layers,this.add(r);const a=new fn(jr,qr,e,n);a.layers=this.layers,this.add(a);const o=new fn(jr,qr,e,n);o.layers=this.layers,this.add(o);const s=new fn(jr,qr,e,n);s.layers=this.layers,this.add(s);const l=new fn(jr,qr,e,n);l.layers=this.layers,this.add(l);const c=new fn(jr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class o_ extends an{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ga,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mb extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?kt:yn),this.texture=new o_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),a=new wr({name:"CubemapFromEquirect",uniforms:xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Fi});a.uniforms.tEquirect.value=n;const o=new ai(r,a),s=n.minFilter;return n.minFilter===ms&&(n.minFilter=vn),new bb(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const hc=new W,Sb=new W,Tb=new Ze;class Pi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hc.subVectors(i,n).cross(Sb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Tb.getNormalMatrix(e),r=this.coplanarPoint(hc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new xl,co=new W;class cf{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,a=new Pi,o=new Pi){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],E=r[9],x=r[10],m=r[11],h=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-a,d-c,m-p,y-h).normalize(),i[1].setComponents(l+a,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+E,y+_).normalize(),i[3].setComponents(l-o,d-u,m-E,y-_).normalize(),i[4].setComponents(l-s,d-f,m-x,y-g).normalize(),n===ri)i[5].setComponents(l+s,d+f,m+x,y+g).normalize();else if(n===Yo)i[5].setComponents(s,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l_(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Ab(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let E;if(f instanceof Float32Array)E=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=t.SHORT;else if(f instanceof Uint32Array)E=t.UNSIGNED_INT;else if(f instanceof Int32Array)E=t.INT;else if(f instanceof Int8Array)E=t.BYTE;else if(f instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class uf extends $i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,d=n/l,p=[],E=[],x=[],m=[];for(let h=0;h<u;h++){const _=h*d-o;for(let g=0;g<c;g++){const y=g*f-a;E.push(y,-_,0),x.push(0,0,1),m.push(g/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<s;_++){const g=_+c*h,y=_+c*(h+1),A=_+1+c*(h+1),C=_+1+c*h;p.push(g,y,C),p.push(y,A,C)}this.setIndex(p),this.setAttribute("position",new Mr(E,3)),this.setAttribute("normal",new Mr(x,3)),this.setAttribute("uv",new Mr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.width,e.height,e.widthSegments,e.heightSegments)}}var wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cb=`#ifdef USE_ALPHAHASH
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
#endif`,Rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
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
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jb=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`
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
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
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
#endif`,SM=`struct PhysicalMaterial {
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
}`,TM=`
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
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
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cS=`float getShadowMask() {
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
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
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
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#ifdef USE_TRANSMISSION
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`#include <common>
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
}`,PS=`#if DEPTH_PACKING == 3200
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
}`,IS=`#define DISTANCE
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
}`,NS=`#define DISTANCE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
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
}`,FS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,BS=`uniform vec3 diffuse;
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
}`,zS=`#define LAMBERT
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
}`,HS=`#define LAMBERT
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
}`,GS=`#define MATCAP
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
}`,VS=`#define MATCAP
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
}`,WS=`#define NORMAL
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
}`,XS=`#define NORMAL
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
}`,YS=`#define PHONG
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
}`,$S=`#define PHONG
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
}`,jS=`#define STANDARD
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
}`,qS=`#define STANDARD
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
}`,KS=`#define TOON
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
}`,ZS=`#define TOON
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
}`,JS=`uniform float size;
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
}`,QS=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:wb,alphahash_pars_fragment:Cb,alphamap_fragment:Rb,alphamap_pars_fragment:Lb,alphatest_fragment:Pb,alphatest_pars_fragment:Ib,aomap_fragment:Nb,aomap_pars_fragment:Db,begin_vertex:Ob,beginnormal_vertex:Ub,bsdfs:Fb,iridescence_fragment:kb,bumpmap_pars_fragment:Bb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Vb,color_fragment:Wb,color_pars_fragment:Xb,color_pars_vertex:Yb,color_vertex:$b,common:jb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Jb,emissivemap_fragment:Qb,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:aM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_fragment:hM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:_M,lights_toon_fragment:xM,lights_toon_pars_fragment:yM,lights_phong_fragment:EM,lights_phong_pars_fragment:bM,lights_physical_fragment:MM,lights_physical_pars_fragment:SM,lights_fragment_begin:TM,lights_fragment_maps:AM,lights_fragment_end:wM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:RM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:PM,map_fragment:IM,map_pars_fragment:NM,map_particle_fragment:DM,map_particle_pars_fragment:OM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:FM,morphcolor_vertex:kM,morphnormal_vertex:BM,morphtarget_pars_vertex:zM,morphtarget_vertex:HM,normal_fragment_begin:GM,normal_fragment_maps:VM,normal_pars_fragment:WM,normal_pars_vertex:XM,normal_vertex:YM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:ZM,opaque_fragment:JM,packing:QM,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:lS,shadowmask_pars_fragment:cS,skinbase_vertex:uS,skinning_pars_vertex:fS,skinning_vertex:dS,skinnormal_vertex:hS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:_S,transmission_fragment:vS,transmission_pars_fragment:xS,uv_pars_fragment:yS,uv_pars_vertex:ES,uv_vertex:bS,worldpos_vertex:MS,background_vert:SS,background_frag:TS,backgroundCube_vert:AS,backgroundCube_frag:wS,cube_vert:CS,cube_frag:RS,depth_vert:LS,depth_frag:PS,distanceRGBA_vert:IS,distanceRGBA_frag:NS,equirect_vert:DS,equirect_frag:OS,linedashed_vert:US,linedashed_frag:FS,meshbasic_vert:kS,meshbasic_frag:BS,meshlambert_vert:zS,meshlambert_frag:HS,meshmatcap_vert:GS,meshmatcap_frag:VS,meshnormal_vert:WS,meshnormal_frag:XS,meshphong_vert:YS,meshphong_frag:$S,meshphysical_vert:jS,meshphysical_frag:qS,meshtoon_vert:KS,meshtoon_frag:ZS,points_vert:JS,points_frag:QS,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},Ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},zn={basic:{uniforms:Kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Kt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Kt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Kt([Ae.points,Ae.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Kt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Kt([Ae.common,Ae.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Kt([Ae.sprite,Ae.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Kt([Ae.common,Ae.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Kt([Ae.lights,Ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};zn.physical={uniforms:Kt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const uo={r:0,b:0,g:0};function rT(t,e,n,i,r,a,o){const s=new Qe(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function E(m,h){let _=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?x(s,l):g&&g.isColor&&(x(g,1),_=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===_l)?(u===void 0&&(u=new ai(new Ps(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:xa(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=lt.getTransfer(g.colorSpace)!==ft,(f!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ai(new uf(2,2),new wr({name:"BackgroundMaterial",uniforms:xa(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=lt.getTransfer(g.colorSpace)!==ft,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(uo,a_(t)),i.buffers.color.setClear(uo.r,uo.g,uo.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(s,l)},render:E}}function aT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(O,X,j,Y,ie){let ee=!1;if(o){const ce=x(Y,j,X);c!==ce&&(c=ce,p(c.object)),ee=h(O,Y,j,ie),ee&&_(O,Y,j,ie)}else{const ce=X.wireframe===!0;(c.geometry!==Y.id||c.program!==j.id||c.wireframe!==ce)&&(c.geometry=Y.id,c.program=j.id,c.wireframe=ce,ee=!0)}ie!==null&&n.update(ie,t.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,D(O,X,j,Y),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(ie).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(O){return i.isWebGL2?t.bindVertexArray(O):a.bindVertexArrayOES(O)}function E(O){return i.isWebGL2?t.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function x(O,X,j){const Y=j.wireframe===!0;let ie=s[O.id];ie===void 0&&(ie={},s[O.id]=ie);let ee=ie[X.id];ee===void 0&&(ee={},ie[X.id]=ee);let ce=ee[Y];return ce===void 0&&(ce=m(d()),ee[Y]=ce),ce}function m(O){const X=[],j=[],Y=[];for(let ie=0;ie<r;ie++)X[ie]=0,j[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:Y,object:O,attributes:{},index:null}}function h(O,X,j,Y){const ie=c.attributes,ee=X.attributes;let ce=0;const B=j.getAttributes();for(const Z in B)if(B[Z].location>=0){const Ee=ie[Z];let G=ee[Z];if(G===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(G=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(G=O.instanceColor)),Ee===void 0||Ee.attribute!==G||G&&Ee.data!==G.data)return!0;ce++}return c.attributesNum!==ce||c.index!==Y}function _(O,X,j,Y){const ie={},ee=X.attributes;let ce=0;const B=j.getAttributes();for(const Z in B)if(B[Z].location>=0){let Ee=ee[Z];Ee===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Ee=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Ee=O.instanceColor));const G={};G.attribute=Ee,Ee&&Ee.data&&(G.data=Ee.data),ie[Z]=G,ce++}c.attributes=ie,c.attributesNum=ce,c.index=Y}function g(){const O=c.newAttributes;for(let X=0,j=O.length;X<j;X++)O[X]=0}function y(O){A(O,0)}function A(O,X){const j=c.newAttributes,Y=c.enabledAttributes,ie=c.attributeDivisors;j[O]=1,Y[O]===0&&(t.enableVertexAttribArray(O),Y[O]=1),ie[O]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,X),ie[O]=X)}function C(){const O=c.newAttributes,X=c.enabledAttributes;for(let j=0,Y=X.length;j<Y;j++)X[j]!==O[j]&&(t.disableVertexAttribArray(j),X[j]=0)}function w(O,X,j,Y,ie,ee,ce){ce===!0?t.vertexAttribIPointer(O,X,j,ie,ee):t.vertexAttribPointer(O,X,j,Y,ie,ee)}function D(O,X,j,Y){if(i.isWebGL2===!1&&(O.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const ie=Y.attributes,ee=j.getAttributes(),ce=X.defaultAttributeValues;for(const B in ee){const Z=ee[B];if(Z.location>=0){let me=ie[B];if(me===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(me=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(me=O.instanceColor)),me!==void 0){const Ee=me.normalized,G=me.itemSize,se=n.get(me);if(se===void 0)continue;const oe=se.buffer,de=se.type,ye=se.bytesPerElement,Ne=i.isWebGL2===!0&&(de===t.INT||de===t.UNSIGNED_INT||me.gpuType===Vg);if(me.isInterleavedBufferAttribute){const _e=me.data,S=_e.stride,M=me.offset;if(_e.isInstancedInterleavedBuffer){for(let b=0;b<Z.locationSize;b++)A(Z.location+b,_e.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let b=0;b<Z.locationSize;b++)y(Z.location+b);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let b=0;b<Z.locationSize;b++)w(Z.location+b,G/Z.locationSize,de,Ee,S*ye,(M+G/Z.locationSize*b)*ye,Ne)}else{if(me.isInstancedBufferAttribute){for(let _e=0;_e<Z.locationSize;_e++)A(Z.location+_e,me.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let _e=0;_e<Z.locationSize;_e++)y(Z.location+_e);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let _e=0;_e<Z.locationSize;_e++)w(Z.location+_e,G/Z.locationSize,de,Ee,G*ye,G/Z.locationSize*_e*ye,Ne)}}else if(ce!==void 0){const Ee=ce[B];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(Z.location,Ee);break;case 3:t.vertexAttrib3fv(Z.location,Ee);break;case 4:t.vertexAttrib4fv(Z.location,Ee);break;default:t.vertexAttrib1fv(Z.location,Ee)}}}}C()}function T(){U();for(const O in s){const X=s[O];for(const j in X){const Y=X[j];for(const ie in Y)E(Y[ie].object),delete Y[ie];delete X[j]}delete s[O]}}function L(O){if(s[O.id]===void 0)return;const X=s[O.id];for(const j in X){const Y=X[j];for(const ie in Y)E(Y[ie].object),delete Y[ie];delete X[j]}delete s[O.id]}function z(O){for(const X in s){const j=s[X];if(j[O.id]===void 0)continue;const Y=j[O.id];for(const ie in Y)E(Y[ie].object),delete Y[ie];delete j[O.id]}}function U(){V(),u=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:y,disableUnusedAttributes:C}}function sT(t,e,n,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){t.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,c,u,f),n.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function oT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),A=g&&y,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:C}}function lT(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new Pi,s=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const E=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||E===null||E.length===0||a&&!m)a?u(null):c();else{const _=a?0:i,g=_*4;let y=h.clippingState||null;l.value=y,y=u(E,d,g,p);for(let A=0;A!==g;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,E){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,E!==!0||m===null){const h=p+x*4,_=d.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(f[g]).applyMatrix4(_,s),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cT(t){let e=new WeakMap;function n(o,s){return s===Qc?o.mapping=ga:s===eu&&(o.mapping=_a),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Qc||s===eu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mb(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class c_ extends s_{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ea=4,Fh=[.125,.215,.35,.446,.526,.582],fr=20,pc=new c_,kh=new Qe;let mc=null,gc=0,_c=0;const sr=(1+Math.sqrt(5))/2,Kr=1/sr,Bh=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,sr,Kr),new W(0,sr,-Kr),new W(Kr,0,sr),new W(-Kr,0,sr),new W(sr,Kr,0),new W(-sr,Kr,0)];class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,_c),e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ga||e.mapping===_a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:gs,format:Pn,colorSpace:ci,depthBuffer:!1},r=Hh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(a)),this._blurMaterial=fT(a,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,pc)}_sceneToCubeUV(e,n,i,r){const s=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(kh),u.toneMapping=ki,u.autoClear=!1;const p=new n_({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),E=new ai(new Ps,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(kh),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):_===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const g=this._cubeSize;fo(r,_*g,h>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(E,s),u.render(e,s)}E.geometry.dispose(),E.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ga||e.mapping===_a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bh[(r-1)%Bh.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ai(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*fr-1),x=a/E,m=isFinite(a)?1+Math.floor(u*x):fr;m>fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const h=[];let _=0;for(let w=0;w<fr;++w){const D=w/x,T=Math.exp(-D*D/2);h.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<h.length;w++)h[w]=h[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:g}=this;d.dTheta.value=E,d.mipInt.value=g-i;const y=this._sizeLods[r],A=3*y*(r>g-ea?r-g+ea:0),C=4*(this._cubeSize-y);fo(n,A,C,3*y,2*y),l.setRenderTarget(n),l.render(f,pc)}}function uT(t){const e=[],n=[],i=[];let r=t;const a=t-ea+1+Fh.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-ea?l=Fh[o-t+ea-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,E=6,x=3,m=2,h=1,_=new Float32Array(x*E*p),g=new Float32Array(m*E*p),y=new Float32Array(h*E*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,D=C>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(T,x*E*C),g.set(d,m*E*C);const L=[C,C,C,C,C,C];y.set(L,h*E*C)}const A=new $i;A.setAttribute("position",new nn(_,x)),A.setAttribute("uv",new nn(g,m)),A.setAttribute("faceIndex",new nn(y,h)),e.push(A),r>ea&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hh(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=_l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fT(t,e,n){const i=new Float32Array(fr),r=new W(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Gh(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Vh(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function dT(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Qc||l===eu,u=l===ga||l===_a;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new zh(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new zh(t));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const E in d.attributes)e.remove(d.attributes[E]);for(const E in d.morphAttributes){const x=d.morphAttributes[E];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const E in d)e.update(d[E],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const E in p){const x=p[E];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,E=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const A=_[g+0],C=_[g+1],w=_[g+2];d.push(A,C,C,w,w,A)}}else if(E!==void 0){const _=E.array;x=E.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const A=g+0,C=g+1,w=g+2;d.push(A,C,C,w,w,A)}}else return;const m=new(Zg(d)?r_:i_)(d,1);m.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function mT(t,e,n,i){const r=i.isWebGL2;let a;function o(d){a=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(a,p,s,d*l),n.update(p,a,1)}function f(d,p,E){if(E===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](a,p,s,d*l,E),n.update(p,a,E)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e){return t[0]-e[0]}function vT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xT(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new gt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,E=p!==void 0?p.length:0;let x=a.get(u);if(x===void 0||x.count!==E){let O=function(){U.dispose(),a.delete(u),u.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;_===!0&&(D=1),g===!0&&(D=2),y===!0&&(D=3);let T=u.attributes.position.count*D,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*L*4*E),U=new e_(z,T,L,E);U.type=Ni,U.needsUpdate=!0;const V=D*4;for(let X=0;X<E;X++){const j=A[X],Y=C[X],ie=w[X],ee=T*L*4*X;for(let ce=0;ce<j.count;ce++){const B=ce*V;_===!0&&(o.fromBufferAttribute(j,ce),z[ee+B+0]=o.x,z[ee+B+1]=o.y,z[ee+B+2]=o.z,z[ee+B+3]=0),g===!0&&(o.fromBufferAttribute(Y,ce),z[ee+B+4]=o.x,z[ee+B+5]=o.y,z[ee+B+6]=o.z,z[ee+B+7]=0),y===!0&&(o.fromBufferAttribute(ie,ce),z[ee+B+8]=o.x,z[ee+B+9]=o.y,z[ee+B+10]=o.z,z[ee+B+11]=ie.itemSize===4?o.w:1)}}x={count:E,texture:U,size:new Xe(T,L)},a.set(u,x),u.addEventListener("dispose",O)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const h=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let E=i[u.id];if(E===void 0||E.length!==p){E=[];for(let g=0;g<p;g++)E[g]=[g,0];i[u.id]=E}for(let g=0;g<p;g++){const y=E[g];y[0]=g,y[1]=d[g]}E.sort(vT);for(let g=0;g<8;g++)g<p&&E[g][1]?(s[g][0]=E[g][0],s[g][1]=E[g][1]):(s[g][0]=Number.MAX_SAFE_INTEGER,s[g][1]=0);s.sort(_T);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const y=s[g],A=y[0],C=y[1];A!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+g)!==x[A]&&u.setAttribute("morphTarget"+g,x[A]),m&&u.getAttribute("morphNormal"+g)!==m[A]&&u.setAttribute("morphNormal"+g,m[A]),r[g]=C,h+=C):(x&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const _=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yT(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const u_=new an,f_=new e_,d_=new sb,h_=new o_,Wh=[],Xh=[],Yh=new Float32Array(16),$h=new Float32Array(9),jh=new Float32Array(4);function Na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Wh[r];if(a===void 0&&(a=new Float32Array(r),Wh[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function El(t,e){let n=Xh[e];n===void 0&&(n=new Int32Array(e),Xh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ET(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;jh.set(i),t.uniformMatrix2fv(this.addr,!1,jh),It(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;$h.set(i),t.uniformMatrix3fv(this.addr,!1,$h),It(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Yh.set(i),t.uniformMatrix4fv(this.addr,!1,Yh),It(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||u_,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||d_,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||h_,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||f_,r)}function zT(t){switch(t){case 5126:return ET;case 35664:return bT;case 35665:return MT;case 35666:return ST;case 35674:return TT;case 35675:return AT;case 35676:return wT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return LT;case 35669:case 35673:return PT;case 5125:return IT;case 36294:return NT;case 36295:return DT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=Na(e,this.size,2);t.uniform2fv(this.addr,n)}function VT(t,e){const n=Na(e,this.size,3);t.uniform3fv(this.addr,n)}function WT(t,e){const n=Na(e,this.size,4);t.uniform4fv(this.addr,n)}function XT(t,e){const n=Na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YT(t,e){const n=Na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=Na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function KT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function eA(t,e){t.uniform3uiv(this.addr,e)}function tA(t,e){t.uniform4uiv(this.addr,e)}function nA(t,e,n){const i=this.cache,r=e.length,a=El(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||u_,a[o])}function iA(t,e,n){const i=this.cache,r=e.length,a=El(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||d_,a[o])}function rA(t,e,n){const i=this.cache,r=e.length,a=El(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||h_,a[o])}function aA(t,e,n){const i=this.cache,r=e.length,a=El(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||f_,a[o])}function sA(t){switch(t){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return WT;case 35674:return XT;case 35675:return YT;case 35676:return $T;case 5124:case 35670:return jT;case 35667:case 35671:return qT;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return JT;case 36294:return QT;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return aA}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=zT(n.type)}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=sA(n.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function qh(t,e){t.seq.push(e),t.map[e.id]=e}function uA(t,e,n){const i=t.name,r=i.length;for(vc.lastIndex=0;;){const a=vc.exec(i),o=vc.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){qh(n,c===void 0?new oA(s,t,e):new lA(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new cA(s),qh(n,f)),n=f}}}class No{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);uA(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Kh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fA=37297;let dA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function pA(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===Xo&&n===Wo?i="LinearDisplayP3ToLinearSRGB":e===Wo&&n===Xo&&(i="LinearSRGBToLinearDisplayP3"),t){case ci:case vl:return[i,"LinearTransferOETF"];case kt:case af:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+hA(t.getShaderSource(e),o)}else return r}function mA(t,e){const n=pA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gA(t,e){let n;switch(e){case pE:n="Linear";break;case mE:n="Reinhard";break;case gE:n="OptimizedCineon";break;case _E:n="ACESFilmic";break;case vE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _A(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ja).join(`
`)}function vA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function ja(t){return t!==""}function Jh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(t){return t.replace(yA,bA)}const EA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bA(t,e){let n=qe[e];if(n===void 0){const i=EA.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return au(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(t){return t.replace(MA,SA)}function SA(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function tp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function AA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ga:case _a:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _a:e="ENVMAP_MODE_REFRACTION";break}return e}function CA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nf:e="ENVMAP_BLENDING_MULTIPLY";break;case dE:e="ENVMAP_BLENDING_MIX";break;case hE:e="ENVMAP_BLENDING_ADD";break}return e}function RA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=TA(n),c=AA(n),u=wA(n),f=CA(n),d=RA(n),p=n.isWebGL2?"":_A(n),E=vA(a),x=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ja).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ja).join(`
`),h.length>0&&(h+=`
`)):(m=[tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),h=[p,tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?qe.tonemapping_pars_fragment:"",n.toneMapping!==ki?gA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,mA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),o=au(o),o=Jh(o,n),o=Qh(o,n),s=au(s),s=Jh(s,n),s=Qh(s,n),o=ep(o),s=ep(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=_+m+o,y=_+h+s,A=Kh(r,r.VERTEX_SHADER,g),C=Kh(r,r.FRAGMENT_SHADER,y);r.attachShader(x,A),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(z){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(C).trim();let X=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,C);else{const Y=Zh(r,A,"vertex"),ie=Zh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+Y+`
`+ie)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(V===""||O==="")&&(j=!1);j&&(z.diagnostics={runnable:X,programLog:U,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:h}})}r.deleteShader(A),r.deleteShader(C),D=new No(r,x),T=xA(r,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,fA)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let PA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function DA(t,e,n,i,r,a,o){const s=new lf,l=new IA,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function m(T,L,z,U,V){const O=U.fog,X=V.geometry,j=T.isMeshStandardMaterial?U.environment:null,Y=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),ie=Y&&Y.mapping===_l?Y.image.height:null,ee=E[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,B=ce!==void 0?ce.length:0;let Z=0;X.morphAttributes.position!==void 0&&(Z=1),X.morphAttributes.normal!==void 0&&(Z=2),X.morphAttributes.color!==void 0&&(Z=3);let me,Ee,G,se;if(ee){const Mt=zn[ee];me=Mt.vertexShader,Ee=Mt.fragmentShader}else me=T.vertexShader,Ee=T.fragmentShader,l.update(T),G=l.getVertexShaderID(T),se=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),de=V.isInstancedMesh===!0,ye=!!T.map,Ne=!!T.matcap,_e=!!Y,S=!!T.aoMap,M=!!T.lightMap,b=!!T.bumpMap,P=!!T.normalMap,F=!!T.displacementMap,q=!!T.emissiveMap,J=!!T.metalnessMap,te=!!T.roughnessMap,fe=T.anisotropy>0,he=T.clearcoat>0,we=T.iridescence>0,R=T.sheen>0,v=T.transmission>0,N=fe&&!!T.anisotropyMap,K=he&&!!T.clearcoatMap,Q=he&&!!T.clearcoatNormalMap,le=he&&!!T.clearcoatRoughnessMap,Me=we&&!!T.iridescenceMap,ge=we&&!!T.iridescenceThicknessMap,Se=R&&!!T.sheenColorMap,k=R&&!!T.sheenRoughnessMap,xe=!!T.specularMap,pe=!!T.specularColorMap,De=!!T.specularIntensityMap,Re=v&&!!T.transmissionMap,Fe=v&&!!T.thicknessMap,Ue=!!T.gradientMap,Ie=!!T.alphaMap,et=T.alphaTest>0,H=!!T.alphaHash,Te=!!T.extensions,ve=!!X.attributes.uv1,ue=!!X.attributes.uv2,be=!!X.attributes.uv3;let Be=ki;return T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Be=t.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:T.type,shaderName:T.name,vertexShader:me,fragmentShader:Ee,defines:T.defines,customVertexShaderID:G,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,instancing:de,instancingColor:de&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ci,map:ye,matcap:Ne,envMap:_e,envMapMode:_e&&Y.mapping,envMapCubeUVHeight:ie,aoMap:S,lightMap:M,bumpMap:b,normalMap:P,displacementMap:d&&F,emissiveMap:q,normalMapObjectSpace:P&&T.normalMapType===PE,normalMapTangentSpace:P&&T.normalMapType===Kg,metalnessMap:J,roughnessMap:te,anisotropy:fe,anisotropyMap:N,clearcoat:he,clearcoatMap:K,clearcoatNormalMap:Q,clearcoatRoughnessMap:le,iridescence:we,iridescenceMap:Me,iridescenceThicknessMap:ge,sheen:R,sheenColorMap:Se,sheenRoughnessMap:k,specularMap:xe,specularColorMap:pe,specularIntensityMap:De,transmission:v,transmissionMap:Re,thicknessMap:Fe,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===la,alphaMap:Ie,alphaTest:et,alphaHash:H,combine:T.combine,mapUv:ye&&x(T.map.channel),aoMapUv:S&&x(T.aoMap.channel),lightMapUv:M&&x(T.lightMap.channel),bumpMapUv:b&&x(T.bumpMap.channel),normalMapUv:P&&x(T.normalMap.channel),displacementMapUv:F&&x(T.displacementMap.channel),emissiveMapUv:q&&x(T.emissiveMap.channel),metalnessMapUv:J&&x(T.metalnessMap.channel),roughnessMapUv:te&&x(T.roughnessMap.channel),anisotropyMapUv:N&&x(T.anisotropyMap.channel),clearcoatMapUv:K&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Q&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:k&&x(T.sheenRoughnessMap.channel),specularMapUv:xe&&x(T.specularMap.channel),specularColorMapUv:pe&&x(T.specularColorMap.channel),specularIntensityMapUv:De&&x(T.specularIntensityMap.channel),transmissionMapUv:Re&&x(T.transmissionMap.channel),thicknessMapUv:Fe&&x(T.thicknessMap.channel),alphaMapUv:Ie&&x(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(P||fe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:ue,vertexUv3s:be,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(ye||Ie),fog:!!O,useFog:T.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&T.map.isVideoTexture===!0&&lt.getTransfer(T.map.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Te&&T.extensions.derivatives===!0,extensionFragDepth:Te&&T.extensions.fragDepth===!0,extensionDrawBuffers:Te&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)L.push(z),L.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(_(L,T),g(L,T),L.push(t.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function _(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function g(T,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.matcap&&s.enable(4),L.envMap&&s.enable(5),L.normalMapObjectSpace&&s.enable(6),L.normalMapTangentSpace&&s.enable(7),L.clearcoat&&s.enable(8),L.iridescence&&s.enable(9),L.alphaTest&&s.enable(10),L.vertexColors&&s.enable(11),L.vertexAlphas&&s.enable(12),L.vertexUv1s&&s.enable(13),L.vertexUv2s&&s.enable(14),L.vertexUv3s&&s.enable(15),L.vertexTangents&&s.enable(16),L.anisotropy&&s.enable(17),L.alphaHash&&s.enable(18),T.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.useLegacyLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.transmission&&s.enable(15),L.sheen&&s.enable(16),L.opaque&&s.enable(17),L.pointsUvs&&s.enable(18),L.decodeVideoTexture&&s.enable(19),T.push(s.mask)}function y(T){const L=E[T.type];let z;if(L){const U=zn[L];z=xb.clone(U.uniforms)}else z=T.uniforms;return z}function A(T,L){let z;for(let U=0,V=c.length;U<V;U++){const O=c[U];if(O.cacheKey===L){z=O,++z.usedTimes;break}}return z===void 0&&(z=new LA(t,L,T,a),c.push(z)),z}function C(T){if(--T.usedTimes===0){const L=c.indexOf(T);c[L]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:D}}function OA(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function UA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ip(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,E,x,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:E,renderOrder:f.renderOrder,z:x,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=E,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function s(f,d,p,E,x,m){const h=o(f,d,p,E,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,E,x,m){const h=o(f,d,p,E,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||UA),i.length>1&&i.sort(d||np),r.length>1&&r.sort(d||np)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function FA(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new ip,t.set(i,[o])):r>=a.length?(o=new ip,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Qe};break;case"SpotLight":n={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function BA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zA=0;function HA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GA(t,e){const n=new kA,i=BA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new W);const a=new W,o=new At,s=new At;function l(u,f){let d=0,p=0,E=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,m=0,h=0,_=0,g=0,y=0,A=0,C=0,w=0,D=0,T=0;u.sort(HA);const L=f===!0?Math.PI:1;for(let U=0,V=u.length;U<V;U++){const O=u[U],X=O.color,j=O.intensity,Y=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=X.r*j*L,p+=X.g*j*L,E+=X.b*j*L;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(O.sh.coefficients[ee],j);T++}else if(O.isDirectionalLight){const ee=n.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const ce=O.shadow,B=i.get(O);B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=ie,r.directionalShadowMatrix[x]=O.shadow.matrix,y++}r.directional[x]=ee,x++}else if(O.isSpotLight){const ee=n.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(X).multiplyScalar(j*L),ee.distance=Y,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,r.spot[h]=ee;const ce=O.shadow;if(O.map&&(r.spotLightMap[w]=O.map,w++,ce.updateMatrices(O),O.castShadow&&D++),r.spotLightMatrix[h]=ce.matrix,O.castShadow){const B=i.get(O);B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[h]=B,r.spotShadowMap[h]=ie,C++}h++}else if(O.isRectAreaLight){const ee=n.get(O);ee.color.copy(X).multiplyScalar(j),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=ee,_++}else if(O.isPointLight){const ee=n.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity*L),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){const ce=O.shadow,B=i.get(O);B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=O.shadow.matrix,A++}r.point[m]=ee,m++}else if(O.isHemisphereLight){const ee=n.get(O);ee.skyColor.copy(O.color).multiplyScalar(j*L),ee.groundColor.copy(O.groundColor).multiplyScalar(j*L),r.hemi[g]=ee,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=E;const z=r.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==h||z.rectAreaLength!==_||z.hemiLength!==g||z.numDirectionalShadows!==y||z.numPointShadows!==A||z.numSpotShadows!==C||z.numSpotMaps!==w||z.numLightProbes!==T)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=T,z.directionalLength=x,z.pointLength=m,z.spotLength=h,z.rectAreaLength=_,z.hemiLength=g,z.numDirectionalShadows=y,z.numPointShadows=A,z.numSpotShadows=C,z.numSpotMaps=w,z.numLightProbes=T,r.version=zA++)}function c(u,f){let d=0,p=0,E=0,x=0,m=0;const h=f.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const y=u[_];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(h),d++}else if(y.isSpotLight){const A=r.spot[E];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(h),E++}else if(y.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),s.identity(),o.copy(y.matrixWorld),o.premultiply(h),s.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function rp(t,e){const n=new GA(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function VA(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new rp(t,e),n.set(a,[l])):o>=s.length?(l=new rp(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class WA extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XA extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`;function jA(t,e,n){let i=new cf;const r=new Xe,a=new Xe,o=new gt,s=new WA({depthPacking:LE}),l=new XA,c={},u=n.maxTextureSize,f={[Gi]:rn,[rn]:Gi,[ei]:ei},d=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:YA,fragmentShader:$A}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const E=new $i;E.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ai(E,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hg;let h=this.type;this.render=function(A,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const D=t.getRenderTarget(),T=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Fi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=h!==Jn&&this.type===Jn,V=h===Jn&&this.type!==Jn;for(let O=0,X=A.length;O<X;O++){const j=A[O],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ie=Y.getFrameExtents();if(r.multiply(ie),a.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ie.x),r.x=a.x*ie.x,Y.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ie.y),r.y=a.y*ie.y,Y.mapSize.y=a.y)),Y.map===null||U===!0||V===!0){const ce=this.type!==Jn?{minFilter:Jt,magFilter:Jt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Tr(r.x,r.y,ce),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const ee=Y.getViewportCount();for(let ce=0;ce<ee;ce++){const B=Y.getViewport(ce);o.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),z.viewport(o),Y.updateMatrices(j,ce),i=Y.getFrustum(),y(C,w,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===Jn&&_(Y,w),Y.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(D,T,L)};function _(A,C){const w=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Tr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,w,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,w,p,x,null)}function g(A,C,w,D){let T=null;const L=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)T=L;else if(T=w.isPointLight===!0?l:s,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=T.uuid,U=C.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let O=V[U];O===void 0&&(O=T.clone(),V[U]=O),T=O}if(T.visible=C.visible,T.wireframe=C.wireframe,D===Jn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,w.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=t.properties.get(T);z.light=w}return T}function y(A,C,w,D,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Jn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const U=e.update(A),V=A.material;if(Array.isArray(V)){const O=U.groups;for(let X=0,j=O.length;X<j;X++){const Y=O[X],ie=V[Y.materialIndex];if(ie&&ie.visible){const ee=g(A,ie,D,T);t.renderBufferDirect(w,null,U,ee,A,Y)}}}else if(V.visible){const O=g(A,V,D,T);t.renderBufferDirect(w,null,U,O,A,null)}}const z=A.children;for(let U=0,V=z.length;U<V;U++)y(z[U],C,w,D,T)}}function qA(t,e,n){const i=n.isWebGL2;function r(){let H=!1;const Te=new gt;let ve=null;const ue=new gt(0,0,0,0);return{setMask:function(be){ve!==be&&!H&&(t.colorMask(be,be,be,be),ve=be)},setLocked:function(be){H=be},setClear:function(be,Be,tt,Mt,pn){pn===!0&&(be*=Mt,Be*=Mt,tt*=Mt),Te.set(be,Be,tt,Mt),ue.equals(Te)===!1&&(t.clearColor(be,Be,tt,Mt),ue.copy(Te))},reset:function(){H=!1,ve=null,ue.set(-1,0,0,0)}}}function a(){let H=!1,Te=null,ve=null,ue=null;return{setTest:function(be){be?ye(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(be){Te!==be&&!H&&(t.depthMask(be),Te=be)},setFunc:function(be){if(ve!==be){switch(be){case aE:t.depthFunc(t.NEVER);break;case sE:t.depthFunc(t.ALWAYS);break;case oE:t.depthFunc(t.LESS);break;case Go:t.depthFunc(t.LEQUAL);break;case lE:t.depthFunc(t.EQUAL);break;case cE:t.depthFunc(t.GEQUAL);break;case uE:t.depthFunc(t.GREATER);break;case fE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=be}},setLocked:function(be){H=be},setClear:function(be){ue!==be&&(t.clearDepth(be),ue=be)},reset:function(){H=!1,Te=null,ve=null,ue=null}}}function o(){let H=!1,Te=null,ve=null,ue=null,be=null,Be=null,tt=null,Mt=null,pn=null;return{setTest:function(ut){H||(ut?ye(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(ut){Te!==ut&&!H&&(t.stencilMask(ut),Te=ut)},setFunc:function(ut,Yt,On){(ve!==ut||ue!==Yt||be!==On)&&(t.stencilFunc(ut,Yt,On),ve=ut,ue=Yt,be=On)},setOp:function(ut,Yt,On){(Be!==ut||tt!==Yt||Mt!==On)&&(t.stencilOp(ut,Yt,On),Be=ut,tt=Yt,Mt=On)},setLocked:function(ut){H=ut},setClear:function(ut){pn!==ut&&(t.clearStencil(ut),pn=ut)},reset:function(){H=!1,Te=null,ve=null,ue=null,be=null,Be=null,tt=null,Mt=null,pn=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},E=new WeakMap,x=[],m=null,h=!1,_=null,g=null,y=null,A=null,C=null,w=null,D=null,T=new Qe(0,0,0),L=0,z=!1,U=null,V=null,O=null,X=null,j=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ee=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ie=ee>=1):ce.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ie=ee>=2);let B=null,Z={};const me=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),G=new gt().fromArray(me),se=new gt().fromArray(Ee);function oe(H,Te,ve,ue){const be=new Uint8Array(4),Be=t.createTexture();t.bindTexture(H,Be),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<ve;tt++)i&&(H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY)?t.texImage3D(Te,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Te+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Be}const de={};de[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(de[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(t.DEPTH_TEST),l.setFunc(Go),J(!1),te(Bd),ye(t.CULL_FACE),F(Fi);function ye(H){d[H]!==!0&&(t.enable(H),d[H]=!0)}function Ne(H){d[H]!==!1&&(t.disable(H),d[H]=!1)}function _e(H,Te){return p[H]!==Te?(t.bindFramebuffer(H,Te),p[H]=Te,i&&(H===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Te),H===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Te)),!0):!1}function S(H,Te){let ve=x,ue=!1;if(H)if(ve=E.get(Te),ve===void 0&&(ve=[],E.set(Te,ve)),H.isWebGLMultipleRenderTargets){const be=H.texture;if(ve.length!==be.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,tt=be.length;Be<tt;Be++)ve[Be]=t.COLOR_ATTACHMENT0+Be;ve.length=be.length,ue=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,ue=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,ue=!0);ue&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function M(H){return m!==H?(t.useProgram(H),m=H,!0):!1}const b={[ur]:t.FUNC_ADD,[Wy]:t.FUNC_SUBTRACT,[Xy]:t.FUNC_REVERSE_SUBTRACT};if(i)b[Vd]=t.MIN,b[Wd]=t.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(b[Vd]=H.MIN_EXT,b[Wd]=H.MAX_EXT)}const P={[Yy]:t.ZERO,[$y]:t.ONE,[jy]:t.SRC_COLOR,[Zc]:t.SRC_ALPHA,[eE]:t.SRC_ALPHA_SATURATE,[Jy]:t.DST_COLOR,[Ky]:t.DST_ALPHA,[qy]:t.ONE_MINUS_SRC_COLOR,[Jc]:t.ONE_MINUS_SRC_ALPHA,[Qy]:t.ONE_MINUS_DST_COLOR,[Zy]:t.ONE_MINUS_DST_ALPHA,[tE]:t.CONSTANT_COLOR,[nE]:t.ONE_MINUS_CONSTANT_COLOR,[iE]:t.CONSTANT_ALPHA,[rE]:t.ONE_MINUS_CONSTANT_ALPHA};function F(H,Te,ve,ue,be,Be,tt,Mt,pn,ut){if(H===Fi){h===!0&&(Ne(t.BLEND),h=!1);return}if(h===!1&&(ye(t.BLEND),h=!0),H!==Vy){if(H!==_||ut!==z){if((g!==ur||C!==ur)&&(t.blendEquation(t.FUNC_ADD),g=ur,C=ur),ut)switch(H){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zd:t.blendFunc(t.ONE,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,A=null,w=null,D=null,T.set(0,0,0),L=0,_=H,z=ut}return}be=be||Te,Be=Be||ve,tt=tt||ue,(Te!==g||be!==C)&&(t.blendEquationSeparate(b[Te],b[be]),g=Te,C=be),(ve!==y||ue!==A||Be!==w||tt!==D)&&(t.blendFuncSeparate(P[ve],P[ue],P[Be],P[tt]),y=ve,A=ue,w=Be,D=tt),(Mt.equals(T)===!1||pn!==L)&&(t.blendColor(Mt.r,Mt.g,Mt.b,pn),T.copy(Mt),L=pn),_=H,z=!1}function q(H,Te){H.side===ei?Ne(t.CULL_FACE):ye(t.CULL_FACE);let ve=H.side===rn;Te&&(ve=!ve),J(ve),H.blending===la&&H.transparent===!1?F(Fi):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),s.setMask(H.colorWrite);const ue=H.stencilWrite;c.setTest(ue),ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),he(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(H){U!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),U=H)}function te(H){H!==zy?(ye(t.CULL_FACE),H!==V&&(H===Bd?t.cullFace(t.BACK):H===Hy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),V=H}function fe(H){H!==O&&(ie&&t.lineWidth(H),O=H)}function he(H,Te,ve){H?(ye(t.POLYGON_OFFSET_FILL),(X!==Te||j!==ve)&&(t.polygonOffset(Te,ve),X=Te,j=ve)):Ne(t.POLYGON_OFFSET_FILL)}function we(H){H?ye(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function R(H){H===void 0&&(H=t.TEXTURE0+Y-1),B!==H&&(t.activeTexture(H),B=H)}function v(H,Te,ve){ve===void 0&&(B===null?ve=t.TEXTURE0+Y-1:ve=B);let ue=Z[ve];ue===void 0&&(ue={type:void 0,texture:void 0},Z[ve]=ue),(ue.type!==H||ue.texture!==Te)&&(B!==ve&&(t.activeTexture(ve),B=ve),t.bindTexture(H,Te||de[H]),ue.type=H,ue.texture=Te)}function N(){const H=Z[B];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(H){G.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),G.copy(H))}function Fe(H){se.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),se.copy(H))}function Ue(H,Te){let ve=f.get(Te);ve===void 0&&(ve=new WeakMap,f.set(Te,ve));let ue=ve.get(H);ue===void 0&&(ue=t.getUniformBlockIndex(Te,H.name),ve.set(H,ue))}function Ie(H,Te){const ue=f.get(Te).get(H);u.get(Te)!==ue&&(t.uniformBlockBinding(Te,ue,H.__bindingPointIndex),u.set(Te,ue))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},B=null,Z={},p={},E=new WeakMap,x=[],m=null,h=!1,_=null,g=null,y=null,A=null,C=null,w=null,D=null,T=new Qe(0,0,0),L=0,z=!1,U=null,V=null,O=null,X=null,j=null,G.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:ye,disable:Ne,bindFramebuffer:_e,drawBuffers:S,useProgram:M,setBlending:F,setMaterial:q,setFlipSided:J,setCullFace:te,setLineWidth:fe,setPolygonOffset:he,setScissorTest:we,activeTexture:R,bindTexture:v,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:pe,texImage3D:De,updateUBOMapping:Ue,uniformBlockBinding:Ie,texStorage2D:k,texStorage3D:xe,texSubImage2D:le,texSubImage3D:Me,compressedTexSubImage2D:ge,compressedTexSubImage3D:Se,scissor:Re,viewport:Fe,reset:et}}function KA(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let x;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return h?new OffscreenCanvas(R,v):vs("canvas")}function g(R,v,N,K){let Q=1;if((R.width>K||R.height>K)&&(Q=K/Math.max(R.width,R.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=v?$o:Math.floor,Me=le(Q*R.width),ge=le(Q*R.height);x===void 0&&(x=_(Me,ge));const Se=N?_(Me,ge):x;return Se.width=Me,Se.height=ge,Se.getContext("2d").drawImage(R,0,0,Me,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+ge+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return ru(R.width)&&ru(R.height)}function A(R){return s?!1:R.wrapS!==Ln||R.wrapT!==Ln||R.minFilter!==Jt&&R.minFilter!==vn}function C(R,v){return R.generateMipmaps&&v&&R.minFilter!==Jt&&R.minFilter!==vn}function w(R){t.generateMipmap(R)}function D(R,v,N,K,Q=!1){if(s===!1)return v;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=v;if(v===t.RED&&(N===t.FLOAT&&(le=t.R32F),N===t.HALF_FLOAT&&(le=t.R16F),N===t.UNSIGNED_BYTE&&(le=t.R8)),v===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(le=t.R8UI),N===t.UNSIGNED_SHORT&&(le=t.R16UI),N===t.UNSIGNED_INT&&(le=t.R32UI),N===t.BYTE&&(le=t.R8I),N===t.SHORT&&(le=t.R16I),N===t.INT&&(le=t.R32I)),v===t.RG&&(N===t.FLOAT&&(le=t.RG32F),N===t.HALF_FLOAT&&(le=t.RG16F),N===t.UNSIGNED_BYTE&&(le=t.RG8)),v===t.RGBA){const Me=Q?Vo:lt.getTransfer(K);N===t.FLOAT&&(le=t.RGBA32F),N===t.HALF_FLOAT&&(le=t.RGBA16F),N===t.UNSIGNED_BYTE&&(le=Me===ft?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function T(R,v,N){return C(R,N)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==vn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function L(R){return R===Jt||R===Xd||R===Xl?t.NEAREST:t.LINEAR}function z(R){const v=R.target;v.removeEventListener("dispose",z),V(v),v.isVideoTexture&&E.delete(v)}function U(R){const v=R.target;v.removeEventListener("dispose",U),X(v)}function V(R){const v=i.get(R);if(v.__webglInit===void 0)return;const N=R.source,K=m.get(N);if(K){const Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(R),Object.keys(K).length===0&&m.delete(N)}i.remove(R)}function O(R){const v=i.get(R);t.deleteTexture(v.__webglTexture);const N=R.source,K=m.get(N);delete K[v.__cacheKey],o.memory.textures--}function X(R){const v=R.texture,N=i.get(R),K=i.get(v);if(K.__webglTexture!==void 0&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let le=0;le<N.__webglFramebuffer[Q].length;le++)t.deleteFramebuffer(N.__webglFramebuffer[Q][le]);else t.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)t.deleteFramebuffer(N.__webglFramebuffer[Q]);else t.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,le=v.length;Q<le;Q++){const Me=i.get(v[Q]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(v[Q])}i.remove(v),i.remove(R)}let j=0;function Y(){j=0}function ie(){const R=j;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),j+=1,R}function ee(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ce(R,v){const N=i.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,R,v);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+v)}function B(R,v){const N=i.get(R);if(R.version>0&&N.__version!==R.version){ye(N,R,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+v)}function Z(R,v){const N=i.get(R);if(R.version>0&&N.__version!==R.version){ye(N,R,v);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+v)}function me(R,v){const N=i.get(R);if(R.version>0&&N.__version!==R.version){Ne(N,R,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+v)}const Ee={[tu]:t.REPEAT,[Ln]:t.CLAMP_TO_EDGE,[nu]:t.MIRRORED_REPEAT},G={[Jt]:t.NEAREST,[Xd]:t.NEAREST_MIPMAP_NEAREST,[Xl]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[xE]:t.LINEAR_MIPMAP_NEAREST,[ms]:t.LINEAR_MIPMAP_LINEAR},se={[IE]:t.NEVER,[BE]:t.ALWAYS,[NE]:t.LESS,[OE]:t.LEQUAL,[DE]:t.EQUAL,[kE]:t.GEQUAL,[UE]:t.GREATER,[FE]:t.NOTEQUAL};function oe(R,v,N){if(N?(t.texParameteri(R,t.TEXTURE_WRAP_S,Ee[v.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Ee[v.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Ee[v.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,G[v.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,G[v.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(v.wrapS!==Ln||v.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,L(v.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,L(v.minFilter)),v.minFilter!==Jt&&v.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Jt||v.minFilter!==Xl&&v.minFilter!==ms||v.type===Ni&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===gs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(t.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function de(R,v){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",z));const K=v.source;let Q=m.get(K);Q===void 0&&(Q={},m.set(K,Q));const le=ee(v);if(le!==R.__cacheKey){Q[le]===void 0&&(Q[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[le].usedTimes++;const Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&O(v)),R.__cacheKey=le,R.__webglTexture=Q[le].texture}return N}function ye(R,v,N){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const Q=de(R,v),le=v.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+N);const Me=i.get(le);if(le.version!==Me.__version||Q===!0){n.activeTexture(t.TEXTURE0+N);const ge=lt.getPrimaries(lt.workingColorSpace),Se=v.colorSpace===yn?null:lt.getPrimaries(v.colorSpace),k=v.colorSpace===yn||ge===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const xe=A(v)&&y(v.image)===!1;let pe=g(v.image,xe,!1,u);pe=we(v,pe);const De=y(pe)||s,Re=a.convert(v.format,v.colorSpace);let Fe=a.convert(v.type),Ue=D(v.internalFormat,Re,Fe,v.colorSpace,v.isVideoTexture);oe(K,v,De);let Ie;const et=v.mipmaps,H=s&&v.isVideoTexture!==!0,Te=Me.__version===void 0||Q===!0,ve=T(v,pe,De);if(v.isDepthTexture)Ue=t.DEPTH_COMPONENT,s?v.type===Ni?Ue=t.DEPTH_COMPONENT32F:v.type===Ii?Ue=t.DEPTH_COMPONENT24:v.type===yr?Ue=t.DEPTH24_STENCIL8:Ue=t.DEPTH_COMPONENT16:v.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Er&&Ue===t.DEPTH_COMPONENT&&v.type!==rf&&v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ii,Fe=a.convert(v.type)),v.format===va&&Ue===t.DEPTH_COMPONENT&&(Ue=t.DEPTH_STENCIL,v.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=yr,Fe=a.convert(v.type))),Te&&(H?n.texStorage2D(t.TEXTURE_2D,1,Ue,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Re,Fe,null));else if(v.isDataTexture)if(et.length>0&&De){H&&Te&&n.texStorage2D(t.TEXTURE_2D,ve,Ue,et[0].width,et[0].height);for(let ue=0,be=et.length;ue<be;ue++)Ie=et[ue],H?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ie.width,Ie.height,Re,Fe,Ie.data):n.texImage2D(t.TEXTURE_2D,ue,Ue,Ie.width,Ie.height,0,Re,Fe,Ie.data);v.generateMipmaps=!1}else H?(Te&&n.texStorage2D(t.TEXTURE_2D,ve,Ue,pe.width,pe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Re,Fe,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Re,Fe,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){H&&Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ue,et[0].width,et[0].height,pe.depth);for(let ue=0,be=et.length;ue<be;ue++)Ie=et[ue],v.format!==Pn?Re!==null?H?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ie.width,Ie.height,pe.depth,Re,Ie.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Ue,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ie.width,Ie.height,pe.depth,Re,Fe,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Ue,Ie.width,Ie.height,pe.depth,0,Re,Fe,Ie.data)}else{H&&Te&&n.texStorage2D(t.TEXTURE_2D,ve,Ue,et[0].width,et[0].height);for(let ue=0,be=et.length;ue<be;ue++)Ie=et[ue],v.format!==Pn?Re!==null?H?n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Ie.width,Ie.height,Re,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Ue,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ie.width,Ie.height,Re,Fe,Ie.data):n.texImage2D(t.TEXTURE_2D,ue,Ue,Ie.width,Ie.height,0,Re,Fe,Ie.data)}else if(v.isDataArrayTexture)H?(Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ue,pe.width,pe.height,pe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,Fe,pe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,pe.width,pe.height,pe.depth,0,Re,Fe,pe.data);else if(v.isData3DTexture)H?(Te&&n.texStorage3D(t.TEXTURE_3D,ve,Ue,pe.width,pe.height,pe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,Fe,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,pe.width,pe.height,pe.depth,0,Re,Fe,pe.data);else if(v.isFramebufferTexture){if(Te)if(H)n.texStorage2D(t.TEXTURE_2D,ve,Ue,pe.width,pe.height);else{let ue=pe.width,be=pe.height;for(let Be=0;Be<ve;Be++)n.texImage2D(t.TEXTURE_2D,Be,Ue,ue,be,0,Re,Fe,null),ue>>=1,be>>=1}}else if(et.length>0&&De){H&&Te&&n.texStorage2D(t.TEXTURE_2D,ve,Ue,et[0].width,et[0].height);for(let ue=0,be=et.length;ue<be;ue++)Ie=et[ue],H?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Re,Fe,Ie):n.texImage2D(t.TEXTURE_2D,ue,Ue,Re,Fe,Ie);v.generateMipmaps=!1}else H?(Te&&n.texStorage2D(t.TEXTURE_2D,ve,Ue,pe.width,pe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Fe,pe)):n.texImage2D(t.TEXTURE_2D,0,Ue,Re,Fe,pe);C(v,De)&&w(K),Me.__version=le.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ne(R,v,N){if(v.image.length!==6)return;const K=de(R,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+N);const le=i.get(Q);if(Q.version!==le.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const Me=lt.getPrimaries(lt.workingColorSpace),ge=v.colorSpace===yn?null:lt.getPrimaries(v.colorSpace),Se=v.colorSpace===yn||Me===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const k=v.isCompressedTexture||v.image[0].isCompressedTexture,xe=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let ue=0;ue<6;ue++)!k&&!xe?pe[ue]=g(v.image[ue],!1,!0,c):pe[ue]=xe?v.image[ue].image:v.image[ue],pe[ue]=we(v,pe[ue]);const De=pe[0],Re=y(De)||s,Fe=a.convert(v.format,v.colorSpace),Ue=a.convert(v.type),Ie=D(v.internalFormat,Fe,Ue,v.colorSpace),et=s&&v.isVideoTexture!==!0,H=le.__version===void 0||K===!0;let Te=T(v,De,Re);oe(t.TEXTURE_CUBE_MAP,v,Re);let ve;if(k){et&&H&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ie,De.width,De.height);for(let ue=0;ue<6;ue++){ve=pe[ue].mipmaps;for(let be=0;be<ve.length;be++){const Be=ve[be];v.format!==Pn?Fe!==null?et?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,Be.width,Be.height,Fe,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,Ie,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,Be.width,Be.height,Fe,Ue,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,Ie,Be.width,Be.height,0,Fe,Ue,Be.data)}}}else{ve=v.mipmaps,et&&H&&(ve.length>0&&Te++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ie,pe[0].width,pe[0].height));for(let ue=0;ue<6;ue++)if(xe){et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,pe[ue].width,pe[ue].height,Fe,Ue,pe[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ie,pe[ue].width,pe[ue].height,0,Fe,Ue,pe[ue].data);for(let be=0;be<ve.length;be++){const tt=ve[be].image[ue].image;et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,tt.width,tt.height,Fe,Ue,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,Ie,tt.width,tt.height,0,Fe,Ue,tt.data)}}else{et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Fe,Ue,pe[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ie,Fe,Ue,pe[ue]);for(let be=0;be<ve.length;be++){const Be=ve[be];et?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,Fe,Ue,Be.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,Ie,Fe,Ue,Be.image[ue])}}}C(v,Re)&&w(t.TEXTURE_CUBE_MAP),le.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _e(R,v,N,K,Q,le){const Me=a.convert(N.format,N.colorSpace),ge=a.convert(N.type),Se=D(N.internalFormat,Me,ge,N.colorSpace);if(!i.get(v).__hasExternalTextures){const xe=Math.max(1,v.width>>le),pe=Math.max(1,v.height>>le);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,le,Se,xe,pe,v.depth,0,Me,ge,null):n.texImage2D(Q,le,Se,xe,pe,0,Me,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),fe(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Q,i.get(N).__webglTexture,0,te(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Q,i.get(N).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function S(R,v,N){if(t.bindRenderbuffer(t.RENDERBUFFER,R),v.depthBuffer&&!v.stencilBuffer){let K=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(N||fe(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ni?K=t.DEPTH_COMPONENT32F:Q.type===Ii&&(K=t.DEPTH_COMPONENT24));const le=te(v);fe(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,K,v.width,v.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,K,v.width,v.height)}else t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(v.depthBuffer&&v.stencilBuffer){const K=te(v);N&&fe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,v.width,v.height):fe(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<K.length;Q++){const le=K[Q],Me=a.convert(le.format,le.colorSpace),ge=a.convert(le.type),Se=D(le.internalFormat,Me,ge,le.colorSpace),k=te(v);N&&fe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,Se,v.width,v.height):fe(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,Se,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Se,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function M(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,Q=te(v);if(v.depthTexture.format===Er)fe(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(v.depthTexture.format===va)fe(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function b(R){const v=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");M(v.__webglFramebuffer,R)}else if(N){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=t.createRenderbuffer(),S(v.__webglDepthbuffer[K],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),S(v.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(R,v,N){const K=i.get(R);v!==void 0&&_e(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&b(R)}function F(R){const v=R.texture,N=i.get(R),K=i.get(v);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,o.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,Me=y(R)||s;if(Q){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(s&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ge]=[];for(let Se=0;Se<v.mipmaps.length;Se++)N.__webglFramebuffer[ge][Se]=t.createFramebuffer()}else N.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)N.__webglFramebuffer[ge]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const ge=R.texture;for(let Se=0,k=ge.length;Se<k;Se++){const xe=i.get(ge[Se]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&fe(R)===!1){const ge=le?v:[v];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Se=0;Se<ge.length;Se++){const k=ge[Se];N.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Se]);const xe=a.convert(k.format,k.colorSpace),pe=a.convert(k.type),De=D(k.internalFormat,xe,pe,k.colorSpace,R.isXRRenderTarget===!0),Re=te(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,De,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,N.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),S(N.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),oe(t.TEXTURE_CUBE_MAP,v,Me);for(let ge=0;ge<6;ge++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)_e(N.__webglFramebuffer[ge][Se],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else _e(N.__webglFramebuffer[ge],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);C(v,Me)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ge=R.texture;for(let Se=0,k=ge.length;Se<k;Se++){const xe=ge[Se],pe=i.get(xe);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),oe(t.TEXTURE_2D,xe,Me),_e(N.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),C(xe,Me)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?ge=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,K.__webglTexture),oe(ge,v,Me),s&&v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)_e(N.__webglFramebuffer[Se],R,v,t.COLOR_ATTACHMENT0,ge,Se);else _e(N.__webglFramebuffer,R,v,t.COLOR_ATTACHMENT0,ge,0);C(v,Me)&&w(ge),n.unbindTexture()}R.depthBuffer&&b(R)}function q(R){const v=y(R)||s,N=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let K=0,Q=N.length;K<Q;K++){const le=N[K];if(C(le,v)){const Me=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(le).__webglTexture;n.bindTexture(Me,ge),w(Me),n.unbindTexture()}}}function J(R){if(s&&R.samples>0&&fe(R)===!1){const v=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],N=R.width,K=R.height;let Q=t.COLOR_BUFFER_BIT;const le=[],Me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(R),Se=R.isWebGLMultipleRenderTargets===!0;if(Se)for(let k=0;k<v.length;k++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let k=0;k<v.length;k++){le.push(t.COLOR_ATTACHMENT0+k),R.depthBuffer&&le.push(Me);const xe=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(xe===!1&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),Se&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[k]),xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),Se){const pe=i.get(v[k]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,N,K,0,0,N,K,Q,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let k=0;k<v.length;k++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,ge.__webglColorRenderbuffer[k]);const xe=i.get(v[k]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function te(R){return Math.min(f,R.samples)}function fe(R){const v=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function he(R){const v=o.render.frame;E.get(R)!==v&&(E.set(R,v),R.update())}function we(R,v){const N=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===iu||N!==ci&&N!==yn&&(lt.getTransfer(N)===ft?s===!1?e.has("EXT_sRGB")===!0&&K===Pn?(R.format=iu,R.minFilter=vn,R.generateMipmaps=!1):v=Jg.sRGBToLinear(v):(K!==Pn||Q!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=ie,this.resetTextureUnits=Y,this.setTexture2D=ce,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=me,this.rebindTextures=P,this.setupRenderTarget=F,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fe}function ZA(t,e,n){const i=n.isWebGL2;function r(a,o=yn){let s;const l=lt.getTransfer(o);if(a===Bi)return t.UNSIGNED_BYTE;if(a===Wg)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Xg)return t.UNSIGNED_SHORT_5_5_5_1;if(a===yE)return t.BYTE;if(a===EE)return t.SHORT;if(a===rf)return t.UNSIGNED_SHORT;if(a===Vg)return t.INT;if(a===Ii)return t.UNSIGNED_INT;if(a===Ni)return t.FLOAT;if(a===gs)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===bE)return t.ALPHA;if(a===Pn)return t.RGBA;if(a===ME)return t.LUMINANCE;if(a===SE)return t.LUMINANCE_ALPHA;if(a===Er)return t.DEPTH_COMPONENT;if(a===va)return t.DEPTH_STENCIL;if(a===iu)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===TE)return t.RED;if(a===Yg)return t.RED_INTEGER;if(a===AE)return t.RG;if(a===$g)return t.RG_INTEGER;if(a===jg)return t.RGBA_INTEGER;if(a===Yl||a===$l||a===jl||a===ql)if(l===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yd||a===$d||a===jd||a===qd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wE)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Kd||a===Zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Kd)return l===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Zd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Jd||a===Qd||a===eh||a===th||a===nh||a===ih||a===rh||a===ah||a===sh||a===oh||a===lh||a===ch||a===uh||a===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Jd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Qd)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===eh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===th)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===nh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ih)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ah)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===sh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===oh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===lh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ch)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===uh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fh)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Kl||a===dh||a===hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Kl)return l===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===dh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===CE||a===ph||a===mh||a===gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Kl)return s.COMPRESSED_RED_RGTC1_EXT;if(a===ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===yr?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class JA extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ho extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QA={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,E=.005;c.inputState.pinching&&d>p+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(QA)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ew extends an{constructor(e,n,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:Er,u!==Er&&u!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Er&&(i=Ii),i===void 0&&u===va&&(i=yr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class tw extends Lr{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,E=null;const x=n.getContextAttributes();let m=null,h=null;const _=[],g=[],y=new fn;y.layers.enable(1),y.viewport=new gt;const A=new fn;A.layers.enable(2),A.viewport=new gt;const C=[y,A],w=new JA;w.layers.enable(1),w.layers.enable(2);let D=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=_[B];return Z===void 0&&(Z=new xc,_[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=_[B];return Z===void 0&&(Z=new xc,_[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=_[B];return Z===void 0&&(Z=new xc,_[B]=Z),Z.getHandSpace()};function L(B){const Z=g.indexOf(B.inputSource);if(Z===-1)return;const me=_[Z];me!==void 0&&(me.update(B.inputSource,B.frame,c||o),me.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let B=0;B<_.length;B++){const Z=g[B];Z!==null&&(g[B]=null,_[B].disconnect(Z))}D=null,T=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),h=new Tr(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,me=null,Ee=null;x.depth&&(Ee=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?va:Er,me=x.stencil?yr:Ii);const G={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:a};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(G),r.updateRenderState({layers:[d]}),h=new Tr(d.textureWidth,d.textureHeight,{format:Pn,type:Bi,depthTexture:new ew(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const se=e.properties.get(h);se.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(B){for(let Z=0;Z<B.removed.length;Z++){const me=B.removed[Z],Ee=g.indexOf(me);Ee>=0&&(g[Ee]=null,_[Ee].disconnect(me))}for(let Z=0;Z<B.added.length;Z++){const me=B.added[Z];let Ee=g.indexOf(me);if(Ee===-1){for(let se=0;se<_.length;se++)if(se>=g.length){g.push(me),Ee=se;break}else if(g[se]===null){g[se]=me,Ee=se;break}if(Ee===-1)break}const G=_[Ee];G&&G.connect(me)}}const V=new W,O=new W;function X(B,Z,me){V.setFromMatrixPosition(Z.matrixWorld),O.setFromMatrixPosition(me.matrixWorld);const Ee=V.distanceTo(O),G=Z.projectionMatrix.elements,se=me.projectionMatrix.elements,oe=G[14]/(G[10]-1),de=G[14]/(G[10]+1),ye=(G[9]+1)/G[5],Ne=(G[9]-1)/G[5],_e=(G[8]-1)/G[0],S=(se[8]+1)/se[0],M=oe*_e,b=oe*S,P=Ee/(-_e+S),F=P*-_e;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(F),B.translateZ(P),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const q=oe+P,J=de+P,te=M-F,fe=b+(Ee-F),he=ye*de/J*q,we=Ne*de/J*q;B.projectionMatrix.makePerspective(te,fe,he,we,q,J),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function j(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;w.near=A.near=y.near=B.near,w.far=A.far=y.far=B.far,(D!==w.near||T!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,T=w.far);const Z=B.parent,me=w.cameras;j(w,Z);for(let Ee=0;Ee<me.length;Ee++)j(me[Ee],Z);me.length===2?X(w,y,A):w.projectionMatrix.copy(y.projectionMatrix),Y(B,w,Z)};function Y(B,Z,me){me===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(me.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=_s*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let ie=null;function ee(B,Z){if(u=Z.getViewerPose(c||o),E=Z,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Ee=!1;me.length!==w.cameras.length&&(w.cameras.length=0,Ee=!0);for(let G=0;G<me.length;G++){const se=me[G];let oe=null;if(p!==null)oe=p.getViewport(se);else{const ye=f.getViewSubImage(d,se);oe=ye.viewport,G===0&&(e.setRenderTargetTextures(h,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(h))}let de=C[G];de===void 0&&(de=new fn,de.layers.enable(G),de.viewport=new gt,C[G]=de),de.matrix.fromArray(se.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(se.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(oe.x,oe.y,oe.width,oe.height),G===0&&(w.matrix.copy(de.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ee===!0&&w.cameras.push(de)}}for(let me=0;me<_.length;me++){const Ee=g[me],G=_[me];Ee!==null&&G!==void 0&&G.update(Ee,Z,c||o)}ie&&ie(B,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),E=null}const ce=new l_;ce.setAnimationLoop(ee),this.setAnimationLoop=function(B){ie=B},this.dispose=function(){}}}function nw(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,a_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,g,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),E(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,_,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function E(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iw(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function c(_,g){let y=r[_.id];y===void 0&&(E(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const A=g.program;i.updateUBOMapping(_,A);const C=e.render.frame;a[_.id]!==C&&(d(_),a[_.id]=C)}function u(_){const g=f();_.__bindingPointIndex=g;const y=t.createBuffer(),A=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function f(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],y=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=y.length;C<w;C++){const D=y[C];if(p(D,C,A)===!0){const T=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let U=0;U<L.length;U++){const V=L[U],O=x(V);typeof V=="number"?(D.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,T+z,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=V.elements[0],D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=V.elements[0],D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=V.elements[0]):(V.toArray(D.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,T,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,y){const A=_.value;if(y[g]===void 0){if(typeof A=="number")y[g]=A;else{const C=Array.isArray(A)?A:[A],w=[];for(let D=0;D<C.length;D++)w.push(C[D].clone());y[g]=w}return!0}else if(typeof A=="number"){if(y[g]!==A)return y[g]=A,!0}else{const C=Array.isArray(y[g])?y[g]:[y[g]],w=Array.isArray(A)?A:[A];for(let D=0;D<C.length;D++){const T=C[D];if(T.equals(w[D])===!1)return T.copy(w[D]),!0}}return!1}function E(_){const g=_.uniforms;let y=0;const A=16;let C=0;for(let w=0,D=g.length;w<D;w++){const T=g[w],L={boundary:0,storage:0},z=Array.isArray(T.value)?T.value:[T.value];for(let U=0,V=z.length;U<V;U++){const O=z[U],X=x(O);L.boundary+=X.boundary,L.storage+=X.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,w>0){C=y%A;const U=A-C;C!==0&&U-L.boundary<0&&(y+=A-C,T.__offset=y)}y+=L.storage}return C=y%A,C>0&&(y+=A-C),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class p_{constructor(e={}){const{canvas:n=tb(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),E=new Int32Array(4);let x=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;const g=this;let y=!1,A=0,C=0,w=null,D=-1,T=null;const L=new gt,z=new gt;let U=null;const V=new Qe(0);let O=0,X=n.width,j=n.height,Y=1,ie=null,ee=null;const ce=new gt(0,0,X,j),B=new gt(0,0,X,j);let Z=!1;const me=new cf;let Ee=!1,G=!1,se=null;const oe=new At,de=new Xe,ye=new W,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return w===null?Y:1}let S=i;function M(I,$){for(let ne=0;ne<I.length;ne++){const re=I[ne],ae=n.getContext(re,$);if(ae!==null)return ae}return null}try{const I={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",Te,!1),S===null){const $=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&$.shift(),S=M($,I),S===null)throw M($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let b,P,F,q,J,te,fe,he,we,R,v,N,K,Q,le,Me,ge,Se,k,xe,pe,De,Re,Fe;function Ue(){b=new hT(S),P=new oT(S,b,e),b.init(P),De=new ZA(S,b,P),F=new qA(S,b,P),q=new gT(S),J=new OA,te=new KA(S,b,F,J,P,De,q),fe=new cT(g),he=new dT(g),we=new Ab(S,P),Re=new aT(S,b,we,P),R=new pT(S,we,q,Re),v=new yT(S,R,we,q),k=new xT(S,P,te),Me=new lT(J),N=new DA(g,fe,he,b,P,Re,Me),K=new nw(g,J),Q=new FA,le=new VA(b,P),Se=new rT(g,fe,he,F,v,d,l),ge=new jA(g,v,P),Fe=new iw(S,q,P,F),xe=new sT(S,b,q,P),pe=new mT(S,b,q,P),q.programs=N.programs,g.capabilities=P,g.extensions=b,g.properties=J,g.renderLists=Q,g.shadowMap=ge,g.state=F,g.info=q}Ue();const Ie=new tw(g,S);this.xr=Ie,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const I=b.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=b.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(X,j,!1))},this.getSize=function(I){return I.set(X,j)},this.setSize=function(I,$,ne=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=I,j=$,n.width=Math.floor(I*Y),n.height=Math.floor($*Y),ne===!0&&(n.style.width=I+"px",n.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(X*Y,j*Y).floor()},this.setDrawingBufferSize=function(I,$,ne){X=I,j=$,Y=ne,n.width=Math.floor(I*ne),n.height=Math.floor($*ne),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(ce)},this.setViewport=function(I,$,ne,re){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,$,ne,re),F.viewport(L.copy(ce).multiplyScalar(Y).floor())},this.getScissor=function(I){return I.copy(B)},this.setScissor=function(I,$,ne,re){I.isVector4?B.set(I.x,I.y,I.z,I.w):B.set(I,$,ne,re),F.scissor(z.copy(B).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(I){F.setScissorTest(Z=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){ee=I},this.getClearColor=function(I){return I.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(I=!0,$=!0,ne=!0){let re=0;if(I){let ae=!1;if(w!==null){const Le=w.texture.format;ae=Le===jg||Le===$g||Le===Yg}if(ae){const Le=w.texture.type,ke=Le===Bi||Le===Ii||Le===rf||Le===yr||Le===Wg||Le===Xg,He=Se.getClearColor(),Ve=Se.getClearAlpha(),Ke=He.r,Ye=He.g,$e=He.b;ke?(p[0]=Ke,p[1]=Ye,p[2]=$e,p[3]=Ve,S.clearBufferuiv(S.COLOR,0,p)):(E[0]=Ke,E[1]=Ye,E[2]=$e,E[3]=Ve,S.clearBufferiv(S.COLOR,0,E))}else re|=S.COLOR_BUFFER_BIT}$&&(re|=S.DEPTH_BUFFER_BIT),ne&&(re|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Q.dispose(),le.dispose(),J.dispose(),fe.dispose(),he.dispose(),v.dispose(),Re.dispose(),Fe.dispose(),N.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",pn),Ie.removeEventListener("sessionend",ut),se&&(se.dispose(),se=null),Yt.stop()};function et(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const I=q.autoReset,$=ge.enabled,ne=ge.autoUpdate,re=ge.needsUpdate,ae=ge.type;Ue(),q.autoReset=I,ge.enabled=$,ge.autoUpdate=ne,ge.needsUpdate=re,ge.type=ae}function Te(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ve(I){const $=I.target;$.removeEventListener("dispose",ve),ue($)}function ue(I){be(I),J.remove(I)}function be(I){const $=J.get(I).programs;$!==void 0&&($.forEach(function(ne){N.releaseProgram(ne)}),I.isShaderMaterial&&N.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ne,re,ae,Le){$===null&&($=Ne);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,He=y1(I,$,ne,re,ae);F.setMaterial(re,ke);let Ve=ne.index,Ke=1;if(re.wireframe===!0){if(Ve=R.getWireframeAttribute(ne),Ve===void 0)return;Ke=2}const Ye=ne.drawRange,$e=ne.attributes.position;let bt=Ye.start*Ke,on=(Ye.start+Ye.count)*Ke;Le!==null&&(bt=Math.max(bt,Le.start*Ke),on=Math.min(on,(Le.start+Le.count)*Ke)),Ve!==null?(bt=Math.max(bt,0),on=Math.min(on,Ve.count)):$e!=null&&(bt=Math.max(bt,0),on=Math.min(on,$e.count));const Dt=on-bt;if(Dt<0||Dt===1/0)return;Re.setup(ae,re,He,ne,Ve);let Xn,yt=xe;if(Ve!==null&&(Xn=we.get(Ve),yt=pe,yt.setIndex(Xn)),ae.isMesh)re.wireframe===!0?(F.setLineWidth(re.wireframeLinewidth*_e()),yt.setMode(S.LINES)):yt.setMode(S.TRIANGLES);else if(ae.isLine){let nt=re.linewidth;nt===void 0&&(nt=1),F.setLineWidth(nt*_e()),ae.isLineSegments?yt.setMode(S.LINES):ae.isLineLoop?yt.setMode(S.LINE_LOOP):yt.setMode(S.LINE_STRIP)}else ae.isPoints?yt.setMode(S.POINTS):ae.isSprite&&yt.setMode(S.TRIANGLES);if(ae.isInstancedMesh)yt.renderInstances(bt,Dt,ae.count);else if(ne.isInstancedBufferGeometry){const nt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ll=Math.min(ne.instanceCount,nt);yt.renderInstances(bt,Dt,Ll)}else yt.render(bt,Dt)};function Be(I,$,ne){I.transparent===!0&&I.side===ei&&I.forceSinglePass===!1?(I.side=rn,I.needsUpdate=!0,Us(I,$,ne),I.side=Gi,I.needsUpdate=!0,Us(I,$,ne),I.side=ei):Us(I,$,ne)}this.compile=function(I,$,ne=null){ne===null&&(ne=I),m=le.get(ne),m.init(),_.push(m),ne.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),I!==ne&&I.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),m.setupLights(g._useLegacyLights);const re=new Set;return I.traverse(function(ae){const Le=ae.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const He=Le[ke];Be(He,ne,ae),re.add(He)}else Be(Le,ne,ae),re.add(Le)}),_.pop(),m=null,re},this.compileAsync=function(I,$,ne=null){const re=this.compile(I,$,ne);return new Promise(ae=>{function Le(){if(re.forEach(function(ke){J.get(ke).currentProgram.isReady()&&re.delete(ke)}),re.size===0){ae(I);return}setTimeout(Le,10)}b.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let tt=null;function Mt(I){tt&&tt(I)}function pn(){Yt.stop()}function ut(){Yt.start()}const Yt=new l_;Yt.setAnimationLoop(Mt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(I){tt=I,Ie.setAnimationLoop(I),I===null?Yt.stop():Yt.start()},Ie.addEventListener("sessionstart",pn),Ie.addEventListener("sessionend",ut),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera($),$=Ie.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,$,w),m=le.get(I,_.length),m.init(),_.push(m),oe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),me.setFromProjectionMatrix(oe),G=this.localClippingEnabled,Ee=Me.init(this.clippingPlanes,G),x=Q.get(I,h.length),x.init(),h.push(x),On(I,$,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(ie,ee),this.info.render.frame++,Ee===!0&&Me.beginShadows();const ne=m.state.shadowsArray;if(ge.render(ne,I,$),Ee===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(x,I),m.setupLights(g._useLegacyLights),$.isArrayCamera){const re=$.cameras;for(let ae=0,Le=re.length;ae<Le;ae++){const ke=re[ae];Of(x,I,ke,ke.viewport)}}else Of(x,I,$);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(g,I,$),Re.resetDefaultState(),D=-1,T=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function On(I,$,ne,re){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ne=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||me.intersectsSprite(I)){re&&ye.setFromMatrixPosition(I.matrixWorld).applyMatrix4(oe);const ke=v.update(I),He=I.material;He.visible&&x.push(I,ke,He,ne,ye.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||me.intersectsObject(I))){const ke=v.update(I),He=I.material;if(re&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ye.copy(I.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ye.copy(ke.boundingSphere.center)),ye.applyMatrix4(I.matrixWorld).applyMatrix4(oe)),Array.isArray(He)){const Ve=ke.groups;for(let Ke=0,Ye=Ve.length;Ke<Ye;Ke++){const $e=Ve[Ke],bt=He[$e.materialIndex];bt&&bt.visible&&x.push(I,ke,bt,ne,ye.z,$e)}}else He.visible&&x.push(I,ke,He,ne,ye.z,null)}}const Le=I.children;for(let ke=0,He=Le.length;ke<He;ke++)On(Le[ke],$,ne,re)}function Of(I,$,ne,re){const ae=I.opaque,Le=I.transmissive,ke=I.transparent;m.setupLightsView(ne),Ee===!0&&Me.setGlobalState(g.clippingPlanes,ne),Le.length>0&&x1(ae,Le,$,ne),re&&F.viewport(L.copy(re)),ae.length>0&&Os(ae,$,ne),Le.length>0&&Os(Le,$,ne),ke.length>0&&Os(ke,$,ne),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function x1(I,$,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Le=P.isWebGL2;se===null&&(se=new Tr(1,1,{generateMipmaps:!0,type:b.has("EXT_color_buffer_half_float")?gs:Bi,minFilter:ms,samples:Le?4:0})),g.getDrawingBufferSize(de),Le?se.setSize(de.x,de.y):se.setSize($o(de.x),$o(de.y));const ke=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(V),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const He=g.toneMapping;g.toneMapping=ki,Os(I,ne,re),te.updateMultisampleRenderTarget(se),te.updateRenderTargetMipmap(se);let Ve=!1;for(let Ke=0,Ye=$.length;Ke<Ye;Ke++){const $e=$[Ke],bt=$e.object,on=$e.geometry,Dt=$e.material,Xn=$e.group;if(Dt.side===ei&&bt.layers.test(re.layers)){const yt=Dt.side;Dt.side=rn,Dt.needsUpdate=!0,Uf(bt,ne,re,on,Dt,Xn),Dt.side=yt,Dt.needsUpdate=!0,Ve=!0}}Ve===!0&&(te.updateMultisampleRenderTarget(se),te.updateRenderTargetMipmap(se)),g.setRenderTarget(ke),g.setClearColor(V,O),g.toneMapping=He}function Os(I,$,ne){const re=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,Le=I.length;ae<Le;ae++){const ke=I[ae],He=ke.object,Ve=ke.geometry,Ke=re===null?ke.material:re,Ye=ke.group;He.layers.test(ne.layers)&&Uf(He,$,ne,Ve,Ke,Ye)}}function Uf(I,$,ne,re,ae,Le){I.onBeforeRender(g,$,ne,re,ae,Le),I.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ae.onBeforeRender(g,$,ne,re,I,Le),ae.transparent===!0&&ae.side===ei&&ae.forceSinglePass===!1?(ae.side=rn,ae.needsUpdate=!0,g.renderBufferDirect(ne,$,re,ae,I,Le),ae.side=Gi,ae.needsUpdate=!0,g.renderBufferDirect(ne,$,re,ae,I,Le),ae.side=ei):g.renderBufferDirect(ne,$,re,ae,I,Le),I.onAfterRender(g,$,ne,re,ae,Le)}function Us(I,$,ne){$.isScene!==!0&&($=Ne);const re=J.get(I),ae=m.state.lights,Le=m.state.shadowsArray,ke=ae.state.version,He=N.getParameters(I,ae.state,Le,$,ne),Ve=N.getProgramCacheKey(He);let Ke=re.programs;re.environment=I.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(I.isMeshStandardMaterial?he:fe).get(I.envMap||re.environment),Ke===void 0&&(I.addEventListener("dispose",ve),Ke=new Map,re.programs=Ke);let Ye=Ke.get(Ve);if(Ye!==void 0){if(re.currentProgram===Ye&&re.lightsStateVersion===ke)return kf(I,He),Ye}else He.uniforms=N.getUniforms(I),I.onBuild(ne,He,g),I.onBeforeCompile(He,g),Ye=N.acquireProgram(He,Ve),Ke.set(Ve,Ye),re.uniforms=He.uniforms;const $e=re.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&($e.clippingPlanes=Me.uniform),kf(I,He),re.needsLights=b1(I),re.lightsStateVersion=ke,re.needsLights&&($e.ambientLightColor.value=ae.state.ambient,$e.lightProbe.value=ae.state.probe,$e.directionalLights.value=ae.state.directional,$e.directionalLightShadows.value=ae.state.directionalShadow,$e.spotLights.value=ae.state.spot,$e.spotLightShadows.value=ae.state.spotShadow,$e.rectAreaLights.value=ae.state.rectArea,$e.ltc_1.value=ae.state.rectAreaLTC1,$e.ltc_2.value=ae.state.rectAreaLTC2,$e.pointLights.value=ae.state.point,$e.pointLightShadows.value=ae.state.pointShadow,$e.hemisphereLights.value=ae.state.hemi,$e.directionalShadowMap.value=ae.state.directionalShadowMap,$e.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,$e.spotShadowMap.value=ae.state.spotShadowMap,$e.spotLightMatrix.value=ae.state.spotLightMatrix,$e.spotLightMap.value=ae.state.spotLightMap,$e.pointShadowMap.value=ae.state.pointShadowMap,$e.pointShadowMatrix.value=ae.state.pointShadowMatrix),re.currentProgram=Ye,re.uniformsList=null,Ye}function Ff(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=No.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function kf(I,$){const ne=J.get(I);ne.outputColorSpace=$.outputColorSpace,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function y1(I,$,ne,re,ae){$.isScene!==!0&&($=Ne),te.resetTextureUnits();const Le=$.fog,ke=re.isMeshStandardMaterial?$.environment:null,He=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ci,Ve=(re.isMeshStandardMaterial?he:fe).get(re.envMap||ke),Ke=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ye=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,on=!!ne.morphAttributes.color;let Dt=ki;re.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=g.toneMapping);const Xn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=Xn!==void 0?Xn.length:0,nt=J.get(re),Ll=m.state.lights;if(Ee===!0&&(G===!0||I!==T)){const ln=I===T&&re.id===D;Me.setState(re,I,ln)}let St=!1;re.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ll.state.version||nt.outputColorSpace!==He||ae.isInstancedMesh&&nt.instancing===!1||!ae.isInstancedMesh&&nt.instancing===!0||ae.isSkinnedMesh&&nt.skinning===!1||!ae.isSkinnedMesh&&nt.skinning===!0||ae.isInstancedMesh&&nt.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&nt.instancingColor===!1&&ae.instanceColor!==null||nt.envMap!==Ve||re.fog===!0&&nt.fog!==Le||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Me.numPlanes||nt.numIntersection!==Me.numIntersection)||nt.vertexAlphas!==Ke||nt.vertexTangents!==Ye||nt.morphTargets!==$e||nt.morphNormals!==bt||nt.morphColors!==on||nt.toneMapping!==Dt||P.isWebGL2===!0&&nt.morphTargetsCount!==yt)&&(St=!0):(St=!0,nt.__version=re.version);let Ki=nt.currentProgram;St===!0&&(Ki=Us(re,$,ae));let Bf=!1,Ua=!1,Pl=!1;const $t=Ki.getUniforms(),Zi=nt.uniforms;if(F.useProgram(Ki.program)&&(Bf=!0,Ua=!0,Pl=!0),re.id!==D&&(D=re.id,Ua=!0),Bf||T!==I){$t.setValue(S,"projectionMatrix",I.projectionMatrix),$t.setValue(S,"viewMatrix",I.matrixWorldInverse);const ln=$t.map.cameraPosition;ln!==void 0&&ln.setValue(S,ye.setFromMatrixPosition(I.matrixWorld)),P.logarithmicDepthBuffer&&$t.setValue(S,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&$t.setValue(S,"isOrthographic",I.isOrthographicCamera===!0),T!==I&&(T=I,Ua=!0,Pl=!0)}if(ae.isSkinnedMesh){$t.setOptional(S,ae,"bindMatrix"),$t.setOptional(S,ae,"bindMatrixInverse");const ln=ae.skeleton;ln&&(P.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),$t.setValue(S,"boneTexture",ln.boneTexture,te),$t.setValue(S,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Il=ne.morphAttributes;if((Il.position!==void 0||Il.normal!==void 0||Il.color!==void 0&&P.isWebGL2===!0)&&k.update(ae,ne,Ki),(Ua||nt.receiveShadow!==ae.receiveShadow)&&(nt.receiveShadow=ae.receiveShadow,$t.setValue(S,"receiveShadow",ae.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Zi.envMap.value=Ve,Zi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Ua&&($t.setValue(S,"toneMappingExposure",g.toneMappingExposure),nt.needsLights&&E1(Zi,Pl),Le&&re.fog===!0&&K.refreshFogUniforms(Zi,Le),K.refreshMaterialUniforms(Zi,re,Y,j,se),No.upload(S,Ff(nt),Zi,te)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(No.upload(S,Ff(nt),Zi,te),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&$t.setValue(S,"center",ae.center),$t.setValue(S,"modelViewMatrix",ae.modelViewMatrix),$t.setValue(S,"normalMatrix",ae.normalMatrix),$t.setValue(S,"modelMatrix",ae.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const ln=re.uniformsGroups;for(let Nl=0,M1=ln.length;Nl<M1;Nl++)if(P.isWebGL2){const zf=ln[Nl];Fe.update(zf,Ki),Fe.bind(zf,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function E1(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function b1(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,$,ne){J.get(I.texture).__webglTexture=$,J.get(I.depthTexture).__webglTexture=ne;const re=J.get(I);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||b.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,$){const ne=J.get(I);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ne=0){w=I,A=$,C=ne;let re=!0,ae=null,Le=!1,ke=!1;if(I){const Ve=J.get(I);Ve.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(S.FRAMEBUFFER,null),re=!1):Ve.__webglFramebuffer===void 0?te.setupRenderTarget(I):Ve.__hasExternalTextures&&te.rebindTextures(I,J.get(I.texture).__webglTexture,J.get(I.depthTexture).__webglTexture);const Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ke=!0);const Ye=J.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?ae=Ye[$][ne]:ae=Ye[$],Le=!0):P.isWebGL2&&I.samples>0&&te.useMultisampledRTT(I)===!1?ae=J.get(I).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[ne]:ae=Ye,L.copy(I.viewport),z.copy(I.scissor),U=I.scissorTest}else L.copy(ce).multiplyScalar(Y).floor(),z.copy(B).multiplyScalar(Y).floor(),U=Z;if(F.bindFramebuffer(S.FRAMEBUFFER,ae)&&P.drawBuffers&&re&&F.drawBuffers(I,ae),F.viewport(L),F.scissor(z),F.setScissorTest(U),Le){const Ve=J.get(I.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,ne)}else if(ke){const Ve=J.get(I.texture),Ke=$||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ve.__webglTexture,ne||0,Ke)}D=-1},this.readRenderTargetPixels=function(I,$,ne,re,ae,Le,ke){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=J.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){F.bindFramebuffer(S.FRAMEBUFFER,He);try{const Ve=I.texture,Ke=Ve.format,Ye=Ve.type;if(Ke!==Pn&&De.convert(Ke)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ye===gs&&(b.has("EXT_color_buffer_half_float")||P.isWebGL2&&b.has("EXT_color_buffer_float"));if(Ye!==Bi&&De.convert(Ye)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Ni&&(P.isWebGL2||b.has("OES_texture_float")||b.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-re&&ne>=0&&ne<=I.height-ae&&S.readPixels($,ne,re,ae,De.convert(Ke),De.convert(Ye),Le)}finally{const Ve=w!==null?J.get(w).__webglFramebuffer:null;F.bindFramebuffer(S.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(I,$,ne=0){const re=Math.pow(2,-ne),ae=Math.floor($.image.width*re),Le=Math.floor($.image.height*re);te.setTexture2D($,0),S.copyTexSubImage2D(S.TEXTURE_2D,ne,0,0,I.x,I.y,ae,Le),F.unbindTexture()},this.copyTextureToTexture=function(I,$,ne,re=0){const ae=$.image.width,Le=$.image.height,ke=De.convert(ne.format),He=De.convert(ne.type);te.setTexture2D(ne,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ne.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ne.unpackAlignment),$.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,re,I.x,I.y,ae,Le,ke,He,$.image.data):$.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,re,I.x,I.y,$.mipmaps[0].width,$.mipmaps[0].height,ke,$.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,re,I.x,I.y,ke,He,$.image),re===0&&ne.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(I,$,ne,re,ae=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=I.max.x-I.min.x+1,ke=I.max.y-I.min.y+1,He=I.max.z-I.min.z+1,Ve=De.convert(re.format),Ke=De.convert(re.type);let Ye;if(re.isData3DTexture)te.setTexture3D(re,0),Ye=S.TEXTURE_3D;else if(re.isDataArrayTexture)te.setTexture2DArray(re,0),Ye=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,re.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,re.unpackAlignment);const $e=S.getParameter(S.UNPACK_ROW_LENGTH),bt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),on=S.getParameter(S.UNPACK_SKIP_PIXELS),Dt=S.getParameter(S.UNPACK_SKIP_ROWS),Xn=S.getParameter(S.UNPACK_SKIP_IMAGES),yt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,yt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,yt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,I.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,I.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,I.min.z),ne.isDataTexture||ne.isData3DTexture?S.texSubImage3D(Ye,ae,$.x,$.y,$.z,Le,ke,He,Ve,Ke,yt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(Ye,ae,$.x,$.y,$.z,Le,ke,He,Ve,yt.data)):S.texSubImage3D(Ye,ae,$.x,$.y,$.z,Le,ke,He,Ve,Ke,yt),S.pixelStorei(S.UNPACK_ROW_LENGTH,$e),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,on),S.pixelStorei(S.UNPACK_SKIP_ROWS,Dt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Xn),ae===0&&re.generateMipmaps&&S.generateMipmap(Ye),F.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?te.setTextureCube(I,0):I.isData3DTexture?te.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?te.setTexture2DArray(I,0):te.setTexture2D(I,0),F.unbindTexture()},this.resetState=function(){A=0,C=0,w=null,F.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===af?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===vl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?br:qg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?kt:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rw extends p_{}rw.prototype.isWebGL1Renderer=!0;class aw extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class sw extends Ls{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ap={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class ow{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],E=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return E}return null}}}const lw=new ow;class df{constructor(e){this.manager=e!==void 0?e:lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}df.DEFAULT_MATERIAL_NAME="__DEFAULT";class cw extends df{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=ap.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=vs("img");function l(){u(),ap.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class uw extends df{constructor(e){super(e)}load(e,n,i,r){const a=new an,o=new cw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class hf extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const yc=new At,sp=new W,op=new W;class m_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sp.setFromMatrixPosition(e.matrixWorld),n.position.copy(sp),op.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(op),n.updateMatrixWorld(),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lp=new At,Wa=new W,Ec=new W;class fw extends m_{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Wa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wa),Ec.copy(i.position),Ec.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ec),i.updateMatrixWorld(),r.makeTranslation(-Wa.x,-Wa.y,-Wa.z),lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp)}}class dw extends hf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hw extends m_{constructor(){super(new c_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pw extends hf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new hw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mw extends hf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class gw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=cp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function cp(){return(typeof performance>"u"?Date:performance).now()}class _w{constructor(e,n,i=0,r=1/0){this.ray=new of(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return su(e,this,i,n),i.sort(up),i}intersectObjects(e,n=!0,i=[]){for(let r=0,a=e.length;r<a;r++)su(e[r],this,i,n);return i.sort(up),i}}function up(t,e){return t.distance-e.distance}function su(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let a=0,o=r.length;a<o;a++)su(r[a],e,n,!0)}}class fp{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);const dp={type:"change"},bc={type:"start"},hp={type:"end"},po=new of,pp=new Pi,vw=Math.cos(70*eb.DEG2RAD);class xw extends Lr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",v),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(dp),i.update(),a=r.NONE},this.update=function(){const k=new W,xe=new Ar().setFromUnitVectors(e.up,new W(0,1,0)),pe=xe.clone().invert(),De=new W,Re=new Ar,Fe=new W,Ue=2*Math.PI;return function(et=null){const H=i.object.position;k.copy(H).sub(i.target),k.applyQuaternion(xe),s.setFromVector3(k),i.autoRotate&&a===r.NONE&&z(T(et)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Te=i.minAzimuthAngle,ve=i.maxAzimuthAngle;isFinite(Te)&&isFinite(ve)&&(Te<-Math.PI?Te+=Ue:Te>Math.PI&&(Te-=Ue),ve<-Math.PI?ve+=Ue:ve>Math.PI&&(ve-=Ue),Te<=ve?s.theta=Math.max(Te,Math.min(ve,s.theta)):s.theta=s.theta>(Te+ve)/2?Math.max(Te,s.theta):Math.min(ve,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=ee(s.radius):s.radius=ee(s.radius*c),k.setFromSpherical(s),k.applyQuaternion(pe),H.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ue=!1;if(i.zoomToCursor&&C){let be=null;if(i.object.isPerspectiveCamera){const Be=k.length();be=ee(Be*c);const tt=Be-be;i.object.position.addScaledVector(y,tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Be=new W(A.x,A.y,0);Be.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ue=!0;const tt=new W(A.x,A.y,0);tt.unproject(i.object),i.object.position.sub(tt).add(Be),i.object.updateMatrixWorld(),be=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(be).add(i.object.position):(po.origin.copy(i.object.position),po.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(po.direction))<vw?e.lookAt(i.target):(pp.setFromNormalAndCoplanarPoint(i.object.up,i.target),po.intersectPlane(pp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ue=!0);return c=1,C=!1,ue||De.distanceToSquared(i.object.position)>o||8*(1-Re.dot(i.object.quaternion))>o||Fe.distanceToSquared(i.target)>0?(i.dispatchEvent(dp),De.copy(i.object.position),Re.copy(i.object.quaternion),Fe.copy(i.target),ue=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",J),i.domElement.removeEventListener("pointercancel",fe),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",te),i.domElement.removeEventListener("pointerup",fe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new fp,l=new fp;let c=1;const u=new W,f=new Xe,d=new Xe,p=new Xe,E=new Xe,x=new Xe,m=new Xe,h=new Xe,_=new Xe,g=new Xe,y=new W,A=new Xe;let C=!1;const w=[],D={};function T(k){return k!==null?2*Math.PI/60*i.autoRotateSpeed*k:2*Math.PI/60/60*i.autoRotateSpeed}function L(){return Math.pow(.95,i.zoomSpeed)}function z(k){l.theta-=k}function U(k){l.phi-=k}const V=function(){const k=new W;return function(pe,De){k.setFromMatrixColumn(De,0),k.multiplyScalar(-pe),u.add(k)}}(),O=function(){const k=new W;return function(pe,De){i.screenSpacePanning===!0?k.setFromMatrixColumn(De,1):(k.setFromMatrixColumn(De,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(pe),u.add(k)}}(),X=function(){const k=new W;return function(pe,De){const Re=i.domElement;if(i.object.isPerspectiveCamera){const Fe=i.object.position;k.copy(Fe).sub(i.target);let Ue=k.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),V(2*pe*Ue/Re.clientHeight,i.object.matrix),O(2*De*Ue/Re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(pe*(i.object.right-i.object.left)/i.object.zoom/Re.clientWidth,i.object.matrix),O(De*(i.object.top-i.object.bottom)/i.object.zoom/Re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(k){if(!i.zoomToCursor)return;C=!0;const xe=i.domElement.getBoundingClientRect(),pe=k.clientX-xe.left,De=k.clientY-xe.top,Re=xe.width,Fe=xe.height;A.x=pe/Re*2-1,A.y=-(De/Fe)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function ce(k){f.set(k.clientX,k.clientY)}function B(k){ie(k),h.set(k.clientX,k.clientY)}function Z(k){E.set(k.clientX,k.clientY)}function me(k){d.set(k.clientX,k.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const xe=i.domElement;z(2*Math.PI*p.x/xe.clientHeight),U(2*Math.PI*p.y/xe.clientHeight),f.copy(d),i.update()}function Ee(k){_.set(k.clientX,k.clientY),g.subVectors(_,h),g.y>0?j(L()):g.y<0&&Y(L()),h.copy(_),i.update()}function G(k){x.set(k.clientX,k.clientY),m.subVectors(x,E).multiplyScalar(i.panSpeed),X(m.x,m.y),E.copy(x),i.update()}function se(k){ie(k),k.deltaY<0?Y(L()):k.deltaY>0&&j(L()),i.update()}function oe(k){let xe=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),xe=!0;break}xe&&(k.preventDefault(),i.update())}function de(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),xe=.5*(w[0].pageY+w[1].pageY);f.set(k,xe)}}function ye(){if(w.length===1)E.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),xe=.5*(w[0].pageY+w[1].pageY);E.set(k,xe)}}function Ne(){const k=w[0].pageX-w[1].pageX,xe=w[0].pageY-w[1].pageY,pe=Math.sqrt(k*k+xe*xe);h.set(0,pe)}function _e(){i.enableZoom&&Ne(),i.enablePan&&ye()}function S(){i.enableZoom&&Ne(),i.enableRotate&&de()}function M(k){if(w.length==1)d.set(k.pageX,k.pageY);else{const pe=Se(k),De=.5*(k.pageX+pe.x),Re=.5*(k.pageY+pe.y);d.set(De,Re)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const xe=i.domElement;z(2*Math.PI*p.x/xe.clientHeight),U(2*Math.PI*p.y/xe.clientHeight),f.copy(d)}function b(k){if(w.length===1)x.set(k.pageX,k.pageY);else{const xe=Se(k),pe=.5*(k.pageX+xe.x),De=.5*(k.pageY+xe.y);x.set(pe,De)}m.subVectors(x,E).multiplyScalar(i.panSpeed),X(m.x,m.y),E.copy(x)}function P(k){const xe=Se(k),pe=k.pageX-xe.x,De=k.pageY-xe.y,Re=Math.sqrt(pe*pe+De*De);_.set(0,Re),g.set(0,Math.pow(_.y/h.y,i.zoomSpeed)),j(g.y),h.copy(_)}function F(k){i.enableZoom&&P(k),i.enablePan&&b(k)}function q(k){i.enableZoom&&P(k),i.enableRotate&&M(k)}function J(k){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",te),i.domElement.addEventListener("pointerup",fe)),le(k),k.pointerType==="touch"?N(k):he(k))}function te(k){i.enabled!==!1&&(k.pointerType==="touch"?K(k):we(k))}function fe(k){Me(k),w.length===0&&(i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",te),i.domElement.removeEventListener("pointerup",fe)),i.dispatchEvent(hp),a=r.NONE}function he(k){let xe;switch(k.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Nr.DOLLY:if(i.enableZoom===!1)return;B(k),a=r.DOLLY;break;case Nr.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;Z(k),a=r.PAN}else{if(i.enableRotate===!1)return;ce(k),a=r.ROTATE}break;case Nr.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;ce(k),a=r.ROTATE}else{if(i.enablePan===!1)return;Z(k),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(bc)}function we(k){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;me(k);break;case r.DOLLY:if(i.enableZoom===!1)return;Ee(k);break;case r.PAN:if(i.enablePan===!1)return;G(k);break}}function R(k){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(k.preventDefault(),i.dispatchEvent(bc),se(k),i.dispatchEvent(hp))}function v(k){i.enabled===!1||i.enablePan===!1||oe(k)}function N(k){switch(ge(k),w.length){case 1:switch(i.touches.ONE){case Dr.ROTATE:if(i.enableRotate===!1)return;de(),a=r.TOUCH_ROTATE;break;case Dr.PAN:if(i.enablePan===!1)return;ye(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Dr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(),a=r.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(bc)}function K(k){switch(ge(k),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;M(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;b(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;q(k),i.update();break;default:a=r.NONE}}function Q(k){i.enabled!==!1&&k.preventDefault()}function le(k){w.push(k)}function Me(k){delete D[k.pointerId];for(let xe=0;xe<w.length;xe++)if(w[xe].pointerId==k.pointerId){w.splice(xe,1);return}}function ge(k){let xe=D[k.pointerId];xe===void 0&&(xe=new Xe,D[k.pointerId]=xe),xe.set(k.pageX,k.pageY)}function Se(k){const xe=k.pointerId===w[0].pointerId?w[1]:w[0];return D[xe.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",J),i.domElement.addEventListener("pointercancel",fe),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}class yw extends ai{constructor(e,n,i=!1,r=!1,a=1e4){const o=new $i;super(o,n),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(_){this.resolution=_,this.isolation=80,this.size=_,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=a*3;this.positionArray=new Float32Array(g*3);const y=new nn(this.positionArray,3);y.setUsage(Vs),o.setAttribute("position",y),this.normalArray=new Float32Array(g*3);const A=new nn(this.normalArray,3);if(A.setUsage(Vs),o.setAttribute("normal",A),this.enableUvs){this.uvArray=new Float32Array(g*2);const C=new nn(this.uvArray,2);C.setUsage(Vs),o.setAttribute("uv",C)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const C=new nn(this.colorArray,3);C.setUsage(Vs),o.setAttribute("color",C)}o.boundingSphere=new xl(new W,1)};function f(_,g,y){return _+(g-_)*y}function d(_,g,y,A,C,w,D,T,L,z){const U=(y-D)/(T-D),V=s.normal_cache;l[g+0]=A+U*s.delta,l[g+1]=C,l[g+2]=w,c[g+0]=f(V[_+0],V[_+3],U),c[g+1]=f(V[_+1],V[_+4],U),c[g+2]=f(V[_+2],V[_+5],U),u[g+0]=f(s.palette[L*3+0],s.palette[z*3+0],U),u[g+1]=f(s.palette[L*3+1],s.palette[z*3+1],U),u[g+2]=f(s.palette[L*3+2],s.palette[z*3+2],U)}function p(_,g,y,A,C,w,D,T,L,z){const U=(y-D)/(T-D),V=s.normal_cache;l[g+0]=A,l[g+1]=C+U*s.delta,l[g+2]=w;const O=_+s.yd*3;c[g+0]=f(V[_+0],V[O+0],U),c[g+1]=f(V[_+1],V[O+1],U),c[g+2]=f(V[_+2],V[O+2],U),u[g+0]=f(s.palette[L*3+0],s.palette[z*3+0],U),u[g+1]=f(s.palette[L*3+1],s.palette[z*3+1],U),u[g+2]=f(s.palette[L*3+2],s.palette[z*3+2],U)}function E(_,g,y,A,C,w,D,T,L,z){const U=(y-D)/(T-D),V=s.normal_cache;l[g+0]=A,l[g+1]=C,l[g+2]=w+U*s.delta;const O=_+s.zd*3;c[g+0]=f(V[_+0],V[O+0],U),c[g+1]=f(V[_+1],V[O+1],U),c[g+2]=f(V[_+2],V[O+2],U),u[g+0]=f(s.palette[L*3+0],s.palette[z*3+0],U),u[g+1]=f(s.palette[L*3+1],s.palette[z*3+1],U),u[g+2]=f(s.palette[L*3+2],s.palette[z*3+2],U)}function x(_){const g=_*3;s.normal_cache[g]===0&&(s.normal_cache[g+0]=s.field[_-1]-s.field[_+1],s.normal_cache[g+1]=s.field[_-s.yd]-s.field[_+s.yd],s.normal_cache[g+2]=s.field[_-s.zd]-s.field[_+s.zd])}function m(_,g,y,A,C){const w=A+1,D=A+s.yd,T=A+s.zd,L=w+s.yd,z=w+s.zd,U=A+s.yd+s.zd,V=w+s.yd+s.zd;let O=0;const X=s.field[A],j=s.field[w],Y=s.field[D],ie=s.field[L],ee=s.field[T],ce=s.field[z],B=s.field[U],Z=s.field[V];X<C&&(O|=1),j<C&&(O|=2),Y<C&&(O|=8),ie<C&&(O|=4),ee<C&&(O|=16),ce<C&&(O|=32),B<C&&(O|=128),Z<C&&(O|=64);const me=Ew[O];if(me===0)return 0;const Ee=s.delta,G=_+Ee,se=g+Ee,oe=y+Ee;me&1&&(x(A),x(w),d(A*3,0,C,_,g,y,X,j,A,w)),me&2&&(x(w),x(L),p(w*3,3,C,G,g,y,j,ie,w,L)),me&4&&(x(D),x(L),d(D*3,6,C,_,se,y,Y,ie,D,L)),me&8&&(x(A),x(D),p(A*3,9,C,_,g,y,X,Y,A,D)),me&16&&(x(T),x(z),d(T*3,12,C,_,g,oe,ee,ce,T,z)),me&32&&(x(z),x(V),p(z*3,15,C,G,g,oe,ce,Z,z,V)),me&64&&(x(U),x(V),d(U*3,18,C,_,se,oe,B,Z,U,V)),me&128&&(x(T),x(U),p(T*3,21,C,_,g,oe,ee,B,T,U)),me&256&&(x(A),x(T),E(A*3,24,C,_,g,y,X,ee,A,T)),me&512&&(x(w),x(z),E(w*3,27,C,G,g,y,j,ce,w,z)),me&1024&&(x(L),x(V),E(L*3,30,C,G,se,y,ie,Z,L,V)),me&2048&&(x(D),x(U),E(D*3,33,C,_,se,y,Y,B,D,U)),O<<=4;let de,ye,Ne,_e=0,S=0;for(;mo[O+S]!=-1;)de=O+S,ye=de+1,Ne=de+2,h(l,c,u,3*mo[de],3*mo[ye],3*mo[Ne]),S+=3,_e++;return _e}function h(_,g,y,A,C,w){const D=s.count*3;if(s.positionArray[D+0]=_[A],s.positionArray[D+1]=_[A+1],s.positionArray[D+2]=_[A+2],s.positionArray[D+3]=_[C],s.positionArray[D+4]=_[C+1],s.positionArray[D+5]=_[C+2],s.positionArray[D+6]=_[w],s.positionArray[D+7]=_[w+1],s.positionArray[D+8]=_[w+2],s.material.flatShading===!0){const T=(g[A+0]+g[C+0]+g[w+0])/3,L=(g[A+1]+g[C+1]+g[w+1])/3,z=(g[A+2]+g[C+2]+g[w+2])/3;s.normalArray[D+0]=T,s.normalArray[D+1]=L,s.normalArray[D+2]=z,s.normalArray[D+3]=T,s.normalArray[D+4]=L,s.normalArray[D+5]=z,s.normalArray[D+6]=T,s.normalArray[D+7]=L,s.normalArray[D+8]=z}else s.normalArray[D+0]=g[A+0],s.normalArray[D+1]=g[A+1],s.normalArray[D+2]=g[A+2],s.normalArray[D+3]=g[C+0],s.normalArray[D+4]=g[C+1],s.normalArray[D+5]=g[C+2],s.normalArray[D+6]=g[w+0],s.normalArray[D+7]=g[w+1],s.normalArray[D+8]=g[w+2];if(s.enableUvs){const T=s.count*2;s.uvArray[T+0]=_[A+0],s.uvArray[T+1]=_[A+2],s.uvArray[T+2]=_[C+0],s.uvArray[T+3]=_[C+2],s.uvArray[T+4]=_[w+0],s.uvArray[T+5]=_[w+2]}s.enableColors&&(s.colorArray[D+0]=y[A+0],s.colorArray[D+1]=y[A+1],s.colorArray[D+2]=y[A+2],s.colorArray[D+3]=y[C+0],s.colorArray[D+4]=y[C+1],s.colorArray[D+5]=y[C+2],s.colorArray[D+6]=y[w+0],s.colorArray[D+7]=y[w+1],s.colorArray[D+8]=y[w+2]),s.count+=3}this.addBall=function(_,g,y,A,C,w){const D=Math.sign(A);A=Math.abs(A);const T=w!=null;let L=new Qe(_,g,y);if(T)try{L=w instanceof Qe?w:Array.isArray(w)?new Qe(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Qe(w)}catch{L=new Qe(_,g,y)}const z=this.size*Math.sqrt(A/C),U=y*this.size,V=g*this.size,O=_*this.size;let X=Math.floor(U-z);X<1&&(X=1);let j=Math.floor(U+z);j>this.size-1&&(j=this.size-1);let Y=Math.floor(V-z);Y<1&&(Y=1);let ie=Math.floor(V+z);ie>this.size-1&&(ie=this.size-1);let ee=Math.floor(O-z);ee<1&&(ee=1);let ce=Math.floor(O+z);ce>this.size-1&&(ce=this.size-1);let B,Z,me,Ee,G,se,oe,de,ye,Ne,_e;for(me=X;me<j;me++)for(G=this.size2*me,de=me/this.size-y,ye=de*de,Z=Y;Z<ie;Z++)for(Ee=G+this.size*Z,oe=Z/this.size-g,Ne=oe*oe,B=ee;B<ce;B++)if(se=B/this.size-_,_e=A/(1e-6+se*se+Ne+ye)-C,_e>0){this.field[Ee+B]+=_e*D;const S=Math.sqrt((B-O)*(B-O)+(Z-V)*(Z-V)+(me-U)*(me-U))/z,M=1-S*S*S*(S*(S*6-15)+10);this.palette[(Ee+B)*3+0]+=L.r*M,this.palette[(Ee+B)*3+1]+=L.g*M,this.palette[(Ee+B)*3+2]+=L.b*M}},this.addPlaneX=function(_,g){const y=this.size,A=this.yd,C=this.zd,w=this.field;let D,T,L,z,U,V,O,X=y*Math.sqrt(_/g);for(X>y&&(X=y),D=0;D<X;D++)if(V=D/y,z=V*V,U=_/(1e-4+z)-g,U>0)for(T=0;T<y;T++)for(O=D+T*A,L=0;L<y;L++)w[C*L+O]+=U},this.addPlaneY=function(_,g){const y=this.size,A=this.yd,C=this.zd,w=this.field;let D,T,L,z,U,V,O,X,j=y*Math.sqrt(_/g);for(j>y&&(j=y),T=0;T<j;T++)if(V=T/y,z=V*V,U=_/(1e-4+z)-g,U>0)for(O=T*A,D=0;D<y;D++)for(X=O+D,L=0;L<y;L++)w[C*L+X]+=U},this.addPlaneZ=function(_,g){const y=this.size,A=this.yd,C=this.zd,w=this.field;let D,T,L,z,U,V,O,X,j=y*Math.sqrt(_/g);for(j>y&&(j=y),L=0;L<j;L++)if(V=L/y,z=V*V,U=_/(1e-4+z)-g,U>0)for(O=C*L,T=0;T<y;T++)for(X=O+T*A,D=0;D<y;D++)w[X+D]+=U},this.setCell=function(_,g,y,A){const C=this.size2*y+this.size*g+_;this.field[C]=A},this.getCell=function(_,g,y){const A=this.size2*y+this.size*g+_;return this.field[A]},this.blur=function(_=1){const g=this.field,y=g.slice(),A=this.size,C=this.size2;for(let w=0;w<A;w++)for(let D=0;D<A;D++)for(let T=0;T<A;T++){const L=C*T+A*D+w;let z=y[L],U=1;for(let V=-1;V<=1;V+=2){const O=V+w;if(!(O<0||O>=A))for(let X=-1;X<=1;X+=2){const j=X+D;if(!(j<0||j>=A))for(let Y=-1;Y<=1;Y+=2){const ie=Y+T;if(ie<0||ie>=A)continue;const ee=C*ie+A*j+O,ce=y[ee];U++,z+=_*(ce-z)/U}}}g[L]=z}},this.reset=function(){for(let _=0;_<this.size3;_++)this.normal_cache[_*3]=0,this.field[_]=0,this.palette[_*3]=this.palette[_*3+1]=this.palette[_*3+2]=0},this.update=function(){this.count=0;const _=this.size-2;for(let g=1;g<_;g++){const y=this.size2*g,A=(g-this.halfsize)/this.halfsize;for(let C=1;C<_;C++){const w=y+this.size*C,D=(C-this.halfsize)/this.halfsize;for(let T=1;T<_;T++){const L=(T-this.halfsize)/this.halfsize,z=w+T;m(L,D,A,z,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const Ew=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),mo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),bw="/assets/y-5c11e2ca.svg";let pr,Ci,dr,mp,gp,Mc,Sc,_p,Hn,rs,kn,vp=0;const Mw=new gw;function Sw(){pr.aspect=window.innerWidth/window.innerHeight,pr.updateProjectionMatrix(),dr.setSize(window.innerWidth,window.innerHeight)}function Tw(){return{plastic:new sw({specular:16747520,shininess:5,color:16757504})}}function Aw(){kn={material:"plastic",speed:.1,numBlobs:3,resolution:50,isolation:4}}function ww(t,e,n,i,r,a){t.reset();const o=10,s=.6/((Math.sqrt(n)-1)/4+1);for(let l=0;l<n;l++){const c=Math.sin(l+1.26*e*(1.03+.5*Math.cos(.21*l)))*.27+.5,u=Math.abs(Math.cos(l+1.12*e*Math.cos(1.22+.1424*l)))*.77,f=Math.cos(l+1.32*e*.1*Math.sin(.92+.53*l))*.27+.5;t.addBall(c,u,f,s,o)}t.update()}function Cw(){const t=Mw.getDelta();vp+=t*kn.speed*.5,kn.resolution!==rs&&(rs=kn.resolution,Hn.init(Math.floor(rs))),kn.isolation!==Hn.isolation&&(Hn.isolation=kn.isolation),ww(Hn,vp,kn.numBlobs,kn.floor,kn.wallx,kn.wallz),dr.render(Ci,pr)}const Rw={name:"MetaBall",mounted(){this.init(),this.animate()},methods:{init(){const t=this.$refs.container;pr=new fn(45,window.innerWidth/window.innerHeight,1,1e4),pr.position.set(-100,1e3,800),Ci=new aw;const e=bw,i=new uw().load(e);Ci.background=i,Mc=new pw(16777215,5),Mc.position.set(.5,.5,1),Ci.add(Mc),Sc=new dw(16743424,3,0,0),Sc.position.set(0,0,100),Ci.add(Sc),_p=new mw(3289650,3),Ci.add(_p),mp=Tw(),gp="plastic",rs=50,Hn=new yw(rs,mp[gp],!0,!0,1e5),Hn.position.set(0,0,0),Hn.scale.set(700,700,700),Hn.enableUvs=!1,Hn.enableColors=!1,Ci.add(Hn),dr=new p_,dr.setPixelRatio(window.devicePixelRatio),dr.setSize(window.innerWidth,window.innerHeight),t.appendChild(dr.domElement);const r=new xw(pr,dr.domElement);r.minDistance=500,r.maxDistance=5e3;const a=new _w,o=new Xe;function s(l){o.x=l.clientX/window.innerWidth*2-1,o.y=-(l.clientY/window.innerHeight)*2+1,a.setFromCamera(o,pr);const c=a.intersectObjects(Ci.children);c.length>0&&(c[0].object.material.color.getHex()===16757504?c[0].object.material.color.set(16777215):c[0].object.material.color.getHex()===16777215?c[0].object.material.color.set(5816572):c[0].object.material.color.getHex()===5816572?c[0].object.material.color.set(8257429):c[0].object.material.color.set(16757504))}window.addEventListener("click",s,!1),Aw(),window.addEventListener("resize",Sw)},animate(){requestAnimationFrame(this.animate),Cw()}}},Lw={id:"main"},Pw={id:"container",ref:"container"};function Iw(t,e,n,i,r,a){return Sr(),Ca("div",Lw,[at("div",Pw,null,512)])}const Nw=Pa(Rw,[["render",Iw]]);function xp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Pe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xp(Object(n),!0).forEach(function(i){Nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function jo(t){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jo(t)}function Dw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yp(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ow(t,e,n){return e&&yp(t.prototype,e),n&&yp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pf(t,e){return Fw(t)||Bw(t,e)||g_(t,e)||Hw()}function Is(t){return Uw(t)||kw(t)||g_(t)||zw()}function Uw(t){if(Array.isArray(t))return ou(t)}function Fw(t){if(Array.isArray(t))return t}function kw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function g_(t,e){if(t){if(typeof t=="string")return ou(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ou(t,e)}}function ou(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function zw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ep=function(){},mf={},__={},v_=null,x_={mark:Ep,measure:Ep};try{typeof window<"u"&&(mf=window),typeof document<"u"&&(__=document),typeof MutationObserver<"u"&&(v_=MutationObserver),typeof performance<"u"&&(x_=performance)}catch{}var Gw=mf.navigator||{},bp=Gw.userAgent,Mp=bp===void 0?"":bp,Vi=mf,pt=__,Sp=v_,go=x_;Vi.document;var pi=!!pt.documentElement&&!!pt.head&&typeof pt.addEventListener=="function"&&typeof pt.createElement=="function",y_=~Mp.indexOf("MSIE")||~Mp.indexOf("Trident/"),_o,vo,xo,yo,Eo,ui="___FONT_AWESOME___",lu=16,E_="fa",b_="svg-inline--fa",Cr="data-fa-i2svg",cu="data-fa-pseudo-element",Vw="data-fa-pseudo-element-pending",gf="data-prefix",_f="data-icon",Tp="fontawesome-i2svg",Ww="async",Xw=["HTML","HEAD","STYLE","SCRIPT"],M_=function(){try{return!0}catch{return!1}}(),ht="classic",Et="sharp",vf=[ht,Et];function Ns(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ht]}})}var xs=Ns((_o={},Nt(_o,ht,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Nt(_o,Et,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_o)),ys=Ns((vo={},Nt(vo,ht,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Nt(vo,Et,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),vo)),Es=Ns((xo={},Nt(xo,ht,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Nt(xo,Et,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),xo)),Yw=Ns((yo={},Nt(yo,ht,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Nt(yo,Et,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yo)),$w=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,S_="fa-layers-text",jw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qw=Ns((Eo={},Nt(Eo,ht,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Nt(Eo,Et,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Eo)),T_=[1,2,3,4,5,6,7,8,9,10],Kw=T_.concat([11,12,13,14,15,16,17,18,19,20]),Zw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bs=new Set;Object.keys(ys[ht]).map(bs.add.bind(bs));Object.keys(ys[Et]).map(bs.add.bind(bs));var Jw=[].concat(vf,Is(bs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mr.GROUP,mr.SWAP_OPACITY,mr.PRIMARY,mr.SECONDARY]).concat(T_.map(function(t){return"".concat(t,"x")})).concat(Kw.map(function(t){return"w-".concat(t)})),as=Vi.FontAwesomeConfig||{};function Qw(t){var e=pt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function e2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(pt&&typeof pt.querySelector=="function"){var t2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];t2.forEach(function(t){var e=pf(t,2),n=e[0],i=e[1],r=e2(Qw(n));r!=null&&(as[i]=r)})}var A_={styleDefault:"solid",familyDefault:"classic",cssPrefix:E_,replacementClass:b_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};as.familyPrefix&&(as.cssPrefix=as.familyPrefix);var ya=Pe(Pe({},A_),as);ya.autoReplaceSvg||(ya.observeMutations=!1);var Oe={};Object.keys(A_).forEach(function(t){Object.defineProperty(Oe,t,{enumerable:!0,set:function(n){ya[t]=n,ss.forEach(function(i){return i(Oe)})},get:function(){return ya[t]}})});Object.defineProperty(Oe,"familyPrefix",{enumerable:!0,set:function(e){ya.cssPrefix=e,ss.forEach(function(n){return n(Oe)})},get:function(){return ya.cssPrefix}});Vi.FontAwesomeConfig=Oe;var ss=[];function n2(t){return ss.push(t),function(){ss.splice(ss.indexOf(t),1)}}var Ti=lu,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function i2(t){if(!(!t||!pi)){var e=pt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=pt.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return pt.head.insertBefore(e,i),t}}var r2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ms(){for(var t=12,e="";t-- >0;)e+=r2[Math.random()*62|0];return e}function Da(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xf(t){return t.classList?Da(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function w_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(w_(t[n]),'" ')},"").trim()}function bl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function yf(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function s2(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function o2(t){var e=t.transform,n=t.width,i=n===void 0?lu:n,r=t.height,a=r===void 0?lu:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&y_?l+="translate(".concat(e.x/Ti-i/2,"em, ").concat(e.y/Ti-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Ti,"em), calc(-50% + ").concat(e.y/Ti,"em)) "):l+="translate(".concat(e.x/Ti,"em, ").concat(e.y/Ti,"em) "),l+="scale(".concat(e.size/Ti*(e.flipX?-1:1),", ").concat(e.size/Ti*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var l2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
}`;function C_(){var t=E_,e=b_,n=Oe.cssPrefix,i=Oe.replacementClass,r=l2;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var Ap=!1;function Tc(){Oe.autoAddCss&&!Ap&&(i2(C_()),Ap=!0)}var c2={mixout:function(){return{dom:{css:C_,insertCss:Tc}}},hooks:function(){return{beforeDOMElementCreation:function(){Tc()},beforeI2svg:function(){Tc()}}}},fi=Vi||{};fi[ui]||(fi[ui]={});fi[ui].styles||(fi[ui].styles={});fi[ui].hooks||(fi[ui].hooks={});fi[ui].shims||(fi[ui].shims=[]);var Nn=fi[ui],R_=[],u2=function t(){pt.removeEventListener("DOMContentLoaded",t),qo=1,R_.map(function(e){return e()})},qo=!1;pi&&(qo=(pt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pt.readyState),qo||pt.addEventListener("DOMContentLoaded",u2));function f2(t){pi&&(qo?setTimeout(t,0):R_.push(t))}function Ds(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?w_(t):"<".concat(e," ").concat(a2(i),">").concat(a.map(Ds).join(""),"</").concat(e,">")}function wp(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var d2=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},Ac=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?d2(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function h2(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function uu(t){var e=h2(t);return e.length===1?e[0].toString(16):null}function p2(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Cp(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function fu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=Cp(e);typeof Nn.hooks.addPack=="function"&&!r?Nn.hooks.addPack(t,Cp(e)):Nn.styles[t]=Pe(Pe({},Nn.styles[t]||{}),a),t==="fas"&&fu("fa",e)}var bo,Mo,So,ta=Nn.styles,m2=Nn.shims,g2=(bo={},Nt(bo,ht,Object.values(Es[ht])),Nt(bo,Et,Object.values(Es[Et])),bo),Ef=null,L_={},P_={},I_={},N_={},D_={},_2=(Mo={},Nt(Mo,ht,Object.keys(xs[ht])),Nt(Mo,Et,Object.keys(xs[Et])),Mo);function v2(t){return~Jw.indexOf(t)}function x2(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!v2(r)?r:null}var O_=function(){var e=function(a){return Ac(ta,function(o,s,l){return o[l]=Ac(s,a,{}),o},{})};L_=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),P_=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),D_=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in ta||Oe.autoFetchSvg,i=Ac(m2,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});I_=i.names,N_=i.unicodes,Ef=Ml(Oe.styleDefault,{family:Oe.familyDefault})};n2(function(t){Ef=Ml(t.styleDefault,{family:Oe.familyDefault})});O_();function bf(t,e){return(L_[t]||{})[e]}function y2(t,e){return(P_[t]||{})[e]}function gr(t,e){return(D_[t]||{})[e]}function U_(t){return I_[t]||{prefix:null,iconName:null}}function E2(t){var e=N_[t],n=bf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wi(){return Ef}var Mf=function(){return{prefix:null,iconName:null,rest:[]}};function Ml(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ht:n,r=xs[i][t],a=ys[i][t]||ys[i][r],o=t in Nn.styles?t:null;return a||o||null}var Rp=(So={},Nt(So,ht,Object.keys(Es[ht])),Nt(So,Et,Object.keys(Es[Et])),So);function Sl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Nt(e,ht,"".concat(Oe.cssPrefix,"-").concat(ht)),Nt(e,Et,"".concat(Oe.cssPrefix,"-").concat(Et)),e),o=null,s=ht;(t.includes(a[ht])||t.some(function(c){return Rp[ht].includes(c)}))&&(s=ht),(t.includes(a[Et])||t.some(function(c){return Rp[Et].includes(c)}))&&(s=Et);var l=t.reduce(function(c,u){var f=x2(Oe.cssPrefix,u);if(ta[u]?(u=g2[s].includes(u)?Yw[s][u]:u,o=u,c.prefix=u):_2[s].indexOf(u)>-1?(o=u,c.prefix=Ml(u,{family:s})):f?c.iconName=f:u!==Oe.replacementClass&&u!==a[ht]&&u!==a[Et]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?U_(c.iconName):{},p=gr(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!ta.far&&ta.fas&&!Oe.autoFetchSvg&&(c.prefix="fas")}return c},Mf());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Et&&(ta.fass||Oe.autoFetchSvg)&&(l.prefix="fass",l.iconName=gr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Wi()||"fas"),l}var b2=function(){function t(){Dw(this,t),this.definitions={}}return Ow(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=Pe(Pe({},n.definitions[s]||{}),o[s]),fu(s,o[s]);var l=Es[ht][s];l&&fu(l,o[s]),O_()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),Lp=[],na={},ua={},M2=Object.keys(ua);function S2(t,e){var n=e.mixoutsTo;return Lp=t,na={},Object.keys(ua).forEach(function(i){M2.indexOf(i)===-1&&delete ua[i]}),Lp.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),jo(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){na[o]||(na[o]=[]),na[o].push(a[o])})}i.provides&&i.provides(ua)}),n}function du(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=na[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Rr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=na[t]||[];r.forEach(function(a){a.apply(null,n)})}function di(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ua[t]?ua[t].apply(null,e):void 0}function hu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wi();if(e)return e=gr(n,e)||e,wp(F_.definitions,n,e)||wp(Nn.styles,n,e)}var F_=new b2,T2=function(){Oe.autoReplaceSvg=!1,Oe.observeMutations=!1,Rr("noAuto")},A2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pi?(Rr("beforeI2svg",e),di("pseudoElements2svg",e),di("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Oe.autoReplaceSvg===!1&&(Oe.autoReplaceSvg=!0),Oe.observeMutations=!0,f2(function(){C2({autoReplaceSvgRoot:n}),Rr("watch",e)})}},w2={icon:function(e){if(e===null)return null;if(jo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Ml(e[0]);return{prefix:i,iconName:gr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Oe.cssPrefix,"-"))>-1||e.match($w))){var r=Sl(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Wi(),iconName:gr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Wi();return{prefix:a,iconName:gr(a,e)||e}}}},hn={noAuto:T2,config:Oe,dom:A2,parse:w2,library:F_,findIconDefinition:hu,toHtml:Ds},C2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?pt:n;(Object.keys(Nn.styles).length>0||Oe.autoFetchSvg)&&pi&&Oe.autoReplaceSvg&&hn.dom.i2svg({node:i})};function Tl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Ds(i)})}}),Object.defineProperty(t,"node",{get:function(){if(pi){var i=pt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function R2(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(yf(o)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=bl(Pe(Pe({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function L2(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(Oe.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Pe(Pe({},r),{},{id:o}),children:i}]}]}function Sf(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,E=i.found?i:n,x=E.width,m=E.height,h=r==="fak",_=[Oe.replacementClass,a?"".concat(Oe.cssPrefix,"-").concat(a):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),g={children:[],attributes:Pe(Pe({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(m)})},y=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/m*16*.0625,"em")}:{};p&&(g.attributes[Cr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||Ms())},children:[l]}),delete g.attributes.title);var A=Pe(Pe({},g),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:o,symbol:s,styles:Pe(Pe({},y),f.styles)}),C=i.found&&n.found?di("generateAbstractMask",A)||{children:[],attributes:{}}:di("generateAbstractIcon",A)||{children:[],attributes:{}},w=C.children,D=C.attributes;return A.children=w,A.attributes=D,s?L2(A):R2(A)}function Pp(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=Pe(Pe(Pe({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[Cr]="");var u=Pe({},o.styles);yf(r)&&(u.transform=o2({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=bl(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function P2(t){var e=t.content,n=t.title,i=t.extra,r=Pe(Pe(Pe({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=bl(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wc=Nn.styles;function pu(t){var e=t[0],n=t[1],i=t.slice(4),r=pf(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(mr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(mr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(mr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var I2={found:!1,width:512,height:512};function N2(t,e){!M_&&!Oe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mu(t,e){var n=e;return e==="fa"&&Oe.styleDefault!==null&&(e=Wi()),new Promise(function(i,r){if(di("missingIconAbstract"),n==="fa"){var a=U_(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&wc[e]&&wc[e][t]){var o=wc[e][t];return i(pu(o))}N2(t,e),i(Pe(Pe({},I2),{},{icon:Oe.showMissingIcons&&t?di("missingIconAbstract")||{}:{}}))})}var Ip=function(){},gu=Oe.measurePerformance&&go&&go.mark&&go.measure?go:{mark:Ip,measure:Ip},qa='FA "6.5.1"',D2=function(e){return gu.mark("".concat(qa," ").concat(e," begins")),function(){return k_(e)}},k_=function(e){gu.mark("".concat(qa," ").concat(e," ends")),gu.measure("".concat(qa," ").concat(e),"".concat(qa," ").concat(e," begins"),"".concat(qa," ").concat(e," ends"))},Tf={begin:D2,end:k_},Do=function(){};function Np(t){var e=t.getAttribute?t.getAttribute(Cr):null;return typeof e=="string"}function O2(t){var e=t.getAttribute?t.getAttribute(gf):null,n=t.getAttribute?t.getAttribute(_f):null;return e&&n}function U2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Oe.replacementClass)}function F2(){if(Oe.autoReplaceSvg===!0)return Oo.replace;var t=Oo[Oe.autoReplaceSvg];return t||Oo.replace}function k2(t){return pt.createElementNS("http://www.w3.org/2000/svg",t)}function B2(t){return pt.createElement(t)}function B_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?k2:B2:n;if(typeof t=="string")return pt.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(B_(o,{ceFn:i}))}),r}function z2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Oo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(B_(r),n)}),n.getAttribute(Cr)===null&&Oe.keepOriginalSource){var i=pt.createComment(z2(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~xf(n).indexOf(Oe.replacementClass))return Oo.replace(e);var r=new RegExp("".concat(Oe.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===Oe.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Ds(s)}).join(`
`);n.setAttribute(Cr,""),n.innerHTML=o}};function Dp(t){t()}function z_(t,e){var n=typeof e=="function"?e:Do;if(t.length===0)n();else{var i=Dp;Oe.mutateApproach===Ww&&(i=Vi.requestAnimationFrame||Dp),i(function(){var r=F2(),a=Tf.begin("mutate");t.map(r),a(),n()})}}var Af=!1;function H_(){Af=!0}function _u(){Af=!1}var Ko=null;function Op(t){if(Sp&&Oe.observeMutations){var e=t.treeCallback,n=e===void 0?Do:e,i=t.nodeCallback,r=i===void 0?Do:i,a=t.pseudoElementsCallback,o=a===void 0?Do:a,s=t.observeMutationsRoot,l=s===void 0?pt:s;Ko=new Sp(function(c){if(!Af){var u=Wi();Da(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Np(f.addedNodes[0])&&(Oe.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&Oe.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Np(f.target)&&~Zw.indexOf(f.attributeName))if(f.attributeName==="class"&&O2(f.target)){var d=Sl(xf(f.target)),p=d.prefix,E=d.iconName;f.target.setAttribute(gf,p||u),E&&f.target.setAttribute(_f,E)}else U2(f.target)&&r(f.target)})}}),pi&&Ko.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function H2(){Ko&&Ko.disconnect()}function G2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function V2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Sl(xf(t));return r.prefix||(r.prefix=Wi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=y2(r.prefix,t.innerText)||bf(r.prefix,uu(t.innerText))),!r.iconName&&Oe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function W2(t){var e=Da(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Oe.autoA11y&&(n?e["aria-labelledby"]="".concat(Oe.replacementClass,"-title-").concat(i||Ms()):(e["aria-hidden"]="true",e.focusable="false")),e}function X2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Up(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=V2(t),i=n.iconName,r=n.prefix,a=n.rest,o=W2(t),s=du("parseNodeAttributes",{},t),l=e.styleParser?G2(t):[];return Pe({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Y2=Nn.styles;function G_(t){var e=Oe.autoReplaceSvg==="nest"?Up(t,{styleParser:!1}):Up(t);return~e.extra.classes.indexOf(S_)?di("generateLayersText",t,e):di("generateSvgReplacementMutation",t,e)}var Xi=new Set;vf.map(function(t){Xi.add("fa-".concat(t))});Object.keys(xs[ht]).map(Xi.add.bind(Xi));Object.keys(xs[Et]).map(Xi.add.bind(Xi));Xi=Is(Xi);function Fp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pi)return Promise.resolve();var n=pt.documentElement.classList,i=function(f){return n.add("".concat(Tp,"-").concat(f))},r=function(f){return n.remove("".concat(Tp,"-").concat(f))},a=Oe.autoFetchSvg?Xi:vf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Y2));a.includes("fa")||a.push("fa");var o=[".".concat(S_,":not([").concat(Cr,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(Cr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Da(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Tf.begin("onTree"),c=s.reduce(function(u,f){try{var d=G_(f);d&&u.push(d)}catch(p){M_||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){z_(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function $2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G_(t).then(function(n){n&&z_([n],e)})}function j2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:hu(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:hu(r||{})),t(i,Pe(Pe({},n),{},{mask:r}))}}var q2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Vn:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,E=p===void 0?null:p,x=n.classes,m=x===void 0?[]:x,h=n.attributes,_=h===void 0?{}:h,g=n.styles,y=g===void 0?{}:g;if(e){var A=e.prefix,C=e.iconName,w=e.icon;return Tl(Pe({type:"icon"},e),function(){return Rr("beforeDOMElementCreation",{iconDefinition:e,params:n}),Oe.autoA11y&&(d?_["aria-labelledby"]="".concat(Oe.replacementClass,"-title-").concat(E||Ms()):(_["aria-hidden"]="true",_.focusable="false")),Sf({icons:{main:pu(w),mask:l?pu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:C,transform:Pe(Pe({},Vn),r),symbol:o,title:d,maskId:u,titleId:E,extra:{attributes:_,styles:y,classes:m}})})}},K2={mixout:function(){return{icon:j2(q2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fp,n.nodeCallback=$2,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?pt:i,a=n.callback,o=a===void 0?function(){}:a;return Fp(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,E){Promise.all([mu(r,s),u.iconName?mu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var m=pf(x,2),h=m[0],_=m[1];p([n,Sf({icons:{main:h,mask:_},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=bl(s);l.length>0&&(r.style=l);var c;return yf(o)&&(c=di("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},Z2={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return Tl({type:"layer"},function(){Rr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Oe.cssPrefix,"-layers")].concat(Is(a)).join(" ")},children:o}]})}}}},J2={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Tl({type:"counter",content:n},function(){return Rr("beforeDOMElementCreation",{content:n,params:i}),P2({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(Oe.cssPrefix,"-layers-counter")].concat(Is(s))}})})}}}},Q2={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?Vn:r,o=i.title,s=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return Tl({type:"text",content:n},function(){return Rr("beforeDOMElementCreation",{content:n,params:i}),Pp({content:n,transform:Pe(Pe({},Vn),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(Oe.cssPrefix,"-layers-text")].concat(Is(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(y_){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return Oe.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pp({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},eC=new RegExp('"',"ug"),kp=[1105920,1112319];function tC(t){var e=t.replace(eC,""),n=p2(e,0),i=n>=kp[0]&&n<=kp[1],r=e.length===2?e[0]===e[1]:!1;return{value:uu(r?e[0]:e),isSecondary:i||r}}function Bp(t,e){var n="".concat(Vw).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=Da(t.children),o=a.filter(function(w){return w.getAttribute(cu)===e})[0],s=Vi.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(jw),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Et:ht,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ys[d][l[2].toLowerCase()]:qw[d][c],E=tC(f),x=E.value,m=E.isSecondary,h=l[0].startsWith("FontAwesome"),_=bf(p,x),g=_;if(h){var y=E2(x);y.iconName&&y.prefix&&(_=y.iconName,p=y.prefix)}if(_&&!m&&(!o||o.getAttribute(gf)!==p||o.getAttribute(_f)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var A=X2(),C=A.extra;C.attributes[cu]=e,mu(_,p).then(function(w){var D=Sf(Pe(Pe({},A),{},{icons:{main:w,mask:Mf()},prefix:p,iconName:g,extra:C,watchable:!0})),T=pt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=D.map(function(L){return Ds(L)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function nC(t){return Promise.all([Bp(t,"::before"),Bp(t,"::after")])}function iC(t){return t.parentNode!==document.head&&!~Xw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zp(t){if(pi)return new Promise(function(e,n){var i=Da(t.querySelectorAll("*")).filter(iC).map(nC),r=Tf.begin("searchPseudoElements");H_(),Promise.all(i).then(function(){r(),_u(),e()}).catch(function(){r(),_u(),n()})})}var rC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?pt:i;Oe.searchPseudoElements&&zp(r)}}},Hp=!1,aC={mixout:function(){return{dom:{unwatch:function(){H_(),Hp=!0}}}},hooks:function(){return{bootstrap:function(){Op(du("mutationObserverCallbacks",{}))},noAuto:function(){H2()},watch:function(n){var i=n.observeMutationsRoot;Hp?_u():Op(du("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Gp=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},sC={mixout:function(){return{parse:{transform:function(n){return Gp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Gp(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:Pe({},p.outer),children:[{tag:"g",attributes:Pe({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Pe(Pe({},i.icon.attributes),p.path)}]}]}}}},Cc={x:0,y:0,width:"100%",height:"100%"};function Vp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oC(t){return t.tag==="g"?t.children:[t]}var lC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?Sl(r.split(" ").map(function(o){return o.trim()})):Mf();return a.prefix||(a.prefix=Wi()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,f=o.width,d=o.icon,p=s2({transform:l,containerWidth:f,iconWidth:c}),E={tag:"rect",attributes:Pe(Pe({},Cc),{},{fill:"white"})},x=u.children?{children:u.children.map(Vp)}:{},m={tag:"g",attributes:Pe({},p.inner),children:[Vp(Pe({tag:u.tag,attributes:Pe(Pe({},u.attributes),p.path)},x))]},h={tag:"g",attributes:Pe({},p.outer),children:[m]},_="mask-".concat(s||Ms()),g="clip-".concat(s||Ms()),y={tag:"mask",attributes:Pe(Pe({},Cc),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:oC(d)},y]};return i.push(A,{tag:"rect",attributes:Pe({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(_,")")},Cc)}),{children:i,attributes:r}}}},cC={provides:function(e){var n=!1;Vi.matchMedia&&(n=Vi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Pe(Pe({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Pe(Pe({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:Pe(Pe({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:Pe(Pe({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Pe(Pe({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:Pe(Pe({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Pe(Pe({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:Pe(Pe({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Pe(Pe({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},uC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},fC=[c2,K2,Z2,J2,Q2,rC,aC,sC,lC,cC,uC];S2(fC,{mixoutsTo:hn});hn.noAuto;hn.config;var dC=hn.library;hn.dom;var vu=hn.parse;hn.findIconDefinition;hn.toHtml;var hC=hn.icon;hn.layer;hn.text;hn.counter;var pC={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]};function Wp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ti(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wp(Object(n),!0).forEach(function(i){en(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Zo(t){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zo(t)}function en(t,e,n){return e=vC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mC(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gC(t,e){if(t==null)return{};var n=mC(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function _C(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vC(t){var e=_C(t,"string");return typeof e=="symbol"?e:String(e)}var xC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V_={exports:{}};(function(t){(function(e){var n=function(h,_,g){if(!c(_)||f(_)||d(_)||p(_)||l(_))return _;var y,A=0,C=0;if(u(_))for(y=[],C=_.length;A<C;A++)y.push(n(h,_[A],g));else{y={};for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(y[h(w,g)]=n(h,_[w],g))}return y},i=function(h,_){_=_||{};var g=_.separator||"_",y=_.split||/(?=[A-Z])/;return h.split(y).join(g)},r=function(h){return E(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(_,g){return g?g.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},a=function(h){var _=r(h);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(h,_){return i(h,_).toLowerCase()},s=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},u=function(h){return s.call(h)=="[object Array]"},f=function(h){return s.call(h)=="[object Date]"},d=function(h){return s.call(h)=="[object RegExp]"},p=function(h){return s.call(h)=="[object Boolean]"},E=function(h){return h=h-0,h===h},x=function(h,_){var g=_&&"process"in _?_.process:_;return typeof g!="function"?h:function(y,A){return g(y,h,A)}},m={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(h,_){return n(x(r,_),h)},decamelizeKeys:function(h,_){return n(x(o,_),h,_)},pascalizeKeys:function(h,_){return n(x(a,_),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(xC)})(V_);var yC=V_.exports,EC=["class","style"];function bC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=yC.camelize(n.slice(0,i)),a=n.slice(i+1).trim();return e[r]=a,e},{})}function MC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function W_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return W_(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=MC(u);break;case"style":l.style=bC(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=gC(n,EC);return Ra(t.tag,ti(ti(ti({},e),{},{class:r.class,style:ti(ti({},r.style),o)},r.attrs),s),i)}var X_=!1;try{X_=!0}catch{}function SC(){if(!X_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?en({},t,e):{}}function TC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},en(e,"fa-".concat(t.size),t.size!==null),en(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),en(e,"fa-pull-".concat(t.pull),t.pull!==null),en(e,"fa-swap-opacity",t.swapOpacity),en(e,"fa-bounce",t.bounce),en(e,"fa-shake",t.shake),en(e,"fa-beat",t.beat),en(e,"fa-fade",t.fade),en(e,"fa-beat-fade",t.beatFade),en(e,"fa-flash",t.flash),en(e,"fa-spin-pulse",t.spinPulse),en(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Xp(t){if(t&&Zo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vu.icon)return vu.icon(t);if(t===null)return null;if(Zo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var AC=wa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=st(function(){return Xp(e.icon)}),a=st(function(){return Rc("classes",TC(e))}),o=st(function(){return Rc("transform",typeof e.transform=="string"?vu.transform(e.transform):e.transform)}),s=st(function(){return Rc("mask",Xp(e.mask))}),l=st(function(){return hC(r.value,ti(ti(ti(ti({},a.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});si(l,function(u){if(!u)return SC("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=st(function(){return l.value?W_(l.value.abstract[0],{},i):null});return function(){return c.value}}});/*!
  * shared v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const xu=typeof window<"u",ji=(t,e=!1)=>e?Symbol.for(t):Symbol(t),wC=(t,e,n)=>CC({l:t,k:e,s:n}),CC=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Rt=t=>typeof t=="number"&&isFinite(t),RC=t=>$_(t)==="[object Date]",Yi=t=>$_(t)==="[object RegExp]",Al=t=>We(t)&&Object.keys(t).length===0,zt=Object.assign;let Yp;const ni=()=>Yp||(Yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $p(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const LC=Object.prototype.hasOwnProperty;function Ss(t,e){return LC.call(t,e)}const mt=Array.isArray,vt=t=>typeof t=="function",Ce=t=>typeof t=="string",Je=t=>typeof t=="boolean",ot=t=>t!==null&&typeof t=="object",Y_=Object.prototype.toString,$_=t=>Y_.call(t),We=t=>{if(!ot(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},PC=t=>t==null?"":mt(t)||We(t)&&t.toString===Y_?JSON.stringify(t,null,2):String(t);function IC(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function wf(t){let e=t;return()=>++e}function NC(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const To=t=>!ot(t)||mt(t);function os(t,e){if(To(t)||To(e))throw new Error("Invalid value");for(const n in t)Ss(t,n)&&(To(t[n])||To(e[n])?e[n]=t[n]:os(t[n],e[n]))}/*!
  * message-compiler v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function DC(t,e,n){return{line:t,column:e,offset:n}}function yu(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const OC=/\{([0-9a-zA-Z]+)\}/g;function UC(t,...e){return e.length===1&&FC(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(OC,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const j_=Object.assign,jp=t=>typeof t=="string",FC=t=>t!==null&&typeof t=="object";function q_(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const ze={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},kC={[ze.EXPECTED_TOKEN]:"Expected token: '{0}'",[ze.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[ze.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[ze.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[ze.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[ze.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[ze.EMPTY_PLACEHOLDER]:"Empty placeholder",[ze.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[ze.INVALID_LINKED_FORMAT]:"Invalid linked format",[ze.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[ze.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[ze.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[ze.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[ze.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[ze.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Oa(t,e,n={}){const{domain:i,messages:r,args:a}=n,o=UC((r||kC)[t]||"",...a||[]),s=new SyntaxError(String(o));return s.code=t,e&&(s.location=e),s.domain=i,s}function BC(t){throw t}const Zn=" ",zC="\r",Zt=`
`,HC=String.fromCharCode(8232),GC=String.fromCharCode(8233);function VC(t){const e=t;let n=0,i=1,r=1,a=0;const o=w=>e[w]===zC&&e[w+1]===Zt,s=w=>e[w]===Zt,l=w=>e[w]===GC,c=w=>e[w]===HC,u=w=>o(w)||s(w)||l(w)||c(w),f=()=>n,d=()=>i,p=()=>r,E=()=>a,x=w=>o(w)||l(w)||c(w)?Zt:e[w],m=()=>x(n),h=()=>x(n+a);function _(){return a=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function g(){return o(n+a)&&a++,a++,e[n+a]}function y(){n=0,i=1,r=1,a=0}function A(w=0){a=w}function C(){const w=n+a;for(;w!==n;)_();a=0}return{index:f,line:d,column:p,peekOffset:E,charAt:x,currentChar:m,currentPeek:h,next:_,peek:g,reset:y,resetPeek:A,skipToPeek:C}}const Ai=void 0,WC=".",qp="'",XC="tokenizer";function YC(t,e={}){const n=e.location!==!1,i=VC(t),r=()=>i.index(),a=()=>DC(i.line(),i.column(),i.index()),o=a(),s=r(),l={currentType:14,offset:s,startLoc:o,endLoc:o,lastType:14,lastOffset:s,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(M,b,P,...F){const q=c();if(b.column+=P,b.offset+=P,u){const J=n?yu(q.startLoc,b):null,te=Oa(M,J,{domain:XC,args:F});u(te)}}function d(M,b,P){M.endLoc=a(),M.currentType=b;const F={type:b};return n&&(F.loc=yu(M.startLoc,M.endLoc)),P!=null&&(F.value=P),F}const p=M=>d(M,14);function E(M,b){return M.currentChar()===b?(M.next(),b):(f(ze.EXPECTED_TOKEN,a(),0,b),"")}function x(M){let b="";for(;M.currentPeek()===Zn||M.currentPeek()===Zt;)b+=M.currentPeek(),M.peek();return b}function m(M){const b=x(M);return M.skipToPeek(),b}function h(M){if(M===Ai)return!1;const b=M.charCodeAt(0);return b>=97&&b<=122||b>=65&&b<=90||b===95}function _(M){if(M===Ai)return!1;const b=M.charCodeAt(0);return b>=48&&b<=57}function g(M,b){const{currentType:P}=b;if(P!==2)return!1;x(M);const F=h(M.currentPeek());return M.resetPeek(),F}function y(M,b){const{currentType:P}=b;if(P!==2)return!1;x(M);const F=M.currentPeek()==="-"?M.peek():M.currentPeek(),q=_(F);return M.resetPeek(),q}function A(M,b){const{currentType:P}=b;if(P!==2)return!1;x(M);const F=M.currentPeek()===qp;return M.resetPeek(),F}function C(M,b){const{currentType:P}=b;if(P!==8)return!1;x(M);const F=M.currentPeek()===".";return M.resetPeek(),F}function w(M,b){const{currentType:P}=b;if(P!==9)return!1;x(M);const F=h(M.currentPeek());return M.resetPeek(),F}function D(M,b){const{currentType:P}=b;if(!(P===8||P===12))return!1;x(M);const F=M.currentPeek()===":";return M.resetPeek(),F}function T(M,b){const{currentType:P}=b;if(P!==10)return!1;const F=()=>{const J=M.currentPeek();return J==="{"?h(M.peek()):J==="@"||J==="%"||J==="|"||J===":"||J==="."||J===Zn||!J?!1:J===Zt?(M.peek(),F()):h(J)},q=F();return M.resetPeek(),q}function L(M){x(M);const b=M.currentPeek()==="|";return M.resetPeek(),b}function z(M){const b=x(M),P=M.currentPeek()==="%"&&M.peek()==="{";return M.resetPeek(),{isModulo:P,hasSpace:b.length>0}}function U(M,b=!0){const P=(q=!1,J="",te=!1)=>{const fe=M.currentPeek();return fe==="{"?J==="%"?!1:q:fe==="@"||!fe?J==="%"?!0:q:fe==="%"?(M.peek(),P(q,"%",!0)):fe==="|"?J==="%"||te?!0:!(J===Zn||J===Zt):fe===Zn?(M.peek(),P(!0,Zn,te)):fe===Zt?(M.peek(),P(!0,Zt,te)):!0},F=P();return b&&M.resetPeek(),F}function V(M,b){const P=M.currentChar();return P===Ai?Ai:b(P)?(M.next(),P):null}function O(M){return V(M,P=>{const F=P.charCodeAt(0);return F>=97&&F<=122||F>=65&&F<=90||F>=48&&F<=57||F===95||F===36})}function X(M){return V(M,P=>{const F=P.charCodeAt(0);return F>=48&&F<=57})}function j(M){return V(M,P=>{const F=P.charCodeAt(0);return F>=48&&F<=57||F>=65&&F<=70||F>=97&&F<=102})}function Y(M){let b="",P="";for(;b=X(M);)P+=b;return P}function ie(M){m(M);const b=M.currentChar();return b!=="%"&&f(ze.EXPECTED_TOKEN,a(),0,b),M.next(),"%"}function ee(M){let b="";for(;;){const P=M.currentChar();if(P==="{"||P==="}"||P==="@"||P==="|"||!P)break;if(P==="%")if(U(M))b+=P,M.next();else break;else if(P===Zn||P===Zt)if(U(M))b+=P,M.next();else{if(L(M))break;b+=P,M.next()}else b+=P,M.next()}return b}function ce(M){m(M);let b="",P="";for(;b=O(M);)P+=b;return M.currentChar()===Ai&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),P}function B(M){m(M);let b="";return M.currentChar()==="-"?(M.next(),b+=`-${Y(M)}`):b+=Y(M),M.currentChar()===Ai&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),b}function Z(M){m(M),E(M,"'");let b="",P="";const F=J=>J!==qp&&J!==Zt;for(;b=V(M,F);)b==="\\"?P+=me(M):P+=b;const q=M.currentChar();return q===Zt||q===Ai?(f(ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,a(),0),q===Zt&&(M.next(),E(M,"'")),P):(E(M,"'"),P)}function me(M){const b=M.currentChar();switch(b){case"\\":case"'":return M.next(),`\\${b}`;case"u":return Ee(M,b,4);case"U":return Ee(M,b,6);default:return f(ze.UNKNOWN_ESCAPE_SEQUENCE,a(),0,b),""}}function Ee(M,b,P){E(M,b);let F="";for(let q=0;q<P;q++){const J=j(M);if(!J){f(ze.INVALID_UNICODE_ESCAPE_SEQUENCE,a(),0,`\\${b}${F}${M.currentChar()}`);break}F+=J}return`\\${b}${F}`}function G(M){m(M);let b="",P="";const F=q=>q!=="{"&&q!=="}"&&q!==Zn&&q!==Zt;for(;b=V(M,F);)P+=b;return P}function se(M){let b="",P="";for(;b=O(M);)P+=b;return P}function oe(M){const b=(P=!1,F)=>{const q=M.currentChar();return q==="{"||q==="%"||q==="@"||q==="|"||q==="("||q===")"||!q||q===Zn?F:q===Zt||q===WC?(F+=q,M.next(),b(P,F)):(F+=q,M.next(),b(!0,F))};return b(!1,"")}function de(M){m(M);const b=E(M,"|");return m(M),b}function ye(M,b){let P=null;switch(M.currentChar()){case"{":return b.braceNest>=1&&f(ze.NOT_ALLOW_NEST_PLACEHOLDER,a(),0),M.next(),P=d(b,2,"{"),m(M),b.braceNest++,P;case"}":return b.braceNest>0&&b.currentType===2&&f(ze.EMPTY_PLACEHOLDER,a(),0),M.next(),P=d(b,3,"}"),b.braceNest--,b.braceNest>0&&m(M),b.inLinked&&b.braceNest===0&&(b.inLinked=!1),P;case"@":return b.braceNest>0&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),P=Ne(M,b)||p(b),b.braceNest=0,P;default:let q=!0,J=!0,te=!0;if(L(M))return b.braceNest>0&&f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),P=d(b,1,de(M)),b.braceNest=0,b.inLinked=!1,P;if(b.braceNest>0&&(b.currentType===5||b.currentType===6||b.currentType===7))return f(ze.UNTERMINATED_CLOSING_BRACE,a(),0),b.braceNest=0,_e(M,b);if(q=g(M,b))return P=d(b,5,ce(M)),m(M),P;if(J=y(M,b))return P=d(b,6,B(M)),m(M),P;if(te=A(M,b))return P=d(b,7,Z(M)),m(M),P;if(!q&&!J&&!te)return P=d(b,13,G(M)),f(ze.INVALID_TOKEN_IN_PLACEHOLDER,a(),0,P.value),m(M),P;break}return P}function Ne(M,b){const{currentType:P}=b;let F=null;const q=M.currentChar();switch((P===8||P===9||P===12||P===10)&&(q===Zt||q===Zn)&&f(ze.INVALID_LINKED_FORMAT,a(),0),q){case"@":return M.next(),F=d(b,8,"@"),b.inLinked=!0,F;case".":return m(M),M.next(),d(b,9,".");case":":return m(M),M.next(),d(b,10,":");default:return L(M)?(F=d(b,1,de(M)),b.braceNest=0,b.inLinked=!1,F):C(M,b)||D(M,b)?(m(M),Ne(M,b)):w(M,b)?(m(M),d(b,12,se(M))):T(M,b)?(m(M),q==="{"?ye(M,b)||F:d(b,11,oe(M))):(P===8&&f(ze.INVALID_LINKED_FORMAT,a(),0),b.braceNest=0,b.inLinked=!1,_e(M,b))}}function _e(M,b){let P={type:14};if(b.braceNest>0)return ye(M,b)||p(b);if(b.inLinked)return Ne(M,b)||p(b);switch(M.currentChar()){case"{":return ye(M,b)||p(b);case"}":return f(ze.UNBALANCED_CLOSING_BRACE,a(),0),M.next(),d(b,3,"}");case"@":return Ne(M,b)||p(b);default:if(L(M))return P=d(b,1,de(M)),b.braceNest=0,b.inLinked=!1,P;const{isModulo:q,hasSpace:J}=z(M);if(q)return J?d(b,0,ee(M)):d(b,4,ie(M));if(U(M))return d(b,0,ee(M));break}return P}function S(){const{currentType:M,offset:b,startLoc:P,endLoc:F}=l;return l.lastType=M,l.lastOffset=b,l.lastStartLoc=P,l.lastEndLoc=F,l.offset=r(),l.startLoc=a(),i.currentChar()===Ai?d(l,14):_e(i,l)}return{nextToken:S,currentOffset:r,currentPosition:a,context:c}}const $C="parser",jC=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function qC(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function KC(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,_,g,y,...A){const C=h.currentPosition();if(C.offset+=y,C.column+=y,n){const w=e?yu(g,C):null,D=Oa(_,w,{domain:$C,args:A});n(D)}}function r(h,_,g){const y={type:h};return e&&(y.start=_,y.end=_,y.loc={start:g,end:g}),y}function a(h,_,g,y){y&&(h.type=y),e&&(h.end=_,h.loc&&(h.loc.end=g))}function o(h,_){const g=h.context(),y=r(3,g.offset,g.startLoc);return y.value=_,a(y,h.currentOffset(),h.currentPosition()),y}function s(h,_){const g=h.context(),{lastOffset:y,lastStartLoc:A}=g,C=r(5,y,A);return C.index=parseInt(_,10),h.nextToken(),a(C,h.currentOffset(),h.currentPosition()),C}function l(h,_){const g=h.context(),{lastOffset:y,lastStartLoc:A}=g,C=r(4,y,A);return C.key=_,h.nextToken(),a(C,h.currentOffset(),h.currentPosition()),C}function c(h,_){const g=h.context(),{lastOffset:y,lastStartLoc:A}=g,C=r(9,y,A);return C.value=_.replace(jC,qC),h.nextToken(),a(C,h.currentOffset(),h.currentPosition()),C}function u(h){const _=h.nextToken(),g=h.context(),{lastOffset:y,lastStartLoc:A}=g,C=r(8,y,A);return _.type!==12?(i(h,ze.UNEXPECTED_EMPTY_LINKED_MODIFIER,g.lastStartLoc,0),C.value="",a(C,y,A),{nextConsumeToken:_,node:C}):(_.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,g.lastStartLoc,0,Fn(_)),C.value=_.value||"",a(C,h.currentOffset(),h.currentPosition()),{node:C})}function f(h,_){const g=h.context(),y=r(7,g.offset,g.startLoc);return y.value=_,a(y,h.currentOffset(),h.currentPosition()),y}function d(h){const _=h.context(),g=r(6,_.offset,_.startLoc);let y=h.nextToken();if(y.type===9){const A=u(h);g.modifier=A.node,y=A.nextConsumeToken||h.nextToken()}switch(y.type!==10&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(y)),y=h.nextToken(),y.type===2&&(y=h.nextToken()),y.type){case 11:y.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(y)),g.key=f(h,y.value||"");break;case 5:y.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(y)),g.key=l(h,y.value||"");break;case 6:y.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(y)),g.key=s(h,y.value||"");break;case 7:y.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(y)),g.key=c(h,y.value||"");break;default:i(h,ze.UNEXPECTED_EMPTY_LINKED_KEY,_.lastStartLoc,0);const A=h.context(),C=r(7,A.offset,A.startLoc);return C.value="",a(C,A.offset,A.startLoc),g.key=C,a(g,A.offset,A.startLoc),{nextConsumeToken:y,node:g}}return a(g,h.currentOffset(),h.currentPosition()),{node:g}}function p(h){const _=h.context(),g=_.currentType===1?h.currentOffset():_.offset,y=_.currentType===1?_.endLoc:_.startLoc,A=r(2,g,y);A.items=[];let C=null;do{const T=C||h.nextToken();switch(C=null,T.type){case 0:T.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(o(h,T.value||""));break;case 6:T.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(s(h,T.value||""));break;case 5:T.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(l(h,T.value||""));break;case 7:T.value==null&&i(h,ze.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Fn(T)),A.items.push(c(h,T.value||""));break;case 8:const L=d(h);A.items.push(L.node),C=L.nextConsumeToken||null;break}}while(_.currentType!==14&&_.currentType!==1);const w=_.currentType===1?_.lastOffset:h.currentOffset(),D=_.currentType===1?_.lastEndLoc:h.currentPosition();return a(A,w,D),A}function E(h,_,g,y){const A=h.context();let C=y.items.length===0;const w=r(1,_,g);w.cases=[],w.cases.push(y);do{const D=p(h);C||(C=D.items.length===0),w.cases.push(D)}while(A.currentType!==14);return C&&i(h,ze.MUST_HAVE_MESSAGES_IN_PLURAL,g,0),a(w,h.currentOffset(),h.currentPosition()),w}function x(h){const _=h.context(),{offset:g,startLoc:y}=_,A=p(h);return _.currentType===14?A:E(h,g,y,A)}function m(h){const _=YC(h,j_({},t)),g=_.context(),y=r(0,g.offset,g.startLoc);return e&&y.loc&&(y.loc.source=h),y.body=x(_),t.onCacheKey&&(y.cacheKey=t.onCacheKey(h)),g.currentType!==14&&i(_,ze.UNEXPECTED_LEXICAL_ANALYSIS,g.lastStartLoc,0,h[g.offset]||""),a(y,_.currentOffset(),_.currentPosition()),y}return{parse:m}}function Fn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function ZC(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:a=>(n.helpers.add(a),a)}}function Kp(t,e){for(let n=0;n<t.length;n++)Cf(t[n],e)}function Cf(t,e){switch(t.type){case 1:Kp(t.cases,e),e.helper("plural");break;case 2:Kp(t.items,e);break;case 6:Cf(t.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function JC(t,e={}){const n=ZC(t);n.helper("normalize"),t.body&&Cf(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function QC(t){const e=t.body;return e.type===2?Zp(e):e.cases.forEach(n=>Zp(n)),t}function Zp(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=q_(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const eR="minifier";function Qr(t){switch(t.t=t.type,t.type){case 0:const e=t;Qr(e.body),e.b=e.body,delete e.body;break;case 1:const n=t,i=n.cases;for(let u=0;u<i.length;u++)Qr(i[u]);n.c=i,delete n.cases;break;case 2:const r=t,a=r.items;for(let u=0;u<a.length;u++)Qr(a[u]);r.i=a,delete r.items,r.static&&(r.s=r.static,delete r.static);break;case 3:case 9:case 8:case 7:const o=t;o.value&&(o.v=o.value,delete o.value);break;case 6:const s=t;Qr(s.key),s.k=s.key,delete s.key,s.modifier&&(Qr(s.modifier),s.m=s.modifier,delete s.modifier);break;case 5:const l=t;l.i=l.index,delete l.index;break;case 4:const c=t;c.k=c.key,delete c.key;break;default:throw Oa(ze.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:eR,args:[t.type]})}delete t.type}const tR="parser";function nR(t,e){const{sourceMap:n,filename:i,breakLineCode:r,needIndent:a}=e,o=e.location!==!1,s={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:a,indentLevel:0};o&&t.loc&&(s.source=t.loc.source);const l=()=>s;function c(m,h){s.code+=m}function u(m,h=!0){const _=h?r:"";c(a?_+"  ".repeat(m):_)}function f(m=!0){const h=++s.indentLevel;m&&u(h)}function d(m=!0){const h=--s.indentLevel;m&&u(h)}function p(){u(s.indentLevel)}return{context:l,push:c,indent:f,deindent:d,newline:p,helper:m=>`_${m}`,needIndent:()=>s.needIndent}}function iR(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Ea(t,e.key),e.modifier?(t.push(", "),Ea(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function rR(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let a=0;a<r&&(Ea(t,e.items[a]),a!==r-1);a++)t.push(", ");t.deindent(i()),t.push("])")}function aR(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let a=0;a<r&&(Ea(t,e.cases[a]),a!==r-1);a++)t.push(", ");t.deindent(i()),t.push("])")}}function sR(t,e){e.body?Ea(t,e.body):t.push("null")}function Ea(t,e){const{helper:n}=t;switch(e.type){case 0:sR(t,e);break;case 1:aR(t,e);break;case 2:rR(t,e);break;case 6:iR(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Oa(ze.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:tR,args:[e.type]})}}const oR=(t,e={})=>{const n=jp(e.mode)?e.mode:"normal",i=jp(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,a=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",s=t.helpers||[],l=nR(t,{mode:n,filename:i,sourceMap:r,breakLineCode:a,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),s.length>0&&(l.push(`const { ${q_(s.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Ea(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function lR(t,e={}){const n=j_({},e),i=!!n.jit,r=!!n.minify,a=n.optimize==null?!0:n.optimize,s=KC(n).parse(t);return i?(a&&QC(s),r&&Qr(s),{ast:s,code:""}):(JC(s,n),oR(s,n))}/*!
  * core-base v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function cR(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ni().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ni().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ni().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const qi=[];qi[0]={w:[0],i:[3,0],"[":[4],o:[7]};qi[1]={w:[1],".":[2],"[":[4],o:[7]};qi[2]={w:[2],i:[3,0],0:[3,0]};qi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};qi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};qi[5]={"'":[4,0],o:8,l:[5,0]};qi[6]={'"':[4,0],o:8,l:[6,0]};const uR=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function fR(t){return uR.test(t)}function dR(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function hR(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function pR(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:fR(e)?dR(e):"*"+e}function mR(t){const e=[];let n=-1,i=0,r=0,a,o,s,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=s:o+=s},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=pR(o),o===!1))return!1;d[1]()}};function p(){const E=t[n+1];if(i===5&&E==="'"||i===6&&E==='"')return n++,s="\\"+E,d[0](),!0}for(;i!==null;)if(n++,a=t[n],!(a==="\\"&&p())){if(l=hR(a),f=qi[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(s=a,u()===!1))))return;if(i===7)return e}}const Jp=new Map;function gR(t,e){return ot(t)?t[e]:null}function _R(t,e){if(!ot(t))return null;let n=Jp.get(e);if(n||(n=mR(e),n&&Jp.set(e,n)),!n)return null;const i=n.length;let r=t,a=0;for(;a<i;){const o=r[n[a]];if(o===void 0||vt(r))return null;r=o,a++}return r}const vR=t=>t,xR=t=>"",yR="text",ER=t=>t.length===0?"":IC(t),bR=PC;function Qp(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function MR(t){const e=Rt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Rt(t.named.count)||Rt(t.named.n))?Rt(t.named.count)?t.named.count:Rt(t.named.n)?t.named.n:e:e}function SR(t,e){e.count||(e.count=t),e.n||(e.n=t)}function TR(t={}){const e=t.locale,n=MR(t),i=ot(t.pluralRules)&&Ce(e)&&vt(t.pluralRules[e])?t.pluralRules[e]:Qp,r=ot(t.pluralRules)&&Ce(e)&&vt(t.pluralRules[e])?Qp:void 0,a=h=>h[i(n,h.length,r)],o=t.list||[],s=h=>o[h],l=t.named||{};Rt(t.pluralIndex)&&SR(n,l);const c=h=>l[h];function u(h){const _=vt(t.messages)?t.messages(h):ot(t.messages)?t.messages[h]:!1;return _||(t.parent?t.parent.message(h):xR)}const f=h=>t.modifiers?t.modifiers[h]:vR,d=We(t.processor)&&vt(t.processor.normalize)?t.processor.normalize:ER,p=We(t.processor)&&vt(t.processor.interpolate)?t.processor.interpolate:bR,E=We(t.processor)&&Ce(t.processor.type)?t.processor.type:yR,m={list:s,named:c,plural:a,linked:(h,..._)=>{const[g,y]=_;let A="text",C="";_.length===1?ot(g)?(C=g.modifier||C,A=g.type||A):Ce(g)&&(C=g||C):_.length===2&&(Ce(g)&&(C=g||C),Ce(y)&&(A=y||A));const w=u(h)(m),D=A==="vnode"&&mt(w)&&C?w[0]:w;return C?f(C)(D,A):D},message:u,type:E,interpolate:p,normalize:d,values:zt({},o,l)};return m}let Ts=null;function AR(t){Ts=t}function wR(t,e,n){Ts&&Ts.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const CR=RR("function:translate");function RR(t){return e=>Ts&&Ts.emit(t,e)}const LR={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Rf(t,e){return e.locale!=null?em(e.locale):em(t.locale)}let Lc;function em(t){return Ce(t)?t:Lc!=null&&t.resolvedOnce?Lc:Lc=t()}function PR(t,e,n){return[...new Set([n,...mt(e)?e:ot(e)?Object.keys(e):Ce(e)?[e]:[n]])]}function K_(t,e,n){const i=Ce(n)?n:ba,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let a=r.__localeChainCache.get(i);if(!a){a=[];let o=[n];for(;mt(o);)o=tm(a,o,e);const s=mt(e)||!We(e)?e:e.default?e.default:null;o=Ce(s)?[s]:s,mt(o)&&tm(a,o,!1),r.__localeChainCache.set(i,a)}return a}function tm(t,e,n){let i=!0;for(let r=0;r<e.length&&Je(i);r++){const a=e[r];Ce(a)&&(i=IR(t,e[r],n))}return i}function IR(t,e,n){let i;const r=e.split("-");do{const a=r.join("-");i=NR(t,a,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function NR(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(mt(n)||We(n))&&n[r]&&(i=n[r])}return i}const DR="9.7.1",wl=-1,ba="en-US",nm="",im=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function OR(){return{upper:(t,e)=>e==="text"&&Ce(t)?t.toUpperCase():e==="vnode"&&ot(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ce(t)?t.toLowerCase():e==="vnode"&&ot(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ce(t)?im(t):e==="vnode"&&ot(t)&&"__v_isVNode"in t?im(t.children):t}}let Z_;function rm(t){Z_=t}let J_;function UR(t){J_=t}let Q_;function FR(t){Q_=t}let e1=null;const kR=t=>{e1=t},BR=()=>e1;let t1=null;const am=t=>{t1=t},zR=()=>t1;let sm=0;function HR(t={}){const e=vt(t.onWarn)?t.onWarn:NC,n=Ce(t.version)?t.version:DR,i=Ce(t.locale)||vt(t.locale)?t.locale:ba,r=vt(i)?ba:i,a=mt(t.fallbackLocale)||We(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=We(t.messages)?t.messages:{[r]:{}},s=We(t.datetimeFormats)?t.datetimeFormats:{[r]:{}},l=We(t.numberFormats)?t.numberFormats:{[r]:{}},c=zt({},t.modifiers||{},OR()),u=t.pluralRules||{},f=vt(t.missing)?t.missing:null,d=Je(t.missingWarn)||Yi(t.missingWarn)?t.missingWarn:!0,p=Je(t.fallbackWarn)||Yi(t.fallbackWarn)?t.fallbackWarn:!0,E=!!t.fallbackFormat,x=!!t.unresolving,m=vt(t.postTranslation)?t.postTranslation:null,h=We(t.processor)?t.processor:null,_=Je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter,y=vt(t.messageCompiler)?t.messageCompiler:Z_,A=vt(t.messageResolver)?t.messageResolver:J_||gR,C=vt(t.localeFallbacker)?t.localeFallbacker:Q_||PR,w=ot(t.fallbackContext)?t.fallbackContext:void 0,D=t,T=ot(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,L=ot(D.__numberFormatters)?D.__numberFormatters:new Map,z=ot(D.__meta)?D.__meta:{};sm++;const U={version:n,cid:sm,locale:i,fallbackLocale:a,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:E,unresolving:x,postTranslation:m,processor:h,warnHtmlMessage:_,escapeParameter:g,messageCompiler:y,messageResolver:A,localeFallbacker:C,fallbackContext:w,onWarn:e,__meta:z};return U.datetimeFormats=s,U.numberFormats=l,U.__datetimeFormatters=T,U.__numberFormatters=L,__INTLIFY_PROD_DEVTOOLS__&&wR(U,n,z),U}function Lf(t,e,n,i,r){const{missing:a,onWarn:o}=t;if(a!==null){const s=a(t,n,e,r);return Ce(s)?s:e}else return e}function Xa(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Pc(t){return n=>GR(n,t)}function GR(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const i=n,r=i.c||i.cases;return t.plural(r.reduce((a,o)=>[...a,om(t,o)],[]))}else return om(t,n)}function om(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const i=(e.i||e.items).reduce((r,a)=>[...r,Eu(t,a)],[]);return t.normalize(i)}}function Eu(t,e){const n=e.t||e.type;switch(n){case 3:const i=e;return i.v||i.value;case 9:const r=e;return r.v||r.value;case 4:const a=e;return t.interpolate(t.named(a.k||a.key));case 5:const o=e;return t.interpolate(t.list(o.i!=null?o.i:o.index));case 6:const s=e,l=s.m||s.modifier;return t.linked(Eu(t,s.k||s.key),l?Eu(t,l):void 0,t.type);case 7:const c=e;return c.v||c.value;case 8:const u=e;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${n}`)}}const n1=ze.__EXTEND_POINT__,Ao=wf(n1),Di={INVALID_ARGUMENT:n1,INVALID_DATE_ARGUMENT:Ao(),INVALID_ISO_DATE_ARGUMENT:Ao(),NOT_SUPPORT_NON_STRING_MESSAGE:Ao(),__EXTEND_POINT__:Ao()};function _r(t){return Oa(t,null,void 0)}const i1=t=>t;let ia=Object.create(null);const Ma=t=>ot(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function r1(t,e={}){let n=!1;const i=e.onError||BC;return e.onError=r=>{n=!0,i(r)},{...lR(t,e),detectError:n}}const VR=(t,e)=>{if(!Ce(t))throw _r(Di.NOT_SUPPORT_NON_STRING_MESSAGE);{Je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||i1)(t),r=ia[i];if(r)return r;const{code:a,detectError:o}=r1(t,e),s=new Function(`return ${a}`)();return o?s:ia[i]=s}};function WR(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ce(t)){Je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||i1)(t),r=ia[i];if(r)return r;const{ast:a,detectError:o}=r1(t,{...e,location:!1,jit:!0}),s=Pc(a);return o?s:ia[i]=s}else{const n=t.cacheKey;if(n){const i=ia[n];return i||(ia[n]=Pc(t))}else return Pc(t)}}const lm=()=>"",xn=t=>vt(t);function cm(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:a,fallbackLocale:o,messages:s}=t,[l,c]=bu(...e),u=Je(c.missingWarn)?c.missingWarn:t.missingWarn,f=Je(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=Je(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,E=Ce(c.default)||Je(c.default)?Je(c.default)?a?l:()=>l:c.default:n?a?l:()=>l:"",x=n||E!=="",m=Rf(t,c);d&&XR(c);let[h,_,g]=p?[l,m,s[m]||{}]:a1(t,l,m,o,f,u),y=h,A=l;if(!p&&!(Ce(y)||Ma(y)||xn(y))&&x&&(y=E,A=y),!p&&(!(Ce(y)||Ma(y)||xn(y))||!Ce(_)))return r?wl:l;let C=!1;const w=()=>{C=!0},D=xn(y)?y:s1(t,l,_,y,A,w);if(C)return y;const T=jR(t,_,g,c),L=TR(T),z=YR(t,D,L),U=i?i(z,l):z;if(__INTLIFY_PROD_DEVTOOLS__){const V={timestamp:Date.now(),key:Ce(l)?l:xn(y)?y.key:"",locale:_||(xn(y)?y.locale:""),format:Ce(y)?y:xn(y)?y.source:"",message:U};V.meta=zt({},t.__meta,BR()||{}),CR(V)}return U}function XR(t){mt(t.list)?t.list=t.list.map(e=>Ce(e)?$p(e):e):ot(t.named)&&Object.keys(t.named).forEach(e=>{Ce(t.named[e])&&(t.named[e]=$p(t.named[e]))})}function a1(t,e,n,i,r,a){const{messages:o,onWarn:s,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f={},d,p=null;const E="translate";for(let x=0;x<u.length&&(d=u[x],f=o[d]||{},(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||Ma(p)||xn(p)));x++){const m=Lf(t,e,d,a,E);m!==e&&(p=m)}return[p,d,f]}function s1(t,e,n,i,r,a){const{messageCompiler:o,warnHtmlMessage:s}=t;if(xn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,$R(t,n,r,i,s,a));return l.locale=n,l.key=e,l.source=i,l}function YR(t,e,n){return e(n)}function bu(...t){const[e,n,i]=t,r={};if(!Ce(e)&&!Rt(e)&&!xn(e)&&!Ma(e))throw _r(Di.INVALID_ARGUMENT);const a=Rt(e)?String(e):(xn(e),e);return Rt(n)?r.plural=n:Ce(n)?r.default=n:We(n)&&!Al(n)?r.named=n:mt(n)&&(r.list=n),Rt(i)?r.plural=i:Ce(i)?r.default=i:We(i)&&zt(r,i),[a,r]}function $R(t,e,n,i,r,a){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw a&&a(o),o},onCacheKey:o=>wC(e,n,o)}}function jR(t,e,n,i){const{modifiers:r,pluralRules:a,messageResolver:o,fallbackLocale:s,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:a,messages:p=>{let E=o(n,p);if(E==null&&u){const[,,x]=a1(u,p,e,s,l,c);E=o(x,p)}if(Ce(E)||Ma(E)){let x=!1;const h=s1(t,p,e,E,p,()=>{x=!0});return x?lm:h}else return xn(E)?E:lm}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Rt(i.plural)&&(d.pluralIndex=i.plural),d}function um(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:a,localeFallbacker:o}=t,{__datetimeFormatters:s}=t,[l,c,u,f]=Mu(...e),d=Je(u.missingWarn)?u.missingWarn:t.missingWarn;Je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,E=Rf(t,u),x=o(t,r,E);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(E,f).format(c);let m={},h,_=null;const g="datetime format";for(let C=0;C<x.length&&(h=x[C],m=n[h]||{},_=m[l],!We(_));C++)Lf(t,l,h,d,g);if(!We(_)||!Ce(h))return i?wl:l;let y=`${h}__${l}`;Al(f)||(y=`${y}__${JSON.stringify(f)}`);let A=s.get(y);return A||(A=new Intl.DateTimeFormat(h,zt({},_,f)),s.set(y,A)),p?A.formatToParts(c):A.format(c)}const o1=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Mu(...t){const[e,n,i,r]=t,a={};let o={},s;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw _r(Di.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();s=new Date(c);try{s.toISOString()}catch{throw _r(Di.INVALID_ISO_DATE_ARGUMENT)}}else if(RC(e)){if(isNaN(e.getTime()))throw _r(Di.INVALID_DATE_ARGUMENT);s=e}else if(Rt(e))s=e;else throw _r(Di.INVALID_ARGUMENT);return Ce(n)?a.key=n:We(n)&&Object.keys(n).forEach(l=>{o1.includes(l)?o[l]=n[l]:a[l]=n[l]}),Ce(i)?a.locale=i:We(i)&&(o=i),We(r)&&(o=r),[a.key||"",s,a,o]}function fm(t,e,n){const i=t;for(const r in n){const a=`${e}__${r}`;i.__datetimeFormatters.has(a)&&i.__datetimeFormatters.delete(a)}}function dm(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:a,localeFallbacker:o}=t,{__numberFormatters:s}=t,[l,c,u,f]=Su(...e),d=Je(u.missingWarn)?u.missingWarn:t.missingWarn;Je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,E=Rf(t,u),x=o(t,r,E);if(!Ce(l)||l==="")return new Intl.NumberFormat(E,f).format(c);let m={},h,_=null;const g="number format";for(let C=0;C<x.length&&(h=x[C],m=n[h]||{},_=m[l],!We(_));C++)Lf(t,l,h,d,g);if(!We(_)||!Ce(h))return i?wl:l;let y=`${h}__${l}`;Al(f)||(y=`${y}__${JSON.stringify(f)}`);let A=s.get(y);return A||(A=new Intl.NumberFormat(h,zt({},_,f)),s.set(y,A)),p?A.formatToParts(c):A.format(c)}const l1=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Su(...t){const[e,n,i,r]=t,a={};let o={};if(!Rt(e))throw _r(Di.INVALID_ARGUMENT);const s=e;return Ce(n)?a.key=n:We(n)&&Object.keys(n).forEach(l=>{l1.includes(l)?o[l]=n[l]:a[l]=n[l]}),Ce(i)?a.locale=i:We(i)&&(o=i),We(r)&&(o=r),[a.key||"",s,a,o]}function hm(t,e,n){const i=t;for(const r in n){const a=`${e}__${r}`;i.__numberFormatters.has(a)&&i.__numberFormatters.delete(a)}}cR();/*!
  * vue-i18n v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const qR="9.7.1";function KR(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ni().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ni().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ni().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ni().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ni().__INTLIFY_PROD_DEVTOOLS__=!1)}const c1=LR.__EXTEND_POINT__,wi=wf(c1);wi(),wi(),wi(),wi(),wi(),wi(),wi(),wi();const u1=Di.__EXTEND_POINT__,Qt=wf(u1),Lt={UNEXPECTED_RETURN_TYPE:u1,INVALID_ARGUMENT:Qt(),MUST_BE_CALL_SETUP_TOP:Qt(),NOT_INSTALLED:Qt(),NOT_AVAILABLE_IN_LEGACY_MODE:Qt(),REQUIRED_VALUE:Qt(),INVALID_VALUE:Qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Qt(),NOT_INSTALLED_WITH_PROVIDE:Qt(),UNEXPECTED_ERROR:Qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Qt(),BRIDGE_SUPPORT_VUE_2_ONLY:Qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Qt(),__EXTEND_POINT__:Qt()};function Ft(t,...e){return Oa(t,null,void 0)}const Tu=ji("__translateVNode"),Au=ji("__datetimeParts"),wu=ji("__numberParts"),f1=ji("__setPluralRules"),d1=ji("__injectWithOption"),Cu=ji("__dispose");function As(t){if(!ot(t))return t;for(const e in t)if(Ss(t,e))if(!e.includes("."))ot(t[e])&&As(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,a=!1;for(let o=0;o<i;o++){if(n[o]in r||(r[n[o]]={}),!ot(r[n[o]])){a=!0;break}r=r[n[o]]}a||(r[n[i]]=t[e],delete t[e]),ot(r[n[i]])&&As(r[n[i]])}return t}function Cl(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:a}=e,o=We(n)?n:mt(i)?{}:{[t]:{}};if(mt(i)&&i.forEach(s=>{if("locale"in s&&"resource"in s){const{locale:l,resource:c}=s;l?(o[l]=o[l]||{},os(c,o[l])):os(c,o)}else Ce(s)&&os(JSON.parse(s),o)}),r==null&&a)for(const s in o)Ss(o,s)&&As(o[s]);return o}function h1(t){return t.type}function p1(t,e,n){let i=ot(e.messages)?e.messages:{};"__i18nGlobal"in n&&(i=Cl(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(a=>{t.mergeLocaleMessage(a,i[a])});{if(ot(e.datetimeFormats)){const a=Object.keys(e.datetimeFormats);a.length&&a.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ot(e.numberFormats)){const a=Object.keys(e.numberFormats);a.length&&a.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function pm(t){return xt(Cs,null,t,0)}const mm="__INTLIFY_META__",gm=()=>[],ZR=()=>!1;let _m=0;function vm(t){return(e,n,i,r)=>t(n,i,da()||void 0,r)}const JR=()=>{const t=da();let e=null;return t&&(e=h1(t)[mm])?{[mm]:e}:null};function Pf(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,a=t.flatJson;let o=Je(t.inheritLocale)?t.inheritLocale:!0;const s=Rn(n&&o?n.locale.value:Ce(t.locale)?t.locale:ba),l=Rn(n&&o?n.fallbackLocale.value:Ce(t.fallbackLocale)||mt(t.fallbackLocale)||We(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s.value),c=Rn(Cl(s.value,t)),u=Rn(We(t.datetimeFormats)?t.datetimeFormats:{[s.value]:{}}),f=Rn(We(t.numberFormats)?t.numberFormats:{[s.value]:{}});let d=n?n.missingWarn:Je(t.missingWarn)||Yi(t.missingWarn)?t.missingWarn:!0,p=n?n.fallbackWarn:Je(t.fallbackWarn)||Yi(t.fallbackWarn)?t.fallbackWarn:!0,E=n?n.fallbackRoot:Je(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,m=vt(t.missing)?t.missing:null,h=vt(t.missing)?vm(t.missing):null,_=vt(t.postTranslation)?t.postTranslation:null,g=n?n.warnHtmlMessage:Je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter;const A=n?n.modifiers:We(t.modifiers)?t.modifiers:{};let C=t.pluralRules||n&&n.pluralRules,w;w=(()=>{r&&am(null);const v={version:qR,locale:s.value,fallbackLocale:l.value,messages:c.value,modifiers:A,pluralRules:C,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:_===null?void 0:_,warnHtmlMessage:g,escapeParameter:y,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};v.datetimeFormats=u.value,v.numberFormats=f.value,v.__datetimeFormatters=We(w)?w.__datetimeFormatters:void 0,v.__numberFormatters=We(w)?w.__numberFormatters:void 0;const N=HR(v);return r&&am(N),N})(),Xa(w,s.value,l.value);function T(){return[s.value,l.value,c.value,u.value,f.value]}const L=st({get:()=>s.value,set:v=>{s.value=v,w.locale=s.value}}),z=st({get:()=>l.value,set:v=>{l.value=v,w.fallbackLocale=l.value,Xa(w,s.value,v)}}),U=st(()=>c.value),V=st(()=>u.value),O=st(()=>f.value);function X(){return vt(_)?_:null}function j(v){_=v,w.postTranslation=v}function Y(){return m}function ie(v){v!==null&&(h=vm(v)),m=v,w.missing=h}const ee=(v,N,K,Q,le,Me)=>{T();let ge;try{__INTLIFY_PROD_DEVTOOLS__,r||(w.fallbackContext=n?zR():void 0),ge=v(w)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(w.fallbackContext=void 0)}if(K!=="translate exists"&&Rt(ge)&&ge===wl||K==="translate exists"&&!ge){const[Se,k]=N();return n&&E?Q(n):le(Se)}else{if(Me(ge))return ge;throw Ft(Lt.UNEXPECTED_RETURN_TYPE)}};function ce(...v){return ee(N=>Reflect.apply(cm,null,[N,...v]),()=>bu(...v),"translate",N=>Reflect.apply(N.t,N,[...v]),N=>N,N=>Ce(N))}function B(...v){const[N,K,Q]=v;if(Q&&!ot(Q))throw Ft(Lt.INVALID_ARGUMENT);return ce(N,K,zt({resolvedMessage:!0},Q||{}))}function Z(...v){return ee(N=>Reflect.apply(um,null,[N,...v]),()=>Mu(...v),"datetime format",N=>Reflect.apply(N.d,N,[...v]),()=>nm,N=>Ce(N))}function me(...v){return ee(N=>Reflect.apply(dm,null,[N,...v]),()=>Su(...v),"number format",N=>Reflect.apply(N.n,N,[...v]),()=>nm,N=>Ce(N))}function Ee(v){return v.map(N=>Ce(N)||Rt(N)||Je(N)?pm(String(N)):N)}const se={normalize:Ee,interpolate:v=>v,type:"vnode"};function oe(...v){return ee(N=>{let K;const Q=N;try{Q.processor=se,K=Reflect.apply(cm,null,[Q,...v])}finally{Q.processor=null}return K},()=>bu(...v),"translate",N=>N[Tu](...v),N=>[pm(N)],N=>mt(N))}function de(...v){return ee(N=>Reflect.apply(dm,null,[N,...v]),()=>Su(...v),"number format",N=>N[wu](...v),gm,N=>Ce(N)||mt(N))}function ye(...v){return ee(N=>Reflect.apply(um,null,[N,...v]),()=>Mu(...v),"datetime format",N=>N[Au](...v),gm,N=>Ce(N)||mt(N))}function Ne(v){C=v,w.pluralRules=C}function _e(v,N){return ee(()=>{if(!v)return!1;const K=Ce(N)?N:s.value,Q=b(K),le=w.messageResolver(Q,v);return Ma(le)||xn(le)||Ce(le)},()=>[v],"translate exists",K=>Reflect.apply(K.te,K,[v,N]),ZR,K=>Je(K))}function S(v){let N=null;const K=K_(w,l.value,s.value);for(let Q=0;Q<K.length;Q++){const le=c.value[K[Q]]||{},Me=w.messageResolver(le,v);if(Me!=null){N=Me;break}}return N}function M(v){const N=S(v);return N??(n?n.tm(v)||{}:{})}function b(v){return c.value[v]||{}}function P(v,N){if(a){const K={[v]:N};for(const Q in K)Ss(K,Q)&&As(K[Q]);N=K[v]}c.value[v]=N,w.messages=c.value}function F(v,N){c.value[v]=c.value[v]||{};const K={[v]:N};for(const Q in K)Ss(K,Q)&&As(K[Q]);N=K[v],os(N,c.value[v]),w.messages=c.value}function q(v){return u.value[v]||{}}function J(v,N){u.value[v]=N,w.datetimeFormats=u.value,fm(w,v,N)}function te(v,N){u.value[v]=zt(u.value[v]||{},N),w.datetimeFormats=u.value,fm(w,v,N)}function fe(v){return f.value[v]||{}}function he(v,N){f.value[v]=N,w.numberFormats=f.value,hm(w,v,N)}function we(v,N){f.value[v]=zt(f.value[v]||{},N),w.numberFormats=f.value,hm(w,v,N)}_m++,n&&xu&&(si(n.locale,v=>{o&&(s.value=v,w.locale=v,Xa(w,s.value,l.value))}),si(n.fallbackLocale,v=>{o&&(l.value=v,w.fallbackLocale=v,Xa(w,s.value,l.value))}));const R={id:_m,locale:L,fallbackLocale:z,get inheritLocale(){return o},set inheritLocale(v){o=v,v&&n&&(s.value=n.locale.value,l.value=n.fallbackLocale.value,Xa(w,s.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:U,get modifiers(){return A},get pluralRules(){return C||{}},get isGlobal(){return r},get missingWarn(){return d},set missingWarn(v){d=v,w.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(v){p=v,w.fallbackWarn=p},get fallbackRoot(){return E},set fallbackRoot(v){E=v},get fallbackFormat(){return x},set fallbackFormat(v){x=v,w.fallbackFormat=x},get warnHtmlMessage(){return g},set warnHtmlMessage(v){g=v,w.warnHtmlMessage=v},get escapeParameter(){return y},set escapeParameter(v){y=v,w.escapeParameter=v},t:ce,getLocaleMessage:b,setLocaleMessage:P,mergeLocaleMessage:F,getPostTranslationHandler:X,setPostTranslationHandler:j,getMissingHandler:Y,setMissingHandler:ie,[f1]:Ne};return R.datetimeFormats=V,R.numberFormats=O,R.rt=B,R.te=_e,R.tm=M,R.d=Z,R.n=me,R.getDateTimeFormat=q,R.setDateTimeFormat=J,R.mergeDateTimeFormat=te,R.getNumberFormat=fe,R.setNumberFormat=he,R.mergeNumberFormat=we,R[d1]=i,R[Tu]=oe,R[Au]=ye,R[wu]=de,R}function QR(t){const e=Ce(t.locale)?t.locale:ba,n=Ce(t.fallbackLocale)||mt(t.fallbackLocale)||We(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=vt(t.missing)?t.missing:void 0,r=Je(t.silentTranslationWarn)||Yi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,a=Je(t.silentFallbackWarn)||Yi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=Je(t.fallbackRoot)?t.fallbackRoot:!0,s=!!t.formatFallbackMessages,l=We(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=vt(t.postTranslation)?t.postTranslation:void 0,f=Ce(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=Je(t.sync)?t.sync:!0;let E=t.messages;if(We(t.sharedMessages)){const A=t.sharedMessages;E=Object.keys(A).reduce((w,D)=>{const T=w[D]||(w[D]={});return zt(T,A[D]),w},E||{})}const{__i18n:x,__root:m,__injectWithOption:h}=t,_=t.datetimeFormats,g=t.numberFormats,y=t.flatJson;return{locale:e,fallbackLocale:n,messages:E,flatJson:y,datetimeFormats:_,numberFormats:g,missing:i,missingWarn:r,fallbackWarn:a,fallbackRoot:o,fallbackFormat:s,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:m,__injectWithOption:h}}function Ru(t={},e){{const n=Pf(QR(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(a){n.locale.value=a},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(a){n.fallbackLocale.value=a},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(a){},get missing(){return n.getMissingHandler()},set missing(a){n.setMissingHandler(a)},get silentTranslationWarn(){return Je(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(a){n.missingWarn=Je(a)?!a:a},get silentFallbackWarn(){return Je(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(a){n.fallbackWarn=Je(a)?!a:a},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(a){n.fallbackFormat=a},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(a){n.setPostTranslationHandler(a)},get sync(){return n.inheritLocale},set sync(a){n.inheritLocale=a},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(a){n.warnHtmlMessage=a!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(a){n.escapeParameter=a},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(a){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...a){const[o,s,l]=a,c={};let u=null,f=null;if(!Ce(o))throw Ft(Lt.INVALID_ARGUMENT);const d=o;return Ce(s)?c.locale=s:mt(s)?u=s:We(s)&&(f=s),mt(l)?u=l:We(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},rt(...a){return Reflect.apply(n.rt,n,[...a])},tc(...a){const[o,s,l]=a,c={plural:1};let u=null,f=null;if(!Ce(o))throw Ft(Lt.INVALID_ARGUMENT);const d=o;return Ce(s)?c.locale=s:Rt(s)?c.plural=s:mt(s)?u=s:We(s)&&(f=s),Ce(l)?c.locale=l:mt(l)?u=l:We(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},te(a,o){return n.te(a,o)},tm(a){return n.tm(a)},getLocaleMessage(a){return n.getLocaleMessage(a)},setLocaleMessage(a,o){n.setLocaleMessage(a,o)},mergeLocaleMessage(a,o){n.mergeLocaleMessage(a,o)},d(...a){return Reflect.apply(n.d,n,[...a])},getDateTimeFormat(a){return n.getDateTimeFormat(a)},setDateTimeFormat(a,o){n.setDateTimeFormat(a,o)},mergeDateTimeFormat(a,o){n.mergeDateTimeFormat(a,o)},n(...a){return Reflect.apply(n.n,n,[...a])},getNumberFormat(a){return n.getNumberFormat(a)},setNumberFormat(a,o){n.setNumberFormat(a,o)},mergeNumberFormat(a,o){n.mergeNumberFormat(a,o)},getChoiceIndex(a,o){return-1}};return r.__extender=i,r}}const If={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function eL({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===_n?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},{})}function m1(t){return _n}const tL=wa({name:"i18n-t",props:zt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Rt(t)||!isNaN(t)}},If),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Nf({useScope:t.scope,__useComponent:!0});return()=>{const a=Object.keys(n).filter(f=>f!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Ce(t.plural)?+t.plural:t.plural);const s=eL(e,a),l=r[Tu](t.keypath,s,o),c=zt({},i),u=Ce(t.tag)||ot(t.tag)?t.tag:m1();return Ra(u,c,l)}}}),xm=tL;function nL(t){return mt(t)&&!Ce(t[0])}function g1(t,e,n,i){const{slots:r,attrs:a}=e;return()=>{const o={part:!0};let s={};t.locale&&(o.locale=t.locale),Ce(t.format)?o.key=t.format:ot(t.format)&&(Ce(t.format.key)&&(o.key=t.format.key),s=Object.keys(t.format).reduce((d,p)=>n.includes(p)?zt({},d,{[p]:t.format[p]}):d,{}));const l=i(t.value,o,s);let c=[o.key];mt(l)?c=l.map((d,p)=>{const E=r[d.type],x=E?E({[d.type]:d.value,index:p,parts:l}):[d.value];return nL(x)&&(x[0].key=`${d.type}-${p}`),x}):Ce(l)&&(c=[l]);const u=zt({},a),f=Ce(t.tag)||ot(t.tag)?t.tag:m1();return Ra(f,u,c)}}const iL=wa({name:"i18n-n",props:zt({value:{type:Number,required:!0},format:{type:[String,Object]}},If),setup(t,e){const n=t.i18n||Nf({useScope:"parent",__useComponent:!0});return g1(t,e,l1,(...i)=>n[wu](...i))}}),ym=iL,rL=wa({name:"i18n-d",props:zt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},If),setup(t,e){const n=t.i18n||Nf({useScope:"parent",__useComponent:!0});return g1(t,e,o1,(...i)=>n[Au](...i))}}),Em=rL;function aL(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function sL(t){const e=o=>{const{instance:s,modifiers:l,value:c}=o;if(!s||!s.$)throw Ft(Lt.UNEXPECTED_ERROR);const u=aL(t,s.$),f=bm(c);return[Reflect.apply(u.t,u,[...Mm(f)]),u]};return{created:(o,s)=>{const[l,c]=e(s);xu&&t.global===c&&(o.__i18nWatcher=si(c.locale,()=>{s.instance&&s.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{xu&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:s})=>{if(o.__composer){const l=o.__composer,c=bm(s);o.textContent=Reflect.apply(l.t,l,[...Mm(c)])}},getSSRProps:o=>{const[s]=e(o);return{textContent:s}}}}function bm(t){if(Ce(t))return{path:t};if(We(t)){if(!("path"in t))throw Ft(Lt.REQUIRED_VALUE,"path");return t}else throw Ft(Lt.INVALID_VALUE)}function Mm(t){const{path:e,locale:n,args:i,choice:r,plural:a}=t,o={},s=i||{};return Ce(n)&&(o.locale=n),Rt(r)&&(o.plural=r),Rt(a)&&(o.plural=a),[e,s,o]}function oL(t,e,...n){const i=We(n[0])?n[0]:{},r=!!i.useI18nComponentName;(Je(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":xm.name,"I18nT"].forEach(o=>t.component(o,xm)),[ym.name,"I18nN"].forEach(o=>t.component(o,ym)),[Em.name,"I18nD"].forEach(o=>t.component(o,Em))),t.directive("t",sL(e))}function lL(t,e,n){return{beforeCreate(){const i=da();if(!i)throw Ft(Lt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const a=r.i18n;if(r.__i18n&&(a.__i18n=r.__i18n),a.__root=e,this===this.$root)this.$i18n=Sm(t,a);else{a.__injectWithOption=!0,a.__extender=n.__vueI18nExtend,this.$i18n=Ru(a);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Sm(t,r);else{this.$i18n=Ru({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&p1(e,r,r),this.$t=(...a)=>this.$i18n.t(...a),this.$rt=(...a)=>this.$i18n.rt(...a),this.$tc=(...a)=>this.$i18n.tc(...a),this.$te=(a,o)=>this.$i18n.te(a,o),this.$d=(...a)=>this.$i18n.d(...a),this.$n=(...a)=>this.$i18n.n(...a),this.$tm=a=>this.$i18n.tm(a),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=da();if(!i)throw Ft(Lt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Sm(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[f1](e.pluralizationRules||t.pluralizationRules);const n=Cl(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const cL=ji("global-vue-i18n");function uL(t={},e){const n=__VUE_I18N_LEGACY_API__&&Je(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=Je(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,a=new Map,[o,s]=fL(t,n),l=ji("");function c(d){return a.get(d)||null}function u(d,p){a.set(d,p)}function f(d){a.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(p,...E){if(p.__VUE_I18N_SYMBOL__=l,p.provide(p.__VUE_I18N_SYMBOL__,d),We(E[0])){const h=E[0];d.__composerExtend=h.__composerExtend,d.__vueI18nExtend=h.__vueI18nExtend}let x=null;!n&&i&&(x=yL(p,d.global)),__VUE_I18N_FULL_INSTALL__&&oL(p,d,...E),__VUE_I18N_LEGACY_API__&&n&&p.mixin(lL(s,s.__composer,d));const m=p.unmount;p.unmount=()=>{x&&x(),d.dispose(),m()}},get global(){return s},dispose(){o.stop()},__instances:a,__getInstance:c,__setInstance:u,__deleteInstance:f};return d}}function Nf(t={}){const e=da();if(e==null)throw Ft(Lt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ft(Lt.NOT_INSTALLED);const n=dL(e),i=pL(n),r=h1(e),a=hL(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Ft(Lt.NOT_AVAILABLE_IN_LEGACY_MODE);return vL(e,a,i,t)}if(a==="global")return p1(i,t,r),i;if(a==="parent"){let l=mL(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let s=o.__getInstance(e);if(s==null){const l=zt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),s=Pf(l),o.__composerExtend&&(s[Cu]=o.__composerExtend(s)),_L(o,e,s),o.__setInstance(e,s)}return s}function fL(t,e,n){const i=k1();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Ru(t)):i.run(()=>Pf(t));if(r==null)throw Ft(Lt.UNEXPECTED_ERROR);return[i,r]}}function dL(t){{const e=bn(t.isCE?cL:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ft(t.isCE?Lt.NOT_INSTALLED_WITH_PROVIDE:Lt.UNEXPECTED_ERROR);return e}}function hL(t,e){return Al(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function pL(t){return t.mode==="composition"?t.global:t.global.__composer}function mL(t,e,n=!1){let i=null;const r=e.root;let a=gL(e,n);for(;a!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(a);else if(__VUE_I18N_LEGACY_API__){const s=o.__getInstance(a);s!=null&&(i=s.__composer,n&&i&&!i[d1]&&(i=null))}if(i!=null||r===a)break;a=a.parent}return i}function gL(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function _L(t,e,n){ul(()=>{},e),Wu(()=>{const i=n;t.__deleteInstance(e);const r=i[Cu];r&&(r(),delete i[Cu])},e)}function vL(t,e,n,i={}){const r=e==="local",a=jm(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Ft(Lt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=Je(i.inheritLocale)?i.inheritLocale:!Ce(i.locale),s=Rn(!r||o?n.locale.value:Ce(i.locale)?i.locale:ba),l=Rn(!r||o?n.fallbackLocale.value:Ce(i.fallbackLocale)||mt(i.fallbackLocale)||We(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:s.value),c=Rn(Cl(s.value,i)),u=Rn(We(i.datetimeFormats)?i.datetimeFormats:{[s.value]:{}}),f=Rn(We(i.numberFormats)?i.numberFormats:{[s.value]:{}}),d=r?n.missingWarn:Je(i.missingWarn)||Yi(i.missingWarn)?i.missingWarn:!0,p=r?n.fallbackWarn:Je(i.fallbackWarn)||Yi(i.fallbackWarn)?i.fallbackWarn:!0,E=r?n.fallbackRoot:Je(i.fallbackRoot)?i.fallbackRoot:!0,x=!!i.fallbackFormat,m=vt(i.missing)?i.missing:null,h=vt(i.postTranslation)?i.postTranslation:null,_=r?n.warnHtmlMessage:Je(i.warnHtmlMessage)?i.warnHtmlMessage:!0,g=!!i.escapeParameter,y=r?n.modifiers:We(i.modifiers)?i.modifiers:{},A=i.pluralRules||r&&n.pluralRules;function C(){return[s.value,l.value,c.value,u.value,f.value]}const w=st({get:()=>a.value?a.value.locale.value:s.value,set:b=>{a.value&&(a.value.locale.value=b),s.value=b}}),D=st({get:()=>a.value?a.value.fallbackLocale.value:l.value,set:b=>{a.value&&(a.value.fallbackLocale.value=b),l.value=b}}),T=st(()=>a.value?a.value.messages.value:c.value),L=st(()=>u.value),z=st(()=>f.value);function U(){return a.value?a.value.getPostTranslationHandler():h}function V(b){a.value&&a.value.setPostTranslationHandler(b)}function O(){return a.value?a.value.getMissingHandler():m}function X(b){a.value&&a.value.setMissingHandler(b)}function j(b){return C(),b()}function Y(...b){return a.value?j(()=>Reflect.apply(a.value.t,null,[...b])):j(()=>"")}function ie(...b){return a.value?Reflect.apply(a.value.rt,null,[...b]):""}function ee(...b){return a.value?j(()=>Reflect.apply(a.value.d,null,[...b])):j(()=>"")}function ce(...b){return a.value?j(()=>Reflect.apply(a.value.n,null,[...b])):j(()=>"")}function B(b){return a.value?a.value.tm(b):{}}function Z(b,P){return a.value?a.value.te(b,P):!1}function me(b){return a.value?a.value.getLocaleMessage(b):{}}function Ee(b,P){a.value&&(a.value.setLocaleMessage(b,P),c.value[b]=P)}function G(b,P){a.value&&a.value.mergeLocaleMessage(b,P)}function se(b){return a.value?a.value.getDateTimeFormat(b):{}}function oe(b,P){a.value&&(a.value.setDateTimeFormat(b,P),u.value[b]=P)}function de(b,P){a.value&&a.value.mergeDateTimeFormat(b,P)}function ye(b){return a.value?a.value.getNumberFormat(b):{}}function Ne(b,P){a.value&&(a.value.setNumberFormat(b,P),f.value[b]=P)}function _e(b,P){a.value&&a.value.mergeNumberFormat(b,P)}const S={get id(){return a.value?a.value.id:-1},locale:w,fallbackLocale:D,messages:T,datetimeFormats:L,numberFormats:z,get inheritLocale(){return a.value?a.value.inheritLocale:o},set inheritLocale(b){a.value&&(a.value.inheritLocale=b)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(c.value)},get modifiers(){return a.value?a.value.modifiers:y},get pluralRules(){return a.value?a.value.pluralRules:A},get isGlobal(){return a.value?a.value.isGlobal:!1},get missingWarn(){return a.value?a.value.missingWarn:d},set missingWarn(b){a.value&&(a.value.missingWarn=b)},get fallbackWarn(){return a.value?a.value.fallbackWarn:p},set fallbackWarn(b){a.value&&(a.value.missingWarn=b)},get fallbackRoot(){return a.value?a.value.fallbackRoot:E},set fallbackRoot(b){a.value&&(a.value.fallbackRoot=b)},get fallbackFormat(){return a.value?a.value.fallbackFormat:x},set fallbackFormat(b){a.value&&(a.value.fallbackFormat=b)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:_},set warnHtmlMessage(b){a.value&&(a.value.warnHtmlMessage=b)},get escapeParameter(){return a.value?a.value.escapeParameter:g},set escapeParameter(b){a.value&&(a.value.escapeParameter=b)},t:Y,getPostTranslationHandler:U,setPostTranslationHandler:V,getMissingHandler:O,setMissingHandler:X,rt:ie,d:ee,n:ce,tm:B,te:Z,getLocaleMessage:me,setLocaleMessage:Ee,mergeLocaleMessage:G,getDateTimeFormat:se,setDateTimeFormat:oe,mergeDateTimeFormat:de,getNumberFormat:ye,setNumberFormat:Ne,mergeNumberFormat:_e};function M(b){b.locale.value=s.value,b.fallbackLocale.value=l.value,Object.keys(c.value).forEach(P=>{b.mergeLocaleMessage(P,c.value[P])}),Object.keys(u.value).forEach(P=>{b.mergeDateTimeFormat(P,u.value[P])}),Object.keys(f.value).forEach(P=>{b.mergeNumberFormat(P,f.value[P])}),b.escapeParameter=g,b.fallbackFormat=x,b.fallbackRoot=E,b.fallbackWarn=p,b.missingWarn=d,b.warnHtmlMessage=_}return fg(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Ft(Lt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const b=a.value=t.proxy.$i18n.__composer;e==="global"?(s.value=b.locale.value,l.value=b.fallbackLocale.value,c.value=b.messages.value,u.value=b.datetimeFormats.value,f.value=b.numberFormats.value):r&&M(b)}),S}const xL=["locale","fallbackLocale","availableLocales"],Tm=["t","rt","d","n","tm","te"];function yL(t,e){const n=Object.create(null);return xL.forEach(r=>{const a=Object.getOwnPropertyDescriptor(e,r);if(!a)throw Ft(Lt.UNEXPECTED_ERROR);const o=Bt(a.value)?{get(){return a.value.value},set(s){a.value.value=s}}:{get(){return a.get&&a.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Tm.forEach(r=>{const a=Object.getOwnPropertyDescriptor(e,r);if(!a||!a.value)throw Ft(Lt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,a)}),()=>{delete t.config.globalProperties.$i18n,Tm.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}KR();__INTLIFY_JIT_COMPILATION__?rm(WR):rm(VR);UR(_R);FR(K_);if(__INTLIFY_PROD_DEVTOOLS__){const t=ni();t.__INTLIFY__=!0,AR(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const EL={toggle:"Eng"},bL={ym:"Yamashita Manato",passage:"I'm Manato Yamashita. studying computer science at the Department of Informatics, at Tokyo City University. My hobbies are create digital contents(ex: illustration, animation, web and so on...) and reading. my favorite writer is Sayaka Murata.This site is for my portfolio named MANAPURAZA.COM from Manato(my name) + Tamaplaza(the station near my living) I love all of creative activities! and banana.",name:"Name","name-co":"Manato Yamashita",sex:"Sex / Gneder","sex-co":"Man",birth:"Birthday","birth-co":"2002/04/17",country:"Country","country-co":"Japan",live:"Live-in","live-co":"Kanagawa | Tokyo | Kumamoto",study:"studying","study-co":"Tokyo City University, Department of Informatics / System Engineering",research:"Research","research-co":"Information Security",like:"Like","like-co":"Banana"},ML={15:"Entered TATEISHI Junior High School",18:"Entered HONJO High School",21:"Entered Tokyo City University",22:"Entered Edith Cowan University",23:"Live in Saginuma, Kawasaki","02":"Born in Kumamoto","02-de":"2002, Kumamoto / Japan","03":"Moved to Tokyo","03-de":"2003~, Tokyo / Japan","15-de":"2015 ~ 2018, Tokyo / Japan","18-de":"2018 ~ 2021, Tokyo / Japan","21-de":"2021 ~, Tokyo / Japan","21-2":"Live in Miyazakidai, Kawasaki","21-2-de":"2021 ~, Kawasaki / Japan","22-de":"2022 ~ 2023, Perth, WA / Australia","23-de":"2023 ~, Kawasaki / Japan","23-2":"Started to research about Information Security at TCU Seki lab.","23-2-de":"2023 ~, Yokohama / Japan"},SL={w1:"A portfolio graphics and illustrations.",w2:"A git repositorys storing codes.",w3:"A web portfolio website show all of creative.",w4:"A game, mathamatical logical guessing.",w5:"A blog about my experiment study abroad in Australia.",w6:"A event website for one-year anniversary of KD, whichi is my friends community.",w7:"A web app creating passage from words templates by connecting sentences.",w8:"A Android app suggestion activity from weather forecast.",w9:"A Twitter bot of DC-chan, which is original character of my circle.",w10:"A test website for blog constracted by Jamstack(Nuxt3 + microCMS).",w11:"A website for TCU-ACC, a union of clubs in TCU.",w12:"A website for SEKI-lab, a laboratory researching Information Security.",w13:"A Web App quiz game Information Security.",w14:"DC-chan, a charactor of TCU-DC fun site, contein AI chat which is using ChatGPT API for conversation.",w15:"Amausyrup, V-tuber unofficial website using notion API.",w16:"Highcharts.js test website.",v1:"A YouTube channel for me",v2:"A TouTube channel for my circle"},TL={404:{title:"404",notfound:"Not Found",message:"The page you are looking for does not exist."},navbar:EL,about:bL,his:ML,works:SL},AL={toggle:"日本語"},wL={ym:"山下 真和都（ヤマシタマナト）",passage:"こんにちは。「山下真和都（ヤマシタマナト）」と言います。東京都市大学のメディア情報学部の情報システム学科でコンピュータサイエンスを学んでいます。趣味はデジタルコンテンツの制作（イラスト、アニメーション、ウェブなど）と読書です。お気に入りの作家は村田沙耶香です！このサイトは、私の名前の「マナト」と、私の住んでいる場所の近くの駅「たまプラーザ」から名付けたポートフォリオサイト「MANAPURAZA.COM」です。クリエイティブな活動が大好きです！そしてバナナも",name:"名前","name-co":"山下マナト",sex:"性別","sex-co":"男",birth:"誕生日","birth-co":"2002/04/17",country:"国籍","country-co":"日本国",live:"居住地","live-co":"神奈川県 | 東京都 | 熊本県",study:"専攻","study-co":"東京都市大学 メディア情報学部 情報システム学科",research:"研究","research-co":"情報セキュリティ",like:"好きなモノ","like-co":"バナナ"},CL={15:"葛飾区立立石中学校に入学",18:"東京都立本所高等学校に入学",21:"東京都市大学に入学",22:"豪Edith Cowan Universityに留学",23:"神奈川県川崎市の鷺沼に住む","02":"熊本県で生まれる","02-de":"2002年、熊本 / 日本","03":"東京都に引っ越す","03-de":"2003年~、東京 / 日本","15-de":"2015年 〜 2018年、東京 / 日本","18-de":"2018年 〜 2021年、東京 / 日本","21-de":"2021年以降、東京 / 日本","21-2":"神奈川県川崎市の宮崎台に住む","21-2-de":"2021年以降、川崎 / 日本","22-de":"2022年 〜 2023年、パース、WA / オーストラリア","23-de":"2023年以降、川崎 / 日本","23-2":"東京都市大学関研究室で情報セキュリティについて研究を始める","23-2-de":"2023年以降、横浜 / 日本"},RL={w1:"グラフィックスとイラストのポートフォリオ",w2:"コードを保存するGitリポジトリ",w3:"クリエイティブ全般を表示するWebポートフォリオウェブサイト",w4:"数学的な論理推論を用いたゲーム",w5:"オーストラリアでの留学に関するブログ",w6:"友人コミュニティKDの一周年記念イベントウェブサイト",w7:"文章テンプレートをつなげてパッセージを作成するWebアプリ",w8:"天気予報からアクティビティを提案するAndroidアプリ",w9:"私のサークルのオリジナルキャラクターDCちゃんのTwitter bot",w10:"Jamstack（Nuxt3 + microCMS）で構築されたブログのテストウェブサイト",w11:"TCU内のクラブ連合TCU-ACCのウェブサイト",w12:"情報セキュリティを研究している研究室のウェブサイト",w13:"情報セキュリティクイズを出題するWebアプリ",w14:"でじこんちゃん(私の団体TCU-DCの公式キャラクタ)のファンサイトです。AIチャット機能を含み、ChatGPT APIを使用しています。",w15:"Notion APIを使用したブログ機能を持つVtuberあまうしろっぷの非公式ウェブサイト",w16:"Highcharts.jsのテストのために制作したWeb app",v1:"私のYouTubeチャンネル",v2:"私のサークル(DC)のYouTubeチャンネル"},LL={404:{title:"404",notfound:"ページが見つかりません",message:"URLが間違っているか、ページが削除された可能性があります。あるいはリンク切れとか。"},navbar:AL,about:wL,his:CL,works:RL},_1=uL({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:TL,ja:LL}});dC.add(pC);const Rl=Zu(gy),Df=Zu(By),v1=Zu(Nw);Rl.component("fa",AC);Rl.use(ef);Df.use(ef);v1.use(ef);Rl.use(_1);Df.use(_1);Rl.mount("#app");Df.mount("#navbar");v1.mount("#back");export{Pa as _,dv as a,at as b,Ca as c,rg as d,Yc as e,xt as f,Sr as o,ig as p,Yu as r,Co as t,Nf as u};
