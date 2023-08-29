(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Oa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const le={},qt=[],He=()=>{},Al=()=>!1,Cl=/^on[^a-z]/,vr=e=>Cl.test(e),Sa=e=>e.startsWith("onUpdate:"),pe=Object.assign,Ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pl=Object.prototype.hasOwnProperty,V=(e,t)=>Pl.call(e,t),B=Array.isArray,hn=e=>br(e)==="[object Map]",Ol=e=>br(e)==="[object Set]",Y=e=>typeof e=="function",_e=e=>typeof e=="string",Ia=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Wo=e=>ue(e)&&Y(e.then)&&Y(e.catch),Sl=Object.prototype.toString,br=e=>Sl.call(e),Tl=e=>br(e).slice(8,-1),Il=e=>br(e)==="[object Object]",Ra=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tr=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rl=/-(\w)/g,Ge=yr(e=>e.replace(Rl,(t,n)=>n?n.toUpperCase():"")),Nl=/\B([A-Z])/g,nn=yr(e=>e.replace(Nl,"-$1").toLowerCase()),_r=yr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lr=yr(e=>e?`on${_r(e)}`:""),En=(e,t)=>!Object.is(e,t),Fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},lr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ml=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ll=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let bi;const Jr=()=>bi||(bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Na(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=_e(r)?zl(r):Na(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(_e(e))return e;if(ue(e))return e}}const Fl=/;(?![^(]*\))/g,jl=/:([^]+)/,Dl=/\/\*[^]*?\*\//g;function zl(e){const t={};return e.replace(Dl,"").split(Fl).forEach(n=>{if(n){const r=n.split(jl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ma(e){let t="";if(_e(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Ma(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hl=Oa($l);function Yo(e){return!!e||e===""}let Fe;class Bl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ul(e,t=Fe){t&&t.active&&t.effects.push(e)}function Wl(){return Fe}const La=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ko=e=>(e.w&_t)>0,qo=e=>(e.n&_t)>0,Yl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_t},Kl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ko(a)&&!qo(a)?a.delete(e):t[n++]=a,a.w&=~_t,a.n&=~_t}t.length=n}},Zr=new WeakMap;let fn=0,_t=1;const ea=30;let je;const Mt=Symbol(""),ta=Symbol("");class Fa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ul(this,r)}run(){if(!this.active)return this.fn();let t=je,n=bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=je,je=this,bt=!0,_t=1<<++fn,fn<=ea?Yl(this):yi(this),this.fn()}finally{fn<=ea&&Kl(this),_t=1<<--fn,je=this.parent,bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(yi(this),this.onStop&&this.onStop(),this.active=!1)}}function yi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let bt=!0;const Vo=[];function rn(){Vo.push(bt),bt=!1}function an(){const e=Vo.pop();bt=e===void 0?!0:e}function Oe(e,t,n){if(bt&&je){let r=Zr.get(e);r||Zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=La()),Xo(a)}}function Xo(e,t){let n=!1;fn<=ea?qo(e)||(e.n|=_t,n=!Ko(e)):n=!e.has(je),n&&(e.add(je),je.deps.push(e))}function rt(e,t,n,r,a,i){const o=Zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?Ra(n)&&s.push(o.get("length")):(s.push(o.get(Mt)),hn(e)&&s.push(o.get(ta)));break;case"delete":B(e)||(s.push(o.get(Mt)),hn(e)&&s.push(o.get(ta)));break;case"set":hn(e)&&s.push(o.get(Mt));break}if(s.length===1)s[0]&&na(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);na(La(l))}}function na(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&_i(r);for(const r of n)r.computed||_i(r)}function _i(e,t){(e!==je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ql=Oa("__proto__,__v_isRef,__isVue"),Go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ia)),Vl=ja(),Xl=ja(!1,!0),Gl=ja(!0),xi=Ql();function Ql(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){rn();const r=X(this)[t].apply(this,n);return an(),r}}),e}function Jl(e){const t=X(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function ja(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?pc:ts:t?es:Zo).get(r))return r;const o=B(r);if(!e){if(o&&V(xi,a))return Reflect.get(xi,a,i);if(a==="hasOwnProperty")return Jl}const s=Reflect.get(r,a,i);return(Ia(a)?Go.has(a):ql(a))||(e||Oe(r,"get",a),t)?s:Ee(s)?o&&Ra(a)?s:s.value:ue(s)?e?ns(s):Ln(s):s}}const Zl=Qo(),ec=Qo(!0);function Qo(e=!1){return function(n,r,a,i){let o=n[r];if(Qt(o)&&Ee(o)&&!Ee(a))return!1;if(!e&&(!cr(a)&&!Qt(a)&&(o=X(o),a=X(a)),!B(n)&&Ee(o)&&!Ee(a)))return o.value=a,!0;const s=B(n)&&Ra(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?En(a,o)&&rt(n,"set",r,a):rt(n,"add",r,a)),l}}function tc(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&rt(e,"delete",t,void 0),r}function nc(e,t){const n=Reflect.has(e,t);return(!Ia(t)||!Go.has(t))&&Oe(e,"has",t),n}function rc(e){return Oe(e,"iterate",B(e)?"length":Mt),Reflect.ownKeys(e)}const Jo={get:Vl,set:Zl,deleteProperty:tc,has:nc,ownKeys:rc},ac={get:Gl,set(e,t){return!0},deleteProperty(e,t){return!0}},ic=pe({},Jo,{get:Xl,set:ec}),Da=e=>e,xr=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Oe(a,"get",t),Oe(a,"get",i));const{has:o}=xr(a),s=r?Da:n?Ha:kn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Oe(r,"has",e),Oe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Bn(e,t=!1){return e=e.__v_raw,!t&&Oe(X(e),"iterate",Mt),Reflect.get(e,"size",e)}function wi(e){e=X(e);const t=X(this);return xr(t).has.call(t,e)||(t.add(e),rt(t,"add",e,e)),this}function Ei(e,t){t=X(t);const n=X(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?En(t,o)&&rt(n,"set",e,t):rt(n,"add",e,t),this}function ki(e){const t=X(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&rt(t,"delete",e,void 0),i}function Ai(){const e=X(this),t=e.size!==0,n=e.clear();return t&&rt(e,"clear",void 0,void 0),n}function Un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Da:e?Ha:kn;return!e&&Oe(s,"iterate",Mt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Wn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=hn(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Da:t?Ha:kn;return!t&&Oe(i,"iterate",l?ta:Mt),{next(){const{value:u,done:p}=f.next();return p?{value:u,done:p}:{value:s?[c(u[0]),c(u[1])]:c(u),done:p}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function oc(){const e={get(i){return $n(this,i)},get size(){return Bn(this)},has:Hn,add:wi,set:Ei,delete:ki,clear:Ai,forEach:Un(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return Bn(this)},has:Hn,add:wi,set:Ei,delete:ki,clear:Ai,forEach:Un(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Hn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Un(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Hn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),t[i]=Wn(i,!1,!0),r[i]=Wn(i,!0,!0)}),[e,n,t,r]}const[sc,lc,cc,fc]=oc();function za(e,t){const n=t?e?fc:cc:e?lc:sc;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const uc={get:za(!1,!1)},dc={get:za(!1,!0)},mc={get:za(!0,!1)},Zo=new WeakMap,es=new WeakMap,ts=new WeakMap,pc=new WeakMap;function hc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gc(e){return e.__v_skip||!Object.isExtensible(e)?0:hc(Tl(e))}function Ln(e){return Qt(e)?e:$a(e,!1,Jo,uc,Zo)}function vc(e){return $a(e,!1,ic,dc,es)}function ns(e){return $a(e,!0,ac,mc,ts)}function $a(e,t,n,r,a){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=gc(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Vt(e){return Qt(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qt(e){return!!(e&&e.__v_isReadonly)}function cr(e){return!!(e&&e.__v_isShallow)}function rs(e){return Vt(e)||Qt(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function as(e){return lr(e,"__v_skip",!0),e}const kn=e=>ue(e)?Ln(e):e,Ha=e=>ue(e)?ns(e):e;function is(e){bt&&je&&(e=X(e),Xo(e.dep||(e.dep=La())))}function os(e,t){e=X(e);const n=e.dep;n&&na(n)}function Ee(e){return!!(e&&e.__v_isRef===!0)}function bc(e){return ss(e,!1)}function yc(e){return ss(e,!0)}function ss(e,t){return Ee(e)?e:new _c(e,t)}class _c{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:kn(t)}get value(){return is(this),this._value}set value(t){const n=this.__v_isShallow||cr(t)||Qt(t);t=n?t:X(t),En(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kn(t),os(this))}}function De(e){return Ee(e)?e.value:e}const xc={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Ee(a)&&!Ee(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ls(e){return Vt(e)?e:new Proxy(e,xc)}class wc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fa(t,()=>{this._dirty||(this._dirty=!0,os(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return is(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ec(e,t,n=!1){let r,a;const i=Y(e);return i?(r=e,a=He):(r=e.get,a=e.set),new wc(r,a,i||!a,n)}function yt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){wr(i,t,n)}return a}function Me(e,t,n,r){if(Y(e)){const i=yt(e,t,n,r);return i&&Wo(i)&&i.catch(o=>{wr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function wr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){yt(l,null,10,[e,o,s]);return}}kc(e,n,a,r)}function kc(e,t,n,r=!0){console.error(e)}let An=!1,ra=!1;const we=[];let Ve=0;const Xt=[];let et=null,St=0;const cs=Promise.resolve();let Ba=null;function fs(e){const t=Ba||cs;return e?t.then(this?e.bind(this):e):t}function Ac(e){let t=Ve+1,n=we.length;for(;t<n;){const r=t+n>>>1;Cn(we[r])<e?t=r+1:n=r}return t}function Ua(e){(!we.length||!we.includes(e,An&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?we.push(e):we.splice(Ac(e.id),0,e),us())}function us(){!An&&!ra&&(ra=!0,Ba=cs.then(ms))}function Cc(e){const t=we.indexOf(e);t>Ve&&we.splice(t,1)}function Pc(e){B(e)?Xt.push(...e):(!et||!et.includes(e,e.allowRecurse?St+1:St))&&Xt.push(e),us()}function Ci(e,t=An?Ve+1:0){for(;t<we.length;t++){const n=we[t];n&&n.pre&&(we.splice(t,1),t--,n())}}function ds(e){if(Xt.length){const t=[...new Set(Xt)];if(Xt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>Cn(n)-Cn(r)),St=0;St<et.length;St++)et[St]();et=null,St=0}}const Cn=e=>e.id==null?1/0:e.id,Oc=(e,t)=>{const n=Cn(e)-Cn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ms(e){ra=!1,An=!0,we.sort(Oc);const t=He;try{for(Ve=0;Ve<we.length;Ve++){const n=we[Ve];n&&n.active!==!1&&yt(n,null,14)}}finally{Ve=0,we.length=0,ds(),An=!1,Ba=null,(we.length||Xt.length)&&ms()}}function Sc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[c]||le;p&&(a=n.map(g=>_e(g)?g.trim():g)),u&&(a=n.map(Ml))}let s,l=r[s=Lr(t)]||r[s=Lr(Ge(t))];!l&&i&&(l=r[s=Lr(nn(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function ps(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!Y(e)){const l=f=>{const c=ps(f,t,!0);c&&(s=!0,pe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ue(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):pe(o,i),ue(e)&&r.set(e,o),o)}function Er(e,t){return!e||!vr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,nn(t))||V(e,t))}let Ne=null,kr=null;function fr(e){const t=Ne;return Ne=e,kr=e&&e.type.__scopeId||null,t}function Tc(e){kr=e}function Ic(){kr=null}function Bt(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Di(-1);const i=fr(t);let o;try{o=e(...a)}finally{fr(i),r._d&&Di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:u,data:p,setupState:g,ctx:k,inheritAttrs:A}=e;let M,b;const _=fr(e);try{if(n.shapeFlag&4){const P=a||r;M=qe(c.call(P,P,u,i,g,p,k)),b=l}else{const P=t;M=qe(P.length>1?P(i,{attrs:l,slots:s,emit:f}):P(i,null)),b=t.props?l:Rc(l)}}catch(P){bn.length=0,wr(P,e,1),M=fe(nt)}let R=M;if(b&&A!==!1){const P=Object.keys(b),{shapeFlag:H}=R;P.length&&H&7&&(o&&P.some(Sa)&&(b=Nc(b,o)),R=xt(R,b))}return n.dirs&&(R=xt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),M=R,fr(_),M}const Rc=e=>{let t;for(const n in e)(n==="class"||n==="style"||vr(n))&&((t||(t={}))[n]=e[n]);return t},Nc=(e,t)=>{const n={};for(const r in e)(!Sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Mc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Pi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const p=c[u];if(o[p]!==r[p]&&!Er(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Pi(r,o,f):!0:!!o;return!1}function Pi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function Lc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Fc=e=>e.__isSuspense;function jc(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Pc(e)}const Yn={};function gn(e,t,n){return hs(e,t,n)}function hs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=le){var s;const l=Wl()===((s=be)==null?void 0:s.scope)?be:null;let f,c=!1,u=!1;if(Ee(e)?(f=()=>e.value,c=cr(e)):Vt(e)?(f=()=>e,r=!0):B(e)?(u=!0,c=e.some(P=>Vt(P)||cr(P)),f=()=>e.map(P=>{if(Ee(P))return P.value;if(Vt(P))return Wt(P);if(Y(P))return yt(P,l,2)})):Y(e)?t?f=()=>yt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Me(e,l,3,[g])}:f=He,t&&r){const P=f;f=()=>Wt(P())}let p,g=P=>{p=_.onStop=()=>{yt(P,l,4)}},k;if(On)if(g=He,t?n&&Me(t,l,3,[f(),u?[]:void 0,g]):f(),a==="sync"){const P=Ff();k=P.__watcherHandles||(P.__watcherHandles=[])}else return He;let A=u?new Array(e.length).fill(Yn):Yn;const M=()=>{if(_.active)if(t){const P=_.run();(r||c||(u?P.some((H,G)=>En(H,A[G])):En(P,A)))&&(p&&p(),Me(t,l,3,[P,A===Yn?void 0:u&&A[0]===Yn?[]:A,g]),A=P)}else _.run()};M.allowRecurse=!!t;let b;a==="sync"?b=M:a==="post"?b=()=>Pe(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),b=()=>Ua(M));const _=new Fa(f,b);t?n?M():A=_.run():a==="post"?Pe(_.run.bind(_),l&&l.suspense):_.run();const R=()=>{_.stop(),l&&l.scope&&Ta(l.scope.effects,_)};return k&&k.push(R),R}function Dc(e,t,n){const r=this.proxy,a=_e(e)?e.includes(".")?gs(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=be;Jt(this);const s=hs(a,i.bind(r),n);return o?Jt(o):Lt(),s}function gs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Wt(e,t){if(!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))Wt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Wt(e[n],t);else if(Ol(e)||hn(e))e.forEach(n=>{Wt(n,t)});else if(Il(e))for(const n in e)Wt(e[n],t);return e}function At(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(rn(),Me(l,n,8,[e.el,s,e,t]),an())}}function zc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xs(()=>{e.isMounted=!0}),ws(()=>{e.isUnmounting=!0}),e}const Ie=[Function,Array],vs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},$c={name:"BaseTransition",props:vs,setup(e,{slots:t}){const n=Of(),r=zc();let a;return()=>{const i=t.default&&ys(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const A of i)if(A.type!==nt){o=A;break}}const s=X(e),{mode:l}=s;if(r.isLeaving)return Dr(o);const f=Oi(o);if(!f)return Dr(o);const c=aa(f,s,r,n);ia(f,c);const u=n.subTree,p=u&&Oi(u);let g=!1;const{getTransitionKey:k}=f.type;if(k){const A=k();a===void 0?a=A:A!==a&&(a=A,g=!0)}if(p&&p.type!==nt&&(!Tt(f,p)||g)){const A=aa(p,s,r,n);if(ia(p,A),l==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Dr(o);l==="in-out"&&f.type!==nt&&(A.delayLeave=(M,b,_)=>{const R=bs(r,p);R[String(p.key)]=p,M._leaveCb=()=>{b(),M._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=_})}return o}}},Hc=$c;function bs(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function aa(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:u,onLeave:p,onAfterLeave:g,onLeaveCancelled:k,onBeforeAppear:A,onAppear:M,onAfterAppear:b,onAppearCancelled:_}=t,R=String(e.key),P=bs(n,e),H=(U,q)=>{U&&Me(U,r,9,q)},G=(U,q)=>{const Q=q[1];H(U,q),B(U)?U.every(he=>he.length<=1)&&Q():U.length<=1&&Q()},ne={mode:i,persisted:o,beforeEnter(U){let q=s;if(!n.isMounted)if(a)q=A||s;else return;U._leaveCb&&U._leaveCb(!0);const Q=P[R];Q&&Tt(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),H(q,[U])},enter(U){let q=l,Q=f,he=c;if(!n.isMounted)if(a)q=M||l,Q=b||f,he=_||c;else return;let j=!1;const ee=U._enterCb=ke=>{j||(j=!0,ke?H(he,[U]):H(Q,[U]),ne.delayedLeave&&ne.delayedLeave(),U._enterCb=void 0)};q?G(q,[U,ee]):ee()},leave(U,q){const Q=String(e.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return q();H(u,[U]);let he=!1;const j=U._leaveCb=ee=>{he||(he=!0,q(),ee?H(k,[U]):H(g,[U]),U._leaveCb=void 0,P[Q]===e&&delete P[Q])};P[Q]=e,p?G(p,[U,j]):j()},clone(U){return aa(U,t,n,r)}};return ne}function Dr(e){if(Ar(e))return e=xt(e),e.children=null,e}function Oi(e){return Ar(e)?e.children?e.children[0]:void 0:e}function ia(e,t){e.shapeFlag&6&&e.component?ia(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ys(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&a++,r=r.concat(ys(o.children,t,s))):(t||o.type!==nt)&&r.push(s!=null?xt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Wa(e,t){return Y(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const nr=e=>!!e.type.__asyncLoader,Ar=e=>e.type.__isKeepAlive;function Bc(e,t){_s(e,"a",t)}function Uc(e,t){_s(e,"da",t)}function _s(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Cr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ar(a.parent.vnode)&&Wc(r,t,n,a),a=a.parent}}function Wc(e,t,n,r){const a=Cr(t,e,r,!0);Es(()=>{Ta(r[t],a)},n)}function Cr(e,t,n=be,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;rn(),Jt(n);const s=Me(t,n,e,o);return Lt(),an(),s});return r?a.unshift(i):a.push(i),i}}const st=e=>(t,n=be)=>(!On||e==="sp")&&Cr(e,(...r)=>t(...r),n),Yc=st("bm"),xs=st("m"),Kc=st("bu"),qc=st("u"),ws=st("bum"),Es=st("um"),Vc=st("sp"),Xc=st("rtg"),Gc=st("rtc");function Qc(e,t=be){Cr("ec",e,t)}const ks="components";function Jc(e,t){return ef(ks,e,!0,t)||e}const Zc=Symbol.for("v-ndc");function ef(e,t,n=!0,r=!1){const a=Ne||be;if(a){const i=a.type;if(e===ks){const s=Nf(i,!1);if(s&&(s===t||s===Ge(t)||s===_r(Ge(t))))return i}const o=Si(a[e]||i[e],t)||Si(a.appContext[e],t);return!o&&r?i:o}}function Si(e,t){return e&&(e[t]||e[Ge(t)]||e[_r(Ge(t))])}const oa=e=>e?Ms(e)?Qa(e)||e.proxy:oa(e.parent):null,vn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oa(e.parent),$root:e=>oa(e.root),$emit:e=>e.emit,$options:e=>Ya(e),$forceUpdate:e=>e.f||(e.f=()=>Ua(e.update)),$nextTick:e=>e.n||(e.n=fs.bind(e.proxy)),$watch:e=>Dc.bind(e)}),zr=(e,t)=>e!==le&&!e.__isScriptSetup&&V(e,t),tf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(zr(r,t))return o[t]=1,r[t];if(a!==le&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==le&&V(n,t))return o[t]=4,n[t];sa&&(o[t]=0)}}const c=vn[t];let u,p;if(c)return t==="$attrs"&&Oe(e,"get",t),c(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==le&&V(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return zr(a,t)?(a[t]=n,!0):r!==le&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==le&&V(e,o)||zr(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(vn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ti(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let sa=!0;function nf(e){const t=Ya(e),n=e.proxy,r=e.ctx;sa=!1,t.beforeCreate&&Ii(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:u,mounted:p,beforeUpdate:g,updated:k,activated:A,deactivated:M,beforeDestroy:b,beforeUnmount:_,destroyed:R,unmounted:P,render:H,renderTracked:G,renderTriggered:ne,errorCaptured:U,serverPrefetch:q,expose:Q,inheritAttrs:he,components:j,directives:ee,filters:ke}=t;if(f&&rf(f,r,null),o)for(const ae in o){const J=o[ae];Y(J)&&(r[ae]=J.bind(n))}if(a){const ae=a.call(n,n);ue(ae)&&(e.data=Ln(ae))}if(sa=!0,i)for(const ae in i){const J=i[ae],Je=Y(J)?J.bind(n,n):Y(J.get)?J.get.bind(n,n):He,ft=!Y(J)&&Y(J.set)?J.set.bind(n):He,Ue=ve({get:Je,set:ft});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Ce=>Ue.value=Ce})}if(s)for(const ae in s)As(s[ae],r,n,ae);if(l){const ae=Y(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(J=>{rr(J,ae[J])})}c&&Ii(c,e,"c");function de(ae,J){B(J)?J.forEach(Je=>ae(Je.bind(n))):J&&ae(J.bind(n))}if(de(Yc,u),de(xs,p),de(Kc,g),de(qc,k),de(Bc,A),de(Uc,M),de(Qc,U),de(Gc,G),de(Xc,ne),de(ws,_),de(Es,P),de(Vc,q),B(Q))if(Q.length){const ae=e.exposed||(e.exposed={});Q.forEach(J=>{Object.defineProperty(ae,J,{get:()=>n[J],set:Je=>n[J]=Je})})}else e.exposed||(e.exposed={});H&&e.render===He&&(e.render=H),he!=null&&(e.inheritAttrs=he),j&&(e.components=j),ee&&(e.directives=ee)}function rf(e,t,n=He){B(e)&&(e=la(e));for(const r in e){const a=e[r];let i;ue(a)?"default"in a?i=tt(a.from||r,a.default,!0):i=tt(a.from||r):i=tt(a),Ee(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ii(e,t,n){Me(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function As(e,t,n,r){const a=r.includes(".")?gs(n,r):()=>n[r];if(_e(e)){const i=t[e];Y(i)&&gn(a,i)}else if(Y(e))gn(a,e.bind(n));else if(ue(e))if(B(e))e.forEach(i=>As(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&gn(a,i,e)}}function Ya(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>ur(l,f,o,!0)),ur(l,t,o)),ue(t)&&i.set(t,l),l}function ur(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&ur(e,i,n,!0),a&&a.forEach(o=>ur(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=af[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const af={data:Ri,props:Ni,emits:Ni,methods:un,computed:un,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:un,directives:un,watch:sf,provide:Ri,inject:of};function Ri(e,t){return t?e?function(){return pe(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function of(e,t){return un(la(e),la(t))}function la(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?pe(Object.create(null),e,t):t}function Ni(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:pe(Object.create(null),Ti(e),Ti(t??{})):t}function sf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function Cs(){return{app:null,config:{isNativeTag:Al,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lf=0;function cf(e,t){return function(r,a=null){Y(r)||(r=pe({},r)),a!=null&&!ue(a)&&(a=null);const i=Cs(),o=new Set;let s=!1;const l=i.app={_uid:lf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:jf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&Y(f.install)?(o.add(f),f.install(l,...c)):Y(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,u){if(!s){const p=fe(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,u),s=!0,l._container=f,f.__vue_app__=l,Qa(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){dr=l;try{return f()}finally{dr=null}}};return l}}let dr=null;function rr(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function tt(e,t,n=!1){const r=be||Ne;if(r||dr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:dr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}function ff(e,t,n,r=!1){const a={},i={};lr(i,Or,1),e.propsDefaults=Object.create(null),Ps(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:vc(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function uf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let p=c[u];if(Er(e.emitsOptions,p))continue;const g=t[p];if(l)if(V(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const k=Ge(p);a[k]=ca(l,s,k,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{Ps(e,t,a,i)&&(f=!0);let c;for(const u in s)(!t||!V(t,u)&&((c=nn(u))===u||!V(t,c)))&&(l?n&&(n[u]!==void 0||n[c]!==void 0)&&(a[u]=ca(l,s,u,void 0,e,!0)):delete a[u]);if(i!==s)for(const u in i)(!t||!V(t,u))&&(delete i[u],f=!0)}f&&rt(e,"set","$attrs")}function Ps(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(tr(l))continue;const f=t[l];let c;a&&V(a,c=Ge(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Er(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=X(n),f=s||le;for(let c=0;c<i.length;c++){const u=i[c];n[u]=ca(a,l,u,f[u],e,!V(f,u))}}return o}function ca(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Jt(a),r=f[n]=l.call(null,t),Lt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}function Os(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!Y(e)){const c=u=>{l=!0;const[p,g]=Os(u,t,!0);pe(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ue(e)&&r.set(e,qt),qt;if(B(i))for(let c=0;c<i.length;c++){const u=Ge(i[c]);Mi(u)&&(o[u]=le)}else if(i)for(const c in i){const u=Ge(c);if(Mi(u)){const p=i[c],g=o[u]=B(p)||Y(p)?{type:p}:pe({},p);if(g){const k=ji(Boolean,g.type),A=ji(String,g.type);g[0]=k>-1,g[1]=A<0||k<A,(k>-1||V(g,"default"))&&s.push(u)}}}const f=[o,s];return ue(e)&&r.set(e,f),f}function Mi(e){return e[0]!=="$"}function Li(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Fi(e,t){return Li(e)===Li(t)}function ji(e,t){return B(t)?t.findIndex(n=>Fi(n,e)):Y(t)&&Fi(t,e)?0:-1}const Ss=e=>e[0]==="_"||e==="$stable",Ka=e=>B(e)?e.map(qe):[qe(e)],df=(e,t,n)=>{if(t._n)return t;const r=Bt((...a)=>Ka(t(...a)),n);return r._c=!1,r},Ts=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ss(a))continue;const i=e[a];if(Y(i))t[a]=df(a,i,r);else if(i!=null){const o=Ka(i);t[a]=()=>o}}},Is=(e,t)=>{const n=Ka(t);e.slots.default=()=>n},mf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),lr(t,"_",n)):Ts(t,e.slots={})}else e.slots={},t&&Is(e,t);lr(e.slots,Or,1)},pf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=le;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ts(t,a)),o=t}else t&&(Is(e,t),o={default:1});if(i)for(const s in a)!Ss(s)&&!(s in o)&&delete a[s]};function fa(e,t,n,r,a=!1){if(B(e)){e.forEach((p,g)=>fa(p,t&&(B(t)?t[g]:t),n,r,a));return}if(nr(r)&&!a)return;const i=r.shapeFlag&4?Qa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===le?s.refs={}:s.refs,u=s.setupState;if(f!=null&&f!==l&&(_e(f)?(c[f]=null,V(u,f)&&(u[f]=null)):Ee(f)&&(f.value=null)),Y(l))yt(l,s,12,[o,c]);else{const p=_e(l),g=Ee(l);if(p||g){const k=()=>{if(e.f){const A=p?V(u,l)?u[l]:c[l]:l.value;a?B(A)&&Ta(A,i):B(A)?A.includes(i)||A.push(i):p?(c[l]=[i],V(u,l)&&(u[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,V(u,l)&&(u[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,Pe(k,n)):k()}}}const Pe=jc;function hf(e){return gf(e)}function gf(e,t){const n=Jr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:u,nextSibling:p,setScopeId:g=He,insertStaticContent:k}=e,A=(d,m,h,v=null,x=null,w=null,T=!1,C=null,O=!!m.dynamicChildren)=>{if(d===m)return;d&&!Tt(d,m)&&(v=y(d),Ce(d,x,w,!0),d=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:E,ref:z,shapeFlag:L}=m;switch(E){case Pr:M(d,m,h,v);break;case nt:b(d,m,h,v);break;case ar:d==null&&_(m,h,v,T);break;case Ke:j(d,m,h,v,x,w,T,C,O);break;default:L&1?H(d,m,h,v,x,w,T,C,O):L&6?ee(d,m,h,v,x,w,T,C,O):(L&64||L&128)&&E.process(d,m,h,v,x,w,T,C,O,S)}z!=null&&x&&fa(z,d&&d.ref,w,m||d,!m)},M=(d,m,h,v)=>{if(d==null)r(m.el=s(m.children),h,v);else{const x=m.el=d.el;m.children!==d.children&&f(x,m.children)}},b=(d,m,h,v)=>{d==null?r(m.el=l(m.children||""),h,v):m.el=d.el},_=(d,m,h,v)=>{[d.el,d.anchor]=k(d.children,m,h,v,d.el,d.anchor)},R=({el:d,anchor:m},h,v)=>{let x;for(;d&&d!==m;)x=p(d),r(d,h,v),d=x;r(m,h,v)},P=({el:d,anchor:m})=>{let h;for(;d&&d!==m;)h=p(d),a(d),d=h;a(m)},H=(d,m,h,v,x,w,T,C,O)=>{T=T||m.type==="svg",d==null?G(m,h,v,x,w,T,C,O):q(d,m,x,w,T,C,O)},G=(d,m,h,v,x,w,T,C)=>{let O,E;const{type:z,props:L,shapeFlag:$,transition:W,dirs:K}=d;if(O=d.el=o(d.type,w,L&&L.is,L),$&8?c(O,d.children):$&16&&U(d.children,O,null,v,x,w&&z!=="foreignObject",T,C),K&&At(d,null,v,"created"),ne(O,d,d.scopeId,T,v),L){for(const re in L)re!=="value"&&!tr(re)&&i(O,re,null,L[re],w,d.children,v,x,xe);"value"in L&&i(O,"value",null,L.value),(E=L.onVnodeBeforeMount)&&Ye(E,v,d)}K&&At(d,null,v,"beforeMount");const ie=(!x||x&&!x.pendingBranch)&&W&&!W.persisted;ie&&W.beforeEnter(O),r(O,m,h),((E=L&&L.onVnodeMounted)||ie||K)&&Pe(()=>{E&&Ye(E,v,d),ie&&W.enter(O),K&&At(d,null,v,"mounted")},x)},ne=(d,m,h,v,x)=>{if(h&&g(d,h),v)for(let w=0;w<v.length;w++)g(d,v[w]);if(x){let w=x.subTree;if(m===w){const T=x.vnode;ne(d,T,T.scopeId,T.slotScopeIds,x.parent)}}},U=(d,m,h,v,x,w,T,C,O=0)=>{for(let E=O;E<d.length;E++){const z=d[E]=C?gt(d[E]):qe(d[E]);A(null,z,m,h,v,x,w,T,C)}},q=(d,m,h,v,x,w,T)=>{const C=m.el=d.el;let{patchFlag:O,dynamicChildren:E,dirs:z}=m;O|=d.patchFlag&16;const L=d.props||le,$=m.props||le;let W;h&&Ct(h,!1),(W=$.onVnodeBeforeUpdate)&&Ye(W,h,m,d),z&&At(m,d,h,"beforeUpdate"),h&&Ct(h,!0);const K=x&&m.type!=="foreignObject";if(E?Q(d.dynamicChildren,E,C,h,v,K,w):T||J(d,m,C,null,h,v,K,w,!1),O>0){if(O&16)he(C,m,L,$,h,v,x);else if(O&2&&L.class!==$.class&&i(C,"class",null,$.class,x),O&4&&i(C,"style",L.style,$.style,x),O&8){const ie=m.dynamicProps;for(let re=0;re<ie.length;re++){const me=ie[re],Le=L[me],$t=$[me];($t!==Le||me==="value")&&i(C,me,Le,$t,x,d.children,h,v,xe)}}O&1&&d.children!==m.children&&c(C,m.children)}else!T&&E==null&&he(C,m,L,$,h,v,x);((W=$.onVnodeUpdated)||z)&&Pe(()=>{W&&Ye(W,h,m,d),z&&At(m,d,h,"updated")},v)},Q=(d,m,h,v,x,w,T)=>{for(let C=0;C<m.length;C++){const O=d[C],E=m[C],z=O.el&&(O.type===Ke||!Tt(O,E)||O.shapeFlag&70)?u(O.el):h;A(O,E,z,null,v,x,w,T,!0)}},he=(d,m,h,v,x,w,T)=>{if(h!==v){if(h!==le)for(const C in h)!tr(C)&&!(C in v)&&i(d,C,h[C],null,T,m.children,x,w,xe);for(const C in v){if(tr(C))continue;const O=v[C],E=h[C];O!==E&&C!=="value"&&i(d,C,E,O,T,m.children,x,w,xe)}"value"in v&&i(d,"value",h.value,v.value)}},j=(d,m,h,v,x,w,T,C,O)=>{const E=m.el=d?d.el:s(""),z=m.anchor=d?d.anchor:s("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:W}=m;W&&(C=C?C.concat(W):W),d==null?(r(E,h,v),r(z,h,v),U(m.children,h,z,x,w,T,C,O)):L>0&&L&64&&$&&d.dynamicChildren?(Q(d.dynamicChildren,$,h,x,w,T,C),(m.key!=null||x&&m===x.subTree)&&Rs(d,m,!0)):J(d,m,h,z,x,w,T,C,O)},ee=(d,m,h,v,x,w,T,C,O)=>{m.slotScopeIds=C,d==null?m.shapeFlag&512?x.ctx.activate(m,h,v,T,O):ke(m,h,v,x,w,T,O):Qe(d,m,O)},ke=(d,m,h,v,x,w,T)=>{const C=d.component=Pf(d,v,x);if(Ar(d)&&(C.ctx.renderer=S),Sf(C),C.asyncDep){if(x&&x.registerDep(C,de),!d.el){const O=C.subTree=fe(nt);b(null,O,m,h)}return}de(C,d,m,h,x,w,T)},Qe=(d,m,h)=>{const v=m.component=d.component;if(Mc(d,m,h))if(v.asyncDep&&!v.asyncResolved){ae(v,m,h);return}else v.next=m,Cc(v.update),v.update();else m.el=d.el,v.vnode=m},de=(d,m,h,v,x,w,T)=>{const C=()=>{if(d.isMounted){let{next:z,bu:L,u:$,parent:W,vnode:K}=d,ie=z,re;Ct(d,!1),z?(z.el=K.el,ae(d,z,T)):z=K,L&&Fr(L),(re=z.props&&z.props.onVnodeBeforeUpdate)&&Ye(re,W,z,K),Ct(d,!0);const me=jr(d),Le=d.subTree;d.subTree=me,A(Le,me,u(Le.el),y(Le),d,x,w),z.el=me.el,ie===null&&Lc(d,me.el),$&&Pe($,x),(re=z.props&&z.props.onVnodeUpdated)&&Pe(()=>Ye(re,W,z,K),x)}else{let z;const{el:L,props:$}=m,{bm:W,m:K,parent:ie}=d,re=nr(m);if(Ct(d,!1),W&&Fr(W),!re&&(z=$&&$.onVnodeBeforeMount)&&Ye(z,ie,m),Ct(d,!0),L&&Z){const me=()=>{d.subTree=jr(d),Z(L,d.subTree,d,x,null)};re?m.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=jr(d);A(null,me,h,v,d,x,w),m.el=me.el}if(K&&Pe(K,x),!re&&(z=$&&$.onVnodeMounted)){const me=m;Pe(()=>Ye(z,ie,me),x)}(m.shapeFlag&256||ie&&nr(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Pe(d.a,x),d.isMounted=!0,m=h=v=null}},O=d.effect=new Fa(C,()=>Ua(E),d.scope),E=d.update=()=>O.run();E.id=d.uid,Ct(d,!0),E()},ae=(d,m,h)=>{m.component=d;const v=d.vnode.props;d.vnode=m,d.next=null,uf(d,m.props,v,h),pf(d,m.children,h),rn(),Ci(),an()},J=(d,m,h,v,x,w,T,C,O=!1)=>{const E=d&&d.children,z=d?d.shapeFlag:0,L=m.children,{patchFlag:$,shapeFlag:W}=m;if($>0){if($&128){ft(E,L,h,v,x,w,T,C,O);return}else if($&256){Je(E,L,h,v,x,w,T,C,O);return}}W&8?(z&16&&xe(E,x,w),L!==E&&c(h,L)):z&16?W&16?ft(E,L,h,v,x,w,T,C,O):xe(E,x,w,!0):(z&8&&c(h,""),W&16&&U(L,h,v,x,w,T,C,O))},Je=(d,m,h,v,x,w,T,C,O)=>{d=d||qt,m=m||qt;const E=d.length,z=m.length,L=Math.min(E,z);let $;for($=0;$<L;$++){const W=m[$]=O?gt(m[$]):qe(m[$]);A(d[$],W,h,null,x,w,T,C,O)}E>z?xe(d,x,w,!0,!1,L):U(m,h,v,x,w,T,C,O,L)},ft=(d,m,h,v,x,w,T,C,O)=>{let E=0;const z=m.length;let L=d.length-1,$=z-1;for(;E<=L&&E<=$;){const W=d[E],K=m[E]=O?gt(m[E]):qe(m[E]);if(Tt(W,K))A(W,K,h,null,x,w,T,C,O);else break;E++}for(;E<=L&&E<=$;){const W=d[L],K=m[$]=O?gt(m[$]):qe(m[$]);if(Tt(W,K))A(W,K,h,null,x,w,T,C,O);else break;L--,$--}if(E>L){if(E<=$){const W=$+1,K=W<z?m[W].el:v;for(;E<=$;)A(null,m[E]=O?gt(m[E]):qe(m[E]),h,K,x,w,T,C,O),E++}}else if(E>$)for(;E<=L;)Ce(d[E],x,w,!0),E++;else{const W=E,K=E,ie=new Map;for(E=K;E<=$;E++){const Se=m[E]=O?gt(m[E]):qe(m[E]);Se.key!=null&&ie.set(Se.key,E)}let re,me=0;const Le=$-K+1;let $t=!1,hi=0;const sn=new Array(Le);for(E=0;E<Le;E++)sn[E]=0;for(E=W;E<=L;E++){const Se=d[E];if(me>=Le){Ce(Se,x,w,!0);continue}let We;if(Se.key!=null)We=ie.get(Se.key);else for(re=K;re<=$;re++)if(sn[re-K]===0&&Tt(Se,m[re])){We=re;break}We===void 0?Ce(Se,x,w,!0):(sn[We-K]=E+1,We>=hi?hi=We:$t=!0,A(Se,m[We],h,null,x,w,T,C,O),me++)}const gi=$t?vf(sn):qt;for(re=gi.length-1,E=Le-1;E>=0;E--){const Se=K+E,We=m[Se],vi=Se+1<z?m[Se+1].el:v;sn[E]===0?A(null,We,h,vi,x,w,T,C,O):$t&&(re<0||E!==gi[re]?Ue(We,h,vi,2):re--)}}},Ue=(d,m,h,v,x=null)=>{const{el:w,type:T,transition:C,children:O,shapeFlag:E}=d;if(E&6){Ue(d.component.subTree,m,h,v);return}if(E&128){d.suspense.move(m,h,v);return}if(E&64){T.move(d,m,h,S);return}if(T===Ke){r(w,m,h);for(let L=0;L<O.length;L++)Ue(O[L],m,h,v);r(d.anchor,m,h);return}if(T===ar){R(d,m,h);return}if(v!==2&&E&1&&C)if(v===0)C.beforeEnter(w),r(w,m,h),Pe(()=>C.enter(w),x);else{const{leave:L,delayLeave:$,afterLeave:W}=C,K=()=>r(w,m,h),ie=()=>{L(w,()=>{K(),W&&W()})};$?$(w,K,ie):ie()}else r(w,m,h)},Ce=(d,m,h,v=!1,x=!1)=>{const{type:w,props:T,ref:C,children:O,dynamicChildren:E,shapeFlag:z,patchFlag:L,dirs:$}=d;if(C!=null&&fa(C,null,h,d,!0),z&256){m.ctx.deactivate(d);return}const W=z&1&&$,K=!nr(d);let ie;if(K&&(ie=T&&T.onVnodeBeforeUnmount)&&Ye(ie,m,d),z&6)zn(d.component,h,v);else{if(z&128){d.suspense.unmount(h,v);return}W&&At(d,null,m,"beforeUnmount"),z&64?d.type.remove(d,m,h,x,S,v):E&&(w!==Ke||L>0&&L&64)?xe(E,m,h,!1,!0):(w===Ke&&L&384||!x&&z&16)&&xe(O,m,h),v&&Dt(d)}(K&&(ie=T&&T.onVnodeUnmounted)||W)&&Pe(()=>{ie&&Ye(ie,m,d),W&&At(d,null,m,"unmounted")},h)},Dt=d=>{const{type:m,el:h,anchor:v,transition:x}=d;if(m===Ke){zt(h,v);return}if(m===ar){P(d);return}const w=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:T,delayLeave:C}=x,O=()=>T(h,w);C?C(d.el,w,O):O()}else w()},zt=(d,m)=>{let h;for(;d!==m;)h=p(d),a(d),d=h;a(m)},zn=(d,m,h)=>{const{bum:v,scope:x,update:w,subTree:T,um:C}=d;v&&Fr(v),x.stop(),w&&(w.active=!1,Ce(T,d,m,h)),C&&Pe(C,m),Pe(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},xe=(d,m,h,v=!1,x=!1,w=0)=>{for(let T=w;T<d.length;T++)Ce(d[T],m,h,v,x)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),N=(d,m,h)=>{d==null?m._vnode&&Ce(m._vnode,null,null,!0):A(m._vnode||null,d,m,null,null,null,h),Ci(),ds(),m._vnode=d},S={p:A,um:Ce,m:Ue,r:Dt,mt:ke,mc:U,pc:J,pbc:Q,n:y,o:e};let D,Z;return t&&([D,Z]=t(S)),{render:N,hydrate:D,createApp:cf(N,D)}}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rs(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=gt(a[i]),s.el=o.el),n||Rs(o,s)),s.type===Pr&&(s.el=o.el)}}function vf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const bf=e=>e.__isTeleport,Ke=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),bn=[];let ze=null;function qa(e=!1){bn.push(ze=e?null:[])}function yf(){bn.pop(),ze=bn[bn.length-1]||null}let Pn=1;function Di(e){Pn+=e}function _f(e){return e.dynamicChildren=Pn>0?ze||qt:null,yf(),Pn>0&&ze&&ze.push(e),e}function Va(e,t,n,r,a,i){return _f(ye(e,t,n,r,a,i,!0))}function ua(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Or="__vInternal",Ns=({key:e})=>e??null,ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||Ee(e)||Y(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function ye(e,t=null,n=null,r=0,a=null,i=e===Ke?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ns(t),ref:t&&ir(t),scopeId:kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ne};return s?(Xa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),Pn>0&&!o&&ze&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ze.push(l),l}const fe=xf;function xf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Zc)&&(e=nt),ua(e)){const s=xt(e,t,!0);return n&&Xa(s,n),Pn>0&&!i&&ze&&(s.shapeFlag&6?ze[ze.indexOf(e)]=s:ze.push(s)),s.patchFlag|=-2,s}if(Mf(e)&&(e=e.__vccOpts),t){t=wf(t);let{class:s,style:l}=t;s&&!_e(s)&&(t.class=Ma(s)),ue(l)&&(rs(l)&&!B(l)&&(l=pe({},l)),t.style=Na(l))}const o=_e(e)?1:Fc(e)?128:bf(e)?64:ue(e)?4:Y(e)?2:0;return ye(e,t,n,r,a,o,i,!0)}function wf(e){return e?rs(e)||Or in e?pe({},e):e:null}function xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?kf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ns(s),ref:t&&t.ref?n&&a?B(a)?a.concat(ir(t)):[a,ir(t)]:ir(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ke?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xt(e.ssContent),ssFallback:e.ssFallback&&xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Re(e=" ",t=0){return fe(Pr,null,e,t)}function Ef(e,t){const n=fe(ar,null,e);return n.staticCount=t,n}function qe(e){return e==null||typeof e=="boolean"?fe(nt):B(e)?fe(Ke,null,e.slice()):typeof e=="object"?gt(e):fe(Pr,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xt(e)}function Xa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Xa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Or in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[Re(t)]):n=8);e.children=t,e.shapeFlag|=n}function kf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ma([t.class,r.class]));else if(a==="style")t.style=Na([t.style,r.style]);else if(vr(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ye(e,t,n,r=null){Me(e,t,7,[n,r])}const Af=Cs();let Cf=0;function Pf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Af,i={uid:Cf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Os(r,a),emitsOptions:ps(r,a),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Sc.bind(null,i),e.ce&&e.ce(i),i}let be=null;const Of=()=>be||Ne;let Ga,Ht,zi="__VUE_INSTANCE_SETTERS__";(Ht=Jr()[zi])||(Ht=Jr()[zi]=[]),Ht.push(e=>be=e),Ga=e=>{Ht.length>1?Ht.forEach(t=>t(e)):Ht[0](e)};const Jt=e=>{Ga(e),e.scope.on()},Lt=()=>{be&&be.scope.off(),Ga(null)};function Ms(e){return e.vnode.shapeFlag&4}let On=!1;function Sf(e,t=!1){On=t;const{props:n,children:r}=e.vnode,a=Ms(e);ff(e,n,a,t),mf(e,r);const i=a?Tf(e,t):void 0;return On=!1,i}function Tf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=as(new Proxy(e.ctx,tf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Rf(e):null;Jt(e),rn();const i=yt(r,e,0,[e.props,a]);if(an(),Lt(),Wo(i)){if(i.then(Lt,Lt),t)return i.then(o=>{$i(e,o,t)}).catch(o=>{wr(o,e,0)});e.asyncDep=i}else $i(e,i,t)}else Ls(e,t)}function $i(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=ls(t)),Ls(e,n)}let Hi;function Ls(e,t,n){const r=e.type;if(!e.render){if(!t&&Hi&&!r.render){const a=r.template||Ya(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=Hi(a,f)}}e.render=r.render||He}Jt(e),rn(),nf(e),an(),Lt()}function If(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}}))}function Rf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return If(e)},slots:e.slots,emit:e.emit,expose:t}}function Qa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ls(as(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)},has(t,n){return n in t||n in vn}}))}function Nf(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Mf(e){return Y(e)&&"__vccOpts"in e}const ve=(e,t)=>Ec(e,t,On);function Sr(e,t,n){const r=arguments.length;return r===2?ue(t)&&!B(t)?ua(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ua(n)&&(n=[n]),fe(e,t,n))}const Lf=Symbol.for("v-scx"),Ff=()=>tt(Lf),jf="3.3.4",Df="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Bi=It&&It.createElement("template"),zf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?It.createElementNS(Df,e):It.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>It.createTextNode(e),createComment:e=>It.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>It.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Bi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Bi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Hf(e,t,n){const r=e.style,a=_e(n);if(n&&!a){if(t&&!_e(t))for(const i in t)n[i]==null&&da(r,i,"");for(const i in n)da(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ui=/\s*!important$/;function da(e,t,n){if(B(n))n.forEach(r=>da(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Bf(e,t);Ui.test(n)?e.setProperty(nn(r),n.replace(Ui,""),"important"):e[r]=n}}const Wi=["Webkit","Moz","ms"],$r={};function Bf(e,t){const n=$r[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return $r[t]=r;r=_r(r);for(let a=0;a<Wi.length;a++){const i=Wi[a]+r;if(i in e)return $r[t]=i}return t}const Yi="http://www.w3.org/1999/xlink";function Uf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Yi,t.slice(6,t.length)):e.setAttributeNS(Yi,t,n);else{const i=Hl(t);n==null||i&&!Yo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Yo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Yf(e,t,n,r){e.addEventListener(t,n,r)}function Kf(e,t,n,r){e.removeEventListener(t,n,r)}function qf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Vf(t);if(r){const f=i[t]=Qf(r,a);Yf(e,s,f,l)}else o&&(Kf(e,s,o,l),i[t]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function Vf(e){let t;if(Ki.test(e)){t={};let r;for(;r=e.match(Ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):nn(e.slice(2)),t]}let Hr=0;const Xf=Promise.resolve(),Gf=()=>Hr||(Xf.then(()=>Hr=0),Hr=Date.now());function Qf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Jf(r,n.value),t,5,[r])};return n.value=e,n.attached=Gf(),n}function Jf(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const qi=/^on[a-z]/,Zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?$f(e,r,a):t==="style"?Hf(e,n,r):vr(t)?Sa(t)||qf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):eu(e,t,r,a))?Wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uf(e,t,r,a))};function eu(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&qi.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qi.test(t)&&_e(n)?!1:t in e}const dt="transition",ln="animation",Ja=(e,{slots:t})=>Sr(Hc,tu(e),t);Ja.displayName="Transition";const Fs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ja.props=pe({},vs,Fs);const Pt=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},Vi=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function tu(e){const t={};for(const j in e)j in Fs||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:c=s,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,k=nu(a),A=k&&k[0],M=k&&k[1],{onBeforeEnter:b,onEnter:_,onEnterCancelled:R,onLeave:P,onLeaveCancelled:H,onBeforeAppear:G=b,onAppear:ne=_,onAppearCancelled:U=R}=t,q=(j,ee,ke)=>{Ot(j,ee?c:s),Ot(j,ee?f:o),ke&&ke()},Q=(j,ee)=>{j._isLeaving=!1,Ot(j,u),Ot(j,g),Ot(j,p),ee&&ee()},he=j=>(ee,ke)=>{const Qe=j?ne:_,de=()=>q(ee,j,ke);Pt(Qe,[ee,de]),Xi(()=>{Ot(ee,j?l:i),mt(ee,j?c:s),Vi(Qe)||Gi(ee,r,A,de)})};return pe(t,{onBeforeEnter(j){Pt(b,[j]),mt(j,i),mt(j,o)},onBeforeAppear(j){Pt(G,[j]),mt(j,l),mt(j,f)},onEnter:he(!1),onAppear:he(!0),onLeave(j,ee){j._isLeaving=!0;const ke=()=>Q(j,ee);mt(j,u),iu(),mt(j,p),Xi(()=>{j._isLeaving&&(Ot(j,u),mt(j,g),Vi(P)||Gi(j,r,M,ke))}),Pt(P,[j,ke])},onEnterCancelled(j){q(j,!1),Pt(R,[j])},onAppearCancelled(j){q(j,!0),Pt(U,[j])},onLeaveCancelled(j){Q(j),Pt(H,[j])}})}function nu(e){if(e==null)return null;if(ue(e))return[Br(e.enter),Br(e.leave)];{const t=Br(e);return[t,t]}}function Br(e){return Ll(e)}function mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ot(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Xi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ru=0;function Gi(e,t,n,r){const a=e._endId=++ru,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=au(e,t);if(!o)return r();const f=o+"end";let c=0;const u=()=>{e.removeEventListener(f,p),i()},p=g=>{g.target===e&&++c>=l&&u()};setTimeout(()=>{c<l&&u()},s+1),e.addEventListener(f,p)}function au(e,t){const n=window.getComputedStyle(e),r=k=>(n[k]||"").split(", "),a=r(`${dt}Delay`),i=r(`${dt}Duration`),o=Qi(a,i),s=r(`${ln}Delay`),l=r(`${ln}Duration`),f=Qi(s,l);let c=null,u=0,p=0;t===dt?o>0&&(c=dt,u=o,p=i.length):t===ln?f>0&&(c=ln,u=f,p=l.length):(u=Math.max(o,f),c=u>0?o>f?dt:ln:null,p=c?c===dt?i.length:l.length:0);const g=c===dt&&/\b(transform|all)(,|$)/.test(r(`${dt}Property`).toString());return{type:c,timeout:u,propCount:p,hasTransform:g}}function Qi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ji(n)+Ji(e[r])))}function Ji(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function iu(){return document.body.offsetHeight}const ou=pe({patchProp:Zf},zf);let Zi;function su(){return Zi||(Zi=hf(ou))}const lu=(...e)=>{const t=su().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=cu(r);if(!a)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function cu(e){return _e(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ut=typeof window<"u";function fu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const te=Object.assign;function Ur(e,t){const n={};for(const r in t){const a=t[r];n[r]=Be(a)?a.map(e):e(a)}return n}const yn=()=>{},Be=Array.isArray,uu=/\/$/,du=e=>e.replace(uu,"");function Wr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=gu(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function mu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function eo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Zt(t.matched[r],n.matched[a])&&js(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function js(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return Be(e)?to(e,t):Be(t)?to(t,e):e===t}function to(e,t){return Be(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function gu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var _n;(function(e){e.back="back",e.forward="forward",e.unknown=""})(_n||(_n={}));function vu(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),du(e)}const bu=/^[^#]+#/;function yu(e,t){return e.replace(bu,"#")+t}function _u(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function xu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=_u(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function no(e,t){return(history.state?history.state.position-t:-1)+e}const ma=new Map;function wu(e,t){ma.set(e,t)}function Eu(e){const t=ma.get(e);return ma.delete(e),t}let ku=()=>location.protocol+"//"+location.host;function Ds(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),eo(l,"")}return eo(n,e)+r+a}function Au(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Ds(e,location),k=n.value,A=t.value;let M=0;if(p){if(n.value=g,t.value=p,o&&o===k){o=null;return}M=A?p.position-A.position:0}else r(g);a.forEach(b=>{b(n.value,k,{delta:M,type:Sn.pop,direction:M?M>0?_n.forward:_n.back:_n.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const k=a.indexOf(p);k>-1&&a.splice(k,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Tr()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:u}}function ro(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Tr():null}}function Cu(e){const{history:t,location:n}=window,r={value:Ds(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const u=e.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+l:ku()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=te({},t.state,ro(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=te({},a.value,t.state,{forward:l,scroll:Tr()});i(c.current,c,!0);const u=te({},ro(r.value,l,null),{position:c.position+1},f);i(l,u,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Pu(e){e=vu(e);const t=Cu(e),n=Au(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=te({location:"",base:e,go:r,createHref:yu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Ou(e){return typeof e=="string"||e&&typeof e=="object"}function zs(e){return typeof e=="string"||typeof e=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$s=Symbol("");var ao;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ao||(ao={}));function en(e,t){return te(new Error,{type:e,[$s]:!0},t)}function Ze(e,t){return e instanceof Error&&$s in e&&(t==null||!!(e.type&t))}const io="[^/]+?",Su={sensitive:!1,strict:!1,start:!0,end:!0},Tu=/[.+*?^${}()[\]/\\]/g;function Iu(e,t){const n=te({},Su,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let u=0;u<f.length;u++){const p=f[u];let g=40+(n.sensitive?.25:0);if(p.type===0)u||(a+="/"),a+=p.value.replace(Tu,"\\$&"),g+=40;else if(p.type===1){const{value:k,repeatable:A,optional:M,regexp:b}=p;i.push({name:k,repeatable:A,optional:M});const _=b||io;if(_!==io){g+=10;try{new RegExp(`(${_})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${k}" (${_}): `+P.message)}}let R=A?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;u||(R=M&&f.length<2?`(?:/${R})`:"/"+R),M&&(R+="?"),a+=R,g+=20,M&&(g+=-8),A&&(g+=-20),_===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),u={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",k=i[p-1];u[k.name]=g&&k.repeatable?g.split("/"):g}return u}function l(f){let c="",u=!1;for(const p of e){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:k,repeatable:A,optional:M}=g,b=k in f?f[k]:"";if(Be(b)&&!A)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const _=Be(b)?b.join("/"):b;if(!_)if(M)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${k}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Ru(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Nu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Ru(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(oo(r))return 1;if(oo(a))return-1}return a.length-r.length}function oo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Mu={type:0,value:""},Lu=/[a-zA-Z0-9_]/;function Fu(e){if(!e)return[[]];if(e==="/")return[[Mu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function u(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&u(),o()):l===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Lu.test(l)?p():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),u(),o(),a}function ju(e,t,n){const r=Iu(Fu(e.path),n),a=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Du(e,t){const n=[],r=new Map;t=co({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,u,p){const g=!p,k=zu(c);k.aliasOf=p&&p.record;const A=co(t,c),M=[k];if("alias"in c){const R=typeof c.alias=="string"?[c.alias]:c.alias;for(const P of R)M.push(te({},k,{components:p?p.record.components:k.components,path:P,aliasOf:p?p.record:k}))}let b,_;for(const R of M){const{path:P}=R;if(u&&P[0]!=="/"){const H=u.record.path,G=H[H.length-1]==="/"?"":"/";R.path=u.record.path+(P&&G+P)}if(b=ju(R,u,A),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&c.name&&!lo(b)&&o(c.name)),k.children){const H=k.children;for(let G=0;G<H.length;G++)i(H[G],b,p&&p.children[G])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return _?()=>{o(_)}:yn}function o(c){if(zs(c)){const u=r.get(c);u&&(r.delete(c),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(c);u>-1&&(n.splice(u,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let u=0;for(;u<n.length&&Nu(c,n[u])>=0&&(c.record.path!==n[u].record.path||!Hs(c,n[u]));)u++;n.splice(u,0,c),c.record.name&&!lo(c)&&r.set(c.record.name,c)}function f(c,u){let p,g={},k,A;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw en(1,{location:c});A=p.record.name,g=te(so(u.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&so(c.params,p.keys.map(_=>_.name))),k=p.stringify(g)}else if("path"in c)k=c.path,p=n.find(_=>_.re.test(k)),p&&(g=p.parse(k),A=p.record.name);else{if(p=u.name?r.get(u.name):n.find(_=>_.re.test(u.path)),!p)throw en(1,{location:c,currentLocation:u});A=p.record.name,g=te({},u.params,c.params),k=p.stringify(g)}const M=[];let b=p;for(;b;)M.unshift(b.record),b=b.parent;return{name:A,path:k,params:g,matched:M,meta:Hu(M)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function so(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function zu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$u(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $u(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function lo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Hu(e){return e.reduce((t,n)=>te(t,n.meta),{})}function co(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Hs(e,t){return t.children.some(n=>n===e||Hs(e,n))}const Bs=/#/g,Bu=/&/g,Uu=/\//g,Wu=/=/g,Yu=/\?/g,Us=/\+/g,Ku=/%5B/g,qu=/%5D/g,Ws=/%5E/g,Vu=/%60/g,Ys=/%7B/g,Xu=/%7C/g,Ks=/%7D/g,Gu=/%20/g;function Za(e){return encodeURI(""+e).replace(Xu,"|").replace(Ku,"[").replace(qu,"]")}function Qu(e){return Za(e).replace(Ys,"{").replace(Ks,"}").replace(Ws,"^")}function pa(e){return Za(e).replace(Us,"%2B").replace(Gu,"+").replace(Bs,"%23").replace(Bu,"%26").replace(Vu,"`").replace(Ys,"{").replace(Ks,"}").replace(Ws,"^")}function Ju(e){return pa(e).replace(Wu,"%3D")}function Zu(e){return Za(e).replace(Bs,"%23").replace(Yu,"%3F")}function ed(e){return e==null?"":Zu(e).replace(Uu,"%2F")}function mr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function td(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Us," "),o=i.indexOf("="),s=mr(o<0?i:i.slice(0,o)),l=o<0?null:mr(i.slice(o+1));if(s in t){let f=t[s];Be(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function fo(e){let t="";for(let n in e){const r=e[n];if(n=Ju(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&pa(i)):[r&&pa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function nd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Be(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const rd=Symbol(""),uo=Symbol(""),ei=Symbol(""),qs=Symbol(""),ha=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function vt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=u=>{u===!1?s(en(4,{from:n,to:t})):u instanceof Error?s(u):Ou(u)?s(en(2,{from:t,to:u})):(i&&r.enterCallbacks[a]===i&&typeof u=="function"&&i.push(u),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(u=>s(u))})}function Yr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(ad(s)){const f=(s.__vccOpts||s)[t];f&&a.push(vt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=fu(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&vt(p,n,r,i,o)()}))}}return a}function ad(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mo(e){const t=tt(ei),n=tt(qs),r=ve(()=>t.resolve(De(e.to))),a=ve(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],u=n.matched;if(!c||!u.length)return-1;const p=u.findIndex(Zt.bind(null,c));if(p>-1)return p;const g=po(l[f-2]);return f>1&&po(c)===g&&u[u.length-1].path!==g?u.findIndex(Zt.bind(null,l[f-2])):p}),i=ve(()=>a.value>-1&&sd(n.params,r.value.params)),o=ve(()=>a.value>-1&&a.value===n.matched.length-1&&js(n.params,r.value.params));function s(l={}){return od(l)?t[De(e.replace)?"replace":"push"](De(e.to)).catch(yn):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const id=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mo,setup(e,{slots:t}){const n=Ln(mo(e)),{options:r}=tt(ei),a=ve(()=>({[ho(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ho(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Sr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),dn=id;function od(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sd(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Be(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function po(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ho=(e,t,n)=>e??t??n,ld=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=tt(ha),a=ve(()=>e.route||r.value),i=tt(uo,0),o=ve(()=>{let f=De(i);const{matched:c}=a.value;let u;for(;(u=c[f])&&!u.components;)f++;return f}),s=ve(()=>a.value.matched[o.value]);rr(uo,ve(()=>o.value+1)),rr(rd,s),rr(ha,a);const l=bc();return gn(()=>[l.value,s.value,e.name],([f,c,u],[p,g,k])=>{c&&(c.instances[u]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Zt(c,g)||!p)&&(c.enterCallbacks[u]||[]).forEach(A=>A(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,u=s.value,p=u&&u.components[c];if(!p)return go(n.default,{Component:p,route:f});const g=u.props[c],k=g?g===!0?f.params:typeof g=="function"?g(f):g:null,M=Sr(p,te({},k,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[c]=null)},ref:l}));return go(n.default,{Component:M,route:f})||M}}});function go(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vs=ld;function cd(e){const t=Du(e.routes,e),n=e.parseQuery||td,r=e.stringifyQuery||fo,a=e.history,i=cn(),o=cn(),s=cn(),l=yc(pt);let f=pt;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ur.bind(null,y=>""+y),u=Ur.bind(null,ed),p=Ur.bind(null,mr);function g(y,N){let S,D;return zs(y)?(S=t.getRecordMatcher(y),D=N):D=y,t.addRoute(D,S)}function k(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function A(){return t.getRoutes().map(y=>y.record)}function M(y){return!!t.getRecordMatcher(y)}function b(y,N){if(N=te({},N||l.value),typeof y=="string"){const h=Wr(n,y,N.path),v=t.resolve({path:h.path},N),x=a.createHref(h.fullPath);return te(h,v,{params:p(v.params),hash:mr(h.hash),redirectedFrom:void 0,href:x})}let S;if("path"in y)S=te({},y,{path:Wr(n,y.path,N.path).path});else{const h=te({},y.params);for(const v in h)h[v]==null&&delete h[v];S=te({},y,{params:u(h)}),N.params=u(N.params)}const D=t.resolve(S,N),Z=y.hash||"";D.params=c(p(D.params));const d=mu(r,te({},y,{hash:Qu(Z),path:D.path})),m=a.createHref(d);return te({fullPath:d,hash:Z,query:r===fo?nd(y.query):y.query||{}},D,{redirectedFrom:void 0,href:m})}function _(y){return typeof y=="string"?Wr(n,y,l.value.path):te({},y)}function R(y,N){if(f!==y)return en(8,{from:N,to:y})}function P(y){return ne(y)}function H(y){return P(te(_(y),{replace:!0}))}function G(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:S}=N;let D=typeof S=="function"?S(y):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=_(D):{path:D},D.params={}),te({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function ne(y,N){const S=f=b(y),D=l.value,Z=y.state,d=y.force,m=y.replace===!0,h=G(S);if(h)return ne(te(_(h),{state:typeof h=="object"?te({},Z,h.state):Z,force:d,replace:m}),N||S);const v=S;v.redirectedFrom=N;let x;return!d&&pu(r,D,S)&&(x=en(16,{to:v,from:D}),Ue(D,D,!0,!1)),(x?Promise.resolve(x):Q(v,D)).catch(w=>Ze(w)?Ze(w,2)?w:ft(w):J(w,v,D)).then(w=>{if(w){if(Ze(w,2))return ne(te({replace:m},_(w.to),{state:typeof w.to=="object"?te({},Z,w.to.state):Z,force:d}),N||v)}else w=j(v,D,!0,m,Z);return he(v,D,w),w})}function U(y,N){const S=R(y,N);return S?Promise.reject(S):Promise.resolve()}function q(y){const N=zt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Q(y,N){let S;const[D,Z,d]=fd(y,N);S=Yr(D.reverse(),"beforeRouteLeave",y,N);for(const h of D)h.leaveGuards.forEach(v=>{S.push(vt(v,y,N))});const m=U.bind(null,y,N);return S.push(m),xe(S).then(()=>{S=[];for(const h of i.list())S.push(vt(h,y,N));return S.push(m),xe(S)}).then(()=>{S=Yr(Z,"beforeRouteUpdate",y,N);for(const h of Z)h.updateGuards.forEach(v=>{S.push(vt(v,y,N))});return S.push(m),xe(S)}).then(()=>{S=[];for(const h of y.matched)if(h.beforeEnter&&!N.matched.includes(h))if(Be(h.beforeEnter))for(const v of h.beforeEnter)S.push(vt(v,y,N));else S.push(vt(h.beforeEnter,y,N));return S.push(m),xe(S)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),S=Yr(d,"beforeRouteEnter",y,N),S.push(m),xe(S))).then(()=>{S=[];for(const h of o.list())S.push(vt(h,y,N));return S.push(m),xe(S)}).catch(h=>Ze(h,8)?h:Promise.reject(h))}function he(y,N,S){for(const D of s.list())q(()=>D(y,N,S))}function j(y,N,S,D,Z){const d=R(y,N);if(d)return d;const m=N===pt,h=Ut?history.state:{};S&&(D||m?a.replace(y.fullPath,te({scroll:m&&h&&h.scroll},Z)):a.push(y.fullPath,Z)),l.value=y,Ue(y,N,S,m),ft()}let ee;function ke(){ee||(ee=a.listen((y,N,S)=>{if(!zn.listening)return;const D=b(y),Z=G(D);if(Z){ne(te(Z,{replace:!0}),D).catch(yn);return}f=D;const d=l.value;Ut&&wu(no(d.fullPath,S.delta),Tr()),Q(D,d).catch(m=>Ze(m,12)?m:Ze(m,2)?(ne(m.to,D).then(h=>{Ze(h,20)&&!S.delta&&S.type===Sn.pop&&a.go(-1,!1)}).catch(yn),Promise.reject()):(S.delta&&a.go(-S.delta,!1),J(m,D,d))).then(m=>{m=m||j(D,d,!1),m&&(S.delta&&!Ze(m,8)?a.go(-S.delta,!1):S.type===Sn.pop&&Ze(m,20)&&a.go(-1,!1)),he(D,d,m)}).catch(yn)}))}let Qe=cn(),de=cn(),ae;function J(y,N,S){ft(y);const D=de.list();return D.length?D.forEach(Z=>Z(y,N,S)):console.error(y),Promise.reject(y)}function Je(){return ae&&l.value!==pt?Promise.resolve():new Promise((y,N)=>{Qe.add([y,N])})}function ft(y){return ae||(ae=!y,ke(),Qe.list().forEach(([N,S])=>y?S(y):N()),Qe.reset()),y}function Ue(y,N,S,D){const{scrollBehavior:Z}=e;if(!Ut||!Z)return Promise.resolve();const d=!S&&Eu(no(y.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return fs().then(()=>Z(y,N,d)).then(m=>m&&xu(m)).catch(m=>J(m,y,N))}const Ce=y=>a.go(y);let Dt;const zt=new Set,zn={currentRoute:l,listening:!0,addRoute:g,removeRoute:k,hasRoute:M,getRoutes:A,resolve:b,options:e,push:P,replace:H,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:de.add,isReady:Je,install(y){const N=this;y.component("RouterLink",dn),y.component("RouterView",Vs),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>De(l)}),Ut&&!Dt&&l.value===pt&&(Dt=!0,P(a.location).catch(Z=>{}));const S={};for(const Z in pt)S[Z]=ve(()=>l.value[Z]);y.provide(ei,N),y.provide(qs,Ln(S)),y.provide(ha,l);const D=y.unmount;zt.add(y),y.unmount=function(){zt.delete(y),zt.size<1&&(f=pt,ee&&ee(),ee=null,l.value=pt,Dt=!1,ae=!1),D()}}};function xe(y){return y.reduce((N,S)=>N.then(()=>q(S)),Promise.resolve())}return zn}function fd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Zt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Zt(f,l))||a.push(l))}return[n,r,a]}const Xs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},ud={class:"wrapper"},dd={__name:"App",setup(e){return(t,n)=>(qa(),Va("div",null,[ye("header",null,[ye("div",ud,[ye("nav",null,[fe(De(dn),{to:"/",class:"rlink"},{default:Bt(()=>[Re("Home")]),_:1}),fe(De(dn),{to:"/about",class:"rlink"},{default:Bt(()=>[Re("About")]),_:1}),fe(De(dn),{to:"/works",class:"rlink"},{default:Bt(()=>[Re("Works")]),_:1}),fe(De(dn),{to:"/contact",class:"rlink"},{default:Bt(()=>[Re("Contact")]),_:1})])])]),fe(Ja,{name:"slide",mode:"out-in"},{default:Bt(()=>[fe(De(Vs))]),_:1})]))}},md=Xs(dd,[["__scopeId","data-v-6c142280"]]),pd="modulepreload",hd=function(e){return"/"+e},vo={},Kr=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=hd(i),i in vo)return;vo[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const u=a[c];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":pd,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,u)=>{f.addEventListener("load",c),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},gd="/assets/ym-f2d7fac2.webp";const vd={},lt=e=>(Tc("data-v-3bc9c266"),e=e(),Ic(),e),bd={class:"welcome"},yd=lt(()=>ye("h1",null,"How you feel? I'm so so so…",-1)),_d=lt(()=>ye("h2",null,"Manato Yamashita",-1)),xd=lt(()=>ye("img",{src:gd,alt:"Manato Yamashita",id:"profile-img"},null,-1)),wd=lt(()=>ye("strong",null,"Manato Yamashita",-1)),Ed=lt(()=>ye("strong",null,[ye("a",{href:"https://tcu.ac.jp/",target:"_blank"},"Tokyo City University")],-1)),kd=lt(()=>ye("br",null,null,-1)),Ad=lt(()=>ye("strong",null,"SPA（Single Page Application）",-1)),Cd=lt(()=>ye("strong",null,[ye("a",{href:"https://ja.vitejs.dev/",target:"_blank"},"Vite")],-1)),Pd=lt(()=>ye("strong",null,[ye("a",{href:"https://ja.vuejs.org/",target:"_blank"},"Vue.js")],-1)),Od=Ef("<p data-v-3bc9c266> In my classes, I learned the basic theories of <strong data-v-3bc9c266>ICT assessments</strong> and <strong data-v-3bc9c266>multimedia</strong>, and also did team development using <strong data-v-3bc9c266>programming</strong>, from requirement definition to video production. Furthermore, as the representative of a group with more than 100 members that creates digital contents using digital tools, I did <strong data-v-3bc9c266>video production</strong>, <strong data-v-3bc9c266>graphics design</strong>, <strong data-v-3bc9c266>llustration</strong>, <strong data-v-3bc9c266>programming</strong>, and <strong data-v-3bc9c266>iweb design</strong>. I also enjoy making animations as a hobby, and I <strong data-v-3bc9c266>love all of creative</strong> activities in general. </p>",1);function Sd(e,t){const n=Jc("fa");return qa(),Va("div",bd,[yd,_d,xd,ye("p",null,[Re(" Hello, I'm "),wd,Re(". I'm studying computer science at the Department of Informatics, at "),Ed,fe(n,{icon:["fas","arrow-up-right-from-square"],class:"fa"}),Re(". I am conducting research on information security at Seki Laboratory. My favorite writer is Sayaka Murata."),kd,Re(' This site is a my "portfolio site". MANAPURAZA.COM is implemented '),Ad,Re(" by "),Cd,fe(n,{icon:["fas","arrow-up-right-from-square"],class:"fa"}),Re(" with "),Pd,fe(n,{icon:["fas","arrow-up-right-from-square"],class:"fa"}),Re("! ")]),Od])}const Td=Xs(vd,[["render",Sd],["__scopeId","data-v-3bc9c266"]]),Id={__name:"HomeView",setup(e){return(t,n)=>(qa(),Va("main",null,[fe(Td)]))}},Rd=cd({history:Pu("/"),routes:[{path:"/",name:"home",component:Id},{path:"/about",name:"about",component:()=>Kr(()=>import("./AboutView-5d8db927.js"),["assets/AboutView-5d8db927.js","assets/AboutView-e3637a6b.css"])},{path:"/works",name:"works",component:()=>Kr(()=>import("./WorksView-0c1e7b3d.js"),["assets/WorksView-0c1e7b3d.js","assets/WorksView-3a910232.css"])},{path:"/contact",name:"contact",component:()=>Kr(()=>import("./ContactView-3e706ee3.js"),["assets/ContactView-3e706ee3.js","assets/ContactView-391aabf2.css"])}]});function bo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bo(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function Nd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Md(e,t,n){return t&&yo(e.prototype,t),n&&yo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ti(e,t){return Fd(e)||Dd(e,t)||Gs(e,t)||$d()}function Fn(e){return Ld(e)||jd(e)||Gs(e)||zd()}function Ld(e){if(Array.isArray(e))return ga(e)}function Fd(e){if(Array.isArray(e))return e}function jd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Gs(e,t){if(e){if(typeof e=="string")return ga(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ga(e,t)}}function ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _o=function(){},ni={},Qs={},Js=null,Zs={mark:_o,measure:_o};try{typeof window<"u"&&(ni=window),typeof document<"u"&&(Qs=document),typeof MutationObserver<"u"&&(Js=MutationObserver),typeof performance<"u"&&(Zs=performance)}catch{}var Hd=ni.navigator||{},xo=Hd.userAgent,wo=xo===void 0?"":xo,wt=ni,se=Qs,Eo=Js,Kn=Zs;wt.document;var ct=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",el=~wo.indexOf("MSIE")||~wo.indexOf("Trident/"),qn,Vn,Xn,Gn,Qn,at="___FONT_AWESOME___",va=16,tl="fa",nl="svg-inline--fa",Ft="data-fa-i2svg",ba="data-fa-pseudo-element",Bd="data-fa-pseudo-element-pending",ri="data-prefix",ai="data-icon",ko="fontawesome-i2svg",Ud="async",Wd=["HTML","HEAD","STYLE","SCRIPT"],rl=function(){try{return!0}catch{return!1}}(),oe="classic",ce="sharp",ii=[oe,ce];function jn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var Tn=jn((qn={},ge(qn,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ge(qn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),qn)),In=jn((Vn={},ge(Vn,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ge(Vn,ce,{solid:"fass",regular:"fasr",light:"fasl"}),Vn)),Rn=jn((Xn={},ge(Xn,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ge(Xn,ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Xn)),Yd=jn((Gn={},ge(Gn,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ge(Gn,ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Gn)),Kd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,al="fa-layers-text",qd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vd=jn((Qn={},ge(Qn,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ge(Qn,ce,{900:"fass",400:"fasr",300:"fasl"}),Qn)),il=[1,2,3,4,5,6,7,8,9,10],Xd=il.concat([11,12,13,14,15,16,17,18,19,20]),Gd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nn=new Set;Object.keys(In[oe]).map(Nn.add.bind(Nn));Object.keys(In[ce]).map(Nn.add.bind(Nn));var Qd=[].concat(ii,Fn(Nn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rt.GROUP,Rt.SWAP_OPACITY,Rt.PRIMARY,Rt.SECONDARY]).concat(il.map(function(e){return"".concat(e,"x")})).concat(Xd.map(function(e){return"w-".concat(e)})),xn=wt.FontAwesomeConfig||{};function Jd(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var em=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];em.forEach(function(e){var t=ti(e,2),n=t[0],r=t[1],a=Zd(Jd(n));a!=null&&(xn[r]=a)})}var ol={styleDefault:"solid",familyDefault:"classic",cssPrefix:tl,replacementClass:nl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xn.familyPrefix&&(xn.cssPrefix=xn.familyPrefix);var tn=I(I({},ol),xn);tn.autoReplaceSvg||(tn.observeMutations=!1);var F={};Object.keys(ol).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){tn[e]=n,wn.forEach(function(r){return r(F)})},get:function(){return tn[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){tn.cssPrefix=t,wn.forEach(function(n){return n(F)})},get:function(){return tn.cssPrefix}});wt.FontAwesomeConfig=F;var wn=[];function tm(e){return wn.push(e),function(){wn.splice(wn.indexOf(e),1)}}var ht=va,Xe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nm(e){if(!(!e||!ct)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var rm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mn(){for(var e=12,t="";e-- >0;)t+=rm[Math.random()*62|0];return t}function on(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function oi(e){return e.classList?on(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function sl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function am(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(sl(e[n]),'" ')},"").trim()}function Ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function si(e){return e.size!==Xe.size||e.x!==Xe.x||e.y!==Xe.y||e.rotate!==Xe.rotate||e.flipX||e.flipY}function im(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function om(e){var t=e.transform,n=e.width,r=n===void 0?va:n,a=e.height,i=a===void 0?va:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&el?l+="translate(".concat(t.x/ht-r/2,"em, ").concat(t.y/ht-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ht,"em), calc(-50% + ").concat(t.y/ht,"em)) "):l+="translate(".concat(t.x/ht,"em, ").concat(t.y/ht,"em) "),l+="scale(".concat(t.size/ht*(t.flipX?-1:1),", ").concat(t.size/ht*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var sm=`:root, :host {
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
}`;function ll(){var e=tl,t=nl,n=F.cssPrefix,r=F.replacementClass,a=sm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ao=!1;function qr(){F.autoAddCss&&!Ao&&(nm(ll()),Ao=!0)}var lm={mixout:function(){return{dom:{css:ll,insertCss:qr}}},hooks:function(){return{beforeDOMElementCreation:function(){qr()},beforeI2svg:function(){qr()}}}},it=wt||{};it[at]||(it[at]={});it[at].styles||(it[at].styles={});it[at].hooks||(it[at].hooks={});it[at].shims||(it[at].shims=[]);var $e=it[at],cl=[],cm=function e(){se.removeEventListener("DOMContentLoaded",e),hr=1,cl.map(function(t){return t()})},hr=!1;ct&&(hr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),hr||se.addEventListener("DOMContentLoaded",cm));function fm(e){ct&&(hr?setTimeout(e,0):cl.push(e))}function Dn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?sl(e):"<".concat(t," ").concat(am(r),">").concat(i.map(Dn).join(""),"</").concat(t,">")}function Co(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var um=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Vr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?um(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function dm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ya(e){var t=dm(e);return t.length===1?t[0].toString(16):null}function mm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Po(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _a(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Po(t);typeof $e.hooks.addPack=="function"&&!a?$e.hooks.addPack(e,Po(t)):$e.styles[e]=I(I({},$e.styles[e]||{}),i),e==="fas"&&_a("fa",t)}var Jn,Zn,er,Yt=$e.styles,pm=$e.shims,hm=(Jn={},ge(Jn,oe,Object.values(Rn[oe])),ge(Jn,ce,Object.values(Rn[ce])),Jn),li=null,fl={},ul={},dl={},ml={},pl={},gm=(Zn={},ge(Zn,oe,Object.keys(Tn[oe])),ge(Zn,ce,Object.keys(Tn[ce])),Zn);function vm(e){return~Qd.indexOf(e)}function bm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vm(a)?a:null}var hl=function(){var t=function(i){return Vr(Yt,function(o,s,l){return o[l]=Vr(s,i,{}),o},{})};fl=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ul=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),pl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Yt||F.autoFetchSvg,r=Vr(pm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});dl=r.names,ml=r.unicodes,li=Rr(F.styleDefault,{family:F.familyDefault})};tm(function(e){li=Rr(e.styleDefault,{family:F.familyDefault})});hl();function ci(e,t){return(fl[e]||{})[t]}function ym(e,t){return(ul[e]||{})[t]}function Nt(e,t){return(pl[e]||{})[t]}function gl(e){return dl[e]||{prefix:null,iconName:null}}function _m(e){var t=ml[e],n=ci("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Et(){return li}var fi=function(){return{prefix:null,iconName:null,rest:[]}};function Rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,a=Tn[r][e],i=In[r][e]||In[r][a],o=e in $e.styles?e:null;return i||o||null}var Oo=(er={},ge(er,oe,Object.keys(Rn[oe])),ge(er,ce,Object.keys(Rn[ce])),er);function Nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ge(t,oe,"".concat(F.cssPrefix,"-").concat(oe)),ge(t,ce,"".concat(F.cssPrefix,"-").concat(ce)),t),o=null,s=oe;(e.includes(i[oe])||e.some(function(f){return Oo[oe].includes(f)}))&&(s=oe),(e.includes(i[ce])||e.some(function(f){return Oo[ce].includes(f)}))&&(s=ce);var l=e.reduce(function(f,c){var u=bm(F.cssPrefix,c);if(Yt[c]?(c=hm[s].includes(c)?Yd[s][c]:c,o=c,f.prefix=c):gm[s].indexOf(c)>-1?(o=c,f.prefix=Rr(c,{family:s})):u?f.iconName=u:c!==F.replacementClass&&c!==i[oe]&&c!==i[ce]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?gl(f.iconName):{},g=Nt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Yt.far&&Yt.fas&&!F.autoFetchSvg&&(f.prefix="fas")}return f},fi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Yt.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Nt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Et()||"fas"),l}var xm=function(){function e(){Nd(this,e),this.definitions={}}return Md(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),_a(s,o[s]);var l=Rn[oe][s];l&&_a(l,o[s]),hl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),So=[],Kt={},Gt={},wm=Object.keys(Gt);function Em(e,t){var n=t.mixoutsTo;return So=e,Kt={},Object.keys(Gt).forEach(function(r){wm.indexOf(r)===-1&&delete Gt[r]}),So.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),pr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Kt[o]||(Kt[o]=[]),Kt[o].push(i[o])})}r.provides&&r.provides(Gt)}),n}function xa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Kt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function jt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Kt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ot(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Gt[e]?Gt[e].apply(null,t):void 0}function wa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Et();if(t)return t=Nt(n,t)||t,Co(vl.definitions,n,t)||Co($e.styles,n,t)}var vl=new xm,km=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,jt("noAuto")},Am={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ct?(jt("beforeI2svg",t),ot("pseudoElements2svg",t),ot("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,fm(function(){Pm({autoReplaceSvgRoot:n}),jt("watch",t)})}},Cm={icon:function(t){if(t===null)return null;if(pr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Nt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rr(t[0]);return{prefix:r,iconName:Nt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(Kd))){var a=Nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Et(),iconName:Nt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Et();return{prefix:i,iconName:Nt(i,t)||t}}}},Te={noAuto:km,config:F,dom:Am,parse:Cm,library:vl,findIconDefinition:wa,toHtml:Dn},Pm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys($e.styles).length>0||F.autoFetchSvg)&&ct&&F.autoReplaceSvg&&Te.dom.i2svg({node:r})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Dn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ct){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Om(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(si(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Ir(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Sm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ui(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,p=e.watchable,g=p===void 0?!1:p,k=r.found?r:n,A=k.width,M=k.height,b=a==="fak",_=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(q){return u.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(u.classes).join(" "),R={children:[],attributes:I(I({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(M)})},P=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(A/M*16*.0625,"em")}:{};g&&(R.attributes[Ft]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||Mn())},children:[l]}),delete R.attributes.title);var H=I(I({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},P),u.styles)}),G=r.found&&n.found?ot("generateAbstractMask",H)||{children:[],attributes:{}}:ot("generateAbstractIcon",H)||{children:[],attributes:{}},ne=G.children,U=G.attributes;return H.children=ne,H.attributes=U,s?Sm(H):Om(H)}function To(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ft]="");var c=I({},o.styles);si(a)&&(c.transform=om({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Ir(c);u.length>0&&(f.style=u);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Tm(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xr=$e.styles;function Ea(e){var t=e[0],n=e[1],r=e.slice(4),a=ti(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Im={found:!1,width:512,height:512};function Rm(e,t){!rl&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ka(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=Et()),new Promise(function(r,a){if(ot("missingIconAbstract"),n==="fa"){var i=gl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Xr[t]&&Xr[t][e]){var o=Xr[t][e];return r(Ea(o))}Rm(e,t),r(I(I({},Im),{},{icon:F.showMissingIcons&&e?ot("missingIconAbstract")||{}:{}}))})}var Io=function(){},Aa=F.measurePerformance&&Kn&&Kn.mark&&Kn.measure?Kn:{mark:Io,measure:Io},mn='FA "6.4.2"',Nm=function(t){return Aa.mark("".concat(mn," ").concat(t," begins")),function(){return bl(t)}},bl=function(t){Aa.mark("".concat(mn," ").concat(t," ends")),Aa.measure("".concat(mn," ").concat(t),"".concat(mn," ").concat(t," begins"),"".concat(mn," ").concat(t," ends"))},di={begin:Nm,end:bl},or=function(){};function Ro(e){var t=e.getAttribute?e.getAttribute(Ft):null;return typeof t=="string"}function Mm(e){var t=e.getAttribute?e.getAttribute(ri):null,n=e.getAttribute?e.getAttribute(ai):null;return t&&n}function Lm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function Fm(){if(F.autoReplaceSvg===!0)return sr.replace;var e=sr[F.autoReplaceSvg];return e||sr.replace}function jm(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function Dm(e){return se.createElement(e)}function yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?jm:Dm:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(yl(o,{ceFn:r}))}),a}function zm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(yl(a),n)}),n.getAttribute(Ft)===null&&F.keepOriginalSource){var r=se.createComment(zm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~oi(n).indexOf(F.replacementClass))return sr.replace(t);var a=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Dn(s)}).join(`
`);n.setAttribute(Ft,""),n.innerHTML=o}};function No(e){e()}function _l(e,t){var n=typeof t=="function"?t:or;if(e.length===0)n();else{var r=No;F.mutateApproach===Ud&&(r=wt.requestAnimationFrame||No),r(function(){var a=Fm(),i=di.begin("mutate");e.map(a),i(),n()})}}var mi=!1;function xl(){mi=!0}function Ca(){mi=!1}var gr=null;function Mo(e){if(Eo&&F.observeMutations){var t=e.treeCallback,n=t===void 0?or:t,r=e.nodeCallback,a=r===void 0?or:r,i=e.pseudoElementsCallback,o=i===void 0?or:i,s=e.observeMutationsRoot,l=s===void 0?se:s;gr=new Eo(function(f){if(!mi){var c=Et();on(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Ro(u.addedNodes[0])&&(F.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&F.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Ro(u.target)&&~Gd.indexOf(u.attributeName))if(u.attributeName==="class"&&Mm(u.target)){var p=Nr(oi(u.target)),g=p.prefix,k=p.iconName;u.target.setAttribute(ri,g||c),k&&u.target.setAttribute(ai,k)}else Lm(u.target)&&a(u.target)})}}),ct&&gr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $m(){gr&&gr.disconnect()}function Hm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Bm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nr(oi(e));return a.prefix||(a.prefix=Et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ym(a.prefix,e.innerText)||ci(a.prefix,ya(e.innerText))),!a.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Um(e){var t=on(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Mn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Um(e),s=xa("parseNodeAttributes",{},e),l=t.styleParser?Hm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Xe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ym=$e.styles;function wl(e){var t=F.autoReplaceSvg==="nest"?Lo(e,{styleParser:!1}):Lo(e);return~t.extra.classes.indexOf(al)?ot("generateLayersText",e,t):ot("generateSvgReplacementMutation",e,t)}var kt=new Set;ii.map(function(e){kt.add("fa-".concat(e))});Object.keys(Tn[oe]).map(kt.add.bind(kt));Object.keys(Tn[ce]).map(kt.add.bind(kt));kt=Fn(kt);function Fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ct)return Promise.resolve();var n=se.documentElement.classList,r=function(u){return n.add("".concat(ko,"-").concat(u))},a=function(u){return n.remove("".concat(ko,"-").concat(u))},i=F.autoFetchSvg?kt:ii.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ym));i.includes("fa")||i.push("fa");var o=[".".concat(al,":not([").concat(Ft,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=on(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=di.begin("onTree"),f=s.reduce(function(c,u){try{var p=wl(u);p&&c.push(p)}catch(g){rl||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(p){_l(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),u(p)})})}function Km(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wl(e).then(function(n){n&&_l([n],t)})}function qm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wa(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Vm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Xe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,p=u===void 0?null:u,g=n.titleId,k=g===void 0?null:g,A=n.classes,M=A===void 0?[]:A,b=n.attributes,_=b===void 0?{}:b,R=n.styles,P=R===void 0?{}:R;if(t){var H=t.prefix,G=t.iconName,ne=t.icon;return Mr(I({type:"icon"},t),function(){return jt("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(p?_["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(k||Mn()):(_["aria-hidden"]="true",_.focusable="false")),ui({icons:{main:Ea(ne),mask:l?Ea(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:G,transform:I(I({},Xe),a),symbol:o,title:p,maskId:c,titleId:k,extra:{attributes:_,styles:P,classes:M}})})}},Xm={mixout:function(){return{icon:qm(Vm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fo,n.nodeCallback=Km,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return Fo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,p=r.extra;return new Promise(function(g,k){Promise.all([ka(a,s),c.iconName?ka(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var M=ti(A,2),b=M[0],_=M[1];g([n,ui({icons:{main:b,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:p,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ir(s);l.length>0&&(a.style=l);var f;return si(o)&&(f=ot("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Gm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mr({type:"layer"},function(){jt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Fn(i)).join(" ")},children:o}]})}}}},Qm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return Mr({type:"counter",content:n},function(){return jt("beforeDOMElementCreation",{content:n,params:r}),Tm({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Fn(s))}})})}}}},Jm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Xe:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Mr({type:"text",content:n},function(){return jt("beforeDOMElementCreation",{content:n,params:r}),To({content:n,transform:I(I({},Xe),i),title:s,extra:{attributes:u,styles:g,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Fn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(el){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return F.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,To({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Zm=new RegExp('"',"ug"),jo=[1105920,1112319];function ep(e){var t=e.replace(Zm,""),n=mm(t,0),r=n>=jo[0]&&n<=jo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ya(a?t[0]:t),isSecondary:r||a}}function Do(e,t){var n="".concat(Bd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=on(e.children),o=i.filter(function(ne){return ne.getAttribute(ba)===t})[0],s=wt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?In[p][l[2].toLowerCase()]:Vd[p][f],k=ep(u),A=k.value,M=k.isSecondary,b=l[0].startsWith("FontAwesome"),_=ci(g,A),R=_;if(b){var P=_m(A);P.iconName&&P.prefix&&(_=P.iconName,g=P.prefix)}if(_&&!M&&(!o||o.getAttribute(ri)!==g||o.getAttribute(ai)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var H=Wm(),G=H.extra;G.attributes[ba]=t,ka(_,g).then(function(ne){var U=ui(I(I({},H),{},{icons:{main:ne,mask:fi()},prefix:g,iconName:R,extra:G,watchable:!0})),q=se.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=U.map(function(Q){return Dn(Q)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function tp(e){return Promise.all([Do(e,"::before"),Do(e,"::after")])}function np(e){return e.parentNode!==document.head&&!~Wd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ba)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zo(e){if(ct)return new Promise(function(t,n){var r=on(e.querySelectorAll("*")).filter(np).map(tp),a=di.begin("searchPseudoElements");xl(),Promise.all(r).then(function(){a(),Ca(),t()}).catch(function(){a(),Ca(),n()})})}var rp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;F.searchPseudoElements&&zo(a)}}},$o=!1,ap={mixout:function(){return{dom:{unwatch:function(){xl(),$o=!0}}}},hooks:function(){return{bootstrap:function(){Mo(xa("mutationObserverCallbacks",{}))},noAuto:function(){$m()},watch:function(n){var r=n.observeMutationsRoot;$o?Ca():Mo(xa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ho=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ip={mixout:function(){return{parse:{transform:function(n){return Ho(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ho(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:u,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Gr={x:0,y:0,width:"100%",height:"100%"};function Bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function op(e){return e.tag==="g"?e.children:[e]}var sp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nr(a.split(" ").map(function(o){return o.trim()})):fi();return i.prefix||(i.prefix=Et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,p=o.icon,g=im({transform:l,containerWidth:u,iconWidth:f}),k={tag:"rect",attributes:I(I({},Gr),{},{fill:"white"})},A=c.children?{children:c.children.map(Bo)}:{},M={tag:"g",attributes:I({},g.inner),children:[Bo(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},A))]},b={tag:"g",attributes:I({},g.outer),children:[M]},_="mask-".concat(s||Mn()),R="clip-".concat(s||Mn()),P={tag:"mask",attributes:I(I({},Gr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,b]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:op(p)},P]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(_,")")},Gr)}),{children:r,attributes:a}}}},lp={provides:function(t){var n=!1;wt.matchMedia&&(n=wt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},cp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},fp=[lm,Xm,Gm,Qm,Jm,rp,ap,ip,sp,lp,cp];Em(fp,{mixoutsTo:Te});Te.noAuto;Te.config;var up=Te.library;Te.dom;var dp=Te.parse;Te.findIconDefinition;Te.toHtml;var mp=Te.icon;Te.layer;Te.text;Te.counter;var pp={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},hp=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gp(e,t){return t={exports:{}},e(t,t.exports),t.exports}var vp=gp(function(e){(function(t){var n=function(b,_,R){if(!f(_)||u(_)||p(_)||g(_)||l(_))return _;var P,H=0,G=0;if(c(_))for(P=[],G=_.length;H<G;H++)P.push(n(b,_[H],R));else{P={};for(var ne in _)Object.prototype.hasOwnProperty.call(_,ne)&&(P[b(ne,R)]=n(b,_[ne],R))}return P},r=function(b,_){_=_||{};var R=_.separator||"_",P=_.split||/(?=[A-Z])/;return b.split(P).join(R)},a=function(b){return k(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,R){return R?R.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var _=a(b);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(b,_){return r(b,_).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},u=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},k=function(b){return b=b-0,b===b},A=function(b,_){var R=_&&"process"in _?_.process:_;return typeof R!="function"?b:function(P,H){return R(P,b,H)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,_){return n(A(a,_),b)},decamelizeKeys:function(b,_){return n(A(o,_),b,_)},pascalizeKeys:function(b,_){return n(A(i,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(hp)}),bp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pn=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Pa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yp=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n};function _p(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vp.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function xp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function El(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return El(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=xp(c);break;case"style":l.style=_p(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=yp(n,["class","style"]);return Sr(e.tag,Pa({},t,{class:a.class,style:Pa({},a.style,o)},a.attrs,s),r)}var kl=!1;try{kl=!0}catch{}function wp(){if(!kl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pn({},e,t):{}}function Ep(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pn(t,"fa-"+e.size,e.size!==null),pn(t,"fa-rotate-"+e.rotation,e.rotation!==null),pn(t,"fa-pull-"+e.pull,e.pull!==null),pn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Uo(e){if(e===null)return null;if((typeof e>"u"?"undefined":bp(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var kp=Wa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Uo(t.icon)}),i=ve(function(){return Qr("classes",Ep(t))}),o=ve(function(){return Qr("transform",typeof t.transform=="string"?dp.transform(t.transform):t.transform)}),s=ve(function(){return Qr("mask",Uo(t.mask))}),l=ve(function(){return mp(a.value,Pa({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});gn(l,function(c){if(!c)return wp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ve(function(){return l.value?El(l.value.abstract[0],{},r):null});return function(){return f.value}}});up.add(pp);const pi=lu(md);pi.component("fa",kp);pi.use(Rd);pi.mount("#app");export{Xs as _,ye as a,Re as b,Va as c,fe as d,Ef as e,Ic as f,qa as o,Tc as p,Jc as r};
