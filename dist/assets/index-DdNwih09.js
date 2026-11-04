(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="170",kc=0,Ra=1,Vc=2,Wl=1,Xl=2,xi=3,Bi=0,Be=1,ae=2,yi=0,Ln=1,be=2,Pa=3,La=4,Hc=5,Qi=100,Gc=101,Wc=102,Xc=103,qc=104,Yc=200,$c=201,jc=202,Zc=203,no=204,so=205,Kc=206,Jc=207,Qc=208,th=209,eh=210,ih=211,nh=212,sh=213,rh=214,ro=0,oo=1,ao=2,On=3,lo=4,co=5,ho=6,uo=7,ql=0,oh=1,ah=2,Oi=0,Yl=1,$l=2,jl=3,jo=4,lh=5,Zl=6,Kl=7,Jl=300,Fn=301,zn=302,fo=303,po=304,hr=306,ir=1e3,en=1001,mo=1002,Xe=1003,ch=1004,vs=1005,li=1006,gr=1007,nn=1008,bi=1009,Ql=1010,tc=1011,ds=1012,Zo=1013,rn=1014,ci=1015,Si=1016,Ko=1017,Jo=1018,Bn=1020,ec=35902,ic=1021,nc=1022,ni=1023,sc=1024,rc=1025,Dn=1026,kn=1027,Qo=1028,ta=1029,oc=1030,ea=1031,ia=1033,Zs=33776,Ks=33777,Js=33778,Qs=33779,go=35840,_o=35841,vo=35842,xo=35843,Mo=36196,yo=37492,So=37496,wo=37808,bo=37809,To=37810,Eo=37811,Ao=37812,Co=37813,Ro=37814,Po=37815,Lo=37816,Do=37817,Io=37818,Uo=37819,No=37820,Oo=37821,tr=36492,Fo=36494,zo=36495,ac=36283,Bo=36284,ko=36285,Vo=36286,hh=3200,uh=3201,lc=0,dh=1,Ni="",ze="srgb",Gn="srgb-linear",ur="linear",ie="srgb",cn=7680,Da=519,fh=512,ph=513,mh=514,cc=515,gh=516,_h=517,vh=518,xh=519,Ho=35044,Ia="300 es",Mi=2e3,nr=2001;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,Go=180/Math.PI;function Fi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Mh(s,t){return(s%t+t)%t}function vr(s,t,e){return(1-e)*s+e*t}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,n,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=n[0],g=n[3],p=n[6],x=n[1],S=n[4],v=n[7],R=n[2],T=n[5],A=n[8];return r[0]=o*_+a*x+l*R,r[3]=o*g+a*S+l*T,r[6]=o*p+a*v+l*A,r[1]=c*_+h*x+u*R,r[4]=c*g+h*S+u*T,r[7]=c*p+h*v+u*A,r[2]=d*_+f*x+m*R,r[5]=d*g+f*S+m*T,r[8]=d*p+f*v+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=d*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new zt;function hc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yh(){const s=sr("canvas");return s.style.display="block",s}const Ua={};function as(s){s in Ua||(Ua[s]=!0,console.warn(s))}function Sh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function wh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?ur:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function In(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Na=[.64,.33,.3,.6,.15,.06],Oa=[.2126,.7152,.0722],Fa=[.3127,.329],za=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Gn]:{primaries:Na,whitePoint:Fa,transfer:ur,toXYZ:za,fromXYZ:Ba,luminanceCoefficients:Oa,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Na,whitePoint:Fa,transfer:ie,toXYZ:za,fromXYZ:Ba,luminanceCoefficients:Oa,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let hn;class Th{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hn===void 0&&(hn=sr("canvas")),hn.width=t.width,hn.height=t.height;const i=hn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(wi(e[i]/255)*255):e[i]=wi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Eh=0;class uc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Mr(n[o].image)):r.push(Mr(n[o]))}else r=Mr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Th.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;class Ne extends Wn{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=en,n=en,r=li,o=nn,a=ni,l=bi,c=Ne.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Fi(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Jl;Ne.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,n=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+_)/4,P=(m+g)/4;return S>v&&S>R?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=T/i,r=A/i):v>R?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=T/n,r=P/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=A/r,n=P/r),this.set(i,n,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ch extends Wn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ne(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Ch{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class dc extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rh extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*_,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),T=Math.atan2(R,p*x);g=Math.sin(g*T)/R,a=Math.sin(a*T)/R}const v=a*x;if(l=l*g+d*v,c=c*g+f*v,h=h*g+m*v,u=u*g+_*v,g===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new E,ka=new ms;class on{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jn),Ms.subVectors(this.max,jn),un.subVectors(t.a,jn),dn.subVectors(t.b,jn),fn.subVectors(t.c,jn),Ai.subVectors(dn,un),Ci.subVectors(fn,dn),Gi.subVectors(un,fn);let e=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Gi.z,Gi.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Gi.z,0,-Gi.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Gi.y,Gi.x,0];return!Sr(e,un,dn,fn,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Sr(e,un,dn,fn,Ms))?!1:(ys.crossVectors(Ai,Ci),e=[ys.x,ys.y,ys.z],Sr(e,un,dn,fn,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new E,new E,new E,new E,new E,new E,new E,new E],ti=new E,xs=new on,un=new E,dn=new E,fn=new E,Ai=new E,Ci=new E,Gi=new E,jn=new E,Ms=new E,ys=new E,Wi=new E;function Sr(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Wi.fromArray(s,r);const a=n.x*Math.abs(Wi.x)+n.y*Math.abs(Wi.y)+n.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ph=new on,Zn=new E,wr=new E;class an{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ph.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zn.subVectors(t,this.center);const e=Zn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Zn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zn.copy(t.center).add(wr)),this.expandByPoint(Zn.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new E,br=new E,Ss=new E,Ri=new E,Tr=new E,ws=new E,Er=new E;class dr{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){br.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),a=Ri.dot(this.direction),l=-Ri.dot(Ss),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(br).addScaledVector(Ss,d),f}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),n=mi.dot(mi)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,n,r){Tr.subVectors(e,t),ws.subVectors(i,t),Er.crossVectors(Tr,ws);let o=this.direction.dot(Er),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(ws.crossVectors(Ri,ws));if(l<0)return null;const c=a*this.direction.dot(Tr.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(Er);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,i,n,r,o,a,l,c,h,u,d,f,m,_,g){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,d,f,m,_,g)}set(t,e,i,n,r,o,a,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/pn.setFromMatrixColumn(t,0).length(),r=1/pn.setFromMatrixColumn(t,1).length(),o=1/pn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lh,t,Dh)}lookAt(t,e,i){const n=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Pi.crossVectors(i,Ge),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Pi.crossVectors(i,Ge)),Pi.normalize(),bs.crossVectors(Ge,Pi),n[0]=Pi.x,n[4]=bs.x,n[8]=Ge.x,n[1]=Pi.y,n[5]=bs.y,n[9]=Ge.y,n[2]=Pi.z,n[6]=bs.z,n[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],x=i[3],S=i[7],v=i[11],R=i[15],T=n[0],A=n[4],P=n[8],w=n[12],M=n[1],L=n[5],O=n[9],F=n[13],Y=n[2],W=n[6],H=n[10],$=n[14],G=n[3],tt=n[7],lt=n[11],xt=n[15];return r[0]=o*T+a*M+l*Y+c*G,r[4]=o*A+a*L+l*W+c*tt,r[8]=o*P+a*O+l*H+c*lt,r[12]=o*w+a*F+l*$+c*xt,r[1]=h*T+u*M+d*Y+f*G,r[5]=h*A+u*L+d*W+f*tt,r[9]=h*P+u*O+d*H+f*lt,r[13]=h*w+u*F+d*$+f*xt,r[2]=m*T+_*M+g*Y+p*G,r[6]=m*A+_*L+g*W+p*tt,r[10]=m*P+_*O+g*H+p*lt,r[14]=m*w+_*F+g*$+p*xt,r[3]=x*T+S*M+v*Y+R*G,r[7]=x*A+S*L+v*W+R*tt,r[11]=x*P+S*O+v*H+R*lt,r[15]=x*w+S*F+v*$+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,S=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,v=h*_*c-m*u*c+m*a*f-o*_*f-h*a*p+o*u*p,R=m*u*l-h*_*l-m*a*d+o*_*d+h*a*g-o*u*g,T=e*x+i*S+n*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=x*A,t[1]=(_*d*r-u*g*r-_*n*f+i*g*f+u*n*p-i*d*p)*A,t[2]=(a*g*r-_*l*r+_*n*c-i*g*c-a*n*p+i*l*p)*A,t[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*A,t[4]=S*A,t[5]=(h*g*r-m*d*r+m*n*f-e*g*f-h*n*p+e*d*p)*A,t[6]=(m*l*r-o*g*r-m*n*c+e*g*c+o*n*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*f+e*l*f)*A,t[8]=v*A,t[9]=(m*u*r-h*_*r-m*i*f+e*_*f+h*i*p-e*u*p)*A,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*A,t[12]=R*A,t[13]=(h*_*n-m*u*n+m*i*d-e*_*d-h*i*g+e*u*g)*A,t[14]=(m*a*n-o*_*n-m*i*l+e*_*l+o*i*g-e*a*g)*A,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,x=l*c,S=l*h,v=l*u,R=i.x,T=i.y,A=i.z;return n[0]=(1-(_+p))*R,n[1]=(f+v)*R,n[2]=(m-S)*R,n[3]=0,n[4]=(f-v)*T,n[5]=(1-(d+p))*T,n[6]=(g+x)*T,n[7]=0,n[8]=(m+S)*A,n[9]=(g-x)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=pn.set(n[0],n[1],n[2]).length();const o=pn.set(n[4],n[5],n[6]).length(),a=pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],ei.copy(this);const c=1/r,h=1/o,u=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Mi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let f,m;if(a===Mi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===nr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Mi){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*c,f=(i+n)*h;let m,_;if(a===Mi)m=(o+r)*u,_=-2*u;else if(a===nr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const pn=new E,ei=new te,Lh=new E(0,0,0),Dh=new E(1,1,1),Pi=new E,bs=new E,Ge=new E,Va=new te,Ha=new ms;class hi{constructor(t=0,e=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Va,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class na{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const Ga=new E,mn=new ms,gi=new te,Ts=new E,Kn=new E,Uh=new E,Nh=new ms,Wa=new E(1,0,0),Xa=new E(0,1,0),qa=new E(0,0,1),Ya={type:"added"},Oh={type:"removed"},gn={type:"childadded",child:null},Ar={type:"childremoved",child:null};class _e extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new E,e=new hi,i=new ms,n=new E(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new te},normalMatrix:{value:new zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mn.setFromAxisAngle(t,e),this.quaternion.multiply(mn),this}rotateOnWorldAxis(t,e){return mn.setFromAxisAngle(t,e),this.quaternion.premultiply(mn),this}rotateX(t){return this.rotateOnAxis(Wa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(qa,t)}translateOnAxis(t,e){return Ga.copy(t).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ts.copy(t):Ts.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Kn,Ts,this.up):gi.lookAt(Ts,Kn,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),mn.setFromRotationMatrix(gi),this.quaternion.premultiply(mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ya),gn.child=t,this.dispatchEvent(gn),gn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oh),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ya),gn.child=t,this.dispatchEvent(gn),gn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}_e.DEFAULT_UP=new E(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new E,_i=new E,Cr=new E,vi=new E,_n=new E,vn=new E,$a=new E,Rr=new E,Pr=new E,Lr=new E,Dr=new Me,Ir=new Me,Ur=new Me;class Ke{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ii.subVectors(t,e),n.cross(ii);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ii.subVectors(n,e),_i.subVectors(i,e),Cr.subVectors(t,e);const o=ii.dot(ii),a=ii.dot(_i),l=ii.dot(Cr),c=_i.dot(_i),h=_i.dot(Cr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Dr.setScalar(0),Ir.setScalar(0),Ur.setScalar(0),Dr.fromBufferAttribute(t,e),Ir.fromBufferAttribute(t,i),Ur.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Dr,r.x),o.addScaledVector(Ir,r.y),o.addScaledVector(Ur,r.z),o}static isFrontFacing(t,e,i,n){return ii.subVectors(i,e),_i.subVectors(t,e),ii.cross(_i).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),ii.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;_n.subVectors(n,i),vn.subVectors(r,i),Rr.subVectors(t,i);const l=_n.dot(Rr),c=vn.dot(Rr);if(l<=0&&c<=0)return e.copy(i);Pr.subVectors(t,n);const h=_n.dot(Pr),u=vn.dot(Pr);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(_n,o);Lr.subVectors(t,r);const f=_n.dot(Lr),m=vn.dot(Lr);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(vn,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return $a.subVectors(r,n),a=(u-h)/(u-h+(f-m)),e.copy(n).addScaledVector($a,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(_n,o).addScaledVector(vn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class at{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=Mh(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Nr(o,r,t+1/3),this.g=Nr(o,r,t),this.b=Nr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,n),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=fc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Yt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ie.copy(this),e);const i=Ie.r,n=Ie.g,r=Ie.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ze){Yt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,n=Ie.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Es);const i=vr(Li.h,Es.h,e),n=vr(Li.s,Es.s,e),r=vr(Li.l,Es.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new at;at.NAMES=fc;let Fh=0;class Vi extends Wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Fi(),this.name="",this.blending=Ln,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=so,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=On,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cn,this.stencilZFail=cn,this.stencilZPass=cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ln&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==so&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==On&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pt extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new E,As=new st;class ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ho,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ho&&(t.usage=this.usage),t}}class pc extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mc extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Vt extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zh=0;const $e=new te,Or=new _e,xn=new E,We=new on,Jn=new on,Ae=new E;class ve extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?mc:pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,i){return $e.makeTranslation(t,e,i),this.applyMatrix4($e),this}scale(t,e,i){return $e.makeScale(t,e,i),this.applyMatrix4($e),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xn).negate(),this.translate(xn.x,xn.y,xn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(We.min,Jn.min),We.expandByPoint(Ae),Ae.addVectors(We.max,Jn.max),We.expandByPoint(Ae)):(We.expandByPoint(Jn.min),We.expandByPoint(Jn.max))}We.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(xn.fromBufferAttribute(t,c),Ae.add(xn)),n=Math.max(n,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new E,l[P]=new E;const c=new E,h=new E,u=new E,d=new st,f=new st,m=new st,_=new E,g=new E;function p(P,w,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(_),a[w].add(_),a[M].add(_),l[P].add(g),l[w].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,w=x.length;P<w;++P){const M=x[P],L=M.start,O=M.count;for(let F=L,Y=L+O;F<Y;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new E,v=new E,R=new E,T=new E;function A(P){R.fromBufferAttribute(n,P),T.copy(R);const w=a[P];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),v.crossVectors(T,w);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,w=x.length;P<w;++P){const M=x[P],L=M.start,O=M.count;for(let F=L,Y=L+O;F<Y;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new te,Xi=new dr,Cs=new an,Za=new E,Rs=new E,Ps=new E,Ls=new E,Fr=new E,Ds=new E,Ka=new E,Is=new E;class B extends _e{constructor(t=new ve,e=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Fr.fromBufferAttribute(u,t),o?Ds.addScaledVector(Fr,h):Ds.addScaledVector(Fr.sub(e),h))}e.add(Ds)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Cs.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Cs,Za)===null||Xi.origin.distanceToSquared(Za)>(t.far-t.near)**2))&&(ja.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,R=S;v<R;v+=3){const T=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);n=Us(this,p,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);n=Us(this,o,t,i,c,h,u,x,S,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,R=S;v<R;v+=3){const T=v,A=v+1,P=v+2;n=Us(this,p,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,S=g+1,v=g+2;n=Us(this,o,t,i,c,h,u,x,S,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function Bh(s,t,e,i,n,r,o,a){let l;if(t.side===Be?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Bi,a),l===null)return null;Is.copy(a),Is.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:s}}function Us(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Rs),s.getVertexPosition(l,Ps),s.getVertexPosition(c,Ls);const h=Bh(s,t,e,i,Rs,Ps,Ls,Ka);if(h){const u=new E;Ke.getBarycoord(Ka,Rs,Ps,Ls,u),n&&(h.uv=Ke.getInterpolatedAttribute(n,a,l,c,u,new st)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,a,l,c,u,new st)),o&&(h.normal=Ke.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};Ke.getNormal(Rs,Ps,Ls,d.normal),h.face=d,h.barycoord=u}return h}class ot extends ve{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function m(_,g,p,x,S,v,R,T,A,P,w){const M=v/A,L=R/P,O=v/2,F=R/2,Y=T/2,W=A+1,H=P+1;let $=0,G=0;const tt=new E;for(let lt=0;lt<H;lt++){const xt=lt*L-F;for(let Ht=0;Ht<W;Ht++){const oe=Ht*M-O;tt[_]=oe*x,tt[g]=xt*S,tt[p]=Y,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[g]=0,tt[p]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Ht/A),u.push(1-lt/P),$+=1}}for(let lt=0;lt<P;lt++)for(let xt=0;xt<A;xt++){const Ht=d+xt+W*lt,oe=d+xt+W*(lt+1),Z=d+(xt+1)+W*(lt+1),nt=d+(xt+1)+W*lt;l.push(Ht,oe,nt),l.push(oe,Z,nt),G+=6}a.addGroup(f,G,w),f+=G,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const i=Vn(s[e]);for(const n in i)t[n]=i[n]}return t}function kh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const fs={clone:Vn,merge:Fe};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vn(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _c extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new E,Ja=new st,Qa=new st;class Ze extends _c{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Ja,Qa),e.subVectors(Qa,Ja)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mn=-90,yn=1;class Gh extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ze(Mn,yn,t,e);n.layers=this.layers,this.add(n);const r=new Ze(Mn,yn,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Mn,yn,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Mn,yn,t,e);a.layers=this.layers,this.add(a);const l=new Ze(Mn,yn,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Mn,yn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class vc extends Ne{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fn,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wh extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new vc(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ot(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:Vn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:yi});r.uniforms.tEquirect.value=e;const o=new B(n,r),a=e.minFilter;return e.minFilter===nn&&(e.minFilter=li),new Gh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const zr=new E,Xh=new E,qh=new zt;class Ki{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=zr.subVectors(i,e).cross(Xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(zr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qh.getNormalMatrix(t),n=this.coplanarPoint(zr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new an,Ns=new E;class sa{constructor(t=new Ki,e=new Ki,i=new Ki,n=new Ki,r=new Ki,o=new Ki){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],m=n[9],_=n[10],g=n[11],p=n[12],x=n[13],S=n[14],v=n[15];if(i[0].setComponents(l-r,d-c,g-f,v-p).normalize(),i[1].setComponents(l+r,d+c,g+f,v+p).normalize(),i[2].setComponents(l+o,d+h,g+m,v+x).normalize(),i[3].setComponents(l-o,d-h,g-m,v-x).normalize(),i[4].setComponents(l-a,d-u,g-_,v-S).normalize(),e===Mi)i[5].setComponents(l+a,d+u,g+_,v+S).normalize();else if(e===nr)i[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ns.x=n.normal.x>0?t.max.x:t.min.x,Ns.y=n.normal.y>0?t.max.y:t.min.y,Ns.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yh(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}class he extends ve{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*d-o;for(let S=0;S<c;S++){const v=S*u-r;m.push(v,-x,0),_.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const S=x+c*p,v=x+c*(p+1),R=x+1+c*(p+1),T=x+1+c*p;f.push(S,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.widthSegments,t.heightSegments)}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
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
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
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
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,au=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
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
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
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
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
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
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,qu=`struct PhysicalMaterial {
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
}`,Yu=`
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nd=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dd=`float getShadowMask() {
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
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
}`,ef=`#define DISTANCE
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
}`,nf=`#define DISTANCE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
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
}`,af=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define LAMBERT
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
}`,df=`#define MATCAP
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
}`,ff=`#define MATCAP
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
}`,pf=`#define NORMAL
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
}`,mf=`#define NORMAL
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
}`,gf=`#define PHONG
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
}`,_f=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,xf=`#define STANDARD
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
}`,Mf=`#define TOON
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
}`,yf=`#define TOON
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
}`,Sf=`uniform float size;
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
}`,wf=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,Tf=`uniform vec3 color;
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
}`,Ef=`uniform float rotation;
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
}`,Af=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:$h,alphahash_pars_fragment:jh,alphamap_fragment:Zh,alphamap_pars_fragment:Kh,alphatest_fragment:Jh,alphatest_pars_fragment:Qh,aomap_fragment:tu,aomap_pars_fragment:eu,batching_pars_vertex:iu,batching_vertex:nu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:ou,iridescence_fragment:au,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:_u,cube_uv_reflection_fragment:vu,defaultnormal_vertex:xu,displacementmap_pars_vertex:Mu,displacementmap_vertex:yu,emissivemap_fragment:Su,emissivemap_pars_fragment:wu,colorspace_fragment:bu,colorspace_pars_fragment:Tu,envmap_fragment:Eu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Cu,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:ku,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Du,fog_fragment:Iu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Nu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:zu,lights_pars_begin:Bu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Hu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:qu,lights_fragment_begin:Yu,lights_fragment_maps:$u,lights_fragment_end:ju,logdepthbuf_fragment:Zu,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:id,map_particle_pars_fragment:nd,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:od,morphcolor_vertex:ad,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:Md,opaque_fragment:yd,packing:Sd,premultiplied_alpha_fragment:wd,project_vertex:bd,dithering_fragment:Td,dithering_pars_fragment:Ed,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:Id,skinning_pars_vertex:Ud,skinning_vertex:Nd,skinnormal_vertex:Od,specularmap_fragment:Fd,specularmap_pars_fragment:zd,tonemapping_fragment:Bd,tonemapping_pars_fragment:kd,transmission_fragment:Vd,transmission_pars_fragment:Hd,uv_pars_fragment:Gd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:Yd,background_frag:$d,backgroundCube_vert:jd,backgroundCube_frag:Zd,cube_vert:Kd,cube_frag:Jd,depth_vert:Qd,depth_frag:tf,distanceRGBA_vert:ef,distanceRGBA_frag:nf,equirect_vert:sf,equirect_frag:rf,linedashed_vert:of,linedashed_frag:af,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:_f,meshphysical_vert:vf,meshphysical_frag:xf,meshtoon_vert:Mf,meshtoon_frag:yf,points_vert:Sf,points_frag:wf,shadow_vert:bf,shadow_frag:Tf,sprite_vert:Ef,sprite_frag:Af},rt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},oi={basic:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new at(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new at(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([rt.points,rt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([rt.common,rt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([rt.sprite,rt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Fe([rt.common,rt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Fe([rt.lights,rt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};oi.physical={uniforms:Fe([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Os={r:0,b:0,g:0},Yi=new hi,Cf=new te;function Rf(s,t,e,i,n,r,o){const a=new at(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?e:t).get(S)),S}function _(x){let S=!1;const v=m(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,S){const v=m(S);v&&(v.isCubeTexture||v.mapping===hr)?(h===void 0&&(h=new B(new ot(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Vn(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Yi.copy(S.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(Yi)),h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ie,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new B(new he(2,2),new Pe({name:"BackgroundMaterial",uniforms:Vn(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,S){x.getRGB(Os,gc(s)),i.buffers.color.setClear(Os.r,Os.g,Os.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g}}function Pf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(M,L,O,F,Y){let W=!1;const H=u(F,O,L);r!==H&&(r=H,c(r.object)),W=f(M,F,O,Y),W&&m(M,F,O,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(M,L,O,F),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,O){const F=O.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let W=Y[L.id];W===void 0&&(W={},Y[L.id]=W);let H=W[F];return H===void 0&&(H=d(l()),W[F]=H),H}function d(M){const L=[],O=[],F=[];for(let Y=0;Y<e;Y++)L[Y]=0,O[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,L,O,F){const Y=r.attributes,W=L.attributes;let H=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){const lt=Y[G];let xt=W[G];if(xt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),lt===void 0||lt.attribute!==xt||xt&&lt.data!==xt.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function m(M,L,O,F){const Y={},W=L.attributes;let H=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){let lt=W[G];lt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const xt={};xt.attribute=lt,lt&&lt.data&&(xt.data=lt.data),Y[G]=xt,H++}r.attributes=Y,r.attributesNum=H,r.index=F}function _(){const M=r.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const O=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;O[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),Y[M]!==L&&(s.vertexAttribDivisor(M,L),Y[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let O=0,F=L.length;O<F;O++)L[O]!==M[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function S(M,L,O,F,Y,W,H){H===!0?s.vertexAttribIPointer(M,L,O,Y,W):s.vertexAttribPointer(M,L,O,F,Y,W)}function v(M,L,O,F){_();const Y=F.attributes,W=O.getAttributes(),H=L.defaultAttributeValues;for(const $ in W){const G=W[$];if(G.location>=0){let tt=Y[$];if(tt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const lt=tt.normalized,xt=tt.itemSize,Ht=t.get(tt);if(Ht===void 0)continue;const oe=Ht.buffer,Z=Ht.type,nt=Ht.bytesPerElement,wt=Z===s.INT||Z===s.UNSIGNED_INT||tt.gpuType===Zo;if(tt.isInterleavedBufferAttribute){const ht=tt.data,Rt=ht.stride,Nt=tt.offset;if(ht.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)p(G.location+Gt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)g(G.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let Gt=0;Gt<G.locationSize;Gt++)S(G.location+Gt,xt/G.locationSize,Z,lt,Rt*nt,(Nt+xt/G.locationSize*Gt)*nt,wt)}else{if(tt.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht,tt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ht=0;ht<G.locationSize;ht++)g(G.location+ht);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let ht=0;ht<G.locationSize;ht++)S(G.location+ht,xt/G.locationSize,Z,lt,xt*nt,xt/G.locationSize*ht*nt,wt)}}else if(H!==void 0){const lt=H[$];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(G.location,lt);break;case 3:s.vertexAttrib3fv(G.location,lt);break;case 4:s.vertexAttrib4fv(G.location,lt);break;default:s.vertexAttrib1fv(G.location,lt)}}}}x()}function R(){P();for(const M in i){const L=i[M];for(const O in L){const F=L[O];for(const Y in F)h(F[Y].object),delete F[Y];delete L[O]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const O in L){const F=L[O];for(const Y in F)h(F[Y].object),delete F[Y];delete L[O]}delete i[M.id]}function A(M){for(const L in i){const O=i[L];if(O[M.id]===void 0)continue;const F=O[M.id];for(const Y in F)h(F[Y].object),delete F[Y];delete O[M.id]}}function P(){w(),o=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Lf(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Df(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){return!(A!==ni&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function If(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new Ki,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!n||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:i,S=x*4;let v=p.clippingState||null;l.value=v,v=h(m,d,S,f);for(let R=0;R!==S;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Uf(s){let t=new WeakMap;function e(o,a){return a===fo?o.mapping=Fn:a===po&&(o.mapping=zn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fo||a===po)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ra extends _c{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rn=4,tl=[.125,.215,.35,.446,.526,.582],tn=20,Br=new ra,el=new at;let kr=null,Vr=0,Hr=0,Gr=!1;const Ji=(1+Math.sqrt(5))/2,Sn=1/Ji,il=[new E(-Ji,Sn,0),new E(Ji,Sn,0),new E(-Sn,0,Ji),new E(Sn,0,Ji),new E(0,Ji,-Sn),new E(0,Ji,Sn),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){kr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Vr,Hr),this._renderer.xr.enabled=Gr,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fn||t.mapping===zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Si,format:ni,colorSpace:Gn,depthBuffer:!1},n=sl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(r)),this._blurMaterial=Of(r,t,e)}return n}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,i,n){const a=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(el),h.toneMapping=Oi,h.autoClear=!1;const f=new Pt({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new B(new ot,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(el),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Fs(n,x*S,p>2?S:0,S,S),h.setRenderTarget(n),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Fn||t.mapping===zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Fs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Br)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=il[(n-r-1)%il.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new B(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*tn-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):tn;g>tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${tn}`);const p=[];let x=0;for(let A=0;A<tn;++A){const P=A/_,w=Math.exp(-P*P/2);p.push(w),A===0?x+=w:A<g&&(x+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-i;const v=this._sizeLods[n],R=3*v*(n>S-Rn?n-S+Rn:0),T=4*(this._cubeSize-v);Fs(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Br)}}function Nf(s){const t=[],e=[],i=[];let n=s;const r=s-Rn+1+tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Rn?l=tl[o-s+Rn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),S=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(w,_*m*T),S.set(d,g*m*T);const M=[T,T,T,T,T,T];v.set(M,p*m*T)}const R=new ve;R.setAttribute("position",new ke(x,_)),R.setAttribute("uv",new ke(S,g)),R.setAttribute("faceIndex",new ke(v,p)),t.push(R),n>Rn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sl(s,t,e){const i=new si(s,t,e);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Of(s,t,e){const i=new Float32Array(tn),n=new E(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:oa(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function rl(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ol(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}function Ff(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fo||l===po,h=l===Fn||l===zn;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new nl(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new nl(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Bf(s,t,e,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete n[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let S=0,v=x.length;S<v;S+=3){const R=x[S+0],T=x[S+1],A=x[S+2];d.push(R,T,T,A,A,R)}}else if(m!==void 0){const x=m.array;_=m.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const R=S+0,T=S+1,A=S+2;d.push(R,T,T,A,A,R)}}else return;const g=new(hc(d)?mc:pc)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kf(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(i,f,r,d*o,m),e.update(f,i,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Hf(s,t,e){const i=new WeakMap,n=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let R=a.attributes.position.count*v,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*u),P=new dc(A,R,T,u);P.type=ci,P.needsUpdate=!0;const w=v*4;for(let L=0;L<u;L++){const O=p[L],F=x[L],Y=S[L],W=R*T*4*L;for(let H=0;H<O.count;H++){const $=H*w;m===!0&&(n.fromBufferAttribute(O,H),A[W+$+0]=n.x,A[W+$+1]=n.y,A[W+$+2]=n.z,A[W+$+3]=0),_===!0&&(n.fromBufferAttribute(F,H),A[W+$+4]=n.x,A[W+$+5]=n.y,A[W+$+6]=n.z,A[W+$+7]=0),g===!0&&(n.fromBufferAttribute(Y,H),A[W+$+8]=n.x,A[W+$+9]=n.y,A[W+$+10]=n.z,A[W+$+11]=Y.itemSize===4?n.w:1)}}d={count:u,texture:P,size:new st(R,T)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gf(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Mc extends Ne{constructor(t,e,i,n,r,o,a,l,c,h=Dn){if(h!==Dn&&h!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dn&&(i=rn),i===void 0&&h===kn&&(i=Bn),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yc=new Ne,al=new Mc(1,1),Sc=new dc,wc=new Rh,bc=new vc,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Xn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=ll[n];if(r===void 0&&(r=new Float32Array(n),ll[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function fr(s,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function $f(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,i))return;dl.set(i),s.uniformMatrix2fv(this.addr,!1,dl),Ee(e,i)}}function jf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,i))return;ul.set(i),s.uniformMatrix3fv(this.addr,!1,ul),Ee(e,i)}}function Zf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,i))return;hl.set(i),s.uniformMatrix4fv(this.addr,!1,hl),Ee(e,i)}}function Kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function rp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(al.compareFunction=cc,r=al):r=yc,e.setTexture2D(t||r,n)}function op(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||wc,n)}function ap(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||bc,n)}function lp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Sc,n)}function cp(s){switch(s){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return $f;case 35675:return jf;case 35676:return Zf;case 5124:case 35670:return Kf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return ip;case 36295:return np;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return lp}}function hp(s,t){s.uniform1fv(this.addr,t)}function up(s,t){const e=Xn(t,this.size,2);s.uniform2fv(this.addr,e)}function dp(s,t){const e=Xn(t,this.size,3);s.uniform3fv(this.addr,e)}function fp(s,t){const e=Xn(t,this.size,4);s.uniform4fv(this.addr,e)}function pp(s,t){const e=Xn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mp(s,t){const e=Xn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gp(s,t){const e=Xn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _p(s,t){s.uniform1iv(this.addr,t)}function vp(s,t){s.uniform2iv(this.addr,t)}function xp(s,t){s.uniform3iv(this.addr,t)}function Mp(s,t){s.uniform4iv(this.addr,t)}function yp(s,t){s.uniform1uiv(this.addr,t)}function Sp(s,t){s.uniform2uiv(this.addr,t)}function wp(s,t){s.uniform3uiv(this.addr,t)}function bp(s,t){s.uniform4uiv(this.addr,t)}function Tp(s,t,e){const i=this.cache,n=t.length,r=fr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||yc,r[o])}function Ep(s,t,e){const i=this.cache,n=t.length,r=fr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||wc,r[o])}function Ap(s,t,e){const i=this.cache,n=t.length,r=fr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||bc,r[o])}function Cp(s,t,e){const i=this.cache,n=t.length,r=fr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Sc,r[o])}function Rp(s){switch(s){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return Mp;case 5125:return yp;case 36294:return Sp;case 36295:return wp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}class Pp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cp(e.type)}}class Lp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rp(e.type)}}class Dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function fl(s,t){s.seq.push(t),s.map[t.id]=t}function Ip(s,t,e){const i=s.name,n=i.length;for(Wr.lastIndex=0;;){const r=Wr.exec(i),o=Wr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){fl(e,c===void 0?new Pp(a,s,t):new Lp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Dp(a),fl(e,u)),e=u}}}class er{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Ip(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function pl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Up=37297;let Np=0;function Op(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ml=new zt;function Fp(s){Yt._getMatrix(ml,Yt.workingColorSpace,s);const t=`mat3( ${ml.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case ur:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Op(s.getShaderSource(t),o)}else return n}function zp(s,t){const e=Fp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bp(s,t){let e;switch(t){case Yl:e="Linear";break;case $l:e="Reinhard";break;case jl:e="Cineon";break;case jo:e="ACESFilmic";break;case Zl:e="AgX";break;case Kl:e="Neutral";break;case lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new E;function kp(){Yt.getLuminanceCoefficients(zs);const s=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Hp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ls(s){return s!==""}function _l(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(s){return s.replace(Wp,qp)}const Xp=new Map;function qp(s,t){let e=kt[t];if(e===void 0){const i=Xp.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wo(e)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(s){return s.replace(Yp,$p)}function $p(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ml(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function Zp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fn:case zn:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zn:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case oh:t="ENVMAP_BLENDING_MIX";break;case ah:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function tm(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=jp(e),c=Zp(e),h=Kp(e),u=Jp(e),d=Qp(e),f=Vp(e),m=Hp(r),_=n.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(g=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?kt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?Bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,zp("linearToOutputTexel",e.outputColorSpace),kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=Wo(o),o=_l(o,e),o=vl(o,e),a=Wo(a),a=_l(a,e),a=vl(a,e),o=xl(o),a=xl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+g+o,v=x+p+a,R=pl(n,n.VERTEX_SHADER,S),T=pl(n,n.FRAGMENT_SHADER,v);n.attachShader(_,R),n.attachShader(_,T),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(L){if(s.debug.checkShaderErrors){const O=n.getProgramInfoLog(_).trim(),F=n.getShaderInfoLog(R).trim(),Y=n.getShaderInfoLog(T).trim();let W=!0,H=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,R,T);else{const $=gl(n,R,"vertex"),G=gl(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+$+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||Y==="")&&(H=!1);H&&(L.diagnostics={runnable:W,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(R),n.deleteShader(T),P=new er(n,_),w=Gp(n,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,Up)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let em=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new nm(t),e.set(t,i)),i}}class nm{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}}function sm(s,t,e,i,n,r,o){const a=new na,l=new im,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,L,O,F){const Y=O.fog,W=F.geometry,H=w.isMeshStandardMaterial?O.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),G=$&&$.mapping===hr?$.image.height:null,tt=m[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=lt!==void 0?lt.length:0;let Ht=0;W.morphAttributes.position!==void 0&&(Ht=1),W.morphAttributes.normal!==void 0&&(Ht=2),W.morphAttributes.color!==void 0&&(Ht=3);let oe,Z,nt,wt;if(tt){const ee=oi[tt];oe=ee.vertexShader,Z=ee.fragmentShader}else oe=w.vertexShader,Z=w.fragmentShader,l.update(w),nt=l.getVertexShaderID(w),wt=l.getFragmentShaderID(w);const ht=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,ge=!!w.map,$t=!!w.matcap,ye=!!$,N=!!w.aoMap,qe=!!w.lightMap,Wt=!!w.bumpMap,Xt=!!w.normalMap,At=!!w.displacementMap,de=!!w.emissiveMap,Et=!!w.metalnessMap,C=!!w.roughnessMap,y=w.anisotropy>0,z=w.clearcoat>0,K=w.dispersion>0,Q=w.iridescence>0,j=w.sheen>0,bt=w.transmission>0,ut=y&&!!w.anisotropyMap,mt=z&&!!w.clearcoatMap,jt=z&&!!w.clearcoatNormalMap,et=z&&!!w.clearcoatRoughnessMap,_t=Q&&!!w.iridescenceMap,Ct=Q&&!!w.iridescenceThicknessMap,Lt=j&&!!w.sheenColorMap,vt=j&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Bt=!!w.specularColorMap,le=!!w.specularIntensityMap,D=bt&&!!w.transmissionMap,ct=bt&&!!w.thicknessMap,X=!!w.gradientMap,J=!!w.alphaMap,pt=w.alphaTest>0,dt=!!w.alphaHash,Ot=!!w.extensions;let xe=Oi;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Le={shaderID:tt,shaderType:w.type,shaderName:w.name,vertexShader:oe,fragmentShader:Z,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:wt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Gn,alphaToCoverage:!!w.alphaToCoverage,map:ge,matcap:$t,envMap:ye,envMapMode:ye&&$.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:qe,bumpMap:Wt,normalMap:Xt,displacementMap:d&&At,emissiveMap:de,normalMapObjectSpace:Xt&&w.normalMapType===dh,normalMapTangentSpace:Xt&&w.normalMapType===lc,metalnessMap:Et,roughnessMap:C,anisotropy:y,anisotropyMap:ut,clearcoat:z,clearcoatMap:mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:et,dispersion:K,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Ct,sheen:j,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:qt,specularColorMap:Bt,specularIntensityMap:le,transmission:bt,transmissionMap:D,thicknessMap:ct,gradientMap:X,opaque:w.transparent===!1&&w.blending===Ln&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:w.combine,mapUv:ge&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:qe&&_(w.lightMap.channel),bumpMapUv:Wt&&_(w.bumpMap.channel),normalMapUv:Xt&&_(w.normalMap.channel),displacementMapUv:At&&_(w.displacementMap.channel),emissiveMapUv:de&&_(w.emissiveMap.channel),metalnessMapUv:Et&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:ut&&_(w.anisotropyMap.channel),clearcoatMapUv:mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(w.sheenRoughnessMap.channel),specularMapUv:qt&&_(w.specularMap.channel),specularColorMapUv:Bt&&_(w.specularColorMap.channel),specularIntensityMapUv:le&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:ct&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(ge||J),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:ge&&w.map.isVideoTexture===!0&&Yt.getTransfer(w.map.colorSpace)===ie,decodeVideoTextureEmissive:de&&w.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(w.emissiveMap.colorSpace)===ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ae,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(x(M,w),S(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const M=m[w.type];let L;if(M){const O=oi[M];L=fs.clone(O.uniforms)}else L=w.uniforms;return L}function R(w,M){let L;for(let O=0,F=h.length;O<F;O++){const Y=h[O];if(Y.cacheKey===M){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new tm(s,M,w,r),h.push(L)),L}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function rm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function om(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||om),i.length>1&&i.sort(d||yl),n.length>1&&n.sort(d||yl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function am(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new Sl,s.set(i,[o])):n>=r.length?(o=new Sl,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new at};break;case"SpotLight":e={position:new E,direction:new E,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function cm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let hm=0;function um(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dm(s){const t=new lm,e=cm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);const n=new E,r=new te,o=new te;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,S=0,v=0,R=0,T=0,A=0;c.sort(um);for(let w=0,M=c.length;w<M;w++){const L=c[w],O=L.color,F=L.intensity,Y=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],F);A++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,G=e.get(L);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=L.shadow.matrix,x++}i.directional[f]=H,f++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(F),H.distance=Y,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;const $=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,$.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=$.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=W,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=H,g++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const $=L.shadow,G=e.get(L);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=H,m++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(F),H.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=A,i.version=hm++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const S=c[p];if(S.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),u++}else if(S.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function wl(s){const t=new dm(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fm(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new wl(s),t.set(n,[a])):r>=o.length?(a=new wl(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class pm extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mm extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
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
}`;function vm(s,t,e){let i=new sa;const n=new st,r=new st,o=new Me,a=new pm({depthPacking:uh}),l=new mm,c={},h=e.maxTextureSize,u={[Bi]:Be,[Be]:Bi,[ae]:ae},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:gm,fragmentShader:_m}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new ve;m.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(T,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==xi&&this.type===xi,Y=p===xi&&this.type!==xi;for(let W=0,H=T.length;W<H;W++){const $=T[W],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const tt=G.getFrameExtents();if(n.multiply(tt),r.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/tt.x),n.x=r.x*tt.x,G.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/tt.y),n.y=r.y*tt.y,G.mapSize.y=r.y)),G.map===null||F===!0||Y===!0){const xt=this.type!==xi?{minFilter:Xe,magFilter:Xe}:{};G.map!==null&&G.map.dispose(),G.map=new si(n.x,n.y,xt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const lt=G.getViewportCount();for(let xt=0;xt<lt;xt++){const Ht=G.getViewport(xt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),O.viewport(o),G.updateMatrices($,xt),i=G.getFrustum(),v(A,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===xi&&x(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,M,L)};function x(T,A){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new si(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,f,_,null)}function S(T,A,P,w){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,F=A.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let W=Y[F];W===void 0&&(W=M.clone(),Y[F]=W,A.addEventListener("dispose",R)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,w===xi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=P}return M}function v(T,A,P,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===xi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=t.update(T),Y=T.material;if(Array.isArray(Y)){const W=F.groups;for(let H=0,$=W.length;H<$;H++){const G=W[H],tt=Y[G.materialIndex];if(tt&&tt.visible){const lt=S(T,tt,w,M);T.onBeforeShadow(s,T,A,P,F,lt,G),s.renderBufferDirect(P,null,F,lt,T,G),T.onAfterShadow(s,T,A,P,F,lt,G)}}}else if(Y.visible){const W=S(T,Y,w,M);T.onBeforeShadow(s,T,A,P,F,W,null),s.renderBufferDirect(P,null,F,W,T,null),T.onAfterShadow(s,T,A,P,F,W,null)}}const O=T.children;for(let F=0,Y=O.length;F<Y;F++)v(O[F],A,P,w,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const w=c[P],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const xm={[ro]:oo,[ao]:ho,[lo]:uo,[On]:co,[oo]:ro,[ho]:ao,[uo]:lo,[co]:On};function Mm(s,t){function e(){let D=!1;const ct=new Me;let X=null;const J=new Me(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,Ot,xe,Le){Le===!0&&(pt*=xe,dt*=xe,Ot*=xe),ct.set(pt,dt,Ot,xe),J.equals(ct)===!1&&(s.clearColor(pt,dt,Ot,xe),J.copy(ct))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,X=null,J=null,pt=null;return{setReversed:function(dt){if(ct!==dt){const Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const xe=pt;pt=null,this.setClear(xe)}ct=dt},getReversed:function(){return ct},setTest:function(dt){dt?ht(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(dt){X!==dt&&!D&&(s.depthMask(dt),X=dt)},setFunc:function(dt){if(ct&&(dt=xm[dt]),J!==dt){switch(dt){case ro:s.depthFunc(s.NEVER);break;case oo:s.depthFunc(s.ALWAYS);break;case ao:s.depthFunc(s.LESS);break;case On:s.depthFunc(s.LEQUAL);break;case lo:s.depthFunc(s.EQUAL);break;case co:s.depthFunc(s.GEQUAL);break;case ho:s.depthFunc(s.GREATER);break;case uo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(ct&&(dt=1-dt),s.clearDepth(dt),pt=dt)},reset:function(){D=!1,X=null,J=null,pt=null,ct=!1}}}function n(){let D=!1,ct=null,X=null,J=null,pt=null,dt=null,Ot=null,xe=null,Le=null;return{setTest:function(ee){D||(ee?ht(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!D&&(s.stencilMask(ee),ct=ee)},setFunc:function(ee,Je,di){(X!==ee||J!==Je||pt!==di)&&(s.stencilFunc(ee,Je,di),X=ee,J=Je,pt=di)},setOp:function(ee,Je,di){(dt!==ee||Ot!==Je||xe!==di)&&(s.stencilOp(ee,Je,di),dt=ee,Ot=Je,xe=di)},setLocked:function(ee){D=ee},setClear:function(ee){Le!==ee&&(s.clearStencil(ee),Le=ee)},reset:function(){D=!1,ct=null,X=null,J=null,pt=null,dt=null,Ot=null,xe=null,Le=null}}}const r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,S=null,v=null,R=null,T=null,A=new at(0,0,0),P=0,w=!1,M=null,L=null,O=null,F=null,Y=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=$>=2);let tt=null,lt={};const xt=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),oe=new Me().fromArray(xt),Z=new Me().fromArray(Ht);function nt(D,ct,X,J){const pt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<X;Ot++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ct+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return dt}const wt={};wt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),o.setFunc(On),Wt(!1),Xt(Ra),ht(s.CULL_FACE),N(yi);function ht(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Nt(D,ct){return u[D]!==ct?(s.bindFramebuffer(D,ct),u[D]=ct,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Gt(D,ct){let X=f,J=!1;if(D){X=d.get(ct),X===void 0&&(X=[],d.set(ct,X));const pt=D.textures;if(X.length!==pt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)X[dt]=s.COLOR_ATTACHMENT0+dt;X.length=pt.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function ge(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const $t={[Qi]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[Wc]:s.FUNC_REVERSE_SUBTRACT};$t[Xc]=s.MIN,$t[qc]=s.MAX;const ye={[Yc]:s.ZERO,[$c]:s.ONE,[jc]:s.SRC_COLOR,[no]:s.SRC_ALPHA,[eh]:s.SRC_ALPHA_SATURATE,[Qc]:s.DST_COLOR,[Kc]:s.DST_ALPHA,[Zc]:s.ONE_MINUS_SRC_COLOR,[so]:s.ONE_MINUS_SRC_ALPHA,[th]:s.ONE_MINUS_DST_COLOR,[Jc]:s.ONE_MINUS_DST_ALPHA,[ih]:s.CONSTANT_COLOR,[nh]:s.ONE_MINUS_CONSTANT_COLOR,[sh]:s.CONSTANT_ALPHA,[rh]:s.ONE_MINUS_CONSTANT_ALPHA};function N(D,ct,X,J,pt,dt,Ot,xe,Le,ee){if(D===yi){_===!0&&(Rt(s.BLEND),_=!1);return}if(_===!1&&(ht(s.BLEND),_=!0),D!==Hc){if(D!==g||ee!==w){if((p!==Qi||v!==Qi)&&(s.blendEquation(s.FUNC_ADD),p=Qi,v=Qi),ee)switch(D){case Ln:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case be:s.blendFunc(s.ONE,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case La:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case be:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case La:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,S=null,R=null,T=null,A.set(0,0,0),P=0,g=D,w=ee}return}pt=pt||ct,dt=dt||X,Ot=Ot||J,(ct!==p||pt!==v)&&(s.blendEquationSeparate($t[ct],$t[pt]),p=ct,v=pt),(X!==x||J!==S||dt!==R||Ot!==T)&&(s.blendFuncSeparate(ye[X],ye[J],ye[dt],ye[Ot]),x=X,S=J,R=dt,T=Ot),(xe.equals(A)===!1||Le!==P)&&(s.blendColor(xe.r,xe.g,xe.b,Le),A.copy(xe),P=Le),g=D,w=!1}function qe(D,ct){D.side===ae?Rt(s.CULL_FACE):ht(s.CULL_FACE);let X=D.side===Be;ct&&(X=!X),Wt(X),D.blending===Ln&&D.transparent===!1?N(yi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Xt(D){D!==kc?(ht(s.CULL_FACE),D!==L&&(D===Ra?s.cullFace(s.BACK):D===Vc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),L=D}function At(D){D!==O&&(H&&s.lineWidth(D),O=D)}function de(D,ct,X){D?(ht(s.POLYGON_OFFSET_FILL),(F!==ct||Y!==X)&&(s.polygonOffset(ct,X),F=ct,Y=X)):Rt(s.POLYGON_OFFSET_FILL)}function Et(D){D?ht(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+W-1),tt!==D&&(s.activeTexture(D),tt=D)}function y(D,ct,X){X===void 0&&(tt===null?X=s.TEXTURE0+W-1:X=tt);let J=lt[X];J===void 0&&(J={type:void 0,texture:void 0},lt[X]=J),(J.type!==D||J.texture!==ct)&&(tt!==X&&(s.activeTexture(X),tt=X),s.bindTexture(D,ct||wt[D]),J.type=D,J.texture=ct)}function z(){const D=lt[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){oe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function vt(D){Z.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function qt(D,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let J=X.get(D);J===void 0&&(J=s.getUniformBlockIndex(ct,D.name),X.set(D,J))}function Bt(D,ct){const J=c.get(ct).get(D);l.get(ct)!==J&&(s.uniformBlockBinding(ct,J,D.__bindingPointIndex),l.set(ct,J))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,lt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,S=null,v=null,R=null,T=null,A=new at(0,0,0),P=0,w=!1,M=null,L=null,O=null,F=null,Y=null,oe.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Rt,bindFramebuffer:Nt,drawBuffers:Gt,useProgram:ge,setBlending:N,setMaterial:qe,setFlipSided:Wt,setCullFace:Xt,setLineWidth:At,setPolygonOffset:de,setScissorTest:Et,activeTexture:C,bindTexture:y,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:jt,texStorage3D:et,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Lt,viewport:vt,reset:le}}function bl(s,t,e,i){const n=ym(i);switch(e){case ic:return s*t;case sc:return s*t;case rc:return s*t*2;case Qo:return s*t/n.components*n.byteLength;case ta:return s*t/n.components*n.byteLength;case oc:return s*t*2/n.components*n.byteLength;case ea:return s*t*2/n.components*n.byteLength;case nc:return s*t*3/n.components*n.byteLength;case ni:return s*t*4/n.components*n.byteLength;case ia:return s*t*4/n.components*n.byteLength;case Zs:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _o:case xo:return Math.max(s,16)*Math.max(t,8)/4;case go:case vo:return Math.max(s,8)*Math.max(t,8)/2;case Mo:case yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case tr:case Fo:case zo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ac:case Bo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ko:case Vo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ym(s){switch(s){case bi:case Ql:return{byteLength:1,components:1};case ds:case tc:case Si:return{byteLength:2,components:1};case Ko:case Jo:return{byteLength:2,components:4};case rn:case Zo:case ci:return{byteLength:4,components:1};case ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sm(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return f?new OffscreenCanvas(C,y):sr("canvas")}function _(C,y,z){let K=1;const Q=Et(C);if((Q.width>z||Q.height>z)&&(K=z/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*Q.width),bt=Math.floor(K*Q.height);u===void 0&&(u=m(j,bt));const ut=y?m(j,bt):u;return ut.width=j,ut.height=bt,ut.getContext("2d").drawImage(C,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+bt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,y,z,K,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=y;if(y===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),y===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGB8UI),z===s.UNSIGNED_SHORT&&(j=s.RGB16UI),z===s.UNSIGNED_INT&&(j=s.RGB32UI),z===s.BYTE&&(j=s.RGB8I),z===s.SHORT&&(j=s.RGB16I),z===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),z===s.UNSIGNED_INT&&(j=s.RGBA32UI),z===s.BYTE&&(j=s.RGBA8I),z===s.SHORT&&(j=s.RGBA16I),z===s.INT&&(j=s.RGBA32I)),y===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const bt=Q?ur:Yt.getTransfer(K);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=bt===ie?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(C,y){let z;return C?y===null||y===rn||y===Bn?z=s.DEPTH24_STENCIL8:y===ci?z=s.DEPTH32F_STENCIL8:y===ds&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===rn||y===Bn?z=s.DEPTH_COMPONENT24:y===ci?z=s.DEPTH_COMPONENT32F:y===ds&&(z=s.DEPTH_COMPONENT16),z}function R(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==li?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){const y=C.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),M(y)}function P(C){const y=i.get(C);if(y.__webglInit===void 0)return;const z=C.source,K=d.get(z);if(K){const Q=K[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys(K).length===0&&d.delete(z)}i.remove(C)}function w(C){const y=i.get(C);s.deleteTexture(y.__webglTexture);const z=C.source,K=d.get(z);delete K[y.__cacheKey],o.memory.textures--}function M(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Q=0;Q<y.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let K=0,Q=z.length;K<Q;K++){const j=i.get(z[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(C)}let L=0;function O(){L=0}function F(){const C=L;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function Y(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function W(C,y){const z=i.get(C);if(C.isVideoTexture&&At(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,C,y);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function H(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Z(z,C,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function $(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Z(z,C,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function G(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){nt(z,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const tt={[ir]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[mo]:s.MIRRORED_REPEAT},lt={[Xe]:s.NEAREST,[ch]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[gr]:s.LINEAR_MIPMAP_NEAREST,[nn]:s.LINEAR_MIPMAP_LINEAR},xt={[fh]:s.NEVER,[xh]:s.ALWAYS,[ph]:s.LESS,[cc]:s.LEQUAL,[mh]:s.EQUAL,[vh]:s.GEQUAL,[gh]:s.GREATER,[_h]:s.NOTEQUAL};function Ht(C,y){if(y.type===ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===li||y.magFilter===gr||y.magFilter===vs||y.magFilter===nn||y.minFilter===li||y.minFilter===gr||y.minFilter===vs||y.minFilter===nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,tt[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,tt[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,tt[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,lt[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xe||y.minFilter!==vs&&y.minFilter!==nn||y.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function oe(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));const K=y.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const j=Y(y);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[j].usedTimes++;const bt=Q[C.__cacheKey];bt!==void 0&&(Q[C.__cacheKey].usedTimes--,bt.usedTimes===0&&w(y)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return z}function Z(C,y,z){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const Q=oe(C,y),j=y.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+z);const bt=i.get(j);if(j.version!==bt.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);const ut=Yt.getPrimaries(Yt.workingColorSpace),mt=y.colorSpace===Ni?null:Yt.getPrimaries(y.colorSpace),jt=y.colorSpace===Ni||ut===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let et=_(y.image,!1,n.maxTextureSize);et=de(y,et);const _t=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let Lt=S(y.internalFormat,_t,Ct,y.colorSpace,y.isVideoTexture);Ht(K,y);let vt;const qt=y.mipmaps,Bt=y.isVideoTexture!==!0,le=bt.__version===void 0||Q===!0,D=j.dataReady,ct=R(y,et);if(y.isDepthTexture)Lt=v(y.format===kn,y.type),le&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,_t,Ct,null));else if(y.isDataTexture)if(qt.length>0){Bt&&le&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,qt[0].width,qt[0].height);for(let X=0,J=qt.length;X<J;X++)vt=qt[X],Bt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Ct,vt.data):e.texImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,Ct,vt.data);y.generateMipmaps=!1}else Bt?(le&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,et.width,et.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,_t,Ct,et.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,_t,Ct,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,qt[0].width,qt[0].height,et.depth);for(let X=0,J=qt.length;X<J;X++)if(vt=qt[X],y.format!==ni)if(_t!==null)if(Bt){if(D)if(y.layerUpdates.size>0){const pt=bl(vt.width,vt.height,y.format,y.type);for(const dt of y.layerUpdates){const Ot=vt.data.subarray(dt*pt/vt.data.BYTES_PER_ELEMENT,(dt+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,dt,vt.width,vt.height,1,_t,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,et.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,et.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,et.depth,_t,Ct,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,et.depth,0,_t,Ct,vt.data)}else{Bt&&le&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,qt[0].width,qt[0].height);for(let X=0,J=qt.length;X<J;X++)vt=qt[X],y.format!==ni?_t!==null?Bt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Ct,vt.data):e.texImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,Ct,vt.data)}else if(y.isDataArrayTexture)if(Bt){if(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,et.width,et.height,et.depth),D)if(y.layerUpdates.size>0){const X=bl(et.width,et.height,y.format,y.type);for(const J of y.layerUpdates){const pt=et.data.subarray(J*X/et.data.BYTES_PER_ELEMENT,(J+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,_t,Ct,pt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,Ct,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,_t,Ct,et.data);else if(y.isData3DTexture)Bt?(le&&e.texStorage3D(s.TEXTURE_3D,ct,Lt,et.width,et.height,et.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,Ct,et.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,_t,Ct,et.data);else if(y.isFramebufferTexture){if(le)if(Bt)e.texStorage2D(s.TEXTURE_2D,ct,Lt,et.width,et.height);else{let X=et.width,J=et.height;for(let pt=0;pt<ct;pt++)e.texImage2D(s.TEXTURE_2D,pt,Lt,X,J,0,_t,Ct,null),X>>=1,J>>=1}}else if(qt.length>0){if(Bt&&le){const X=Et(qt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Lt,X.width,X.height)}for(let X=0,J=qt.length;X<J;X++)vt=qt[X],Bt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,_t,Ct,vt):e.texImage2D(s.TEXTURE_2D,X,Lt,_t,Ct,vt);y.generateMipmaps=!1}else if(Bt){if(le){const X=Et(et);e.texStorage2D(s.TEXTURE_2D,ct,Lt,X.width,X.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ct,et)}else e.texImage2D(s.TEXTURE_2D,0,Lt,_t,Ct,et);g(y)&&p(K),bt.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function nt(C,y,z){if(y.image.length!==6)return;const K=oe(C,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const j=i.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+z);const bt=Yt.getPrimaries(Yt.workingColorSpace),ut=y.colorSpace===Ni?null:Yt.getPrimaries(y.colorSpace),mt=y.colorSpace===Ni||bt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const jt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!jt&&!et?_t[J]=_(y.image[J],!0,n.maxCubemapSize):_t[J]=et?y.image[J].image:y.image[J],_t[J]=de(y,_t[J]);const Ct=_t[0],Lt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),qt=S(y.internalFormat,Lt,vt,y.colorSpace),Bt=y.isVideoTexture!==!0,le=j.__version===void 0||K===!0,D=Q.dataReady;let ct=R(y,Ct);Ht(s.TEXTURE_CUBE_MAP,y);let X;if(jt){Bt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,qt,Ct.width,Ct.height);for(let J=0;J<6;J++){X=_t[J].mipmaps;for(let pt=0;pt<X.length;pt++){const dt=X[pt];y.format!==ni?Lt!==null?Bt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,vt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,qt,dt.width,dt.height,0,Lt,vt,dt.data)}}}else{if(X=y.mipmaps,Bt&&le){X.length>0&&ct++;const J=Et(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,qt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Lt,vt,_t[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,_t[J].width,_t[J].height,0,Lt,vt,_t[J].data);for(let pt=0;pt<X.length;pt++){const Ot=X[pt].image[J].image;Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Ot.width,Ot.height,Lt,vt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,qt,Ot.width,Ot.height,0,Lt,vt,Ot.data)}}else{Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,vt,_t[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Lt,vt,_t[J]);for(let pt=0;pt<X.length;pt++){const dt=X[pt];Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Lt,vt,dt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,qt,Lt,vt,dt.image[J])}}}g(y)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function wt(C,y,z,K,Q,j){const bt=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),mt=S(z.internalFormat,bt,ut,z.colorSpace),jt=i.get(y),et=i.get(z);if(et.__renderTarget=y,!jt.__hasExternalTextures){const _t=Math.max(1,y.width>>j),Ct=Math.max(1,y.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,mt,_t,Ct,y.depth,0,bt,ut,null):e.texImage2D(Q,j,mt,_t,Ct,0,bt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Xt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,et.__webglTexture,0,Wt(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,et.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(C,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=v(y.stencilBuffer,Q),bt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Wt(y);Xt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,j,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{const K=y.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],bt=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),mt=S(j.internalFormat,bt,ut,j.colorSpace),jt=Wt(y);z&&Xt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,mt,y.width,y.height):Xt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,mt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,mt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Q=K.__webglTexture,j=Wt(y);if(y.depthTexture.format===Dn)Xt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===kn)Xt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(C){const y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Rt(y.__webglFramebuffer,C)}else if(z){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),ht(y.__webglDepthbuffer[K],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ht(y.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(C,y,z){const K=i.get(C);y!==void 0&&wt(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Nt(C)}function ge(C){const y=C.texture,z=i.get(C),K=i.get(y);C.addEventListener("dispose",A);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let mt=0;mt<y.mipmaps.length;mt++)z.__webglFramebuffer[ut][mt]=s.createFramebuffer()}else z.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)z.__webglFramebuffer[ut]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ut=0,mt=Q.length;ut<mt;ut++){const jt=i.get(Q[ut]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Xt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const mt=Q[ut];z.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const jt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),_t=S(mt.internalFormat,jt,et,mt.colorSpace,C.isXRRenderTarget===!0),Ct=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)wt(z.__webglFramebuffer[ut][mt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else wt(z.__webglFramebuffer[ut],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,mt=Q.length;ut<mt;ut++){const jt=Q[ut],et=i.get(jt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Ht(s.TEXTURE_2D,jt),wt(z.__webglFramebuffer,C,jt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),g(jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),Ht(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)wt(z.__webglFramebuffer[mt],C,y,s.COLOR_ATTACHMENT0,ut,mt);else wt(z.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,ut,0);g(y)&&p(ut),e.unbindTexture()}C.depthBuffer&&Nt(C)}function $t(C){const y=C.textures;for(let z=0,K=y.length;z<K;z++){const Q=y[z];if(g(Q)){const j=x(C),bt=i.get(Q).__webglTexture;e.bindTexture(j,bt),p(j),e.unbindTexture()}}}const ye=[],N=[];function qe(C){if(C.samples>0){if(Xt(C)===!1){const y=C.textures,z=C.width,K=C.height;let Q=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(C),ut=y.length>1;if(ut)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const jt=i.get(y[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,Q,s.NEAREST),l===!0&&(ye.length=0,N.length=0,ye.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ye.push(j),N.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const jt=i.get(y[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Wt(C){return Math.min(n.maxSamples,C.samples)}function Xt(C){const y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function de(C,y){const z=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Gn&&z!==Ni&&(Yt.getTransfer(z)===ie?(K!==ni||Q!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Gt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Xt}function wm(s,t){function e(i,n=Ni){let r;const o=Yt.getTransfer(n);if(i===bi)return s.UNSIGNED_BYTE;if(i===Ko)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===ec)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ql)return s.BYTE;if(i===tc)return s.SHORT;if(i===ds)return s.UNSIGNED_SHORT;if(i===Zo)return s.INT;if(i===rn)return s.UNSIGNED_INT;if(i===ci)return s.FLOAT;if(i===Si)return s.HALF_FLOAT;if(i===ic)return s.ALPHA;if(i===nc)return s.RGB;if(i===ni)return s.RGBA;if(i===sc)return s.LUMINANCE;if(i===rc)return s.LUMINANCE_ALPHA;if(i===Dn)return s.DEPTH_COMPONENT;if(i===kn)return s.DEPTH_STENCIL;if(i===Qo)return s.RED;if(i===ta)return s.RED_INTEGER;if(i===oc)return s.RG;if(i===ea)return s.RG_INTEGER;if(i===ia)return s.RGBA_INTEGER;if(i===Zs||i===Ks||i===Js||i===Qs)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===go||i===_o||i===vo||i===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===yo||i===So)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mo||i===yo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===So)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wo||i===bo||i===To||i===Eo||i===Ao||i===Co||i===Ro||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===No||i===Oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ao)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Co)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ro)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Po)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Do)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Io)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===No)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tr||i===Fo||i===zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===tr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===Bo||i===ko||i===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class bm extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Se extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
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

}`;class Cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ne,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Pe({vertexShader:Em,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new he(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rm extends Wn{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=new Cm,g=e.getContextAttributes();let p=null,x=null;const S=[],v=[],R=new st;let T=null;const A=new Ze;A.viewport=new Me;const P=new Ze;P.viewport=new Me;const w=[A,P],M=new bm;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=S[Z];return nt===void 0&&(nt=new Xr,S[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=S[Z];return nt===void 0&&(nt=new Xr,S[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=S[Z];return nt===void 0&&(nt=new Xr,S[Z]=nt),nt.getHandSpace()};function F(Z){const nt=v.indexOf(Z.inputSource);if(nt===-1)return;const wt=S[nt];wt!==void 0&&(wt.update(Z.inputSource,Z.frame,c||o),wt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",W);for(let Z=0;Z<S.length;Z++){const nt=v[Z];nt!==null&&(v[Z]=null,S[Z].disconnect(nt))}L=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,x=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),n.renderState.layers===void 0){const nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new si(f.framebufferWidth,f.framebufferHeight,{format:ni,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,wt=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?kn:Dn,wt=g.stencil?Bn:rn);const Rt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Rt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new si(d.textureWidth,d.textureHeight,{format:ni,type:bi,depthTexture:new Mc(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),oe.setContext(n),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(Z){for(let nt=0;nt<Z.removed.length;nt++){const wt=Z.removed[nt],ht=v.indexOf(wt);ht>=0&&(v[ht]=null,S[ht].disconnect(wt))}for(let nt=0;nt<Z.added.length;nt++){const wt=Z.added[nt];let ht=v.indexOf(wt);if(ht===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=v.length){v.push(wt),ht=Nt;break}else if(v[Nt]===null){v[Nt]=wt,ht=Nt;break}if(ht===-1)break}const Rt=S[ht];Rt&&Rt.connect(wt)}}const H=new E,$=new E;function G(Z,nt,wt){H.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(wt.matrixWorld);const ht=H.distanceTo($),Rt=nt.projectionMatrix.elements,Nt=wt.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),ge=Rt[14]/(Rt[10]+1),$t=(Rt[9]+1)/Rt[5],ye=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],qe=(Nt[8]+1)/Nt[0],Wt=Gt*N,Xt=Gt*qe,At=ht/(-N+qe),de=At*-N;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(de),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Et=Gt+At,C=ge+At,y=Wt-de,z=Xt+(ht-de),K=$t*ge/C*Et,Q=ye*ge/C*Et;Z.projectionMatrix.makePerspective(y,z,K,Q,Et,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function tt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let nt=Z.near,wt=Z.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),M.near=P.near=A.near=nt,M.far=P.far=A.far=wt,(L!==M.near||O!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,O=M.far),A.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const ht=Z.parent,Rt=M.cameras;tt(M,ht);for(let Nt=0;Nt<Rt.length;Nt++)tt(Rt[Nt],ht);Rt.length===2?G(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),lt(Z,M,ht)};function lt(Z,nt,wt){wt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(wt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xt=null;function Ht(Z,nt){if(h=nt.getViewerPose(c||o),m=nt,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ht=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Nt=0;Nt<wt.length;Nt++){const Gt=wt[Nt];let ge=null;if(f!==null)ge=f.getViewport(Gt);else{const ye=u.getViewSubImage(d,Gt);ge=ye.viewport,Nt===0&&(t.setRenderTargetTextures(x,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(x))}let $t=w[Nt];$t===void 0&&($t=new Ze,$t.layers.enable(Nt),$t.viewport=new Me,w[Nt]=$t),$t.matrix.fromArray(Gt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Gt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ge.x,ge.y,ge.width,ge.height),Nt===0&&(M.matrix.copy($t.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push($t)}const Rt=n.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Nt=u.getDepthInformation(wt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,n.renderState)}}for(let wt=0;wt<S.length;wt++){const ht=v[wt],Rt=S[wt];ht!==null&&Rt!==void 0&&Rt.update(ht,nt,c||o)}xt&&xt(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),m=null}const oe=new xc;oe.setAnimationLoop(Ht),this.setAnimationLoop=function(Z){xt=Z},this.dispose=function(){}}}const $i=new hi,Pm=new te;function Lm(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,gc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),S=x.envMap,v=x.envMapRotation;S&&(g.envMap.value=S,$i.copy(v),$i.x*=-1,$i.y*=-1,$i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),g.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler($i)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Dm(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const v=S.program;i.uniformBlockBinding(x,v)}function c(x,S){let v=n[x.id];v===void 0&&(m(x),v=h(x),n[x.id]=v,x.addEventListener("dispose",g));const R=S.program;i.updateUBOMapping(x,R);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const S=u();x.__bindingPointIndex=S;const v=s.createBuffer(),R=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=n[x.id],v=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,A=v.length;T<A;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,M=P.length;w<M;w++){const L=P[w];if(f(L,T,w,R)===!0){const O=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let W=0;W<F.length;W++){const H=F[W],$=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+Y,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,v,R){const T=x.value,A=S+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(x){const S=x.uniforms;let v=0;const R=16;for(let A=0,P=S.length;A<P;A++){const w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,L=w.length;M<L;M++){const O=w[M],F=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,W=F.length;Y<W;Y++){const H=F[Y],$=_(H),G=v%R,tt=G%$.boundary,lt=G+tt;v+=tt,lt!==0&&R-lt<$.storage&&(v+=R-lt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}const T=v%R;return T>0&&(v+=R-T),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function g(x){const S=x.target;S.removeEventListener("dispose",g);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function p(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}class Im{constructor(t={}){const{canvas:e=yh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let R=!1,T=0,A=0,P=null,w=-1,M=null;const L=new Me,O=new Me;let F=null;const Y=new at(0);let W=0,H=e.width,$=e.height,G=1,tt=null,lt=null;const xt=new Me(0,0,H,$),Ht=new Me(0,0,H,$);let oe=!1;const Z=new sa;let nt=!1,wt=!1;const ht=new te,Rt=new te,Nt=new E,Gt=new Me,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ye(){return P===null?G:1}let N=i;function qe(b,I){return e.getContext(b,I)}try{const b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$o}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){const I="webgl2";if(N=qe(I,b),N===null)throw qe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Wt,Xt,At,de,Et,C,y,z,K,Q,j,bt,ut,mt,jt,et,_t,Ct,Lt,vt,qt,Bt,le,D;function ct(){Wt=new zf(N),Wt.init(),Bt=new wm(N,Wt),Xt=new Df(N,Wt,t,Bt),At=new Mm(N,Wt),Xt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),de=new Vf(N),Et=new rm,C=new Sm(N,Wt,At,Et,Xt,Bt,de),y=new Uf(v),z=new Ff(v),K=new Yh(N),le=new Pf(N,K),Q=new Bf(N,K,de,le),j=new Gf(N,Q,K,de),Lt=new Hf(N,Xt,C),et=new If(Et),bt=new sm(v,y,z,Wt,Xt,le,et),ut=new Lm(v,Et),mt=new am,jt=new fm(Wt),Ct=new Rf(v,y,z,At,j,f,l),_t=new vm(v,j,Xt),D=new Dm(N,de,Xt,At),vt=new Lf(N,Wt,de),qt=new kf(N,Wt,de),de.programs=bt.programs,v.capabilities=Xt,v.extensions=Wt,v.properties=Et,v.renderLists=mt,v.shadowMap=_t,v.state=At,v.info=de}ct();const X=new Rm(v,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(H,$,!1))},this.getSize=function(b){return b.set(H,$)},this.setSize=function(b,I,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,$=I,e.width=Math.floor(b*G),e.height=Math.floor(I*G),k===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(H*G,$*G).floor()},this.setDrawingBufferSize=function(b,I,k){H=b,$=I,G=k,e.width=Math.floor(b*k),e.height=Math.floor(I*k),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,I,k,V){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,I,k,V),At.viewport(L.copy(xt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,I,k,V){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,I,k,V),At.scissor(O.copy(Ht).multiplyScalar(G).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){At.setScissorTest(oe=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){lt=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,I=!0,k=!0){let V=0;if(b){let U=!1;if(P!==null){const it=P.texture.format;U=it===ia||it===ea||it===ta}if(U){const it=P.texture.type,ft=it===bi||it===rn||it===ds||it===Bn||it===Ko||it===Jo,Mt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Ut=Mt.r,Ft=Mt.g,St=Mt.b;ft?(m[0]=Ut,m[1]=Ft,m[2]=St,m[3]=yt,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ut,_[1]=Ft,_[2]=St,_[3]=yt,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT),k&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),jt.dispose(),Et.dispose(),y.dispose(),z.dispose(),j.dispose(),le.dispose(),D.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",ya),X.removeEventListener("sessionend",Sa),Hi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=de.autoReset,I=_t.enabled,k=_t.autoUpdate,V=_t.needsUpdate,U=_t.type;ct(),de.autoReset=b,_t.enabled=I,_t.autoUpdate=k,_t.needsUpdate=V,_t.type=U}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){const I=b.target;I.removeEventListener("dispose",Ot),xe(I)}function xe(b){Le(b),Et.remove(b)}function Le(b){const I=Et.get(b).programs;I!==void 0&&(I.forEach(function(k){bt.releaseProgram(k)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,k,V,U,it){I===null&&(I=ge);const ft=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Fc(b,I,k,V,U);At.setMaterial(V,ft);let yt=k.index,Ut=1;if(V.wireframe===!0){if(yt=Q.getWireframeAttribute(k),yt===void 0)return;Ut=2}const Ft=k.drawRange,St=k.attributes.position;let Zt=Ft.start*Ut,ce=(Ft.start+Ft.count)*Ut;it!==null&&(Zt=Math.max(Zt,it.start*Ut),ce=Math.min(ce,(it.start+it.count)*Ut)),yt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,yt.count)):St!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,St.count));const fe=ce-Zt;if(fe<0||fe===1/0)return;le.setup(U,V,Mt,k,yt);let Ve,Jt=vt;if(yt!==null&&(Ve=K.get(yt),Jt=qt,Jt.setIndex(Ve)),U.isMesh)V.wireframe===!0?(At.setLineWidth(V.wireframeLinewidth*ye()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(U.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),At.setLineWidth(Tt*ye()),U.isLineSegments?Jt.setMode(N.LINES):U.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else U.isPoints?Jt.setMode(N.POINTS):U.isSprite&&Jt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Tt=U._multiDrawStarts,fi=U._multiDrawCounts,Qt=U._multiDrawCount,Qe=yt?K.get(yt).bytesPerElement:1,ln=Et.get(V).currentProgram.getUniforms();for(let He=0;He<Qt;He++)ln.setValue(N,"_gl_DrawID",He),Jt.render(Tt[He]/Qe,fi[He])}else if(U.isInstancedMesh)Jt.renderInstances(Zt,fe,U.count);else if(k.isInstancedBufferGeometry){const Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fi=Math.min(k.instanceCount,Tt);Jt.renderInstances(Zt,fe,fi)}else Jt.render(Zt,fe)};function ee(b,I,k){b.transparent===!0&&b.side===ae&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,_s(b,I,k),b.side=Bi,b.needsUpdate=!0,_s(b,I,k),b.side=ae):_s(b,I,k)}this.compile=function(b,I,k=null){k===null&&(k=b),p=jt.get(k),p.init(I),S.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==k&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const V=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const Mt=it[ft];ee(Mt,k,U),V.add(Mt)}else ee(it,k,U),V.add(it)}),S.pop(),p=null,V},this.compileAsync=function(b,I,k=null){const V=this.compile(b,I,k);return new Promise(U=>{function it(){if(V.forEach(function(ft){Et.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){U(b);return}setTimeout(it,10)}Wt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Je=null;function di(b){Je&&Je(b)}function ya(){Hi.stop()}function Sa(){Hi.start()}const Hi=new xc;Hi.setAnimationLoop(di),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(b){Je=b,X.setAnimationLoop(b),b===null?Hi.stop():Hi.start()},X.addEventListener("sessionstart",ya),X.addEventListener("sessionend",Sa),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,P),p=jt.get(b,S.length),p.init(I),S.push(p),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),wt=this.localClippingEnabled,nt=et.init(this.clippingPlanes,wt),g=mt.get(b,x.length),g.init(),x.push(g),X.enabled===!0&&X.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&mr(it,I,-1/0,v.sortObjects)}mr(b,I,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,lt),$t=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$t&&Ct.addToRenderList(g,b),this.info.render.frame++,nt===!0&&et.beginShadows();const k=p.state.shadowsArray;_t.render(k,b,I),nt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,U=g.transmissive;if(p.setupLights(),I.isArrayCamera){const it=I.cameras;if(U.length>0)for(let ft=0,Mt=it.length;ft<Mt;ft++){const yt=it[ft];ba(V,U,b,yt)}$t&&Ct.render(b);for(let ft=0,Mt=it.length;ft<Mt;ft++){const yt=it[ft];wa(g,b,yt,yt.viewport)}}else U.length>0&&ba(V,U,b,I),$t&&Ct.render(b),wa(g,b,I);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,I),le.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],nt===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function mr(b,I,k,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){V&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);const ft=j.update(b),Mt=b.material;Mt.visible&&g.push(b,ft,Mt,k,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const ft=j.update(b),Mt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Gt.copy(ft.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(Mt)){const yt=ft.groups;for(let Ut=0,Ft=yt.length;Ut<Ft;Ut++){const St=yt[Ut],Zt=Mt[St.materialIndex];Zt&&Zt.visible&&g.push(b,ft,Zt,k,Gt.z,St)}}else Mt.visible&&g.push(b,ft,Mt,k,Gt.z,null)}}const it=b.children;for(let ft=0,Mt=it.length;ft<Mt;ft++)mr(it[ft],I,k,V)}function wa(b,I,k,V){const U=b.opaque,it=b.transmissive,ft=b.transparent;p.setupLightsView(k),nt===!0&&et.setGlobalState(v.clippingPlanes,k),V&&At.viewport(L.copy(V)),U.length>0&&gs(U,I,k),it.length>0&&gs(it,I,k),ft.length>0&&gs(ft,I,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ba(b,I,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new si(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Si:bi,minFilter:nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const it=p.state.transmissionRenderTarget[V.id],ft=V.viewport||L;it.setSize(ft.z,ft.w);const Mt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(Y),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Ct.render(k);const yt=v.toneMapping;v.toneMapping=Oi;const Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),nt===!0&&et.setGlobalState(v.clippingPlanes,V),gs(b,k,V),C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let St=0,Zt=I.length;St<Zt;St++){const ce=I[St],fe=ce.object,Ve=ce.geometry,Jt=ce.material,Tt=ce.group;if(Jt.side===ae&&fe.layers.test(V.layers)){const fi=Jt.side;Jt.side=Be,Jt.needsUpdate=!0,Ta(fe,k,V,Ve,Jt,Tt),Jt.side=fi,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it))}v.setRenderTarget(Mt),v.setClearColor(Y,W),Ut!==void 0&&(V.viewport=Ut),v.toneMapping=yt}function gs(b,I,k){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=b.length;U<it;U++){const ft=b[U],Mt=ft.object,yt=ft.geometry,Ut=V===null?ft.material:V,Ft=ft.group;Mt.layers.test(k.layers)&&Ta(Mt,I,k,yt,Ut,Ft)}}function Ta(b,I,k,V,U,it){b.onBeforeRender(v,I,k,V,U,it),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,I,k,V,b,it),U.transparent===!0&&U.side===ae&&U.forceSinglePass===!1?(U.side=Be,U.needsUpdate=!0,v.renderBufferDirect(k,I,V,U,b,it),U.side=Bi,U.needsUpdate=!0,v.renderBufferDirect(k,I,V,U,b,it),U.side=ae):v.renderBufferDirect(k,I,V,U,b,it),b.onAfterRender(v,I,k,V,U,it)}function _s(b,I,k){I.isScene!==!0&&(I=ge);const V=Et.get(b),U=p.state.lights,it=p.state.shadowsArray,ft=U.state.version,Mt=bt.getParameters(b,U.state,it,I,k),yt=bt.getProgramCacheKey(Mt);let Ut=V.programs;V.environment=b.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(b.isMeshStandardMaterial?z:y).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Ot),Ut=new Map,V.programs=Ut);let Ft=Ut.get(yt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ft)return Aa(b,Mt),Ft}else Mt.uniforms=bt.getUniforms(b),b.onBeforeCompile(Mt,v),Ft=bt.acquireProgram(Mt,yt),Ut.set(yt,Ft),V.uniforms=Mt.uniforms;const St=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=et.uniform),Aa(b,Mt),V.needsLights=Bc(b),V.lightsStateVersion=ft,V.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function Ea(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=er.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Aa(b,I){const k=Et.get(b);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Fc(b,I,k,V,U){I.isScene!==!0&&(I=ge),C.resetTextureUnits();const it=I.fog,ft=V.isMeshStandardMaterial?I.environment:null,Mt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gn,yt=(V.isMeshStandardMaterial?z:y).get(V.envMap||ft),Ut=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color;let fe=Oi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=Ve!==void 0?Ve.length:0,Tt=Et.get(V),fi=p.state.lights;if(nt===!0&&(wt===!0||b!==M)){const Ye=b===M&&V.id===w;et.setState(V,b,Ye)}let Qt=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==fi.state.version||Tt.outputColorSpace!==Mt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==yt||V.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Ft||Tt.morphTargets!==St||Tt.morphNormals!==Zt||Tt.morphColors!==ce||Tt.toneMapping!==fe||Tt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Tt.__version=V.version);let Qe=Tt.currentProgram;Qt===!0&&(Qe=_s(V,I,U));let ln=!1,He=!1,Yn=!1;const pe=Qe.getUniforms(),ri=Tt.uniforms;if(At.useProgram(Qe.program)&&(ln=!0,He=!0,Yn=!0),V.id!==w&&(w=V.id,He=!0),ln||M!==b){At.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),wh(ht),bh(ht),pe.setValue(N,"projectionMatrix",ht)):pe.setValue(N,"projectionMatrix",b.projectionMatrix),pe.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ti=pe.map.cameraPosition;Ti!==void 0&&Ti.setValue(N,Nt.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,He=!0,Yn=!0)}if(U.isSkinnedMesh){pe.setOptional(N,U,"bindMatrix"),pe.setOptional(N,U,"bindMatrixInverse");const Ye=U.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),pe.setValue(N,"boneTexture",Ye.boneTexture,C))}U.isBatchedMesh&&(pe.setOptional(N,U,"batchingTexture"),pe.setValue(N,"batchingTexture",U._matricesTexture,C),pe.setOptional(N,U,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",U._indirectTexture,C),pe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",U._colorsTexture,C));const $n=k.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Lt.update(U,k,Qe),(He||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,pe.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ri.envMap.value=yt,ri.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(ri.envMapIntensity.value=I.environmentIntensity),He&&(pe.setValue(N,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&zc(ri,Yn),it&&V.fog===!0&&ut.refreshFogUniforms(ri,it),ut.refreshMaterialUniforms(ri,V,G,$,p.state.transmissionRenderTarget[b.id]),er.upload(N,Ea(Tt),ri,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(er.upload(N,Ea(Tt),ri,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(N,"center",U.center),pe.setValue(N,"modelViewMatrix",U.modelViewMatrix),pe.setValue(N,"normalMatrix",U.normalMatrix),pe.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ye=V.uniformsGroups;for(let Ti=0,Ei=Ye.length;Ti<Ei;Ti++){const Ca=Ye[Ti];D.update(Ca,Qe),D.bind(Ca,Qe)}}return Qe}function zc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Bc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,I,k){Et.get(b.texture).__webglTexture=I,Et.get(b.depthTexture).__webglTexture=k;const V=Et.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const k=Et.get(b);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,k=0){P=b,T=I,A=k;let V=!0,U=null,it=!1,ft=!1;if(b){const yt=Et.get(b);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(yt.__hasExternalTextures)C.rebindTextures(b,Et.get(b.texture).__webglTexture,Et.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Et.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const Ft=Et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[I])?U=Ft[I][k]:U=Ft[I],it=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?U=Et.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[k]:U=Ft,L.copy(b.viewport),O.copy(b.scissor),F=b.scissorTest}else L.copy(xt).multiplyScalar(G).floor(),O.copy(Ht).multiplyScalar(G).floor(),F=oe;if(At.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&At.drawBuffers(b,U),At.viewport(L),At.scissor(O),At.setScissorTest(F),it){const yt=Et.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,k)}else if(ft){const yt=Et.get(b.texture),Ut=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,k||0,Ut)}w=-1},this.readRenderTargetPixels=function(b,I,k,V,U,it,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){At.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const yt=b.texture,Ut=yt.format,Ft=yt.type;if(!Xt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&k>=0&&k<=b.height-U&&N.readPixels(I,k,V,U,Bt.convert(Ut),Bt.convert(Ft),it)}finally{const yt=P!==null?Et.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,I,k,V,U,it,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const yt=b.texture,Ut=yt.format,Ft=yt.type;if(!Xt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-V&&k>=0&&k<=b.height-U){At.bindFramebuffer(N.FRAMEBUFFER,Mt);const St=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(I,k,V,U,Bt.convert(Ut),Bt.convert(Ft),0);const Zt=P!==null?Et.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Zt);const ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Sh(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(St),N.deleteSync(ce),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,k=0){b.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-k),U=Math.floor(b.image.width*V),it=Math.floor(b.image.height*V),ft=I!==null?I.x:0,Mt=I!==null?I.y:0;C.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,ft,Mt,U,it),At.unbindTexture()},this.copyTextureToTexture=function(b,I,k=null,V=null,U=0){b.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let it,ft,Mt,yt,Ut,Ft,St,Zt,ce;const fe=b.isCompressedTexture?b.mipmaps[U]:b.image;k!==null?(it=k.max.x-k.min.x,ft=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,yt=k.min.x,Ut=k.min.y,Ft=k.isBox3?k.min.z:0):(it=fe.width,ft=fe.height,Mt=fe.depth||1,yt=0,Ut=0,Ft=0),V!==null?(St=V.x,Zt=V.y,ce=V.z):(St=0,Zt=0,ce=0);const Ve=Bt.convert(I.format),Jt=Bt.convert(I.type);let Tt;I.isData3DTexture?(C.setTexture3D(I,0),Tt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(C.setTexture2DArray(I,0),Tt=N.TEXTURE_2D_ARRAY):(C.setTexture2D(I,0),Tt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const fi=N.getParameter(N.UNPACK_ROW_LENGTH),Qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=N.getParameter(N.UNPACK_SKIP_PIXELS),ln=N.getParameter(N.UNPACK_SKIP_ROWS),He=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const Yn=b.isDataArrayTexture||b.isData3DTexture,pe=I.isDataArrayTexture||I.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ri=Et.get(b),$n=Et.get(I),Ye=Et.get(ri.__renderTarget),Ti=Et.get($n.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,Ye.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ei=0;Ei<Mt;Ei++)Yn&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(b).__webglTexture,U,Ft+Ei),b.isDepthTexture?(pe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(I).__webglTexture,U,ce+Ei),N.blitFramebuffer(yt,Ut,it,ft,St,Zt,it,ft,N.DEPTH_BUFFER_BIT,N.NEAREST)):pe?N.copyTexSubImage3D(Tt,U,St,Zt,ce+Ei,yt,Ut,it,ft):N.copyTexSubImage2D(Tt,U,St,Zt,ce+Ei,yt,Ut,it,ft);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pe?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Tt,U,St,Zt,ce,it,ft,Mt,Ve,Jt,fe.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,U,St,Zt,ce,it,ft,Mt,Ve,fe.data):N.texSubImage3D(Tt,U,St,Zt,ce,it,ft,Mt,Ve,Jt,fe):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,St,Zt,it,ft,Ve,Jt,fe.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,St,Zt,fe.width,fe.height,Ve,fe.data):N.texSubImage2D(N.TEXTURE_2D,U,St,Zt,it,ft,Ve,Jt,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,fi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ln),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He),U===0&&I.generateMipmaps&&N.generateMipmap(Tt),At.unbindTexture()},this.copyTextureToTexture3D=function(b,I,k=null,V=null,U=0){return b.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,k,V,U)},this.initRenderTarget=function(b){Et.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,At.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class aa{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=i}clone(){return new aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Um extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ho,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new E;class rr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Un extends Vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wn;const Qn=new E,bn=new E,Tn=new E,En=new st,ts=new st,Tc=new te,Bs=new E,es=new E,ks=new E,Tl=new st,qr=new st,El=new st;class cs extends _e{constructor(t=new Un){if(super(),this.isSprite=!0,this.type="Sprite",wn===void 0){wn=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nm(e,5);wn.setIndex([0,1,2,0,2,3]),wn.setAttribute("position",new rr(i,3,0,!1)),wn.setAttribute("uv",new rr(i,2,3,!1))}this.geometry=wn,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bn.setFromMatrixScale(this.matrixWorld),Tc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Tn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bn.multiplyScalar(-Tn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;Vs(Bs.set(-.5,-.5,0),Tn,o,bn,n,r),Vs(es.set(.5,-.5,0),Tn,o,bn,n,r),Vs(ks.set(.5,.5,0),Tn,o,bn,n,r),Tl.set(0,0),qr.set(1,0),El.set(1,1);let a=t.ray.intersectTriangle(Bs,es,ks,!1,Qn);if(a===null&&(Vs(es.set(-.5,.5,0),Tn,o,bn,n,r),qr.set(0,1),a=t.ray.intersectTriangle(Bs,ks,es,!1,Qn),a===null))return;const l=t.ray.origin.distanceTo(Qn);l<t.near||l>t.far||e.push({distance:l,point:Qn.clone(),uv:Ke.getInterpolation(Qn,Bs,es,ks,Tl,qr,El,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vs(s,t,e,i,n,r){En.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ts.x=r*En.x-n*En.y,ts.y=n*En.x+r*En.y):ts.copy(En),s.copy(t),s.x+=ts.x,s.y+=ts.y,s.applyMatrix4(Tc)}class Om extends Ne{constructor(t=null,e=1,i=1,n,r,o,a,l,c=Xe,h=Xe,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends ke{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const An=new te,Cl=new te,Hs=[],Rl=new on,Fm=new te,is=new B,ns=new an;class ji extends B{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Fm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new on),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,An),Rl.copy(t.boundingBox).applyMatrix4(An),this.boundingBox.union(Rl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,An),ns.copy(t.boundingSphere).applyMatrix4(An),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,An),Cl.multiplyMatrices(i,An),is.matrixWorld=Cl,is.raycast(t,Hs);for(let o=0,a=Hs.length;o<a;o++){const l=Hs[o];l.instanceId=r,l.object=this,e.push(l)}Hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Om(new Float32Array(n*this.count),n,this.count,Qo,ci));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ec extends Vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const or=new E,ar=new E,Pl=new te,ss=new dr,Gs=new an,Yr=new E,Ll=new E;class zm extends _e{constructor(t=new ve,e=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)or.fromBufferAttribute(e,n-1),ar.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=or.distanceTo(ar);t.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(n),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;Pl.copy(n).invert(),ss.copy(t.ray).applyMatrix4(Pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),S=Ws(this,t,ss,l,p,x);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Ws(this,t,ss,l,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=Ws(this,t,ss,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ws(this,t,ss,l,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ws(s,t,e,i,n,r){const o=s.geometry.attributes.position;if(or.fromBufferAttribute(o,n),ar.fromBufferAttribute(o,r),e.distanceSqToSegment(or,ar,Yr,Ll)>i)return;Yr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Yr);if(!(l<t.near||l>t.far))return{distance:l,point:Ll.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}class la extends Vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dl=new te,Xo=new dr,Xs=new an,qs=new E;class Ac extends _e{constructor(t=new ve,e=new la){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(n),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Dl.copy(n).invert(),Xo.copy(t.ray).applyMatrix4(Dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);qs.fromBufferAttribute(u,g),Il(qs,g,l,n,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)qs.fromBufferAttribute(u,m),Il(qs,m,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Il(s,t,e,i,n,r,o){const a=Xo.distanceSqToPoint(s);if(a<e){const l=new E;Xo.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cc extends Ne{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new st:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new E,n=[],r=[],o=[],a=new E,l=new te;for(let f=0;f<=t;f++){const m=f/t;n[f]=this.getTangentAt(m,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Re(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Re(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],f*m)),o[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ca extends ui{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bm extends ca{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ha(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const Ys=new E,$r=new ha,jr=new ha,Zr=new ha;class km extends ui{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new E){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Ys.subVectors(n[0],n[1]).add(n[0]),c=Ys);const u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Ys.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),$r.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),jr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),Zr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&($r.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),jr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Zr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set($r.calc(l),jr.calc(l),Zr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new E().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ul(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Vm(s,t){const e=1-s;return e*e*t}function Hm(s,t){return 2*(1-s)*s*t}function Gm(s,t){return s*s*t}function hs(s,t,e,i){return Vm(s,t)+Hm(s,e)+Gm(s,i)}function Wm(s,t){const e=1-s;return e*e*e*t}function Xm(s,t){const e=1-s;return 3*e*e*s*t}function qm(s,t){return 3*(1-s)*s*s*t}function Ym(s,t){return s*s*s*t}function us(s,t,e,i,n){return Wm(s,t)+Xm(s,e)+qm(s,i)+Ym(s,n)}class Rc extends ui{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(us(t,n.x,r.x,o.x,a.x),us(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $m extends ui{constructor(t=new E,e=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new E){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(us(t,n.x,r.x,o.x,a.x),us(t,n.y,r.y,o.y,a.y),us(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pc extends ui{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jm extends ui{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lc extends ui{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(hs(t,n.x,r.x,o.x),hs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends ui{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(hs(t,n.x,r.x,o.x),hs(t,n.y,r.y,o.y),hs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dc extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Ul(a,l.x,c.x,h.x,u.x),Ul(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new st().fromArray(n))}return this}}var Nl=Object.freeze({__proto__:null,ArcCurve:Bm,CatmullRomCurve3:km,CubicBezierCurve:Rc,CubicBezierCurve3:$m,EllipseCurve:ca,LineCurve:Pc,LineCurve3:jm,QuadraticBezierCurve:Lc,QuadraticBezierCurve3:Zm,SplineCurve:Dc});class Km extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Nl[n.type]().fromJSON(n))}return this}}class Jm extends Km{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Pc(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Lc(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new Rc(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Dc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new ca(t,e,i,n,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ua extends ve{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Re(n,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new E,d=new st,f=new E,m=new E,_=new E;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=e;x++){const S=i+x*h*n,v=Math.sin(S),R=Math.cos(S);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),a.push(d.x,d.y);const A=l[3*T+0]*v,P=l[3*T+1],w=l[3*T+0]*R;c.push(A,P,w)}}for(let x=0;x<e;x++)for(let S=0;S<t.length-1;S++){const v=S+x*t.length,R=v,T=v+t.length,A=v+t.length+1,P=v+1;r.push(R,T,P),r.push(A,P,T)}this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("uv",new Vt(a,2)),this.setAttribute("normal",new Vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.points,t.segments,t.phiStart,t.phiLength)}}class Ui extends ua{constructor(t=1,e=1,i=4,n=8){const r=new Jm;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new Ui(t.radius,t.length,t.capSegments,t.radialSegments)}}class da extends ve{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new E,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends ve{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;x(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function x(){const v=new E,R=new E;let T=0;const A=(e-t)/i;for(let P=0;P<=r;P++){const w=[],M=P/r,L=M*(e-t)+t;for(let O=0;O<=n;O++){const F=O/n,Y=F*l+a,W=Math.sin(Y),H=Math.cos(Y);R.x=L*W,R.y=-M*i+g,R.z=L*H,u.push(R.x,R.y,R.z),v.set(W,A,H).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-M),w.push(m++)}_.push(w)}for(let P=0;P<n;P++)for(let w=0;w<r;w++){const M=_[w][P],L=_[w+1][P],O=_[w+1][P+1],F=_[w][P+1];(t>0||w!==0)&&(h.push(M,L,F),T+=3),(e>0||w!==r-1)&&(h.push(L,O,F),T+=3)}c.addGroup(p,T,0),p+=T}function S(v){const R=m,T=new st,A=new E;let P=0;const w=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const L=m;for(let O=0;O<=n;O++){const Y=O/n*l+a,W=Math.cos(Y),H=Math.sin(Y);A.x=w*H,A.y=g*M,A.z=w*W,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=W*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),m++}for(let O=0;O<n;O++){const F=R+O,Y=L+O;v===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ps extends me{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ps(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa extends ve{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const S=new E,v=new E,R=new E;for(let T=0;T<e.length;T+=3)f(e[T+0],S),f(e[T+1],v),f(e[T+2],R),l(S,v,R,x)}function l(x,S,v,R){const T=R+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const w=x.clone().lerp(v,P/T),M=S.clone().lerp(v,P/T),L=T-P;for(let O=0;O<=L;O++)O===0&&P===T?A[P][O]=w:A[P][O]=w.clone().lerp(M,O/L)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function c(x){const S=new E;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(x),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const x=new E;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const v=g(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(v,1-R)}m(),u()}function u(){for(let x=0;x<o.length;x+=6){const S=o[x+0],v=o[x+2],R=o[x+4],T=Math.max(S,v,R),A=Math.min(S,v,R);T>.9&&A<.1&&(S<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,S){const v=x*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function m(){const x=new E,S=new E,v=new E,R=new E,T=new st,A=new st,P=new st;for(let w=0,M=0;w<r.length;w+=9,M+=6){x.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(x).add(S).add(v).divideScalar(3);const L=g(R);_(T,M+0,x,L),_(A,M+2,S,L),_(P,M+4,v,L)}}function _(x,S,v,R){R<0&&x.x===1&&(o[S]=x.x-1),v.x===0&&v.z===0&&(o[S]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.vertices,t.indices,t.radius,t.details)}}class pa extends fa{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pa(t.radius,t.detail)}}class lr extends ve{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/n,f=new E,m=new st;for(let _=0;_<=n;_++){for(let g=0;g<=i;g++){const p=r+g/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<n;_++){const g=_*(i+1);for(let p=0;p<i;p++){const x=p+g,S=x,v=x+i+1,R=x+i+2,T=x+1;a.push(S,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ce extends ve{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const x=[],S=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(n+T*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(n+T*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+v,1-S),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const S=h[p][x+1],v=h[p][x],R=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&f.push(S,v,T),(p!==i-1||l<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ma extends ve{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=i;f++)for(let m=0;m<=n;m++){const _=m/n*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=n;m++){const _=(n+1)*f+m-1,g=(n+1)*(f-1)+m-1,p=(n+1)*(f-1)+m,x=(n+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qm extends Pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class gt extends Vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ga extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class t0 extends ga{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new te,Ol=new E,Fl=new E;class e0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ol),Fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fl),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class i0 extends e0{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jr extends ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new i0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class n0 extends ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ic{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zl(){return performance.now()}const Bl=new te;class Qr{constructor(t,e,i=0,n=1/0){this.ray=new dr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bl),this}intersectObject(t,e=!0,i=[]){return qo(t,this,i,e),i.sort(kl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)qo(t[n],this,i,e);return i.sort(kl),i}}function kl(s,t){return s.distance-t.distance}function qo(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)qo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);const Uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const s0=new ra(-1,1,1,-1,0,1);class r0 extends ve{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const o0=new r0;class _a{constructor(t){this._mesh=new B(o0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,s0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class a0 extends qn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fs.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _a(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vl extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class l0 extends qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class c0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new a0(Uc),this.copyPass.material.blending=yi,this.clock=new Ic}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vl!==void 0&&(o instanceof Vl?i=!0:o instanceof l0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class h0 extends qn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}}const u0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hn extends qn{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(r,o,{type:Si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new si(r,o,{type:Si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new si(r,o,{type:Si});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=u0;this.highPassUniforms=fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Uc;this.copyUniforms=fs.clone(h.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new _a(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Hn.BlurDirectionX=new st(1,0);Hn.BlurDirectionY=new st(0,1);const d0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class f0 extends qn{constructor(){super();const t=d0;this.uniforms=fs.clone(t.uniforms),this.material=new Qm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _a(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Hl(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ve;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Gl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const m=Gl(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Gl(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ke(o,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}const se={roads:[-200,-100,0,100,200],roadWidth:18};function It(s,t,e){return s<t?t:s>e?e:s}function p0(s,t,e){return s+(t-s)*e}function ue(s,t,e,i){return p0(s,t,1-Math.exp(-e*i))}function q(s=0,t=1){return s+Math.random()*(t-s)}function Nn(s,t){return Math.floor(q(s,t+1))}function Kt(s){return s[Math.floor(Math.random()*s.length)]}function re(s){return Math.random()<s}function m0(s,t){const e=s.x-t.x,i=s.z-t.z;return e*e+i*i}function Ue(s,t){return Math.sqrt(m0(s,t))}function Yo(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function sn(s,t,e,i){return s+Yo(s,t)*(1-Math.exp(-e*i))}function Pn(s){return"$"+Math.floor(s).toLocaleString("en-US")}function to(s){const t=Math.floor(Math.max(0,s)/60),e=Math.floor(Math.max(0,s)%60);return`${t}:${String(e).padStart(2,"0")}`}function ki(s,t,e,i={}){const n=document.createElement("canvas");n.width=s,n.height=t;const r=n.getContext("2d");e(r,s,t);const o=new Cc(n);return o.colorSpace=ze,i.repeat&&(o.wrapS=o.wrapT=ir),o.anisotropy=4,o}function zi(s="#ffffff",t=.35){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,s),n.addColorStop(t,s),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,128,128);const r=new Cc(e);return r.colorSpace=ze,r}function Zi(s,t,e,i,n=512,r=128){return ki(n,r,(o,a,l)=>{o.fillStyle=i,o.fillRect(0,0,a,l),o.strokeStyle=e,o.lineWidth=6,o.strokeRect(9,9,a-18,l-18),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle",o.font=`bold ${Math.floor(l*.46)}px "Arial Black", Impact, sans-serif`,o.shadowColor=e,o.shadowBlur=22,o.fillText(s,a/2,l*(t?.42:.5)),t&&(o.shadowBlur=10,o.font=`bold ${Math.floor(l*.12)}px "Courier New", monospace`,o.fillText(t,a/2,l*.79))})}function g0(s){const t=[["#1a1c2e","#ffd58a","#ffe9c4","#6d6f9a"],["#24202f","#8ff6ff","#d3fbff","#ea6ac4"],["#2a1d2c","#ffb36b","#ffe0a8","#ff679d"],["#191e2c","#a8c8ff","#e4efff","#7d66ff"]],e=t[s%t.length];return ki(256,512,(i,n,r)=>{i.fillStyle=e[0],i.fillRect(0,0,n,r),i.fillStyle="rgba(255,255,255,0.025)";for(let d=0;d<8;d++)i.fillRect(0,d*64,n,2);const o=6,a=12,l=16,c=16,h=(n-l*2)/o,u=(r-c*2)/a;for(let d=0;d<a;d++)for(let f=0;f<o;f++){const m=Math.random()>.43,_=l+f*h+4,g=c+d*u+5;i.fillStyle=m?Math.random()>.5?e[1]:e[2]:"#0b0b12",i.globalAlpha=m?.55+Math.random()*.45:.85,i.fillRect(_,g,h-8,u-10),m&&Math.random()>.66&&(i.fillStyle=e[3],i.globalAlpha=.45,i.fillRect(_,g,h-8,(u-10)*Math.random())),i.globalAlpha=1,i.fillStyle="rgba(0,0,0,0.32)",i.fillRect(_-2,g+u-10,h-4,2)}i.fillStyle=e[3],i.globalAlpha=.2,i.fillRect(n*.42,0,10,r),i.globalAlpha=1},{repeat:!0})}function _0(s){const t=[["#000000","#ffd58a","#ffe9c4"],["#000000","#8ff6ff","#d3fbff"],["#000000","#ffb36b","#ffe0a8"],["#000000","#a8c8ff","#e4efff"]],e=t[s%t.length];return ki(256,512,(i,n,r)=>{i.fillStyle="#000",i.fillRect(0,0,n,r);const o=6,a=12,l=16,c=16,h=(n-l*2)/o,u=(r-c*2)/a;for(let d=0;d<a;d++)for(let f=0;f<o;f++)Math.random()>.5&&(i.fillStyle=Math.random()>.5?e[1]:e[2],i.globalAlpha=.5+Math.random()*.5,i.fillRect(l+f*h+4,c+d*u+5,h-8,u-10))},{repeat:!0})}function eo(){return ki(256,256,(s,t,e)=>{s.fillStyle="#22222a",s.fillRect(0,0,t,e);for(let i=0;i<5e3;i++){const n=Math.random()*40+20;s.fillStyle=`rgba(${n},${n},${n+4},${Math.random()*.5})`,s.fillRect(Math.random()*t,Math.random()*e,1.4,1.4)}s.strokeStyle="rgba(0,0,0,.25)",s.lineWidth=1;for(let i=0;i<6;i++){s.beginPath();let n=Math.random()*t,r=Math.random()*e;s.moveTo(n,r);for(let o=0;o<5;o++)n+=(Math.random()-.5)*26,r+=Math.random()*22,s.lineTo(n,r);s.stroke()}},{repeat:!0})}function v0(){return ki(256,256,(s,t,e)=>{s.fillStyle="#c8a97b",s.fillRect(0,0,t,e);for(let i=0;i<7e3;i++){const n=Math.random();s.fillStyle=n>.5?`rgba(255,238,200,${Math.random()*.25})`:`rgba(90,65,40,${Math.random()*.22})`,s.fillRect(Math.random()*t,Math.random()*e,1.7,1.7)}for(let i=0;i<24;i++){s.strokeStyle=`rgba(120,95,60,${Math.random()*.16})`,s.lineWidth=1+Math.random()*2,s.beginPath();const n=Math.random()*e;s.moveTo(0,n),s.bezierCurveTo(t*.3,n+q(-9,9),t*.7,n+q(-9,9),t,n+q(-6,6)),s.stroke()}},{repeat:!0})}function io(s="#b7afa3"){return ki(256,256,(t,e,i)=>{t.fillStyle=s,t.fillRect(0,0,e,i);for(let n=0;n<2600;n++){const r=Math.random()>.5?255:0;t.fillStyle=`rgba(${r},${r},${r},${Math.random()*.06})`,t.fillRect(Math.random()*e,Math.random()*i,2,2)}t.strokeStyle="rgba(0,0,0,.08)",t.lineWidth=2;for(let n=0;n<8;n++)t.beginPath(),t.moveTo(n*32,0),t.lineTo(n*32,i),t.moveTo(0,n*32),t.lineTo(e,n*32),t.stroke()},{repeat:!0})}const Dt=.14;class x0{constructor(t){this.scene=t,this.colliders=[],this.shootables=[],this.blocks=[],this.markers=[],this.root=new Se,t.add(this.root),this.windowMats=[],this.neonMats=[],this.palms=[],this.build()}build(){this.buildGround(),this.buildBlocks(),this.buildRoadMarkings(),this.buildBeach(),this.buildWater(),this.buildPier(),this.buildPalms(),this.buildStreetlights(),this.buildBillboards()}buildGround(){const t=eo();t.repeat.set(28,28);const e=new gt({map:t,color:9408409,roughness:.94,metalness:.02}),i=new B(new he(486,486),e);i.rotation.x=-Math.PI/2,i.position.y=.01,i.receiveShadow=!0,this.root.add(i),this.roadMat=e;const n=io("#a9a196");n.repeat.set(10,10),this.sidewalkMat=new gt({map:n,color:14275270,roughness:.9});const r=new gt({color:7827818,roughness:.8});for(const o of[-150,-50,50,150])for(const a of[-150,-50,50,150]){const l=new B(new ot(84,.3,84),this.sidewalkMat);l.position.set(o,Dt-.15,a),l.receiveShadow=!0,this.root.add(l),this.blocks.push({cx:o,cz:a,size:84});for(const[c,h,u,d]of[[0,-42,84,.5],[0,42,84,.5],[-42,0,.5,84],[42,0,.5,84]]){const f=new B(new ot(u,.34,d),r);f.position.set(o+c,.05,a+h),this.root.add(f)}}}buildRoadMarkings(){const t=[],e=new ot(.25,.02,2.6),i=new ot(2.6,.02,.25),n=new ot(.5,.02,3.2);for(const c of se.roads){for(let h=-232;h<232;h+=6){let u=!1;for(const m of se.roads)Math.abs(h-m)<12&&(u=!0);if(u)continue;const d=e.clone();d.translate(c,.031,h),t.push(d);const f=i.clone();f.translate(h,.032,c),t.push(f)}for(const h of se.roads)for(const u of[-1,1])for(let d=-4;d<=4;d++){const f=n.clone();f.translate(c+d*1.1,.033,h+u*10.5),t.push(f);const m=n.clone();m.rotateY(Math.PI/2),m.translate(h+u*10.5,.034,c+d*1.1),t.push(m)}}const r=Hl(t),o=new gt({color:15131343,roughness:.7,emissive:1578e3,emissiveIntensity:.3}),a=new B(r,o);a.receiveShadow=!0,this.root.add(a);const l=new Pt({color:16723349,transparent:!0,opacity:.17,toneMapped:!1});for(const c of[-1,1]){const h=new B(new ot(.18,.02,400),l);h.position.set(200+c*8.6,.035,0),this.root.add(h)}}buildBlocks(){const t={downtown:{h:[30,78],w:[24,36],palette:["#cfd3e0","#bcc4d8","#d8cfe7","#c4cbd0"],sign:.35},mid:{h:[14,38],w:[24,36],palette:["#d8c3b2","#c8b7c9","#d6cbbd","#c0cfd1"],sign:.3},beach:{h:[13,30],w:[26,37],palette:["#f0d6b8","#efc9c2","#c9e4da","#e8d4ef","#f3e0c4"],sign:.75},industrial:{h:[8,16],w:[30,38],palette:["#a9a49a","#9c9c9a","#b0a598"],sign:.15}};for(const e of this.blocks){const{cx:i,cz:n}=e;let r="mid";const o=240-Math.max(i,n);if(i>100?r="beach":Math.abs(i)<110&&Math.abs(n)<110&&(r="downtown"),i<-100&&n<-100&&(r="industrial"),i===50&&n===-150){this.buildPark(i,n);continue}if(i===-150&&n===-150){this.buildDocks(i,n);continue}if(i===-50&&n===150){this.buildPlaza(i,n);continue}if(i===50&&n===50){this.buildParking(i,n);continue}const a=t[r];for(const l of[-21,21])for(const c of[-21,21]){if(r!=="downtown"&&re(.08))continue;const h=q(a.w[0],a.w[1]),u=q(a.w[0],a.w[1]);let d=q(a.h[0],a.h[1]);r==="downtown"&&(d*=1.3-o/500);const f=i+l+q(-2.2,2.2),m=n+c+q(-2.2,2.2);this.buildBuilding(f,m,h,u,d,Kt(a.palette),r,re(a.sign))}}}buildBuilding(t,e,i,n,r,o,a,l){const c=Nn(0,3),h=g0(c),u=_0(c),d=new at(o),f=new gt({color:d,map:h,emissiveMap:u,emissive:new at(16768942),emissiveIntensity:a==="beach"?1.15:.95,roughness:.52,metalness:a==="downtown"?.35:.08}),m=new gt({color:d.clone().multiplyScalar(.55),roughness:.9});this.windowMats.push(f);const _=new ot(i,r,n),g=_.attributes.uv,p=[[n/16,r/30],[n/16,r/30],[i/16,n/16],[i/16,n/16],[i/16,r/30],[i/16,r/30]];for(let R=0;R<6;R++){const[T,A]=p[R];for(let P=0;P<4;P++){const w=R*4+P;g.setXY(w,g.getX(w)*T,g.getY(w)*A)}}g.needsUpdate=!0;const x=new B(_,[f,f,m,m,f,f]);x.position.set(t,Dt+r/2,e),x.castShadow=r<45,x.receiveShadow=!0,x.userData.type="building",this.root.add(x),this.shootables.push(x),this.colliders.push({minX:t-i/2,maxX:t+i/2,minZ:e-n/2,maxZ:e+n/2,h:r});const S=new B(new ot(i+.7,.9,n+.7),m);S.position.set(t,Dt+r+.4,e),this.root.add(S);const v=Nn(1,3);for(let R=0;R<v;R++){const T=q(2,5),A=q(2,5),P=q(1.1,2.6),w=new B(new ot(T,P,A),new gt({color:9341832,roughness:.85}));w.position.set(t+q(-i/2+4,i/2-4),Dt+r+P/2+.4,e+q(-n/2+4,n/2-4)),this.root.add(w)}if(re(.3)&&r>18){const R=new B(new me(.08,.12,q(5,11),5),new gt({color:8947848,metalness:.8,roughness:.3}));R.position.set(t+q(-i/3,i/3),Dt+r+6,e),this.root.add(R);const T=new B(new Ce(.24,6,6),new Pt({color:16722731,toneMapped:!1}));T.position.copy(R.position),T.position.y+=5.5,this.root.add(T)}if(a==="beach"&&re(.5)){const R=new B(new ot(i*.62,q(2.5,5),n*.62),[f,f,m,m,f,f]);R.position.set(t,Dt+r+2.3,e),this.root.add(R),r+=4}if(re(a==="beach"?.72:.34)){const R=Kt([16723349,2287084,10312703,16756794]),T=new Pt({color:R,toneMapped:!1,transparent:!0,opacity:.95});this.neonMats.push(T);const A=new B(new ot(i+.5,.13,.13),T);A.position.set(t,Dt+r+.15,e+n/2+.26),this.root.add(A);const P=A.clone();if(P.position.z=e-n/2-.26,this.root.add(P),a==="beach")for(const w of[-1,1]){const M=new B(new ot(.16,r*.75,.16),T);M.position.set(t+w*(i/2+.1),Dt+r*.45,e+n/2+.15),this.root.add(M)}}if(re(a==="beach"?.85:.5)){const R=["CAFE","LIQUOR","SURF","PIZZA","TATTOO","RECORDS","BAR","HOTEL","DINER","BODEGA"],A=Kt(["#ff2d95","#22e5ec","#ffd15c","#ff7a5c","#b06bff"]),P=Kt(R),w=Zi(P,re(.5)?"OPEN LATE":null,A,"rgba(9,6,16,0.96)",384,128),M=Math.min(i*.62,9),L=new B(new he(M,M*.33),new Pt({map:w,toneMapped:!1,transparent:!0}));if(L.position.set(t,Dt+2.55,e+n/2+.12),this.root.add(L),re(.6)){const F=new B(new ot(M+.8,.12,1.3),new gt({color:new at(A),roughness:.8}));F.position.set(t,Dt+3.35,e+n/2+.55),F.rotation.x=.15,this.root.add(F)}const O=new B(new he(M*1.2,2.2),new Pt({color:new at(A),transparent:!0,opacity:.1,blending:be,depthWrite:!1,side:ae}));O.position.set(t,Dt+1.2,e+n/2+.05),this.root.add(O),this.neonMats.push(L.material)}if(a==="beach"&&re(.92)){const R=["CAFE","LIQUOR","SURF","PIZZA","TATTOO","RECORDS","BAR","HOTEL","DINER","BODEGA"],A=Kt(["#ff2d95","#22e5ec","#ffd15c","#ff7a5c","#b06bff"]),P=Kt(R),w=Zi(P,re(.6)?"OCEAN DRIVE":null,A,"rgba(9,6,16,0.96)",384,128),M=Math.min(n*.62,9),L=new B(new he(M,M*.33),new Pt({map:w,toneMapped:!1,transparent:!0,side:ae}));L.position.set(t+i/2+.12,Dt+2.55,e),L.rotation.y=Math.PI/2,this.root.add(L);const O=new B(new ot(1.3,.12,M+.8),new gt({color:new at(A),roughness:.8}));O.position.set(t+i/2+.55,Dt+3.35,e),O.rotation.z=-.15,this.root.add(O);const F=new B(new he(M*1.2,2.2),new Pt({color:new at(A),transparent:!0,opacity:.1,blending:be,depthWrite:!1,side:ae}));F.position.set(t+i/2+.05,Dt+1.2,e),F.rotation.y=Math.PI/2,this.root.add(F),this.neonMats.push(L.material)}l?this.addRoofSign(t,e,i,n,r,a):a!=="beach"&&re(.24)&&this.addBladeSign(t,e,i,n,r)}addRoofSign(t,e,i,n,r,o){const a=["FLAMINGO","OCEAN VIEW","MALIBU CLUB","THE COLONY","SUNSET","PALMS","CORAL","VICE","STARLITE","TROPICANA","NEPTUNE","BREAKWATER"],l=["HOTEL · BAR","OCEAN DRIVE","LIVE MUSIC","ROOMS AVAILABLE","EST. 1986","COCKTAILS","OPEN ALL NIGHT"],c=Kt(a),h=Kt(["#ff2d95","#22e5ec","#ffcf5c","#c26bff","#ff6b5c"]),u=Zi(c,Kt(l),h,"rgba(9,7,16,0.92)",512,128),d=new Pt({map:u,toneMapped:!1,transparent:!0,side:ae}),f=Math.min(i*.8,22),m=f*.25,_=new B(new he(f,m),d);if(o==="beach"){_.position.set(t+i/2+.5,Dt+r+2.2,e),_.rotation.y=Math.PI/2,this.root.add(_);const p=new B(new ot(.25,m+1,f+1),new gt({color:1710112,roughness:.7}));p.position.set(t+i/2+.32,_.position.y,e),this.root.add(p);const x=new B(new he(f*1.5,m*3),new Pt({map:zi(h,.12),transparent:!0,blending:be,depthWrite:!1,opacity:.32}));x.position.set(t+i/2+1.2,_.position.y,e),x.rotation.y=Math.PI/2,this.root.add(x)}else{_.position.set(t,Dt+r+2.2,e+n/2+.5),_.rotation.y=0,this.root.add(_);const p=new B(new ot(f+1,m+1,.25),new gt({color:1710112,roughness:.7}));p.position.set(t,_.position.y,e+n/2+.32),this.root.add(p);const x=new B(new he(f*1.5,m*3),new Pt({map:zi(h,.12),transparent:!0,blending:be,depthWrite:!1,opacity:.32}));x.position.set(t,_.position.y,e+n/2+1.2),this.root.add(x)}this.neonMats.push(d)}addBladeSign(t,e,i,n,r){const o=["BAR","HOTEL","CLUB","CAFE","VICE","SURF","TATTOO","LOUNGE","MOTEL","DINER"],a=Kt(["#ff2d95","#22e5ec","#ffcf5c","#ff6b5c","#b06bff"]),l=Kt(o),c=Zi(l,null,a,"rgba(8,6,14,0.95)",320,512),h=new Pt({map:c,toneMapped:!1,side:ae,transparent:!0}),u=new B(new he(2.6,5.4),h);u.position.set(t+i/2+.3,Dt+Math.min(r*.55,13),e+n/3),u.rotation.y=Math.PI/2,this.root.add(u);const d=new B(new ot(3.2,5.9,.22),new gt({color:1512477,roughness:.7}));d.position.set(t+i/2+.18,u.position.y,e+n/3),d.rotation.y=Math.PI/2,this.root.add(d),this.neonMats.push(h)}buildPark(t,e){const i=new B(new ot(70,.2,70),new gt({color:3107646,roughness:1}));i.position.set(t,Dt+.02,e),i.receiveShadow=!0,this.root.add(i);const n=new gt({color:13222060,roughness:.85}),r=new B(new me(7,7.4,1,24),n);r.position.set(t,Dt+.5,e),this.root.add(r);const o=new B(new me(6.4,6.4,.25,24),new gt({color:2537156,emissive:692128,emissiveIntensity:.7,roughness:.2,metalness:.2}));o.position.set(t,Dt+1.02,e),this.root.add(o);const a=new B(new me(.25,.45,4,8),n);a.position.set(t,Dt+2.8,e),this.root.add(a);const l=new B(new Ce(.6,12,12),new Pt({color:8648703,toneMapped:!1}));l.position.set(t,Dt+5,e),this.root.add(l),this.colliders.push({minX:t-7.4,maxX:t+7.4,minZ:e-7.4,maxZ:e+7.4,h:2});const c=new gt({color:13616563,roughness:.9});for(const h of[0,Math.PI/2]){const u=new B(new ot(70,.06,4),c);u.position.set(t,Dt+.15,e),u.rotation.y=h,this.root.add(u)}this.palmSpots=this.palmSpots||[];for(const[h,u]of[[-24,-24],[24,-24],[-24,24],[24,24],[-30,0],[30,0]])this.palmSpots.push([t+h,e+u,q(.8,1.2)]);for(let h=0;h<4;h++)this.addBench(t+q(-28,28),e+q(-28,28))}buildPlaza(t,e){const i=new gt({map:io("#c5b9a8"),color:14932422,roughness:.9}),n=new B(new ot(76,.22,76),i);n.position.set(t,Dt+.01,e),this.root.add(n);const r=new gt({color:14208958,roughness:.8}),o=new B(new ot(9,1.2,9),r);o.position.set(t,Dt+.6,e),this.root.add(o);const a=new B(new me(.8,2.2,15,4),r);a.rotation.y=Math.PI/4,a.position.set(t,Dt+8.5,e),this.root.add(a);const l=new B(new Ce(.9,10,10),new Pt({color:16765276,toneMapped:!1}));l.position.set(t,Dt+16.2,e),this.root.add(l),this.colliders.push({minX:t-4.5,maxX:t+4.5,minZ:e-4.5,maxZ:e+4.5,h:2}),this.palmSpots=this.palmSpots||[];for(const[c,h]of[[-30,-30],[30,-30],[-30,30],[30,30]])this.palmSpots.push([t+c,e+h,1.1]);for(let c=0;c<5;c++)this.addBench(t+q(-30,30),e+q(-30,30))}buildParking(t,e){const i=new gt({map:eo(),color:10132122,roughness:.95}),n=new B(new ot(76,.18,76),i);n.position.set(t,Dt+.01,e),this.root.add(n);const r=new Pt({color:14276032});for(let o=-3;o<=3;o++){const a=new B(new ot(.16,.02,10),r);a.position.set(t+o*9,Dt+.12,e+22),this.root.add(a);const l=a.clone();l.position.z=e-22,this.root.add(l)}for(let o=0;o<3;o++){const a=new B(new ot(3.4,2.2,2.2),new gt({color:Kt([2903356,4995628,3362140]),roughness:.8}));a.position.set(t+q(-28,28),Dt+1.1,e+q(-28,28)),a.rotation.y=q(0,Math.PI),this.root.add(a)}}buildDocks(t,e){const i=new gt({map:eo(),color:9145224,roughness:.95}),n=new B(new ot(80,.18,80),i);n.position.set(t,Dt+.01,e),this.root.add(n);const r=new gt({color:8159871,roughness:.85,metalness:.25}),o=new gt({color:5001294,roughness:.9});for(const[a,l,c,h,u,d]of[[-18,-18,34,22,12,0],[18,18,30,20,10,Math.PI/2],[-16,20,28,18,9,0]]){const f=new B(new ot(c,u,h),r);f.position.set(t+a,Dt+u/2,e+l),f.rotation.y=d,f.castShadow=!0,f.receiveShadow=!0,f.userData.type="building",this.root.add(f),this.shootables.push(f);const m=Math.abs(c*Math.cos(d))+Math.abs(h*Math.sin(d)),_=Math.abs(c*Math.sin(d))+Math.abs(h*Math.cos(d));this.colliders.push({minX:t+a-m/2,maxX:t+a+m/2,minZ:e+l-_/2,maxZ:e+l+_/2,h:u});const g=new B(new ot(c+1,.8,h+1),o);g.position.set(t+a,Dt+u+.3,e+l),g.rotation.y=d,this.root.add(g);const p=new B(new ot(c*.5,u*.7,.2),new gt({color:3817542,metalness:.5,roughness:.6}));p.position.set(t+a,Dt+u*.36,e+l+h/2+.1),p.rotation.y=d,this.root.add(p)}for(let a=0;a<7;a++){const l=new B(new ot(6.2,2.8,2.6),new gt({color:Kt([10238766,3038604,4029002,10189356,7031426]),roughness:.8}));l.position.set(t+q(-32,32),Dt+1.4+(a>4?2.8:0),e+q(-32,32)),l.rotation.y=re(.5)?0:Math.PI/2,this.root.add(l)}this.palmSpots=this.palmSpots||[];for(const[a,l]of[[-36,0],[36,0],[0,-36],[0,36]])this.palmSpots.push([t+a,e+l,.9])}addBench(t,e){const i=new gt({color:6112818,roughness:.9}),n=new gt({color:2829104,roughness:.6,metalness:.6}),r=new B(new ot(3.2,.18,.9),i);r.position.set(t,Dt+.55,e),this.root.add(r);const o=new B(new ot(3.2,.8,.14),i);o.position.set(t,Dt+.95,e-.4),this.root.add(o);for(const a of[-1.3,1.3]){const l=new B(new ot(.12,.55,.8),n);l.position.set(t+a,Dt+.28,e),this.root.add(l)}}buildBeach(){const t=new he(74,486,24,80);t.rotateX(-Math.PI/2);const e=t.attributes.position,i=[];for(let p=0;p<e.count;p++){const x=e.getX(p),S=e.getZ(p),v=240+(x+37),R=.12-Math.max(0,v-242)*.0122+Math.sin(S*.15)*.03;e.setY(p,R);const T=It((v-242)/62,0,1),A=new at().setHSL(.105,.42,.66-T*.1);R<-.5&&A.multiplyScalar(.72),i.push(A.r,A.g,A.b)}t.setAttribute("color",new Vt(i,3)),t.computeVertexNormals();const n=v0();n.repeat.set(14,70);const r=new gt({vertexColors:!0,map:n,roughness:1,metalness:0}),o=new B(t,r);o.receiveShadow=!0,o.position.x=277,this.root.add(o),this.beachMesh=o;const a=io("#c5b9a5");a.repeat.set(4,60);const l=new gt({map:a,color:14734525,roughness:.94}),c=new B(new ot(32,.16,486),l);c.position.set(226,Dt+.01,0),c.receiveShadow=!0,this.root.add(c);const h=new gt({color:12169376,roughness:.9}),u=new B(new ot(1.1,1.1,486),h);u.position.set(242,.4,0),this.root.add(u);const d=new gt({color:9076592,roughness:.6,metalness:.4}),f=new me(.1,.1,1.1,5),m=new ji(f,d,60),_=new _e;for(let p=0;p<60;p++)_.position.set(242,1.1,-240+p*8.1),_.updateMatrix(),m.setMatrixAt(p,_.matrix);this.root.add(m);const g=new B(new ot(.16,.12,486),d);g.position.set(242,1.65,0),this.root.add(g),this.palmSpots=this.palmSpots||[];for(let p=0;p<14;p++){const x=q(-220,220),S=q(250,286),v=Kt([16723349,16765276,2287084,16739164,16777215]),R=new B(new me(.05,.05,2.6,5),new gt({color:14540253}));R.position.set(S,.5,x),this.root.add(R);const T=new B(new ps(1.9,.7,10),new gt({color:v,roughness:.8,side:ae}));T.position.set(S,1.8,x),this.root.add(T);const A=new B(new he(1.1,2.2),new gt({color:v,roughness:.9,side:ae}));A.rotation.x=-Math.PI/2,A.rotation.z=q(0,Math.PI),A.position.set(S+q(-2,2),.28,x+q(-2,2)),this.root.add(A)}for(let p=0;p<18;p++){const x=q(246,274),S=q(-236,236);S>108&&S<180&&x<276||this.palmSpots.push([x,S,q(.7,1.35)])}for(let p=0;p<14;p++)this.palmSpots.push([233,-222+p*34.5,q(.9,1.2)]);for(let p=0;p<9;p++)this.palmSpots.push([210.5,-210+p*52,q(.85,1.1)]);this.palmSpots.push([233,121,1.25],[211,128,1.15],[233,65,1.3],[211,47,1.1]);for(let p=0;p<8;p++)this.palmSpots.push([q(-225,200),q(-225,225),q(.75,1.15)]);this.buildPromenadeDetails(),this.buildFoam()}buildPromenadeDetails(){const t=new gt({color:7294773,roughness:.9}),e=new gt({color:2828848,roughness:.55,metalness:.7}),i=new gt({color:3042110,roughness:.9});for(let c=0;c<17;c++){const h=-225+c*27.5;if(Math.abs(h-142)<12)continue;this.addBench(219,h);const u=new B(new ot(1.4,.9,1.4),t);u.position.set(213.5,.23+.45,h+8),this.root.add(u);const d=new B(new Ce(1.1,8,6),i);d.scale.set(1,.8,1),d.position.set(213.5,.23+1.2,h+8),this.root.add(d);const f=new B(new me(.32,.28,.9,8),e);f.position.set(237,.23+.45,h+14),this.root.add(f)}const n=new Pt({color:16723349,transparent:!0,opacity:.55,toneMapped:!1});for(const c of[210.1,239.9]){const h=new B(new ot(.13,.03,480),n);h.position.set(c,.25,0),this.root.add(h)}const r=new B(new ot(.1,.03,480),new Pt({color:2287084,transparent:!0,opacity:.4,toneMapped:!1}));r.position.set(231,.25,0),this.root.add(r);const o=new gt({color:2302763,metalness:.6,roughness:.4}),a=[16723349,2287084,16765276];for(let c=0;c<32;c++){const h=-230+c*14.4,u=new B(new me(.1,.14,.9,6),o);u.position.set(240.2,.23+.45,h),this.root.add(u);const d=new B(new Ce(.16,6,6),new Pt({color:a[c%3],toneMapped:!1}));d.position.set(240.2,.23+.95,h),this.root.add(d)}const l=[[228,78,0,16723349,"SURF SHACK"],[228,-44,Math.PI,2287084,"COLD DRINKS"],[228,202,0,16765276,"TATTOO"]];for(const[c,h,u,d,f]of l){const m=new Se,_=new B(new ot(5.4,3,4),new gt({color:15787215,roughness:.85}));_.position.y=1.5,m.add(_);const g=new B(new ot(6.4,.3,5),new gt({color:2826803,roughness:.7}));g.position.y=3.1,m.add(g);const p=new B(new ot(6,.16,1.4),new gt({color:d,roughness:.75}));p.position.set(0,2.7,2.5),p.rotation.x=.12,m.add(p);const x=Zi(f,null,"#"+d.toString(16).padStart(6,"0"),"rgba(8,6,14,0.94)",384,96),S=new B(new he(4.6,1.1),new Pt({map:x,toneMapped:!1,transparent:!0,side:ae}));S.position.set(0,3.55,2.02),m.add(S),this.neonMats.push(S.material);const v=new B(new he(3.4,1.25),new Pt({color:2759707,transparent:!0,opacity:.9,toneMapped:!1}));v.position.set(0,1.55,2.02),m.add(v);const R=new B(new he(3,.9),new Pt({color:16761466,transparent:!0,opacity:.5,toneMapped:!1}));R.position.set(0,1.55,2.035),m.add(R);const T=new B(new he(1.1,1.5),new Pt({color:1774368}));T.position.set(2.1,1.4,2.02),m.add(T),m.position.set(c,.23,h),m.rotation.y=u,this.root.add(m),this.colliders.push({minX:c-3.2,maxX:c+3.2,minZ:h-2.4,maxZ:h+2.4,h:3.2})}for(const[c,h]of[[268,116],[268,-22],[268,-170]]){const u=new Se,d=new gt({color:9073494,roughness:.9});for(const[g,p]of[[-1.2,-1.2],[1.2,-1.2],[-1.2,1.2],[1.2,1.2]]){const x=new B(new me(.09,.12,3.2,5),d);x.position.set(g,1.6,p),u.add(x)}const f=new B(new ot(3,1.8,3),new gt({color:15785404,roughness:.85}));f.position.y=3.4,u.add(f);const m=new B(new ps(2.6,1.2,4),new gt({color:16723349,roughness:.8}));m.position.y=4.9,m.rotation.y=Math.PI/4,u.add(m);const _=new B(new ot(1.2,.16,4.4),d);_.position.set(0,1.7,3.4),_.rotation.x=-.55,u.add(_),u.position.set(c,.05,h),this.root.add(u)}}buildFoam(){const t=new Pt({color:14220287,transparent:!0,opacity:.38,depthWrite:!1,blending:be,side:ae}),e=new B(new he(3.6,486),t);e.rotation.x=-Math.PI/2,e.position.set(294,-.51,0),this.root.add(e),this.foam=e;const i=new B(new he(8,486),new gt({color:9072716,roughness:.6,transparent:!0,opacity:.55}));i.rotation.x=-Math.PI/2,i.position.set(289,-.34,0),this.root.add(i)}buildWater(){const t=new he(2400,2400,120,120);this.waterUniforms={uTime:{value:0},uDeep:{value:new at(412254)},uShallow:{value:new at(1616568)},uFogColor:{value:new at(3807818)},uFogNear:{value:260},uFogFar:{value:900},uSun:{value:new E(.6,.5,.4)}};const e=new Pe({uniforms:this.waterUniforms,transparent:!0,depthWrite:!0,vertexShader:`
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vWave;
        void main(){
          vec3 p = position;
          float w1 = sin(p.x*0.075 + uTime*0.85) * 0.38;
          float w2 = sin(p.y*0.11 - uTime*0.6) * 0.26;
          float w3 = sin((p.x+p.y)*0.045 + uTime*0.4) * 0.5;
          p.z += (w1 + w2 + w3) * smoothstep(0.0, 400.0, length(position.xy));
          vWave = w1 + w2 + w3;
          vec4 wp = modelMatrix * vec4(p,1.0);
          vWorld = wp.xyz;
          vNormalW = normalize(vec3(cos(p.x*0.075+uTime*0.85)*0.06, 1.0, cos(p.y*0.11-uTime*0.6)*0.05));
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uDeep;
        uniform vec3 uShallow;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform vec3 uSun;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vWave;
        void main(){
          vec3 viewDir = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - max(dot(viewDir, normalize(vNormalW)), 0.0), 2.4);
          float bands = sin(vWorld.x*0.16 + uTime*0.6) * 0.5 + 0.5;
          bands *= sin(vWorld.z*0.14 - uTime*0.45) * 0.5 + 0.5;
          vec3 col = mix(uDeep, uShallow, clamp(fres*1.25 + bands*0.12, 0.0, 1.0));
          vec3 sunDir = normalize(uSun);
          float spec = pow(max(dot(reflect(-sunDir, normalize(vNormalW)), viewDir), 0.0), 80.0);
          col += vec3(1.0, 0.78, 0.5) * spec * 1.5;
          float sparkle = pow(bands, 8.0) * 0.25;
          col += vec3(0.6,0.95,1.0) * sparkle;
          float fogF = smoothstep(uFogNear, uFogFar, length(cameraPosition - vWorld));
          col = mix(col, uFogColor, fogF);
          gl_FragColor = vec4(col, 0.94);
        }
      `}),i=new B(t,e);i.rotation.x=-Math.PI/2,i.position.set(0,-.55,0),i.renderOrder=1,this.root.add(i),this.water=i;for(const[n,r,o]of[[720,-500,1.5],[920,300,1],[-760,500,1.3],[350,800,.8]]){const a=new B(new Ce(60*o,16,10),new gt({color:1849902,roughness:1}));a.scale.set(1.6,.18,1),a.position.set(n,-4,r),this.root.add(a)}}buildPier(){const t=new gt({color:7031346,roughness:.9}),e=new B(new ot(80,.7,16),t);e.position.set(342,.3,64),e.receiveShadow=!0,this.root.add(e),this.pier={minX:302,maxX:382,minZ:56,maxZ:72};for(let a=0;a<=20;a++)for(const l of[-1,1]){const c=new B(new me(.32,.4,6,6),t);c.position.set(302+a*4,-2.2,64+l*7),this.root.add(c)}const i=new gt({color:1322e4,metalness:.4,roughness:.5});for(const a of[-1,1]){const l=new B(new ot(80,.18,.18),i);l.position.set(342,1.7,64+a*7.6),this.root.add(l);for(let c=0;c<=20;c++){const h=new B(new me(.08,.08,1.3,5),i);h.position.set(302+c*4,1.1,64+a*7.6),this.root.add(h)}}const n=new Pt({color:16767392,toneMapped:!1});for(let a=0;a<5;a++)for(const l of[-1,1]){const c=new B(new me(.08,.1,4.6,5),i);c.position.set(310+a*16,2.6,64+l*7.2),this.root.add(c);const h=new B(new Ce(.28,8,8),n);h.position.copy(c.position),h.position.y+=2.4,this.root.add(h)}const r=Zi("VICE POINT PIER","OPEN 24 HOURS","#ff2d95","rgba(8,6,14,0.9)",512,128),o=new B(new he(16,4),new Pt({map:r,toneMapped:!1,side:ae}));o.position.set(300,4.6,64),o.rotation.y=Math.PI/2,this.root.add(o),this.neonMats.push(o.material)}buildPalms(){const t=[],e=new at(8018492),i=new at(4164173),n=new at(5744734);let r=0;for(let u=0;u<5;u++){const d=new me(.22-u*.018,.28-u*.018,1.9,6);d.translate(.12*u*u*.16,r+.9,.03*u);const f=[];for(let m=0;m<d.attributes.position.count;m++)f.push(e.r,e.g,e.b);d.setAttribute("color",new Vt(f,3)),t.push(d),r+=1.75}for(let u=0;u<10;u++){const d=u/10*Math.PI*2+.2,f=6,m=q(4.2,5.1),_=[],g=[],p=[],x=[],S=u%2?i:n;for(let R=0;R<=f;R++){const T=R/f,A=T*m,P=.42*(1-Math.pow(T,1.4))*(.55+.45*Math.sin(T*Math.PI)),w=Math.sin(T*Math.PI*.9)*.35-T*T*1.75,M=-P-T*.15,L=P-T*.15;_.push(M,w,A,L,w,A),x.push(0,T,1,T),g.push(S.r*(.8+T*.25),S.g*(.8+T*.25),S.b*(.8+T*.25)),g.push(S.r*(.8+T*.25),S.g*(.8+T*.25),S.b*(.8+T*.25))}for(let R=0;R<f;R++){const T=R*2,A=R*2+1,P=(R+1)*2,w=(R+1)*2+1;p.push(T,P,A,A,P,w)}const v=new ve;v.setAttribute("position",new Vt(_,3)),v.setAttribute("color",new Vt(g,3)),v.setAttribute("uv",new Vt(x,2)),v.setIndex(p),v.computeVertexNormals(),v.rotateY(d),v.translate(.25,r-.55,.15),t.push(v)}for(let u=0;u<3;u++){const d=new Ce(.16,6,5);d.translate(Math.cos(u*2.1)*.28,r-.5,Math.sin(u*2.1)*.28);const f=[];for(let m=0;m<d.attributes.position.count;m++)f.push(.23,.16,.08);d.setAttribute("color",new Vt(f,3)),t.push(d)}const o=Hl(t),a=new gt({vertexColors:!0,roughness:.85,flatShading:!0,side:ae,emissive:797206,emissiveIntensity:.55}),l=this.palmSpots||[],c=new ji(o,a,l.length);c.castShadow=!0;const h=new _e;for(let u=0;u<l.length;u++){const[d,f,m]=l[u];h.position.set(d,Dt+.02,f),h.rotation.y=q(0,Math.PI*2),h.scale.setScalar(m),h.updateMatrix(),c.setMatrixAt(u,h.matrix)}this.root.add(c)}buildStreetlights(){const t=[];for(const m of se.roads)for(let _=-220;_<=220;_+=30)t.push([m+10.8,_]),t.push([_,m+10.8]);const e=new gt({color:2828848,roughness:.55,metalness:.7}),i=new me(.09,.14,6.2,6),n=new ot(1.8,.08,.08),r=new ot(1.2,.18,.5),o=new Pt({color:16768168,toneMapped:!1}),a=new ji(i,e,t.length),l=new ji(r,e,t.length),c=new ji(new Ce(.18,6,6),o,t.length),h=new ji(n,e,t.length),u=new _e;for(let m=0;m<t.length;m++){const[_,g]=t[m],x=Math.abs(_-se.roads.reduce((S,v)=>Math.abs(v-_)<Math.abs(S-_)?v:S))<1?1:-1;u.position.set(_,Dt+3.1,g),u.rotation.set(0,0,0),u.scale.setScalar(1),u.updateMatrix(),a.setMatrixAt(m,u.matrix),u.position.set(_+x*.85,Dt+6.15,g),u.updateMatrix(),h.setMatrixAt(m,u.matrix),u.position.set(_+x*1.65,Dt+6.08,g),u.updateMatrix(),l.setMatrixAt(m,u.matrix),u.position.set(_+x*1.65,Dt+5.95,g),u.updateMatrix(),c.setMatrixAt(m,u.matrix)}this.root.add(a,h,l,c),this.streetBulbMat=o;const d=new Pt({map:zi("#ffc98a",.05),transparent:!0,opacity:.28,blending:be,depthWrite:!1,side:ae}),f=new ji(new he(9,9),d,t.length);for(let m=0;m<t.length;m++){const[_,g]=t[m],x=Math.abs(_-se.roads.reduce((S,v)=>Math.abs(v-_)<Math.abs(S-_)?v:S))<1?1:-1;u.position.set(_+x*1.65,.31,g),u.rotation.set(-Math.PI/2,0,0),u.scale.setScalar(1),u.updateMatrix(),f.setMatrixAt(m,u.matrix)}this.root.add(f)}buildBillboards(){const t=[[-92,16,-92,0,"VICE","CITY 1986","#ff2d95"],[-92,20,-48,Math.PI/2,"WAVE","103.7 FM","#22e5ec"],[108,15,108,-Math.PI/2,"OCEAN","DRIVE","#ffcf5c"],[-48,18,-92,0,"NEON","NIGHTS","#c26bff"],[108,13,-8,-Math.PI/2,"SUNSET","STRIP","#ff6b5c"]];for(const[e,i,n,r,o,a,l]of t){const c=Zi(o,a,l,"rgba(6,4,12,0.94)",640,220),h=new B(new he(18,6.2),new Pt({map:c,toneMapped:!1,side:ae})),u=Math.sin(r),d=Math.cos(r);h.position.set(e+u*.26,i,n+d*.26),h.rotation.y=r,this.root.add(h);const f=new B(new ot(19,7.2,.4),new gt({color:1315354,roughness:.8}));f.position.set(e,i,n),f.rotation.y=r,this.root.add(f);for(const m of[-6,6]){const _=new B(new me(.16,.2,i,5),new gt({color:3355448,metalness:.6,roughness:.5}));_.position.set(e+Math.cos(r)*m,i/2,n-Math.sin(r)*m),this.root.add(_)}this.neonMats.push(h.material)}}groundHeight(t,e){if(t>209.5)return t<=242?.23:this.pier&&t>302&&t<382&&e>56&&e<72?.68:t>302?-1.05:.12-Math.max(0,t-242)*.0122;const i=n=>{for(let r=0;r<se.roads.length-1;r++)if(n>se.roads[r]+se.roadWidth/2&&n<se.roads[r+1]-se.roadWidth/2)return!0;return!1};return i(t)&&i(e)?Dt:0}districtAt(t,e){return t>200?"OCEAN BEACH":t<-100&&e<-100?"VICE DOCKS":e<-100?"NORTH POINT":Math.abs(t)<110&&Math.abs(e)<110?"DOWNTOWN":e>100&&t<100?"SOUTH BEACH":t<-100?"WEST HEIGHTS":"OCEAN DRIVE"}collide(t,e,i=!1){let n=!1;for(const o of this.colliders){const a=It(t.x,o.minX,o.maxX),l=It(t.z,o.minZ,o.maxZ);let c=t.x-a,h=t.z-l,u=c*c+h*h;if(u<e*e){n=!0;let d=Math.sqrt(u);if(d<1e-4){const f=t.x-o.minX,m=o.maxX-t.x,_=t.z-o.minZ,g=o.maxZ-t.z,p=Math.min(f,m,_,g);p===f?t.x=o.minX-e:p===m?t.x=o.maxX+e:p===_?t.z=o.minZ-e:t.z=o.maxZ+e}else{const f=e-d+.001;t.x+=c/d*f,t.z+=h/d*f}}}const r=232;return t.x<-r&&(t.x=-r,n=!0),t.z<-r&&(t.z=-r,n=!0),t.z>r&&(t.z=r,n=!0),t.x>293&&(t.x=293,n=!0),n}update(t,e){this.waterUniforms&&(this.waterUniforms.uTime.value=e),this.streetBulbMat&&this.streetBulbMat.color.setHex(e%7>.15?16768168:16774365)}}const va=[13208939,14723973,9264191,1578e4,7029294,14458746],Nc=[16744118,5231045,16765286,16052702,10182117,16739179,3835647,15902298,12120806],Oc=[2829634,6049084,1779259,14211288,4014171,2368547];function Ii(s,t=.8,e=.05){return new gt({color:s,roughness:t,metalness:e})}function xa({shirt:s,pants:t,skin:e,hair:i=2103314,shades:n=!1,cap:r=null,shoes:o=1710618,tie:a=null}={}){s=s??Kt(Nc),t=t??Kt(Oc),e=e??Kt(va);const l=new Se,c=new Se;l.add(c);const h=Ii(e,.75),u=Ii(s,.78),d=Ii(t,.85),f=Ii(o,.5,.1),m=new B(new Ui(.26,.44,4,10),u);m.position.y=1.19,m.scale.set(1.08,1,.72),m.castShadow=!0,c.add(m);const _=new B(new Ui(.23,.16,4,10),u);_.position.y=.96,_.scale.set(1.05,1,.75),c.add(_);const g=new B(new me(.075,.09,.13,8),h);g.position.y=1.52,c.add(g);const p=new Se;p.position.y=1.65,c.add(p);const x=new B(new Ce(.185,14,12),h);x.scale.set(.9,1.08,.95),x.castShadow=!0,p.add(x);const S=new B(new ps(.038,.1,5),h);S.rotation.x=Math.PI/2,S.position.set(0,-.01,.18),p.add(S);const v=Ii(i,.95),R=new B(new Ce(.192,12,8,0,Math.PI*2,0,Math.PI*.58),v);if(R.position.y=.015,R.scale.set(.93,1.06,.98),p.add(R),r){const tt=Ii(r,.8),lt=new B(new Ce(.2,12,8,0,Math.PI*2,0,Math.PI*.5),tt);lt.position.y=.055,p.add(lt);const xt=new B(new ot(.3,.035,.19),tt);xt.position.set(0,.06,.17),p.add(xt)}if(n){const tt=new B(new ot(.26,.075,.04),new gt({color:723730,metalness:.7,roughness:.15}));tt.position.set(0,.035,.175),p.add(tt);const lt=new B(new ot(.06,.02,.03),Ii(723730,.2,.8));lt.position.set(0,.07,.18),p.add(lt)}if(a){const tt=new B(new ot(.07,.32,.03),Ii(a,.5));tt.position.set(0,1.22,.19),c.add(tt)}const T=new Se;T.position.set(-.34,1.4,0),c.add(T);const A=new B(new Ui(.072,.34,3,8),u);A.position.y=-.2,A.castShadow=!0,T.add(A);const P=new B(new Ce(.075,8,6),h);P.position.y=-.44,T.add(P);const w=new Se;w.position.set(.34,1.4,0),c.add(w);const M=new B(new Ui(.072,.34,3,8),u);M.position.y=-.2,M.castShadow=!0,w.add(M);const L=new B(new Ce(.075,8,6),h);L.position.y=-.44,w.add(L);const O=new Se;O.position.set(-.14,.92,0),c.add(O);const F=new B(new Ui(.098,.55,3,8),d);F.position.y=-.34,F.castShadow=!0,O.add(F);const Y=new B(new ot(.16,.1,.3),f);Y.position.set(0,-.88,.05),O.add(Y);const W=new Se;W.position.set(.14,.92,0),c.add(W);const H=new B(new Ui(.098,.55,3,8),d);H.position.y=-.34,H.castShadow=!0,W.add(H);const $=new B(new ot(.16,.1,.3),f);$.position.set(0,-.88,.05),W.add($);const G=[];return l.traverse(tt=>{tt.isMesh&&(tt.userData.human=l,G.push(tt))}),{group:l,body:c,head:p,armL:T,armR:w,legL:O,legR:W,torso:m,allMeshes:G,handR:L}}function Ma(s,t,e,i={}){const n=e>.25,r=It(e/7,0,1.2),o=t*(4.2+e*.85);i.aim?(s.armR.rotation.x=ue(s.armR.rotation.x,-1.45,12,.016),s.armR.rotation.z=ue(s.armR.rotation.z,.12,12,.016),s.armL.rotation.x=ue(s.armL.rotation.x,-.3,10,.016)):n?(s.armL.rotation.x=ue(s.armL.rotation.x,Math.sin(o)*.75*r,14,.016),s.armR.rotation.x=ue(s.armR.rotation.x,-Math.sin(o)*.75*r,14,.016)):(s.armL.rotation.x=ue(s.armL.rotation.x,Math.sin(t*1.6)*.05,4,.016),s.armR.rotation.x=ue(s.armR.rotation.x,-Math.sin(t*1.6)*.05,4,.016)),s.armL.rotation.z=ue(s.armL.rotation.z,.07,6,.016),s.armR.rotation.z=ue(s.armR.rotation.z,-.07,6,.016),n?(s.legL.rotation.x=Math.sin(o)*.68*r,s.legR.rotation.x=-Math.sin(o)*.68*r,s.body.position.y=Math.abs(Math.sin(o))*.045*r):(s.legL.rotation.x=ue(s.legL.rotation.x,0,8,.016),s.legR.rotation.x=ue(s.legR.rotation.x,0,8,.016),s.body.position.y=ue(s.body.position.y,0,8,.016)),s.body.rotation.z=ue(s.body.rotation.z,n?Math.sin(o)*.025:0,8,.016)}class M0{constructor(t){this.game=t,this.mesh=xa({shirt:15920610,pants:15854297,skin:14262391,hair:1774608,shades:!0,shoes:2826520,tie:1776164}),this.group=this.mesh.group,this.position=new E(215,.23,128),this.velocity=new E,this.heading=Math.PI,this.vy=0,this.onGround=!0,this.health=100,this.maxHealth=100,this.armor=0,this.maxArmor=100,this.radius=.42,this.inVehicle=null,this.weapon={name:"PISTOL",mag:12,reserve:60,maxMag:12,damage:28,rpm:320,auto:!1},this.reloading=0,this.fireCooldown=0,this.speed=0,this.aimTimer=0,this.dead=!1,this.shootAnim=0,this.stepOffset=0,this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.group.userData.actor=this,this.isPlayer=!0,t.scene.add(this.group)}get pos(){return this.position}reset(t){this.position.set(t.x,this.game.city.groundHeight(t.x,t.z),t.z),this.velocity.set(0,0,0),this.health=100,this.armor=0,this.dead=!1,this.mesh.group.rotation.set(0,0,0),this.mesh.body.rotation.set(0,0,0),this.mesh.body.position.y=0,this.mesh.group.visible=!0}update(t){var d,f;if(this.dead)return;if(this.inVehicle){this.updateInVehicle(t);return}const e=this.game.input,i=this.game.cameraYaw;let n=0,r=0;(e.isDown("KeyW")||e.isDown("ArrowUp"))&&(n+=1),(e.isDown("KeyS")||e.isDown("ArrowDown"))&&(n-=1),(e.isDown("KeyD")||e.isDown("ArrowRight"))&&(r+=1),(e.isDown("KeyA")||e.isDown("ArrowLeft"))&&(r-=1);const a=e.isDown("ShiftLeft")||e.isDown("ShiftRight")?9.4:5.4,l=new E(-Math.sin(i)*n+Math.cos(i)*r,0,-Math.cos(i)*n-Math.sin(i)*r),c=l.lengthSq()>.01;c&&l.normalize();const h=c?l.multiplyScalar(a):new E;if(this.velocity.x=ue(this.velocity.x,h.x,c?12:14,t),this.velocity.z=ue(this.velocity.z,h.z,c?12:14,t),this.speed=Math.hypot(this.velocity.x,this.velocity.z),c&&this.speed>.3){const m=Math.atan2(this.velocity.x,this.velocity.z);this.heading=sn(this.heading,m,14,t)}e.consume("Space")&&this.onGround&&(this.vy=6.2,this.onGround=!1,(d=this.game.audio)==null||d.jump()),this.vy-=20*t,this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.position.y+=this.vy*t,this.game.city.collide(this.position,this.radius);const u=this.game.city.groundHeight(this.position.x,this.position.z);this.position.y<=u&&(this.position.y=u,this.vy=0,this.onGround=!0);for(const m of this.game.vehicles){if(m===this.inVehicle||m.destroyed)continue;if(Math.hypot(m.position.x-this.position.x,m.position.z-this.position.z)<2.1&&Math.abs(m.speed)>3){const g=new E(this.position.x-m.position.x,0,this.position.z-m.position.z).normalize();this.position.x+=g.x*.6,this.position.z+=g.z*.6,this.game.player.takeDamage(Math.abs(m.speed)*1.1,m.position,"traffic"),this.vy=3.5}}this.group.position.copy(this.position),this.group.rotation.y=this.heading,e.mouseDown&&this.fireCooldown>0,Ma(this.mesh,this.game.elapsed,this.speed,{aim:this.aimTimer>.15}),this.aimTimer>0&&(this.aimTimer-=t),this.speed>3&&this.onGround&&(this.stepOffset-=this.speed*t,this.stepOffset<0&&(this.stepOffset=2.4,(f=this.game.effects)==null||f.dust(this.position,.5))),this.position.y<-6&&this.reset({x:215,z:128})}updateInVehicle(t){const e=this.inVehicle;this.position.copy(e.position),this.position.y=e.position.y,this.group.visible=!1,this.speed=Math.abs(e.speed)}enterVehicle(t){!t||t.destroyed||(this.inVehicle=t,t.driver="player",t.ai=null,t.speed=Math.max(t.speed,0),this.group.visible=!1,this.game.playerEnteredVehicle(t))}exitVehicle(){const t=this.inVehicle;if(!t)return;const e=new E(Math.cos(t.heading),0,-Math.sin(t.heading)).multiplyScalar(2.1);this.position.set(t.position.x+e.x,t.position.y+.6,t.position.z+e.z),this.game.city.collide(this.position,this.radius),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.inVehicle=null,this.group.visible=!0,this.velocity.set(0,0,0),this.heading=t.heading,t.driver=null,t.speed*=.2,this.game.playerExitedVehicle(t)}takeDamage(t,e,i="unknown"){var r,o,a;if(this.dead)return;let n=t;if(this.armor>0){const l=Math.min(this.armor,n*.65);this.armor-=l,n-=l}this.health=Math.max(0,this.health-n),(o=(r=this.game).onPlayerDamaged)==null||o.call(r,i,e),(a=this.game.audio)==null||a.hurt(),this.health<=0&&this.die()}die(){var t,e;this.dead=!0,this.mesh.body.rotation.z=Math.PI/2,this.mesh.body.position.y=.2,(e=(t=this.game).onPlayerDeath)==null||e.call(t)}respawn(){this.reset({x:215,z:128}),this.health=100,this.armor=0,this.mesh.group.rotation.set(0,this.heading,0),this.mesh.body.rotation.set(0,0,0),this.mesh.body.position.y=0,this.group.visible=!0}}class y0{constructor(t,e){this.game=t,this.mesh=xa({shirt:Kt(Nc),pants:Kt(Oc),skin:Kt(va),hair:Kt([1774608,4008735,1052688,7031594,13215082]),shades:re(.2),cap:re(.18)?Kt([16723349,2287084,2236962,16765276]):null}),this.group=this.mesh.group,this.position=new E(e.x,t.city.groundHeight(e.x,e.z),e.z),this.heading=q(0,Math.PI*2),this.speed=q(1.1,1.8),this.baseSpeed=this.speed,this.state="walk",this.fleeTimer=0,this.target=this.pickTarget(),this.dead=!1,this.health=24,this.radius=.4,this.animT=q(0,10),this.fall=0,this.deathTimer=0,this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.group.userData.actor=this,this.isPed=!0,t.scene.add(this.group)}pickTarget(){const t=this.game.city;if(re(.3))return{x:q(212,234),z:It(this.position.z+q(-40,40),-225,225)};const e=Kt(t.blocks),i=Nn(0,3);let n,r;return i===0?(n=e.cx+q(-38,38),r=e.cz-38):i===1?(n=e.cx+q(-38,38),r=e.cz+38):i===2?(n=e.cx-38,r=e.cz+q(-38,38)):(n=e.cx+38,r=e.cz+q(-38,38)),{x:n,z:r}}alert(t){if(this.dead)return;if(Ue(this.position,t)<45){this.state="flee",this.fleeTimer=q(4,9),this.speed=q(4.5,6.5);const i=this.position.x-t.x,n=this.position.z-t.z,r=Math.hypot(i,n)||1;this.target={x:It(this.position.x+i/r*30,-230,230),z:It(this.position.z+n/r*30,-230,230)}}}hit(t,e){var i,n;this.dead||(this.health-=t,(i=this.game.effects)==null||i.blood(this.position),(n=this.game.audio)==null||n.impact(),this.alert(e||this.position),this.health<=0&&this.kill())}kill(){var t,e,i;this.dead=!0,this.state="dead",(e=(t=this.game).onPedKilled)==null||e.call(t,this),(i=this.game.effects)==null||i.blood(this.position,2.2)}update(t,e){if(this.dead){this.deathTimer+=t,this.fall=Math.min(1,this.fall+t*3.2),this.mesh.body.rotation.x=-this.fall*Math.PI*.48,this.mesh.body.position.y=.12;return}this.fleeTimer>0&&(this.fleeTimer-=t,this.fleeTimer<=0&&(this.state="walk",this.speed=this.baseSpeed,this.target=this.pickTarget())),this.state==="flee"&&this.fleeTimer>0&&re(t*.8)&&(this.target=this.pickTarget());const i=this.target.x-this.position.x,n=this.target.z-this.position.z,r=Math.hypot(i,n);if(r<1.5)this.target=this.pickTarget();else{const a=i/r,l=n/r;this.position.x+=a*this.speed*t,this.position.z+=l*this.speed*t;const c=Math.atan2(a,l);this.heading=sn(this.heading,c,5,t)}this.game.city.collide(this.position,this.radius),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.animT+=t,Ma(this.mesh,this.animT,this.speed,{});const o=Ue(this.position,e);if(o<1.1){const a=Math.max(.01,o);this.position.x+=(this.position.x-e.x)/a*.4,this.position.z+=(this.position.z-e.z)/a*.4}if(Ue(this.position,e)>190){const a=q(0,Math.PI*2),l=q(80,130);this.position.set(It(e.x+Math.cos(a)*l,-220,285),0,It(e.z+Math.sin(a)*l,-220,220)),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.target=this.pickTarget()}}}class S0{constructor(t,e,i={}){this.game=t,this.mesh=xa({shirt:i.shirt??Kt([10165040,2829099,3812178,1985850]),pants:1776420,skin:Kt(va),hair:1183242,shades:!0}),this.group=this.mesh.group,this.position=new E(e.x,t.city.groundHeight(e.x,e.z),e.z),this.heading=i.heading??q(0,Math.PI*2),this.health=i.health??62,this.maxHealth=this.health,this.speed=0,this.dead=!1,this.fall=0,this.deathTimer=0,this.fireTimer=q(.8,2),this.radius=.42,this.animT=q(0,5),this.aiming=!1,this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.group.userData.actor=this,this.isEnemy=!0,t.scene.add(this.group)}hit(t,e){var i,n,r,o,a,l,c;return this.dead?!1:(this.health-=t,(i=this.game.effects)==null||i.blood(this.position),(n=this.game.audio)==null||n.impact(),(o=(r=this.game).hitMarker)==null||o.call(r),this.health<=0&&(this.dead=!0,(a=this.game.effects)==null||a.blood(this.position,2.5),(c=(l=this.game).onEnemyKilled)==null||c.call(l,this)),!0)}update(t,e){var a,l;if(this.dead){this.deathTimer+=t,this.fall=Math.min(1,this.fall+t*3.5),this.mesh.body.rotation.x=-this.fall*Math.PI*.5,this.mesh.body.position.y=.1;return}const i=e.x-this.position.x,n=e.z-this.position.z,r=Math.hypot(i,n),o=Math.atan2(i,n);if(this.heading=sn(this.heading,o,6,t),this.aiming=r<45,r>17){const c=r>42?3.8:2.2;this.position.x+=i/(r||1)*c*t,this.position.z+=n/(r||1)*c*t,this.speed=c}else this.speed=0,this.position.x+=Math.cos(o)*.7*t*Math.sin(this.animT),this.position.z+=-Math.sin(o)*.7*t*Math.sin(this.animT);this.game.city.collide(this.position,this.radius),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.animT+=t,Ma(this.mesh,this.animT,this.speed,{aim:this.aiming}),!this.game.player.dead&&r<40&&((l=(a=this.game).hasLineOfSight)!=null&&l.call(a,this.position,e))?(this.fireTimer-=t,this.fireTimer<=0&&(this.fireTimer=q(1.1,2.2),this.game.enemyShoot(this,e))):this.fireTimer=Math.max(this.fireTimer,.7)}}const rs=new E;function je(s,t,e,i,n,r){const o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;rs.copy(t),rs[i]=0,rs.normalize();const c=.5*o/(o+a),h=1-rs.angleTo(s)/l;return Math.sign(rs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class os extends ot{constructor(t=1,e=1,i=1,n=2,r=.1){if(n=n*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,n,n,n),n===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new E,l=new E,c=new E(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new E,_=.5/n;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=je(m,l,"z","y",r,i),d[p+1]=1-je(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),d[p+0]=1-je(m,l,"z","y",r,i),d[p+1]=1-je(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),d[p+0]=1-je(m,l,"x","z",r,t),d[p+1]=je(m,l,"z","x",r,i);break;case 3:m.set(0,-1,0),d[p+0]=1-je(m,l,"x","z",r,t),d[p+1]=1-je(m,l,"z","x",r,i);break;case 4:m.set(0,0,1),d[p+0]=1-je(m,l,"x","y",r,t),d[p+1]=1-je(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),d[p+0]=je(m,l,"x","y",r,t),d[p+1]=1-je(m,l,"y","x",r,e);break}}}const cr={stinger:{name:"STINGER",length:4.5,width:1.98,bodyH:.42,cabinH:.46,cabinL:1.9,maxSpeed:42,accel:16,color:16765276,sports:!0},infernus:{name:"INFERNUS",length:4.55,width:2.05,bodyH:.38,cabinH:.42,cabinL:1.7,maxSpeed:48,accel:19,color:16723349,sports:!0},cheetah:{name:"CHEETAH",length:4.6,width:2,bodyH:.4,cabinH:.44,cabinL:1.85,maxSpeed:46,accel:18,color:16777215,sports:!0},sedan:{name:"OCEANIC",length:4.4,width:1.92,bodyH:.6,cabinH:.66,cabinL:2.2,maxSpeed:25,accel:9,color:4033492},taxi:{name:"CABBIE",length:4.4,width:1.92,bodyH:.6,cabinH:.68,cabinL:2.25,maxSpeed:26,accel:10,color:16764718},van:{name:"RUMPO",length:5.2,width:2.1,bodyH:1,cabinH:.8,cabinL:2.8,maxSpeed:21,accel:7,color:15262680},pickup:{name:"BOBCAT",length:4.9,width:2,bodyH:.62,cabinH:.62,cabinL:1.8,maxSpeed:26,accel:10,color:9190958},police:{name:"POLICE CRUISER",length:4.5,width:1.98,bodyH:.6,cabinH:.66,cabinL:2.2,maxSpeed:36,accel:15,color:1052696,police:!0}},w0=["sedan","sedan","taxi","van","pickup","stinger"];function b0(s,t){const e=cr[s]||cr.sedan,i=t??e.color,n=new Se,r=new gt({color:i,metalness:.45,roughness:.32}),o=new gt({color:1381659,metalness:.6,roughness:.4}),a=new gt({color:660512,metalness:.9,roughness:.08,transparent:!0,opacity:.92}),l=new gt({color:14673642,metalness:1,roughness:.15}),c=new gt({color:723726,roughness:.9}),h=new gt({color:12174024,metalness:.9,roughness:.25}),u=e.length,d=e.width,f=e.sports?.52:.62,m=new B(new os(d,e.bodyH,u,3,.18),r);m.position.y=f,m.castShadow=!0,m.receiveShadow=!0,n.add(m);const _=new B(new os(d+.04,.22,u*.98,2,.08),o);if(_.position.y=f-e.bodyH/2+.06,n.add(_),s==="van"){const W=new B(new os(d-.08,1.15,u*.62,3,.12),r);W.position.set(0,f+.55,-u*.16),W.castShadow=!0,n.add(W)}const g=new B(new os(d*.86,e.cabinH,e.cabinL,3,.16),a);g.position.set(0,f+e.bodyH/2+e.cabinH/2-.04,e.sports?-.3:-.1),g.castShadow=!0,n.add(g);const p=new B(new os(d*.8,.1,e.cabinL*.9,2,.05),r);p.position.set(0,g.position.y+e.cabinH/2+.02,g.position.z),n.add(p);for(const W of[-1,1]){const H=new B(new ot(.07,e.cabinH,.1),r);H.position.set(W*d*.42,g.position.y,g.position.z+e.cabinL*.45),n.add(H)}const x=new Pt({color:16773828,toneMapped:!1}),S=new Pt({color:16720435,toneMapped:!1}),v=new ot(.4,.15,.08),R=new ot(.45,.13,.07);for(const W of[-1,1]){const H=new B(v,x);H.position.set(W*d*.31,f+.06,u/2+.01),n.add(H);const $=new B(R,S);$.position.set(W*d*.32,f+.08,-u/2-.01),n.add($)}const T=new B(new ot(d*.5,.16,.06),l);T.position.set(0,f-.1,u/2+.02),n.add(T);const A=[],P=[],w=new me(.36,.36,.26,14);w.rotateZ(Math.PI/2);const M=new me(.17,.17,.28,8);M.rotateZ(Math.PI/2);const L=e.sports?u*.31:u*.32;for(const W of[-1,1])for(const H of[-1,1]){const $=new Se;$.position.set(W*(d/2-.06),.36,H*L);const G=new B(w,c);G.castShadow=!0,$.add(G);const tt=new B(M,h);$.add(tt),n.add($),A.push(G),P.push({group:$,front:H>0,sx:W})}if(s==="taxi"){const W=new Pt({color:16773280,toneMapped:!1}),H=new B(new ot(.8,.28,.32),W);H.position.set(0,p.position.y+.2,g.position.z),n.add(H)}if(s==="police"){const W=new gt({color:15263984,roughness:.4,metalness:.2});for(const lt of[-1,1]){const xt=new B(new ot(.03,.42,1.5),W);xt.position.set(lt*(d/2+.005),f+.02,.1),n.add(xt)}const H=new B(new ot(1.1,.14,.34),o);H.position.set(0,p.position.y+.12,g.position.z),n.add(H);const $=new B(new ot(.42,.16,.32),new Pt({color:16718382,toneMapped:!1}));$.position.set(-.27,H.position.y+.13,H.position.z),n.add($);const G=new B(new ot(.42,.16,.32),new Pt({color:1732095,toneMapped:!1}));G.position.set(.27,H.position.y+.13,H.position.z),n.add(G),n.userData.policeLights={red:$,blue:G};const tt=new B(new ot(d*.8,.35,.12),o);tt.position.set(0,f-.05,u/2+.12),n.add(tt)}const O=new Se,F=new B(new Ce(.16,8,8),new gt({color:9067582,roughness:.8}));F.position.y=1.42;const Y=new B(new me(.2,.24,.45,8),new gt({color:2763317,roughness:.9}));if(Y.position.y=1.1,O.add(F,Y),O.position.z=-.1,n.add(O),e.sports){const W=new B(new he(d*1.9,u*1.05),new Pt({map:zi("#ff2d95",.08),transparent:!0,blending:be,depthWrite:!1,opacity:.5}));W.rotation.x=-Math.PI/2,W.position.y=.07,W.raycast=()=>{},n.add(W),n.userData.underglow=W}return n.userData.body=m,n.userData.driver=O,n.userData.spec=e,{group:n,wheels:A,wheelGroups:P,driver:O,spec:e,bodyMat:r,headlights:x,taillights:S}}class pr{constructor(t,e="sedan",i={x:0,z:0},n=0,r){this.game=t,this.type=e,this.spec=cr[e]||cr.sedan,this.name=this.spec.name,this.model=b0(e,r),this.group=this.model.group,this.position=new E(i.x,t.city.groundHeight(i.x,i.z),i.z),this.heading=n,this.speed=0,this.steer=0,this.driver=null,this.ai=null,this.health=100,this.maxHealth=100,this.radius=1.55,this.destroyed=!1,this.burnTimer=0,this.collisionCooldown=0,this.wheelSpin=0,this.bodyTilt=0,this.lastX=i.x,this.lastZ=i.z,this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.group.userData.vehicle=this,this.id=Math.random().toString(36).slice(2),t.scene.add(this.group)}get forward(){return new E(Math.sin(this.heading),0,Math.cos(this.heading))}setTrafficRoute(){const t=re(.5)?"x":"z",e=Kt(se.roads),i=re(.5)?1:-1;t==="x"?(this.position.x=It(this.position.x,-190,190),this.position.z=e+(i>0?-4.2:4.2),this.heading=i>0?Math.PI/2:-Math.PI/2):(this.position.z=It(this.position.z,-190,190),this.position.x=e+(i>0?4.2:-4.2),this.heading=i>0?0:Math.PI),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z);const n=t==="x"?this.position.z:this.position.x,r=se.roads.reduce((l,c,h)=>Math.abs(c-n)<Math.abs(se.roads[l]-n)?h:l,0),o=t==="x"?this.position.x:this.position.z;let a=-1;if(i>0){for(let l=0;l<se.roads.length;l++)if(se.roads[l]>o+5){a=l;break}a<0&&(a=se.roads.length-1)}else{for(let l=se.roads.length-1;l>=0;l--)if(se.roads[l]<o-5){a=l;break}a<0&&(a=0)}this.ai={kind:"traffic",axis:t,dir:i,ni:r,nextI:a,cruise:q(8,14),stopped:0,wobble:q(0,6)},this.targetPoint=this.computeAiTarget(),this.applyTransform()}computeAiTarget(){const t=this.ai,e=se.roads[t.ni],i=se.roads[t.nextI];return t.axis==="x"?new E(i,0,e+(t.dir>0?-4.2:4.2)):new E(e+(t.dir>0?4.2:-4.2),0,i)}chooseNextNode(){const t=this.ai,e=t.ni,i=t.nextI,n=[];i+t.dir>=0&&i+t.dir<se.roads.length&&n.push({axis:t.axis,dir:t.dir,ni:e,nextI:i+t.dir});for(const a of[-1,1]){const l=e+a;l>=0&&l<se.roads.length&&n.push({axis:t.axis==="x"?"z":"x",dir:a,ni:i,nextI:l})}if(!n.length){t.dir*=-1,t.nextI=It(e+t.dir,0,se.roads.length-1),this.targetPoint=this.computeAiTarget();return}const r=n.find(a=>a.axis===t.axis&&a.dir===t.dir),o=r&&re(.62)?r:Kt(n);t.axis=o.axis,t.dir=o.dir,t.ni=o.ni,t.nextI=o.nextI,this.targetPoint=this.computeAiTarget()}applyTransform(){this.group.position.copy(this.position),this.group.rotation.y=this.heading,this.group.rotation.z=this.bodyTilt}update(t,e){if(this.destroyed){this.burnTimer+=t,this.group.position.y=this.position.y;return}this.collisionCooldown=Math.max(0,this.collisionCooldown-t),this.driver==="player"?this.updatePlayer(t):this.driver==="police"?this.updatePolice(t):this.driver==="ai"?this.updateTraffic(t):this.updateParked(t),this.wheelSpin+=this.speed*t/.36;for(const i of this.model.wheelGroups)i.group.rotation.x=this.wheelSpin,i.front&&(i.group.rotation.y=this.steer*.5);if(this.model.driver&&(this.model.driver.visible=!this.driver),this.applyTransform(),this.group.userData.policeLights){const i=this.group.userData.policeLights,n=Math.sin(e*12)>0;i.red.material.color.setHex(n?16720435:3342344),i.blue.material.color.setHex(n?2611:3046399)}this.group.userData.underglow&&(this.group.userData.underglow.material.opacity=.38+Math.sin(e*2+this.position.x)*.12),this.speed>.2&&this.model.taillights&&this.model.taillights.color.setHex(11145506)}updateParked(t){this.speed=0,this.heading=sn(this.heading,this.heading,2,t)}updateTraffic(t){const e=this.ai;if(!e)return;const i=this.targetPoint,n=i.x-this.position.x,r=i.z-this.position.z,o=Math.hypot(n,r),a=Math.atan2(n,r),l=Yo(this.heading,a);this.heading=sn(this.heading,a,3.4,t),this.steer=ue(this.steer,It(l*1.4,-1,1),6,t);let c=e.cruise;Math.abs(l)>.55&&(c*=.45);const h=this.forward,u=new E(this.position.x+h.x*6,0,this.position.z+h.z*6);let d=!1;this.game.player&&!this.game.player.inVehicle&&Ue(u,this.game.player.position)<3.5&&(d=!0);for(const m of this.game.vehicles)if(!(m===this||m.destroyed)&&Ue(u,m.position)<3.8&&m.speed<this.speed){d=!0;break}d&&(c=0),this.speed=ue(this.speed,c,d?8:2.4,t);const f=this.position.clone();this.position.x+=Math.sin(this.heading)*this.speed*t,this.position.z+=Math.cos(this.heading)*this.speed*t,this.game.city.collide(this.position,this.radius)&&(this.position.copy(f),this.heading+=1.6*t,this.speed*=.4),o<6.5&&this.chooseNextNode(),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.game.vehicleWorldCollisions(this,t),this.bodyTilt=ue(this.bodyTilt,-this.steer*this.speed*.004,6,t)}updatePolice(t){const e=this.game.player,i=e.inVehicle?e.inVehicle.position:e.position,n=i.x-this.position.x,r=i.z-this.position.z,o=Math.hypot(n,r),a=Math.atan2(n,r),l=Yo(this.heading,a);this.heading=sn(this.heading,a,2.6,t),this.steer=ue(this.steer,It(l*1.2,-1,1),4,t);let c=o<8?2:o<25?15:25;this.speed=ue(this.speed,c,1.8,t);const h=this.position.clone();this.position.x+=Math.sin(this.heading)*this.speed*t,this.position.z+=Math.cos(this.heading)*this.speed*t,this.game.city.collide(this.position,this.radius)&&(this.position.copy(h),this.speed*=.3,this.health-=1),this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.game.vehicleWorldCollisions(this,t),o<32&&this.collisionCooldown<=0&&(this.policeFireTimer=(this.policeFireTimer??1)-t,this.policeFireTimer<=0&&(this.policeFireTimer=q(.9,1.8),this.game.hasLineOfSight(this.position,i)&&this.game.policeShoot(this,i))),this.bodyTilt=ue(this.bodyTilt,-this.steer*this.speed*.005,6,t)}updatePlayer(t){var _,g,p,x;const e=this.game.input,i=e.isDown("KeyW")||e.isDown("ArrowUp")?1:0,n=e.isDown("KeyS")||e.isDown("ArrowDown")?1:0,r=(e.isDown("KeyA")||e.isDown("ArrowLeft")?1:0)-(e.isDown("KeyD")||e.isDown("ArrowRight")?1:0),o=e.isDown("Space"),a=e.isDown("ShiftLeft")||e.isDown("ShiftRight"),l=this.spec.maxSpeed*(a?1.14:1)*(this.health<30?.75:1);let c=this.spec.accel;i?this.speed<0?this.speed+=c*2.2*t:this.speed+=c*(a?1.5:1)*t:n?this.speed>.2?this.speed-=c*2.4*t:this.speed-=c*.55*t:this.speed=ue(this.speed,0,.6,t),o&&(this.speed=ue(this.speed,0,3.5,t)),this.speed=It(this.speed,-l*.28,l);const h=r*(o?1.5:1);this.steer=ue(this.steer,h,8,t);const d=1.55*It(Math.abs(this.speed)/9,0,1)*(this.speed<0?-1:1)*(o?1.45:1);this.heading+=this.steer*d*t;const f=this.position.clone();if(this.position.x+=Math.sin(this.heading)*this.speed*t,this.position.z+=Math.cos(this.heading)*this.speed*t,this.game.city.collide(this.position,this.radius)&&Math.hypot(this.position.x-f.x,this.position.z-f.z)<Math.abs(this.speed)*t*.5){if(this.collisionCooldown<=0){const v=Math.abs(this.speed);this.health-=v*.7,this.game.player.takeDamage(v*.45,this.position,"crash"),(_=this.game.effects)==null||_.sparks(new E((this.position.x+f.x)/2,this.position.y+.6,(this.position.z+f.z)/2),12),(g=this.game.audio)==null||g.crash(v/30),(x=(p=this.game).shake)==null||x.call(p,It(v/40,0,.6)),this.collisionCooldown=.4}this.speed*=-.16}this.position.y=this.game.city.groundHeight(this.position.x,this.position.z),this.game.vehicleWorldCollisions(this,t),this.bodyTilt=ue(this.bodyTilt,-this.steer*this.speed*.0038,5,t),this.health<=0&&this.explode()}damage(t,e){this.destroyed||(this.health-=t,this.health<=0&&this.explode())}explode(){var t,e,i,n;this.destroyed||(this.destroyed=!0,this.speed=0,(t=this.game.effects)==null||t.explosion(new E(this.position.x,this.position.y+.7,this.position.z)),(e=this.game.audio)==null||e.explosion(),this.group.visible=!1,this.game.player.inVehicle===this&&(this.game.player.exitVehicle(),this.game.player.takeDamage(35,this.position,"explosion")),(n=(i=this.game).onVehicleDestroyed)==null||n.call(i,this))}}class T0{constructor(t,e=22){this.game=t,this.vehicles=[],this.count=e,this.spawnTimer=0,this.spawnBatch()}randomRoadPos(t=45){var e;for(let i=0;i<30;i++){const n=re(.5)?"x":"z",r=Kt(se.roads),o=q(-215,215),a=n==="x"?o:r,l=n==="x"?r:o,c=((e=this.game.player)==null?void 0:e.position)||{x:226,z:142};if(Math.hypot(a-c.x,l-c.z)>t)return{x:a,z:l}}return{x:q(-180,180),z:q(-180,180)}}spawnBatch(){for(let t=0;t<this.count;t++){let e;if(t<9){const r=this.game.player.position;e={x:200,z:It(r.z+q(-130,130),-210,210)}}else e=this.randomRoadPos(55);const i=re(.08)?"taxi":Kt(w0),n=new pr(this.game,i,e,q(0,Math.PI*2),re(.5)?void 0:Kt([15919317,3038604,9190958,3107646,7031426,2039588]));n.driver="ai",n.setTrafficRoute(),this.vehicles.push(n),this.game.vehicles.push(n)}}update(t,e){for(const i of this.vehicles)if(!i.destroyed&&Ue(i.position,this.game.player.position)>260){const n=this.randomRoadPos(90);i.position.set(n.x,0,n.z),i.destroyed=!1,i.health=100,i.group.visible=!0,i.driver="ai",i.setTrafficRoute()}}}class E0{constructor(t){this.game=t,this.cars=[],this.spawnTimer=0}update(t,e){if(e<=0){for(const n of this.cars)this.game.removeVehicle(n);this.cars=[];return}const i=Math.min(5,Math.ceil(e*1.3));this.spawnTimer-=t,this.cars.filter(n=>!n.destroyed).length<i&&this.spawnTimer<=0&&(this.spawnTimer=2.4,this.spawnCar());for(const n of this.cars)!n.destroyed&&Ue(n.position,this.game.player.position)>330&&(n.position.set(this.game.player.position.x+q(-80,80),0,this.game.player.position.z+q(-80,80)),n.position.y=.1,n.heading=q(0,Math.PI*2));for(const n of this.cars)n.destroyed&&this.game.removeVehicle(n);this.cars=this.cars.filter(n=>!n.destroyed)}spawnCar(){const t=this.game.player.position,e=q(0,Math.PI*2),i=q(80,120);let n=It(t.x+Math.cos(e)*i,-225,225),r=It(t.z+Math.sin(e)*i,-225,225);const o=se.roads.reduce((l,c)=>Math.abs(c-n)<Math.abs(l-n)?c:l,0);re(.5)?n=o:r=o;const a=new pr(this.game,"police",{x:n,z:r},q(0,Math.PI*2));a.driver="police",a.health=140,a.maxHealth=140,this.cars.push(a),this.game.vehicles.push(a)}}class A0{constructor(t){this.game=t,this.scene=t.scene,this.particles=[],this.capacity=700,this.geo=new ve,this.positions=new Float32Array(this.capacity*3),this.colors=new Float32Array(this.capacity*3),this.sizes=new Float32Array(this.capacity);for(let n=0;n<this.capacity;n++)this.positions[n*3+1]=-1e3,this.particles.push({alive:!1,vel:new E,life:0,max:0,grav:0,drag:1,color:new at});this.geo.setAttribute("position",new ke(this.positions,3)),this.geo.setAttribute("color",new ke(this.colors,3));const e=new la({size:.16,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0,blending:be});this.points=new Ac(this.geo,e),this.points.frustumCulled=!1,this.scene.add(this.points),this.cursor=0,this.tracers=[];for(let n=0;n<24;n++){const r=new ve().setFromPoints([new E,new E]),o=new Ec({color:16773280,transparent:!0,opacity:0,depthWrite:!1}),a=new zm(r,o);a.frustumCulled=!1,this.scene.add(a),this.tracers.push({line:a,life:0})}this.tracerCursor=0,this.flashes=[];const i=zi("#ffdc8a",.08);for(let n=0;n<8;n++){const r=new cs(new Un({map:i,color:16767392,transparent:!0,blending:be,depthWrite:!1,opacity:0}));r.visible=!1,this.scene.add(r),this.flashes.push({sprite:r,life:0})}this.flashCursor=0,this.rings=[],this.pickups=[],this.markers=[],this.setupPickups()}spawn(t,e,i,n,r=0,o=1){const a=this.particles[this.cursor];this.cursor=(this.cursor+1)%this.capacity,a.alive=!0,a.life=i,a.max=i,a.vel.copy(e),a.grav=r,a.drag=o,a.color.set(n),this.positions[a.index??(a.index=0)]=0;const l=(this.cursor-1+this.capacity)%this.capacity;a.i=l,this.positions[l*3]=t.x,this.positions[l*3+1]=t.y,this.positions[l*3+2]=t.z,this.colors[l*3]=a.color.r,this.colors[l*3+1]=a.color.g,this.colors[l*3+2]=a.color.b}sparks(t,e=10,i=16762954){for(let n=0;n<e;n++)this.spawn(t,new E(q(-4,4),q(1,6),q(-4,4)),q(.25,.7),i,14,.94)}blood(t,e=8){for(let i=0;i<e;i++)this.spawn(new E(t.x,t.y+1.1,t.z),new E(q(-1.8,1.8),q(.4,3.2),q(-1.8,1.8)),q(.3,.65),new at(.7,.05,.09),12,.9)}dust(t,e=3){for(let i=0;i<e;i++)this.spawn(new E(t.x+q(-.4,.4),t.y+.08,t.z+q(-.4,.4)),new E(q(-.5,.5),q(.2,.8),q(-.5,.5)),q(.4,.9),new at(.55,.5,.44),-.2,.92)}smoke(t,e=10,i=4473924){for(let n=0;n<e;n++)this.spawn(new E(t.x+q(-1,1),t.y+q(0,1.5),t.z+q(-1,1)),new E(q(-1.2,1.2),q(1,3.5),q(-1.2,1.2)),q(.8,1.8),i,-.6,.92)}explosion(t){var n,r;this.sparks(t,60,16751164),this.smoke(t,40,2762018);for(let o=0;o<20;o++)this.spawn(t,new E(q(-6,6),q(2,10),q(-6,6)),q(.4,1.1),16734751,10,.94);const e=new B(new lr(.5,1.2,24),new Pt({color:16757852,transparent:!0,opacity:.9,side:ae,blending:be,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.copy(t),e.position.y+=.1,this.scene.add(e),this.rings.push({mesh:e,life:.9,max:.9,kind:"explosion"});const i=new cs(new Un({map:zi("#ffb45c",.1),transparent:!0,blending:be,depthWrite:!1,opacity:1}));i.position.copy(t),i.scale.setScalar(4),this.scene.add(i),this.rings.push({mesh:i,life:.5,max:.5,kind:"flash"}),(r=(n=this.game).shake)==null||r.call(n,1.2)}tracer(t,e,i=16773280,n=1){const r=this.tracers[this.tracerCursor];this.tracerCursor=(this.tracerCursor+1)%this.tracers.length;const o=r.line.geometry.attributes.position;o.setXYZ(0,t.x,t.y,t.z),o.setXYZ(1,e.x,e.y,e.z),o.needsUpdate=!0,r.line.material.color.setHex(i),r.line.material.opacity=.95,r.life=.08}muzzle(t,e=.7){const i=this.flashes[this.flashCursor];this.flashCursor=(this.flashCursor+1)%this.flashes.length,i.sprite.position.copy(t),i.sprite.scale.setScalar(e),i.sprite.material.opacity=1,i.sprite.visible=!0,i.life=.06}update(t){var e,i;for(let n=0;n<this.capacity;n++){const r=this.particles[n];if(!r.alive)continue;if(r.life-=t,r.life<=0){r.alive=!1,this.positions[n*3+1]=-1e3;continue}const o=r.i;r.vel.y-=r.grav*t,r.vel.multiplyScalar(Math.pow(r.drag,t*60)),this.positions[o*3]+=r.vel.x*t,this.positions[o*3+1]+=r.vel.y*t,this.positions[o*3+2]+=r.vel.z*t;const a=It(r.life/r.max,0,1);this.colors[o*3]=r.color.r*a,this.colors[o*3+1]=r.color.g*a,this.colors[o*3+2]=r.color.b*a}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0;for(const n of this.tracers)n.life>0?(n.life-=t,n.line.material.opacity=Math.max(0,n.life/.08)*.9):n.line.material.opacity=0;for(const n of this.flashes)n.life>0&&(n.life-=t,n.sprite.material.opacity=Math.max(0,n.life/.06),n.life<=0&&(n.sprite.visible=!1));for(const n of this.rings){n.life-=t;const r=1-Math.max(0,n.life)/n.max;n.kind==="explosion"?(n.mesh.scale.setScalar(1+r*8),n.mesh.material.opacity=(1-r)*.9):(n.mesh.scale.setScalar(4+r*18),n.mesh.material.opacity=1-r),n.life<=0&&this.scene.remove(n.mesh)}this.rings=this.rings.filter(n=>n.life>0);for(const n of this.pickups)(e=n.update)==null||e.call(n,t,this.game);for(const n of this.markers)(i=n.update)==null||i.call(n,t,this.game)}setupPickups(){const t=[{x:222,z:132,type:"health"},{x:222,z:118,type:"armor"},{x:208,z:12,type:"ammo"},{x:12,z:208,type:"health"},{x:-108,z:-8,type:"armor"},{x:-8,z:-108,type:"ammo"},{x:108,z:108,type:"cash"},{x:-208,z:108,type:"health"},{x:-108,z:208,type:"ammo"},{x:108,z:-208,type:"armor"},{x:208,z:100,type:"cash"},{x:8,z:-8,type:"health"}];for(const e of t)this.addPickup(e)}addPickup({x:t,z:e,type:i}){const n=new Se,r=this.game.city.groundHeight(t,e)+1.1;n.position.set(t,r,e);const o=i==="health"?3731325:i==="armor"?4244735:i==="ammo"?16765276:8257422;let a;if(i==="health"){a=new Se;const u=new Pt({color:o,toneMapped:!1}),d=new B(new ot(.66,.22,.16),u),f=new B(new ot(.22,.66,.16),u);a.add(d,f)}else if(i==="armor")a=new B(new pa(.42),new Pt({color:o,toneMapped:!1,wireframe:!1}));else if(i==="ammo"){a=new Se;const u=new Pt({color:o,toneMapped:!1}),d=new B(new ot(.62,.46,.3),u);a.add(d)}else{const u=ki(128,64,(d,f,m)=>{d.fillStyle="#0b3d16",d.fillRect(0,0,f,m),d.fillStyle=o,d.font='bold 50px "Courier New"',d.textAlign="center",d.textBaseline="middle",d.fillText("$",f/2,m/2+3)});a=new B(new ot(.7,.42,.12),new Pt({map:u,toneMapped:!1}))}n.add(a);const l=new B(new lr(.55,.75,24),new Pt({color:o,transparent:!0,opacity:.5,side:ae,blending:be,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=-.95,n.add(l);const c=new B(new me(.16,.5,4.2,20,1,!0),new Pt({color:o,transparent:!0,opacity:.035,side:ae,blending:be,depthWrite:!1}));c.position.y=1.1,n.add(c),this.scene.add(n);const h={group:n,type:i,active:!0,respawn:0,base:n.position.clone(),t:q(0,6),update:(u,d)=>{if(h.t+=u,!h.active){h.respawn-=u,h.respawn<=0&&(h.active=!0,n.visible=!0);return}n.position.y=h.base.y+Math.sin(h.t*2)*.16,a.rotation.y+=u*1.8,n.children[0].rotation.y=h.t*1.8,n.rotation.y=0;const f=d.player.position;Math.hypot(f.x-n.position.x,f.z-n.position.z)<2.2&&Math.abs(f.y-n.position.y)<4&&(h.active=!1,h.respawn=35,n.visible=!1,d.collectPickup(i))}};this.pickups.push(h)}addMarker(t,{color:e=16723349,label:i="M",radius:n=2.2,beam:r=!0}={}){const o=this,a=new Se,l=this.game.city.groundHeight(t.x,t.z);a.position.set(t.x,l+.06,t.z);const c=new B(new ma(n,.09,8,40),new Pt({color:e,toneMapped:!1,transparent:!0,opacity:.9}));c.rotation.x=-Math.PI/2,a.add(c);const h=new B(new da(n*.9,32),new Pt({color:e,transparent:!0,opacity:.15,side:ae,depthWrite:!1}));if(h.rotation.x=-Math.PI/2,a.add(h),r){const m=new B(new me(.16,n*.8,8,24,1,!0),new Pt({color:e,transparent:!0,opacity:.05,side:ae,blending:be,depthWrite:!1}));m.position.y=4.5,a.add(m)}const u=ki(128,128,(m,_,g)=>{m.fillStyle="rgba(0,0,0,0)",m.fillRect(0,0,_,g),m.strokeStyle="#fff",m.lineWidth=5,m.beginPath(),m.arc(64,64,42,0,Math.PI*2),m.stroke(),m.fillStyle="#fff",m.font='bold 58px "Arial Black"',m.textAlign="center",m.textBaseline="middle",m.fillText(i,64,68)}),d=new cs(new Un({map:u,color:e,transparent:!0,depthWrite:!1,toneMapped:!1}));d.scale.setScalar(1.5),d.position.y=3.2,a.add(d),this.scene.add(a);const f={group:a,pos:new E(t.x,l,t.z),radius:n,color:e,active:!0,t:0,setVisible(m){a.visible=m,f.active=m},setPosition(m){const _=o.game.city.groundHeight(m.x,m.z);f.pos.set(m.x,_,m.z),a.position.set(m.x,_+.06,m.z)},dispose(){o.scene.remove(a),a.traverse(m=>{var _,g;m.geometry&&((g=(_=m.geometry).dispose)==null||g.call(_))}),f.disposed=!0},update(m){f.t+=m,c.rotation.z+=m*.7;const _=1+Math.sin(f.t*3)*.05;a.scale.set(_,1,_),d.position.y=3.2+Math.sin(f.t*2)*.12}};return this.markers.push(f),f}}const C0='<svg class="star" viewBox="0 0 24 24"><path d="M12 1.6l3.1 6.6 7.1 1-5.2 5.1 1.3 7.2L12 18l-6.3 3.5 1.3-7.2L1.8 9.2l7.1-1z" fill="#ffcf3f" stroke="#7a4b00" stroke-width="1"/></svg>';class R0{constructor(t){this.game=t,this.el={};const e=["minimap","bigmap","health-fill","health-num","armor-fill","armor-num","money","time","wanted","objective-text","objective-kicker","objective-timer","objective","mission-name","toasts","prompt","prompt-text","banner","banner-kicker","banner-title","banner-sub","subtitle","weapon-panel","weapon-name","ammo-mag","ammo-reserve","vehicle-hud","speed","sp-fill","car-name","radio","track","damage-flash","crosshair","district","help","pause-screen","pause-sub","p-missions","p-money","p-wanted","map-screen","death-screen","death-loss","mission-screen","ms-kicker","ms-title","ms-sub","health-row","ammo-mag"];for(const i of e)this.el[i]=document.getElementById(i);this.mm=this.el.minimap.getContext("2d"),this.big=this.el.bigmap.getContext("2d"),this.el.wanted.innerHTML=Array(5).fill(C0).join(""),this.stars=[...this.el.wanted.querySelectorAll(".star")],this.lastWanted=-1,this.lastObjective="",this.objectiveUrgent=!1,this.mmTimer=0,this.bigTimer=0,this.dmgTimer=0,this.promptVisible=!1,this.bannerTimer=0,this.districtTimer=0,this.radioIndex=0,this.radioTimer=0,this.tracks=["MIDNIGHT DRIVE","NEON HEART","OCEAN DRIVE","PALM SHADOWS","AFTERGLOW","VICE NIGHTS"],this.el.track.textContent=this.tracks[0]}update(t){const e=this.game,i=e.player;if(i){if(this.el["health-fill"].style.width=`${It(i.health,0,100)}%`,this.el["health-num"].textContent=Math.ceil(i.health),this.el["health-row"].classList.toggle("critical",i.health<30),this.el["armor-fill"].style.width=`${It(i.armor,0,100)}%`,this.el["armor-num"].textContent=Math.ceil(i.armor),this.el.money.textContent=Pn(e.money),this.el.time.textContent=e.clockString(),e.wanted!==this.lastWanted&&(this.lastWanted=e.wanted,this.stars.forEach((n,r)=>n.classList.toggle("on",r<e.wanted))),i.inVehicle){document.body.classList.add("driving"),this.el["weapon-panel"].classList.add("hidden"),this.el["vehicle-hud"].classList.remove("hidden");const n=Math.round(Math.abs(i.inVehicle.speed)*3.6);this.el.speed.textContent=n;const r=It(Math.abs(i.inVehicle.speed)/(i.inVehicle.spec.maxSpeed*1.1),0,1);this.el["sp-fill"].style.strokeDasharray=`${r*245} 327`,this.el["car-name"].textContent=i.inVehicle.name,i.inVehicle.destroyed&&(this.el["car-name"].textContent="WRECKED"),this.radioTimer+=t,this.radioTimer>24&&(this.radioTimer=0,this.radioIndex=(this.radioIndex+1)%this.tracks.length,this.el.track.textContent=this.tracks[this.radioIndex])}else document.body.classList.remove("driving"),this.el["weapon-panel"].classList.remove("hidden"),this.el["vehicle-hud"].classList.add("hidden"),this.el["weapon-name"].textContent=i.reloading>0?"RELOADING":i.weapon.name,this.el["ammo-mag"].textContent=i.weapon.mag,this.el["ammo-reserve"].textContent=i.weapon.reserve,this.el["ammo-mag"].parentElement.classList.toggle("low",i.weapon.mag<=3);this.dmgTimer=Math.max(0,this.dmgTimer-t),this.el["damage-flash"].style.opacity=this.dmgTimer>0?Math.min(.85,this.dmgTimer*2.6):0,this.districtTimer-=t,this.districtTimer<=0&&(this.districtTimer=.4,this.el.district.textContent=e.city.districtAt(i.position.x,i.position.z)),this.mmTimer-=t,this.mmTimer<=0&&(this.mmTimer=.06,this.drawMinimap()),this.el["map-screen"].classList.contains("hidden")||(this.bigTimer-=t,this.bigTimer<=0&&(this.bigTimer=.2,this.drawBigMap())),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&this.el.banner.classList.add("hidden"))}}setObjective(t,e="VICE BEACH",i=""){t!==this.lastObjective&&(this.lastObjective=t,this.el["objective-text"].textContent=t,this.el.objective.style.opacity=1),this.el["objective-kicker"].textContent=e,this.el["objective-timer"].textContent=i,this.el.objective.classList.toggle("urgent",!!i&&!i.includes("—"))}setMissionName(t){this.el["mission-name"].textContent=t}toast(t,e=""){const i=document.createElement("div");i.className="toast "+e,i.textContent=t,this.el.toasts.appendChild(i),setTimeout(()=>i.remove(),3200),this.el.toasts.children.length>4&&this.el.toasts.firstChild.remove()}showBanner(t,e,i="",n=3.4){this.el["banner-kicker"].textContent=t,this.el["banner-title"].textContent=e,this.el["banner-sub"].textContent=i,this.el.banner.classList.remove("hidden"),this.el.banner.style.animation="none",this.el.banner.offsetWidth,this.el.banner.style.animation="",this.bannerTimer=n}subtitle(t,e=3){this.el.subtitle.textContent=t,this.el.subtitle.classList.add("on"),clearTimeout(this._subT),this._subT=setTimeout(()=>this.el.subtitle.classList.remove("on"),e*1e3)}setPrompt(t){if(!t){this.el.prompt.classList.add("hidden"),this.promptVisible=!1;return}this.promptVisible&&this.el["prompt-text"].textContent===t||(this.el["prompt-text"].textContent=t,this.el.prompt.classList.remove("hidden"),this.promptVisible=!0)}damage(){this.dmgTimer=.35,this.el["damage-flash"].style.opacity=.7}hitMarker(){this.el.crosshair.classList.add("hit"),clearTimeout(this._hitT),this._hitT=setTimeout(()=>this.el.crosshair.classList.remove("hit"),120)}toggleHelp(t){const e=t??this.el.help.classList.contains("hidden");return this.el.help.classList.toggle("hidden",!e),e}toggleMap(){const t=this.el["map-screen"].classList.contains("hidden");return this.el["map-screen"].classList.toggle("hidden",!t),t&&this.drawBigMap(),t}closeMap(){this.el["map-screen"].classList.add("hidden")}showPause(t,e=0){this.el["pause-screen"].classList.toggle("hidden",!t),t&&(this.el["p-missions"].textContent=`${e} / 5`,this.el["p-money"].textContent=Pn(this.game.money),this.el["p-wanted"].textContent=this.game.wanted>0?"★".repeat(this.game.wanted):"CLEAN")}showMissionComplete(t,e,i){const n=this.el["mission-screen"];this.el["ms-kicker"].textContent="MISSION COMPLETE",this.el["ms-title"].textContent=t,this.el["ms-sub"].textContent=`Reward: ${Pn(e)}`,n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("hidden"),i==null||i()},3600)}showDeath(t,e){const i=this.el["death-screen"];this.el["death-loss"].textContent=Pn(t),i.classList.remove("hidden"),setTimeout(()=>{i.classList.add("hidden"),e==null||e()},3400)}drawMapBase(t,e,i,n,r,o,a=!1){const l=n;t.save(),t.translate(e/2,i/2),t.scale(l,l),t.translate(-r,-o),t.fillStyle="#082832",t.fillRect(r-e/2/l-50,o-i/2/l-50,e/l+100,i/l+100),t.fillStyle="#25302d",t.fillRect(-243,-243,486,486),t.fillStyle="#7a6646",t.fillRect(243,-243,70,486),t.fillStyle="#6b5138",t.fillRect(302,56,80,16),t.fillStyle="#33403b";for(const c of this.game.city.blocks)t.fillRect(c.cx-42,c.cz-42,84,84);t.fillStyle="#2f5a3b",t.fillRect(15,-185,70,70),t.strokeStyle="#6d716e",t.lineWidth=18,t.lineCap="butt";for(const c of se.roads)t.beginPath(),t.moveTo(c,-243),t.lineTo(c,243),t.stroke(),t.beginPath(),t.moveTo(-243,c),t.lineTo(243,c),t.stroke();if(a){t.strokeStyle="rgba(230,226,207,0.55)",t.lineWidth=.55,t.setLineDash([4,6]);for(const c of se.roads)t.beginPath(),t.moveTo(c,-243),t.lineTo(c,243),t.stroke(),t.beginPath(),t.moveTo(-243,c),t.lineTo(243,c),t.stroke();t.setLineDash([])}if(a){t.fillStyle="#1b2320";for(const c of this.game.city.colliders)t.fillRect(c.minX,c.minZ,c.maxX-c.minX,c.maxZ-c.minZ)}if(a){t.fillStyle="rgba(255,255,255,0.22)",t.font=`bold ${11/l}px Rajdhani, sans-serif`,t.textAlign="center";const c=[["OCEAN BEACH",210,0],["DOWNTOWN",-50,-50],["VICE DOCKS",-150,-150],["VICE POINT",340,64],["NORTH POINT",0,-215],["SOUTH BEACH",0,215],["WEST HEIGHTS",-205,0]];for(const[h,u,d]of c)t.fillText(h,u,d)}t.restore()}drawPoints(t,e,i,n,r,o,a=!1){var g,p,x;const l=this.game,c=n,h=(S,v)=>[e/2+(S-r)*c,i/2+(v-o)*c];for(const S of l.vehicles){if(S.destroyed)continue;const[v,R]=h(S.position.x,S.position.z);v<-10||R<-10||v>e+10||R>i+10||(S.driver==="police"?(t.fillStyle="#2f7bff",t.beginPath(),t.arc(v,R,a?3.4:2.8,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(47,123,255,0.35)",t.lineWidth=2,t.stroke()):(t.fillStyle="rgba(224,224,214,0.65)",t.beginPath(),t.arc(v,R,a?2.2:1.7,0,Math.PI*2),t.fill()))}for(const S of l.enemies){if(S.dead)continue;const[v,R]=h(S.position.x,S.position.z);t.fillStyle="#ff3b4e",t.beginPath(),t.arc(v,R,a?3.4:2.6,0,Math.PI*2),t.fill()}const u=l.missions;if((g=u==null?void 0:u.startMarker)!=null&&g.active){const[S,v]=h(u.startMarker.pos.x,u.startMarker.pos.z);this.drawMarkerDot(t,S,v,"#ff2d95","M",a)}if((p=u==null?void 0:u.objectiveMarker)!=null&&p.active){const[S,v]=h(u.objectiveMarker.pos.x,u.objectiveMarker.pos.z);this.drawMarkerDot(t,S,v,"#ffd15c","!",a)}if((x=u==null?void 0:u.briefcaseMarker)!=null&&x.active){const[S,v]=h(u.briefcaseMarker.pos.x,u.briefcaseMarker.pos.z);this.drawMarkerDot(t,S,v,"#7dff8e","$",a)}const d=l.player,[f,m]=h(d.position.x,d.position.z);t.save(),t.translate(f,m);const _=d.inVehicle?d.inVehicle.heading:d.heading;t.rotate(Math.PI-_),t.fillStyle="#fff",t.beginPath(),t.moveTo(0,-8),t.lineTo(6,6),t.lineTo(0,3),t.lineTo(-6,6),t.closePath(),t.fill(),t.strokeStyle="rgba(0,0,0,.6)",t.lineWidth=1.5,t.stroke(),t.restore()}drawMarkerDot(t,e,i,n,r,o){const a=o?10:7;t.save(),t.shadowColor=n,t.shadowBlur=14,t.fillStyle=n,t.beginPath(),t.arc(e,i,a,0,Math.PI*2),t.fill(),t.restore(),t.fillStyle="#140a20",t.font=`bold ${o?12:9}px "Arial Black", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,e,i+.5)}drawMinimap(){const t=this.mm,e=420,i=420,n=this.game.player,r=1.75;t.clearRect(0,0,e,i),t.save(),t.beginPath(),t.arc(e/2,i/2,e/2-2,0,Math.PI*2),t.clip(),this.drawMapBase(t,e,i,r,n.position.x,n.position.z),this.drawPoints(t,e,i,r,n.position.x,n.position.z);const o=t.createRadialGradient(e/2,i/2,e*.34,e/2,i/2,e*.5);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(4,8,12,0.55)"),t.fillStyle=o,t.fillRect(0,0,e,i),t.restore()}drawBigMap(){const t=this.big,e=900,i=900;this.game.player;const n=900/520;t.clearRect(0,0,e,i),this.drawMapBase(t,e,i,n,0,0,!0),this.drawPoints(t,e,i,n,0,0,!0),t.strokeStyle="rgba(255,255,255,.14)",t.lineWidth=3,t.strokeRect(1.5,1.5,e-3,i-3),t.fillStyle="rgba(255,255,255,.35)",t.font='16px "Share Tech Mono", monospace',t.fillText("0        100m",30,i-26),t.fillRect(30,i-40,100*n/2,3)}}const $s={x:222,z:84},P0={x:222,z:-190},Cn=[{id:1,name:"Sunset Run",kicker:"JOB 01 — OCEAN DRIVE",brief:"Steal the yellow Stinger and deliver it to the marina before the owner notices.",reward:750,steps:[{type:"vehicle",car:"stinger",spawn:{x:204.5,z:96},heading:Math.PI,objective:"Steal the yellow Stinger parked on Ocean Drive.",label:"STINGER"},{type:"goto",pos:{x:220,z:58},radius:10,inCar:!0,carLock:!0,objective:"Deliver the Stinger to the marina drop-off.",label:"DROP"}]},{id:2,name:"Dead Drop",kicker:"JOB 02 — VICE DOCKS",brief:"Three packages. Two minutes. The Sharks are watching every corner.",reward:1e3,steps:[{type:"collect",time:120,items:[{x:0,z:208},{x:208,z:0},{x:0,z:-108}],objective:"Collect the packages scattered across the city."},{type:"goto",pos:{x:-152,z:-98},radius:10,objective:"Drop the packages at the docks warehouse.",label:"DROP"}]},{id:3,name:"Neon Rush",kicker:"JOB 03 — STREET RACING",brief:"A pink slip race through the neon grid. Hit every gate. Don't stop for cops.",reward:1500,steps:[{type:"checkpoints",time:95,radius:8,inCar:!0,points:[{x:200,z:150},{x:100,z:0},{x:100,z:-100},{x:0,z:-100},{x:-100,z:0},{x:0,z:100},{x:200,z:100}],objective:"Race through the checkpoints. Hit every gate in order."}]},{id:4,name:"Clean Sweep",kicker:"JOB 04 — SHARK TERRITORY",brief:"The Sharks are meeting in the park. End the meeting. Permanently.",reward:2200,steps:[{type:"goto",pos:{x:50,z:-150},radius:34,objective:"Get to the park and shut down the Shark meeting.",label:"PARK"},{type:"kill",center:{x:50,z:-150},spawns:[{x:32,z:-172},{x:70,z:-166},{x:28,z:-132},{x:72,z:-134},{x:52,z:-112}],objective:"Take out all five Sharks."}]},{id:5,name:"The Big Score",kicker:"JOB 05 — VICE CITY BANK",brief:"One last job. The bank vault is open. The guards are not. Get the cash and disappear.",reward:6e3,steps:[{type:"goto",pos:{x:-50,z:150},radius:36,objective:"Meet the crew at the bank plaza.",label:"BANK"},{type:"kill",center:{x:-50,z:150},spawns:[{x:-72,z:132},{x:-28,z:132},{x:-72,z:168},{x:-28,z:168},{x:-50,z:118},{x:-50,z:182}],objective:"Take out the bank guards."},{type:"goto",pos:{x:-38,z:150},radius:3.2,objective:"Grab the briefcase of cash.",label:"$",briefcase:!0},{type:"escape",time:40,stars:3,objective:"Lose the heat and survive until the coast is clear."},{type:"goto",pos:P0,radius:10,objective:"Reach the beach hideout with the cash.",label:"SAFE"}]}];class L0{constructor(t){this.game=t,this.index=0,this.active=null,this.stepIndex=0,this.timeLeft=0,this.nearStart=!1,this.cooldown=0,this.markers=[],this.enemies=[],this.missionCar=null,this.collected=0,this.checkpointIndex=0,this.escapeDone=!1,this.briefcaseMarker=null,this.finished=!1,this.startMarker=t.effects.addMarker($s,{color:16723349,label:"M",radius:2}),this.startMarker.setVisible(!0),this.setStartPosition(),this.updateStartMarker()}get mission(){return Cn[this.index]}setStartPosition(){var e,i;this.mission&&((i=(e=this.startMarker).setPosition)==null||i.call(e,$s))}clearMarkers(){var t;for(const e of this.markers)(t=e.dispose)==null||t.call(e);this.markers=[],this.objectiveMarker=null}addMarker(t,e){const i=this.game.effects.addMarker(t,e);return this.markers.push(i),this.objectiveMarker||(this.objectiveMarker=i),i}updateStartMarker(){this.startMarker.setVisible(!this.active&&!this.finished&&this.cooldown<=0)}update(t){const e=this.game;if(this.cooldown=Math.max(0,this.cooldown-t),this.active){this.updateMission(t);return}if(this.updateStartMarker(),this.finished){this.nearStart=!1,e.hud.setObjective("Vice City is yours. Cruise the strip and enjoy the sunset.","FREE ROAM",""),e.hud.setMissionName("Free Roam");return}if(this.mission){const i=Ue(e.player.position,$s);this.nearStart=i<5.5&&!e.player.inVehicle&&this.cooldown<=0,this.nearStart?(e.hud.setObjective(`Press E to start "${this.mission.name}".`,this.mission.kicker,""),e.hud.setMissionName(this.mission.name)):this.cooldown>0?(e.hud.setObjective("The job is blown. Return to the pink marker to try again.","COOLDOWN",""),e.hud.setMissionName("Free Roam")):(e.hud.setObjective("Explore the strip, grab a ride, and look for the pink marker on Ocean Drive.","FREE ROAM",""),e.hud.setMissionName("Free Roam"))}}tryStart(){return!this.active&&this.nearStart&&this.mission&&this.cooldown<=0?(this.startMission(),!0):!1}startMission(){var e;const t=this.game;this.active=this.mission,this.stepIndex=0,this.timeLeft=0,this.collected=0,this.checkpointIndex=0,this.escapeDone=!1,this.startMarker.setVisible(!1),this.clearMarkers(),t.hud.showBanner(this.active.kicker,this.active.name,this.active.brief,4.2),t.hud.setMissionName(this.active.name),(e=t.audio)==null||e.mission(),t.missionsStarted=(t.missionsStarted||0)+1,this.beginStep()}beginStep(){const t=this.game,e=this.active.steps[this.stepIndex];if(!e){this.completeMission();return}this.stepTime=0,this.timeLeft=e.time||0,this.stepState={},this.clearMarkers(),e.type==="goto"?(this.addMarker(e.pos,{color:e.briefcase?8257422:16765276,label:e.label||"!",radius:2.6}),this.baseObjective=e.objective):e.type==="vehicle"?((!this.missionCar||this.missionCar.destroyed)&&(this.missionCar=new pr(t,e.car,e.spawn,e.heading||0),this.missionCar.driver=null,this.missionCar.mission=!0,t.vehicles.push(this.missionCar)),this.addMarker(this.missionCar.position,{color:16723349,label:"CAR",radius:2.2}),this.baseObjective=e.objective):e.type==="collect"?(this.collectMarkers=e.items.map((i,n)=>{const r=this.addMarker(i,{color:8257422,label:"PKG",radius:2.2});return r.index=n,r.collected=!1,r}),this.baseObjective=`${e.objective} 0/${e.items.length}`):e.type==="checkpoints"?(this.cpMarker=this.addMarker(e.points[0],{color:2287084,label:"GO",radius:4}),this.baseObjective=`${e.objective} 1/${e.points.length}`):e.type==="kill"?(this.spawnEnemies(e.spawns),this.addMarker(e.center,{color:16723349,label:"TARGET",radius:3}),this.baseObjective=e.objective):e.type==="escape"&&(t.setWanted(e.stars,!0),this.escapeDone=!1,this.baseObjective=e.objective),t.hud.setObjective(this.baseObjective||e.objective,this.active.kicker,this.timeLeft?to(this.timeLeft):""),t.hud.setMissionName(this.active.name)}spawnEnemies(t){for(const e of t){const i=new S0(this.game,e,{health:65});this.enemies.push(i),this.game.enemies.push(i)}}clearStep(){this.clearMarkers();for(const t of this.enemies)t.dead||(this.game.scene.remove(t.group),t.group.traverse(e=>{var i,n;e.geometry&&((n=(i=e.geometry).dispose)==null||n.call(i))}));this.enemies=this.enemies.filter(t=>t.dead);for(const t of this.enemies)this.game.scene.remove(t.group);this.game.enemies=this.game.enemies.filter(t=>!this.enemies.includes(t)),this.enemies=[]}advanceStep(){var e,i;if(this.clearStep(),this.stepIndex++,!((e=this.active)==null?void 0:e.steps[this.stepIndex])){this.completeMission();return}(i=this.game.audio)==null||i.ui(),this.beginStep()}updateMission(t){var n,r,o,a,l;const e=this.game,i=this.active.steps[this.stepIndex];if(i){if(this.stepTime+=t,i.time&&(this.timeLeft-=t,this.timeLeft<=0&&(this.timeLeft=0,i.type!=="escape"))){this.fail("Out of time.",!0);return}if(i.type==="vehicle"){const c=e.player;if(c.inVehicle===this.missionCar){e.hud.toast("Stinger acquired — get to the marina","pink"),this.advanceStep();return}if(this.missionCar.destroyed){this.fail("The Stinger was wrecked.",!0);return}this.objectiveMarker&&Ue(c.position,this.missionCar.position)<3.5&&!c.inVehicle&&e.hud.setPrompt("Enter the Stinger")}else if(i.type==="goto"){const c=e.player,h=Ue(c.position,i.pos),u=i.carLock&&this.missionCar&&c.inVehicle!==this.missionCar,d=(!i.inCar||!!c.inVehicle)&&!u;if(h<i.radius&&d){i.briefcase&&(e.hud.toast("Briefcase secured — now lose the cops","gold"),(n=e.audio)==null||n.cash(),this.briefcaseMarker&&this.briefcaseMarker.setVisible(!1)),this.advanceStep();return}i.inCar&&!c.inVehicle&&h<i.radius+8?e.hud.toast("Get back in a vehicle to make the drop",""):u&&h<i.radius+8&&e.hud.toast("You need the Stinger for this drop","pink")}else if(i.type==="collect"){const c=e.player;for(const h of this.collectMarkers)if(!h.collected&&Ue(c.position,h.pos)<3.2){h.collected=!0,h.setVisible(!1),this.collected++,(r=e.audio)==null||r.pickup("cash"),(o=e.effects)==null||o.sparks(new E(h.pos.x,h.pos.y+1,h.pos.z),12,8257422),e.hud.toast(`Package ${this.collected}/${i.items.length} secured`,"gold"),this.baseObjective=`${i.objective} ${this.collected}/${i.items.length}`;break}if(this.collected>=i.items.length){e.hud.toast("All packages collected","gold"),this.advanceStep();return}}else if(i.type==="checkpoints"){const c=e.player;if(!c.inVehicle)this.baseObjective=`${i.objective} Get a vehicle!`;else{const h=i.points[this.checkpointIndex];if(Ue(c.position,h)<i.radius){if(this.checkpointIndex++,(a=e.audio)==null||a.ui(),(l=e.effects)==null||l.sparks(new E(h.x,1,h.z),18,2287084),this.checkpointIndex>=i.points.length){e.hud.toast("Race won","gold"),this.advanceStep();return}this.cpMarker.setPosition(i.points[this.checkpointIndex]),this.baseObjective=`${i.objective} ${this.checkpointIndex+1}/${i.points.length}`,e.hud.toast(`Checkpoint ${this.checkpointIndex}/${i.points.length}`,"")}}}else if(i.type==="kill"){const c=this.enemies.filter(h=>!h.dead).length;if(this.baseObjective=`${i.objective} ${i.spawns.length-c}/${i.spawns.length}`,c===0&&this.enemies.length>0){e.hud.toast("All targets down","pink"),this.advanceStep();return}}else if(i.type==="escape"){if(this.stepTime>2&&e.player.health<100,this.timeLeft<=0){e.hud.toast("The heat is off — get to the hideout","gold"),this.advanceStep();return}e.wanted===0&&e.setWanted(i.stars,!0,!0),this.baseObjective=`${i.objective} ${to(this.timeLeft)}`}e.hud.setObjective(this.baseObjective,this.active.kicker,this.timeLeft?to(this.timeLeft):"")}}onEnemyKilled(){}fail(t,e=!0){var n;if(!this.active)return;const i=this.game;this.clearStep(),this.active=null,this.missionCar=null,this.cooldown=6,this.escapeDone=!1,e&&(i.hud.showBanner("JOB FAILED","MISSION FAILED",t,3.6),(n=i.audio)==null||n.fail()),i.hud.setMissionName("Free Roam"),i.hud.setObjective("Return to the pink marker on Ocean Drive to try the job again.","COOLDOWN",""),i.hud.setPrompt(null)}onPlayerDeath(){this.active&&this.fail("You were wasted.",!1)}completeMission(){var i,n;const t=this.game,e=this.active;e&&(this.clearStep(),this.active=null,this.missionCar=null,t.money+=e.reward,t.missionsDone=(t.missionsDone||0)+1,(i=t.audio)==null||i.cash(),(n=t.audio)==null||n.mission(),t.hud.setObjective(`Job complete. ${e.reward?`$${e.reward.toLocaleString()} wired to your account.`:""}`,"VICE CITY",""),t.hud.setMissionName("Free Roam"),t.setWanted(0,!1,!0),t.hud.showMissionComplete(e.name,e.reward,()=>{var r,o;this.index=Math.min(this.index+1,Cn.length-1),this.index>=Cn.length-1&&t.missionsDone>=Cn.length?(this.finished=!0,this.startMarker.setVisible(!1),t.hud.showBanner("THE END","CITY IS YOURS","Final score secured. Vice City belongs to you.",6),t.hud.subtitle("Thanks for playing Vice City — Neon Nights",7),t.finished=!0):(this.index=t.missionsDone,this.cooldown=1.5,(o=(r=this.startMarker).setPosition)==null||o.call(r,$s),this.startMarker.setVisible(!0),t.hud.showBanner("JOB AVAILABLE",Cn[this.index].name,Cn[this.index].brief,3.6),t.hud.setPrompt(null))}))}}const D0=[[45,48,52,57],[41,45,48,53],[48,52,55,60],[43,47,50,55]],js=s=>440*Math.pow(2,(s-69)/12);class I0{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.enabled=!0,this.musicOn=!0,this.nextStep=0,this.stepIndex=0,this.lastSchedule=0,this.engine=null,this.siren=null,this.engineTarget=0,this.sirenLevel=0,this.noiseBuffer=null,this.started=!1}start(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.16,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.master);const e=this.ctx.sampleRate*1.2;this.noiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const i=this.noiseBuffer.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1;this.startEngine(),this.startSiren(),this.nextStep=this.ctx.currentTime+.2,this.started=!0}scheduleMusic(){if(!this.ctx||!this.musicOn)return;const t=.25;for(;this.nextStep<this.ctx.currentTime+t;)this.playStep(this.stepIndex,this.nextStep),this.nextStep+=.3125,this.stepIndex=(this.stepIndex+1)%32}playStep(t,e){const i=Math.floor(t/8)%4,n=t%8,r=D0[i];if(n===0){for(const l of r)this.pad(js(l+12),e,2.35,.05);this.pad(js(r[0]+24),e,2.4,.022)}(n===0||n===3||n===6)&&this.bass(js(r[0]-12),e,n===0?.6:.35,.12);const a=[r[0]+12,r[1]+12,r[2]+12,r[3]+12][t*3%4];this.arp(js(a+12),e,n%2===0?.055:.03),(n===0||n===4)&&this.kick(e),(n===2||n===6)&&this.snare(e),n%2===1&&this.hat(e,.028)}pad(t,e,i,n){const r=this.ctx,o=r.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.35),o.gain.linearRampToValueAtTime(0,e+i);const a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=1200,a.Q.value=.6;const l=r.createOscillator();l.type="sawtooth",l.frequency.value=t;const c=r.createOscillator();c.type="sawtooth",c.frequency.value=t*1.006,l.connect(a),c.connect(a),a.connect(o),o.connect(this.musicGain),l.start(e),c.start(e),l.stop(e+i+.05),c.stop(e+i+.05)}bass(t,e,i,n){const r=this.ctx,o=r.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.02),o.gain.exponentialRampToValueAtTime(.001,e+i);const a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=420,a.Q.value=4;const l=r.createOscillator();l.type="sawtooth",l.frequency.value=t,l.connect(a),a.connect(o),o.connect(this.musicGain),l.start(e),l.stop(e+i+.02)}arp(t,e,i){const n=this.ctx,r=n.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(i,e+.01),r.gain.exponentialRampToValueAtTime(.001,e+.28);const o=n.createOscillator();o.type="triangle",o.frequency.value=t;const a=n.createDelay();a.delayTime.value=.3125;const l=n.createGain();l.gain.value=.32,o.connect(r),r.connect(this.musicGain),r.connect(a),a.connect(l),l.connect(this.musicGain),o.start(e),o.stop(e+.3)}kick(t){const e=this.ctx,i=e.createOscillator();i.type="sine";const n=e.createGain();i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(38,t+.13),n.gain.setValueAtTime(.26,t),n.gain.exponentialRampToValueAtTime(.001,t+.28),i.connect(n),n.connect(this.musicGain),i.start(t),i.stop(t+.3)}snare(t){const e=this.ctx,i=e.createBufferSource();i.buffer=this.noiseBuffer;const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1900,n.Q.value=.8;const r=e.createGain();r.gain.setValueAtTime(.13,t),r.gain.exponentialRampToValueAtTime(.001,t+.17),i.connect(n),n.connect(r),r.connect(this.musicGain),i.start(t),i.stop(t+.2);const o=e.createOscillator();o.type="triangle",o.frequency.value=180;const a=e.createGain();a.gain.setValueAtTime(.05,t),a.gain.exponentialRampToValueAtTime(.001,t+.1),o.connect(a),a.connect(this.musicGain),o.start(t),o.stop(t+.12)}hat(t,e){const i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuffer;const r=i.createBiquadFilter();r.type="highpass",r.frequency.value=7500;const o=i.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.05),n.connect(r),r.connect(o),o.connect(this.musicGain),n.start(t),n.stop(t+.06)}startEngine(){const t=this.ctx,e=t.createOscillator();e.type="sawtooth",e.frequency.value=60;const i=t.createOscillator();i.type="square",i.frequency.value=30;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=300,n.Q.value=2;const r=t.createGain();r.gain.value=0,e.connect(n),i.connect(n),n.connect(r),r.connect(this.sfxGain),e.start(),i.start(),this.engine={o1:e,o2:i,f:n,g:r}}startSiren(){const t=this.ctx,e=t.createOscillator();e.type="square",e.frequency.value=700;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=2;const n=t.createGain();n.gain.value=0,e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(),this.siren={o:e,g:n}}updateLoop(t,e){if(!this.ctx)return;const i=this.ctx.currentTime,n=t.player;let r=0,o=50;if(n!=null&&n.inVehicle&&!n.inVehicle.destroyed){const c=It(Math.abs(n.inVehicle.speed)/n.inVehicle.spec.maxSpeed,0,1.2);r=.035+c*.075,o=46+c*165}this.engineTarget+=(r-this.engineTarget)*Math.min(1,e*8),this.engine.g.gain.setTargetAtTime(this.engineTarget,i,.08),this.engine.o1.frequency.setTargetAtTime(o,i,.1),this.engine.o2.frequency.setTargetAtTime(o*.5,i,.1),this.engine.f.frequency.setTargetAtTime(240+o*2.2,i,.1);let a=999;for(const c of t.vehicles)c.driver==="police"&&!c.destroyed&&(a=Math.min(a,Math.hypot(c.position.x-n.position.x,c.position.z-n.position.z)));const l=t.wanted>0&&a<110?It(1-a/110,0,1)*.045:0;this.sirenLevel+=(l-this.sirenLevel)*Math.min(1,e*4),this.siren.g.gain.setTargetAtTime(this.sirenLevel,i,.1),this.siren.o.frequency.setTargetAtTime(Math.sin(i*3.2)>0?820:560,i,.02)}gunshot(t="pistol"){if(!this.ctx)return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(t==="smg"?3400:2600,i),r.frequency.exponentialRampToValueAtTime(300,i+.12);const o=e.createGain();o.gain.setValueAtTime(t==="smg"?.3:.42,i),o.gain.exponentialRampToValueAtTime(.001,i+.18),n.connect(r),r.connect(o),o.connect(this.sfxGain),n.start(i),n.stop(i+.2);const a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(120,i),a.frequency.exponentialRampToValueAtTime(40,i+.1);const l=e.createGain();l.gain.setValueAtTime(.22,i),l.gain.exponentialRampToValueAtTime(.001,i+.14),a.connect(l),l.connect(this.sfxGain),a.start(i),a.stop(i+.15)}reload(){if(!this.ctx)return;const t=this.ctx;for(let e=0;e<2;e++){const i=t.currentTime+e*.17,n=t.createOscillator();n.type="square",n.frequency.value=e?420:300;const r=t.createGain();r.gain.setValueAtTime(.04,i),r.gain.exponentialRampToValueAtTime(.001,i+.06),n.connect(r),r.connect(this.sfxGain),n.start(i),n.stop(i+.07)}}impact(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuffer;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=900;const r=t.createGain();r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.08),i.connect(n),n.connect(r),r.connect(this.sfxGain),i.start(e),i.stop(e+.1)}explosion(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuffer;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(900,e),n.frequency.exponentialRampToValueAtTime(90,e+.8);const r=t.createGain();r.gain.setValueAtTime(.7,e),r.gain.exponentialRampToValueAtTime(.001,e+1.1),i.connect(n),n.connect(r),r.connect(this.sfxGain),i.start(e),i.stop(e+1.15);const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,e),o.frequency.exponentialRampToValueAtTime(25,e+.5);const a=t.createGain();a.gain.setValueAtTime(.5,e),a.gain.exponentialRampToValueAtTime(.001,e+.7),o.connect(a),a.connect(this.sfxGain),o.start(e),o.stop(e+.75)}crash(t=.5){if(!this.ctx)return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=380;const o=e.createGain();o.gain.setValueAtTime(It(t,.05,.4),i),o.gain.exponentialRampToValueAtTime(.001,i+.22),n.connect(r),r.connect(o),o.connect(this.sfxGain),n.start(i),n.stop(i+.25)}hurt(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(220,e),i.frequency.exponentialRampToValueAtTime(90,e+.2);const n=t.createGain();n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),i.connect(n),n.connect(this.sfxGain),i.start(e),i.stop(e+.24)}pickup(t="health"){if(!this.ctx)return;const e=this.ctx,i=e.currentTime;(t==="cash"?[880,1174,1568]:[660,880,1320]).forEach((r,o)=>{const a=e.createOscillator();a.type="sine",a.frequency.value=r;const l=e.createGain();l.gain.setValueAtTime(0,i+o*.07),l.gain.linearRampToValueAtTime(.09,i+o*.07+.01),l.gain.exponentialRampToValueAtTime(.001,i+o*.07+.18),a.connect(l),l.connect(this.sfxGain),a.start(i+o*.07),a.stop(i+o*.07+.2)})}cash(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;[1200,1600,2e3].forEach((i,n)=>{const r=t.createOscillator();r.type="triangle",r.frequency.value=i;const o=t.createGain();o.gain.setValueAtTime(.05,e+n*.05),o.gain.exponentialRampToValueAtTime(.001,e+n*.05+.12),r.connect(o),o.connect(this.sfxGain),r.start(e+n*.05),r.stop(e+n*.05+.14)})}mission(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;[220,277,330,440].forEach((i,n)=>{const r=t.createOscillator();r.type="sawtooth",r.frequency.value=i;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=2200;const a=t.createGain();a.gain.setValueAtTime(0,e+n*.1),a.gain.linearRampToValueAtTime(.07,e+n*.1+.03),a.gain.exponentialRampToValueAtTime(.001,e+n*.1+.6),r.connect(o),o.connect(a),a.connect(this.sfxGain),r.start(e+n*.1),r.stop(e+n*.1+.65)})}fail(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;[330,262,196].forEach((i,n)=>{const r=t.createOscillator();r.type="triangle",r.frequency.value=i;const o=t.createGain();o.gain.setValueAtTime(.08,e+n*.15),o.gain.exponentialRampToValueAtTime(.001,e+n*.15+.4),r.connect(o),o.connect(this.sfxGain),r.start(e+n*.15),r.stop(e+n*.15+.45)})}wanted(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,i=t.createOscillator();i.type="square",i.frequency.setValueAtTime(440,e),i.frequency.setValueAtTime(660,e+.12);const n=t.createGain();n.gain.setValueAtTime(.05,e),n.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(n),n.connect(this.sfxGain),i.start(e),i.stop(e+.3)}jump(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(280,e),i.frequency.exponentialRampToValueAtTime(620,e+.1);const n=t.createGain();n.gain.setValueAtTime(.04,e),n.gain.exponentialRampToValueAtTime(.001,e+.12),i.connect(n),n.connect(this.sfxGain),i.start(e),i.stop(e+.13)}ui(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,i=t.createOscillator();i.type="sine",i.frequency.value=900;const n=t.createGain();n.gain.setValueAtTime(.03,e),n.gain.exponentialRampToValueAtTime(.001,e+.05),i.connect(n),n.connect(this.sfxGain),i.start(e),i.stop(e+.06)}update(t,e){this.ctx&&(this.scheduleMusic(),this.updateLoop(t,e))}}class U0{constructor(t){this.game=t,this.keys=new Set,this.pressed=new Set,this.mouseDown=!1,this.mouseJustDown=!1,window.addEventListener("keydown",e=>{["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.pressed.add(e.code),e.code==="KeyH"&&t.toggleHelp(),e.code==="KeyM"&&t.toggleMap(),e.code==="KeyP"&&t.togglePause(),e.code==="KeyR"&&t.tryReload(),e.code==="Escape"&&t.closeOverlays())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousedown",e=>{e.button===0&&(this.mouseDown=!0,this.mouseJustDown=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=!1})}isDown(t){return this.keys.has(t)}consume(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}consumeMouse(){const t=this.mouseJustDown;return this.mouseJustDown=!1,t}endFrame(){this.pressed.clear(),this.mouseJustDown=!1}clear(){this.keys.clear(),this.pressed.clear(),this.mouseDown=!1}}class N0{constructor(){this.container=document.getElementById("app"),this.canvas=document.getElementById("game"),this.started=!1,this.paused=!1,this.mapOpen=!1,this.helpOpen=!1,this.deathState=!1,this.elapsed=0,this.wanted=0,this.wantedFloat=0,this.lastCrimeAt=-999,this.wantedDecay=0,this.money=0,this.missionsDone=0,this.hours=17.8,this.cameraYaw=0,this.cameraPitch=.02,this.cameraDistance=6,this.cameraTargetSmooth=new E,this.cameraPosSmooth=new E,this.shakeAmount=0,this.mouseIdle=99,this.autostart=new URLSearchParams(location.search).has("autostart");const t=new URLSearchParams(location.search).get("hour");t&&(this.hours=It(parseFloat(t),0,23.9)),this.vehicles=[],this.peds=[],this.enemies=[],this.initRenderer(),this.initScene(),this.city=new x0(this.scene),this.effects=new A0(this),this.player=new M0(this),this.hud=new R0(this),this.input=new U0(this),this.traffic=new T0(this,18),this.spawnParkedCars(),this.spawnPeds(26),this.audio=new I0,this.police=new E0(this),this.missions=new L0(this),this.setupEvents(),this.setupCamera(),this.applyTimeOfDay(0),this.clock=new Ic,this.boundLoop=this.loop.bind(this),requestAnimationFrame(this.boundLoop),this.autostart?this.startGame(!1):this.hudToggleStartScene(),window.__game=this,window.addEventListener("error",e=>{console.error("[VICE] runtime error",e.error||e.message)})}initRenderer(){this.renderer=new Im({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xl,this.renderer.toneMapping=jo,this.renderer.toneMappingExposure=.92,this.renderer.outputColorSpace=ze}initScene(){this.scene=new Um,this.scene.fog=new aa(3807818,140,720),this.camera=new Ze(62,window.innerWidth/window.innerHeight,.1,12e3),this.camera.position.set(258,24,200),this.skyUniforms={topColor:{value:new at(2366034)},horizonColor:{value:new at(16743019)},lowColor:{value:new at(1444646)},sunDir:{value:new E(-.7,.15,.4)},sunColor:{value:new at(16765066)},uNight:{value:0},uTime:{value:0}};const t=new Pe({uniforms:this.skyUniforms,side:Be,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 lowColor;
        uniform vec3 sunDir;
        uniform vec3 sunColor;
        uniform float uNight;
        uniform float uTime;
        varying vec3 vDir;
        void main() {
          vec3 dir = normalize(vDir);
          float h = dir.y;
          vec3 col = mix(lowColor, horizonColor, smoothstep(-0.18, 0.02, h));
          col = mix(col, topColor, smoothstep(-0.02, 0.44, h));
          vec3 sd = normalize(sunDir);
          float sunDot = max(dot(dir, sd), 0.0);
          float glow = pow(sunDot, 6.0) * 0.24 + pow(sunDot, 42.0) * 0.5;
          float disc = smoothstep(0.99935, 0.9998, sunDot);
          col += sunColor * (glow + disc * 1.6) * (1.0 - uNight * 0.55);
          // soft pink atmospheric band
          col += vec3(0.9, 0.25, 0.55) * smoothstep(0.09, 0.0, abs(h - 0.025)) * 0.06;
          // subtle dithering to avoid banding
          float d = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453);
          col += (d - 0.5) * 0.006;
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sky=new B(new Ce(6e3,40,22),t),this.sky.frustumCulled=!1,this.scene.add(this.sky),this.sunDir=new E(.4,.2,.6),this.sun=new Jr(16757370,2.4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.left=-70,this.sun.shadow.camera.right=70,this.sun.shadow.camera.top=70,this.sun.shadow.camera.bottom=-70,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=280,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun),this.scene.add(this.sun.target),this.moonLight=new Jr(9415167,0),this.moonLight.position.set(-60,100,-40),this.scene.add(this.moonLight),this.hemi=new t0(10466559,3811874,.78),this.scene.add(this.hemi),this.ambient=new n0(5656688,.42),this.scene.add(this.ambient),this.fill=new Jr(10402047,.38),this.fill.position.set(-80,50,-60),this.scene.add(this.fill),this.composer=new c0(this.renderer),this.composer.addPass(new h0(this.scene,this.camera)),this.bloom=new Hn(new st(window.innerWidth,window.innerHeight),.62,.55,.82),this.composer.addPass(this.bloom),this.composer.addPass(new f0);const e=new ve,i=[];for(let n=0;n<1100;n++){const r=1300+Math.random()*500,o=Math.random()*Math.PI*2,a=Math.acos(q(.02,1));i.push(Math.cos(o)*Math.sin(a)*r,Math.cos(a)*r,Math.sin(o)*Math.sin(a)*r)}e.setAttribute("position",new Vt(i,3)),this.stars=new Ac(e,new la({color:16777215,size:2.4,transparent:!0,opacity:0,sizeAttenuation:!1,depthWrite:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.moon=new cs(new Un({map:zi("#dfe8ff",.18),transparent:!0,depthWrite:!1,opacity:0,blending:be})),this.moon.scale.setScalar(90),this.scene.add(this.moon),this.sunGlow=new cs(new Un({map:zi("#ffb36b",.06),transparent:!0,depthWrite:!1,opacity:.8,blending:be})),this.sunGlow.scale.setScalar(260),this.scene.add(this.sunGlow)}setupCamera(){const t=this.player.position;this.cameraTargetSmooth.set(t.x,t.y+1.5,t.z);const e=new E(Math.sin(this.cameraYaw)*6,3,Math.cos(this.cameraYaw)*6);this.cameraPosSmooth.copy(this.cameraTargetSmooth).add(e),this.camera.position.copy(this.cameraPosSmooth),this.camera.lookAt(this.cameraTargetSmooth)}setupEvents(){window.addEventListener("resize",()=>this.onResize()),document.addEventListener("pointerlockchange",()=>{const e=document.pointerLockElement===this.canvas;this.wasLocked&&!e&&this.started&&!this.paused&&!this.mapOpen&&!this.deathState&&this.pause(!0),this.wasLocked=e}),this.canvas.addEventListener("click",()=>{this.started&&!this.paused&&!this.mapOpen&&document.pointerLockElement!==this.canvas&&this.requestLock()}),document.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(this.mapOpen||this.paused||this.deathState||(this.cameraYaw-=e.movementX*.0023,this.cameraPitch=It(this.cameraPitch+e.movementY*.0019,-.12,.78),this.mouseIdle=0))}),document.addEventListener("contextmenu",e=>e.preventDefault()),document.getElementById("start-btn").addEventListener("click",()=>{this.audio.start(),this.startGame(!0)}),document.getElementById("resume-btn").addEventListener("click",()=>this.pause(!1)),document.getElementById("map-close").addEventListener("click",()=>this.toggleMap(!1))}hudToggleStartScene(){this.sceneTitlePos=this.camera.position.clone()}startGame(t=!0){this.started||(this.started=!0,document.getElementById("start-screen").classList.add("hidden"),document.body.classList.add("playing"),this.audio.start(),t&&this.requestLock(),this.input.clear(),this.hud.setMissionName("Free Roam"),setTimeout(()=>{this.hud.showBanner("VICE CITY · 1986","OCEAN DRIVE","The sun is going down. The city is waking up.",4.2)},350),this.hud.subtitle("Welcome to the strip. Look for the pink marker.",4))}requestLock(){var t,e;try{const i=(e=(t=this.canvas).requestPointerLock)==null?void 0:e.call(t);i&&i.catch&&i.catch(()=>{})}catch{}this.wasLocked=!0}pause(t){var e;this.deathState||(this.paused=t,this.hud.showPause(t,this.missionsDone),t?(this.input.clear(),document.pointerLockElement&&((e=document.exitPointerLock)==null||e.call(document)),document.body.classList.remove("playing")):(this.hud.closeMap(),this.mapOpen=!1,this.requestLock(),document.body.classList.add("playing")))}togglePause(){var t;if(this.mapOpen){this.toggleMap(!1);return}this.pause(!this.paused),(t=this.audio)==null||t.ui()}toggleMap(t){if(this.paused||this.deathState)return;const e=t??!this.mapOpen;this.mapOpen=e,this.hud.el["map-screen"].classList.toggle("hidden",!e),e&&(this.hud.drawBigMap(),this.helpOpen&&this.toggleHelp())}toggleHelp(){this.helpOpen=this.hud.toggleHelp(),this.helpOpen&&this.mapOpen&&this.toggleMap(!1)}closeOverlays(){this.mapOpen&&this.toggleMap(!1),this.helpOpen&&this.toggleHelp()}randomSidewalkSpawn(t=8,e=120){var n;const i=((n=this.player)==null?void 0:n.position)||{x:226,z:142};for(let r=0;r<40;r++){let o,a;if(re(.36))o=q(214,232),a=It(i.z+q(-e,e),-228,228);else if(re(.18))o=q(246,282),a=It(i.z+q(-e,e),-228,228);else{const h=Kt(this.city.blocks),u=Nn(0,3);u===0?(o=h.cx+q(-38,38),a=h.cz-38):u===1?(o=h.cx+q(-38,38),a=h.cz+38):u===2?(o=h.cx-38,a=h.cz+q(-38,38)):(o=h.cx+38,a=h.cz+q(-38,38))}const l=Math.hypot(o-i.x,a-i.z);if(l<t||l>e)continue;const c=new E(o,0,a);if(!this.city.collide(c,.5))return{x:o,z:a}}return{x:215+q(-20,20),z:128+q(-20,20)}}spawnPeds(t){for(let e=0;e<t;e++){let i;if(e<11){i={x:q(214,236),z:this.player.position.z+q(-75,75)};const n=new E(i.x,0,i.z);this.city.collide(n,.5)&&(i=this.randomSidewalkSpawn(5,90))}else i=this.randomSidewalkSpawn(8,140);try{this.peds.push(new y0(this,i))}catch(n){console.warn(n)}}}spawnParkedCars(){const t=[[205.4,166,0,"sedan",3050432],[194.6,92,Math.PI,"pickup",9190958],[195.8,78,Math.PI,"taxi",16764718],[205.4,-58,0,"cheetah",16777215],[96.6,205,Math.PI/2,"van",15262680],[-103.4,205,-Math.PI/2,"sedan",7031426],[-205.4,42,0,"taxi",16764718],[205.4,12,0,"infernus",16723349]];for(const[e,i,n,r,o]of t){const a=new pr(this,r,{x:e,z:i},n,o);a.driver=null,this.vehicles.push(a)}}loop(){requestAnimationFrame(this.boundLoop);const t=this.clock.getDelta(),e=Math.min(t,.05);this.started&&!this.paused&&!this.mapOpen?this.update(e):this.started?this.input.endFrame():this.updateTitleScene(e),this.started&&this.hud.update(e),this.composer.render(),window.__gameReady=!0}updateTitleScene(t){this.elapsed+=t,this.hours=17.85+Math.sin(this.elapsed*.015)*.2,this.applyTimeOfDay(t),this.city.update(t,this.elapsed),this.effects.update(t),this.camera.position.set(288+Math.sin(this.elapsed*.05)*5,17+Math.sin(this.elapsed*.09)*1.5,178+Math.cos(this.elapsed*.04)*8),this.camera.lookAt(new E(180,7,55))}update(t){this.elapsed+=t,this.mouseIdle+=t,this.hours=(this.hours+t*.0075)%24,this.applyTimeOfDay(t),this.missions.update(t),this.player.update(t);for(const e of this.vehicles)e.update(t,this.elapsed);this.traffic.update(t,this.elapsed),this.police.update(t,this.wanted),this.updateWanted(t);for(const e of this.peds)e.update(t,this.player.position);for(const e of this.enemies)e.update(t,this.player.position);this.cleanupCorpses(),this.updateCamera(t),this.handleInteraction(),this.handleCombat(t),this.updateReload(t),this.effects.update(t),this.city.update(t,this.elapsed),this.audio.update(this,t),this.player.dead&&this.input.clear(),this.input.endFrame()}applyTimeOfDay(t){const e=(this.hours-6)/24*Math.PI*2;this.sunDir.set(Math.cos(e)*.82,Math.sin(e),.45+Math.cos(e+.4)*.15).normalize(),this.skyUniforms.sunDir.value.copy(this.sunDir),this.skyUniforms.uTime.value=this.elapsed;const i=this.sunDir.y,n=It(-i*3.2,0,1),r=It(1-Math.abs(i)*3.1,0,1),o=new at().setHSL(.075+r*.015,.72,.5+r*.14);this.sun.color.copy(o),this.sun.intensity=It(2.1+r*1.6,0,3.8)*(1-n*.9);const a=this.player?this.player.position:new E;this.sun.position.set(a.x+this.sunDir.x*120,80+this.sunDir.y*150,a.z+this.sunDir.z*120),this.sun.target.position.set(a.x,0,a.z),this.moonLight.intensity=n*.95,this.moonLight.position.set(a.x-this.sunDir.x*100,60+Math.abs(this.sunDir.y)*70,a.z-this.sunDir.z*100),this.hemi.intensity=.8-n*.08,this.ambient.intensity=.38+n*.42,this.fill.intensity=.22+n*.55;const l=It((i+.16)/.48,0,1),c=new at(329487),h=new at(2777016),u=new at(2757970),d=new at(2364216),f=new at(12048639),m=new at(16747090),_=new at(591636),g=new at(7177896),p=c.clone().lerp(h,l).lerp(u,r*.85),x=d.clone().lerp(f,l).lerp(m,r*.95),S=_.clone().lerp(g,l).lerp(new at(5909329),r*.8);this.skyUniforms.topColor.value.copy(p),this.skyUniforms.horizonColor.value.copy(x),this.skyUniforms.lowColor.value.copy(S),this.skyUniforms.uNight.value=n,this.skyUniforms.sunColor.value.setHSL(.08+r*.02,.85,.62);const v=x.clone().lerp(new at(9067130),.45),R=new at(725028),T=new at(12745052),A=R.clone().lerp(v,1-n).lerp(T,r*.5);this.scene.fog.color.copy(A),this.scene.fog.near=120+n*20,this.scene.fog.far=680-n*100,this.stars.material.opacity=It(n*1.2-.12,0,1)*.9,this.moon.material.opacity=It(n*1.3,0,.95),this.moon.position.set(this.camera.position.x-this.sunDir.x*900,220+Math.abs(this.sunDir.y)*300,this.camera.position.z-this.sunDir.z*900),this.renderer.toneMappingExposure=1.02-n*.16,this.bloom.strength=.48+n*.33,this.sunGlow&&(this.sunGlow.position.set(this.camera.position.x+this.sunDir.x*1100,Math.max(-60,this.sunDir.y*800),this.camera.position.z+this.sunDir.z*1100),this.sunGlow.material.opacity=It(r*.45+.08,0,1)*(1-n*.8)),this.city.waterUniforms&&(this.city.waterUniforms.uFogColor.value.copy(A),this.city.waterUniforms.uSun.value.copy(this.sunDir))}clockString(){const t=Math.floor(this.hours)%24,e=Math.floor(this.hours%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}updateCamera(t){const e=this.player;let i,n,r=6.3,o=.7;if(e.inVehicle&&!e.inVehicle.destroyed){const m=e.inVehicle;this.mouseIdle>1.7&&(this.cameraYaw=sn(this.cameraYaw,m.heading+Math.PI,2.2,t)),r=9.2+It(Math.abs(m.speed)/m.spec.maxSpeed,0,1)*2.2,o=2.45;const _=new E(Math.sin(this.cameraYaw),0,Math.cos(this.cameraYaw));i=new E(m.position.x,m.position.y+1.3,m.position.z).addScaledVector(_,-1.2)}else{this.cameraDistance=6.3;const m=new E(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw));i=new E(e.position.x,e.position.y+1.5,e.position.z).addScaledVector(m,1.35),e.speed>7.5&&(r=6.8)}const a=Math.cos(this.cameraPitch),l=new E(Math.sin(this.cameraYaw)*a*r,o+Math.sin(this.cameraPitch)*r,Math.cos(this.cameraYaw)*a*r);n=i.clone().add(l);const c=n.clone().sub(i),h=c.length();c.normalize();const d=new Qr(i,c,0,h+.5).intersectObjects(this.city.shootables,!1);d.length&&d[0].distance<h-.2&&n.copy(i).addScaledVector(c,Math.max(.8,d[0].distance-.35));const f=this.city.groundHeight(n.x,n.z);n.y<f+.6&&(n.y=f+.6),this.cameraTargetSmooth.lerp(i,1-Math.exp(-t*14)),this.cameraPosSmooth.lerp(n,1-Math.exp(-t*11)),this.camera.position.copy(this.cameraPosSmooth),this.shakeAmount>.001&&(this.camera.position.x+=q(-1,1)*this.shakeAmount*.5,this.camera.position.y+=q(-1,1)*this.shakeAmount*.4,this.camera.position.z+=q(-1,1)*this.shakeAmount*.5,this.shakeAmount=ue(this.shakeAmount,0,6,t)),this.camera.lookAt(this.cameraTargetSmooth),this.camera.fov=e.inVehicle?66+It(Math.abs(e.inVehicle.speed)/40,0,1)*10:62,this.camera.updateProjectionMatrix()}shake(t){this.shakeAmount=Math.max(this.shakeAmount,t)}nearestVehicle(t=4.8){let e=null,i=t;for(const n of this.vehicles){if(n.destroyed||n===this.player.inVehicle)continue;const r=Math.hypot(n.position.x-this.player.position.x,n.position.z-this.player.position.z);r<i&&(i=r,e=n)}return e}handleInteraction(){var n,r,o;const t=this.player;if(t.dead)return;const e=this.nearestVehicle(4.8);let i=null;if(this.missions.nearStart?i=`Start job — ${this.missions.mission.name}`:t.inVehicle?i=`Exit ${t.inVehicle.name}`:e&&(i=e.driver==="police"?"Steal police cruiser":`Enter ${e.name}`),this.hud.setPrompt(i),!!this.input.consume("KeyE")){if(this.missions.nearStart&&!t.inVehicle&&this.missions.tryStart()){(n=this.audio)==null||n.ui();return}if(t.inVehicle){t.exitVehicle(),(r=this.audio)==null||r.ui();return}e&&(e.driver==="police"&&this.crime(1,"Grand theft auto"),e.driver="player",e.ai=null,t.enterVehicle(e),this.cameraYaw=e.heading+Math.PI,this.mouseIdle=99,(o=this.audio)==null||o.ui(),e.mission&&this.hud.toast("Get this ride to the drop-off","pink"))}}playerEnteredVehicle(t){this.mouseIdle=99,t.spec.sports&&this.hud.toast(`${t.name} — hold SHIFT to boost`,"pink")}playerExitedVehicle(t){this.cameraYaw=t.heading+Math.PI,this.mouseIdle=99,this.hud.toast("Vehicle parked","")}vehicleWorldCollisions(t,e){var n,r,o,a;if(t.destroyed)return;const i=Math.abs(t.speed);for(const l of this.peds)l.dead||Ue(t.position,l.position)<1.9&&i>3&&(l.hit(100+i*4,t.position),(n=this.effects)==null||n.blood(l.position,2),(r=this.audio)==null||r.impact(),t.driver==="player"&&this.shake(.4));for(const l of this.enemies)l.dead||Ue(t.position,l.position)<1.9&&i>3&&(l.hit(100+i*4,t.position),this.crime(1,"Gang violence"),this.shake(.3));for(const l of this.vehicles){if(l===t||l.destroyed)continue;const c=Math.hypot(l.position.x-t.position.x,l.position.z-t.position.z);if(c<2.85){const h=t.position.x-l.position.x||.01,u=t.position.z-l.position.z||.01,d=Math.hypot(h,u)||1,f=(2.85-c)*.5;if(l.position.x-=h/d*f,l.position.z-=u/d*f,t.position.x+=h/d*f,t.position.z+=u/d*f,t.collisionCooldown<=0){const m=Math.abs(t.speed-l.speed);if(m>3||t.driver==="player"){t.damage(m*1.2+2),l.damage(m*1.2+2);const _=new E((t.position.x+l.position.x)/2,t.position.y+.6,(t.position.z+l.position.z)/2);(o=this.effects)==null||o.sparks(_,14),(a=this.audio)==null||a.crash(It(m/30,.05,.5)),(t.driver==="player"||l.driver==="player")&&(this.shake(It(m/30,.05,.5)),this.player.takeDamage(m*.12,t.position,"traffic collision")),t.collisionCooldown=.5,l.collisionCooldown=.5}}}}}tryReload(){var e;const t=this.player;!t||t.inVehicle||t.dead||t.reloading>0||t.weapon.mag>=t.weapon.maxMag||t.weapon.reserve<=0||(t.reloading=1.35,(e=this.audio)==null||e.reload())}updateReload(t){const e=this.player;if(e.reloading>0&&(e.reloading-=t,e.reloading<=0)){const i=e.weapon.maxMag-e.weapon.mag,n=Math.min(i,e.weapon.reserve);e.weapon.mag+=n,e.weapon.reserve-=n}e.fireCooldown=Math.max(0,e.fireCooldown-t)}handleCombat(t){var u,d,f,m,_,g,p;const e=this.player;if(!e||e.dead||e.reloading>0||!this.input.mouseDown||!this.autostart&&document.pointerLockElement!==this.canvas||e.fireCooldown>0)return;if(e.weapon.mag<=0){this.input.consumeMouse()&&((u=this.audio)==null||u.ui(),this.hud.toast("Out of ammo — press R to reload",""),this.tryReload());return}e.fireCooldown=60/e.weapon.rpm,e.weapon.mag--,e.aimTimer=.4,(d=this.audio)==null||d.gunshot(),this.shake(.11);const i=this.camera.position.clone(),n=new E;this.camera.getWorldDirection(n);const r=new Qr(i,n,0,220),o=[...this.city.shootables];for(const x of this.vehicles)!x.destroyed&&x!==e.inVehicle&&o.push(x.group);for(const x of this.peds)x.dead||o.push(x.group);for(const x of this.enemies)x.dead||o.push(x.group);const a=r.intersectObjects(o,!0);let l=i.clone().addScaledVector(n,160),c=null;if(a.length){const x=a[0];c=x.point.clone(),l=c;let S=x.object,v=null,R=null;for(;S;)S.userData.actor&&(v=S.userData.actor),S.userData.vehicle&&(R=S.userData.vehicle),S=S.parent;v?v.hit&&(v.hit(e.weapon.damage,e.position),this.hud.hitMarker(),v.isPed&&v.dead&&this.hud.toast("Civilian down — cops alerted","pink"),(f=this.effects)==null||f.blood(c,4)):R?(R.damage(e.weapon.damage*.8,e.position),(m=this.effects)==null||m.sparks(c,8),this.hud.hitMarker()):(_=this.effects)==null||_.sparks(c,7,16769696)}let h;if(e.inVehicle){const x=e.inVehicle;h=new E(x.position.x,x.position.y+1.15,x.position.z).addScaledVector(new E(Math.sin(x.heading),0,Math.cos(x.heading)),x.spec.length*.42)}else h=new E(e.position.x,e.position.y+1.35,e.position.z).addScaledVector(new E(Math.sin(e.heading),0,Math.cos(e.heading)),.55).addScaledVector(new E(Math.cos(e.heading),0,-Math.sin(e.heading)),.28);(g=this.effects)==null||g.muzzle(h,e.inVehicle?.9:.65),(p=this.effects)==null||p.tracer(h,l,16771488);for(const x of this.peds)!x.dead&&Ue(x.position,e.position)<38&&x.alert(e.position);this.cameraPitch=It(this.cameraPitch+.006,-.12,.78)}enemyShoot(t,e){var a,l,c,h;if(this.player.dead)return;const i=new E(t.position.x,t.position.y+1.35,t.position.z),n=new E(e.x,e.y+(e.y,1.2),e.z);this.player.inVehicle?n.copy(this.player.inVehicle.position).y+=1.1:n.copy(this.player.position),n.y+=1.15,(a=this.effects)==null||a.muzzle(i,.5),(l=this.effects)==null||l.tracer(i,n,16747115),(c=this.audio)==null||c.gunshot("pistol");const r=Ue(t.position,this.player.position),o=It(.62-r/110,.15,.62);re(o)&&(this.player.inVehicle&&!this.player.inVehicle.destroyed?(this.player.inVehicle.damage(q(3,7)),this.player.takeDamage(q(2,4),t.position,"gunfire")):this.player.takeDamage(q(5,10),t.position,"gunfire"),(h=this.effects)==null||h.blood(this.player.position,2)),this.shake(.08)}policeShoot(t,e){var r,o,a,l;const i=new E(t.position.x,t.position.y+1,t.position.z),n=new E(e.x,e.y+1.1,e.z);(r=this.effects)==null||r.muzzle(i,.5),(o=this.effects)==null||o.tracer(i,n,9423103),(a=this.audio)==null||a.gunshot(),re(.42)&&(this.player.inVehicle&&!this.player.inVehicle.destroyed?(this.player.inVehicle.damage(q(4,8)),this.player.takeDamage(q(2,5),t.position,"police")):this.player.takeDamage(q(4,9),t.position,"police"),(l=this.effects)==null||l.blood(this.player.position,2)),this.shake(.07)}hasLineOfSight(t,e){const i=new E(t.x,1.4,t.z),r=new E(e.x,1.3,e.z).clone().sub(i),o=r.length();return o<.1?!0:(r.normalize(),new Qr(i,r,.1,o-.4).intersectObjects(this.city.shootables,!1).length===0)}onPlayerDamaged(t){this.hud.damage(),this.shakeAmount<.2&&this.shake(.18)}crime(t,e){if(this.deathState)return;this.wantedFloat=Math.min(5,this.wantedFloat+t);const i=Math.min(5,Math.ceil(this.wantedFloat));i>this.wanted&&(this.setWanted(i),e&&this.hud.toast(`Wanted level up — ${e}`,"pink")),this.lastCrimeAt=this.elapsed,this.wantedDecay=0}setWanted(t,e=!1,i=!1){var r;if(t=It(Math.round(t),0,5),t===this.wanted&&!i)return;const n=t>this.wanted;this.wanted=t,this.wantedFloat=t,this.lastCrimeAt=this.elapsed,this.wantedDecay=0,e||(n&&((r=this.audio)==null||r.wanted()),t===0&&this.hud.toast("You lost the cops","gold"))}updateWanted(t){var i;if(this.wanted<=0||this.missions.active&&((i=this.missions.active.steps[this.missions.stepIndex])==null?void 0:i.type)==="escape")return;this.elapsed-this.lastCrimeAt>26&&(this.wantedDecay+=t,this.wantedDecay>8&&(this.wantedDecay=0,this.lastCrimeAt=this.elapsed-20,this.setWanted(this.wanted-1,!0),this.wanted===0&&this.hud.toast("You lost the cops","gold")))}onPlayerDeath(){var i;if(this.deathState)return;this.deathState=!0;const t=this.player;if(t.inVehicle){const n=t.inVehicle,r=new E(Math.cos(n.heading),0,-Math.sin(n.heading)).multiplyScalar(2.2);t.inVehicle=null,n.driver=null,t.position.set(n.position.x+r.x,.2,n.position.z+r.z),t.group.visible=!0}this.missions.onPlayerDeath(),this.setWanted(0,!0,!0),(i=this.audio)==null||i.fail(),this.hud.setPrompt(null);const e=Math.min(this.money,100+Math.floor(this.money*.05));this.money-=e,setTimeout(()=>{this.hud.showDeath(e,()=>{t.respawn(),this.deathState=!1,this.cameraYaw=0,this.cameraPitch=.02,this.setupCamera(),this.hud.toast("Patched up. Back on the strip.","")})},1500)}onEnemyKilled(t){var e;if(re(.4)){const i=Nn(80,240);this.money+=i,this.hud.toast(`Pocketed ${Pn(i)}`,"gold"),(e=this.audio)==null||e.cash()}}onPedKilled(){this.crime(2,"Civilian casualty")}onVehicleDestroyed(t){(t.driver==="police"||t.driver==="player")&&t.driver==="police"&&this.crime(2,"Police cruiser destroyed")}collectPickup(t){var i,n;const e=this.player;if(t==="health")e.health=Math.min(e.maxHealth,e.health+35),this.hud.toast("Health +35","gold");else if(t==="armor")e.armor=Math.min(e.maxArmor,e.armor+50),this.hud.toast("Body armor +50","gold");else if(t==="ammo")e.weapon.reserve+=36,this.hud.toast("Ammo +36","gold");else if(t==="cash"){const r=Nn(150,400);this.money+=r,this.hud.toast(`Found ${Pn(r)}`,"gold")}(i=this.audio)==null||i.pickup(t),(n=this.effects)==null||n.sparks(new E(e.position.x,e.position.y+1.2,e.position.z),12,10354608)}cleanupCorpses(){for(const t of this.peds)t.dead&&t.deathTimer>12&&(t.group.visible=!1);for(const t of this.enemies)t.dead&&t.deathTimer>16&&(t.group.visible=!1)}removeVehicle(t){const e=this.vehicles.indexOf(t);e>=0&&this.vehicles.splice(e,1),t.group.parent&&t.group.parent.remove(t.group),t.group.traverse(i=>{var n,r,o,a;i.geometry&&((r=(n=i.geometry).dispose)==null||r.call(n)),i.material&&(Array.isArray(i.material)?i.material.forEach(l=>{var c;return(c=l.dispose)==null?void 0:c.call(l)}):(a=(o=i.material).dispose)==null||a.call(o))})}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e)}}new N0;
