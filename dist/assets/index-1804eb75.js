(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function df(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const ht={},fs=[],On=()=>{},o0=()=>!1,tl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pf=t=>t.startsWith("onUpdate:"),Lt=Object.assign,mf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l0=Object.prototype.hasOwnProperty,lt=(t,e)=>l0.call(t,e),He=Array.isArray,hs=t=>nl(t)==="[object Map]",Om=t=>nl(t)==="[object Set]",We=t=>typeof t=="function",Mt=t=>typeof t=="string",er=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",Um=t=>(vt(t)||We(t))&&We(t.then)&&We(t.catch),Fm=Object.prototype.toString,nl=t=>Fm.call(t),c0=t=>nl(t).slice(8,-1),km=t=>nl(t)==="[object Object]",_f=t=>Mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ra=df(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u0=/-(\w)/g,kn=il(t=>t.replace(u0,(e,n)=>n?n.toUpperCase():"")),f0=/\B([A-Z])/g,Br=il(t=>t.replace(f0,"-$1").toLowerCase()),rl=il(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ul=il(t=>t?`on${rl(t)}`:""),Yi=(t,e)=>!Object.is(t,e),Fl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},h0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},d0=t=>{const e=Mt(t)?Number(t):NaN;return isNaN(e)?t:e};let wh;const zm=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Mt(i)?g0(i):sl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(t)||vt(t))return t}const p0=/;(?![^(]*\))/g,m0=/:([^]+)/,_0=/\/\*[^]*?\*\//g;function g0(t){const e={};return t.replace(_0,"").split(p0).forEach(n=>{if(n){const i=n.split(m0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function al(t){let e="";if(Mt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=al(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const v0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x0=df(v0);function Hm(t){return!!t||t===""}const Vm=t=>!!(t&&t.__v_isRef===!0),Gm=t=>Mt(t)?t:t==null?"":He(t)||vt(t)&&(t.toString===Fm||!We(t.toString))?Vm(t)?Gm(t.value):JSON.stringify(t,Wm,2):String(t),Wm=(t,e)=>Vm(e)?Wm(t,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[kl(i,s)+" =>"]=r,n),{})}:Om(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kl(n))}:er(e)?kl(e):vt(e)&&!He(e)&&!km(e)?String(e):e,kl=(t,e="")=>{var n;return er(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class Xm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function y0(t){return new Xm(t)}function E0(){return hn}let ft;const Bl=new WeakSet;class Ym{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bl.has(this)&&(Bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=sa,sa=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ch(this),jm(this);const e=ft,n=Un;ft=this,Un=!0;try{return this.fn()}finally{qm(this),ft=e,Un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xf(e);this.deps=this.depsTail=void 0,Ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bc(this)&&this.run()}get dirty(){return Bc(this)}}let $m=0,sa;function gf(){$m++}function vf(){if(--$m>0)return;let t;for(;sa;){let e=sa;for(sa=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function jm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qm(t){let e,n=t.depsTail;for(let i=n;i;i=i.prevDep)i.version===-1?(i===n&&(n=i.prevDep),xf(i),S0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Bc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Km(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!t._dirty}function Km(t){if(t.flags&2)return!1;if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ma))return;t.globalVersion=ma;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Bc(t)){t.flags&=-3;return}const n=ft,i=Un;ft=t,Un=!0;try{jm(t);const r=t.fn(t._value);(e.version===0||Yi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=n,Un=i,qm(t),t.flags&=-3}}function xf(t){const{dep:e,prevSub:n,nextSub:i}=t;if(n&&(n.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)xf(r)}}function S0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Un=!0;const Zm=[];function tr(){Zm.push(Un),Un=!1}function nr(){const t=Zm.pop();Un=t===void 0?!0:t}function Ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let ma=0;class yf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!ft||!Un||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink={dep:this,sub:ft,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,ft.flags&4&&Jm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=i)}return n}trigger(e){this.version++,ma++,this.notify(e)}notify(e){gf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{vf()}}}function Jm(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const zc=new WeakMap,Rr=Symbol(""),Hc=Symbol(""),_a=Symbol("");function Xt(t,e,n){if(Un&&ft){let i=zc.get(t);i||zc.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=new yf),r.track()}}function gi(t,e,n,i,r,s){const a=zc.get(t);if(!a){ma++;return}let o=[];if(e==="clear")o=[...a.values()];else{const l=He(t),c=l&&_f(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===_a||!er(h)&&h>=u)&&o.push(f)})}else{const u=f=>f&&o.push(f);switch(n!==void 0&&u(a.get(n)),c&&u(a.get(_a)),e){case"add":l?c&&u(a.get("length")):(u(a.get(Rr)),hs(t)&&u(a.get(Hc)));break;case"delete":l||(u(a.get(Rr)),hs(t)&&u(a.get(Hc)));break;case"set":hs(t)&&u(a.get(Rr));break}}}gf();for(const l of o)l.trigger();vf()}function Vr(t){const e=et(t);return e===t?e:(Xt(e,"iterate",_a),Fn(t)?e:e.map(Vt))}function ol(t){return Xt(t=et(t),"iterate",_a),t}const M0={__proto__:null,[Symbol.iterator](){return zl(this,Symbol.iterator,Vt)},concat(...t){return Vr(this).concat(...t.map(e=>He(e)?Vr(e):e))},entries(){return zl(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return Qn(this,"find",t,e,Vt,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hl(this,"includes",t)},indexOf(...t){return Hl(this,"indexOf",t)},join(t){return Vr(this).join(t)},lastIndexOf(...t){return Hl(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return Vr(this).toReversed()},toSorted(t){return Vr(this).toSorted(t)},toSpliced(...t){return Vr(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return zl(this,"values",Vt)}};function zl(t,e,n){const i=ol(t),r=i[e]();return i!==t&&!Fn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const b0=Array.prototype;function Qn(t,e,n,i,r,s){const a=ol(t),o=a!==t&&!Fn(t),l=a[e];if(l!==b0[e]){const f=l.apply(t,s);return o?Vt(f):f}let c=n;a!==t&&(o?c=function(f,h){return n.call(this,Vt(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Rh(t,e,n,i){const r=ol(t);let s=n;return r!==t&&(Fn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Vt(o),l,t)}),r[e](s,...i)}function Hl(t,e,n){const i=et(t);Xt(i,"iterate",_a);const r=i[e](...n);return(r===-1||r===!1)&&bf(n[0])?(n[0]=et(n[0]),i[e](...n)):r}function Gs(t,e,n=[]){tr(),gf();const i=et(t)[e].apply(t,n);return vf(),nr(),i}const T0=df("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(er));function A0(t){er(t)||(t=String(t));const e=et(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class e_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?B0:r_:s?i_:n_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=M0[n]))return l;if(n==="hasOwnProperty")return A0}const o=Reflect.get(e,n,kt(e)?e:i);return(er(n)?Qm.has(n):T0(n))||(r||Xt(e,"get",n),s)?o:kt(o)?a&&_f(n)?o:o.value:vt(o)?r?a_(o):cl(o):o}}class t_ extends e_{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Dr(s);if(!Fn(i)&&!Dr(i)&&(s=et(s),i=et(i)),!He(e)&&kt(s)&&!kt(i))return l?!1:(s.value=i,!0)}const a=He(e)&&_f(n)?Number(n)<e.length:lt(e,n),o=Reflect.set(e,n,i,kt(e)?e:r);return e===et(r)&&(a?Yi(i,s)&&gi(e,"set",n,i):gi(e,"add",n,i)),o}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&gi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!er(n)||!Qm.has(n))&&Xt(e,"has",n),i}ownKeys(e){return Xt(e,"iterate",He(e)?"length":Rr),Reflect.ownKeys(e)}}class w0 extends e_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const C0=new t_,R0=new w0,P0=new t_(!0);const Ef=t=>t,ll=t=>Reflect.getPrototypeOf(t);function Xa(t,e,n=!1,i=!1){t=t.__v_raw;const r=et(t),s=et(e);n||(Yi(e,s)&&Xt(r,"get",e),Xt(r,"get",s));const{has:a}=ll(r),o=i?Ef:n?Tf:Vt;if(a.call(r,e))return o(t.get(e));if(a.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function Ya(t,e=!1){const n=this.__v_raw,i=et(n),r=et(t);return e||(Yi(t,r)&&Xt(i,"has",t),Xt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function $a(t,e=!1){return t=t.__v_raw,!e&&Xt(et(t),"iterate",Rr),Reflect.get(t,"size",t)}function Ph(t,e=!1){!e&&!Fn(t)&&!Dr(t)&&(t=et(t));const n=et(this);return ll(n).has.call(n,t)||(n.add(t),gi(n,"add",t,t)),this}function Lh(t,e,n=!1){!n&&!Fn(e)&&!Dr(e)&&(e=et(e));const i=et(this),{has:r,get:s}=ll(i);let a=r.call(i,t);a||(t=et(t),a=r.call(i,t));const o=s.call(i,t);return i.set(t,e),a?Yi(e,o)&&gi(i,"set",t,e):gi(i,"add",t,e),this}function Ih(t){const e=et(this),{has:n,get:i}=ll(e);let r=n.call(e,t);r||(t=et(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&gi(e,"delete",t,void 0),s}function Dh(){const t=et(this),e=t.size!==0,n=t.clear();return e&&gi(t,"clear",void 0,void 0),n}function ja(t,e){return function(i,r){const s=this,a=s.__v_raw,o=et(a),l=e?Ef:t?Tf:Vt;return!t&&Xt(o,"iterate",Rr),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function qa(t,e,n){return function(...i){const r=this.__v_raw,s=et(r),a=hs(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Ef:e?Tf:Vt;return!e&&Xt(s,"iterate",l?Hc:Rr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ti(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function L0(){const t={get(s){return Xa(this,s)},get size(){return $a(this)},has:Ya,add:Ph,set:Lh,delete:Ih,clear:Dh,forEach:ja(!1,!1)},e={get(s){return Xa(this,s,!1,!0)},get size(){return $a(this)},has:Ya,add(s){return Ph.call(this,s,!0)},set(s,a){return Lh.call(this,s,a,!0)},delete:Ih,clear:Dh,forEach:ja(!1,!0)},n={get(s){return Xa(this,s,!0)},get size(){return $a(this,!0)},has(s){return Ya.call(this,s,!0)},add:Ti("add"),set:Ti("set"),delete:Ti("delete"),clear:Ti("clear"),forEach:ja(!0,!1)},i={get(s){return Xa(this,s,!0,!0)},get size(){return $a(this,!0)},has(s){return Ya.call(this,s,!0)},add:Ti("add"),set:Ti("set"),delete:Ti("delete"),clear:Ti("clear"),forEach:ja(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=qa(s,!1,!1),n[s]=qa(s,!0,!1),e[s]=qa(s,!1,!0),i[s]=qa(s,!0,!0)}),[t,n,e,i]}const[I0,D0,N0,O0]=L0();function Sf(t,e){const n=e?t?O0:N0:t?D0:I0;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const U0={get:Sf(!1,!1)},F0={get:Sf(!1,!0)},k0={get:Sf(!0,!1)};const n_=new WeakMap,i_=new WeakMap,r_=new WeakMap,B0=new WeakMap;function z0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H0(t){return t.__v_skip||!Object.isExtensible(t)?0:z0(c0(t))}function cl(t){return Dr(t)?t:Mf(t,!1,C0,U0,n_)}function s_(t){return Mf(t,!1,P0,F0,i_)}function a_(t){return Mf(t,!0,R0,k0,r_)}function Mf(t,e,n,i,r){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=H0(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function ds(t){return Dr(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function Fn(t){return!!(t&&t.__v_isShallow)}function bf(t){return t?!!t.__v_raw:!1}function et(t){const e=t&&t.__v_raw;return e?et(e):t}function V0(t){return Object.isExtensible(t)&&Bm(t,"__v_skip",!0),t}const Vt=t=>vt(t)?cl(t):t,Tf=t=>vt(t)?a_(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function Sr(t){return o_(t,!1)}function Af(t){return o_(t,!0)}function o_(t,e){return kt(t)?t:new G0(t,e)}class G0{constructor(e,n){this.dep=new yf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:et(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Fn(e)||Dr(e);e=i?e:et(e),Yi(e,n)&&(this._rawValue=e,this._value=i?e:Vt(e),this.dep.trigger())}}function ps(t){return kt(t)?t.value:t}const W0={get:(t,e,n)=>e==="__v_raw"?t:ps(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function l_(t){return ds(t)?t:new Proxy(t,W0)}class X0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ma-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){ft!==this&&(this.flags|=16,this.dep.notify())}get value(){const e=this.dep.track();return Km(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Y0(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new X0(i,r,n)}const Ka={},zo=new WeakMap;let yr;function $0(t,e=!1,n=yr){if(n){let i=zo.get(n);i||zo.set(n,i=[]),i.push(t)}}function j0(t,e,n=ht){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=x=>r?x:Fn(x)||r===!1||r===0?ui(x,1):ui(x);let u,f,h,p,S=!1,b=!1;if(kt(t)?(f=()=>t.value,S=Fn(t)):ds(t)?(f=()=>c(t),S=!0):He(t)?(b=!0,S=t.some(x=>ds(x)||Fn(x)),f=()=>t.map(x=>{if(kt(x))return x.value;if(ds(x))return c(x);if(We(x))return l?l(x,2):x()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){tr();try{h()}finally{nr()}}const x=yr;yr=u;try{return l?l(t,3,[p]):t(p)}finally{yr=x}}:f=On,e&&r){const x=f,R=r===!0?1/0:r;f=()=>ui(x(),R)}const _=E0(),d=()=>{u.stop(),_&&mf(_.effects,u)};if(s)if(e){const x=e;e=(...R)=>{x(...R),d()}}else{const x=f;f=()=>{x(),d()}}let M=b?new Array(t.length).fill(Ka):Ka;const g=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const R=u.run();if(r||S||(b?R.some((T,w)=>Yi(T,M[w])):Yi(R,M))){h&&h();const T=yr;yr=u;try{const w=[R,M===Ka?void 0:b&&M[0]===Ka?[]:M,p];l?l(e,3,w):e(...w),M=R}finally{yr=T}}}else u.run()};return o&&o(g),u=new Ym(f),u.scheduler=a?()=>a(g,!1):g,p=x=>$0(x,!1,u),h=u.onStop=()=>{const x=zo.get(u);if(x){if(l)l(x,4);else for(const R of x)R();zo.delete(u)}},e?i?g(!0):M=u.run():a?a(g.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ui(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))ui(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)ui(t[i],e,n);else if(Om(t)||hs(t))t.forEach(i=>{ui(i,e,n)});else if(km(t)){for(const i in t)ui(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ui(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function La(t,e,n,i){try{return i?t(...i):t()}catch(r){ul(r,e,n)}}function Bn(t,e,n,i){if(We(t)){const r=La(t,e,n,i);return r&&Um(r)&&r.catch(s=>{ul(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Bn(t[s],e,n,i));return r}}function ul(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ht;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){tr(),La(s,null,10,[t,l,c]),nr();return}}q0(t,n,r,i,a)}function q0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}let ga=!1,Vc=!1;const Kt=[];let Vn=0;const ms=[];let Fi=null,is=0;const c_=Promise.resolve();let wf=null;function u_(t){const e=wf||c_;return t?e.then(this?t.bind(this):t):e}function K0(t){let e=ga?Vn+1:0,n=Kt.length;for(;e<n;){const i=e+n>>>1,r=Kt[i],s=va(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Cf(t){if(!(t.flags&1)){const e=va(t),n=Kt[Kt.length-1];!n||!(t.flags&2)&&e>=va(n)?Kt.push(t):Kt.splice(K0(e),0,t),t.flags|=1,f_()}}function f_(){!ga&&!Vc&&(Vc=!0,wf=c_.then(d_))}function Z0(t){He(t)?ms.push(...t):Fi&&t.id===-1?Fi.splice(is+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),f_()}function Nh(t,e,n=ga?Vn+1:0){for(;n<Kt.length;n++){const i=Kt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Kt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&=-2}}}function h_(t){if(ms.length){const e=[...new Set(ms)].sort((n,i)=>va(n)-va(i));if(ms.length=0,Fi){Fi.push(...e);return}for(Fi=e,is=0;is<Fi.length;is++){const n=Fi[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,is=0}}const va=t=>t.id==null?t.flags&2?-1:1/0:t.id;function d_(t){Vc=!1,ga=!0;const e=On;try{for(Vn=0;Vn<Kt.length;Vn++){const n=Kt[Vn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),La(n,n.i,n.i?15:14),n.flags&=-2)}}finally{for(;Vn<Kt.length;Vn++){const n=Kt[Vn];n&&(n.flags&=-2)}Vn=0,Kt.length=0,h_(),ga=!1,wf=null,(Kt.length||ms.length)&&d_()}}let rn=null,p_=null;function Ho(t){const e=rn;return rn=t,p_=t&&t.type.__scopeId||null,e}function pi(t,e=rn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Wh(-1);const s=Ho(e);let a;try{a=t(...r)}finally{Ho(s),i._d&&Wh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function J0(t,e){if(rn===null)return t;const n=_l(rn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ht]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&ui(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function lr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(tr(),Bn(l,n,8,[t.el,o,t,e]),nr())}}const Q0=Symbol("_vte"),m_=t=>t.__isTeleport,ki=Symbol("_leaveCb"),Za=Symbol("_enterCb");function ev(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dl(()=>{t.isMounted=!0}),b_(()=>{t.isUnmounting=!0}),t}const xn=[Function,Array],__={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},g_=t=>{const e=t.subTree;return e.component?g_(e.component):e},tv={name:"BaseTransition",props:__,setup(t,{slots:e}){const n=Ms(),i=ev();return()=>{const r=e.default&&y_(e.default(),!0);if(!r||!r.length)return;const s=v_(r),a=et(t),{mode:o}=a;if(i.isLeaving)return Vl(s);const l=Oh(s);if(!l)return Vl(s);let c=Gc(l,a,i,n,h=>c=h);l.type!==Mn&&xa(l,c);const u=n.subTree,f=u&&Oh(u);if(f&&f.type!==Mn&&!Mr(l,f)&&g_(n).type!==Mn){const h=Gc(f,a,i,n);if(xa(f,h),o==="out-in"&&l.type!==Mn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},Vl(s);o==="in-out"&&l.type!==Mn&&(h.delayLeave=(p,S,b)=>{const _=x_(i,f);_[String(f.key)]=f,p[ki]=()=>{S(),p[ki]=void 0,delete c.delayedLeave},c.delayedLeave=b})}return s}}};function v_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Mn){e=n;break}}return e}const nv=tv;function x_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Gc(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:S,onLeaveCancelled:b,onBeforeAppear:_,onAppear:d,onAfterAppear:M,onAppearCancelled:g}=e,x=String(t.key),R=x_(n,t),T=(N,E)=>{N&&Bn(N,i,9,E)},w=(N,E)=>{const A=E[1];T(N,E),He(N)?N.every(D=>D.length<=1)&&A():N.length<=1&&A()},I={mode:a,persisted:o,beforeEnter(N){let E=l;if(!n.isMounted)if(s)E=_||l;else return;N[ki]&&N[ki](!0);const A=R[x];A&&Mr(t,A)&&A.el[ki]&&A.el[ki](),T(E,[N])},enter(N){let E=c,A=u,D=f;if(!n.isMounted)if(s)E=d||c,A=M||u,D=g||f;else return;let U=!1;const X=N[Za]=ne=>{U||(U=!0,ne?T(D,[N]):T(A,[N]),I.delayedLeave&&I.delayedLeave(),N[Za]=void 0)};E?w(E,[N,X]):X()},leave(N,E){const A=String(t.key);if(N[Za]&&N[Za](!0),n.isUnmounting)return E();T(h,[N]);let D=!1;const U=N[ki]=X=>{D||(D=!0,E(),X?T(b,[N]):T(S,[N]),N[ki]=void 0,R[A]===t&&delete R[A])};R[A]=t,p?w(p,[N,U]):U()},clone(N){const E=Gc(N,e,n,i,r);return r&&r(E),E}};return I}function Vl(t){if(fl(t))return t=$i(t),t.children=null,t}function Oh(t){if(!fl(t))return m_(t.type)&&t.children?v_(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function xa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function y_(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===En?(a.patchFlag&128&&r++,i=i.concat(y_(a.children,e,o))):(e||a.type!==Mn)&&i.push(o!=null?$i(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Fs(t,e){return We(t)?(()=>Lt({name:t.name},e,{setup:t}))():t}function E_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Wc(t,e,n,i,r=!1){if(He(t)){t.forEach((S,b)=>Wc(S,e&&(He(e)?e[b]:e),n,i,r));return}if(aa(i)&&!r)return;const s=i.shapeFlag&4?_l(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===ht?o.refs={}:o.refs,f=o.setupState,h=et(f),p=f===ht?()=>!1:S=>lt(h,S);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,p(c)&&(f[c]=null)):kt(c)&&(c.value=null)),We(l))La(l,o,12,[a,u]);else{const S=Mt(l),b=kt(l);if(S||b){const _=()=>{if(t.f){const d=S?p(l)?f[l]:u[l]:l.value;r?He(d)&&mf(d,s):He(d)?d.includes(s)||d.push(s):S?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else S?(u[l]=a,p(l)&&(f[l]=a)):b&&(l.value=a,t.k&&(u[t.k]=a))};a?(_.id=-1,fn(_,n)):_()}}}const aa=t=>!!t.type.__asyncLoader,fl=t=>t.type.__isKeepAlive;function iv(t,e){S_(t,"a",e)}function rv(t,e){S_(t,"da",e)}function S_(t,e,n=Ft){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(hl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)fl(r.parent.vnode)&&sv(i,e,n,r),r=r.parent}}function sv(t,e,n,i){const r=hl(e,t,i,!0);Rf(()=>{mf(i[e],r)},n)}function hl(t,e,n=Ft,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{tr();const o=Na(n),l=Bn(e,n,t,a);return o(),nr(),l});return i?r.unshift(s):r.push(s),s}}const Si=t=>(e,n=Ft)=>{(!ml||t==="sp")&&hl(t,(...i)=>e(...i),n)},M_=Si("bm"),dl=Si("m"),av=Si("bu"),ov=Si("u"),b_=Si("bum"),Rf=Si("um"),lv=Si("sp"),cv=Si("rtg"),uv=Si("rtc");function fv(t,e=Ft){hl("ec",t,e)}const Pf="components";function Lf(t,e){return A_(Pf,t,!0,e)||t}const T_=Symbol.for("v-ndc");function hv(t){return Mt(t)?A_(Pf,t,!1)||t:t||T_}function A_(t,e,n=!0,i=!1){const r=rn||Ft;if(r){const s=r.type;if(t===Pf){const o=ex(s,!1);if(o&&(o===e||o===kn(e)||o===rl(kn(e))))return s}const a=Uh(r[t]||s[t],e)||Uh(r.appContext[t],e);return!a&&i?s:a}}function Uh(t,e){return t&&(t[e]||t[kn(e)]||t[rl(kn(e))])}function bP(t,e,n,i){let r;const s=n&&n[i],a=He(t);if(a||Mt(t)){const o=a&&ds(t);o&&(t=ol(t)),r=new Array(t.length);for(let l=0,c=t.length;l<c;l++)r[l]=e(o?Vt(t[l]):t[l],l,void 0,s&&s[l])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(vt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s&&s[l])}}else r=[];return n&&(n[i]=r),r}const Xc=t=>t?Y_(t)?_l(t):Xc(t.parent):null,oa=Lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>If(t),$forceUpdate:t=>t.f||(t.f=()=>{Cf(t.update)}),$nextTick:t=>t.n||(t.n=u_.bind(t.proxy)),$watch:t=>Dv.bind(t)}),Gl=(t,e)=>t!==ht&&!t.__isScriptSetup&&lt(t,e),dv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Gl(i,e))return a[e]=1,i[e];if(r!==ht&&lt(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&lt(c,e))return a[e]=3,s[e];if(n!==ht&&lt(n,e))return a[e]=4,n[e];Yc&&(a[e]=0)}}const u=oa[e];let f,h;if(u)return e==="$attrs"&&Xt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==ht&&lt(n,e))return a[e]=4,n[e];if(h=l.config.globalProperties,lt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Gl(r,e)?(r[e]=n,!0):i!==ht&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==ht&&lt(t,a)||Gl(e,a)||(o=s[0])&&lt(o,a)||lt(i,a)||lt(oa,a)||lt(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fh(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yc=!0;function pv(t){const e=If(t),n=t.proxy,i=t.ctx;Yc=!1,e.beforeCreate&&kh(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:S,activated:b,deactivated:_,beforeDestroy:d,beforeUnmount:M,destroyed:g,unmounted:x,render:R,renderTracked:T,renderTriggered:w,errorCaptured:I,serverPrefetch:N,expose:E,inheritAttrs:A,components:D,directives:U,filters:X}=e;if(c&&mv(c,i,null),a)for(const te in a){const $=a[te];We($)&&(i[te]=$.bind(n))}if(r){const te=r.call(n,n);vt(te)&&(t.data=cl(te))}if(Yc=!0,s)for(const te in s){const $=s[te],pe=We($)?$.bind(n,n):We($.get)?$.get.bind(n,n):On,me=!We($)&&We($.set)?$.set.bind(n):On,de=rt({get:pe,set:me});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>de.value,set:we=>de.value=we})}if(o)for(const te in o)w_(o[te],i,n,te);if(l){const te=We(l)?l.call(n):l;Reflect.ownKeys(te).forEach($=>{Ao($,te[$])})}u&&kh(u,t,"c");function W(te,$){He($)?$.forEach(pe=>te(pe.bind(n))):$&&te($.bind(n))}if(W(M_,f),W(dl,h),W(av,p),W(ov,S),W(iv,b),W(rv,_),W(fv,I),W(uv,T),W(cv,w),W(b_,M),W(Rf,x),W(lv,N),He(E))if(E.length){const te=t.exposed||(t.exposed={});E.forEach($=>{Object.defineProperty(te,$,{get:()=>n[$],set:pe=>n[$]=pe})})}else t.exposed||(t.exposed={});R&&t.render===On&&(t.render=R),A!=null&&(t.inheritAttrs=A),D&&(t.components=D),U&&(t.directives=U),N&&E_(t)}function mv(t,e,n=On){He(t)&&(t=$c(t));for(const i in t){const r=t[i];let s;vt(r)?"default"in r?s=Tn(r.from||i,r.default,!0):s=Tn(r.from||i):s=Tn(r),kt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function kh(t,e,n){Bn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function w_(t,e,n,i){let r=i.includes(".")?H_(n,i):()=>n[i];if(Mt(t)){const s=e[t];We(s)&&vi(r,s)}else if(We(t))vi(r,t.bind(n));else if(vt(t))if(He(t))t.forEach(s=>w_(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&vi(r,s,t)}}function If(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Vo(l,c,a,!0)),Vo(l,e,a)),vt(e)&&s.set(e,l),l}function Vo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Vo(t,s,n,!0),r&&r.forEach(a=>Vo(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=_v[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const _v={data:Bh,props:zh,emits:zh,methods:ea,computed:ea,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:ea,directives:ea,watch:vv,provide:Bh,inject:gv};function Bh(t,e){return e?t?function(){return Lt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function gv(t,e){return ea($c(t),$c(e))}function $c(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function ea(t,e){return t?Lt(Object.create(null),t,e):e}function zh(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Lt(Object.create(null),Fh(t),Fh(e??{})):e}function vv(t,e){if(!t)return e;if(!e)return t;const n=Lt(Object.create(null),t);for(const i in e)n[i]=Yt(t[i],e[i]);return n}function C_(){return{app:null,config:{isNativeTag:o0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xv=0;function yv(t,e){return function(i,r=null){We(i)||(i=Lt({},i)),r!=null&&!vt(r)&&(r=null);const s=C_(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:xv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:nx,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...f)):We(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||yt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,_l(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Bn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=_s;_s=c;try{return u()}finally{_s=f}}};return c}}let _s=null;function Ao(t,e){if(Ft){let n=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===n&&(n=Ft.provides=Object.create(i)),n[t]=e}}function Tn(t,e,n=!1){const i=Ft||rn;if(i||_s){const r=_s?_s._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}const R_={},P_=()=>Object.create(R_),L_=t=>Object.getPrototypeOf(t)===R_;function Ev(t,e,n,i=!1){const r={},s=P_();t.propsDefaults=Object.create(null),I_(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:s_(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Sv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=et(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(pl(t.emitsOptions,h))continue;const p=e[h];if(l)if(lt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const S=kn(h);r[S]=jc(l,o,S,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{I_(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!lt(e,f)&&((u=Br(f))===f||!lt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=jc(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&gi(t.attrs,"set","")}function I_(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(ra(l))continue;const c=e[l];let u;r&&lt(r,u=kn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:pl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=et(n),c=o||ht;for(let u=0;u<s.length;u++){const f=s[u];n[f]=jc(r,l,f,c[f],t,!lt(c,f))}}return a}function jc(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=lt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Na(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Br(n))&&(i=!0))}return i}const Mv=new WeakMap;function D_(t,e,n=!1){const i=n?Mv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[h,p]=D_(f,e,!0);Lt(a,h),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return vt(t)&&i.set(t,fs),fs;if(He(s))for(let u=0;u<s.length;u++){const f=kn(s[u]);Hh(f)&&(a[f]=ht)}else if(s)for(const u in s){const f=kn(u);if(Hh(f)){const h=s[u],p=a[f]=He(h)||We(h)?{type:h}:Lt({},h),S=p.type;let b=!1,_=!0;if(He(S))for(let d=0;d<S.length;++d){const M=S[d],g=We(M)&&M.name;if(g==="Boolean"){b=!0;break}else g==="String"&&(_=!1)}else b=We(S)&&S.name==="Boolean";p[0]=b,p[1]=_,(b||lt(p,"default"))&&o.push(f)}}const c=[a,o];return vt(t)&&i.set(t,c),c}function Hh(t){return t[0]!=="$"&&!ra(t)}const N_=t=>t[0]==="_"||t==="$stable",Df=t=>He(t)?t.map(Wn):[Wn(t)],bv=(t,e,n)=>{if(e._n)return e;const i=pi((...r)=>Df(e(...r)),n);return i._c=!1,i},O_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(N_(r))continue;const s=t[r];if(We(s))e[r]=bv(r,s,i);else if(s!=null){const a=Df(s);e[r]=()=>a}}},U_=(t,e)=>{const n=Df(e);t.slots.default=()=>n},F_=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Tv=(t,e,n)=>{const i=t.slots=P_();if(t.vnode.shapeFlag&32){const r=e._;r?(F_(i,e,n),n&&Bm(i,"_",r,!0)):O_(e,i)}else e&&U_(t,e)},Av=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=ht;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:F_(r,e,n):(s=!e.$stable,O_(e,r)),a=e}else e&&(U_(t,e),a={default:1});if(s)for(const o in r)!N_(o)&&a[o]==null&&delete r[o]},fn=zv;function wv(t){return Cv(t)}function Cv(t,e){const n=zm();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=On,insertStaticContent:S}=t,b=(y,P,k,Q=null,q=null,se=null,oe=void 0,v=null,m=!!P.dynamicChildren)=>{if(y===P)return;y&&!Mr(y,P)&&(Q=H(y),we(y,q,se,!0),y=null),P.patchFlag===-2&&(m=!1,P.dynamicChildren=null);const{type:C,ref:F,shapeFlag:V}=P;switch(C){case Ia:_(y,P,k,Q);break;case Mn:d(y,P,k,Q);break;case wo:y==null&&M(P,k,Q,oe);break;case En:D(y,P,k,Q,q,se,oe,v,m);break;default:V&1?R(y,P,k,Q,q,se,oe,v,m):V&6?U(y,P,k,Q,q,se,oe,v,m):(V&64||V&128)&&C.process(y,P,k,Q,q,se,oe,v,m,fe)}F!=null&&q&&Wc(F,y&&y.ref,se,P||y,!P)},_=(y,P,k,Q)=>{if(y==null)i(P.el=o(P.children),k,Q);else{const q=P.el=y.el;P.children!==y.children&&c(q,P.children)}},d=(y,P,k,Q)=>{y==null?i(P.el=l(P.children||""),k,Q):P.el=y.el},M=(y,P,k,Q)=>{[y.el,y.anchor]=S(y.children,P,k,Q,y.el,y.anchor)},g=({el:y,anchor:P},k,Q)=>{let q;for(;y&&y!==P;)q=h(y),i(y,k,Q),y=q;i(P,k,Q)},x=({el:y,anchor:P})=>{let k;for(;y&&y!==P;)k=h(y),r(y),y=k;r(P)},R=(y,P,k,Q,q,se,oe,v,m)=>{P.type==="svg"?oe="svg":P.type==="math"&&(oe="mathml"),y==null?T(P,k,Q,q,se,oe,v,m):N(y,P,q,se,oe,v,m)},T=(y,P,k,Q,q,se,oe,v)=>{let m,C;const{props:F,shapeFlag:V,transition:B,dirs:O}=y;if(m=y.el=a(y.type,se,F&&F.is,F),V&8?u(m,y.children):V&16&&I(y.children,m,null,Q,q,Wl(y,se),oe,v),O&&lr(y,null,Q,"created"),w(m,y,y.scopeId,oe,Q),F){for(const le in F)le!=="value"&&!ra(le)&&s(m,le,null,F[le],se,Q);"value"in F&&s(m,"value",null,F.value,se),(C=F.onVnodeBeforeMount)&&Hn(C,Q,y)}O&&lr(y,null,Q,"beforeMount");const z=Rv(q,B);z&&B.beforeEnter(m),i(m,P,k),((C=F&&F.onVnodeMounted)||z||O)&&fn(()=>{C&&Hn(C,Q,y),z&&B.enter(m),O&&lr(y,null,Q,"mounted")},q)},w=(y,P,k,Q,q)=>{if(k&&p(y,k),Q)for(let se=0;se<Q.length;se++)p(y,Q[se]);if(q){let se=q.subTree;if(P===se||G_(se.type)&&(se.ssContent===P||se.ssFallback===P)){const oe=q.vnode;w(y,oe,oe.scopeId,oe.slotScopeIds,q.parent)}}},I=(y,P,k,Q,q,se,oe,v,m=0)=>{for(let C=m;C<y.length;C++){const F=y[C]=v?Bi(y[C]):Wn(y[C]);b(null,F,P,k,Q,q,se,oe,v)}},N=(y,P,k,Q,q,se,oe)=>{const v=P.el=y.el;let{patchFlag:m,dynamicChildren:C,dirs:F}=P;m|=y.patchFlag&16;const V=y.props||ht,B=P.props||ht;let O;if(k&&cr(k,!1),(O=B.onVnodeBeforeUpdate)&&Hn(O,k,P,y),F&&lr(P,y,k,"beforeUpdate"),k&&cr(k,!0),(V.innerHTML&&B.innerHTML==null||V.textContent&&B.textContent==null)&&u(v,""),C?E(y.dynamicChildren,C,v,k,Q,Wl(P,q),se):oe||$(y,P,v,null,k,Q,Wl(P,q),se,!1),m>0){if(m&16)A(v,V,B,k,q);else if(m&2&&V.class!==B.class&&s(v,"class",null,B.class,q),m&4&&s(v,"style",V.style,B.style,q),m&8){const z=P.dynamicProps;for(let le=0;le<z.length;le++){const ve=z[le],ce=V[ve],ge=B[ve];(ge!==ce||ve==="value")&&s(v,ve,ce,ge,q,k)}}m&1&&y.children!==P.children&&u(v,P.children)}else!oe&&C==null&&A(v,V,B,k,q);((O=B.onVnodeUpdated)||F)&&fn(()=>{O&&Hn(O,k,P,y),F&&lr(P,y,k,"updated")},Q)},E=(y,P,k,Q,q,se,oe)=>{for(let v=0;v<P.length;v++){const m=y[v],C=P[v],F=m.el&&(m.type===En||!Mr(m,C)||m.shapeFlag&70)?f(m.el):k;b(m,C,F,null,Q,q,se,oe,!0)}},A=(y,P,k,Q,q)=>{if(P!==k){if(P!==ht)for(const se in P)!ra(se)&&!(se in k)&&s(y,se,P[se],null,q,Q);for(const se in k){if(ra(se))continue;const oe=k[se],v=P[se];oe!==v&&se!=="value"&&s(y,se,v,oe,q,Q)}"value"in k&&s(y,"value",P.value,k.value,q)}},D=(y,P,k,Q,q,se,oe,v,m)=>{const C=P.el=y?y.el:o(""),F=P.anchor=y?y.anchor:o("");let{patchFlag:V,dynamicChildren:B,slotScopeIds:O}=P;O&&(v=v?v.concat(O):O),y==null?(i(C,k,Q),i(F,k,Q),I(P.children||[],k,F,q,se,oe,v,m)):V>0&&V&64&&B&&y.dynamicChildren?(E(y.dynamicChildren,B,k,q,se,oe,v),(P.key!=null||q&&P===q.subTree)&&k_(y,P,!0)):$(y,P,k,F,q,se,oe,v,m)},U=(y,P,k,Q,q,se,oe,v,m)=>{P.slotScopeIds=v,y==null?P.shapeFlag&512?q.ctx.activate(P,k,Q,oe,m):X(P,k,Q,q,se,oe,m):ne(y,P,m)},X=(y,P,k,Q,q,se,oe)=>{const v=y.component=qv(y,Q,q);if(fl(y)&&(v.ctx.renderer=fe),Kv(v,!1,oe),v.asyncDep){if(q&&q.registerDep(v,W,oe),!y.el){const m=v.subTree=yt(Mn);d(null,m,P,k)}}else W(v,y,P,k,q,se,oe)},ne=(y,P,k)=>{const Q=P.component=y.component;if(kv(y,P,k))if(Q.asyncDep&&!Q.asyncResolved){te(Q,P,k);return}else Q.next=P,Q.update();else P.el=y.el,Q.vnode=P},W=(y,P,k,Q,q,se,oe)=>{const v=()=>{if(y.isMounted){let{next:V,bu:B,u:O,parent:z,vnode:le}=y;{const De=B_(y);if(De){V&&(V.el=le.el,te(y,V,oe)),De.asyncDep.then(()=>{y.isUnmounted||v()});return}}let ve=V,ce;cr(y,!1),V?(V.el=le.el,te(y,V,oe)):V=le,B&&Fl(B),(ce=V.props&&V.props.onVnodeBeforeUpdate)&&Hn(ce,z,V,le),cr(y,!0);const ge=Xl(y),Le=y.subTree;y.subTree=ge,b(Le,ge,f(Le.el),H(Le),y,q,se),V.el=ge.el,ve===null&&Bv(y,ge.el),O&&fn(O,q),(ce=V.props&&V.props.onVnodeUpdated)&&fn(()=>Hn(ce,z,V,le),q)}else{let V;const{el:B,props:O}=P,{bm:z,m:le,parent:ve,root:ce,type:ge}=y,Le=aa(P);if(cr(y,!1),z&&Fl(z),!Le&&(V=O&&O.onVnodeBeforeMount)&&Hn(V,ve,P),cr(y,!0),B&&ye){const De=()=>{y.subTree=Xl(y),ye(B,y.subTree,y,q,null)};Le&&ge.__asyncHydrate?ge.__asyncHydrate(B,y,De):De()}else{ce.ce&&ce.ce._injectChildStyle(ge);const De=y.subTree=Xl(y);b(null,De,k,Q,y,q,se),P.el=De.el}if(le&&fn(le,q),!Le&&(V=O&&O.onVnodeMounted)){const De=P;fn(()=>Hn(V,ve,De),q)}(P.shapeFlag&256||ve&&aa(ve.vnode)&&ve.vnode.shapeFlag&256)&&y.a&&fn(y.a,q),y.isMounted=!0,P=k=Q=null}};y.scope.on();const m=y.effect=new Ym(v);y.scope.off();const C=y.update=m.run.bind(m),F=y.job=m.runIfDirty.bind(m);F.i=y,F.id=y.uid,m.scheduler=()=>Cf(F),cr(y,!0),C()},te=(y,P,k)=>{P.component=y;const Q=y.vnode.props;y.vnode=P,y.next=null,Sv(y,P.props,Q,k),Av(y,P.children,k),tr(),Nh(y),nr()},$=(y,P,k,Q,q,se,oe,v,m=!1)=>{const C=y&&y.children,F=y?y.shapeFlag:0,V=P.children,{patchFlag:B,shapeFlag:O}=P;if(B>0){if(B&128){me(C,V,k,Q,q,se,oe,v,m);return}else if(B&256){pe(C,V,k,Q,q,se,oe,v,m);return}}O&8?(F&16&&_e(C,q,se),V!==C&&u(k,V)):F&16?O&16?me(C,V,k,Q,q,se,oe,v,m):_e(C,q,se,!0):(F&8&&u(k,""),O&16&&I(V,k,Q,q,se,oe,v,m))},pe=(y,P,k,Q,q,se,oe,v,m)=>{y=y||fs,P=P||fs;const C=y.length,F=P.length,V=Math.min(C,F);let B;for(B=0;B<V;B++){const O=P[B]=m?Bi(P[B]):Wn(P[B]);b(y[B],O,k,null,q,se,oe,v,m)}C>F?_e(y,q,se,!0,!1,V):I(P,k,Q,q,se,oe,v,m,V)},me=(y,P,k,Q,q,se,oe,v,m)=>{let C=0;const F=P.length;let V=y.length-1,B=F-1;for(;C<=V&&C<=B;){const O=y[C],z=P[C]=m?Bi(P[C]):Wn(P[C]);if(Mr(O,z))b(O,z,k,null,q,se,oe,v,m);else break;C++}for(;C<=V&&C<=B;){const O=y[V],z=P[B]=m?Bi(P[B]):Wn(P[B]);if(Mr(O,z))b(O,z,k,null,q,se,oe,v,m);else break;V--,B--}if(C>V){if(C<=B){const O=B+1,z=O<F?P[O].el:Q;for(;C<=B;)b(null,P[C]=m?Bi(P[C]):Wn(P[C]),k,z,q,se,oe,v,m),C++}}else if(C>B)for(;C<=V;)we(y[C],q,se,!0),C++;else{const O=C,z=C,le=new Map;for(C=z;C<=B;C++){const Ue=P[C]=m?Bi(P[C]):Wn(P[C]);Ue.key!=null&&le.set(Ue.key,C)}let ve,ce=0;const ge=B-z+1;let Le=!1,De=0;const be=new Array(ge);for(C=0;C<ge;C++)be[C]=0;for(C=O;C<=V;C++){const Ue=y[C];if(ce>=ge){we(Ue,q,se,!0);continue}let Ke;if(Ue.key!=null)Ke=le.get(Ue.key);else for(ve=z;ve<=B;ve++)if(be[ve-z]===0&&Mr(Ue,P[ve])){Ke=ve;break}Ke===void 0?we(Ue,q,se,!0):(be[Ke-z]=C+1,Ke>=De?De=Ke:Le=!0,b(Ue,P[Ke],k,null,q,se,oe,v,m),ce++)}const qe=Le?Pv(be):fs;for(ve=qe.length-1,C=ge-1;C>=0;C--){const Ue=z+C,Ke=P[Ue],G=Ue+1<F?P[Ue+1].el:Q;be[C]===0?b(null,Ke,k,G,q,se,oe,v,m):Le&&(ve<0||C!==qe[ve]?de(Ke,k,G,2):ve--)}}},de=(y,P,k,Q,q=null)=>{const{el:se,type:oe,transition:v,children:m,shapeFlag:C}=y;if(C&6){de(y.component.subTree,P,k,Q);return}if(C&128){y.suspense.move(P,k,Q);return}if(C&64){oe.move(y,P,k,fe);return}if(oe===En){i(se,P,k);for(let V=0;V<m.length;V++)de(m[V],P,k,Q);i(y.anchor,P,k);return}if(oe===wo){g(y,P,k);return}if(Q!==2&&C&1&&v)if(Q===0)v.beforeEnter(se),i(se,P,k),fn(()=>v.enter(se),q);else{const{leave:V,delayLeave:B,afterLeave:O}=v,z=()=>i(se,P,k),le=()=>{V(se,()=>{z(),O&&O()})};B?B(se,z,le):le()}else i(se,P,k)},we=(y,P,k,Q=!1,q=!1)=>{const{type:se,props:oe,ref:v,children:m,dynamicChildren:C,shapeFlag:F,patchFlag:V,dirs:B,cacheIndex:O}=y;if(V===-2&&(q=!1),v!=null&&Wc(v,null,k,y,!0),O!=null&&(P.renderCache[O]=void 0),F&256){P.ctx.deactivate(y);return}const z=F&1&&B,le=!aa(y);let ve;if(le&&(ve=oe&&oe.onVnodeBeforeUnmount)&&Hn(ve,P,y),F&6)ue(y.component,k,Q);else{if(F&128){y.suspense.unmount(k,Q);return}z&&lr(y,null,P,"beforeUnmount"),F&64?y.type.remove(y,P,k,fe,Q):C&&!C.hasOnce&&(se!==En||V>0&&V&64)?_e(C,P,k,!1,!0):(se===En&&V&384||!q&&F&16)&&_e(m,P,k),Q&&Pe(y)}(le&&(ve=oe&&oe.onVnodeUnmounted)||z)&&fn(()=>{ve&&Hn(ve,P,y),z&&lr(y,null,P,"unmounted")},k)},Pe=y=>{const{type:P,el:k,anchor:Q,transition:q}=y;if(P===En){ee(k,Q);return}if(P===wo){x(y);return}const se=()=>{r(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(y.shapeFlag&1&&q&&!q.persisted){const{leave:oe,delayLeave:v}=q,m=()=>oe(k,se);v?v(y.el,se,m):m()}else se()},ee=(y,P)=>{let k;for(;y!==P;)k=h(y),r(y),y=k;r(P)},ue=(y,P,k)=>{const{bum:Q,scope:q,job:se,subTree:oe,um:v,m,a:C}=y;Vh(m),Vh(C),Q&&Fl(Q),q.stop(),se&&(se.flags|=8,we(oe,y,P,k)),v&&fn(v,P),fn(()=>{y.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},_e=(y,P,k,Q=!1,q=!1,se=0)=>{for(let oe=se;oe<y.length;oe++)we(y[oe],P,k,Q,q)},H=y=>{if(y.shapeFlag&6)return H(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const P=h(y.anchor||y.el),k=P&&P[Q0];return k?h(k):P};let ae=!1;const ie=(y,P,k)=>{y==null?P._vnode&&we(P._vnode,null,null,!0):b(P._vnode||null,y,P,null,null,null,k),P._vnode=y,ae||(ae=!0,Nh(),h_(),ae=!1)},fe={p:b,um:we,m:de,r:Pe,mt:X,mc:I,pc:$,pbc:E,n:H,o:t};let Me,ye;return e&&([Me,ye]=e(fe)),{render:ie,hydrate:Me,createApp:yv(ie,Me)}}function Wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function k_(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Bi(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&k_(a,o)),o.type===Ia&&(o.el=a.el)}}function Pv(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function B_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:B_(e)}function Vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Lv=Symbol.for("v-scx"),Iv=()=>Tn(Lv);function vi(t,e,n){return z_(t,e,n)}function z_(t,e,n=ht){const{immediate:i,deep:r,flush:s,once:a}=n,o=Lt({},n);let l;if(ml)if(s==="sync"){const h=Iv();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!e||i)o.once=!0;else return{stop:On,resume:On,pause:On};const c=Ft;o.call=(h,p,S)=>Bn(h,c,p,S);let u=!1;s==="post"?o.scheduler=h=>{fn(h,c&&c.suspense)}:s!=="sync"&&(u=!0,o.scheduler=(h,p)=>{p?h():Cf(h)}),o.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=j0(t,e,o);return l&&l.push(f),f}function Dv(t,e,n){const i=this.proxy,r=Mt(t)?t.includes(".")?H_(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const a=Na(this),o=z_(r,s.bind(i),n);return a(),o}function H_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Nv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${Br(e)}Modifiers`];function Ov(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ht;let r=n;const s=e.startsWith("update:"),a=s&&Nv(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Mt(u)?u.trim():u)),a.number&&(r=n.map(h0)));let o,l=i[o=Ul(e)]||i[o=Ul(kn(e))];!l&&s&&(l=i[o=Ul(Br(e))]),l&&Bn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Bn(c,t,6,r)}}function V_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!We(t)){const l=c=>{const u=V_(c,e,!0);u&&(o=!0,Lt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(vt(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>a[l]=null):Lt(a,s),vt(t)&&i.set(t,a),a)}function pl(t,e){return!t||!tl(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Br(e))||lt(t,e))}function Xl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:S,inheritAttrs:b}=t,_=Ho(t);let d,M;try{if(n.shapeFlag&4){const x=r||i,R=x;d=Wn(c.call(R,x,u,f,p,h,S)),M=o}else{const x=e;d=Wn(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),M=e.props?o:Uv(o)}}catch(x){la.length=0,ul(x,t,1),d=yt(Mn)}let g=d;if(M&&b!==!1){const x=Object.keys(M),{shapeFlag:R}=g;x.length&&R&7&&(s&&x.some(pf)&&(M=Fv(M,s)),g=$i(g,M,!1,!0))}return n.dirs&&(g=$i(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&xa(g,n.transition),d=g,Ho(_),d}const Uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||tl(n))&&((e||(e={}))[n]=t[n]);return e},Fv=(t,e)=>{const n={};for(const i in t)(!pf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function kv(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!pl(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gh(i,a,c):!0:!!a;return!1}function Gh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!pl(n,s))return!0}return!1}function Bv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const G_=t=>t.__isSuspense;function zv(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Z0(t)}const En=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),la=[];let pn=null;function Ss(t=!1){la.push(pn=t?null:[])}function Hv(){la.pop(),pn=la[la.length-1]||null}let ya=1;function Wh(t){ya+=t,t<0&&pn&&(pn.hasOnce=!0)}function W_(t){return t.dynamicChildren=ya>0?pn||fs:null,Hv(),ya>0&&pn&&pn.push(t),t}function Da(t,e,n,i,r,s){return W_(Ct(t,e,n,i,r,s,!0))}function Vv(t,e,n,i,r){return W_(yt(t,e,n,i,r,!0))}function qc(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const X_=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Mt(t)||kt(t)||We(t)?{i:rn,r:t,k:e,f:!!n}:t:null);function Ct(t,e=null,n=null,i=0,r=null,s=t===En?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&X_(e),ref:e&&Co(e),scopeId:p_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return o?(Nf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Mt(n)?8:16),ya>0&&!a&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const yt=Gv;function Gv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===T_)&&(t=Mn),qc(t)){const o=$i(t,e,!0);return n&&Nf(o,n),ya>0&&!s&&pn&&(o.shapeFlag&6?pn[pn.indexOf(t)]=o:pn.push(o)),o.patchFlag=-2,o}if(tx(t)&&(t=t.__vccOpts),e){e=Wv(e);let{class:o,style:l}=e;o&&!Mt(o)&&(e.class=al(o)),vt(l)&&(bf(l)&&!He(l)&&(l=Lt({},l)),e.style=sl(l))}const a=Mt(t)?1:G_(t)?128:m_(t)?64:vt(t)?4:We(t)?2:0;return Ct(t,e,n,i,r,a,s,!0)}function Wv(t){return t?bf(t)||L_(t)?Lt({},t):t:null}function $i(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?Yv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&X_(c),ref:e&&e.ref?n&&s?He(s)?s.concat(Co(e)):[s,Co(e)]:Co(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==En?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$i(t.ssContent),ssFallback:t.ssFallback&&$i(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&xa(u,l.clone(u)),u}function Kc(t=" ",e=0){return yt(Ia,null,t,e)}function Xv(t,e){const n=yt(wo,null,t);return n.staticCount=e,n}function Wn(t){return t==null||typeof t=="boolean"?yt(Mn):He(t)?yt(En,null,t.slice()):typeof t=="object"?Bi(t):yt(Ia,null,String(t))}function Bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$i(t)}function Nf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Nf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!L_(e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:rn},n=32):(e=String(e),i&64?(n=16,e=[Kc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=al([e.class,i.class]));else if(r==="style")e.style=sl([e.style,i.style]);else if(tl(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Hn(t,e,n,i=null){Bn(t,e,7,[n,i])}const $v=C_();let jv=0;function qv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||$v,s={uid:jv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:D_(i,r),emitsOptions:V_(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ov.bind(null,s),t.ce&&t.ce(s),s}let Ft=null;const Ms=()=>Ft||rn;let Go,Zc;{const t=zm(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Go=e("__VUE_INSTANCE_SETTERS__",n=>Ft=n),Zc=e("__VUE_SSR_SETTERS__",n=>ml=n)}const Na=t=>{const e=Ft;return Go(t),t.scope.on(),()=>{t.scope.off(),Go(e)}},Xh=()=>{Ft&&Ft.scope.off(),Go(null)};function Y_(t){return t.vnode.shapeFlag&4}let ml=!1;function Kv(t,e=!1,n=!1){e&&Zc(e);const{props:i,children:r}=t.vnode,s=Y_(t);Ev(t,i,s,e),Tv(t,r,n);const a=s?Zv(t,e):void 0;return e&&Zc(!1),a}function Zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dv);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Qv(t):null,s=Na(t);tr();const a=La(i,t,0,[t.props,r]);if(nr(),s(),Um(a)){if(aa(t)||E_(t),a.then(Xh,Xh),e)return a.then(o=>{Yh(t,o,e)}).catch(o=>{ul(o,t,0)});t.asyncDep=a}else Yh(t,a,e)}else $_(t,e)}function Yh(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=l_(e)),$_(t,n)}let $h;function $_(t,e,n){const i=t.type;if(!t.render){if(!e&&$h&&!i.render){const r=i.template||If(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:s,delimiters:o},a),l);i.render=$h(r,c)}}t.render=i.render||On}{const r=Na(t);tr();try{pv(t)}finally{nr(),r()}}}const Jv={get(t,e){return Xt(t,"get",""),t[e]}};function Qv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jv),slots:t.slots,emit:t.emit,expose:e}}function _l(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(l_(V0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oa)return oa[n](t)},has(e,n){return n in e||n in oa}})):t.proxy}function ex(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function tx(t){return We(t)&&"__vccOpts"in t}const rt=(t,e)=>Y0(t,e,ml);function ks(t,e,n){const i=arguments.length;return i===2?vt(e)&&!He(e)?qc(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&qc(n)&&(n=[n]),yt(t,e,n))}const nx="3.5.3";/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jc;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{Jc=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const j_=Jc?t=>Jc.createHTML(t):t=>t,ix="http://www.w3.org/2000/svg",rx="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,qh=ci&&ci.createElement("template"),sx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ci.createElementNS(ix,t):e==="mathml"?ci.createElementNS(rx,t):n?ci.createElement(t,{is:n}):ci.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ci.createTextNode(t),createComment:t=>ci.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ci.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{qh.innerHTML=j_(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=qh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ai="transition",Ws="animation",Ea=Symbol("_vtc"),q_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ax=Lt({},__,q_),ox=t=>(t.displayName="Transition",t.props=ax,t),K_=ox((t,{slots:e})=>ks(nv,lx(t),e)),ur=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},Kh=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function lx(t){const e={};for(const D in t)D in q_||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,S=cx(r),b=S&&S[0],_=S&&S[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:g,onLeave:x,onLeaveCancelled:R,onBeforeAppear:T=d,onAppear:w=M,onAppearCancelled:I=g}=e,N=(D,U,X)=>{fr(D,U?u:o),fr(D,U?c:a),X&&X()},E=(D,U)=>{D._isLeaving=!1,fr(D,f),fr(D,p),fr(D,h),U&&U()},A=D=>(U,X)=>{const ne=D?w:M,W=()=>N(U,D,X);ur(ne,[U,W]),Zh(()=>{fr(U,D?l:s),wi(U,D?u:o),Kh(ne)||Jh(U,i,b,W)})};return Lt(e,{onBeforeEnter(D){ur(d,[D]),wi(D,s),wi(D,a)},onBeforeAppear(D){ur(T,[D]),wi(D,l),wi(D,c)},onEnter:A(!1),onAppear:A(!0),onLeave(D,U){D._isLeaving=!0;const X=()=>E(D,U);wi(D,f),wi(D,h),hx(),Zh(()=>{D._isLeaving&&(fr(D,f),wi(D,p),Kh(x)||Jh(D,i,_,X))}),ur(x,[D,X])},onEnterCancelled(D){N(D,!1),ur(g,[D])},onAppearCancelled(D){N(D,!0),ur(I,[D])},onLeaveCancelled(D){E(D),ur(R,[D])}})}function cx(t){if(t==null)return null;if(vt(t))return[Yl(t.enter),Yl(t.leave)];{const e=Yl(t);return[e,e]}}function Yl(t){return d0(t)}function wi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ea]||(t[Ea]=new Set)).add(e)}function fr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ea];n&&(n.delete(e),n.size||(t[Ea]=void 0))}function Zh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ux=0;function Jh(t,e,n,i){const r=t._endId=++ux,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=fx(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,h)}function fx(t,e){const n=window.getComputedStyle(t),i=S=>(n[S]||"").split(", "),r=i(`${Ai}Delay`),s=i(`${Ai}Duration`),a=Qh(r,s),o=i(`${Ws}Delay`),l=i(`${Ws}Duration`),c=Qh(o,l);let u=null,f=0,h=0;e===Ai?a>0&&(u=Ai,f=a,h=s.length):e===Ws?c>0&&(u=Ws,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?Ai:Ws:null,h=u?u===Ai?s.length:l.length:0);const p=u===Ai&&/\b(transform|all)(,|$)/.test(i(`${Ai}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>ed(n)+ed(t[i])))}function ed(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function hx(){return document.body.offsetHeight}function dx(t,e,n){const i=t[Ea];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wo=Symbol("_vod"),Z_=Symbol("_vsh"),px={beforeMount(t,{value:e},{transition:n}){t[Wo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Xs(t,!0),i.enter(t)):i.leave(t,()=>{Xs(t,!1)}):Xs(t,e))},beforeUnmount(t,{value:e}){Xs(t,e)}};function Xs(t,e){t.style.display=e?t[Wo]:"none",t[Z_]=!e}const mx=Symbol(""),_x=/(^|;)\s*display\s*:/;function gx(t,e,n){const i=t.style,r=Mt(n);let s=!1;if(n&&!r){if(e)if(Mt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ro(i,o,"")}else for(const a in e)n[a]==null&&Ro(i,a,"");for(const a in n)a==="display"&&(s=!0),Ro(i,a,n[a])}else if(r){if(e!==n){const a=i[mx];a&&(n+=";"+a),i.cssText=n,s=_x.test(n)}}else e&&t.removeAttribute("style");Wo in t&&(t[Wo]=s?i.display:"",t[Z_]&&(i.display="none"))}const td=/\s*!important$/;function Ro(t,e,n){if(He(n))n.forEach(i=>Ro(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=vx(t,e);td.test(n)?t.setProperty(Br(i),n.replace(td,""),"important"):t[i]=n}}const nd=["Webkit","Moz","ms"],$l={};function vx(t,e){const n=$l[e];if(n)return n;let i=kn(e);if(i!=="filter"&&i in t)return $l[e]=i;i=rl(i);for(let r=0;r<nd.length;r++){const s=nd[r]+i;if(s in t)return $l[e]=s}return e}const id="http://www.w3.org/1999/xlink";function rd(t,e,n,i,r,s=x0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(id,e.slice(6,e.length)):t.setAttributeNS(id,e,n):n==null||s&&!Hm(n)?t.removeAttribute(e):t.setAttribute(e,s?"":er(n)?String(n):n)}function xx(t,e,n,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?j_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,o=n==null?t.type==="checkbox"?"on":"":String(n);(a!==o||!("_value"in t))&&(t.value=o),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Hm(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function yx(t,e,n,i){t.addEventListener(e,n,i)}function Ex(t,e,n,i){t.removeEventListener(e,n,i)}const sd=Symbol("_vei");function Sx(t,e,n,i,r=null){const s=t[sd]||(t[sd]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Mx(e);if(i){const c=s[e]=Ax(i,r);yx(t,o,c,l)}else a&&(Ex(t,o,a,l),s[e]=void 0)}}const ad=/(?:Once|Passive|Capture)$/;function Mx(t){let e;if(ad.test(t)){e={};let i;for(;i=t.match(ad);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Br(t.slice(2)),e]}let jl=0;const bx=Promise.resolve(),Tx=()=>jl||(bx.then(()=>jl=0),jl=Date.now());function Ax(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Bn(wx(i,n.value),e,5,[i])};return n.value=t,n.attached=Tx(),n}function wx(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const od=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cx=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?dx(t,i,a):e==="style"?gx(t,n,i):tl(e)?pf(e)||Sx(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rx(t,e,i,a))?(xx(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rd(t,e,i,a,s,e!=="value")):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rd(t,e,i,a))};function Rx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&od(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return od(e)&&Mt(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Mt(n)))}const Px=Lt({patchProp:Cx},sx);let ld;function Lx(){return ld||(ld=wv(Px))}const Of=(...t)=>{const e=Lx().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Dx(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Ix(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ix(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dx(t){return Mt(t)?document.querySelector(t):t}const J_="/assets/logo-c08a4f81.webp";/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof document<"u";function Nx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ot=Object.assign;function ql(t,e){const n={};for(const i in e){const r=e[i];n[i]=zn(r)?r.map(t):t(r)}return n}const ca=()=>{},zn=Array.isArray,Q_=/#/g,Ox=/&/g,Ux=/\//g,Fx=/=/g,kx=/\?/g,eg=/\+/g,Bx=/%5B/g,zx=/%5D/g,tg=/%5E/g,Hx=/%60/g,ng=/%7B/g,Vx=/%7C/g,ig=/%7D/g,Gx=/%20/g;function Uf(t){return encodeURI(""+t).replace(Vx,"|").replace(Bx,"[").replace(zx,"]")}function Wx(t){return Uf(t).replace(ng,"{").replace(ig,"}").replace(tg,"^")}function Qc(t){return Uf(t).replace(eg,"%2B").replace(Gx,"+").replace(Q_,"%23").replace(Ox,"%26").replace(Hx,"`").replace(ng,"{").replace(ig,"}").replace(tg,"^")}function Xx(t){return Qc(t).replace(Fx,"%3D")}function Yx(t){return Uf(t).replace(Q_,"%23").replace(kx,"%3F")}function $x(t){return t==null?"":Yx(t).replace(Ux,"%2F")}function Sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jx=/\/$/,qx=t=>t.replace(jx,"");function Kl(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Qx(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Sa(a)}}function Kx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&bs(e.matched[i],n.matched[r])&&rg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jx(t[n],e[n]))return!1;return!0}function Jx(t,e){return zn(t)?ud(t,e):zn(e)?ud(e,t):t===e}function ud(t,e){return zn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Qx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ma;(function(t){t.pop="pop",t.push="push"})(Ma||(Ma={}));var ua;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ua||(ua={}));function ey(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qx(t)}const ty=/^[^#]+#/;function ny(t,e){return t.replace(ty,"#")+e}function iy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const gl=()=>({left:window.scrollX,top:window.scrollY});function ry(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=iy(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fd(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function sy(t,e){eu.set(t,e)}function ay(t){const e=eu.get(t);return eu.delete(t),e}let oy=()=>location.protocol+"//"+location.host;function sg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),cd(l,"")}return cd(n,t)+i+r}function ly(t,e,n,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=sg(t,location),S=n.value,b=e.value;let _=0;if(h){if(n.value=p,e.value=h,a&&a===S){a=null;return}_=b?h.position-b.position:0}else i(p);r.forEach(d=>{d(n.value,S,{delta:_,type:Ma.pop,direction:_?_>0?ua.forward:ua.back:ua.unknown})})};function l(){a=n.value}function c(h){r.push(h);const p=()=>{const S=r.indexOf(h);S>-1&&r.splice(S,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:gl()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function hd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?gl():null}}function cy(t){const{history:e,location:n}=window,i={value:sg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:oy()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function a(l,c){const u=ot({},e.state,hd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:gl()});s(u.current,u,!0);const f=ot({},hd(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function uy(t){t=ey(t);const e=cy(t),n=ly(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=ot({location:"",base:t,go:i,createHref:ny.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function fy(t){return typeof t=="string"||t&&typeof t=="object"}function ag(t){return typeof t=="string"||typeof t=="symbol"}const og=Symbol("");var dd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dd||(dd={}));function Ts(t,e){return ot(new Error,{type:t,[og]:!0},e)}function ei(t,e){return t instanceof Error&&og in t&&(e==null||!!(t.type&e))}const pd="[^/]+?",hy={sensitive:!1,strict:!1,start:!0,end:!0},dy=/[.+*?^${}()[\]/\\]/g;function py(t,e){const n=ot({},hy,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(dy,"\\$&"),p+=40;else if(h.type===1){const{value:S,repeatable:b,optional:_,regexp:d}=h;s.push({name:S,repeatable:b,optional:_});const M=d||pd;if(M!==pd){p+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+x.message)}}let g=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(g=_&&c.length<2?`(?:/${g})`:"/"+g),_&&(g+="?"),r+=g,p+=20,_&&(p+=-8),b&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",S=s[h-1];f[S.name]=p&&S.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:S,repeatable:b,optional:_}=p,d=S in c?c[S]:"";if(zn(d)&&!b)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const M=zn(d)?d.join("/"):d;if(!M)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function my(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function lg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=my(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(md(i))return 1;if(md(r))return-1}return r.length-i.length}function md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _y={type:0,value:""},gy=/[a-zA-Z0-9_]/;function vy(t){if(!t)return[[]];if(t==="/")return[[_y]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:gy.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function xy(t,e,n){const i=py(vy(t.path),n),r=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yy(t,e){const n=[],i=new Map;e=vd({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const S=!p,b=Ey(f);b.aliasOf=p&&p.record;const _=vd(e,f),d=[b];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of x)d.push(ot({},b,{components:p?p.record.components:b.components,path:R,aliasOf:p?p.record:b}))}let M,g;for(const x of d){const{path:R}=x;if(h&&R[0]!=="/"){const T=h.record.path,w=T[T.length-1]==="/"?"":"/";x.path=h.record.path+(R&&w+R)}if(M=xy(x,h,_),p?p.alias.push(M):(g=g||M,g!==M&&g.alias.push(M),S&&f.name&&!gd(M)&&a(f.name)),cg(M)&&l(M),b.children){const T=b.children;for(let w=0;w<T.length;w++)s(T[w],M,p&&p.children[w])}p=p||M}return g?()=>{a(g)}:ca}function a(f){if(ag(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const h=by(f,n);n.splice(h,0,f),f.record.name&&!gd(f)&&i.set(f.record.name,f)}function c(f,h){let p,S={},b,_;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Ts(1,{location:f});_=p.record.name,S=ot(_d(h.params,p.keys.filter(g=>!g.optional).concat(p.parent?p.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&_d(f.params,p.keys.map(g=>g.name))),b=p.stringify(S)}else if(f.path!=null)b=f.path,p=n.find(g=>g.re.test(b)),p&&(S=p.parse(b),_=p.record.name);else{if(p=h.name?i.get(h.name):n.find(g=>g.re.test(h.path)),!p)throw Ts(1,{location:f,currentLocation:h});_=p.record.name,S=ot({},h.params,f.params),b=p.stringify(S)}const d=[];let M=p;for(;M;)d.unshift(M.record),M=M.parent;return{name:_,path:b,params:S,matched:d,meta:My(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function _d(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ey(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Sy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Sy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function My(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function vd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function by(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;lg(t,e[s])<0?i=s:n=s+1}const r=Ty(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Ty(t){let e=t;for(;e=e.parent;)if(cg(e)&&lg(t,e)===0)return e}function cg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ay(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(eg," "),a=s.indexOf("="),o=Sa(a<0?s:s.slice(0,a)),l=a<0?null:Sa(s.slice(a+1));if(o in e){let c=e[o];zn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function xd(t){let e="";for(let n in t){const i=t[n];if(n=Xx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(zn(i)?i.map(s=>s&&Qc(s)):[i&&Qc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function wy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=zn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Cy=Symbol(""),yd=Symbol(""),vl=Symbol(""),Ff=Symbol(""),tu=Symbol("");function Ys(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zi(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Ts(4,{from:n,to:e})):h instanceof Error?l(h):fy(h)?l(Ts(2,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Zl(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Ry(l)){const u=(l.__vccOpts||l)[e];u&&s.push(zi(u,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const f=Nx(u)?u.default:u;a.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&zi(p,n,i,a,o,r)()}))}}return s}function Ry(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ed(t){const e=Tn(vl),n=Tn(Ff),i=rt(()=>{const l=ps(t.to);return e.resolve(l)}),r=rt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(bs.bind(null,u));if(h>-1)return h;const p=Sd(l[c-2]);return c>1&&Sd(u)===p&&f[f.length-1].path!==p?f.findIndex(bs.bind(null,l[c-2])):h}),s=rt(()=>r.value>-1&&Iy(n.params,i.value.params)),a=rt(()=>r.value>-1&&r.value===n.matched.length-1&&rg(n.params,i.value.params));function o(l={}){return Ly(l)?e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(ca):Promise.resolve()}return{route:i,href:rt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Py=Fs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ed,setup(t,{slots:e}){const n=cl(Ed(t)),{options:i}=Tn(vl),r=rt(()=>({[Md(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Md(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ks("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),ug=Py;function Ly(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Iy(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!zn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Sd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Md=(t,e,n)=>t??e??n,Dy=Fs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Tn(tu),r=rt(()=>t.route||i.value),s=Tn(yd,0),a=rt(()=>{let c=ps(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=rt(()=>r.value.matched[a.value]);Ao(yd,rt(()=>a.value+1)),Ao(Cy,o),Ao(tu,r);const l=Sr();return vi(()=>[l.value,o.value,t.name],([c,u,f],[h,p,S])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!bs(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,h=f&&f.components[u];if(!h)return bd(n.default,{Component:h,route:c});const p=f.props[u],S=p?p===!0?c.params:typeof p=="function"?p(c):p:null,_=ks(h,ot({},S,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return bd(n.default,{Component:_,route:c})||_}}});function bd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ny=Dy;function Oy(t){const e=yy(t.routes,t),n=t.parseQuery||Ay,i=t.stringifyQuery||xd,r=t.history,s=Ys(),a=Ys(),o=Ys(),l=Af(Ci);let c=Ci;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ql.bind(null,H=>""+H),f=ql.bind(null,$x),h=ql.bind(null,Sa);function p(H,ae){let ie,fe;return ag(H)?(ie=e.getRecordMatcher(H),fe=ae):fe=H,e.addRoute(fe,ie)}function S(H){const ae=e.getRecordMatcher(H);ae&&e.removeRoute(ae)}function b(){return e.getRoutes().map(H=>H.record)}function _(H){return!!e.getRecordMatcher(H)}function d(H,ae){if(ae=ot({},ae||l.value),typeof H=="string"){const P=Kl(n,H,ae.path),k=e.resolve({path:P.path},ae),Q=r.createHref(P.fullPath);return ot(P,k,{params:h(k.params),hash:Sa(P.hash),redirectedFrom:void 0,href:Q})}let ie;if(H.path!=null)ie=ot({},H,{path:Kl(n,H.path,ae.path).path});else{const P=ot({},H.params);for(const k in P)P[k]==null&&delete P[k];ie=ot({},H,{params:f(P)}),ae.params=f(ae.params)}const fe=e.resolve(ie,ae),Me=H.hash||"";fe.params=u(h(fe.params));const ye=Kx(i,ot({},H,{hash:Wx(Me),path:fe.path})),y=r.createHref(ye);return ot({fullPath:ye,hash:Me,query:i===xd?wy(H.query):H.query||{}},fe,{redirectedFrom:void 0,href:y})}function M(H){return typeof H=="string"?Kl(n,H,l.value.path):ot({},H)}function g(H,ae){if(c!==H)return Ts(8,{from:ae,to:H})}function x(H){return w(H)}function R(H){return x(ot(M(H),{replace:!0}))}function T(H){const ae=H.matched[H.matched.length-1];if(ae&&ae.redirect){const{redirect:ie}=ae;let fe=typeof ie=="function"?ie(H):ie;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=M(fe):{path:fe},fe.params={}),ot({query:H.query,hash:H.hash,params:fe.path!=null?{}:H.params},fe)}}function w(H,ae){const ie=c=d(H),fe=l.value,Me=H.state,ye=H.force,y=H.replace===!0,P=T(ie);if(P)return w(ot(M(P),{state:typeof P=="object"?ot({},Me,P.state):Me,force:ye,replace:y}),ae||ie);const k=ie;k.redirectedFrom=ae;let Q;return!ye&&Zx(i,fe,ie)&&(Q=Ts(16,{to:k,from:fe}),de(fe,fe,!0,!1)),(Q?Promise.resolve(Q):E(k,fe)).catch(q=>ei(q)?ei(q,2)?q:me(q):$(q,k,fe)).then(q=>{if(q){if(ei(q,2))return w(ot({replace:y},M(q.to),{state:typeof q.to=="object"?ot({},Me,q.to.state):Me,force:ye}),ae||k)}else q=D(k,fe,!0,y,Me);return A(k,fe,q),q})}function I(H,ae){const ie=g(H,ae);return ie?Promise.reject(ie):Promise.resolve()}function N(H){const ae=ee.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(H):H()}function E(H,ae){let ie;const[fe,Me,ye]=Uy(H,ae);ie=Zl(fe.reverse(),"beforeRouteLeave",H,ae);for(const P of fe)P.leaveGuards.forEach(k=>{ie.push(zi(k,H,ae))});const y=I.bind(null,H,ae);return ie.push(y),_e(ie).then(()=>{ie=[];for(const P of s.list())ie.push(zi(P,H,ae));return ie.push(y),_e(ie)}).then(()=>{ie=Zl(Me,"beforeRouteUpdate",H,ae);for(const P of Me)P.updateGuards.forEach(k=>{ie.push(zi(k,H,ae))});return ie.push(y),_e(ie)}).then(()=>{ie=[];for(const P of ye)if(P.beforeEnter)if(zn(P.beforeEnter))for(const k of P.beforeEnter)ie.push(zi(k,H,ae));else ie.push(zi(P.beforeEnter,H,ae));return ie.push(y),_e(ie)}).then(()=>(H.matched.forEach(P=>P.enterCallbacks={}),ie=Zl(ye,"beforeRouteEnter",H,ae,N),ie.push(y),_e(ie))).then(()=>{ie=[];for(const P of a.list())ie.push(zi(P,H,ae));return ie.push(y),_e(ie)}).catch(P=>ei(P,8)?P:Promise.reject(P))}function A(H,ae,ie){o.list().forEach(fe=>N(()=>fe(H,ae,ie)))}function D(H,ae,ie,fe,Me){const ye=g(H,ae);if(ye)return ye;const y=ae===Ci,P=rs?history.state:{};ie&&(fe||y?r.replace(H.fullPath,ot({scroll:y&&P&&P.scroll},Me)):r.push(H.fullPath,Me)),l.value=H,de(H,ae,ie,y),me()}let U;function X(){U||(U=r.listen((H,ae,ie)=>{if(!ue.listening)return;const fe=d(H),Me=T(fe);if(Me){w(ot(Me,{replace:!0}),fe).catch(ca);return}c=fe;const ye=l.value;rs&&sy(fd(ye.fullPath,ie.delta),gl()),E(fe,ye).catch(y=>ei(y,12)?y:ei(y,2)?(w(y.to,fe).then(P=>{ei(P,20)&&!ie.delta&&ie.type===Ma.pop&&r.go(-1,!1)}).catch(ca),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),$(y,fe,ye))).then(y=>{y=y||D(fe,ye,!1),y&&(ie.delta&&!ei(y,8)?r.go(-ie.delta,!1):ie.type===Ma.pop&&ei(y,20)&&r.go(-1,!1)),A(fe,ye,y)}).catch(ca)}))}let ne=Ys(),W=Ys(),te;function $(H,ae,ie){me(H);const fe=W.list();return fe.length?fe.forEach(Me=>Me(H,ae,ie)):console.error(H),Promise.reject(H)}function pe(){return te&&l.value!==Ci?Promise.resolve():new Promise((H,ae)=>{ne.add([H,ae])})}function me(H){return te||(te=!H,X(),ne.list().forEach(([ae,ie])=>H?ie(H):ae()),ne.reset()),H}function de(H,ae,ie,fe){const{scrollBehavior:Me}=t;if(!rs||!Me)return Promise.resolve();const ye=!ie&&ay(fd(H.fullPath,0))||(fe||!ie)&&history.state&&history.state.scroll||null;return u_().then(()=>Me(H,ae,ye)).then(y=>y&&ry(y)).catch(y=>$(y,H,ae))}const we=H=>r.go(H);let Pe;const ee=new Set,ue={currentRoute:l,listening:!0,addRoute:p,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:b,resolve:d,options:t,push:x,replace:R,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:W.add,isReady:pe,install(H){const ae=this;H.component("RouterLink",ug),H.component("RouterView",Ny),H.config.globalProperties.$router=ae,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),rs&&!Pe&&l.value===Ci&&(Pe=!0,x(r.location).catch(Me=>{}));const ie={};for(const Me in Ci)Object.defineProperty(ie,Me,{get:()=>l.value[Me],enumerable:!0});H.provide(vl,ae),H.provide(Ff,s_(ie)),H.provide(tu,l);const fe=H.unmount;ee.add(H),H.unmount=function(){ee.delete(H),ee.size<1&&(c=Ci,U&&U(),U=null,l.value=Ci,Pe=!1,te=!1),fe()}}};function _e(H){return H.reduce((ae,ie)=>ae.then(()=>N(ie)),Promise.resolve())}return ue}function Uy(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>bs(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>bs(c,l))||r.push(l))}return[n,i,r]}function Fy(){return Tn(vl)}function ky(t){return Tn(Ff)}const Oa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},By={name:"spNav",methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},zy={id:"main"},Hy={class:"menu-circle-social"};function Vy(t,e,n,i,r,s){const a=Lf("router-link");return Ss(),Da("div",zy,[Ct("nav",Hy,[e[2]||(e[2]=Xv('<input type="checkbox" href="#" class="menu-circle-open" name="menu-circle-open" id="menu-open" data-v-29633e17><label class="menu-circle-open-button" for="menu-open" aria-label="メニューを開く" data-v-29633e17><svg class="mp icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 1440 1439.999935" preserveAspectRatio="xMidYMid meet" version="1.0" data-v-29633e17><path fill="#fff" d="M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-29633e17></path><path fill="#dddddd" d="M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-29633e17></path><path fill="#ffffff" d="M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 " fill-opacity="1" fill-rule="evenodd" data-v-29633e17></path></svg></label>',2)),yt(a,{to:"/about",class:"menu-circle-item","aria-label":"山下マナトについて"},{default:pi(()=>e[0]||(e[0]=[Ct("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 35",fill:"#ffffff"},[Ct("path",{d:"M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z",fill:"#ffffff"})],-1)])),_:1}),yt(a,{to:"/works",class:"menu-circle-item","aria-label":"クリエイティブ作品を一部を紹介"},{default:pi(()=>e[1]||(e[1]=[Ct("svg",{class:"icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"#ffffff"},[Ct("path",{d:"M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"})],-1)])),_:1})])])}const Gy=Oa(By,[["render",Vy],["__scopeId","data-v-29633e17"]]);const Wy={id:"main"},Xy={href:"https://manapuraza.com","aria-current":"page"},Yy={class:"app glass"},$y={__name:"App",setup(t){const e=ky(),n=Fy(),i=async()=>{await n.isReady()};vi(e,()=>{console.log("current route: ",e.name),e.name==="home"?(document.querySelector(".app").style.top="20vh",document.querySelector(".app").style.opacity="0",document.querySelector(".app").style.pointerEvents="none"):(document.querySelector(".app").style.top="0",document.querySelector(".app").style.opacity="1",document.querySelector(".app").style.pointerEvents="all")}),dl(()=>{i()});const r=rt(()=>e.path),s=rt(()=>r.value==="/"?"route-home":"route-other"),a=rt(()=>r.value==="/"?{opacity:"1",transition:"all .4s ease-in-out"}:{opacity:"0",filter:"blur(2rem)",transition:"all .4s ease-in-out"});return(o,l)=>{const c=Lf("router-view");return Ss(),Da("div",Wy,[Ct("a",Xy,[Ct("img",{fetchpriority:"high",src:J_,alt:"ホームページに戻る",draggable:"false",id:"center-logo",class:al(s.value),style:sl(a.value)},null,6)]),Ct("div",Yy,[yt(c,null,{default:pi(({Component:u})=>[yt(K_,{name:"slide",mode:"out-in"},{default:pi(()=>[(Ss(),Vv(hv(u),{id:"scrollable-aria"}))]),_:2},1024)]),_:1})]),yt(Gy,{id:"sp-nav"})])}}},jy=Oa($y,[["__scopeId","data-v-c2a2be17"]]),qy="modulepreload",Ky=function(t){return"/"+t},Td={},Jl=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Ky(s),s in Td)return;Td[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":qy,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};const Zy={},Jy={class:"home"};function Qy(t,e){return Ss(),Da("div",Jy)}const eE=Oa(Zy,[["render",Qy],["__scopeId","data-v-21f61980"]]),kf=Oy({history:uy(),routes:[{path:"/",name:"home",component:eE},{path:"/about",name:"about",component:()=>Jl(()=>import("./AboutView-c9b46eb9.js"),["assets/AboutView-c9b46eb9.js","assets/index-7d9a9c74.js","assets/AboutView-d5a72d1d.css"])},{path:"/works",name:"works",component:()=>Jl(()=>import("./WorksView-e1c62986.js"),["assets/WorksView-e1c62986.js","assets/index-7d9a9c74.js","assets/WorksView-510c7227.css"]),meta:{style:{top:"0"}}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Jl(()=>import("./NotFound-b408597e.js"),["assets/NotFound-b408597e.js","assets/NotFound-14139e28.css"])}]});const tE={name:"Navbar",components:{RouterLink:ug},data(){return{currentPath:this.$route.path}},watch:{$route(t,e){this.currentPath=t.path}},methods:{toggleLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"ja":"en"}}},nE={class:"navbar"},iE={class:"logo"},rE={src:J_,alt:"manapuraza.com logo",loading:"lazy",class:"logo"},sE={class:"default-menu"},aE={id:"lang-switch"},oE={class:"lang"},lE={class:"toggle-switch"};function cE(t,e,n,i,r,s){const a=Lf("RouterLink");return Ss(),Da("div",nE,[Ct("div",iE,[yt(a,{to:"/","aria-current":"page","aria-label":"ホームページに戻る"},{default:pi(()=>[yt(K_,{name:"slide",mode:"out-in","aria-current":"page"},{default:pi(()=>[J0(Ct("img",rE,null,512),[[px,r.currentPath!=="/"]])]),_:1})]),_:1})]),Ct("nav",sE,[yt(a,{to:"/about",class:"rlink"},{default:pi(()=>e[1]||(e[1]=[Kc("About")])),_:1}),yt(a,{to:"/works",class:"rlink"},{default:pi(()=>e[2]||(e[2]=[Kc("Works")])),_:1})]),Ct("div",aE,[Ct("span",oE,Gm(t.$t("navbar.toggle")),1),Ct("div",lE,[Ct("input",{class:"toggle-input",id:"toggle",type:"checkbox",onClick:e[0]||(e[0]=(...o)=>s.toggleLanguage&&s.toggleLanguage(...o))}),e[3]||(e[3]=Ct("label",{class:"toggle-label",for:"toggle"},null,-1))])])])}const uE=Oa(tE,[["render",cE],["__scopeId","data-v-5990f93c"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="169",gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fE=0,Ad=1,hE=2,fg=1,dE=2,li=3,ji=0,an=1,fi=2,Wi=0,vs=1,wd=2,Cd=3,Rd=4,pE=5,br=100,mE=101,_E=102,gE=103,vE=104,xE=200,yE=201,EE=202,SE=203,nu=204,iu=205,ME=206,bE=207,TE=208,AE=209,wE=210,CE=211,RE=212,PE=213,LE=214,ru=0,su=1,au=2,As=3,ou=4,lu=5,cu=6,uu=7,zf=0,IE=1,DE=2,Xi=0,NE=1,OE=2,UE=3,FE=4,kE=5,BE=6,zE=7,hg=300,ws=301,Cs=302,fu=303,hu=304,xl=306,du=1e3,wr=1001,pu=1002,bn=1003,HE=1004,Ja=1005,Ln=1006,Ql=1007,Cr=1008,xi=1009,dg=1010,pg=1011,ba=1012,Hf=1013,Nr=1014,mi=1015,Ua=1016,Vf=1017,Gf=1018,Rs=1020,mg=35902,_g=1021,gg=1022,Dn=1023,vg=1024,xg=1025,xs=1026,Ps=1027,yg=1028,Wf=1029,Eg=1030,Xf=1031,Yf=1033,Po=33776,Lo=33777,Io=33778,Do=33779,mu=35840,_u=35841,gu=35842,vu=35843,xu=36196,yu=37492,Eu=37496,Su=37808,Mu=37809,bu=37810,Tu=37811,Au=37812,wu=37813,Cu=37814,Ru=37815,Pu=37816,Lu=37817,Iu=37818,Du=37819,Nu=37820,Ou=37821,No=36492,Uu=36494,Fu=36495,Sg=36283,ku=36284,Bu=36285,zu=36286,VE=3200,GE=3201,Mg=0,WE=1,Vi="",Gn="srgb",ir="srgb-linear",$f="display-p3",yl="display-p3-linear",Xo="linear",mt="srgb",Yo="rec709",$o="p3",Gr=7680,Pd=519,XE=512,YE=513,$E=514,bg=515,jE=516,qE=517,KE=518,ZE=519,Ld=35044,Qa=35048,Id="300 es",_i=2e3,jo=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dd=1234567;const fa=Math.PI/180,Ta=180/Math.PI;function Bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function jf(t,e){return(t%e+e)%e}function JE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function QE(t,e,n){return t!==e?(n-t)/(e-t):0}function ha(t,e,n){return(1-n)*t+n*e}function eS(t,e,n,i){return ha(t,e,1-Math.exp(-n*i))}function tS(t,e=1){return e-Math.abs(jf(t,e*2)-e)}function nS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function iS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function rS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function sS(t,e){return t+Math.random()*(e-t)}function aS(t){return t*(.5-Math.random())}function oS(t){t!==void 0&&(Dd=t);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lS(t){return t*fa}function cS(t){return t*Ta}function uS(t){return(t&t-1)===0&&t!==0}function fS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),S=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*S,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*S,o*c);break;case"ZYZ":t.set(l*S,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const pS={DEG2RAD:fa,RAD2DEG:Ta,generateUUID:Bs,clamp:Gt,euclideanModulo:jf,mapLinear:JE,inverseLerp:QE,lerp:ha,damp:eS,pingpong:tS,smoothstep:nS,smootherstep:iS,randInt:rS,randFloat:sS,randFloatSpread:aS,seededRandom:oS,degToRad:lS,radToDeg:cS,isPowerOfTwo:uS,ceilPowerOfTwo:fS,floorPowerOfTwo:hS,setQuaternionFromProperEuler:dS,normalize:$t,denormalize:ss};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],S=i[8],b=r[0],_=r[3],d=r[6],M=r[1],g=r[4],x=r[7],R=r[2],T=r[5],w=r[8];return s[0]=a*b+o*M+l*R,s[3]=a*_+o*g+l*T,s[6]=a*d+o*x+l*w,s[1]=c*b+u*M+f*R,s[4]=c*_+u*g+f*T,s[7]=c*d+u*x+f*w,s[2]=h*b+p*M+S*R,s[5]=h*_+p*g+S*T,s[8]=h*d+p*x+S*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,S=n*f+i*h+r*p;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(u*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=p*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ec.makeScale(e,n)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new $e;function Tg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Aa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mS(){const t=Aa("canvas");return t.style.display="block",t}const Nd={};function Oo(t){t in Nd||(Nd[t]=!0,console.warn(t))}function _S(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function gS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Od=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ud=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[ir]:{transfer:Xo,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Gn]:{transfer:mt,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yl]:{transfer:Xo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ud),fromReference:t=>t.applyMatrix3(Od)},[$f]:{transfer:mt,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ud),fromReference:t=>t.applyMatrix3(Od).convertLinearToSRGB()}},xS=new Set([ir,yl]),it={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!xS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$s[e].toReference,r=$s[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $s[t].primaries},getTransfer:function(t){return t===Vi?Xo:$s[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray($s[e].luminanceCoefficients)}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class yS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Aa("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Aa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class Ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nc(r[a].image)):s.push(nc(r[a]))}else s=nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SS=0;class Zt extends zr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=wr,r=wr,s=Ln,a=Cr,o=Dn,l=xi,c=Zt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Bs(),this.name="",this.source=new Ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case du:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case du:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=hg;Zt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],S=l[9],b=l[2],_=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(S-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(S+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(p+1)/2,R=(d+1)/2,T=(u+h)/4,w=(f+b)/4,I=(S+_)/4;return g>x&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=w/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=I/s),this.set(i,r,s,n),this}let M=Math.sqrt((_-S)*(_-S)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(_-S)/M,this.y=(f-b)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ag(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends MS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wg extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],S=s[a+2],b=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=S,e[n+3]=b;return}if(f!==b||l!==h||c!==p||u!==S){let _=1-o;const d=l*h+c*p+u*S+f*b,M=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const R=Math.sqrt(g),T=Math.atan2(R,d*M);_=Math.sin(_*T)/R,o=Math.sin(o*T)/R}const x=o*M;if(l=l*_+h*x,c=c*_+p*x,u=u*_+S*x,f=f*_+b*x,_===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],S=s[a+3];return e[n]=o*S+u*f+l*p-c*h,e[n+1]=l*S+u*h+c*f-o*p,e[n+2]=c*S+u*p+o*h-l*f,e[n+3]=u*S-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),S=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*S,this._y=c*p*f-h*u*S,this._z=c*u*S+h*p*f,this._w=c*u*f-h*p*S;break;case"YXZ":this._x=h*u*f+c*p*S,this._y=c*p*f-h*u*S,this._z=c*u*S-h*p*f,this._w=c*u*f+h*p*S;break;case"ZXY":this._x=h*u*f-c*p*S,this._y=c*p*f+h*u*S,this._z=c*u*S+h*p*f,this._w=c*u*f-h*p*S;break;case"ZYX":this._x=h*u*f-c*p*S,this._y=c*p*f+h*u*S,this._z=c*u*S-h*p*f,this._w=c*u*f+h*p*S;break;case"YZX":this._x=h*u*f+c*p*S,this._y=c*p*f+h*u*S,this._z=c*u*S-h*p*f,this._w=c*u*f-h*p*S;break;case"XZY":this._x=h*u*f-c*p*S,this._y=c*p*f-h*u*S,this._z=c*u*S+h*p*f,this._w=c*u*f+h*p*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new K,Fd=new Ur;class Fa{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),to.subVectors(this.max,js),Xr.subVectors(e.a,js),Yr.subVectors(e.b,js),$r.subVectors(e.c,js),Ri.subVectors(Yr,Xr),Pi.subVectors($r,Yr),hr.subVectors(Xr,$r);let n=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-hr.z,hr.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,hr.z,0,-hr.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-hr.y,hr.x,0];return!rc(n,Xr,Yr,$r,to)||(n=[1,0,0,0,1,0,0,0,1],!rc(n,Xr,Yr,$r,to))?!1:(no.crossVectors(Ri,Pi),n=[no.x,no.y,no.z],rc(n,Xr,Yr,$r,to))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new K,new K,new K,new K,new K,new K,new K,new K],wn=new K,eo=new Fa,Xr=new K,Yr=new K,$r=new K,Ri=new K,Pi=new K,hr=new K,js=new K,to=new K,no=new K,dr=new K;function rc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const TS=new Fa,qs=new K,sc=new K;class El{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(sc)),this.expandByPoint(qs.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new K,ac=new K,io=new K,Li=new K,oc=new K,ro=new K,lc=new K;class Cg{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ac.copy(e).add(n).multiplyScalar(.5),io.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(ac);const s=e.distanceTo(n)*.5,a=-this.direction.dot(io),o=Li.dot(this.direction),l=-Li.dot(io),c=Li.lengthSq(),u=Math.abs(1-a*a);let f,h,p,S;if(u>0)if(f=a*l-o,h=a*o-l,S=s*u,f>=0)if(h>=-S)if(h<=S){const b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-S?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=S?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ac).addScaledVector(io,h),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){oc.subVectors(n,e),ro.subVectors(i,e),lc.crossVectors(oc,ro);let a=this.direction.dot(lc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(ro.crossVectors(Li,ro));if(l<0)return null;const c=o*this.direction.dot(oc.cross(Li));if(c<0||l+c>a)return null;const u=-o*Li.dot(lc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,u,f,h,p,S,b,_){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,h,p,S,b,_)}set(e,n,i,r,s,a,o,l,c,u,f,h,p,S,b,_){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=S,d[11]=b,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,S=o*u,b=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+S*c,n[5]=h-b*c,n[9]=-o*l,n[2]=b-h*c,n[6]=S+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,S=c*u,b=c*f;n[0]=h+b*o,n[4]=S*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-S,n[6]=b+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,S=c*u,b=c*f;n[0]=h-b*o,n[4]=-a*f,n[8]=S+p*o,n[1]=p+S*o,n[5]=a*u,n[9]=b-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,S=o*u,b=o*f;n[0]=l*u,n[4]=S*c-p,n[8]=h*c+b,n[1]=l*f,n[5]=b*c+h,n[9]=p*c-S,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,S=o*l,b=o*c;n[0]=l*u,n[4]=b-h*f,n[8]=S*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+S,n[10]=h-b*f}else if(e.order==="XZY"){const h=a*l,p=a*c,S=o*l,b=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+b,n[5]=a*u,n[9]=p*f-S,n[2]=S*f-p,n[6]=o*u,n[10]=b*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,wS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ii.crossVectors(i,cn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ii.crossVectors(i,cn)),Ii.normalize(),so.crossVectors(cn,Ii),r[0]=Ii.x,r[4]=so.x,r[8]=cn.x,r[1]=Ii.y,r[5]=so.y,r[9]=cn.y,r[2]=Ii.z,r[6]=so.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],S=i[2],b=i[6],_=i[10],d=i[14],M=i[3],g=i[7],x=i[11],R=i[15],T=r[0],w=r[4],I=r[8],N=r[12],E=r[1],A=r[5],D=r[9],U=r[13],X=r[2],ne=r[6],W=r[10],te=r[14],$=r[3],pe=r[7],me=r[11],de=r[15];return s[0]=a*T+o*E+l*X+c*$,s[4]=a*w+o*A+l*ne+c*pe,s[8]=a*I+o*D+l*W+c*me,s[12]=a*N+o*U+l*te+c*de,s[1]=u*T+f*E+h*X+p*$,s[5]=u*w+f*A+h*ne+p*pe,s[9]=u*I+f*D+h*W+p*me,s[13]=u*N+f*U+h*te+p*de,s[2]=S*T+b*E+_*X+d*$,s[6]=S*w+b*A+_*ne+d*pe,s[10]=S*I+b*D+_*W+d*me,s[14]=S*N+b*U+_*te+d*de,s[3]=M*T+g*E+x*X+R*$,s[7]=M*w+g*A+x*ne+R*pe,s[11]=M*I+g*D+x*W+R*me,s[15]=M*N+g*U+x*te+R*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],S=e[3],b=e[7],_=e[11],d=e[15];return S*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+b*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+_*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-n*l*f+n*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],S=e[12],b=e[13],_=e[14],d=e[15],M=f*_*c-b*h*c+b*l*p-o*_*p-f*l*d+o*h*d,g=S*h*c-u*_*c-S*l*p+a*_*p+u*l*d-a*h*d,x=u*b*c-S*f*c+S*o*p-a*b*p-u*o*d+a*f*d,R=S*f*l-u*b*l-S*o*h+a*b*h+u*o*_-a*f*_,T=n*M+i*g+r*x+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=M*w,e[1]=(b*h*s-f*_*s-b*r*p+i*_*p+f*r*d-i*h*d)*w,e[2]=(o*_*s-b*l*s+b*r*c-i*_*c-o*r*d+i*l*d)*w,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*_*s-S*h*s+S*r*p-n*_*p-u*r*d+n*h*d)*w,e[6]=(S*l*s-a*_*s-S*r*c+n*_*c+a*r*d-n*l*d)*w,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*w,e[8]=x*w,e[9]=(S*f*s-u*b*s-S*i*p+n*b*p+u*i*d-n*f*d)*w,e[10]=(a*b*s-S*o*s+S*i*c-n*b*c-a*i*d+n*o*d)*w,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*w,e[12]=R*w,e[13]=(u*b*r-S*f*r+S*i*h-n*b*h-u*i*_+n*f*_)*w,e[14]=(S*o*r-a*b*r-S*i*l+n*b*l+a*i*_-n*o*_)*w,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,S=s*f,b=a*u,_=a*f,d=o*f,M=l*c,g=l*u,x=l*f,R=i.x,T=i.y,w=i.z;return r[0]=(1-(b+d))*R,r[1]=(p+x)*R,r[2]=(S-g)*R,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(h+d))*T,r[6]=(_+M)*T,r[7]=0,r[8]=(S+g)*w,r[9]=(_-M)*w,r[10]=(1-(h+b))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const a=jr.set(r[4],r[5],r[6]).length(),o=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/a,f=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,n.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=_i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,S;if(o===_i)p=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===jo)p=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*c,p=(i+r)*u;let S,b;if(o===_i)S=(a+s)*f,b=-2*f;else if(o===jo)S=s*f,b=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new K,Cn=new Et,AS=new K(0,0,0),wS=new K(1,1,1),Ii=new K,so=new K,cn=new K,kd=new Et,Bd=new Ur;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";let Rg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},CS=0;const zd=new K,qr=new Ur,ii=new Et,ao=new K,Ks=new K,RS=new K,PS=new Ur,Hd=new K(1,0,0),Vd=new K(0,1,0),Gd=new K(0,0,1),Wd={type:"added"},LS={type:"removed"},Kr={type:"childadded",child:null},cc={type:"childremoved",child:null};class Wt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new K,n=new Kn,i=new Ur,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,n){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ao.copy(e):ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ks,ao,this.up):ii.lookAt(ao,Ks,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(ii),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LS),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),S=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new K(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new K,ri=new K,uc=new K,si=new K,Zr=new K,Jr=new K,Xd=new K,fc=new K,hc=new K,dc=new K,pc=new ut,mc=new ut,_c=new ut;class In{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),ri.subVectors(i,n),uc.subVectors(e,n);const a=Rn.dot(Rn),o=Rn.dot(ri),l=Rn.dot(uc),c=ri.dot(ri),u=ri.dot(uc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,S=(a*u-o*l)*h;return s.set(1-p-S,S,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return pc.setScalar(0),mc.setScalar(0),_c.setScalar(0),pc.fromBufferAttribute(e,n),mc.fromBufferAttribute(e,i),_c.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pc,s.x),a.addScaledVector(mc,s.y),a.addScaledVector(_c,s.z),a}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ri.subVectors(e,n),Rn.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Rn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),Jr.subVectors(s,i),fc.subVectors(e,i);const l=Zr.dot(fc),c=Jr.dot(fc);if(l<=0&&c<=0)return n.copy(i);hc.subVectors(e,r);const u=Zr.dot(hc),f=Jr.dot(hc);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Zr,a);dc.subVectors(e,s);const p=Zr.dot(dc),S=Jr.dot(dc);if(S>=0&&p<=S)return n.copy(s);const b=p*c-l*S;if(b<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(Jr,o);const _=u*S-p*f;if(_<=0&&f-u>=0&&p-S>=0)return Xd.subVectors(s,r),o=(f-u)/(f-u+(p-S)),n.copy(r).addScaledVector(Xd,o);const d=1/(_+b+h);return a=b*d,o=h*d,n.copy(i).addScaledVector(Zr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},oo={h:0,s:0,l:0};function gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=jf(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gc(a,s,e+1/3),this.g=gc(a,s,e),this.b=gc(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=Pg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return it.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Gn){it.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(oo);const i=ha(Di.h,oo.h,n),r=ha(Di.s,oo.s,n),s=ha(Di.l,oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ze;Ze.NAMES=Pg;let IS=0;class ka extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=vs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nu&&(i.blendSrc=this.blendSrc),this.blendDst!==iu&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lg extends ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new K,lo=new Xe;class sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ld,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lo.fromBufferAttribute(this,n),lo.applyMatrix3(e),this.setXY(n,lo.x,lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ld&&(e.usage=this.usage),e}}class Ig extends sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dg extends sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pr extends sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DS=0;const yn=new Et,vc=new Wt,Qr=new K,un=new Fa,Zs=new Fa,Nt=new K;class rr extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?Dg:Ig)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(un.min,Zs.min),un.expandByPoint(Nt),Nt.addVectors(un.max,Zs.max),un.expandByPoint(Nt)):(un.expandByPoint(Zs.min),un.expandByPoint(Zs.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Qr.fromBufferAttribute(e,c),Nt.add(Qr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new K,l[I]=new K;const c=new K,u=new K,f=new K,h=new Xe,p=new Xe,S=new Xe,b=new K,_=new K;function d(I,N,E){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,N),S.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(h),S.sub(h);const A=1/(p.x*S.y-S.x*p.y);isFinite(A)&&(b.copy(u).multiplyScalar(S.y).addScaledVector(f,-p.y).multiplyScalar(A),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(A),o[I].add(b),o[N].add(b),o[E].add(b),l[I].add(_),l[N].add(_),l[E].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,N=M.length;I<N;++I){const E=M[I],A=E.start,D=E.count;for(let U=A,X=A+D;U<X;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const g=new K,x=new K,R=new K,T=new K;function w(I){R.fromBufferAttribute(r,I),T.copy(R);const N=o[I];g.copy(N),g.sub(R.multiplyScalar(R.dot(N))).normalize(),x.crossVectors(T,N);const A=x.dot(l[I])<0?-1:1;a.setXYZW(I,g.x,g.y,g.z,A)}for(let I=0,N=M.length;I<N;++I){const E=M[I],A=E.start,D=E.count;for(let U=A,X=A+D;U<X;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,p=e.count;h<p;h+=3){const S=e.getX(h+0),b=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,_),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,S=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let d=0;d<u;d++)h[S++]=c[p++]}return new sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new Et,pr=new Cg,co=new El,$d=new K,uo=new K,fo=new K,ho=new K,xc=new K,po=new K,jd=new K,mo=new K;class Yn extends Wt{constructor(e=new rr,n=new Lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(xc.fromBufferAttribute(f,e),a?po.addScaledVector(xc,u):po.addScaledVector(xc.sub(n),u))}n.add(po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(co.containsPoint(pr.origin)===!1&&(pr.intersectSphere(co,$d)===null||pr.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Yd.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,b=h.length;S<b;S++){const _=h[S],d=a[_.materialIndex],M=Math.max(_.start,p.start),g=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let x=M,R=g;x<R;x+=3){const T=o.getX(x),w=o.getX(x+1),I=o.getX(x+2);r=_o(this,d,e,i,c,u,f,T,w,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const S=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let _=S,d=b;_<d;_+=3){const M=o.getX(_),g=o.getX(_+1),x=o.getX(_+2);r=_o(this,a,e,i,c,u,f,M,g,x),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,b=h.length;S<b;S++){const _=h[S],d=a[_.materialIndex],M=Math.max(_.start,p.start),g=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let x=M,R=g;x<R;x+=3){const T=x,w=x+1,I=x+2;r=_o(this,d,e,i,c,u,f,T,w,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const S=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let _=S,d=b;_<d;_+=3){const M=_,g=_+1,x=_+2;r=_o(this,a,e,i,c,u,f,M,g,x),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function NS(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ji,o),l===null)return null;mo.copy(o),mo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mo);return c<n.near||c>n.far?null:{distance:c,point:mo.clone(),object:t}}function _o(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,uo),t.getVertexPosition(l,fo),t.getVertexPosition(c,ho);const u=NS(t,e,n,i,uo,fo,ho,jd);if(u){const f=new K;In.getBarycoord(jd,uo,fo,ho,f),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(u.uv1=In.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new K,materialIndex:0};In.getNormal(uo,fo,ho,h.normal),u.face=h,u.barycoord=f}return u}class Ba extends rr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;S("z","y","x",-1,-1,i,n,e,a,s,0),S("z","y","x",1,-1,i,n,-e,a,s,1),S("x","z","y",1,1,e,i,n,r,a,2),S("x","z","y",1,-1,e,i,-n,r,a,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(u,3)),this.setAttribute("uv",new Pr(f,2));function S(b,_,d,M,g,x,R,T,w,I,N){const E=x/w,A=R/I,D=x/2,U=R/2,X=T/2,ne=w+1,W=I+1;let te=0,$=0;const pe=new K;for(let me=0;me<W;me++){const de=me*A-U;for(let we=0;we<ne;we++){const Pe=we*E-D;pe[b]=Pe*M,pe[_]=de*g,pe[d]=X,c.push(pe.x,pe.y,pe.z),pe[b]=0,pe[_]=0,pe[d]=T>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(we/w),f.push(1-me/I),te+=1}}for(let me=0;me<I;me++)for(let de=0;de<w;de++){const we=h+de+ne*me,Pe=h+de+ne*(me+1),ee=h+(de+1)+ne*(me+1),ue=h+(de+1)+ne*me;l.push(we,Pe,ue),l.push(Pe,ee,ue),$+=6}o.addGroup(p,$,N),p+=$,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function OS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ng(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const US={clone:Ls,merge:jt};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=OS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Og extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new K,qd=new Xe,Kd=new Xe;class dn extends Og{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,qd,Kd),n.subVectors(Kd,qd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class BS extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new dn(es,ts,e,n);s.layers=this.layers,this.add(s);const a=new dn(es,ts,e,n);a.layers=this.layers,this.add(a);const o=new dn(es,ts,e,n);o.layers=this.layers,this.add(o);const l=new dn(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new dn(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class Ug extends Zt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ug(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ba(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Wi});s.uniforms.tEquirect.value=n;const a=new Yn(r,s),o=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Ln),new BS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const yc=new K,HS=new K,VS=new $e;class Hi{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yc.subVectors(i,n).cross(HS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VS.getNormalMatrix(e),r=this.coplanarPoint(yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new El,go=new K;class qf{constructor(e=new Hi,n=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],S=r[9],b=r[10],_=r[11],d=r[12],M=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,_-p,x-d).normalize(),i[1].setComponents(l+s,h+c,_+p,x+d).normalize(),i[2].setComponents(l+a,h+u,_+S,x+M).normalize(),i[3].setComponents(l-a,h-u,_-S,x-M).normalize(),i[4].setComponents(l-o,h-f,_-b,x-g).normalize(),n===_i)i[5].setComponents(l+o,h+f,_+b,x+g).normalize();else if(n===jo)i[5].setComponents(o,f,b,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GS(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,S)=>p.start-S.start);let h=0;for(let p=1;p<f.length;p++){const S=f[h],b=f[p];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,S=f.length;p<S;p++){const b=f[p];t.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Sl extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,p=[],S=[],b=[],_=[];for(let d=0;d<u;d++){const M=d*h-a;for(let g=0;g<c;g++){const x=g*f-s;S.push(x,-M,0),b.push(0,0,1),_.push(g/o),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const g=M+c*d,x=M+c*(d+1),R=M+1+c*(d+1),T=M+1+c*d;p.push(g,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Pr(S,3)),this.setAttribute("normal",new Pr(b,3)),this.setAttribute("uv",new Pr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var WS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XS=`#ifdef USE_ALPHAHASH
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
#endif`,YS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
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
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iM=`#ifdef USE_IRIDESCENCE
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
#endif`,rM=`#ifdef USE_BUMPMAP
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`
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
}`,SM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LM=`#ifdef USE_GRADIENTMAP
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
}`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,UM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,GM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Kb=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,aT=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lT=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,uT=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hT=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_T=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gT=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,vT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yT=`uniform vec3 color;
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
}`,ET=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ST=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ye={alphahash_fragment:WS,alphahash_pars_fragment:XS,alphamap_fragment:YS,alphamap_pars_fragment:$S,alphatest_fragment:jS,alphatest_pars_fragment:qS,aomap_fragment:KS,aomap_pars_fragment:ZS,batching_pars_vertex:JS,batching_vertex:QS,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:fM,color_vertex:hM,common:dM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:_M,displacementmap_vertex:gM,emissivemap_fragment:vM,emissivemap_pars_fragment:xM,colorspace_fragment:yM,colorspace_pars_fragment:EM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:bM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:UM,envmap_vertex:AM,fog_vertex:wM,fog_pars_vertex:CM,fog_fragment:RM,fog_pars_fragment:PM,gradientmap_pars_fragment:LM,lightmap_pars_fragment:IM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:FM,lights_toon_pars_fragment:kM,lights_phong_fragment:BM,lights_phong_pars_fragment:zM,lights_physical_fragment:HM,lights_physical_pars_fragment:VM,lights_fragment_begin:GM,lights_fragment_maps:WM,lights_fragment_end:XM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:qM,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:JM,map_particle_pars_fragment:QM,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ab,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:_b,opaque_fragment:gb,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:yb,dithering_fragment:Eb,dithering_pars_fragment:Sb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:wb,shadowmask_pars_fragment:Cb,skinbase_vertex:Rb,skinning_pars_vertex:Pb,skinning_vertex:Lb,skinnormal_vertex:Ib,specularmap_fragment:Db,specularmap_pars_fragment:Nb,tonemapping_fragment:Ob,tonemapping_pars_fragment:Ub,transmission_fragment:Fb,transmission_pars_fragment:kb,uv_pars_fragment:Bb,uv_pars_vertex:zb,uv_vertex:Hb,worldpos_vertex:Vb,background_vert:Gb,background_frag:Wb,backgroundCube_vert:Xb,backgroundCube_frag:Yb,cube_vert:$b,cube_frag:jb,depth_vert:qb,depth_frag:Kb,distanceRGBA_vert:Zb,distanceRGBA_frag:Jb,equirect_vert:Qb,equirect_frag:eT,linedashed_vert:tT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:aT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:_T,points_vert:gT,points_frag:vT,shadow_vert:xT,shadow_frag:yT,sprite_vert:ET,sprite_frag:ST},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Xn={basic:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:jt([Ee.points,Ee.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:jt([Ee.common,Ee.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:jt([Ee.sprite,Ee.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:jt([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Xn.physical={uniforms:jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const vo={r:0,b:0,g:0},_r=new Kn,MT=new Et;function bT(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function S(M){let g=M.isScene===!0?M.background:null;return g&&g.isTexture&&(g=(M.backgroundBlurriness>0?n:e).get(g)),g}function b(M){let g=!1;const x=S(M);x===null?d(o,l):x&&x.isColor&&(d(x,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(M,g){const x=S(g);x&&(x.isCubeTexture||x.mapping===xl)?(u===void 0&&(u=new Yn(new Ba(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ls(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(g.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(_r)),u.material.toneMapped=it.getTransfer(x.colorSpace)!==mt,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Yn(new Sl(2,2),new qi({name:"BackgroundMaterial",uniforms:Ls(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,g){M.getRGB(vo,Ng(t)),i.buffers.color.setClear(vo.r,vo.g,vo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(M,g=1){o.set(M),l=g,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:b,addToRenderList:_}}function TT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(E,A,D,U,X){let ne=!1;const W=f(U,D,A);s!==W&&(s=W,c(s.object)),ne=p(E,U,D,X),ne&&S(E,U,D,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,x(E,A,D,U),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function f(E,A,D){const U=D.wireframe===!0;let X=i[E.id];X===void 0&&(X={},i[E.id]=X);let ne=X[A.id];ne===void 0&&(ne={},X[A.id]=ne);let W=ne[U];return W===void 0&&(W=h(l()),ne[U]=W),W}function h(E){const A=[],D=[],U=[];for(let X=0;X<n;X++)A[X]=0,D[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:U,object:E,attributes:{},index:null}}function p(E,A,D,U){const X=s.attributes,ne=A.attributes;let W=0;const te=D.getAttributes();for(const $ in te)if(te[$].location>=0){const me=X[$];let de=ne[$];if(de===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),me===void 0||me.attribute!==de||de&&me.data!==de.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function S(E,A,D,U){const X={},ne=A.attributes;let W=0;const te=D.getAttributes();for(const $ in te)if(te[$].location>=0){let me=ne[$];me===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(me=E.instanceColor));const de={};de.attribute=me,me&&me.data&&(de.data=me.data),X[$]=de,W++}s.attributes=X,s.attributesNum=W,s.index=U}function b(){const E=s.newAttributes;for(let A=0,D=E.length;A<D;A++)E[A]=0}function _(E){d(E,0)}function d(E,A){const D=s.newAttributes,U=s.enabledAttributes,X=s.attributeDivisors;D[E]=1,U[E]===0&&(t.enableVertexAttribArray(E),U[E]=1),X[E]!==A&&(t.vertexAttribDivisor(E,A),X[E]=A)}function M(){const E=s.newAttributes,A=s.enabledAttributes;for(let D=0,U=A.length;D<U;D++)A[D]!==E[D]&&(t.disableVertexAttribArray(D),A[D]=0)}function g(E,A,D,U,X,ne,W){W===!0?t.vertexAttribIPointer(E,A,D,X,ne):t.vertexAttribPointer(E,A,D,U,X,ne)}function x(E,A,D,U){b();const X=U.attributes,ne=D.getAttributes(),W=A.defaultAttributeValues;for(const te in ne){const $=ne[te];if($.location>=0){let pe=X[te];if(pe===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),pe!==void 0){const me=pe.normalized,de=pe.itemSize,we=e.get(pe);if(we===void 0)continue;const Pe=we.buffer,ee=we.type,ue=we.bytesPerElement,_e=ee===t.INT||ee===t.UNSIGNED_INT||pe.gpuType===Hf;if(pe.isInterleavedBufferAttribute){const H=pe.data,ae=H.stride,ie=pe.offset;if(H.isInstancedInterleavedBuffer){for(let fe=0;fe<$.locationSize;fe++)d($.location+fe,H.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let fe=0;fe<$.locationSize;fe++)_($.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let fe=0;fe<$.locationSize;fe++)g($.location+fe,de/$.locationSize,ee,me,ae*ue,(ie+de/$.locationSize*fe)*ue,_e)}else{if(pe.isInstancedBufferAttribute){for(let H=0;H<$.locationSize;H++)d($.location+H,pe.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let H=0;H<$.locationSize;H++)_($.location+H);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let H=0;H<$.locationSize;H++)g($.location+H,de/$.locationSize,ee,me,de*ue,de/$.locationSize*H*ue,_e)}}else if(W!==void 0){const me=W[te];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv($.location,me);break;case 3:t.vertexAttrib3fv($.location,me);break;case 4:t.vertexAttrib4fv($.location,me);break;default:t.vertexAttrib1fv($.location,me)}}}}M()}function R(){I();for(const E in i){const A=i[E];for(const D in A){const U=A[D];for(const X in U)u(U[X].object),delete U[X];delete A[D]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;const A=i[E.id];for(const D in A){const U=A[D];for(const X in U)u(U[X].object),delete U[X];delete A[D]}delete i[E.id]}function w(E){for(const A in i){const D=i[A];if(D[E.id]===void 0)continue;const U=D[E.id];for(const X in U)u(U[X].object),delete U[X];delete D[E.id]}}function I(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:_,disableUnusedAttributes:M}}function AT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let S=0;S<f;S++)p+=u[S];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let S=0;S<c.length;S++)a(c[S],u[S],h[S]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let S=0;for(let b=0;b<f;b++)S+=u[b];for(let b=0;b<h.length;b++)n.update(S,i,h[b])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Dn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const I=w===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mi&&!I)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=S>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:M,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function CT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Hi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const S=f.clippingPlanes,b=f.clipIntersection,_=f.clipShadows,d=t.get(f);if(!r||S===null||S.length===0||s&&!_)s?u(null):c();else{const M=s?0:i,g=M*4;let x=d.clippingState||null;l.value=x,x=u(S,h,g,p);for(let R=0;R!==g;++R)x[R]=n[R];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,S){const b=f!==null?f.length:0;let _=null;if(b!==0){if(_=l.value,S!==!0||_===null){const d=p+b*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(_===null||_.length<d)&&(_=new Float32Array(d));for(let g=0,x=p;g!==b;++g,x+=4)a.copy(f[g]).applyMatrix4(M,o),a.normal.toArray(_,x),_[x+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function RT(t){let e=new WeakMap;function n(a,o){return o===fu?a.mapping=ws:o===hu&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fu||o===hu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class kg extends Og{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,Zd=[.125,.215,.35,.446,.526,.582],Tr=20,Ec=new kg,Jd=new Ze;let Sc=null,Mc=0,bc=0,Tc=!1;const Er=(1+Math.sqrt(5))/2,ns=1/Er,Qd=[new K(-Er,ns,0),new K(Er,ns,0),new K(-ns,0,Er),new K(ns,0,Er),new K(0,Er,-ns),new K(0,Er,ns),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,bc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ua,format:Dn,colorSpace:ir,depthBuffer:!1},r=tp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(s)),this._blurMaterial=LT(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Ec)}_sceneToCubeUV(e,n,i,r){const o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Jd),u.toneMapping=Xi,u.autoClear=!1;const p=new Lg({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),S=new Yn(new Ba,p);let b=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,b=!0):(p.color.copy(Jd),b=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const g=this._cubeSize;xo(r,M*g,d>2?g:0,g,g),u.setRenderTarget(r),b&&u.render(S,o),u.render(e,o)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ec)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qd[(r-s-1)%Qd.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),b=s/S,_=isFinite(s)?1+Math.floor(u*b):Tr;_>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Tr}`);const d=[];let M=0;for(let w=0;w<Tr;++w){const I=w/b,N=Math.exp(-I*I/2);d.push(N),w===0?M+=N:w<_&&(M+=2*N)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=S,h.mipInt.value=g-i;const x=this._sizeLods[r],R=3*x*(r>g-ls?r-g+ls:0),T=4*(this._cubeSize-x);xo(n,R,T,3*x,2*x),l.setRenderTarget(n),l.render(f,Ec)}}function PT(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+Zd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ls?l=Zd[a-t+ls-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,S=6,b=3,_=2,d=1,M=new Float32Array(b*S*p),g=new Float32Array(_*S*p),x=new Float32Array(d*S*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,I=T>2?0:-1,N=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(N,b*S*T),g.set(h,_*S*T);const E=[T,T,T,T,T,T];x.set(E,d*S*T)}const R=new rr;R.setAttribute("position",new sn(M,b)),R.setAttribute("uv",new sn(g,_)),R.setAttribute("faceIndex",new sn(x,d)),e.push(R),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tp(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LT(t,e,n){const i=new Float32Array(Tr),r=new K(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function np(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ip(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Kf(){return`

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
	`}function IT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===fu||l===hu,u=l===ws||l===Cs;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new ep(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new ep(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function DT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const S in h.attributes)e.remove(h.attributes[S]);for(const S in h.morphAttributes){const b=h.morphAttributes[S];for(let _=0,d=b.length;_<d;_++)e.remove(b[_])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const S in h)e.update(h[S],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const S in p){const b=p[S];for(let _=0,d=b.length;_<d;_++)e.update(b[_],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,S=f.attributes.position;let b=0;if(p!==null){const M=p.array;b=p.version;for(let g=0,x=M.length;g<x;g+=3){const R=M[g+0],T=M[g+1],w=M[g+2];h.push(R,T,T,w,w,R)}}else if(S!==void 0){const M=S.array;b=S.version;for(let g=0,x=M.length/3-1;g<x;g+=3){const R=g+0,T=g+1,w=g+2;h.push(R,T,T,w,w,R)}}else return;const _=new(Tg(h)?Dg:Ig)(h,1);_.version=b;const d=s.get(f);d&&e.remove(d),s.set(f,_)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function OT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,S){S!==0&&(t.drawElementsInstanced(i,p,s,h*a,S),n.update(p,i,S))}function u(h,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,S);let _=0;for(let d=0;d<S;d++)_+=p[d];n.update(_,i,1)}function f(h,p,S,b){if(S===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],b[d]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,b,0,S);let d=0;for(let M=0;M<S;M++)d+=p[M];for(let M=0;M<b.length;M++)n.update(d,i,b[M])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function UT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FT(t,e,n){const i=new WeakMap,r=new ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let N=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let g=0;p===!0&&(g=1),S===!0&&(g=2),b===!0&&(g=3);let x=o.attributes.position.count*g,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*R*4*f),w=new wg(T,x,R,f);w.type=mi,w.needsUpdate=!0;const I=g*4;for(let E=0;E<f;E++){const A=_[E],D=d[E],U=M[E],X=x*R*4*E;for(let ne=0;ne<A.count;ne++){const W=ne*I;p===!0&&(r.fromBufferAttribute(A,ne),T[X+W+0]=r.x,T[X+W+1]=r.y,T[X+W+2]=r.z,T[X+W+3]=0),S===!0&&(r.fromBufferAttribute(D,ne),T[X+W+4]=r.x,T[X+W+5]=r.y,T[X+W+6]=r.z,T[X+W+7]=0),b===!0&&(r.fromBufferAttribute(U,ne),T[X+W+8]=r.x,T[X+W+9]=r.y,T[X+W+10]=r.z,T[X+W+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Xe(x,R)},i.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const S=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function kT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Bg extends Zt{constructor(e,n,i,r,s,a,o,l,c,u=xs){if(u!==xs&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xs&&(i=Nr),i===void 0&&u===Ps&&(i=Rs),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zg=new Zt,rp=new Bg(1,1),Hg=new wg,Vg=new bS,Gg=new Ug,sp=[],ap=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sp[r];if(s===void 0&&(s=new Float32Array(r),sp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ml(t,e){let n=ap[e];n===void 0&&(n=new Int32Array(e),ap[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function GT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;cp.set(i),t.uniformMatrix2fv(this.addr,!1,cp),Dt(n,i)}}function WT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;lp.set(i),t.uniformMatrix3fv(this.addr,!1,lp),Dt(n,i)}}function XT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;op.set(i),t.uniformMatrix4fv(this.addr,!1,op),Dt(n,i)}}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function eA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rp.compareFunction=bg,s=rp):s=zg,n.setTexture2D(e||s,r)}function tA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vg,r)}function nA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gg,r)}function iA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hg,r)}function rA(t){switch(t){case 5126:return BT;case 35664:return zT;case 35665:return HT;case 35666:return VT;case 35674:return GT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return YT;case 35667:case 35671:return $T;case 35668:case 35672:return jT;case 35669:case 35673:return qT;case 5125:return KT;case 36294:return ZT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function sA(t,e){t.uniform1fv(this.addr,e)}function aA(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function oA(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function lA(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function cA(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uA(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fA(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hA(t,e){t.uniform1iv(this.addr,e)}function dA(t,e){t.uniform2iv(this.addr,e)}function pA(t,e){t.uniform3iv(this.addr,e)}function mA(t,e){t.uniform4iv(this.addr,e)}function _A(t,e){t.uniform1uiv(this.addr,e)}function gA(t,e){t.uniform2uiv(this.addr,e)}function vA(t,e){t.uniform3uiv(this.addr,e)}function xA(t,e){t.uniform4uiv(this.addr,e)}function yA(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||zg,s[a])}function EA(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vg,s[a])}function SA(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Gg,s[a])}function MA(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Hg,s[a])}function bA(t){switch(t){case 5126:return sA;case 35664:return aA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return _A;case 36294:return gA;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}class TA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rA(n.type)}}class AA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bA(n.type)}}class wA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function up(t,e){t.seq.push(e),t.map[e.id]=e}function CA(t,e,n){const i=t.name,r=i.length;for(Ac.lastIndex=0;;){const s=Ac.exec(i),a=Ac.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){up(n,c===void 0?new TA(o,t,e):new AA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new wA(o),up(n,f)),n=f}}}class Uo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);CA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const RA=37297;let PA=0;function LA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function IA(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===$o&&n===Yo?i="LinearDisplayP3ToLinearSRGB":e===Yo&&n===$o&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case yl:return[i,"LinearTransferOETF"];case Gn:case $f:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LA(t.getShaderSource(e),a)}else return r}function DA(t,e){const n=IA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function NA(t,e){let n;switch(e){case NE:n="Linear";break;case OE:n="Reinhard";break;case UE:n="Cineon";break;case FE:n="ACESFilmic";break;case BE:n="AgX";break;case zE:n="Neutral";break;case kE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yo=new K;function OA(){it.getLuminanceCoefficients(yo);const t=yo.x.toFixed(4),e=yo.y.toFixed(4),n=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function FA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ta(t){return t!==""}function dp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(t){return t.replace(BA,HA)}const zA=new Map;function HA(t,e){let n=Ye[e];if(n===void 0){const i=zA.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hu(n)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(t){return t.replace(VA,GA)}function GA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _p(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function XA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case Cs:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function $A(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zf:e="ENVMAP_BLENDING_MULTIPLY";break;case IE:e="ENVMAP_BLENDING_MIX";break;case DE:e="ENVMAP_BLENDING_ADD";break}return e}function jA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=WA(n),c=XA(n),u=YA(n),f=$A(n),h=jA(n),p=UA(n),S=FA(s),b=r.createProgram();let _,d,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(ta).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(_=[_p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[_p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Xi?NA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,DA("linearToOutputTexel",n.outputColorSpace),OA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),a=Hu(a),a=dp(a,n),a=pp(a,n),o=Hu(o),o=dp(o,n),o=pp(o,n),a=mp(a),o=mp(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=M+_+a,x=M+d+o,R=fp(r,r.VERTEX_SHADER,g),T=fp(r,r.FRAGMENT_SHADER,x);r.attachShader(b,R),r.attachShader(b,T),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function w(A){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(b).trim(),U=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(T).trim();let ne=!0,W=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,R,T);else{const te=hp(r,R,"vertex"),$=hp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+te+`
`+$)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||X==="")&&(W=!1);W&&(A.diagnostics={runnable:ne,programLog:D,vertexShader:{log:U,prefix:_},fragmentShader:{log:X,prefix:d}})}r.deleteShader(R),r.deleteShader(T),I=new Uo(r,b),N=kA(r,b)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let N;this.getAttributes=function(){return N===void 0&&w(this),N};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(b,RA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=T,this}let KA=0;class ZA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JA(e),n.set(e,i)),i}}class JA{constructor(e){this.id=KA++,this.code=e,this.usedTimes=0}}function QA(t,e,n,i,r,s,a){const o=new Rg,l=new ZA,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let S=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function d(E,A,D,U,X){const ne=U.fog,W=X.geometry,te=E.isMeshStandardMaterial?U.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||te),pe=$&&$.mapping===xl?$.image.height:null,me=b[E.type];E.precision!==null&&(S=r.getMaxPrecision(E.precision),S!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",S,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=de!==void 0?de.length:0;let Pe=0;W.morphAttributes.position!==void 0&&(Pe=1),W.morphAttributes.normal!==void 0&&(Pe=2),W.morphAttributes.color!==void 0&&(Pe=3);let ee,ue,_e,H;if(me){const Qt=Xn[me];ee=Qt.vertexShader,ue=Qt.fragmentShader}else ee=E.vertexShader,ue=E.fragmentShader,l.update(E),_e=l.getVertexShaderID(E),H=l.getFragmentShaderID(E);const ae=t.getRenderTarget(),ie=X.isInstancedMesh===!0,fe=X.isBatchedMesh===!0,Me=!!E.map,ye=!!E.matcap,y=!!$,P=!!E.aoMap,k=!!E.lightMap,Q=!!E.bumpMap,q=!!E.normalMap,se=!!E.displacementMap,oe=!!E.emissiveMap,v=!!E.metalnessMap,m=!!E.roughnessMap,C=E.anisotropy>0,F=E.clearcoat>0,V=E.dispersion>0,B=E.iridescence>0,O=E.sheen>0,z=E.transmission>0,le=C&&!!E.anisotropyMap,ve=F&&!!E.clearcoatMap,ce=F&&!!E.clearcoatNormalMap,ge=F&&!!E.clearcoatRoughnessMap,Le=B&&!!E.iridescenceMap,De=B&&!!E.iridescenceThicknessMap,be=O&&!!E.sheenColorMap,qe=O&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Ke=!!E.specularColorMap,G=!!E.specularIntensityMap,Ce=z&&!!E.transmissionMap,re=z&&!!E.thicknessMap,he=!!E.gradientMap,Te=!!E.alphaMap,Re=E.alphaTest>0,Je=!!E.alphaHash,Tt=!!E.extensions;let Jt=Xi;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Jt=t.toneMapping);const Qe={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:ue,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:S,batching:fe,batchingColor:fe&&X._colorsTexture!==null,instancing:ie,instancingColor:ie&&X.instanceColor!==null,instancingMorph:ie&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ir,alphaToCoverage:!!E.alphaToCoverage,map:Me,matcap:ye,envMap:y,envMapMode:y&&$.mapping,envMapCubeUVHeight:pe,aoMap:P,lightMap:k,bumpMap:Q,normalMap:q,displacementMap:p&&se,emissiveMap:oe,normalMapObjectSpace:q&&E.normalMapType===WE,normalMapTangentSpace:q&&E.normalMapType===Mg,metalnessMap:v,roughnessMap:m,anisotropy:C,anisotropyMap:le,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:ce,clearcoatRoughnessMap:ge,dispersion:V,iridescence:B,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:O,sheenColorMap:be,sheenRoughnessMap:qe,specularMap:Ue,specularColorMap:Ke,specularIntensityMap:G,transmission:z,transmissionMap:Ce,thicknessMap:re,gradientMap:he,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:Re,alphaHash:Je,combine:E.combine,mapUv:Me&&_(E.map.channel),aoMapUv:P&&_(E.aoMap.channel),lightMapUv:k&&_(E.lightMap.channel),bumpMapUv:Q&&_(E.bumpMap.channel),normalMapUv:q&&_(E.normalMap.channel),displacementMapUv:se&&_(E.displacementMap.channel),emissiveMapUv:oe&&_(E.emissiveMap.channel),metalnessMapUv:v&&_(E.metalnessMap.channel),roughnessMapUv:m&&_(E.roughnessMap.channel),anisotropyMapUv:le&&_(E.anisotropyMap.channel),clearcoatMapUv:ve&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:Ke&&_(E.specularColorMap.channel),specularIntensityMapUv:G&&_(E.specularIntensityMap.channel),transmissionMapUv:Ce&&_(E.transmissionMap.channel),thicknessMapUv:re&&_(E.thicknessMap.channel),alphaMapUv:Te&&_(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(q||C),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(Me||Te),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Me&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Tt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&E.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function M(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)A.push(D),A.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(g(A,E),x(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function g(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function x(E,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),E.push(o.mask)}function R(E){const A=b[E.type];let D;if(A){const U=Xn[A];D=US.clone(U.uniforms)}else D=E.uniforms;return D}function T(E,A){let D;for(let U=0,X=u.length;U<X;U++){const ne=u[U];if(ne.cacheKey===A){D=ne,++D.usedTimes;break}}return D===void 0&&(D=new qA(t,A,E,s),u.push(D)),D}function w(E){if(--E.usedTimes===0){const A=u.indexOf(E);u[A]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function N(){l.dispose()}return{getParameters:d,getProgramCacheKey:M,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:I,programs:u,dispose:N}}function e2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function t2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,S,b,_){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:S,renderOrder:f.renderOrder,z:b,group:_},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=S,d.renderOrder=f.renderOrder,d.z=b,d.group=_),e++,d}function o(f,h,p,S,b,_){const d=a(f,h,p,S,b,_);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,S,b,_){const d=a(f,h,p,S,b,_);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||t2),i.length>1&&i.sort(h||gp),r.length>1&&r.sort(h||gp)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function n2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new vp,t.set(i,[a])):r>=s.length?(a=new vp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function i2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Ze};break;case"SpotLight":n={position:new K,direction:new K,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function r2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let s2=0;function a2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o2(t){const e=new i2,n=r2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Et,a=new Et;function o(c){let u=0,f=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,S=0,b=0,_=0,d=0,M=0,g=0,x=0,R=0,T=0,w=0;c.sort(a2);for(let N=0,E=c.length;N<E;N++){const A=c[N],D=A.color,U=A.intensity,X=A.distance,ne=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=D.r*U,f+=D.g*U,h+=D.b*U;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],U);w++}else if(A.isDirectionalLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const te=A.shadow,$=n.get(A);$.shadowIntensity=te.intensity,$.shadowBias=te.bias,$.shadowNormalBias=te.normalBias,$.shadowRadius=te.radius,$.shadowMapSize=te.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=A.shadow.matrix,M++}i.directional[p]=W,p++}else if(A.isSpotLight){const W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(D).multiplyScalar(U),W.distance=X,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[b]=W;const te=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,te.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[b]=te.matrix,A.castShadow){const $=n.get(A);$.shadowIntensity=te.intensity,$.shadowBias=te.bias,$.shadowNormalBias=te.normalBias,$.shadowRadius=te.radius,$.shadowMapSize=te.mapSize,i.spotShadow[b]=$,i.spotShadowMap[b]=ne,x++}b++}else if(A.isRectAreaLight){const W=e.get(A);W.color.copy(D).multiplyScalar(U),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[_]=W,_++}else if(A.isPointLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){const te=A.shadow,$=n.get(A);$.shadowIntensity=te.intensity,$.shadowBias=te.bias,$.shadowNormalBias=te.normalBias,$.shadowRadius=te.radius,$.shadowMapSize=te.mapSize,$.shadowCameraNear=te.camera.near,$.shadowCameraFar=te.camera.far,i.pointShadow[S]=$,i.pointShadowMap[S]=ne,i.pointShadowMatrix[S]=A.shadow.matrix,g++}i.point[S]=W,S++}else if(A.isHemisphereLight){const W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(U),W.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[d]=W,d++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==S||I.spotLength!==b||I.rectAreaLength!==_||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==g||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=_,i.point.length=S,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,I.directionalLength=p,I.pointLength=S,I.spotLength=b,I.rectAreaLength=_,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=g,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=w,i.version=s2++)}function l(c,u){let f=0,h=0,p=0,S=0,b=0;const _=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const g=c[d];if(g.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(g.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),p++}else if(g.isRectAreaLight){const x=i.rectArea[S];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(_),a.identity(),s.copy(g.matrixWorld),s.premultiply(_),a.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),S++}else if(g.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(_),h++}else if(g.isHemisphereLight){const x=i.hemi[b];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(_),b++}}}return{setup:o,setupView:l,state:i}}function xp(t){const e=new o2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function l2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xp(t),e.set(r,[o])):s>=a.length?(o=new xp(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class c2 extends ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u2 extends ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h2=`uniform sampler2D shadow_pass;
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
}`;function d2(t,e,n){let i=new qf;const r=new Xe,s=new Xe,a=new ut,o=new c2({depthPacking:GE}),l=new u2,c={},u=n.maxTextureSize,f={[ji]:an,[an]:ji,[fi]:fi},h=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:f2,fragmentShader:h2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const S=new rr;S.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Yn(S,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let d=this.type;this.render=function(T,w,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const N=t.getRenderTarget(),E=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Wi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=d!==li&&this.type===li,X=d===li&&this.type!==li;for(let ne=0,W=T.length;ne<W;ne++){const te=T[ne],$=te.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const pe=$.getFrameExtents();if(r.multiply(pe),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,$.mapSize.y=s.y)),$.map===null||U===!0||X===!0){const de=this.type!==li?{minFilter:bn,magFilter:bn}:{};$.map!==null&&$.map.dispose(),$.map=new Or(r.x,r.y,de),$.map.texture.name=te.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const me=$.getViewportCount();for(let de=0;de<me;de++){const we=$.getViewport(de);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),D.viewport(a),$.updateMatrices(te,de),i=$.getFrustum(),x(w,I,$.camera,te,this.type)}$.isPointLightShadow!==!0&&this.type===li&&M($,I),$.needsUpdate=!1}d=this.type,_.needsUpdate=!1,t.setRenderTarget(N,E,A)};function M(T,w){const I=e.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,I,h,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,I,p,b,null)}function g(T,w,I,N){let E=null;const A=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)E=A;else if(E=I.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=E.uuid,U=w.uuid;let X=c[D];X===void 0&&(X={},c[D]=X);let ne=X[U];ne===void 0&&(ne=E.clone(),X[U]=ne,w.addEventListener("dispose",R)),E=ne}if(E.visible=w.visible,E.wireframe=w.wireframe,N===li?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=t.properties.get(E);D.light=I}return E}function x(T,w,I,N,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===li)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const U=e.update(T),X=T.material;if(Array.isArray(X)){const ne=U.groups;for(let W=0,te=ne.length;W<te;W++){const $=ne[W],pe=X[$.materialIndex];if(pe&&pe.visible){const me=g(T,pe,N,E);T.onBeforeShadow(t,T,w,I,U,me,$),t.renderBufferDirect(I,null,U,me,T,$),T.onAfterShadow(t,T,w,I,U,me,$)}}}else if(X.visible){const ne=g(T,X,N,E);T.onBeforeShadow(t,T,w,I,U,ne,null),t.renderBufferDirect(I,null,U,ne,T,null),T.onAfterShadow(t,T,w,I,U,ne,null)}}const D=T.children;for(let U=0,X=D.length;U<X;U++)x(D[U],w,I,N,E)}function R(T){T.target.removeEventListener("dispose",R);for(const I in c){const N=c[I],E=T.target.uuid;E in N&&(N[E].dispose(),delete N[E])}}}const p2={[ru]:su,[au]:cu,[ou]:uu,[As]:lu,[su]:ru,[cu]:au,[uu]:ou,[lu]:As};function m2(t){function e(){let G=!1;const Ce=new ut;let re=null;const he=new ut(0,0,0,0);return{setMask:function(Te){re!==Te&&!G&&(t.colorMask(Te,Te,Te,Te),re=Te)},setLocked:function(Te){G=Te},setClear:function(Te,Re,Je,Tt,Jt){Jt===!0&&(Te*=Tt,Re*=Tt,Je*=Tt),Ce.set(Te,Re,Je,Tt),he.equals(Ce)===!1&&(t.clearColor(Te,Re,Je,Tt),he.copy(Ce))},reset:function(){G=!1,re=null,he.set(-1,0,0,0)}}}function n(){let G=!1,Ce=!1,re=null,he=null,Te=null;return{setReversed:function(Re){Ce=Re},setTest:function(Re){Re?_e(t.DEPTH_TEST):H(t.DEPTH_TEST)},setMask:function(Re){re!==Re&&!G&&(t.depthMask(Re),re=Re)},setFunc:function(Re){if(Ce&&(Re=p2[Re]),he!==Re){switch(Re){case ru:t.depthFunc(t.NEVER);break;case su:t.depthFunc(t.ALWAYS);break;case au:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case ou:t.depthFunc(t.EQUAL);break;case lu:t.depthFunc(t.GEQUAL);break;case cu:t.depthFunc(t.GREATER);break;case uu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Re}},setLocked:function(Re){G=Re},setClear:function(Re){Te!==Re&&(t.clearDepth(Re),Te=Re)},reset:function(){G=!1,re=null,he=null,Te=null}}}function i(){let G=!1,Ce=null,re=null,he=null,Te=null,Re=null,Je=null,Tt=null,Jt=null;return{setTest:function(Qe){G||(Qe?_e(t.STENCIL_TEST):H(t.STENCIL_TEST))},setMask:function(Qe){Ce!==Qe&&!G&&(t.stencilMask(Qe),Ce=Qe)},setFunc:function(Qe,Qt,Jn){(re!==Qe||he!==Qt||Te!==Jn)&&(t.stencilFunc(Qe,Qt,Jn),re=Qe,he=Qt,Te=Jn)},setOp:function(Qe,Qt,Jn){(Re!==Qe||Je!==Qt||Tt!==Jn)&&(t.stencilOp(Qe,Qt,Jn),Re=Qe,Je=Qt,Tt=Jn)},setLocked:function(Qe){G=Qe},setClear:function(Qe){Jt!==Qe&&(t.clearStencil(Qe),Jt=Qe)},reset:function(){G=!1,Ce=null,re=null,he=null,Te=null,Re=null,Je=null,Tt=null,Jt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,S=!1,b=null,_=null,d=null,M=null,g=null,x=null,R=null,T=new Ze(0,0,0),w=0,I=!1,N=null,E=null,A=null,D=null,U=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,W=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(te)[1]),ne=W>=1):te.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ne=W>=2);let $=null,pe={};const me=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),we=new ut().fromArray(me),Pe=new ut().fromArray(de);function ee(G,Ce,re,he){const Te=new Uint8Array(4),Re=t.createTexture();t.bindTexture(G,Re),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<re;Je++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(Ce+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Re}const ue={};ue[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),s.setFunc(As),k(!1),Q(Ad),_e(t.CULL_FACE),y(Wi);function _e(G){c[G]!==!0&&(t.enable(G),c[G]=!0)}function H(G){c[G]!==!1&&(t.disable(G),c[G]=!1)}function ae(G,Ce){return u[G]!==Ce?(t.bindFramebuffer(G,Ce),u[G]=Ce,G===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Ce),G===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ie(G,Ce){let re=h,he=!1;if(G){re=f.get(Ce),re===void 0&&(re=[],f.set(Ce,re));const Te=G.textures;if(re.length!==Te.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Je=Te.length;Re<Je;Re++)re[Re]=t.COLOR_ATTACHMENT0+Re;re.length=Te.length,he=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,he=!0);he&&t.drawBuffers(re)}function fe(G){return p!==G?(t.useProgram(G),p=G,!0):!1}const Me={[br]:t.FUNC_ADD,[mE]:t.FUNC_SUBTRACT,[_E]:t.FUNC_REVERSE_SUBTRACT};Me[gE]=t.MIN,Me[vE]=t.MAX;const ye={[xE]:t.ZERO,[yE]:t.ONE,[EE]:t.SRC_COLOR,[nu]:t.SRC_ALPHA,[wE]:t.SRC_ALPHA_SATURATE,[TE]:t.DST_COLOR,[ME]:t.DST_ALPHA,[SE]:t.ONE_MINUS_SRC_COLOR,[iu]:t.ONE_MINUS_SRC_ALPHA,[AE]:t.ONE_MINUS_DST_COLOR,[bE]:t.ONE_MINUS_DST_ALPHA,[CE]:t.CONSTANT_COLOR,[RE]:t.ONE_MINUS_CONSTANT_COLOR,[PE]:t.CONSTANT_ALPHA,[LE]:t.ONE_MINUS_CONSTANT_ALPHA};function y(G,Ce,re,he,Te,Re,Je,Tt,Jt,Qe){if(G===Wi){S===!0&&(H(t.BLEND),S=!1);return}if(S===!1&&(_e(t.BLEND),S=!0),G!==pE){if(G!==b||Qe!==I){if((_!==br||g!==br)&&(t.blendEquation(t.FUNC_ADD),_=br,g=br),Qe)switch(G){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wd:t.blendFunc(t.ONE,t.ONE);break;case Cd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}d=null,M=null,x=null,R=null,T.set(0,0,0),w=0,b=G,I=Qe}return}Te=Te||Ce,Re=Re||re,Je=Je||he,(Ce!==_||Te!==g)&&(t.blendEquationSeparate(Me[Ce],Me[Te]),_=Ce,g=Te),(re!==d||he!==M||Re!==x||Je!==R)&&(t.blendFuncSeparate(ye[re],ye[he],ye[Re],ye[Je]),d=re,M=he,x=Re,R=Je),(Tt.equals(T)===!1||Jt!==w)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Jt),T.copy(Tt),w=Jt),b=G,I=!1}function P(G,Ce){G.side===fi?H(t.CULL_FACE):_e(t.CULL_FACE);let re=G.side===an;Ce&&(re=!re),k(re),G.blending===vs&&G.transparent===!1?y(Wi):y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const he=G.stencilWrite;a.setTest(he),he&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):H(t.SAMPLE_ALPHA_TO_COVERAGE)}function k(G){N!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),N=G)}function Q(G){G!==fE?(_e(t.CULL_FACE),G!==E&&(G===Ad?t.cullFace(t.BACK):G===hE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):H(t.CULL_FACE),E=G}function q(G){G!==A&&(ne&&t.lineWidth(G),A=G)}function se(G,Ce,re){G?(_e(t.POLYGON_OFFSET_FILL),(D!==Ce||U!==re)&&(t.polygonOffset(Ce,re),D=Ce,U=re)):H(t.POLYGON_OFFSET_FILL)}function oe(G){G?_e(t.SCISSOR_TEST):H(t.SCISSOR_TEST)}function v(G){G===void 0&&(G=t.TEXTURE0+X-1),$!==G&&(t.activeTexture(G),$=G)}function m(G,Ce,re){re===void 0&&($===null?re=t.TEXTURE0+X-1:re=$);let he=pe[re];he===void 0&&(he={type:void 0,texture:void 0},pe[re]=he),(he.type!==G||he.texture!==Ce)&&($!==re&&(t.activeTexture(re),$=re),t.bindTexture(G,Ce||ue[G]),he.type=G,he.texture=Ce)}function C(){const G=pe[$];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(G){we.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function be(G){Pe.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),Pe.copy(G))}function qe(G,Ce){let re=l.get(Ce);re===void 0&&(re=new WeakMap,l.set(Ce,re));let he=re.get(G);he===void 0&&(he=t.getUniformBlockIndex(Ce,G.name),re.set(G,he))}function Ue(G,Ce){const he=l.get(Ce).get(G);o.get(Ce)!==he&&(t.uniformBlockBinding(Ce,he,G.__bindingPointIndex),o.set(Ce,he))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},$=null,pe={},u={},f=new WeakMap,h=[],p=null,S=!1,b=null,_=null,d=null,M=null,g=null,x=null,R=null,T=new Ze(0,0,0),w=0,I=!1,N=null,E=null,A=null,D=null,U=null,we.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:_e,disable:H,bindFramebuffer:ae,drawBuffers:ie,useProgram:fe,setBlending:y,setMaterial:P,setFlipSided:k,setCullFace:Q,setLineWidth:q,setPolygonOffset:se,setScissorTest:oe,activeTexture:v,bindTexture:m,unbindTexture:C,compressedTexImage2D:F,compressedTexImage3D:V,texImage2D:ge,texImage3D:Le,updateUBOMapping:qe,uniformBlockBinding:Ue,texStorage2D:ve,texStorage3D:ce,texSubImage2D:B,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:le,scissor:De,viewport:be,reset:Ke}}function yp(t,e,n,i){const r=_2(i);switch(n){case _g:return t*e;case vg:return t*e;case xg:return t*e*2;case yg:return t*e/r.components*r.byteLength;case Wf:return t*e/r.components*r.byteLength;case Eg:return t*e*2/r.components*r.byteLength;case Xf:return t*e*2/r.components*r.byteLength;case gg:return t*e*3/r.components*r.byteLength;case Dn:return t*e*4/r.components*r.byteLength;case Yf:return t*e*4/r.components*r.byteLength;case Po:case Lo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Io:case Do:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _u:case vu:return Math.max(t,16)*Math.max(e,8)/4;case mu:case gu:return Math.max(t,8)*Math.max(e,8)/2;case xu:case yu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Au:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case No:case Uu:case Fu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sg:case ku:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bu:case zu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _2(t){switch(t){case xi:case dg:return{byteLength:1,components:1};case ba:case pg:case Ua:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case Nr:case Hf:case mi:return{byteLength:4,components:1};case mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function g2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(v,m){return p?new OffscreenCanvas(v,m):Aa("canvas")}function b(v,m,C){let F=1;const V=oe(v);if((V.width>C||V.height>C)&&(F=C/Math.max(V.width,V.height)),F<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const B=Math.floor(F*V.width),O=Math.floor(F*V.height);f===void 0&&(f=S(B,O));const z=m?S(B,O):f;return z.width=B,z.height=O,z.getContext("2d").drawImage(v,0,0,B,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+B+"x"+O+")."),z}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),v;return v}function _(v){return v.generateMipmaps&&v.minFilter!==bn&&v.minFilter!==Ln}function d(v){t.generateMipmap(v)}function M(v,m,C,F,V=!1){if(v!==null){if(t[v]!==void 0)return t[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let B=m;if(m===t.RED&&(C===t.FLOAT&&(B=t.R32F),C===t.HALF_FLOAT&&(B=t.R16F),C===t.UNSIGNED_BYTE&&(B=t.R8)),m===t.RED_INTEGER&&(C===t.UNSIGNED_BYTE&&(B=t.R8UI),C===t.UNSIGNED_SHORT&&(B=t.R16UI),C===t.UNSIGNED_INT&&(B=t.R32UI),C===t.BYTE&&(B=t.R8I),C===t.SHORT&&(B=t.R16I),C===t.INT&&(B=t.R32I)),m===t.RG&&(C===t.FLOAT&&(B=t.RG32F),C===t.HALF_FLOAT&&(B=t.RG16F),C===t.UNSIGNED_BYTE&&(B=t.RG8)),m===t.RG_INTEGER&&(C===t.UNSIGNED_BYTE&&(B=t.RG8UI),C===t.UNSIGNED_SHORT&&(B=t.RG16UI),C===t.UNSIGNED_INT&&(B=t.RG32UI),C===t.BYTE&&(B=t.RG8I),C===t.SHORT&&(B=t.RG16I),C===t.INT&&(B=t.RG32I)),m===t.RGB_INTEGER&&(C===t.UNSIGNED_BYTE&&(B=t.RGB8UI),C===t.UNSIGNED_SHORT&&(B=t.RGB16UI),C===t.UNSIGNED_INT&&(B=t.RGB32UI),C===t.BYTE&&(B=t.RGB8I),C===t.SHORT&&(B=t.RGB16I),C===t.INT&&(B=t.RGB32I)),m===t.RGBA_INTEGER&&(C===t.UNSIGNED_BYTE&&(B=t.RGBA8UI),C===t.UNSIGNED_SHORT&&(B=t.RGBA16UI),C===t.UNSIGNED_INT&&(B=t.RGBA32UI),C===t.BYTE&&(B=t.RGBA8I),C===t.SHORT&&(B=t.RGBA16I),C===t.INT&&(B=t.RGBA32I)),m===t.RGB&&C===t.UNSIGNED_INT_5_9_9_9_REV&&(B=t.RGB9_E5),m===t.RGBA){const O=V?Xo:it.getTransfer(F);C===t.FLOAT&&(B=t.RGBA32F),C===t.HALF_FLOAT&&(B=t.RGBA16F),C===t.UNSIGNED_BYTE&&(B=O===mt?t.SRGB8_ALPHA8:t.RGBA8),C===t.UNSIGNED_SHORT_4_4_4_4&&(B=t.RGBA4),C===t.UNSIGNED_SHORT_5_5_5_1&&(B=t.RGB5_A1)}return(B===t.R16F||B===t.R32F||B===t.RG16F||B===t.RG32F||B===t.RGBA16F||B===t.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function g(v,m){let C;return v?m===null||m===Nr||m===Rs?C=t.DEPTH24_STENCIL8:m===mi?C=t.DEPTH32F_STENCIL8:m===ba&&(C=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Nr||m===Rs?C=t.DEPTH_COMPONENT24:m===mi?C=t.DEPTH_COMPONENT32F:m===ba&&(C=t.DEPTH_COMPONENT16),C}function x(v,m){return _(v)===!0||v.isFramebufferTexture&&v.minFilter!==bn&&v.minFilter!==Ln?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function R(v){const m=v.target;m.removeEventListener("dispose",R),w(m),m.isVideoTexture&&u.delete(m)}function T(v){const m=v.target;m.removeEventListener("dispose",T),N(m)}function w(v){const m=i.get(v);if(m.__webglInit===void 0)return;const C=v.source,F=h.get(C);if(F){const V=F[m.__cacheKey];V.usedTimes--,V.usedTimes===0&&I(v),Object.keys(F).length===0&&h.delete(C)}i.remove(v)}function I(v){const m=i.get(v);t.deleteTexture(m.__webglTexture);const C=v.source,F=h.get(C);delete F[m.__cacheKey],a.memory.textures--}function N(v){const m=i.get(v);if(v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(m.__webglFramebuffer[F]))for(let V=0;V<m.__webglFramebuffer[F].length;V++)t.deleteFramebuffer(m.__webglFramebuffer[F][V]);else t.deleteFramebuffer(m.__webglFramebuffer[F]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[F])}else{if(Array.isArray(m.__webglFramebuffer))for(let F=0;F<m.__webglFramebuffer.length;F++)t.deleteFramebuffer(m.__webglFramebuffer[F]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let F=0;F<m.__webglColorRenderbuffer.length;F++)m.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[F]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const C=v.textures;for(let F=0,V=C.length;F<V;F++){const B=i.get(C[F]);B.__webglTexture&&(t.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(C[F])}i.remove(v)}let E=0;function A(){E=0}function D(){const v=E;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),E+=1,v}function U(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function X(v,m){const C=i.get(v);if(v.isVideoTexture&&q(v),v.isRenderTargetTexture===!1&&v.version>0&&C.__version!==v.version){const F=v.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(C,v,m);return}}n.bindTexture(t.TEXTURE_2D,C.__webglTexture,t.TEXTURE0+m)}function ne(v,m){const C=i.get(v);if(v.version>0&&C.__version!==v.version){Pe(C,v,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,C.__webglTexture,t.TEXTURE0+m)}function W(v,m){const C=i.get(v);if(v.version>0&&C.__version!==v.version){Pe(C,v,m);return}n.bindTexture(t.TEXTURE_3D,C.__webglTexture,t.TEXTURE0+m)}function te(v,m){const C=i.get(v);if(v.version>0&&C.__version!==v.version){ee(C,v,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+m)}const $={[du]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[pu]:t.MIRRORED_REPEAT},pe={[bn]:t.NEAREST,[HE]:t.NEAREST_MIPMAP_NEAREST,[Ja]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[Ql]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},me={[XE]:t.NEVER,[ZE]:t.ALWAYS,[YE]:t.LESS,[bg]:t.LEQUAL,[$E]:t.EQUAL,[KE]:t.GEQUAL,[jE]:t.GREATER,[qE]:t.NOTEQUAL};function de(v,m){if(m.type===mi&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Ln||m.magFilter===Ql||m.magFilter===Ja||m.magFilter===Cr||m.minFilter===Ln||m.minFilter===Ql||m.minFilter===Ja||m.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(v,t.TEXTURE_WRAP_S,$[m.wrapS]),t.texParameteri(v,t.TEXTURE_WRAP_T,$[m.wrapT]),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,$[m.wrapR]),t.texParameteri(v,t.TEXTURE_MAG_FILTER,pe[m.magFilter]),t.texParameteri(v,t.TEXTURE_MIN_FILTER,pe[m.minFilter]),m.compareFunction&&(t.texParameteri(v,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(v,t.TEXTURE_COMPARE_FUNC,me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===bn||m.minFilter!==Ja&&m.minFilter!==Cr||m.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");t.texParameterf(v,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function we(v,m){let C=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",R));const F=m.source;let V=h.get(F);V===void 0&&(V={},h.set(F,V));const B=U(m);if(B!==v.__cacheKey){V[B]===void 0&&(V[B]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,C=!0),V[B].usedTimes++;const O=V[v.__cacheKey];O!==void 0&&(V[v.__cacheKey].usedTimes--,O.usedTimes===0&&I(m)),v.__cacheKey=B,v.__webglTexture=V[B].texture}return C}function Pe(v,m,C){let F=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(F=t.TEXTURE_3D);const V=we(v,m),B=m.source;n.bindTexture(F,v.__webglTexture,t.TEXTURE0+C);const O=i.get(B);if(B.version!==O.__version||V===!0){n.activeTexture(t.TEXTURE0+C);const z=it.getPrimaries(it.workingColorSpace),le=m.colorSpace===Vi?null:it.getPrimaries(m.colorSpace),ve=m.colorSpace===Vi||z===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ce=b(m.image,!1,r.maxTextureSize);ce=se(m,ce);const ge=s.convert(m.format,m.colorSpace),Le=s.convert(m.type);let De=M(m.internalFormat,ge,Le,m.colorSpace,m.isVideoTexture);de(F,m);let be;const qe=m.mipmaps,Ue=m.isVideoTexture!==!0,Ke=O.__version===void 0||V===!0,G=B.dataReady,Ce=x(m,ce);if(m.isDepthTexture)De=g(m.format===Ps,m.type),Ke&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,De,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,ge,Le,null));else if(m.isDataTexture)if(qe.length>0){Ue&&Ke&&n.texStorage2D(t.TEXTURE_2D,Ce,De,qe[0].width,qe[0].height);for(let re=0,he=qe.length;re<he;re++)be=qe[re],Ue?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,be.width,be.height,ge,Le,be.data):n.texImage2D(t.TEXTURE_2D,re,De,be.width,be.height,0,ge,Le,be.data);m.generateMipmaps=!1}else Ue?(Ke&&n.texStorage2D(t.TEXTURE_2D,Ce,De,ce.width,ce.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,ge,Le,ce.data)):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,ge,Le,ce.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ue&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,De,qe[0].width,qe[0].height,ce.depth);for(let re=0,he=qe.length;re<he;re++)if(be=qe[re],m.format!==Dn)if(ge!==null)if(Ue){if(G)if(m.layerUpdates.size>0){const Te=yp(be.width,be.height,m.format,m.type);for(const Re of m.layerUpdates){const Je=be.data.subarray(Re*Te/be.data.BYTES_PER_ELEMENT,(Re+1)*Te/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Re,be.width,be.height,1,ge,Je,0,0)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,ce.depth,ge,be.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,De,be.width,be.height,ce.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,ce.depth,ge,Le,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,De,be.width,be.height,ce.depth,0,ge,Le,be.data)}else{Ue&&Ke&&n.texStorage2D(t.TEXTURE_2D,Ce,De,qe[0].width,qe[0].height);for(let re=0,he=qe.length;re<he;re++)be=qe[re],m.format!==Dn?ge!==null?Ue?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,be.width,be.height,ge,be.data):n.compressedTexImage2D(t.TEXTURE_2D,re,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,be.width,be.height,ge,Le,be.data):n.texImage2D(t.TEXTURE_2D,re,De,be.width,be.height,0,ge,Le,be.data)}else if(m.isDataArrayTexture)if(Ue){if(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,De,ce.width,ce.height,ce.depth),G)if(m.layerUpdates.size>0){const re=yp(ce.width,ce.height,m.format,m.type);for(const he of m.layerUpdates){const Te=ce.data.subarray(he*re/ce.data.BYTES_PER_ELEMENT,(he+1)*re/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ce.width,ce.height,1,ge,Le,Te)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ge,Le,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,ge,Le,ce.data);else if(m.isData3DTexture)Ue?(Ke&&n.texStorage3D(t.TEXTURE_3D,Ce,De,ce.width,ce.height,ce.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ge,Le,ce.data)):n.texImage3D(t.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,ge,Le,ce.data);else if(m.isFramebufferTexture){if(Ke)if(Ue)n.texStorage2D(t.TEXTURE_2D,Ce,De,ce.width,ce.height);else{let re=ce.width,he=ce.height;for(let Te=0;Te<Ce;Te++)n.texImage2D(t.TEXTURE_2D,Te,De,re,he,0,ge,Le,null),re>>=1,he>>=1}}else if(qe.length>0){if(Ue&&Ke){const re=oe(qe[0]);n.texStorage2D(t.TEXTURE_2D,Ce,De,re.width,re.height)}for(let re=0,he=qe.length;re<he;re++)be=qe[re],Ue?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge,Le,be):n.texImage2D(t.TEXTURE_2D,re,De,ge,Le,be);m.generateMipmaps=!1}else if(Ue){if(Ke){const re=oe(ce);n.texStorage2D(t.TEXTURE_2D,Ce,De,re.width,re.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Le,ce)}else n.texImage2D(t.TEXTURE_2D,0,De,ge,Le,ce);_(m)&&d(F),O.__version=B.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ee(v,m,C){if(m.image.length!==6)return;const F=we(v,m),V=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,v.__webglTexture,t.TEXTURE0+C);const B=i.get(V);if(V.version!==B.__version||F===!0){n.activeTexture(t.TEXTURE0+C);const O=it.getPrimaries(it.workingColorSpace),z=m.colorSpace===Vi?null:it.getPrimaries(m.colorSpace),le=m.colorSpace===Vi||O===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ve=m.isCompressedTexture||m.image[0].isCompressedTexture,ce=m.image[0]&&m.image[0].isDataTexture,ge=[];for(let he=0;he<6;he++)!ve&&!ce?ge[he]=b(m.image[he],!0,r.maxCubemapSize):ge[he]=ce?m.image[he].image:m.image[he],ge[he]=se(m,ge[he]);const Le=ge[0],De=s.convert(m.format,m.colorSpace),be=s.convert(m.type),qe=M(m.internalFormat,De,be,m.colorSpace),Ue=m.isVideoTexture!==!0,Ke=B.__version===void 0||F===!0,G=V.dataReady;let Ce=x(m,Le);de(t.TEXTURE_CUBE_MAP,m);let re;if(ve){Ue&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,qe,Le.width,Le.height);for(let he=0;he<6;he++){re=ge[he].mipmaps;for(let Te=0;Te<re.length;Te++){const Re=re[Te];m.format!==Dn?De!==null?Ue?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Re.width,Re.height,De,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Re.width,Re.height,De,be,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,qe,Re.width,Re.height,0,De,be,Re.data)}}}else{if(re=m.mipmaps,Ue&&Ke){re.length>0&&Ce++;const he=oe(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,qe,he.width,he.height)}for(let he=0;he<6;he++)if(ce){Ue?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ge[he].width,ge[he].height,De,be,ge[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,qe,ge[he].width,ge[he].height,0,De,be,ge[he].data);for(let Te=0;Te<re.length;Te++){const Je=re[Te].image[he].image;Ue?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Je.width,Je.height,De,be,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,qe,Je.width,Je.height,0,De,be,Je.data)}}else{Ue?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De,be,ge[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,qe,De,be,ge[he]);for(let Te=0;Te<re.length;Te++){const Re=re[Te];Ue?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,De,be,Re.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,qe,De,be,Re.image[he])}}}_(m)&&d(t.TEXTURE_CUBE_MAP),B.__version=V.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ue(v,m,C,F,V,B){const O=s.convert(C.format,C.colorSpace),z=s.convert(C.type),le=M(C.internalFormat,O,z,C.colorSpace);if(!i.get(m).__hasExternalTextures){const ce=Math.max(1,m.width>>B),ge=Math.max(1,m.height>>B);V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?n.texImage3D(V,B,le,ce,ge,m.depth,0,O,z,null):n.texImage2D(V,B,le,ce,ge,0,O,z,null)}n.bindFramebuffer(t.FRAMEBUFFER,v),Q(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,V,i.get(C).__webglTexture,0,k(m)):(V===t.TEXTURE_2D||V>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,V,i.get(C).__webglTexture,B),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(v,m,C){if(t.bindRenderbuffer(t.RENDERBUFFER,v),m.depthBuffer){const F=m.depthTexture,V=F&&F.isDepthTexture?F.type:null,B=g(m.stencilBuffer,V),O=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=k(m);Q(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z,B,m.width,m.height):C?t.renderbufferStorageMultisample(t.RENDERBUFFER,z,B,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,B,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,v)}else{const F=m.textures;for(let V=0;V<F.length;V++){const B=F[V],O=s.convert(B.format,B.colorSpace),z=s.convert(B.type),le=M(B.internalFormat,O,z,B.colorSpace),ve=k(m);C&&Q(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,le,m.width,m.height):Q(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,le,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,le,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function H(v,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(m.depthTexture).__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),X(m.depthTexture,0);const F=i.get(m.depthTexture).__webglTexture,V=k(m);if(m.depthTexture.format===xs)Q(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(m.depthTexture.format===Ps)Q(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function ae(v){const m=i.get(v),C=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const F=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),F){const V=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,F.removeEventListener("dispose",V)};F.addEventListener("dispose",V),m.__depthDisposeCallback=V}m.__boundDepthTexture=F}if(v.depthTexture&&!m.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");H(m.__webglFramebuffer,v)}else if(C){m.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[F]),m.__webglDepthbuffer[F]===void 0)m.__webglDepthbuffer[F]=t.createRenderbuffer(),_e(m.__webglDepthbuffer[F],v,!1);else{const V=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=m.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,B)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),_e(m.__webglDepthbuffer,v,!1);else{const F=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,V)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(v,m,C){const F=i.get(v);m!==void 0&&ue(F.__webglFramebuffer,v,v.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),C!==void 0&&ae(v)}function fe(v){const m=v.texture,C=i.get(v),F=i.get(m);v.addEventListener("dispose",T);const V=v.textures,B=v.isWebGLCubeRenderTarget===!0,O=V.length>1;if(O||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=m.version,a.memory.textures++),B){C.__webglFramebuffer=[];for(let z=0;z<6;z++)if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer[z]=[];for(let le=0;le<m.mipmaps.length;le++)C.__webglFramebuffer[z][le]=t.createFramebuffer()}else C.__webglFramebuffer[z]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer=[];for(let z=0;z<m.mipmaps.length;z++)C.__webglFramebuffer[z]=t.createFramebuffer()}else C.__webglFramebuffer=t.createFramebuffer();if(O)for(let z=0,le=V.length;z<le;z++){const ve=i.get(V[z]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(v.samples>0&&Q(v)===!1){C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let z=0;z<V.length;z++){const le=V[z];C.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,C.__webglColorRenderbuffer[z]);const ve=s.convert(le.format,le.colorSpace),ce=s.convert(le.type),ge=M(le.internalFormat,ve,ce,le.colorSpace,v.isXRRenderTarget===!0),Le=k(v);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ge,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,C.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),v.depthBuffer&&(C.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(C.__webglDepthRenderbuffer,v,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(B){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),de(t.TEXTURE_CUBE_MAP,m);for(let z=0;z<6;z++)if(m.mipmaps&&m.mipmaps.length>0)for(let le=0;le<m.mipmaps.length;le++)ue(C.__webglFramebuffer[z][le],v,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le);else ue(C.__webglFramebuffer[z],v,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);_(m)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(O){for(let z=0,le=V.length;z<le;z++){const ve=V[z],ce=i.get(ve);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),de(t.TEXTURE_2D,ve),ue(C.__webglFramebuffer,v,ve,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,0),_(ve)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let z=t.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(z=v.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(z,F.__webglTexture),de(z,m),m.mipmaps&&m.mipmaps.length>0)for(let le=0;le<m.mipmaps.length;le++)ue(C.__webglFramebuffer[le],v,m,t.COLOR_ATTACHMENT0,z,le);else ue(C.__webglFramebuffer,v,m,t.COLOR_ATTACHMENT0,z,0);_(m)&&d(z),n.unbindTexture()}v.depthBuffer&&ae(v)}function Me(v){const m=v.textures;for(let C=0,F=m.length;C<F;C++){const V=m[C];if(_(V)){const B=v.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,O=i.get(V).__webglTexture;n.bindTexture(B,O),d(B),n.unbindTexture()}}}const ye=[],y=[];function P(v){if(v.samples>0){if(Q(v)===!1){const m=v.textures,C=v.width,F=v.height;let V=t.COLOR_BUFFER_BIT;const B=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=i.get(v),z=m.length>1;if(z)for(let le=0;le<m.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,O.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let le=0;le<m.length;le++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(V|=t.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(V|=t.STENCIL_BUFFER_BIT)),z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const ve=i.get(m[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,C,F,0,0,C,F,V,t.NEAREST),l===!0&&(ye.length=0,y.length=0,ye.push(t.COLOR_ATTACHMENT0+le),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ye.push(B),y.push(B),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let le=0;le<m.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const ve=i.get(m[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,O.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function k(v){return Math.min(r.maxSamples,v.samples)}function Q(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function q(v){const m=a.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function se(v,m){const C=v.colorSpace,F=v.format,V=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||C!==ir&&C!==Vi&&(it.getTransfer(C)===mt?(F!==Dn||V!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),m}function oe(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=A,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=W,this.setTextureCube=te,this.rebindTextures=ie,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Q}function v2(t,e){function n(i,r=Vi){let s;const a=it.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===Vf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dg)return t.BYTE;if(i===pg)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===Hf)return t.INT;if(i===Nr)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Ua)return t.HALF_FLOAT;if(i===_g)return t.ALPHA;if(i===gg)return t.RGB;if(i===Dn)return t.RGBA;if(i===vg)return t.LUMINANCE;if(i===xg)return t.LUMINANCE_ALPHA;if(i===xs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===yg)return t.RED;if(i===Wf)return t.RED_INTEGER;if(i===Eg)return t.RG;if(i===Xf)return t.RG_INTEGER;if(i===Yf)return t.RGBA_INTEGER;if(i===Po||i===Lo||i===Io||i===Do)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mu||i===_u||i===gu||i===vu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xu||i===yu||i===Eu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xu||i===yu)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Su||i===Mu||i===bu||i===Tu||i===Au||i===wu||i===Cu||i===Ru||i===Pu||i===Lu||i===Iu||i===Du||i===Nu||i===Ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Su)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Au)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ru)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Iu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Du)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ou)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===Uu||i===Fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===No)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sg||i===ku||i===Bu||i===zu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===No)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class x2 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Eo extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y2={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const _=n.getJointPose(b,i),d=this._getHandJoint(c,b);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,S=.005;c.inputState.pinching&&h>p+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const E2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:E2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Sl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b2 extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,S=null;const b=new M2,_=n.getContextAttributes();let d=null,M=null;const g=[],x=[],R=new Xe;let T=null;const w=new dn;w.layers.enable(1),w.viewport=new ut;const I=new dn;I.layers.enable(2),I.viewport=new ut;const N=[w,I],E=new x2;E.layers.enable(1),E.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=g[ee];return ue===void 0&&(ue=new wc,g[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=g[ee];return ue===void 0&&(ue=new wc,g[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=g[ee];return ue===void 0&&(ue=new wc,g[ee]=ue),ue.getHandSpace()};function U(ee){const ue=x.indexOf(ee.inputSource);if(ue===-1)return;const _e=g[ue];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,c||a),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<g.length;ee++){const ue=x[ee];ue!==null&&(x[ee]=null,g[ee].disconnect(ue))}A=null,D=null,b.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,M=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Or(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ue=null,_e=null,H=null;_.depth&&(H=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=_.stencil?Ps:xs,_e=_.stencil?Rs:Nr);const ae={colorFormat:n.RGBA8,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Or(h.textureWidth,h.textureHeight,{format:Dn,type:xi,depthTexture:new Bg(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ne(ee){for(let ue=0;ue<ee.removed.length;ue++){const _e=ee.removed[ue],H=x.indexOf(_e);H>=0&&(x[H]=null,g[H].disconnect(_e))}for(let ue=0;ue<ee.added.length;ue++){const _e=ee.added[ue];let H=x.indexOf(_e);if(H===-1){for(let ie=0;ie<g.length;ie++)if(ie>=x.length){x.push(_e),H=ie;break}else if(x[ie]===null){x[ie]=_e,H=ie;break}if(H===-1)break}const ae=g[H];ae&&ae.connect(_e)}}const W=new K,te=new K;function $(ee,ue,_e){W.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const H=W.distanceTo(te),ae=ue.projectionMatrix.elements,ie=_e.projectionMatrix.elements,fe=ae[14]/(ae[10]-1),Me=ae[14]/(ae[10]+1),ye=(ae[9]+1)/ae[5],y=(ae[9]-1)/ae[5],P=(ae[8]-1)/ae[0],k=(ie[8]+1)/ie[0],Q=fe*P,q=fe*k,se=H/(-P+k),oe=se*-P;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(oe),ee.translateZ(se),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ae[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const v=fe+se,m=Me+se,C=Q-oe,F=q+(H-oe),V=ye*Me/m*v,B=y*Me/m*v;ee.projectionMatrix.makePerspective(C,F,V,B,v,m),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function pe(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ue=ee.near,_e=ee.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(_e=b.depthFar)),E.near=I.near=w.near=ue,E.far=I.far=w.far=_e,(A!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,D=E.far);const H=ee.parent,ae=E.cameras;pe(E,H);for(let ie=0;ie<ae.length;ie++)pe(ae[ie],H);ae.length===2?$(E,w,I):E.projectionMatrix.copy(w.projectionMatrix),me(ee,E,H)};function me(ee,ue,_e){_e===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ta*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(E)};let de=null;function we(ee,ue){if(u=ue.getViewerPose(c||a),S=ue,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let H=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,H=!0);for(let ie=0;ie<_e.length;ie++){const fe=_e[ie];let Me=null;if(p!==null)Me=p.getViewport(fe);else{const y=f.getViewSubImage(h,fe);Me=y.viewport,ie===0&&(e.setRenderTargetTextures(M,y.colorTexture,h.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(M))}let ye=N[ie];ye===void 0&&(ye=new dn,ye.layers.enable(ie),ye.viewport=new ut,N[ie]=ye),ye.matrix.fromArray(fe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(fe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),ie===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),H===!0&&E.cameras.push(ye)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ie=f.getDepthInformation(_e[0]);ie&&ie.isValid&&ie.texture&&b.init(e,ie,r.renderState)}}for(let _e=0;_e<g.length;_e++){const H=x[_e],ae=g[_e];H!==null&&ae!==void 0&&ae.update(H,ue,c||a)}de&&de(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),S=null}const Pe=new Fg;Pe.setAnimationLoop(we),this.setAnimationLoop=function(ee){de=ee},this.dispose=function(){}}}const gr=new Kn,T2=new Et;function A2(t,e){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,Ng(t)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,M,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(_,d):d.isMeshToonMaterial?(s(_,d),f(_,d)):d.isMeshPhongMaterial?(s(_,d),u(_,d)):d.isMeshStandardMaterial?(s(_,d),h(_,d),d.isMeshPhysicalMaterial&&p(_,d,x)):d.isMeshMatcapMaterial?(s(_,d),S(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),b(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?l(_,d,M,g):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===an&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===an&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const M=e.get(d),g=M.envMap,x=M.envMapRotation;g&&(_.envMap.value=g,gr.copy(x),gr.x*=-1,gr.y*=-1,gr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),_.envMapRotation.value.setFromMatrix4(T2.makeRotationFromEuler(gr)),_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,M,g){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*M,_.scale.value=g*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function f(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function h(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,M){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,d){d.matcap&&(_.matcap.value=d.matcap)}function b(_,d){const M=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,g){const x=g.program;i.uniformBlockBinding(M,x)}function c(M,g){let x=r[M.id];x===void 0&&(S(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",_));const R=g.program;i.updateUBOMapping(M,R);const T=e.render.frame;s[M.id]!==T&&(h(M),s[M.id]=T)}function u(M){const g=f();M.__bindingPointIndex=g;const x=t.createBuffer(),R=M.__size,T=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const g=r[M.id],x=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,w=x.length;T<w;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let N=0,E=I.length;N<E;N++){const A=I[N];if(p(A,T,N,R)===!0){const D=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let ne=0;ne<U.length;ne++){const W=U[ne],te=b(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,D+X,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,g,x,R){const T=M.value,w=g+"_"+x;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const I=R[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function S(M){const g=M.uniforms;let x=0;const R=16;for(let w=0,I=g.length;w<I;w++){const N=Array.isArray(g[w])?g[w]:[g[w]];for(let E=0,A=N.length;E<A;E++){const D=N[E],U=Array.isArray(D.value)?D.value:[D.value];for(let X=0,ne=U.length;X<ne;X++){const W=U[X],te=b(W),$=x%R,pe=$%te.boundary,me=$+pe;x+=pe,me!==0&&R-me<te.storage&&(x+=R-me),D.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=te.storage}}}const T=x%R;return T>0&&(x+=R-T),M.__size=x,M.__cache={},this}function b(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function _(M){const g=M.target;g.removeEventListener("dispose",_);const x=a.indexOf(g.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class C2{constructor(e={}){const{canvas:n=mS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),S=new Int32Array(4);let b=null,_=null;const d=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Xi,this.toneMappingExposure=1;const g=this;let x=!1,R=0,T=0,w=null,I=-1,N=null;const E=new ut,A=new ut;let D=null;const U=new Ze(0);let X=0,ne=n.width,W=n.height,te=1,$=null,pe=null;const me=new ut(0,0,ne,W),de=new ut(0,0,ne,W);let we=!1;const Pe=new qf;let ee=!1,ue=!1;const _e=new Et,H=new Et,ae=new K,ie=new ut,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function ye(){return w===null?te:1}let y=i;function P(L,Y){return n.getContext(L,Y)}try{const L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Re,!1),y===null){const Y="webgl2";if(y=P(Y,L),y===null)throw P(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let k,Q,q,se,oe,v,m,C,F,V,B,O,z,le,ve,ce,ge,Le,De,be,qe,Ue,Ke,G;function Ce(){k=new DT(y),k.init(),Ue=new v2(y,k),Q=new wT(y,k,e,Ue),q=new m2(y),Q.reverseDepthBuffer&&q.buffers.depth.setReversed(!0),se=new UT(y),oe=new e2,v=new g2(y,k,q,oe,Q,Ue,se),m=new RT(g),C=new IT(g),F=new GS(y),Ke=new TT(y,F),V=new NT(y,F,se,Ke),B=new kT(y,V,F,se),De=new FT(y,Q,v),ce=new CT(oe),O=new QA(g,m,C,k,Q,Ke,ce),z=new A2(g,oe),le=new n2,ve=new l2(k),Le=new bT(g,m,C,q,B,h,l),ge=new d2(g,B,Q),G=new w2(y,se,Q,q),be=new AT(y,k,se),qe=new OT(y,k,se),se.programs=O.programs,g.capabilities=Q,g.extensions=k,g.properties=oe,g.renderLists=le,g.shadowMap=ge,g.state=q,g.info=se}Ce();const re=new b2(g,y);this.xr=re,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const L=k.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=k.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(L){L!==void 0&&(te=L,this.setSize(ne,W,!1))},this.getSize=function(L){return L.set(ne,W)},this.setSize=function(L,Y,Z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,W=Y,n.width=Math.floor(L*te),n.height=Math.floor(Y*te),Z===!0&&(n.style.width=L+"px",n.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(ne*te,W*te).floor()},this.setDrawingBufferSize=function(L,Y,Z){ne=L,W=Y,te=Z,n.width=Math.floor(L*Z),n.height=Math.floor(Y*Z),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(me)},this.setViewport=function(L,Y,Z,J){L.isVector4?me.set(L.x,L.y,L.z,L.w):me.set(L,Y,Z,J),q.viewport(E.copy(me).multiplyScalar(te).round())},this.getScissor=function(L){return L.copy(de)},this.setScissor=function(L,Y,Z,J){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,Y,Z,J),q.scissor(A.copy(de).multiplyScalar(te).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(L){q.setScissorTest(we=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){pe=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(L=!0,Y=!0,Z=!0){let J=0;if(L){let j=!1;if(w!==null){const xe=w.texture.format;j=xe===Yf||xe===Xf||xe===Wf}if(j){const xe=w.texture.type,Ae=xe===xi||xe===Nr||xe===ba||xe===Rs||xe===Vf||xe===Gf,Ne=Le.getClearColor(),Oe=Le.getClearAlpha(),ze=Ne.r,Ve=Ne.g,Fe=Ne.b;Ae?(p[0]=ze,p[1]=Ve,p[2]=Fe,p[3]=Oe,y.clearBufferuiv(y.COLOR,0,p)):(S[0]=ze,S[1]=Ve,S[2]=Fe,S[3]=Oe,y.clearBufferiv(y.COLOR,0,S))}else J|=y.COLOR_BUFFER_BIT}Y&&(J|=y.DEPTH_BUFFER_BIT,y.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(J|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),le.dispose(),ve.dispose(),oe.dispose(),m.dispose(),C.dispose(),B.dispose(),Ke.dispose(),G.dispose(),O.dispose(),re.dispose(),re.removeEventListener("sessionstart",xh),re.removeEventListener("sessionend",yh),or.stop()};function he(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const L=se.autoReset,Y=ge.enabled,Z=ge.autoUpdate,J=ge.needsUpdate,j=ge.type;Ce(),se.autoReset=L,ge.enabled=Y,ge.autoUpdate=Z,ge.needsUpdate=J,ge.type=j}function Re(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Je(L){const Y=L.target;Y.removeEventListener("dispose",Je),Tt(Y)}function Tt(L){Jt(L),oe.remove(L)}function Jt(L){const Y=oe.get(L).programs;Y!==void 0&&(Y.forEach(function(Z){O.releaseProgram(Z)}),L.isShaderMaterial&&O.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,Z,J,j,xe){Y===null&&(Y=fe);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,Ne=i0(L,Y,Z,J,j);q.setMaterial(J,Ae);let Oe=Z.index,ze=1;if(J.wireframe===!0){if(Oe=V.getWireframeAttribute(Z),Oe===void 0)return;ze=2}const Ve=Z.drawRange,Fe=Z.attributes.position;let at=Ve.start*ze,pt=(Ve.start+Ve.count)*ze;xe!==null&&(at=Math.max(at,xe.start*ze),pt=Math.min(pt,(xe.start+xe.count)*ze)),Oe!==null?(at=Math.max(at,0),pt=Math.min(pt,Oe.count)):Fe!=null&&(at=Math.max(at,0),pt=Math.min(pt,Fe.count));const St=pt-at;if(St<0||St===1/0)return;Ke.setup(j,J,Ne,Z,Oe);let on,tt=be;if(Oe!==null&&(on=F.get(Oe),tt=qe,tt.setIndex(on)),j.isMesh)J.wireframe===!0?(q.setLineWidth(J.wireframeLinewidth*ye()),tt.setMode(y.LINES)):tt.setMode(y.TRIANGLES);else if(j.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),q.setLineWidth(ke*ye()),j.isLineSegments?tt.setMode(y.LINES):j.isLineLoop?tt.setMode(y.LINE_LOOP):tt.setMode(y.LINE_STRIP)}else j.isPoints?tt.setMode(y.POINTS):j.isSprite&&tt.setMode(y.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)tt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ke=j._multiDrawStarts,Ut=j._multiDrawCounts,nt=j._multiDrawCount,An=Oe?F.get(Oe).bytesPerElement:1,Hr=oe.get(J).currentProgram.getUniforms();for(let ln=0;ln<nt;ln++)Hr.setValue(y,"_gl_DrawID",ln),tt.render(ke[ln]/An,Ut[ln])}else if(j.isInstancedMesh)tt.renderInstances(at,St,j.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ut=Math.min(Z.instanceCount,ke);tt.renderInstances(at,St,Ut)}else tt.render(at,St)};function Qe(L,Y,Z){L.transparent===!0&&L.side===fi&&L.forceSinglePass===!1?(L.side=an,L.needsUpdate=!0,Wa(L,Y,Z),L.side=ji,L.needsUpdate=!0,Wa(L,Y,Z),L.side=fi):Wa(L,Y,Z)}this.compile=function(L,Y,Z=null){Z===null&&(Z=L),_=ve.get(Z),_.init(Y),M.push(_),Z.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),L!==Z&&L.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const J=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const Ne=xe[Ae];Qe(Ne,Z,j),J.add(Ne)}else Qe(xe,Z,j),J.add(xe)}),M.pop(),_=null,J},this.compileAsync=function(L,Y,Z=null){const J=this.compile(L,Y,Z);return new Promise(j=>{function xe(){if(J.forEach(function(Ae){oe.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){j(L);return}setTimeout(xe,10)}k.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Qt=null;function Jn(L){Qt&&Qt(L)}function xh(){or.stop()}function yh(){or.start()}const or=new Fg;or.setAnimationLoop(Jn),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(L){Qt=L,re.setAnimationLoop(L),L===null?or.stop():or.start()},re.addEventListener("sessionstart",xh),re.addEventListener("sessionend",yh),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Y),Y=re.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,Y,w),_=ve.get(L,M.length),_.init(Y),M.push(_),H.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pe.setFromProjectionMatrix(H),ue=this.localClippingEnabled,ee=ce.init(this.clippingPlanes,ue),b=le.get(L,d.length),b.init(),d.push(b),re.enabled===!0&&re.isPresenting===!0){const xe=g.xr.getDepthSensingMesh();xe!==null&&Il(xe,Y,-1/0,g.sortObjects)}Il(L,Y,0,g.sortObjects),b.finish(),g.sortObjects===!0&&b.sort($,pe),Me=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Me&&Le.addToRenderList(b,L),this.info.render.frame++,ee===!0&&ce.beginShadows();const Z=_.state.shadowsArray;ge.render(Z,L,Y),ee===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=b.opaque,j=b.transmissive;if(_.setupLights(),Y.isArrayCamera){const xe=Y.cameras;if(j.length>0)for(let Ae=0,Ne=xe.length;Ae<Ne;Ae++){const Oe=xe[Ae];Sh(J,j,L,Oe)}Me&&Le.render(L);for(let Ae=0,Ne=xe.length;Ae<Ne;Ae++){const Oe=xe[Ae];Eh(b,L,Oe,Oe.viewport)}}else j.length>0&&Sh(J,j,L,Y),Me&&Le.render(L),Eh(b,L,Y);w!==null&&(v.updateMultisampleRenderTarget(w),v.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(g,L,Y),Ke.resetDefaultState(),I=-1,N=null,M.pop(),M.length>0?(_=M[M.length-1],ee===!0&&ce.setGlobalState(g.clippingPlanes,_.state.camera)):_=null,d.pop(),d.length>0?b=d[d.length-1]:b=null};function Il(L,Y,Z,J){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Pe.intersectsSprite(L)){J&&ie.setFromMatrixPosition(L.matrixWorld).applyMatrix4(H);const Ae=B.update(L),Ne=L.material;Ne.visible&&b.push(L,Ae,Ne,Z,ie.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Pe.intersectsObject(L))){const Ae=B.update(L),Ne=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ie.copy(L.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ie.copy(Ae.boundingSphere.center)),ie.applyMatrix4(L.matrixWorld).applyMatrix4(H)),Array.isArray(Ne)){const Oe=Ae.groups;for(let ze=0,Ve=Oe.length;ze<Ve;ze++){const Fe=Oe[ze],at=Ne[Fe.materialIndex];at&&at.visible&&b.push(L,Ae,at,Z,ie.z,Fe)}}else Ne.visible&&b.push(L,Ae,Ne,Z,ie.z,null)}}const xe=L.children;for(let Ae=0,Ne=xe.length;Ae<Ne;Ae++)Il(xe[Ae],Y,Z,J)}function Eh(L,Y,Z,J){const j=L.opaque,xe=L.transmissive,Ae=L.transparent;_.setupLightsView(Z),ee===!0&&ce.setGlobalState(g.clippingPlanes,Z),J&&q.viewport(E.copy(J)),j.length>0&&Ga(j,Y,Z),xe.length>0&&Ga(xe,Y,Z),Ae.length>0&&Ga(Ae,Y,Z),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Sh(L,Y,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new Or(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Ua:xi,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const xe=_.state.transmissionRenderTarget[J.id],Ae=J.viewport||E;xe.setSize(Ae.z,Ae.w);const Ne=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(U),X=g.getClearAlpha(),X<1&&g.setClearColor(16777215,.5),g.clear(),Me&&Le.render(Z);const Oe=g.toneMapping;g.toneMapping=Xi;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),ee===!0&&ce.setGlobalState(g.clippingPlanes,J),Ga(L,Z,J),v.updateMultisampleRenderTarget(xe),v.updateRenderTargetMipmap(xe),k.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,at=Y.length;Fe<at;Fe++){const pt=Y[Fe],St=pt.object,on=pt.geometry,tt=pt.material,ke=pt.group;if(tt.side===fi&&St.layers.test(J.layers)){const Ut=tt.side;tt.side=an,tt.needsUpdate=!0,Mh(St,Z,J,on,tt,ke),tt.side=Ut,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(v.updateMultisampleRenderTarget(xe),v.updateRenderTargetMipmap(xe))}g.setRenderTarget(Ne),g.setClearColor(U,X),ze!==void 0&&(J.viewport=ze),g.toneMapping=Oe}function Ga(L,Y,Z){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,xe=L.length;j<xe;j++){const Ae=L[j],Ne=Ae.object,Oe=Ae.geometry,ze=J===null?Ae.material:J,Ve=Ae.group;Ne.layers.test(Z.layers)&&Mh(Ne,Y,Z,Oe,ze,Ve)}}function Mh(L,Y,Z,J,j,xe){L.onBeforeRender(g,Y,Z,J,j,xe),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(g,Y,Z,J,L,xe),j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=an,j.needsUpdate=!0,g.renderBufferDirect(Z,Y,J,j,L,xe),j.side=ji,j.needsUpdate=!0,g.renderBufferDirect(Z,Y,J,j,L,xe),j.side=fi):g.renderBufferDirect(Z,Y,J,j,L,xe),L.onAfterRender(g,Y,Z,J,j,xe)}function Wa(L,Y,Z){Y.isScene!==!0&&(Y=fe);const J=oe.get(L),j=_.state.lights,xe=_.state.shadowsArray,Ae=j.state.version,Ne=O.getParameters(L,j.state,xe,Y,Z),Oe=O.getProgramCacheKey(Ne);let ze=J.programs;J.environment=L.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(L.isMeshStandardMaterial?C:m).get(L.envMap||J.environment),J.envMapRotation=J.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,ze===void 0&&(L.addEventListener("dispose",Je),ze=new Map,J.programs=ze);let Ve=ze.get(Oe);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===Ae)return Th(L,Ne),Ve}else Ne.uniforms=O.getUniforms(L),L.onBeforeCompile(Ne,g),Ve=O.acquireProgram(Ne,Oe),ze.set(Oe,Ve),J.uniforms=Ne.uniforms;const Fe=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Fe.clippingPlanes=ce.uniform),Th(L,Ne),J.needsLights=s0(L),J.lightsStateVersion=Ae,J.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function bh(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=Uo.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Th(L,Y){const Z=oe.get(L);Z.outputColorSpace=Y.outputColorSpace,Z.batching=Y.batching,Z.batchingColor=Y.batchingColor,Z.instancing=Y.instancing,Z.instancingColor=Y.instancingColor,Z.instancingMorph=Y.instancingMorph,Z.skinning=Y.skinning,Z.morphTargets=Y.morphTargets,Z.morphNormals=Y.morphNormals,Z.morphColors=Y.morphColors,Z.morphTargetsCount=Y.morphTargetsCount,Z.numClippingPlanes=Y.numClippingPlanes,Z.numIntersection=Y.numClipIntersection,Z.vertexAlphas=Y.vertexAlphas,Z.vertexTangents=Y.vertexTangents,Z.toneMapping=Y.toneMapping}function i0(L,Y,Z,J,j){Y.isScene!==!0&&(Y=fe),v.resetTextureUnits();const xe=Y.fog,Ae=J.isMeshStandardMaterial?Y.environment:null,Ne=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ir,Oe=(J.isMeshStandardMaterial?C:m).get(J.envMap||Ae),ze=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Fe=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,pt=!!Z.morphAttributes.color;let St=Xi;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=g.toneMapping);const on=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,tt=on!==void 0?on.length:0,ke=oe.get(J),Ut=_.state.lights;if(ee===!0&&(ue===!0||L!==N)){const vn=L===N&&J.id===I;ce.setState(J,L,vn)}let nt=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ut.state.version||ke.outputColorSpace!==Ne||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Oe||J.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ce.numPlanes||ke.numIntersection!==ce.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Ve||ke.morphTargets!==Fe||ke.morphNormals!==at||ke.morphColors!==pt||ke.toneMapping!==St||ke.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,ke.__version=J.version);let An=ke.currentProgram;nt===!0&&(An=Wa(J,Y,j));let Hr=!1,ln=!1,Dl=!1;const bt=An.getUniforms(),bi=ke.uniforms;if(q.useProgram(An.program)&&(Hr=!0,ln=!0,Dl=!0),J.id!==I&&(I=J.id,ln=!0),Hr||N!==L){Q.reverseDepthBuffer?(_e.copy(L.projectionMatrix),gS(_e),vS(_e),bt.setValue(y,"projectionMatrix",_e)):bt.setValue(y,"projectionMatrix",L.projectionMatrix),bt.setValue(y,"viewMatrix",L.matrixWorldInverse);const vn=bt.map.cameraPosition;vn!==void 0&&vn.setValue(y,ae.setFromMatrixPosition(L.matrixWorld)),Q.logarithmicDepthBuffer&&bt.setValue(y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&bt.setValue(y,"isOrthographic",L.isOrthographicCamera===!0),N!==L&&(N=L,ln=!0,Dl=!0)}if(j.isSkinnedMesh){bt.setOptional(y,j,"bindMatrix"),bt.setOptional(y,j,"bindMatrixInverse");const vn=j.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),bt.setValue(y,"boneTexture",vn.boneTexture,v))}j.isBatchedMesh&&(bt.setOptional(y,j,"batchingTexture"),bt.setValue(y,"batchingTexture",j._matricesTexture,v),bt.setOptional(y,j,"batchingIdTexture"),bt.setValue(y,"batchingIdTexture",j._indirectTexture,v),bt.setOptional(y,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(y,"batchingColorTexture",j._colorsTexture,v));const Nl=Z.morphAttributes;if((Nl.position!==void 0||Nl.normal!==void 0||Nl.color!==void 0)&&De.update(j,Z,An),(ln||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,bt.setValue(y,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bi.envMap.value=Oe,bi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(bi.envMapIntensity.value=Y.environmentIntensity),ln&&(bt.setValue(y,"toneMappingExposure",g.toneMappingExposure),ke.needsLights&&r0(bi,Dl),xe&&J.fog===!0&&z.refreshFogUniforms(bi,xe),z.refreshMaterialUniforms(bi,J,te,W,_.state.transmissionRenderTarget[L.id]),Uo.upload(y,bh(ke),bi,v)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Uo.upload(y,bh(ke),bi,v),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&bt.setValue(y,"center",j.center),bt.setValue(y,"modelViewMatrix",j.modelViewMatrix),bt.setValue(y,"normalMatrix",j.normalMatrix),bt.setValue(y,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const vn=J.uniformsGroups;for(let Ol=0,a0=vn.length;Ol<a0;Ol++){const Ah=vn[Ol];G.update(Ah,An),G.bind(Ah,An)}}return An}function r0(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function s0(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,Y,Z){oe.get(L.texture).__webglTexture=Y,oe.get(L.depthTexture).__webglTexture=Z;const J=oe.get(L);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const Z=oe.get(L);Z.__webglFramebuffer=Y,Z.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,Z=0){w=L,R=Y,T=Z;let J=!0,j=null,xe=!1,Ae=!1;if(L){const Oe=oe.get(L);if(Oe.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(y.FRAMEBUFFER,null),J=!1;else if(Oe.__webglFramebuffer===void 0)v.setupRenderTarget(L);else if(Oe.__hasExternalTextures)v.rebindTextures(L,oe.get(L.texture).__webglTexture,oe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Fe=L.depthTexture;if(Oe.__boundDepthTexture!==Fe){if(Fe!==null&&oe.has(Fe)&&(L.width!==Fe.image.width||L.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(L)}}const ze=L.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);const Ve=oe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ve[Y])?j=Ve[Y][Z]:j=Ve[Y],xe=!0):L.samples>0&&v.useMultisampledRTT(L)===!1?j=oe.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[Z]:j=Ve,E.copy(L.viewport),A.copy(L.scissor),D=L.scissorTest}else E.copy(me).multiplyScalar(te).floor(),A.copy(de).multiplyScalar(te).floor(),D=we;if(q.bindFramebuffer(y.FRAMEBUFFER,j)&&J&&q.drawBuffers(L,j),q.viewport(E),q.scissor(A),q.setScissorTest(D),xe){const Oe=oe.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,Z)}else if(Ae){const Oe=oe.get(L.texture),ze=Y||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,ze)}I=-1},this.readRenderTargetPixels=function(L,Y,Z,J,j,xe,Ae){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=oe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){q.bindFramebuffer(y.FRAMEBUFFER,Ne);try{const Oe=L.texture,ze=Oe.format,Ve=Oe.type;if(!Q.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-J&&Z>=0&&Z<=L.height-j&&y.readPixels(Y,Z,J,j,Ue.convert(ze),Ue.convert(Ve),xe)}finally{const Oe=w!==null?oe.get(w).__webglFramebuffer:null;q.bindFramebuffer(y.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(L,Y,Z,J,j,xe,Ae){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=oe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){const Oe=L.texture,ze=Oe.format,Ve=Oe.type;if(!Q.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=L.width-J&&Z>=0&&Z<=L.height-j){q.bindFramebuffer(y.FRAMEBUFFER,Ne);const Fe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Fe),y.bufferData(y.PIXEL_PACK_BUFFER,xe.byteLength,y.STREAM_READ),y.readPixels(Y,Z,J,j,Ue.convert(ze),Ue.convert(Ve),0);const at=w!==null?oe.get(w).__webglFramebuffer:null;q.bindFramebuffer(y.FRAMEBUFFER,at);const pt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await _S(y,pt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Fe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,xe),y.deleteBuffer(Fe),y.deleteSync(pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Y=null,Z=0){L.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1]);const J=Math.pow(2,-Z),j=Math.floor(L.image.width*J),xe=Math.floor(L.image.height*J),Ae=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;v.setTexture2D(L,0),y.copyTexSubImage2D(y.TEXTURE_2D,Z,0,0,Ae,Ne,j,xe),q.unbindTexture()},this.copyTextureToTexture=function(L,Y,Z=null,J=null,j=0){L.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,L=arguments[1],Y=arguments[2],j=arguments[3]||0,Z=null);let xe,Ae,Ne,Oe,ze,Ve;Z!==null?(xe=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Ne=Z.min.x,Oe=Z.min.y):(xe=L.image.width,Ae=L.image.height,Ne=0,Oe=0),J!==null?(ze=J.x,Ve=J.y):(ze=0,Ve=0);const Fe=Ue.convert(Y.format),at=Ue.convert(Y.type);v.setTexture2D(Y,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Y.unpackAlignment);const pt=y.getParameter(y.UNPACK_ROW_LENGTH),St=y.getParameter(y.UNPACK_IMAGE_HEIGHT),on=y.getParameter(y.UNPACK_SKIP_PIXELS),tt=y.getParameter(y.UNPACK_SKIP_ROWS),ke=y.getParameter(y.UNPACK_SKIP_IMAGES),Ut=L.isCompressedTexture?L.mipmaps[j]:L.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,Ut.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ut.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(y.UNPACK_SKIP_ROWS,Oe),L.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,j,ze,Ve,xe,Ae,Fe,at,Ut.data):L.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,j,ze,Ve,Ut.width,Ut.height,Fe,Ut.data):y.texSubImage2D(y.TEXTURE_2D,j,ze,Ve,xe,Ae,Fe,at,Ut),y.pixelStorei(y.UNPACK_ROW_LENGTH,pt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,St),y.pixelStorei(y.UNPACK_SKIP_PIXELS,on),y.pixelStorei(y.UNPACK_SKIP_ROWS,tt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ke),j===0&&Y.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,Z=null,J=null,j=0){L.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,L=arguments[2],Y=arguments[3],j=arguments[4]||0);let xe,Ae,Ne,Oe,ze,Ve,Fe,at,pt;const St=L.isCompressedTexture?L.mipmaps[j]:L.image;Z!==null?(xe=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Ne=Z.max.z-Z.min.z,Oe=Z.min.x,ze=Z.min.y,Ve=Z.min.z):(xe=St.width,Ae=St.height,Ne=St.depth,Oe=0,ze=0,Ve=0),J!==null?(Fe=J.x,at=J.y,pt=J.z):(Fe=0,at=0,pt=0);const on=Ue.convert(Y.format),tt=Ue.convert(Y.type);let ke;if(Y.isData3DTexture)v.setTexture3D(Y,0),ke=y.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)v.setTexture2DArray(Y,0),ke=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ut=y.getParameter(y.UNPACK_ROW_LENGTH),nt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),An=y.getParameter(y.UNPACK_SKIP_PIXELS),Hr=y.getParameter(y.UNPACK_SKIP_ROWS),ln=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Oe),y.pixelStorei(y.UNPACK_SKIP_ROWS,ze),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ve),L.isDataTexture||L.isData3DTexture?y.texSubImage3D(ke,j,Fe,at,pt,xe,Ae,Ne,on,tt,St.data):Y.isCompressedArrayTexture?y.compressedTexSubImage3D(ke,j,Fe,at,pt,xe,Ae,Ne,on,St.data):y.texSubImage3D(ke,j,Fe,at,pt,xe,Ae,Ne,on,tt,St),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ut),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,nt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,An),y.pixelStorei(y.UNPACK_SKIP_ROWS,Hr),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ln),j===0&&Y.generateMipmaps&&y.generateMipmap(ke),q.unbindTexture()},this.initRenderTarget=function(L){oe.get(L).__webglFramebuffer===void 0&&v.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?v.setTextureCube(L,0):L.isData3DTexture?v.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?v.setTexture2DArray(L,0):v.setTexture2D(L,0),q.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,q.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$f?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===yl?"display-p3":"srgb"}}class R2 extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class P2 extends ka{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ep={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class L2{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],S=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return S}return null}}}const I2=new L2;class Zf{constructor(e){this.manager=e!==void 0?e:I2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zf.DEFAULT_MATERIAL_NAME="__DEFAULT";class D2 extends Zf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ep.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Aa("img");function l(){u(),Ep.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class N2 extends Zf{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,a=new D2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Jf extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Cc=new Et,Sp=new K,Mp=new K;class Wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sp),Mp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mp),n.updateMatrixWorld(),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bp=new Et,Js=new K,Rc=new K;class O2 extends Wg{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),i.position.copy(Js),Rc.copy(i.position),Rc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Rc),i.updateMatrixWorld(),r.makeTranslation(-Js.x,-Js.y,-Js.z),bp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}}class U2 extends Jf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new O2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F2 extends Wg{constructor(){super(new kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k2 extends Jf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new F2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B2 extends Jf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class z2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Tp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Tp(){return performance.now()}class Ap{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H2 extends zr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);const wp={type:"change"},Qf={type:"start"},Xg={type:"end"},So=new Cg,Cp=new Hi,V2=Math.cos(70*pS.DEG2RAD),wt=new K,en=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pc=1e-6;class G2 extends H2{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Ur,this._lastTargetPosition=new K,this._quat=new Ur().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ap,this._sphericalDelta=new Ap,this._scale=1,this._panOffset=new K,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new K,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X2.bind(this),this._onPointerDown=W2.bind(this),this._onPointerUp=Y2.bind(this),this._onContextMenu=Q2.bind(this),this._onMouseWheel=q2.bind(this),this._onKeyDown=K2.bind(this),this._onTouchStart=Z2.bind(this),this._onTouchMove=J2.bind(this),this._onMouseDown=$2.bind(this),this._onMouseMove=j2.bind(this),this._interceptControlDown=ew.bind(this),this._interceptControlUp=tw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;wt.copy(n).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<V2?this.object.lookAt(this.target):(Cp.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(Cp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pc||this._lastTargetPosition.distanceToSquared(this.target)>Pc?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wt.setFromMatrixColumn(n,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,n){this.screenSpacePanning===!0?wt.setFromMatrixColumn(n,1):(wt.setFromMatrixColumn(n,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function W2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function X2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Y2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xg),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function $2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case gs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case gs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Qf)}function j2(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function q2(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(Qf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Xg))}function K2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function Z2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Qf)}function J2(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function Q2(t){this.enabled!==!1&&t.preventDefault()}function ew(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tw(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class nw extends Yn{constructor(e,n,i=!1,r=!1,s=1e4){const a=new rr;super(a,n),this.isMarchingCubes=!0;const o=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=s*3;this.positionArray=new Float32Array(g*3);const x=new sn(this.positionArray,3);x.setUsage(Qa),a.setAttribute("position",x),this.normalArray=new Float32Array(g*3);const R=new sn(this.normalArray,3);if(R.setUsage(Qa),a.setAttribute("normal",R),this.enableUvs){this.uvArray=new Float32Array(g*2);const T=new sn(this.uvArray,2);T.setUsage(Qa),a.setAttribute("uv",T)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const T=new sn(this.colorArray,3);T.setUsage(Qa),a.setAttribute("color",T)}a.boundingSphere=new El(new K,1)};function f(M,g,x){return M+(g-M)*x}function h(M,g,x,R,T,w,I,N,E,A){const D=(x-I)/(N-I),U=o.normal_cache;l[g+0]=R+D*o.delta,l[g+1]=T,l[g+2]=w,c[g+0]=f(U[M+0],U[M+3],D),c[g+1]=f(U[M+1],U[M+4],D),c[g+2]=f(U[M+2],U[M+5],D),u[g+0]=f(o.palette[E*3+0],o.palette[A*3+0],D),u[g+1]=f(o.palette[E*3+1],o.palette[A*3+1],D),u[g+2]=f(o.palette[E*3+2],o.palette[A*3+2],D)}function p(M,g,x,R,T,w,I,N,E,A){const D=(x-I)/(N-I),U=o.normal_cache;l[g+0]=R,l[g+1]=T+D*o.delta,l[g+2]=w;const X=M+o.yd*3;c[g+0]=f(U[M+0],U[X+0],D),c[g+1]=f(U[M+1],U[X+1],D),c[g+2]=f(U[M+2],U[X+2],D),u[g+0]=f(o.palette[E*3+0],o.palette[A*3+0],D),u[g+1]=f(o.palette[E*3+1],o.palette[A*3+1],D),u[g+2]=f(o.palette[E*3+2],o.palette[A*3+2],D)}function S(M,g,x,R,T,w,I,N,E,A){const D=(x-I)/(N-I),U=o.normal_cache;l[g+0]=R,l[g+1]=T,l[g+2]=w+D*o.delta;const X=M+o.zd*3;c[g+0]=f(U[M+0],U[X+0],D),c[g+1]=f(U[M+1],U[X+1],D),c[g+2]=f(U[M+2],U[X+2],D),u[g+0]=f(o.palette[E*3+0],o.palette[A*3+0],D),u[g+1]=f(o.palette[E*3+1],o.palette[A*3+1],D),u[g+2]=f(o.palette[E*3+2],o.palette[A*3+2],D)}function b(M){const g=M*3;o.normal_cache[g]===0&&(o.normal_cache[g+0]=o.field[M-1]-o.field[M+1],o.normal_cache[g+1]=o.field[M-o.yd]-o.field[M+o.yd],o.normal_cache[g+2]=o.field[M-o.zd]-o.field[M+o.zd])}function _(M,g,x,R,T){const w=R+1,I=R+o.yd,N=R+o.zd,E=w+o.yd,A=w+o.zd,D=R+o.yd+o.zd,U=w+o.yd+o.zd;let X=0;const ne=o.field[R],W=o.field[w],te=o.field[I],$=o.field[E],pe=o.field[N],me=o.field[A],de=o.field[D],we=o.field[U];ne<T&&(X|=1),W<T&&(X|=2),te<T&&(X|=8),$<T&&(X|=4),pe<T&&(X|=16),me<T&&(X|=32),de<T&&(X|=128),we<T&&(X|=64);const Pe=iw[X];if(Pe===0)return 0;const ee=o.delta,ue=M+ee,_e=g+ee,H=x+ee;Pe&1&&(b(R),b(w),h(R*3,0,T,M,g,x,ne,W,R,w)),Pe&2&&(b(w),b(E),p(w*3,3,T,ue,g,x,W,$,w,E)),Pe&4&&(b(I),b(E),h(I*3,6,T,M,_e,x,te,$,I,E)),Pe&8&&(b(R),b(I),p(R*3,9,T,M,g,x,ne,te,R,I)),Pe&16&&(b(N),b(A),h(N*3,12,T,M,g,H,pe,me,N,A)),Pe&32&&(b(A),b(U),p(A*3,15,T,ue,g,H,me,we,A,U)),Pe&64&&(b(D),b(U),h(D*3,18,T,M,_e,H,de,we,D,U)),Pe&128&&(b(N),b(D),p(N*3,21,T,M,g,H,pe,de,N,D)),Pe&256&&(b(R),b(N),S(R*3,24,T,M,g,x,ne,pe,R,N)),Pe&512&&(b(w),b(A),S(w*3,27,T,ue,g,x,W,me,w,A)),Pe&1024&&(b(E),b(U),S(E*3,30,T,ue,_e,x,$,we,E,U)),Pe&2048&&(b(I),b(D),S(I*3,33,T,M,_e,x,te,de,I,D)),X<<=4;let ae,ie,fe,Me=0,ye=0;for(;Mo[X+ye]!=-1;)ae=X+ye,ie=ae+1,fe=ae+2,d(l,c,u,3*Mo[ae],3*Mo[ie],3*Mo[fe]),ye+=3,Me++;return Me}function d(M,g,x,R,T,w){const I=o.count*3;if(o.positionArray[I+0]=M[R],o.positionArray[I+1]=M[R+1],o.positionArray[I+2]=M[R+2],o.positionArray[I+3]=M[T],o.positionArray[I+4]=M[T+1],o.positionArray[I+5]=M[T+2],o.positionArray[I+6]=M[w],o.positionArray[I+7]=M[w+1],o.positionArray[I+8]=M[w+2],o.material.flatShading===!0){const N=(g[R+0]+g[T+0]+g[w+0])/3,E=(g[R+1]+g[T+1]+g[w+1])/3,A=(g[R+2]+g[T+2]+g[w+2])/3;o.normalArray[I+0]=N,o.normalArray[I+1]=E,o.normalArray[I+2]=A,o.normalArray[I+3]=N,o.normalArray[I+4]=E,o.normalArray[I+5]=A,o.normalArray[I+6]=N,o.normalArray[I+7]=E,o.normalArray[I+8]=A}else o.normalArray[I+0]=g[R+0],o.normalArray[I+1]=g[R+1],o.normalArray[I+2]=g[R+2],o.normalArray[I+3]=g[T+0],o.normalArray[I+4]=g[T+1],o.normalArray[I+5]=g[T+2],o.normalArray[I+6]=g[w+0],o.normalArray[I+7]=g[w+1],o.normalArray[I+8]=g[w+2];if(o.enableUvs){const N=o.count*2;o.uvArray[N+0]=M[R+0],o.uvArray[N+1]=M[R+2],o.uvArray[N+2]=M[T+0],o.uvArray[N+3]=M[T+2],o.uvArray[N+4]=M[w+0],o.uvArray[N+5]=M[w+2]}o.enableColors&&(o.colorArray[I+0]=x[R+0],o.colorArray[I+1]=x[R+1],o.colorArray[I+2]=x[R+2],o.colorArray[I+3]=x[T+0],o.colorArray[I+4]=x[T+1],o.colorArray[I+5]=x[T+2],o.colorArray[I+6]=x[w+0],o.colorArray[I+7]=x[w+1],o.colorArray[I+8]=x[w+2]),o.count+=3}this.addBall=function(M,g,x,R,T,w){const I=Math.sign(R);R=Math.abs(R);const N=w!=null;let E=new Ze(M,g,x);if(N)try{E=w instanceof Ze?w:Array.isArray(w)?new Ze(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Ze(w)}catch{E=new Ze(M,g,x)}const A=this.size*Math.sqrt(R/T),D=x*this.size,U=g*this.size,X=M*this.size;let ne=Math.floor(D-A);ne<1&&(ne=1);let W=Math.floor(D+A);W>this.size-1&&(W=this.size-1);let te=Math.floor(U-A);te<1&&(te=1);let $=Math.floor(U+A);$>this.size-1&&($=this.size-1);let pe=Math.floor(X-A);pe<1&&(pe=1);let me=Math.floor(X+A);me>this.size-1&&(me=this.size-1);let de,we,Pe,ee,ue,_e,H,ae,ie,fe,Me;for(Pe=ne;Pe<W;Pe++)for(ue=this.size2*Pe,ae=Pe/this.size-x,ie=ae*ae,we=te;we<$;we++)for(ee=ue+this.size*we,H=we/this.size-g,fe=H*H,de=pe;de<me;de++)if(_e=de/this.size-M,Me=R/(1e-6+_e*_e+fe+ie)-T,Me>0){this.field[ee+de]+=Me*I;const ye=Math.sqrt((de-X)*(de-X)+(we-U)*(we-U)+(Pe-D)*(Pe-D))/A,y=1-ye*ye*ye*(ye*(ye*6-15)+10);this.palette[(ee+de)*3+0]+=E.r*y,this.palette[(ee+de)*3+1]+=E.g*y,this.palette[(ee+de)*3+2]+=E.b*y}},this.addPlaneX=function(M,g){const x=this.size,R=this.yd,T=this.zd,w=this.field;let I,N,E,A,D,U,X,ne=x*Math.sqrt(M/g);for(ne>x&&(ne=x),I=0;I<ne;I++)if(U=I/x,A=U*U,D=M/(1e-4+A)-g,D>0)for(N=0;N<x;N++)for(X=I+N*R,E=0;E<x;E++)w[T*E+X]+=D},this.addPlaneY=function(M,g){const x=this.size,R=this.yd,T=this.zd,w=this.field;let I,N,E,A,D,U,X,ne,W=x*Math.sqrt(M/g);for(W>x&&(W=x),N=0;N<W;N++)if(U=N/x,A=U*U,D=M/(1e-4+A)-g,D>0)for(X=N*R,I=0;I<x;I++)for(ne=X+I,E=0;E<x;E++)w[T*E+ne]+=D},this.addPlaneZ=function(M,g){const x=this.size,R=this.yd,T=this.zd,w=this.field;let I,N,E,A,D,U,X,ne,W=x*Math.sqrt(M/g);for(W>x&&(W=x),E=0;E<W;E++)if(U=E/x,A=U*U,D=M/(1e-4+A)-g,D>0)for(X=T*E,N=0;N<x;N++)for(ne=X+N*R,I=0;I<x;I++)w[ne+I]+=D},this.setCell=function(M,g,x,R){const T=this.size2*x+this.size*g+M;this.field[T]=R},this.getCell=function(M,g,x){const R=this.size2*x+this.size*g+M;return this.field[R]},this.blur=function(M=1){const g=this.field,x=g.slice(),R=this.size,T=this.size2;for(let w=0;w<R;w++)for(let I=0;I<R;I++)for(let N=0;N<R;N++){const E=T*N+R*I+w;let A=x[E],D=1;for(let U=-1;U<=1;U+=2){const X=U+w;if(!(X<0||X>=R))for(let ne=-1;ne<=1;ne+=2){const W=ne+I;if(!(W<0||W>=R))for(let te=-1;te<=1;te+=2){const $=te+N;if($<0||$>=R)continue;const pe=T*$+R*W+X,me=x[pe];D++,A+=M*(me-A)/D}}}g[E]=A}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;const M=this.size-2;for(let g=1;g<M;g++){const x=this.size2*g,R=(g-this.halfsize)/this.halfsize;for(let T=1;T<M;T++){const w=x+this.size*T,I=(T-this.halfsize)/this.halfsize;for(let N=1;N<M;N++){const E=(N-this.halfsize)/this.halfsize,A=w+N;_(E,I,R,A,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const iw=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Mo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),rw="/assets/background-cbc05baa.webp",sw={name:"MetaBall",data(){return{resolution:30,effectController:{material:"plastic",speed:.1,numBlobs:3,resolution:30,isolation:4},time:0,clock:new z2}},mounted(){this.init(),this.animate(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},methods:{init(){this.container=this.$refs.container,this.camera=new dn(50,window.innerWidth/window.innerHeight,1,500),this.camera.position.set(-100,300,450),this.scene=new R2;const e=new N2().load(rw);this.scene.background=e,this.setupLights(),this.materials=this.generateMaterials(),this.effect=new nw(this.resolution,this.materials[this.effectController.material],!0,!0,1e5),this.effect.position.set(0,0,0),this.effect.scale.set(300,300,300),this.scene.add(this.effect),this.renderer=new C2({antialias:!1}),this.renderer.setPixelRatio(window.devicePixelRatio*.5),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.controls=new G2(this.camera,this.renderer.domElement),this.controls.minDistance=100,this.controls.maxDistance=500},animate(){requestAnimationFrame(this.animate),this.renderScene()},renderScene(){const t=this.clock.getDelta();this.time+=t*this.effectController.speed*.5,(this.effectController.resolution!==this.resolution||this.effectController.isolation!==this.effect.isolation)&&(this.resolution=this.effectController.resolution,this.effect.init(Math.floor(this.resolution)),this.effect.isolation=this.effectController.isolation),this.updateCubes(),this.renderer.render(this.scene,this.camera)},onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},generateMaterials(){return{plastic:new P2({specular:16776960,shininess:10,color:16753920,emissive:16753920,emissiveIntensity:.75})}},setupLights(){this.ambientLight=new B2(16777215,1),this.scene.add(this.ambientLight),this.light=new k2(16777215,.5),this.light.position.set(.5,1,.5),this.scene.add(this.light),this.pointLight=new U2(16777215,10,1,1),this.pointLight.position.set(0,0,50),this.scene.add(this.pointLight)},updateCubes(){this.effect.reset();const t=this.effectController.numBlobs,e=10,n=.6/((Math.sqrt(t)-1)/4+1);for(let i=0;i<t;i++){const r=this.time,s=Math.sin(i+1.26*r*(1.03+.5*Math.cos(.21*i)))*.27+.5,a=Math.abs(Math.cos(i+1.12*r*Math.cos(1.22+.1424*i)))*.77,o=Math.cos(i+1.32*r*.1*Math.sin(.92+.53*i))*.27+.5;this.effect.addBall(s,a,o,n,e)}this.effect.update()}}},aw={id:"main"},ow={id:"container",ref:"container"};function lw(t,e,n,i,r,s){return Ss(),Da("div",aw,[Ct("div",ow,null,512)])}const cw=Oa(sw,[["render",lw]]),Rp=()=>{};let eh={},Yg={},$g=null,jg={mark:Rp,measure:Rp};try{typeof window<"u"&&(eh=window),typeof document<"u"&&(Yg=document),typeof MutationObserver<"u"&&($g=MutationObserver),typeof performance<"u"&&(jg=performance)}catch{}const{userAgent:Pp=""}=eh.navigator||{},Ki=eh,_t=Yg,Lp=$g,bo=jg;Ki.document;const Mi=!!_t.documentElement&&!!_t.head&&typeof _t.addEventListener=="function"&&typeof _t.createElement=="function",qg=~Pp.indexOf("MSIE")||~Pp.indexOf("Trident/");var xt="classic",Kg="duotone",mn="sharp",_n="sharp-duotone",uw=[xt,Kg,mn,_n],fw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ip={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hw=["kit"],dw=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,pw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,mw={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_w={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},gw={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},vw={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},xw={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},yw={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Zg={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ew=["solid","regular","light","thin","duotone","brands"],Jg=[1,2,3,4,5,6,7,8,9,10],Sw=Jg.concat([11,12,13,14,15,16,17,18,19,20]),na={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mw=[...Object.keys(vw),...Ew,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",na.GROUP,na.SWAP_OPACITY,na.PRIMARY,na.SECONDARY].concat(Jg.map(t=>"".concat(t,"x"))).concat(Sw.map(t=>"w-".concat(t))),bw={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Tw={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Aw={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Dp={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const yi="___FONT_AWESOME___",Vu=16,Qg="fa",e1="svg-inline--fa",Fr="data-fa-i2svg",Gu="data-fa-pseudo-element",ww="data-fa-pseudo-element-pending",th="data-prefix",nh="data-icon",Np="fontawesome-i2svg",Cw="async",Rw=["HTML","HEAD","STYLE","SCRIPT"],t1=(()=>{try{return!0}catch{return!1}})(),n1=[xt,mn,_n];function za(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[xt]}})}const i1={...Zg};i1[xt]={...Zg[xt],...Ip.kit,...Ip["kit-duotone"]};const Lr=za(i1),Wu={...yw};Wu[xt]={...Wu[xt],...Dp.kit,...Dp["kit-duotone"]};const wa=za(Wu),Xu={...xw};Xu[xt]={...Xu[xt],...Aw.kit};const Ir=za(Xu),Yu={...gw};Yu[xt]={...Yu[xt],...Tw.kit};const Pw=za(Yu),Lw=dw,r1="fa-layers-text",Iw=pw,Dw={...fw};za(Dw);const Nw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lc=na,Is=new Set;Object.keys(wa[xt]).map(Is.add.bind(Is));Object.keys(wa[mn]).map(Is.add.bind(Is));Object.keys(wa[_n]).map(Is.add.bind(Is));const Ow=[...hw,...Mw],da=Ki.FontAwesomeConfig||{};function Uw(t){var e=_t.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}_t&&typeof _t.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=Fw(Uw(n));r!=null&&(da[i]=r)});const s1={styleDefault:"solid",familyDefault:"classic",cssPrefix:Qg,replacementClass:e1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};da.familyPrefix&&(da.cssPrefix=da.familyPrefix);const Ds={...s1,...da};Ds.autoReplaceSvg||(Ds.observeMutations=!1);const Ie={};Object.keys(s1).forEach(t=>{Object.defineProperty(Ie,t,{enumerable:!0,set:function(e){Ds[t]=e,pa.forEach(n=>n(Ie))},get:function(){return Ds[t]}})});Object.defineProperty(Ie,"familyPrefix",{enumerable:!0,set:function(t){Ds.cssPrefix=t,pa.forEach(e=>e(Ie))},get:function(){return Ds.cssPrefix}});Ki.FontAwesomeConfig=Ie;const pa=[];function kw(t){return pa.push(t),()=>{pa.splice(pa.indexOf(t),1)}}const Oi=Vu,$n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bw(t){if(!t||!Mi)return;const e=_t.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=_t.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return _t.head.insertBefore(e,i),t}const zw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ca(){let t=12,e="";for(;t-- >0;)e+=zw[Math.random()*62|0];return e}function Hs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ih(t){return t.classList?Hs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function a1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hw(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(a1(t[n]),'" '),"").trim()}function bl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function rh(t){return t.size!==$n.size||t.x!==$n.x||t.y!==$n.y||t.rotate!==$n.rotate||t.flipX||t.flipY}function Vw(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Gw(t){let{transform:e,width:n=Vu,height:i=Vu,startCentered:r=!1}=t,s="";return r&&qg?s+="translate(".concat(e.x/Oi-n/2,"em, ").concat(e.y/Oi-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Oi,"em), calc(-50% + ").concat(e.y/Oi,"em)) "):s+="translate(".concat(e.x/Oi,"em, ").concat(e.y/Oi,"em) "),s+="scale(".concat(e.size/Oi*(e.flipX?-1:1),", ").concat(e.size/Oi*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Ww=`:root, :host {
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
}`;function o1(){const t=Qg,e=e1,n=Ie.cssPrefix,i=Ie.replacementClass;let r=Ww;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return r}let Op=!1;function Ic(){Ie.autoAddCss&&!Op&&(Bw(o1()),Op=!0)}var Xw={mixout(){return{dom:{css:o1,insertCss:Ic}}},hooks(){return{beforeDOMElementCreation(){Ic()},beforeI2svg(){Ic()}}}};const Ei=Ki||{};Ei[yi]||(Ei[yi]={});Ei[yi].styles||(Ei[yi].styles={});Ei[yi].hooks||(Ei[yi].hooks={});Ei[yi].shims||(Ei[yi].shims=[]);var jn=Ei[yi];const l1=[],c1=function(){_t.removeEventListener("DOMContentLoaded",c1),qo=1,l1.map(t=>t())};let qo=!1;Mi&&(qo=(_t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_t.readyState),qo||_t.addEventListener("DOMContentLoaded",c1));function Yw(t){Mi&&(qo?setTimeout(t,0):l1.push(t))}function Ha(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?a1(t):"<".concat(e," ").concat(Hw(n),">").concat(i.map(Ha).join(""),"</").concat(e,">")}function Up(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $w=function(e,n){return function(i,r,s,a){return e.call(n,i,r,s,a)}},Dc=function(e,n,i,r){var s=Object.keys(e),a=s.length,o=r!==void 0?$w(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function jw(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function $u(t){const e=jw(t);return e.length===1?e[0].toString(16):null}function qw(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Fp(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function ju(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Fp(e);typeof jn.hooks.addPack=="function"&&!i?jn.hooks.addPack(t,Fp(e)):jn.styles[t]={...jn.styles[t]||{},...r},t==="fas"&&ju("fa",e)}const{styles:Ar,shims:Kw}=jn,Zw={[xt]:Object.values(Ir[xt]),[mn]:Object.values(Ir[mn]),[_n]:Object.values(Ir[_n])};let sh=null,u1={},f1={},h1={},d1={},p1={};const Jw={[xt]:Object.keys(Lr[xt]),[mn]:Object.keys(Lr[mn]),[_n]:Object.keys(Lr[_n])};function Qw(t){return~Ow.indexOf(t)}function eC(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Qw(r)?r:null}const m1=()=>{const t=i=>Dc(Ar,(r,s,a)=>(r[a]=Dc(s,i,{}),r),{});u1=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),f1=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),p1=t((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in Ar||Ie.autoFetchSvg,n=Dc(Kw,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});h1=n.names,d1=n.unicodes,sh=Tl(Ie.styleDefault,{family:Ie.familyDefault})};kw(t=>{sh=Tl(t.styleDefault,{family:Ie.familyDefault})});m1();function ah(t,e){return(u1[t]||{})[e]}function tC(t,e){return(f1[t]||{})[e]}function Gi(t,e){return(p1[t]||{})[e]}function _1(t){return h1[t]||{prefix:null,iconName:null}}function nC(t){const e=d1[t],n=ah("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zi(){return sh}const oh=()=>({prefix:null,iconName:null,rest:[]});function Tl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=xt}=e,i=Lr[n][t],r=wa[n][t]||wa[n][i],s=t in jn.styles?t:null;return r||s||null}const iC={[xt]:Object.keys(Ir[xt]),[mn]:Object.keys(Ir[mn]),[_n]:Object.keys(Ir[_n])};function Al(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[xt]:"".concat(Ie.cssPrefix,"-").concat(xt),[mn]:"".concat(Ie.cssPrefix,"-").concat(mn),[_n]:"".concat(Ie.cssPrefix,"-").concat(_n)};let r=null,s=xt;const a=uw.filter(l=>l!==Kg);a.forEach(l=>{(t.includes(i[l])||t.some(c=>iC[l].includes(c)))&&(s=l)});const o=t.reduce((l,c)=>{const u=eC(Ie.cssPrefix,c);if(Ar[c]?(c=Zw[s].includes(c)?Pw[s][c]:c,r=c,l.prefix=c):Jw[s].indexOf(c)>-1?(r=c,l.prefix=Tl(c,{family:s})):u?l.iconName=u:c!==Ie.replacementClass&&!a.some(f=>c===i[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=r==="fa"?_1(l.iconName):{},h=Gi(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||h||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Ar.far&&Ar.fas&&!Ie.autoFetchSvg&&(l.prefix="fas")}return l},oh());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===mn&&(Ar.fass||Ie.autoFetchSvg)&&(o.prefix="fass",o.iconName=Gi(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===_n&&(Ar.fasds||Ie.autoFetchSvg)&&(o.prefix="fasds",o.iconName=Gi(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=Zi()||"fas"),o}class rC{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},ju(s,r[s]);const a=Ir[xt][s];a&&ju(a,r[s]),m1()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let kp=[],cs={};const Es={},sC=Object.keys(Es);function aC(t,e){let{mixoutsTo:n}=e;return kp=t,cs={},Object.keys(Es).forEach(i=>{sC.indexOf(i)===-1&&delete Es[i]}),kp.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{n[s]||(n[s]={}),n[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{cs[a]||(cs[a]=[]),cs[a].push(s[a])})}i.provides&&i.provides(Es)}),n}function qu(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(cs[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function kr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(cs[t]||[]).forEach(s=>{s.apply(null,n)})}function Ji(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Es[t]?Es[t].apply(null,e):void 0}function Ku(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Zi();if(e)return e=Gi(n,e)||e,Up(g1.definitions,n,e)||Up(jn.styles,n,e)}const g1=new rC,oC=()=>{Ie.autoReplaceSvg=!1,Ie.observeMutations=!1,kr("noAuto")},lC={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Mi?(kr("beforeI2svg",t),Ji("pseudoElements2svg",t),Ji("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Ie.autoReplaceSvg===!1&&(Ie.autoReplaceSvg=!0),Ie.observeMutations=!0,Yw(()=>{uC({autoReplaceSvgRoot:e}),kr("watch",t)})}},cC={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Tl(t[0]);return{prefix:n,iconName:Gi(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Ie.cssPrefix,"-"))>-1||t.match(Lw))){const e=Al(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Zi(),iconName:Gi(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Zi();return{prefix:e,iconName:Gi(e,t)||t}}}},gn={noAuto:oC,config:Ie,dom:lC,parse:cC,library:g1,findIconDefinition:Ku,toHtml:Ha},uC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=_t}=t;(Object.keys(jn.styles).length>0||Ie.autoFetchSvg)&&Mi&&Ie.autoReplaceSvg&&gn.dom.i2svg({node:e})};function wl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ha(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Mi)return;const n=_t.createElement("div");return n.innerHTML=t.html,n.children}}),t}function fC(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:a}=t;if(rh(a)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};r.style=bl({...s,"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function hC(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const a=s===!0?"".concat(e,"-").concat(Ie.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:a},children:i}]}]}function lh(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:h,height:p}=n.found?n:e,S=i==="fak",b=[Ie.replacementClass,r?"".concat(Ie.cssPrefix,"-").concat(r):""].filter(R=>u.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(u.classes).join(" ");let _={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(p)}};const d=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/p*16*.0625,"em")}:{};f&&(_.attributes[Fr]=""),o&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Ca())},children:[o]}),delete _.attributes.title);const M={..._,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:a,styles:{...d,...u.styles}},{children:g,attributes:x}=n.found&&e.found?Ji("generateAbstractMask",M)||{children:[],attributes:{}}:Ji("generateAbstractIcon",M)||{children:[],attributes:{}};return M.children=g,M.attributes=x,a?hC(M):fC(M)}function Bp(t){const{content:e,width:n,height:i,transform:r,title:s,extra:a,watchable:o=!1}=t,l={...a.attributes,...s?{title:s}:{},class:a.classes.join(" ")};o&&(l[Fr]="");const c={...a.styles};rh(r)&&(c.transform=Gw({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=bl(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function dC(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=bl(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Nc}=jn;function Zu(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(Ie.cssPrefix,"-").concat(Lc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ie.cssPrefix,"-").concat(Lc.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Ie.cssPrefix,"-").concat(Lc.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const pC={found:!1,width:512,height:512};function mC(t,e){!t1&&!Ie.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ju(t,e){let n=e;return e==="fa"&&Ie.styleDefault!==null&&(e=Zi()),new Promise((i,r)=>{if(n==="fa"){const s=_1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Nc[e]&&Nc[e][t]){const s=Nc[e][t];return i(Zu(s))}mC(t,e),i({...pC,icon:Ie.showMissingIcons&&t?Ji("missingIconAbstract")||{}:{}})})}const zp=()=>{},Qu=Ie.measurePerformance&&bo&&bo.mark&&bo.measure?bo:{mark:zp,measure:zp},ia='FA "6.6.0"',_C=t=>(Qu.mark("".concat(ia," ").concat(t," begins")),()=>v1(t)),v1=t=>{Qu.mark("".concat(ia," ").concat(t," ends")),Qu.measure("".concat(ia," ").concat(t),"".concat(ia," ").concat(t," begins"),"".concat(ia," ").concat(t," ends"))};var ch={begin:_C,end:v1};const Fo=()=>{};function Hp(t){return typeof(t.getAttribute?t.getAttribute(Fr):null)=="string"}function gC(t){const e=t.getAttribute?t.getAttribute(th):null,n=t.getAttribute?t.getAttribute(nh):null;return e&&n}function vC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Ie.replacementClass)}function xC(){return Ie.autoReplaceSvg===!0?ko.replace:ko[Ie.autoReplaceSvg]||ko.replace}function yC(t){return _t.createElementNS("http://www.w3.org/2000/svg",t)}function EC(t){return _t.createElement(t)}function x1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?yC:EC}=e;if(typeof t=="string")return _t.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(x1(s,{ceFn:n}))}),i}function SC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ko={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(x1(n),e)}),e.getAttribute(Fr)===null&&Ie.keepOriginalSource){let n=_t.createComment(SC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ih(e).indexOf(Ie.replacementClass))return ko.replace(t);const i=new RegExp("".concat(Ie.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((a,o)=>(o===Ie.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Ha(s)).join(`
`);e.setAttribute(Fr,""),e.innerHTML=r}};function Vp(t){t()}function y1(t,e){const n=typeof e=="function"?e:Fo;if(t.length===0)n();else{let i=Vp;Ie.mutateApproach===Cw&&(i=Ki.requestAnimationFrame||Vp),i(()=>{const r=xC(),s=ch.begin("mutate");t.map(r),s(),n()})}}let uh=!1;function E1(){uh=!0}function ef(){uh=!1}let Ko=null;function Gp(t){if(!Lp||!Ie.observeMutations)return;const{treeCallback:e=Fo,nodeCallback:n=Fo,pseudoElementsCallback:i=Fo,observeMutationsRoot:r=_t}=t;Ko=new Lp(s=>{if(uh)return;const a=Zi();Hs(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Hp(o.addedNodes[0])&&(Ie.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&Ie.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&Hp(o.target)&&~Nw.indexOf(o.attributeName))if(o.attributeName==="class"&&gC(o.target)){const{prefix:l,iconName:c}=Al(ih(o.target));o.target.setAttribute(th,l||a),c&&o.target.setAttribute(nh,c)}else vC(o.target)&&n(o.target)})}),Mi&&Ko.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function MC(){Ko&&Ko.disconnect()}function bC(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function TC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=Al(ih(t));return r.prefix||(r.prefix=Zi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=tC(r.prefix,t.innerText)||ah(r.prefix,$u(t.innerText))),!r.iconName&&Ie.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function AC(t){const e=Hs(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Ie.autoA11y&&(n?e["aria-labelledby"]="".concat(Ie.replacementClass,"-title-").concat(i||Ca()):(e["aria-hidden"]="true",e.focusable="false")),e}function wC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=TC(t),s=AC(t),a=qu("parseNodeAttributes",{},t);let o=e.styleParser?bC(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:$n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...a}}const{styles:CC}=jn;function S1(t){const e=Ie.autoReplaceSvg==="nest"?Wp(t,{styleParser:!1}):Wp(t);return~e.extra.classes.indexOf(r1)?Ji("generateLayersText",t,e):Ji("generateSvgReplacementMutation",t,e)}let Zn=new Set;n1.map(t=>{Zn.add("fa-".concat(t))});Object.keys(Lr[xt]).map(Zn.add.bind(Zn));Object.keys(Lr[mn]).map(Zn.add.bind(Zn));Object.keys(Lr[_n]).map(Zn.add.bind(Zn));Zn=[...Zn];function Xp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Mi)return Promise.resolve();const n=_t.documentElement.classList,i=u=>n.add("".concat(Np,"-").concat(u)),r=u=>n.remove("".concat(Np,"-").concat(u)),s=Ie.autoFetchSvg?Zn:n1.map(u=>"fa-".concat(u)).concat(Object.keys(CC));s.includes("fa")||s.push("fa");const a=[".".concat(r1,":not([").concat(Fr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(Fr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=Hs(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=ch.begin("onTree"),c=o.reduce((u,f)=>{try{const h=S1(f);h&&u.push(h)}catch(h){t1||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(h=>{y1(h,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(h=>{l(),f(h)})})}function RC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;S1(t).then(n=>{n&&y1([n],e)})}function PC(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Ku(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ku(r||{})),t(i,{...n,mask:r})}}const LC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$n,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:h,icon:p}=t;return wl({type:"icon",...t},()=>(kr("beforeDOMElementCreation",{iconDefinition:t,params:e}),Ie.autoA11y&&(a?c["aria-labelledby"]="".concat(Ie.replacementClass,"-title-").concat(o||Ca()):(c["aria-hidden"]="true",c.focusable="false")),lh({icons:{main:Zu(p),mask:r?Zu(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:h,transform:{...$n,...n},symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var IC={mixout(){return{icon:PC(LC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Xp,t.nodeCallback=RC,t}}},provides(t){t.i2svg=function(e){const{node:n=_t,callback:i=()=>{}}=e;return Xp(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((h,p)=>{Promise.all([Ju(i,a),c.iconName?Ju(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[b,_]=S;h([e,lh({icons:{main:b,mask:_},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:a}=e;const o=bl(a);o.length>0&&(i.style=o);let l;return rh(s)&&(l=Ji("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},DC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return wl({type:"layer"},()=>{kr("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Ie.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},NC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return wl({type:"counter",content:t},()=>(kr("beforeDOMElementCreation",{content:t,params:e}),dC({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(Ie.cssPrefix,"-layers-counter"),...i]}})))}}}},OC={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$n,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return wl({type:"text",content:t},()=>(kr("beforeDOMElementCreation",{content:t,params:e}),Bp({content:t,transform:{...$n,...n},title:i,extra:{attributes:s,styles:a,classes:["".concat(Ie.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let a=null,o=null;if(qg){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return Ie.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Bp({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const UC=new RegExp('"',"ug"),Yp=[1105920,1112319],$p={FontAwesome:{normal:"fas",400:"fas"},..._w,...mw,...bw},tf=Object.keys($p).reduce((t,e)=>(t[e.toLowerCase()]=$p[e],t),{}),FC=Object.keys(tf).reduce((t,e)=>{const n=tf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function kC(t){const e=t.replace(UC,""),n=qw(e,0),i=n>=Yp[0]&&n<=Yp[1],r=e.length===2?e[0]===e[1]:!1;return{value:$u(r?e[0]:e),isSecondary:i||r}}function BC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(tf[n]||{})[r]||FC[n]}function jp(t,e){const n="".concat(ww).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const a=Hs(t.children).filter(h=>h.getAttribute(Gu)===e)[0],o=Ki.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(Iw),u=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&f!=="none"&&f!==""){const h=o.getPropertyValue("content");let p=BC(l,u);const{value:S,isSecondary:b}=kC(h),_=c[0].startsWith("FontAwesome");let d=ah(p,S),M=d;if(_){const g=nC(S);g.iconName&&g.prefix&&(d=g.iconName,p=g.prefix)}if(d&&!b&&(!a||a.getAttribute(th)!==p||a.getAttribute(nh)!==M)){t.setAttribute(n,M),a&&t.removeChild(a);const g=wC(),{extra:x}=g;x.attributes[Gu]=e,Ju(d,p).then(R=>{const T=lh({...g,icons:{main:R,mask:oh()},prefix:p,iconName:M,extra:x,watchable:!0}),w=_t.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=T.map(I=>Ha(I)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function zC(t){return Promise.all([jp(t,"::before"),jp(t,"::after")])}function HC(t){return t.parentNode!==document.head&&!~Rw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qp(t){if(Mi)return new Promise((e,n)=>{const i=Hs(t.querySelectorAll("*")).filter(HC).map(zC),r=ch.begin("searchPseudoElements");E1(),Promise.all(i).then(()=>{r(),ef(),e()}).catch(()=>{r(),ef(),n()})})}var VC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=qp,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=_t}=e;Ie.searchPseudoElements&&qp(n)}}};let Kp=!1;var GC={mixout(){return{dom:{unwatch(){E1(),Kp=!0}}}},hooks(){return{bootstrap(){Gp(qu("mutationObserverCallbacks",{}))},noAuto(){MC()},watch(t){const{observeMutationsRoot:e}=t;Kp?ef():Gp(qu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Zp=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return n.flipX=!0,n;if(s&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(s){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var WC={mixout(){return{parse:{transform:t=>Zp(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Zp(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:u,path:f};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Oc={x:0,y:0,width:"100%",height:"100%"};function Jp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function XC(t){return t.tag==="g"?t.children:[t]}var YC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Al(n.split(" ").map(r=>r.trim())):oh();return i.prefix||(i.prefix=Zi()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,h=Vw({transform:o,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...Oc,fill:"white"}},S=c.children?{children:c.children.map(Jp)}:{},b={tag:"g",attributes:{...h.inner},children:[Jp({tag:c.tag,attributes:{...c.attributes,...h.path},...S})]},_={tag:"g",attributes:{...h.outer},children:[b]},d="mask-".concat(a||Ca()),M="clip-".concat(a||Ca()),g={tag:"mask",attributes:{...Oc,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,_]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:XC(f)},g]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(d,")"),...Oc}}),{children:n,attributes:i}}}},$C={provides(t){let e=!1;Ki.matchMedia&&(e=Ki.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},a={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||a.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(a),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},jC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},qC=[Xw,IC,DC,NC,OC,VC,GC,WC,YC,$C,jC];aC(qC,{mixoutsTo:gn});gn.noAuto;gn.config;const M1=gn.library;gn.dom;const nf=gn.parse;gn.findIconDefinition;gn.toHtml;const KC=gn.icon;gn.layer;gn.text;gn.counter;const ZC={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},JC={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},QC={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};function Qp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function hi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qp(Object(n),!0).forEach(function(i){nn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function eR(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tR(t){var e=eR(t,"string");return typeof e=="symbol"?e:e+""}function Zo(t){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zo(t)}function nn(t,e,n){return e=tR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nR(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function iR(t,e){if(t==null)return{};var n=nR(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var rR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b1={exports:{}};(function(t){(function(e){var n=function(d,M,g){if(!c(M)||f(M)||h(M)||p(M)||l(M))return M;var x,R=0,T=0;if(u(M))for(x=[],T=M.length;R<T;R++)x.push(n(d,M[R],g));else{x={};for(var w in M)Object.prototype.hasOwnProperty.call(M,w)&&(x[d(w,g)]=n(d,M[w],g))}return x},i=function(d,M){M=M||{};var g=M.separator||"_",x=M.split||/(?=[A-Z])/;return d.split(x).join(g)},r=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(M,g){return g?g.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},s=function(d){var M=r(d);return M.substr(0,1).toUpperCase()+M.substr(1)},a=function(d,M){return i(d,M).toLowerCase()},o=Object.prototype.toString,l=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},u=function(d){return o.call(d)=="[object Array]"},f=function(d){return o.call(d)=="[object Date]"},h=function(d){return o.call(d)=="[object RegExp]"},p=function(d){return o.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},b=function(d,M){var g=M&&"process"in M?M.process:M;return typeof g!="function"?d:function(x,R){return g(x,d,R)}},_={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(d,M){return n(b(r,M),d)},decamelizeKeys:function(d,M){return n(b(a,M),d,M)},pascalizeKeys:function(d,M){return n(b(s,M),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(rR)})(b1);var sR=b1.exports,aR=["class","style"];function oR(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=sR.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function lR(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function T1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return T1(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=lR(u);break;case"style":l.style=oR(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=iR(n,aR);return ks(t.tag,hi(hi(hi({},e),{},{class:r.class,style:hi(hi({},r.style),a)},r.attrs),o),i)}var A1=!1;try{A1=!0}catch{}function cR(){if(!A1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Uc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?nn({},t,e):{}}function uR(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},nn(nn(nn(nn(nn(nn(nn(nn(nn(nn(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),nn(nn(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function em(t){if(t&&Zo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nf.icon)return nf.icon(t);if(t===null)return null;if(Zo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var w1=Fs({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=rt(function(){return em(e.icon)}),s=rt(function(){return Uc("classes",uR(e))}),a=rt(function(){return Uc("transform",typeof e.transform=="string"?nf.transform(e.transform):e.transform)}),o=rt(function(){return Uc("mask",em(e.mask))}),l=rt(function(){return KC(r.value,hi(hi(hi(hi({},s.value),a.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});vi(l,function(u){if(!u)return cR("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=rt(function(){return l.value?T1(l.value.abstract[0],{},i):null});return function(){return c.value}}});const fR={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},hR={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},dR={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},pR={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},mR={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};/*!
  * shared v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Jo=typeof window<"u",sr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),_R=(t,e,n)=>gR({l:t,k:e,s:n}),gR=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Rt=t=>typeof t=="number"&&isFinite(t),vR=t=>R1(t)==="[object Date]",Qi=t=>R1(t)==="[object RegExp]",Cl=t=>Ge(t)&&Object.keys(t).length===0,Bt=Object.assign;let tm;const di=()=>tm||(tm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nm(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const xR=Object.prototype.hasOwnProperty;function Qo(t,e){return xR.call(t,e)}const gt=Array.isArray,dt=t=>typeof t=="function",Se=t=>typeof t=="string",je=t=>typeof t=="boolean",st=t=>t!==null&&typeof t=="object",yR=t=>st(t)&&dt(t.then)&&dt(t.catch),C1=Object.prototype.toString,R1=t=>C1.call(t),Ge=t=>{if(!st(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},ER=t=>t==null?"":gt(t)||Ge(t)&&t.toString===C1?JSON.stringify(t,null,2):String(t);function SR(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function Rl(t){let e=t;return()=>++e}function MR(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const To=t=>!st(t)||gt(t);function Bo(t,e){if(To(t)||To(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{To(i[s])||To(r[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]})})}}/*!
  * message-compiler v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function bR(t,e,n){return{line:t,column:e,offset:n}}function el(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const TR=/\{([0-9a-zA-Z]+)\}/g;function P1(t,...e){return e.length===1&&AR(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(TR,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const L1=Object.assign,im=t=>typeof t=="string",AR=t=>t!==null&&typeof t=="object";function I1(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const fh={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},wR={[fh.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function CR(t,e,...n){const i=P1(wR[t]||"",...n||[]),r={message:String(i),code:t};return e&&(r.location=e),r}const Be={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},RR={[Be.EXPECTED_TOKEN]:"Expected token: '{0}'",[Be.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Be.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Be.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Be.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Be.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Be.EMPTY_PLACEHOLDER]:"Empty placeholder",[Be.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Be.INVALID_LINKED_FORMAT]:"Invalid linked format",[Be.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Be.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Be.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Be.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Be.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Be.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Vs(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=P1((r||RR)[t]||"",...s||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function PR(t){throw t}const ai=" ",LR="\r",qt=`
`,IR=String.fromCharCode(8232),DR=String.fromCharCode(8233);function NR(t){const e=t;let n=0,i=1,r=1,s=0;const a=w=>e[w]===LR&&e[w+1]===qt,o=w=>e[w]===qt,l=w=>e[w]===DR,c=w=>e[w]===IR,u=w=>a(w)||o(w)||l(w)||c(w),f=()=>n,h=()=>i,p=()=>r,S=()=>s,b=w=>a(w)||l(w)||c(w)?qt:e[w],_=()=>b(n),d=()=>b(n+s);function M(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function g(){return a(n+s)&&s++,s++,e[n+s]}function x(){n=0,i=1,r=1,s=0}function R(w=0){s=w}function T(){const w=n+s;for(;w!==n;)M();s=0}return{index:f,line:h,column:p,peekOffset:S,charAt:b,currentChar:_,currentPeek:d,next:M,peek:g,reset:x,resetPeek:R,skipToPeek:T}}const Ui=void 0,OR=".",rm="'",UR="tokenizer";function FR(t,e={}){const n=e.location!==!1,i=NR(t),r=()=>i.index(),s=()=>bR(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(v,m,C,...F){const V=c();if(m.column+=C,m.offset+=C,u){const B=n?el(V.startLoc,m):null,O=Vs(v,B,{domain:UR,args:F});u(O)}}function h(v,m,C){v.endLoc=s(),v.currentType=m;const F={type:m};return n&&(F.loc=el(v.startLoc,v.endLoc)),C!=null&&(F.value=C),F}const p=v=>h(v,14);function S(v,m){return v.currentChar()===m?(v.next(),m):(f(Be.EXPECTED_TOKEN,s(),0,m),"")}function b(v){let m="";for(;v.currentPeek()===ai||v.currentPeek()===qt;)m+=v.currentPeek(),v.peek();return m}function _(v){const m=b(v);return v.skipToPeek(),m}function d(v){if(v===Ui)return!1;const m=v.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m===95}function M(v){if(v===Ui)return!1;const m=v.charCodeAt(0);return m>=48&&m<=57}function g(v,m){const{currentType:C}=m;if(C!==2)return!1;b(v);const F=d(v.currentPeek());return v.resetPeek(),F}function x(v,m){const{currentType:C}=m;if(C!==2)return!1;b(v);const F=v.currentPeek()==="-"?v.peek():v.currentPeek(),V=M(F);return v.resetPeek(),V}function R(v,m){const{currentType:C}=m;if(C!==2)return!1;b(v);const F=v.currentPeek()===rm;return v.resetPeek(),F}function T(v,m){const{currentType:C}=m;if(C!==8)return!1;b(v);const F=v.currentPeek()===".";return v.resetPeek(),F}function w(v,m){const{currentType:C}=m;if(C!==9)return!1;b(v);const F=d(v.currentPeek());return v.resetPeek(),F}function I(v,m){const{currentType:C}=m;if(!(C===8||C===12))return!1;b(v);const F=v.currentPeek()===":";return v.resetPeek(),F}function N(v,m){const{currentType:C}=m;if(C!==10)return!1;const F=()=>{const B=v.currentPeek();return B==="{"?d(v.peek()):B==="@"||B==="%"||B==="|"||B===":"||B==="."||B===ai||!B?!1:B===qt?(v.peek(),F()):D(v,!1)},V=F();return v.resetPeek(),V}function E(v){b(v);const m=v.currentPeek()==="|";return v.resetPeek(),m}function A(v){const m=b(v),C=v.currentPeek()==="%"&&v.peek()==="{";return v.resetPeek(),{isModulo:C,hasSpace:m.length>0}}function D(v,m=!0){const C=(V=!1,B="",O=!1)=>{const z=v.currentPeek();return z==="{"?B==="%"?!1:V:z==="@"||!z?B==="%"?!0:V:z==="%"?(v.peek(),C(V,"%",!0)):z==="|"?B==="%"||O?!0:!(B===ai||B===qt):z===ai?(v.peek(),C(!0,ai,O)):z===qt?(v.peek(),C(!0,qt,O)):!0},F=C();return m&&v.resetPeek(),F}function U(v,m){const C=v.currentChar();return C===Ui?Ui:m(C)?(v.next(),C):null}function X(v){const m=v.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36}function ne(v){return U(v,X)}function W(v){const m=v.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36||m===45}function te(v){return U(v,W)}function $(v){const m=v.charCodeAt(0);return m>=48&&m<=57}function pe(v){return U(v,$)}function me(v){const m=v.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102}function de(v){return U(v,me)}function we(v){let m="",C="";for(;m=pe(v);)C+=m;return C}function Pe(v){_(v);const m=v.currentChar();return m!=="%"&&f(Be.EXPECTED_TOKEN,s(),0,m),v.next(),"%"}function ee(v){let m="";for(;;){const C=v.currentChar();if(C==="{"||C==="}"||C==="@"||C==="|"||!C)break;if(C==="%")if(D(v))m+=C,v.next();else break;else if(C===ai||C===qt)if(D(v))m+=C,v.next();else{if(E(v))break;m+=C,v.next()}else m+=C,v.next()}return m}function ue(v){_(v);let m="",C="";for(;m=te(v);)C+=m;return v.currentChar()===Ui&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),C}function _e(v){_(v);let m="";return v.currentChar()==="-"?(v.next(),m+=`-${we(v)}`):m+=we(v),v.currentChar()===Ui&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),m}function H(v){return v!==rm&&v!==qt}function ae(v){_(v),S(v,"'");let m="",C="";for(;m=U(v,H);)m==="\\"?C+=ie(v):C+=m;const F=v.currentChar();return F===qt||F===Ui?(f(Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),F===qt&&(v.next(),S(v,"'")),C):(S(v,"'"),C)}function ie(v){const m=v.currentChar();switch(m){case"\\":case"'":return v.next(),`\\${m}`;case"u":return fe(v,m,4);case"U":return fe(v,m,6);default:return f(Be.UNKNOWN_ESCAPE_SEQUENCE,s(),0,m),""}}function fe(v,m,C){S(v,m);let F="";for(let V=0;V<C;V++){const B=de(v);if(!B){f(Be.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${m}${F}${v.currentChar()}`);break}F+=B}return`\\${m}${F}`}function Me(v){return v!=="{"&&v!=="}"&&v!==ai&&v!==qt}function ye(v){_(v);let m="",C="";for(;m=U(v,Me);)C+=m;return C}function y(v){let m="",C="";for(;m=ne(v);)C+=m;return C}function P(v){const m=C=>{const F=v.currentChar();return F==="{"||F==="%"||F==="@"||F==="|"||F==="("||F===")"||!F||F===ai?C:(C+=F,v.next(),m(C))};return m("")}function k(v){_(v);const m=S(v,"|");return _(v),m}function Q(v,m){let C=null;switch(v.currentChar()){case"{":return m.braceNest>=1&&f(Be.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),v.next(),C=h(m,2,"{"),_(v),m.braceNest++,C;case"}":return m.braceNest>0&&m.currentType===2&&f(Be.EMPTY_PLACEHOLDER,s(),0),v.next(),C=h(m,3,"}"),m.braceNest--,m.braceNest>0&&_(v),m.inLinked&&m.braceNest===0&&(m.inLinked=!1),C;case"@":return m.braceNest>0&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),C=q(v,m)||p(m),m.braceNest=0,C;default:{let V=!0,B=!0,O=!0;if(E(v))return m.braceNest>0&&f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),C=h(m,1,k(v)),m.braceNest=0,m.inLinked=!1,C;if(m.braceNest>0&&(m.currentType===5||m.currentType===6||m.currentType===7))return f(Be.UNTERMINATED_CLOSING_BRACE,s(),0),m.braceNest=0,se(v,m);if(V=g(v,m))return C=h(m,5,ue(v)),_(v),C;if(B=x(v,m))return C=h(m,6,_e(v)),_(v),C;if(O=R(v,m))return C=h(m,7,ae(v)),_(v),C;if(!V&&!B&&!O)return C=h(m,13,ye(v)),f(Be.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,C.value),_(v),C;break}}return C}function q(v,m){const{currentType:C}=m;let F=null;const V=v.currentChar();switch((C===8||C===9||C===12||C===10)&&(V===qt||V===ai)&&f(Be.INVALID_LINKED_FORMAT,s(),0),V){case"@":return v.next(),F=h(m,8,"@"),m.inLinked=!0,F;case".":return _(v),v.next(),h(m,9,".");case":":return _(v),v.next(),h(m,10,":");default:return E(v)?(F=h(m,1,k(v)),m.braceNest=0,m.inLinked=!1,F):T(v,m)||I(v,m)?(_(v),q(v,m)):w(v,m)?(_(v),h(m,12,y(v))):N(v,m)?(_(v),V==="{"?Q(v,m)||F:h(m,11,P(v))):(C===8&&f(Be.INVALID_LINKED_FORMAT,s(),0),m.braceNest=0,m.inLinked=!1,se(v,m))}}function se(v,m){let C={type:14};if(m.braceNest>0)return Q(v,m)||p(m);if(m.inLinked)return q(v,m)||p(m);switch(v.currentChar()){case"{":return Q(v,m)||p(m);case"}":return f(Be.UNBALANCED_CLOSING_BRACE,s(),0),v.next(),h(m,3,"}");case"@":return q(v,m)||p(m);default:{if(E(v))return C=h(m,1,k(v)),m.braceNest=0,m.inLinked=!1,C;const{isModulo:V,hasSpace:B}=A(v);if(V)return B?h(m,0,ee(v)):h(m,4,Pe(v));if(D(v))return h(m,0,ee(v));break}}return C}function oe(){const{currentType:v,offset:m,startLoc:C,endLoc:F}=l;return l.lastType=v,l.lastOffset=m,l.lastStartLoc=C,l.lastEndLoc=F,l.offset=r(),l.startLoc=s(),i.currentChar()===Ui?h(l,14):se(i,l)}return{nextToken:oe,currentOffset:r,currentPosition:s,context:c}}const kR="parser",BR=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function zR(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function HR(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function r(g,x,R,T,...w){const I=g.currentPosition();if(I.offset+=T,I.column+=T,n){const N=e?el(R,I):null,E=Vs(x,N,{domain:kR,args:w});n(E)}}function s(g,x,R,T,...w){const I=g.currentPosition();if(I.offset+=T,I.column+=T,i){const N=e?el(R,I):null;i(CR(x,N,w))}}function a(g,x,R){const T={type:g};return e&&(T.start=x,T.end=x,T.loc={start:R,end:R}),T}function o(g,x,R,T){T&&(g.type=T),e&&(g.end=x,g.loc&&(g.loc.end=R))}function l(g,x){const R=g.context(),T=a(3,R.offset,R.startLoc);return T.value=x,o(T,g.currentOffset(),g.currentPosition()),T}function c(g,x){const R=g.context(),{lastOffset:T,lastStartLoc:w}=R,I=a(5,T,w);return I.index=parseInt(x,10),g.nextToken(),o(I,g.currentOffset(),g.currentPosition()),I}function u(g,x,R){const T=g.context(),{lastOffset:w,lastStartLoc:I}=T,N=a(4,w,I);return N.key=x,R===!0&&(N.modulo=!0),g.nextToken(),o(N,g.currentOffset(),g.currentPosition()),N}function f(g,x){const R=g.context(),{lastOffset:T,lastStartLoc:w}=R,I=a(9,T,w);return I.value=x.replace(BR,zR),g.nextToken(),o(I,g.currentOffset(),g.currentPosition()),I}function h(g){const x=g.nextToken(),R=g.context(),{lastOffset:T,lastStartLoc:w}=R,I=a(8,T,w);return x.type!==12?(r(g,Be.UNEXPECTED_EMPTY_LINKED_MODIFIER,R.lastStartLoc,0),I.value="",o(I,T,w),{nextConsumeToken:x,node:I}):(x.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Pn(x)),I.value=x.value||"",o(I,g.currentOffset(),g.currentPosition()),{node:I})}function p(g,x){const R=g.context(),T=a(7,R.offset,R.startLoc);return T.value=x,o(T,g.currentOffset(),g.currentPosition()),T}function S(g){const x=g.context(),R=a(6,x.offset,x.startLoc);let T=g.nextToken();if(T.type===9){const w=h(g);R.modifier=w.node,T=w.nextConsumeToken||g.nextToken()}switch(T.type!==10&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(T)),T=g.nextToken(),T.type===2&&(T=g.nextToken()),T.type){case 11:T.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(T)),R.key=p(g,T.value||"");break;case 5:T.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(T)),R.key=u(g,T.value||"");break;case 6:T.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(T)),R.key=c(g,T.value||"");break;case 7:T.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(T)),R.key=f(g,T.value||"");break;default:{r(g,Be.UNEXPECTED_EMPTY_LINKED_KEY,x.lastStartLoc,0);const w=g.context(),I=a(7,w.offset,w.startLoc);return I.value="",o(I,w.offset,w.startLoc),R.key=I,o(R,w.offset,w.startLoc),{nextConsumeToken:T,node:R}}}return o(R,g.currentOffset(),g.currentPosition()),{node:R}}function b(g){const x=g.context(),R=x.currentType===1?g.currentOffset():x.offset,T=x.currentType===1?x.endLoc:x.startLoc,w=a(2,R,T);w.items=[];let I=null,N=null;do{const D=I||g.nextToken();switch(I=null,D.type){case 0:D.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(D)),w.items.push(l(g,D.value||""));break;case 6:D.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(D)),w.items.push(c(g,D.value||""));break;case 4:N=!0;break;case 5:D.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(D)),w.items.push(u(g,D.value||"",!!N)),N&&(s(g,fh.USE_MODULO_SYNTAX,x.lastStartLoc,0,Pn(D)),N=null);break;case 7:D.value==null&&r(g,Be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(D)),w.items.push(f(g,D.value||""));break;case 8:{const U=S(g);w.items.push(U.node),I=U.nextConsumeToken||null;break}}}while(x.currentType!==14&&x.currentType!==1);const E=x.currentType===1?x.lastOffset:g.currentOffset(),A=x.currentType===1?x.lastEndLoc:g.currentPosition();return o(w,E,A),w}function _(g,x,R,T){const w=g.context();let I=T.items.length===0;const N=a(1,x,R);N.cases=[],N.cases.push(T);do{const E=b(g);I||(I=E.items.length===0),N.cases.push(E)}while(w.currentType!==14);return I&&r(g,Be.MUST_HAVE_MESSAGES_IN_PLURAL,R,0),o(N,g.currentOffset(),g.currentPosition()),N}function d(g){const x=g.context(),{offset:R,startLoc:T}=x,w=b(g);return x.currentType===14?w:_(g,R,T,w)}function M(g){const x=FR(g,L1({},t)),R=x.context(),T=a(0,R.offset,R.startLoc);return e&&T.loc&&(T.loc.source=g),T.body=d(x),t.onCacheKey&&(T.cacheKey=t.onCacheKey(g)),R.currentType!==14&&r(x,Be.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,g[R.offset]||""),o(T,x.currentOffset(),x.currentPosition()),T}return{parse:M}}function Pn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function VR(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function sm(t,e){for(let n=0;n<t.length;n++)hh(t[n],e)}function hh(t,e){switch(t.type){case 1:sm(t.cases,e),e.helper("plural");break;case 2:sm(t.items,e);break;case 6:{hh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function GR(t,e={}){const n=VR(t);n.helper("normalize"),t.body&&hh(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function WR(t){const e=t.body;return e.type===2?am(e):e.cases.forEach(n=>am(n)),t}function am(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=I1(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const XR="minifier";function as(t){switch(t.t=t.type,t.type){case 0:{const e=t;as(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)as(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)as(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;as(e.key),e.k=e.key,delete e.key,e.modifier&&(as(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Vs(Be.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:XR,args:[t.type]})}delete t.type}const YR="parser";function $R(t,e){const{sourceMap:n,filename:i,breakLineCode:r,needIndent:s}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};a&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(_,d){o.code+=_}function u(_,d=!0){const M=d?r:"";c(s?M+"  ".repeat(_):M)}function f(_=!0){const d=++o.indentLevel;_&&u(d)}function h(_=!0){const d=--o.indentLevel;_&&u(d)}function p(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:h,newline:p,helper:_=>`_${_}`,needIndent:()=>o.needIndent}}function jR(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Ns(t,e.key),e.modifier?(t.push(", "),Ns(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function qR(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(Ns(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function KR(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Ns(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function ZR(t,e){e.body?Ns(t,e.body):t.push("null")}function Ns(t,e){const{helper:n}=t;switch(e.type){case 0:ZR(t,e);break;case 1:KR(t,e);break;case 2:qR(t,e);break;case 6:jR(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Vs(Be.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:YR,args:[e.type]})}}const JR=(t,e={})=>{const n=im(e.mode)?e.mode:"normal",i=im(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,a=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=$R(t,{mode:n,filename:i,sourceMap:r,breakLineCode:s,needIndent:a});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${I1(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Ns(l,t),l.deindent(a),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function QR(t,e={}){const n=L1({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=HR(n).parse(t);return i?(s&&WR(o),r&&as(o),{ast:o,code:""}):(GR(o,n),JR(o,n))}/*!
  * core-base v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function e3(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(di().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(di().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(di().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ar=[];ar[0]={w:[0],i:[3,0],"[":[4],o:[7]};ar[1]={w:[1],".":[2],"[":[4],o:[7]};ar[2]={w:[2],i:[3,0],0:[3,0]};ar[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ar[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ar[5]={"'":[4,0],o:8,l:[5,0]};ar[6]={'"':[4,0],o:8,l:[6,0]};const t3=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function n3(t){return t3.test(t)}function i3(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function r3(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function s3(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:n3(e)?i3(e):"*"+e}function a3(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,f;const h=[];h[0]=()=>{a===void 0?a=o:a+=o},h[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,a===void 0||(a=s3(a),a===!1))return!1;h[1]()}};function p(){const S=t[n+1];if(i===5&&S==="'"||i===6&&S==='"')return n++,o="\\"+S,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=r3(s),f=ar[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const om=new Map;function o3(t,e){return st(t)?t[e]:null}function l3(t,e){if(!st(t))return null;let n=om.get(e);if(n||(n=a3(e),n&&om.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=r[n[s]];if(a===void 0||dt(r))return null;r=a,s++}return r}const c3=t=>t,u3=t=>"",f3="text",h3=t=>t.length===0?"":SR(t),d3=ER;function lm(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function p3(t){const e=Rt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Rt(t.named.count)||Rt(t.named.n))?Rt(t.named.count)?t.named.count:Rt(t.named.n)?t.named.n:e:e}function m3(t,e){e.count||(e.count=t),e.n||(e.n=t)}function _3(t={}){const e=t.locale,n=p3(t),i=st(t.pluralRules)&&Se(e)&&dt(t.pluralRules[e])?t.pluralRules[e]:lm,r=st(t.pluralRules)&&Se(e)&&dt(t.pluralRules[e])?lm:void 0,s=d=>d[i(n,d.length,r)],a=t.list||[],o=d=>a[d],l=t.named||{};Rt(t.pluralIndex)&&m3(n,l);const c=d=>l[d];function u(d){const M=dt(t.messages)?t.messages(d):st(t.messages)?t.messages[d]:!1;return M||(t.parent?t.parent.message(d):u3)}const f=d=>t.modifiers?t.modifiers[d]:c3,h=Ge(t.processor)&&dt(t.processor.normalize)?t.processor.normalize:h3,p=Ge(t.processor)&&dt(t.processor.interpolate)?t.processor.interpolate:d3,S=Ge(t.processor)&&Se(t.processor.type)?t.processor.type:f3,_={list:o,named:c,plural:s,linked:(d,...M)=>{const[g,x]=M;let R="text",T="";M.length===1?st(g)?(T=g.modifier||T,R=g.type||R):Se(g)&&(T=g||T):M.length===2&&(Se(g)&&(T=g||T),Se(x)&&(R=x||R));const w=u(d)(_),I=R==="vnode"&&gt(w)&&T?w[0]:w;return T?f(T)(I,R):I},message:u,type:S,interpolate:p,normalize:h,values:Bt({},a,l)};return _}let Ra=null;function g3(t){Ra=t}function v3(t,e,n){Ra&&Ra.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const x3=y3("function:translate");function y3(t){return e=>Ra&&Ra.emit(t,e)}const D1=fh.__EXTEND_POINT__,vr=Rl(D1),E3={NOT_FOUND_KEY:D1,FALLBACK_TO_TRANSLATE:vr(),CANNOT_FORMAT_NUMBER:vr(),FALLBACK_TO_NUMBER_FORMAT:vr(),CANNOT_FORMAT_DATE:vr(),FALLBACK_TO_DATE_FORMAT:vr(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:vr(),__EXTEND_POINT__:vr()},N1=Be.__EXTEND_POINT__,xr=Rl(N1),Nn={INVALID_ARGUMENT:N1,INVALID_DATE_ARGUMENT:xr(),INVALID_ISO_DATE_ARGUMENT:xr(),NOT_SUPPORT_NON_STRING_MESSAGE:xr(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:xr(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:xr(),NOT_SUPPORT_LOCALE_TYPE:xr(),__EXTEND_POINT__:xr()};function qn(t){return Vs(t,null,void 0)}function dh(t,e){return e.locale!=null?cm(e.locale):cm(t.locale)}let Fc;function cm(t){if(Se(t))return t;if(dt(t)){if(t.resolvedOnce&&Fc!=null)return Fc;if(t.constructor.name==="Function"){const e=t();if(yR(e))throw qn(Nn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Fc=e}else throw qn(Nn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qn(Nn.NOT_SUPPORT_LOCALE_TYPE)}function S3(t,e,n){return[...new Set([n,...gt(e)?e:st(e)?Object.keys(e):Se(e)?[e]:[n]])]}function O1(t,e,n){const i=Se(n)?n:Os,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;gt(a);)a=um(s,a,e);const o=gt(e)||!Ge(e)?e:e.default?e.default:null;a=Se(o)?[o]:o,gt(a)&&um(s,a,!1),r.__localeChainCache.set(i,s)}return s}function um(t,e,n){let i=!0;for(let r=0;r<e.length&&je(i);r++){const s=e[r];Se(s)&&(i=M3(t,e[r],n))}return i}function M3(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=b3(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function b3(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(gt(n)||Ge(n))&&n[r]&&(i=n[r])}return i}const T3="9.14.0",Pl=-1,Os="en-US",fm="",hm=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function A3(){return{upper:(t,e)=>e==="text"&&Se(t)?t.toUpperCase():e==="vnode"&&st(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Se(t)?t.toLowerCase():e==="vnode"&&st(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Se(t)?hm(t):e==="vnode"&&st(t)&&"__v_isVNode"in t?hm(t.children):t}}let U1;function dm(t){U1=t}let F1;function w3(t){F1=t}let k1;function C3(t){k1=t}let B1=null;const R3=t=>{B1=t},P3=()=>B1;let z1=null;const pm=t=>{z1=t},L3=()=>z1;let mm=0;function I3(t={}){const e=dt(t.onWarn)?t.onWarn:MR,n=Se(t.version)?t.version:T3,i=Se(t.locale)||dt(t.locale)?t.locale:Os,r=dt(i)?Os:i,s=gt(t.fallbackLocale)||Ge(t.fallbackLocale)||Se(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Ge(t.messages)?t.messages:{[r]:{}},o=Ge(t.datetimeFormats)?t.datetimeFormats:{[r]:{}},l=Ge(t.numberFormats)?t.numberFormats:{[r]:{}},c=Bt({},t.modifiers||{},A3()),u=t.pluralRules||{},f=dt(t.missing)?t.missing:null,h=je(t.missingWarn)||Qi(t.missingWarn)?t.missingWarn:!0,p=je(t.fallbackWarn)||Qi(t.fallbackWarn)?t.fallbackWarn:!0,S=!!t.fallbackFormat,b=!!t.unresolving,_=dt(t.postTranslation)?t.postTranslation:null,d=Ge(t.processor)?t.processor:null,M=je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter,x=dt(t.messageCompiler)?t.messageCompiler:U1,R=dt(t.messageResolver)?t.messageResolver:F1||o3,T=dt(t.localeFallbacker)?t.localeFallbacker:k1||S3,w=st(t.fallbackContext)?t.fallbackContext:void 0,I=t,N=st(I.__datetimeFormatters)?I.__datetimeFormatters:new Map,E=st(I.__numberFormatters)?I.__numberFormatters:new Map,A=st(I.__meta)?I.__meta:{};mm++;const D={version:n,cid:mm,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:S,unresolving:b,postTranslation:_,processor:d,warnHtmlMessage:M,escapeParameter:g,messageCompiler:x,messageResolver:R,localeFallbacker:T,fallbackContext:w,onWarn:e,__meta:A};return D.datetimeFormats=o,D.numberFormats=l,D.__datetimeFormatters=N,D.__numberFormatters=E,__INTLIFY_PROD_DEVTOOLS__&&v3(D,n,A),D}function ph(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Se(o)?o:e}else return e}function Qs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function D3(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function N3(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(D3(t,e[i]))return!0;return!1}function kc(t){return n=>O3(n,t)}function O3(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const i=n,r=i.c||i.cases;return t.plural(r.reduce((s,a)=>[...s,_m(t,a)],[]))}else return _m(t,n)}function _m(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const i=(e.i||e.items).reduce((r,s)=>[...r,rf(t,s)],[]);return t.normalize(i)}}function rf(t,e){const n=e.t||e.type;switch(n){case 3:{const i=e;return i.v||i.value}case 9:{const i=e;return i.v||i.value}case 4:{const i=e;return t.interpolate(t.named(i.k||i.key))}case 5:{const i=e;return t.interpolate(t.list(i.i!=null?i.i:i.index))}case 6:{const i=e,r=i.m||i.modifier;return t.linked(rf(t,i.k||i.key),r?rf(t,r):void 0,t.type)}case 7:{const i=e;return i.v||i.value}case 8:{const i=e;return i.v||i.value}default:throw new Error(`unhandled node type on format message part: ${n}`)}}const H1=t=>t;let us=Object.create(null);const Us=t=>st(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function V1(t,e={}){let n=!1;const i=e.onError||PR;return e.onError=r=>{n=!0,i(r)},{...QR(t,e),detectError:n}}const U3=(t,e)=>{if(!Se(t))throw qn(Nn.NOT_SUPPORT_NON_STRING_MESSAGE);{je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||H1)(t),r=us[i];if(r)return r;const{code:s,detectError:a}=V1(t,e),o=new Function(`return ${s}`)();return a?o:us[i]=o}};function F3(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Se(t)){je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||H1)(t),r=us[i];if(r)return r;const{ast:s,detectError:a}=V1(t,{...e,location:!1,jit:!0}),o=kc(s);return a?o:us[i]=o}else{const n=t.cacheKey;if(n){const i=us[n];return i||(us[n]=kc(t))}else return kc(t)}}const gm=()=>"",Sn=t=>dt(t);function vm(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=sf(...e),u=je(c.missingWarn)?c.missingWarn:t.missingWarn,f=je(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=je(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,S=Se(c.default)||je(c.default)?je(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",b=n||S!=="",_=dh(t,c);h&&k3(c);let[d,M,g]=p?[l,_,o[_]||{}]:G1(t,l,_,a,f,u),x=d,R=l;if(!p&&!(Se(x)||Us(x)||Sn(x))&&b&&(x=S,R=x),!p&&(!(Se(x)||Us(x)||Sn(x))||!Se(M)))return r?Pl:l;let T=!1;const w=()=>{T=!0},I=Sn(x)?x:W1(t,l,M,x,R,w);if(T)return x;const N=H3(t,M,g,c),E=_3(N),A=B3(t,I,E),D=i?i(A,l):A;if(__INTLIFY_PROD_DEVTOOLS__){const U={timestamp:Date.now(),key:Se(l)?l:Sn(x)?x.key:"",locale:M||(Sn(x)?x.locale:""),format:Se(x)?x:Sn(x)?x.source:"",message:D};U.meta=Bt({},t.__meta,P3()||{}),x3(U)}return D}function k3(t){gt(t.list)?t.list=t.list.map(e=>Se(e)?nm(e):e):st(t.named)&&Object.keys(t.named).forEach(e=>{Se(t.named[e])&&(t.named[e]=nm(t.named[e]))})}function G1(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f={},h,p=null;const S="translate";for(let b=0;b<u.length&&(h=u[b],f=a[h]||{},(p=l(f,e))===null&&(p=f[e]),!(Se(p)||Us(p)||Sn(p)));b++)if(!N3(h,u)){const _=ph(t,e,h,s,S);_!==e&&(p=_)}return[p,h,f]}function W1(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(Sn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,z3(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function B3(t,e,n){return e(n)}function sf(...t){const[e,n,i]=t,r={};if(!Se(e)&&!Rt(e)&&!Sn(e)&&!Us(e))throw qn(Nn.INVALID_ARGUMENT);const s=Rt(e)?String(e):(Sn(e),e);return Rt(n)?r.plural=n:Se(n)?r.default=n:Ge(n)&&!Cl(n)?r.named=n:gt(n)&&(r.list=n),Rt(i)?r.plural=i:Se(i)?r.default=i:Ge(i)&&Bt(r,i),[s,r]}function z3(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>_R(e,n,a)}}function H3(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:p=>{let S=a(n,p);if(S==null&&u){const[,,b]=G1(u,p,e,o,l,c);S=a(b,p)}if(Se(S)||Us(S)){let b=!1;const d=W1(t,p,e,S,p,()=>{b=!0});return b?gm:d}else return Sn(S)?S:gm}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Rt(i.plural)&&(h.pluralIndex=i.plural),h}function xm(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,f]=af(...e),h=je(u.missingWarn)?u.missingWarn:t.missingWarn;je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,S=dh(t,u),b=a(t,r,S);if(!Se(l)||l==="")return new Intl.DateTimeFormat(S,f).format(c);let _={},d,M=null;const g="datetime format";for(let T=0;T<b.length&&(d=b[T],_=n[d]||{},M=_[l],!Ge(M));T++)ph(t,l,d,h,g);if(!Ge(M)||!Se(d))return i?Pl:l;let x=`${d}__${l}`;Cl(f)||(x=`${x}__${JSON.stringify(f)}`);let R=o.get(x);return R||(R=new Intl.DateTimeFormat(d,Bt({},M,f)),o.set(x,R)),p?R.formatToParts(c):R.format(c)}const X1=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function af(...t){const[e,n,i,r]=t,s={};let a={},o;if(Se(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qn(Nn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw qn(Nn.INVALID_ISO_DATE_ARGUMENT)}}else if(vR(e)){if(isNaN(e.getTime()))throw qn(Nn.INVALID_DATE_ARGUMENT);o=e}else if(Rt(e))o=e;else throw qn(Nn.INVALID_ARGUMENT);return Se(n)?s.key=n:Ge(n)&&Object.keys(n).forEach(l=>{X1.includes(l)?a[l]=n[l]:s[l]=n[l]}),Se(i)?s.locale=i:Ge(i)&&(a=i),Ge(r)&&(a=r),[s.key||"",o,s,a]}function ym(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Em(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,f]=of(...e),h=je(u.missingWarn)?u.missingWarn:t.missingWarn;je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,S=dh(t,u),b=a(t,r,S);if(!Se(l)||l==="")return new Intl.NumberFormat(S,f).format(c);let _={},d,M=null;const g="number format";for(let T=0;T<b.length&&(d=b[T],_=n[d]||{},M=_[l],!Ge(M));T++)ph(t,l,d,h,g);if(!Ge(M)||!Se(d))return i?Pl:l;let x=`${d}__${l}`;Cl(f)||(x=`${x}__${JSON.stringify(f)}`);let R=o.get(x);return R||(R=new Intl.NumberFormat(d,Bt({},M,f)),o.set(x,R)),p?R.formatToParts(c):R.format(c)}const Y1=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function of(...t){const[e,n,i,r]=t,s={};let a={};if(!Rt(e))throw qn(Nn.INVALID_ARGUMENT);const o=e;return Se(n)?s.key=n:Ge(n)&&Object.keys(n).forEach(l=>{Y1.includes(l)?a[l]=n[l]:s[l]=n[l]}),Se(i)?s.locale=i:Ge(i)&&(a=i),Ge(r)&&(a=r),[s.key||"",o,s,a]}function Sm(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}e3();/*!
  * vue-i18n v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const V3="9.14.0";function G3(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(di().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(di().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(di().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(di().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(di().__INTLIFY_PROD_DEVTOOLS__=!1)}const $1=E3.__EXTEND_POINT__,oi=Rl($1);oi(),oi(),oi(),oi(),oi(),oi(),oi(),oi(),oi();const j1=Nn.__EXTEND_POINT__,tn=Rl(j1),Pt={UNEXPECTED_RETURN_TYPE:j1,INVALID_ARGUMENT:tn(),MUST_BE_CALL_SETUP_TOP:tn(),NOT_INSTALLED:tn(),NOT_AVAILABLE_IN_LEGACY_MODE:tn(),REQUIRED_VALUE:tn(),INVALID_VALUE:tn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:tn(),NOT_INSTALLED_WITH_PROVIDE:tn(),UNEXPECTED_ERROR:tn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:tn(),BRIDGE_SUPPORT_VUE_2_ONLY:tn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:tn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:tn(),__EXTEND_POINT__:tn()};function Ot(t,...e){return Vs(t,null,void 0)}const lf=sr("__translateVNode"),cf=sr("__datetimeParts"),uf=sr("__numberParts"),q1=sr("__setPluralRules"),K1=sr("__injectWithOption"),ff=sr("__dispose");function Pa(t){if(!st(t))return t;for(const e in t)if(Qo(t,e))if(!e.includes("."))st(t[e])&&Pa(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]in r||(r[n[a]]={}),!st(r[n[a]])){s=!0;break}r=r[n[a]]}s||(r[n[i]]=t[e],delete t[e]),st(r[n[i]])&&Pa(r[n[i]])}return t}function Ll(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Ge(n)?n:gt(i)?{}:{[t]:{}};if(gt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},Bo(c,a[l])):Bo(c,a)}else Se(o)&&Bo(JSON.parse(o),a)}),r==null&&s)for(const o in a)Qo(a,o)&&Pa(a[o]);return a}function Z1(t){return t.type}function J1(t,e,n){let i=st(e.messages)?e.messages:{};"__i18nGlobal"in n&&(i=Ll(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(st(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(st(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Mm(t){return yt(Ia,null,t,0)}const bm="__INTLIFY_META__",Tm=()=>[],W3=()=>!1;let Am=0;function wm(t){return(e,n,i,r)=>t(n,i,Ms()||void 0,r)}const X3=()=>{const t=Ms();let e=null;return t&&(e=Z1(t)[bm])?{[bm]:e}:null};function mh(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,s=t.flatJson,a=Jo?Sr:Af,o=!!t.translateExistCompatible;let l=je(t.inheritLocale)?t.inheritLocale:!0;const c=a(n&&l?n.locale.value:Se(t.locale)?t.locale:Os),u=a(n&&l?n.fallbackLocale.value:Se(t.fallbackLocale)||gt(t.fallbackLocale)||Ge(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=a(Ll(c.value,t)),h=a(Ge(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),p=a(Ge(t.numberFormats)?t.numberFormats:{[c.value]:{}});let S=n?n.missingWarn:je(t.missingWarn)||Qi(t.missingWarn)?t.missingWarn:!0,b=n?n.fallbackWarn:je(t.fallbackWarn)||Qi(t.fallbackWarn)?t.fallbackWarn:!0,_=n?n.fallbackRoot:je(t.fallbackRoot)?t.fallbackRoot:!0,d=!!t.fallbackFormat,M=dt(t.missing)?t.missing:null,g=dt(t.missing)?wm(t.missing):null,x=dt(t.postTranslation)?t.postTranslation:null,R=n?n.warnHtmlMessage:je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,T=!!t.escapeParameter;const w=n?n.modifiers:Ge(t.modifiers)?t.modifiers:{};let I=t.pluralRules||n&&n.pluralRules,N;N=(()=>{r&&pm(null);const O={version:V3,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:w,pluralRules:I,missing:g===null?void 0:g,missingWarn:S,fallbackWarn:b,fallbackFormat:d,unresolving:!0,postTranslation:x===null?void 0:x,warnHtmlMessage:R,escapeParameter:T,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};O.datetimeFormats=h.value,O.numberFormats=p.value,O.__datetimeFormatters=Ge(N)?N.__datetimeFormatters:void 0,O.__numberFormatters=Ge(N)?N.__numberFormatters:void 0;const z=I3(O);return r&&pm(z),z})(),Qs(N,c.value,u.value);function A(){return[c.value,u.value,f.value,h.value,p.value]}const D=rt({get:()=>c.value,set:O=>{c.value=O,N.locale=c.value}}),U=rt({get:()=>u.value,set:O=>{u.value=O,N.fallbackLocale=u.value,Qs(N,c.value,O)}}),X=rt(()=>f.value),ne=rt(()=>h.value),W=rt(()=>p.value);function te(){return dt(x)?x:null}function $(O){x=O,N.postTranslation=O}function pe(){return M}function me(O){O!==null&&(g=wm(O)),M=O,N.missing=g}const de=(O,z,le,ve,ce,ge)=>{A();let Le;try{__INTLIFY_PROD_DEVTOOLS__,r||(N.fallbackContext=n?L3():void 0),Le=O(N)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(N.fallbackContext=void 0)}if(le!=="translate exists"&&Rt(Le)&&Le===Pl||le==="translate exists"&&!Le){const[De,be]=z();return n&&_?ve(n):ce(De)}else{if(ge(Le))return Le;throw Ot(Pt.UNEXPECTED_RETURN_TYPE)}};function we(...O){return de(z=>Reflect.apply(vm,null,[z,...O]),()=>sf(...O),"translate",z=>Reflect.apply(z.t,z,[...O]),z=>z,z=>Se(z))}function Pe(...O){const[z,le,ve]=O;if(ve&&!st(ve))throw Ot(Pt.INVALID_ARGUMENT);return we(z,le,Bt({resolvedMessage:!0},ve||{}))}function ee(...O){return de(z=>Reflect.apply(xm,null,[z,...O]),()=>af(...O),"datetime format",z=>Reflect.apply(z.d,z,[...O]),()=>fm,z=>Se(z))}function ue(...O){return de(z=>Reflect.apply(Em,null,[z,...O]),()=>of(...O),"number format",z=>Reflect.apply(z.n,z,[...O]),()=>fm,z=>Se(z))}function _e(O){return O.map(z=>Se(z)||Rt(z)||je(z)?Mm(String(z)):z)}const ae={normalize:_e,interpolate:O=>O,type:"vnode"};function ie(...O){return de(z=>{let le;const ve=z;try{ve.processor=ae,le=Reflect.apply(vm,null,[ve,...O])}finally{ve.processor=null}return le},()=>sf(...O),"translate",z=>z[lf](...O),z=>[Mm(z)],z=>gt(z))}function fe(...O){return de(z=>Reflect.apply(Em,null,[z,...O]),()=>of(...O),"number format",z=>z[uf](...O),Tm,z=>Se(z)||gt(z))}function Me(...O){return de(z=>Reflect.apply(xm,null,[z,...O]),()=>af(...O),"datetime format",z=>z[cf](...O),Tm,z=>Se(z)||gt(z))}function ye(O){I=O,N.pluralRules=I}function y(O,z){return de(()=>{if(!O)return!1;const le=Se(z)?z:c.value,ve=Q(le),ce=N.messageResolver(ve,O);return o?ce!=null:Us(ce)||Sn(ce)||Se(ce)},()=>[O],"translate exists",le=>Reflect.apply(le.te,le,[O,z]),W3,le=>je(le))}function P(O){let z=null;const le=O1(N,u.value,c.value);for(let ve=0;ve<le.length;ve++){const ce=f.value[le[ve]]||{},ge=N.messageResolver(ce,O);if(ge!=null){z=ge;break}}return z}function k(O){const z=P(O);return z??(n?n.tm(O)||{}:{})}function Q(O){return f.value[O]||{}}function q(O,z){if(s){const le={[O]:z};for(const ve in le)Qo(le,ve)&&Pa(le[ve]);z=le[O]}f.value[O]=z,N.messages=f.value}function se(O,z){f.value[O]=f.value[O]||{};const le={[O]:z};if(s)for(const ve in le)Qo(le,ve)&&Pa(le[ve]);z=le[O],Bo(z,f.value[O]),N.messages=f.value}function oe(O){return h.value[O]||{}}function v(O,z){h.value[O]=z,N.datetimeFormats=h.value,ym(N,O,z)}function m(O,z){h.value[O]=Bt(h.value[O]||{},z),N.datetimeFormats=h.value,ym(N,O,z)}function C(O){return p.value[O]||{}}function F(O,z){p.value[O]=z,N.numberFormats=p.value,Sm(N,O,z)}function V(O,z){p.value[O]=Bt(p.value[O]||{},z),N.numberFormats=p.value,Sm(N,O,z)}Am++,n&&Jo&&(vi(n.locale,O=>{l&&(c.value=O,N.locale=O,Qs(N,c.value,u.value))}),vi(n.fallbackLocale,O=>{l&&(u.value=O,N.fallbackLocale=O,Qs(N,c.value,u.value))}));const B={id:Am,locale:D,fallbackLocale:U,get inheritLocale(){return l},set inheritLocale(O){l=O,O&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,Qs(N,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:X,get modifiers(){return w},get pluralRules(){return I||{}},get isGlobal(){return r},get missingWarn(){return S},set missingWarn(O){S=O,N.missingWarn=S},get fallbackWarn(){return b},set fallbackWarn(O){b=O,N.fallbackWarn=b},get fallbackRoot(){return _},set fallbackRoot(O){_=O},get fallbackFormat(){return d},set fallbackFormat(O){d=O,N.fallbackFormat=d},get warnHtmlMessage(){return R},set warnHtmlMessage(O){R=O,N.warnHtmlMessage=O},get escapeParameter(){return T},set escapeParameter(O){T=O,N.escapeParameter=O},t:we,getLocaleMessage:Q,setLocaleMessage:q,mergeLocaleMessage:se,getPostTranslationHandler:te,setPostTranslationHandler:$,getMissingHandler:pe,setMissingHandler:me,[q1]:ye};return B.datetimeFormats=ne,B.numberFormats=W,B.rt=Pe,B.te=y,B.tm=k,B.d=ee,B.n=ue,B.getDateTimeFormat=oe,B.setDateTimeFormat=v,B.mergeDateTimeFormat=m,B.getNumberFormat=C,B.setNumberFormat=F,B.mergeNumberFormat=V,B[K1]=i,B[lf]=ie,B[cf]=Me,B[uf]=fe,B}function Y3(t){const e=Se(t.locale)?t.locale:Os,n=Se(t.fallbackLocale)||gt(t.fallbackLocale)||Ge(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=dt(t.missing)?t.missing:void 0,r=je(t.silentTranslationWarn)||Qi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=je(t.silentFallbackWarn)||Qi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=je(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Ge(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=dt(t.postTranslation)?t.postTranslation:void 0,f=Se(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=je(t.sync)?t.sync:!0;let S=t.messages;if(Ge(t.sharedMessages)){const T=t.sharedMessages;S=Object.keys(T).reduce((I,N)=>{const E=I[N]||(I[N]={});return Bt(E,T[N]),I},S||{})}const{__i18n:b,__root:_,__injectWithOption:d}=t,M=t.datetimeFormats,g=t.numberFormats,x=t.flatJson,R=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:S,flatJson:x,datetimeFormats:M,numberFormats:g,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,translateExistCompatible:R,__i18n:b,__root:_,__injectWithOption:d}}function hf(t={},e){{const n=mh(Y3(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return je(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=je(s)?!s:s},get silentFallbackWarn(){return je(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=je(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[a,o,l]=s,c={};let u=null,f=null;if(!Se(a))throw Ot(Pt.INVALID_ARGUMENT);const h=a;return Se(o)?c.locale=o:gt(o)?u=o:Ge(o)&&(f=o),gt(l)?u=l:Ge(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,f=null;if(!Se(a))throw Ot(Pt.INVALID_ARGUMENT);const h=a;return Se(o)?c.locale=o:Rt(o)?c.plural=o:gt(o)?u=o:Ge(o)&&(f=o),Se(l)?c.locale=l:gt(l)?u=l:Ge(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},te(s,a){return n.te(s,a)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,a){n.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){n.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,a){n.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){n.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,a){n.setNumberFormat(s,a)},mergeNumberFormat(s,a){n.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=i,r}}const _h={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function $3({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===En?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},{})}function Q1(t){return En}const j3=Fs({name:"i18n-t",props:Bt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Rt(t)||!isNaN(t)}},_h),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||gh({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),a={};t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Se(t.plural)?+t.plural:t.plural);const o=$3(e,s),l=r[lf](t.keypath,o,a),c=Bt({},i),u=Se(t.tag)||st(t.tag)?t.tag:Q1();return ks(u,c,l)}}}),Cm=j3;function q3(t){return gt(t)&&!Se(t[0])}function e0(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o={};t.locale&&(a.locale=t.locale),Se(t.format)?a.key=t.format:st(t.format)&&(Se(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Bt({},h,{[p]:t.format[p]}):h,{}));const l=i(t.value,a,o);let c=[a.key];gt(l)?c=l.map((h,p)=>{const S=r[h.type],b=S?S({[h.type]:h.value,index:p,parts:l}):[h.value];return q3(b)&&(b[0].key=`${h.type}-${p}`),b}):Se(l)&&(c=[l]);const u=Bt({},s),f=Se(t.tag)||st(t.tag)?t.tag:Q1();return ks(f,u,c)}}const K3=Fs({name:"i18n-n",props:Bt({value:{type:Number,required:!0},format:{type:[String,Object]}},_h),setup(t,e){const n=t.i18n||gh({useScope:t.scope,__useComponent:!0});return e0(t,e,Y1,(...i)=>n[uf](...i))}}),Rm=K3,Z3=Fs({name:"i18n-d",props:Bt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},_h),setup(t,e){const n=t.i18n||gh({useScope:t.scope,__useComponent:!0});return e0(t,e,X1,(...i)=>n[cf](...i))}}),Pm=Z3;function J3(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Q3(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw Ot(Pt.UNEXPECTED_ERROR);const u=J3(t,o.$),f=Lm(c);return[Reflect.apply(u.t,u,[...Im(f)]),u]};return{created:(a,o)=>{const[l,c]=e(o);Jo&&t.global===c&&(a.__i18nWatcher=vi(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Jo&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Lm(o);a.textContent=Reflect.apply(l.t,l,[...Im(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Lm(t){if(Se(t))return{path:t};if(Ge(t)){if(!("path"in t))throw Ot(Pt.REQUIRED_VALUE,"path");return t}else throw Ot(Pt.INVALID_VALUE)}function Im(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Se(n)&&(a.locale=n),Rt(r)&&(a.plural=r),Rt(s)&&(a.plural=s),[e,o,a]}function eP(t,e,...n){const i=Ge(n[0])?n[0]:{},r=!!i.useI18nComponentName;(je(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Cm.name,"I18nT"].forEach(a=>t.component(a,Cm)),[Rm.name,"I18nN"].forEach(a=>t.component(a,Rm)),[Pm.name,"I18nD"].forEach(a=>t.component(a,Pm))),t.directive("t",Q3(e))}function tP(t,e,n){return{beforeCreate(){const i=Ms();if(!i)throw Ot(Pt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Dm(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=hf(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Dm(t,r);else{this.$i18n=hf({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&J1(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Ms();if(!i)throw Ot(Pt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Dm(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[q1](e.pluralizationRules||t.pluralizationRules);const n=Ll(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const nP=sr("global-vue-i18n");function iP(t={},e){const n=__VUE_I18N_LEGACY_API__&&je(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=je(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[a,o]=rP(t,n),l=sr("");function c(h){return s.get(h)||null}function u(h,p){s.set(h,p)}function f(h){s.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(p,...S){if(p.__VUE_I18N_SYMBOL__=l,p.provide(p.__VUE_I18N_SYMBOL__,h),Ge(S[0])){const d=S[0];h.__composerExtend=d.__composerExtend,h.__vueI18nExtend=d.__vueI18nExtend}let b=null;!n&&i&&(b=dP(p,h.global)),__VUE_I18N_FULL_INSTALL__&&eP(p,h,...S),__VUE_I18N_LEGACY_API__&&n&&p.mixin(tP(o,o.__composer,h));const _=p.unmount;p.unmount=()=>{b&&b(),h.dispose(),_()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return h}}function gh(t={}){const e=Ms();if(e==null)throw Ot(Pt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ot(Pt.NOT_INSTALLED);const n=sP(e),i=oP(n),r=Z1(e),s=aP(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Ot(Pt.NOT_AVAILABLE_IN_LEGACY_MODE);return fP(e,s,i,t)}if(s==="global")return J1(i,t,r),i;if(s==="parent"){let l=lP(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Bt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=mh(l),a.__composerExtend&&(o[ff]=a.__composerExtend(o)),uP(a,e,o),a.__setInstance(e,o)}return o}function rP(t,e,n){const i=y0();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>hf(t)):i.run(()=>mh(t));if(r==null)throw Ot(Pt.UNEXPECTED_ERROR);return[i,r]}}function sP(t){{const e=Tn(t.isCE?nP:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ot(t.isCE?Pt.NOT_INSTALLED_WITH_PROVIDE:Pt.UNEXPECTED_ERROR);return e}}function aP(t,e){return Cl(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function oP(t){return t.mode==="composition"?t.global:t.global.__composer}function lP(t,e,n=!1){let i=null;const r=e.root;let s=cP(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[K1]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function cP(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function uP(t,e,n){dl(()=>{},e),Rf(()=>{const i=n;t.__deleteInstance(e);const r=i[ff];r&&(r(),delete i[ff])},e)}function fP(t,e,n,i={}){const r=e==="local",s=Af(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Ot(Pt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=je(i.inheritLocale)?i.inheritLocale:!Se(i.locale),o=Sr(!r||a?n.locale.value:Se(i.locale)?i.locale:Os),l=Sr(!r||a?n.fallbackLocale.value:Se(i.fallbackLocale)||gt(i.fallbackLocale)||Ge(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Sr(Ll(o.value,i)),u=Sr(Ge(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),f=Sr(Ge(i.numberFormats)?i.numberFormats:{[o.value]:{}}),h=r?n.missingWarn:je(i.missingWarn)||Qi(i.missingWarn)?i.missingWarn:!0,p=r?n.fallbackWarn:je(i.fallbackWarn)||Qi(i.fallbackWarn)?i.fallbackWarn:!0,S=r?n.fallbackRoot:je(i.fallbackRoot)?i.fallbackRoot:!0,b=!!i.fallbackFormat,_=dt(i.missing)?i.missing:null,d=dt(i.postTranslation)?i.postTranslation:null,M=r?n.warnHtmlMessage:je(i.warnHtmlMessage)?i.warnHtmlMessage:!0,g=!!i.escapeParameter,x=r?n.modifiers:Ge(i.modifiers)?i.modifiers:{},R=i.pluralRules||r&&n.pluralRules;function T(){return[o.value,l.value,c.value,u.value,f.value]}const w=rt({get:()=>s.value?s.value.locale.value:o.value,set:P=>{s.value&&(s.value.locale.value=P),o.value=P}}),I=rt({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:P=>{s.value&&(s.value.fallbackLocale.value=P),l.value=P}}),N=rt(()=>s.value?s.value.messages.value:c.value),E=rt(()=>u.value),A=rt(()=>f.value);function D(){return s.value?s.value.getPostTranslationHandler():d}function U(P){s.value&&s.value.setPostTranslationHandler(P)}function X(){return s.value?s.value.getMissingHandler():_}function ne(P){s.value&&s.value.setMissingHandler(P)}function W(P){return T(),P()}function te(...P){return s.value?W(()=>Reflect.apply(s.value.t,null,[...P])):W(()=>"")}function $(...P){return s.value?Reflect.apply(s.value.rt,null,[...P]):""}function pe(...P){return s.value?W(()=>Reflect.apply(s.value.d,null,[...P])):W(()=>"")}function me(...P){return s.value?W(()=>Reflect.apply(s.value.n,null,[...P])):W(()=>"")}function de(P){return s.value?s.value.tm(P):{}}function we(P,k){return s.value?s.value.te(P,k):!1}function Pe(P){return s.value?s.value.getLocaleMessage(P):{}}function ee(P,k){s.value&&(s.value.setLocaleMessage(P,k),c.value[P]=k)}function ue(P,k){s.value&&s.value.mergeLocaleMessage(P,k)}function _e(P){return s.value?s.value.getDateTimeFormat(P):{}}function H(P,k){s.value&&(s.value.setDateTimeFormat(P,k),u.value[P]=k)}function ae(P,k){s.value&&s.value.mergeDateTimeFormat(P,k)}function ie(P){return s.value?s.value.getNumberFormat(P):{}}function fe(P,k){s.value&&(s.value.setNumberFormat(P,k),f.value[P]=k)}function Me(P,k){s.value&&s.value.mergeNumberFormat(P,k)}const ye={get id(){return s.value?s.value.id:-1},locale:w,fallbackLocale:I,messages:N,datetimeFormats:E,numberFormats:A,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(P){s.value&&(s.value.inheritLocale=P)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:x},get pluralRules(){return s.value?s.value.pluralRules:R},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:h},set missingWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackWarn(){return s.value?s.value.fallbackWarn:p},set fallbackWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackRoot(){return s.value?s.value.fallbackRoot:S},set fallbackRoot(P){s.value&&(s.value.fallbackRoot=P)},get fallbackFormat(){return s.value?s.value.fallbackFormat:b},set fallbackFormat(P){s.value&&(s.value.fallbackFormat=P)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:M},set warnHtmlMessage(P){s.value&&(s.value.warnHtmlMessage=P)},get escapeParameter(){return s.value?s.value.escapeParameter:g},set escapeParameter(P){s.value&&(s.value.escapeParameter=P)},t:te,getPostTranslationHandler:D,setPostTranslationHandler:U,getMissingHandler:X,setMissingHandler:ne,rt:$,d:pe,n:me,tm:de,te:we,getLocaleMessage:Pe,setLocaleMessage:ee,mergeLocaleMessage:ue,getDateTimeFormat:_e,setDateTimeFormat:H,mergeDateTimeFormat:ae,getNumberFormat:ie,setNumberFormat:fe,mergeNumberFormat:Me};function y(P){P.locale.value=o.value,P.fallbackLocale.value=l.value,Object.keys(c.value).forEach(k=>{P.mergeLocaleMessage(k,c.value[k])}),Object.keys(u.value).forEach(k=>{P.mergeDateTimeFormat(k,u.value[k])}),Object.keys(f.value).forEach(k=>{P.mergeNumberFormat(k,f.value[k])}),P.escapeParameter=g,P.fallbackFormat=b,P.fallbackRoot=S,P.fallbackWarn=p,P.missingWarn=h,P.warnHtmlMessage=M}return M_(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Ot(Pt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const P=s.value=t.proxy.$i18n.__composer;e==="global"?(o.value=P.locale.value,l.value=P.fallbackLocale.value,c.value=P.messages.value,u.value=P.datetimeFormats.value,f.value=P.numberFormats.value):r&&y(P)}),ye}const hP=["locale","fallbackLocale","availableLocales"],Nm=["t","rt","d","n","tm","te"];function dP(t,e){const n=Object.create(null);return hP.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Ot(Pt.UNEXPECTED_ERROR);const a=kt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,Nm.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Ot(Pt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Nm.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}G3();__INTLIFY_JIT_COMPILATION__?dm(F3):dm(U3);w3(l3);C3(O1);if(__INTLIFY_PROD_DEVTOOLS__){const t=di();t.__INTLIFY__=!0,g3(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const pP={toggle:"Eng"},mP={ym:"Yamashita Manato",passage:"I'm Manato Yamashita. studying computer science at the Department of Informatics, at Tokyo City University. My hobbies are create digital contents(ex: illustration, animation, web and so on...) and reading. my favorite writer is Sayaka Murata.This site is for my portfolio named MANAPURAZA.COM from Manato(my name) + Tamaplaza(the station near my living) I love all of creative activities! and banana.",name:"Name","name-co":"Manato Yamashita",sex:"Sex / Gneder","sex-co":"Man",birth:"Birthday","birth-co":"2002/04/17",country:"Country","country-co":"Japan",live:"Live-in","live-co":"Kanagawa | Tokyo | Kumamoto",study:"studying","study-co":"Tokyo City University, Department of Informatics / System Engineering",research:"Research","research-co":"Information Security",like:"Like","like-co":"Banana"},_P={15:"Entered TATEISHI Junior High School",18:"Entered HONJO High School",21:"Entered Tokyo City University",22:"Entered Edith Cowan University",23:"Live in Saginuma, Kawasaki","02":"Born in Kumamoto","02-de":"2002, Kumamoto / Japan","03":"Moved to Tokyo","03-de":"2003~, Tokyo / Japan","15-de":"2015 ~ 2018, Tokyo / Japan","18-de":"2018 ~ 2021, Tokyo / Japan","21-de":"2021 ~, Tokyo / Japan","21-2":"Live in Miyazakidai, Kawasaki","21-2-de":"2021 ~, Kawasaki / Japan","22-de":"2022 ~ 2023, Perth, WA / Australia","23-de":"2023 ~, Kawasaki / Japan","23-2":"Started to research about Information Security at TCU Seki lab.","23-2-de":"2023 ~, Yokohama / Japan"},gP={graphics:{1:{title:"Pixiv",description:"A portfolio compiling my graphic design and illustration works."},2:{title:"Web Portfolio Showcasing Overall Creative Works",description:"A web-based portfolio that gathers all my creative works."}},prog:{1:{title:"manapuraza.com",description:"A portfolio site showcasing some of my creative works during my student years, created during a one-month period as part of a four-month internship at an advertising production company. Built with Vue.js 3 and Three.js. responsive CI/CD (This site)"},2:{title:"DC-chan AI",description:"An AI chat for DC-chan, the character of the Digital Content Research Society. Built with Next.js, GSAP, and ChatGPT API."},3:{title:"NUMERON - Logical Number Guessing Game",description:"A number guessing game developed during my first year of university as practice for HTML, CSS, and Javascript, created in collaboration with an acquaintance."},4:{title:"AmauSyrup.net - Unofficial Fan Site for AmauSyrup",description:"An unofficial website for a Vtuber featuring a blog function utilizing the Notion API. Built with Next.js with Typescript and GSAP's scrollTrigger."},5:{title:"Tokyo City University Asocciation of Clubs/Circles",description:"A site I created while serving as the president of the Tokyo City University Federation of Student Clubs. It uses a CMS. I was responsible for development, maintenance, and operation. Deployed on the university's shared WWW server."},6:{title:"Jamstack Blog Test",description:"A test website for a blog built with Jamstack (Nuxt 3 + microCMS)."},7:{title:"Chaintence",description:"A WebApp for creating email texts by connecting templates, developed during a two-day hackathon. Built with NuxtJS and microCMS. I was responsible for frontend development and presentation."},8:{title:"DC-chan Twitter BOT",description:"A Twitter BOT for the official character of my club, DC-chan. Built with Google Apps Script (GAS) to interact with the Twitter API. Currently inactive due to the API becoming paid."},9:{title:"Seki Laboratory (TCU Information Security Laboratory)",description:"The website for the lab, built with Nuxt.js 3 and microCMS."},10:{title:"Information Security Quiz",description:"A quiz app created to introduce the lab. Built with Vue.js 2 and deployed on Vercel."},11:{title:"KillerDie 1st Anniversary",description:"The official site for the 1st anniversary of a university's unofficial group. Built with Vue.js 3."},12:{title:"Population Transition Graph by Prefecture SPA",description:"A web app for testing data visualization. Built with Highcharts.js and Next.js, with Jest and Github Workflow implemented."},13:{title:"wtm - Outing Support App for Android",description:"An Android app developed by a team, 4members. Built with Android Studio (Java + Gradle). I was responsible for leadership, development, and design."},14:{title:"Down Under Mountain - Australia Study Abroad Blog",description:"A blog I wrote during my four-month study abroad at Edith Cowan University in Western Australia in 2023. Built with WordPress."},15:{title:"WAGIRI!! - Japanese Style Flick Game",description:"A Japanese-style flick game that won the grand prize in a hackathon hosted by Progate. Built with Next.js (Typescript) and Go, supporting online battles. I was responsible for frontend, design, and animations."},16:{title:"HPB to me! 2023 - 21 Years Old, With a Fist.",description:"A joke site I created to celebrate my own birthday. Music and voice acting were created by acquaintances. Presumptuous."},17:{title:"Tokyo City University Animation Studio",description:"A site for promoting an animation co-produced with Setagaya City, where I am the general director. Built with Astro.js and MDX."},18:{title:"Tokyo City University Student Organization",description:"The official site of the Student Union Headquarters. Built with HTML, CSS, Javascript, and GAS."}},video:{1:{title:"Personal YouTube Channel 2",description:"A channel where I uploaded Yukkuri videos during high school. Currently in use after the main channel was banned."},2:{title:"TCU-DC (Club) YouTube Channel",description:"A YouTube channel showcasing the activities of the club. Some of the videos were not created by me."}}},vP={404:{title:"404",notfound:"Not Found",message:"The page you are looking for does not exist."},navbar:pP,about:mP,his:_P,works:gP},xP={toggle:"日本語"},yP={ym:"山下 真和都（ヤマシタマナト）",passage:"こんにちは。「山下真和都（ヤマシタマナト）」と言います。東京都市大学のメディア情報学部の情報システム学科でコンピュータサイエンスを学んでいます。趣味はデジタルコンテンツの制作（イラスト、アニメーション、ウェブなど）と読書です。お気に入りの作家は村田沙耶香です！このサイトは、私の名前の「マナト」と、私の住んでいる場所の近くの駅「たまプラーザ」から名付けたポートフォリオサイト「MANAPURAZA.COM」です。クリエイティブな活動が大好きです！そしてバナナも",name:"名前","name-co":"山下マナト",sex:"性別","sex-co":"男",birth:"誕生日","birth-co":"2002/04/17",country:"国籍","country-co":"日本国",live:"居住地","live-co":"神奈川県 | 東京都 | 熊本県",study:"専攻","study-co":"東京都市大学 メディア情報学部 情報システム学科",research:"研究","research-co":"情報セキュリティ",like:"好きなモノ","like-co":"バナナ"},EP={15:"葛飾区立立石中学校に入学",18:"東京都立本所高等学校に入学",21:"東京都市大学に入学",22:"豪Edith Cowan Universityに留学",23:"神奈川県川崎市の鷺沼に住む","02":"熊本県で生まれる","02-de":"2002年、熊本 / 日本","03":"東京都に引っ越す","03-de":"2003年~、東京 / 日本","15-de":"2015年 〜 2018年、東京 / 日本","18-de":"2018年 〜 2021年、東京 / 日本","21-de":"2021年以降、東京 / 日本","21-2":"神奈川県川崎市の宮崎台に住む","21-2-de":"2021年以降、川崎 / 日本","22-de":"2022年 〜 2023年、パース、WA / オーストラリア","23-de":"2023年以降、川崎 / 日本","23-2":"東京都市大学関研究室で情報セキュリティについて研究を始める","23-2-de":"2023年以降、横浜 / 日本"},SP={graphics:{1:{title:"Pixiv",description:"自分のグラフィックデザインとイラストの作品をまとめたポートフォリオ。"},2:{title:"クリエイティブ全般を表示するWebポートフォリオウェブサイト",description:"自分のクリエイティブな作品全般を集めたウェブサイト形式のポートフォリオ。"}},prog:{1:{title:"manapuraza.com",description:"広告制作会社の4ヶ月のインターンの1ヶ月で作った、学生時代のクリエイティブの一部を紹介したポートフォリオサイト。Vue.js3とThree.jsで書かれています。（当サイト）"},2:{title:"でじこんちゃんAI",description:"デジタルコンテンツ研究会のキャラクターであるでじこんちゃんのAIチャット。Next.js, GSAP, ChatGPT APIを使用しています。"},3:{title:"NUMERON - 論理数字あてゲーム",description:"大学1年生の時にHTML,CSS,Javascriptの練習のために知り合いと開発した数字当てゲームです。"},4:{title:"AmauSyrup.net - 天羽しろっぷ非公式ファンサイト",description:"Vtuberの非公式ウェブサイトで、Notion APIを利用したブログ機能を搭載。Next.js with TypescriptとGSAPのscrollTriggerを使っています。"},5:{title:"東京都市大学 同好会連合",description:"東京都市大学同好会連合の会長をしていた時に作ったサイトCMSを使用しています。開発と保守、運用を担当していました。大学の共用WWWサーバにデプロイ"},6:{title:"Jamstack Blog test",description:"Jamstack（Nuxt3 + microCMS）で構築されたブログのテストウェブサイト"},7:{title:"Chaintence",description:"2日間の技育ハッカソンで開発した、テンプレートをつなげてメール文を作成するWebApp。NuxtJSとmicroCMSで構築されています。私はフロントエンドと発表を担当しました。"},8:{title:"でじこんちゃん Twitter BOT",description:"私のサークルの公式キャラクターであるでじこんちゃんのTwitter BOT。GoogleAppsScript(GAS)でTwitterのAPIを叩いています。APIの有料化に伴い現在は動作させていません。"},9:{title:"関研究室（TCU情報セキュリティ研究室）",description:"研究室のWebサイトNuxt.js3とmicroCMSで構築"},10:{title:"情報セキュリティクイズ",description:"研究室の紹介のために作ったクイズアプリVue.js2で構築。Vecelでデプロイ"},11:{title:"キラキラ大学生研究会 1周年記念",description:"大学の非公認団体の1周年公式サイト。Vue.js3で構築"},12:{title:"都道府県別総人口推移グラフSPA",description:"データビジュアライゼーションをテストするためのWebアプリ。Highcharts.jsとNext.jsで構築。テスト(Jext)とGithubWorkflowも導入"},13:{title:"wtm - おでかけ支援アプリ",description:"4人のチームで開発したAndroidアプリ。AndroidStudio(Java * Gradle)で開発。私はリーダと開発、デザインを担当しました。"},14:{title:"Down Under Mountain - オーストラリア留学ブログ",description:"2023年に4ヶ月間西オーストラリアのEdith Cowan Universityに留学したので、その時に書いたブログ。WordPressで書かれています。"},15:{title:"WAGIRI!! - 和風フリックゲーム",description:"Progate主催のハッカソンでグランプリを受賞した和風フリックゲーム。Next.js(Typescript), Goで構築。オンライン対戦にも対応しています。私はフロントエンドとデザイン、アニメーションを担当しました。"},16:{title:"HPB to me! 2023 - 21歳、拳で。",description:"自分の誕生日を祝うために作ったジョークサイト。音楽や声優は知り合いに作ってもらいました。おこがましい"},17:{title:"都市大アニメーション",description:"私が総監督として、世田谷区とアニメを共同制作しているので、その広報用のサイトです。Astro.jsとMDXで構築。"},18:{title:"東京都市大学 学生団体連合本部",description:"学生団体連合本部の公式サイトです。HTML,CSS,Javascript,GASで構築。"}},video:{1:{title:"個人Youtubeチャンネル2",description:"高校生の頃にゆっくり動画をアップロードしていたチャンネル。メインチャンネルがBANされてしまったため、現在使用しています。"},2:{title:"TCU-DC(サークル)のYouTubeチャンネル",description:"サークルの活動を紹介するYouTubeチャンネル。一部の作品は私が作った映像ではないものも含まれます。"}}},MP={404:{title:"404",notfound:"ページが見つかりません",message:"URLが間違っているか、ページが削除された可能性があります。あるいはリンク切れとか。"},navbar:xP,about:yP,his:EP,works:SP};M1.add(QC,JC,pR,mR,hR,dR,fR);const t0=iP({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:vP,ja:MP}});M1.add(ZC);const Va=Of(jy),vh=Of(uE),n0=Of(cw);Va.component("fa",w1);Va.component("font-awesome-icon",w1);Va.use(kf);vh.use(kf);n0.use(kf);Va.use(t0);vh.use(t0);Va.mount("#app");vh.mount("#navbar");n0.mount("#back");export{En as F,Oa as _,Lf as a,Ss as b,Da as c,bP as d,Ct as e,yt as f,ps as g,Ms as h,Kc as i,Vv as j,Xv as k,al as n,dl as o,Sr as r,Gm as t,gh as u};
//# sourceMappingURL=index-1804eb75.js.map
