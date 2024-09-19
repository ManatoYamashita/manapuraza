(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ou(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const ct={},hs=[],Dn=()=>{},q1=()=>!1,Zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uu=t=>t.startsWith("onUpdate:"),Rt=Object.assign,Fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},K1=Object.prototype.hasOwnProperty,at=(t,e)=>K1.call(t,e),He=Array.isArray,ps=t=>Jo(t)==="[object Map]",Lm=t=>Jo(t)==="[object Set]",We=t=>typeof t=="function",Et=t=>typeof t=="string",Qi=t=>typeof t=="symbol",mt=t=>t!==null&&typeof t=="object",Pm=t=>(mt(t)||We(t))&&We(t.then)&&We(t.catch),Im=Object.prototype.toString,Jo=t=>Im.call(t),Z1=t=>Jo(t).slice(8,-1),Nm=t=>Jo(t)==="[object Object]",ku=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,na=Ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},J1=/-(\w)/g,Fn=Qo(t=>t.replace(J1,(e,n)=>n?n.toUpperCase():"")),Q1=/\B([A-Z])/g,Br=Qo(t=>t.replace(Q1,"-$1").toLowerCase()),el=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nl=Qo(t=>t?`on${el(t)}`:""),ji=(t,e)=>!Object.is(t,e),Dl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},e0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},t0=t=>{const e=Et(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const Om=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?s0(i):tl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||mt(t))return t}const n0=/;(?![^(]*\))/g,i0=/:([^]+)/,r0=/\/\*[^]*?\*\//g;function s0(t){const e={};return t.replace(r0,"").split(n0).forEach(n=>{if(n){const i=n.split(i0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function nl(t){let e="";if(Et(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=nl(t[n]);i&&(e+=i+" ")}else if(mt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const a0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o0=Ou(a0);function Um(t){return!!t||t===""}const Fm=t=>!!(t&&t.__v_isRef===!0),km=t=>Et(t)?t:t==null?"":He(t)||mt(t)&&(t.toString===Im||!We(t.toString))?Fm(t)?km(t.value):JSON.stringify(t,Bm,2):String(t),Bm=(t,e)=>Fm(e)?Bm(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ol(i,s)+" =>"]=r,n),{})}:Lm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:Qi(e)?Ol(e):mt(e)&&!He(e)&&!Nm(e)?String(e):e,Ol=(t,e="")=>{var n;return Qi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fn;class zm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=fn;try{return fn=this,e()}finally{fn=n}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function l0(t){return new zm(t)}function c0(){return fn}let lt;const Ul=new WeakSet;class Hm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,fn&&fn.active&&fn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ul.has(this)&&(Ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=ia,ia=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jf(this),Vm(this);const e=lt,n=On;lt=this,On=!0;try{return this.fn()}finally{Wm(this),lt=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hu(e);this.deps=this.depsTail=void 0,jf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kc(this)&&this.run()}get dirty(){return kc(this)}}let Gm=0,ia;function Bu(){Gm++}function zu(){if(--Gm>0)return;let t;for(;ia;){let e=ia;for(ia=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Vm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wm(t){let e,n=t.depsTail;for(let i=n;i;i=i.prevDep)i.version===-1?(i===n&&(n=i.prevDep),Hu(i),u0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Xm(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!t._dirty}function Xm(t){if(t.flags&2)return!1;if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ma))return;t.globalVersion=ma;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!kc(t)){t.flags&=-3;return}const n=lt,i=On;lt=t,On=!0;try{Vm(t);const r=t.fn(t._value);(e.version===0||ji(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=n,On=i,Wm(t),t.flags&=-3}}function Hu(t){const{dep:e,prevSub:n,nextSub:i}=t;if(n&&(n.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Hu(r)}}function u0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const jm=[];function er(){jm.push(On),On=!1}function tr(){const t=jm.pop();On=t===void 0?!0:t}function jf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=lt;lt=void 0;try{e()}finally{lt=n}}}let ma=0;class Gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!lt||!On||lt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==lt)n=this.activeLink={dep:this,sub:lt,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},lt.deps?(n.prevDep=lt.depsTail,lt.depsTail.nextDep=n,lt.depsTail=n):lt.deps=lt.depsTail=n,lt.flags&4&&Ym(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=lt.depsTail,n.nextDep=void 0,lt.depsTail.nextDep=n,lt.depsTail=n,lt.deps===n&&(lt.deps=i)}return n}trigger(e){this.version++,ma++,this.notify(e)}notify(e){Bu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{zu()}}}function Ym(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ym(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Bc=new WeakMap,Ar=Symbol(""),zc=Symbol(""),ga=Symbol("");function Wt(t,e,n){if(On&&lt){let i=Bc.get(t);i||Bc.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=new Gu),r.track()}}function gi(t,e,n,i,r,s){const o=Bc.get(t);if(!o){ma++;return}let a=[];if(e==="clear")a=[...o.values()];else{const l=He(t),c=l&&ku(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ga||!Qi(d)&&d>=u)&&a.push(f)})}else{const u=f=>f&&a.push(f);switch(n!==void 0&&u(o.get(n)),c&&u(o.get(ga)),e){case"add":l?c&&u(o.get("length")):(u(o.get(Ar)),ps(t)&&u(o.get(zc)));break;case"delete":l||(u(o.get(Ar)),ps(t)&&u(o.get(zc)));break;case"set":ps(t)&&u(o.get(Ar));break}}}Bu();for(const l of a)l.trigger();zu()}function Hr(t){const e=nt(t);return e===t?e:(Wt(e,"iterate",ga),Un(t)?e:e.map(Ht))}function il(t){return Wt(t=nt(t),"iterate",ga),t}const f0={__proto__:null,[Symbol.iterator](){return Fl(this,Symbol.iterator,Ht)},concat(...t){return Hr(this).concat(...t.map(e=>He(e)?Hr(e):e))},entries(){return Fl(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return Jn(this,"every",t,e,void 0,arguments)},filter(t,e){return Jn(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return Jn(this,"find",t,e,Ht,arguments)},findIndex(t,e){return Jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jn(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return Jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return kl(this,"includes",t)},indexOf(...t){return kl(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return kl(this,"lastIndexOf",t)},map(t,e){return Jn(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return Yf(this,"reduce",t,e)},reduceRight(t,...e){return Yf(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return Jn(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return Fl(this,"values",Ht)}};function Fl(t,e,n){const i=il(t),r=i[e]();return i!==t&&!Un(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const d0=Array.prototype;function Jn(t,e,n,i,r,s){const o=il(t),a=o!==t&&!Un(t),l=o[e];if(l!==d0[e]){const f=l.apply(t,s);return a?Ht(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Ht(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Yf(t,e,n,i){const r=il(t);let s=n;return r!==t&&(Un(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ht(a),l,t)}),r[e](s,...i)}function kl(t,e,n){const i=nt(t);Wt(i,"iterate",ga);const r=i[e](...n);return(r===-1||r===!1)&&ju(n[0])?(n[0]=nt(n[0]),i[e](...n)):r}function Gs(t,e,n=[]){er(),Bu();const i=nt(t)[e].apply(t,n);return zu(),tr(),i}const h0=Ou("__proto__,__v_isRef,__isVue"),$m=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qi));function p0(t){Qi(t)||(t=String(t));const e=nt(this);return Wt(e,"has",t),e.hasOwnProperty(t)}class qm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?w0:Qm:s?Jm:Zm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=f0[n]))return l;if(n==="hasOwnProperty")return p0}const a=Reflect.get(e,n,Ft(e)?e:i);return(Qi(n)?$m.has(n):h0(n))||(r||Wt(e,"get",n),s)?a:Ft(a)?o&&ku(n)?a:a.value:mt(a)?r?tg(a):sl(a):a}}class Km extends qm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Nr(s);if(!Un(i)&&!Nr(i)&&(s=nt(s),i=nt(i)),!He(e)&&Ft(s)&&!Ft(i))return l?!1:(s.value=i,!0)}const o=He(e)&&ku(n)?Number(n)<e.length:at(e,n),a=Reflect.set(e,n,i,Ft(e)?e:r);return e===nt(r)&&(o?ji(i,s)&&gi(e,"set",n,i):gi(e,"add",n,i)),a}deleteProperty(e,n){const i=at(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&gi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Qi(n)||!$m.has(n))&&Wt(e,"has",n),i}ownKeys(e){return Wt(e,"iterate",He(e)?"length":Ar),Reflect.ownKeys(e)}}class m0 extends qm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const g0=new Km,_0=new m0,v0=new Km(!0);const Vu=t=>t,rl=t=>Reflect.getPrototypeOf(t);function Wa(t,e,n=!1,i=!1){t=t.__v_raw;const r=nt(t),s=nt(e);n||(ji(e,s)&&Wt(r,"get",e),Wt(r,"get",s));const{has:o}=rl(r),a=i?Vu:n?Yu:Ht;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Xa(t,e=!1){const n=this.__v_raw,i=nt(n),r=nt(t);return e||(ji(t,r)&&Wt(i,"has",t),Wt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ja(t,e=!1){return t=t.__v_raw,!e&&Wt(nt(t),"iterate",Ar),Reflect.get(t,"size",t)}function $f(t,e=!1){!e&&!Un(t)&&!Nr(t)&&(t=nt(t));const n=nt(this);return rl(n).has.call(n,t)||(n.add(t),gi(n,"add",t,t)),this}function qf(t,e,n=!1){!n&&!Un(e)&&!Nr(e)&&(e=nt(e));const i=nt(this),{has:r,get:s}=rl(i);let o=r.call(i,t);o||(t=nt(t),o=r.call(i,t));const a=s.call(i,t);return i.set(t,e),o?ji(e,a)&&gi(i,"set",t,e):gi(i,"add",t,e),this}function Kf(t){const e=nt(this),{has:n,get:i}=rl(e);let r=n.call(e,t);r||(t=nt(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&gi(e,"delete",t,void 0),s}function Zf(){const t=nt(this),e=t.size!==0,n=t.clear();return e&&gi(t,"clear",void 0,void 0),n}function Ya(t,e){return function(i,r){const s=this,o=s.__v_raw,a=nt(o),l=e?Vu:t?Yu:Ht;return!t&&Wt(a,"iterate",Ar),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function $a(t,e,n){return function(...i){const r=this.__v_raw,s=nt(r),o=ps(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Vu:e?Yu:Ht;return!e&&Wt(s,"iterate",l?zc:Ar),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function bi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function x0(){const t={get(s){return Wa(this,s)},get size(){return ja(this)},has:Xa,add:$f,set:qf,delete:Kf,clear:Zf,forEach:Ya(!1,!1)},e={get(s){return Wa(this,s,!1,!0)},get size(){return ja(this)},has:Xa,add(s){return $f.call(this,s,!0)},set(s,o){return qf.call(this,s,o,!0)},delete:Kf,clear:Zf,forEach:Ya(!1,!0)},n={get(s){return Wa(this,s,!0)},get size(){return ja(this,!0)},has(s){return Xa.call(this,s,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:Ya(!0,!1)},i={get(s){return Wa(this,s,!0,!0)},get size(){return ja(this,!0)},has(s){return Xa.call(this,s,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:Ya(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=$a(s,!1,!1),n[s]=$a(s,!0,!1),e[s]=$a(s,!1,!0),i[s]=$a(s,!0,!0)}),[t,n,e,i]}const[E0,y0,S0,b0]=x0();function Wu(t,e){const n=e?t?b0:S0:t?y0:E0;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(at(n,r)&&r in i?n:i,r,s)}const M0={get:Wu(!1,!1)},T0={get:Wu(!1,!0)},A0={get:Wu(!0,!1)};const Zm=new WeakMap,Jm=new WeakMap,Qm=new WeakMap,w0=new WeakMap;function C0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function R0(t){return t.__v_skip||!Object.isExtensible(t)?0:C0(Z1(t))}function sl(t){return Nr(t)?t:Xu(t,!1,g0,M0,Zm)}function eg(t){return Xu(t,!1,v0,T0,Jm)}function tg(t){return Xu(t,!0,_0,A0,Qm)}function Xu(t,e,n,i,r){if(!mt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=R0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ms(t){return Nr(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Nr(t){return!!(t&&t.__v_isReadonly)}function Un(t){return!!(t&&t.__v_isShallow)}function ju(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function L0(t){return Object.isExtensible(t)&&Dm(t,"__v_skip",!0),t}const Ht=t=>mt(t)?sl(t):t,Yu=t=>mt(t)?tg(t):t;function Ft(t){return t?t.__v_isRef===!0:!1}function xr(t){return ng(t,!1)}function $u(t){return ng(t,!0)}function ng(t,e){return Ft(t)?t:new P0(t,e)}class P0{constructor(e,n){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:nt(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Un(e)||Nr(e);e=i?e:nt(e),ji(e,n)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function gs(t){return Ft(t)?t.value:t}const I0={get:(t,e,n)=>e==="__v_raw"?t:gs(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ft(r)&&!Ft(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ig(t){return ms(t)?t:new Proxy(t,I0)}class N0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ma-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){lt!==this&&(this.flags|=16,this.dep.notify())}get value(){const e=this.dep.track();return Xm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function D0(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new N0(i,r,n)}const qa={},Do=new WeakMap;let _r;function O0(t,e=!1,n=_r){if(n){let i=Do.get(n);i||Do.set(n,i=[]),i.push(t)}}function U0(t,e,n=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=_=>r?_:Un(_)||r===!1||r===0?ci(_,1):ci(_);let u,f,d,p,E=!1,x=!1;if(Ft(t)?(f=()=>t.value,E=Un(t)):ms(t)?(f=()=>c(t),E=!0):He(t)?(x=!0,E=t.some(_=>ms(_)||Un(_)),f=()=>t.map(_=>{if(Ft(_))return _.value;if(ms(_))return c(_);if(We(_))return l?l(_,2):_()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){er();try{d()}finally{tr()}}const _=_r;_r=u;try{return l?l(t,3,[p]):t(p)}finally{_r=_}}:f=Dn,e&&r){const _=f,b=r===!0?1/0:r;f=()=>ci(_(),b)}const g=c0(),h=()=>{u.stop(),g&&Fu(g.effects,u)};if(s)if(e){const _=e;e=(...b)=>{_(...b),h()}}else{const _=f;f=()=>{_(),h()}}let v=x?new Array(t.length).fill(qa):qa;const m=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const b=u.run();if(r||E||(x?b.some((T,M)=>ji(T,v[M])):ji(b,v))){d&&d();const T=_r;_r=u;try{const M=[b,v===qa?void 0:x&&v[0]===qa?[]:v,p];l?l(e,3,M):e(...M),v=b}finally{_r=T}}}else u.run()};return a&&a(m),u=new Hm(f),u.scheduler=o?()=>o(m,!1):m,p=_=>O0(_,!1,u),d=u.onStop=()=>{const _=Do.get(u);if(_){if(l)l(_,4);else for(const b of _)b();Do.delete(u)}},e?i?m(!0):v=u.run():o?o(m.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ci(t,e=1/0,n){if(e<=0||!mt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ft(t))ci(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)ci(t[i],e,n);else if(Lm(t)||ps(t))t.forEach(i=>{ci(i,e,n)});else if(Nm(t)){for(const i in t)ci(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ci(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ia(t,e,n,i){try{return i?t(...i):t()}catch(r){al(r,e,n)}}function kn(t,e,n,i){if(We(t)){const r=Ia(t,e,n,i);return r&&Pm(r)&&r.catch(s=>{al(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(kn(t[s],e,n,i));return r}}function al(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){er(),Ia(s,null,10,[t,l,c]),tr();return}}F0(t,n,r,i,o)}function F0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}let _a=!1,Hc=!1;const Jt=[];let Vn=0;const _s=[];let Oi=null,as=0;const rg=Promise.resolve();let qu=null;function sg(t){const e=qu||rg;return t?e.then(this?t.bind(this):t):e}function k0(t){let e=_a?Vn+1:0,n=Jt.length;for(;e<n;){const i=e+n>>>1,r=Jt[i],s=va(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Ku(t){if(!(t.flags&1)){const e=va(t),n=Jt[Jt.length-1];!n||!(t.flags&2)&&e>=va(n)?Jt.push(t):Jt.splice(k0(e),0,t),t.flags|=1,ag()}}function ag(){!_a&&!Hc&&(Hc=!0,qu=rg.then(lg))}function B0(t){He(t)?_s.push(...t):Oi&&t.id===-1?Oi.splice(as+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),ag()}function Jf(t,e,n=_a?Vn+1:0){for(;n<Jt.length;n++){const i=Jt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Jt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&=-2}}}function og(t){if(_s.length){const e=[...new Set(_s)].sort((n,i)=>va(n)-va(i));if(_s.length=0,Oi){Oi.push(...e);return}for(Oi=e,as=0;as<Oi.length;as++){const n=Oi[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Oi=null,as=0}}const va=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lg(t){Hc=!1,_a=!0;const e=Dn;try{for(Vn=0;Vn<Jt.length;Vn++){const n=Jt[Vn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ia(n,n.i,n.i?15:14),n.flags&=-2)}}finally{for(;Vn<Jt.length;Vn++){const n=Jt[Vn];n&&(n.flags&=-2)}Vn=0,Jt.length=0,og(),_a=!1,qu=null,(Jt.length||_s.length)&&lg()}}let tn=null,cg=null;function Oo(t){const e=tn;return tn=t,cg=t&&t.type.__scopeId||null,e}function hi(t,e=tn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ld(-1);const s=Oo(e);let o;try{o=t(...r)}finally{Oo(s),i._d&&ld(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function z0(t,e){if(tn===null)return t;const n=dl(tn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&ci(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function or(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(er(),kn(l,n,8,[t.el,a,t,e]),tr())}}const H0=Symbol("_vte"),ug=t=>t.__isTeleport,Ui=Symbol("_leaveCb"),Ka=Symbol("_enterCb");function G0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cl(()=>{t.isMounted=!0}),xg(()=>{t.isUnmounting=!0}),t}const vn=[Function,Array],fg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vn,onEnter:vn,onAfterEnter:vn,onEnterCancelled:vn,onBeforeLeave:vn,onLeave:vn,onAfterLeave:vn,onLeaveCancelled:vn,onBeforeAppear:vn,onAppear:vn,onAfterAppear:vn,onAppearCancelled:vn},dg=t=>{const e=t.subTree;return e.component?dg(e.component):e},V0={name:"BaseTransition",props:fg,setup(t,{slots:e}){const n=bs(),i=G0();return()=>{const r=e.default&&mg(e.default(),!0);if(!r||!r.length)return;const s=hg(r),o=nt(t),{mode:a}=o;if(i.isLeaving)return Bl(s);const l=Qf(s);if(!l)return Bl(s);let c=Gc(l,o,i,n,d=>c=d);l.type!==bn&&xa(l,c);const u=n.subTree,f=u&&Qf(u);if(f&&f.type!==bn&&!Er(l,f)&&dg(n).type!==bn){const d=Gc(f,o,i,n);if(xa(f,d),a==="out-in"&&l.type!==bn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave},Bl(s);a==="in-out"&&l.type!==bn&&(d.delayLeave=(p,E,x)=>{const g=pg(i,f);g[String(f.key)]=f,p[Ui]=()=>{E(),p[Ui]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return s}}};function hg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==bn){e=n;break}}return e}const W0=V0;function pg(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Gc(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:E,onLeaveCancelled:x,onBeforeAppear:g,onAppear:h,onAfterAppear:v,onAppearCancelled:m}=e,_=String(t.key),b=pg(n,t),T=(y,R)=>{y&&kn(y,i,9,R)},M=(y,R)=>{const V=R[1];T(y,R),He(y)?y.every(U=>U.length<=1)&&V():y.length<=1&&V()},N={mode:o,persisted:a,beforeEnter(y){let R=l;if(!n.isMounted)if(s)R=g||l;else return;y[Ui]&&y[Ui](!0);const V=b[_];V&&Er(t,V)&&V.el[Ui]&&V.el[Ui](),T(R,[y])},enter(y){let R=c,V=u,U=f;if(!n.isMounted)if(s)R=h||c,V=v||u,U=m||f;else return;let j=!1;const F=y[Ka]=Y=>{j||(j=!0,Y?T(U,[y]):T(V,[y]),N.delayedLeave&&N.delayedLeave(),y[Ka]=void 0)};R?M(R,[y,F]):F()},leave(y,R){const V=String(t.key);if(y[Ka]&&y[Ka](!0),n.isUnmounting)return R();T(d,[y]);let U=!1;const j=y[Ui]=F=>{U||(U=!0,R(),F?T(x,[y]):T(E,[y]),y[Ui]=void 0,b[V]===t&&delete b[V])};b[V]=t,p?M(p,[y,j]):j()},clone(y){const R=Gc(y,e,n,i,r);return r&&r(R),R}};return N}function Bl(t){if(ol(t))return t=Yi(t),t.children=null,t}function Qf(t){if(!ol(t))return ug(t.type)&&t.children?hg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function xa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mg(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===En?(o.patchFlag&128&&r++,i=i.concat(mg(o.children,e,a))):(e||o.type!==bn)&&i.push(a!=null?Yi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Os(t,e){return We(t)?(()=>Rt({name:t.name},e,{setup:t}))():t}function gg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vc(t,e,n,i,r=!1){if(He(t)){t.forEach((E,x)=>Vc(E,e&&(He(e)?e[x]:e),n,i,r));return}if(ra(i)&&!r)return;const s=i.shapeFlag&4?dl(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,d=nt(f),p=f===ct?()=>!1:E=>at(d,E);if(c!=null&&c!==l&&(Et(c)?(u[c]=null,p(c)&&(f[c]=null)):Ft(c)&&(c.value=null)),We(l))Ia(l,a,12,[o,u]);else{const E=Et(l),x=Ft(l);if(E||x){const g=()=>{if(t.f){const h=E?p(l)?f[l]:u[l]:l.value;r?He(h)&&Fu(h,s):He(h)?h.includes(s)||h.push(s):E?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else E?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,un(g,n)):g()}}}const ra=t=>!!t.type.__asyncLoader,ol=t=>t.type.__isKeepAlive;function X0(t,e){_g(t,"a",e)}function j0(t,e){_g(t,"da",e)}function _g(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ll(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ol(r.parent.vnode)&&Y0(i,e,n,r),r=r.parent}}function Y0(t,e,n,i){const r=ll(e,t,i,!0);Zu(()=>{Fu(i[e],r)},n)}function ll(t,e,n=Ut,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{er();const a=Oa(n),l=kn(e,n,t,o);return a(),tr(),l});return i?r.unshift(s):r.push(s),s}}const yi=t=>(e,n=Ut)=>{(!fl||t==="sp")&&ll(t,(...i)=>e(...i),n)},vg=yi("bm"),cl=yi("m"),$0=yi("bu"),q0=yi("u"),xg=yi("bum"),Zu=yi("um"),K0=yi("sp"),Z0=yi("rtg"),J0=yi("rtc");function Q0(t,e=Ut){ll("ec",t,e)}const Ju="components";function Qu(t,e){return yg(Ju,t,!0,e)||t}const Eg=Symbol.for("v-ndc");function ev(t){return Et(t)?yg(Ju,t,!1)||t:t||Eg}function yg(t,e,n=!0,i=!1){const r=tn||Ut;if(r){const s=r.type;if(t===Ju){const a=Gv(s,!1);if(a&&(a===e||a===Fn(e)||a===el(Fn(e))))return s}const o=ed(r[t]||s[t],e)||ed(r.appContext[t],e);return!o&&i?s:o}}function ed(t,e){return t&&(t[e]||t[Fn(e)]||t[el(Fn(e))])}function tP(t,e,n,i){let r;const s=n&&n[i],o=He(t);if(o||Et(t)){const a=o&&ms(t);a&&(t=il(t)),r=new Array(t.length);for(let l=0,c=t.length;l<c;l++)r[l]=e(a?Ht(t[l]):t[l],l,void 0,s&&s[l])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(mt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s&&s[l])}}else r=[];return n&&(n[i]=r),r}const Wc=t=>t?Hg(t)?dl(t):Wc(t.parent):null,sa=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ef(t),$forceUpdate:t=>t.f||(t.f=()=>{Ku(t.update)}),$nextTick:t=>t.n||(t.n=sg.bind(t.proxy)),$watch:t=>yv.bind(t)}),zl=(t,e)=>t!==ct&&!t.__isScriptSetup&&at(t,e),tv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(zl(i,e))return o[e]=1,i[e];if(r!==ct&&at(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&at(c,e))return o[e]=3,s[e];if(n!==ct&&at(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const u=sa[e];let f,d;if(u)return e==="$attrs"&&Wt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ct&&at(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,at(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return zl(r,e)?(r[e]=n,!0):i!==ct&&at(i,e)?(i[e]=n,!0):at(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ct&&at(t,o)||zl(e,o)||(a=s[0])&&at(a,o)||at(i,o)||at(sa,o)||at(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:at(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function td(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function nv(t){const e=ef(t),n=t.proxy,i=t.ctx;Xc=!1,e.beforeCreate&&nd(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:E,activated:x,deactivated:g,beforeDestroy:h,beforeUnmount:v,destroyed:m,unmounted:_,render:b,renderTracked:T,renderTriggered:M,errorCaptured:N,serverPrefetch:y,expose:R,inheritAttrs:V,components:U,directives:j,filters:F}=e;if(c&&iv(c,i,null),o)for(const K in o){const se=o[K];We(se)&&(i[K]=se.bind(n))}if(r){const K=r.call(n,n);mt(K)&&(t.data=sl(K))}if(Xc=!0,s)for(const K in s){const se=s[K],ae=We(se)?se.bind(n,n):We(se.get)?se.get.bind(n,n):Dn,fe=!We(se)&&We(se.set)?se.set.bind(n):Dn,G=it({get:ae,set:fe});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>G.value,set:Q=>G.value=Q})}if(a)for(const K in a)Sg(a[K],i,n,K);if(l){const K=We(l)?l.call(n):l;Reflect.ownKeys(K).forEach(se=>{Ao(se,K[se])})}u&&nd(u,t,"c");function J(K,se){He(se)?se.forEach(ae=>K(ae.bind(n))):se&&K(se.bind(n))}if(J(vg,f),J(cl,d),J($0,p),J(q0,E),J(X0,x),J(j0,g),J(Q0,N),J(J0,T),J(Z0,M),J(xg,v),J(Zu,_),J(K0,y),He(R))if(R.length){const K=t.exposed||(t.exposed={});R.forEach(se=>{Object.defineProperty(K,se,{get:()=>n[se],set:ae=>n[se]=ae})})}else t.exposed||(t.exposed={});b&&t.render===Dn&&(t.render=b),V!=null&&(t.inheritAttrs=V),U&&(t.components=U),j&&(t.directives=j),y&&gg(t)}function iv(t,e,n=Dn){He(t)&&(t=jc(t));for(const i in t){const r=t[i];let s;mt(r)?"default"in r?s=Tn(r.from||i,r.default,!0):s=Tn(r.from||i):s=Tn(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function nd(t,e,n){kn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,i){let r=i.includes(".")?Ug(n,i):()=>n[i];if(Et(t)){const s=e[t];We(s)&&_i(r,s)}else if(We(t))_i(r,t.bind(n));else if(mt(t))if(He(t))t.forEach(s=>Sg(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&_i(r,s,t)}}function ef(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Uo(l,c,o,!0)),Uo(l,e,o)),mt(e)&&s.set(e,l),l}function Uo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Uo(t,s,n,!0),r&&r.forEach(o=>Uo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=rv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rv={data:id,props:rd,emits:rd,methods:Js,computed:Js,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Js,directives:Js,watch:av,provide:id,inject:sv};function id(t,e){return e?t?function(){return Rt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function sv(t,e){return Js(jc(t),jc(e))}function jc(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Rt(Object.create(null),t,e):e}function rd(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Rt(Object.create(null),td(t),td(e??{})):e}function av(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const i in e)n[i]=Yt(t[i],e[i]);return n}function bg(){return{app:null,config:{isNativeTag:q1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ov=0;function lv(t,e){return function(i,r=null){We(i)||(i=Rt({},i)),r!=null&&!mt(r)&&(r=null);const s=bg(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ov++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Wv,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(c,...f)):We(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||vt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(p,u):t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,dl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(kn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=vs;vs=c;try{return u()}finally{vs=f}}};return c}}let vs=null;function Ao(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function Tn(t,e,n=!1){const i=Ut||tn;if(i||vs){const r=vs?vs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}const Mg={},Tg=()=>Object.create(Mg),Ag=t=>Object.getPrototypeOf(t)===Mg;function cv(t,e,n,i=!1){const r={},s=Tg();t.propsDefaults=Object.create(null),wg(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:eg(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function uv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=nt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ul(t.emitsOptions,d))continue;const p=e[d];if(l)if(at(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const E=Fn(d);r[E]=Yc(l,a,E,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{wg(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!at(e,f)&&((u=Br(f))===f||!at(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Yc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&gi(t.attrs,"set","")}function wg(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(na(l))continue;const c=e[l];let u;r&&at(r,u=Fn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ul(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(n),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Yc(r,l,f,c[f],t,!at(c,f))}}return o}function Yc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Oa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Br(n))&&(i=!0))}return i}const fv=new WeakMap;function Cg(t,e,n=!1){const i=n?fv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[d,p]=Cg(f,e,!0);Rt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return mt(t)&&i.set(t,hs),hs;if(He(s))for(let u=0;u<s.length;u++){const f=Fn(s[u]);sd(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=Fn(u);if(sd(f)){const d=s[u],p=o[f]=He(d)||We(d)?{type:d}:Rt({},d),E=p.type;let x=!1,g=!0;if(He(E))for(let h=0;h<E.length;++h){const v=E[h],m=We(v)&&v.name;if(m==="Boolean"){x=!0;break}else m==="String"&&(g=!1)}else x=We(E)&&E.name==="Boolean";p[0]=x,p[1]=g,(x||at(p,"default"))&&a.push(f)}}const c=[o,a];return mt(t)&&i.set(t,c),c}function sd(t){return t[0]!=="$"&&!na(t)}const Rg=t=>t[0]==="_"||t==="$stable",tf=t=>He(t)?t.map(Wn):[Wn(t)],dv=(t,e,n)=>{if(e._n)return e;const i=hi((...r)=>tf(e(...r)),n);return i._c=!1,i},Lg=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Rg(r))continue;const s=t[r];if(We(s))e[r]=dv(r,s,i);else if(s!=null){const o=tf(s);e[r]=()=>o}}},Pg=(t,e)=>{const n=tf(e);t.slots.default=()=>n},Ig=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},hv=(t,e,n)=>{const i=t.slots=Tg();if(t.vnode.shapeFlag&32){const r=e._;r?(Ig(i,e,n),n&&Dm(i,"_",r,!0)):Lg(e,i)}else e&&Pg(t,e)},pv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ig(r,e,n):(s=!e.$stable,Lg(e,r)),o=e}else e&&(Pg(t,e),o={default:1});if(s)for(const a in r)!Rg(a)&&o[a]==null&&delete r[a]},un=Cv;function mv(t){return gv(t)}function gv(t,e){const n=Om();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Dn,insertStaticContent:E}=t,x=(I,A,z,ee=null,te=null,ne=null,he=void 0,C=null,L=!!A.dynamicChildren)=>{if(I===A)return;I&&!Er(I,A)&&(ee=q(I),Q(I,te,ne,!0),I=null),A.patchFlag===-2&&(L=!1,A.dynamicChildren=null);const{type:H,ref:w,shapeFlag:S}=A;switch(H){case Na:g(I,A,z,ee);break;case bn:h(I,A,z,ee);break;case wo:I==null&&v(A,z,ee,he);break;case En:U(I,A,z,ee,te,ne,he,C,L);break;default:S&1?b(I,A,z,ee,te,ne,he,C,L):S&6?j(I,A,z,ee,te,ne,he,C,L):(S&64||S&128)&&H.process(I,A,z,ee,te,ne,he,C,L,xe)}w!=null&&te&&Vc(w,I&&I.ref,ne,A||I,!A)},g=(I,A,z,ee)=>{if(I==null)i(A.el=a(A.children),z,ee);else{const te=A.el=I.el;A.children!==I.children&&c(te,A.children)}},h=(I,A,z,ee)=>{I==null?i(A.el=l(A.children||""),z,ee):A.el=I.el},v=(I,A,z,ee)=>{[I.el,I.anchor]=E(I.children,A,z,ee,I.el,I.anchor)},m=({el:I,anchor:A},z,ee)=>{let te;for(;I&&I!==A;)te=d(I),i(I,z,ee),I=te;i(A,z,ee)},_=({el:I,anchor:A})=>{let z;for(;I&&I!==A;)z=d(I),r(I),I=z;r(A)},b=(I,A,z,ee,te,ne,he,C,L)=>{A.type==="svg"?he="svg":A.type==="math"&&(he="mathml"),I==null?T(A,z,ee,te,ne,he,C,L):y(I,A,te,ne,he,C,L)},T=(I,A,z,ee,te,ne,he,C)=>{let L,H;const{props:w,shapeFlag:S,transition:O,dirs:D}=I;if(L=I.el=o(I.type,ne,w&&w.is,w),S&8?u(L,I.children):S&16&&N(I.children,L,null,ee,te,Hl(I,ne),he,C),D&&or(I,null,ee,"created"),M(L,I,I.scopeId,he,ee),w){for(const ie in w)ie!=="value"&&!na(ie)&&s(L,ie,null,w[ie],ne,ee);"value"in w&&s(L,"value",null,w.value,ne),(H=w.onVnodeBeforeMount)&&Hn(H,ee,I)}D&&or(I,null,ee,"beforeMount");const B=_v(te,O);B&&O.beforeEnter(L),i(L,A,z),((H=w&&w.onVnodeMounted)||B||D)&&un(()=>{H&&Hn(H,ee,I),B&&O.enter(L),D&&or(I,null,ee,"mounted")},te)},M=(I,A,z,ee,te)=>{if(z&&p(I,z),ee)for(let ne=0;ne<ee.length;ne++)p(I,ee[ne]);if(te){let ne=te.subTree;if(A===ne||kg(ne.type)&&(ne.ssContent===A||ne.ssFallback===A)){const he=te.vnode;M(I,he,he.scopeId,he.slotScopeIds,te.parent)}}},N=(I,A,z,ee,te,ne,he,C,L=0)=>{for(let H=L;H<I.length;H++){const w=I[H]=C?Fi(I[H]):Wn(I[H]);x(null,w,A,z,ee,te,ne,he,C)}},y=(I,A,z,ee,te,ne,he)=>{const C=A.el=I.el;let{patchFlag:L,dynamicChildren:H,dirs:w}=A;L|=I.patchFlag&16;const S=I.props||ct,O=A.props||ct;let D;if(z&&lr(z,!1),(D=O.onVnodeBeforeUpdate)&&Hn(D,z,A,I),w&&or(A,I,z,"beforeUpdate"),z&&lr(z,!0),(S.innerHTML&&O.innerHTML==null||S.textContent&&O.textContent==null)&&u(C,""),H?R(I.dynamicChildren,H,C,z,ee,Hl(A,te),ne):he||se(I,A,C,null,z,ee,Hl(A,te),ne,!1),L>0){if(L&16)V(C,S,O,z,te);else if(L&2&&S.class!==O.class&&s(C,"class",null,O.class,te),L&4&&s(C,"style",S.style,O.style,te),L&8){const B=A.dynamicProps;for(let ie=0;ie<B.length;ie++){const me=B[ie],_e=S[me],Ee=O[me];(Ee!==_e||me==="value")&&s(C,me,_e,Ee,te,z)}}L&1&&I.children!==A.children&&u(C,A.children)}else!he&&H==null&&V(C,S,O,z,te);((D=O.onVnodeUpdated)||w)&&un(()=>{D&&Hn(D,z,A,I),w&&or(A,I,z,"updated")},ee)},R=(I,A,z,ee,te,ne,he)=>{for(let C=0;C<A.length;C++){const L=I[C],H=A[C],w=L.el&&(L.type===En||!Er(L,H)||L.shapeFlag&70)?f(L.el):z;x(L,H,w,null,ee,te,ne,he,!0)}},V=(I,A,z,ee,te)=>{if(A!==z){if(A!==ct)for(const ne in A)!na(ne)&&!(ne in z)&&s(I,ne,A[ne],null,te,ee);for(const ne in z){if(na(ne))continue;const he=z[ne],C=A[ne];he!==C&&ne!=="value"&&s(I,ne,C,he,te,ee)}"value"in z&&s(I,"value",A.value,z.value,te)}},U=(I,A,z,ee,te,ne,he,C,L)=>{const H=A.el=I?I.el:a(""),w=A.anchor=I?I.anchor:a("");let{patchFlag:S,dynamicChildren:O,slotScopeIds:D}=A;D&&(C=C?C.concat(D):D),I==null?(i(H,z,ee),i(w,z,ee),N(A.children||[],z,w,te,ne,he,C,L)):S>0&&S&64&&O&&I.dynamicChildren?(R(I.dynamicChildren,O,z,te,ne,he,C),(A.key!=null||te&&A===te.subTree)&&Ng(I,A,!0)):se(I,A,z,w,te,ne,he,C,L)},j=(I,A,z,ee,te,ne,he,C,L)=>{A.slotScopeIds=C,I==null?A.shapeFlag&512?te.ctx.activate(A,z,ee,he,L):F(A,z,ee,te,ne,he,L):Y(I,A,L)},F=(I,A,z,ee,te,ne,he)=>{const C=I.component=Fv(I,ee,te);if(ol(I)&&(C.ctx.renderer=xe),kv(C,!1,he),C.asyncDep){if(te&&te.registerDep(C,J,he),!I.el){const L=C.subTree=vt(bn);h(null,L,A,z)}}else J(C,I,A,z,te,ne,he)},Y=(I,A,z)=>{const ee=A.component=I.component;if(Av(I,A,z))if(ee.asyncDep&&!ee.asyncResolved){K(ee,A,z);return}else ee.next=A,ee.update();else A.el=I.el,ee.vnode=A},J=(I,A,z,ee,te,ne,he)=>{const C=()=>{if(I.isMounted){let{next:S,bu:O,u:D,parent:B,vnode:ie}=I;{const ve=Dg(I);if(ve){S&&(S.el=ie.el,K(I,S,he)),ve.asyncDep.then(()=>{I.isUnmounted||C()});return}}let me=S,_e;lr(I,!1),S?(S.el=ie.el,K(I,S,he)):S=ie,O&&Dl(O),(_e=S.props&&S.props.onVnodeBeforeUpdate)&&Hn(_e,B,S,ie),lr(I,!0);const Ee=Gl(I),k=I.subTree;I.subTree=Ee,x(k,Ee,f(k.el),q(k),I,te,ne),S.el=Ee.el,me===null&&wv(I,Ee.el),D&&un(D,te),(_e=S.props&&S.props.onVnodeUpdated)&&un(()=>Hn(_e,B,S,ie),te)}else{let S;const{el:O,props:D}=A,{bm:B,m:ie,parent:me,root:_e,type:Ee}=I,k=ra(A);if(lr(I,!1),B&&Dl(B),!k&&(S=D&&D.onVnodeBeforeMount)&&Hn(S,me,A),lr(I,!0),O&&X){const ve=()=>{I.subTree=Gl(I),X(O,I.subTree,I,te,null)};k&&Ee.__asyncHydrate?Ee.__asyncHydrate(O,I,ve):ve()}else{_e.ce&&_e.ce._injectChildStyle(Ee);const ve=I.subTree=Gl(I);x(null,ve,z,ee,I,te,ne),A.el=ve.el}if(ie&&un(ie,te),!k&&(S=D&&D.onVnodeMounted)){const ve=A;un(()=>Hn(S,me,ve),te)}(A.shapeFlag&256||me&&ra(me.vnode)&&me.vnode.shapeFlag&256)&&I.a&&un(I.a,te),I.isMounted=!0,A=z=ee=null}};I.scope.on();const L=I.effect=new Hm(C);I.scope.off();const H=I.update=L.run.bind(L),w=I.job=L.runIfDirty.bind(L);w.i=I,w.id=I.uid,L.scheduler=()=>Ku(w),lr(I,!0),H()},K=(I,A,z)=>{A.component=I;const ee=I.vnode.props;I.vnode=A,I.next=null,uv(I,A.props,ee,z),pv(I,A.children,z),er(),Jf(I),tr()},se=(I,A,z,ee,te,ne,he,C,L=!1)=>{const H=I&&I.children,w=I?I.shapeFlag:0,S=A.children,{patchFlag:O,shapeFlag:D}=A;if(O>0){if(O&128){fe(H,S,z,ee,te,ne,he,C,L);return}else if(O&256){ae(H,S,z,ee,te,ne,he,C,L);return}}D&8?(w&16&&Ce(H,te,ne),S!==H&&u(z,S)):w&16?D&16?fe(H,S,z,ee,te,ne,he,C,L):Ce(H,te,ne,!0):(w&8&&u(z,""),D&16&&N(S,z,ee,te,ne,he,C,L))},ae=(I,A,z,ee,te,ne,he,C,L)=>{I=I||hs,A=A||hs;const H=I.length,w=A.length,S=Math.min(H,w);let O;for(O=0;O<S;O++){const D=A[O]=L?Fi(A[O]):Wn(A[O]);x(I[O],D,z,null,te,ne,he,C,L)}H>w?Ce(I,te,ne,!0,!1,S):N(A,z,ee,te,ne,he,C,L,S)},fe=(I,A,z,ee,te,ne,he,C,L)=>{let H=0;const w=A.length;let S=I.length-1,O=w-1;for(;H<=S&&H<=O;){const D=I[H],B=A[H]=L?Fi(A[H]):Wn(A[H]);if(Er(D,B))x(D,B,z,null,te,ne,he,C,L);else break;H++}for(;H<=S&&H<=O;){const D=I[S],B=A[O]=L?Fi(A[O]):Wn(A[O]);if(Er(D,B))x(D,B,z,null,te,ne,he,C,L);else break;S--,O--}if(H>S){if(H<=O){const D=O+1,B=D<w?A[D].el:ee;for(;H<=O;)x(null,A[H]=L?Fi(A[H]):Wn(A[H]),z,B,te,ne,he,C,L),H++}}else if(H>O)for(;H<=S;)Q(I[H],te,ne,!0),H++;else{const D=H,B=H,ie=new Map;for(H=B;H<=O;H++){const Le=A[H]=L?Fi(A[H]):Wn(A[H]);Le.key!=null&&ie.set(Le.key,H)}let me,_e=0;const Ee=O-B+1;let k=!1,ve=0;const pe=new Array(Ee);for(H=0;H<Ee;H++)pe[H]=0;for(H=D;H<=S;H++){const Le=I[H];if(_e>=Ee){Q(Le,te,ne,!0);continue}let Ne;if(Le.key!=null)Ne=ie.get(Le.key);else for(me=B;me<=O;me++)if(pe[me-B]===0&&Er(Le,A[me])){Ne=me;break}Ne===void 0?Q(Le,te,ne,!0):(pe[Ne-B]=H+1,Ne>=ve?ve=Ne:k=!0,x(Le,A[Ne],z,null,te,ne,he,C,L),_e++)}const ke=k?vv(pe):hs;for(me=ke.length-1,H=Ee-1;H>=0;H--){const Le=B+H,Ne=A[Le],Oe=Le+1<w?A[Le+1].el:ee;pe[H]===0?x(null,Ne,z,Oe,te,ne,he,C,L):k&&(me<0||H!==ke[me]?G(Ne,z,Oe,2):me--)}}},G=(I,A,z,ee,te=null)=>{const{el:ne,type:he,transition:C,children:L,shapeFlag:H}=I;if(H&6){G(I.component.subTree,A,z,ee);return}if(H&128){I.suspense.move(A,z,ee);return}if(H&64){he.move(I,A,z,xe);return}if(he===En){i(ne,A,z);for(let S=0;S<L.length;S++)G(L[S],A,z,ee);i(I.anchor,A,z);return}if(he===wo){m(I,A,z);return}if(ee!==2&&H&1&&C)if(ee===0)C.beforeEnter(ne),i(ne,A,z),un(()=>C.enter(ne),te);else{const{leave:S,delayLeave:O,afterLeave:D}=C,B=()=>i(ne,A,z),ie=()=>{S(ne,()=>{B(),D&&D()})};O?O(ne,B,ie):ie()}else i(ne,A,z)},Q=(I,A,z,ee=!1,te=!1)=>{const{type:ne,props:he,ref:C,children:L,dynamicChildren:H,shapeFlag:w,patchFlag:S,dirs:O,cacheIndex:D}=I;if(S===-2&&(te=!1),C!=null&&Vc(C,null,z,I,!0),D!=null&&(A.renderCache[D]=void 0),w&256){A.ctx.deactivate(I);return}const B=w&1&&O,ie=!ra(I);let me;if(ie&&(me=he&&he.onVnodeBeforeUnmount)&&Hn(me,A,I),w&6)Te(I.component,z,ee);else{if(w&128){I.suspense.unmount(z,ee);return}B&&or(I,null,A,"beforeUnmount"),w&64?I.type.remove(I,A,z,xe,ee):H&&!H.hasOnce&&(ne!==En||S>0&&S&64)?Ce(H,A,z,!1,!0):(ne===En&&S&384||!te&&w&16)&&Ce(L,A,z),ee&&ge(I)}(ie&&(me=he&&he.onVnodeUnmounted)||B)&&un(()=>{me&&Hn(me,A,I),B&&or(I,null,A,"unmounted")},z)},ge=I=>{const{type:A,el:z,anchor:ee,transition:te}=I;if(A===En){Se(z,ee);return}if(A===wo){_(I);return}const ne=()=>{r(z),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(I.shapeFlag&1&&te&&!te.persisted){const{leave:he,delayLeave:C}=te,L=()=>he(z,ne);C?C(I.el,ne,L):L()}else ne()},Se=(I,A)=>{let z;for(;I!==A;)z=d(I),r(I),I=z;r(A)},Te=(I,A,z)=>{const{bum:ee,scope:te,job:ne,subTree:he,um:C,m:L,a:H}=I;ad(L),ad(H),ee&&Dl(ee),te.stop(),ne&&(ne.flags|=8,Q(he,I,A,z)),C&&un(C,A),un(()=>{I.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Ce=(I,A,z,ee=!1,te=!1,ne=0)=>{for(let he=ne;he<I.length;he++)Q(I[he],A,z,ee,te)},q=I=>{if(I.shapeFlag&6)return q(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const A=d(I.anchor||I.el),z=A&&A[H0];return z?d(z):A};let ce=!1;const ue=(I,A,z)=>{I==null?A._vnode&&Q(A._vnode,null,null,!0):x(A._vnode||null,I,A,null,null,null,z),A._vnode=I,ce||(ce=!0,Jf(),og(),ce=!1)},xe={p:x,um:Q,m:G,r:ge,mt:F,mc:N,pc:se,pbc:R,n:q,o:t};let Me,X;return e&&([Me,X]=e(xe)),{render:ue,hydrate:Me,createApp:lv(ue,Me)}}function Hl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _v(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ng(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ng(o,a)),a.type===Na&&(a.el=o.el)}}function vv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Dg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dg(e)}function ad(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xv=Symbol.for("v-scx"),Ev=()=>Tn(xv);function _i(t,e,n){return Og(t,e,n)}function Og(t,e,n=ct){const{immediate:i,deep:r,flush:s,once:o}=n,a=Rt({},n);let l;if(fl)if(s==="sync"){const d=Ev();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!e||i)a.once=!0;else return{stop:Dn,resume:Dn,pause:Dn};const c=Ut;a.call=(d,p,E)=>kn(d,c,p,E);let u=!1;s==="post"?a.scheduler=d=>{un(d,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(d,p)=>{p?d():Ku(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const f=U0(t,e,a);return l&&l.push(f),f}function yv(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?Ug(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const o=Oa(this),a=Og(r,s.bind(i),n);return o(),a}function Ug(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Sv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Fn(e)}Modifiers`]||t[`${Br(e)}Modifiers`];function bv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),o=s&&Sv(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Et(u)?u.trim():u)),o.number&&(r=n.map(e0)));let a,l=i[a=Nl(e)]||i[a=Nl(Fn(e))];!l&&s&&(l=i[a=Nl(Br(e))]),l&&kn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kn(c,t,6,r)}}function Fg(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!We(t)){const l=c=>{const u=Fg(c,e,!0);u&&(a=!0,Rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(mt(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>o[l]=null):Rt(o,s),mt(t)&&i.set(t,o),o)}function ul(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(t,e[0].toLowerCase()+e.slice(1))||at(t,Br(e))||at(t,e))}function Gl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:E,inheritAttrs:x}=t,g=Oo(t);let h,v;try{if(n.shapeFlag&4){const _=r||i,b=_;h=Wn(c.call(b,_,u,f,p,d,E)),v=a}else{const _=e;h=Wn(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),v=e.props?a:Mv(a)}}catch(_){aa.length=0,al(_,t,1),h=vt(bn)}let m=h;if(v&&x!==!1){const _=Object.keys(v),{shapeFlag:b}=m;_.length&&b&7&&(s&&_.some(Uu)&&(v=Tv(v,s)),m=Yi(m,v,!1,!0))}return n.dirs&&(m=Yi(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&xa(m,n.transition),h=m,Oo(g),h}const Mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},Tv=(t,e)=>{const n={};for(const i in t)(!Uu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Av(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?od(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ul(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?od(i,o,c):!0:!!o;return!1}function od(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ul(n,s))return!0}return!1}function wv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const kg=t=>t.__isSuspense;function Cv(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):B0(t)}const En=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),aa=[];let hn=null;function Ss(t=!1){aa.push(hn=t?null:[])}function Rv(){aa.pop(),hn=aa[aa.length-1]||null}let Ea=1;function ld(t){Ea+=t,t<0&&hn&&(hn.hasOnce=!0)}function Bg(t){return t.dynamicChildren=Ea>0?hn||hs:null,Rv(),Ea>0&&hn&&hn.push(t),t}function Da(t,e,n,i,r,s){return Bg(At(t,e,n,i,r,s,!0))}function Lv(t,e,n,i,r){return Bg(vt(t,e,n,i,r,!0))}function $c(t){return t?t.__v_isVNode===!0:!1}function Er(t,e){return t.type===e.type&&t.key===e.key}const zg=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||Ft(t)||We(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function At(t,e=null,n=null,i=0,r=null,s=t===En?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zg(e),ref:e&&Co(e),scopeId:cg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return a?(nf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),Ea>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const vt=Pv;function Pv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Eg)&&(t=bn),$c(t)){const a=Yi(t,e,!0);return n&&nf(a,n),Ea>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(t)]=a:hn.push(a)),a.patchFlag=-2,a}if(Vv(t)&&(t=t.__vccOpts),e){e=Iv(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=nl(a)),mt(l)&&(ju(l)&&!He(l)&&(l=Rt({},l)),e.style=tl(l))}const o=Et(t)?1:kg(t)?128:ug(t)?64:mt(t)?4:We(t)?2:0;return At(t,e,n,i,r,o,s,!0)}function Iv(t){return t?ju(t)||Ag(t)?Rt({},t):t:null}function Yi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Dv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&zg(c),ref:e&&e.ref?n&&s?He(s)?s.concat(Co(e)):[s,Co(e)]:Co(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==En?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yi(t.ssContent),ssFallback:t.ssFallback&&Yi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&xa(u,l.clone(u)),u}function qc(t=" ",e=0){return vt(Na,null,t,e)}function Nv(t,e){const n=vt(wo,null,t);return n.staticCount=e,n}function Wn(t){return t==null||typeof t=="boolean"?vt(bn):He(t)?vt(En,null,t.slice()):typeof t=="object"?Fi(t):vt(Na,null,String(t))}function Fi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yi(t)}function nf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ag(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),i&64?(n=16,e=[qc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=nl([e.class,i.class]));else if(r==="style")e.style=tl([e.style,i.style]);else if(Zo(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Hn(t,e,n,i=null){kn(t,e,7,[n,i])}const Ov=bg();let Uv=0;function Fv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Ov,s={uid:Uv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cg(i,r),emitsOptions:Fg(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bv.bind(null,s),t.ce&&t.ce(s),s}let Ut=null;const bs=()=>Ut||tn;let Fo,Kc;{const t=Om(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Fo=e("__VUE_INSTANCE_SETTERS__",n=>Ut=n),Kc=e("__VUE_SSR_SETTERS__",n=>fl=n)}const Oa=t=>{const e=Ut;return Fo(t),t.scope.on(),()=>{t.scope.off(),Fo(e)}},cd=()=>{Ut&&Ut.scope.off(),Fo(null)};function Hg(t){return t.vnode.shapeFlag&4}let fl=!1;function kv(t,e=!1,n=!1){e&&Kc(e);const{props:i,children:r}=t.vnode,s=Hg(t);cv(t,i,s,e),hv(t,r,n);const o=s?Bv(t,e):void 0;return e&&Kc(!1),o}function Bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tv);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Hv(t):null,s=Oa(t);er();const o=Ia(i,t,0,[t.props,r]);if(tr(),s(),Pm(o)){if(ra(t)||gg(t),o.then(cd,cd),e)return o.then(a=>{ud(t,a,e)}).catch(a=>{al(a,t,0)});t.asyncDep=o}else ud(t,o,e)}else Gg(t,e)}function ud(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:mt(e)&&(t.setupState=ig(e)),Gg(t,n)}let fd;function Gg(t,e,n){const i=t.type;if(!t.render){if(!e&&fd&&!i.render){const r=i.template||ef(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:s,delimiters:a},o),l);i.render=fd(r,c)}}t.render=i.render||Dn}{const r=Oa(t);er();try{nv(t)}finally{tr(),r()}}}const zv={get(t,e){return Wt(t,"get",""),t[e]}};function Hv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zv),slots:t.slots,emit:t.emit,expose:e}}function dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ig(L0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sa)return sa[n](t)},has(e,n){return n in e||n in sa}})):t.proxy}function Gv(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function Vv(t){return We(t)&&"__vccOpts"in t}const it=(t,e)=>D0(t,e,fl);function Us(t,e,n){const i=arguments.length;return i===2?mt(e)&&!He(e)?$c(e)?vt(t,null,[e]):vt(t,e):vt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$c(n)&&(n=[n]),vt(t,e,n))}const Wv="3.5.3";/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zc;const dd=typeof window<"u"&&window.trustedTypes;if(dd)try{Zc=dd.createPolicy("vue",{createHTML:t=>t})}catch{}const Vg=Zc?t=>Zc.createHTML(t):t=>t,Xv="http://www.w3.org/2000/svg",jv="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,hd=li&&li.createElement("template"),Yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?li.createElementNS(Xv,t):e==="mathml"?li.createElementNS(jv,t):n?li.createElement(t,{is:n}):li.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>li.createTextNode(t),createComment:t=>li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{hd.innerHTML=Vg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=hd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mi="transition",Vs="animation",ya=Symbol("_vtc"),Wg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$v=Rt({},fg,Wg),qv=t=>(t.displayName="Transition",t.props=$v,t),Xg=qv((t,{slots:e})=>Us(W0,Kv(t),e)),cr=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},pd=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function Kv(t){const e={};for(const U in t)U in Wg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,E=Zv(r),x=E&&E[0],g=E&&E[1],{onBeforeEnter:h,onEnter:v,onEnterCancelled:m,onLeave:_,onLeaveCancelled:b,onBeforeAppear:T=h,onAppear:M=v,onAppearCancelled:N=m}=e,y=(U,j,F)=>{ur(U,j?u:a),ur(U,j?c:o),F&&F()},R=(U,j)=>{U._isLeaving=!1,ur(U,f),ur(U,p),ur(U,d),j&&j()},V=U=>(j,F)=>{const Y=U?M:v,J=()=>y(j,U,F);cr(Y,[j,J]),md(()=>{ur(j,U?l:s),Ti(j,U?u:a),pd(Y)||gd(j,i,x,J)})};return Rt(e,{onBeforeEnter(U){cr(h,[U]),Ti(U,s),Ti(U,o)},onBeforeAppear(U){cr(T,[U]),Ti(U,l),Ti(U,c)},onEnter:V(!1),onAppear:V(!0),onLeave(U,j){U._isLeaving=!0;const F=()=>R(U,j);Ti(U,f),Ti(U,d),ex(),md(()=>{U._isLeaving&&(ur(U,f),Ti(U,p),pd(_)||gd(U,i,g,F))}),cr(_,[U,F])},onEnterCancelled(U){y(U,!1),cr(m,[U])},onAppearCancelled(U){y(U,!0),cr(N,[U])},onLeaveCancelled(U){R(U),cr(b,[U])}})}function Zv(t){if(t==null)return null;if(mt(t))return[Vl(t.enter),Vl(t.leave)];{const e=Vl(t);return[e,e]}}function Vl(t){return t0(t)}function Ti(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ya]||(t[ya]=new Set)).add(e)}function ur(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ya];n&&(n.delete(e),n.size||(t[ya]=void 0))}function md(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Jv=0;function gd(t,e,n,i){const r=t._endId=++Jv,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Qv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function Qv(t,e){const n=window.getComputedStyle(t),i=E=>(n[E]||"").split(", "),r=i(`${Mi}Delay`),s=i(`${Mi}Duration`),o=_d(r,s),a=i(`${Vs}Delay`),l=i(`${Vs}Duration`),c=_d(a,l);let u=null,f=0,d=0;e===Mi?o>0&&(u=Mi,f=o,d=s.length):e===Vs?c>0&&(u=Vs,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Mi:Vs:null,d=u?u===Mi?s.length:l.length:0);const p=u===Mi&&/\b(transform|all)(,|$)/.test(i(`${Mi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function _d(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>vd(n)+vd(t[i])))}function vd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ex(){return document.body.offsetHeight}function tx(t,e,n){const i=t[ya];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ko=Symbol("_vod"),jg=Symbol("_vsh"),nx={beforeMount(t,{value:e},{transition:n}){t[ko]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ws(t,!0),i.enter(t)):i.leave(t,()=>{Ws(t,!1)}):Ws(t,e))},beforeUnmount(t,{value:e}){Ws(t,e)}};function Ws(t,e){t.style.display=e?t[ko]:"none",t[jg]=!e}const ix=Symbol(""),rx=/(^|;)\s*display\s*:/;function sx(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ro(i,a,"")}else for(const o in e)n[o]==null&&Ro(i,o,"");for(const o in n)o==="display"&&(s=!0),Ro(i,o,n[o])}else if(r){if(e!==n){const o=i[ix];o&&(n+=";"+o),i.cssText=n,s=rx.test(n)}}else e&&t.removeAttribute("style");ko in t&&(t[ko]=s?i.display:"",t[jg]&&(i.display="none"))}const xd=/\s*!important$/;function Ro(t,e,n){if(He(n))n.forEach(i=>Ro(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ax(t,e);xd.test(n)?t.setProperty(Br(i),n.replace(xd,""),"important"):t[i]=n}}const Ed=["Webkit","Moz","ms"],Wl={};function ax(t,e){const n=Wl[e];if(n)return n;let i=Fn(e);if(i!=="filter"&&i in t)return Wl[e]=i;i=el(i);for(let r=0;r<Ed.length;r++){const s=Ed[r]+i;if(s in t)return Wl[e]=s}return e}const yd="http://www.w3.org/1999/xlink";function Sd(t,e,n,i,r,s=o0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yd,e.slice(6,e.length)):t.setAttributeNS(yd,e,n):n==null||s&&!Um(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Qi(n)?String(n):n)}function ox(t,e,n,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Um(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function lx(t,e,n,i){t.addEventListener(e,n,i)}function cx(t,e,n,i){t.removeEventListener(e,n,i)}const bd=Symbol("_vei");function ux(t,e,n,i,r=null){const s=t[bd]||(t[bd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=fx(e);if(i){const c=s[e]=px(i,r);lx(t,a,c,l)}else o&&(cx(t,a,o,l),s[e]=void 0)}}const Md=/(?:Once|Passive|Capture)$/;function fx(t){let e;if(Md.test(t)){e={};let i;for(;i=t.match(Md);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Br(t.slice(2)),e]}let Xl=0;const dx=Promise.resolve(),hx=()=>Xl||(dx.then(()=>Xl=0),Xl=Date.now());function px(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;kn(mx(i,n.value),e,5,[i])};return n.value=t,n.attached=hx(),n}function mx(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Td=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?tx(t,i,o):e==="style"?sx(t,n,i):Zo(e)?Uu(e)||ux(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_x(t,e,i,o))?(ox(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sd(t,e,i,o,s,e!=="value")):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Sd(t,e,i,o))};function _x(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Td(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Td(e)&&Et(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Et(n)))}const vx=Rt({patchProp:gx},Yv);let Ad;function xx(){return Ad||(Ad=mv(vx))}const rf=(...t)=>{const e=xx().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=yx(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Ex(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ex(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yx(t){return Et(t)?document.querySelector(t):t}const Yg="/assets/logo-c08a4f81.webp";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function Sx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const st=Object.assign;function jl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Bn(r)?r.map(t):t(r)}return n}const oa=()=>{},Bn=Array.isArray,$g=/#/g,bx=/&/g,Mx=/\//g,Tx=/=/g,Ax=/\?/g,qg=/\+/g,wx=/%5B/g,Cx=/%5D/g,Kg=/%5E/g,Rx=/%60/g,Zg=/%7B/g,Lx=/%7C/g,Jg=/%7D/g,Px=/%20/g;function sf(t){return encodeURI(""+t).replace(Lx,"|").replace(wx,"[").replace(Cx,"]")}function Ix(t){return sf(t).replace(Zg,"{").replace(Jg,"}").replace(Kg,"^")}function Jc(t){return sf(t).replace(qg,"%2B").replace(Px,"+").replace($g,"%23").replace(bx,"%26").replace(Rx,"`").replace(Zg,"{").replace(Jg,"}").replace(Kg,"^")}function Nx(t){return Jc(t).replace(Tx,"%3D")}function Dx(t){return sf(t).replace($g,"%23").replace(Ax,"%3F")}function Ox(t){return t==null?"":Dx(t).replace(Mx,"%2F")}function Sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ux=/\/$/,Fx=t=>t.replace(Ux,"");function Yl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Hx(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Sa(o)}}function kx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ms(e.matched[i],n.matched[r])&&Qg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zx(t[n],e[n]))return!1;return!0}function zx(t,e){return Bn(t)?Cd(t,e):Bn(e)?Cd(e,t):t===e}function Cd(t,e){return Bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Hx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ba;(function(t){t.pop="pop",t.push="push"})(ba||(ba={}));var la;(function(t){t.back="back",t.forward="forward",t.unknown=""})(la||(la={}));function Gx(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fx(t)}const Vx=/^[^#]+#/;function Wx(t,e){return t.replace(Vx,"#")+e}function Xx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const hl=()=>({left:window.scrollX,top:window.scrollY});function jx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Xx(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Rd(t,e){return(history.state?history.state.position-e:-1)+t}const Qc=new Map;function Yx(t,e){Qc.set(t,e)}function $x(t){const e=Qc.get(t);return Qc.delete(t),e}let qx=()=>location.protocol+"//"+location.host;function e_(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),wd(l,"")}return wd(n,t)+i+r}function Kx(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=e_(t,location),E=n.value,x=e.value;let g=0;if(d){if(n.value=p,e.value=d,o&&o===E){o=null;return}g=x?d.position-x.position:0}else i(p);r.forEach(h=>{h(n.value,E,{delta:g,type:ba.pop,direction:g?g>0?la.forward:la.back:la.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const E=r.indexOf(d);E>-1&&r.splice(E,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(st({},d.state,{scroll:hl()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Ld(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?hl():null}}function Zx(t){const{history:e,location:n}=window,i={value:e_(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:qx()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=st({},e.state,Ld(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:hl()});s(u.current,u,!0);const f=st({},Ld(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Jx(t){t=Gx(t);const e=Zx(t),n=Kx(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=st({location:"",base:t,go:i,createHref:Wx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Qx(t){return typeof t=="string"||t&&typeof t=="object"}function t_(t){return typeof t=="string"||typeof t=="symbol"}const n_=Symbol("");var Pd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pd||(Pd={}));function Ts(t,e){return st(new Error,{type:t,[n_]:!0},e)}function Qn(t,e){return t instanceof Error&&n_ in t&&(e==null||!!(t.type&e))}const Id="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},tE=/[.+*?^${}()[\]/\\]/g;function nE(t,e){const n=st({},eE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(tE,"\\$&"),p+=40;else if(d.type===1){const{value:E,repeatable:x,optional:g,regexp:h}=d;s.push({name:E,repeatable:x,optional:g});const v=h||Id;if(v!==Id){p+=10;try{new RegExp(`(${v})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${E}" (${v}): `+_.message)}}let m=x?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(m=g&&c.length<2?`(?:/${m})`:"/"+m),g&&(m+="?"),r+=m,p+=20,g&&(p+=-8),x&&(p+=-20),v===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",E=s[d-1];f[E.name]=p&&E.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:E,repeatable:x,optional:g}=p,h=E in c?c[E]:"";if(Bn(h)&&!x)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const v=Bn(h)?h.join("/"):h;if(!v)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function iE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function i_(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=iE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Nd(i))return 1;if(Nd(r))return-1}return r.length-i.length}function Nd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function aE(t){if(!t)return[[]];if(t==="/")return[[rE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:sE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function oE(t,e,n){const i=nE(aE(t.path),n),r=st(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lE(t,e){const n=[],i=new Map;e=Ud({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const E=!p,x=cE(f);x.aliasOf=p&&p.record;const g=Ud(e,f),h=[x];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of _)h.push(st({},x,{components:p?p.record.components:x.components,path:b,aliasOf:p?p.record:x}))}let v,m;for(const _ of h){const{path:b}=_;if(d&&b[0]!=="/"){const T=d.record.path,M=T[T.length-1]==="/"?"":"/";_.path=d.record.path+(b&&M+b)}if(v=oE(_,d,g),p?p.alias.push(v):(m=m||v,m!==v&&m.alias.push(v),E&&f.name&&!Od(v)&&o(f.name)),r_(v)&&l(v),x.children){const T=x.children;for(let M=0;M<T.length;M++)s(T[M],v,p&&p.children[M])}p=p||v}return m?()=>{o(m)}:oa}function o(f){if(t_(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=dE(f,n);n.splice(d,0,f),f.record.name&&!Od(f)&&i.set(f.record.name,f)}function c(f,d){let p,E={},x,g;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Ts(1,{location:f});g=p.record.name,E=st(Dd(d.params,p.keys.filter(m=>!m.optional).concat(p.parent?p.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),f.params&&Dd(f.params,p.keys.map(m=>m.name))),x=p.stringify(E)}else if(f.path!=null)x=f.path,p=n.find(m=>m.re.test(x)),p&&(E=p.parse(x),g=p.record.name);else{if(p=d.name?i.get(d.name):n.find(m=>m.re.test(d.path)),!p)throw Ts(1,{location:f,currentLocation:d});g=p.record.name,E=st({},d.params,f.params),x=p.stringify(E)}const h=[];let v=p;for(;v;)h.unshift(v.record),v=v.parent;return{name:g,path:x,params:E,matched:h,meta:fE(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Dd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function cE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Od(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fE(t){return t.reduce((e,n)=>st(e,n.meta),{})}function Ud(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function dE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;i_(t,e[s])<0?i=s:n=s+1}const r=hE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function hE(t){let e=t;for(;e=e.parent;)if(r_(e)&&i_(t,e)===0)return e}function r_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(qg," "),o=s.indexOf("="),a=Sa(o<0?s:s.slice(0,o)),l=o<0?null:Sa(s.slice(o+1));if(a in e){let c=e[a];Bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fd(t){let e="";for(let n in t){const i=t[n];if(n=Nx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(i)?i.map(s=>s&&Jc(s)):[i&&Jc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function mE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const gE=Symbol(""),kd=Symbol(""),pl=Symbol(""),af=Symbol(""),eu=Symbol("");function Xs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ki(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ts(4,{from:n,to:e})):d instanceof Error?l(d):Qx(d)?l(Ts(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function $l(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(_E(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ki(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Sx(u)?u.default:u;o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&ki(p,n,i,o,a,r)()}))}}return s}function _E(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bd(t){const e=Tn(pl),n=Tn(af),i=it(()=>{const l=gs(t.to);return e.resolve(l)}),r=it(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ms.bind(null,u));if(d>-1)return d;const p=zd(l[c-2]);return c>1&&zd(u)===p&&f[f.length-1].path!==p?f.findIndex(Ms.bind(null,l[c-2])):d}),s=it(()=>r.value>-1&&EE(n.params,i.value.params)),o=it(()=>r.value>-1&&r.value===n.matched.length-1&&Qg(n.params,i.value.params));function a(l={}){return xE(l)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(oa):Promise.resolve()}return{route:i,href:it(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const vE=Os({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bd,setup(t,{slots:e}){const n=sl(Bd(t)),{options:i}=Tn(pl),r=it(()=>({[Hd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Hd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Us("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),s_=vE;function xE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Bn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function zd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hd=(t,e,n)=>t??e??n,yE=Os({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Tn(eu),r=it(()=>t.route||i.value),s=Tn(kd,0),o=it(()=>{let c=gs(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=it(()=>r.value.matched[o.value]);Ao(kd,it(()=>o.value+1)),Ao(gE,a),Ao(eu,r);const l=xr();return _i(()=>[l.value,a.value,t.name],([c,u,f],[d,p,E])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ms(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Gd(n.default,{Component:d,route:c});const p=f.props[u],E=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Us(d,st({},E,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Gd(n.default,{Component:g,route:c})||g}}});function Gd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SE=yE;function bE(t){const e=lE(t.routes,t),n=t.parseQuery||pE,i=t.stringifyQuery||Fd,r=t.history,s=Xs(),o=Xs(),a=Xs(),l=$u(Ai);let c=Ai;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jl.bind(null,q=>""+q),f=jl.bind(null,Ox),d=jl.bind(null,Sa);function p(q,ce){let ue,xe;return t_(q)?(ue=e.getRecordMatcher(q),xe=ce):xe=q,e.addRoute(xe,ue)}function E(q){const ce=e.getRecordMatcher(q);ce&&e.removeRoute(ce)}function x(){return e.getRoutes().map(q=>q.record)}function g(q){return!!e.getRecordMatcher(q)}function h(q,ce){if(ce=st({},ce||l.value),typeof q=="string"){const A=Yl(n,q,ce.path),z=e.resolve({path:A.path},ce),ee=r.createHref(A.fullPath);return st(A,z,{params:d(z.params),hash:Sa(A.hash),redirectedFrom:void 0,href:ee})}let ue;if(q.path!=null)ue=st({},q,{path:Yl(n,q.path,ce.path).path});else{const A=st({},q.params);for(const z in A)A[z]==null&&delete A[z];ue=st({},q,{params:f(A)}),ce.params=f(ce.params)}const xe=e.resolve(ue,ce),Me=q.hash||"";xe.params=u(d(xe.params));const X=kx(i,st({},q,{hash:Ix(Me),path:xe.path})),I=r.createHref(X);return st({fullPath:X,hash:Me,query:i===Fd?mE(q.query):q.query||{}},xe,{redirectedFrom:void 0,href:I})}function v(q){return typeof q=="string"?Yl(n,q,l.value.path):st({},q)}function m(q,ce){if(c!==q)return Ts(8,{from:ce,to:q})}function _(q){return M(q)}function b(q){return _(st(v(q),{replace:!0}))}function T(q){const ce=q.matched[q.matched.length-1];if(ce&&ce.redirect){const{redirect:ue}=ce;let xe=typeof ue=="function"?ue(q):ue;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=v(xe):{path:xe},xe.params={}),st({query:q.query,hash:q.hash,params:xe.path!=null?{}:q.params},xe)}}function M(q,ce){const ue=c=h(q),xe=l.value,Me=q.state,X=q.force,I=q.replace===!0,A=T(ue);if(A)return M(st(v(A),{state:typeof A=="object"?st({},Me,A.state):Me,force:X,replace:I}),ce||ue);const z=ue;z.redirectedFrom=ce;let ee;return!X&&Bx(i,xe,ue)&&(ee=Ts(16,{to:z,from:xe}),G(xe,xe,!0,!1)),(ee?Promise.resolve(ee):R(z,xe)).catch(te=>Qn(te)?Qn(te,2)?te:fe(te):se(te,z,xe)).then(te=>{if(te){if(Qn(te,2))return M(st({replace:I},v(te.to),{state:typeof te.to=="object"?st({},Me,te.to.state):Me,force:X}),ce||z)}else te=U(z,xe,!0,I,Me);return V(z,xe,te),te})}function N(q,ce){const ue=m(q,ce);return ue?Promise.reject(ue):Promise.resolve()}function y(q){const ce=Se.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(q):q()}function R(q,ce){let ue;const[xe,Me,X]=ME(q,ce);ue=$l(xe.reverse(),"beforeRouteLeave",q,ce);for(const A of xe)A.leaveGuards.forEach(z=>{ue.push(ki(z,q,ce))});const I=N.bind(null,q,ce);return ue.push(I),Ce(ue).then(()=>{ue=[];for(const A of s.list())ue.push(ki(A,q,ce));return ue.push(I),Ce(ue)}).then(()=>{ue=$l(Me,"beforeRouteUpdate",q,ce);for(const A of Me)A.updateGuards.forEach(z=>{ue.push(ki(z,q,ce))});return ue.push(I),Ce(ue)}).then(()=>{ue=[];for(const A of X)if(A.beforeEnter)if(Bn(A.beforeEnter))for(const z of A.beforeEnter)ue.push(ki(z,q,ce));else ue.push(ki(A.beforeEnter,q,ce));return ue.push(I),Ce(ue)}).then(()=>(q.matched.forEach(A=>A.enterCallbacks={}),ue=$l(X,"beforeRouteEnter",q,ce,y),ue.push(I),Ce(ue))).then(()=>{ue=[];for(const A of o.list())ue.push(ki(A,q,ce));return ue.push(I),Ce(ue)}).catch(A=>Qn(A,8)?A:Promise.reject(A))}function V(q,ce,ue){a.list().forEach(xe=>y(()=>xe(q,ce,ue)))}function U(q,ce,ue,xe,Me){const X=m(q,ce);if(X)return X;const I=ce===Ai,A=os?history.state:{};ue&&(xe||I?r.replace(q.fullPath,st({scroll:I&&A&&A.scroll},Me)):r.push(q.fullPath,Me)),l.value=q,G(q,ce,ue,I),fe()}let j;function F(){j||(j=r.listen((q,ce,ue)=>{if(!Te.listening)return;const xe=h(q),Me=T(xe);if(Me){M(st(Me,{replace:!0}),xe).catch(oa);return}c=xe;const X=l.value;os&&Yx(Rd(X.fullPath,ue.delta),hl()),R(xe,X).catch(I=>Qn(I,12)?I:Qn(I,2)?(M(I.to,xe).then(A=>{Qn(A,20)&&!ue.delta&&ue.type===ba.pop&&r.go(-1,!1)}).catch(oa),Promise.reject()):(ue.delta&&r.go(-ue.delta,!1),se(I,xe,X))).then(I=>{I=I||U(xe,X,!1),I&&(ue.delta&&!Qn(I,8)?r.go(-ue.delta,!1):ue.type===ba.pop&&Qn(I,20)&&r.go(-1,!1)),V(xe,X,I)}).catch(oa)}))}let Y=Xs(),J=Xs(),K;function se(q,ce,ue){fe(q);const xe=J.list();return xe.length?xe.forEach(Me=>Me(q,ce,ue)):console.error(q),Promise.reject(q)}function ae(){return K&&l.value!==Ai?Promise.resolve():new Promise((q,ce)=>{Y.add([q,ce])})}function fe(q){return K||(K=!q,F(),Y.list().forEach(([ce,ue])=>q?ue(q):ce()),Y.reset()),q}function G(q,ce,ue,xe){const{scrollBehavior:Me}=t;if(!os||!Me)return Promise.resolve();const X=!ue&&$x(Rd(q.fullPath,0))||(xe||!ue)&&history.state&&history.state.scroll||null;return sg().then(()=>Me(q,ce,X)).then(I=>I&&jx(I)).catch(I=>se(I,q,ce))}const Q=q=>r.go(q);let ge;const Se=new Set,Te={currentRoute:l,listening:!0,addRoute:p,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:x,resolve:h,options:t,push:_,replace:b,go:Q,back:()=>Q(-1),forward:()=>Q(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ae,install(q){const ce=this;q.component("RouterLink",s_),q.component("RouterView",SE),q.config.globalProperties.$router=ce,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),os&&!ge&&l.value===Ai&&(ge=!0,_(r.location).catch(Me=>{}));const ue={};for(const Me in Ai)Object.defineProperty(ue,Me,{get:()=>l.value[Me],enumerable:!0});q.provide(pl,ce),q.provide(af,eg(ue)),q.provide(eu,l);const xe=q.unmount;Se.add(q),q.unmount=function(){Se.delete(q),Se.size<1&&(c=Ai,j&&j(),j=null,l.value=Ai,ge=!1,K=!1),xe()}}};function Ce(q){return q.reduce((ce,ue)=>ce.then(()=>y(ue)),Promise.resolve())}return Te}function ME(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ms(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ms(c,l))||r.push(l))}return[n,i,r]}function TE(){return Tn(pl)}function AE(t){return Tn(af)}const Ua=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},wE={name:"spNav",methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},CE={id:"main"},RE={class:"menu-circle-social"};function LE(t,e,n,i,r,s){const o=Qu("router-link");return Ss(),Da("div",CE,[At("nav",RE,[e[2]||(e[2]=Nv('<input type="checkbox" href="#" class="menu-circle-open" name="menu-circle-open" id="menu-open" data-v-822ef59b><label class="menu-circle-open-button" for="menu-open" aria-label="メニューを開く" data-v-822ef59b><svg class="mp icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 1440 1439.999935" preserveAspectRatio="xMidYMid meet" version="1.0" data-v-822ef59b><path fill="#fff" d="M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-822ef59b></path><path fill="#dddddd" d="M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-822ef59b></path><path fill="#ffffff" d="M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-822ef59b></path></svg></label>',2)),vt(o,{to:"/about",class:"menu-circle-item","aria-label":"山下マナトについて"},{default:hi(()=>e[0]||(e[0]=[At("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 35",fill:"#ffffff"},[At("path",{d:"M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z",fill:"#ffffff"})],-1)])),_:1}),vt(o,{to:"/works",class:"menu-circle-item","aria-label":"クリエイティブ作品を一部を紹介"},{default:hi(()=>e[1]||(e[1]=[At("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"#ffffff"},[At("path",{d:"M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"})],-1)])),_:1})])])}const PE=Ua(wE,[["render",LE],["__scopeId","data-v-822ef59b"]]);const IE={id:"main"},NE={href:"https://manapuraza.com","aria-current":"page"},DE={class:"app glass"},OE={__name:"App",setup(t){const e=AE(),n=TE(),i=async()=>{await n.isReady()};_i(e,()=>{console.log("current route: ",e.name),e.name==="home"?(document.querySelector(".app").style.top="20vh",document.querySelector(".app").style.opacity="0",document.querySelector(".app").style.pointerEvents="none"):(document.querySelector(".app").style.top="0",document.querySelector(".app").style.opacity="1",document.querySelector(".app").style.pointerEvents="all")}),cl(()=>{i()});const r=it(()=>e.path),s=it(()=>r.value==="/"?"route-home":"route-other"),o=it(()=>r.value==="/"?{opacity:"1",transition:"all .4s ease-in-out"}:{opacity:"0",filter:"blur(2rem)",transition:"all .4s ease-in-out"});return(a,l)=>{const c=Qu("router-view");return Ss(),Da("div",IE,[At("a",NE,[At("img",{src:Yg,loading:"lazy",alt:"ホームページに戻る",draggable:"false",id:"center-logo",class:nl(s.value),style:tl(o.value)},null,6)]),At("div",DE,[vt(c,null,{default:hi(({Component:u})=>[vt(Xg,{name:"slide",mode:"out-in"},{default:hi(()=>[(Ss(),Lv(ev(u)))]),_:2},1024)]),_:1})]),vt(PE,{id:"sp-nav"})])}}},UE=Ua(OE,[["__scopeId","data-v-14f5346e"]]),FE="modulepreload",kE=function(t){return"/"+t},Vd={},ql=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=kE(s),s in Vd)return;Vd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":FE,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};const BE={};function zE(t,e){return Ss(),Da("div")}const HE=Ua(BE,[["render",zE],["__scopeId","data-v-4111d351"]]);const of=bE({history:Jx(),routes:[{path:"/",name:"home",component:HE},{path:"/about",name:"about",component:()=>ql(()=>import("./AboutView-463f1088.js"),["assets/AboutView-463f1088.js","assets/AboutView-9cd6fde3.css"])},{path:"/works",name:"works",component:()=>ql(()=>import("./WorksView-d0e61a19.js"),["assets/WorksView-d0e61a19.js","assets/WorksView-3ef9ae7e.css"]),meta:{style:{top:"0"}}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>ql(()=>import("./NotFound-d6b4f856.js"),[])}]});const GE={name:"Navbar",components:{RouterLink:s_},data(){return{currentPath:this.$route.path}},watch:{$route(t,e){this.currentPath=t.path}},methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},VE={class:"navbar"},WE={class:"logo"},XE={src:Yg,alt:"manapuraza.com",class:"logo"},jE={class:"default-menu"},YE={id:"lang-switch"},$E={class:"lang"},qE={class:"toggle-switch"};function KE(t,e,n,i,r,s){const o=Qu("RouterLink");return Ss(),Da("div",VE,[At("div",WE,[vt(o,{to:"/","aria-current":"page","aria-label":"ホームページに戻る"},{default:hi(()=>[vt(Xg,{name:"slide",mode:"out-in","aria-current":"page"},{default:hi(()=>[z0(At("img",XE,null,512),[[nx,r.currentPath!=="/"]])]),_:1})]),_:1})]),At("nav",jE,[vt(o,{to:"/about",class:"rlink"},{default:hi(()=>e[1]||(e[1]=[qc("About")])),_:1}),vt(o,{to:"/works",class:"rlink"},{default:hi(()=>e[2]||(e[2]=[qc("Works")])),_:1})]),At("div",YE,[At("span",$E,km(t.$t("navbar.toggle")),1),At("div",qE,[At("input",{class:"toggle-input",id:"toggle",type:"checkbox",onClick:e[0]||(e[0]=(...a)=>s.toggleLanguage&&s.toggleLanguage(...a))}),e[3]||(e[3]=At("label",{class:"toggle-label",for:"toggle"},null,-1))])])])}const ZE=Ua(GE,[["render",KE],["__scopeId","data-v-f0be7568"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="158",Gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JE=0,Wd=1,QE=2,a_=1,ey=2,oi=3,$i=0,rn=1,ui=2,Vi=0,xs=1,Xd=2,jd=3,Yd=4,ty=5,yr=100,ny=101,iy=102,$d=103,qd=104,ry=200,sy=201,ay=202,oy=203,tu=204,nu=205,ly=206,cy=207,uy=208,fy=209,dy=210,hy=211,py=212,my=213,gy=214,_y=0,vy=1,xy=2,Bo=3,Ey=4,yy=5,Sy=6,by=7,cf=0,My=1,Ty=2,Wi=0,Ay=1,wy=2,Cy=3,Ry=4,Ly=5,o_=300,As=301,ws=302,iu=303,ru=304,ml=306,su=1e3,Pn=1001,au=1002,Zt=1003,Kd=1004,Kl=1005,yn=1006,Py=1007,Ma=1008,Xi=1009,Iy=1010,Ny=1011,uf=1012,l_=1013,zi=1014,Hi=1015,Ta=1016,c_=1017,u_=1018,wr=1020,Dy=1021,In=1023,Oy=1024,Uy=1025,Cr=1026,Cs=1027,Fy=1028,f_=1029,ky=1030,d_=1031,h_=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,Zd=35840,Jd=35841,Qd=35842,eh=35843,By=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,ah=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,tc=36492,_h=36494,vh=36495,zy=36283,xh=36284,Eh=36285,yh=36286,p_=3e3,Rr=3001,Hy=3200,Gy=3201,m_=0,Vy=1,Mn="",Ot="srgb",vi="srgb-linear",ff="display-p3",gl="display-p3-linear",zo="linear",dt="srgb",Ho="rec709",Go="p3",Wr=7680,Sh=519,Wy=512,Xy=513,jy=514,Yy=515,$y=516,qy=517,Ky=518,Zy=519,bh=35044,Za=35048,Mh="300 es",ou=1035,pi=2e3,Vo=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const ca=Math.PI/180,Aa=180/Math.PI;function Fs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function df(t,e){return(t%e+e)%e}function Jy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Qy(t,e,n){return t!==e?(n-t)/(e-t):0}function ua(t,e,n){return(1-n)*t+n*e}function eS(t,e,n,i){return ua(t,e,1-Math.exp(-n*i))}function tS(t,e=1){return e-Math.abs(df(t,e*2)-e)}function nS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function iS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function rS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function sS(t,e){return t+Math.random()*(e-t)}function aS(t){return t*(.5-Math.random())}function oS(t){t!==void 0&&(Th=t);let e=Th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lS(t){return t*ca}function cS(t){return t*Aa}function lu(t){return(t&t-1)===0&&t!==0}function uS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Wo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),E=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*E,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*E,a*c);break;case"ZYZ":t.set(l*E,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const dS={DEG2RAD:ca,RAD2DEG:Aa,generateUUID:Fs,clamp:Gt,euclideanModulo:df,mapLinear:Jy,inverseLerp:Qy,lerp:ua,damp:eS,pingpong:tS,smoothstep:nS,smootherstep:iS,randInt:rS,randFloat:sS,randFloatSpread:aS,seededRandom:oS,degToRad:lS,radToDeg:cS,isPowerOfTwo:lu,ceilPowerOfTwo:uS,floorPowerOfTwo:Wo,setQuaternionFromProperEuler:fS,normalize:$t,denormalize:ls};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],E=i[8],x=r[0],g=r[3],h=r[6],v=r[1],m=r[4],_=r[7],b=r[2],T=r[5],M=r[8];return s[0]=o*x+a*v+l*b,s[3]=o*g+a*m+l*T,s[6]=o*h+a*_+l*M,s[1]=c*x+u*v+f*b,s[4]=c*g+u*m+f*T,s[7]=c*h+u*_+f*M,s[2]=d*x+p*v+E*b,s[5]=d*g+p*m+E*T,s[8]=d*h+p*_+E*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,E=n*f+i*d+r*p;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/E;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nc.makeScale(e,n)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new Ke;function g_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){const t=wa("canvas");return t.style.display="block",t}const Ah={};function fa(t){t in Ah||(Ah[t]=!0,console.warn(t))}const wh=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[vi]:{transfer:zo,primaries:Ho,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:dt,primaries:Ho,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gl]:{transfer:zo,primaries:Go,toReference:t=>t.applyMatrix3(Ch),fromReference:t=>t.applyMatrix3(wh)},[ff]:{transfer:dt,primaries:Go,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ch),fromReference:t=>t.applyMatrix3(wh).convertLinearToSRGB()}},pS=new Set([vi,gl]),ot={enabled:!0,_workingColorSpace:vi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ja[e].toReference,r=Ja[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ja[t].primaries},getTransfer:function(t){return t===Mn?zo:Ja[t].transfer}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class __{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=wa("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mS=0;class v_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rc(r[o].image)):s.push(rc(r[o]))}else s=rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?__.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gS=0;class sn extends zr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Pn,r=Pn,s=yn,o=Ma,a=In,l=Xi,c=sn.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Fs(),this.name="",this.source=new v_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Rr?Ot:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case su:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case su:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Rr:p_}set encoding(e){fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?Ot:Mn}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=o_;sn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],E=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(E-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(E+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,_=(p+1)/2,b=(h+1)/2,T=(u+d)/4,M=(f+x)/4,N=(E+g)/4;return m>_&&m>b?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=T/i,s=M/i):_>b?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=N/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=M/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-E)*(g-E)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-E)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _S extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?Ot:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new v_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends _S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class x_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],E=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=E,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==E){let g=1-a;const h=l*d+c*p+u*E+f*x,v=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const b=Math.sqrt(m),T=Math.atan2(b,h*v);g=Math.sin(g*T)/b,a=Math.sin(a*T)/b}const _=a*v;if(l=l*g+d*_,c=c*g+p*_,u=u*g+E*_,f=f*g+x*_,g===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],E=s[o+3];return e[n]=a*E+u*f+l*p-c*d,e[n+1]=l*E+u*d+c*f-a*p,e[n+2]=c*E+u*p+a*d-l*f,e[n+3]=u*E-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),E=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*E,this._y=c*p*f-d*u*E,this._z=c*u*E+d*p*f,this._w=c*u*f-d*p*E;break;case"YXZ":this._x=d*u*f+c*p*E,this._y=c*p*f-d*u*E,this._z=c*u*E-d*p*f,this._w=c*u*f+d*p*E;break;case"ZXY":this._x=d*u*f-c*p*E,this._y=c*p*f+d*u*E,this._z=c*u*E+d*p*f,this._w=c*u*f-d*p*E;break;case"ZYX":this._x=d*u*f-c*p*E,this._y=c*p*f+d*u*E,this._z=c*u*E-d*p*f,this._w=c*u*f+d*p*E;break;case"YZX":this._x=d*u*f+c*p*E,this._y=c*p*f+d*u*E,this._z=c*u*E-d*p*f,this._w=c*u*f-d*p*E;break;case"XZY":this._x=d*u*f-c*p*E,this._y=c*p*f-d*u*E,this._z=c*u*E+d*p*f,this._w=c*u*f+d*p*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new $,Rh=new Or;class Fa{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),eo.subVectors(this.max,js),jr.subVectors(e.a,js),Yr.subVectors(e.b,js),$r.subVectors(e.c,js),wi.subVectors(Yr,jr),Ci.subVectors($r,Yr),fr.subVectors(jr,$r);let n=[0,-wi.z,wi.y,0,-Ci.z,Ci.y,0,-fr.z,fr.y,wi.z,0,-wi.x,Ci.z,0,-Ci.x,fr.z,0,-fr.x,-wi.y,wi.x,0,-Ci.y,Ci.x,0,-fr.y,fr.x,0];return!ac(n,jr,Yr,$r,eo)||(n=[1,0,0,0,1,0,0,0,1],!ac(n,jr,Yr,$r,eo))?!1:(to.crossVectors(wi,Ci),n=[to.x,to.y,to.z],ac(n,jr,Yr,$r,eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new $,new $,new $,new $,new $,new $,new $,new $],An=new $,Qa=new Fa,jr=new $,Yr=new $,$r=new $,wi=new $,Ci=new $,fr=new $,js=new $,eo=new $,to=new $,dr=new $;function ac(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xS=new Fa,Ys=new $,oc=new $;class _l{constructor(e=new $,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(oc)),this.expandByPoint(Ys.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new $,lc=new $,no=new $,Ri=new $,cc=new $,io=new $,uc=new $;class hf{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lc.copy(e).add(n).multiplyScalar(.5),no.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(lc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(no),a=Ri.dot(this.direction),l=-Ri.dot(no),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,d,p,E;if(u>0)if(f=o*l-a,d=o*a-l,E=s*u,f>=0)if(d>=-E)if(d<=E){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-E?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=E?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(lc).addScaledVector(no,d),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){cc.subVectors(n,e),io.subVectors(i,e),uc.crossVectors(cc,io);let o=this.direction.dot(uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(io.crossVectors(Ri,io));if(l<0)return null;const c=a*this.direction.dot(cc.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,E,x,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,E,x,g)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,E,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=E,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,E=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+E*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=E+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,E=c*u,x=c*f;n[0]=d+x*a,n[4]=E*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-E,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,E=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=E+p*a,n[1]=p+E*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,E=a*u,x=a*f;n[0]=l*u,n[4]=E*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-E,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,E=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=E*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+E,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,E=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-E,n[2]=E*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,yS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Li.crossVectors(i,ln),Li.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Li.crossVectors(i,ln)),Li.normalize(),ro.crossVectors(ln,Li),r[0]=Li.x,r[4]=ro.x,r[8]=ln.x,r[1]=Li.y,r[5]=ro.y,r[9]=ln.y,r[2]=Li.z,r[6]=ro.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],E=i[2],x=i[6],g=i[10],h=i[14],v=i[3],m=i[7],_=i[11],b=i[15],T=r[0],M=r[4],N=r[8],y=r[12],R=r[1],V=r[5],U=r[9],j=r[13],F=r[2],Y=r[6],J=r[10],K=r[14],se=r[3],ae=r[7],fe=r[11],G=r[15];return s[0]=o*T+a*R+l*F+c*se,s[4]=o*M+a*V+l*Y+c*ae,s[8]=o*N+a*U+l*J+c*fe,s[12]=o*y+a*j+l*K+c*G,s[1]=u*T+f*R+d*F+p*se,s[5]=u*M+f*V+d*Y+p*ae,s[9]=u*N+f*U+d*J+p*fe,s[13]=u*y+f*j+d*K+p*G,s[2]=E*T+x*R+g*F+h*se,s[6]=E*M+x*V+g*Y+h*ae,s[10]=E*N+x*U+g*J+h*fe,s[14]=E*y+x*j+g*K+h*G,s[3]=v*T+m*R+_*F+b*se,s[7]=v*M+m*V+_*Y+b*ae,s[11]=v*N+m*U+_*J+b*fe,s[15]=v*y+m*j+_*K+b*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],E=e[3],x=e[7],g=e[11],h=e[15];return E*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],E=e[12],x=e[13],g=e[14],h=e[15],v=f*g*c-x*d*c+x*l*p-a*g*p-f*l*h+a*d*h,m=E*d*c-u*g*c-E*l*p+o*g*p+u*l*h-o*d*h,_=u*x*c-E*f*c+E*a*p-o*x*p-u*a*h+o*f*h,b=E*f*l-u*x*l-E*a*d+o*x*d+u*a*g-o*f*g,T=n*v+i*m+r*_+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=v*M,e[1]=(x*d*s-f*g*s-x*r*p+i*g*p+f*r*h-i*d*h)*M,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*M,e[4]=m*M,e[5]=(u*g*s-E*d*s+E*r*p-n*g*p-u*r*h+n*d*h)*M,e[6]=(E*l*s-o*g*s-E*r*c+n*g*c+o*r*h-n*l*h)*M,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*M,e[8]=_*M,e[9]=(E*f*s-u*x*s-E*i*p+n*x*p+u*i*h-n*f*h)*M,e[10]=(o*x*s-E*a*s+E*i*c-n*x*c-o*i*h+n*a*h)*M,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*M,e[12]=b*M,e[13]=(u*x*r-E*f*r+E*i*d-n*x*d-u*i*g+n*f*g)*M,e[14]=(E*a*r-o*x*r-E*i*l+n*x*l+o*i*g-n*a*g)*M,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,E=s*f,x=o*u,g=o*f,h=a*f,v=l*c,m=l*u,_=l*f,b=i.x,T=i.y,M=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+_)*b,r[2]=(E-m)*b,r[3]=0,r[4]=(p-_)*T,r[5]=(1-(d+h))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(E+m)*M,r[9]=(g-v)*M,r[10]=(1-(d+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,n.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,E;if(a===pi)p=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Vo)p=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let E,x;if(a===pi)E=(o+s)*f,x=-2*f;else if(a===Vo)E=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new $,wn=new Tt,ES=new $(0,0,0),yS=new $(1,1,1),Li=new $,ro=new $,ln=new $,Lh=new Tt,Ph=new Or;class vl{constructor(e=0,n=0,i=0,r=vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vl.DEFAULT_ORDER="XYZ";let pf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},SS=0;const Ih=new $,Kr=new Or,ni=new Tt,so=new $,$s=new $,bS=new $,MS=new Or,Nh=new $(1,0,0),Dh=new $(0,1,0),Oh=new $(0,0,1),TS={type:"added"},AS={type:"removed"};class Vt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new $,n=new vl,i=new Or,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,n){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?so.copy(e):so.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt($s,so,this.up):ni.lookAt(so,$s,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(ni),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(TS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(AS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),E=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),E.length>0&&(i.nodes=E)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new $(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new $,ii=new $,fc=new $,ri=new $,Zr=new $,Jr=new $,Uh=new $,dc=new $,hc=new $,pc=new $;let ao=!1;class Ln{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ii.subVectors(i,n),fc.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(ii),l=Cn.dot(fc),c=ii.dot(ii),u=ii.dot(fc),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-a*u)*d,E=(o*u-a*l)*d;return s.set(1-p-E,E,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,n,i,r,s,o,a,l){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri),l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ii.subVectors(e,n),Cn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Cn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Jr.subVectors(s,i),dc.subVectors(e,i);const l=Zr.dot(dc),c=Jr.dot(dc);if(l<=0&&c<=0)return n.copy(i);hc.subVectors(e,r);const u=Zr.dot(hc),f=Jr.dot(hc);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Zr,o);pc.subVectors(e,s);const p=Zr.dot(pc),E=Jr.dot(pc);if(E>=0&&p<=E)return n.copy(s);const x=p*c-l*E;if(x<=0&&c>=0&&E<=0)return a=c/(c-E),n.copy(i).addScaledVector(Jr,a);const g=u*E-p*f;if(g<=0&&f-u>=0&&p-E>=0)return Uh.subVectors(s,r),a=(f-u)/(f-u+(p-E)),n.copy(r).addScaledVector(Uh,a);const h=1/(g+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(Zr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function mc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=df(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=mc(o,s,e+1/3),this.g=mc(o,s,e),this.b=mc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=ic(e.r),this.g=ic(e.g),this.b=ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ot.fromWorkingColorSpace(zt.copy(this),e),Math.round(Gt(zt.r*255,0,255))*65536+Math.round(Gt(zt.g*255,0,255))*256+Math.round(Gt(zt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ot){ot.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(oo);const i=ua(Pi.h,oo.h,n),r=ua(Pi.s,oo.s,n),s=ua(Pi.l,oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Je;Je.NAMES=E_;let wS=0;class ka extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=xs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tu&&(i.blendSrc=this.blendSrc),this.blendDst!==nu&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y_ extends ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new $,lo=new Xe;class nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bh,this.updateRange={offset:0,count:-1},this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lo.fromBufferAttribute(this,n),lo.applyMatrix3(e),this.setXY(n,lo.x,lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class S_ extends nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b_ extends nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Lr extends nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let CS=0;const xn=new Tt,gc=new Vt,Qr=new $,cn=new Fa,qs=new Fa,Nt=new $;class nr extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?b_:S_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(cn.min,qs.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,qs.max),cn.expandByPoint(Nt)):(cn.expandByPoint(qs.min),cn.expandByPoint(qs.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),Nt.add(Qr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new $,u[R]=new $;const f=new $,d=new $,p=new $,E=new Xe,x=new Xe,g=new Xe,h=new $,v=new $;function m(R,V,U){f.fromArray(r,R*3),d.fromArray(r,V*3),p.fromArray(r,U*3),E.fromArray(o,R*2),x.fromArray(o,V*2),g.fromArray(o,U*2),d.sub(f),p.sub(f),x.sub(E),g.sub(E);const j=1/(x.x*g.y-g.x*x.y);isFinite(j)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(j),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(j),c[R].add(h),c[V].add(h),c[U].add(h),u[R].add(v),u[V].add(v),u[U].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let R=0,V=_.length;R<V;++R){const U=_[R],j=U.start,F=U.count;for(let Y=j,J=j+F;Y<J;Y+=3)m(i[Y+0],i[Y+1],i[Y+2])}const b=new $,T=new $,M=new $,N=new $;function y(R){M.fromArray(s,R*3),N.copy(M);const V=c[R];b.copy(V),b.sub(M.multiplyScalar(M.dot(V))).normalize(),T.crossVectors(N,V);const j=T.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=j}for(let R=0,V=_.length;R<V;++R){const U=_[R],j=U.start,F=U.count;for(let Y=j,J=j+F;Y<J;Y+=3)y(i[Y+0]),y(i[Y+1]),y(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const E=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,E),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,E),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(E,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,E=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[E++]=c[p++]}return new nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new Tt,hr=new hf,co=new _l,kh=new $,es=new $,ts=new $,ns=new $,_c=new $,uo=new $,fo=new Xe,ho=new Xe,po=new Xe,Bh=new $,zh=new $,Hh=new $,mo=new $,go=new $;class mi extends Vt{constructor(e=new nr,n=new y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(_c.fromBufferAttribute(f,e),o?uo.addScaledVector(_c,u):uo.addScaledVector(_c.sub(n),u))}n.add(uo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(co.containsPoint(hr.origin)===!1&&(hr.intersectSphere(co,kh)===null||hr.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Fh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let E=0,x=d.length;E<x;E++){const g=d[E],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,b=m;_<b;_+=3){const T=a.getX(_),M=a.getX(_+1),N=a.getX(_+2);r=_o(this,h,e,i,c,u,f,T,M,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const E=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=E,h=x;g<h;g+=3){const v=a.getX(g),m=a.getX(g+1),_=a.getX(g+2);r=_o(this,o,e,i,c,u,f,v,m,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let E=0,x=d.length;E<x;E++){const g=d[E],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,b=m;_<b;_+=3){const T=_,M=_+1,N=_+2;r=_o(this,h,e,i,c,u,f,T,M,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const E=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=E,h=x;g<h;g+=3){const v=g,m=g+1,_=g+2;r=_o(this,o,e,i,c,u,f,v,m,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function RS(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;go.copy(a),go.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(go);return c<n.near||c>n.far?null:{distance:c,point:go.clone(),object:t}}function _o(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const u=RS(t,e,n,i,es,ts,ns,mo);if(u){r&&(fo.fromBufferAttribute(r,a),ho.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),u.uv=Ln.getInterpolation(mo,es,ts,ns,fo,ho,po,new Xe)),s&&(fo.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,l),po.fromBufferAttribute(s,c),u.uv1=Ln.getInterpolation(mo,es,ts,ns,fo,ho,po,new Xe),u.uv2=u.uv1),o&&(Bh.fromBufferAttribute(o,a),zh.fromBufferAttribute(o,l),Hh.fromBufferAttribute(o,c),u.normal=Ln.getInterpolation(mo,es,ts,ns,Bh,zh,Hh,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};Ln.getNormal(es,ts,ns,f.normal),u.face=f}return u}class Ba extends nr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;E("z","y","x",-1,-1,i,n,e,o,s,0),E("z","y","x",1,-1,i,n,-e,o,s,1),E("x","z","y",1,1,e,i,n,r,o,2),E("x","z","y",1,-1,e,i,-n,r,o,3),E("x","y","z",1,-1,e,n,i,r,s,4),E("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lr(c,3)),this.setAttribute("normal",new Lr(u,3)),this.setAttribute("uv",new Lr(f,2));function E(x,g,h,v,m,_,b,T,M,N,y){const R=_/M,V=b/N,U=_/2,j=b/2,F=T/2,Y=M+1,J=N+1;let K=0,se=0;const ae=new $;for(let fe=0;fe<J;fe++){const G=fe*V-j;for(let Q=0;Q<Y;Q++){const ge=Q*R-U;ae[x]=ge*v,ae[g]=G*m,ae[h]=F,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[h]=T>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(Q/M),f.push(1-fe/N),K+=1}}for(let fe=0;fe<N;fe++)for(let G=0;G<M;G++){const Q=d+G+Y*fe,ge=d+G+Y*(fe+1),Se=d+(G+1)+Y*(fe+1),Te=d+(G+1)+Y*fe;l.push(Q,ge,Te),l.push(ge,Se,Te),se+=6}a.addGroup(p,se,y),p+=se,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function LS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function M_(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const PS={clone:Rs,merge:qt};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class T_ extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends T_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class DS extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new dn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new dn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new dn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new dn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new dn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class A_ extends sn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rr?Ot:Mn),this.texture=new A_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ba(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new mi(r,s),a=n.minFilter;return n.minFilter===Ma&&(n.minFilter=yn),new DS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vc=new $,US=new $,FS=new Ke;class Bi{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vc.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FS.getNormalMatrix(e),r=this.coplanarPoint(vc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new _l,vo=new $;class mf{constructor(e=new Bi,n=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],E=r[9],x=r[10],g=r[11],h=r[12],v=r[13],m=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,g-p,_-h).normalize(),i[1].setComponents(l+s,d+c,g+p,_+h).normalize(),i[2].setComponents(l+o,d+u,g+E,_+v).normalize(),i[3].setComponents(l-o,d-u,g-E,_-v).normalize(),i[4].setComponents(l-a,d-f,g-x,_-m).normalize(),n===pi)i[5].setComponents(l+a,d+f,g+x,_+m).normalize();else if(n===Vo)i[5].setComponents(a,f,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vo.x=r.normal.x>0?e.max.x:e.min.x,vo.y=r.normal.y>0?e.max.y:e.min.y,vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let E;if(f instanceof Float32Array)E=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=t.SHORT;else if(f instanceof Uint32Array)E=t.UNSIGNED_INT;else if(f instanceof Int32Array)E=t.INT;else if(f instanceof Int8Array)E=t.BYTE;else if(f instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class gf extends nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],E=[],x=[],g=[];for(let h=0;h<u;h++){const v=h*d-o;for(let m=0;m<c;m++){const _=m*f-s;E.push(_,-v,0),x.push(0,0,1),g.push(m/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const m=v+c*h,_=v+c*(h+1),b=v+1+c*(h+1),T=v+1+c*h;p.push(m,_,T),p.push(_,b,T)}this.setIndex(p),this.setAttribute("position",new Lr(E,3)),this.setAttribute("normal",new Lr(x,3)),this.setAttribute("uv",new Lr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.width,e.height,e.widthSegments,e.heightSegments)}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`
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
}`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
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
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
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
#endif`,Ub=`struct PhysicalMaterial {
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
}`,Fb=`
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
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
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
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
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
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
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
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
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
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
}`,VM=`#if DEPTH_PACKING == 3200
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
}`,WM=`#define DISTANCE
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
}`,XM=`#define DISTANCE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`uniform float scale;
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
}`,qM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 diffuse;
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
}`,JM=`#define LAMBERT
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
}`,QM=`#define LAMBERT
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
}`,eT=`#define MATCAP
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
}`,tT=`#define MATCAP
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
}`,nT=`#define NORMAL
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
}`,iT=`#define NORMAL
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
}`,rT=`#define PHONG
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
}`,sT=`#define PHONG
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
}`,aT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,lT=`#define TOON
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
}`,cT=`#define TOON
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
}`,uT=`uniform float size;
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 color;
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
}`,pT=`uniform float rotation;
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
}`,mT=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:BS,alphahash_pars_fragment:zS,alphamap_fragment:HS,alphamap_pars_fragment:GS,alphatest_fragment:VS,alphatest_pars_fragment:WS,aomap_fragment:XS,aomap_pars_fragment:jS,begin_vertex:YS,beginnormal_vertex:$S,bsdfs:qS,iridescence_fragment:KS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:eb,clipping_planes_vertex:tb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:rb,color_vertex:sb,common:ab,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:db,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:Lb,envmap_vertex:xb,fog_vertex:Eb,fog_pars_vertex:yb,fog_fragment:Sb,fog_pars_fragment:bb,gradientmap_pars_fragment:Mb,lightmap_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Rb,lights_toon_fragment:Pb,lights_toon_pars_fragment:Ib,lights_phong_fragment:Nb,lights_phong_pars_fragment:Db,lights_physical_fragment:Ob,lights_physical_pars_fragment:Ub,lights_fragment_begin:Fb,lights_fragment_maps:kb,lights_fragment_end:Bb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:Wb,map_pars_fragment:Xb,map_particle_fragment:jb,map_particle_pars_fragment:Yb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:qb,morphcolor_vertex:Kb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Qb,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:rM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:uM,packing:fM,premultiplied_alpha_fragment:dM,project_vertex:hM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:gM,roughnessmap_pars_fragment:_M,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:xM,shadowmap_vertex:EM,shadowmask_pars_fragment:yM,skinbase_vertex:SM,skinning_pars_vertex:bM,skinning_vertex:MM,skinnormal_vertex:TM,specularmap_fragment:AM,specularmap_pars_fragment:wM,tonemapping_fragment:CM,tonemapping_pars_fragment:RM,transmission_fragment:LM,transmission_pars_fragment:PM,uv_pars_fragment:IM,uv_pars_vertex:NM,uv_vertex:DM,worldpos_vertex:OM,background_vert:UM,background_frag:FM,backgroundCube_vert:kM,backgroundCube_frag:BM,cube_vert:zM,cube_frag:HM,depth_vert:GM,depth_frag:VM,distanceRGBA_vert:WM,distanceRGBA_frag:XM,equirect_vert:jM,equirect_frag:YM,linedashed_vert:$M,linedashed_frag:qM,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:JM,meshlambert_frag:QM,meshmatcap_vert:eT,meshmatcap_frag:tT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:rT,meshphong_frag:sT,meshphysical_vert:aT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:dT,shadow_frag:hT,sprite_vert:pT,sprite_frag:mT},we={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Xn={basic:{uniforms:qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:qt([we.points,we.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:qt([we.common,we.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:qt([we.sprite,we.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:qt([we.common,we.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:qt([we.lights,we.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Xn.physical={uniforms:qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const xo={r:0,b:0,g:0};function gT(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function E(g,h){let v=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),v=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ml)?(u===void 0&&(u=new mi(new Ba(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Rs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ot.getTransfer(m.colorSpace)!==dt,(f!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new mi(new gf(2,2),new Ur({name:"BackgroundMaterial",uniforms:Rs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ot.getTransfer(m.colorSpace)!==dt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,h){g.getRGB(xo,M_(t)),i.buffers.color.setClear(xo.r,xo.g,xo.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:E}}function _T(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function f(F,Y,J,K,se){let ae=!1;if(o){const fe=x(K,J,Y);c!==fe&&(c=fe,p(c.object)),ae=h(F,K,J,se),ae&&v(F,K,J,se)}else{const fe=Y.wireframe===!0;(c.geometry!==K.id||c.program!==J.id||c.wireframe!==fe)&&(c.geometry=K.id,c.program=J.id,c.wireframe=fe,ae=!0)}se!==null&&n.update(se,t.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,N(F,Y,J,K),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(se).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function E(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function x(F,Y,J){const K=J.wireframe===!0;let se=a[F.id];se===void 0&&(se={},a[F.id]=se);let ae=se[Y.id];ae===void 0&&(ae={},se[Y.id]=ae);let fe=ae[K];return fe===void 0&&(fe=g(d()),ae[K]=fe),fe}function g(F){const Y=[],J=[],K=[];for(let se=0;se<r;se++)Y[se]=0,J[se]=0,K[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:K,object:F,attributes:{},index:null}}function h(F,Y,J,K){const se=c.attributes,ae=Y.attributes;let fe=0;const G=J.getAttributes();for(const Q in G)if(G[Q].location>=0){const Se=se[Q];let Te=ae[Q];if(Te===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(Te=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(Te=F.instanceColor)),Se===void 0||Se.attribute!==Te||Te&&Se.data!==Te.data)return!0;fe++}return c.attributesNum!==fe||c.index!==K}function v(F,Y,J,K){const se={},ae=Y.attributes;let fe=0;const G=J.getAttributes();for(const Q in G)if(G[Q].location>=0){let Se=ae[Q];Se===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor));const Te={};Te.attribute=Se,Se&&Se.data&&(Te.data=Se.data),se[Q]=Te,fe++}c.attributes=se,c.attributesNum=fe,c.index=K}function m(){const F=c.newAttributes;for(let Y=0,J=F.length;Y<J;Y++)F[Y]=0}function _(F){b(F,0)}function b(F,Y){const J=c.newAttributes,K=c.enabledAttributes,se=c.attributeDivisors;J[F]=1,K[F]===0&&(t.enableVertexAttribArray(F),K[F]=1),se[F]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),se[F]=Y)}function T(){const F=c.newAttributes,Y=c.enabledAttributes;for(let J=0,K=Y.length;J<K;J++)Y[J]!==F[J]&&(t.disableVertexAttribArray(J),Y[J]=0)}function M(F,Y,J,K,se,ae,fe){fe===!0?t.vertexAttribIPointer(F,Y,J,se,ae):t.vertexAttribPointer(F,Y,J,K,se,ae)}function N(F,Y,J,K){if(i.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const se=K.attributes,ae=J.getAttributes(),fe=Y.defaultAttributeValues;for(const G in ae){const Q=ae[G];if(Q.location>=0){let ge=se[G];if(ge===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor)),ge!==void 0){const Se=ge.normalized,Te=ge.itemSize,Ce=n.get(ge);if(Ce===void 0)continue;const q=Ce.buffer,ce=Ce.type,ue=Ce.bytesPerElement,xe=i.isWebGL2===!0&&(ce===t.INT||ce===t.UNSIGNED_INT||ge.gpuType===l_);if(ge.isInterleavedBufferAttribute){const Me=ge.data,X=Me.stride,I=ge.offset;if(Me.isInstancedInterleavedBuffer){for(let A=0;A<Q.locationSize;A++)b(Q.location+A,Me.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let A=0;A<Q.locationSize;A++)_(Q.location+A);t.bindBuffer(t.ARRAY_BUFFER,q);for(let A=0;A<Q.locationSize;A++)M(Q.location+A,Te/Q.locationSize,ce,Se,X*ue,(I+Te/Q.locationSize*A)*ue,xe)}else{if(ge.isInstancedBufferAttribute){for(let Me=0;Me<Q.locationSize;Me++)b(Q.location+Me,ge.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Me=0;Me<Q.locationSize;Me++)_(Q.location+Me);t.bindBuffer(t.ARRAY_BUFFER,q);for(let Me=0;Me<Q.locationSize;Me++)M(Q.location+Me,Te/Q.locationSize,ce,Se,Te*ue,Te/Q.locationSize*Me*ue,xe)}}else if(fe!==void 0){const Se=fe[G];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(Q.location,Se);break;case 3:t.vertexAttrib3fv(Q.location,Se);break;case 4:t.vertexAttrib4fv(Q.location,Se);break;default:t.vertexAttrib1fv(Q.location,Se)}}}}T()}function y(){U();for(const F in a){const Y=a[F];for(const J in Y){const K=Y[J];for(const se in K)E(K[se].object),delete K[se];delete Y[J]}delete a[F]}}function R(F){if(a[F.id]===void 0)return;const Y=a[F.id];for(const J in Y){const K=Y[J];for(const se in K)E(K[se].object),delete K[se];delete Y[J]}delete a[F.id]}function V(F){for(const Y in a){const J=a[Y];if(J[F.id]===void 0)continue;const K=J[F.id];for(const se in K)E(K[se].object),delete K[se];delete J[F.id]}}function U(){j(),u=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:R,releaseStatesOfProgram:V,initAttributes:m,enableAttribute:_,disableUnusedAttributes:T}}function vT(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function xT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,_=o||e.has("OES_texture_float"),b=m&&_,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:T}}function ET(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Bi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const E=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||E===null||E.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,m=v*4;let _=h.clippingState||null;l.value=_,_=u(E,d,m,p);for(let b=0;b!==m;++b)_[b]=n[b];h.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,E){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,E!==!0||g===null){const h=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,_=p;m!==x;++m,_+=4)o.copy(f[m]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function yT(t){let e=new WeakMap;function n(o,a){return a===iu?o.mapping=As:a===ru&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===iu||a===ru)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class C_ extends T_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,Gh=[.125,.215,.35,.446,.526,.582],Sr=20,xc=new C_,Vh=new Je;let Ec=null,yc=0,Sc=0;const vr=(1+Math.sqrt(5))/2,ss=1/vr,Wh=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,vr,ss),new $(0,vr,-ss),new $(ss,0,vr),new $(-ss,0,vr),new $(vr,ss,0),new $(-vr,ss,0)];class Xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ec=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,yc,Sc),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ta,format:In,colorSpace:vi,depthBuffer:!1},r=jh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ST(s)),this._blurMaterial=bT(s,e,n)}return r}_compileMaterial(e){const n=new mi(this._lodPlanes[0],e);this._renderer.compile(n,xc)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vh),u.toneMapping=Wi,u.autoClear=!1;const p=new y_({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),E=new mi(new Ba,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Vh),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const m=this._cubeSize;Eo(r,v*m,h>2?m:0,m,m),u.setRenderTarget(r),x&&u.render(E,a),u.render(e,a)}E.geometry.dispose(),E.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wh[(r-1)%Wh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new mi(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),x=s/E,g=isFinite(s)?1+Math.floor(u*x):Sr;g>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);const h=[];let v=0;for(let M=0;M<Sr;++M){const N=M/x,y=Math.exp(-N*N/2);h.push(y),M===0?v+=y:M<g&&(v+=2*y)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=E,d.mipInt.value=m-i;const _=this._sizeLods[r],b=3*_*(r>m-us?r-m+us:0),T=4*(this._cubeSize-_);Eo(n,b,T,3*_,2*_),l.setRenderTarget(n),l.render(f,xc)}}function ST(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+Gh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-us?l=Gh[o-t+us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,E=6,x=3,g=2,h=1,v=new Float32Array(x*E*p),m=new Float32Array(g*E*p),_=new Float32Array(h*E*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,N=T>2?0:-1,y=[M,N,0,M+2/3,N,0,M+2/3,N+1,0,M,N,0,M+2/3,N+1,0,M,N+1,0];v.set(y,x*E*T),m.set(d,g*E*T);const R=[T,T,T,T,T,T];_.set(R,h*E*T)}const b=new nr;b.setAttribute("position",new nn(v,x)),b.setAttribute("uv",new nn(m,g)),b.setAttribute("faceIndex",new nn(_,h)),e.push(b),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jh(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bT(t,e,n){const i=new Float32Array(Sr),r=new $(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Yh(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function $h(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function MT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===iu||l===ru,u=l===As||l===ws;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Xh(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Xh(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function TT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const E in d.attributes)e.remove(d.attributes[E]);for(const E in d.morphAttributes){const x=d.morphAttributes[E];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const E in d)e.update(d[E],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const E in p){const x=p[E];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,E=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let m=0,_=v.length;m<_;m+=3){const b=v[m+0],T=v[m+1],M=v[m+2];d.push(b,T,T,M,M,b)}}else if(E!==void 0){const v=E.array;x=E.version;for(let m=0,_=v.length/3-1;m<_;m+=3){const b=m+0,T=m+1,M=m+2;d.push(b,T,T,M,M,b)}}else return;const g=new(g_(d)?b_:S_)(d,1);g.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wT(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function f(d,p,E){if(E===0)return;let x,g;if(r)x=t,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](s,p,a,d*l,E),n.update(p,s,E)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function CT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RT(t,e){return t[0]-e[0]}function LT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function PT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,E=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==E){let F=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let N=0;v===!0&&(N=1),m===!0&&(N=2),_===!0&&(N=3);let y=u.attributes.position.count*N,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*R*4*E),U=new x_(V,y,R,E);U.type=Hi,U.needsUpdate=!0;const j=N*4;for(let Y=0;Y<E;Y++){const J=b[Y],K=T[Y],se=M[Y],ae=y*R*4*Y;for(let fe=0;fe<J.count;fe++){const G=fe*j;v===!0&&(o.fromBufferAttribute(J,fe),V[ae+G+0]=o.x,V[ae+G+1]=o.y,V[ae+G+2]=o.z,V[ae+G+3]=0),m===!0&&(o.fromBufferAttribute(K,fe),V[ae+G+4]=o.x,V[ae+G+5]=o.y,V[ae+G+6]=o.z,V[ae+G+7]=0),_===!0&&(o.fromBufferAttribute(se,fe),V[ae+G+8]=o.x,V[ae+G+9]=o.y,V[ae+G+10]=o.z,V[ae+G+11]=se.itemSize===4?o.w:1)}}x={count:E,texture:U,size:new Xe(y,R)},s.set(u,x),u.addEventListener("dispose",F)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const h=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let E=i[u.id];if(E===void 0||E.length!==p){E=[];for(let m=0;m<p;m++)E[m]=[m,0];i[u.id]=E}for(let m=0;m<p;m++){const _=E[m];_[0]=m,_[1]=d[m]}E.sort(LT);for(let m=0;m<8;m++)m<p&&E[m][1]?(a[m][0]=E[m][0],a[m][1]=E[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(RT);const x=u.morphAttributes.position,g=u.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const _=a[m],b=_[0],T=_[1];b!==Number.MAX_SAFE_INTEGER&&T?(x&&u.getAttribute("morphTarget"+m)!==x[b]&&u.setAttribute("morphTarget"+m,x[b]),g&&u.getAttribute("morphNormal"+m)!==g[b]&&u.setAttribute("morphNormal"+m,g[b]),r[m]=T,h+=T):(x&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),g&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}const v=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function IT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const R_=new sn,L_=new x_,P_=new vS,I_=new A_,qh=[],Kh=[],Zh=new Float32Array(16),Jh=new Float32Array(9),Qh=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qh[r];if(s===void 0&&(s=new Float32Array(r),qh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xl(t,e){let n=Kh[e];n===void 0&&(n=new Int32Array(e),Kh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function FT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;Qh.set(i),t.uniformMatrix2fv(this.addr,!1,Qh),Pt(n,i)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;Jh.set(i),t.uniformMatrix3fv(this.addr,!1,Jh),Pt(n,i)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;Zh.set(i),t.uniformMatrix4fv(this.addr,!1,Zh),Pt(n,i)}}function zT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function WT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||R_,r)}function qT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P_,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||I_,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||L_,r)}function JT(t){switch(t){case 5126:return NT;case 35664:return DT;case 35665:return OT;case 35666:return UT;case 35674:return FT;case 35675:return kT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return WT;case 36294:return XT;case 36295:return jT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return ZT}}function QT(t,e){t.uniform1fv(this.addr,e)}function eA(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function tA(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function nA(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function iA(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rA(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sA(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aA(t,e){t.uniform1iv(this.addr,e)}function oA(t,e){t.uniform2iv(this.addr,e)}function lA(t,e){t.uniform3iv(this.addr,e)}function cA(t,e){t.uniform4iv(this.addr,e)}function uA(t,e){t.uniform1uiv(this.addr,e)}function fA(t,e){t.uniform2uiv(this.addr,e)}function dA(t,e){t.uniform3uiv(this.addr,e)}function hA(t,e){t.uniform4uiv(this.addr,e)}function pA(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||R_,s[o])}function mA(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||P_,s[o])}function gA(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||I_,s[o])}function _A(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||L_,s[o])}function vA(t){switch(t){case 5126:return QT;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return aA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return _A}}class xA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=JT(n.type)}}class EA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=vA(n.type)}}class yA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function ep(t,e){t.seq.push(e),t.map[e.id]=e}function SA(t,e,n){const i=t.name,r=i.length;for(bc.lastIndex=0;;){const s=bc.exec(i),o=bc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ep(n,c===void 0?new xA(a,t,e):new EA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new yA(a),ep(n,f)),n=f}}}class Lo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);SA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function tp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bA=37297;let MA=0;function TA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function AA(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Go&&n===Ho?i="LinearDisplayP3ToLinearSRGB":e===Ho&&n===Go&&(i="LinearSRGBToLinearDisplayP3"),t){case vi:case gl:return[i,"LinearTransferOETF"];case Ot:case ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function np(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+TA(t.getShaderSource(e),o)}else return r}function wA(t,e){const n=AA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function CA(t,e){let n;switch(e){case Ay:n="Linear";break;case wy:n="Reinhard";break;case Cy:n="OptimizedCineon";break;case Ry:n="ACESFilmic";break;case Ly:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function LA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qs(t){return t!==""}function ip(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(t){return t.replace(IA,DA)}const NA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DA(t,e){let n=$e[e];if(n===void 0){const i=NA.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cu(n)}const OA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(t){return t.replace(OA,UA)}function UA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ap(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ey?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function kA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function zA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cf:e="ENVMAP_BLENDING_MULTIPLY";break;case My:e="ENVMAP_BLENDING_MIX";break;case Ty:e="ENVMAP_BLENDING_ADD";break}return e}function HA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=FA(n),c=kA(n),u=BA(n),f=zA(n),d=HA(n),p=n.isWebGL2?"":RA(n),E=LA(s),x=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Qs).join(`
`),g.length>0&&(g+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Qs).join(`
`),h.length>0&&(h+=`
`)):(g=[ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),h=[p,ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?$e.tonemapping_pars_fragment:"",n.toneMapping!==Wi?CA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,wA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qs).join(`
`)),o=cu(o),o=ip(o,n),o=rp(o,n),a=cu(a),a=ip(a,n),a=rp(a,n),o=sp(o),a=sp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=v+g+o,_=v+h+a,b=tp(r,r.VERTEX_SHADER,m),T=tp(r,r.FRAGMENT_SHADER,_);r.attachShader(x,b),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function M(V){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),j=r.getShaderInfoLog(b).trim(),F=r.getShaderInfoLog(T).trim();let Y=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,T);else{const K=np(r,b,"vertex"),se=np(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+K+`
`+se)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(j===""||F==="")&&(J=!1);J&&(V.diagnostics={runnable:Y,programLog:U,vertexShader:{log:j,prefix:g},fragmentShader:{log:F,prefix:h}})}r.deleteShader(b),r.deleteShader(T),N=new Lo(r,x),y=PA(r,x)}let N;this.getUniforms=function(){return N===void 0&&M(this),N};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,bA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let VA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XA(e),n.set(e,i)),i}}class XA{constructor(e){this.id=VA++,this.code=e,this.usedTimes=0}}function jA(t,e,n,i,r,s,o){const a=new pf,l=new WA,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function g(y,R,V,U,j){const F=U.fog,Y=j.geometry,J=y.isMeshStandardMaterial?U.environment:null,K=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),se=K&&K.mapping===ml?K.image.height:null,ae=E[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=fe!==void 0?fe.length:0;let Q=0;Y.morphAttributes.position!==void 0&&(Q=1),Y.morphAttributes.normal!==void 0&&(Q=2),Y.morphAttributes.color!==void 0&&(Q=3);let ge,Se,Te,Ce;if(ae){const St=Xn[ae];ge=St.vertexShader,Se=St.fragmentShader}else ge=y.vertexShader,Se=y.fragmentShader,l.update(y),Te=l.getVertexShaderID(y),Ce=l.getFragmentShaderID(y);const q=t.getRenderTarget(),ce=j.isInstancedMesh===!0,ue=!!y.map,xe=!!y.matcap,Me=!!K,X=!!y.aoMap,I=!!y.lightMap,A=!!y.bumpMap,z=!!y.normalMap,ee=!!y.displacementMap,te=!!y.emissiveMap,ne=!!y.metalnessMap,he=!!y.roughnessMap,C=y.anisotropy>0,L=y.clearcoat>0,H=y.iridescence>0,w=y.sheen>0,S=y.transmission>0,O=C&&!!y.anisotropyMap,D=L&&!!y.clearcoatMap,B=L&&!!y.clearcoatNormalMap,ie=L&&!!y.clearcoatRoughnessMap,me=H&&!!y.iridescenceMap,_e=H&&!!y.iridescenceThicknessMap,Ee=w&&!!y.sheenColorMap,k=w&&!!y.sheenRoughnessMap,ve=!!y.specularMap,pe=!!y.specularColorMap,ke=!!y.specularIntensityMap,Le=S&&!!y.transmissionMap,Ne=S&&!!y.thicknessMap,Oe=!!y.gradientMap,Ie=!!y.alphaMap,Qe=y.alphaTest>0,W=!!y.alphaHash,Ae=!!y.extensions,ye=!!Y.attributes.uv1,de=!!Y.attributes.uv2,be=!!Y.attributes.uv3;let Fe=Wi;return y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Fe=t.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:Se,defines:y.defines,customVertexShaderID:Te,customFragmentShaderID:Ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:ce,instancingColor:ce&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:q===null?t.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:vi,map:ue,matcap:xe,envMap:Me,envMapMode:Me&&K.mapping,envMapCubeUVHeight:se,aoMap:X,lightMap:I,bumpMap:A,normalMap:z,displacementMap:d&&ee,emissiveMap:te,normalMapObjectSpace:z&&y.normalMapType===Vy,normalMapTangentSpace:z&&y.normalMapType===m_,metalnessMap:ne,roughnessMap:he,anisotropy:C,anisotropyMap:O,clearcoat:L,clearcoatMap:D,clearcoatNormalMap:B,clearcoatRoughnessMap:ie,iridescence:H,iridescenceMap:me,iridescenceThicknessMap:_e,sheen:w,sheenColorMap:Ee,sheenRoughnessMap:k,specularMap:ve,specularColorMap:pe,specularIntensityMap:ke,transmission:S,transmissionMap:Le,thicknessMap:Ne,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===xs,alphaMap:Ie,alphaTest:Qe,alphaHash:W,combine:y.combine,mapUv:ue&&x(y.map.channel),aoMapUv:X&&x(y.aoMap.channel),lightMapUv:I&&x(y.lightMap.channel),bumpMapUv:A&&x(y.bumpMap.channel),normalMapUv:z&&x(y.normalMap.channel),displacementMapUv:ee&&x(y.displacementMap.channel),emissiveMapUv:te&&x(y.emissiveMap.channel),metalnessMapUv:ne&&x(y.metalnessMap.channel),roughnessMapUv:he&&x(y.roughnessMap.channel),anisotropyMapUv:O&&x(y.anisotropyMap.channel),clearcoatMapUv:D&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:B&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:k&&x(y.sheenRoughnessMap.channel),specularMapUv:ve&&x(y.specularMap.channel),specularColorMapUv:pe&&x(y.specularColorMap.channel),specularIntensityMapUv:ke&&x(y.specularIntensityMap.channel),transmissionMapUv:Le&&x(y.transmissionMap.channel),thicknessMapUv:Ne&&x(y.thicknessMap.channel),alphaMapUv:Ie&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(z||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:de,vertexUv3s:be,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(ue||Ie),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ui,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Ae&&y.extensions.derivatives===!0,extensionFragDepth:Ae&&y.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)R.push(V),R.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(v(R,y),m(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function v(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function m(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function _(y){const R=E[y.type];let V;if(R){const U=Xn[R];V=PS.clone(U.uniforms)}else V=y.uniforms;return V}function b(y,R){let V;for(let U=0,j=c.length;U<j;U++){const F=c[U];if(F.cacheKey===R){V=F,++V.usedTimes;break}}return V===void 0&&(V=new GA(t,R,y,s),c.push(V)),V}function T(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),y.destroy()}}function M(y){l.remove(y)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:_,acquireProgram:b,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:N}}function YA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function $A(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function op(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,E,x,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:E,renderOrder:f.renderOrder,z:x,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=E,h.renderOrder=f.renderOrder,h.z=x,h.group=g),e++,h}function a(f,d,p,E,x,g){const h=o(f,d,p,E,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,E,x,g){const h=o(f,d,p,E,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||$A),i.length>1&&i.sort(d||op),r.length>1&&r.sort(d||op)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new lp,t.set(i,[o])):r>=s.length?(o=new lp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new Je};break;case"SpotLight":n={position:new $,direction:new $,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function ZA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JA=0;function QA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ew(t,e){const n=new KA,i=ZA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new $);const s=new $,o=new Tt,a=new Tt;function l(u,f){let d=0,p=0,E=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,g=0,h=0,v=0,m=0,_=0,b=0,T=0,M=0,N=0,y=0;u.sort(QA);const R=f===!0?Math.PI:1;for(let U=0,j=u.length;U<j;U++){const F=u[U],Y=F.color,J=F.intensity,K=F.distance,se=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=Y.r*J*R,p+=Y.g*J*R,E+=Y.b*J*R;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(F.sh.coefficients[ae],J);y++}else if(F.isDirectionalLight){const ae=n.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const fe=F.shadow,G=i.get(F);G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,r.directionalShadow[x]=G,r.directionalShadowMap[x]=se,r.directionalShadowMatrix[x]=F.shadow.matrix,_++}r.directional[x]=ae,x++}else if(F.isSpotLight){const ae=n.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(Y).multiplyScalar(J*R),ae.distance=K,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,r.spot[h]=ae;const fe=F.shadow;if(F.map&&(r.spotLightMap[M]=F.map,M++,fe.updateMatrices(F),F.castShadow&&N++),r.spotLightMatrix[h]=fe.matrix,F.castShadow){const G=i.get(F);G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,r.spotShadow[h]=G,r.spotShadowMap[h]=se,T++}h++}else if(F.isRectAreaLight){const ae=n.get(F);ae.color.copy(Y).multiplyScalar(J),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=ae,v++}else if(F.isPointLight){const ae=n.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity*R),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const fe=F.shadow,G=i.get(F);G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,G.shadowCameraNear=fe.camera.near,G.shadowCameraFar=fe.camera.far,r.pointShadow[g]=G,r.pointShadowMap[g]=se,r.pointShadowMatrix[g]=F.shadow.matrix,b++}r.point[g]=ae,g++}else if(F.isHemisphereLight){const ae=n.get(F);ae.skyColor.copy(F.color).multiplyScalar(J*R),ae.groundColor.copy(F.groundColor).multiplyScalar(J*R),r.hemi[m]=ae,m++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=E;const V=r.hash;(V.directionalLength!==x||V.pointLength!==g||V.spotLength!==h||V.rectAreaLength!==v||V.hemiLength!==m||V.numDirectionalShadows!==_||V.numPointShadows!==b||V.numSpotShadows!==T||V.numSpotMaps!==M||V.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+M-N,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=y,V.directionalLength=x,V.pointLength=g,V.spotLength=h,V.rectAreaLength=v,V.hemiLength=m,V.numDirectionalShadows=_,V.numPointShadows=b,V.numSpotShadows=T,V.numSpotMaps=M,V.numLightProbes=y,r.version=JA++)}function c(u,f){let d=0,p=0,E=0,x=0,g=0;const h=f.matrixWorldInverse;for(let v=0,m=u.length;v<m;v++){const _=u[v];if(_.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),d++}else if(_.isSpotLight){const b=r.spot[E];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),E++}else if(_.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(h),a.identity(),o.copy(_.matrixWorld),o.premultiply(h),a.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(h),p++}else if(_.isHemisphereLight){const b=r.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:r}}function cp(t,e){const n=new ew(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new cp(t,e),n.set(s,[l])):o>=a.length?(l=new cp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class nw extends ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iw extends ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
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
}`;function aw(t,e,n){let i=new mf;const r=new Xe,s=new Xe,o=new gt,a=new nw({depthPacking:Gy}),l=new iw,c={},u=n.maxTextureSize,f={[$i]:rn,[rn]:$i,[ui]:ui},d=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:rw,fragmentShader:sw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const E=new nr;E.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new mi(E,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let h=this.type;this.render=function(b,T,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const N=t.getRenderTarget(),y=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Vi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=h!==oi&&this.type===oi,j=h===oi&&this.type!==oi;for(let F=0,Y=b.length;F<Y;F++){const J=b[F],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const se=K.getFrameExtents();if(r.multiply(se),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,K.mapSize.y=s.y)),K.map===null||U===!0||j===!0){const fe=this.type!==oi?{minFilter:Zt,magFilter:Zt}:{};K.map!==null&&K.map.dispose(),K.map=new Dr(r.x,r.y,fe),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}t.setRenderTarget(K.map),t.clear();const ae=K.getViewportCount();for(let fe=0;fe<ae;fe++){const G=K.getViewport(fe);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),V.viewport(o),K.updateMatrices(J,fe),i=K.getFrustum(),_(T,M,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===oi&&v(K,M),K.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(N,y,R)};function v(b,T){const M=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Dr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,M,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,M,p,x,null)}function m(b,T,M,N){let y=null;const R=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)y=R;else if(y=M.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=y.uuid,U=T.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let F=j[U];F===void 0&&(F=y.clone(),j[U]=F),y=F}if(y.visible=T.visible,y.wireframe=T.wireframe,N===oi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,M.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=M}return y}function _(b,T,M,N,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===oi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const U=e.update(b),j=b.material;if(Array.isArray(j)){const F=U.groups;for(let Y=0,J=F.length;Y<J;Y++){const K=F[Y],se=j[K.materialIndex];if(se&&se.visible){const ae=m(b,se,N,y);t.renderBufferDirect(M,null,U,ae,b,K)}}}else if(j.visible){const F=m(b,j,N,y);t.renderBufferDirect(M,null,U,F,b,null)}}const V=b.children;for(let U=0,j=V.length;U<j;U++)_(V[U],T,M,N,y)}}function ow(t,e,n){const i=n.isWebGL2;function r(){let W=!1;const Ae=new gt;let ye=null;const de=new gt(0,0,0,0);return{setMask:function(be){ye!==be&&!W&&(t.colorMask(be,be,be,be),ye=be)},setLocked:function(be){W=be},setClear:function(be,Fe,et,St,_n){_n===!0&&(be*=St,Fe*=St,et*=St),Ae.set(be,Fe,et,St),de.equals(Ae)===!1&&(t.clearColor(be,Fe,et,St),de.copy(Ae))},reset:function(){W=!1,ye=null,de.set(-1,0,0,0)}}}function s(){let W=!1,Ae=null,ye=null,de=null;return{setTest:function(be){be?ue(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(be){Ae!==be&&!W&&(t.depthMask(be),Ae=be)},setFunc:function(be){if(ye!==be){switch(be){case _y:t.depthFunc(t.NEVER);break;case vy:t.depthFunc(t.ALWAYS);break;case xy:t.depthFunc(t.LESS);break;case Bo:t.depthFunc(t.LEQUAL);break;case Ey:t.depthFunc(t.EQUAL);break;case yy:t.depthFunc(t.GEQUAL);break;case Sy:t.depthFunc(t.GREATER);break;case by:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=be}},setLocked:function(be){W=be},setClear:function(be){de!==be&&(t.clearDepth(be),de=be)},reset:function(){W=!1,Ae=null,ye=null,de=null}}}function o(){let W=!1,Ae=null,ye=null,de=null,be=null,Fe=null,et=null,St=null,_n=null;return{setTest:function(ut){W||(ut?ue(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(ut){Ae!==ut&&!W&&(t.stencilMask(ut),Ae=ut)},setFunc:function(ut,Xt,zn){(ye!==ut||de!==Xt||be!==zn)&&(t.stencilFunc(ut,Xt,zn),ye=ut,de=Xt,be=zn)},setOp:function(ut,Xt,zn){(Fe!==ut||et!==Xt||St!==zn)&&(t.stencilOp(ut,Xt,zn),Fe=ut,et=Xt,St=zn)},setLocked:function(ut){W=ut},setClear:function(ut){_n!==ut&&(t.clearStencil(ut),_n=ut)},reset:function(){W=!1,Ae=null,ye=null,de=null,be=null,Fe=null,et=null,St=null,_n=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},E=new WeakMap,x=[],g=null,h=!1,v=null,m=null,_=null,b=null,T=null,M=null,N=null,y=new Je(0,0,0),R=0,V=!1,U=null,j=null,F=null,Y=null,J=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ae=0;const fe=t.getParameter(t.VERSION);fe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(fe)[1]),se=ae>=1):fe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),se=ae>=2);let G=null,Q={};const ge=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Te=new gt().fromArray(ge),Ce=new gt().fromArray(Se);function q(W,Ae,ye,de){const be=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(W,Fe),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ye;et++)i&&(W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ae,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Ae+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Fe}const ce={};ce[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(t.DEPTH_TEST),l.setFunc(Bo),ne(!1),he(Wd),ue(t.CULL_FACE),ee(Vi);function ue(W){d[W]!==!0&&(t.enable(W),d[W]=!0)}function xe(W){d[W]!==!1&&(t.disable(W),d[W]=!1)}function Me(W,Ae){return p[W]!==Ae?(t.bindFramebuffer(W,Ae),p[W]=Ae,i&&(W===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Ae),W===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function X(W,Ae){let ye=x,de=!1;if(W)if(ye=E.get(Ae),ye===void 0&&(ye=[],E.set(Ae,ye)),W.isWebGLMultipleRenderTargets){const be=W.texture;if(ye.length!==be.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,et=be.length;Fe<et;Fe++)ye[Fe]=t.COLOR_ATTACHMENT0+Fe;ye.length=be.length,de=!0}}else ye[0]!==t.COLOR_ATTACHMENT0&&(ye[0]=t.COLOR_ATTACHMENT0,de=!0);else ye[0]!==t.BACK&&(ye[0]=t.BACK,de=!0);de&&(n.isWebGL2?t.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function I(W){return g!==W?(t.useProgram(W),g=W,!0):!1}const A={[yr]:t.FUNC_ADD,[ny]:t.FUNC_SUBTRACT,[iy]:t.FUNC_REVERSE_SUBTRACT};if(i)A[$d]=t.MIN,A[qd]=t.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(A[$d]=W.MIN_EXT,A[qd]=W.MAX_EXT)}const z={[ry]:t.ZERO,[sy]:t.ONE,[ay]:t.SRC_COLOR,[tu]:t.SRC_ALPHA,[dy]:t.SRC_ALPHA_SATURATE,[uy]:t.DST_COLOR,[ly]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[nu]:t.ONE_MINUS_SRC_ALPHA,[fy]:t.ONE_MINUS_DST_COLOR,[cy]:t.ONE_MINUS_DST_ALPHA,[hy]:t.CONSTANT_COLOR,[py]:t.ONE_MINUS_CONSTANT_COLOR,[my]:t.CONSTANT_ALPHA,[gy]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(W,Ae,ye,de,be,Fe,et,St,_n,ut){if(W===Vi){h===!0&&(xe(t.BLEND),h=!1);return}if(h===!1&&(ue(t.BLEND),h=!0),W!==ty){if(W!==v||ut!==V){if((m!==yr||T!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,T=yr),ut)switch(W){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xd:t.blendFunc(t.ONE,t.ONE);break;case jd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}_=null,b=null,M=null,N=null,y.set(0,0,0),R=0,v=W,V=ut}return}be=be||Ae,Fe=Fe||ye,et=et||de,(Ae!==m||be!==T)&&(t.blendEquationSeparate(A[Ae],A[be]),m=Ae,T=be),(ye!==_||de!==b||Fe!==M||et!==N)&&(t.blendFuncSeparate(z[ye],z[de],z[Fe],z[et]),_=ye,b=de,M=Fe,N=et),(St.equals(y)===!1||_n!==R)&&(t.blendColor(St.r,St.g,St.b,_n),y.copy(St),R=_n),v=W,V=!1}function te(W,Ae){W.side===ui?xe(t.CULL_FACE):ue(t.CULL_FACE);let ye=W.side===rn;Ae&&(ye=!ye),ne(ye),W.blending===xs&&W.transparent===!1?ee(Vi):ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const de=W.stencilWrite;c.setTest(de),de&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),L(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){U!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),U=W)}function he(W){W!==JE?(ue(t.CULL_FACE),W!==j&&(W===Wd?t.cullFace(t.BACK):W===QE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),j=W}function C(W){W!==F&&(se&&t.lineWidth(W),F=W)}function L(W,Ae,ye){W?(ue(t.POLYGON_OFFSET_FILL),(Y!==Ae||J!==ye)&&(t.polygonOffset(Ae,ye),Y=Ae,J=ye)):xe(t.POLYGON_OFFSET_FILL)}function H(W){W?ue(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function w(W){W===void 0&&(W=t.TEXTURE0+K-1),G!==W&&(t.activeTexture(W),G=W)}function S(W,Ae,ye){ye===void 0&&(G===null?ye=t.TEXTURE0+K-1:ye=G);let de=Q[ye];de===void 0&&(de={type:void 0,texture:void 0},Q[ye]=de),(de.type!==W||de.texture!==Ae)&&(G!==ye&&(t.activeTexture(ye),G=ye),t.bindTexture(W,Ae||ce[W]),de.type=W,de.texture=Ae)}function O(){const W=Q[G];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function D(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function k(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(W){Te.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),Te.copy(W))}function Ne(W){Ce.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function Oe(W,Ae){let ye=f.get(Ae);ye===void 0&&(ye=new WeakMap,f.set(Ae,ye));let de=ye.get(W);de===void 0&&(de=t.getUniformBlockIndex(Ae,W.name),ye.set(W,de))}function Ie(W,Ae){const de=f.get(Ae).get(W);u.get(Ae)!==de&&(t.uniformBlockBinding(Ae,de,W.__bindingPointIndex),u.set(Ae,de))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},G=null,Q={},p={},E=new WeakMap,x=[],g=null,h=!1,v=null,m=null,_=null,b=null,T=null,M=null,N=null,y=new Je(0,0,0),R=0,V=!1,U=null,j=null,F=null,Y=null,J=null,Te.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:xe,bindFramebuffer:Me,drawBuffers:X,useProgram:I,setBlending:ee,setMaterial:te,setFlipSided:ne,setCullFace:he,setLineWidth:C,setPolygonOffset:L,setScissorTest:H,activeTexture:w,bindTexture:S,unbindTexture:O,compressedTexImage2D:D,compressedTexImage3D:B,texImage2D:pe,texImage3D:ke,updateUBOMapping:Oe,uniformBlockBinding:Ie,texStorage2D:k,texStorage3D:ve,texSubImage2D:ie,texSubImage3D:me,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Le,viewport:Ne,reset:Qe}}function lw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let x;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,S){return h?new OffscreenCanvas(w,S):wa("canvas")}function m(w,S,O,D){let B=1;if((w.width>D||w.height>D)&&(B=D/Math.max(w.width,w.height)),B<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ie=S?Wo:Math.floor,me=ie(B*w.width),_e=ie(B*w.height);x===void 0&&(x=v(me,_e));const Ee=O?v(me,_e):x;return Ee.width=me,Ee.height=_e,Ee.getContext("2d").drawImage(w,0,0,me,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+me+"x"+_e+")."),Ee}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function _(w){return lu(w.width)&&lu(w.height)}function b(w){return a?!1:w.wrapS!==Pn||w.wrapT!==Pn||w.minFilter!==Zt&&w.minFilter!==yn}function T(w,S){return w.generateMipmaps&&S&&w.minFilter!==Zt&&w.minFilter!==yn}function M(w){t.generateMipmap(w)}function N(w,S,O,D,B=!1){if(a===!1)return S;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=S;if(S===t.RED&&(O===t.FLOAT&&(ie=t.R32F),O===t.HALF_FLOAT&&(ie=t.R16F),O===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(ie=t.R8UI),O===t.UNSIGNED_SHORT&&(ie=t.R16UI),O===t.UNSIGNED_INT&&(ie=t.R32UI),O===t.BYTE&&(ie=t.R8I),O===t.SHORT&&(ie=t.R16I),O===t.INT&&(ie=t.R32I)),S===t.RG&&(O===t.FLOAT&&(ie=t.RG32F),O===t.HALF_FLOAT&&(ie=t.RG16F),O===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RGBA){const me=B?zo:ot.getTransfer(D);O===t.FLOAT&&(ie=t.RGBA32F),O===t.HALF_FLOAT&&(ie=t.RGBA16F),O===t.UNSIGNED_BYTE&&(ie=me===dt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(w,S,O){return T(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){return w===Zt||w===Kd||w===Kl?t.NEAREST:t.LINEAR}function V(w){const S=w.target;S.removeEventListener("dispose",V),j(S),S.isVideoTexture&&E.delete(S)}function U(w){const S=w.target;S.removeEventListener("dispose",U),Y(S)}function j(w){const S=i.get(w);if(S.__webglInit===void 0)return;const O=w.source,D=g.get(O);if(D){const B=D[S.__cacheKey];B.usedTimes--,B.usedTimes===0&&F(w),Object.keys(D).length===0&&g.delete(O)}i.remove(w)}function F(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const O=w.source,D=g.get(O);delete D[S.__cacheKey],o.memory.textures--}function Y(w){const S=w.texture,O=i.get(w),D=i.get(S);if(D.__webglTexture!==void 0&&(t.deleteTexture(D.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(O.__webglFramebuffer[B]))for(let ie=0;ie<O.__webglFramebuffer[B].length;ie++)t.deleteFramebuffer(O.__webglFramebuffer[B][ie]);else t.deleteFramebuffer(O.__webglFramebuffer[B]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[B])}else{if(Array.isArray(O.__webglFramebuffer))for(let B=0;B<O.__webglFramebuffer.length;B++)t.deleteFramebuffer(O.__webglFramebuffer[B]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let B=0;B<O.__webglColorRenderbuffer.length;B++)O.__webglColorRenderbuffer[B]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[B]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let B=0,ie=S.length;B<ie;B++){const me=i.get(S[B]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(S[B])}i.remove(S),i.remove(w)}let J=0;function K(){J=0}function se(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function ae(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function fe(w,S){const O=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const D=w.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(O,w,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function G(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ue(O,w,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function Q(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ue(O,w,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function ge(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){xe(O,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const Se={[su]:t.REPEAT,[Pn]:t.CLAMP_TO_EDGE,[au]:t.MIRRORED_REPEAT},Te={[Zt]:t.NEAREST,[Kd]:t.NEAREST_MIPMAP_NEAREST,[Kl]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[Py]:t.LINEAR_MIPMAP_NEAREST,[Ma]:t.LINEAR_MIPMAP_LINEAR},Ce={[Wy]:t.NEVER,[Zy]:t.ALWAYS,[Xy]:t.LESS,[Yy]:t.LEQUAL,[jy]:t.EQUAL,[Ky]:t.GEQUAL,[$y]:t.GREATER,[qy]:t.NOTEQUAL};function q(w,S,O){if(O?(t.texParameteri(w,t.TEXTURE_WRAP_S,Se[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Se[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Se[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Te[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Te[S.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Pn||S.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,R(S.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Zt&&S.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Zt||S.minFilter!==Kl&&S.minFilter!==Ma||S.type===Hi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ce(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",V));const D=S.source;let B=g.get(D);B===void 0&&(B={},g.set(D,B));const ie=ae(S);if(ie!==w.__cacheKey){B[ie]===void 0&&(B[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),B[ie].usedTimes++;const me=B[w.__cacheKey];me!==void 0&&(B[w.__cacheKey].usedTimes--,me.usedTimes===0&&F(S)),w.__cacheKey=ie,w.__webglTexture=B[ie].texture}return O}function ue(w,S,O){let D=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=t.TEXTURE_3D);const B=ce(w,S),ie=S.source;n.bindTexture(D,w.__webglTexture,t.TEXTURE0+O);const me=i.get(ie);if(ie.version!==me.__version||B===!0){n.activeTexture(t.TEXTURE0+O);const _e=ot.getPrimaries(ot.workingColorSpace),Ee=S.colorSpace===Mn?null:ot.getPrimaries(S.colorSpace),k=S.colorSpace===Mn||_e===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const ve=b(S)&&_(S.image)===!1;let pe=m(S.image,ve,!1,u);pe=H(S,pe);const ke=_(pe)||a,Le=s.convert(S.format,S.colorSpace);let Ne=s.convert(S.type),Oe=N(S.internalFormat,Le,Ne,S.colorSpace,S.isVideoTexture);q(D,S,ke);let Ie;const Qe=S.mipmaps,W=a&&S.isVideoTexture!==!0,Ae=me.__version===void 0||B===!0,ye=y(S,pe,ke);if(S.isDepthTexture)Oe=t.DEPTH_COMPONENT,a?S.type===Hi?Oe=t.DEPTH_COMPONENT32F:S.type===zi?Oe=t.DEPTH_COMPONENT24:S.type===wr?Oe=t.DEPTH24_STENCIL8:Oe=t.DEPTH_COMPONENT16:S.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Cr&&Oe===t.DEPTH_COMPONENT&&S.type!==uf&&S.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zi,Ne=s.convert(S.type)),S.format===Cs&&Oe===t.DEPTH_COMPONENT&&(Oe=t.DEPTH_STENCIL,S.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wr,Ne=s.convert(S.type))),Ae&&(W?n.texStorage2D(t.TEXTURE_2D,1,Oe,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Oe,pe.width,pe.height,0,Le,Ne,null));else if(S.isDataTexture)if(Qe.length>0&&ke){W&&Ae&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,Qe[0].width,Qe[0].height);for(let de=0,be=Qe.length;de<be;de++)Ie=Qe[de],W?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ie.width,Ie.height,Le,Ne,Ie.data):n.texImage2D(t.TEXTURE_2D,de,Oe,Ie.width,Ie.height,0,Le,Ne,Ie.data);S.generateMipmaps=!1}else W?(Ae&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,pe.width,pe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Le,Ne,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,pe.width,pe.height,0,Le,Ne,pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){W&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Oe,Qe[0].width,Qe[0].height,pe.depth);for(let de=0,be=Qe.length;de<be;de++)Ie=Qe[de],S.format!==In?Le!==null?W?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ie.width,Ie.height,pe.depth,Le,Ie.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Oe,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ie.width,Ie.height,pe.depth,Le,Ne,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Oe,Ie.width,Ie.height,pe.depth,0,Le,Ne,Ie.data)}else{W&&Ae&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,Qe[0].width,Qe[0].height);for(let de=0,be=Qe.length;de<be;de++)Ie=Qe[de],S.format!==In?Le!==null?W?n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Oe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ie.width,Ie.height,Le,Ne,Ie.data):n.texImage2D(t.TEXTURE_2D,de,Oe,Ie.width,Ie.height,0,Le,Ne,Ie.data)}else if(S.isDataArrayTexture)W?(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Oe,pe.width,pe.height,pe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,Ne,pe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,pe.width,pe.height,pe.depth,0,Le,Ne,pe.data);else if(S.isData3DTexture)W?(Ae&&n.texStorage3D(t.TEXTURE_3D,ye,Oe,pe.width,pe.height,pe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,Ne,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,pe.width,pe.height,pe.depth,0,Le,Ne,pe.data);else if(S.isFramebufferTexture){if(Ae)if(W)n.texStorage2D(t.TEXTURE_2D,ye,Oe,pe.width,pe.height);else{let de=pe.width,be=pe.height;for(let Fe=0;Fe<ye;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Oe,de,be,0,Le,Ne,null),de>>=1,be>>=1}}else if(Qe.length>0&&ke){W&&Ae&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,Qe[0].width,Qe[0].height);for(let de=0,be=Qe.length;de<be;de++)Ie=Qe[de],W?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Le,Ne,Ie):n.texImage2D(t.TEXTURE_2D,de,Oe,Le,Ne,Ie);S.generateMipmaps=!1}else W?(Ae&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,pe.width,pe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Ne,pe)):n.texImage2D(t.TEXTURE_2D,0,Oe,Le,Ne,pe);T(S,ke)&&M(D),me.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xe(w,S,O){if(S.image.length!==6)return;const D=ce(w,S),B=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+O);const ie=i.get(B);if(B.version!==ie.__version||D===!0){n.activeTexture(t.TEXTURE0+O);const me=ot.getPrimaries(ot.workingColorSpace),_e=S.colorSpace===Mn?null:ot.getPrimaries(S.colorSpace),Ee=S.colorSpace===Mn||me===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const k=S.isCompressedTexture||S.image[0].isCompressedTexture,ve=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let de=0;de<6;de++)!k&&!ve?pe[de]=m(S.image[de],!1,!0,c):pe[de]=ve?S.image[de].image:S.image[de],pe[de]=H(S,pe[de]);const ke=pe[0],Le=_(ke)||a,Ne=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type),Ie=N(S.internalFormat,Ne,Oe,S.colorSpace),Qe=a&&S.isVideoTexture!==!0,W=ie.__version===void 0||D===!0;let Ae=y(S,ke,Le);q(t.TEXTURE_CUBE_MAP,S,Le);let ye;if(k){Qe&&W&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ie,ke.width,ke.height);for(let de=0;de<6;de++){ye=pe[de].mipmaps;for(let be=0;be<ye.length;be++){const Fe=ye[be];S.format!==In?Ne!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Fe.width,Fe.height,Ne,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,Ie,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Fe.width,Fe.height,Ne,Oe,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,Ie,Fe.width,Fe.height,0,Ne,Oe,Fe.data)}}}else{ye=S.mipmaps,Qe&&W&&(ye.length>0&&Ae++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ie,pe[0].width,pe[0].height));for(let de=0;de<6;de++)if(ve){Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,pe[de].width,pe[de].height,Ne,Oe,pe[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ie,pe[de].width,pe[de].height,0,Ne,Oe,pe[de].data);for(let be=0;be<ye.length;be++){const et=ye[be].image[de].image;Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,et.width,et.height,Ne,Oe,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,Ie,et.width,et.height,0,Ne,Oe,et.data)}}else{Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Oe,pe[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ie,Ne,Oe,pe[de]);for(let be=0;be<ye.length;be++){const Fe=ye[be];Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Ne,Oe,Fe.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,Ie,Ne,Oe,Fe.image[de])}}}T(S,Le)&&M(t.TEXTURE_CUBE_MAP),ie.__version=B.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Me(w,S,O,D,B,ie){const me=s.convert(O.format,O.colorSpace),_e=s.convert(O.type),Ee=N(O.internalFormat,me,_e,O.colorSpace);if(!i.get(S).__hasExternalTextures){const ve=Math.max(1,S.width>>ie),pe=Math.max(1,S.height>>ie);B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?n.texImage3D(B,ie,Ee,ve,pe,S.depth,0,me,_e,null):n.texImage2D(B,ie,Ee,ve,pe,0,me,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),C(S)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,D,B,i.get(O).__webglTexture,0,he(S)):(B===t.TEXTURE_2D||B>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,D,B,i.get(O).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(w,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let D=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||C(S)){const B=S.depthTexture;B&&B.isDepthTexture&&(B.type===Hi?D=t.DEPTH_COMPONENT32F:B.type===zi&&(D=t.DEPTH_COMPONENT24));const ie=he(S);C(S)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,D,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,D,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,D,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const D=he(S);O&&C(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,D,t.DEPTH24_STENCIL8,S.width,S.height):C(S)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let B=0;B<D.length;B++){const ie=D[B],me=s.convert(ie.format,ie.colorSpace),_e=s.convert(ie.type),Ee=N(ie.internalFormat,me,_e,ie.colorSpace),k=he(S);O&&C(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,Ee,S.width,S.height):C(S)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,Ee,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function I(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),fe(S.depthTexture,0);const D=i.get(S.depthTexture).__webglTexture,B=he(S);if(S.depthTexture.format===Cr)C(S)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,D,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,D,0);else if(S.depthTexture.format===Cs)C(S)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,D,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function A(w){const S=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");I(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]=t.createRenderbuffer(),X(S.__webglDepthbuffer[D],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),X(S.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(w,S,O){const D=i.get(w);S!==void 0&&Me(D.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&A(w)}function ee(w){const S=w.texture,O=i.get(w),D=i.get(S);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=t.createTexture()),D.__version=S.version,o.memory.textures++);const B=w.isWebGLCubeRenderTarget===!0,ie=w.isWebGLMultipleRenderTargets===!0,me=_(w)||a;if(B){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)O.__webglFramebuffer[_e][Ee]=t.createFramebuffer()}else O.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)O.__webglFramebuffer[_e]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const _e=w.texture;for(let Ee=0,k=_e.length;Ee<k;Ee++){const ve=i.get(_e[Ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&C(w)===!1){const _e=ie?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Ee=0;Ee<_e.length;Ee++){const k=_e[Ee];O.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Ee]);const ve=s.convert(k.format,k.colorSpace),pe=s.convert(k.type),ke=N(k.internalFormat,ve,pe,k.colorSpace,w.isXRRenderTarget===!0),Le=he(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ke,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,O.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),X(O.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(B){n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture),q(t.TEXTURE_CUBE_MAP,S,me);for(let _e=0;_e<6;_e++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)Me(O.__webglFramebuffer[_e][Ee],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else Me(O.__webglFramebuffer[_e],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);T(S,me)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const _e=w.texture;for(let Ee=0,k=_e.length;Ee<k;Ee++){const ve=_e[Ee],pe=i.get(ve);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),q(t.TEXTURE_2D,ve,me),Me(O.__webglFramebuffer,w,ve,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),T(ve,me)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?_e=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(_e,D.__webglTexture),q(_e,S,me),a&&S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)Me(O.__webglFramebuffer[Ee],w,S,t.COLOR_ATTACHMENT0,_e,Ee);else Me(O.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,_e,0);T(S,me)&&M(_e),n.unbindTexture()}w.depthBuffer&&A(w)}function te(w){const S=_(w)||a,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let D=0,B=O.length;D<B;D++){const ie=O[D];if(T(ie,S)){const me=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=i.get(ie).__webglTexture;n.bindTexture(me,_e),M(me),n.unbindTexture()}}}function ne(w){if(a&&w.samples>0&&C(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,D=w.height;let B=t.COLOR_BUFFER_BIT;const ie=[],me=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(w),Ee=w.isWebGLMultipleRenderTargets===!0;if(Ee)for(let k=0;k<S.length;k++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let k=0;k<S.length;k++){ie.push(t.COLOR_ATTACHMENT0+k),w.depthBuffer&&ie.push(me);const ve=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(ve===!1&&(w.depthBuffer&&(B|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(B|=t.STENCIL_BUFFER_BIT)),Ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[k]),ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),Ee){const pe=i.get(S[k]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,O,D,0,0,O,D,B,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let k=0;k<S.length;k++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,_e.__webglColorRenderbuffer[k]);const ve=i.get(S[k]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function he(w){return Math.min(f,w.samples)}function C(w){const S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function L(w){const S=o.render.frame;E.get(w)!==S&&(E.set(w,S),w.update())}function H(w,S){const O=w.colorSpace,D=w.format,B=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ou||O!==vi&&O!==Mn&&(ot.getTransfer(O)===dt?a===!1?e.has("EXT_sRGB")===!0&&D===In?(w.format=ou,w.minFilter=yn,w.generateMipmaps=!1):S=__.sRGBToLinear(S):(D!==In||B!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=se,this.resetTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=ge,this.rebindTextures=z,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=C}function cw(t,e,n){const i=n.isWebGL2;function r(s,o=Mn){let a;const l=ot.getTransfer(o);if(s===Xi)return t.UNSIGNED_BYTE;if(s===c_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===u_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Iy)return t.BYTE;if(s===Ny)return t.SHORT;if(s===uf)return t.UNSIGNED_SHORT;if(s===l_)return t.INT;if(s===zi)return t.UNSIGNED_INT;if(s===Hi)return t.FLOAT;if(s===Ta)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dy)return t.ALPHA;if(s===In)return t.RGBA;if(s===Oy)return t.LUMINANCE;if(s===Uy)return t.LUMINANCE_ALPHA;if(s===Cr)return t.DEPTH_COMPONENT;if(s===Cs)return t.DEPTH_STENCIL;if(s===ou)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fy)return t.RED;if(s===f_)return t.RED_INTEGER;if(s===ky)return t.RG;if(s===d_)return t.RG_INTEGER;if(s===h_)return t.RGBA_INTEGER;if(s===Zl||s===Jl||s===Ql||s===ec)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zd||s===Jd||s===Qd||s===eh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===By)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===th||s===nh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===th)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ih||s===rh||s===sh||s===ah||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ih)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ah)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tc||s===_h||s===vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tc)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zy||s===xh||s===Eh||s===yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class uw extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yo extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fw={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,E=.005;c.inputState.pinching&&d>p+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dw extends sn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Cr,u!==Cr&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cr&&(i=zi),i===void 0&&u===Cs&&(i=wr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hw extends zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,E=null;const x=n.getContextAttributes();let g=null,h=null;const v=[],m=[],_=new dn;_.layers.enable(1),_.viewport=new gt;const b=new dn;b.layers.enable(2),b.viewport=new gt;const T=[_,b],M=new uw;M.layers.enable(1),M.layers.enable(2);let N=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=v[G];return Q===void 0&&(Q=new Mc,v[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=v[G];return Q===void 0&&(Q=new Mc,v[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=v[G];return Q===void 0&&(Q=new Mc,v[G]=Q),Q.getHandSpace()};function R(G){const Q=m.indexOf(G.inputSource);if(Q===-1)return;const ge=v[Q];ge!==void 0&&(ge.update(G.inputSource,G.frame,c||o),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",U);for(let G=0;G<v.length;G++){const Q=m[G];Q!==null&&(m[G]=null,v[G].disconnect(Q))}N=null,y=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",V),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),h=new Dr(p.framebufferWidth,p.framebufferHeight,{format:In,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,ge=null,Se=null;x.depth&&(Se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=x.stencil?Cs:Cr,ge=x.stencil?wr:zi);const Te={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),h=new Dr(d.textureWidth,d.textureHeight,{format:In,type:Xi,depthTexture:new dw(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(G){for(let Q=0;Q<G.removed.length;Q++){const ge=G.removed[Q],Se=m.indexOf(ge);Se>=0&&(m[Se]=null,v[Se].disconnect(ge))}for(let Q=0;Q<G.added.length;Q++){const ge=G.added[Q];let Se=m.indexOf(ge);if(Se===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=m.length){m.push(ge),Se=Ce;break}else if(m[Ce]===null){m[Ce]=ge,Se=Ce;break}if(Se===-1)break}const Te=v[Se];Te&&Te.connect(ge)}}const j=new $,F=new $;function Y(G,Q,ge){j.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(ge.matrixWorld);const Se=j.distanceTo(F),Te=Q.projectionMatrix.elements,Ce=ge.projectionMatrix.elements,q=Te[14]/(Te[10]-1),ce=Te[14]/(Te[10]+1),ue=(Te[9]+1)/Te[5],xe=(Te[9]-1)/Te[5],Me=(Te[8]-1)/Te[0],X=(Ce[8]+1)/Ce[0],I=q*Me,A=q*X,z=Se/(-Me+X),ee=z*-Me;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ee),G.translateZ(z),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const te=q+z,ne=ce+z,he=I-ee,C=A+(Se-ee),L=ue*ce/ne*te,H=xe*ce/ne*te;G.projectionMatrix.makePerspective(he,C,L,H,te,ne),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function J(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.near=b.near=_.near=G.near,M.far=b.far=_.far=G.far,(N!==M.near||y!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,y=M.far);const Q=G.parent,ge=M.cameras;J(M,Q);for(let Se=0;Se<ge.length;Se++)J(ge[Se],Q);ge.length===2?Y(M,_,b):M.projectionMatrix.copy(_.projectionMatrix),K(G,M,Q)};function K(G,Q,ge){ge===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Aa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let se=null;function ae(G,Q){if(u=Q.getViewerPose(c||o),E=Q,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Se=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let Te=0;Te<ge.length;Te++){const Ce=ge[Te];let q=null;if(p!==null)q=p.getViewport(Ce);else{const ue=f.getViewSubImage(d,Ce);q=ue.viewport,Te===0&&(e.setRenderTargetTextures(h,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(h))}let ce=T[Te];ce===void 0&&(ce=new dn,ce.layers.enable(Te),ce.viewport=new gt,T[Te]=ce),ce.matrix.fromArray(Ce.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ce.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(q.x,q.y,q.width,q.height),Te===0&&(M.matrix.copy(ce.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(ce)}}for(let ge=0;ge<v.length;ge++){const Se=m[ge],Te=v[ge];Se!==null&&Te!==void 0&&Te.update(Se,Q,c||o)}se&&se(G,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),E=null}const fe=new w_;fe.setAnimationLoop(ae),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}}function pw(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,M_(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,m,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,_)):h.isMeshMatcapMaterial?(s(g,h),E(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,m):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===rn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===rn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=m*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const _=m.program;i.uniformBlockBinding(v,_)}function c(v,m){let _=r[v.id];_===void 0&&(E(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",g));const b=m.program;i.updateUBOMapping(v,b);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const m=f();v.__bindingPointIndex=m;const _=t.createBuffer(),b=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,_),_}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const m=r[v.id],_=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let T=0,M=_.length;T<M;T++){const N=_[T];if(p(N,T,b)===!0){const y=N.__offset,R=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let U=0;U<R.length;U++){const j=R[U],F=x(j);typeof j=="number"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,y+V,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=j.elements[0],N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=j.elements[0],N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=j.elements[0]):(j.toArray(N.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,N.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,_){const b=v.value;if(_[m]===void 0){if(typeof b=="number")_[m]=b;else{const T=Array.isArray(b)?b:[b],M=[];for(let N=0;N<T.length;N++)M.push(T[N].clone());_[m]=M}return!0}else if(typeof b=="number"){if(_[m]!==b)return _[m]=b,!0}else{const T=Array.isArray(_[m])?_[m]:[_[m]],M=Array.isArray(b)?b:[b];for(let N=0;N<T.length;N++){const y=T[N];if(y.equals(M[N])===!1)return y.copy(M[N]),!0}}return!1}function E(v){const m=v.uniforms;let _=0;const b=16;let T=0;for(let M=0,N=m.length;M<N;M++){const y=m[M],R={boundary:0,storage:0},V=Array.isArray(y.value)?y.value:[y.value];for(let U=0,j=V.length;U<j;U++){const F=V[U],Y=x(F);R.boundary+=Y.boundary,R.storage+=Y.storage}if(y.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=_,M>0){T=_%b;const U=b-T;T!==0&&U-R.boundary<0&&(_+=b-T,y.__offset=_)}_+=R.storage}return T=_%b,T>0&&(_+=b-T),v.__size=_,v.__cache={},this}function x(v){const m={boundary:0,storage:0};return typeof v=="number"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const _=o.indexOf(m.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class N_{constructor(e={}){const{canvas:n=hS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),E=new Int32Array(4);let x=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const m=this;let _=!1,b=0,T=0,M=null,N=-1,y=null;const R=new gt,V=new gt;let U=null;const j=new Je(0);let F=0,Y=n.width,J=n.height,K=1,se=null,ae=null;const fe=new gt(0,0,Y,J),G=new gt(0,0,Y,J);let Q=!1;const ge=new mf;let Se=!1,Te=!1,Ce=null;const q=new Tt,ce=new Xe,ue=new $,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return M===null?K:1}let X=i;function I(P,Z){for(let re=0;re<P.length;re++){const oe=P[re],le=n.getContext(oe,Z);if(le!==null)return le}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lf}`),n.addEventListener("webglcontextlost",Qe,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),X===null){const Z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&Z.shift(),X=I(Z,P),X===null)throw I(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let A,z,ee,te,ne,he,C,L,H,w,S,O,D,B,ie,me,_e,Ee,k,ve,pe,ke,Le,Ne;function Oe(){A=new TT(X),z=new xT(X,A,e),A.init(z),ke=new cw(X,A,z),ee=new ow(X,A,z),te=new CT(X),ne=new YA,he=new lw(X,A,ee,ne,z,ke,te),C=new yT(m),L=new MT(m),H=new kS(X,z),Le=new _T(X,A,H,z),w=new AT(X,H,te,Le),S=new IT(X,w,H,te),k=new PT(X,z,he),me=new ET(ne),O=new jA(m,C,L,A,z,Le,me),D=new pw(m,ne),B=new qA,ie=new tw(A,z),Ee=new gT(m,C,L,ee,S,d,l),_e=new aw(m,S,z),Ne=new mw(X,te,z,ee),ve=new vT(X,A,te,z),pe=new wT(X,A,te,z),te.programs=O.programs,m.capabilities=z,m.extensions=A,m.properties=ne,m.renderLists=B,m.shadowMap=_e,m.state=ee,m.info=te}Oe();const Ie=new hw(m,X);this.xr=Ie,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const P=A.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=A.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(P){P!==void 0&&(K=P,this.setSize(Y,J,!1))},this.getSize=function(P){return P.set(Y,J)},this.setSize=function(P,Z,re=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,J=Z,n.width=Math.floor(P*K),n.height=Math.floor(Z*K),re===!0&&(n.style.width=P+"px",n.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(Y*K,J*K).floor()},this.setDrawingBufferSize=function(P,Z,re){Y=P,J=Z,K=re,n.width=Math.floor(P*re),n.height=Math.floor(Z*re),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,Z,re,oe){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,Z,re,oe),ee.viewport(R.copy(fe).multiplyScalar(K).floor())},this.getScissor=function(P){return P.copy(G)},this.setScissor=function(P,Z,re,oe){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,Z,re,oe),ee.scissor(V.copy(G).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(P){ee.setScissorTest(Q=P)},this.setOpaqueSort=function(P){se=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(P=!0,Z=!0,re=!0){let oe=0;if(P){let le=!1;if(M!==null){const Pe=M.texture.format;le=Pe===h_||Pe===d_||Pe===f_}if(le){const Pe=M.texture.type,Ue=Pe===Xi||Pe===zi||Pe===uf||Pe===wr||Pe===c_||Pe===u_,ze=Ee.getClearColor(),Ge=Ee.getClearAlpha(),qe=ze.r,je=ze.g,Ye=ze.b;Ue?(p[0]=qe,p[1]=je,p[2]=Ye,p[3]=Ge,X.clearBufferuiv(X.COLOR,0,p)):(E[0]=qe,E[1]=je,E[2]=Ye,E[3]=Ge,X.clearBufferiv(X.COLOR,0,E))}else oe|=X.COLOR_BUFFER_BIT}Z&&(oe|=X.DEPTH_BUFFER_BIT),re&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),B.dispose(),ie.dispose(),ne.dispose(),C.dispose(),L.dispose(),S.dispose(),Le.dispose(),Ne.dispose(),O.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",_n),Ie.removeEventListener("sessionend",ut),Ce&&(Ce.dispose(),Ce=null),Xt.stop()};function Qe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=te.autoReset,Z=_e.enabled,re=_e.autoUpdate,oe=_e.needsUpdate,le=_e.type;Oe(),te.autoReset=P,_e.enabled=Z,_e.autoUpdate=re,_e.needsUpdate=oe,_e.type=le}function Ae(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ye(P){const Z=P.target;Z.removeEventListener("dispose",ye),de(Z)}function de(P){be(P),ne.remove(P)}function be(P){const Z=ne.get(P).programs;Z!==void 0&&(Z.forEach(function(re){O.releaseProgram(re)}),P.isShaderMaterial&&O.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,re,oe,le,Pe){Z===null&&(Z=xe);const Ue=le.isMesh&&le.matrixWorld.determinant()<0,ze=X1(P,Z,re,oe,le);ee.setMaterial(oe,Ue);let Ge=re.index,qe=1;if(oe.wireframe===!0){if(Ge=w.getWireframeAttribute(re),Ge===void 0)return;qe=2}const je=re.drawRange,Ye=re.attributes.position;let yt=je.start*qe,an=(je.start+je.count)*qe;Pe!==null&&(yt=Math.max(yt,Pe.start*qe),an=Math.min(an,(Pe.start+Pe.count)*qe)),Ge!==null?(yt=Math.max(yt,0),an=Math.min(an,Ge.count)):Ye!=null&&(yt=Math.max(yt,0),an=Math.min(an,Ye.count));const It=an-yt;if(It<0||It===1/0)return;Le.setup(le,oe,ze,re,Ge);let Zn,xt=ve;if(Ge!==null&&(Zn=H.get(Ge),xt=pe,xt.setIndex(Zn)),le.isMesh)oe.wireframe===!0?(ee.setLineWidth(oe.wireframeLinewidth*Me()),xt.setMode(X.LINES)):xt.setMode(X.TRIANGLES);else if(le.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),ee.setLineWidth(tt*Me()),le.isLineSegments?xt.setMode(X.LINES):le.isLineLoop?xt.setMode(X.LINE_LOOP):xt.setMode(X.LINE_STRIP)}else le.isPoints?xt.setMode(X.POINTS):le.isSprite&&xt.setMode(X.TRIANGLES);if(le.isInstancedMesh)xt.renderInstances(yt,It,le.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Rl=Math.min(re.instanceCount,tt);xt.renderInstances(yt,It,Rl)}else xt.render(yt,It)};function Fe(P,Z,re){P.transparent===!0&&P.side===ui&&P.forceSinglePass===!1?(P.side=rn,P.needsUpdate=!0,Va(P,Z,re),P.side=$i,P.needsUpdate=!0,Va(P,Z,re),P.side=ui):Va(P,Z,re)}this.compile=function(P,Z,re=null){re===null&&(re=P),g=ie.get(re),g.init(),v.push(g),re.traverseVisible(function(le){le.isLight&&le.layers.test(Z.layers)&&(g.pushLight(le),le.castShadow&&g.pushShadow(le))}),P!==re&&P.traverseVisible(function(le){le.isLight&&le.layers.test(Z.layers)&&(g.pushLight(le),le.castShadow&&g.pushShadow(le))}),g.setupLights(m._useLegacyLights);const oe=new Set;return P.traverse(function(le){const Pe=le.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const ze=Pe[Ue];Fe(ze,re,le),oe.add(ze)}else Fe(Pe,re,le),oe.add(Pe)}),v.pop(),g=null,oe},this.compileAsync=function(P,Z,re=null){const oe=this.compile(P,Z,re);return new Promise(le=>{function Pe(){if(oe.forEach(function(Ue){ne.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){le(P);return}setTimeout(Pe,10)}A.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let et=null;function St(P){et&&et(P)}function _n(){Xt.stop()}function ut(){Xt.start()}const Xt=new w_;Xt.setAnimationLoop(St),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(P){et=P,Ie.setAnimationLoop(P),P===null?Xt.stop():Xt.start()},Ie.addEventListener("sessionstart",_n),Ie.addEventListener("sessionend",ut),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(Z),Z=Ie.getCamera()),P.isScene===!0&&P.onBeforeRender(m,P,Z,M),g=ie.get(P,v.length),g.init(),v.push(g),q.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ge.setFromProjectionMatrix(q),Te=this.localClippingEnabled,Se=me.init(this.clippingPlanes,Te),x=B.get(P,h.length),x.init(),h.push(x),zn(P,Z,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(se,ae),this.info.render.frame++,Se===!0&&me.beginShadows();const re=g.state.shadowsArray;if(_e.render(re,P,Z),Se===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(x,P),g.setupLights(m._useLegacyLights),Z.isArrayCamera){const oe=Z.cameras;for(let le=0,Pe=oe.length;le<Pe;le++){const Ue=oe[le];Bf(x,P,Ue,Ue.viewport)}}else Bf(x,P,Z);M!==null&&(he.updateMultisampleRenderTarget(M),he.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(m,P,Z),Le.resetDefaultState(),N=-1,y=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function zn(P,Z,re,oe){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ge.intersectsSprite(P)){oe&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(q);const Ue=S.update(P),ze=P.material;ze.visible&&x.push(P,Ue,ze,re,ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ge.intersectsObject(P))){const Ue=S.update(P),ze=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ue.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ue.copy(Ue.boundingSphere.center)),ue.applyMatrix4(P.matrixWorld).applyMatrix4(q)),Array.isArray(ze)){const Ge=Ue.groups;for(let qe=0,je=Ge.length;qe<je;qe++){const Ye=Ge[qe],yt=ze[Ye.materialIndex];yt&&yt.visible&&x.push(P,Ue,yt,re,ue.z,Ye)}}else ze.visible&&x.push(P,Ue,ze,re,ue.z,null)}}const Pe=P.children;for(let Ue=0,ze=Pe.length;Ue<ze;Ue++)zn(Pe[Ue],Z,re,oe)}function Bf(P,Z,re,oe){const le=P.opaque,Pe=P.transmissive,Ue=P.transparent;g.setupLightsView(re),Se===!0&&me.setGlobalState(m.clippingPlanes,re),Pe.length>0&&W1(le,Pe,Z,re),oe&&ee.viewport(R.copy(oe)),le.length>0&&Ga(le,Z,re),Pe.length>0&&Ga(Pe,Z,re),Ue.length>0&&Ga(Ue,Z,re),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function W1(P,Z,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const Pe=z.isWebGL2;Ce===null&&(Ce=new Dr(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")?Ta:Xi,minFilter:Ma,samples:Pe?4:0})),m.getDrawingBufferSize(ce),Pe?Ce.setSize(ce.x,ce.y):Ce.setSize(Wo(ce.x),Wo(ce.y));const Ue=m.getRenderTarget();m.setRenderTarget(Ce),m.getClearColor(j),F=m.getClearAlpha(),F<1&&m.setClearColor(16777215,.5),m.clear();const ze=m.toneMapping;m.toneMapping=Wi,Ga(P,re,oe),he.updateMultisampleRenderTarget(Ce),he.updateRenderTargetMipmap(Ce);let Ge=!1;for(let qe=0,je=Z.length;qe<je;qe++){const Ye=Z[qe],yt=Ye.object,an=Ye.geometry,It=Ye.material,Zn=Ye.group;if(It.side===ui&&yt.layers.test(oe.layers)){const xt=It.side;It.side=rn,It.needsUpdate=!0,zf(yt,re,oe,an,It,Zn),It.side=xt,It.needsUpdate=!0,Ge=!0}}Ge===!0&&(he.updateMultisampleRenderTarget(Ce),he.updateRenderTargetMipmap(Ce)),m.setRenderTarget(Ue),m.setClearColor(j,F),m.toneMapping=ze}function Ga(P,Z,re){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let le=0,Pe=P.length;le<Pe;le++){const Ue=P[le],ze=Ue.object,Ge=Ue.geometry,qe=oe===null?Ue.material:oe,je=Ue.group;ze.layers.test(re.layers)&&zf(ze,Z,re,Ge,qe,je)}}function zf(P,Z,re,oe,le,Pe){P.onBeforeRender(m,Z,re,oe,le,Pe),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(m,Z,re,oe,P,Pe),le.transparent===!0&&le.side===ui&&le.forceSinglePass===!1?(le.side=rn,le.needsUpdate=!0,m.renderBufferDirect(re,Z,oe,le,P,Pe),le.side=$i,le.needsUpdate=!0,m.renderBufferDirect(re,Z,oe,le,P,Pe),le.side=ui):m.renderBufferDirect(re,Z,oe,le,P,Pe),P.onAfterRender(m,Z,re,oe,le,Pe)}function Va(P,Z,re){Z.isScene!==!0&&(Z=xe);const oe=ne.get(P),le=g.state.lights,Pe=g.state.shadowsArray,Ue=le.state.version,ze=O.getParameters(P,le.state,Pe,Z,re),Ge=O.getProgramCacheKey(ze);let qe=oe.programs;oe.environment=P.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(P.isMeshStandardMaterial?L:C).get(P.envMap||oe.environment),qe===void 0&&(P.addEventListener("dispose",ye),qe=new Map,oe.programs=qe);let je=qe.get(Ge);if(je!==void 0){if(oe.currentProgram===je&&oe.lightsStateVersion===Ue)return Gf(P,ze),je}else ze.uniforms=O.getUniforms(P),P.onBuild(re,ze,m),P.onBeforeCompile(ze,m),je=O.acquireProgram(ze,Ge),qe.set(Ge,je),oe.uniforms=ze.uniforms;const Ye=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=me.uniform),Gf(P,ze),oe.needsLights=Y1(P),oe.lightsStateVersion=Ue,oe.needsLights&&(Ye.ambientLightColor.value=le.state.ambient,Ye.lightProbe.value=le.state.probe,Ye.directionalLights.value=le.state.directional,Ye.directionalLightShadows.value=le.state.directionalShadow,Ye.spotLights.value=le.state.spot,Ye.spotLightShadows.value=le.state.spotShadow,Ye.rectAreaLights.value=le.state.rectArea,Ye.ltc_1.value=le.state.rectAreaLTC1,Ye.ltc_2.value=le.state.rectAreaLTC2,Ye.pointLights.value=le.state.point,Ye.pointLightShadows.value=le.state.pointShadow,Ye.hemisphereLights.value=le.state.hemi,Ye.directionalShadowMap.value=le.state.directionalShadowMap,Ye.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ye.spotShadowMap.value=le.state.spotShadowMap,Ye.spotLightMatrix.value=le.state.spotLightMatrix,Ye.spotLightMap.value=le.state.spotLightMap,Ye.pointShadowMap.value=le.state.pointShadowMap,Ye.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.currentProgram=je,oe.uniformsList=null,je}function Hf(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Lo.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Gf(P,Z){const re=ne.get(P);re.outputColorSpace=Z.outputColorSpace,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function X1(P,Z,re,oe,le){Z.isScene!==!0&&(Z=xe),he.resetTextureUnits();const Pe=Z.fog,Ue=oe.isMeshStandardMaterial?Z.environment:null,ze=M===null?m.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:vi,Ge=(oe.isMeshStandardMaterial?L:C).get(oe.envMap||Ue),qe=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,je=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,an=!!re.morphAttributes.color;let It=Wi;oe.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(It=m.toneMapping);const Zn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xt=Zn!==void 0?Zn.length:0,tt=ne.get(oe),Rl=g.state.lights;if(Se===!0&&(Te===!0||P!==y)){const on=P===y&&oe.id===N;me.setState(oe,P,on)}let bt=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Rl.state.version||tt.outputColorSpace!==ze||le.isInstancedMesh&&tt.instancing===!1||!le.isInstancedMesh&&tt.instancing===!0||le.isSkinnedMesh&&tt.skinning===!1||!le.isSkinnedMesh&&tt.skinning===!0||le.isInstancedMesh&&tt.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&tt.instancingColor===!1&&le.instanceColor!==null||tt.envMap!==Ge||oe.fog===!0&&tt.fog!==Pe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==me.numPlanes||tt.numIntersection!==me.numIntersection)||tt.vertexAlphas!==qe||tt.vertexTangents!==je||tt.morphTargets!==Ye||tt.morphNormals!==yt||tt.morphColors!==an||tt.toneMapping!==It||z.isWebGL2===!0&&tt.morphTargetsCount!==xt)&&(bt=!0):(bt=!0,tt.__version=oe.version);let sr=tt.currentProgram;bt===!0&&(sr=Va(oe,Z,le));let Vf=!1,Hs=!1,Ll=!1;const jt=sr.getUniforms(),ar=tt.uniforms;if(ee.useProgram(sr.program)&&(Vf=!0,Hs=!0,Ll=!0),oe.id!==N&&(N=oe.id,Hs=!0),Vf||y!==P){jt.setValue(X,"projectionMatrix",P.projectionMatrix),jt.setValue(X,"viewMatrix",P.matrixWorldInverse);const on=jt.map.cameraPosition;on!==void 0&&on.setValue(X,ue.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&jt.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&jt.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,Hs=!0,Ll=!0)}if(le.isSkinnedMesh){jt.setOptional(X,le,"bindMatrix"),jt.setOptional(X,le,"bindMatrixInverse");const on=le.skeleton;on&&(z.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),jt.setValue(X,"boneTexture",on.boneTexture,he),jt.setValue(X,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pl=re.morphAttributes;if((Pl.position!==void 0||Pl.normal!==void 0||Pl.color!==void 0&&z.isWebGL2===!0)&&k.update(le,re,sr),(Hs||tt.receiveShadow!==le.receiveShadow)&&(tt.receiveShadow=le.receiveShadow,jt.setValue(X,"receiveShadow",le.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(ar.envMap.value=Ge,ar.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Hs&&(jt.setValue(X,"toneMappingExposure",m.toneMappingExposure),tt.needsLights&&j1(ar,Ll),Pe&&oe.fog===!0&&D.refreshFogUniforms(ar,Pe),D.refreshMaterialUniforms(ar,oe,K,J,Ce),Lo.upload(X,Hf(tt),ar,he)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Lo.upload(X,Hf(tt),ar,he),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&jt.setValue(X,"center",le.center),jt.setValue(X,"modelViewMatrix",le.modelViewMatrix),jt.setValue(X,"normalMatrix",le.normalMatrix),jt.setValue(X,"modelMatrix",le.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const on=oe.uniformsGroups;for(let Il=0,$1=on.length;Il<$1;Il++)if(z.isWebGL2){const Wf=on[Il];Ne.update(Wf,sr),Ne.bind(Wf,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function j1(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Y1(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,Z,re){ne.get(P.texture).__webglTexture=Z,ne.get(P.depthTexture).__webglTexture=re;const oe=ne.get(P);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const re=ne.get(P);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,re=0){M=P,b=Z,T=re;let oe=!0,le=null,Pe=!1,Ue=!1;if(P){const Ge=ne.get(P);Ge.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(X.FRAMEBUFFER,null),oe=!1):Ge.__webglFramebuffer===void 0?he.setupRenderTarget(P):Ge.__hasExternalTextures&&he.rebindTextures(P,ne.get(P.texture).__webglTexture,ne.get(P.depthTexture).__webglTexture);const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const je=ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?le=je[Z][re]:le=je[Z],Pe=!0):z.isWebGL2&&P.samples>0&&he.useMultisampledRTT(P)===!1?le=ne.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?le=je[re]:le=je,R.copy(P.viewport),V.copy(P.scissor),U=P.scissorTest}else R.copy(fe).multiplyScalar(K).floor(),V.copy(G).multiplyScalar(K).floor(),U=Q;if(ee.bindFramebuffer(X.FRAMEBUFFER,le)&&z.drawBuffers&&oe&&ee.drawBuffers(P,le),ee.viewport(R),ee.scissor(V),ee.setScissorTest(U),Pe){const Ge=ne.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,re)}else if(Ue){const Ge=ne.get(P.texture),qe=Z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ge.__webglTexture,re||0,qe)}N=-1},this.readRenderTargetPixels=function(P,Z,re,oe,le,Pe,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){ee.bindFramebuffer(X.FRAMEBUFFER,ze);try{const Ge=P.texture,qe=Ge.format,je=Ge.type;if(qe!==In&&ke.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=je===Ta&&(A.has("EXT_color_buffer_half_float")||z.isWebGL2&&A.has("EXT_color_buffer_float"));if(je!==Xi&&ke.convert(je)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Hi&&(z.isWebGL2||A.has("OES_texture_float")||A.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-oe&&re>=0&&re<=P.height-le&&X.readPixels(Z,re,oe,le,ke.convert(qe),ke.convert(je),Pe)}finally{const Ge=M!==null?ne.get(M).__webglFramebuffer:null;ee.bindFramebuffer(X.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(P,Z,re=0){const oe=Math.pow(2,-re),le=Math.floor(Z.image.width*oe),Pe=Math.floor(Z.image.height*oe);he.setTexture2D(Z,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,P.x,P.y,le,Pe),ee.unbindTexture()},this.copyTextureToTexture=function(P,Z,re,oe=0){const le=Z.image.width,Pe=Z.image.height,Ue=ke.convert(re.format),ze=ke.convert(re.type);he.setTexture2D(re,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment),Z.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,oe,P.x,P.y,le,Pe,Ue,ze,Z.image.data):Z.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,oe,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ue,Z.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,oe,P.x,P.y,Ue,ze,Z.image),oe===0&&re.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,re,oe,le=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=P.max.x-P.min.x+1,Ue=P.max.y-P.min.y+1,ze=P.max.z-P.min.z+1,Ge=ke.convert(oe.format),qe=ke.convert(oe.type);let je;if(oe.isData3DTexture)he.setTexture3D(oe,0),je=X.TEXTURE_3D;else if(oe.isDataArrayTexture)he.setTexture2DArray(oe,0),je=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,oe.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,oe.unpackAlignment);const Ye=X.getParameter(X.UNPACK_ROW_LENGTH),yt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),an=X.getParameter(X.UNPACK_SKIP_PIXELS),It=X.getParameter(X.UNPACK_SKIP_ROWS),Zn=X.getParameter(X.UNPACK_SKIP_IMAGES),xt=re.isCompressedTexture?re.mipmaps[0]:re.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,xt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,P.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,P.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,P.min.z),re.isDataTexture||re.isData3DTexture?X.texSubImage3D(je,le,Z.x,Z.y,Z.z,Pe,Ue,ze,Ge,qe,xt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(je,le,Z.x,Z.y,Z.z,Pe,Ue,ze,Ge,xt.data)):X.texSubImage3D(je,le,Z.x,Z.y,Z.z,Pe,Ue,ze,Ge,qe,xt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Ye),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,an),X.pixelStorei(X.UNPACK_SKIP_ROWS,It),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Zn),le===0&&oe.generateMipmaps&&X.generateMipmap(je),ee.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?he.setTextureCube(P,0):P.isData3DTexture?he.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?he.setTexture2DArray(P,0):he.setTexture2D(P,0),ee.unbindTexture()},this.resetState=function(){b=0,T=0,M=null,ee.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ff?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===gl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Rr:p_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?Ot:vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gw extends N_{}gw.prototype.isWebGL1Renderer=!0;class _w extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class vw extends ka{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m_,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const up={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class xw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],E=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return E}return null}}}const Ew=new xw;class vf{constructor(e){this.manager=e!==void 0?e:Ew,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vf.DEFAULT_MATERIAL_NAME="__DEFAULT";class yw extends vf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=up.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=wa("img");function l(){u(),up.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Sw extends vf{constructor(e){super(e)}load(e,n,i,r){const s=new sn,o=new yw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class xf extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tc=new Tt,fp=new $,dp=new $;class D_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fp.setFromMatrixPosition(e.matrixWorld),n.position.copy(fp),dp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dp),n.updateMatrixWorld(),Tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hp=new Tt,Ks=new $,Ac=new $;class bw extends D_{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),Ac.copy(i.position),Ac.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ac),i.updateMatrixWorld(),r.makeTranslation(-Ks.x,-Ks.y,-Ks.z),hp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hp)}}class Mw extends xf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tw extends D_{constructor(){super(new C_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aw extends xf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Tw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ww extends xf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=pp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function pp(){return(typeof performance>"u"?Date:performance).now()}class Rw{constructor(e,n,i=0,r=1/0){this.ray=new hf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new pf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return uu(e,this,i,n),i.sort(mp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)uu(e[r],this,i,n);return i.sort(mp),i}}function mp(t,e){return t.distance-e.distance}function uu(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)uu(r[s],e,n,!0)}}class gp{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);const _p={type:"change"},wc={type:"start"},vp={type:"end"},So=new hf,xp=new Bi,Lw=Math.cos(70*dS.DEG2RAD);class Pw extends zr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",S),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(_p),i.update(),s=r.NONE},this.update=function(){const k=new $,ve=new Or().setFromUnitVectors(e.up,new $(0,1,0)),pe=ve.clone().invert(),ke=new $,Le=new Or,Ne=new $,Oe=2*Math.PI;return function(Qe=null){const W=i.object.position;k.copy(W).sub(i.target),k.applyQuaternion(ve),a.setFromVector3(k),i.autoRotate&&s===r.NONE&&V(y(Qe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ae=i.minAzimuthAngle,ye=i.maxAzimuthAngle;isFinite(Ae)&&isFinite(ye)&&(Ae<-Math.PI?Ae+=Oe:Ae>Math.PI&&(Ae-=Oe),ye<-Math.PI?ye+=Oe:ye>Math.PI&&(ye-=Oe),Ae<=ye?a.theta=Math.max(Ae,Math.min(ye,a.theta)):a.theta=a.theta>(Ae+ye)/2?Math.max(Ae,a.theta):Math.min(ye,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=ae(a.radius):a.radius=ae(a.radius*c),k.setFromSpherical(a),k.applyQuaternion(pe),W.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let de=!1;if(i.zoomToCursor&&T){let be=null;if(i.object.isPerspectiveCamera){const Fe=k.length();be=ae(Fe*c);const et=Fe-be;i.object.position.addScaledVector(_,et),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Fe=new $(b.x,b.y,0);Fe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),de=!0;const et=new $(b.x,b.y,0);et.unproject(i.object),i.object.position.sub(et).add(Fe),i.object.updateMatrixWorld(),be=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(be).add(i.object.position):(So.origin.copy(i.object.position),So.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(So.direction))<Lw?e.lookAt(i.target):(xp.setFromNormalAndCoplanarPoint(i.object.up,i.target),So.intersectPlane(xp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),de=!0);return c=1,T=!1,de||ke.distanceToSquared(i.object.position)>o||8*(1-Le.dot(i.object.quaternion))>o||Ne.distanceToSquared(i.target)>0?(i.dispatchEvent(_p),ke.copy(i.object.position),Le.copy(i.object.quaternion),Ne.copy(i.target),de=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",ne),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",w),i.domElement.removeEventListener("pointermove",he),i.domElement.removeEventListener("pointerup",C),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new gp,l=new gp;let c=1;const u=new $,f=new Xe,d=new Xe,p=new Xe,E=new Xe,x=new Xe,g=new Xe,h=new Xe,v=new Xe,m=new Xe,_=new $,b=new Xe;let T=!1;const M=[],N={};function y(k){return k!==null?2*Math.PI/60*i.autoRotateSpeed*k:2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function V(k){l.theta-=k}function U(k){l.phi-=k}const j=function(){const k=new $;return function(pe,ke){k.setFromMatrixColumn(ke,0),k.multiplyScalar(-pe),u.add(k)}}(),F=function(){const k=new $;return function(pe,ke){i.screenSpacePanning===!0?k.setFromMatrixColumn(ke,1):(k.setFromMatrixColumn(ke,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(pe),u.add(k)}}(),Y=function(){const k=new $;return function(pe,ke){const Le=i.domElement;if(i.object.isPerspectiveCamera){const Ne=i.object.position;k.copy(Ne).sub(i.target);let Oe=k.length();Oe*=Math.tan(i.object.fov/2*Math.PI/180),j(2*pe*Oe/Le.clientHeight,i.object.matrix),F(2*ke*Oe/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(pe*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),F(ke*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(k){if(!i.zoomToCursor)return;T=!0;const ve=i.domElement.getBoundingClientRect(),pe=k.clientX-ve.left,ke=k.clientY-ve.top,Le=ve.width,Ne=ve.height;b.x=pe/Le*2-1,b.y=-(ke/Ne)*2+1,_.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function ae(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function fe(k){f.set(k.clientX,k.clientY)}function G(k){se(k),h.set(k.clientX,k.clientY)}function Q(k){E.set(k.clientX,k.clientY)}function ge(k){d.set(k.clientX,k.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ve=i.domElement;V(2*Math.PI*p.x/ve.clientHeight),U(2*Math.PI*p.y/ve.clientHeight),f.copy(d),i.update()}function Se(k){v.set(k.clientX,k.clientY),m.subVectors(v,h),m.y>0?J(R()):m.y<0&&K(R()),h.copy(v),i.update()}function Te(k){x.set(k.clientX,k.clientY),g.subVectors(x,E).multiplyScalar(i.panSpeed),Y(g.x,g.y),E.copy(x),i.update()}function Ce(k){se(k),k.deltaY<0?K(R()):k.deltaY>0&&J(R()),i.update()}function q(k){let ve=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),ve=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),ve=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),ve=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),ve=!0;break}ve&&(k.preventDefault(),i.update())}function ce(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const k=.5*(M[0].pageX+M[1].pageX),ve=.5*(M[0].pageY+M[1].pageY);f.set(k,ve)}}function ue(){if(M.length===1)E.set(M[0].pageX,M[0].pageY);else{const k=.5*(M[0].pageX+M[1].pageX),ve=.5*(M[0].pageY+M[1].pageY);E.set(k,ve)}}function xe(){const k=M[0].pageX-M[1].pageX,ve=M[0].pageY-M[1].pageY,pe=Math.sqrt(k*k+ve*ve);h.set(0,pe)}function Me(){i.enableZoom&&xe(),i.enablePan&&ue()}function X(){i.enableZoom&&xe(),i.enableRotate&&ce()}function I(k){if(M.length==1)d.set(k.pageX,k.pageY);else{const pe=Ee(k),ke=.5*(k.pageX+pe.x),Le=.5*(k.pageY+pe.y);d.set(ke,Le)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ve=i.domElement;V(2*Math.PI*p.x/ve.clientHeight),U(2*Math.PI*p.y/ve.clientHeight),f.copy(d)}function A(k){if(M.length===1)x.set(k.pageX,k.pageY);else{const ve=Ee(k),pe=.5*(k.pageX+ve.x),ke=.5*(k.pageY+ve.y);x.set(pe,ke)}g.subVectors(x,E).multiplyScalar(i.panSpeed),Y(g.x,g.y),E.copy(x)}function z(k){const ve=Ee(k),pe=k.pageX-ve.x,ke=k.pageY-ve.y,Le=Math.sqrt(pe*pe+ke*ke);v.set(0,Le),m.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),J(m.y),h.copy(v)}function ee(k){i.enableZoom&&z(k),i.enablePan&&A(k)}function te(k){i.enableZoom&&z(k),i.enableRotate&&I(k)}function ne(k){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",he),i.domElement.addEventListener("pointerup",C)),ie(k),k.pointerType==="touch"?O(k):L(k))}function he(k){i.enabled!==!1&&(k.pointerType==="touch"?D(k):H(k))}function C(k){me(k),M.length===0&&(i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",he),i.domElement.removeEventListener("pointerup",C)),i.dispatchEvent(vp),s=r.NONE}function L(k){let ve;switch(k.button){case 0:ve=i.mouseButtons.LEFT;break;case 1:ve=i.mouseButtons.MIDDLE;break;case 2:ve=i.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case Gr.DOLLY:if(i.enableZoom===!1)return;G(k),s=r.DOLLY;break;case Gr.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;Q(k),s=r.PAN}else{if(i.enableRotate===!1)return;fe(k),s=r.ROTATE}break;case Gr.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;fe(k),s=r.ROTATE}else{if(i.enablePan===!1)return;Q(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(wc)}function H(k){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ge(k);break;case r.DOLLY:if(i.enableZoom===!1)return;Se(k);break;case r.PAN:if(i.enablePan===!1)return;Te(k);break}}function w(k){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(k.preventDefault(),i.dispatchEvent(wc),Ce(k),i.dispatchEvent(vp))}function S(k){i.enabled===!1||i.enablePan===!1||q(k)}function O(k){switch(_e(k),M.length){case 1:switch(i.touches.ONE){case Vr.ROTATE:if(i.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case Vr.PAN:if(i.enablePan===!1)return;ue(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(),s=r.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(wc)}function D(k){switch(_e(k),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;I(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;A(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ee(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(k),i.update();break;default:s=r.NONE}}function B(k){i.enabled!==!1&&k.preventDefault()}function ie(k){M.push(k)}function me(k){delete N[k.pointerId];for(let ve=0;ve<M.length;ve++)if(M[ve].pointerId==k.pointerId){M.splice(ve,1);return}}function _e(k){let ve=N[k.pointerId];ve===void 0&&(ve=new Xe,N[k.pointerId]=ve),ve.set(k.pageX,k.pageY)}function Ee(k){const ve=k.pointerId===M[0].pointerId?M[1]:M[0];return N[ve.pointerId]}i.domElement.addEventListener("contextmenu",B),i.domElement.addEventListener("pointerdown",ne),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}class Iw extends mi{constructor(e,n,i=!1,r=!1,s=1e4){const o=new nr;super(o,n),this.isMarchingCubes=!0;const a=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const m=s*3;this.positionArray=new Float32Array(m*3);const _=new nn(this.positionArray,3);_.setUsage(Za),o.setAttribute("position",_),this.normalArray=new Float32Array(m*3);const b=new nn(this.normalArray,3);if(b.setUsage(Za),o.setAttribute("normal",b),this.enableUvs){this.uvArray=new Float32Array(m*2);const T=new nn(this.uvArray,2);T.setUsage(Za),o.setAttribute("uv",T)}if(this.enableColors){this.colorArray=new Float32Array(m*3);const T=new nn(this.colorArray,3);T.setUsage(Za),o.setAttribute("color",T)}o.boundingSphere=new _l(new $,1)};function f(v,m,_){return v+(m-v)*_}function d(v,m,_,b,T,M,N,y,R,V){const U=(_-N)/(y-N),j=a.normal_cache;l[m+0]=b+U*a.delta,l[m+1]=T,l[m+2]=M,c[m+0]=f(j[v+0],j[v+3],U),c[m+1]=f(j[v+1],j[v+4],U),c[m+2]=f(j[v+2],j[v+5],U),u[m+0]=f(a.palette[R*3+0],a.palette[V*3+0],U),u[m+1]=f(a.palette[R*3+1],a.palette[V*3+1],U),u[m+2]=f(a.palette[R*3+2],a.palette[V*3+2],U)}function p(v,m,_,b,T,M,N,y,R,V){const U=(_-N)/(y-N),j=a.normal_cache;l[m+0]=b,l[m+1]=T+U*a.delta,l[m+2]=M;const F=v+a.yd*3;c[m+0]=f(j[v+0],j[F+0],U),c[m+1]=f(j[v+1],j[F+1],U),c[m+2]=f(j[v+2],j[F+2],U),u[m+0]=f(a.palette[R*3+0],a.palette[V*3+0],U),u[m+1]=f(a.palette[R*3+1],a.palette[V*3+1],U),u[m+2]=f(a.palette[R*3+2],a.palette[V*3+2],U)}function E(v,m,_,b,T,M,N,y,R,V){const U=(_-N)/(y-N),j=a.normal_cache;l[m+0]=b,l[m+1]=T,l[m+2]=M+U*a.delta;const F=v+a.zd*3;c[m+0]=f(j[v+0],j[F+0],U),c[m+1]=f(j[v+1],j[F+1],U),c[m+2]=f(j[v+2],j[F+2],U),u[m+0]=f(a.palette[R*3+0],a.palette[V*3+0],U),u[m+1]=f(a.palette[R*3+1],a.palette[V*3+1],U),u[m+2]=f(a.palette[R*3+2],a.palette[V*3+2],U)}function x(v){const m=v*3;a.normal_cache[m]===0&&(a.normal_cache[m+0]=a.field[v-1]-a.field[v+1],a.normal_cache[m+1]=a.field[v-a.yd]-a.field[v+a.yd],a.normal_cache[m+2]=a.field[v-a.zd]-a.field[v+a.zd])}function g(v,m,_,b,T){const M=b+1,N=b+a.yd,y=b+a.zd,R=M+a.yd,V=M+a.zd,U=b+a.yd+a.zd,j=M+a.yd+a.zd;let F=0;const Y=a.field[b],J=a.field[M],K=a.field[N],se=a.field[R],ae=a.field[y],fe=a.field[V],G=a.field[U],Q=a.field[j];Y<T&&(F|=1),J<T&&(F|=2),K<T&&(F|=8),se<T&&(F|=4),ae<T&&(F|=16),fe<T&&(F|=32),G<T&&(F|=128),Q<T&&(F|=64);const ge=Nw[F];if(ge===0)return 0;const Se=a.delta,Te=v+Se,Ce=m+Se,q=_+Se;ge&1&&(x(b),x(M),d(b*3,0,T,v,m,_,Y,J,b,M)),ge&2&&(x(M),x(R),p(M*3,3,T,Te,m,_,J,se,M,R)),ge&4&&(x(N),x(R),d(N*3,6,T,v,Ce,_,K,se,N,R)),ge&8&&(x(b),x(N),p(b*3,9,T,v,m,_,Y,K,b,N)),ge&16&&(x(y),x(V),d(y*3,12,T,v,m,q,ae,fe,y,V)),ge&32&&(x(V),x(j),p(V*3,15,T,Te,m,q,fe,Q,V,j)),ge&64&&(x(U),x(j),d(U*3,18,T,v,Ce,q,G,Q,U,j)),ge&128&&(x(y),x(U),p(y*3,21,T,v,m,q,ae,G,y,U)),ge&256&&(x(b),x(y),E(b*3,24,T,v,m,_,Y,ae,b,y)),ge&512&&(x(M),x(V),E(M*3,27,T,Te,m,_,J,fe,M,V)),ge&1024&&(x(R),x(j),E(R*3,30,T,Te,Ce,_,se,Q,R,j)),ge&2048&&(x(N),x(U),E(N*3,33,T,v,Ce,_,K,G,N,U)),F<<=4;let ce,ue,xe,Me=0,X=0;for(;bo[F+X]!=-1;)ce=F+X,ue=ce+1,xe=ce+2,h(l,c,u,3*bo[ce],3*bo[ue],3*bo[xe]),X+=3,Me++;return Me}function h(v,m,_,b,T,M){const N=a.count*3;if(a.positionArray[N+0]=v[b],a.positionArray[N+1]=v[b+1],a.positionArray[N+2]=v[b+2],a.positionArray[N+3]=v[T],a.positionArray[N+4]=v[T+1],a.positionArray[N+5]=v[T+2],a.positionArray[N+6]=v[M],a.positionArray[N+7]=v[M+1],a.positionArray[N+8]=v[M+2],a.material.flatShading===!0){const y=(m[b+0]+m[T+0]+m[M+0])/3,R=(m[b+1]+m[T+1]+m[M+1])/3,V=(m[b+2]+m[T+2]+m[M+2])/3;a.normalArray[N+0]=y,a.normalArray[N+1]=R,a.normalArray[N+2]=V,a.normalArray[N+3]=y,a.normalArray[N+4]=R,a.normalArray[N+5]=V,a.normalArray[N+6]=y,a.normalArray[N+7]=R,a.normalArray[N+8]=V}else a.normalArray[N+0]=m[b+0],a.normalArray[N+1]=m[b+1],a.normalArray[N+2]=m[b+2],a.normalArray[N+3]=m[T+0],a.normalArray[N+4]=m[T+1],a.normalArray[N+5]=m[T+2],a.normalArray[N+6]=m[M+0],a.normalArray[N+7]=m[M+1],a.normalArray[N+8]=m[M+2];if(a.enableUvs){const y=a.count*2;a.uvArray[y+0]=v[b+0],a.uvArray[y+1]=v[b+2],a.uvArray[y+2]=v[T+0],a.uvArray[y+3]=v[T+2],a.uvArray[y+4]=v[M+0],a.uvArray[y+5]=v[M+2]}a.enableColors&&(a.colorArray[N+0]=_[b+0],a.colorArray[N+1]=_[b+1],a.colorArray[N+2]=_[b+2],a.colorArray[N+3]=_[T+0],a.colorArray[N+4]=_[T+1],a.colorArray[N+5]=_[T+2],a.colorArray[N+6]=_[M+0],a.colorArray[N+7]=_[M+1],a.colorArray[N+8]=_[M+2]),a.count+=3}this.addBall=function(v,m,_,b,T,M){const N=Math.sign(b);b=Math.abs(b);const y=M!=null;let R=new Je(v,m,_);if(y)try{R=M instanceof Je?M:Array.isArray(M)?new Je(Math.min(Math.abs(M[0]),1),Math.min(Math.abs(M[1]),1),Math.min(Math.abs(M[2]),1)):new Je(M)}catch{R=new Je(v,m,_)}const V=this.size*Math.sqrt(b/T),U=_*this.size,j=m*this.size,F=v*this.size;let Y=Math.floor(U-V);Y<1&&(Y=1);let J=Math.floor(U+V);J>this.size-1&&(J=this.size-1);let K=Math.floor(j-V);K<1&&(K=1);let se=Math.floor(j+V);se>this.size-1&&(se=this.size-1);let ae=Math.floor(F-V);ae<1&&(ae=1);let fe=Math.floor(F+V);fe>this.size-1&&(fe=this.size-1);let G,Q,ge,Se,Te,Ce,q,ce,ue,xe,Me;for(ge=Y;ge<J;ge++)for(Te=this.size2*ge,ce=ge/this.size-_,ue=ce*ce,Q=K;Q<se;Q++)for(Se=Te+this.size*Q,q=Q/this.size-m,xe=q*q,G=ae;G<fe;G++)if(Ce=G/this.size-v,Me=b/(1e-6+Ce*Ce+xe+ue)-T,Me>0){this.field[Se+G]+=Me*N;const X=Math.sqrt((G-F)*(G-F)+(Q-j)*(Q-j)+(ge-U)*(ge-U))/V,I=1-X*X*X*(X*(X*6-15)+10);this.palette[(Se+G)*3+0]+=R.r*I,this.palette[(Se+G)*3+1]+=R.g*I,this.palette[(Se+G)*3+2]+=R.b*I}},this.addPlaneX=function(v,m){const _=this.size,b=this.yd,T=this.zd,M=this.field;let N,y,R,V,U,j,F,Y=_*Math.sqrt(v/m);for(Y>_&&(Y=_),N=0;N<Y;N++)if(j=N/_,V=j*j,U=v/(1e-4+V)-m,U>0)for(y=0;y<_;y++)for(F=N+y*b,R=0;R<_;R++)M[T*R+F]+=U},this.addPlaneY=function(v,m){const _=this.size,b=this.yd,T=this.zd,M=this.field;let N,y,R,V,U,j,F,Y,J=_*Math.sqrt(v/m);for(J>_&&(J=_),y=0;y<J;y++)if(j=y/_,V=j*j,U=v/(1e-4+V)-m,U>0)for(F=y*b,N=0;N<_;N++)for(Y=F+N,R=0;R<_;R++)M[T*R+Y]+=U},this.addPlaneZ=function(v,m){const _=this.size,b=this.yd,T=this.zd,M=this.field;let N,y,R,V,U,j,F,Y,J=_*Math.sqrt(v/m);for(J>_&&(J=_),R=0;R<J;R++)if(j=R/_,V=j*j,U=v/(1e-4+V)-m,U>0)for(F=T*R,y=0;y<_;y++)for(Y=F+y*b,N=0;N<_;N++)M[Y+N]+=U},this.setCell=function(v,m,_,b){const T=this.size2*_+this.size*m+v;this.field[T]=b},this.getCell=function(v,m,_){const b=this.size2*_+this.size*m+v;return this.field[b]},this.blur=function(v=1){const m=this.field,_=m.slice(),b=this.size,T=this.size2;for(let M=0;M<b;M++)for(let N=0;N<b;N++)for(let y=0;y<b;y++){const R=T*y+b*N+M;let V=_[R],U=1;for(let j=-1;j<=1;j+=2){const F=j+M;if(!(F<0||F>=b))for(let Y=-1;Y<=1;Y+=2){const J=Y+N;if(!(J<0||J>=b))for(let K=-1;K<=1;K+=2){const se=K+y;if(se<0||se>=b)continue;const ae=T*se+b*J+F,fe=_[ae];U++,V+=v*(fe-V)/U}}}m[R]=V}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let m=1;m<v;m++){const _=this.size2*m,b=(m-this.halfsize)/this.halfsize;for(let T=1;T<v;T++){const M=_+this.size*T,N=(T-this.halfsize)/this.halfsize;for(let y=1;y<v;y++){const R=(y-this.halfsize)/this.halfsize,V=M+y;g(R,N,b,V,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const Nw=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),bo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),Dw="/assets/background-cbc05baa.webp";let Tr,Di,br,Ep,yp,Cc,Rc,Sp,jn,da,Gn,bp=0;const Ow=new Cw;function Uw(){Tr.aspect=window.innerWidth/window.innerHeight,Tr.updateProjectionMatrix(),br.setSize(window.innerWidth,window.innerHeight)}function Fw(){return{plastic:new vw({specular:16747520,shininess:5,color:16757504})}}function kw(){Gn={material:"plastic",speed:.1,numBlobs:3,resolution:50,isolation:4}}function Bw(t,e,n,i,r,s){t.reset();const o=10,a=.6/((Math.sqrt(n)-1)/4+1);for(let l=0;l<n;l++){const c=Math.sin(l+1.26*e*(1.03+.5*Math.cos(.21*l)))*.27+.5,u=Math.abs(Math.cos(l+1.12*e*Math.cos(1.22+.1424*l)))*.77,f=Math.cos(l+1.32*e*.1*Math.sin(.92+.53*l))*.27+.5;t.addBall(c,u,f,a,o)}t.update()}function zw(){const t=Ow.getDelta();bp+=t*Gn.speed*.5,Gn.resolution!==da&&(da=Gn.resolution,jn.init(Math.floor(da))),Gn.isolation!==jn.isolation&&(jn.isolation=Gn.isolation),Bw(jn,bp,Gn.numBlobs,Gn.floor,Gn.wallx,Gn.wallz),br.render(Di,Tr)}const Hw={name:"MetaBall",mounted(){this.init(),this.animate()},methods:{init(){const t=this.$refs.container;Tr=new dn(45,window.innerWidth/window.innerHeight,1,1e4),Tr.position.set(-100,1e3,800),Di=new _w;const e=Dw,i=new Sw().load(e);Di.background=i,Cc=new Aw(16777215,5),Cc.position.set(.5,.5,1),Di.add(Cc),Rc=new Mw(16743424,3,0,0),Rc.position.set(0,0,100),Di.add(Rc),Sp=new ww(3289650,3),Di.add(Sp),Ep=Fw(),yp="plastic",da=50,jn=new Iw(da,Ep[yp],!0,!0,1e5),jn.position.set(0,0,0),jn.scale.set(700,700,700),jn.enableUvs=!1,jn.enableColors=!1,Di.add(jn),br=new N_,br.setPixelRatio(window.devicePixelRatio),br.setSize(window.innerWidth,window.innerHeight),t.appendChild(br.domElement);const r=new Pw(Tr,br.domElement);r.minDistance=500,r.maxDistance=5e3;const s=new Rw,o=new Xe;function a(l){o.x=l.clientX/window.innerWidth*2-1,o.y=-(l.clientY/window.innerHeight)*2+1,s.setFromCamera(o,Tr);const c=s.intersectObjects(Di.children);c.length>0&&(c[0].object.material.color.getHex()===16757504?c[0].object.material.color.set(16777215):c[0].object.material.color.getHex()===16777215?c[0].object.material.color.set(5816572):c[0].object.material.color.getHex()===5816572?c[0].object.material.color.set(8257429):c[0].object.material.color.set(16757504))}window.addEventListener("click",a,!1),kw(),window.addEventListener("resize",Uw)},animate(){requestAnimationFrame(this.animate),zw()}}},Gw={id:"main"},Vw={id:"container",ref:"container"};function Ww(t,e,n,i,r,s){return Ss(),Da("div",Gw,[At("div",Vw,null,512)])}const Xw=Ua(Hw,[["render",Ww]]),Mp=()=>{};let Ef={},O_={},U_=null,F_={mark:Mp,measure:Mp};try{typeof window<"u"&&(Ef=window),typeof document<"u"&&(O_=document),typeof MutationObserver<"u"&&(U_=MutationObserver),typeof performance<"u"&&(F_=performance)}catch{}const{userAgent:Tp=""}=Ef.navigator||{},qi=Ef,ht=O_,Ap=U_,Mo=F_;qi.document;const Si=!!ht.documentElement&&!!ht.head&&typeof ht.addEventListener=="function"&&typeof ht.createElement=="function",k_=~Tp.indexOf("MSIE")||~Tp.indexOf("Trident/");var _t="classic",B_="duotone",pn="sharp",mn="sharp-duotone",jw=[_t,B_,pn,mn],Yw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},wp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$w=["kit"],qw=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Kw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Zw={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Jw={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Qw={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},e2={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},t2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},n2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},z_={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},i2=["solid","regular","light","thin","duotone","brands"],H_=[1,2,3,4,5,6,7,8,9,10],r2=H_.concat([11,12,13,14,15,16,17,18,19,20]),ea={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s2=[...Object.keys(e2),...i2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ea.GROUP,ea.SWAP_OPACITY,ea.PRIMARY,ea.SECONDARY].concat(H_.map(t=>"".concat(t,"x"))).concat(r2.map(t=>"w-".concat(t))),a2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},o2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},l2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Cp={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const xi="___FONT_AWESOME___",fu=16,G_="fa",V_="svg-inline--fa",Fr="data-fa-i2svg",du="data-fa-pseudo-element",c2="data-fa-pseudo-element-pending",yf="data-prefix",Sf="data-icon",Rp="fontawesome-i2svg",u2="async",f2=["HTML","HEAD","STYLE","SCRIPT"],W_=(()=>{try{return!0}catch{return!1}})(),X_=[_t,pn,mn];function za(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_t]}})}const j_={...z_};j_[_t]={...z_[_t],...wp.kit,...wp["kit-duotone"]};const Pr=za(j_),hu={...n2};hu[_t]={...hu[_t],...Cp.kit,...Cp["kit-duotone"]};const Ca=za(hu),pu={...t2};pu[_t]={...pu[_t],...l2.kit};const Ir=za(pu),mu={...Qw};mu[_t]={...mu[_t],...o2.kit};const d2=za(mu),h2=qw,Y_="fa-layers-text",p2=Kw,m2={...Yw};za(m2);const g2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lc=ea,Ls=new Set;Object.keys(Ca[_t]).map(Ls.add.bind(Ls));Object.keys(Ca[pn]).map(Ls.add.bind(Ls));Object.keys(Ca[mn]).map(Ls.add.bind(Ls));const _2=[...$w,...s2],ha=qi.FontAwesomeConfig||{};function v2(t){var e=ht.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function x2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ht&&typeof ht.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=x2(v2(n));r!=null&&(ha[i]=r)});const $_={styleDefault:"solid",familyDefault:"classic",cssPrefix:G_,replacementClass:V_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ha.familyPrefix&&(ha.cssPrefix=ha.familyPrefix);const Ps={...$_,...ha};Ps.autoReplaceSvg||(Ps.observeMutations=!1);const De={};Object.keys($_).forEach(t=>{Object.defineProperty(De,t,{enumerable:!0,set:function(e){Ps[t]=e,pa.forEach(n=>n(De))},get:function(){return Ps[t]}})});Object.defineProperty(De,"familyPrefix",{enumerable:!0,set:function(t){Ps.cssPrefix=t,pa.forEach(e=>e(De))},get:function(){return Ps.cssPrefix}});qi.FontAwesomeConfig=De;const pa=[];function E2(t){return pa.push(t),()=>{pa.splice(pa.indexOf(t),1)}}const Ii=fu,Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function y2(t){if(!t||!Si)return;const e=ht.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ht.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return ht.head.insertBefore(e,i),t}const S2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ra(){let t=12,e="";for(;t-- >0;)e+=S2[Math.random()*62|0];return e}function Bs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bf(t){return t.classList?Bs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function q_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b2(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(q_(t[n]),'" '),"").trim()}function El(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Mf(t){return t.size!==Yn.size||t.x!==Yn.x||t.y!==Yn.y||t.rotate!==Yn.rotate||t.flipX||t.flipY}function M2(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function T2(t){let{transform:e,width:n=fu,height:i=fu,startCentered:r=!1}=t,s="";return r&&k_?s+="translate(".concat(e.x/Ii-n/2,"em, ").concat(e.y/Ii-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Ii,"em), calc(-50% + ").concat(e.y/Ii,"em)) "):s+="translate(".concat(e.x/Ii,"em, ").concat(e.y/Ii,"em) "),s+="scale(".concat(e.size/Ii*(e.flipX?-1:1),", ").concat(e.size/Ii*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var A2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function K_(){const t=G_,e=V_,n=De.cssPrefix,i=De.replacementClass;let r=A2;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}let Lp=!1;function Pc(){De.autoAddCss&&!Lp&&(y2(K_()),Lp=!0)}var w2={mixout(){return{dom:{css:K_,insertCss:Pc}}},hooks(){return{beforeDOMElementCreation(){Pc()},beforeI2svg(){Pc()}}}};const Ei=qi||{};Ei[xi]||(Ei[xi]={});Ei[xi].styles||(Ei[xi].styles={});Ei[xi].hooks||(Ei[xi].hooks={});Ei[xi].shims||(Ei[xi].shims=[]);var $n=Ei[xi];const Z_=[],J_=function(){ht.removeEventListener("DOMContentLoaded",J_),Xo=1,Z_.map(t=>t())};let Xo=!1;Si&&(Xo=(ht.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ht.readyState),Xo||ht.addEventListener("DOMContentLoaded",J_));function C2(t){Si&&(Xo?setTimeout(t,0):Z_.push(t))}function Ha(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?q_(t):"<".concat(e," ").concat(b2(n),">").concat(i.map(Ha).join(""),"</").concat(e,">")}function Pp(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var R2=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Ic=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?R2(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function L2(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function gu(t){const e=L2(t);return e.length===1?e[0].toString(16):null}function P2(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Ip(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function _u(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Ip(e);typeof $n.hooks.addPack=="function"&&!i?$n.hooks.addPack(t,Ip(e)):$n.styles[t]={...$n.styles[t]||{},...r},t==="fas"&&_u("fa",e)}const{styles:Mr,shims:I2}=$n,N2={[_t]:Object.values(Ir[_t]),[pn]:Object.values(Ir[pn]),[mn]:Object.values(Ir[mn])};let Tf=null,Q_={},e1={},t1={},n1={},i1={};const D2={[_t]:Object.keys(Pr[_t]),[pn]:Object.keys(Pr[pn]),[mn]:Object.keys(Pr[mn])};function O2(t){return~_2.indexOf(t)}function U2(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!O2(r)?r:null}const r1=()=>{const t=i=>Ic(Mr,(r,s,o)=>(r[o]=Ic(s,i,{}),r),{});Q_=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=s}),i)),e1=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=s}),i)),i1=t((i,r,s)=>{const o=r[2];return i[s]=s,o.forEach(a=>{i[a]=s}),i});const e="far"in Mr||De.autoFetchSvg,n=Ic(I2,(i,r)=>{const s=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:a}),i},{names:{},unicodes:{}});t1=n.names,n1=n.unicodes,Tf=yl(De.styleDefault,{family:De.familyDefault})};E2(t=>{Tf=yl(t.styleDefault,{family:De.familyDefault})});r1();function Af(t,e){return(Q_[t]||{})[e]}function F2(t,e){return(e1[t]||{})[e]}function Gi(t,e){return(i1[t]||{})[e]}function s1(t){return t1[t]||{prefix:null,iconName:null}}function k2(t){const e=n1[t],n=Af("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ki(){return Tf}const wf=()=>({prefix:null,iconName:null,rest:[]});function yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_t}=e,i=Pr[n][t],r=Ca[n][t]||Ca[n][i],s=t in $n.styles?t:null;return r||s||null}const B2={[_t]:Object.keys(Ir[_t]),[pn]:Object.keys(Ir[pn]),[mn]:Object.keys(Ir[mn])};function Sl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[_t]:"".concat(De.cssPrefix,"-").concat(_t),[pn]:"".concat(De.cssPrefix,"-").concat(pn),[mn]:"".concat(De.cssPrefix,"-").concat(mn)};let r=null,s=_t;const o=jw.filter(l=>l!==B_);o.forEach(l=>{(t.includes(i[l])||t.some(c=>B2[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=U2(De.cssPrefix,c);if(Mr[c]?(c=N2[s].includes(c)?d2[s][c]:c,r=c,l.prefix=c):D2[s].indexOf(c)>-1?(r=c,l.prefix=yl(c,{family:s})):u?l.iconName=u:c!==De.replacementClass&&!o.some(f=>c===i[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=r==="fa"?s1(l.iconName):{},d=Gi(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Mr.far&&Mr.fas&&!De.autoFetchSvg&&(l.prefix="fas")}return l},wf());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===pn&&(Mr.fass||De.autoFetchSvg)&&(a.prefix="fass",a.iconName=Gi(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===mn&&(Mr.fasds||De.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Gi(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=Ki()||"fas"),a}class z2{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},_u(s,r[s]);const o=Ir[_t][s];o&&_u(o,r[s]),r1()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:o,icon:a}=i[r],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Np=[],fs={};const ys={},H2=Object.keys(ys);function G2(t,e){let{mixoutsTo:n}=e;return Np=t,fs={},Object.keys(ys).forEach(i=>{H2.indexOf(i)===-1&&delete ys[i]}),Np.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(o=>{fs[o]||(fs[o]=[]),fs[o].push(s[o])})}i.provides&&i.provides(ys)}),n}function vu(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(fs[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function kr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(fs[t]||[]).forEach(s=>{s.apply(null,n)})}function Zi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ys[t]?ys[t].apply(null,e):void 0}function xu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ki();if(e)return e=Gi(n,e)||e,Pp(a1.definitions,n,e)||Pp($n.styles,n,e)}const a1=new z2,V2=()=>{De.autoReplaceSvg=!1,De.observeMutations=!1,kr("noAuto")},W2={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Si?(kr("beforeI2svg",t),Zi("pseudoElements2svg",t),Zi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;De.autoReplaceSvg===!1&&(De.autoReplaceSvg=!0),De.observeMutations=!0,C2(()=>{j2({autoReplaceSvgRoot:e}),kr("watch",t)})}},X2={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=yl(t[0]);return{prefix:n,iconName:Gi(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(De.cssPrefix,"-"))>-1||t.match(h2))){const e=Sl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ki(),iconName:Gi(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ki();return{prefix:e,iconName:Gi(e,t)||t}}}},gn={noAuto:V2,config:De,dom:W2,parse:X2,library:a1,findIconDefinition:xu,toHtml:Ha},j2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ht}=t;(Object.keys($n.styles).length>0||De.autoFetchSvg)&&Si&&De.autoReplaceSvg&&gn.dom.i2svg({node:e})};function bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ha(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Si)return;const n=ht.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Y2(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:o}=t;if(Mf(o)&&n.found&&!i.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};r.style=El({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function $2(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(De.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:i}]}]}function Cf(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:p}=n.found?n:e,E=i==="fak",x=[De.replacementClass,r?"".concat(De.cssPrefix,"-").concat(r):""].filter(b=>u.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(u.classes).join(" ");let g={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)}};const h=E&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(g.attributes[Fr]=""),a&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ra())},children:[a]}),delete g.attributes.title);const v={...g,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...h,...u.styles}},{children:m,attributes:_}=n.found&&e.found?Zi("generateAbstractMask",v)||{children:[],attributes:{}}:Zi("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=m,v.attributes=_,o?$2(v):Y2(v)}function Dp(t){const{content:e,width:n,height:i,transform:r,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Fr]="");const c={...o.styles};Mf(r)&&(c.transform=T2({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=El(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function q2(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=El(i.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Nc}=$n;function Eu(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(De.cssPrefix,"-").concat(Lc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(De.cssPrefix,"-").concat(Lc.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(De.cssPrefix,"-").concat(Lc.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const K2={found:!1,width:512,height:512};function Z2(t,e){!W_&&!De.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function yu(t,e){let n=e;return e==="fa"&&De.styleDefault!==null&&(e=Ki()),new Promise((i,r)=>{if(n==="fa"){const s=s1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Nc[e]&&Nc[e][t]){const s=Nc[e][t];return i(Eu(s))}Z2(t,e),i({...K2,icon:De.showMissingIcons&&t?Zi("missingIconAbstract")||{}:{}})})}const Op=()=>{},Su=De.measurePerformance&&Mo&&Mo.mark&&Mo.measure?Mo:{mark:Op,measure:Op},ta='FA "6.6.0"',J2=t=>(Su.mark("".concat(ta," ").concat(t," begins")),()=>o1(t)),o1=t=>{Su.mark("".concat(ta," ").concat(t," ends")),Su.measure("".concat(ta," ").concat(t),"".concat(ta," ").concat(t," begins"),"".concat(ta," ").concat(t," ends"))};var Rf={begin:J2,end:o1};const Po=()=>{};function Up(t){return typeof(t.getAttribute?t.getAttribute(Fr):null)=="string"}function Q2(t){const e=t.getAttribute?t.getAttribute(yf):null,n=t.getAttribute?t.getAttribute(Sf):null;return e&&n}function eC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(De.replacementClass)}function tC(){return De.autoReplaceSvg===!0?Io.replace:Io[De.autoReplaceSvg]||Io.replace}function nC(t){return ht.createElementNS("http://www.w3.org/2000/svg",t)}function iC(t){return ht.createElement(t)}function l1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?nC:iC}=e;if(typeof t=="string")return ht.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(l1(s,{ceFn:n}))}),i}function rC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Io={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(l1(n),e)}),e.getAttribute(Fr)===null&&De.keepOriginalSource){let n=ht.createComment(rC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~bf(e).indexOf(De.replacementClass))return Io.replace(t);const i=new RegExp("".concat(De.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===De.replacementClass||a.match(i)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Ha(s)).join(`
`);e.setAttribute(Fr,""),e.innerHTML=r}};function Fp(t){t()}function c1(t,e){const n=typeof e=="function"?e:Po;if(t.length===0)n();else{let i=Fp;De.mutateApproach===u2&&(i=qi.requestAnimationFrame||Fp),i(()=>{const r=tC(),s=Rf.begin("mutate");t.map(r),s(),n()})}}let Lf=!1;function u1(){Lf=!0}function bu(){Lf=!1}let jo=null;function kp(t){if(!Ap||!De.observeMutations)return;const{treeCallback:e=Po,nodeCallback:n=Po,pseudoElementsCallback:i=Po,observeMutationsRoot:r=ht}=t;jo=new Ap(s=>{if(Lf)return;const o=Ki();Bs(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Up(a.addedNodes[0])&&(De.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&De.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&Up(a.target)&&~g2.indexOf(a.attributeName))if(a.attributeName==="class"&&Q2(a.target)){const{prefix:l,iconName:c}=Sl(bf(a.target));a.target.setAttribute(yf,l||o),c&&a.target.setAttribute(Sf,c)}else eC(a.target)&&n(a.target)})}),Si&&jo.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function sC(){jo&&jo.disconnect()}function aC(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function oC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=Sl(bf(t));return r.prefix||(r.prefix=Ki()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=F2(r.prefix,t.innerText)||Af(r.prefix,gu(t.innerText))),!r.iconName&&De.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function lC(t){const e=Bs(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return De.autoA11y&&(n?e["aria-labelledby"]="".concat(De.replacementClass,"-title-").concat(i||Ra()):(e["aria-hidden"]="true",e.focusable="false")),e}function cC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=oC(t),s=lC(t),o=vu("parseNodeAttributes",{},t);let a=e.styleParser?aC(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:s},...o}}const{styles:uC}=$n;function f1(t){const e=De.autoReplaceSvg==="nest"?Bp(t,{styleParser:!1}):Bp(t);return~e.extra.classes.indexOf(Y_)?Zi("generateLayersText",t,e):Zi("generateSvgReplacementMutation",t,e)}let Kn=new Set;X_.map(t=>{Kn.add("fa-".concat(t))});Object.keys(Pr[_t]).map(Kn.add.bind(Kn));Object.keys(Pr[pn]).map(Kn.add.bind(Kn));Object.keys(Pr[mn]).map(Kn.add.bind(Kn));Kn=[...Kn];function zp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Si)return Promise.resolve();const n=ht.documentElement.classList,i=u=>n.add("".concat(Rp,"-").concat(u)),r=u=>n.remove("".concat(Rp,"-").concat(u)),s=De.autoFetchSvg?Kn:X_.map(u=>"fa-".concat(u)).concat(Object.keys(uC));s.includes("fa")||s.push("fa");const o=[".".concat(Y_,":not([").concat(Fr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(Fr,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Bs(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();const l=Rf.begin("onTree"),c=a.reduce((u,f)=>{try{const d=f1(f);d&&u.push(d)}catch(d){W_||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{c1(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function fC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;f1(t).then(n=>{n&&c1([n],e)})}function dC(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:xu(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:xu(r||{})),t(i,{...n,mask:r})}}const hC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Yn,symbol:i=!1,mask:r=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:p}=t;return bl({type:"icon",...t},()=>(kr("beforeDOMElementCreation",{iconDefinition:t,params:e}),De.autoA11y&&(o?c["aria-labelledby"]="".concat(De.replacementClass,"-title-").concat(a||Ra()):(c["aria-hidden"]="true",c.focusable="false")),Cf({icons:{main:Eu(p),mask:r?Eu(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...Yn,...n},symbol:i,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var pC={mixout(){return{icon:dC(hC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=zp,t.nodeCallback=fC,t}}},provides(t){t.i2svg=function(e){const{node:n=ht,callback:i=()=>{}}=e;return zp(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,p)=>{Promise.all([yu(i,o),c.iconName?yu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[x,g]=E;d([e,Cf({icons:{main:x,mask:g},prefix:o,iconName:i,transform:a,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:o}=e;const a=El(o);a.length>0&&(i.style=a);let l;return Mf(s)&&(l=Zi("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},mC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bl({type:"layer"},()=>{kr("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(De.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},gC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return bl({type:"counter",content:t},()=>(kr("beforeDOMElementCreation",{content:t,params:e}),q2({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(De.cssPrefix,"-layers-counter"),...i]}})))}}}},_C={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Yn,title:i=null,classes:r=[],attributes:s={},styles:o={}}=e;return bl({type:"text",content:t},()=>(kr("beforeDOMElementCreation",{content:t,params:e}),Dp({content:t,transform:{...Yn,...n},title:i,extra:{attributes:s,styles:o,classes:["".concat(De.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let o=null,a=null;if(k_){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return De.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Dp({content:e.innerHTML,width:o,height:a,transform:r,title:i,extra:s,watchable:!0})])}}};const vC=new RegExp('"',"ug"),Hp=[1105920,1112319],Gp={FontAwesome:{normal:"fas",400:"fas"},...Jw,...Zw,...a2},Mu=Object.keys(Gp).reduce((t,e)=>(t[e.toLowerCase()]=Gp[e],t),{}),xC=Object.keys(Mu).reduce((t,e)=>{const n=Mu[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function EC(t){const e=t.replace(vC,""),n=P2(e,0),i=n>=Hp[0]&&n<=Hp[1],r=e.length===2?e[0]===e[1]:!1;return{value:gu(r?e[0]:e),isSecondary:i||r}}function yC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Mu[n]||{})[r]||xC[n]}function Vp(t,e){const n="".concat(c2).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const o=Bs(t.children).filter(d=>d.getAttribute(du)===e)[0],a=qi.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(p2),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=yC(l,u);const{value:E,isSecondary:x}=EC(d),g=c[0].startsWith("FontAwesome");let h=Af(p,E),v=h;if(g){const m=k2(E);m.iconName&&m.prefix&&(h=m.iconName,p=m.prefix)}if(h&&!x&&(!o||o.getAttribute(yf)!==p||o.getAttribute(Sf)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const m=cC(),{extra:_}=m;_.attributes[du]=e,yu(h,p).then(b=>{const T=Cf({...m,icons:{main:b,mask:wf()},prefix:p,iconName:v,extra:_,watchable:!0}),M=ht.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=T.map(N=>Ha(N)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function SC(t){return Promise.all([Vp(t,"::before"),Vp(t,"::after")])}function bC(t){return t.parentNode!==document.head&&!~f2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(du)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wp(t){if(Si)return new Promise((e,n)=>{const i=Bs(t.querySelectorAll("*")).filter(bC).map(SC),r=Rf.begin("searchPseudoElements");u1(),Promise.all(i).then(()=>{r(),bu(),e()}).catch(()=>{r(),bu(),n()})})}var MC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Wp,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ht}=e;De.searchPseudoElements&&Wp(n)}}};let Xp=!1;var TC={mixout(){return{dom:{unwatch(){u1(),Xp=!0}}}},hooks(){return{bootstrap(){kp(vu("mutationObserverCallbacks",{}))},noAuto(){sC()},watch(t){const{observeMutationsRoot:e}=t;Xp?bu():kp(vu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const jp=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var AC={mixout(){return{parse:{transform:t=>jp(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=jp(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Dc={x:0,y:0,width:"100%",height:"100%"};function Yp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function wC(t){return t.tag==="g"?t.children:[t]}var CC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Sl(n.split(" ").map(r=>r.trim())):wf();return i.prefix||(i.prefix=Ki()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,d=M2({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...Dc,fill:"white"}},E=c.children?{children:c.children.map(Yp)}:{},x={tag:"g",attributes:{...d.inner},children:[Yp({tag:c.tag,attributes:{...c.attributes,...d.path},...E})]},g={tag:"g",attributes:{...d.outer},children:[x]},h="mask-".concat(o||Ra()),v="clip-".concat(o||Ra()),m={tag:"mask",attributes:{...Dc,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,g]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:wC(f)},m]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")"),...Dc}}),{children:n,attributes:i}}}},RC={provides(t){let e=!1;qi.matchMedia&&(e=qi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},LC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},PC=[w2,pC,mC,gC,_C,MC,TC,AC,CC,RC,LC];G2(PC,{mixoutsTo:gn});gn.noAuto;gn.config;const IC=gn.library;gn.dom;const Tu=gn.parse;gn.findIconDefinition;gn.toHtml;const NC=gn.icon;gn.layer;gn.text;gn.counter;const DC={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};function $p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$p(Object(n),!0).forEach(function(i){en(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$p(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function OC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function UC(t){var e=OC(t,"string");return typeof e=="symbol"?e:e+""}function Yo(t){"@babel/helpers - typeof";return Yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yo(t)}function en(t,e,n){return e=UC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function FC(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function kC(t,e){if(t==null)return{};var n=FC(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var BC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d1={exports:{}};(function(t){(function(e){var n=function(h,v,m){if(!c(v)||f(v)||d(v)||p(v)||l(v))return v;var _,b=0,T=0;if(u(v))for(_=[],T=v.length;b<T;b++)_.push(n(h,v[b],m));else{_={};for(var M in v)Object.prototype.hasOwnProperty.call(v,M)&&(_[h(M,m)]=n(h,v[M],m))}return _},i=function(h,v){v=v||{};var m=v.separator||"_",_=v.split||/(?=[A-Z])/;return h.split(_).join(m)},r=function(h){return E(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(v,m){return m?m.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},s=function(h){var v=r(h);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(h,v){return i(h,v).toLowerCase()},a=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},u=function(h){return a.call(h)=="[object Array]"},f=function(h){return a.call(h)=="[object Date]"},d=function(h){return a.call(h)=="[object RegExp]"},p=function(h){return a.call(h)=="[object Boolean]"},E=function(h){return h=h-0,h===h},x=function(h,v){var m=v&&"process"in v?v.process:v;return typeof m!="function"?h:function(_,b){return m(_,h,b)}},g={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(h,v){return n(x(r,v),h)},decamelizeKeys:function(h,v){return n(x(o,v),h,v)},pascalizeKeys:function(h,v){return n(x(s,v),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=g:e.humps=g})(BC)})(d1);var zC=d1.exports,HC=["class","style"];function GC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=zC.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function VC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function h1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return h1(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=VC(u);break;case"style":l.style=GC(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=kC(n,HC);return Us(t.tag,fi(fi(fi({},e),{},{class:r.class,style:fi(fi({},r.style),o)},r.attrs),a),i)}var p1=!1;try{p1=!0}catch{}function WC(){if(!p1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Oc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?en({},t,e):{}}function XC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},en(en(en(en(en(en(en(en(en(en(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),en(en(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function qp(t){if(t&&Yo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Tu.icon)return Tu.icon(t);if(t===null)return null;if(Yo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var jC=Os({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=it(function(){return qp(e.icon)}),s=it(function(){return Oc("classes",XC(e))}),o=it(function(){return Oc("transform",typeof e.transform=="string"?Tu.transform(e.transform):e.transform)}),a=it(function(){return Oc("mask",qp(e.mask))}),l=it(function(){return NC(r.value,fi(fi(fi(fi({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});_i(l,function(u){if(!u)return WC("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=it(function(){return l.value?h1(l.value.abstract[0],{},i):null});return function(){return c.value}}});/*!
  * shared v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const $o=typeof window<"u",ir=(t,e=!1)=>e?Symbol.for(t):Symbol(t),YC=(t,e,n)=>$C({l:t,k:e,s:n}),$C=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),wt=t=>typeof t=="number"&&isFinite(t),qC=t=>g1(t)==="[object Date]",Ji=t=>g1(t)==="[object RegExp]",Ml=t=>Ve(t)&&Object.keys(t).length===0,kt=Object.assign;let Kp;const di=()=>Kp||(Kp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zp(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const KC=Object.prototype.hasOwnProperty;function qo(t,e){return KC.call(t,e)}const pt=Array.isArray,ft=t=>typeof t=="function",Re=t=>typeof t=="string",Ze=t=>typeof t=="boolean",rt=t=>t!==null&&typeof t=="object",ZC=t=>rt(t)&&ft(t.then)&&ft(t.catch),m1=Object.prototype.toString,g1=t=>m1.call(t),Ve=t=>{if(!rt(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},JC=t=>t==null?"":pt(t)||Ve(t)&&t.toString===m1?JSON.stringify(t,null,2):String(t);function QC(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function Tl(t){let e=t;return()=>++e}function eR(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const To=t=>!rt(t)||pt(t);function No(t,e){if(To(t)||To(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{To(i[s])||To(r[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]})})}}/*!
  * message-compiler v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function tR(t,e,n){return{line:t,column:e,offset:n}}function Ko(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const nR=/\{([0-9a-zA-Z]+)\}/g;function _1(t,...e){return e.length===1&&iR(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(nR,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const v1=Object.assign,Jp=t=>typeof t=="string",iR=t=>t!==null&&typeof t=="object";function x1(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Pf={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},rR={[Pf.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function sR(t,e,...n){const i=_1(rR[t]||"",...n||[]),r={message:String(i),code:t};return e&&(r.location=e),r}const Be={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},aR={[Be.EXPECTED_TOKEN]:"Expected token: '{0}'",[Be.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Be.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Be.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Be.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Be.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Be.EMPTY_PLACEHOLDER]:"Empty placeholder",[Be.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Be.INVALID_LINKED_FORMAT]:"Invalid linked format",[Be.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Be.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Be.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Be.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Be.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Be.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function zs(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=_1((r||aR)[t]||"",...s||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function oR(t){throw t}const si=" ",lR="\r",Kt=`
`,cR=String.fromCharCode(8232),uR=String.fromCharCode(8233);function fR(t){const e=t;let n=0,i=1,r=1,s=0;const o=M=>e[M]===lR&&e[M+1]===Kt,a=M=>e[M]===Kt,l=M=>e[M]===uR,c=M=>e[M]===cR,u=M=>o(M)||a(M)||l(M)||c(M),f=()=>n,d=()=>i,p=()=>r,E=()=>s,x=M=>o(M)||l(M)||c(M)?Kt:e[M],g=()=>x(n),h=()=>x(n+s);function v(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function m(){return o(n+s)&&s++,s++,e[n+s]}function _(){n=0,i=1,r=1,s=0}function b(M=0){s=M}function T(){const M=n+s;for(;M!==n;)v();s=0}return{index:f,line:d,column:p,peekOffset:E,charAt:x,currentChar:g,currentPeek:h,next:v,peek:m,reset:_,resetPeek:b,skipToPeek:T}}const Ni=void 0,dR=".",Qp="'",hR="tokenizer";function pR(t,e={}){const n=e.location!==!1,i=fR(t),r=()=>i.index(),s=()=>tR(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(C,L,H,...w){const S=c();if(L.column+=H,L.offset+=H,u){const O=n?Ko(S.startLoc,L):null,D=zs(C,O,{domain:hR,args:w});u(D)}}function d(C,L,H){C.endLoc=s(),C.currentType=L;const w={type:L};return n&&(w.loc=Ko(C.startLoc,C.endLoc)),H!=null&&(w.value=H),w}const p=C=>d(C,14);function E(C,L){return C.currentChar()===L?(C.next(),L):(f(Be.EXPECTED_TOKEN,s(),0,L),"")}function x(C){let L="";for(;C.currentPeek()===si||C.currentPeek()===Kt;)L+=C.currentPeek(),C.peek();return L}function g(C){const L=x(C);return C.skipToPeek(),L}function h(C){if(C===Ni)return!1;const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L===95}function v(C){if(C===Ni)return!1;const L=C.charCodeAt(0);return L>=48&&L<=57}function m(C,L){const{currentType:H}=L;if(H!==2)return!1;x(C);const w=h(C.currentPeek());return C.resetPeek(),w}function _(C,L){const{currentType:H}=L;if(H!==2)return!1;x(C);const w=C.currentPeek()==="-"?C.peek():C.currentPeek(),S=v(w);return C.resetPeek(),S}function b(C,L){const{currentType:H}=L;if(H!==2)return!1;x(C);const w=C.currentPeek()===Qp;return C.resetPeek(),w}function T(C,L){const{currentType:H}=L;if(H!==8)return!1;x(C);const w=C.currentPeek()===".";return C.resetPeek(),w}function M(C,L){const{currentType:H}=L;if(H!==9)return!1;x(C);const w=h(C.currentPeek());return C.resetPeek(),w}function N(C,L){const{currentType:H}=L;if(!(H===8||H===12))return!1;x(C);const w=C.currentPeek()===":";return C.resetPeek(),w}function y(C,L){const{currentType:H}=L;if(H!==10)return!1;const w=()=>{const O=C.currentPeek();return O==="{"?h(C.peek()):O==="@"||O==="%"||O==="|"||O===":"||O==="."||O===si||!O?!1:O===Kt?(C.peek(),w()):U(C,!1)},S=w();return C.resetPeek(),S}function R(C){x(C);const L=C.currentPeek()==="|";return C.resetPeek(),L}function V(C){const L=x(C),H=C.currentPeek()==="%"&&C.peek()==="{";return C.resetPeek(),{isModulo:H,hasSpace:L.length>0}}function U(C,L=!0){const H=(S=!1,O="",D=!1)=>{const B=C.currentPeek();return B==="{"?O==="%"?!1:S:B==="@"||!B?O==="%"?!0:S:B==="%"?(C.peek(),H(S,"%",!0)):B==="|"?O==="%"||D?!0:!(O===si||O===Kt):B===si?(C.peek(),H(!0,si,D)):B===Kt?(C.peek(),H(!0,Kt,D)):!0},w=H();return L&&C.resetPeek(),w}function j(C,L){const H=C.currentChar();return H===Ni?Ni:L(H)?(C.next(),H):null}function F(C){const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36}function Y(C){return j(C,F)}function J(C){const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36||L===45}function K(C){return j(C,J)}function se(C){const L=C.charCodeAt(0);return L>=48&&L<=57}function ae(C){return j(C,se)}function fe(C){const L=C.charCodeAt(0);return L>=48&&L<=57||L>=65&&L<=70||L>=97&&L<=102}function G(C){return j(C,fe)}function Q(C){let L="",H="";for(;L=ae(C);)H+=L;return H}function ge(C){g(C);const L=C.currentChar();return L!=="%"&&f(Be.EXPECTED_TOKEN,s(),0,L),C.next(),"%"}function Se(C){let L="";for(;;){const H=C.currentChar();if(H==="{"||H==="}"||H==="@"||H==="|"||!H)break;if(H==="%")if(U(C))L+=H,C.next();else break;else if(H===si||H===Kt)if(U(C))L+=H,C.next();else{if(R(C))break;L+=H,C.next()}else L+=H,C.next()}return L}function Te(C){g(C);let L="",H="";for(;L=K(C);)H+=L;return C.currentChar()===Ni&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),H}function Ce(C){g(C);let L="";return C.currentChar()==="-"?(C.next(),L+=`-${Q(C)}`):L+=Q(C),C.currentChar()===Ni&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),L}function q(C){return C!==Qp&&C!==Kt}function ce(C){g(C),E(C,"'");let L="",H="";for(;L=j(C,q);)L==="\\"?H+=ue(C):H+=L;const w=C.currentChar();return w===Kt||w===Ni?(f(Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),w===Kt&&(C.next(),E(C,"'")),H):(E(C,"'"),H)}function ue(C){const L=C.currentChar();switch(L){case"\\":case"'":return C.next(),`\\${L}`;case"u":return xe(C,L,4);case"U":return xe(C,L,6);default:return f(Be.UNKNOWN_ESCAPE_SEQUENCE,s(),0,L),""}}function xe(C,L,H){E(C,L);let w="";for(let S=0;S<H;S++){const O=G(C);if(!O){f(Be.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${L}${w}${C.currentChar()}`);break}w+=O}return`\\${L}${w}`}function Me(C){return C!=="{"&&C!=="}"&&C!==si&&C!==Kt}function X(C){g(C);let L="",H="";for(;L=j(C,Me);)H+=L;return H}function I(C){let L="",H="";for(;L=Y(C);)H+=L;return H}function A(C){const L=H=>{const w=C.currentChar();return w==="{"||w==="%"||w==="@"||w==="|"||w==="("||w===")"||!w||w===si?H:(H+=w,C.next(),L(H))};return L("")}function z(C){g(C);const L=E(C,"|");return g(C),L}function ee(C,L){let H=null;switch(C.currentChar()){case"{":return L.braceNest>=1&&f(Be.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),C.next(),H=d(L,2,"{"),g(C),L.braceNest++,H;case"}":return L.braceNest>0&&L.currentType===2&&f(Be.EMPTY_PLACEHOLDER,s(),0),C.next(),H=d(L,3,"}"),L.braceNest--,L.braceNest>0&&g(C),L.inLinked&&L.braceNest===0&&(L.inLinked=!1),H;case"@":return L.braceNest>0&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),H=te(C,L)||p(L),L.braceNest=0,H;default:{let S=!0,O=!0,D=!0;if(R(C))return L.braceNest>0&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),H=d(L,1,z(C)),L.braceNest=0,L.inLinked=!1,H;if(L.braceNest>0&&(L.currentType===5||L.currentType===6||L.currentType===7))return f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),L.braceNest=0,ne(C,L);if(S=m(C,L))return H=d(L,5,Te(C)),g(C),H;if(O=_(C,L))return H=d(L,6,Ce(C)),g(C),H;if(D=b(C,L))return H=d(L,7,ce(C)),g(C),H;if(!S&&!O&&!D)return H=d(L,13,X(C)),f(Be.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,H.value),g(C),H;break}}return H}function te(C,L){const{currentType:H}=L;let w=null;const S=C.currentChar();switch((H===8||H===9||H===12||H===10)&&(S===Kt||S===si)&&f(Be.INVALID_LINKED_FORMAT,s(),0),S){case"@":return C.next(),w=d(L,8,"@"),L.inLinked=!0,w;case".":return g(C),C.next(),d(L,9,".");case":":return g(C),C.next(),d(L,10,":");default:return R(C)?(w=d(L,1,z(C)),L.braceNest=0,L.inLinked=!1,w):T(C,L)||N(C,L)?(g(C),te(C,L)):M(C,L)?(g(C),d(L,12,I(C))):y(C,L)?(g(C),S==="{"?ee(C,L)||w:d(L,11,A(C))):(H===8&&f(Be.INVALID_LINKED_FORMAT,s(),0),L.braceNest=0,L.inLinked=!1,ne(C,L))}}function ne(C,L){let H={type:14};if(L.braceNest>0)return ee(C,L)||p(L);if(L.inLinked)return te(C,L)||p(L);switch(C.currentChar()){case"{":return ee(C,L)||p(L);case"}":return f(Be.UNBALANCED_CLOSING_BRACE,s(),0),C.next(),d(L,3,"}");case"@":return te(C,L)||p(L);default:{if(R(C))return H=d(L,1,z(C)),L.braceNest=0,L.inLinked=!1,H;const{isModulo:S,hasSpace:O}=V(C);if(S)return O?d(L,0,Se(C)):d(L,4,ge(C));if(U(C))return d(L,0,Se(C));break}}return H}function he(){const{currentType:C,offset:L,startLoc:H,endLoc:w}=l;return l.lastType=C,l.lastOffset=L,l.lastStartLoc=H,l.lastEndLoc=w,l.offset=r(),l.startLoc=s(),i.currentChar()===Ni?d(l,14):ne(i,l)}return{nextToken:he,currentOffset:r,currentPosition:s,context:c}}const mR="parser",gR=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function _R(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function vR(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function r(m,_,b,T,...M){const N=m.currentPosition();if(N.offset+=T,N.column+=T,n){const y=e?Ko(b,N):null,R=zs(_,y,{domain:mR,args:M});n(R)}}function s(m,_,b,T,...M){const N=m.currentPosition();if(N.offset+=T,N.column+=T,i){const y=e?Ko(b,N):null;i(sR(_,y,M))}}function o(m,_,b){const T={type:m};return e&&(T.start=_,T.end=_,T.loc={start:b,end:b}),T}function a(m,_,b,T){T&&(m.type=T),e&&(m.end=_,m.loc&&(m.loc.end=b))}function l(m,_){const b=m.context(),T=o(3,b.offset,b.startLoc);return T.value=_,a(T,m.currentOffset(),m.currentPosition()),T}function c(m,_){const b=m.context(),{lastOffset:T,lastStartLoc:M}=b,N=o(5,T,M);return N.index=parseInt(_,10),m.nextToken(),a(N,m.currentOffset(),m.currentPosition()),N}function u(m,_,b){const T=m.context(),{lastOffset:M,lastStartLoc:N}=T,y=o(4,M,N);return y.key=_,b===!0&&(y.modulo=!0),m.nextToken(),a(y,m.currentOffset(),m.currentPosition()),y}function f(m,_){const b=m.context(),{lastOffset:T,lastStartLoc:M}=b,N=o(9,T,M);return N.value=_.replace(gR,_R),m.nextToken(),a(N,m.currentOffset(),m.currentPosition()),N}function d(m){const _=m.nextToken(),b=m.context(),{lastOffset:T,lastStartLoc:M}=b,N=o(8,T,M);return _.type!==12?(r(m,Be.UNEXPECTED_EMPTY_LINKED_MODIFIER,b.lastStartLoc,0),N.value="",a(N,T,M),{nextConsumeToken:_,node:N}):(_.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Rn(_)),N.value=_.value||"",a(N,m.currentOffset(),m.currentPosition()),{node:N})}function p(m,_){const b=m.context(),T=o(7,b.offset,b.startLoc);return T.value=_,a(T,m.currentOffset(),m.currentPosition()),T}function E(m){const _=m.context(),b=o(6,_.offset,_.startLoc);let T=m.nextToken();if(T.type===9){const M=d(m);b.modifier=M.node,T=M.nextConsumeToken||m.nextToken()}switch(T.type!==10&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(T)),T=m.nextToken(),T.type===2&&(T=m.nextToken()),T.type){case 11:T.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(T)),b.key=p(m,T.value||"");break;case 5:T.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(T)),b.key=u(m,T.value||"");break;case 6:T.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(T)),b.key=c(m,T.value||"");break;case 7:T.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(T)),b.key=f(m,T.value||"");break;default:{r(m,Be.UNEXPECTED_EMPTY_LINKED_KEY,_.lastStartLoc,0);const M=m.context(),N=o(7,M.offset,M.startLoc);return N.value="",a(N,M.offset,M.startLoc),b.key=N,a(b,M.offset,M.startLoc),{nextConsumeToken:T,node:b}}}return a(b,m.currentOffset(),m.currentPosition()),{node:b}}function x(m){const _=m.context(),b=_.currentType===1?m.currentOffset():_.offset,T=_.currentType===1?_.endLoc:_.startLoc,M=o(2,b,T);M.items=[];let N=null,y=null;do{const U=N||m.nextToken();switch(N=null,U.type){case 0:U.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(U)),M.items.push(l(m,U.value||""));break;case 6:U.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(U)),M.items.push(c(m,U.value||""));break;case 4:y=!0;break;case 5:U.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(U)),M.items.push(u(m,U.value||"",!!y)),y&&(s(m,Pf.USE_MODULO_SYNTAX,_.lastStartLoc,0,Rn(U)),y=null);break;case 7:U.value==null&&r(m,Be.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Rn(U)),M.items.push(f(m,U.value||""));break;case 8:{const j=E(m);M.items.push(j.node),N=j.nextConsumeToken||null;break}}}while(_.currentType!==14&&_.currentType!==1);const R=_.currentType===1?_.lastOffset:m.currentOffset(),V=_.currentType===1?_.lastEndLoc:m.currentPosition();return a(M,R,V),M}function g(m,_,b,T){const M=m.context();let N=T.items.length===0;const y=o(1,_,b);y.cases=[],y.cases.push(T);do{const R=x(m);N||(N=R.items.length===0),y.cases.push(R)}while(M.currentType!==14);return N&&r(m,Be.MUST_HAVE_MESSAGES_IN_PLURAL,b,0),a(y,m.currentOffset(),m.currentPosition()),y}function h(m){const _=m.context(),{offset:b,startLoc:T}=_,M=x(m);return _.currentType===14?M:g(m,b,T,M)}function v(m){const _=pR(m,v1({},t)),b=_.context(),T=o(0,b.offset,b.startLoc);return e&&T.loc&&(T.loc.source=m),T.body=h(_),t.onCacheKey&&(T.cacheKey=t.onCacheKey(m)),b.currentType!==14&&r(_,Be.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,m[b.offset]||""),a(T,_.currentOffset(),_.currentPosition()),T}return{parse:v}}function Rn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function xR(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function em(t,e){for(let n=0;n<t.length;n++)If(t[n],e)}function If(t,e){switch(t.type){case 1:em(t.cases,e),e.helper("plural");break;case 2:em(t.items,e);break;case 6:{If(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function ER(t,e={}){const n=xR(t);n.helper("normalize"),t.body&&If(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function yR(t){const e=t.body;return e.type===2?tm(e):e.cases.forEach(n=>tm(n)),t}function tm(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=x1(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const SR="minifier";function cs(t){switch(t.t=t.type,t.type){case 0:{const e=t;cs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)cs(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)cs(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;cs(e.key),e.k=e.key,delete e.key,e.modifier&&(cs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw zs(Be.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:SR,args:[t.type]})}delete t.type}const bR="parser";function MR(t,e){const{sourceMap:n,filename:i,breakLineCode:r,needIndent:s}=e,o=e.location!==!1,a={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const l=()=>a;function c(g,h){a.code+=g}function u(g,h=!0){const v=h?r:"";c(s?v+"  ".repeat(g):v)}function f(g=!0){const h=++a.indentLevel;g&&u(h)}function d(g=!0){const h=--a.indentLevel;g&&u(h)}function p(){u(a.indentLevel)}return{context:l,push:c,indent:f,deindent:d,newline:p,helper:g=>`_${g}`,needIndent:()=>a.needIndent}}function TR(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Is(t,e.key),e.modifier?(t.push(", "),Is(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function AR(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(Is(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function wR(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Is(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function CR(t,e){e.body?Is(t,e.body):t.push("null")}function Is(t,e){const{helper:n}=t;switch(e.type){case 0:CR(t,e);break;case 1:wR(t,e);break;case 2:AR(t,e);break;case 6:TR(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw zs(Be.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:bR,args:[e.type]})}}const RR=(t,e={})=>{const n=Jp(e.mode)?e.mode:"normal",i=Jp(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],l=MR(t,{mode:n,filename:i,sourceMap:r,breakLineCode:s,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),a.length>0&&(l.push(`const { ${x1(a.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Is(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function LR(t,e={}){const n=v1({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=vR(n).parse(t);return i?(s&&yR(a),r&&cs(a),{ast:a,code:""}):(ER(a,n),RR(a,n))}/*!
  * core-base v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function PR(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(di().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(di().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(di().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const rr=[];rr[0]={w:[0],i:[3,0],"[":[4],o:[7]};rr[1]={w:[1],".":[2],"[":[4],o:[7]};rr[2]={w:[2],i:[3,0],0:[3,0]};rr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};rr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};rr[5]={"'":[4,0],o:8,l:[5,0]};rr[6]={'"':[4,0],o:8,l:[6,0]};const IR=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function NR(t){return IR.test(t)}function DR(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function OR(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function UR(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:NR(e)?DR(e):"*"+e}function FR(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=UR(o),o===!1))return!1;d[1]()}};function p(){const E=t[n+1];if(i===5&&E==="'"||i===6&&E==='"')return n++,a="\\"+E,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=OR(s),f=rr[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const nm=new Map;function kR(t,e){return rt(t)?t[e]:null}function BR(t,e){if(!rt(t))return null;let n=nm.get(e);if(n||(n=FR(e),n&&nm.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=r[n[s]];if(o===void 0||ft(r))return null;r=o,s++}return r}const zR=t=>t,HR=t=>"",GR="text",VR=t=>t.length===0?"":QC(t),WR=JC;function im(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function XR(t){const e=wt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(wt(t.named.count)||wt(t.named.n))?wt(t.named.count)?t.named.count:wt(t.named.n)?t.named.n:e:e}function jR(t,e){e.count||(e.count=t),e.n||(e.n=t)}function YR(t={}){const e=t.locale,n=XR(t),i=rt(t.pluralRules)&&Re(e)&&ft(t.pluralRules[e])?t.pluralRules[e]:im,r=rt(t.pluralRules)&&Re(e)&&ft(t.pluralRules[e])?im:void 0,s=h=>h[i(n,h.length,r)],o=t.list||[],a=h=>o[h],l=t.named||{};wt(t.pluralIndex)&&jR(n,l);const c=h=>l[h];function u(h){const v=ft(t.messages)?t.messages(h):rt(t.messages)?t.messages[h]:!1;return v||(t.parent?t.parent.message(h):HR)}const f=h=>t.modifiers?t.modifiers[h]:zR,d=Ve(t.processor)&&ft(t.processor.normalize)?t.processor.normalize:VR,p=Ve(t.processor)&&ft(t.processor.interpolate)?t.processor.interpolate:WR,E=Ve(t.processor)&&Re(t.processor.type)?t.processor.type:GR,g={list:a,named:c,plural:s,linked:(h,...v)=>{const[m,_]=v;let b="text",T="";v.length===1?rt(m)?(T=m.modifier||T,b=m.type||b):Re(m)&&(T=m||T):v.length===2&&(Re(m)&&(T=m||T),Re(_)&&(b=_||b));const M=u(h)(g),N=b==="vnode"&&pt(M)&&T?M[0]:M;return T?f(T)(N,b):N},message:u,type:E,interpolate:p,normalize:d,values:kt({},o,l)};return g}let La=null;function $R(t){La=t}function qR(t,e,n){La&&La.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const KR=ZR("function:translate");function ZR(t){return e=>La&&La.emit(t,e)}const E1=Pf.__EXTEND_POINT__,mr=Tl(E1),JR={NOT_FOUND_KEY:E1,FALLBACK_TO_TRANSLATE:mr(),CANNOT_FORMAT_NUMBER:mr(),FALLBACK_TO_NUMBER_FORMAT:mr(),CANNOT_FORMAT_DATE:mr(),FALLBACK_TO_DATE_FORMAT:mr(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:mr(),__EXTEND_POINT__:mr()},y1=Be.__EXTEND_POINT__,gr=Tl(y1),Nn={INVALID_ARGUMENT:y1,INVALID_DATE_ARGUMENT:gr(),INVALID_ISO_DATE_ARGUMENT:gr(),NOT_SUPPORT_NON_STRING_MESSAGE:gr(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:gr(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:gr(),NOT_SUPPORT_LOCALE_TYPE:gr(),__EXTEND_POINT__:gr()};function qn(t){return zs(t,null,void 0)}function Nf(t,e){return e.locale!=null?rm(e.locale):rm(t.locale)}let Uc;function rm(t){if(Re(t))return t;if(ft(t)){if(t.resolvedOnce&&Uc!=null)return Uc;if(t.constructor.name==="Function"){const e=t();if(ZC(e))throw qn(Nn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Uc=e}else throw qn(Nn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qn(Nn.NOT_SUPPORT_LOCALE_TYPE)}function QR(t,e,n){return[...new Set([n,...pt(e)?e:rt(e)?Object.keys(e):Re(e)?[e]:[n]])]}function S1(t,e,n){const i=Re(n)?n:Ns,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;pt(o);)o=sm(s,o,e);const a=pt(e)||!Ve(e)?e:e.default?e.default:null;o=Re(a)?[a]:a,pt(o)&&sm(s,o,!1),r.__localeChainCache.set(i,s)}return s}function sm(t,e,n){let i=!0;for(let r=0;r<e.length&&Ze(i);r++){const s=e[r];Re(s)&&(i=eL(t,e[r],n))}return i}function eL(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=tL(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function tL(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(pt(n)||Ve(n))&&n[r]&&(i=n[r])}return i}const nL="9.14.0",Al=-1,Ns="en-US",am="",om=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function iL(){return{upper:(t,e)=>e==="text"&&Re(t)?t.toUpperCase():e==="vnode"&&rt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Re(t)?t.toLowerCase():e==="vnode"&&rt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Re(t)?om(t):e==="vnode"&&rt(t)&&"__v_isVNode"in t?om(t.children):t}}let b1;function lm(t){b1=t}let M1;function rL(t){M1=t}let T1;function sL(t){T1=t}let A1=null;const aL=t=>{A1=t},oL=()=>A1;let w1=null;const cm=t=>{w1=t},lL=()=>w1;let um=0;function cL(t={}){const e=ft(t.onWarn)?t.onWarn:eR,n=Re(t.version)?t.version:nL,i=Re(t.locale)||ft(t.locale)?t.locale:Ns,r=ft(i)?Ns:i,s=pt(t.fallbackLocale)||Ve(t.fallbackLocale)||Re(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Ve(t.messages)?t.messages:{[r]:{}},a=Ve(t.datetimeFormats)?t.datetimeFormats:{[r]:{}},l=Ve(t.numberFormats)?t.numberFormats:{[r]:{}},c=kt({},t.modifiers||{},iL()),u=t.pluralRules||{},f=ft(t.missing)?t.missing:null,d=Ze(t.missingWarn)||Ji(t.missingWarn)?t.missingWarn:!0,p=Ze(t.fallbackWarn)||Ji(t.fallbackWarn)?t.fallbackWarn:!0,E=!!t.fallbackFormat,x=!!t.unresolving,g=ft(t.postTranslation)?t.postTranslation:null,h=Ve(t.processor)?t.processor:null,v=Ze(t.warnHtmlMessage)?t.warnHtmlMessage:!0,m=!!t.escapeParameter,_=ft(t.messageCompiler)?t.messageCompiler:b1,b=ft(t.messageResolver)?t.messageResolver:M1||kR,T=ft(t.localeFallbacker)?t.localeFallbacker:T1||QR,M=rt(t.fallbackContext)?t.fallbackContext:void 0,N=t,y=rt(N.__datetimeFormatters)?N.__datetimeFormatters:new Map,R=rt(N.__numberFormatters)?N.__numberFormatters:new Map,V=rt(N.__meta)?N.__meta:{};um++;const U={version:n,cid:um,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:E,unresolving:x,postTranslation:g,processor:h,warnHtmlMessage:v,escapeParameter:m,messageCompiler:_,messageResolver:b,localeFallbacker:T,fallbackContext:M,onWarn:e,__meta:V};return U.datetimeFormats=a,U.numberFormats=l,U.__datetimeFormatters=y,U.__numberFormatters=R,__INTLIFY_PROD_DEVTOOLS__&&qR(U,n,V),U}function Df(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Re(a)?a:e}else return e}function Zs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function uL(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function fL(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(uL(t,e[i]))return!0;return!1}function Fc(t){return n=>dL(n,t)}function dL(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const i=n,r=i.c||i.cases;return t.plural(r.reduce((s,o)=>[...s,fm(t,o)],[]))}else return fm(t,n)}function fm(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const i=(e.i||e.items).reduce((r,s)=>[...r,Au(t,s)],[]);return t.normalize(i)}}function Au(t,e){const n=e.t||e.type;switch(n){case 3:{const i=e;return i.v||i.value}case 9:{const i=e;return i.v||i.value}case 4:{const i=e;return t.interpolate(t.named(i.k||i.key))}case 5:{const i=e;return t.interpolate(t.list(i.i!=null?i.i:i.index))}case 6:{const i=e,r=i.m||i.modifier;return t.linked(Au(t,i.k||i.key),r?Au(t,r):void 0,t.type)}case 7:{const i=e;return i.v||i.value}case 8:{const i=e;return i.v||i.value}default:throw new Error(`unhandled node type on format message part: ${n}`)}}const C1=t=>t;let ds=Object.create(null);const Ds=t=>rt(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function R1(t,e={}){let n=!1;const i=e.onError||oR;return e.onError=r=>{n=!0,i(r)},{...LR(t,e),detectError:n}}const hL=(t,e)=>{if(!Re(t))throw qn(Nn.NOT_SUPPORT_NON_STRING_MESSAGE);{Ze(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||C1)(t),r=ds[i];if(r)return r;const{code:s,detectError:o}=R1(t,e),a=new Function(`return ${s}`)();return o?a:ds[i]=a}};function pL(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Re(t)){Ze(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||C1)(t),r=ds[i];if(r)return r;const{ast:s,detectError:o}=R1(t,{...e,location:!1,jit:!0}),a=Fc(s);return o?a:ds[i]=a}else{const n=t.cacheKey;if(n){const i=ds[n];return i||(ds[n]=Fc(t))}else return Fc(t)}}const dm=()=>"",Sn=t=>ft(t);function hm(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=wu(...e),u=Ze(c.missingWarn)?c.missingWarn:t.missingWarn,f=Ze(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=Ze(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,E=Re(c.default)||Ze(c.default)?Ze(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",x=n||E!=="",g=Nf(t,c);d&&mL(c);let[h,v,m]=p?[l,g,a[g]||{}]:L1(t,l,g,o,f,u),_=h,b=l;if(!p&&!(Re(_)||Ds(_)||Sn(_))&&x&&(_=E,b=_),!p&&(!(Re(_)||Ds(_)||Sn(_))||!Re(v)))return r?Al:l;let T=!1;const M=()=>{T=!0},N=Sn(_)?_:P1(t,l,v,_,b,M);if(T)return _;const y=vL(t,v,m,c),R=YR(y),V=gL(t,N,R),U=i?i(V,l):V;if(__INTLIFY_PROD_DEVTOOLS__){const j={timestamp:Date.now(),key:Re(l)?l:Sn(_)?_.key:"",locale:v||(Sn(_)?_.locale:""),format:Re(_)?_:Sn(_)?_.source:"",message:U};j.meta=kt({},t.__meta,oL()||{}),KR(j)}return U}function mL(t){pt(t.list)?t.list=t.list.map(e=>Re(e)?Zp(e):e):rt(t.named)&&Object.keys(t.named).forEach(e=>{Re(t.named[e])&&(t.named[e]=Zp(t.named[e]))})}function L1(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f={},d,p=null;const E="translate";for(let x=0;x<u.length&&(d=u[x],f=o[d]||{},(p=l(f,e))===null&&(p=f[e]),!(Re(p)||Ds(p)||Sn(p)));x++)if(!fL(d,u)){const g=Df(t,e,d,s,E);g!==e&&(p=g)}return[p,d,f]}function P1(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Sn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,_L(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function gL(t,e,n){return e(n)}function wu(...t){const[e,n,i]=t,r={};if(!Re(e)&&!wt(e)&&!Sn(e)&&!Ds(e))throw qn(Nn.INVALID_ARGUMENT);const s=wt(e)?String(e):(Sn(e),e);return wt(n)?r.plural=n:Re(n)?r.default=n:Ve(n)&&!Ml(n)?r.named=n:pt(n)&&(r.list=n),wt(i)?r.plural=i:Re(i)?r.default=i:Ve(i)&&kt(r,i),[s,r]}function _L(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>YC(e,n,o)}}function vL(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:p=>{let E=o(n,p);if(E==null&&u){const[,,x]=L1(u,p,e,a,l,c);E=o(x,p)}if(Re(E)||Ds(E)){let x=!1;const h=P1(t,p,e,E,p,()=>{x=!0});return x?dm:h}else return Sn(E)?E:dm}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),wt(i.plural)&&(d.pluralIndex=i.plural),d}function pm(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Cu(...e),d=Ze(u.missingWarn)?u.missingWarn:t.missingWarn;Ze(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,E=Nf(t,u),x=o(t,r,E);if(!Re(l)||l==="")return new Intl.DateTimeFormat(E,f).format(c);let g={},h,v=null;const m="datetime format";for(let T=0;T<x.length&&(h=x[T],g=n[h]||{},v=g[l],!Ve(v));T++)Df(t,l,h,d,m);if(!Ve(v)||!Re(h))return i?Al:l;let _=`${h}__${l}`;Ml(f)||(_=`${_}__${JSON.stringify(f)}`);let b=a.get(_);return b||(b=new Intl.DateTimeFormat(h,kt({},v,f)),a.set(_,b)),p?b.formatToParts(c):b.format(c)}const I1=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Cu(...t){const[e,n,i,r]=t,s={};let o={},a;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qn(Nn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw qn(Nn.INVALID_ISO_DATE_ARGUMENT)}}else if(qC(e)){if(isNaN(e.getTime()))throw qn(Nn.INVALID_DATE_ARGUMENT);a=e}else if(wt(e))a=e;else throw qn(Nn.INVALID_ARGUMENT);return Re(n)?s.key=n:Ve(n)&&Object.keys(n).forEach(l=>{I1.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:Ve(i)&&(o=i),Ve(r)&&(o=r),[s.key||"",a,s,o]}function mm(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function gm(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Ru(...e),d=Ze(u.missingWarn)?u.missingWarn:t.missingWarn;Ze(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,E=Nf(t,u),x=o(t,r,E);if(!Re(l)||l==="")return new Intl.NumberFormat(E,f).format(c);let g={},h,v=null;const m="number format";for(let T=0;T<x.length&&(h=x[T],g=n[h]||{},v=g[l],!Ve(v));T++)Df(t,l,h,d,m);if(!Ve(v)||!Re(h))return i?Al:l;let _=`${h}__${l}`;Ml(f)||(_=`${_}__${JSON.stringify(f)}`);let b=a.get(_);return b||(b=new Intl.NumberFormat(h,kt({},v,f)),a.set(_,b)),p?b.formatToParts(c):b.format(c)}const N1=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ru(...t){const[e,n,i,r]=t,s={};let o={};if(!wt(e))throw qn(Nn.INVALID_ARGUMENT);const a=e;return Re(n)?s.key=n:Ve(n)&&Object.keys(n).forEach(l=>{N1.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:Ve(i)&&(o=i),Ve(r)&&(o=r),[s.key||"",a,s,o]}function _m(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}PR();/*!
  * vue-i18n v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const xL="9.14.0";function EL(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(di().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(di().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(di().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(di().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(di().__INTLIFY_PROD_DEVTOOLS__=!1)}const D1=JR.__EXTEND_POINT__,ai=Tl(D1);ai(),ai(),ai(),ai(),ai(),ai(),ai(),ai(),ai();const O1=Nn.__EXTEND_POINT__,Qt=Tl(O1),Ct={UNEXPECTED_RETURN_TYPE:O1,INVALID_ARGUMENT:Qt(),MUST_BE_CALL_SETUP_TOP:Qt(),NOT_INSTALLED:Qt(),NOT_AVAILABLE_IN_LEGACY_MODE:Qt(),REQUIRED_VALUE:Qt(),INVALID_VALUE:Qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Qt(),NOT_INSTALLED_WITH_PROVIDE:Qt(),UNEXPECTED_ERROR:Qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Qt(),BRIDGE_SUPPORT_VUE_2_ONLY:Qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Qt(),__EXTEND_POINT__:Qt()};function Dt(t,...e){return zs(t,null,void 0)}const Lu=ir("__translateVNode"),Pu=ir("__datetimeParts"),Iu=ir("__numberParts"),U1=ir("__setPluralRules"),F1=ir("__injectWithOption"),Nu=ir("__dispose");function Pa(t){if(!rt(t))return t;for(const e in t)if(qo(t,e))if(!e.includes("."))rt(t[e])&&Pa(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]in r||(r[n[o]]={}),!rt(r[n[o]])){s=!0;break}r=r[n[o]]}s||(r[n[i]]=t[e],delete t[e]),rt(r[n[i]])&&Pa(r[n[i]])}return t}function wl(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Ve(n)?n:pt(i)?{}:{[t]:{}};if(pt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},No(c,o[l])):No(c,o)}else Re(a)&&No(JSON.parse(a),o)}),r==null&&s)for(const a in o)qo(o,a)&&Pa(o[a]);return o}function k1(t){return t.type}function B1(t,e,n){let i=rt(e.messages)?e.messages:{};"__i18nGlobal"in n&&(i=wl(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(rt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(rt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function vm(t){return vt(Na,null,t,0)}const xm="__INTLIFY_META__",Em=()=>[],yL=()=>!1;let ym=0;function Sm(t){return(e,n,i,r)=>t(n,i,bs()||void 0,r)}const SL=()=>{const t=bs();let e=null;return t&&(e=k1(t)[xm])?{[xm]:e}:null};function Of(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,s=t.flatJson,o=$o?xr:$u,a=!!t.translateExistCompatible;let l=Ze(t.inheritLocale)?t.inheritLocale:!0;const c=o(n&&l?n.locale.value:Re(t.locale)?t.locale:Ns),u=o(n&&l?n.fallbackLocale.value:Re(t.fallbackLocale)||pt(t.fallbackLocale)||Ve(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=o(wl(c.value,t)),d=o(Ve(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),p=o(Ve(t.numberFormats)?t.numberFormats:{[c.value]:{}});let E=n?n.missingWarn:Ze(t.missingWarn)||Ji(t.missingWarn)?t.missingWarn:!0,x=n?n.fallbackWarn:Ze(t.fallbackWarn)||Ji(t.fallbackWarn)?t.fallbackWarn:!0,g=n?n.fallbackRoot:Ze(t.fallbackRoot)?t.fallbackRoot:!0,h=!!t.fallbackFormat,v=ft(t.missing)?t.missing:null,m=ft(t.missing)?Sm(t.missing):null,_=ft(t.postTranslation)?t.postTranslation:null,b=n?n.warnHtmlMessage:Ze(t.warnHtmlMessage)?t.warnHtmlMessage:!0,T=!!t.escapeParameter;const M=n?n.modifiers:Ve(t.modifiers)?t.modifiers:{};let N=t.pluralRules||n&&n.pluralRules,y;y=(()=>{r&&cm(null);const D={version:xL,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:M,pluralRules:N,missing:m===null?void 0:m,missingWarn:E,fallbackWarn:x,fallbackFormat:h,unresolving:!0,postTranslation:_===null?void 0:_,warnHtmlMessage:b,escapeParameter:T,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};D.datetimeFormats=d.value,D.numberFormats=p.value,D.__datetimeFormatters=Ve(y)?y.__datetimeFormatters:void 0,D.__numberFormatters=Ve(y)?y.__numberFormatters:void 0;const B=cL(D);return r&&cm(B),B})(),Zs(y,c.value,u.value);function V(){return[c.value,u.value,f.value,d.value,p.value]}const U=it({get:()=>c.value,set:D=>{c.value=D,y.locale=c.value}}),j=it({get:()=>u.value,set:D=>{u.value=D,y.fallbackLocale=u.value,Zs(y,c.value,D)}}),F=it(()=>f.value),Y=it(()=>d.value),J=it(()=>p.value);function K(){return ft(_)?_:null}function se(D){_=D,y.postTranslation=D}function ae(){return v}function fe(D){D!==null&&(m=Sm(D)),v=D,y.missing=m}const G=(D,B,ie,me,_e,Ee)=>{V();let k;try{__INTLIFY_PROD_DEVTOOLS__,r||(y.fallbackContext=n?lL():void 0),k=D(y)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(y.fallbackContext=void 0)}if(ie!=="translate exists"&&wt(k)&&k===Al||ie==="translate exists"&&!k){const[ve,pe]=B();return n&&g?me(n):_e(ve)}else{if(Ee(k))return k;throw Dt(Ct.UNEXPECTED_RETURN_TYPE)}};function Q(...D){return G(B=>Reflect.apply(hm,null,[B,...D]),()=>wu(...D),"translate",B=>Reflect.apply(B.t,B,[...D]),B=>B,B=>Re(B))}function ge(...D){const[B,ie,me]=D;if(me&&!rt(me))throw Dt(Ct.INVALID_ARGUMENT);return Q(B,ie,kt({resolvedMessage:!0},me||{}))}function Se(...D){return G(B=>Reflect.apply(pm,null,[B,...D]),()=>Cu(...D),"datetime format",B=>Reflect.apply(B.d,B,[...D]),()=>am,B=>Re(B))}function Te(...D){return G(B=>Reflect.apply(gm,null,[B,...D]),()=>Ru(...D),"number format",B=>Reflect.apply(B.n,B,[...D]),()=>am,B=>Re(B))}function Ce(D){return D.map(B=>Re(B)||wt(B)||Ze(B)?vm(String(B)):B)}const ce={normalize:Ce,interpolate:D=>D,type:"vnode"};function ue(...D){return G(B=>{let ie;const me=B;try{me.processor=ce,ie=Reflect.apply(hm,null,[me,...D])}finally{me.processor=null}return ie},()=>wu(...D),"translate",B=>B[Lu](...D),B=>[vm(B)],B=>pt(B))}function xe(...D){return G(B=>Reflect.apply(gm,null,[B,...D]),()=>Ru(...D),"number format",B=>B[Iu](...D),Em,B=>Re(B)||pt(B))}function Me(...D){return G(B=>Reflect.apply(pm,null,[B,...D]),()=>Cu(...D),"datetime format",B=>B[Pu](...D),Em,B=>Re(B)||pt(B))}function X(D){N=D,y.pluralRules=N}function I(D,B){return G(()=>{if(!D)return!1;const ie=Re(B)?B:c.value,me=ee(ie),_e=y.messageResolver(me,D);return a?_e!=null:Ds(_e)||Sn(_e)||Re(_e)},()=>[D],"translate exists",ie=>Reflect.apply(ie.te,ie,[D,B]),yL,ie=>Ze(ie))}function A(D){let B=null;const ie=S1(y,u.value,c.value);for(let me=0;me<ie.length;me++){const _e=f.value[ie[me]]||{},Ee=y.messageResolver(_e,D);if(Ee!=null){B=Ee;break}}return B}function z(D){const B=A(D);return B??(n?n.tm(D)||{}:{})}function ee(D){return f.value[D]||{}}function te(D,B){if(s){const ie={[D]:B};for(const me in ie)qo(ie,me)&&Pa(ie[me]);B=ie[D]}f.value[D]=B,y.messages=f.value}function ne(D,B){f.value[D]=f.value[D]||{};const ie={[D]:B};if(s)for(const me in ie)qo(ie,me)&&Pa(ie[me]);B=ie[D],No(B,f.value[D]),y.messages=f.value}function he(D){return d.value[D]||{}}function C(D,B){d.value[D]=B,y.datetimeFormats=d.value,mm(y,D,B)}function L(D,B){d.value[D]=kt(d.value[D]||{},B),y.datetimeFormats=d.value,mm(y,D,B)}function H(D){return p.value[D]||{}}function w(D,B){p.value[D]=B,y.numberFormats=p.value,_m(y,D,B)}function S(D,B){p.value[D]=kt(p.value[D]||{},B),y.numberFormats=p.value,_m(y,D,B)}ym++,n&&$o&&(_i(n.locale,D=>{l&&(c.value=D,y.locale=D,Zs(y,c.value,u.value))}),_i(n.fallbackLocale,D=>{l&&(u.value=D,y.fallbackLocale=D,Zs(y,c.value,u.value))}));const O={id:ym,locale:U,fallbackLocale:j,get inheritLocale(){return l},set inheritLocale(D){l=D,D&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,Zs(y,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:F,get modifiers(){return M},get pluralRules(){return N||{}},get isGlobal(){return r},get missingWarn(){return E},set missingWarn(D){E=D,y.missingWarn=E},get fallbackWarn(){return x},set fallbackWarn(D){x=D,y.fallbackWarn=x},get fallbackRoot(){return g},set fallbackRoot(D){g=D},get fallbackFormat(){return h},set fallbackFormat(D){h=D,y.fallbackFormat=h},get warnHtmlMessage(){return b},set warnHtmlMessage(D){b=D,y.warnHtmlMessage=D},get escapeParameter(){return T},set escapeParameter(D){T=D,y.escapeParameter=D},t:Q,getLocaleMessage:ee,setLocaleMessage:te,mergeLocaleMessage:ne,getPostTranslationHandler:K,setPostTranslationHandler:se,getMissingHandler:ae,setMissingHandler:fe,[U1]:X};return O.datetimeFormats=Y,O.numberFormats=J,O.rt=ge,O.te=I,O.tm=z,O.d=Se,O.n=Te,O.getDateTimeFormat=he,O.setDateTimeFormat=C,O.mergeDateTimeFormat=L,O.getNumberFormat=H,O.setNumberFormat=w,O.mergeNumberFormat=S,O[F1]=i,O[Lu]=ue,O[Pu]=Me,O[Iu]=xe,O}function bL(t){const e=Re(t.locale)?t.locale:Ns,n=Re(t.fallbackLocale)||pt(t.fallbackLocale)||Ve(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ft(t.missing)?t.missing:void 0,r=Ze(t.silentTranslationWarn)||Ji(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=Ze(t.silentFallbackWarn)||Ji(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=Ze(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Ve(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=ft(t.postTranslation)?t.postTranslation:void 0,f=Re(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=Ze(t.sync)?t.sync:!0;let E=t.messages;if(Ve(t.sharedMessages)){const T=t.sharedMessages;E=Object.keys(T).reduce((N,y)=>{const R=N[y]||(N[y]={});return kt(R,T[y]),N},E||{})}const{__i18n:x,__root:g,__injectWithOption:h}=t,v=t.datetimeFormats,m=t.numberFormats,_=t.flatJson,b=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:E,flatJson:_,datetimeFormats:v,numberFormats:m,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,translateExistCompatible:b,__i18n:x,__root:g,__injectWithOption:h}}function Du(t={},e){{const n=Of(bL(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return Ze(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=Ze(s)?!s:s},get silentFallbackWarn(){return Ze(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=Ze(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[o,a,l]=s,c={};let u=null,f=null;if(!Re(o))throw Dt(Ct.INVALID_ARGUMENT);const d=o;return Re(a)?c.locale=a:pt(a)?u=a:Ve(a)&&(f=a),pt(l)?u=l:Ve(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[o,a,l]=s,c={plural:1};let u=null,f=null;if(!Re(o))throw Dt(Ct.INVALID_ARGUMENT);const d=o;return Re(a)?c.locale=a:wt(a)?c.plural=a:pt(a)?u=a:Ve(a)&&(f=a),Re(l)?c.locale=l:pt(l)?u=l:Ve(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},te(s,o){return n.te(s,o)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,o){n.setLocaleMessage(s,o)},mergeLocaleMessage(s,o){n.mergeLocaleMessage(s,o)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,o){n.setDateTimeFormat(s,o)},mergeDateTimeFormat(s,o){n.mergeDateTimeFormat(s,o)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,o){n.setNumberFormat(s,o)},mergeNumberFormat(s,o){n.mergeNumberFormat(s,o)},getChoiceIndex(s,o){return-1}};return r.__extender=i,r}}const Uf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function ML({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===En?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},{})}function z1(t){return En}const TL=Os({name:"i18n-t",props:kt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>wt(t)||!isNaN(t)}},Uf),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Ff({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Re(t.plural)?+t.plural:t.plural);const a=ML(e,s),l=r[Lu](t.keypath,a,o),c=kt({},i),u=Re(t.tag)||rt(t.tag)?t.tag:z1();return Us(u,c,l)}}}),bm=TL;function AL(t){return pt(t)&&!Re(t[0])}function H1(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a={};t.locale&&(o.locale=t.locale),Re(t.format)?o.key=t.format:rt(t.format)&&(Re(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,p)=>n.includes(p)?kt({},d,{[p]:t.format[p]}):d,{}));const l=i(t.value,o,a);let c=[o.key];pt(l)?c=l.map((d,p)=>{const E=r[d.type],x=E?E({[d.type]:d.value,index:p,parts:l}):[d.value];return AL(x)&&(x[0].key=`${d.type}-${p}`),x}):Re(l)&&(c=[l]);const u=kt({},s),f=Re(t.tag)||rt(t.tag)?t.tag:z1();return Us(f,u,c)}}const wL=Os({name:"i18n-n",props:kt({value:{type:Number,required:!0},format:{type:[String,Object]}},Uf),setup(t,e){const n=t.i18n||Ff({useScope:t.scope,__useComponent:!0});return H1(t,e,N1,(...i)=>n[Iu](...i))}}),Mm=wL,CL=Os({name:"i18n-d",props:kt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Uf),setup(t,e){const n=t.i18n||Ff({useScope:t.scope,__useComponent:!0});return H1(t,e,I1,(...i)=>n[Pu](...i))}}),Tm=CL;function RL(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function LL(t){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw Dt(Ct.UNEXPECTED_ERROR);const u=RL(t,a.$),f=Am(c);return[Reflect.apply(u.t,u,[...wm(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);$o&&t.global===c&&(o.__i18nWatcher=_i(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{$o&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Am(a);o.textContent=Reflect.apply(l.t,l,[...wm(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Am(t){if(Re(t))return{path:t};if(Ve(t)){if(!("path"in t))throw Dt(Ct.REQUIRED_VALUE,"path");return t}else throw Dt(Ct.INVALID_VALUE)}function wm(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Re(n)&&(o.locale=n),wt(r)&&(o.plural=r),wt(s)&&(o.plural=s),[e,a,o]}function PL(t,e,...n){const i=Ve(n[0])?n[0]:{},r=!!i.useI18nComponentName;(Ze(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":bm.name,"I18nT"].forEach(o=>t.component(o,bm)),[Mm.name,"I18nN"].forEach(o=>t.component(o,Mm)),[Tm.name,"I18nD"].forEach(o=>t.component(o,Tm))),t.directive("t",LL(e))}function IL(t,e,n){return{beforeCreate(){const i=bs();if(!i)throw Dt(Ct.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Cm(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Du(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Cm(t,r);else{this.$i18n=Du({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&B1(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=bs();if(!i)throw Dt(Ct.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Cm(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[U1](e.pluralizationRules||t.pluralizationRules);const n=wl(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const NL=ir("global-vue-i18n");function DL(t={},e){const n=__VUE_I18N_LEGACY_API__&&Ze(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=Ze(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[o,a]=OL(t,n),l=ir("");function c(d){return s.get(d)||null}function u(d,p){s.set(d,p)}function f(d){s.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(p,...E){if(p.__VUE_I18N_SYMBOL__=l,p.provide(p.__VUE_I18N_SYMBOL__,d),Ve(E[0])){const h=E[0];d.__composerExtend=h.__composerExtend,d.__vueI18nExtend=h.__vueI18nExtend}let x=null;!n&&i&&(x=WL(p,d.global)),__VUE_I18N_FULL_INSTALL__&&PL(p,d,...E),__VUE_I18N_LEGACY_API__&&n&&p.mixin(IL(a,a.__composer,d));const g=p.unmount;p.unmount=()=>{x&&x(),d.dispose(),g()}},get global(){return a},dispose(){o.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return d}}function Ff(t={}){const e=bs();if(e==null)throw Dt(Ct.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Dt(Ct.NOT_INSTALLED);const n=UL(e),i=kL(n),r=k1(e),s=FL(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Dt(Ct.NOT_AVAILABLE_IN_LEGACY_MODE);return GL(e,s,i,t)}if(s==="global")return B1(i,t,r),i;if(s==="parent"){let l=BL(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=kt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Of(l),o.__composerExtend&&(a[Nu]=o.__composerExtend(a)),HL(o,e,a),o.__setInstance(e,a)}return a}function OL(t,e,n){const i=l0();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Du(t)):i.run(()=>Of(t));if(r==null)throw Dt(Ct.UNEXPECTED_ERROR);return[i,r]}}function UL(t){{const e=Tn(t.isCE?NL:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Dt(t.isCE?Ct.NOT_INSTALLED_WITH_PROVIDE:Ct.UNEXPECTED_ERROR);return e}}function FL(t,e){return Ml(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function kL(t){return t.mode==="composition"?t.global:t.global.__composer}function BL(t,e,n=!1){let i=null;const r=e.root;let s=zL(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[F1]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function zL(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function HL(t,e,n){cl(()=>{},e),Zu(()=>{const i=n;t.__deleteInstance(e);const r=i[Nu];r&&(r(),delete i[Nu])},e)}function GL(t,e,n,i={}){const r=e==="local",s=$u(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Dt(Ct.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=Ze(i.inheritLocale)?i.inheritLocale:!Re(i.locale),a=xr(!r||o?n.locale.value:Re(i.locale)?i.locale:Ns),l=xr(!r||o?n.fallbackLocale.value:Re(i.fallbackLocale)||pt(i.fallbackLocale)||Ve(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:a.value),c=xr(wl(a.value,i)),u=xr(Ve(i.datetimeFormats)?i.datetimeFormats:{[a.value]:{}}),f=xr(Ve(i.numberFormats)?i.numberFormats:{[a.value]:{}}),d=r?n.missingWarn:Ze(i.missingWarn)||Ji(i.missingWarn)?i.missingWarn:!0,p=r?n.fallbackWarn:Ze(i.fallbackWarn)||Ji(i.fallbackWarn)?i.fallbackWarn:!0,E=r?n.fallbackRoot:Ze(i.fallbackRoot)?i.fallbackRoot:!0,x=!!i.fallbackFormat,g=ft(i.missing)?i.missing:null,h=ft(i.postTranslation)?i.postTranslation:null,v=r?n.warnHtmlMessage:Ze(i.warnHtmlMessage)?i.warnHtmlMessage:!0,m=!!i.escapeParameter,_=r?n.modifiers:Ve(i.modifiers)?i.modifiers:{},b=i.pluralRules||r&&n.pluralRules;function T(){return[a.value,l.value,c.value,u.value,f.value]}const M=it({get:()=>s.value?s.value.locale.value:a.value,set:A=>{s.value&&(s.value.locale.value=A),a.value=A}}),N=it({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:A=>{s.value&&(s.value.fallbackLocale.value=A),l.value=A}}),y=it(()=>s.value?s.value.messages.value:c.value),R=it(()=>u.value),V=it(()=>f.value);function U(){return s.value?s.value.getPostTranslationHandler():h}function j(A){s.value&&s.value.setPostTranslationHandler(A)}function F(){return s.value?s.value.getMissingHandler():g}function Y(A){s.value&&s.value.setMissingHandler(A)}function J(A){return T(),A()}function K(...A){return s.value?J(()=>Reflect.apply(s.value.t,null,[...A])):J(()=>"")}function se(...A){return s.value?Reflect.apply(s.value.rt,null,[...A]):""}function ae(...A){return s.value?J(()=>Reflect.apply(s.value.d,null,[...A])):J(()=>"")}function fe(...A){return s.value?J(()=>Reflect.apply(s.value.n,null,[...A])):J(()=>"")}function G(A){return s.value?s.value.tm(A):{}}function Q(A,z){return s.value?s.value.te(A,z):!1}function ge(A){return s.value?s.value.getLocaleMessage(A):{}}function Se(A,z){s.value&&(s.value.setLocaleMessage(A,z),c.value[A]=z)}function Te(A,z){s.value&&s.value.mergeLocaleMessage(A,z)}function Ce(A){return s.value?s.value.getDateTimeFormat(A):{}}function q(A,z){s.value&&(s.value.setDateTimeFormat(A,z),u.value[A]=z)}function ce(A,z){s.value&&s.value.mergeDateTimeFormat(A,z)}function ue(A){return s.value?s.value.getNumberFormat(A):{}}function xe(A,z){s.value&&(s.value.setNumberFormat(A,z),f.value[A]=z)}function Me(A,z){s.value&&s.value.mergeNumberFormat(A,z)}const X={get id(){return s.value?s.value.id:-1},locale:M,fallbackLocale:N,messages:y,datetimeFormats:R,numberFormats:V,get inheritLocale(){return s.value?s.value.inheritLocale:o},set inheritLocale(A){s.value&&(s.value.inheritLocale=A)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:_},get pluralRules(){return s.value?s.value.pluralRules:b},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:d},set missingWarn(A){s.value&&(s.value.missingWarn=A)},get fallbackWarn(){return s.value?s.value.fallbackWarn:p},set fallbackWarn(A){s.value&&(s.value.missingWarn=A)},get fallbackRoot(){return s.value?s.value.fallbackRoot:E},set fallbackRoot(A){s.value&&(s.value.fallbackRoot=A)},get fallbackFormat(){return s.value?s.value.fallbackFormat:x},set fallbackFormat(A){s.value&&(s.value.fallbackFormat=A)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:v},set warnHtmlMessage(A){s.value&&(s.value.warnHtmlMessage=A)},get escapeParameter(){return s.value?s.value.escapeParameter:m},set escapeParameter(A){s.value&&(s.value.escapeParameter=A)},t:K,getPostTranslationHandler:U,setPostTranslationHandler:j,getMissingHandler:F,setMissingHandler:Y,rt:se,d:ae,n:fe,tm:G,te:Q,getLocaleMessage:ge,setLocaleMessage:Se,mergeLocaleMessage:Te,getDateTimeFormat:Ce,setDateTimeFormat:q,mergeDateTimeFormat:ce,getNumberFormat:ue,setNumberFormat:xe,mergeNumberFormat:Me};function I(A){A.locale.value=a.value,A.fallbackLocale.value=l.value,Object.keys(c.value).forEach(z=>{A.mergeLocaleMessage(z,c.value[z])}),Object.keys(u.value).forEach(z=>{A.mergeDateTimeFormat(z,u.value[z])}),Object.keys(f.value).forEach(z=>{A.mergeNumberFormat(z,f.value[z])}),A.escapeParameter=m,A.fallbackFormat=x,A.fallbackRoot=E,A.fallbackWarn=p,A.missingWarn=d,A.warnHtmlMessage=v}return vg(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Dt(Ct.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const A=s.value=t.proxy.$i18n.__composer;e==="global"?(a.value=A.locale.value,l.value=A.fallbackLocale.value,c.value=A.messages.value,u.value=A.datetimeFormats.value,f.value=A.numberFormats.value):r&&I(A)}),X}const VL=["locale","fallbackLocale","availableLocales"],Rm=["t","rt","d","n","tm","te"];function WL(t,e){const n=Object.create(null);return VL.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Dt(Ct.UNEXPECTED_ERROR);const o=Ft(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Rm.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Dt(Ct.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Rm.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}EL();__INTLIFY_JIT_COMPILATION__?lm(pL):lm(hL);rL(BR);sL(S1);if(__INTLIFY_PROD_DEVTOOLS__){const t=di();t.__INTLIFY__=!0,$R(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const XL={toggle:"Eng"},jL={ym:"Yamashita Manato",passage:"I'm Manato Yamashita. studying computer science at the Department of Informatics, at Tokyo City University. My hobbies are create digital contents(ex: illustration, animation, web and so on...) and reading. my favorite writer is Sayaka Murata.This site is for my portfolio named MANAPURAZA.COM from Manato(my name) + Tamaplaza(the station near my living) I love all of creative activities! and banana.",name:"Name","name-co":"Manato Yamashita",sex:"Sex / Gneder","sex-co":"Man",birth:"Birthday","birth-co":"2002/04/17",country:"Country","country-co":"Japan",live:"Live-in","live-co":"Kanagawa | Tokyo | Kumamoto",study:"studying","study-co":"Tokyo City University, Department of Informatics / System Engineering",research:"Research","research-co":"Information Security",like:"Like","like-co":"Banana"},YL={15:"Entered TATEISHI Junior High School",18:"Entered HONJO High School",21:"Entered Tokyo City University",22:"Entered Edith Cowan University",23:"Live in Saginuma, Kawasaki","02":"Born in Kumamoto","02-de":"2002, Kumamoto / Japan","03":"Moved to Tokyo","03-de":"2003~, Tokyo / Japan","15-de":"2015 ~ 2018, Tokyo / Japan","18-de":"2018 ~ 2021, Tokyo / Japan","21-de":"2021 ~, Tokyo / Japan","21-2":"Live in Miyazakidai, Kawasaki","21-2-de":"2021 ~, Kawasaki / Japan","22-de":"2022 ~ 2023, Perth, WA / Australia","23-de":"2023 ~, Kawasaki / Japan","23-2":"Started to research about Information Security at TCU Seki lab.","23-2-de":"2023 ~, Yokohama / Japan"},$L={graphics:{1:{title:"Portfolio of Graphics and Illustrations",description:"A portfolio compiling my graphic design and illustration works."},2:{title:"Web Portfolio Showcasing Overall Creative Works",description:"A web-based portfolio that gathers all my creative works."}},prog:{1:{title:"manapuraza.com",description:"A portfolio site showcasing some of my creative works during my student years, created during a one-month period as part of a four-month internship at an advertising production company. Built with Vue.js 3 and Three.js. responsive CI/CD (This site)"},2:{title:"DC-chan AI",description:"An AI chat for DC-chan, the character of the Digital Content Research Society. Built with Next.js, GSAP, and ChatGPT API."},3:{title:"NUMERON - Logical Number Guessing Game",description:"A number guessing game developed during my first year of university as practice for HTML, CSS, and Javascript, created in collaboration with an acquaintance."},4:{title:"AmauSyrup.net - Unofficial Fan Site for AmauSyrup",description:"An unofficial website for a Vtuber featuring a blog function utilizing the Notion API. Built with Next.js with Typescript and GSAP's scrollTrigger."},5:{title:"Tokyo City University Asocciation of Clubs/Circles",description:"A site I created while serving as the president of the Tokyo City University Federation of Student Clubs. It uses a CMS. I was responsible for development, maintenance, and operation. Deployed on the university's shared WWW server."},6:{title:"Jamstack Blog Test",description:"A test website for a blog built with Jamstack (Nuxt 3 + microCMS)."},7:{title:"Chaintence",description:"A WebApp for creating email texts by connecting templates, developed during a two-day hackathon. Built with NuxtJS and microCMS. I was responsible for frontend development and presentation."},8:{title:"DC-chan Twitter BOT",description:"A Twitter BOT for the official character of my club, DC-chan. Built with Google Apps Script (GAS) to interact with the Twitter API. Currently inactive due to the API becoming paid."},9:{title:"Seki Laboratory (TCU Information Security Laboratory)",description:"The website for the lab, built with Nuxt.js 3 and microCMS."},10:{title:"Information Security Quiz",description:"A quiz app created to introduce the lab. Built with Vue.js 2 and deployed on Vercel."},11:{title:"KillerDie 1st Anniversary",description:"The official site for the 1st anniversary of a university's unofficial group. Built with Vue.js 3."},12:{title:"Population Transition Graph by Prefecture SPA",description:"A web app for testing data visualization. Built with Highcharts.js and Next.js, with Jest and Github Workflow implemented."},13:{title:"wtm - Outing Support App for Android",description:"An Android app developed by a team, 4members. Built with Android Studio (Java + Gradle). I was responsible for leadership, development, and design."},14:{title:"Down Under Mountain - Australia Study Abroad Blog",description:"A blog I wrote during my four-month study abroad at Edith Cowan University in Western Australia in 2023. Built with WordPress."},15:{title:"WAGIRI!! - Japanese Style Flick Game",description:"A Japanese-style flick game that won the grand prize in a hackathon hosted by Progate. Built with Next.js (Typescript) and Go, supporting online battles. I was responsible for frontend, design, and animations."},16:{title:"HPB to me! 2023 - 21 Years Old, With a Fist.",description:"A joke site I created to celebrate my own birthday. Music and voice acting were created by acquaintances. Presumptuous."},17:{title:"Tokyo City University Animation Studio",description:"A site for promoting an animation co-produced with Setagaya City, where I am the general director. Built with Astro.js and MDX."},18:{title:"Tokyo City University Student Organization",description:"The official site of the Student Union Headquarters. Built with HTML, CSS, Javascript, and GAS."}},video:{1:{title:"Personal YouTube Channel 2",description:"A channel where I uploaded Yukkuri videos during high school. Currently in use after the main channel was banned."},2:{title:"TCU-DC (Club) YouTube Channel",description:"A YouTube channel showcasing the activities of the club. Some of the videos were not created by me."}}},qL={404:{title:"404",notfound:"Not Found",message:"The page you are looking for does not exist."},navbar:XL,about:jL,his:YL,works:$L},KL={toggle:"日本語"},ZL={ym:"山下 真和都（ヤマシタマナト）",passage:"こんにちは。「山下真和都（ヤマシタマナト）」と言います。東京都市大学のメディア情報学部の情報システム学科でコンピュータサイエンスを学んでいます。趣味はデジタルコンテンツの制作（イラスト、アニメーション、ウェブなど）と読書です。お気に入りの作家は村田沙耶香です！このサイトは、私の名前の「マナト」と、私の住んでいる場所の近くの駅「たまプラーザ」から名付けたポートフォリオサイト「MANAPURAZA.COM」です。クリエイティブな活動が大好きです！そしてバナナも",name:"名前","name-co":"山下マナト",sex:"性別","sex-co":"男",birth:"誕生日","birth-co":"2002/04/17",country:"国籍","country-co":"日本国",live:"居住地","live-co":"神奈川県 | 東京都 | 熊本県",study:"専攻","study-co":"東京都市大学 メディア情報学部 情報システム学科",research:"研究","research-co":"情報セキュリティ",like:"好きなモノ","like-co":"バナナ"},JL={15:"葛飾区立立石中学校に入学",18:"東京都立本所高等学校に入学",21:"東京都市大学に入学",22:"豪Edith Cowan Universityに留学",23:"神奈川県川崎市の鷺沼に住む","02":"熊本県で生まれる","02-de":"2002年、熊本 / 日本","03":"東京都に引っ越す","03-de":"2003年~、東京 / 日本","15-de":"2015年 〜 2018年、東京 / 日本","18-de":"2018年 〜 2021年、東京 / 日本","21-de":"2021年以降、東京 / 日本","21-2":"神奈川県川崎市の宮崎台に住む","21-2-de":"2021年以降、川崎 / 日本","22-de":"2022年 〜 2023年、パース、WA / オーストラリア","23-de":"2023年以降、川崎 / 日本","23-2":"東京都市大学関研究室で情報セキュリティについて研究を始める","23-2-de":"2023年以降、横浜 / 日本"},QL={graphics:{1:{title:"グラフィックスとイラストのポートフォリオ",description:"自分のグラフィックデザインとイラストの作品をまとめたポートフォリオ。"},2:{title:"クリエイティブ全般を表示するWebポートフォリオウェブサイト",description:"自分のクリエイティブな作品全般を集めたウェブサイト形式のポートフォリオ。"}},prog:{1:{title:"manapuraza.com",description:"広告制作会社の4ヶ月のインターンの1ヶ月で作った、学生時代のクリエイティブの一部を紹介したポートフォリオサイト。Vue.js3とThree.jsで書かれています。（当サイト）"},2:{title:"でじこんちゃんAI",description:"デジタルコンテンツ研究会のキャラクターであるでじこんちゃんのAIチャット。Next.js, GSAP, ChatGPT APIを使用しています。"},3:{title:"NUMERON - 論理数字あてゲーム",description:"大学1年生の時にHTML,CSS,Javascriptの練習のために知り合いと開発した数字当てゲームです。"},4:{title:"AmauSyrup.net - 天羽しろっぷ非公式ファンサイト",description:"Vtuberの非公式ウェブサイトで、Notion APIを利用したブログ機能を搭載。Next.js with TypescriptとGSAPのscrollTriggerを使っています。"},5:{title:"東京都市大学 同好会連合",description:"東京都市大学同好会連合の会長をしていた時に作ったサイトCMSを使用しています。開発と保守、運用を担当していました。大学の共用WWWサーバにデプロイ"},6:{title:"Jamstack Blog test",description:"Jamstack（Nuxt3 + microCMS）で構築されたブログのテストウェブサイト"},7:{title:"Chaintence",description:"2日間の技育ハッカソンで開発した、テンプレートをつなげてメール文を作成するWebApp。NuxtJSとmicroCMSで構築されています。私はフロントエンドと発表を担当しました。"},8:{title:"でじこんちゃん Twitter BOT",description:"私のサークルの公式キャラクターであるでじこんちゃんのTwitter BOT。GoogleAppsScript(GAS)でTwitterのAPIを叩いています。APIの有料化に伴い現在は動作させていません。"},9:{title:"関研究室（TCU情報セキュリティ研究室）",description:"研究室のWebサイトNuxt.js3とmicroCMSで構築"},10:{title:"情報セキュリティクイズ",description:"研究室の紹介のために作ったクイズアプリVue.js2で構築。Vecelでデプロイ"},11:{title:"キラキラ大学生研究会 1周年記念",description:"大学の非公認団体の1周年公式サイト。Vue.js3で構築"},12:{title:"都道府県別総人口推移グラフSPA",description:"データビジュアライゼーションをテストするためのWebアプリ。Highcharts.jsとNext.jsで構築。テスト(Jext)とGithubWorkflowも導入"},13:{title:"wtm - おでかけ支援アプリ",description:"4人のチームで開発したAndroidアプリ。AndroidStudio(Java * Gradle)で開発。私はリーダと開発、デザインを担当しました。"},14:{title:"Down Under Mountain - オーストラリア留学ブログ",description:"2023年に4ヶ月間西オーストラリアのEdith Cowan Universityに留学したので、その時に書いたブログ。WordPressで書かれています。"},15:{title:"WAGIRI!! - 和風フリックゲーム",description:"Progate主催のハッカソンでグランプリを受賞した和風フリックゲーム。Next.js(Typescript), Goで構築。オンライン対戦にも対応しています。私はフロントエンドとデザイン、アニメーションを担当しました。"},16:{title:"HPB to me! 2023 - 21歳、拳で。",description:"自分の誕生日を祝うために作ったジョークサイト。音楽や声優は知り合いに作ってもらいました。おこがましい"},17:{title:"都市大アニメーション",description:"私が総監督として、世田谷区とアニメを共同制作しているので、その広報用のサイトです。Astro.jsとMDXで構築。"},18:{title:"東京都市大学 学生団体連合本部",description:"学生団体連合本部の公式サイトです。HTML,CSS,Javascript,GASで構築。"}},video:{1:{title:"個人Youtubeチャンネル2",description:"高校生の頃にゆっくり動画をアップロードしていたチャンネル。メインチャンネルがBANされてしまったため、現在使用しています。"},2:{title:"TCU-DC(サークル)のYouTubeチャンネル",description:"サークルの活動を紹介するYouTubeチャンネル。一部の作品は私が作った映像ではないものも含まれます。"}}},eP={404:{title:"404",notfound:"ページが見つかりません",message:"URLが間違っているか、ページが削除された可能性があります。あるいはリンク切れとか。"},navbar:KL,about:ZL,his:JL,works:QL},G1=DL({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:qL,ja:eP}});IC.add(DC);const Cl=rf(UE),kf=rf(ZE),V1=rf(Xw);Cl.component("fa",jC);Cl.use(of);kf.use(of);V1.use(of);Cl.use(G1);kf.use(G1);Cl.mount("#app");kf.mount("#navbar");V1.mount("#back");export{En as F,Ua as _,Nv as a,At as b,Da as c,qc as d,vt as e,tP as f,Lv as g,Ss as o,Qu as r,km as t,Ff as u};
//# sourceMappingURL=index-375b7b78.js.map
