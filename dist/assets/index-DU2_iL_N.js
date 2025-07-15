(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},rr=[],Sn=()=>{},Gd=()=>!1,bo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),kl=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Wl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kd=Object.prototype.hasOwnProperty,nt=(n,e)=>kd.call(n,e),ke=Array.isArray,sr=n=>Ao(n)==="[object Map]",Pf=n=>Ao(n)==="[object Set]",qe=n=>typeof n=="function",St=n=>typeof n=="string",hi=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",Lf=n=>(pt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Df=Object.prototype.toString,Ao=n=>Df.call(n),Wd=n=>Ao(n).slice(8,-1),If=n=>Ao(n)==="[object Object]",Xl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xr=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Xd=/-(\w)/g,tn=wo(n=>n.replace(Xd,(e,t)=>t?t.toUpperCase():"")),qd=/\B([A-Z])/g,Oi=wo(n=>n.replace(qd,"-$1").toLowerCase()),Ro=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Go=wo(n=>n?`on${Ro(n)}`:""),oi=(n,e)=>!Object.is(n,e),ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Oa=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Yd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Dc;const Co=()=>Dc||(Dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?Jd(i):xs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||pt(n))return n}const $d=/;(?![^(]*\))/g,Kd=/:([^]+)/,jd=/\/\*[^]*?\*\//g;function Jd(n){const e={};return n.replace(jd,"").split($d).forEach(t=>{if(t){const i=t.split(Kd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Po(n){let e="";if(St(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Po(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qd=Gl(Zd);function Uf(n){return!!n||n===""}const Nf=n=>!!(n&&n.__v_isRef===!0),Hr=n=>St(n)?n:n==null?"":ke(n)||pt(n)&&(n.toString===Df||!qe(n.toString))?Nf(n)?Hr(n.value):JSON.stringify(n,Ff,2):String(n),Ff=(n,e)=>Nf(e)?Ff(n,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Wo(i,s)+" =>"]=r,t),{})}:Pf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wo(t))}:hi(e)?Wo(e):pt(e)&&!ke(e)&&!If(e)?String(e):e,Wo=(n,e="")=>{var t;return hi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class Of{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){this._on>0&&--this._on===0&&(Vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ep(n){return new Of(n)}function tp(){return Vt}let lt;const Xo=new WeakSet;class Bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xo.has(this)&&(Xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ic(this),Vf(this);const e=lt,t=fn;lt=this,fn=!0;try{return this.fn()}finally{Gf(this),lt=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,Ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let zf=0,qr,Yr;function Hf(n,e=!1){if(n.flags|=8,e){n.next=Yr,Yr=n;return}n.next=qr,qr=n}function ql(){zf++}function Yl(){if(--zf>0)return;if(Yr){let e=Yr;for(Yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qr;){let e=qr;for(qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Vf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),$l(i),np(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ba(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===is)||(n.globalVersion=is,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ba(n))))return;n.flags|=2;const e=n.dep,t=lt,i=fn;lt=n,fn=!0;try{Vf(n);const r=n.fn(n._value);(e.version===0||oi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,fn=i,Gf(n),n.flags&=-3}}function $l(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)$l(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function np(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const Wf=[];function Wn(){Wf.push(fn),fn=!1}function Xn(){const n=Wf.pop();fn=n===void 0?!0:n}function Ic(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let is=0;class ip{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!lt||!fn||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new ip(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,Xf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,is++,this.notify(e)}notify(e){ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yl()}}}function Xf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const za=new WeakMap,Di=Symbol(""),Ha=Symbol(""),rs=Symbol("");function wt(n,e,t){if(fn&&lt){let i=za.get(n);i||za.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Kl),r.map=i,r.key=t),r.track()}}function On(n,e,t,i,r,s){const o=za.get(n);if(!o){is++;return}const a=l=>{l&&l.trigger()};if(ql(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Xl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===rs||!hi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(rs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Di)),sr(n)&&a(o.get(Ha)));break;case"delete":l||(a(o.get(Di)),sr(n)&&a(o.get(Ha)));break;case"set":sr(n)&&a(o.get(Di));break}}Yl()}function zi(n){const e=tt(n);return e===n?e:(wt(e,"iterate",rs),en(n)?e:e.map(Tt))}function Lo(n){return wt(n=tt(n),"iterate",rs),n}const rp={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,Tt)},concat(...n){return zi(this).concat(...n.map(e=>ke(e)?zi(e):e))},entries(){return qo(this,"entries",n=>(n[1]=Tt(n[1]),n))},every(n,e){return wn(this,"every",n,e,void 0,arguments)},filter(n,e){return wn(this,"filter",n,e,t=>t.map(Tt),arguments)},find(n,e){return wn(this,"find",n,e,Tt,arguments)},findIndex(n,e){return wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wn(this,"findLast",n,e,Tt,arguments)},findLastIndex(n,e){return wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Yo(this,"includes",n)},indexOf(...n){return Yo(this,"indexOf",n)},join(n){return zi(this).join(n)},lastIndexOf(...n){return Yo(this,"lastIndexOf",n)},map(n,e){return wn(this,"map",n,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...n){return Lr(this,"push",n)},reduce(n,...e){return Uc(this,"reduce",n,e)},reduceRight(n,...e){return Uc(this,"reduceRight",n,e)},shift(){return Lr(this,"shift")},some(n,e){return wn(this,"some",n,e,void 0,arguments)},splice(...n){return Lr(this,"splice",n)},toReversed(){return zi(this).toReversed()},toSorted(n){return zi(this).toSorted(n)},toSpliced(...n){return zi(this).toSpliced(...n)},unshift(...n){return Lr(this,"unshift",n)},values(){return qo(this,"values",Tt)}};function qo(n,e,t){const i=Lo(n),r=i[e]();return i!==n&&!en(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const sp=Array.prototype;function wn(n,e,t,i,r,s){const o=Lo(n),a=o!==n&&!en(n),l=o[e];if(l!==sp[e]){const f=l.apply(n,s);return a?Tt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Tt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Uc(n,e,t,i){const r=Lo(n);let s=t;return r!==n&&(en(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Tt(a),l,n)}),r[e](s,...i)}function Yo(n,e,t){const i=tt(n);wt(i,"iterate",rs);const r=i[e](...t);return(r===-1||r===!1)&&Zl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function Lr(n,e,t=[]){Wn(),ql();const i=tt(n)[e].apply(n,t);return Yl(),Xn(),i}const op=Gl("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hi));function ap(n){hi(n)||(n=String(n));const e=tt(this);return wt(e,"has",n),e.hasOwnProperty(n)}class Yf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?_p:Jf:s?jf:Kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=rp[t]))return l;if(t==="hasOwnProperty")return ap}const a=Reflect.get(e,t,Ct(e)?e:i);return(hi(t)?qf.has(t):op(t))||(r||wt(e,"get",t),s)?a:Ct(a)?o&&Xl(t)?a:a.value:pt(a)?r?Qf(a):Ss(a):a}}class $f extends Yf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ci(s);if(!en(i)&&!ci(i)&&(s=tt(s),i=tt(i)),!ke(e)&&Ct(s)&&!Ct(i))return l?!1:(s.value=i,!0)}const o=ke(e)&&Xl(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Ct(e)?e:r);return e===tt(r)&&(o?oi(i,s)&&On(e,"set",t,i):On(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&On(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!hi(t)||!qf.has(t))&&wt(e,"has",t),i}ownKeys(e){return wt(e,"iterate",ke(e)?"length":Di),Reflect.ownKeys(e)}}class lp extends Yf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cp=new $f,up=new lp,fp=new $f(!0);const Va=n=>n,Ps=n=>Reflect.getPrototypeOf(n);function hp(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Va:e?go:Tt;return!e&&wt(s,"iterate",l?Ha:Di),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ls(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function dp(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(oi(r,a)&&wt(o,"get",r),wt(o,"get",a));const{has:l}=Ps(o),c=e?Va:n?go:Tt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&wt(tt(r),"iterate",Di),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(oi(r,a)&&wt(o,"has",r),wt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?Va:n?go:Tt;return!n&&wt(l,"iterate",Di),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:Ls("add"),set:Ls("set"),delete:Ls("delete"),clear:Ls("clear")}:{add(r){!e&&!en(r)&&!ci(r)&&(r=tt(r));const s=tt(this);return Ps(s).has.call(s,r)||(s.add(r),On(s,"add",r,r)),this},set(r,s){!e&&!en(s)&&!ci(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=Ps(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?oi(s,u)&&On(o,"set",r,s):On(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=Ps(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&On(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&On(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=hp(r,n,e)}),t}function jl(n,e){const t=dp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const pp={get:jl(!1,!1)},mp={get:jl(!1,!0)},gp={get:jl(!0,!1)};const Kf=new WeakMap,jf=new WeakMap,Jf=new WeakMap,_p=new WeakMap;function vp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xp(n){return n.__v_skip||!Object.isExtensible(n)?0:vp(Wd(n))}function Ss(n){return ci(n)?n:Jl(n,!1,cp,pp,Kf)}function Zf(n){return Jl(n,!1,fp,mp,jf)}function Qf(n){return Jl(n,!0,up,gp,Jf)}function Jl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=xp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function or(n){return ci(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function Zl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function eh(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Oa(n,"__v_skip",!0),n}const Tt=n=>pt(n)?Ss(n):n,go=n=>pt(n)?Qf(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function si(n){return th(n,!1)}function Sp(n){return th(n,!0)}function th(n,e){return Ct(n)?n:new Mp(n,e)}class Mp{constructor(e,t){this.dep=new Kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Tt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||en(e)||ci(e);e=i?e:tt(e),oi(e,t)&&(this._rawValue=e,this._value=i?e:Tt(e),this.dep.trigger())}}function ar(n){return Ct(n)?n.value:n}const yp={get:(n,e,t)=>e==="__v_raw"?n:ar(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function nh(n){return or(n)?n:new Proxy(n,yp)}class Ep{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return Hf(this,!0),!0}get value(){const e=this.dep.track();return kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tp(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new Ep(i,r,t)}const Ds={},_o=new WeakMap;let Ti;function bp(n,e=!1,t=Ti){if(t){let i=_o.get(t);i||_o.set(t,i=[]),i.push(n)}}function Ap(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:en(S)||r===!1||r===0?ii(S,1):ii(S);let u,f,h,d,_=!1,x=!1;if(Ct(n)?(f=()=>n.value,_=en(n)):or(n)?(f=()=>c(n),_=!0):ke(n)?(x=!0,_=n.some(S=>or(S)||en(S)),f=()=>n.map(S=>{if(Ct(S))return S.value;if(or(S))return c(S);if(qe(S))return l?l(S,2):S()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Wn();try{h()}finally{Xn()}}const S=Ti;Ti=u;try{return l?l(n,3,[d]):n(d)}finally{Ti=S}}:f=Sn,e&&r){const S=f,U=r===!0?1/0:r;f=()=>ii(S(),U)}const m=tp(),p=()=>{u.stop(),m&&m.active&&Wl(m.effects,u)};if(s&&e){const S=e;e=(...U)=>{S(...U),p()}}let A=x?new Array(n.length).fill(Ds):Ds;const y=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const U=u.run();if(r||_||(x?U.some((P,C)=>oi(P,A[C])):oi(U,A))){h&&h();const P=Ti;Ti=u;try{const C=[U,A===Ds?void 0:x&&A[0]===Ds?[]:A,d];A=U,l?l(e,3,C):e(...C)}finally{Ti=P}}}else u.run()};return a&&a(y),u=new Bf(f),u.scheduler=o?()=>o(y,!1):y,d=S=>bp(S,!1,u),h=u.onStop=()=>{const S=_o.get(u);if(S){if(l)l(S,4);else for(const U of S)U();_o.delete(u)}},e?i?y(!0):A=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ii(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))ii(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)ii(n[i],e,t);else if(Pf(n)||sr(n))n.forEach(i=>{ii(i,e,t)});else if(If(n)){for(const i in n)ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ms(n,e,t,i){try{return i?n(...i):n()}catch(r){Do(r,e,t)}}function yn(n,e,t,i){if(qe(n)){const r=Ms(n,e,t,i);return r&&Lf(r)&&r.catch(s=>{Do(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],e,t,i));return r}}function Do(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Wn(),Ms(s,null,10,[n,l,c]),Xn();return}}wp(n,t,r,i,o)}function wp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Nt=[];let mn=-1;const lr=[];let ei=null,tr=0;const ih=Promise.resolve();let vo=null;function rh(n){const e=vo||ih;return n?e.then(this?n.bind(this):n):e}function Rp(n){let e=mn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,r=Nt[i],s=ss(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ql(n){if(!(n.flags&1)){const e=ss(n),t=Nt[Nt.length-1];!t||!(n.flags&2)&&e>=ss(t)?Nt.push(n):Nt.splice(Rp(e),0,n),n.flags|=1,sh()}}function sh(){vo||(vo=ih.then(ah))}function Cp(n){ke(n)?lr.push(...n):ei&&n.id===-1?ei.splice(tr+1,0,n):n.flags&1||(lr.push(n),n.flags|=1),sh()}function Nc(n,e,t=mn+1){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oh(n){if(lr.length){const e=[...new Set(lr)].sort((t,i)=>ss(t)-ss(i));if(lr.length=0,ei){ei.push(...e);return}for(ei=e,tr=0;tr<ei.length;tr++){const t=ei[tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ei=null,tr=0}}const ss=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ah(n){try{for(mn=0;mn<Nt.length;mn++){const e=Nt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<Nt.length;mn++){const e=Nt[mn];e&&(e.flags&=-2)}mn=-1,Nt.length=0,oh(),vo=null,(Nt.length||lr.length)&&ah()}}let cn=null,lh=null;function xo(n){const e=cn;return cn=n,lh=n&&n.type.__scopeId||null,e}function Pp(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xc(-1);const s=xo(e);let o;try{o=n(...r)}finally{xo(s),i._d&&Xc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Wn(),yn(l,t,8,[n.el,a,n,e]),Xn())}}const Lp=Symbol("_vte"),Dp=n=>n.__isTeleport;function ec(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ec(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ys(n,e){return qe(n)?Lt({name:n.name},e,{setup:n}):n}function ch(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $r(n,e,t,i,r=!1){if(ke(n)){n.forEach((_,x)=>$r(_,e&&(ke(e)?e[x]:e),t,i,r));return}if(Kr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$r(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?sc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,h=tt(f),d=f===ct?()=>!1:_=>nt(h,_);if(c!=null&&c!==l&&(St(c)?(u[c]=null,d(c)&&(f[c]=null)):Ct(c)&&(c.value=null)),qe(l))Ms(l,a,12,[o,u]);else{const _=St(l),x=Ct(l);if(_||x){const m=()=>{if(n.f){const p=_?d(l)?f[l]:u[l]:l.value;r?ke(p)&&Wl(p,s):ke(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Yt(m,t)):m()}}}Co().requestIdleCallback;Co().cancelIdleCallback;const Kr=n=>!!n.type.__asyncLoader,uh=n=>n.type.__isKeepAlive;function Ip(n,e){fh(n,"a",e)}function Up(n,e){fh(n,"da",e)}function fh(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Io(e,i,t),t){let r=t.parent;for(;r&&r.parent;)uh(r.parent.vnode)&&Np(i,e,t,r),r=r.parent}}function Np(n,e,t,i){const r=Io(e,n,i,!0);Uo(()=>{Wl(i[e],r)},t)}function Io(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Wn();const a=Es(t),l=yn(e,t,n,o);return a(),Xn(),l});return i?r.unshift(s):r.push(s),s}}const qn=n=>(e,t=Rt)=>{(!as||n==="sp")&&Io(n,(...i)=>e(...i),t)},Fp=qn("bm"),tc=qn("m"),Op=qn("bu"),Bp=qn("u"),zp=qn("bum"),Uo=qn("um"),Hp=qn("sp"),Vp=qn("rtg"),Gp=qn("rtc");function kp(n,e=Rt){Io("ec",n,e)}const Wp="components";function Xp(n,e){return Yp(Wp,n,!0,e)||n}const qp=Symbol.for("v-ndc");function Yp(n,e,t=!0,i=!1){const r=cn||Rt;if(r){const s=r.type;{const a=Nm(s,!1);if(a&&(a===e||a===tn(e)||a===Ro(tn(e))))return s}const o=Fc(r[n]||s[n],e)||Fc(r.appContext[n],e);return!o&&i?s:o}}function Fc(n,e){return n&&(n[e]||n[tn(e)]||n[Ro(tn(e))])}function $p(n,e,t,i){let r;const s=t,o=ke(n);if(o||St(n)){const a=o&&or(n);let l=!1,c=!1;a&&(l=!en(n),c=ci(n),n=Lo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?go(Tt(n[u])):Tt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ga=n=>n?Dh(n)?sc(n):Ga(n.parent):null,jr=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ga(n.parent),$root:n=>Ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dh(n),$forceUpdate:n=>n.f||(n.f=()=>{Ql(n.update)}),$nextTick:n=>n.n||(n.n=rh.bind(n.proxy)),$watch:n=>mm.bind(n)}),$o=(n,e)=>n!==ct&&!n.__isScriptSetup&&nt(n,e),Kp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if($o(i,e))return o[e]=1,i[e];if(r!==ct&&nt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(t!==ct&&nt(t,e))return o[e]=4,t[e];ka&&(o[e]=0)}}const u=jr[e];let f,h;if(u)return e==="$attrs"&&wt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ct&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return $o(r,e)?(r[e]=t,!0):i!==ct&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ct&&nt(n,o)||$o(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(jr,o)||nt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Oc(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ka=!0;function jp(n){const e=dh(n),t=n.proxy,i=n.ctx;ka=!1,e.beforeCreate&&Bc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:y,unmounted:S,render:U,renderTracked:P,renderTriggered:C,errorCaptured:B,serverPrefetch:b,expose:E,inheritAttrs:L,components:oe,directives:j,filters:se}=e;if(c&&Jp(c,i,null),o)for(const ne in o){const q=o[ne];qe(q)&&(i[ne]=q.bind(t))}if(r){const ne=r.call(t,t);pt(ne)&&(n.data=Ss(ne))}if(ka=!0,s)for(const ne in s){const q=s[ne],de=qe(q)?q.bind(t,t):qe(q.get)?q.get.bind(t,t):Sn,ve=!qe(q)&&qe(q.set)?q.set.bind(t):Sn,xe=an({get:de,set:ve});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Fe=>xe.value=Fe})}if(a)for(const ne in a)hh(a[ne],i,t,ne);if(l){const ne=qe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(q=>{io(q,ne[q])})}u&&Bc(u,n,"c");function J(ne,q){ke(q)?q.forEach(de=>ne(de.bind(t))):q&&ne(q.bind(t))}if(J(Fp,f),J(tc,h),J(Op,d),J(Bp,_),J(Ip,x),J(Up,m),J(kp,B),J(Gp,P),J(Vp,C),J(zp,A),J(Uo,S),J(Hp,b),ke(E))if(E.length){const ne=n.exposed||(n.exposed={});E.forEach(q=>{Object.defineProperty(ne,q,{get:()=>t[q],set:de=>t[q]=de})})}else n.exposed||(n.exposed={});U&&n.render===Sn&&(n.render=U),L!=null&&(n.inheritAttrs=L),oe&&(n.components=oe),j&&(n.directives=j),b&&ch(n)}function Jp(n,e,t=Sn){ke(n)&&(n=Wa(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=Vn(r.from||i,r.default,!0):s=Vn(r.from||i):s=Vn(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Bc(n,e,t){yn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function hh(n,e,t,i){let r=i.includes(".")?Ah(t,i):()=>t[i];if(St(n)){const s=e[n];qe(s)&&ro(r,s)}else if(qe(n))ro(r,n.bind(t));else if(pt(n))if(ke(n))n.forEach(s=>hh(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&ro(r,s,n)}}function dh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>So(l,c,o,!0)),So(l,e,o)),pt(e)&&s.set(e,l),l}function So(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&So(n,s,t,!0),r&&r.forEach(o=>So(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Zp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Zp={data:zc,props:Hc,emits:Hc,methods:Vr,computed:Vr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Vr,directives:Vr,watch:em,provide:zc,inject:Qp};function zc(n,e){return e?n?function(){return Lt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Qp(n,e){return Vr(Wa(n),Wa(e))}function Wa(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Vr(n,e){return n?Lt(Object.create(null),n,e):e}function Hc(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Oc(n),Oc(e??{})):e}function em(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function ph(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function nm(n,e){return function(i,r=null){qe(i)||(i=Lt({},i)),r!=null&&!pt(r)&&(r=null);const s=ph(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:tm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Om,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ot(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,sc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=cr;cr=c;try{return u()}finally{cr=f}}};return c}}let cr=null;function io(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Vn(n,e,t=!1){const i=Rt||cn;if(i||cr){let r=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const mh={},gh=()=>Object.create(mh),_h=n=>Object.getPrototypeOf(n)===mh;function im(n,e,t,i=!1){const r={},s=gh();n.propsDefaults=Object.create(null),vh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Zf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function rm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(No(n.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=tn(h);r[_]=Xa(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{vh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=Oi(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Xa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&On(n.attrs,"set","")}function vh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xr(l))continue;const c=e[l];let u;r&&nt(r,u=tn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:No(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Xa(r,l,f,c[f],n,!nt(c,f))}}return o}function Xa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Es(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const sm=new WeakMap;function xh(n,e,t=!1){const i=t?sm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,d]=xh(f,e,!0);Lt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,rr),rr;if(ke(s))for(let u=0;u<s.length;u++){const f=tn(s[u]);Vc(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=tn(u);if(Vc(f)){const h=s[u],d=o[f]=ke(h)||qe(h)?{type:h}:Lt({},h),_=d.type;let x=!1,m=!0;if(ke(_))for(let p=0;p<_.length;++p){const A=_[p],y=qe(A)&&A.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=qe(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||nt(d,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Vc(n){return n[0]!=="$"&&!Xr(n)}const nc=n=>n[0]==="_"||n==="$stable",ic=n=>ke(n)?n.map(_n):[_n(n)],om=(n,e,t)=>{if(e._n)return e;const i=Pp((...r)=>ic(e(...r)),t);return i._c=!1,i},Sh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(nc(r))continue;const s=n[r];if(qe(s))e[r]=om(r,s,i);else if(s!=null){const o=ic(s);e[r]=()=>o}}},Mh=(n,e)=>{const t=ic(e);n.slots.default=()=>t},yh=(n,e,t)=>{for(const i in e)(t||!nc(i))&&(n[i]=e[i])},am=(n,e,t)=>{const i=n.slots=gh();if(n.vnode.shapeFlag&32){const r=e.__;r&&Oa(i,"__",r,!0);const s=e._;s?(yh(i,e,t),t&&Oa(i,"_",s,!0)):Sh(e,i)}else e&&Mh(n,e)},lm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:yh(r,e,t):(s=!e.$stable,Sh(e,r)),o=e}else e&&(Mh(n,e),o={default:1});if(s)for(const a in r)!nc(a)&&o[a]==null&&delete r[a]},Yt=ym;function cm(n){return um(n)}function um(n,e){const t=Co();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Sn,insertStaticContent:_}=n,x=(w,R,g,N=null,D=null,F=null,z=void 0,K=null,G=!!R.dynamicChildren)=>{if(w===R)return;w&&!Dr(w,R)&&(N=H(w),Fe(w,D,F,!0),w=null),R.patchFlag===-2&&(G=!1,R.dynamicChildren=null);const{type:Y,ref:fe,shapeFlag:M}=R;switch(Y){case Fo:m(w,R,g,N);break;case pr:p(w,R,g,N);break;case so:w==null&&A(R,g,N,z);break;case gn:oe(w,R,g,N,D,F,z,K,G);break;default:M&1?U(w,R,g,N,D,F,z,K,G):M&6?j(w,R,g,N,D,F,z,K,G):(M&64||M&128)&&Y.process(w,R,g,N,D,F,z,K,G,ae)}fe!=null&&D?$r(fe,w&&w.ref,F,R||w,!R):fe==null&&w&&w.ref!=null&&$r(w.ref,null,F,w,!0)},m=(w,R,g,N)=>{if(w==null)i(R.el=a(R.children),g,N);else{const D=R.el=w.el;R.children!==w.children&&c(D,R.children)}},p=(w,R,g,N)=>{w==null?i(R.el=l(R.children||""),g,N):R.el=w.el},A=(w,R,g,N)=>{[w.el,w.anchor]=_(w.children,R,g,N,w.el,w.anchor)},y=({el:w,anchor:R},g,N)=>{let D;for(;w&&w!==R;)D=h(w),i(w,g,N),w=D;i(R,g,N)},S=({el:w,anchor:R})=>{let g;for(;w&&w!==R;)g=h(w),r(w),w=g;r(R)},U=(w,R,g,N,D,F,z,K,G)=>{R.type==="svg"?z="svg":R.type==="math"&&(z="mathml"),w==null?P(R,g,N,D,F,z,K,G):b(w,R,D,F,z,K,G)},P=(w,R,g,N,D,F,z,K)=>{let G,Y;const{props:fe,shapeFlag:M,transition:v,dirs:I}=w;if(G=w.el=o(w.type,F,fe&&fe.is,fe),M&8?u(G,w.children):M&16&&B(w.children,G,null,N,D,Ko(w,F),z,K),I&&gi(w,null,N,"created"),C(G,w,w.scopeId,z,N),fe){for(const te in fe)te!=="value"&&!Xr(te)&&s(G,te,null,fe[te],F,N);"value"in fe&&s(G,"value",null,fe.value,F),(Y=fe.onVnodeBeforeMount)&&pn(Y,N,w)}I&&gi(w,null,N,"beforeMount");const X=fm(D,v);X&&v.beforeEnter(G),i(G,R,g),((Y=fe&&fe.onVnodeMounted)||X||I)&&Yt(()=>{Y&&pn(Y,N,w),X&&v.enter(G),I&&gi(w,null,N,"mounted")},D)},C=(w,R,g,N,D)=>{if(g&&d(w,g),N)for(let F=0;F<N.length;F++)d(w,N[F]);if(D){let F=D.subTree;if(R===F||Rh(F.type)&&(F.ssContent===R||F.ssFallback===R)){const z=D.vnode;C(w,z,z.scopeId,z.slotScopeIds,D.parent)}}},B=(w,R,g,N,D,F,z,K,G=0)=>{for(let Y=G;Y<w.length;Y++){const fe=w[Y]=K?ti(w[Y]):_n(w[Y]);x(null,fe,R,g,N,D,F,z,K)}},b=(w,R,g,N,D,F,z)=>{const K=R.el=w.el;let{patchFlag:G,dynamicChildren:Y,dirs:fe}=R;G|=w.patchFlag&16;const M=w.props||ct,v=R.props||ct;let I;if(g&&_i(g,!1),(I=v.onVnodeBeforeUpdate)&&pn(I,g,R,w),fe&&gi(R,w,g,"beforeUpdate"),g&&_i(g,!0),(M.innerHTML&&v.innerHTML==null||M.textContent&&v.textContent==null)&&u(K,""),Y?E(w.dynamicChildren,Y,K,g,N,Ko(R,D),F):z||q(w,R,K,null,g,N,Ko(R,D),F,!1),G>0){if(G&16)L(K,M,v,g,D);else if(G&2&&M.class!==v.class&&s(K,"class",null,v.class,D),G&4&&s(K,"style",M.style,v.style,D),G&8){const X=R.dynamicProps;for(let te=0;te<X.length;te++){const $=X[te],Ee=M[$],pe=v[$];(pe!==Ee||$==="value")&&s(K,$,Ee,pe,D,g)}}G&1&&w.children!==R.children&&u(K,R.children)}else!z&&Y==null&&L(K,M,v,g,D);((I=v.onVnodeUpdated)||fe)&&Yt(()=>{I&&pn(I,g,R,w),fe&&gi(R,w,g,"updated")},N)},E=(w,R,g,N,D,F,z)=>{for(let K=0;K<R.length;K++){const G=w[K],Y=R[K],fe=G.el&&(G.type===gn||!Dr(G,Y)||G.shapeFlag&198)?f(G.el):g;x(G,Y,fe,null,N,D,F,z,!0)}},L=(w,R,g,N,D)=>{if(R!==g){if(R!==ct)for(const F in R)!Xr(F)&&!(F in g)&&s(w,F,R[F],null,D,N);for(const F in g){if(Xr(F))continue;const z=g[F],K=R[F];z!==K&&F!=="value"&&s(w,F,K,z,D,N)}"value"in g&&s(w,"value",R.value,g.value,D)}},oe=(w,R,g,N,D,F,z,K,G)=>{const Y=R.el=w?w.el:a(""),fe=R.anchor=w?w.anchor:a("");let{patchFlag:M,dynamicChildren:v,slotScopeIds:I}=R;I&&(K=K?K.concat(I):I),w==null?(i(Y,g,N),i(fe,g,N),B(R.children||[],g,fe,D,F,z,K,G)):M>0&&M&64&&v&&w.dynamicChildren?(E(w.dynamicChildren,v,g,D,F,z,K),(R.key!=null||D&&R===D.subTree)&&Eh(w,R,!0)):q(w,R,g,fe,D,F,z,K,G)},j=(w,R,g,N,D,F,z,K,G)=>{R.slotScopeIds=K,w==null?R.shapeFlag&512?D.ctx.activate(R,g,N,z,G):se(R,g,N,D,F,z,G):le(w,R,G)},se=(w,R,g,N,D,F,z)=>{const K=w.component=Pm(w,N,D);if(uh(w)&&(K.ctx.renderer=ae),Lm(K,!1,z),K.asyncDep){if(D&&D.registerDep(K,J,z),!w.el){const G=K.subTree=Ot(pr);p(null,G,R,g)}}else J(K,w,R,g,D,F,z)},le=(w,R,g)=>{const N=R.component=w.component;if(Sm(w,R,g))if(N.asyncDep&&!N.asyncResolved){ne(N,R,g);return}else N.next=R,N.update();else R.el=w.el,N.vnode=R},J=(w,R,g,N,D,F,z)=>{const K=()=>{if(w.isMounted){let{next:M,bu:v,u:I,parent:X,vnode:te}=w;{const Re=Th(w);if(Re){M&&(M.el=te.el,ne(w,M,z)),Re.asyncDep.then(()=>{w.isUnmounted||K()});return}}let $=M,Ee;_i(w,!1),M?(M.el=te.el,ne(w,M,z)):M=te,v&&ko(v),(Ee=M.props&&M.props.onVnodeBeforeUpdate)&&pn(Ee,X,M,te),_i(w,!0);const pe=kc(w),be=w.subTree;w.subTree=pe,x(be,pe,f(be.el),H(be),w,D,F),M.el=pe.el,$===null&&Mm(w,pe.el),I&&Yt(I,D),(Ee=M.props&&M.props.onVnodeUpdated)&&Yt(()=>pn(Ee,X,M,te),D)}else{let M;const{el:v,props:I}=R,{bm:X,m:te,parent:$,root:Ee,type:pe}=w,be=Kr(R);_i(w,!1),X&&ko(X),!be&&(M=I&&I.onVnodeBeforeMount)&&pn(M,$,R),_i(w,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(pe);const Re=w.subTree=kc(w);x(null,Re,g,N,w,D,F),R.el=Re.el}if(te&&Yt(te,D),!be&&(M=I&&I.onVnodeMounted)){const Re=R;Yt(()=>pn(M,$,Re),D)}(R.shapeFlag&256||$&&Kr($.vnode)&&$.vnode.shapeFlag&256)&&w.a&&Yt(w.a,D),w.isMounted=!0,R=g=N=null}};w.scope.on();const G=w.effect=new Bf(K);w.scope.off();const Y=w.update=G.run.bind(G),fe=w.job=G.runIfDirty.bind(G);fe.i=w,fe.id=w.uid,G.scheduler=()=>Ql(fe),_i(w,!0),Y()},ne=(w,R,g)=>{R.component=w;const N=w.vnode.props;w.vnode=R,w.next=null,rm(w,R.props,N,g),lm(w,R.children,g),Wn(),Nc(w),Xn()},q=(w,R,g,N,D,F,z,K,G=!1)=>{const Y=w&&w.children,fe=w?w.shapeFlag:0,M=R.children,{patchFlag:v,shapeFlag:I}=R;if(v>0){if(v&128){ve(Y,M,g,N,D,F,z,K,G);return}else if(v&256){de(Y,M,g,N,D,F,z,K,G);return}}I&8?(fe&16&&ye(Y,D,F),M!==Y&&u(g,M)):fe&16?I&16?ve(Y,M,g,N,D,F,z,K,G):ye(Y,D,F,!0):(fe&8&&u(g,""),I&16&&B(M,g,N,D,F,z,K,G))},de=(w,R,g,N,D,F,z,K,G)=>{w=w||rr,R=R||rr;const Y=w.length,fe=R.length,M=Math.min(Y,fe);let v;for(v=0;v<M;v++){const I=R[v]=G?ti(R[v]):_n(R[v]);x(w[v],I,g,null,D,F,z,K,G)}Y>fe?ye(w,D,F,!0,!1,M):B(R,g,N,D,F,z,K,G,M)},ve=(w,R,g,N,D,F,z,K,G)=>{let Y=0;const fe=R.length;let M=w.length-1,v=fe-1;for(;Y<=M&&Y<=v;){const I=w[Y],X=R[Y]=G?ti(R[Y]):_n(R[Y]);if(Dr(I,X))x(I,X,g,null,D,F,z,K,G);else break;Y++}for(;Y<=M&&Y<=v;){const I=w[M],X=R[v]=G?ti(R[v]):_n(R[v]);if(Dr(I,X))x(I,X,g,null,D,F,z,K,G);else break;M--,v--}if(Y>M){if(Y<=v){const I=v+1,X=I<fe?R[I].el:N;for(;Y<=v;)x(null,R[Y]=G?ti(R[Y]):_n(R[Y]),g,X,D,F,z,K,G),Y++}}else if(Y>v)for(;Y<=M;)Fe(w[Y],D,F,!0),Y++;else{const I=Y,X=Y,te=new Map;for(Y=X;Y<=v;Y++){const De=R[Y]=G?ti(R[Y]):_n(R[Y]);De.key!=null&&te.set(De.key,Y)}let $,Ee=0;const pe=v-X+1;let be=!1,Re=0;const ue=new Array(pe);for(Y=0;Y<pe;Y++)ue[Y]=0;for(Y=I;Y<=M;Y++){const De=w[Y];if(Ee>=pe){Fe(De,D,F,!0);continue}let Ie;if(De.key!=null)Ie=te.get(De.key);else for($=X;$<=v;$++)if(ue[$-X]===0&&Dr(De,R[$])){Ie=$;break}Ie===void 0?Fe(De,D,F,!0):(ue[Ie-X]=Y+1,Ie>=Re?Re=Ie:be=!0,x(De,R[Ie],g,null,D,F,z,K,G),Ee++)}const Ce=be?hm(ue):rr;for($=Ce.length-1,Y=pe-1;Y>=0;Y--){const De=X+Y,Ie=R[De],Se=De+1<fe?R[De+1].el:N;ue[Y]===0?x(null,Ie,g,Se,D,F,z,K,G):be&&($<0||Y!==Ce[$]?xe(Ie,g,Se,2):$--)}}},xe=(w,R,g,N,D=null)=>{const{el:F,type:z,transition:K,children:G,shapeFlag:Y}=w;if(Y&6){xe(w.component.subTree,R,g,N);return}if(Y&128){w.suspense.move(R,g,N);return}if(Y&64){z.move(w,R,g,ae);return}if(z===gn){i(F,R,g);for(let M=0;M<G.length;M++)xe(G[M],R,g,N);i(w.anchor,R,g);return}if(z===so){y(w,R,g);return}if(N!==2&&Y&1&&K)if(N===0)K.beforeEnter(F),i(F,R,g),Yt(()=>K.enter(F),D);else{const{leave:M,delayLeave:v,afterLeave:I}=K,X=()=>{w.ctx.isUnmounted?r(F):i(F,R,g)},te=()=>{M(F,()=>{X(),I&&I()})};v?v(F,X,te):te()}else i(F,R,g)},Fe=(w,R,g,N=!1,D=!1)=>{const{type:F,props:z,ref:K,children:G,dynamicChildren:Y,shapeFlag:fe,patchFlag:M,dirs:v,cacheIndex:I}=w;if(M===-2&&(D=!1),K!=null&&(Wn(),$r(K,null,g,w,!0),Xn()),I!=null&&(R.renderCache[I]=void 0),fe&256){R.ctx.deactivate(w);return}const X=fe&1&&v,te=!Kr(w);let $;if(te&&($=z&&z.onVnodeBeforeUnmount)&&pn($,R,w),fe&6)ge(w.component,g,N);else{if(fe&128){w.suspense.unmount(g,N);return}X&&gi(w,null,R,"beforeUnmount"),fe&64?w.type.remove(w,R,g,ae,N):Y&&!Y.hasOnce&&(F!==gn||M>0&&M&64)?ye(Y,R,g,!1,!0):(F===gn&&M&384||!D&&fe&16)&&ye(G,R,g),N&&He(w)}(te&&($=z&&z.onVnodeUnmounted)||X)&&Yt(()=>{$&&pn($,R,w),X&&gi(w,null,R,"unmounted")},g)},He=w=>{const{type:R,el:g,anchor:N,transition:D}=w;if(R===gn){ie(g,N);return}if(R===so){S(w);return}const F=()=>{r(g),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(w.shapeFlag&1&&D&&!D.persisted){const{leave:z,delayLeave:K}=D,G=()=>z(g,F);K?K(w.el,F,G):G()}else F()},ie=(w,R)=>{let g;for(;w!==R;)g=h(w),r(w),w=g;r(R)},ge=(w,R,g)=>{const{bum:N,scope:D,job:F,subTree:z,um:K,m:G,a:Y,parent:fe,slots:{__:M}}=w;Gc(G),Gc(Y),N&&ko(N),fe&&ke(M)&&M.forEach(v=>{fe.renderCache[v]=void 0}),D.stop(),F&&(F.flags|=8,Fe(z,w,R,g)),K&&Yt(K,R),Yt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ye=(w,R,g,N=!1,D=!1,F=0)=>{for(let z=F;z<w.length;z++)Fe(w[z],R,g,N,D)},H=w=>{if(w.shapeFlag&6)return H(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),g=R&&R[Lp];return g?h(g):R};let ee=!1;const re=(w,R,g)=>{w==null?R._vnode&&Fe(R._vnode,null,null,!0):x(R._vnode||null,w,R,null,null,null,g),R._vnode=w,ee||(ee=!0,Nc(),oh(),ee=!1)},ae={p:x,um:Fe,m:xe,r:He,mt:se,mc:B,pc:q,pbc:E,n:H,o:n};return{render:re,hydrate:void 0,createApp:nm(re)}}function Ko({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function fm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Eh(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ti(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Eh(o,a)),a.type===Fo&&(a.el=o.el),a.type===pr&&!a.el&&(a.el=o.el)}}function hm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Th(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Th(e)}function Gc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const dm=Symbol.for("v-scx"),pm=()=>Vn(dm);function ro(n,e,t){return bh(n,e,t)}function bh(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(as){if(s==="sync"){const d=pm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Sn,d.resume=Sn,d.pause=Sn,d}}const u=Rt;a.call=(d,_,x)=>yn(d,u,_,x);let f=!1;s==="post"?a.scheduler=d=>{Yt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():Ql(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ap(n,e,a);return as&&(c?c.push(h):l&&h()),h}function mm(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Ah(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=Es(this),a=bh(r,s.bind(i),t);return o(),a}function Ah(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const gm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tn(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function _m(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&gm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>St(u)?u.trim():u)),o.number&&(r=t.map(Yd)));let a,l=i[a=Go(e)]||i[a=Go(tn(e))];!l&&s&&(l=i[a=Go(Oi(e))]),l&&yn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,yn(c,n,6,r)}}function wh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=wh(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(ke(s)?s.forEach(l=>o[l]=null):Lt(o,s),pt(n)&&i.set(n,o),o)}function No(n,e){return!n||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Oi(e))||nt(n,e))}function kc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:x}=n,m=xo(n);let p,A;try{if(t.shapeFlag&4){const S=r||i,U=S;p=_n(c.call(U,S,u,f,d,h,_)),A=a}else{const S=e;p=_n(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),A=e.props?a:vm(a)}}catch(S){Jr.length=0,Do(S,n,1),p=Ot(pr)}let y=p;if(A&&x!==!1){const S=Object.keys(A),{shapeFlag:U}=y;S.length&&U&7&&(s&&S.some(kl)&&(A=xm(A,s)),y=mr(y,A,!1,!0))}return t.dirs&&(y=mr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&ec(y,t.transition),p=y,xo(m),p}const vm=n=>{let e;for(const t in n)(t==="class"||t==="style"||bo(t))&&((e||(e={}))[t]=n[t]);return e},xm=(n,e)=>{const t={};for(const i in n)(!kl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Sm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Wc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!No(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Wc(i,o,c):!0:!!o;return!1}function Wc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!No(t,s))return!0}return!1}function Mm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Rh=n=>n.__isSuspense;function ym(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Cp(n)}const gn=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),pr=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),Jr=[];let $t=null;function Ii(n=!1){Jr.push($t=n?null:[])}function Em(){Jr.pop(),$t=Jr[Jr.length-1]||null}let os=1;function Xc(n,e=!1){os+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function Ch(n){return n.dynamicChildren=os>0?$t||rr:null,Em(),os>0&&$t&&$t.push(n),n}function ur(n,e,t,i,r,s){return Ch(at(n,e,t,i,r,s,!0))}function Tm(n,e,t,i,r){return Ch(Ot(n,e,t,i,r,!0))}function Mo(n){return n?n.__v_isVNode===!0:!1}function Dr(n,e){return n.type===e.type&&n.key===e.key}const Ph=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Ct(n)||qe(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function at(n,e=null,t=null,i=0,r=null,s=n===gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ph(e),ref:e&&oo(e),scopeId:lh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return a?(rc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),os>0&&!o&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const Ot=bm;function bm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===qp)&&(n=pr),Mo(n)){const a=mr(n,e,!0);return t&&rc(a,t),os>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(n)]=a:$t.push(a)),a.patchFlag=-2,a}if(Fm(n)&&(n=n.__vccOpts),e){e=Am(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Po(a)),pt(l)&&(Zl(l)&&!ke(l)&&(l=Lt({},l)),e.style=xs(l))}const o=St(n)?1:Rh(n)?128:Dp(n)?64:pt(n)?4:qe(n)?2:0;return at(n,e,t,i,r,o,s,!0)}function Am(n){return n?Zl(n)||_h(n)?Lt({},n):n:null}function mr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?wm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ph(c),ref:e&&e.ref?t&&s?ke(s)?s.concat(oo(e)):[s,oo(e)]:oo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mr(n.ssContent),ssFallback:n.ssFallback&&mr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ec(u,l.clone(u)),u}function Lh(n=" ",e=0){return Ot(Fo,null,n,e)}function qc(n,e){const t=Ot(so,null,n);return t.staticCount=e,t}function _n(n){return n==null||typeof n=="boolean"?Ot(pr):ke(n)?Ot(gn,null,n.slice()):Mo(n)?ti(n):Ot(Fo,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mr(n)}function rc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!_h(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[Lh(e)]):t=8);n.children=e,n.shapeFlag|=t}function wm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Po([e.class,i.class]));else if(r==="style")e.style=xs([e.style,i.style]);else if(bo(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function pn(n,e,t,i=null){yn(n,e,7,[t,i])}const Rm=ph();let Cm=0;function Pm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rm,s={uid:Cm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Of(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(i,r),emitsOptions:wh(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_m.bind(null,s),n.ce&&n.ce(s),s}let Rt=null,yo,qa;{const n=Co(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};yo=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),qa=e("__VUE_SSR_SETTERS__",t=>as=t)}const Es=n=>{const e=Rt;return yo(n),n.scope.on(),()=>{n.scope.off(),yo(e)}},Yc=()=>{Rt&&Rt.scope.off(),yo(null)};function Dh(n){return n.vnode.shapeFlag&4}let as=!1;function Lm(n,e=!1,t=!1){e&&qa(e);const{props:i,children:r}=n.vnode,s=Dh(n);im(n,i,s,e),am(n,r,t||e);const o=s?Dm(n,e):void 0;return e&&qa(!1),o}function Dm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Kp);const{setup:i}=t;if(i){Wn();const r=n.setupContext=i.length>1?Um(n):null,s=Es(n),o=Ms(i,n,0,[n.props,r]),a=Lf(o);if(Xn(),s(),(a||n.sp)&&!Kr(n)&&ch(n),a){if(o.then(Yc,Yc),e)return o.then(l=>{$c(n,l)}).catch(l=>{Do(l,n,0)});n.asyncDep=o}else $c(n,o)}else Ih(n)}function $c(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=nh(e)),Ih(n)}function Ih(n,e,t){const i=n.type;n.render||(n.render=i.render||Sn);{const r=Es(n);Wn();try{jp(n)}finally{Xn(),r()}}}const Im={get(n,e){return wt(n,"get",""),n[e]}};function Um(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Im),slots:n.slots,emit:n.emit,expose:e}}function sc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(nh(eh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jr)return jr[t](n)},has(e,t){return t in e||t in jr}})):n.proxy}function Nm(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function Fm(n){return qe(n)&&"__vccOpts"in n}const an=(n,e)=>Tp(n,e,as);function Uh(n,e,t){const i=arguments.length;return i===2?pt(e)&&!ke(e)?Mo(e)?Ot(n,null,[e]):Ot(n,e):Ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Mo(t)&&(t=[t]),Ot(n,e,t))}const Om="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ya;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{Ya=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Nh=Ya?n=>Ya.createHTML(n):n=>n,Bm="http://www.w3.org/2000/svg",zm="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,jc=Fn&&Fn.createElement("template"),Hm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Fn.createElementNS(Bm,n):e==="mathml"?Fn.createElementNS(zm,n):t?Fn.createElement(n,{is:t}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{jc.innerHTML=Nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=jc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vm=Symbol("_vtc");function Gm(n,e,t){const i=n[Vm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jc=Symbol("_vod"),km=Symbol("_vsh"),Wm=Symbol(""),Xm=/(^|;)\s*display\s*:/;function qm(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ao(i,a,"")}else for(const o in e)t[o]==null&&ao(i,o,"");for(const o in t)o==="display"&&(s=!0),ao(i,o,t[o])}else if(r){if(e!==t){const o=i[Wm];o&&(t+=";"+o),i.cssText=t,s=Xm.test(t)}}else e&&n.removeAttribute("style");Jc in n&&(n[Jc]=s?i.display:"",n[km]&&(i.display="none"))}const Zc=/\s*!important$/;function ao(n,e,t){if(ke(t))t.forEach(i=>ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ym(n,e);Zc.test(t)?n.setProperty(Oi(i),t.replace(Zc,""),"important"):n[i]=t}}const Qc=["Webkit","Moz","ms"],jo={};function Ym(n,e){const t=jo[e];if(t)return t;let i=tn(e);if(i!=="filter"&&i in n)return jo[e]=i;i=Ro(i);for(let r=0;r<Qc.length;r++){const s=Qc[r]+i;if(s in n)return jo[e]=s}return e}const eu="http://www.w3.org/1999/xlink";function tu(n,e,t,i,r,s=Qd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(eu,e.slice(6,e.length)):n.setAttributeNS(eu,e,t):t==null||s&&!Uf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":hi(t)?String(t):t)}function nu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Nh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Uf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function $m(n,e,t,i){n.addEventListener(e,t,i)}function Km(n,e,t,i){n.removeEventListener(e,t,i)}const iu=Symbol("_vei");function jm(n,e,t,i,r=null){const s=n[iu]||(n[iu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Jm(e);if(i){const c=s[e]=eg(i,r);$m(n,a,c,l)}else o&&(Km(n,a,o,l),s[e]=void 0)}}const ru=/(?:Once|Passive|Capture)$/;function Jm(n){let e;if(ru.test(n)){e={};let i;for(;i=n.match(ru);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let Jo=0;const Zm=Promise.resolve(),Qm=()=>Jo||(Zm.then(()=>Jo=0),Jo=Date.now());function eg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;yn(tg(i,t.value),e,5,[i])};return t.value=n,t.attached=Qm(),t}function tg(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const su=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ng=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Gm(n,i,o):e==="style"?qm(n,t,i):bo(e)?kl(e)||jm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ig(n,e,i,o))?(nu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?nu(n,tn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),tu(n,e,i,o))};function ig(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&su(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return su(e)&&St(t)?!1:e in n}const rg=Lt({patchProp:ng},Hm);let ou;function sg(){return ou||(ou=cm(rg))}const og=(...n)=>{const e=sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=lg(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,ag(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ag(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lg(n){return St(n)?document.querySelector(n):n}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const cg=Symbol();var au;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(au||(au={}));function ug(){const n=ep(!0),e=n.run(()=>si({}));let t=[],i=[];const r=eh({install(s){r._a=s,s.provide(cg,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const fg="modulepreload",hg=function(n){return"/"+n},lu={},dg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(t.map(c=>{if(c=hg(c),c in lu)return;lu[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":fg,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((d,_)=>{h.addEventListener("load",d),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const nr=typeof document<"u";function Fh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function pg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Fh(n.default)}const et=Object.assign;function Zo(n,e){const t={};for(const i in e){const r=e[i];t[i]=dn(r)?r.map(n):n(r)}return t}const Zr=()=>{},dn=Array.isArray,Oh=/#/g,mg=/&/g,gg=/\//g,_g=/=/g,vg=/\?/g,Bh=/\+/g,xg=/%5B/g,Sg=/%5D/g,zh=/%5E/g,Mg=/%60/g,Hh=/%7B/g,yg=/%7C/g,Vh=/%7D/g,Eg=/%20/g;function oc(n){return encodeURI(""+n).replace(yg,"|").replace(xg,"[").replace(Sg,"]")}function Tg(n){return oc(n).replace(Hh,"{").replace(Vh,"}").replace(zh,"^")}function $a(n){return oc(n).replace(Bh,"%2B").replace(Eg,"+").replace(Oh,"%23").replace(mg,"%26").replace(Mg,"`").replace(Hh,"{").replace(Vh,"}").replace(zh,"^")}function bg(n){return $a(n).replace(_g,"%3D")}function Ag(n){return oc(n).replace(Oh,"%23").replace(vg,"%3F")}function wg(n){return n==null?"":Ag(n).replace(gg,"%2F")}function ls(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Rg=/\/$/,Cg=n=>n.replace(Rg,"");function Qo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ig(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ls(o)}}function Pg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function cu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Lg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&gr(e.matched[i],t.matched[r])&&Gh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Gh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Dg(n[t],e[t]))return!1;return!0}function Dg(n,e){return dn(n)?uu(n,e):dn(e)?uu(e,n):n===e}function uu(n,e){return dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Ig(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cs;(function(n){n.pop="pop",n.push="push"})(cs||(cs={}));var Qr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qr||(Qr={}));function Ug(n){if(!n)if(nr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Cg(n)}const Ng=/^[^#]+#/;function Fg(n,e){return n.replace(Ng,"#")+e}function Og(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Oo=()=>({left:window.scrollX,top:window.scrollY});function Bg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Og(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fu(n,e){return(history.state?history.state.position-e:-1)+n}const Ka=new Map;function zg(n,e){Ka.set(n,e)}function Hg(n){const e=Ka.get(n);return Ka.delete(n),e}let Vg=()=>location.protocol+"//"+location.host;function kh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),cu(l,"")}return cu(t,n)+i+r}function Gg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=kh(n,location),_=t.value,x=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=x?h.position-x.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:cs.pop,direction:m?m>0?Qr.forward:Qr.back:Qr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:Oo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function hu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Oo():null}}function kg(n){const{history:e,location:t}=window,i={value:kh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Vg()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,hu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:Oo()});s(u.current,u,!0);const f=et({},hu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Wg(n){n=Ug(n);const e=kg(n),t=Gg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:n,go:i,createHref:Fg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Xg(n){return typeof n=="string"||n&&typeof n=="object"}function Wh(n){return typeof n=="string"||typeof n=="symbol"}const Xh=Symbol("");var du;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(du||(du={}));function _r(n,e){return et(new Error,{type:n,[Xh]:!0},e)}function Rn(n,e){return n instanceof Error&&Xh in n&&(e==null||!!(n.type&e))}const pu="[^/]+?",qg={sensitive:!1,strict:!1,start:!0,end:!0},Yg=/[.+*?^${}()[\]/\\]/g;function $g(n,e){const t=et({},qg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Yg,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=h;s.push({name:_,repeatable:x,optional:m});const A=p||pu;if(A!==pu){d+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+S.message)}}let y=x?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,d+=20,m&&(d+=-8),x&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:x,optional:m}=d,p=_ in c?c[_]:"";if(dn(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=dn(p)?p.join("/"):p;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Kg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Kg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(mu(i))return 1;if(mu(r))return-1}return r.length-i.length}function mu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const jg={type:0,value:""},Jg=/[a-zA-Z0-9_]/;function Zg(n){if(!n)return[[]];if(n==="/")return[[jg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Jg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Qg(n,e,t){const i=$g(Zg(n.path),t),r=et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function e_(n,e){const t=[],i=new Map;e=xu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,x=_u(f);x.aliasOf=d&&d.record;const m=xu(e,f),p=[x];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of S)p.push(_u(et({},x,{components:d?d.record.components:x.components,path:U,aliasOf:d?d.record:x})))}let A,y;for(const S of p){const{path:U}=S;if(h&&U[0]!=="/"){const P=h.record.path,C=P[P.length-1]==="/"?"":"/";S.path=h.record.path+(U&&C+U)}if(A=Qg(S,h,m),d?d.alias.push(A):(y=y||A,y!==A&&y.alias.push(A),_&&f.name&&!vu(A)&&o(f.name)),Yh(A)&&l(A),x.children){const P=x.children;for(let C=0;C<P.length;C++)s(P[C],A,d&&d.children[C])}d=d||A}return y?()=>{o(y)}:Zr}function o(f){if(Wh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=i_(f,t);t.splice(h,0,f),f.record.name&&!vu(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},x,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw _r(1,{location:f});m=d.record.name,_=et(gu(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&gu(f.params,d.keys.map(y=>y.name))),x=d.stringify(_)}else if(f.path!=null)x=f.path,d=t.find(y=>y.re.test(x)),d&&(_=d.parse(x),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw _r(1,{location:f,currentLocation:h});m=d.record.name,_=et({},h.params,f.params),x=d.stringify(_)}const p=[];let A=d;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:x,params:_,matched:p,meta:n_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function gu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function _u(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:t_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function t_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function vu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function n_(n){return n.reduce((e,t)=>et(e,t.meta),{})}function xu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function i_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;qh(n,e[s])<0?i=s:t=s+1}const r=r_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function r_(n){let e=n;for(;e=e.parent;)if(Yh(e)&&qh(n,e)===0)return e}function Yh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function s_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Bh," "),o=s.indexOf("="),a=ls(o<0?s:s.slice(0,o)),l=o<0?null:ls(s.slice(o+1));if(a in e){let c=e[a];dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Su(n){let e="";for(let t in n){const i=n[t];if(t=bg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(dn(i)?i.map(s=>s&&$a(s)):[i&&$a(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function o_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const a_=Symbol(""),Mu=Symbol(""),ac=Symbol(""),$h=Symbol(""),ja=Symbol("");function Ir(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ni(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(_r(4,{from:t,to:e})):h instanceof Error?l(h):Xg(h)?l(_r(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function ea(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fh(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ni(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=pg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ni(d,t,i,o,a,r)()}))}}return s}function yu(n){const e=Vn(ac),t=Vn($h),i=an(()=>{const l=ar(n.to);return e.resolve(l)}),r=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(gr.bind(null,u));if(h>-1)return h;const d=Eu(l[c-2]);return c>1&&Eu(u)===d&&f[f.length-1].path!==d?f.findIndex(gr.bind(null,l[c-2])):h}),s=an(()=>r.value>-1&&h_(t.params,i.value.params)),o=an(()=>r.value>-1&&r.value===t.matched.length-1&&Gh(t.params,i.value.params));function a(l={}){if(f_(l)){const c=e[ar(n.replace)?"replace":"push"](ar(n.to)).catch(Zr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function l_(n){return n.length===1?n[0]:n}const c_=ys({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yu,setup(n,{slots:e}){const t=Ss(yu(n)),{options:i}=Vn(ac),r=an(()=>({[Tu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Tu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&l_(e.default(t));return n.custom?s:Uh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),u_=c_;function f_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function h_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!dn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Eu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Tu=(n,e,t)=>n??e??t,d_=ys({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Vn(ja),r=an(()=>n.route||i.value),s=Vn(Mu,0),o=an(()=>{let c=ar(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=an(()=>r.value.matched[o.value]);io(Mu,an(()=>o.value+1)),io(a_,a),io(ja,r);const l=si();return ro(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!gr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return bu(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Uh(h,et({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return bu(t.default,{Component:m,route:c})||m}}});function bu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const p_=d_;function m_(n){const e=e_(n.routes,n),t=n.parseQuery||s_,i=n.stringifyQuery||Su,r=n.history,s=Ir(),o=Ir(),a=Ir(),l=Sp(Yn);let c=Yn;nr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zo.bind(null,H=>""+H),f=Zo.bind(null,wg),h=Zo.bind(null,ls);function d(H,ee){let re,ae;return Wh(H)?(re=e.getRecordMatcher(H),ae=ee):ae=H,e.addRoute(ae,re)}function _(H){const ee=e.getRecordMatcher(H);ee&&e.removeRoute(ee)}function x(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function p(H,ee){if(ee=et({},ee||l.value),typeof H=="string"){const g=Qo(t,H,ee.path),N=e.resolve({path:g.path},ee),D=r.createHref(g.fullPath);return et(g,N,{params:h(N.params),hash:ls(g.hash),redirectedFrom:void 0,href:D})}let re;if(H.path!=null)re=et({},H,{path:Qo(t,H.path,ee.path).path});else{const g=et({},H.params);for(const N in g)g[N]==null&&delete g[N];re=et({},H,{params:f(g)}),ee.params=f(ee.params)}const ae=e.resolve(re,ee),Oe=H.hash||"";ae.params=u(h(ae.params));const w=Pg(i,et({},H,{hash:Tg(Oe),path:ae.path})),R=r.createHref(w);return et({fullPath:w,hash:Oe,query:i===Su?o_(H.query):H.query||{}},ae,{redirectedFrom:void 0,href:R})}function A(H){return typeof H=="string"?Qo(t,H,l.value.path):et({},H)}function y(H,ee){if(c!==H)return _r(8,{from:ee,to:H})}function S(H){return C(H)}function U(H){return S(et(A(H),{replace:!0}))}function P(H){const ee=H.matched[H.matched.length-1];if(ee&&ee.redirect){const{redirect:re}=ee;let ae=typeof re=="function"?re(H):re;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=A(ae):{path:ae},ae.params={}),et({query:H.query,hash:H.hash,params:ae.path!=null?{}:H.params},ae)}}function C(H,ee){const re=c=p(H),ae=l.value,Oe=H.state,w=H.force,R=H.replace===!0,g=P(re);if(g)return C(et(A(g),{state:typeof g=="object"?et({},Oe,g.state):Oe,force:w,replace:R}),ee||re);const N=re;N.redirectedFrom=ee;let D;return!w&&Lg(i,ae,re)&&(D=_r(16,{to:N,from:ae}),xe(ae,ae,!0,!1)),(D?Promise.resolve(D):E(N,ae)).catch(F=>Rn(F)?Rn(F,2)?F:ve(F):q(F,N,ae)).then(F=>{if(F){if(Rn(F,2))return C(et({replace:R},A(F.to),{state:typeof F.to=="object"?et({},Oe,F.to.state):Oe,force:w}),ee||N)}else F=oe(N,ae,!0,R,Oe);return L(N,ae,F),F})}function B(H,ee){const re=y(H,ee);return re?Promise.reject(re):Promise.resolve()}function b(H){const ee=ie.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(H):H()}function E(H,ee){let re;const[ae,Oe,w]=g_(H,ee);re=ea(ae.reverse(),"beforeRouteLeave",H,ee);for(const g of ae)g.leaveGuards.forEach(N=>{re.push(ni(N,H,ee))});const R=B.bind(null,H,ee);return re.push(R),ye(re).then(()=>{re=[];for(const g of s.list())re.push(ni(g,H,ee));return re.push(R),ye(re)}).then(()=>{re=ea(Oe,"beforeRouteUpdate",H,ee);for(const g of Oe)g.updateGuards.forEach(N=>{re.push(ni(N,H,ee))});return re.push(R),ye(re)}).then(()=>{re=[];for(const g of w)if(g.beforeEnter)if(dn(g.beforeEnter))for(const N of g.beforeEnter)re.push(ni(N,H,ee));else re.push(ni(g.beforeEnter,H,ee));return re.push(R),ye(re)}).then(()=>(H.matched.forEach(g=>g.enterCallbacks={}),re=ea(w,"beforeRouteEnter",H,ee,b),re.push(R),ye(re))).then(()=>{re=[];for(const g of o.list())re.push(ni(g,H,ee));return re.push(R),ye(re)}).catch(g=>Rn(g,8)?g:Promise.reject(g))}function L(H,ee,re){a.list().forEach(ae=>b(()=>ae(H,ee,re)))}function oe(H,ee,re,ae,Oe){const w=y(H,ee);if(w)return w;const R=ee===Yn,g=nr?history.state:{};re&&(ae||R?r.replace(H.fullPath,et({scroll:R&&g&&g.scroll},Oe)):r.push(H.fullPath,Oe)),l.value=H,xe(H,ee,re,R),ve()}let j;function se(){j||(j=r.listen((H,ee,re)=>{if(!ge.listening)return;const ae=p(H),Oe=P(ae);if(Oe){C(et(Oe,{replace:!0,force:!0}),ae).catch(Zr);return}c=ae;const w=l.value;nr&&zg(fu(w.fullPath,re.delta),Oo()),E(ae,w).catch(R=>Rn(R,12)?R:Rn(R,2)?(C(et(A(R.to),{force:!0}),ae).then(g=>{Rn(g,20)&&!re.delta&&re.type===cs.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(re.delta&&r.go(-re.delta,!1),q(R,ae,w))).then(R=>{R=R||oe(ae,w,!1),R&&(re.delta&&!Rn(R,8)?r.go(-re.delta,!1):re.type===cs.pop&&Rn(R,20)&&r.go(-1,!1)),L(ae,w,R)}).catch(Zr)}))}let le=Ir(),J=Ir(),ne;function q(H,ee,re){ve(H);const ae=J.list();return ae.length?ae.forEach(Oe=>Oe(H,ee,re)):console.error(H),Promise.reject(H)}function de(){return ne&&l.value!==Yn?Promise.resolve():new Promise((H,ee)=>{le.add([H,ee])})}function ve(H){return ne||(ne=!H,se(),le.list().forEach(([ee,re])=>H?re(H):ee()),le.reset()),H}function xe(H,ee,re,ae){const{scrollBehavior:Oe}=n;if(!nr||!Oe)return Promise.resolve();const w=!re&&Hg(fu(H.fullPath,0))||(ae||!re)&&history.state&&history.state.scroll||null;return rh().then(()=>Oe(H,ee,w)).then(R=>R&&Bg(R)).catch(R=>q(R,H,ee))}const Fe=H=>r.go(H);let He;const ie=new Set,ge={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:S,replace:U,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:de,install(H){const ee=this;H.component("RouterLink",u_),H.component("RouterView",p_),H.config.globalProperties.$router=ee,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>ar(l)}),nr&&!He&&l.value===Yn&&(He=!0,S(r.location).catch(Oe=>{}));const re={};for(const Oe in Yn)Object.defineProperty(re,Oe,{get:()=>l.value[Oe],enumerable:!0});H.provide(ac,ee),H.provide($h,Zf(re)),H.provide(ja,l);const ae=H.unmount;ie.add(H),H.unmount=function(){ie.delete(H),ie.size<1&&(c=Yn,j&&j(),j=null,l.value=Yn,He=!1,ne=!1),ae()}}};function ye(H){return H.reduce((ee,re)=>ee.then(()=>b(re)),Promise.resolve())}return ge}function g_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>gr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>gr(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="178",__=0,Au=1,v_=2,Kh=1,jh=2,Nn=3,ui=0,Gt=1,Bn=2,ai=0,fr=1,wu=2,Ru=3,Cu=4,x_=5,wi=100,S_=101,M_=102,y_=103,E_=104,T_=200,b_=201,A_=202,w_=203,Ja=204,Za=205,R_=206,C_=207,P_=208,L_=209,D_=210,I_=211,U_=212,N_=213,F_=214,Qa=0,el=1,tl=2,vr=3,nl=4,il=5,rl=6,sl=7,Jh=0,O_=1,B_=2,li=0,z_=1,H_=2,V_=3,Zh=4,G_=5,k_=6,W_=7,Qh=300,xr=301,Sr=302,ol=303,al=304,Bo=306,us=1e3,Ci=1001,ll=1002,hn=1003,X_=1004,Is=1005,xn=1006,ta=1007,Pi=1008,En=1009,ed=1010,td=1011,fs=1012,cc=1013,Ui=1014,zn=1015,Ts=1016,uc=1017,fc=1018,hs=1020,nd=35902,id=1021,rd=1022,un=1023,ds=1026,ps=1027,sd=1028,hc=1029,od=1030,dc=1031,pc=1033,lo=33776,co=33777,uo=33778,fo=33779,cl=35840,ul=35841,fl=35842,hl=35843,dl=36196,pl=37492,ml=37496,gl=37808,_l=37809,vl=37810,xl=37811,Sl=37812,Ml=37813,yl=37814,El=37815,Tl=37816,bl=37817,Al=37818,wl=37819,Rl=37820,Cl=37821,ho=36492,Pl=36494,Ll=36495,ad=36283,Dl=36284,Il=36285,Ul=36286,q_=3200,Y_=3201,ld=0,$_=1,ri="",Zt="srgb",Mr="srgb-linear",Eo="linear",st="srgb",Hi=7680,Pu=519,K_=512,j_=513,J_=514,cd=515,Z_=516,Q_=517,ev=518,tv=519,Lu=35044,Du="300 es",Hn=2e3,To=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Nl=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function nv(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function Ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*x,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),P=Math.atan2(U,p*A);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const S=a*A;if(l=l*m+h*S,c=c*m+d*S,u=u*m+_*S,f=f*m+x*S,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new W,Iu=new bs;class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],A=r[1],y=r[4],S=r[7],U=r[2],P=r[5],C=r[8];return s[0]=o*x+a*A+l*U,s[3]=o*m+a*y+l*P,s[6]=o*p+a*S+l*C,s[1]=c*x+u*A+f*U,s[4]=c*m+u*y+f*P,s[7]=c*p+u*S+f*C,s[2]=h*x+d*A+_*U,s[5]=h*m+d*y+_*P,s[8]=h*p+d*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new Ye;function ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iv(){const n=ms("canvas");return n.style.display="block",n}const Uu={};function hr(n){n in Uu||(Uu[n]=!0,console.warn(n))}function rv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function sv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ov(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function av(){const n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?Eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const Qe=av();function Gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class lv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=ms("canvas")),Vi.width=e.width,Vi.height=e.height;const r=Vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gn(t[i]/255)*255):t[i]=Gn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cv=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oa(r[o].image)):s.push(oa(r[o]))}else s=oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;const aa=new W;class Bt extends br{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Ci,r=Ci,s=xn,o=Pi,a=un,l=En,c=Bt.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Ar(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Qh;Bt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(d+1)/2,U=(p+1)/2,P=(u+h)/4,C=(f+x)/4,B=(_+m)/4;return y>S&&y>U?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=C/i):S>U?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=B/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=B/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fv extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Bt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new mc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends fv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fd extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hv extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Ns.subVectors(this.max,Nr),Gi.subVectors(e.a,Nr),ki.subVectors(e.b,Nr),Wi.subVectors(e.c,Nr),$n.subVectors(ki,Gi),Kn.subVectors(Wi,ki),vi.subVectors(Gi,Wi);let t=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-vi.z,vi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,vi.z,0,-vi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-vi.y,vi.x,0];return!la(t,Gi,ki,Wi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Gi,ki,Wi,Ns))?!1:(Fs.crossVectors($n,Kn),t=[Fs.x,Fs.y,Fs.z],la(t,Gi,ki,Wi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,Us=new As,Gi=new W,ki=new W,Wi=new W,$n=new W,Kn=new W,vi=new W,Nr=new W,Ns=new W,Fs=new W,xi=new W;function la(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dv=new As,Fr=new W,ca=new W;class gc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(ca)),this.expandByPoint(Fr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new W,ua=new W,Os=new W,jn=new W,fa=new W,Bs=new W,ha=new W;class hd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ua.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ua);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=jn.dot(this.direction),l=-jn.dot(Os),c=jn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ua).addScaledVector(Os,h),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){fa.subVectors(t,e),Bs.subVectors(i,e),ha.crossVectors(fa,Bs);let o=this.direction.dot(ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Bs.crossVectors(jn,Bs));if(l<0)return null;const c=a*this.direction.dot(fa.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Jn.crossVectors(i,Xt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Jn.crossVectors(i,Xt)),Jn.normalize(),zs.crossVectors(Xt,Jn),r[0]=Jn.x,r[4]=zs.x,r[8]=Xt.x,r[1]=Jn.y,r[5]=zs.y,r[9]=Xt.y,r[2]=Jn.z,r[6]=zs.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],A=i[3],y=i[7],S=i[11],U=i[15],P=r[0],C=r[4],B=r[8],b=r[12],E=r[1],L=r[5],oe=r[9],j=r[13],se=r[2],le=r[6],J=r[10],ne=r[14],q=r[3],de=r[7],ve=r[11],xe=r[15];return s[0]=o*P+a*E+l*se+c*q,s[4]=o*C+a*L+l*le+c*de,s[8]=o*B+a*oe+l*J+c*ve,s[12]=o*b+a*j+l*ne+c*xe,s[1]=u*P+f*E+h*se+d*q,s[5]=u*C+f*L+h*le+d*de,s[9]=u*B+f*oe+h*J+d*ve,s[13]=u*b+f*j+h*ne+d*xe,s[2]=_*P+x*E+m*se+p*q,s[6]=_*C+x*L+m*le+p*de,s[10]=_*B+x*oe+m*J+p*ve,s[14]=_*b+x*j+m*ne+p*xe,s[3]=A*P+y*E+S*se+U*q,s[7]=A*C+y*L+S*le+U*de,s[11]=A*B+y*oe+S*J+U*ve,s[15]=A*b+y*j+S*ne+U*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],A=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,y=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,S=u*x*c-_*f*c+_*a*d-o*x*d-u*a*p+o*f*p,U=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=t*A+i*y+r*S+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=y*C,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=S*C,e[9]=(_*f*s-u*x*s-_*i*d+t*x*d+u*i*p-t*f*p)*C,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=U*C,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*C,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,x=o*u,m=o*f,p=a*f,A=l*c,y=l*u,S=l*f,U=i.x,P=i.y,C=i.z;return r[0]=(1-(x+p))*U,r[1]=(d+S)*U,r[2]=(_-y)*U,r[3]=0,r[4]=(d-S)*P,r[5]=(1-(h+p))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(_+y)*C,r[9]=(m-A)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),a=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/o,f=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Hn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(a===Hn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===To)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let _,x;if(a===Hn)_=(o+s)*f,x=-2*f;else if(a===To)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new W,sn=new dt,pv=new W(0,0,0),mv=new W(1,1,1),Jn=new W,zs=new W,Xt=new W,Ou=new dt,Bu=new bs;class Tn{constructor(e=0,t=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gv=0;const zu=new W,qi=new bs,Ln=new dt,Hs=new W,Or=new W,_v=new W,vv=new bs,Hu=new W(1,0,0),Vu=new W(0,1,0),Gu=new W(0,0,1),ku={type:"added"},xv={type:"removed"},Yi={type:"childadded",child:null},da={type:"childremoved",child:null};class Pt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new W,t=new Tn,i=new bs,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ye}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Or,Hs,this.up):Ln.lookAt(Hs,Or,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Ln),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xv),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,_v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new W(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new W,Dn=new W,pa=new W,In=new W,$i=new W,Ki=new W,Wu=new W,ma=new W,ga=new W,_a=new W,va=new vt,xa=new vt,Sa=new vt;class ln{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Dn.subVectors(i,t),pa.subVectors(e,t);const o=on.dot(on),a=on.dot(Dn),l=on.dot(pa),c=Dn.dot(Dn),u=Dn.dot(pa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return va.setScalar(0),xa.setScalar(0),Sa.setScalar(0),va.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,i),Sa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(va,s.x),o.addScaledVector(xa,s.y),o.addScaledVector(Sa,s.z),o}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Dn.subVectors(e,t),on.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),on.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$i.subVectors(r,i),Ki.subVectors(s,i),ma.subVectors(e,i);const l=$i.dot(ma),c=Ki.dot(ma);if(l<=0&&c<=0)return t.copy(i);ga.subVectors(e,r);const u=$i.dot(ga),f=Ki.dot(ga);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($i,o);_a.subVectors(e,s);const d=$i.dot(_a),_=Ki.dot(_a);if(_>=0&&d<=_)return t.copy(s);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ki,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Wu.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Wu,a);const p=1/(m+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector($i,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=nv(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=dd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Qe.workingToColorSpace(At.copy(this),e),Math.round(Ke(At.r*255,0,255))*65536+Math.round(Ke(At.g*255,0,255))*256+Math.round(Ke(At.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Zt){Qe.workingToColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Vs);const i=ia(Zn.h,Vs.h,t),r=ia(Zn.s,Vs.s,t),s=ia(Zn.l,Vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Je;Je.NAMES=dd;let Sv=0;class wr extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=fr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Za,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pd extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new W,Gs=new Te;let Mv=0;class Mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class md extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gd extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kn extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yv=0;const Jt=new dt,ya=new Pt,ji=new W,qt=new As,Br=new As,Et=new W;class di extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?gd:md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(qt.min,Br.min),qt.expandByPoint(Et),Et.addVectors(qt.max,Br.max),qt.expandByPoint(Et)):(qt.expandByPoint(Br.min),qt.expandByPoint(Br.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(e,c),Et.add(ji)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new W,l[B]=new W;const c=new W,u=new W,f=new W,h=new Te,d=new Te,_=new Te,x=new W,m=new W;function p(B,b,E){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,B),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[B].add(x),a[b].add(x),a[E].add(x),l[B].add(m),l[b].add(m),l[E].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,b=A.length;B<b;++B){const E=A[B],L=E.start,oe=E.count;for(let j=L,se=L+oe;j<se;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const y=new W,S=new W,U=new W,P=new W;function C(B){U.fromBufferAttribute(r,B),P.copy(U);const b=a[B];y.copy(b),y.sub(U.multiplyScalar(U.dot(b))).normalize(),S.crossVectors(P,b);const L=S.dot(l[B])<0?-1:1;o.setXYZW(B,y.x,y.y,y.z,L)}for(let B=0,b=A.length;B<b;++B){const E=A[B],L=E.start,oe=E.count;for(let j=L,se=L+oe;j<se;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new dt,Si=new hd,ks=new gc,qu=new W,Ws=new W,Xs=new W,qs=new W,Ea=new W,Ys=new W,Yu=new W,$s=new W;class Ft extends Pt{constructor(e=new di,t=new pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ea.fromBufferAttribute(f,e),o?Ys.addScaledVector(Ea,u):Ys.addScaledVector(Ea.sub(t),u))}t.add(Ys)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(ks.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ks,qu)===null||Si.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=A,U=y;S<U;S+=3){const P=a.getX(S),C=a.getX(S+1),B=a.getX(S+2);r=Ks(this,p,e,i,c,u,f,P,C,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const A=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=Ks(this,o,e,i,c,u,f,A,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=A,U=y;S<U;S+=3){const P=S,C=S+1,B=S+2;r=Ks(this,p,e,i,c,u,f,P,C,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const A=m,y=m+1,S=m+2;r=Ks(this,o,e,i,c,u,f,A,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ev(n,e,t,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;$s.copy(a),$s.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:n}}function Ks(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ws),n.getVertexPosition(l,Xs),n.getVertexPosition(c,qs);const u=Ev(n,e,t,i,Ws,Xs,qs,Yu);if(u){const f=new W;ln.getBarycoord(Yu,Ws,Xs,qs,f),r&&(u.uv=ln.getInterpolatedAttribute(r,a,l,c,f,new Te)),s&&(u.uv1=ln.getInterpolatedAttribute(s,a,l,c,f,new Te)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};ln.getNormal(Ws,Xs,qs,h.normal),u.face=h,u.barycoord=f}return u}class Rr extends di{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(f,2));function _(x,m,p,A,y,S,U,P,C,B,b){const E=S/C,L=U/B,oe=S/2,j=U/2,se=P/2,le=C+1,J=B+1;let ne=0,q=0;const de=new W;for(let ve=0;ve<J;ve++){const xe=ve*L-j;for(let Fe=0;Fe<le;Fe++){const He=Fe*E-oe;de[x]=He*A,de[m]=xe*y,de[p]=se,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=P>0?1:-1,u.push(de.x,de.y,de.z),f.push(Fe/C),f.push(1-ve/B),ne+=1}}for(let ve=0;ve<B;ve++)for(let xe=0;xe<C;xe++){const Fe=h+xe+le*ve,He=h+xe+le*(ve+1),ie=h+(xe+1)+le*(ve+1),ge=h+(xe+1)+le*ve;l.push(Fe,He,ge),l.push(He,ie,ge),q+=6}a.addGroup(d,q,b),d+=q,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Tv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const bv={clone:yr,merge:Ut};var Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vd extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new W,$u=new Te,Ku=new Te;class Qt extends vd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Ku),t.subVectors(Ku,$u)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Zi=1;class Rv extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Ji,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Ji,Zi,e,t);s.layers=this.layers,this.add(s);const o=new Qt(Ji,Zi,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Ji,Zi,e,t);a.layers=this.layers,this.add(a);const l=new Qt(Ji,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Ji,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xd extends Bt{constructor(e=[],t=xr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cv extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ai});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=xn),new Rv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Gr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lv extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ba=new W,Dv=new W,Iv=new Ye;class bi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ba.subVectors(i,t).cross(Dv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Iv.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new gc,Uv=new Te(.5,.5),js=new W;class vc{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],x=r[10],m=r[11],p=r[12],A=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-d,S-p).normalize(),i[1].setComponents(l+s,h+c,m+d,S+p).normalize(),i[2].setComponents(l+o,h+u,m+_,S+A).normalize(),i[3].setComponents(l-o,h-u,m-_,S-A).normalize(),i[4].setComponents(l-a,h-f,m-x,S-y).normalize(),t===Hn)i[5].setComponents(l+a,h+f,m+x,S+y).normalize();else if(t===To)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Uv.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends Bt{constructor(e,t,i=Ui,r,s,o,a=hn,l=hn,c,u=ds,f=1){if(u!==ds&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Te:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new W,r=[],s=[],o=[],a=new W,l=new dt;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new W)}s[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ke(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ke(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xc extends bn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nv extends xc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Js=new W,Aa=new Sc,wa=new Sc,Ra=new Sc;class Fv extends bn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new W){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Js.subVectors(r[0],r[1]).add(r[0]),c=Js);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Js.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Aa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,x,m),wa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,x,m),Ra.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),wa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ra.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Aa.calc(l),wa.calc(l),Ra.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ju(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Ov(n,e){const t=1-n;return t*t*e}function Bv(n,e){return 2*(1-n)*n*e}function zv(n,e){return n*n*e}function es(n,e,t,i){return Ov(n,e)+Bv(n,t)+zv(n,i)}function Hv(n,e){const t=1-n;return t*t*t*e}function Vv(n,e){const t=1-n;return 3*t*t*n*e}function Gv(n,e){return 3*(1-n)*n*n*e}function kv(n,e){return n*n*n*e}function ts(n,e,t,i,r){return Hv(n,e)+Vv(n,t)+Gv(n,i)+kv(n,r)}class Md extends bn{constructor(e=new Te,t=new Te,i=new Te,r=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Te){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ts(e,r.x,s.x,o.x,a.x),ts(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wv extends bn{constructor(e=new W,t=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new W){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ts(e,r.x,s.x,o.x,a.x),ts(e,r.y,s.y,o.y,a.y),ts(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yd extends bn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xv extends bn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends bn{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(es(e,r.x,s.x,o.x),es(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qv extends bn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(es(e,r.x,s.x,o.x),es(e,r.y,s.y,o.y),es(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Td extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(ju(a,l.x,c.x,u.x,f.x),ju(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Te().fromArray(r))}return this}}var Fl=Object.freeze({__proto__:null,ArcCurve:Nv,CatmullRomCurve3:Fv,CubicBezierCurve:Md,CubicBezierCurve3:Wv,EllipseCurve:xc,LineCurve:yd,LineCurve3:Xv,QuadraticBezierCurve:Ed,QuadraticBezierCurve3:qv,SplineCurve:Td});class Yv extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Fl[r.type]().fromJSON(r))}return this}}class Ol extends Yv{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new yd(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ed(this.currentPoint.clone(),new Te(e,t),new Te(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Md(this.currentPoint.clone(),new Te(e,t),new Te(i,r),new Te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Td(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new xc(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class po extends Ol{constructor(e){super(e),this.uuid=Ar(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ol().fromJSON(r))}return this}}function $v(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=bd(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Qv(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let h=t;h<r;h+=t){const d=n[h],_=n[h+1];d<a&&(a=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return gs(s,o,t,a,l,c,0),o}function bd(n,e,t,i,r){let s;if(r===u0(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ju(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ju(o/i|0,n[o],n[o+1],s);return s&&Er(s,s.next)&&(vs(s),s=s.next),s}function Fi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Er(t,t.next)||gt(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function gs(n,e,t,i,r,s,o){if(!n)return;!o&&s&&r0(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?jv(n,i,r,s):Kv(n)){e.push(l.i,n.i,c.i),vs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Jv(Fi(n),e),gs(n,e,t,i,r,s,2)):o===2&&Zv(n,e,t,i,r,s):gs(Fi(n),e,t,i,r,s,1);break}}}function Kv(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&kr(r,a,s,l,o,c,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function jv(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),_=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),p=Bl(d,_,e,t,i),A=Bl(x,m,e,t,i);let y=n.prevZ,S=n.nextZ;for(;y&&y.z>=p&&S&&S.z<=A;){if(y.x>=d&&y.x<=x&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&kr(a,u,l,f,c,h,y.x,y.y)&&gt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=d&&S.x<=x&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&kr(a,u,l,f,c,h,S.x,S.y)&&gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&kr(a,u,l,f,c,h,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=A;){if(S.x>=d&&S.x<=x&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&kr(a,u,l,f,c,h,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Jv(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Er(i,r)&&wd(i,t,t.next,r)&&_s(i,r)&&_s(r,i)&&(e.push(i.i,t.i,r.i),vs(t),vs(t.next),t=n=r),t=t.next}while(t!==n);return Fi(t)}function Zv(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&a0(o,a)){let l=Rd(o,a);o=Fi(o,o.next),l=Fi(l,l.next),gs(o,e,t,i,r,s,0),gs(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Qv(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=bd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(o0(c))}r.sort(e0);for(let s=0;s<r.length;s++)t=t0(r[s],t);return t}function e0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function t0(n,e){const t=n0(n,e);if(!t)return e;const i=Rd(t,n);return Fi(i,i.next),Fi(t,t.next)}function n0(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Er(n,t))return t;do{if(Er(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ad(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);_s(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&i0(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function i0(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function r0(n,e,t,i){let r=n;do r.z===0&&(r.z=Bl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,s0(r)}function s0(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Bl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function o0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ad(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function kr(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Ad(n,e,t,i,r,s,o,a)}function a0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!l0(n,e)&&(_s(n,e)&&_s(e,n)&&c0(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Er(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Er(n,e){return n.x===e.x&&n.y===e.y}function wd(n,e,t,i){const r=Qs(gt(n,e,t)),s=Qs(gt(n,e,i)),o=Qs(gt(t,i,n)),a=Qs(gt(t,i,e));return!!(r!==s&&o!==a||r===0&&Zs(n,t,e)||s===0&&Zs(n,i,e)||o===0&&Zs(t,n,i)||a===0&&Zs(t,e,i))}function Zs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qs(n){return n>0?1:n<0?-1:0}function l0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&wd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _s(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function c0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Rd(n,e){const t=zl(n.i,n.x,n.y),i=zl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ju(n,e,t,i){const r=zl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function vs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u0(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class f0{static triangulate(e,t,i=2){return $v(e,t,i)}}class Li{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Li.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Zu(e),Qu(i,e);let o=e.length;t.forEach(Zu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Qu(i,t[l]);const a=f0.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Zu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Mc extends di{constructor(e=new po([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new kn(r,3)),this.setAttribute("uv",new kn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:h0;let y,S=!1,U,P,C,B;p&&(y=p.getSpacedPoints(u),S=!0,h=!1,U=p.computeFrenetFrames(u,!1),P=new W,C=new W,B=new W),h||(m=0,d=0,_=0,x=0);const b=a.extractPoints(c);let E=b.shape;const L=b.holes;if(!Li.isClockWise(E)){E=E.reverse();for(let g=0,N=L.length;g<N;g++){const D=L[g];Li.isClockWise(D)&&(L[g]=D.reverse())}}function j(g){const D=10000000000000001e-36;let F=g[0];for(let z=1;z<=g.length;z++){const K=z%g.length,G=g[K],Y=G.x-F.x,fe=G.y-F.y,M=Y*Y+fe*fe,v=Math.max(Math.abs(G.x),Math.abs(G.y),Math.abs(F.x),Math.abs(F.y)),I=D*v*v;if(M<=I){g.splice(K,1),z--;continue}F=G}}j(E),L.forEach(j);const se=L.length,le=E;for(let g=0;g<se;g++){const N=L[g];E=E.concat(N)}function J(g,N,D){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),g.clone().addScaledVector(N,D)}const ne=E.length;function q(g,N,D){let F,z,K;const G=g.x-N.x,Y=g.y-N.y,fe=D.x-g.x,M=D.y-g.y,v=G*G+Y*Y,I=G*M-Y*fe;if(Math.abs(I)>Number.EPSILON){const X=Math.sqrt(v),te=Math.sqrt(fe*fe+M*M),$=N.x-Y/X,Ee=N.y+G/X,pe=D.x-M/te,be=D.y+fe/te,Re=((pe-$)*M-(be-Ee)*fe)/(G*M-Y*fe);F=$+G*Re-g.x,z=Ee+Y*Re-g.y;const ue=F*F+z*z;if(ue<=2)return new Te(F,z);K=Math.sqrt(ue/2)}else{let X=!1;G>Number.EPSILON?fe>Number.EPSILON&&(X=!0):G<-Number.EPSILON?fe<-Number.EPSILON&&(X=!0):Math.sign(Y)===Math.sign(M)&&(X=!0),X?(F=-Y,z=G,K=Math.sqrt(v)):(F=G,z=Y,K=Math.sqrt(v/2))}return new Te(F/K,z/K)}const de=[];for(let g=0,N=le.length,D=N-1,F=g+1;g<N;g++,D++,F++)D===N&&(D=0),F===N&&(F=0),de[g]=q(le[g],le[D],le[F]);const ve=[];let xe,Fe=de.concat();for(let g=0,N=se;g<N;g++){const D=L[g];xe=[];for(let F=0,z=D.length,K=z-1,G=F+1;F<z;F++,K++,G++)K===z&&(K=0),G===z&&(G=0),xe[F]=q(D[F],D[K],D[G]);ve.push(xe),Fe=Fe.concat(xe)}let He;if(m===0)He=Li.triangulateShape(le,L);else{const g=[],N=[];for(let D=0;D<m;D++){const F=D/m,z=d*Math.cos(F*Math.PI/2),K=_*Math.sin(F*Math.PI/2)+x;for(let G=0,Y=le.length;G<Y;G++){const fe=J(le[G],de[G],K);re(fe.x,fe.y,-z),F===0&&g.push(fe)}for(let G=0,Y=se;G<Y;G++){const fe=L[G];xe=ve[G];const M=[];for(let v=0,I=fe.length;v<I;v++){const X=J(fe[v],xe[v],K);re(X.x,X.y,-z),F===0&&M.push(X)}F===0&&N.push(M)}}He=Li.triangulateShape(g,N)}const ie=He.length,ge=_+x;for(let g=0;g<ne;g++){const N=h?J(E[g],Fe[g],ge):E[g];S?(C.copy(U.normals[0]).multiplyScalar(N.x),P.copy(U.binormals[0]).multiplyScalar(N.y),B.copy(y[0]).add(C).add(P),re(B.x,B.y,B.z)):re(N.x,N.y,0)}for(let g=1;g<=u;g++)for(let N=0;N<ne;N++){const D=h?J(E[N],Fe[N],ge):E[N];S?(C.copy(U.normals[g]).multiplyScalar(D.x),P.copy(U.binormals[g]).multiplyScalar(D.y),B.copy(y[g]).add(C).add(P),re(B.x,B.y,B.z)):re(D.x,D.y,f/u*g)}for(let g=m-1;g>=0;g--){const N=g/m,D=d*Math.cos(N*Math.PI/2),F=_*Math.sin(N*Math.PI/2)+x;for(let z=0,K=le.length;z<K;z++){const G=J(le[z],de[z],F);re(G.x,G.y,f+D)}for(let z=0,K=L.length;z<K;z++){const G=L[z];xe=ve[z];for(let Y=0,fe=G.length;Y<fe;Y++){const M=J(G[Y],xe[Y],F);S?re(M.x,M.y+y[u-1].y,y[u-1].x+D):re(M.x,M.y,f+D)}}}ye(),H();function ye(){const g=r.length/3;if(h){let N=0,D=ne*N;for(let F=0;F<ie;F++){const z=He[F];ae(z[2]+D,z[1]+D,z[0]+D)}N=u+m*2,D=ne*N;for(let F=0;F<ie;F++){const z=He[F];ae(z[0]+D,z[1]+D,z[2]+D)}}else{for(let N=0;N<ie;N++){const D=He[N];ae(D[2],D[1],D[0])}for(let N=0;N<ie;N++){const D=He[N];ae(D[0]+ne*u,D[1]+ne*u,D[2]+ne*u)}}i.addGroup(g,r.length/3-g,0)}function H(){const g=r.length/3;let N=0;ee(le,N),N+=le.length;for(let D=0,F=L.length;D<F;D++){const z=L[D];ee(z,N),N+=z.length}i.addGroup(g,r.length/3-g,1)}function ee(g,N){let D=g.length;for(;--D>=0;){const F=D;let z=D-1;z<0&&(z=g.length-1);for(let K=0,G=u+m*2;K<G;K++){const Y=ne*K,fe=ne*(K+1),M=N+F+Y,v=N+z+Y,I=N+z+fe,X=N+F+fe;Oe(M,v,I,X)}}}function re(g,N,D){l.push(g),l.push(N),l.push(D)}function ae(g,N,D){w(g),w(N),w(D);const F=r.length/3,z=A.generateTopUV(i,r,F-3,F-2,F-1);R(z[0]),R(z[1]),R(z[2])}function Oe(g,N,D,F){w(g),w(N),w(F),w(N),w(D),w(F);const z=r.length/3,K=A.generateSideWallUV(i,r,z-6,z-3,z-2,z-1);R(K[0]),R(K[1]),R(K[3]),R(K[1]),R(K[2]),R(K[3])}function w(g){r.push(l[g*3+0]),r.push(l[g*3+1]),r.push(l[g*3+2])}function R(g){s.push(g.x),s.push(g.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return d0(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fl[r.type]().fromJSON(r)),new Mc(i,e.options)}}const h0={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Te(s,o),new Te(a,l),new Te(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],_=e[r*3+2],x=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-f),new Te(h,1-_),new Te(x,1-p)]:[new Te(a,1-l),new Te(u,1-f),new Te(d,1-_),new Te(m,1-p)]}};function d0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Tr extends di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let y=0;y<c;y++){const S=y*f-s;_.push(S,-A,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const y=A+c*p,S=A+c*(p+1),U=A+1+c*(p+1),P=A+1+c*p;d.push(y,S,P),d.push(S,U,P)}this.setIndex(d),this.setAttribute("position",new kn(_,3)),this.setAttribute("normal",new kn(x,3)),this.setAttribute("uv",new kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class p0 extends wr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class zr extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m0 extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g0 extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ns={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class _0{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const v0=new _0;class ws{constructor(e){this.manager=e!==void 0?e:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class x0 extends Error{constructor(e,t){super(e),this.response=t}}class S0 extends ws{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ns.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:i,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let x=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:y,value:S})=>{if(y)p.close();else{x+=S.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let P=0,C=u.length;P<C;P++){const B=u[P];B.onProgress&&B.onProgress(U)}p.enqueue(S),A()}},y=>{p.error(y)})}}});return new Response(m)}else throw new x0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{ns.add(`file:${e}`,c);const u=Un[e];delete Un[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Qi=new WeakMap;class M0 extends ws{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ns.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Qi.get(o);f===void 0&&(f=[],Qi.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=ms("img");function l(){u(),t&&t(this);const f=Qi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Qi.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),ns.remove(`image:${e}`);const h=Qi.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}Qi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ns.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class y0 extends ws{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,o=new M0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Cd extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ca=new dt,ef=new W,tf=new W;class E0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pd extends vd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class T0 extends E0{constructor(){super(new Pd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends Cd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new T0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A0 extends Cd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class w0 extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nf=new dt;class R0{constructor(e,t,i=0,r=1/0){this.ray=new hd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(e,t=!0,i=[]){return Hl(e,this,i,t),i.sort(rf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Hl(e[r],this,i,t);return i.sort(rf),i}}function rf(n,e){return n.distance-e.distance}function Hl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Hl(s[o],e,t,!0)}}class C0{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ol,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const A=[];for(let y=0,S=p.length;y<S;y++){const U=p[y],P=new po;P.curves=U.curves,A.push(P)}return A}function i(p,A){const y=A.length;let S=!1;for(let U=y-1,P=0;P<y;U=P++){let C=A[U],B=A[P],b=B.x-C.x,E=B.y-C.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(C=A[P],b=-b,B=A[U],E=-E),p.y<C.y||p.y>B.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{const L=E*(p.x-C.x)-b*(p.y-C.y);if(L===0)return!0;if(L<0)continue;S=!S}}else{if(p.y!==C.y)continue;if(B.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=B.x)return!0}}return S}const r=Li.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new po,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],_=0,x;h[_]=void 0,d[_]=[];for(let p=0,A=s.length;p<A;p++)a=s[p],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!u&&h[_]&&_++,h[_]={s:new po,p:x},h[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:x[0]});if(!h[0])return t(s);if(h.length>1){let p=!1,A=0;for(let y=0,S=h.length;y<S;y++)f[y]=[];for(let y=0,S=h.length;y<S;y++){const U=d[y];for(let P=0;P<U.length;P++){const C=U[P];let B=!0;for(let b=0;b<h.length;b++)i(C.p,h[b].p)&&(y!==b&&A++,B?(B=!1,f[b].push(C)):p=!0);B&&f[y].push(C)}}A>0&&p===!1&&(d=f)}let m;for(let p=0,A=h.length;p<A;p++){l=h[p].s,c.push(l),m=d[p];for(let y=0,S=m.length;y<S;y++)l.holes.push(m[y].h)}return c}}function sf(n,e,t,i){const r=P0(i);switch(t){case id:return n*e;case sd:return n*e/r.components*r.byteLength;case hc:return n*e/r.components*r.byteLength;case od:return n*e*2/r.components*r.byteLength;case dc:return n*e*2/r.components*r.byteLength;case rd:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case pc:return n*e*4/r.components*r.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case hl:return Math.max(n,16)*Math.max(e,8)/4;case cl:case fl:return Math.max(n,8)*Math.max(e,8)/2;case dl:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ho:case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ad:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Il:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(n){switch(n){case En:case ed:return{byteLength:1,components:1};case fs:case td:case Ts:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case Ui:case cc:case zn:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ld(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function L0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,q0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tx=`#define PI 3.141592653589793
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
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ix=`vec3 transformedNormal = objectNormal;
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
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
}`,Sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Px=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
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
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gS=`float getShadowMask() {
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
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,MS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ES=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DS=`uniform sampler2D t2D;
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
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
}`,BS=`#if DEPTH_PACKING == 3200
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
}`,zS=`#define DISTANCE
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
}`,HS=`#define DISTANCE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,qS=`uniform vec3 diffuse;
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
}`,YS=`#define LAMBERT
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
}`,$S=`#define LAMBERT
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
}`,KS=`#define MATCAP
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
}`,jS=`#define MATCAP
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
}`,JS=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,QS=`#define PHONG
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
}`,eM=`#define PHONG
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
}`,tM=`#define STANDARD
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
}`,nM=`#define STANDARD
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
}`,iM=`#define TOON
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
}`,rM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,lM=`uniform vec3 color;
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
}`,cM=`uniform float rotation;
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
}`,uM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:D0,alphahash_pars_fragment:I0,alphamap_fragment:U0,alphamap_pars_fragment:N0,alphatest_fragment:F0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:z0,batching_pars_vertex:H0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:k0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:j0,color_fragment:J0,color_pars_fragment:Z0,color_pars_vertex:Q0,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:rx,displacementmap_vertex:sx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:hx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Tx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:_x,fog_pars_fragment:vx,gradientmap_pars_fragment:xx,lightmap_pars_fragment:Sx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:yx,lights_pars_begin:Ex,lights_toon_fragment:bx,lights_toon_pars_fragment:Ax,lights_phong_fragment:wx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Ix,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Ox,map_fragment:Bx,map_pars_fragment:zx,map_particle_fragment:Hx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:kx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:qx,morphtarget_pars_vertex:Yx,morphtarget_vertex:$x,normal_fragment_begin:Kx,normal_fragment_maps:jx,normal_pars_fragment:Jx,normal_pars_vertex:Zx,normal_vertex:Qx,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:rS,opaque_fragment:sS,packing:oS,premultiplied_alpha_fragment:aS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:uS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:hS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:_S,skinning_pars_vertex:vS,skinning_vertex:xS,skinnormal_vertex:SS,specularmap_fragment:MS,specularmap_pars_fragment:yS,tonemapping_fragment:ES,tonemapping_pars_fragment:TS,transmission_fragment:bS,transmission_pars_fragment:AS,uv_pars_fragment:wS,uv_pars_vertex:RS,uv_vertex:CS,worldpos_vertex:PS,background_vert:LS,background_frag:DS,backgroundCube_vert:IS,backgroundCube_frag:US,cube_vert:NS,cube_frag:FS,depth_vert:OS,depth_frag:BS,distanceRGBA_vert:zS,distanceRGBA_frag:HS,equirect_vert:VS,equirect_frag:GS,linedashed_vert:kS,linedashed_frag:WS,meshbasic_vert:XS,meshbasic_frag:qS,meshlambert_vert:YS,meshlambert_frag:$S,meshmatcap_vert:KS,meshmatcap_frag:jS,meshnormal_vert:JS,meshnormal_frag:ZS,meshphong_vert:QS,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:rM,points_vert:sM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},vn={basic:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ut([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ut([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ut([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ut([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ut([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ut([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ut([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ut([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};vn.physical={uniforms:Ut([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const eo={r:0,b:0,g:0},yi=new Tn,fM=new dt;function hM(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function x(y){let S=!1;const U=_(y);U===null?p(a,l):U&&U.isColor&&(p(U,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const U=_(S);U&&(U.isCubeTexture||U.mapping===Bo)?(u===void 0&&(u=new Ft(new Rr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:yr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(S.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(yi)),u.material.toneMapped=Qe.getTransfer(U.colorSpace)!==st,(f!==U||h!==U.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Ft(new Tr(2,2),new fi({name:"BackgroundMaterial",uniforms:yr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(U.colorSpace)!==st,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,h=U.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(eo,_d(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,S,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m,dispose:A}}function dM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,L,oe,j,se){let le=!1;const J=f(j,oe,L);s!==J&&(s=J,c(s.object)),le=d(E,j,oe,se),le&&_(E,j,oe,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,S(E,L,oe,j),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,L,oe){const j=oe.wireframe===!0;let se=i[E.id];se===void 0&&(se={},i[E.id]=se);let le=se[L.id];le===void 0&&(le={},se[L.id]=le);let J=le[j];return J===void 0&&(J=h(l()),le[j]=J),J}function h(E){const L=[],oe=[],j=[];for(let se=0;se<t;se++)L[se]=0,oe[se]=0,j[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:oe,attributeDivisors:j,object:E,attributes:{},index:null}}function d(E,L,oe,j){const se=s.attributes,le=L.attributes;let J=0;const ne=oe.getAttributes();for(const q in ne)if(ne[q].location>=0){const ve=se[q];let xe=le[q];if(xe===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor)),ve===void 0||ve.attribute!==xe||xe&&ve.data!==xe.data)return!0;J++}return s.attributesNum!==J||s.index!==j}function _(E,L,oe,j){const se={},le=L.attributes;let J=0;const ne=oe.getAttributes();for(const q in ne)if(ne[q].location>=0){let ve=le[q];ve===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const xe={};xe.attribute=ve,ve&&ve.data&&(xe.data=ve.data),se[q]=xe,J++}s.attributes=se,s.attributesNum=J,s.index=j}function x(){const E=s.newAttributes;for(let L=0,oe=E.length;L<oe;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){const oe=s.newAttributes,j=s.enabledAttributes,se=s.attributeDivisors;oe[E]=1,j[E]===0&&(n.enableVertexAttribArray(E),j[E]=1),se[E]!==L&&(n.vertexAttribDivisor(E,L),se[E]=L)}function A(){const E=s.newAttributes,L=s.enabledAttributes;for(let oe=0,j=L.length;oe<j;oe++)L[oe]!==E[oe]&&(n.disableVertexAttribArray(oe),L[oe]=0)}function y(E,L,oe,j,se,le,J){J===!0?n.vertexAttribIPointer(E,L,oe,se,le):n.vertexAttribPointer(E,L,oe,j,se,le)}function S(E,L,oe,j){x();const se=j.attributes,le=oe.getAttributes(),J=L.defaultAttributeValues;for(const ne in le){const q=le[ne];if(q.location>=0){let de=se[ne];if(de===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const ve=de.normalized,xe=de.itemSize,Fe=e.get(de);if(Fe===void 0)continue;const He=Fe.buffer,ie=Fe.type,ge=Fe.bytesPerElement,ye=ie===n.INT||ie===n.UNSIGNED_INT||de.gpuType===cc;if(de.isInterleavedBufferAttribute){const H=de.data,ee=H.stride,re=de.offset;if(H.isInstancedInterleavedBuffer){for(let ae=0;ae<q.locationSize;ae++)p(q.location+ae,H.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ae=0;ae<q.locationSize;ae++)y(q.location+ae,xe/q.locationSize,ie,ve,ee*ge,(re+xe/q.locationSize*ae)*ge,ye)}else{if(de.isInstancedBufferAttribute){for(let H=0;H<q.locationSize;H++)p(q.location+H,de.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let H=0;H<q.locationSize;H++)m(q.location+H);n.bindBuffer(n.ARRAY_BUFFER,He);for(let H=0;H<q.locationSize;H++)y(q.location+H,xe/q.locationSize,ie,ve,xe*ge,xe/q.locationSize*H*ge,ye)}}else if(J!==void 0){const ve=J[ne];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(q.location,ve);break;case 3:n.vertexAttrib3fv(q.location,ve);break;case 4:n.vertexAttrib4fv(q.location,ve);break;default:n.vertexAttrib1fv(q.location,ve)}}}}A()}function U(){B();for(const E in i){const L=i[E];for(const oe in L){const j=L[oe];for(const se in j)u(j[se].object),delete j[se];delete L[oe]}delete i[E]}}function P(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const oe in L){const j=L[oe];for(const se in j)u(j[se].object),delete j[se];delete L[oe]}delete i[E.id]}function C(E){for(const L in i){const oe=i[L];if(oe[E.id]===void 0)continue;const j=oe[E.id];for(const se in j)u(j[se].object),delete j[se];delete oe[E.id]}}function B(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function pM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const B=C===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==En&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!B)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:U,maxSamples:P}}function gM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new bi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,y=A*4;let S=p.clippingState||null;l.value=S,S=u(_,h,y,d);for(let U=0;U!==y;++U)S[U]=t[U];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=d;y!==x;++y,S+=4)o.copy(f[y]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _M(n){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=xr:a===al&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ir=4,of=[.125,.215,.35,.446,.526,.582],Ri=20,Pa=new Pd,af=new Je;let La=null,Da=0,Ia=0,Ua=!1;const Ai=(1+Math.sqrt(5))/2,er=1/Ai,lf=[new W(-Ai,er,0),new W(Ai,er,0),new W(-er,0,Ai),new W(er,0,Ai),new W(0,Ai,-er),new W(0,Ai,er),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],vM=new W;class cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=vM}=s;La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Ia),this._renderer.xr.enabled=Ua,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ts,format:un,colorSpace:Mr,depthBuffer:!1},r=uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(s)),this._blurMaterial=SM(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r,s){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(af),f.toneMapping=li,f.autoClear=!1;const _=new pd({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new Ft(new Rr,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(af),m=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const S=this._cubeSize;to(r,y*S,A>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lf[(r-s-1)%lf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ft(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let A=0;for(let C=0;C<Ri;++C){const B=C/x,b=Math.exp(-B*B/2);p.push(b),C===0?A+=b:C<m&&(A+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const S=this._sizeLods[r],U=3*S*(r>y-ir?r-y+ir:0),P=4*(this._cubeSize-S);to(t,U,P,3*S,2*S),l.setRenderTarget(t),l.render(f,Pa)}}function xM(n){const e=[],t=[],i=[];let r=n;const s=n-ir+1+of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ir?l=of[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*d),y=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,B=P>2?0:-1,b=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];A.set(b,x*_*P),y.set(h,m*_*P);const E=[P,P,P,P,P,P];S.set(E,p*_*P)}const U=new di;U.setAttribute("position",new Mn(A,x)),U.setAttribute("uv",new Mn(y,m)),U.setAttribute("faceIndex",new Mn(S,p)),e.push(U),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uf(n,e,t){const i=new Ni(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SM(n,e,t){const i=new Float32Array(Ri),r=new W(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ff(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hf(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function MM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ol||l===al,u=l===xr||l===Sr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new cf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new cf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const A=d.array;x=d.version;for(let y=0,S=A.length;y<S;y+=3){const U=A[y+0],P=A[y+1],C=A[y+2];h.push(U,P,P,C,C,U)}}else if(_!==void 0){const A=_.array;x=_.version;for(let y=0,S=A.length/3-1;y<S;y+=3){const U=y+0,P=y+1,C=y+2;h.push(U,P,P,C,C,U)}}else return;const m=new(ud(h)?gd:md)(h,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=d[A]*x[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AM(n,e,t){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let S=a.attributes.position.count*y,U=1;S>e.maxTextureSize&&(U=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*U*4*f),C=new fd(P,S,U,f);C.type=zn,C.needsUpdate=!0;const B=y*4;for(let E=0;E<f;E++){const L=m[E],oe=p[E],j=A[E],se=S*U*4*E;for(let le=0;le<L.count;le++){const J=le*B;d===!0&&(r.fromBufferAttribute(L,le),P[se+J+0]=r.x,P[se+J+1]=r.y,P[se+J+2]=r.z,P[se+J+3]=0),_===!0&&(r.fromBufferAttribute(oe,le),P[se+J+4]=r.x,P[se+J+5]=r.y,P[se+J+6]=r.z,P[se+J+7]=0),x===!0&&(r.fromBufferAttribute(j,le),P[se+J+8]=r.x,P[se+J+9]=r.y,P[se+J+10]=r.z,P[se+J+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Te(S,U)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function wM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Dd=new Bt,df=new Sd(1,1),Id=new fd,Ud=new hv,Nd=new xd,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pf[r];if(s===void 0&&(s=new Float32Array(r),pf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function DM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),yt(t,i)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),yt(t,i)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),yt(t,i)}}function NM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function kM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(df.compareFunction=cd,s=df):s=Dd,t.setTexture2D(e||s,r)}function WM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function XM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nd,r)}function qM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Id,r)}function YM(n){switch(n){case 5126:return RM;case 35664:return CM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(n,e){n.uniform1fv(this.addr,e)}function KM(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function jM(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function JM(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function ZM(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QM(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ey(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ty(n,e){n.uniform1iv(this.addr,e)}function ny(n,e){n.uniform2iv(this.addr,e)}function iy(n,e){n.uniform3iv(this.addr,e)}function ry(n,e){n.uniform4iv(this.addr,e)}function sy(n,e){n.uniform1uiv(this.addr,e)}function oy(n,e){n.uniform2uiv(this.addr,e)}function ay(n,e){n.uniform3uiv(this.addr,e)}function ly(n,e){n.uniform4uiv(this.addr,e)}function cy(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dd,s[o])}function uy(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ud,s[o])}function fy(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nd,s[o])}function hy(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Id,s[o])}function dy(n){switch(n){case 5126:return $M;case 35664:return KM;case 35665:return jM;case 35666:return JM;case 35674:return ZM;case 35675:return QM;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return ry;case 5125:return sy;case 36294:return oy;case 36295:return ay;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return hy}}class py{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class my{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dy(t.type)}}class gy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function xf(n,e){n.seq.push(e),n.map[e.id]=e}function _y(n,e,t){const i=n.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),o=Na.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xf(t,c===void 0?new py(a,n,e):new my(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new gy(a),xf(t,f)),t=f}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_y(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vy=37297;let xy=0;function Sy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Mf=new Ye;function My(n){Qe._getMatrix(Mf,Qe.workingColorSpace,n);const e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Eo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sy(n.getShaderSource(e),o)}else return r}function yy(n,e){const t=My(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ey(n,e){let t;switch(e){case z_:t="Linear";break;case H_:t="Reinhard";break;case V_:t="Cineon";break;case Zh:t="ACESFilmic";break;case k_:t="AgX";break;case W_:t="Neutral";break;case G_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new W;function Ty(){Qe.getLuminanceCoefficients(no);const n=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function by(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Ay(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wr(n){return n!==""}function Ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(Ry,Py)}const Cy=new Map;function Py(n,e){let t=$e[e];if(t===void 0){const i=Cy.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}const Ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(n){return n.replace(Ly,Dy)}function Dy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Af(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Uy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ny(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case B_:e="ENVMAP_BLENDING_ADD";break}return e}function Oy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function By(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Iy(t),c=Uy(t),u=Ny(t),f=Fy(t),h=Oy(t),d=by(t),_=Ay(s),x=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?$e.tonemapping_pars_fragment:"",t.toneMapping!==li?Ey("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,yy("linearToOutputTexel",t.outputColorSpace),Ty(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Vl(o),o=Ef(o,t),o=Tf(o,t),a=Vl(a),a=Ef(a,t),a=Tf(a,t),o=bf(o),a=bf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=A+m+o,S=A+p+a,U=Sf(r,r.VERTEX_SHADER,y),P=Sf(r,r.FRAGMENT_SHADER,S);r.attachShader(x,U),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(L){if(n.debug.checkShaderErrors){const oe=r.getProgramInfoLog(x).trim(),j=r.getShaderInfoLog(U).trim(),se=r.getShaderInfoLog(P).trim();let le=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,U,P);else{const ne=yf(r,U,"vertex"),q=yf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+oe+`
`+ne+`
`+q)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(j===""||se==="")&&(J=!1);J&&(L.diagnostics={runnable:le,programLog:oe,vertexShader:{log:j,prefix:m},fragmentShader:{log:se,prefix:p}})}r.deleteShader(U),r.deleteShader(P),B=new mo(r,x),b=wy(r,x)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,vy)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=P,this}let zy=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vy(e),t.set(e,i)),i}}class Vy{constructor(e){this.id=zy++,this.code=e,this.usedTimes=0}}function Gy(n,e,t,i,r,s,o){const a=new _c,l=new Hy,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,L,oe,j){const se=oe.fog,le=j.geometry,J=b.isMeshStandardMaterial?oe.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),q=ne&&ne.mapping===Bo?ne.image.height:null,de=_[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ve=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,xe=ve!==void 0?ve.length:0;let Fe=0;le.morphAttributes.position!==void 0&&(Fe=1),le.morphAttributes.normal!==void 0&&(Fe=2),le.morphAttributes.color!==void 0&&(Fe=3);let He,ie,ge,ye;if(de){const it=vn[de];He=it.vertexShader,ie=it.fragmentShader}else He=b.vertexShader,ie=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),ye=l.getFragmentShaderID(b);const H=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),re=j.isInstancedMesh===!0,ae=j.isBatchedMesh===!0,Oe=!!b.map,w=!!b.matcap,R=!!ne,g=!!b.aoMap,N=!!b.lightMap,D=!!b.bumpMap,F=!!b.normalMap,z=!!b.displacementMap,K=!!b.emissiveMap,G=!!b.metalnessMap,Y=!!b.roughnessMap,fe=b.anisotropy>0,M=b.clearcoat>0,v=b.dispersion>0,I=b.iridescence>0,X=b.sheen>0,te=b.transmission>0,$=fe&&!!b.anisotropyMap,Ee=M&&!!b.clearcoatMap,pe=M&&!!b.clearcoatNormalMap,be=M&&!!b.clearcoatRoughnessMap,Re=I&&!!b.iridescenceMap,ue=I&&!!b.iridescenceThicknessMap,Ce=X&&!!b.sheenColorMap,De=X&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,Se=!!b.specularColorMap,We=!!b.specularIntensityMap,O=te&&!!b.transmissionMap,Ae=te&&!!b.thicknessMap,he=!!b.gradientMap,Le=!!b.alphaMap,me=b.alphaTest>0,ce=!!b.alphaHash,Ue=!!b.extensions;let Xe=li;b.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const ut={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:ie,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ae,batchingColor:ae&&j._colorsTexture!==null,instancing:re,instancingColor:re&&j.instanceColor!==null,instancingMorph:re&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Mr,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:w,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:q,aoMap:g,lightMap:N,bumpMap:D,normalMap:F,displacementMap:h&&z,emissiveMap:K,normalMapObjectSpace:F&&b.normalMapType===$_,normalMapTangentSpace:F&&b.normalMapType===ld,metalnessMap:G,roughnessMap:Y,anisotropy:fe,anisotropyMap:$,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:pe,clearcoatRoughnessMap:be,dispersion:v,iridescence:I,iridescenceMap:Re,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:Ce,sheenRoughnessMap:De,specularMap:Ie,specularColorMap:Se,specularIntensityMap:We,transmission:te,transmissionMap:O,thicknessMap:Ae,gradientMap:he,opaque:b.transparent===!1&&b.blending===fr&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:ce,combine:b.combine,mapUv:Oe&&x(b.map.channel),aoMapUv:g&&x(b.aoMap.channel),lightMapUv:N&&x(b.lightMap.channel),bumpMapUv:D&&x(b.bumpMap.channel),normalMapUv:F&&x(b.normalMap.channel),displacementMapUv:z&&x(b.displacementMap.channel),emissiveMapUv:K&&x(b.emissiveMap.channel),metalnessMapUv:G&&x(b.metalnessMap.channel),roughnessMapUv:Y&&x(b.roughnessMap.channel),anisotropyMapUv:$&&x(b.anisotropyMap.channel),clearcoatMapUv:Ee&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(b.sheenRoughnessMap.channel),specularMapUv:Ie&&x(b.specularMap.channel),specularColorMapUv:Se&&x(b.specularColorMap.channel),specularIntensityMapUv:We&&x(b.specularIntensityMap.channel),transmissionMapUv:O&&x(b.transmissionMap.channel),thicknessMapUv:Ae&&x(b.thicknessMap.channel),alphaMapUv:Le&&x(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(F||fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!le.attributes.uv&&(Oe||Le),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ee,skinning:j.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:K&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bn,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)E.push(L),E.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(A(E,b),y(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function A(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const E=_[b.type];let L;if(E){const oe=vn[E];L=bv.clone(oe.uniforms)}else L=b.uniforms;return L}function U(b,E){let L;for(let oe=0,j=u.length;oe<j;oe++){const se=u[oe];if(se.cacheKey===E){L=se,++L.usedTimes;break}}return L===void 0&&(L=new By(n,E,b,s),u.push(L)),L}function P(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:U,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:B}}function ky(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,_,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Wy),i.length>1&&i.sort(h||wf),r.length>1&&r.sort(h||wf)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Xy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rf,n.set(i,[o])):r>=s.length?(o=new Rf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Je};break;case"SpotLight":t={position:new W,direction:new W,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Yy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $y=0;function Ky(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jy(n){const e=new qy,t=Yy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new dt,o=new dt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,A=0,y=0,S=0,U=0,P=0,C=0;c.sort(Ky);for(let b=0,E=c.length;b<E;b++){const L=c[b],oe=L.color,j=L.intensity,se=L.distance,le=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=oe.r*j,f+=oe.g*j,h+=oe.b*j;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],j);C++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,q=t.get(L);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=le,i.directionalShadowMatrix[d]=L.shadow.matrix,A++}i.directional[d]=J,d++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(oe).multiplyScalar(j),J.distance=se,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[x]=J;const ne=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,ne.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[x]=ne.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=le,S++}x++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(oe).multiplyScalar(j),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ne=L.shadow,q=t.get(L);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=J,_++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(j),J.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==_||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==A||B.numPointShadows!==y||B.numSpotShadows!==S||B.numSpotMaps!==U||B.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,B.directionalLength=d,B.pointLength=_,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=A,B.numPointShadows=y,B.numSpotShadows=S,B.numSpotMaps=U,B.numLightProbes=C,i.version=$y++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const y=c[p];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Cf(n){const e=new jy(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Jy(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cf(n),e.set(r,[a])):s>=o.length?(a=new Cf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`;function eE(n,e,t){let i=new vc;const r=new Te,s=new Te,o=new vt,a=new m0({depthPacking:Y_}),l=new g0,c={},u=t.maxTextureSize,f={[ui]:Gt,[Gt]:ui,[Bn]:Bn},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Zy,fragmentShader:Qy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ft(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(P,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(ai),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const j=p!==Nn&&this.type===Nn,se=p===Nn&&this.type!==Nn;for(let le=0,J=P.length;le<J;le++){const ne=P[le],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const de=q.getFrameExtents();if(r.multiply(de),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,q.mapSize.y=s.y)),q.map===null||j===!0||se===!0){const xe=this.type!==Nn?{minFilter:hn,magFilter:hn}:{};q.map!==null&&q.map.dispose(),q.map=new Ni(r.x,r.y,xe),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ve=q.getViewportCount();for(let xe=0;xe<ve;xe++){const Fe=q.getViewport(xe);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),oe.viewport(o),q.updateMatrices(ne,xe),i=q.getFrustum(),S(C,B,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Nn&&A(q,B),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,L)};function A(P,C){const B=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ni(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,B,h,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,B,d,x,null)}function y(P,C,B,b){let E=null;const L=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)E=L;else if(E=B.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const oe=E.uuid,j=C.uuid;let se=c[oe];se===void 0&&(se={},c[oe]=se);let le=se[j];le===void 0&&(le=E.clone(),se[j]=le,C.addEventListener("dispose",U)),E=le}if(E.visible=C.visible,E.wireframe=C.wireframe,b===Nn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const oe=n.properties.get(E);oe.light=B}return E}function S(P,C,B,b,E){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===Nn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const j=e.update(P),se=P.material;if(Array.isArray(se)){const le=j.groups;for(let J=0,ne=le.length;J<ne;J++){const q=le[J],de=se[q.materialIndex];if(de&&de.visible){const ve=y(P,de,b,E);P.onBeforeShadow(n,P,C,B,j,ve,q),n.renderBufferDirect(B,null,j,ve,P,q),P.onAfterShadow(n,P,C,B,j,ve,q)}}}else if(se.visible){const le=y(P,se,b,E);P.onBeforeShadow(n,P,C,B,j,le,null),n.renderBufferDirect(B,null,j,le,P,null),P.onAfterShadow(n,P,C,B,j,le,null)}}const oe=P.children;for(let j=0,se=oe.length;j<se;j++)S(oe[j],C,B,b,E)}function U(P){P.target.removeEventListener("dispose",U);for(const B in c){const b=c[B],E=P.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const tE={[Qa]:el,[tl]:rl,[nl]:sl,[vr]:il,[el]:Qa,[rl]:tl,[sl]:nl,[il]:vr};function nE(n,e){function t(){let O=!1;const Ae=new vt;let he=null;const Le=new vt(0,0,0,0);return{setMask:function(me){he!==me&&!O&&(n.colorMask(me,me,me,me),he=me)},setLocked:function(me){O=me},setClear:function(me,ce,Ue,Xe,ut){ut===!0&&(me*=Xe,ce*=Xe,Ue*=Xe),Ae.set(me,ce,Ue,Xe),Le.equals(Ae)===!1&&(n.clearColor(me,ce,Ue,Xe),Le.copy(Ae))},reset:function(){O=!1,he=null,Le.set(-1,0,0,0)}}}function i(){let O=!1,Ae=!1,he=null,Le=null,me=null;return{setReversed:function(ce){if(Ae!==ce){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ae=ce;const Xe=me;me=null,this.setClear(Xe)}},getReversed:function(){return Ae},setTest:function(ce){ce?H(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(ce){he!==ce&&!O&&(n.depthMask(ce),he=ce)},setFunc:function(ce){if(Ae&&(ce=tE[ce]),Le!==ce){switch(ce){case Qa:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case tl:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=ce}},setLocked:function(ce){O=ce},setClear:function(ce){me!==ce&&(Ae&&(ce=1-ce),n.clearDepth(ce),me=ce)},reset:function(){O=!1,he=null,Le=null,me=null,Ae=!1}}}function r(){let O=!1,Ae=null,he=null,Le=null,me=null,ce=null,Ue=null,Xe=null,ut=null;return{setTest:function(it){O||(it?H(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(it){Ae!==it&&!O&&(n.stencilMask(it),Ae=it)},setFunc:function(it,nn,An){(he!==it||Le!==nn||me!==An)&&(n.stencilFunc(it,nn,An),he=it,Le=nn,me=An)},setOp:function(it,nn,An){(ce!==it||Ue!==nn||Xe!==An)&&(n.stencilOp(it,nn,An),ce=it,Ue=nn,Xe=An)},setLocked:function(it){O=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){O=!1,Ae=null,he=null,Le=null,me=null,ce=null,Ue=null,Xe=null,ut=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,A=null,y=null,S=null,U=null,P=null,C=new Je(0,0,0),B=0,b=!1,E=null,L=null,oe=null,j=null,se=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=ne>=2);let de=null,ve={};const xe=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),He=new vt().fromArray(xe),ie=new vt().fromArray(Fe);function ge(O,Ae,he,Le){const me=new Uint8Array(4),ce=n.createTexture();n.bindTexture(O,ce),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<he;Ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(Ae+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ce}const ye={};ye[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(n.DEPTH_TEST),o.setFunc(vr),D(!1),F(Au),H(n.CULL_FACE),g(ai);function H(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ee(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function re(O,Ae){return f[O]!==Ae?(n.bindFramebuffer(O,Ae),f[O]=Ae,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ae(O,Ae){let he=d,Le=!1;if(O){he=h.get(Ae),he===void 0&&(he=[],h.set(Ae,he));const me=O.textures;if(he.length!==me.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ue=me.length;ce<Ue;ce++)he[ce]=n.COLOR_ATTACHMENT0+ce;he.length=me.length,Le=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Le=!0);Le&&n.drawBuffers(he)}function Oe(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const w={[wi]:n.FUNC_ADD,[S_]:n.FUNC_SUBTRACT,[M_]:n.FUNC_REVERSE_SUBTRACT};w[y_]=n.MIN,w[E_]=n.MAX;const R={[T_]:n.ZERO,[b_]:n.ONE,[A_]:n.SRC_COLOR,[Ja]:n.SRC_ALPHA,[D_]:n.SRC_ALPHA_SATURATE,[P_]:n.DST_COLOR,[R_]:n.DST_ALPHA,[w_]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[L_]:n.ONE_MINUS_DST_COLOR,[C_]:n.ONE_MINUS_DST_ALPHA,[I_]:n.CONSTANT_COLOR,[U_]:n.ONE_MINUS_CONSTANT_COLOR,[N_]:n.CONSTANT_ALPHA,[F_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(O,Ae,he,Le,me,ce,Ue,Xe,ut,it){if(O===ai){x===!0&&(ee(n.BLEND),x=!1);return}if(x===!1&&(H(n.BLEND),x=!0),O!==x_){if(O!==m||it!==b){if((p!==wi||S!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,S=wi),it)switch(O){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,y=null,U=null,P=null,C.set(0,0,0),B=0,m=O,b=it}return}me=me||Ae,ce=ce||he,Ue=Ue||Le,(Ae!==p||me!==S)&&(n.blendEquationSeparate(w[Ae],w[me]),p=Ae,S=me),(he!==A||Le!==y||ce!==U||Ue!==P)&&(n.blendFuncSeparate(R[he],R[Le],R[ce],R[Ue]),A=he,y=Le,U=ce,P=Ue),(Xe.equals(C)===!1||ut!==B)&&(n.blendColor(Xe.r,Xe.g,Xe.b,ut),C.copy(Xe),B=ut),m=O,b=!1}function N(O,Ae){O.side===Bn?ee(n.CULL_FACE):H(n.CULL_FACE);let he=O.side===Gt;Ae&&(he=!he),D(he),O.blending===fr&&O.transparent===!1?g(ai):g(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Le=O.stencilWrite;a.setTest(Le),Le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function D(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function F(O){O!==__?(H(n.CULL_FACE),O!==L&&(O===Au?n.cullFace(n.BACK):O===v_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),L=O}function z(O){O!==oe&&(J&&n.lineWidth(O),oe=O)}function K(O,Ae,he){O?(H(n.POLYGON_OFFSET_FILL),(j!==Ae||se!==he)&&(n.polygonOffset(Ae,he),j=Ae,se=he)):ee(n.POLYGON_OFFSET_FILL)}function G(O){O?H(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function Y(O){O===void 0&&(O=n.TEXTURE0+le-1),de!==O&&(n.activeTexture(O),de=O)}function fe(O,Ae,he){he===void 0&&(de===null?he=n.TEXTURE0+le-1:he=de);let Le=ve[he];Le===void 0&&(Le={type:void 0,texture:void 0},ve[he]=Le),(Le.type!==O||Le.texture!==Ae)&&(de!==he&&(n.activeTexture(he),de=he),n.bindTexture(O,Ae||ye[O]),Le.type=O,Le.texture=Ae)}function M(){const O=ve[de];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){He.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function De(O){ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Ie(O,Ae){let he=c.get(Ae);he===void 0&&(he=new WeakMap,c.set(Ae,he));let Le=he.get(O);Le===void 0&&(Le=n.getUniformBlockIndex(Ae,O.name),he.set(O,Le))}function Se(O,Ae){const Le=c.get(Ae).get(O);l.get(Ae)!==Le&&(n.uniformBlockBinding(Ae,Le,O.__bindingPointIndex),l.set(Ae,Le))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,ve={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,A=null,y=null,S=null,U=null,P=null,C=new Je(0,0,0),B=0,b=!1,E=null,L=null,oe=null,j=null,se=null,He.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:ee,bindFramebuffer:re,drawBuffers:ae,useProgram:Oe,setBlending:g,setMaterial:N,setFlipSided:D,setCullFace:F,setLineWidth:z,setPolygonOffset:K,setScissorTest:G,activeTexture:Y,bindTexture:fe,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:Re,texImage3D:ue,updateUBOMapping:Ie,uniformBlockBinding:Se,texStorage2D:pe,texStorage3D:be,texSubImage2D:X,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:Ee,scissor:Ce,viewport:De,reset:We}}function iE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return d?new OffscreenCanvas(M,v):ms("canvas")}function x(M,v,I){let X=1;const te=fe(M);if((te.width>I||te.height>I)&&(X=I/Math.max(te.width,te.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(X*te.width),Ee=Math.floor(X*te.height);f===void 0&&(f=_($,Ee));const pe=v?_($,Ee):f;return pe.width=$,pe.height=Ee,pe.getContext("2d").drawImage(M,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Ee+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,v,I,X,te=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=v;if(v===n.RED&&(I===n.FLOAT&&($=n.R32F),I===n.HALF_FLOAT&&($=n.R16F),I===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.R8UI),I===n.UNSIGNED_SHORT&&($=n.R16UI),I===n.UNSIGNED_INT&&($=n.R32UI),I===n.BYTE&&($=n.R8I),I===n.SHORT&&($=n.R16I),I===n.INT&&($=n.R32I)),v===n.RG&&(I===n.FLOAT&&($=n.RG32F),I===n.HALF_FLOAT&&($=n.RG16F),I===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RG8UI),I===n.UNSIGNED_SHORT&&($=n.RG16UI),I===n.UNSIGNED_INT&&($=n.RG32UI),I===n.BYTE&&($=n.RG8I),I===n.SHORT&&($=n.RG16I),I===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RGB8UI),I===n.UNSIGNED_SHORT&&($=n.RGB16UI),I===n.UNSIGNED_INT&&($=n.RGB32UI),I===n.BYTE&&($=n.RGB8I),I===n.SHORT&&($=n.RGB16I),I===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RGBA8UI),I===n.UNSIGNED_SHORT&&($=n.RGBA16UI),I===n.UNSIGNED_INT&&($=n.RGBA32UI),I===n.BYTE&&($=n.RGBA8I),I===n.SHORT&&($=n.RGBA16I),I===n.INT&&($=n.RGBA32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const Ee=te?Eo:Qe.getTransfer(X);I===n.FLOAT&&($=n.RGBA32F),I===n.HALF_FLOAT&&($=n.RGBA16F),I===n.UNSIGNED_BYTE&&($=Ee===st?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(M,v){let I;return M?v===null||v===Ui||v===hs?I=n.DEPTH24_STENCIL8:v===zn?I=n.DEPTH32F_STENCIL8:v===fs&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ui||v===hs?I=n.DEPTH_COMPONENT24:v===zn?I=n.DEPTH_COMPONENT32F:v===fs&&(I=n.DEPTH_COMPONENT16),I}function U(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==hn&&M.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function P(M){const v=M.target;v.removeEventListener("dispose",P),B(v),v.isVideoTexture&&u.delete(v)}function C(M){const v=M.target;v.removeEventListener("dispose",C),E(v)}function B(M){const v=i.get(M);if(v.__webglInit===void 0)return;const I=M.source,X=h.get(I);if(X){const te=X[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(M),Object.keys(X).length===0&&h.delete(I)}i.remove(M)}function b(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const I=M.source,X=h.get(I);delete X[v.__cacheKey],o.memory.textures--}function E(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let te=0;te<v.__webglFramebuffer[X].length;te++)n.deleteFramebuffer(v.__webglFramebuffer[X][te]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=M.textures;for(let X=0,te=I.length;X<te;X++){const $=i.get(I[X]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(I[X])}i.remove(M)}let L=0;function oe(){L=0}function j(){const M=L;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),L+=1,M}function se(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function le(M,v){const I=i.get(M);if(M.isVideoTexture&&G(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(I,M,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function J(M,v){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ye(I,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function ne(M,v){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ye(I,M,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function q(M,v){const I=i.get(M);if(M.version>0&&I.__version!==M.version){H(I,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const de={[us]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},ve={[hn]:n.NEAREST,[X_]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},xe={[K_]:n.NEVER,[tv]:n.ALWAYS,[j_]:n.LESS,[cd]:n.LEQUAL,[J_]:n.EQUAL,[ev]:n.GEQUAL,[Z_]:n.GREATER,[Q_]:n.NOTEQUAL};function Fe(M,v){if(v.type===zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===ta||v.magFilter===Is||v.magFilter===Pi||v.minFilter===xn||v.minFilter===ta||v.minFilter===Is||v.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,de[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,de[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,de[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==Is&&v.minFilter!==Pi||v.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function He(M,v){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",P));const X=v.source;let te=h.get(X);te===void 0&&(te={},h.set(X,te));const $=se(v);if($!==M.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),te[$].usedTimes++;const Ee=te[M.__cacheKey];Ee!==void 0&&(te[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(v)),M.__cacheKey=$,M.__webglTexture=te[$].texture}return I}function ie(M,v,I){return Math.floor(Math.floor(M/I)/v)}function ge(M,v,I,X){const $=M.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,I,X,v.data);else{$.sort((ue,Ce)=>ue.start-Ce.start);let Ee=0;for(let ue=1;ue<$.length;ue++){const Ce=$[Ee],De=$[ue],Ie=Ce.start+Ce.count,Se=ie(De.start,v.width,4),We=ie(Ce.start,v.width,4);De.start<=Ie+1&&Se===We&&ie(De.start+De.count-1,v.width,4)===Se?Ce.count=Math.max(Ce.count,De.start+De.count-Ce.start):(++Ee,$[Ee]=De)}$.length=Ee+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ue=0,Ce=$.length;ue<Ce;ue++){const De=$[ue],Ie=Math.floor(De.start/4),Se=Math.ceil(De.count/4),We=Ie%v.width,O=Math.floor(Ie/v.width),Ae=Se,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,We,O,Ae,he,I,X,v.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function ye(M,v,I){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const te=He(M,v),$=v.source;t.bindTexture(X,M.__webglTexture,n.TEXTURE0+I);const Ee=i.get($);if($.version!==Ee.__version||te===!0){t.activeTexture(n.TEXTURE0+I);const pe=Qe.getPrimaries(Qe.workingColorSpace),be=v.colorSpace===ri?null:Qe.getPrimaries(v.colorSpace),Re=v.colorSpace===ri||pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ue=x(v.image,!1,r.maxTextureSize);ue=Y(v,ue);const Ce=s.convert(v.format,v.colorSpace),De=s.convert(v.type);let Ie=y(v.internalFormat,Ce,De,v.colorSpace,v.isVideoTexture);Fe(X,v);let Se;const We=v.mipmaps,O=v.isVideoTexture!==!0,Ae=Ee.__version===void 0||te===!0,he=$.dataReady,Le=U(v,ue);if(v.isDepthTexture)Ie=S(v.format===ps,v.type),Ae&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Ce,De,null));else if(v.isDataTexture)if(We.length>0){O&&Ae&&t.texStorage2D(n.TEXTURE_2D,Le,Ie,We[0].width,We[0].height);for(let me=0,ce=We.length;me<ce;me++)Se=We[me],O?he&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Se.width,Se.height,Ce,De,Se.data):t.texImage2D(n.TEXTURE_2D,me,Ie,Se.width,Se.height,0,Ce,De,Se.data);v.generateMipmaps=!1}else O?(Ae&&t.texStorage2D(n.TEXTURE_2D,Le,Ie,ue.width,ue.height),he&&ge(v,ue,Ce,De)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Ce,De,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){O&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ie,We[0].width,We[0].height,ue.depth);for(let me=0,ce=We.length;me<ce;me++)if(Se=We[me],v.format!==un)if(Ce!==null)if(O){if(he)if(v.layerUpdates.size>0){const Ue=sf(Se.width,Se.height,v.format,v.type);for(const Xe of v.layerUpdates){const ut=Se.data.subarray(Xe*Ue/Se.data.BYTES_PER_ELEMENT,(Xe+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Xe,Se.width,Se.height,1,Ce,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,ue.depth,Ce,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ie,Se.width,Se.height,ue.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,ue.depth,Ce,De,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ie,Se.width,Se.height,ue.depth,0,Ce,De,Se.data)}else{O&&Ae&&t.texStorage2D(n.TEXTURE_2D,Le,Ie,We[0].width,We[0].height);for(let me=0,ce=We.length;me<ce;me++)Se=We[me],v.format!==un?Ce!==null?O?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?he&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Se.width,Se.height,Ce,De,Se.data):t.texImage2D(n.TEXTURE_2D,me,Ie,Se.width,Se.height,0,Ce,De,Se.data)}else if(v.isDataArrayTexture)if(O){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ie,ue.width,ue.height,ue.depth),he)if(v.layerUpdates.size>0){const me=sf(ue.width,ue.height,v.format,v.type);for(const ce of v.layerUpdates){const Ue=ue.data.subarray(ce*me/ue.data.BYTES_PER_ELEMENT,(ce+1)*me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Ce,De,Ue)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ce,De,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,Ce,De,ue.data);else if(v.isData3DTexture)O?(Ae&&t.texStorage3D(n.TEXTURE_3D,Le,Ie,ue.width,ue.height,ue.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ce,De,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,Ce,De,ue.data);else if(v.isFramebufferTexture){if(Ae)if(O)t.texStorage2D(n.TEXTURE_2D,Le,Ie,ue.width,ue.height);else{let me=ue.width,ce=ue.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ie,me,ce,0,Ce,De,null),me>>=1,ce>>=1}}else if(We.length>0){if(O&&Ae){const me=fe(We[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ie,me.width,me.height)}for(let me=0,ce=We.length;me<ce;me++)Se=We[me],O?he&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce,De,Se):t.texImage2D(n.TEXTURE_2D,me,Ie,Ce,De,Se);v.generateMipmaps=!1}else if(O){if(Ae){const me=fe(ue);t.texStorage2D(n.TEXTURE_2D,Le,Ie,me.width,me.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,De,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Ce,De,ue);m(v)&&p(X),Ee.__version=$.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function H(M,v,I){if(v.image.length!==6)return;const X=He(M,v),te=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+I);const $=i.get(te);if(te.version!==$.__version||X===!0){t.activeTexture(n.TEXTURE0+I);const Ee=Qe.getPrimaries(Qe.workingColorSpace),pe=v.colorSpace===ri?null:Qe.getPrimaries(v.colorSpace),be=v.colorSpace===ri||Ee===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,Ce=[];for(let ce=0;ce<6;ce++)!Re&&!ue?Ce[ce]=x(v.image[ce],!0,r.maxCubemapSize):Ce[ce]=ue?v.image[ce].image:v.image[ce],Ce[ce]=Y(v,Ce[ce]);const De=Ce[0],Ie=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),We=y(v.internalFormat,Ie,Se,v.colorSpace),O=v.isVideoTexture!==!0,Ae=$.__version===void 0||X===!0,he=te.dataReady;let Le=U(v,De);Fe(n.TEXTURE_CUBE_MAP,v);let me;if(Re){O&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,We,De.width,De.height);for(let ce=0;ce<6;ce++){me=Ce[ce].mipmaps;for(let Ue=0;Ue<me.length;Ue++){const Xe=me[Ue];v.format!==un?Ie!==null?O?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Xe.width,Xe.height,Ie,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,We,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Xe.width,Xe.height,Ie,Se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,We,Xe.width,Xe.height,0,Ie,Se,Xe.data)}}}else{if(me=v.mipmaps,O&&Ae){me.length>0&&Le++;const ce=fe(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,We,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){O?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce[ce].width,Ce[ce].height,Ie,Se,Ce[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,We,Ce[ce].width,Ce[ce].height,0,Ie,Se,Ce[ce].data);for(let Ue=0;Ue<me.length;Ue++){const ut=me[Ue].image[ce].image;O?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,ut.width,ut.height,Ie,Se,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,We,ut.width,ut.height,0,Ie,Se,ut.data)}}else{O?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ie,Se,Ce[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,We,Ie,Se,Ce[ce]);for(let Ue=0;Ue<me.length;Ue++){const Xe=me[Ue];O?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,Ie,Se,Xe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,We,Ie,Se,Xe.image[ce])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),$.__version=te.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ee(M,v,I,X,te,$){const Ee=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),be=y(I.internalFormat,Ee,pe,I.colorSpace),Re=i.get(v),ue=i.get(I);if(ue.__renderTarget=v,!Re.__hasExternalTextures){const Ce=Math.max(1,v.width>>$),De=Math.max(1,v.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,be,Ce,De,v.depth,0,Ee,pe,null):t.texImage2D(te,$,be,Ce,De,0,Ee,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),K(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,te,ue.__webglTexture,0,z(v)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,te,ue.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(M,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const X=v.depthTexture,te=X&&X.isDepthTexture?X.type:null,$=S(v.stencilBuffer,te),Ee=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=z(v);K(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,M)}else{const X=v.textures;for(let te=0;te<X.length;te++){const $=X[te],Ee=s.convert($.format,$.colorSpace),pe=s.convert($.type),be=y($.internalFormat,Ee,pe,$.colorSpace),Re=z(v);I&&K(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,be,v.width,v.height):K(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,be,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,be,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),le(v.depthTexture,0);const te=X.__webglTexture,$=z(v);if(v.depthTexture.format===ds)K(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(v.depthTexture.format===ps)K(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Oe(M){const v=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",te)};X.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=X}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const X=M.texture.mipmaps;X&&X.length>0?ae(v.__webglFramebuffer[0],M):ae(v.__webglFramebuffer,M)}else if(I){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),re(v.__webglDepthbuffer[X],M,!1);else{const te=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else{const X=M.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),re(v.__webglDepthbuffer,M,!1);else{const te=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(M,v,I){const X=i.get(M);v!==void 0&&ee(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Oe(M)}function R(M){const v=M.texture,I=i.get(M),X=i.get(v);M.addEventListener("dispose",C);const te=M.textures,$=M.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,o.memory.textures++),$){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let be=0;be<v.mipmaps.length;be++)I.__webglFramebuffer[pe][be]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let pe=0,be=te.length;pe<be;pe++){const Re=i.get(te[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&K(M)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const be=te[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Re=s.convert(be.format,be.colorSpace),ue=s.convert(be.type),Ce=y(be.internalFormat,Re,ue,be.colorSpace,M.isXRRenderTarget===!0),De=z(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),re(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ee(I.__webglFramebuffer[pe][be],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else ee(I.__webglFramebuffer[pe],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let pe=0,be=te.length;pe<be;pe++){const Re=te[pe],ue=i.get(Re);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Fe(n.TEXTURE_2D,Re),ee(I.__webglFramebuffer,M,Re,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),Fe(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ee(I.__webglFramebuffer[be],M,v,n.COLOR_ATTACHMENT0,pe,be);else ee(I.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,pe,0);m(v)&&p(pe),t.unbindTexture()}M.depthBuffer&&Oe(M)}function g(M){const v=M.textures;for(let I=0,X=v.length;I<X;I++){const te=v[I];if(m(te)){const $=A(M),Ee=i.get(te).__webglTexture;t.bindTexture($,Ee),p($),t.unbindTexture()}}}const N=[],D=[];function F(M){if(M.samples>0){if(K(M)===!1){const v=M.textures,I=M.width,X=M.height;let te=n.COLOR_BUFFER_BIT;const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(M),pe=v.length>1;if(pe)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const be=M.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const ue=i.get(v[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,I,X,0,0,I,X,te,n.NEAREST),l===!0&&(N.length=0,D.length=0,N.push(n.COLOR_ATTACHMENT0+Re),M.depthBuffer&&M.resolveDepthBuffer===!1&&(N.push($),D.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const ue=i.get(v[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function z(M){return Math.min(r.maxSamples,M.samples)}function K(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function Y(M,v){const I=M.colorSpace,X=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==Mr&&I!==ri&&(Qe.getTransfer(I)===st?(X!==un||te!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function fe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=w,this.setupRenderTarget=R,this.updateRenderTargetMipmap=g,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=K}function rE(n,e){function t(i,r=ri){let s;const o=Qe.getTransfer(r);if(i===En)return n.UNSIGNED_BYTE;if(i===uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.BYTE;if(i===td)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===cc)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===rd)return n.RGB;if(i===un)return n.RGBA;if(i===ds)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===sd)return n.RED;if(i===hc)return n.RED_INTEGER;if(i===od)return n.RG;if(i===dc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===fo)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===ul||i===fl||i===hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===pl||i===ml)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dl||i===pl)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ml)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===yl||i===El||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===Pl||i===Ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ho)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===Dl||i===Il||i===Ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oE=`
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

}`;class aE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fi({vertexShader:sE,fragmentShader:oE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lE extends br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const x=new aE,m=t.getContextAttributes();let p=null,A=null;const y=[],S=[],U=new Te;let P=null;const C=new Qt;C.viewport=new vt;const B=new Qt;B.viewport=new vt;const b=[C,B],E=new w0;let L=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ge=y[ie];return ge===void 0&&(ge=new Ta,y[ie]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ie){let ge=y[ie];return ge===void 0&&(ge=new Ta,y[ie]=ge),ge.getGripSpace()},this.getHand=function(ie){let ge=y[ie];return ge===void 0&&(ge=new Ta,y[ie]=ge),ge.getHandSpace()};function j(ie){const ge=S.indexOf(ie.inputSource);if(ge===-1)return;const ye=y[ge];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,c||o),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function se(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",le);for(let ie=0;ie<y.length;ie++){const ge=S[ie];ge!==null&&(S[ie]=null,y[ie].disconnect(ge))}L=null,oe=null,x.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",se),r.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,H=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=m.stencil?ps:ds,H=m.stencil?hs:Ui);const re={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Ni(h.textureWidth,h.textureHeight,{format:un,type:En,depthTexture:new Sd(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ni(d.framebufferWidth,d.framebufferHeight,{format:un,type:En,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function le(ie){for(let ge=0;ge<ie.removed.length;ge++){const ye=ie.removed[ge],H=S.indexOf(ye);H>=0&&(S[H]=null,y[H].disconnect(ye))}for(let ge=0;ge<ie.added.length;ge++){const ye=ie.added[ge];let H=S.indexOf(ye);if(H===-1){for(let re=0;re<y.length;re++)if(re>=S.length){S.push(ye),H=re;break}else if(S[re]===null){S[re]=ye,H=re;break}if(H===-1)break}const ee=y[H];ee&&ee.connect(ye)}}const J=new W,ne=new W;function q(ie,ge,ye){J.setFromMatrixPosition(ge.matrixWorld),ne.setFromMatrixPosition(ye.matrixWorld);const H=J.distanceTo(ne),ee=ge.projectionMatrix.elements,re=ye.projectionMatrix.elements,ae=ee[14]/(ee[10]-1),Oe=ee[14]/(ee[10]+1),w=(ee[9]+1)/ee[5],R=(ee[9]-1)/ee[5],g=(ee[8]-1)/ee[0],N=(re[8]+1)/re[0],D=ae*g,F=ae*N,z=H/(-g+N),K=z*-g;if(ge.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(K),ie.translateZ(z),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ee[10]===-1)ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const G=ae+z,Y=Oe+z,fe=D-K,M=F+(H-K),v=w*Oe/Y*G,I=R*Oe/Y*G;ie.projectionMatrix.makePerspective(fe,M,v,I,G,Y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function de(ie,ge){ge===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ge.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ge=ie.near,ye=ie.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),E.near=B.near=C.near=ge,E.far=B.far=C.far=ye,(L!==E.near||oe!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,oe=E.far),C.layers.mask=ie.layers.mask|2,B.layers.mask=ie.layers.mask|4,E.layers.mask=C.layers.mask|B.layers.mask;const H=ie.parent,ee=E.cameras;de(E,H);for(let re=0;re<ee.length;re++)de(ee[re],H);ee.length===2?q(E,C,B):E.projectionMatrix.copy(C.projectionMatrix),ve(ie,E,H)};function ve(ie,ge,ye){ye===null?ie.matrix.copy(ge.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ge.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Nl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let xe=null;function Fe(ie,ge){if(u=ge.getViewerPose(c||o),_=ge,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let H=!1;ye.length!==E.cameras.length&&(E.cameras.length=0,H=!0);for(let ae=0;ae<ye.length;ae++){const Oe=ye[ae];let w=null;if(d!==null)w=d.getViewport(Oe);else{const g=f.getViewSubImage(h,Oe);w=g.viewport,ae===0&&(e.setRenderTargetTextures(A,g.colorTexture,g.depthStencilTexture),e.setRenderTarget(A))}let R=b[ae];R===void 0&&(R=new Qt,R.layers.enable(ae),R.viewport=new vt,b[ae]=R),R.matrix.fromArray(Oe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Oe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ae===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),H===!0&&E.cameras.push(R)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(ye[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,r.renderState)}}for(let ye=0;ye<y.length;ye++){const H=S[ye],ee=y[ye];H!==null&&ee!==void 0&&ee.update(H,ge,c||o)}xe&&xe(ie,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const He=new Ld;He.setAnimationLoop(Fe),this.setAnimationLoop=function(ie){xe=ie},this.dispose=function(){}}}const Ei=new Tn,cE=new dt;function uE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_d(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),y=A.envMap,S=A.envMapRotation;y&&(m.envMap.value=y,Ei.copy(S),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(Ei)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const S=y.program;i.uniformBlockBinding(A,S)}function c(A,y){let S=r[A.id];S===void 0&&(_(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",m));const U=y.program;i.updateUBOMapping(A,U);const P=e.render.frame;s[A.id]!==P&&(h(A),s[A.id]=P)}function u(A){const y=f();A.__bindingPointIndex=y;const S=n.createBuffer(),U=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=r[A.id],S=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,C=S.length;P<C;P++){const B=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,E=B.length;b<E;b++){const L=B[b];if(d(L,P,b,U)===!0){const oe=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let se=0;for(let le=0;le<j.length;le++){const J=j[le],ne=x(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,oe+se,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,se),se+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,y,S,U){const P=A.value,C=y+"_"+S;if(U[C]===void 0)return typeof P=="number"||typeof P=="boolean"?U[C]=P:U[C]=P.clone(),!0;{const B=U[C];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return U[C]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function _(A){const y=A.uniforms;let S=0;const U=16;for(let C=0,B=y.length;C<B;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,L=b.length;E<L;E++){const oe=b[E],j=Array.isArray(oe.value)?oe.value:[oe.value];for(let se=0,le=j.length;se<le;se++){const J=j[se],ne=x(J),q=S%U,de=q%ne.boundary,ve=q+de;S+=de,ve!==0&&U-ve<ne.storage&&(S+=U-ve),oe.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=S,S+=ne.storage}}}const P=S%U;return P>0&&(S+=U-P),A.__size=S,A.__cache={},this}function x(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class hE{constructor(e={}){const{canvas:t=iv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let U=!1;this._outputColorSpace=Zt;let P=0,C=0,B=null,b=-1,E=null;const L=new vt,oe=new vt;let j=null;const se=new Je(0);let le=0,J=t.width,ne=t.height,q=1,de=null,ve=null;const xe=new vt(0,0,J,ne),Fe=new vt(0,0,J,ne);let He=!1;const ie=new vc;let ge=!1,ye=!1;const H=new dt,ee=new dt,re=new W,ae=new vt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return B===null?q:1}let g=i;function N(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ce,!1),g===null){const V="webgl2";if(g=N(V,T),g===null)throw N(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let D,F,z,K,G,Y,fe,M,v,I,X,te,$,Ee,pe,be,Re,ue,Ce,De,Ie,Se,We,O;function Ae(){D=new yM(g),D.init(),Se=new rE(g,D),F=new mM(g,D,e,Se),z=new nE(g,D),F.reverseDepthBuffer&&h&&z.buffers.depth.setReversed(!0),K=new bM(g),G=new ky,Y=new iE(g,D,z,G,F,Se,K),fe=new _M(S),M=new MM(S),v=new L0(g),We=new dM(g,v),I=new EM(g,v,K,We),X=new wM(g,I,v,K),Ce=new AM(g,F,Y),be=new gM(G),te=new Gy(S,fe,M,D,F,We,be),$=new uE(S,G),Ee=new Xy,pe=new Jy(D),ue=new hM(S,fe,M,z,X,d,l),Re=new eE(S,X,F),O=new fE(g,K,F,z),De=new pM(g,D,K),Ie=new TM(g,D,K),K.programs=te.programs,S.capabilities=F,S.extensions=D,S.properties=G,S.renderLists=Ee,S.shadowMap=Re,S.state=z,S.info=K}Ae();const he=new lE(S,g);this.xr=he,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=D.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=D.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(J,ne,!1))},this.getSize=function(T){return T.set(J,ne)},this.setSize=function(T,V,Z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,ne=V,t.width=Math.floor(T*q),t.height=Math.floor(V*q),Z===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(J*q,ne*q).floor()},this.setDrawingBufferSize=function(T,V,Z){J=T,ne=V,q=Z,t.width=Math.floor(T*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,V,Z,Q){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,V,Z,Q),z.viewport(L.copy(xe).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,V,Z,Q){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,V,Z,Q),z.scissor(oe.copy(Fe).multiplyScalar(q).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){z.setScissorTest(He=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,Z=!0){let Q=0;if(T){let k=!1;if(B!==null){const _e=B.texture.format;k=_e===pc||_e===dc||_e===hc}if(k){const _e=B.texture.type,we=_e===En||_e===Ui||_e===fs||_e===hs||_e===uc||_e===fc,Ne=ue.getClearColor(),Pe=ue.getClearAlpha(),Ve=Ne.r,Ge=Ne.g,Be=Ne.b;we?(_[0]=Ve,_[1]=Ge,_[2]=Be,_[3]=Pe,g.clearBufferuiv(g.COLOR,0,_)):(x[0]=Ve,x[1]=Ge,x[2]=Be,x[3]=Pe,g.clearBufferiv(g.COLOR,0,x))}else Q|=g.COLOR_BUFFER_BIT}V&&(Q|=g.DEPTH_BUFFER_BIT),Z&&(Q|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),Ee.dispose(),pe.dispose(),G.dispose(),fe.dispose(),M.dispose(),X.dispose(),We.dispose(),O.dispose(),te.dispose(),he.dispose(),he.removeEventListener("sessionstart",bc),he.removeEventListener("sessionend",Ac),pi.stop()};function Le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=K.autoReset,V=Re.enabled,Z=Re.autoUpdate,Q=Re.needsUpdate,k=Re.type;Ae(),K.autoReset=T,Re.enabled=V,Re.autoUpdate=Z,Re.needsUpdate=Q,Re.type=k}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const V=T.target;V.removeEventListener("dispose",Ue),Xe(V)}function Xe(T){ut(T),G.remove(T)}function ut(T){const V=G.get(T).programs;V!==void 0&&(V.forEach(function(Z){te.releaseProgram(Z)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Z,Q,k,_e){V===null&&(V=Oe);const we=k.isMesh&&k.matrixWorld.determinant()<0,Ne=Fd(T,V,Z,Q,k);z.setMaterial(Q,we);let Pe=Z.index,Ve=1;if(Q.wireframe===!0){if(Pe=I.getWireframeAttribute(Z),Pe===void 0)return;Ve=2}const Ge=Z.drawRange,Be=Z.attributes.position;let je=Ge.start*Ve,rt=(Ge.start+Ge.count)*Ve;_e!==null&&(je=Math.max(je,_e.start*Ve),rt=Math.min(rt,(_e.start+_e.count)*Ve)),Pe!==null?(je=Math.max(je,0),rt=Math.min(rt,Pe.count)):Be!=null&&(je=Math.max(je,0),rt=Math.min(rt,Be.count));const _t=rt-je;if(_t<0||_t===1/0)return;We.setup(k,Q,Ne,Z,Pe);let ft,ot=De;if(Pe!==null&&(ft=v.get(Pe),ot=Ie,ot.setIndex(ft)),k.isMesh)Q.wireframe===!0?(z.setLineWidth(Q.wireframeLinewidth*R()),ot.setMode(g.LINES)):ot.setMode(g.TRIANGLES);else if(k.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),z.setLineWidth(ze*R()),k.isLineSegments?ot.setMode(g.LINES):k.isLineLoop?ot.setMode(g.LINE_LOOP):ot.setMode(g.LINE_STRIP)}else k.isPoints?ot.setMode(g.POINTS):k.isSprite&&ot.setMode(g.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(D.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,mt=k._multiDrawCounts,Ze=k._multiDrawCount,kt=Pe?v.get(Pe).bytesPerElement:1,Bi=G.get(Q).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)Bi.setValue(g,"_gl_DrawID",Wt),ot.render(ze[Wt]/kt,mt[Wt])}else if(k.isInstancedMesh)ot.renderInstances(je,_t,k.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,mt=Math.min(Z.instanceCount,ze);ot.renderInstances(je,_t,mt)}else ot.render(je,_t)};function it(T,V,Z){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,Cs(T,V,Z),T.side=ui,T.needsUpdate=!0,Cs(T,V,Z),T.side=Bn):Cs(T,V,Z)}this.compile=function(T,V,Z=null){Z===null&&(Z=T),p=pe.get(Z),p.init(V),y.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==Z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Q=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _e=k.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ne=_e[we];it(Ne,Z,k),Q.add(Ne)}else it(_e,Z,k),Q.add(_e)}),p=y.pop(),Q},this.compileAsync=function(T,V,Z=null){const Q=this.compile(T,V,Z);return new Promise(k=>{function _e(){if(Q.forEach(function(we){G.get(we).currentProgram.isReady()&&Q.delete(we)}),Q.size===0){k(T);return}setTimeout(_e,10)}D.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let nn=null;function An(T){nn&&nn(T)}function bc(){pi.stop()}function Ac(){pi.start()}const pi=new Ld;pi.setAnimationLoop(An),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(T){nn=T,he.setAnimationLoop(T),T===null?pi.stop():pi.start()},he.addEventListener("sessionstart",bc),he.addEventListener("sessionend",Ac),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,V,B),p=pe.get(T,y.length),p.init(V),y.push(p),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix(ee),ye=this.localClippingEnabled,ge=be.init(this.clippingPlanes,ye),m=Ee.get(T,A.length),m.init(),A.push(m),he.enabled===!0&&he.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&Ho(_e,V,-1/0,S.sortObjects)}Ho(T,V,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(de,ve),w=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,w&&ue.addToRenderList(m,T),this.info.render.frame++,ge===!0&&be.beginShadows();const Z=p.state.shadowsArray;Re.render(Z,T,V),ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,k=m.transmissive;if(p.setupLights(),V.isArrayCamera){const _e=V.cameras;if(k.length>0)for(let we=0,Ne=_e.length;we<Ne;we++){const Pe=_e[we];Rc(Q,k,T,Pe)}w&&ue.render(T);for(let we=0,Ne=_e.length;we<Ne;we++){const Pe=_e[we];wc(m,T,Pe,Pe.viewport)}}else k.length>0&&Rc(Q,k,T,V),w&&ue.render(T),wc(m,T,V);B!==null&&C===0&&(Y.updateMultisampleRenderTarget(B),Y.updateRenderTargetMipmap(B)),T.isScene===!0&&T.onAfterRender(S,T,V),We.resetDefaultState(),b=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],ge===!0&&be.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ho(T,V,Z,Q){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){Q&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);const we=X.update(T),Ne=T.material;Ne.visible&&m.push(T,we,Ne,Z,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){const we=X.update(T),Ne=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ae.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ae.copy(we.boundingSphere.center)),ae.applyMatrix4(T.matrixWorld).applyMatrix4(ee)),Array.isArray(Ne)){const Pe=we.groups;for(let Ve=0,Ge=Pe.length;Ve<Ge;Ve++){const Be=Pe[Ve],je=Ne[Be.materialIndex];je&&je.visible&&m.push(T,we,je,Z,ae.z,Be)}}else Ne.visible&&m.push(T,we,Ne,Z,ae.z,null)}}const _e=T.children;for(let we=0,Ne=_e.length;we<Ne;we++)Ho(_e[we],V,Z,Q)}function wc(T,V,Z,Q){const k=T.opaque,_e=T.transmissive,we=T.transparent;p.setupLightsView(Z),ge===!0&&be.setGlobalState(S.clippingPlanes,Z),Q&&z.viewport(L.copy(Q)),k.length>0&&Rs(k,V,Z),_e.length>0&&Rs(_e,V,Z),we.length>0&&Rs(we,V,Z),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Rc(T,V,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ni(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?Ts:En,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Q.id],we=Q.viewport||L;_e.setSize(we.z*S.transmissionResolutionScale,we.w*S.transmissionResolutionScale);const Ne=S.getRenderTarget(),Pe=S.getActiveCubeFace(),Ve=S.getActiveMipmapLevel();S.setRenderTarget(_e),S.getClearColor(se),le=S.getClearAlpha(),le<1&&S.setClearColor(16777215,.5),S.clear(),w&&ue.render(Z);const Ge=S.toneMapping;S.toneMapping=li;const Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ge===!0&&be.setGlobalState(S.clippingPlanes,Q),Rs(T,Z,Q),Y.updateMultisampleRenderTarget(_e),Y.updateRenderTargetMipmap(_e),D.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let rt=0,_t=V.length;rt<_t;rt++){const ft=V[rt],ot=ft.object,ze=ft.geometry,mt=ft.material,Ze=ft.group;if(mt.side===Bn&&ot.layers.test(Q.layers)){const kt=mt.side;mt.side=Gt,mt.needsUpdate=!0,Cc(ot,Z,Q,ze,mt,Ze),mt.side=kt,mt.needsUpdate=!0,je=!0}}je===!0&&(Y.updateMultisampleRenderTarget(_e),Y.updateRenderTargetMipmap(_e))}S.setRenderTarget(Ne,Pe,Ve),S.setClearColor(se,le),Be!==void 0&&(Q.viewport=Be),S.toneMapping=Ge}function Rs(T,V,Z){const Q=V.isScene===!0?V.overrideMaterial:null;for(let k=0,_e=T.length;k<_e;k++){const we=T[k],Ne=we.object,Pe=we.geometry,Ve=we.group;let Ge=we.material;Ge.allowOverride===!0&&Q!==null&&(Ge=Q),Ne.layers.test(Z.layers)&&Cc(Ne,V,Z,Pe,Ge,Ve)}}function Cc(T,V,Z,Q,k,_e){T.onBeforeRender(S,V,Z,Q,k,_e),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(S,V,Z,Q,T,_e),k.transparent===!0&&k.side===Bn&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,S.renderBufferDirect(Z,V,Q,k,T,_e),k.side=ui,k.needsUpdate=!0,S.renderBufferDirect(Z,V,Q,k,T,_e),k.side=Bn):S.renderBufferDirect(Z,V,Q,k,T,_e),T.onAfterRender(S,V,Z,Q,k,_e)}function Cs(T,V,Z){V.isScene!==!0&&(V=Oe);const Q=G.get(T),k=p.state.lights,_e=p.state.shadowsArray,we=k.state.version,Ne=te.getParameters(T,k.state,_e,V,Z),Pe=te.getProgramCacheKey(Ne);let Ve=Q.programs;Q.environment=T.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(T.isMeshStandardMaterial?M:fe).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Ue),Ve=new Map,Q.programs=Ve);let Ge=Ve.get(Pe);if(Ge!==void 0){if(Q.currentProgram===Ge&&Q.lightsStateVersion===we)return Lc(T,Ne),Ge}else Ne.uniforms=te.getUniforms(T),T.onBeforeCompile(Ne,S),Ge=te.acquireProgram(Ne,Pe),Ve.set(Pe,Ge),Q.uniforms=Ne.uniforms;const Be=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=be.uniform),Lc(T,Ne),Q.needsLights=Bd(T),Q.lightsStateVersion=we,Q.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),Q.currentProgram=Ge,Q.uniformsList=null,Ge}function Pc(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Lc(T,V){const Z=G.get(T);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Fd(T,V,Z,Q,k){V.isScene!==!0&&(V=Oe),Y.resetTextureUnits();const _e=V.fog,we=Q.isMeshStandardMaterial?V.environment:null,Ne=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Mr,Pe=(Q.isMeshStandardMaterial?M:fe).get(Q.envMap||we),Ve=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!Z.morphAttributes.position,je=!!Z.morphAttributes.normal,rt=!!Z.morphAttributes.color;let _t=li;Q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_t=S.toneMapping);const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=ft!==void 0?ft.length:0,ze=G.get(Q),mt=p.state.lights;if(ge===!0&&(ye===!0||T!==E)){const Dt=T===E&&Q.id===b;be.setState(Q,T,Dt)}let Ze=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mt.state.version||ze.outputColorSpace!==Ne||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isBatchedMesh&&ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ze.instancingMorph===!1&&k.morphTexture!==null||ze.envMap!==Pe||Q.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==be.numPlanes||ze.numIntersection!==be.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==je||ze.morphColors!==rt||ze.toneMapping!==_t||ze.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,ze.__version=Q.version);let kt=ze.currentProgram;Ze===!0&&(kt=Cs(Q,V,k));let Bi=!1,Wt=!1,Pr=!1;const ht=kt.getUniforms(),Kt=ze.uniforms;if(z.useProgram(kt.program)&&(Bi=!0,Wt=!0,Pr=!0),Q.id!==b&&(b=Q.id,Wt=!0),Bi||E!==T){z.buffers.depth.getReversed()?(H.copy(T.projectionMatrix),sv(H),ov(H),ht.setValue(g,"projectionMatrix",H)):ht.setValue(g,"projectionMatrix",T.projectionMatrix),ht.setValue(g,"viewMatrix",T.matrixWorldInverse);const zt=ht.map.cameraPosition;zt!==void 0&&zt.setValue(g,re.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&ht.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ht.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Wt=!0,Pr=!0)}if(k.isSkinnedMesh){ht.setOptional(g,k,"bindMatrix"),ht.setOptional(g,k,"bindMatrixInverse");const Dt=k.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ht.setValue(g,"boneTexture",Dt.boneTexture,Y))}k.isBatchedMesh&&(ht.setOptional(g,k,"batchingTexture"),ht.setValue(g,"batchingTexture",k._matricesTexture,Y),ht.setOptional(g,k,"batchingIdTexture"),ht.setValue(g,"batchingIdTexture",k._indirectTexture,Y),ht.setOptional(g,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(g,"batchingColorTexture",k._colorsTexture,Y));const jt=Z.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Ce.update(k,Z,kt),(Wt||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,ht.setValue(g,"receiveShadow",k.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Kt.envMap.value=Pe,Kt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Kt.envMapIntensity.value=V.environmentIntensity),Wt&&(ht.setValue(g,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&Od(Kt,Pr),_e&&Q.fog===!0&&$.refreshFogUniforms(Kt,_e),$.refreshMaterialUniforms(Kt,Q,q,ne,p.state.transmissionRenderTarget[T.id]),mo.upload(g,Pc(ze),Kt,Y)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(mo.upload(g,Pc(ze),Kt,Y),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ht.setValue(g,"center",k.center),ht.setValue(g,"modelViewMatrix",k.modelViewMatrix),ht.setValue(g,"normalMatrix",k.normalMatrix),ht.setValue(g,"modelMatrix",k.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Dt=Q.uniformsGroups;for(let zt=0,Vo=Dt.length;zt<Vo;zt++){const mi=Dt[zt];O.update(mi,kt),O.bind(mi,kt)}}return kt}function Od(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Bd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,V,Z){const Q=G.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),G.get(T.texture).__webglTexture=V,G.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const Z=G.get(T);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const zd=g.createFramebuffer();this.setRenderTarget=function(T,V=0,Z=0){B=T,P=V,C=Z;let Q=!0,k=null,_e=!1,we=!1;if(T){const Pe=G.get(T);if(Pe.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(g.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)Y.setupRenderTarget(T);else if(Pe.__hasExternalTextures)Y.rebindTextures(T,G.get(T.texture).__webglTexture,G.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Pe.__boundDepthTexture!==Be){if(Be!==null&&G.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Ge=G.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?k=Ge[V][Z]:k=Ge[V],_e=!0):T.samples>0&&Y.useMultisampledRTT(T)===!1?k=G.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[Z]:k=Ge,L.copy(T.viewport),oe.copy(T.scissor),j=T.scissorTest}else L.copy(xe).multiplyScalar(q).floor(),oe.copy(Fe).multiplyScalar(q).floor(),j=He;if(Z!==0&&(k=zd),z.bindFramebuffer(g.FRAMEBUFFER,k)&&Q&&z.drawBuffers(T,k),z.viewport(L),z.scissor(oe),z.setScissorTest(j),_e){const Pe=G.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,Z)}else if(we){const Pe=G.get(T.texture),Ve=V;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Pe.__webglTexture,Z,Ve)}else if(T!==null&&Z!==0){const Pe=G.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Pe.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(T,V,Z,Q,k,_e,we,Ne=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){z.bindFramebuffer(g.FRAMEBUFFER,Pe);try{const Ve=T.textures[Ne],Ge=Ve.format,Be=Ve.type;if(!F.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Q&&Z>=0&&Z<=T.height-k&&(T.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Ne),g.readPixels(V,Z,Q,k,Se.convert(Ge),Se.convert(Be),_e))}finally{const Ve=B!==null?G.get(B).__webglFramebuffer:null;z.bindFramebuffer(g.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,V,Z,Q,k,_e,we,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(V>=0&&V<=T.width-Q&&Z>=0&&Z<=T.height-k){z.bindFramebuffer(g.FRAMEBUFFER,Pe);const Ve=T.textures[Ne],Ge=Ve.format,Be=Ve.type;if(!F.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,je),g.bufferData(g.PIXEL_PACK_BUFFER,_e.byteLength,g.STREAM_READ),T.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Ne),g.readPixels(V,Z,Q,k,Se.convert(Ge),Se.convert(Be),0);const rt=B!==null?G.get(B).__webglFramebuffer:null;z.bindFramebuffer(g.FRAMEBUFFER,rt);const _t=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await rv(g,_t,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,je),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,_e),g.deleteBuffer(je),g.deleteSync(_t),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,Z=0){const Q=Math.pow(2,-Z),k=Math.floor(T.image.width*Q),_e=Math.floor(T.image.height*Q),we=V!==null?V.x:0,Ne=V!==null?V.y:0;Y.setTexture2D(T,0),g.copyTexSubImage2D(g.TEXTURE_2D,Z,0,0,we,Ne,k,_e),z.unbindTexture()};const Hd=g.createFramebuffer(),Vd=g.createFramebuffer();this.copyTextureToTexture=function(T,V,Z=null,Q=null,k=0,_e=null){_e===null&&(k!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=k,k=0):_e=0);let we,Ne,Pe,Ve,Ge,Be,je,rt,_t;const ft=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(Z!==null)we=Z.max.x-Z.min.x,Ne=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,Ve=Z.min.x,Ge=Z.min.y,Be=Z.isBox3?Z.min.z:0;else{const jt=Math.pow(2,-k);we=Math.floor(ft.width*jt),Ne=Math.floor(ft.height*jt),T.isDataArrayTexture?Pe=ft.depth:T.isData3DTexture?Pe=Math.floor(ft.depth*jt):Pe=1,Ve=0,Ge=0,Be=0}Q!==null?(je=Q.x,rt=Q.y,_t=Q.z):(je=0,rt=0,_t=0);const ot=Se.convert(V.format),ze=Se.convert(V.type);let mt;V.isData3DTexture?(Y.setTexture3D(V,0),mt=g.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Y.setTexture2DArray(V,0),mt=g.TEXTURE_2D_ARRAY):(Y.setTexture2D(V,0),mt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,V.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,V.unpackAlignment);const Ze=g.getParameter(g.UNPACK_ROW_LENGTH),kt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Bi=g.getParameter(g.UNPACK_SKIP_PIXELS),Wt=g.getParameter(g.UNPACK_SKIP_ROWS),Pr=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ve),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ge),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Be);const ht=T.isDataArrayTexture||T.isData3DTexture,Kt=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const jt=G.get(T),Dt=G.get(V),zt=G.get(jt.__renderTarget),Vo=G.get(Dt.__renderTarget);z.bindFramebuffer(g.READ_FRAMEBUFFER,zt.__webglFramebuffer),z.bindFramebuffer(g.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let mi=0;mi<Pe;mi++)ht&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,G.get(T).__webglTexture,k,Be+mi),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,G.get(V).__webglTexture,_e,_t+mi)),g.blitFramebuffer(Ve,Ge,we,Ne,je,rt,we,Ne,g.DEPTH_BUFFER_BIT,g.NEAREST);z.bindFramebuffer(g.READ_FRAMEBUFFER,null),z.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||G.has(T)){const jt=G.get(T),Dt=G.get(V);z.bindFramebuffer(g.READ_FRAMEBUFFER,Hd),z.bindFramebuffer(g.DRAW_FRAMEBUFFER,Vd);for(let zt=0;zt<Pe;zt++)ht?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,jt.__webglTexture,k,Be+zt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,jt.__webglTexture,k),Kt?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Dt.__webglTexture,_e,_t+zt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Dt.__webglTexture,_e),k!==0?g.blitFramebuffer(Ve,Ge,we,Ne,je,rt,we,Ne,g.COLOR_BUFFER_BIT,g.NEAREST):Kt?g.copyTexSubImage3D(mt,_e,je,rt,_t+zt,Ve,Ge,we,Ne):g.copyTexSubImage2D(mt,_e,je,rt,Ve,Ge,we,Ne);z.bindFramebuffer(g.READ_FRAMEBUFFER,null),z.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Kt?T.isDataTexture||T.isData3DTexture?g.texSubImage3D(mt,_e,je,rt,_t,we,Ne,Pe,ot,ze,ft.data):V.isCompressedArrayTexture?g.compressedTexSubImage3D(mt,_e,je,rt,_t,we,Ne,Pe,ot,ft.data):g.texSubImage3D(mt,_e,je,rt,_t,we,Ne,Pe,ot,ze,ft):T.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,_e,je,rt,we,Ne,ot,ze,ft.data):T.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,_e,je,rt,ft.width,ft.height,ot,ft.data):g.texSubImage2D(g.TEXTURE_2D,_e,je,rt,we,Ne,ot,ze,ft);g.pixelStorei(g.UNPACK_ROW_LENGTH,Ze),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,kt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Bi),g.pixelStorei(g.UNPACK_SKIP_ROWS,Wt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Pr),_e===0&&V.generateMipmaps&&g.generateMipmap(mt),z.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Z=null,Q=null,k=0){return hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,Z,Q,k)},this.initRenderTarget=function(T){G.get(T).__webglFramebuffer===void 0&&Y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Y.setTextureCube(T,0):T.isData3DTexture?Y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Y.setTexture2DArray(T,0):Y.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){P=0,C=0,B=null,z.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class dE extends ws{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new S0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new pE(e)}}class pE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=mE(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function mE(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const f=gE(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function gE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new C0;let a,l,c,u,f,h,d,_;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*e+t,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+t,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+i,f=x[m++]*e+t,h=x[m++]*e+i,o.quadraticCurveTo(f,h,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+i,f=x[m++]*e+t,h=x[m++]*e+i,d=x[m++]*e+t,_=x[m++]*e+i,o.bezierCurveTo(f,h,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class Fa extends Mc{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const _E=ys({__name:"RotatingCard",setup(n){const e=si(null),t=si(null),i=si(400),r=si(300);function s(){const u=window.innerWidth,f=window.innerHeight;u<640?(i.value=Math.min(u-32,350),r.value=Math.min(f*.4,280)):u<1024?(i.value=Math.min(u*.8,500),r.value=Math.min(f*.5,400)):(i.value=Math.min(u*.6,600),r.value=Math.min(f*.6,500))}function o(){return new Lv}function a(u){const f=new hE({canvas:u,antialias:!0,alpha:!0});return f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(i.value,r.value),f.shadowMap.enabled=!0,f.shadowMap.type=jh,f.toneMapping=Zh,f.toneMappingExposure=1,f}function l(u){const f=new A0(16777215,.8);u.add(f);const h=new b0(16777215,1.2);h.position.set(10,15,10),h.castShadow=!0,h.shadow.mapSize.width=1024,h.shadow.mapSize.height=1024,h.shadow.camera.near=.5,h.shadow.camera.far=50,u.add(h)}function c(u){const f=new Tr(20,20),h=new p0({opacity:.3}),d=new Ft(f,h);d.rotation.x=-Math.PI/2,d.position.y=-2,d.receiveShadow=!0,u.add(d)}return tc(()=>{const u=e.value,f=t.value;if(!u||!f)return;s();const h=o(),d=new Qt(45,i.value/r.value,.1,1e3),_=window.innerWidth<640;d.position.set(0,0,_?8:7);const x=a(f);l(h),c(h);const m=new Gr,p=new y0;m.position.y=-.5,h.add(m);const A=_?.8:1,y=4*A,S=2.2*A,U=new Rr(y,S,.05),P=p.load("/plywood.jpg");P.wrapS=us,P.wrapT=us,P.repeat.set(1,1);const C=new zr({map:P,color:16777215,roughness:.2,metalness:.2}),B=new Ft(U,C);B.castShadow=!0,m.add(B);const b=1.6*A,E=new Tr(b,b),L=p.load("/logo.jpg"),oe=new zr({map:L,roughness:.5,metalness:.2}),j=new Ft(E,oe);j.position.set(y/4,0,.03),m.add(j),new dE().load("/fonts/helvetiker_regular.json",ee=>{const re=_?.2:.25,ae=new Fa("Jin",{font:ee,size:re,depth:.01});ae.center();const Oe=new zr({color:"#111111",roughness:.1,metalness:.4}),w=new Ft(ae,Oe);w.position.set(-y/4,0,.03),m.add(w);const R=_?.12:.15,g=new Fa("Email: aaa41012@gmail.com",{font:ee,size:R,depth:.01});g.center();const N=new zr({color:"#111111",roughness:.1,metalness:.4}),D=new Ft(g,N);D.position.set(0,.5,-.03),D.rotation.y=Math.PI,m.add(D);const F=new Fa("Website: threejscard.netlify.app",{font:ee,size:R,depth:.01});F.center();const z=new zr({color:"#333",roughness:.1,metalness:.4}),K=new Ft(F,z);K.position.set(0,-.5,-.03),K.rotation.y=Math.PI,m.add(K)});const le=new Te,J=new Te;let ne=!1,q=0;const de=ee=>{const re=u.getBoundingClientRect();let ae,Oe;if("touches"in ee?(ae=ee.touches[0].clientX-re.left,Oe=ee.touches[0].clientY-re.top):(ae=ee.clientX-re.left,Oe=ee.clientY-re.top),le.x=ae/re.width*2-1,le.y=-(Oe/re.height)*2+1,He=Date.now(),ie=!1,!ne){const w=_?.15:.25;J.x=le.y*w,J.y=le.x*(_?.3:.5)}},ve=new R0,xe=()=>{ve.setFromCamera(le,d),ve.intersectObjects(m.children).length>0&&(ne=!ne,q=ne?Math.PI:0,ie=!1,He=Date.now())};u.addEventListener("mousemove",de),u.addEventListener("touchmove",de),u.addEventListener("click",xe),u.addEventListener("touchend",xe);let Fe=0,He=Date.now(),ie=!0;const ge=()=>{requestAnimationFrame(ge),Date.now()-He>2e3&&!ne&&(ie=!0),ie&&(Fe+=_?.015:.02);const ae=Fe+J.y+q;m.rotation.x+=(J.x-m.rotation.x)*.1,m.rotation.y+=(ae-m.rotation.y)*.1,x.render(h,d)};ge();const ye=()=>{s(),d.aspect=i.value/r.value,d.updateProjectionMatrix(),x.setSize(i.value,r.value)},H=new ResizeObserver(ye);H.observe(u),window.addEventListener("resize",ye),Uo(()=>{u.removeEventListener("mousemove",de),u.removeEventListener("touchmove",de),u.removeEventListener("click",xe),u.removeEventListener("touchend",xe),window.removeEventListener("resize",ye),H.disconnect()})}),(u,f)=>(Ii(),ur("div",{class:"flex justify-center items-center relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]",ref_key:"container",ref:e},[at("canvas",{ref_key:"canvas",ref:t,class:"cursor-pointer block relative max-w-full max-h-full",style:xs({width:i.value+"px",height:r.value+"px"})},null,4)],512))}}),Ec=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},vE={class:"content-section px-4 py-12 bg-gray-50"},xE={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"},SE=["onClick"],ME={class:"flip-card-front absolute w-full h-full backface-hidden bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"},yE={class:"font-bold text-xl mb-2"},EE={class:"text-gray-600"},TE={class:"flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"},bE={class:"font-bold text-xl mb-2 text-white"},AE={class:"text-white/90"},wE={__name:"FlipCards",setup(n){const e=Ss({}),t=si([{front:{title:"Frontend Skill",content:"Vue / HTML5 / CSS3 / TypeScript"},back:{title:"前端技能詳情",content:"熟悉 Vue 3 Composition API、響應式設計、TypeScript 開發，具備豐富的前端框架使用經驗"}},{front:{title:"Library",content:"GSAP / Three.js / Parallax / Animation"},back:{title:"程式庫專長",content:"擅長使用 GSAP 創建流暢動畫、Three.js 3D 場景開發、視差滾動效果實現"}},{front:{title:"Responsive Web Design",content:"Tailwind / Media Queries"},back:{title:"響應式設計",content:"熟練運用 Scss / Sass 搭配Tailwind，熟悉各種螢幕尺寸的適配與各瀏覽器優化"}},{front:{title:"Performance Optimization",content:"requestAnimationFrame / Intersection Observer"},back:{title:"效能優化",content:"運用 Intersection Observer、懶加載、程式碼分割等現代技術，確保網站載入速度與使用者體驗"}}]),i=r=>{e[r]=!e[r]};return(r,s)=>(Ii(),ur("section",vE,[s[2]||(s[2]=at("h2",{class:"text-4xl font-bold text-center mb-12"},"Discover My Features",-1)),at("div",xE,[(Ii(!0),ur(gn,null,$p(t.value,(o,a)=>(Ii(),ur("div",{key:a,class:"reveal-card relative h-48 cursor-pointer",onClick:l=>i(a)},[at("div",{class:Po(["flip-card-inner w-full h-full transition-transform duration-700",{"rotate-y-180":e[a]}])},[at("div",ME,[at("h3",yE,Hr(o.front.title),1),at("p",EE,Hr(o.front.content),1),s[0]||(s[0]=at("div",{class:"absolute bottom-4 right-4 text-gray-400 text-sm"}," click ",-1))]),at("div",TE,[at("h3",bE,Hr(o.back.title),1),at("p",AE,Hr(o.back.content),1),s[1]||(s[1]=at("div",{class:"absolute bottom-4 right-4 text-white/70 text-sm"}," back ",-1))])],2)],8,SE))),128))])]))}},RE=Ec(wE,[["__scopeId","data-v-aa9e38c4"]]),CE={class:"parallax-section h-[110vh]"},PE={class:"logo-container"},LE={class:"flex items-center justify-center relative"},DE={class:"section -c"},IE={class:"section__text text-3xl font-bold"},UE=ys({__name:"HomeView",setup(n){const e=si(0),t=()=>{e.value=window.scrollY*.5},i=s=>{var o=s.getBoundingClientRect();let a=-(o.top/(s.clientHeight-window.innerHeight));return a<=0?a=0:a>=1&&(a=1),a},r=()=>{document.querySelectorAll(".section.-horizon").forEach(s=>{const o=s;window.addEventListener("scroll",()=>{o.children[0].scrollLeft=i(o)*window.innerWidth*4})})};return tc(()=>{window.addEventListener("scroll",r),window.addEventListener("scroll",t);const s=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&l.target.classList.add("in-view")})},{threshold:.1});document.querySelectorAll(".reveal-card").forEach(a=>s.observe(a))}),Uo(()=>{window.removeEventListener("scroll",t),window.removeEventListener("scroll",r)}),(s,o)=>(Ii(),ur("main",null,[at("section",CE,[o[2]||(o[2]=qc('<div class="parallax-shape shape-1 w-[250px] h-[250px] top-[10%] left-[15%]" data-v-e5245eeb></div><div class="parallax-shape shape-2 w-[100px] h-[100px] top-[60%] right-[20%]" data-v-e5245eeb></div><div class="parallax-shape shape-3 w-[50px] h-[50px] top-[30%] right-[10%]" data-v-e5245eeb></div><div class="parallax-shape shape-4 w-[500px] h-[500px] top-[80%] right-[80%]" data-v-e5245eeb></div><div class="flex text-4xl text-white relative top-[-5%] drop-shadow-lg text-center" data-v-e5245eeb>Creative Frontend Developer</div>',5)),at("div",PE,[at("div",LE,[o[1]||(o[1]=at("p",{class:"absolute text-white"},"Jin",-1)),(Ii(),ur("svg",{viewBox:"0 0 200 200",width:"200",height:"200",style:xs({transform:`rotate(${e.value}deg)`})},o[0]||(o[0]=[at("defs",null,[at("path",{id:"circlePath",d:"M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"})],-1),at("text",{"font-size":"18","font-family":"sans-serif",fill:"white"},[at("textPath",{href:"#circlePath",startOffset:"0%"}," ✦ JIN LIN •✦• DESIGN •✦• CODE •• 3D •✦• WEB ✦ ")],-1)]),4))])]),o[3]||(o[3]=at("h1",{class:"text-3xl font-bold text-white drop-shadow-lg shape-4"},"👇",-1))]),Ot(RE),o[7]||(o[7]=qc('<section class="section -a" data-v-e5245eeb><div class="section__text drop-shadow-lg" data-v-e5245eeb>Portfolio</div></section><section class="section -b -horizon" data-v-e5245eeb><div class="section__horizon" data-v-e5245eeb><div class="section__horizon-block" data-v-e5245eeb><span data-v-e5245eeb>Vue3 👉</span></div><div class="section__horizon-block" data-v-e5245eeb><span data-v-e5245eeb>React 👉</span></div><div class="section__horizon-block" data-v-e5245eeb><span data-v-e5245eeb>D3.js 👉</span></div><div class="section__horizon-block" data-v-e5245eeb><span data-v-e5245eeb>HORIZONTAL 👇</span></div><div class="section__horizon-block" data-v-e5245eeb><div data-v-e5245eeb>🏄 OH YA BABY 🏄</div></div></div></section>',2)),at("section",DE,[at("div",IE,[o[4]||(o[4]=Lh(" Contact me")),o[5]||(o[5]=at("br",null,null,-1)),o[6]||(o[6]=at("a",{href:"mailto:aaa41012@gmail.com"},"Made by Jin Design",-1)),Ot(_E)])])]))}}),NE=Ec(UE,[["__scopeId","data-v-e5245eeb"]]),FE=m_({history:Wg("/"),routes:[{path:"/",name:"home",component:NE},{path:"/about",name:"about",component:()=>dg(()=>import("./AboutView-HSS5LPtR.js"),[])}]}),OE=ys({__name:"App",setup(n){return(e,t)=>{const i=Xp("RouterView");return Ii(),Tm(i)}}}),BE=Ec(OE,[["__scopeId","data-v-8e852887"]]),Tc=og(BE);Tc.use(ug());Tc.use(FE);Tc.mount("#app");export{Ec as _};
