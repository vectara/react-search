var gu=Object.create;var pr=Object.defineProperty;var du=Object.getOwnPropertyDescriptor;var pu=Object.getOwnPropertyNames;var xu=Object.getPrototypeOf,mu=Object.prototype.hasOwnProperty;var f2=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var fu=(r,i,n,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let l of pu(i))!mu.call(r,l)&&l!==n&&pr(r,l,{get:()=>i[l],enumerable:!(o=du(i,l))||o.enumerable});return r};var k=(r,i,n)=>(n=r!=null?gu(xu(r)):{},fu(i||!r||!r.__esModule?pr(n,"default",{value:r,enumerable:!0}):n,r));var Cr=f2((exports,module)=>{(function(){"use strict";var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_MD5_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&typeof module=="object"&&module.exports,AMD=typeof define=="function"&&define.amd,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}(root.JS_MD5_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(r){return Object.prototype.toString.call(r)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(r){return typeof r=="object"&&r.buffer&&r.buffer.constructor===ArrayBuffer});var createOutputMethod=function(r){return function(i){return new Md5(!0).update(i)[r]()}},createMethod=function(){var r=createOutputMethod("hex");NODE_JS&&(r=nodeWrap(r)),r.create=function(){return new Md5},r.update=function(o){return r.create().update(o)};for(var i=0;i<OUTPUT_TYPES.length;++i){var n=OUTPUT_TYPES[i];r[n]=createOutputMethod(n)}return r},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(r){if(typeof r=="string")return crypto.createHash("md5").update(r,"utf8").digest("hex");if(r==null)throw ERROR;return r.constructor===ArrayBuffer&&(r=new Uint8Array(r)),Array.isArray(r)||ArrayBuffer.isView(r)||r.constructor===Buffer?crypto.createHash("md5").update(new Buffer(r)).digest("hex"):method(r)};return nodeMethod};function Md5(r){if(r)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var i=new ArrayBuffer(68);this.buffer8=new Uint8Array(i),this.blocks=new Uint32Array(i)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(r){if(!this.finalized){var i,n=typeof r;if(n!=="string"){if(n==="object"){if(r===null)throw ERROR;if(ARRAY_BUFFER&&r.constructor===ArrayBuffer)r=new Uint8Array(r);else if(!Array.isArray(r)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(r)))throw ERROR}else throw ERROR;i=!0}for(var o,l=0,s,g=r.length,p=this.blocks,b=this.buffer8;l<g;){if(this.hashed&&(this.hashed=!1,p[0]=p[16],p[16]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=0),i)if(ARRAY_BUFFER)for(s=this.start;l<g&&s<64;++l)b[s++]=r[l];else for(s=this.start;l<g&&s<64;++l)p[s>>2]|=r[l]<<SHIFT[s++&3];else if(ARRAY_BUFFER)for(s=this.start;l<g&&s<64;++l)o=r.charCodeAt(l),o<128?b[s++]=o:o<2048?(b[s++]=192|o>>6,b[s++]=128|o&63):o<55296||o>=57344?(b[s++]=224|o>>12,b[s++]=128|o>>6&63,b[s++]=128|o&63):(o=65536+((o&1023)<<10|r.charCodeAt(++l)&1023),b[s++]=240|o>>18,b[s++]=128|o>>12&63,b[s++]=128|o>>6&63,b[s++]=128|o&63);else for(s=this.start;l<g&&s<64;++l)o=r.charCodeAt(l),o<128?p[s>>2]|=o<<SHIFT[s++&3]:o<2048?(p[s>>2]|=(192|o>>6)<<SHIFT[s++&3],p[s>>2]|=(128|o&63)<<SHIFT[s++&3]):o<55296||o>=57344?(p[s>>2]|=(224|o>>12)<<SHIFT[s++&3],p[s>>2]|=(128|o>>6&63)<<SHIFT[s++&3],p[s>>2]|=(128|o&63)<<SHIFT[s++&3]):(o=65536+((o&1023)<<10|r.charCodeAt(++l)&1023),p[s>>2]|=(240|o>>18)<<SHIFT[s++&3],p[s>>2]|=(128|o>>12&63)<<SHIFT[s++&3],p[s>>2]|=(128|o>>6&63)<<SHIFT[s++&3],p[s>>2]|=(128|o&63)<<SHIFT[s++&3]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var r=this.blocks,i=this.lastByteIndex;r[i>>2]|=EXTRA[i&3],i>=56&&(this.hashed||this.hash(),r[0]=r[16],r[16]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=r[9]=r[10]=r[11]=r[12]=r[13]=r[14]=r[15]=0),r[14]=this.bytes<<3,r[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var r,i,n,o,l,s,g=this.blocks;this.first?(r=g[0]-680876937,r=(r<<7|r>>>25)-271733879<<0,o=(-1732584194^r&2004318071)+g[1]-117830708,o=(o<<12|o>>>20)+r<<0,n=(-271733879^o&(r^-271733879))+g[2]-1126478375,n=(n<<17|n>>>15)+o<<0,i=(r^n&(o^r))+g[3]-1316259209,i=(i<<22|i>>>10)+n<<0):(r=this.h0,i=this.h1,n=this.h2,o=this.h3,r+=(o^i&(n^o))+g[0]-680876936,r=(r<<7|r>>>25)+i<<0,o+=(n^r&(i^n))+g[1]-389564586,o=(o<<12|o>>>20)+r<<0,n+=(i^o&(r^i))+g[2]+606105819,n=(n<<17|n>>>15)+o<<0,i+=(r^n&(o^r))+g[3]-1044525330,i=(i<<22|i>>>10)+n<<0),r+=(o^i&(n^o))+g[4]-176418897,r=(r<<7|r>>>25)+i<<0,o+=(n^r&(i^n))+g[5]+1200080426,o=(o<<12|o>>>20)+r<<0,n+=(i^o&(r^i))+g[6]-1473231341,n=(n<<17|n>>>15)+o<<0,i+=(r^n&(o^r))+g[7]-45705983,i=(i<<22|i>>>10)+n<<0,r+=(o^i&(n^o))+g[8]+1770035416,r=(r<<7|r>>>25)+i<<0,o+=(n^r&(i^n))+g[9]-1958414417,o=(o<<12|o>>>20)+r<<0,n+=(i^o&(r^i))+g[10]-42063,n=(n<<17|n>>>15)+o<<0,i+=(r^n&(o^r))+g[11]-1990404162,i=(i<<22|i>>>10)+n<<0,r+=(o^i&(n^o))+g[12]+1804603682,r=(r<<7|r>>>25)+i<<0,o+=(n^r&(i^n))+g[13]-40341101,o=(o<<12|o>>>20)+r<<0,n+=(i^o&(r^i))+g[14]-1502002290,n=(n<<17|n>>>15)+o<<0,i+=(r^n&(o^r))+g[15]+1236535329,i=(i<<22|i>>>10)+n<<0,r+=(n^o&(i^n))+g[1]-165796510,r=(r<<5|r>>>27)+i<<0,o+=(i^n&(r^i))+g[6]-1069501632,o=(o<<9|o>>>23)+r<<0,n+=(r^i&(o^r))+g[11]+643717713,n=(n<<14|n>>>18)+o<<0,i+=(o^r&(n^o))+g[0]-373897302,i=(i<<20|i>>>12)+n<<0,r+=(n^o&(i^n))+g[5]-701558691,r=(r<<5|r>>>27)+i<<0,o+=(i^n&(r^i))+g[10]+38016083,o=(o<<9|o>>>23)+r<<0,n+=(r^i&(o^r))+g[15]-660478335,n=(n<<14|n>>>18)+o<<0,i+=(o^r&(n^o))+g[4]-405537848,i=(i<<20|i>>>12)+n<<0,r+=(n^o&(i^n))+g[9]+568446438,r=(r<<5|r>>>27)+i<<0,o+=(i^n&(r^i))+g[14]-1019803690,o=(o<<9|o>>>23)+r<<0,n+=(r^i&(o^r))+g[3]-187363961,n=(n<<14|n>>>18)+o<<0,i+=(o^r&(n^o))+g[8]+1163531501,i=(i<<20|i>>>12)+n<<0,r+=(n^o&(i^n))+g[13]-1444681467,r=(r<<5|r>>>27)+i<<0,o+=(i^n&(r^i))+g[2]-51403784,o=(o<<9|o>>>23)+r<<0,n+=(r^i&(o^r))+g[7]+1735328473,n=(n<<14|n>>>18)+o<<0,i+=(o^r&(n^o))+g[12]-1926607734,i=(i<<20|i>>>12)+n<<0,l=i^n,r+=(l^o)+g[5]-378558,r=(r<<4|r>>>28)+i<<0,o+=(l^r)+g[8]-2022574463,o=(o<<11|o>>>21)+r<<0,s=o^r,n+=(s^i)+g[11]+1839030562,n=(n<<16|n>>>16)+o<<0,i+=(s^n)+g[14]-35309556,i=(i<<23|i>>>9)+n<<0,l=i^n,r+=(l^o)+g[1]-1530992060,r=(r<<4|r>>>28)+i<<0,o+=(l^r)+g[4]+1272893353,o=(o<<11|o>>>21)+r<<0,s=o^r,n+=(s^i)+g[7]-155497632,n=(n<<16|n>>>16)+o<<0,i+=(s^n)+g[10]-1094730640,i=(i<<23|i>>>9)+n<<0,l=i^n,r+=(l^o)+g[13]+681279174,r=(r<<4|r>>>28)+i<<0,o+=(l^r)+g[0]-358537222,o=(o<<11|o>>>21)+r<<0,s=o^r,n+=(s^i)+g[3]-722521979,n=(n<<16|n>>>16)+o<<0,i+=(s^n)+g[6]+76029189,i=(i<<23|i>>>9)+n<<0,l=i^n,r+=(l^o)+g[9]-640364487,r=(r<<4|r>>>28)+i<<0,o+=(l^r)+g[12]-421815835,o=(o<<11|o>>>21)+r<<0,s=o^r,n+=(s^i)+g[15]+530742520,n=(n<<16|n>>>16)+o<<0,i+=(s^n)+g[2]-995338651,i=(i<<23|i>>>9)+n<<0,r+=(n^(i|~o))+g[0]-198630844,r=(r<<6|r>>>26)+i<<0,o+=(i^(r|~n))+g[7]+1126891415,o=(o<<10|o>>>22)+r<<0,n+=(r^(o|~i))+g[14]-1416354905,n=(n<<15|n>>>17)+o<<0,i+=(o^(n|~r))+g[5]-57434055,i=(i<<21|i>>>11)+n<<0,r+=(n^(i|~o))+g[12]+1700485571,r=(r<<6|r>>>26)+i<<0,o+=(i^(r|~n))+g[3]-1894986606,o=(o<<10|o>>>22)+r<<0,n+=(r^(o|~i))+g[10]-1051523,n=(n<<15|n>>>17)+o<<0,i+=(o^(n|~r))+g[1]-2054922799,i=(i<<21|i>>>11)+n<<0,r+=(n^(i|~o))+g[8]+1873313359,r=(r<<6|r>>>26)+i<<0,o+=(i^(r|~n))+g[15]-30611744,o=(o<<10|o>>>22)+r<<0,n+=(r^(o|~i))+g[6]-1560198380,n=(n<<15|n>>>17)+o<<0,i+=(o^(n|~r))+g[13]+1309151649,i=(i<<21|i>>>11)+n<<0,r+=(n^(i|~o))+g[4]-145523070,r=(r<<6|r>>>26)+i<<0,o+=(i^(r|~n))+g[11]-1120210379,o=(o<<10|o>>>22)+r<<0,n+=(r^(o|~i))+g[2]+718787259,n=(n<<15|n>>>17)+o<<0,i+=(o^(n|~r))+g[9]-343485551,i=(i<<21|i>>>11)+n<<0,this.first?(this.h0=r+1732584193<<0,this.h1=i-271733879<<0,this.h2=n-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+r<<0,this.h1=this.h1+i<<0,this.h2=this.h2+n<<0,this.h3=this.h3+o<<0)},Md5.prototype.hex=function(){this.finalize();var r=this.h0,i=this.h1,n=this.h2,o=this.h3;return HEX_CHARS[r>>4&15]+HEX_CHARS[r&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[i&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[n&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[o&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var r=this.h0,i=this.h1,n=this.h2,o=this.h3;return[r&255,r>>8&255,r>>16&255,r>>24&255,i&255,i>>8&255,i>>16&255,i>>24&255,n&255,n>>8&255,n>>16&255,n>>24&255,o&255,o>>8&255,o>>16&255,o>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var r=new ArrayBuffer(16),i=new Uint32Array(r);return i[0]=this.h0,i[1]=this.h1,i[2]=this.h2,i[3]=this.h3,r},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var r,i,n,o="",l=this.array(),s=0;s<15;)r=l[s++],i=l[s++],n=l[s++],o+=BASE64_ENCODE_CHAR[r>>>2]+BASE64_ENCODE_CHAR[(r<<4|i>>>4)&63]+BASE64_ENCODE_CHAR[(i<<2|n>>>6)&63]+BASE64_ENCODE_CHAR[n&63];return r=l[s],o+=BASE64_ENCODE_CHAR[r>>>2]+BASE64_ENCODE_CHAR[r<<4&63]+"==",o};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&define(function(){return exports}))})()});var Hr=f2((exports,module)=>{(function(){"use strict";var root=typeof window=="object"?window:{},NODE_JS=!root.JS_SHA1_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS&&(root=global);var COMMON_JS=!root.JS_SHA1_NO_COMMON_JS&&typeof module=="object"&&module.exports,AMD=typeof define=="function"&&define.amd,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[],createOutputMethod=function(r){return function(i){return new Sha1(!0).update(i)[r]()}},createMethod=function(){var r=createOutputMethod("hex");NODE_JS&&(r=nodeWrap(r)),r.create=function(){return new Sha1},r.update=function(o){return r.create().update(o)};for(var i=0;i<OUTPUT_TYPES.length;++i){var n=OUTPUT_TYPES[i];r[n]=createOutputMethod(n)}return r},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(r){if(typeof r=="string")return crypto.createHash("sha1").update(r,"utf8").digest("hex");if(r.constructor===ArrayBuffer)r=new Uint8Array(r);else if(r.length===void 0)return method(r);return crypto.createHash("sha1").update(new Buffer(r)).digest("hex")};return nodeMethod};function Sha1(r){r?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Sha1.prototype.update=function(r){if(!this.finalized){var i=typeof r!="string";i&&r.constructor===root.ArrayBuffer&&(r=new Uint8Array(r));for(var n,o=0,l,s=r.length||0,g=this.blocks;o<s;){if(this.hashed&&(this.hashed=!1,g[0]=this.block,g[16]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=0),i)for(l=this.start;o<s&&l<64;++o)g[l>>2]|=r[o]<<SHIFT[l++&3];else for(l=this.start;o<s&&l<64;++o)n=r.charCodeAt(o),n<128?g[l>>2]|=n<<SHIFT[l++&3]:n<2048?(g[l>>2]|=(192|n>>6)<<SHIFT[l++&3],g[l>>2]|=(128|n&63)<<SHIFT[l++&3]):n<55296||n>=57344?(g[l>>2]|=(224|n>>12)<<SHIFT[l++&3],g[l>>2]|=(128|n>>6&63)<<SHIFT[l++&3],g[l>>2]|=(128|n&63)<<SHIFT[l++&3]):(n=65536+((n&1023)<<10|r.charCodeAt(++o)&1023),g[l>>2]|=(240|n>>18)<<SHIFT[l++&3],g[l>>2]|=(128|n>>12&63)<<SHIFT[l++&3],g[l>>2]|=(128|n>>6&63)<<SHIFT[l++&3],g[l>>2]|=(128|n&63)<<SHIFT[l++&3]);this.lastByteIndex=l,this.bytes+=l-this.start,l>=64?(this.block=g[16],this.start=l-64,this.hash(),this.hashed=!0):this.start=l}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha1.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var r=this.blocks,i=this.lastByteIndex;r[16]=this.block,r[i>>2]|=EXTRA[i&3],this.block=r[16],i>=56&&(this.hashed||this.hash(),r[0]=this.block,r[16]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=r[9]=r[10]=r[11]=r[12]=r[13]=r[14]=r[15]=0),r[14]=this.hBytes<<3|this.bytes>>>29,r[15]=this.bytes<<3,this.hash()}},Sha1.prototype.hash=function(){var r=this.h0,i=this.h1,n=this.h2,o=this.h3,l=this.h4,s,g,p,b=this.blocks;for(g=16;g<80;++g)p=b[g-3]^b[g-8]^b[g-14]^b[g-16],b[g]=p<<1|p>>>31;for(g=0;g<20;g+=5)s=i&n|~i&o,p=r<<5|r>>>27,l=p+s+l+1518500249+b[g]<<0,i=i<<30|i>>>2,s=r&i|~r&n,p=l<<5|l>>>27,o=p+s+o+1518500249+b[g+1]<<0,r=r<<30|r>>>2,s=l&r|~l&i,p=o<<5|o>>>27,n=p+s+n+1518500249+b[g+2]<<0,l=l<<30|l>>>2,s=o&l|~o&r,p=n<<5|n>>>27,i=p+s+i+1518500249+b[g+3]<<0,o=o<<30|o>>>2,s=n&o|~n&l,p=i<<5|i>>>27,r=p+s+r+1518500249+b[g+4]<<0,n=n<<30|n>>>2;for(;g<40;g+=5)s=i^n^o,p=r<<5|r>>>27,l=p+s+l+1859775393+b[g]<<0,i=i<<30|i>>>2,s=r^i^n,p=l<<5|l>>>27,o=p+s+o+1859775393+b[g+1]<<0,r=r<<30|r>>>2,s=l^r^i,p=o<<5|o>>>27,n=p+s+n+1859775393+b[g+2]<<0,l=l<<30|l>>>2,s=o^l^r,p=n<<5|n>>>27,i=p+s+i+1859775393+b[g+3]<<0,o=o<<30|o>>>2,s=n^o^l,p=i<<5|i>>>27,r=p+s+r+1859775393+b[g+4]<<0,n=n<<30|n>>>2;for(;g<60;g+=5)s=i&n|i&o|n&o,p=r<<5|r>>>27,l=p+s+l-1894007588+b[g]<<0,i=i<<30|i>>>2,s=r&i|r&n|i&n,p=l<<5|l>>>27,o=p+s+o-1894007588+b[g+1]<<0,r=r<<30|r>>>2,s=l&r|l&i|r&i,p=o<<5|o>>>27,n=p+s+n-1894007588+b[g+2]<<0,l=l<<30|l>>>2,s=o&l|o&r|l&r,p=n<<5|n>>>27,i=p+s+i-1894007588+b[g+3]<<0,o=o<<30|o>>>2,s=n&o|n&l|o&l,p=i<<5|i>>>27,r=p+s+r-1894007588+b[g+4]<<0,n=n<<30|n>>>2;for(;g<80;g+=5)s=i^n^o,p=r<<5|r>>>27,l=p+s+l-899497514+b[g]<<0,i=i<<30|i>>>2,s=r^i^n,p=l<<5|l>>>27,o=p+s+o-899497514+b[g+1]<<0,r=r<<30|r>>>2,s=l^r^i,p=o<<5|o>>>27,n=p+s+n-899497514+b[g+2]<<0,l=l<<30|l>>>2,s=o^l^r,p=n<<5|n>>>27,i=p+s+i-899497514+b[g+3]<<0,o=o<<30|o>>>2,s=n^o^l,p=i<<5|i>>>27,r=p+s+r-899497514+b[g+4]<<0,n=n<<30|n>>>2;this.h0=this.h0+r<<0,this.h1=this.h1+i<<0,this.h2=this.h2+n<<0,this.h3=this.h3+o<<0,this.h4=this.h4+l<<0},Sha1.prototype.hex=function(){this.finalize();var r=this.h0,i=this.h1,n=this.h2,o=this.h3,l=this.h4;return HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[r&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[i&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[n&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[o&15]+HEX_CHARS[l>>28&15]+HEX_CHARS[l>>24&15]+HEX_CHARS[l>>20&15]+HEX_CHARS[l>>16&15]+HEX_CHARS[l>>12&15]+HEX_CHARS[l>>8&15]+HEX_CHARS[l>>4&15]+HEX_CHARS[l&15]},Sha1.prototype.toString=Sha1.prototype.hex,Sha1.prototype.digest=function(){this.finalize();var r=this.h0,i=this.h1,n=this.h2,o=this.h3,l=this.h4;return[r>>24&255,r>>16&255,r>>8&255,r&255,i>>24&255,i>>16&255,i>>8&255,i&255,n>>24&255,n>>16&255,n>>8&255,n&255,o>>24&255,o>>16&255,o>>8&255,o&255,l>>24&255,l>>16&255,l>>8&255,l&255]},Sha1.prototype.array=Sha1.prototype.digest,Sha1.prototype.arrayBuffer=function(){this.finalize();var r=new ArrayBuffer(20),i=new DataView(r);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),r};var exports=createMethod();COMMON_JS?module.exports=exports:(root.sha1=exports,AMD&&define(function(){return exports}))})()});var wr=f2((Bd,Ar)=>{var bu=Cr(),Vu=Hr(),Mr="0123456789abcdef".split(""),Cu=36,Hu=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Mu=function(){for(var r={},i=0;i<256;i++){var n=i.toString(16);r[n.length===1?"0"+n:n]=i}return r}(),Y2=function(r){var i=r>>4,n=r-(i<<4);return Mr[i]+Mr[n]},Y4=function(r){for(var i="",n=0;n<r.length;n++)i+=Y2(r[n]);return i},Iu=function(r){for(var i=unescape(encodeURIComponent(r)),n=new Uint8Array(i.length),o=0;o<i.length;o++)n[o]=i[o].charCodeAt(0);return n},Au=function(r){return new Uint8Array(bu.arrayBuffer(r))},wu=function(r){return new Uint8Array(Vu.arrayBuffer(r))},Fu=function(r,i){var n=new Uint8Array(r.length+i.length);return n.set(new Uint8Array(r),0),n.set(new Uint8Array(i),r.byteLength),n},Ir=function(r){return typeof r=="string"&&r.length===Cu&&Hu.test(r)},Gu=function(r){if(!Ir(r))throw TypeError("Invalid UUID");for(var i=new Uint8Array(16),n=0,o=0;n<r.length;){if(r[n]==="-"){n++;continue}var l=(r[n]+r[n+1]).toLowerCase();i[o]=Mu[l],o++,n+=2}return i},Ru=function(r,i){return Y4(r.slice(0,4))+"-"+Y4(r.slice(4,6))+"-"+Y2(r[6]&15|parseInt(i*10,16))+Y2(r[7])+"-"+Y2(r[8]&63|128)+Y2(r[9])+"-"+Y4(r.slice(10,16))};Ar.exports={uint8ToHex:Y2,uint8ArrayToHex:Y4,stringToCharBuffer:Iu,md5Hash:Au,sha1Hash:wu,concatBuffers:Fu,validateUuid:Ir,parseUuid:Gu,hashToUuid:Ru}});var Gr=f2((bd,Fr)=>{var E2=wr(),Su=new Uint8Array(0);function k9(r,i,n){if(typeof r!="string")throw TypeError("Value must be string");if(typeof i=="number")return k9(r,void 0,i);if(n==null)return k9(r,i,5);if(n!==3&&n!==5)throw TypeError("Version of UUID can be only 3 or 5");var o=E2.stringToCharBuffer(r),l=typeof i=="string"?E2.parseUuid(i):Su,s=E2.concatBuffers(l,o),g=n===3?E2.md5Hash(s):E2.sha1Hash(s);return E2.hashToUuid(g,n)}Fr.exports=k9});var E=f2((Vd,E4)=>{(function(){"use strict";var r={}.hasOwnProperty,i="[native code]";function n(){for(var o=[],l=0;l<arguments.length;l++){var s=arguments[l];if(s){var g=typeof s;if(g==="string"||g==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var p=n.apply(null,s);p&&o.push(p)}}else if(g==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var b in s)r.call(s,b)&&s[b]&&o.push(b)}}}return o.join(" ")}typeof E4<"u"&&E4.exports?(n.default=n,E4.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});var x8=f2((bC,x3)=>{var cg=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var Q=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,o={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function m(B){return B instanceof s?new s(B.type,m(B.content),B.alias):Array.isArray(B)?B.map(m):B.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++n}),m.__id},clone:function m(B,V){V=V||{};var F,R;switch(l.util.type(B)){case"Object":if(R=l.util.objId(B),V[R])return V[R];F={},V[R]=F;for(var N in B)B.hasOwnProperty(N)&&(F[N]=m(B[N],V));return F;case"Array":return R=l.util.objId(B),V[R]?V[R]:(F=[],V[R]=F,B.forEach(function(O,X){F[X]=m(O,V)}),F);default:return B}},getLanguage:function(m){for(;m;){var B=i.exec(m.className);if(B)return B[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,B){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+B)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(F){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(F.stack)||[])[1];if(m){var B=document.getElementsByTagName("script");for(var V in B)if(B[V].src==m)return B[V]}return null}},isActive:function(m,B,V){for(var F="no-"+B;m;){var R=m.classList;if(R.contains(B))return!0;if(R.contains(F))return!1;m=m.parentElement}return!!V}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(m,B){var V=l.util.clone(l.languages[m]);for(var F in B)V[F]=B[F];return V},insertBefore:function(m,B,V,F){F=F||l.languages;var R=F[m],N={};for(var O in R)if(R.hasOwnProperty(O)){if(O==B)for(var X in V)V.hasOwnProperty(X)&&(N[X]=V[X]);V.hasOwnProperty(O)||(N[O]=R[O])}var q=F[m];return F[m]=N,l.languages.DFS(l.languages,function(c1,A1){A1===q&&c1!=m&&(this[c1]=N)}),N},DFS:function m(B,V,F,R){R=R||{};var N=l.util.objId;for(var O in B)if(B.hasOwnProperty(O)){V.call(B,O,B[O],F||O);var X=B[O],q=l.util.type(X);q==="Object"&&!R[N(X)]?(R[N(X)]=!0,m(X,V,null,R)):q==="Array"&&!R[N(X)]&&(R[N(X)]=!0,m(X,V,O,R))}}},plugins:{},highlightAll:function(m,B){l.highlightAllUnder(document,m,B)},highlightAllUnder:function(m,B,V){var F={callback:V,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",F),F.elements=Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)),l.hooks.run("before-all-elements-highlight",F);for(var R=0,N;N=F.elements[R++];)l.highlightElement(N,B===!0,F.callback)},highlightElement:function(m,B,V){var F=l.util.getLanguage(m),R=l.languages[F];l.util.setLanguage(m,F);var N=m.parentElement;N&&N.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(N,F);var O=m.textContent,X={element:m,language:F,grammar:R,code:O};function q(A1){X.highlightedCode=A1,l.hooks.run("before-insert",X),X.element.innerHTML=X.highlightedCode,l.hooks.run("after-highlight",X),l.hooks.run("complete",X),V&&V.call(X.element)}if(l.hooks.run("before-sanity-check",X),N=X.element.parentElement,N&&N.nodeName.toLowerCase()==="pre"&&!N.hasAttribute("tabindex")&&N.setAttribute("tabindex","0"),!X.code){l.hooks.run("complete",X),V&&V.call(X.element);return}if(l.hooks.run("before-highlight",X),!X.grammar){q(l.util.encode(X.code));return}if(B&&r.Worker){var c1=new Worker(l.filename);c1.onmessage=function(A1){q(A1.data)},c1.postMessage(JSON.stringify({language:X.language,code:X.code,immediateClose:!0}))}else q(l.highlight(X.code,X.grammar,X.language))},highlight:function(m,B,V){var F={code:m,grammar:B,language:V};if(l.hooks.run("before-tokenize",F),!F.grammar)throw new Error('The language "'+F.language+'" has no grammar.');return F.tokens=l.tokenize(F.code,F.grammar),l.hooks.run("after-tokenize",F),s.stringify(l.util.encode(F.tokens),F.language)},tokenize:function(m,B){var V=B.rest;if(V){for(var F in V)B[F]=V[F];delete B.rest}var R=new b;return H(R,R.head,m),p(m,R,B,R.head,0),M(R)},hooks:{all:{},add:function(m,B){var V=l.hooks.all;V[m]=V[m]||[],V[m].push(B)},run:function(m,B){var V=l.hooks.all[m];if(!(!V||!V.length))for(var F=0,R;R=V[F++];)R(B)}},Token:s};r.Prism=l;function s(m,B,V,F){this.type=m,this.content=B,this.alias=V,this.length=(F||"").length|0}s.stringify=function m(B,V){if(typeof B=="string")return B;if(Array.isArray(B)){var F="";return B.forEach(function(q){F+=m(q,V)}),F}var R={type:B.type,content:m(B.content,V),tag:"span",classes:["token",B.type],attributes:{},language:V},N=B.alias;N&&(Array.isArray(N)?Array.prototype.push.apply(R.classes,N):R.classes.push(N)),l.hooks.run("wrap",R);var O="";for(var X in R.attributes)O+=" "+X+'="'+(R.attributes[X]||"").replace(/"/g,"&quot;")+'"';return"<"+R.tag+' class="'+R.classes.join(" ")+'"'+O+">"+R.content+"</"+R.tag+">"};function g(m,B,V,F){m.lastIndex=B;var R=m.exec(V);if(R&&F&&R[1]){var N=R[1].length;R.index+=N,R[0]=R[0].slice(N)}return R}function p(m,B,V,F,R,N){for(var O in V)if(!(!V.hasOwnProperty(O)||!V[O])){var X=V[O];X=Array.isArray(X)?X:[X];for(var q=0;q<X.length;++q){if(N&&N.cause==O+","+q)return;var c1=X[q],A1=c1.inside,I0=!!c1.lookbehind,x0=!!c1.greedy,Y1=c1.alias;if(x0&&!c1.pattern.global){var l1=c1.pattern.toString().match(/[imsuy]*$/)[0];c1.pattern=RegExp(c1.pattern.source,l1+"g")}for(var h1=c1.pattern||c1,P=F.next,p1=R;P!==B.tail&&!(N&&p1>=N.reach);p1+=P.value.length,P=P.next){var i0=P.value;if(B.length>m.length)return;if(!(i0 instanceof s)){var m0=1,z1;if(x0){if(z1=g(h1,p1,m,I0),!z1||z1.index>=m.length)break;var P1=z1.index,ut=z1.index+z1[0].length,n0=p1;for(n0+=P.value.length;P1>=n0;)P=P.next,n0+=P.value.length;if(n0-=P.value.length,p1=n0,P.value instanceof s)continue;for(var Z0=P;Z0!==B.tail&&(n0<ut||typeof Z0.value=="string");Z0=Z0.next)m0++,n0+=Z0.value.length;m0--,i0=m.slice(p1,n0),z1.index-=p1}else if(z1=g(h1,0,i0,I0),!z1)continue;var P1=z1.index,f0=z1[0],_0=i0.slice(0,P1),A0=i0.slice(P1+f0.length),z0=p1+i0.length;N&&z0>N.reach&&(N.reach=z0);var E1=P.prev;_0&&(E1=H(B,E1,_0),p1+=_0.length),w(B,E1,m0);var o0=new s(O,A1?l.tokenize(f0,A1):f0,Y1,f0);if(P=H(B,E1,o0),A0&&H(B,P,A0),m0>1){var c0={cause:O+","+q,reach:z0};p(m,B,V,P.prev,p1,c0),N&&c0.reach>N.reach&&(N.reach=c0.reach)}}}}}}function b(){var m={value:null,prev:null,next:null},B={value:null,prev:m,next:null};m.next=B,this.head=m,this.tail=B,this.length=0}function H(m,B,V){var F=B.next,R={value:V,prev:B,next:F};return B.next=R,F.prev=R,m.length++,R}function w(m,B,V){for(var F=B.next,R=0;R<V&&F!==m.tail;R++)F=F.next;B.next=F,F.prev=B,m.length-=R}function M(m){for(var B=[],V=m.head.next;V!==m.tail;)B.push(V.value),V=V.next;return B}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(m){var B=JSON.parse(m.data),V=B.language,F=B.code,R=B.immediateClose;r.postMessage(l.highlight(F,l.languages[V],V)),R&&r.close()},!1)),l;var y=l.util.currentScript();y&&(l.filename=y.src,y.hasAttribute("data-manual")&&(l.manual=!0));function L(){l.manual||l.highlightAll()}if(!l.manual){var Z=document.readyState;Z==="loading"||Z==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return l}(cg);typeof x3<"u"&&x3.exports&&(x3.exports=Q);typeof global<"u"&&(global.Prism=Q);Q.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Q.languages.markup.tag.inside["attr-value"].inside.entity=Q.languages.markup.entity;Q.languages.markup.doctype.inside["internal-subset"].inside=Q.languages.markup;Q.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))});Object.defineProperty(Q.languages.markup.tag,"addInlined",{value:function(i,n){var o={};o["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Q.languages[n]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+n]={pattern:/[\s\S]+/,inside:Q.languages[n]};var s={};s[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:l},Q.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Q.languages.markup.tag,"addAttribute",{value:function(r,i){Q.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:Q.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Q.languages.html=Q.languages.markup;Q.languages.mathml=Q.languages.markup;Q.languages.svg=Q.languages.markup;Q.languages.xml=Q.languages.extend("markup",{});Q.languages.ssml=Q.languages.xml;Q.languages.atom=Q.languages.xml;Q.languages.rss=Q.languages.xml;(function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var n=r.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Q);Q.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Q.languages.javascript=Q.languages.extend("clike",{"class-name":[Q.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Q.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Q.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Q.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Q.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Q.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Q.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Q.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Q.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Q.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Q.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Q.languages.markup&&(Q.languages.markup.tag.addInlined("script","javascript"),Q.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Q.languages.js=Q.languages.javascript;(function(){if(typeof Q>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading\u2026",i=function(y,L){return"\u2716 Error "+y+" while fetching file: "+L},n="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",s="loading",g="loaded",p="failed",b="pre[data-src]:not(["+l+'="'+g+'"]):not(['+l+'="'+s+'"])';function H(y,L,Z){var m=new XMLHttpRequest;m.open("GET",y,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?L(m.responseText):m.status>=400?Z(i(m.status,m.statusText)):Z(n))},m.send(null)}function w(y){var L=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(L){var Z=Number(L[1]),m=L[2],B=L[3];return m?B?[Z,Number(B)]:[Z,void 0]:[Z,Z]}}Q.hooks.add("before-highlightall",function(y){y.selector+=", "+b}),Q.hooks.add("before-sanity-check",function(y){var L=y.element;if(L.matches(b)){y.code="",L.setAttribute(l,s);var Z=L.appendChild(document.createElement("CODE"));Z.textContent=r;var m=L.getAttribute("data-src"),B=y.language;if(B==="none"){var V=(/\.(\w+)$/.exec(m)||[,"none"])[1];B=o[V]||V}Q.util.setLanguage(Z,B),Q.util.setLanguage(L,B);var F=Q.plugins.autoloader;F&&F.loadLanguages(B),H(m,function(R){L.setAttribute(l,g);var N=w(L.getAttribute("data-range"));if(N){var O=R.split(/\r\n?|\n/g),X=N[0],q=N[1]==null?O.length:N[1];X<0&&(X+=O.length),X=Math.max(0,Math.min(X-1,O.length)),q<0&&(q+=O.length),q=Math.max(0,Math.min(q,O.length)),R=O.slice(X,q).join(`
`),L.hasAttribute("data-start")||L.setAttribute("data-start",String(X+1))}Z.textContent=R,Q.highlightElement(Z)},function(R){L.setAttribute(l,p),Z.textContent=R})}}),Q.plugins.fileHighlight={highlight:function(L){for(var Z=(L||document).querySelectorAll(b),m=0,B;B=Z[m++];)Q.highlightElement(B)}};var M=!1;Q.fileHighlight=function(){M||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),M=!0),Q.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var f8=f2((lt,qt)=>{(function(){var r,i="4.17.21",n=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",s="Invalid `variable` option passed into `_.template`",g="__lodash_hash_undefined__",p=500,b="__lodash_placeholder__",H=1,w=2,M=4,y=1,L=2,Z=1,m=2,B=4,V=8,F=16,R=32,N=64,O=128,X=256,q=512,c1=30,A1="...",I0=800,x0=16,Y1=1,l1=2,h1=3,P=1/0,p1=9007199254740991,i0=17976931348623157e292,m0=NaN,z1=4294967295,ut=z1-1,n0=z1>>>1,Z0=[["ary",O],["bind",Z],["bindKey",m],["curry",V],["curryRight",F],["flip",q],["partial",R],["partialRight",N],["rearg",X]],P1="[object Arguments]",f0="[object Array]",_0="[object AsyncFunction]",A0="[object Boolean]",z0="[object Date]",E1="[object DOMException]",o0="[object Error]",c0="[object Function]",st="[object GeneratorFunction]",B0="[object Map]",vt="[object Number]",w8="[object Null]",U0="[object Object]",O5="[object Promise]",F8="[object Proxy]",gt="[object RegExp]",b0="[object Set]",dt="[object String]",t4="[object Symbol]",G8="[object Undefined]",pt="[object WeakMap]",R8="[object WeakSet]",xt="[object ArrayBuffer]",G2="[object DataView]",b3="[object Float32Array]",V3="[object Float64Array]",C3="[object Int8Array]",H3="[object Int16Array]",M3="[object Int32Array]",I3="[object Uint8Array]",A3="[object Uint8ClampedArray]",w3="[object Uint16Array]",F3="[object Uint32Array]",S8=/\b__p \+= '';/g,L8=/\b(__p \+=) '' \+/g,y8=/(__e\(.*?\)|\b__t\)) \+\n'';/g,W5=/&(?:amp|lt|gt|quot|#39);/g,T5=/[&<>"']/g,Z8=RegExp(W5.source),U8=RegExp(T5.source),N8=/<%-([\s\S]+?)%>/g,X8=/<%([\s\S]+?)%>/g,Q5=/<%=([\s\S]+?)%>/g,O8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W8=/^\w*$/,T8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,G3=/[\\^$.*+?()[\]{}|]/g,Q8=RegExp(G3.source),R3=/^\s+/,k8=/\s/,Y8=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,E8=/\{\n\/\* \[wrapped with (.+)\] \*/,J8=/,? & /,D8=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_8=/[()=,{}\[\]\/\s]/,j8=/\\(\\)?/g,P8=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,k5=/\w*$/,K8=/^[-+]0x[0-9a-f]+$/i,$8=/^0b[01]+$/i,q8=/^\[object .+?Constructor\]$/,t6=/^0o[0-7]+$/i,a6=/^(?:0|[1-9]\d*)$/,r6=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a4=/($^)/,e6=/['\n\r\u2028\u2029\\]/g,r4="\\ud800-\\udfff",i6="\\u0300-\\u036f",n6="\\ufe20-\\ufe2f",o6="\\u20d0-\\u20ff",Y5=i6+n6+o6,E5="\\u2700-\\u27bf",J5="a-z\\xdf-\\xf6\\xf8-\\xff",c6="\\xac\\xb1\\xd7\\xf7",l6="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",h6="\\u2000-\\u206f",u6=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",D5="A-Z\\xc0-\\xd6\\xd8-\\xde",_5="\\ufe0e\\ufe0f",j5=c6+l6+h6+u6,S3="['\u2019]",s6="["+r4+"]",P5="["+j5+"]",e4="["+Y5+"]",K5="\\d+",v6="["+E5+"]",$5="["+J5+"]",q5="[^"+r4+j5+K5+E5+J5+D5+"]",L3="\\ud83c[\\udffb-\\udfff]",g6="(?:"+e4+"|"+L3+")",ta="[^"+r4+"]",y3="(?:\\ud83c[\\udde6-\\uddff]){2}",Z3="[\\ud800-\\udbff][\\udc00-\\udfff]",R2="["+D5+"]",aa="\\u200d",ra="(?:"+$5+"|"+q5+")",d6="(?:"+R2+"|"+q5+")",ea="(?:"+S3+"(?:d|ll|m|re|s|t|ve))?",ia="(?:"+S3+"(?:D|LL|M|RE|S|T|VE))?",na=g6+"?",oa="["+_5+"]?",p6="(?:"+aa+"(?:"+[ta,y3,Z3].join("|")+")"+oa+na+")*",x6="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",m6="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ca=oa+na+p6,f6="(?:"+[v6,y3,Z3].join("|")+")"+ca,z6="(?:"+[ta+e4+"?",e4,y3,Z3,s6].join("|")+")",B6=RegExp(S3,"g"),b6=RegExp(e4,"g"),U3=RegExp(L3+"(?="+L3+")|"+z6+ca,"g"),V6=RegExp([R2+"?"+$5+"+"+ea+"(?="+[P5,R2,"$"].join("|")+")",d6+"+"+ia+"(?="+[P5,R2+ra,"$"].join("|")+")",R2+"?"+ra+"+"+ea,R2+"+"+ia,m6,x6,K5,f6].join("|"),"g"),C6=RegExp("["+aa+r4+Y5+_5+"]"),H6=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,M6=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],I6=-1,x1={};x1[b3]=x1[V3]=x1[C3]=x1[H3]=x1[M3]=x1[I3]=x1[A3]=x1[w3]=x1[F3]=!0,x1[P1]=x1[f0]=x1[xt]=x1[A0]=x1[G2]=x1[z0]=x1[o0]=x1[c0]=x1[B0]=x1[vt]=x1[U0]=x1[gt]=x1[b0]=x1[dt]=x1[pt]=!1;var d1={};d1[P1]=d1[f0]=d1[xt]=d1[G2]=d1[A0]=d1[z0]=d1[b3]=d1[V3]=d1[C3]=d1[H3]=d1[M3]=d1[B0]=d1[vt]=d1[U0]=d1[gt]=d1[b0]=d1[dt]=d1[t4]=d1[I3]=d1[A3]=d1[w3]=d1[F3]=!0,d1[o0]=d1[c0]=d1[pt]=!1;var A6={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},w6={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},F6={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},G6={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},R6=parseFloat,S6=parseInt,la=typeof global=="object"&&global&&global.Object===Object&&global,L6=typeof self=="object"&&self&&self.Object===Object&&self,R1=la||L6||Function("return this")(),N3=typeof lt=="object"&&lt&&!lt.nodeType&&lt,h2=N3&&typeof qt=="object"&&qt&&!qt.nodeType&&qt,ha=h2&&h2.exports===N3,X3=ha&&la.process,l0=function(){try{var f=h2&&h2.require&&h2.require("util").types;return f||X3&&X3.binding&&X3.binding("util")}catch{}}(),ua=l0&&l0.isArrayBuffer,sa=l0&&l0.isDate,va=l0&&l0.isMap,ga=l0&&l0.isRegExp,da=l0&&l0.isSet,pa=l0&&l0.isTypedArray;function K1(f,I,C){switch(C.length){case 0:return f.call(I);case 1:return f.call(I,C[0]);case 2:return f.call(I,C[0],C[1]);case 3:return f.call(I,C[0],C[1],C[2])}return f.apply(I,C)}function y6(f,I,C,W){for(var _=-1,o1=f==null?0:f.length;++_<o1;){var w1=f[_];I(W,w1,C(w1),f)}return W}function h0(f,I){for(var C=-1,W=f==null?0:f.length;++C<W&&I(f[C],C,f)!==!1;);return f}function Z6(f,I){for(var C=f==null?0:f.length;C--&&I(f[C],C,f)!==!1;);return f}function xa(f,I){for(var C=-1,W=f==null?0:f.length;++C<W;)if(!I(f[C],C,f))return!1;return!0}function j0(f,I){for(var C=-1,W=f==null?0:f.length,_=0,o1=[];++C<W;){var w1=f[C];I(w1,C,f)&&(o1[_++]=w1)}return o1}function i4(f,I){var C=f==null?0:f.length;return!!C&&S2(f,I,0)>-1}function O3(f,I,C){for(var W=-1,_=f==null?0:f.length;++W<_;)if(C(I,f[W]))return!0;return!1}function B1(f,I){for(var C=-1,W=f==null?0:f.length,_=Array(W);++C<W;)_[C]=I(f[C],C,f);return _}function P0(f,I){for(var C=-1,W=I.length,_=f.length;++C<W;)f[_+C]=I[C];return f}function W3(f,I,C,W){var _=-1,o1=f==null?0:f.length;for(W&&o1&&(C=f[++_]);++_<o1;)C=I(C,f[_],_,f);return C}function U6(f,I,C,W){var _=f==null?0:f.length;for(W&&_&&(C=f[--_]);_--;)C=I(C,f[_],_,f);return C}function T3(f,I){for(var C=-1,W=f==null?0:f.length;++C<W;)if(I(f[C],C,f))return!0;return!1}var N6=Q3("length");function X6(f){return f.split("")}function O6(f){return f.match(D8)||[]}function ma(f,I,C){var W;return C(f,function(_,o1,w1){if(I(_,o1,w1))return W=o1,!1}),W}function n4(f,I,C,W){for(var _=f.length,o1=C+(W?1:-1);W?o1--:++o1<_;)if(I(f[o1],o1,f))return o1;return-1}function S2(f,I,C){return I===I?K6(f,I,C):n4(f,fa,C)}function W6(f,I,C,W){for(var _=C-1,o1=f.length;++_<o1;)if(W(f[_],I))return _;return-1}function fa(f){return f!==f}function za(f,I){var C=f==null?0:f.length;return C?Y3(f,I)/C:m0}function Q3(f){return function(I){return I==null?r:I[f]}}function k3(f){return function(I){return f==null?r:f[I]}}function Ba(f,I,C,W,_){return _(f,function(o1,w1,g1){C=W?(W=!1,o1):I(C,o1,w1,g1)}),C}function T6(f,I){var C=f.length;for(f.sort(I);C--;)f[C]=f[C].value;return f}function Y3(f,I){for(var C,W=-1,_=f.length;++W<_;){var o1=I(f[W]);o1!==r&&(C=C===r?o1:C+o1)}return C}function E3(f,I){for(var C=-1,W=Array(f);++C<f;)W[C]=I(C);return W}function Q6(f,I){return B1(I,function(C){return[C,f[C]]})}function ba(f){return f&&f.slice(0,Ma(f)+1).replace(R3,"")}function $1(f){return function(I){return f(I)}}function J3(f,I){return B1(I,function(C){return f[C]})}function mt(f,I){return f.has(I)}function Va(f,I){for(var C=-1,W=f.length;++C<W&&S2(I,f[C],0)>-1;);return C}function Ca(f,I){for(var C=f.length;C--&&S2(I,f[C],0)>-1;);return C}function k6(f,I){for(var C=f.length,W=0;C--;)f[C]===I&&++W;return W}var Y6=k3(A6),E6=k3(w6);function J6(f){return"\\"+G6[f]}function D6(f,I){return f==null?r:f[I]}function L2(f){return C6.test(f)}function _6(f){return H6.test(f)}function j6(f){for(var I,C=[];!(I=f.next()).done;)C.push(I.value);return C}function D3(f){var I=-1,C=Array(f.size);return f.forEach(function(W,_){C[++I]=[_,W]}),C}function Ha(f,I){return function(C){return f(I(C))}}function K0(f,I){for(var C=-1,W=f.length,_=0,o1=[];++C<W;){var w1=f[C];(w1===I||w1===b)&&(f[C]=b,o1[_++]=C)}return o1}function o4(f){var I=-1,C=Array(f.size);return f.forEach(function(W){C[++I]=W}),C}function P6(f){var I=-1,C=Array(f.size);return f.forEach(function(W){C[++I]=[W,W]}),C}function K6(f,I,C){for(var W=C-1,_=f.length;++W<_;)if(f[W]===I)return W;return-1}function $6(f,I,C){for(var W=C+1;W--;)if(f[W]===I)return W;return W}function y2(f){return L2(f)?ti(f):N6(f)}function V0(f){return L2(f)?ai(f):X6(f)}function Ma(f){for(var I=f.length;I--&&k8.test(f.charAt(I)););return I}var q6=k3(F6);function ti(f){for(var I=U3.lastIndex=0;U3.test(f);)++I;return I}function ai(f){return f.match(U3)||[]}function ri(f){return f.match(V6)||[]}var ei=function f(I){I=I==null?R1:$0.defaults(R1.Object(),I,$0.pick(R1,M6));var C=I.Array,W=I.Date,_=I.Error,o1=I.Function,w1=I.Math,g1=I.Object,_3=I.RegExp,ii=I.String,u0=I.TypeError,c4=C.prototype,ni=o1.prototype,Z2=g1.prototype,l4=I["__core-js_shared__"],h4=ni.toString,s1=Z2.hasOwnProperty,oi=0,Ia=function(){var t=/[^.]+$/.exec(l4&&l4.keys&&l4.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),u4=Z2.toString,ci=h4.call(g1),li=R1._,hi=_3("^"+h4.call(s1).replace(G3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),s4=ha?I.Buffer:r,q0=I.Symbol,v4=I.Uint8Array,Aa=s4?s4.allocUnsafe:r,g4=Ha(g1.getPrototypeOf,g1),wa=g1.create,Fa=Z2.propertyIsEnumerable,d4=c4.splice,Ga=q0?q0.isConcatSpreadable:r,ft=q0?q0.iterator:r,u2=q0?q0.toStringTag:r,p4=function(){try{var t=p2(g1,"defineProperty");return t({},"",{}),t}catch{}}(),ui=I.clearTimeout!==R1.clearTimeout&&I.clearTimeout,si=W&&W.now!==R1.Date.now&&W.now,vi=I.setTimeout!==R1.setTimeout&&I.setTimeout,x4=w1.ceil,m4=w1.floor,j3=g1.getOwnPropertySymbols,gi=s4?s4.isBuffer:r,Ra=I.isFinite,di=c4.join,pi=Ha(g1.keys,g1),F1=w1.max,Z1=w1.min,xi=W.now,mi=I.parseInt,Sa=w1.random,fi=c4.reverse,P3=p2(I,"DataView"),zt=p2(I,"Map"),K3=p2(I,"Promise"),U2=p2(I,"Set"),Bt=p2(I,"WeakMap"),bt=p2(g1,"create"),f4=Bt&&new Bt,N2={},zi=x2(P3),Bi=x2(zt),bi=x2(K3),Vi=x2(U2),Ci=x2(Bt),z4=q0?q0.prototype:r,Vt=z4?z4.valueOf:r,La=z4?z4.toString:r;function u(t){if(C1(t)&&!j(t)&&!(t instanceof e1)){if(t instanceof s0)return t;if(s1.call(t,"__wrapped__"))return y7(t)}return new s0(t)}var X2=function(){function t(){}return function(a){if(!V1(a))return{};if(wa)return wa(a);t.prototype=a;var e=new t;return t.prototype=r,e}}();function B4(){}function s0(t,a){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=r}u.templateSettings={escape:N8,evaluate:X8,interpolate:Q5,variable:"",imports:{_:u}},u.prototype=B4.prototype,u.prototype.constructor=u,s0.prototype=X2(B4.prototype),s0.prototype.constructor=s0;function e1(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=z1,this.__views__=[]}function Hi(){var t=new e1(this.__wrapped__);return t.__actions__=J1(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=J1(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=J1(this.__views__),t}function Mi(){if(this.__filtered__){var t=new e1(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Ii(){var t=this.__wrapped__.value(),a=this.__dir__,e=j(t),c=a<0,h=e?t.length:0,v=On(0,h,this.__views__),d=v.start,x=v.end,z=x-d,A=c?x:d-1,G=this.__iteratees__,S=G.length,U=0,T=Z1(z,this.__takeCount__);if(!e||!c&&h==z&&T==z)return e7(t,this.__actions__);var J=[];t:for(;z--&&U<T;){A+=a;for(var $=-1,D=t[A];++$<S;){var r1=G[$],i1=r1.iteratee,a0=r1.type,T1=i1(D);if(a0==l1)D=T1;else if(!T1){if(a0==Y1)continue t;break t}}J[U++]=D}return J}e1.prototype=X2(B4.prototype),e1.prototype.constructor=e1;function s2(t){var a=-1,e=t==null?0:t.length;for(this.clear();++a<e;){var c=t[a];this.set(c[0],c[1])}}function Ai(){this.__data__=bt?bt(null):{},this.size=0}function wi(t){var a=this.has(t)&&delete this.__data__[t];return this.size-=a?1:0,a}function Fi(t){var a=this.__data__;if(bt){var e=a[t];return e===g?r:e}return s1.call(a,t)?a[t]:r}function Gi(t){var a=this.__data__;return bt?a[t]!==r:s1.call(a,t)}function Ri(t,a){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=bt&&a===r?g:a,this}s2.prototype.clear=Ai,s2.prototype.delete=wi,s2.prototype.get=Fi,s2.prototype.has=Gi,s2.prototype.set=Ri;function N0(t){var a=-1,e=t==null?0:t.length;for(this.clear();++a<e;){var c=t[a];this.set(c[0],c[1])}}function Si(){this.__data__=[],this.size=0}function Li(t){var a=this.__data__,e=b4(a,t);if(e<0)return!1;var c=a.length-1;return e==c?a.pop():d4.call(a,e,1),--this.size,!0}function yi(t){var a=this.__data__,e=b4(a,t);return e<0?r:a[e][1]}function Zi(t){return b4(this.__data__,t)>-1}function Ui(t,a){var e=this.__data__,c=b4(e,t);return c<0?(++this.size,e.push([t,a])):e[c][1]=a,this}N0.prototype.clear=Si,N0.prototype.delete=Li,N0.prototype.get=yi,N0.prototype.has=Zi,N0.prototype.set=Ui;function X0(t){var a=-1,e=t==null?0:t.length;for(this.clear();++a<e;){var c=t[a];this.set(c[0],c[1])}}function Ni(){this.size=0,this.__data__={hash:new s2,map:new(zt||N0),string:new s2}}function Xi(t){var a=L4(this,t).delete(t);return this.size-=a?1:0,a}function Oi(t){return L4(this,t).get(t)}function Wi(t){return L4(this,t).has(t)}function Ti(t,a){var e=L4(this,t),c=e.size;return e.set(t,a),this.size+=e.size==c?0:1,this}X0.prototype.clear=Ni,X0.prototype.delete=Xi,X0.prototype.get=Oi,X0.prototype.has=Wi,X0.prototype.set=Ti;function v2(t){var a=-1,e=t==null?0:t.length;for(this.__data__=new X0;++a<e;)this.add(t[a])}function Qi(t){return this.__data__.set(t,g),this}function ki(t){return this.__data__.has(t)}v2.prototype.add=v2.prototype.push=Qi,v2.prototype.has=ki;function C0(t){var a=this.__data__=new N0(t);this.size=a.size}function Yi(){this.__data__=new N0,this.size=0}function Ei(t){var a=this.__data__,e=a.delete(t);return this.size=a.size,e}function Ji(t){return this.__data__.get(t)}function Di(t){return this.__data__.has(t)}function _i(t,a){var e=this.__data__;if(e instanceof N0){var c=e.__data__;if(!zt||c.length<n-1)return c.push([t,a]),this.size=++e.size,this;e=this.__data__=new X0(c)}return e.set(t,a),this.size=e.size,this}C0.prototype.clear=Yi,C0.prototype.delete=Ei,C0.prototype.get=Ji,C0.prototype.has=Di,C0.prototype.set=_i;function ya(t,a){var e=j(t),c=!e&&m2(t),h=!e&&!c&&i2(t),v=!e&&!c&&!h&&Q2(t),d=e||c||h||v,x=d?E3(t.length,ii):[],z=x.length;for(var A in t)(a||s1.call(t,A))&&!(d&&(A=="length"||h&&(A=="offset"||A=="parent")||v&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||Q0(A,z)))&&x.push(A);return x}function Za(t){var a=t.length;return a?t[l9(0,a-1)]:r}function ji(t,a){return y4(J1(t),g2(a,0,t.length))}function Pi(t){return y4(J1(t))}function $3(t,a,e){(e!==r&&!H0(t[a],e)||e===r&&!(a in t))&&O0(t,a,e)}function Ct(t,a,e){var c=t[a];(!(s1.call(t,a)&&H0(c,e))||e===r&&!(a in t))&&O0(t,a,e)}function b4(t,a){for(var e=t.length;e--;)if(H0(t[e][0],a))return e;return-1}function Ki(t,a,e,c){return t2(t,function(h,v,d){a(c,h,e(h),d)}),c}function Ua(t,a){return t&&F0(a,S1(a),t)}function $i(t,a){return t&&F0(a,_1(a),t)}function O0(t,a,e){a=="__proto__"&&p4?p4(t,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[a]=e}function q3(t,a){for(var e=-1,c=a.length,h=C(c),v=t==null;++e<c;)h[e]=v?r:L9(t,a[e]);return h}function g2(t,a,e){return t===t&&(e!==r&&(t=t<=e?t:e),a!==r&&(t=t>=a?t:a)),t}function v0(t,a,e,c,h,v){var d,x=a&H,z=a&w,A=a&M;if(e&&(d=h?e(t,c,h,v):e(t)),d!==r)return d;if(!V1(t))return t;var G=j(t);if(G){if(d=Tn(t),!x)return J1(t,d)}else{var S=U1(t),U=S==c0||S==st;if(i2(t))return o7(t,x);if(S==U0||S==P1||U&&!h){if(d=z||U?{}:M7(t),!x)return z?Gn(t,$i(d,t)):Fn(t,Ua(d,t))}else{if(!d1[S])return h?t:{};d=Qn(t,S,x)}}v||(v=new C0);var T=v.get(t);if(T)return T;v.set(t,d),tr(t)?t.forEach(function(D){d.add(v0(D,a,e,D,t,v))}):$7(t)&&t.forEach(function(D,r1){d.set(r1,v0(D,a,e,r1,t,v))});var J=A?z?z9:f9:z?_1:S1,$=G?r:J(t);return h0($||t,function(D,r1){$&&(r1=D,D=t[r1]),Ct(d,r1,v0(D,a,e,r1,t,v))}),d}function qi(t){var a=S1(t);return function(e){return Na(e,t,a)}}function Na(t,a,e){var c=e.length;if(t==null)return!c;for(t=g1(t);c--;){var h=e[c],v=a[h],d=t[h];if(d===r&&!(h in t)||!v(d))return!1}return!0}function Xa(t,a,e){if(typeof t!="function")throw new u0(l);return Gt(function(){t.apply(r,e)},a)}function Ht(t,a,e,c){var h=-1,v=i4,d=!0,x=t.length,z=[],A=a.length;if(!x)return z;e&&(a=B1(a,$1(e))),c?(v=O3,d=!1):a.length>=n&&(v=mt,d=!1,a=new v2(a));t:for(;++h<x;){var G=t[h],S=e==null?G:e(G);if(G=c||G!==0?G:0,d&&S===S){for(var U=A;U--;)if(a[U]===S)continue t;z.push(G)}else v(a,S,c)||z.push(G)}return z}var t2=s7(w0),Oa=s7(a9,!0);function tn(t,a){var e=!0;return t2(t,function(c,h,v){return e=!!a(c,h,v),e}),e}function V4(t,a,e){for(var c=-1,h=t.length;++c<h;){var v=t[c],d=a(v);if(d!=null&&(x===r?d===d&&!t0(d):e(d,x)))var x=d,z=v}return z}function an(t,a,e,c){var h=t.length;for(e=K(e),e<0&&(e=-e>h?0:h+e),c=c===r||c>h?h:K(c),c<0&&(c+=h),c=e>c?0:rr(c);e<c;)t[e++]=a;return t}function Wa(t,a){var e=[];return t2(t,function(c,h,v){a(c,h,v)&&e.push(c)}),e}function y1(t,a,e,c,h){var v=-1,d=t.length;for(e||(e=Yn),h||(h=[]);++v<d;){var x=t[v];a>0&&e(x)?a>1?y1(x,a-1,e,c,h):P0(h,x):c||(h[h.length]=x)}return h}var t9=v7(),Ta=v7(!0);function w0(t,a){return t&&t9(t,a,S1)}function a9(t,a){return t&&Ta(t,a,S1)}function C4(t,a){return j0(a,function(e){return k0(t[e])})}function d2(t,a){a=r2(a,t);for(var e=0,c=a.length;t!=null&&e<c;)t=t[G0(a[e++])];return e&&e==c?t:r}function Qa(t,a,e){var c=a(t);return j(t)?c:P0(c,e(t))}function O1(t){return t==null?t===r?G8:w8:u2&&u2 in g1(t)?Xn(t):Kn(t)}function r9(t,a){return t>a}function rn(t,a){return t!=null&&s1.call(t,a)}function en(t,a){return t!=null&&a in g1(t)}function nn(t,a,e){return t>=Z1(a,e)&&t<F1(a,e)}function e9(t,a,e){for(var c=e?O3:i4,h=t[0].length,v=t.length,d=v,x=C(v),z=1/0,A=[];d--;){var G=t[d];d&&a&&(G=B1(G,$1(a))),z=Z1(G.length,z),x[d]=!e&&(a||h>=120&&G.length>=120)?new v2(d&&G):r}G=t[0];var S=-1,U=x[0];t:for(;++S<h&&A.length<z;){var T=G[S],J=a?a(T):T;if(T=e||T!==0?T:0,!(U?mt(U,J):c(A,J,e))){for(d=v;--d;){var $=x[d];if(!($?mt($,J):c(t[d],J,e)))continue t}U&&U.push(J),A.push(T)}}return A}function on(t,a,e,c){return w0(t,function(h,v,d){a(c,e(h),v,d)}),c}function Mt(t,a,e){a=r2(a,t),t=F7(t,a);var c=t==null?t:t[G0(d0(a))];return c==null?r:K1(c,t,e)}function ka(t){return C1(t)&&O1(t)==P1}function cn(t){return C1(t)&&O1(t)==xt}function ln(t){return C1(t)&&O1(t)==z0}function It(t,a,e,c,h){return t===a?!0:t==null||a==null||!C1(t)&&!C1(a)?t!==t&&a!==a:hn(t,a,e,c,It,h)}function hn(t,a,e,c,h,v){var d=j(t),x=j(a),z=d?f0:U1(t),A=x?f0:U1(a);z=z==P1?U0:z,A=A==P1?U0:A;var G=z==U0,S=A==U0,U=z==A;if(U&&i2(t)){if(!i2(a))return!1;d=!0,G=!1}if(U&&!G)return v||(v=new C0),d||Q2(t)?V7(t,a,e,c,h,v):Un(t,a,z,e,c,h,v);if(!(e&y)){var T=G&&s1.call(t,"__wrapped__"),J=S&&s1.call(a,"__wrapped__");if(T||J){var $=T?t.value():t,D=J?a.value():a;return v||(v=new C0),h($,D,e,c,v)}}return U?(v||(v=new C0),Nn(t,a,e,c,h,v)):!1}function un(t){return C1(t)&&U1(t)==B0}function i9(t,a,e,c){var h=e.length,v=h,d=!c;if(t==null)return!v;for(t=g1(t);h--;){var x=e[h];if(d&&x[2]?x[1]!==t[x[0]]:!(x[0]in t))return!1}for(;++h<v;){x=e[h];var z=x[0],A=t[z],G=x[1];if(d&&x[2]){if(A===r&&!(z in t))return!1}else{var S=new C0;if(c)var U=c(A,G,z,t,a,S);if(!(U===r?It(G,A,y|L,c,S):U))return!1}}return!0}function Ya(t){if(!V1(t)||Jn(t))return!1;var a=k0(t)?hi:q8;return a.test(x2(t))}function sn(t){return C1(t)&&O1(t)==gt}function vn(t){return C1(t)&&U1(t)==b0}function gn(t){return C1(t)&&W4(t.length)&&!!x1[O1(t)]}function Ea(t){return typeof t=="function"?t:t==null?j1:typeof t=="object"?j(t)?_a(t[0],t[1]):Da(t):gr(t)}function n9(t){if(!Ft(t))return pi(t);var a=[];for(var e in g1(t))s1.call(t,e)&&e!="constructor"&&a.push(e);return a}function dn(t){if(!V1(t))return Pn(t);var a=Ft(t),e=[];for(var c in t)c=="constructor"&&(a||!s1.call(t,c))||e.push(c);return e}function o9(t,a){return t<a}function Ja(t,a){var e=-1,c=D1(t)?C(t.length):[];return t2(t,function(h,v,d){c[++e]=a(h,v,d)}),c}function Da(t){var a=b9(t);return a.length==1&&a[0][2]?A7(a[0][0],a[0][1]):function(e){return e===t||i9(e,t,a)}}function _a(t,a){return C9(t)&&I7(a)?A7(G0(t),a):function(e){var c=L9(e,t);return c===r&&c===a?y9(e,t):It(a,c,y|L)}}function H4(t,a,e,c,h){t!==a&&t9(a,function(v,d){if(h||(h=new C0),V1(v))pn(t,a,d,e,H4,c,h);else{var x=c?c(M9(t,d),v,d+"",t,a,h):r;x===r&&(x=v),$3(t,d,x)}},_1)}function pn(t,a,e,c,h,v,d){var x=M9(t,e),z=M9(a,e),A=d.get(z);if(A){$3(t,e,A);return}var G=v?v(x,z,e+"",t,a,d):r,S=G===r;if(S){var U=j(z),T=!U&&i2(z),J=!U&&!T&&Q2(z);G=z,U||T||J?j(x)?G=x:M1(x)?G=J1(x):T?(S=!1,G=o7(z,!0)):J?(S=!1,G=c7(z,!0)):G=[]:Rt(z)||m2(z)?(G=x,m2(x)?G=er(x):(!V1(x)||k0(x))&&(G=M7(z))):S=!1}S&&(d.set(z,G),h(G,z,c,v,d),d.delete(z)),$3(t,e,G)}function ja(t,a){var e=t.length;if(e)return a+=a<0?e:0,Q0(a,e)?t[a]:r}function Pa(t,a,e){a.length?a=B1(a,function(v){return j(v)?function(d){return d2(d,v.length===1?v[0]:v)}:v}):a=[j1];var c=-1;a=B1(a,$1(Y()));var h=Ja(t,function(v,d,x){var z=B1(a,function(A){return A(v)});return{criteria:z,index:++c,value:v}});return T6(h,function(v,d){return wn(v,d,e)})}function xn(t,a){return Ka(t,a,function(e,c){return y9(t,c)})}function Ka(t,a,e){for(var c=-1,h=a.length,v={};++c<h;){var d=a[c],x=d2(t,d);e(x,d)&&At(v,r2(d,t),x)}return v}function mn(t){return function(a){return d2(a,t)}}function c9(t,a,e,c){var h=c?W6:S2,v=-1,d=a.length,x=t;for(t===a&&(a=J1(a)),e&&(x=B1(t,$1(e)));++v<d;)for(var z=0,A=a[v],G=e?e(A):A;(z=h(x,G,z,c))>-1;)x!==t&&d4.call(x,z,1),d4.call(t,z,1);return t}function $a(t,a){for(var e=t?a.length:0,c=e-1;e--;){var h=a[e];if(e==c||h!==v){var v=h;Q0(h)?d4.call(t,h,1):s9(t,h)}}return t}function l9(t,a){return t+m4(Sa()*(a-t+1))}function fn(t,a,e,c){for(var h=-1,v=F1(x4((a-t)/(e||1)),0),d=C(v);v--;)d[c?v:++h]=t,t+=e;return d}function h9(t,a){var e="";if(!t||a<1||a>p1)return e;do a%2&&(e+=t),a=m4(a/2),a&&(t+=t);while(a);return e}function t1(t,a){return I9(w7(t,a,j1),t+"")}function zn(t){return Za(k2(t))}function Bn(t,a){var e=k2(t);return y4(e,g2(a,0,e.length))}function At(t,a,e,c){if(!V1(t))return t;a=r2(a,t);for(var h=-1,v=a.length,d=v-1,x=t;x!=null&&++h<v;){var z=G0(a[h]),A=e;if(z==="__proto__"||z==="constructor"||z==="prototype")return t;if(h!=d){var G=x[z];A=c?c(G,z,x):r,A===r&&(A=V1(G)?G:Q0(a[h+1])?[]:{})}Ct(x,z,A),x=x[z]}return t}var qa=f4?function(t,a){return f4.set(t,a),t}:j1,bn=p4?function(t,a){return p4(t,"toString",{configurable:!0,enumerable:!1,value:U9(a),writable:!0})}:j1;function Vn(t){return y4(k2(t))}function g0(t,a,e){var c=-1,h=t.length;a<0&&(a=-a>h?0:h+a),e=e>h?h:e,e<0&&(e+=h),h=a>e?0:e-a>>>0,a>>>=0;for(var v=C(h);++c<h;)v[c]=t[c+a];return v}function Cn(t,a){var e;return t2(t,function(c,h,v){return e=a(c,h,v),!e}),!!e}function M4(t,a,e){var c=0,h=t==null?c:t.length;if(typeof a=="number"&&a===a&&h<=n0){for(;c<h;){var v=c+h>>>1,d=t[v];d!==null&&!t0(d)&&(e?d<=a:d<a)?c=v+1:h=v}return h}return u9(t,a,j1,e)}function u9(t,a,e,c){var h=0,v=t==null?0:t.length;if(v===0)return 0;a=e(a);for(var d=a!==a,x=a===null,z=t0(a),A=a===r;h<v;){var G=m4((h+v)/2),S=e(t[G]),U=S!==r,T=S===null,J=S===S,$=t0(S);if(d)var D=c||J;else A?D=J&&(c||U):x?D=J&&U&&(c||!T):z?D=J&&U&&!T&&(c||!$):T||$?D=!1:D=c?S<=a:S<a;D?h=G+1:v=G}return Z1(v,ut)}function t7(t,a){for(var e=-1,c=t.length,h=0,v=[];++e<c;){var d=t[e],x=a?a(d):d;if(!e||!H0(x,z)){var z=x;v[h++]=d===0?0:d}}return v}function a7(t){return typeof t=="number"?t:t0(t)?m0:+t}function q1(t){if(typeof t=="string")return t;if(j(t))return B1(t,q1)+"";if(t0(t))return La?La.call(t):"";var a=t+"";return a=="0"&&1/t==-P?"-0":a}function a2(t,a,e){var c=-1,h=i4,v=t.length,d=!0,x=[],z=x;if(e)d=!1,h=O3;else if(v>=n){var A=a?null:yn(t);if(A)return o4(A);d=!1,h=mt,z=new v2}else z=a?[]:x;t:for(;++c<v;){var G=t[c],S=a?a(G):G;if(G=e||G!==0?G:0,d&&S===S){for(var U=z.length;U--;)if(z[U]===S)continue t;a&&z.push(S),x.push(G)}else h(z,S,e)||(z!==x&&z.push(S),x.push(G))}return x}function s9(t,a){return a=r2(a,t),t=F7(t,a),t==null||delete t[G0(d0(a))]}function r7(t,a,e,c){return At(t,a,e(d2(t,a)),c)}function I4(t,a,e,c){for(var h=t.length,v=c?h:-1;(c?v--:++v<h)&&a(t[v],v,t););return e?g0(t,c?0:v,c?v+1:h):g0(t,c?v+1:0,c?h:v)}function e7(t,a){var e=t;return e instanceof e1&&(e=e.value()),W3(a,function(c,h){return h.func.apply(h.thisArg,P0([c],h.args))},e)}function v9(t,a,e){var c=t.length;if(c<2)return c?a2(t[0]):[];for(var h=-1,v=C(c);++h<c;)for(var d=t[h],x=-1;++x<c;)x!=h&&(v[h]=Ht(v[h]||d,t[x],a,e));return a2(y1(v,1),a,e)}function i7(t,a,e){for(var c=-1,h=t.length,v=a.length,d={};++c<h;){var x=c<v?a[c]:r;e(d,t[c],x)}return d}function g9(t){return M1(t)?t:[]}function d9(t){return typeof t=="function"?t:j1}function r2(t,a){return j(t)?t:C9(t,a)?[t]:L7(u1(t))}var Hn=t1;function e2(t,a,e){var c=t.length;return e=e===r?c:e,!a&&e>=c?t:g0(t,a,e)}var n7=ui||function(t){return R1.clearTimeout(t)};function o7(t,a){if(a)return t.slice();var e=t.length,c=Aa?Aa(e):new t.constructor(e);return t.copy(c),c}function p9(t){var a=new t.constructor(t.byteLength);return new v4(a).set(new v4(t)),a}function Mn(t,a){var e=a?p9(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}function In(t){var a=new t.constructor(t.source,k5.exec(t));return a.lastIndex=t.lastIndex,a}function An(t){return Vt?g1(Vt.call(t)):{}}function c7(t,a){var e=a?p9(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function l7(t,a){if(t!==a){var e=t!==r,c=t===null,h=t===t,v=t0(t),d=a!==r,x=a===null,z=a===a,A=t0(a);if(!x&&!A&&!v&&t>a||v&&d&&z&&!x&&!A||c&&d&&z||!e&&z||!h)return 1;if(!c&&!v&&!A&&t<a||A&&e&&h&&!c&&!v||x&&e&&h||!d&&h||!z)return-1}return 0}function wn(t,a,e){for(var c=-1,h=t.criteria,v=a.criteria,d=h.length,x=e.length;++c<d;){var z=l7(h[c],v[c]);if(z){if(c>=x)return z;var A=e[c];return z*(A=="desc"?-1:1)}}return t.index-a.index}function h7(t,a,e,c){for(var h=-1,v=t.length,d=e.length,x=-1,z=a.length,A=F1(v-d,0),G=C(z+A),S=!c;++x<z;)G[x]=a[x];for(;++h<d;)(S||h<v)&&(G[e[h]]=t[h]);for(;A--;)G[x++]=t[h++];return G}function u7(t,a,e,c){for(var h=-1,v=t.length,d=-1,x=e.length,z=-1,A=a.length,G=F1(v-x,0),S=C(G+A),U=!c;++h<G;)S[h]=t[h];for(var T=h;++z<A;)S[T+z]=a[z];for(;++d<x;)(U||h<v)&&(S[T+e[d]]=t[h++]);return S}function J1(t,a){var e=-1,c=t.length;for(a||(a=C(c));++e<c;)a[e]=t[e];return a}function F0(t,a,e,c){var h=!e;e||(e={});for(var v=-1,d=a.length;++v<d;){var x=a[v],z=c?c(e[x],t[x],x,e,t):r;z===r&&(z=t[x]),h?O0(e,x,z):Ct(e,x,z)}return e}function Fn(t,a){return F0(t,V9(t),a)}function Gn(t,a){return F0(t,C7(t),a)}function A4(t,a){return function(e,c){var h=j(e)?y6:Ki,v=a?a():{};return h(e,t,Y(c,2),v)}}function O2(t){return t1(function(a,e){var c=-1,h=e.length,v=h>1?e[h-1]:r,d=h>2?e[2]:r;for(v=t.length>3&&typeof v=="function"?(h--,v):r,d&&W1(e[0],e[1],d)&&(v=h<3?r:v,h=1),a=g1(a);++c<h;){var x=e[c];x&&t(a,x,c,v)}return a})}function s7(t,a){return function(e,c){if(e==null)return e;if(!D1(e))return t(e,c);for(var h=e.length,v=a?h:-1,d=g1(e);(a?v--:++v<h)&&c(d[v],v,d)!==!1;);return e}}function v7(t){return function(a,e,c){for(var h=-1,v=g1(a),d=c(a),x=d.length;x--;){var z=d[t?x:++h];if(e(v[z],z,v)===!1)break}return a}}function Rn(t,a,e){var c=a&Z,h=wt(t);function v(){var d=this&&this!==R1&&this instanceof v?h:t;return d.apply(c?e:this,arguments)}return v}function g7(t){return function(a){a=u1(a);var e=L2(a)?V0(a):r,c=e?e[0]:a.charAt(0),h=e?e2(e,1).join(""):a.slice(1);return c[t]()+h}}function W2(t){return function(a){return W3(sr(ur(a).replace(B6,"")),t,"")}}function wt(t){return function(){var a=arguments;switch(a.length){case 0:return new t;case 1:return new t(a[0]);case 2:return new t(a[0],a[1]);case 3:return new t(a[0],a[1],a[2]);case 4:return new t(a[0],a[1],a[2],a[3]);case 5:return new t(a[0],a[1],a[2],a[3],a[4]);case 6:return new t(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new t(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var e=X2(t.prototype),c=t.apply(e,a);return V1(c)?c:e}}function Sn(t,a,e){var c=wt(t);function h(){for(var v=arguments.length,d=C(v),x=v,z=T2(h);x--;)d[x]=arguments[x];var A=v<3&&d[0]!==z&&d[v-1]!==z?[]:K0(d,z);if(v-=A.length,v<e)return f7(t,a,w4,h.placeholder,r,d,A,r,r,e-v);var G=this&&this!==R1&&this instanceof h?c:t;return K1(G,this,d)}return h}function d7(t){return function(a,e,c){var h=g1(a);if(!D1(a)){var v=Y(e,3);a=S1(a),e=function(x){return v(h[x],x,h)}}var d=t(a,e,c);return d>-1?h[v?a[d]:d]:r}}function p7(t){return T0(function(a){var e=a.length,c=e,h=s0.prototype.thru;for(t&&a.reverse();c--;){var v=a[c];if(typeof v!="function")throw new u0(l);if(h&&!d&&S4(v)=="wrapper")var d=new s0([],!0)}for(c=d?c:e;++c<e;){v=a[c];var x=S4(v),z=x=="wrapper"?B9(v):r;z&&H9(z[0])&&z[1]==(O|V|R|X)&&!z[4].length&&z[9]==1?d=d[S4(z[0])].apply(d,z[3]):d=v.length==1&&H9(v)?d[x]():d.thru(v)}return function(){var A=arguments,G=A[0];if(d&&A.length==1&&j(G))return d.plant(G).value();for(var S=0,U=e?a[S].apply(this,A):G;++S<e;)U=a[S].call(this,U);return U}})}function w4(t,a,e,c,h,v,d,x,z,A){var G=a&O,S=a&Z,U=a&m,T=a&(V|F),J=a&q,$=U?r:wt(t);function D(){for(var r1=arguments.length,i1=C(r1),a0=r1;a0--;)i1[a0]=arguments[a0];if(T)var T1=T2(D),r0=k6(i1,T1);if(c&&(i1=h7(i1,c,h,T)),v&&(i1=u7(i1,v,d,T)),r1-=r0,T&&r1<A){var I1=K0(i1,T1);return f7(t,a,w4,D.placeholder,e,i1,I1,x,z,A-r1)}var M0=S?e:this,E0=U?M0[t]:t;return r1=i1.length,x?i1=$n(i1,x):J&&r1>1&&i1.reverse(),G&&z<r1&&(i1.length=z),this&&this!==R1&&this instanceof D&&(E0=$||wt(E0)),E0.apply(M0,i1)}return D}function x7(t,a){return function(e,c){return on(e,t,a(c),{})}}function F4(t,a){return function(e,c){var h;if(e===r&&c===r)return a;if(e!==r&&(h=e),c!==r){if(h===r)return c;typeof e=="string"||typeof c=="string"?(e=q1(e),c=q1(c)):(e=a7(e),c=a7(c)),h=t(e,c)}return h}}function x9(t){return T0(function(a){return a=B1(a,$1(Y())),t1(function(e){var c=this;return t(a,function(h){return K1(h,c,e)})})})}function G4(t,a){a=a===r?" ":q1(a);var e=a.length;if(e<2)return e?h9(a,t):a;var c=h9(a,x4(t/y2(a)));return L2(a)?e2(V0(c),0,t).join(""):c.slice(0,t)}function Ln(t,a,e,c){var h=a&Z,v=wt(t);function d(){for(var x=-1,z=arguments.length,A=-1,G=c.length,S=C(G+z),U=this&&this!==R1&&this instanceof d?v:t;++A<G;)S[A]=c[A];for(;z--;)S[A++]=arguments[++x];return K1(U,h?e:this,S)}return d}function m7(t){return function(a,e,c){return c&&typeof c!="number"&&W1(a,e,c)&&(e=c=r),a=Y0(a),e===r?(e=a,a=0):e=Y0(e),c=c===r?a<e?1:-1:Y0(c),fn(a,e,c,t)}}function R4(t){return function(a,e){return typeof a=="string"&&typeof e=="string"||(a=p0(a),e=p0(e)),t(a,e)}}function f7(t,a,e,c,h,v,d,x,z,A){var G=a&V,S=G?d:r,U=G?r:d,T=G?v:r,J=G?r:v;a|=G?R:N,a&=~(G?N:R),a&B||(a&=~(Z|m));var $=[t,a,h,T,S,J,U,x,z,A],D=e.apply(r,$);return H9(t)&&G7(D,$),D.placeholder=c,R7(D,t,a)}function m9(t){var a=w1[t];return function(e,c){if(e=p0(e),c=c==null?0:Z1(K(c),292),c&&Ra(e)){var h=(u1(e)+"e").split("e"),v=a(h[0]+"e"+(+h[1]+c));return h=(u1(v)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return a(e)}}var yn=U2&&1/o4(new U2([,-0]))[1]==P?function(t){return new U2(t)}:O9;function z7(t){return function(a){var e=U1(a);return e==B0?D3(a):e==b0?P6(a):Q6(a,t(a))}}function W0(t,a,e,c,h,v,d,x){var z=a&m;if(!z&&typeof t!="function")throw new u0(l);var A=c?c.length:0;if(A||(a&=~(R|N),c=h=r),d=d===r?d:F1(K(d),0),x=x===r?x:K(x),A-=h?h.length:0,a&N){var G=c,S=h;c=h=r}var U=z?r:B9(t),T=[t,a,e,c,h,G,S,v,d,x];if(U&&jn(T,U),t=T[0],a=T[1],e=T[2],c=T[3],h=T[4],x=T[9]=T[9]===r?z?0:t.length:F1(T[9]-A,0),!x&&a&(V|F)&&(a&=~(V|F)),!a||a==Z)var J=Rn(t,a,e);else a==V||a==F?J=Sn(t,a,x):(a==R||a==(Z|R))&&!h.length?J=Ln(t,a,e,c):J=w4.apply(r,T);var $=U?qa:G7;return R7($(J,T),t,a)}function B7(t,a,e,c){return t===r||H0(t,Z2[e])&&!s1.call(c,e)?a:t}function b7(t,a,e,c,h,v){return V1(t)&&V1(a)&&(v.set(a,t),H4(t,a,r,b7,v),v.delete(a)),t}function Zn(t){return Rt(t)?r:t}function V7(t,a,e,c,h,v){var d=e&y,x=t.length,z=a.length;if(x!=z&&!(d&&z>x))return!1;var A=v.get(t),G=v.get(a);if(A&&G)return A==a&&G==t;var S=-1,U=!0,T=e&L?new v2:r;for(v.set(t,a),v.set(a,t);++S<x;){var J=t[S],$=a[S];if(c)var D=d?c($,J,S,a,t,v):c(J,$,S,t,a,v);if(D!==r){if(D)continue;U=!1;break}if(T){if(!T3(a,function(r1,i1){if(!mt(T,i1)&&(J===r1||h(J,r1,e,c,v)))return T.push(i1)})){U=!1;break}}else if(!(J===$||h(J,$,e,c,v))){U=!1;break}}return v.delete(t),v.delete(a),U}function Un(t,a,e,c,h,v,d){switch(e){case G2:if(t.byteLength!=a.byteLength||t.byteOffset!=a.byteOffset)return!1;t=t.buffer,a=a.buffer;case xt:return!(t.byteLength!=a.byteLength||!v(new v4(t),new v4(a)));case A0:case z0:case vt:return H0(+t,+a);case o0:return t.name==a.name&&t.message==a.message;case gt:case dt:return t==a+"";case B0:var x=D3;case b0:var z=c&y;if(x||(x=o4),t.size!=a.size&&!z)return!1;var A=d.get(t);if(A)return A==a;c|=L,d.set(t,a);var G=V7(x(t),x(a),c,h,v,d);return d.delete(t),G;case t4:if(Vt)return Vt.call(t)==Vt.call(a)}return!1}function Nn(t,a,e,c,h,v){var d=e&y,x=f9(t),z=x.length,A=f9(a),G=A.length;if(z!=G&&!d)return!1;for(var S=z;S--;){var U=x[S];if(!(d?U in a:s1.call(a,U)))return!1}var T=v.get(t),J=v.get(a);if(T&&J)return T==a&&J==t;var $=!0;v.set(t,a),v.set(a,t);for(var D=d;++S<z;){U=x[S];var r1=t[U],i1=a[U];if(c)var a0=d?c(i1,r1,U,a,t,v):c(r1,i1,U,t,a,v);if(!(a0===r?r1===i1||h(r1,i1,e,c,v):a0)){$=!1;break}D||(D=U=="constructor")}if($&&!D){var T1=t.constructor,r0=a.constructor;T1!=r0&&"constructor"in t&&"constructor"in a&&!(typeof T1=="function"&&T1 instanceof T1&&typeof r0=="function"&&r0 instanceof r0)&&($=!1)}return v.delete(t),v.delete(a),$}function T0(t){return I9(w7(t,r,N7),t+"")}function f9(t){return Qa(t,S1,V9)}function z9(t){return Qa(t,_1,C7)}var B9=f4?function(t){return f4.get(t)}:O9;function S4(t){for(var a=t.name+"",e=N2[a],c=s1.call(N2,a)?e.length:0;c--;){var h=e[c],v=h.func;if(v==null||v==t)return h.name}return a}function T2(t){var a=s1.call(u,"placeholder")?u:t;return a.placeholder}function Y(){var t=u.iteratee||N9;return t=t===N9?Ea:t,arguments.length?t(arguments[0],arguments[1]):t}function L4(t,a){var e=t.__data__;return En(a)?e[typeof a=="string"?"string":"hash"]:e.map}function b9(t){for(var a=S1(t),e=a.length;e--;){var c=a[e],h=t[c];a[e]=[c,h,I7(h)]}return a}function p2(t,a){var e=D6(t,a);return Ya(e)?e:r}function Xn(t){var a=s1.call(t,u2),e=t[u2];try{t[u2]=r;var c=!0}catch{}var h=u4.call(t);return c&&(a?t[u2]=e:delete t[u2]),h}var V9=j3?function(t){return t==null?[]:(t=g1(t),j0(j3(t),function(a){return Fa.call(t,a)}))}:W9,C7=j3?function(t){for(var a=[];t;)P0(a,V9(t)),t=g4(t);return a}:W9,U1=O1;(P3&&U1(new P3(new ArrayBuffer(1)))!=G2||zt&&U1(new zt)!=B0||K3&&U1(K3.resolve())!=O5||U2&&U1(new U2)!=b0||Bt&&U1(new Bt)!=pt)&&(U1=function(t){var a=O1(t),e=a==U0?t.constructor:r,c=e?x2(e):"";if(c)switch(c){case zi:return G2;case Bi:return B0;case bi:return O5;case Vi:return b0;case Ci:return pt}return a});function On(t,a,e){for(var c=-1,h=e.length;++c<h;){var v=e[c],d=v.size;switch(v.type){case"drop":t+=d;break;case"dropRight":a-=d;break;case"take":a=Z1(a,t+d);break;case"takeRight":t=F1(t,a-d);break}}return{start:t,end:a}}function Wn(t){var a=t.match(E8);return a?a[1].split(J8):[]}function H7(t,a,e){a=r2(a,t);for(var c=-1,h=a.length,v=!1;++c<h;){var d=G0(a[c]);if(!(v=t!=null&&e(t,d)))break;t=t[d]}return v||++c!=h?v:(h=t==null?0:t.length,!!h&&W4(h)&&Q0(d,h)&&(j(t)||m2(t)))}function Tn(t){var a=t.length,e=new t.constructor(a);return a&&typeof t[0]=="string"&&s1.call(t,"index")&&(e.index=t.index,e.input=t.input),e}function M7(t){return typeof t.constructor=="function"&&!Ft(t)?X2(g4(t)):{}}function Qn(t,a,e){var c=t.constructor;switch(a){case xt:return p9(t);case A0:case z0:return new c(+t);case G2:return Mn(t,e);case b3:case V3:case C3:case H3:case M3:case I3:case A3:case w3:case F3:return c7(t,e);case B0:return new c;case vt:case dt:return new c(t);case gt:return In(t);case b0:return new c;case t4:return An(t)}}function kn(t,a){var e=a.length;if(!e)return t;var c=e-1;return a[c]=(e>1?"& ":"")+a[c],a=a.join(e>2?", ":" "),t.replace(Y8,`{
/* [wrapped with `+a+`] */
`)}function Yn(t){return j(t)||m2(t)||!!(Ga&&t&&t[Ga])}function Q0(t,a){var e=typeof t;return a=a==null?p1:a,!!a&&(e=="number"||e!="symbol"&&a6.test(t))&&t>-1&&t%1==0&&t<a}function W1(t,a,e){if(!V1(e))return!1;var c=typeof a;return(c=="number"?D1(e)&&Q0(a,e.length):c=="string"&&a in e)?H0(e[a],t):!1}function C9(t,a){if(j(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||t0(t)?!0:W8.test(t)||!O8.test(t)||a!=null&&t in g1(a)}function En(t){var a=typeof t;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?t!=="__proto__":t===null}function H9(t){var a=S4(t),e=u[a];if(typeof e!="function"||!(a in e1.prototype))return!1;if(t===e)return!0;var c=B9(e);return!!c&&t===c[0]}function Jn(t){return!!Ia&&Ia in t}var Dn=l4?k0:T9;function Ft(t){var a=t&&t.constructor,e=typeof a=="function"&&a.prototype||Z2;return t===e}function I7(t){return t===t&&!V1(t)}function A7(t,a){return function(e){return e==null?!1:e[t]===a&&(a!==r||t in g1(e))}}function _n(t){var a=X4(t,function(c){return e.size===p&&e.clear(),c}),e=a.cache;return a}function jn(t,a){var e=t[1],c=a[1],h=e|c,v=h<(Z|m|O),d=c==O&&e==V||c==O&&e==X&&t[7].length<=a[8]||c==(O|X)&&a[7].length<=a[8]&&e==V;if(!(v||d))return t;c&Z&&(t[2]=a[2],h|=e&Z?0:B);var x=a[3];if(x){var z=t[3];t[3]=z?h7(z,x,a[4]):x,t[4]=z?K0(t[3],b):a[4]}return x=a[5],x&&(z=t[5],t[5]=z?u7(z,x,a[6]):x,t[6]=z?K0(t[5],b):a[6]),x=a[7],x&&(t[7]=x),c&O&&(t[8]=t[8]==null?a[8]:Z1(t[8],a[8])),t[9]==null&&(t[9]=a[9]),t[0]=a[0],t[1]=h,t}function Pn(t){var a=[];if(t!=null)for(var e in g1(t))a.push(e);return a}function Kn(t){return u4.call(t)}function w7(t,a,e){return a=F1(a===r?t.length-1:a,0),function(){for(var c=arguments,h=-1,v=F1(c.length-a,0),d=C(v);++h<v;)d[h]=c[a+h];h=-1;for(var x=C(a+1);++h<a;)x[h]=c[h];return x[a]=e(d),K1(t,this,x)}}function F7(t,a){return a.length<2?t:d2(t,g0(a,0,-1))}function $n(t,a){for(var e=t.length,c=Z1(a.length,e),h=J1(t);c--;){var v=a[c];t[c]=Q0(v,e)?h[v]:r}return t}function M9(t,a){if(!(a==="constructor"&&typeof t[a]=="function")&&a!="__proto__")return t[a]}var G7=S7(qa),Gt=vi||function(t,a){return R1.setTimeout(t,a)},I9=S7(bn);function R7(t,a,e){var c=a+"";return I9(t,kn(c,qn(Wn(c),e)))}function S7(t){var a=0,e=0;return function(){var c=xi(),h=x0-(c-e);if(e=c,h>0){if(++a>=I0)return arguments[0]}else a=0;return t.apply(r,arguments)}}function y4(t,a){var e=-1,c=t.length,h=c-1;for(a=a===r?c:a;++e<a;){var v=l9(e,h),d=t[v];t[v]=t[e],t[e]=d}return t.length=a,t}var L7=_n(function(t){var a=[];return t.charCodeAt(0)===46&&a.push(""),t.replace(T8,function(e,c,h,v){a.push(h?v.replace(j8,"$1"):c||e)}),a});function G0(t){if(typeof t=="string"||t0(t))return t;var a=t+"";return a=="0"&&1/t==-P?"-0":a}function x2(t){if(t!=null){try{return h4.call(t)}catch{}try{return t+""}catch{}}return""}function qn(t,a){return h0(Z0,function(e){var c="_."+e[0];a&e[1]&&!i4(t,c)&&t.push(c)}),t.sort()}function y7(t){if(t instanceof e1)return t.clone();var a=new s0(t.__wrapped__,t.__chain__);return a.__actions__=J1(t.__actions__),a.__index__=t.__index__,a.__values__=t.__values__,a}function to(t,a,e){(e?W1(t,a,e):a===r)?a=1:a=F1(K(a),0);var c=t==null?0:t.length;if(!c||a<1)return[];for(var h=0,v=0,d=C(x4(c/a));h<c;)d[v++]=g0(t,h,h+=a);return d}function ao(t){for(var a=-1,e=t==null?0:t.length,c=0,h=[];++a<e;){var v=t[a];v&&(h[c++]=v)}return h}function ro(){var t=arguments.length;if(!t)return[];for(var a=C(t-1),e=arguments[0],c=t;c--;)a[c-1]=arguments[c];return P0(j(e)?J1(e):[e],y1(a,1))}var eo=t1(function(t,a){return M1(t)?Ht(t,y1(a,1,M1,!0)):[]}),io=t1(function(t,a){var e=d0(a);return M1(e)&&(e=r),M1(t)?Ht(t,y1(a,1,M1,!0),Y(e,2)):[]}),no=t1(function(t,a){var e=d0(a);return M1(e)&&(e=r),M1(t)?Ht(t,y1(a,1,M1,!0),r,e):[]});function oo(t,a,e){var c=t==null?0:t.length;return c?(a=e||a===r?1:K(a),g0(t,a<0?0:a,c)):[]}function co(t,a,e){var c=t==null?0:t.length;return c?(a=e||a===r?1:K(a),a=c-a,g0(t,0,a<0?0:a)):[]}function lo(t,a){return t&&t.length?I4(t,Y(a,3),!0,!0):[]}function ho(t,a){return t&&t.length?I4(t,Y(a,3),!0):[]}function uo(t,a,e,c){var h=t==null?0:t.length;return h?(e&&typeof e!="number"&&W1(t,a,e)&&(e=0,c=h),an(t,a,e,c)):[]}function Z7(t,a,e){var c=t==null?0:t.length;if(!c)return-1;var h=e==null?0:K(e);return h<0&&(h=F1(c+h,0)),n4(t,Y(a,3),h)}function U7(t,a,e){var c=t==null?0:t.length;if(!c)return-1;var h=c-1;return e!==r&&(h=K(e),h=e<0?F1(c+h,0):Z1(h,c-1)),n4(t,Y(a,3),h,!0)}function N7(t){var a=t==null?0:t.length;return a?y1(t,1):[]}function so(t){var a=t==null?0:t.length;return a?y1(t,P):[]}function vo(t,a){var e=t==null?0:t.length;return e?(a=a===r?1:K(a),y1(t,a)):[]}function go(t){for(var a=-1,e=t==null?0:t.length,c={};++a<e;){var h=t[a];c[h[0]]=h[1]}return c}function X7(t){return t&&t.length?t[0]:r}function po(t,a,e){var c=t==null?0:t.length;if(!c)return-1;var h=e==null?0:K(e);return h<0&&(h=F1(c+h,0)),S2(t,a,h)}function xo(t){var a=t==null?0:t.length;return a?g0(t,0,-1):[]}var mo=t1(function(t){var a=B1(t,g9);return a.length&&a[0]===t[0]?e9(a):[]}),fo=t1(function(t){var a=d0(t),e=B1(t,g9);return a===d0(e)?a=r:e.pop(),e.length&&e[0]===t[0]?e9(e,Y(a,2)):[]}),zo=t1(function(t){var a=d0(t),e=B1(t,g9);return a=typeof a=="function"?a:r,a&&e.pop(),e.length&&e[0]===t[0]?e9(e,r,a):[]});function Bo(t,a){return t==null?"":di.call(t,a)}function d0(t){var a=t==null?0:t.length;return a?t[a-1]:r}function bo(t,a,e){var c=t==null?0:t.length;if(!c)return-1;var h=c;return e!==r&&(h=K(e),h=h<0?F1(c+h,0):Z1(h,c-1)),a===a?$6(t,a,h):n4(t,fa,h,!0)}function Vo(t,a){return t&&t.length?ja(t,K(a)):r}var Co=t1(O7);function O7(t,a){return t&&t.length&&a&&a.length?c9(t,a):t}function Ho(t,a,e){return t&&t.length&&a&&a.length?c9(t,a,Y(e,2)):t}function Mo(t,a,e){return t&&t.length&&a&&a.length?c9(t,a,r,e):t}var Io=T0(function(t,a){var e=t==null?0:t.length,c=q3(t,a);return $a(t,B1(a,function(h){return Q0(h,e)?+h:h}).sort(l7)),c});function Ao(t,a){var e=[];if(!(t&&t.length))return e;var c=-1,h=[],v=t.length;for(a=Y(a,3);++c<v;){var d=t[c];a(d,c,t)&&(e.push(d),h.push(c))}return $a(t,h),e}function A9(t){return t==null?t:fi.call(t)}function wo(t,a,e){var c=t==null?0:t.length;return c?(e&&typeof e!="number"&&W1(t,a,e)?(a=0,e=c):(a=a==null?0:K(a),e=e===r?c:K(e)),g0(t,a,e)):[]}function Fo(t,a){return M4(t,a)}function Go(t,a,e){return u9(t,a,Y(e,2))}function Ro(t,a){var e=t==null?0:t.length;if(e){var c=M4(t,a);if(c<e&&H0(t[c],a))return c}return-1}function So(t,a){return M4(t,a,!0)}function Lo(t,a,e){return u9(t,a,Y(e,2),!0)}function yo(t,a){var e=t==null?0:t.length;if(e){var c=M4(t,a,!0)-1;if(H0(t[c],a))return c}return-1}function Zo(t){return t&&t.length?t7(t):[]}function Uo(t,a){return t&&t.length?t7(t,Y(a,2)):[]}function No(t){var a=t==null?0:t.length;return a?g0(t,1,a):[]}function Xo(t,a,e){return t&&t.length?(a=e||a===r?1:K(a),g0(t,0,a<0?0:a)):[]}function Oo(t,a,e){var c=t==null?0:t.length;return c?(a=e||a===r?1:K(a),a=c-a,g0(t,a<0?0:a,c)):[]}function Wo(t,a){return t&&t.length?I4(t,Y(a,3),!1,!0):[]}function To(t,a){return t&&t.length?I4(t,Y(a,3)):[]}var Qo=t1(function(t){return a2(y1(t,1,M1,!0))}),ko=t1(function(t){var a=d0(t);return M1(a)&&(a=r),a2(y1(t,1,M1,!0),Y(a,2))}),Yo=t1(function(t){var a=d0(t);return a=typeof a=="function"?a:r,a2(y1(t,1,M1,!0),r,a)});function Eo(t){return t&&t.length?a2(t):[]}function Jo(t,a){return t&&t.length?a2(t,Y(a,2)):[]}function Do(t,a){return a=typeof a=="function"?a:r,t&&t.length?a2(t,r,a):[]}function w9(t){if(!(t&&t.length))return[];var a=0;return t=j0(t,function(e){if(M1(e))return a=F1(e.length,a),!0}),E3(a,function(e){return B1(t,Q3(e))})}function W7(t,a){if(!(t&&t.length))return[];var e=w9(t);return a==null?e:B1(e,function(c){return K1(a,r,c)})}var _o=t1(function(t,a){return M1(t)?Ht(t,a):[]}),jo=t1(function(t){return v9(j0(t,M1))}),Po=t1(function(t){var a=d0(t);return M1(a)&&(a=r),v9(j0(t,M1),Y(a,2))}),Ko=t1(function(t){var a=d0(t);return a=typeof a=="function"?a:r,v9(j0(t,M1),r,a)}),$o=t1(w9);function qo(t,a){return i7(t||[],a||[],Ct)}function tc(t,a){return i7(t||[],a||[],At)}var ac=t1(function(t){var a=t.length,e=a>1?t[a-1]:r;return e=typeof e=="function"?(t.pop(),e):r,W7(t,e)});function T7(t){var a=u(t);return a.__chain__=!0,a}function rc(t,a){return a(t),t}function Z4(t,a){return a(t)}var ec=T0(function(t){var a=t.length,e=a?t[0]:0,c=this.__wrapped__,h=function(v){return q3(v,t)};return a>1||this.__actions__.length||!(c instanceof e1)||!Q0(e)?this.thru(h):(c=c.slice(e,+e+(a?1:0)),c.__actions__.push({func:Z4,args:[h],thisArg:r}),new s0(c,this.__chain__).thru(function(v){return a&&!v.length&&v.push(r),v}))});function ic(){return T7(this)}function nc(){return new s0(this.value(),this.__chain__)}function oc(){this.__values__===r&&(this.__values__=ar(this.value()));var t=this.__index__>=this.__values__.length,a=t?r:this.__values__[this.__index__++];return{done:t,value:a}}function cc(){return this}function lc(t){for(var a,e=this;e instanceof B4;){var c=y7(e);c.__index__=0,c.__values__=r,a?h.__wrapped__=c:a=c;var h=c;e=e.__wrapped__}return h.__wrapped__=t,a}function hc(){var t=this.__wrapped__;if(t instanceof e1){var a=t;return this.__actions__.length&&(a=new e1(this)),a=a.reverse(),a.__actions__.push({func:Z4,args:[A9],thisArg:r}),new s0(a,this.__chain__)}return this.thru(A9)}function uc(){return e7(this.__wrapped__,this.__actions__)}var sc=A4(function(t,a,e){s1.call(t,e)?++t[e]:O0(t,e,1)});function vc(t,a,e){var c=j(t)?xa:tn;return e&&W1(t,a,e)&&(a=r),c(t,Y(a,3))}function gc(t,a){var e=j(t)?j0:Wa;return e(t,Y(a,3))}var dc=d7(Z7),pc=d7(U7);function xc(t,a){return y1(U4(t,a),1)}function mc(t,a){return y1(U4(t,a),P)}function fc(t,a,e){return e=e===r?1:K(e),y1(U4(t,a),e)}function Q7(t,a){var e=j(t)?h0:t2;return e(t,Y(a,3))}function k7(t,a){var e=j(t)?Z6:Oa;return e(t,Y(a,3))}var zc=A4(function(t,a,e){s1.call(t,e)?t[e].push(a):O0(t,e,[a])});function Bc(t,a,e,c){t=D1(t)?t:k2(t),e=e&&!c?K(e):0;var h=t.length;return e<0&&(e=F1(h+e,0)),T4(t)?e<=h&&t.indexOf(a,e)>-1:!!h&&S2(t,a,e)>-1}var bc=t1(function(t,a,e){var c=-1,h=typeof a=="function",v=D1(t)?C(t.length):[];return t2(t,function(d){v[++c]=h?K1(a,d,e):Mt(d,a,e)}),v}),Vc=A4(function(t,a,e){O0(t,e,a)});function U4(t,a){var e=j(t)?B1:Ja;return e(t,Y(a,3))}function Cc(t,a,e,c){return t==null?[]:(j(a)||(a=a==null?[]:[a]),e=c?r:e,j(e)||(e=e==null?[]:[e]),Pa(t,a,e))}var Hc=A4(function(t,a,e){t[e?0:1].push(a)},function(){return[[],[]]});function Mc(t,a,e){var c=j(t)?W3:Ba,h=arguments.length<3;return c(t,Y(a,4),e,h,t2)}function Ic(t,a,e){var c=j(t)?U6:Ba,h=arguments.length<3;return c(t,Y(a,4),e,h,Oa)}function Ac(t,a){var e=j(t)?j0:Wa;return e(t,O4(Y(a,3)))}function wc(t){var a=j(t)?Za:zn;return a(t)}function Fc(t,a,e){(e?W1(t,a,e):a===r)?a=1:a=K(a);var c=j(t)?ji:Bn;return c(t,a)}function Gc(t){var a=j(t)?Pi:Vn;return a(t)}function Rc(t){if(t==null)return 0;if(D1(t))return T4(t)?y2(t):t.length;var a=U1(t);return a==B0||a==b0?t.size:n9(t).length}function Sc(t,a,e){var c=j(t)?T3:Cn;return e&&W1(t,a,e)&&(a=r),c(t,Y(a,3))}var Lc=t1(function(t,a){if(t==null)return[];var e=a.length;return e>1&&W1(t,a[0],a[1])?a=[]:e>2&&W1(a[0],a[1],a[2])&&(a=[a[0]]),Pa(t,y1(a,1),[])}),N4=si||function(){return R1.Date.now()};function yc(t,a){if(typeof a!="function")throw new u0(l);return t=K(t),function(){if(--t<1)return a.apply(this,arguments)}}function Y7(t,a,e){return a=e?r:a,a=t&&a==null?t.length:a,W0(t,O,r,r,r,r,a)}function E7(t,a){var e;if(typeof a!="function")throw new u0(l);return t=K(t),function(){return--t>0&&(e=a.apply(this,arguments)),t<=1&&(a=r),e}}var F9=t1(function(t,a,e){var c=Z;if(e.length){var h=K0(e,T2(F9));c|=R}return W0(t,c,a,e,h)}),J7=t1(function(t,a,e){var c=Z|m;if(e.length){var h=K0(e,T2(J7));c|=R}return W0(a,c,t,e,h)});function D7(t,a,e){a=e?r:a;var c=W0(t,V,r,r,r,r,r,a);return c.placeholder=D7.placeholder,c}function _7(t,a,e){a=e?r:a;var c=W0(t,F,r,r,r,r,r,a);return c.placeholder=_7.placeholder,c}function j7(t,a,e){var c,h,v,d,x,z,A=0,G=!1,S=!1,U=!0;if(typeof t!="function")throw new u0(l);a=p0(a)||0,V1(e)&&(G=!!e.leading,S="maxWait"in e,v=S?F1(p0(e.maxWait)||0,a):v,U="trailing"in e?!!e.trailing:U);function T(I1){var M0=c,E0=h;return c=h=r,A=I1,d=t.apply(E0,M0),d}function J(I1){return A=I1,x=Gt(r1,a),G?T(I1):d}function $(I1){var M0=I1-z,E0=I1-A,dr=a-M0;return S?Z1(dr,v-E0):dr}function D(I1){var M0=I1-z,E0=I1-A;return z===r||M0>=a||M0<0||S&&E0>=v}function r1(){var I1=N4();if(D(I1))return i1(I1);x=Gt(r1,$(I1))}function i1(I1){return x=r,U&&c?T(I1):(c=h=r,d)}function a0(){x!==r&&n7(x),A=0,c=z=h=x=r}function T1(){return x===r?d:i1(N4())}function r0(){var I1=N4(),M0=D(I1);if(c=arguments,h=this,z=I1,M0){if(x===r)return J(z);if(S)return n7(x),x=Gt(r1,a),T(z)}return x===r&&(x=Gt(r1,a)),d}return r0.cancel=a0,r0.flush=T1,r0}var Zc=t1(function(t,a){return Xa(t,1,a)}),Uc=t1(function(t,a,e){return Xa(t,p0(a)||0,e)});function Nc(t){return W0(t,q)}function X4(t,a){if(typeof t!="function"||a!=null&&typeof a!="function")throw new u0(l);var e=function(){var c=arguments,h=a?a.apply(this,c):c[0],v=e.cache;if(v.has(h))return v.get(h);var d=t.apply(this,c);return e.cache=v.set(h,d)||v,d};return e.cache=new(X4.Cache||X0),e}X4.Cache=X0;function O4(t){if(typeof t!="function")throw new u0(l);return function(){var a=arguments;switch(a.length){case 0:return!t.call(this);case 1:return!t.call(this,a[0]);case 2:return!t.call(this,a[0],a[1]);case 3:return!t.call(this,a[0],a[1],a[2])}return!t.apply(this,a)}}function Xc(t){return E7(2,t)}var Oc=Hn(function(t,a){a=a.length==1&&j(a[0])?B1(a[0],$1(Y())):B1(y1(a,1),$1(Y()));var e=a.length;return t1(function(c){for(var h=-1,v=Z1(c.length,e);++h<v;)c[h]=a[h].call(this,c[h]);return K1(t,this,c)})}),G9=t1(function(t,a){var e=K0(a,T2(G9));return W0(t,R,r,a,e)}),P7=t1(function(t,a){var e=K0(a,T2(P7));return W0(t,N,r,a,e)}),Wc=T0(function(t,a){return W0(t,X,r,r,r,a)});function Tc(t,a){if(typeof t!="function")throw new u0(l);return a=a===r?a:K(a),t1(t,a)}function Qc(t,a){if(typeof t!="function")throw new u0(l);return a=a==null?0:F1(K(a),0),t1(function(e){var c=e[a],h=e2(e,0,a);return c&&P0(h,c),K1(t,this,h)})}function kc(t,a,e){var c=!0,h=!0;if(typeof t!="function")throw new u0(l);return V1(e)&&(c="leading"in e?!!e.leading:c,h="trailing"in e?!!e.trailing:h),j7(t,a,{leading:c,maxWait:a,trailing:h})}function Yc(t){return Y7(t,1)}function Ec(t,a){return G9(d9(a),t)}function Jc(){if(!arguments.length)return[];var t=arguments[0];return j(t)?t:[t]}function Dc(t){return v0(t,M)}function _c(t,a){return a=typeof a=="function"?a:r,v0(t,M,a)}function jc(t){return v0(t,H|M)}function Pc(t,a){return a=typeof a=="function"?a:r,v0(t,H|M,a)}function Kc(t,a){return a==null||Na(t,a,S1(a))}function H0(t,a){return t===a||t!==t&&a!==a}var $c=R4(r9),qc=R4(function(t,a){return t>=a}),m2=ka(function(){return arguments}())?ka:function(t){return C1(t)&&s1.call(t,"callee")&&!Fa.call(t,"callee")},j=C.isArray,tl=ua?$1(ua):cn;function D1(t){return t!=null&&W4(t.length)&&!k0(t)}function M1(t){return C1(t)&&D1(t)}function al(t){return t===!0||t===!1||C1(t)&&O1(t)==A0}var i2=gi||T9,rl=sa?$1(sa):ln;function el(t){return C1(t)&&t.nodeType===1&&!Rt(t)}function il(t){if(t==null)return!0;if(D1(t)&&(j(t)||typeof t=="string"||typeof t.splice=="function"||i2(t)||Q2(t)||m2(t)))return!t.length;var a=U1(t);if(a==B0||a==b0)return!t.size;if(Ft(t))return!n9(t).length;for(var e in t)if(s1.call(t,e))return!1;return!0}function nl(t,a){return It(t,a)}function ol(t,a,e){e=typeof e=="function"?e:r;var c=e?e(t,a):r;return c===r?It(t,a,r,e):!!c}function R9(t){if(!C1(t))return!1;var a=O1(t);return a==o0||a==E1||typeof t.message=="string"&&typeof t.name=="string"&&!Rt(t)}function cl(t){return typeof t=="number"&&Ra(t)}function k0(t){if(!V1(t))return!1;var a=O1(t);return a==c0||a==st||a==_0||a==F8}function K7(t){return typeof t=="number"&&t==K(t)}function W4(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=p1}function V1(t){var a=typeof t;return t!=null&&(a=="object"||a=="function")}function C1(t){return t!=null&&typeof t=="object"}var $7=va?$1(va):un;function ll(t,a){return t===a||i9(t,a,b9(a))}function hl(t,a,e){return e=typeof e=="function"?e:r,i9(t,a,b9(a),e)}function ul(t){return q7(t)&&t!=+t}function sl(t){if(Dn(t))throw new _(o);return Ya(t)}function vl(t){return t===null}function gl(t){return t==null}function q7(t){return typeof t=="number"||C1(t)&&O1(t)==vt}function Rt(t){if(!C1(t)||O1(t)!=U0)return!1;var a=g4(t);if(a===null)return!0;var e=s1.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&h4.call(e)==ci}var S9=ga?$1(ga):sn;function dl(t){return K7(t)&&t>=-p1&&t<=p1}var tr=da?$1(da):vn;function T4(t){return typeof t=="string"||!j(t)&&C1(t)&&O1(t)==dt}function t0(t){return typeof t=="symbol"||C1(t)&&O1(t)==t4}var Q2=pa?$1(pa):gn;function pl(t){return t===r}function xl(t){return C1(t)&&U1(t)==pt}function ml(t){return C1(t)&&O1(t)==R8}var fl=R4(o9),zl=R4(function(t,a){return t<=a});function ar(t){if(!t)return[];if(D1(t))return T4(t)?V0(t):J1(t);if(ft&&t[ft])return j6(t[ft]());var a=U1(t),e=a==B0?D3:a==b0?o4:k2;return e(t)}function Y0(t){if(!t)return t===0?t:0;if(t=p0(t),t===P||t===-P){var a=t<0?-1:1;return a*i0}return t===t?t:0}function K(t){var a=Y0(t),e=a%1;return a===a?e?a-e:a:0}function rr(t){return t?g2(K(t),0,z1):0}function p0(t){if(typeof t=="number")return t;if(t0(t))return m0;if(V1(t)){var a=typeof t.valueOf=="function"?t.valueOf():t;t=V1(a)?a+"":a}if(typeof t!="string")return t===0?t:+t;t=ba(t);var e=$8.test(t);return e||t6.test(t)?S6(t.slice(2),e?2:8):K8.test(t)?m0:+t}function er(t){return F0(t,_1(t))}function Bl(t){return t?g2(K(t),-p1,p1):t===0?t:0}function u1(t){return t==null?"":q1(t)}var bl=O2(function(t,a){if(Ft(a)||D1(a)){F0(a,S1(a),t);return}for(var e in a)s1.call(a,e)&&Ct(t,e,a[e])}),ir=O2(function(t,a){F0(a,_1(a),t)}),Q4=O2(function(t,a,e,c){F0(a,_1(a),t,c)}),Vl=O2(function(t,a,e,c){F0(a,S1(a),t,c)}),Cl=T0(q3);function Hl(t,a){var e=X2(t);return a==null?e:Ua(e,a)}var Ml=t1(function(t,a){t=g1(t);var e=-1,c=a.length,h=c>2?a[2]:r;for(h&&W1(a[0],a[1],h)&&(c=1);++e<c;)for(var v=a[e],d=_1(v),x=-1,z=d.length;++x<z;){var A=d[x],G=t[A];(G===r||H0(G,Z2[A])&&!s1.call(t,A))&&(t[A]=v[A])}return t}),Il=t1(function(t){return t.push(r,b7),K1(nr,r,t)});function Al(t,a){return ma(t,Y(a,3),w0)}function wl(t,a){return ma(t,Y(a,3),a9)}function Fl(t,a){return t==null?t:t9(t,Y(a,3),_1)}function Gl(t,a){return t==null?t:Ta(t,Y(a,3),_1)}function Rl(t,a){return t&&w0(t,Y(a,3))}function Sl(t,a){return t&&a9(t,Y(a,3))}function Ll(t){return t==null?[]:C4(t,S1(t))}function yl(t){return t==null?[]:C4(t,_1(t))}function L9(t,a,e){var c=t==null?r:d2(t,a);return c===r?e:c}function Zl(t,a){return t!=null&&H7(t,a,rn)}function y9(t,a){return t!=null&&H7(t,a,en)}var Ul=x7(function(t,a,e){a!=null&&typeof a.toString!="function"&&(a=u4.call(a)),t[a]=e},U9(j1)),Nl=x7(function(t,a,e){a!=null&&typeof a.toString!="function"&&(a=u4.call(a)),s1.call(t,a)?t[a].push(e):t[a]=[e]},Y),Xl=t1(Mt);function S1(t){return D1(t)?ya(t):n9(t)}function _1(t){return D1(t)?ya(t,!0):dn(t)}function Ol(t,a){var e={};return a=Y(a,3),w0(t,function(c,h,v){O0(e,a(c,h,v),c)}),e}function Wl(t,a){var e={};return a=Y(a,3),w0(t,function(c,h,v){O0(e,h,a(c,h,v))}),e}var Tl=O2(function(t,a,e){H4(t,a,e)}),nr=O2(function(t,a,e,c){H4(t,a,e,c)}),Ql=T0(function(t,a){var e={};if(t==null)return e;var c=!1;a=B1(a,function(v){return v=r2(v,t),c||(c=v.length>1),v}),F0(t,z9(t),e),c&&(e=v0(e,H|w|M,Zn));for(var h=a.length;h--;)s9(e,a[h]);return e});function kl(t,a){return or(t,O4(Y(a)))}var Yl=T0(function(t,a){return t==null?{}:xn(t,a)});function or(t,a){if(t==null)return{};var e=B1(z9(t),function(c){return[c]});return a=Y(a),Ka(t,e,function(c,h){return a(c,h[0])})}function El(t,a,e){a=r2(a,t);var c=-1,h=a.length;for(h||(h=1,t=r);++c<h;){var v=t==null?r:t[G0(a[c])];v===r&&(c=h,v=e),t=k0(v)?v.call(t):v}return t}function Jl(t,a,e){return t==null?t:At(t,a,e)}function Dl(t,a,e,c){return c=typeof c=="function"?c:r,t==null?t:At(t,a,e,c)}var cr=z7(S1),lr=z7(_1);function _l(t,a,e){var c=j(t),h=c||i2(t)||Q2(t);if(a=Y(a,4),e==null){var v=t&&t.constructor;h?e=c?new v:[]:V1(t)?e=k0(v)?X2(g4(t)):{}:e={}}return(h?h0:w0)(t,function(d,x,z){return a(e,d,x,z)}),e}function jl(t,a){return t==null?!0:s9(t,a)}function Pl(t,a,e){return t==null?t:r7(t,a,d9(e))}function Kl(t,a,e,c){return c=typeof c=="function"?c:r,t==null?t:r7(t,a,d9(e),c)}function k2(t){return t==null?[]:J3(t,S1(t))}function $l(t){return t==null?[]:J3(t,_1(t))}function ql(t,a,e){return e===r&&(e=a,a=r),e!==r&&(e=p0(e),e=e===e?e:0),a!==r&&(a=p0(a),a=a===a?a:0),g2(p0(t),a,e)}function th(t,a,e){return a=Y0(a),e===r?(e=a,a=0):e=Y0(e),t=p0(t),nn(t,a,e)}function ah(t,a,e){if(e&&typeof e!="boolean"&&W1(t,a,e)&&(a=e=r),e===r&&(typeof a=="boolean"?(e=a,a=r):typeof t=="boolean"&&(e=t,t=r)),t===r&&a===r?(t=0,a=1):(t=Y0(t),a===r?(a=t,t=0):a=Y0(a)),t>a){var c=t;t=a,a=c}if(e||t%1||a%1){var h=Sa();return Z1(t+h*(a-t+R6("1e-"+((h+"").length-1))),a)}return l9(t,a)}var rh=W2(function(t,a,e){return a=a.toLowerCase(),t+(e?hr(a):a)});function hr(t){return Z9(u1(t).toLowerCase())}function ur(t){return t=u1(t),t&&t.replace(r6,Y6).replace(b6,"")}function eh(t,a,e){t=u1(t),a=q1(a);var c=t.length;e=e===r?c:g2(K(e),0,c);var h=e;return e-=a.length,e>=0&&t.slice(e,h)==a}function ih(t){return t=u1(t),t&&U8.test(t)?t.replace(T5,E6):t}function nh(t){return t=u1(t),t&&Q8.test(t)?t.replace(G3,"\\$&"):t}var oh=W2(function(t,a,e){return t+(e?"-":"")+a.toLowerCase()}),ch=W2(function(t,a,e){return t+(e?" ":"")+a.toLowerCase()}),lh=g7("toLowerCase");function hh(t,a,e){t=u1(t),a=K(a);var c=a?y2(t):0;if(!a||c>=a)return t;var h=(a-c)/2;return G4(m4(h),e)+t+G4(x4(h),e)}function uh(t,a,e){t=u1(t),a=K(a);var c=a?y2(t):0;return a&&c<a?t+G4(a-c,e):t}function sh(t,a,e){t=u1(t),a=K(a);var c=a?y2(t):0;return a&&c<a?G4(a-c,e)+t:t}function vh(t,a,e){return e||a==null?a=0:a&&(a=+a),mi(u1(t).replace(R3,""),a||0)}function gh(t,a,e){return(e?W1(t,a,e):a===r)?a=1:a=K(a),h9(u1(t),a)}function dh(){var t=arguments,a=u1(t[0]);return t.length<3?a:a.replace(t[1],t[2])}var ph=W2(function(t,a,e){return t+(e?"_":"")+a.toLowerCase()});function xh(t,a,e){return e&&typeof e!="number"&&W1(t,a,e)&&(a=e=r),e=e===r?z1:e>>>0,e?(t=u1(t),t&&(typeof a=="string"||a!=null&&!S9(a))&&(a=q1(a),!a&&L2(t))?e2(V0(t),0,e):t.split(a,e)):[]}var mh=W2(function(t,a,e){return t+(e?" ":"")+Z9(a)});function fh(t,a,e){return t=u1(t),e=e==null?0:g2(K(e),0,t.length),a=q1(a),t.slice(e,e+a.length)==a}function zh(t,a,e){var c=u.templateSettings;e&&W1(t,a,e)&&(a=r),t=u1(t),a=Q4({},a,c,B7);var h=Q4({},a.imports,c.imports,B7),v=S1(h),d=J3(h,v),x,z,A=0,G=a.interpolate||a4,S="__p += '",U=_3((a.escape||a4).source+"|"+G.source+"|"+(G===Q5?P8:a4).source+"|"+(a.evaluate||a4).source+"|$","g"),T="//# sourceURL="+(s1.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++I6+"]")+`
`;t.replace(U,function(D,r1,i1,a0,T1,r0){return i1||(i1=a0),S+=t.slice(A,r0).replace(e6,J6),r1&&(x=!0,S+=`' +
__e(`+r1+`) +
'`),T1&&(z=!0,S+=`';
`+T1+`;
__p += '`),i1&&(S+=`' +
((__t = (`+i1+`)) == null ? '' : __t) +
'`),A=r0+D.length,D}),S+=`';
`;var J=s1.call(a,"variable")&&a.variable;if(!J)S=`with (obj) {
`+S+`
}
`;else if(_8.test(J))throw new _(s);S=(z?S.replace(S8,""):S).replace(L8,"$1").replace(y8,"$1;"),S="function("+(J||"obj")+`) {
`+(J?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(x?", __e = _.escape":"")+(z?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+S+`return __p
}`;var $=vr(function(){return o1(v,T+"return "+S).apply(r,d)});if($.source=S,R9($))throw $;return $}function Bh(t){return u1(t).toLowerCase()}function bh(t){return u1(t).toUpperCase()}function Vh(t,a,e){if(t=u1(t),t&&(e||a===r))return ba(t);if(!t||!(a=q1(a)))return t;var c=V0(t),h=V0(a),v=Va(c,h),d=Ca(c,h)+1;return e2(c,v,d).join("")}function Ch(t,a,e){if(t=u1(t),t&&(e||a===r))return t.slice(0,Ma(t)+1);if(!t||!(a=q1(a)))return t;var c=V0(t),h=Ca(c,V0(a))+1;return e2(c,0,h).join("")}function Hh(t,a,e){if(t=u1(t),t&&(e||a===r))return t.replace(R3,"");if(!t||!(a=q1(a)))return t;var c=V0(t),h=Va(c,V0(a));return e2(c,h).join("")}function Mh(t,a){var e=c1,c=A1;if(V1(a)){var h="separator"in a?a.separator:h;e="length"in a?K(a.length):e,c="omission"in a?q1(a.omission):c}t=u1(t);var v=t.length;if(L2(t)){var d=V0(t);v=d.length}if(e>=v)return t;var x=e-y2(c);if(x<1)return c;var z=d?e2(d,0,x).join(""):t.slice(0,x);if(h===r)return z+c;if(d&&(x+=z.length-x),S9(h)){if(t.slice(x).search(h)){var A,G=z;for(h.global||(h=_3(h.source,u1(k5.exec(h))+"g")),h.lastIndex=0;A=h.exec(G);)var S=A.index;z=z.slice(0,S===r?x:S)}}else if(t.indexOf(q1(h),x)!=x){var U=z.lastIndexOf(h);U>-1&&(z=z.slice(0,U))}return z+c}function Ih(t){return t=u1(t),t&&Z8.test(t)?t.replace(W5,q6):t}var Ah=W2(function(t,a,e){return t+(e?" ":"")+a.toUpperCase()}),Z9=g7("toUpperCase");function sr(t,a,e){return t=u1(t),a=e?r:a,a===r?_6(t)?ri(t):O6(t):t.match(a)||[]}var vr=t1(function(t,a){try{return K1(t,r,a)}catch(e){return R9(e)?e:new _(e)}}),wh=T0(function(t,a){return h0(a,function(e){e=G0(e),O0(t,e,F9(t[e],t))}),t});function Fh(t){var a=t==null?0:t.length,e=Y();return t=a?B1(t,function(c){if(typeof c[1]!="function")throw new u0(l);return[e(c[0]),c[1]]}):[],t1(function(c){for(var h=-1;++h<a;){var v=t[h];if(K1(v[0],this,c))return K1(v[1],this,c)}})}function Gh(t){return qi(v0(t,H))}function U9(t){return function(){return t}}function Rh(t,a){return t==null||t!==t?a:t}var Sh=p7(),Lh=p7(!0);function j1(t){return t}function N9(t){return Ea(typeof t=="function"?t:v0(t,H))}function yh(t){return Da(v0(t,H))}function Zh(t,a){return _a(t,v0(a,H))}var Uh=t1(function(t,a){return function(e){return Mt(e,t,a)}}),Nh=t1(function(t,a){return function(e){return Mt(t,e,a)}});function X9(t,a,e){var c=S1(a),h=C4(a,c);e==null&&!(V1(a)&&(h.length||!c.length))&&(e=a,a=t,t=this,h=C4(a,S1(a)));var v=!(V1(e)&&"chain"in e)||!!e.chain,d=k0(t);return h0(h,function(x){var z=a[x];t[x]=z,d&&(t.prototype[x]=function(){var A=this.__chain__;if(v||A){var G=t(this.__wrapped__),S=G.__actions__=J1(this.__actions__);return S.push({func:z,args:arguments,thisArg:t}),G.__chain__=A,G}return z.apply(t,P0([this.value()],arguments))})}),t}function Xh(){return R1._===this&&(R1._=li),this}function O9(){}function Oh(t){return t=K(t),t1(function(a){return ja(a,t)})}var Wh=x9(B1),Th=x9(xa),Qh=x9(T3);function gr(t){return C9(t)?Q3(G0(t)):mn(t)}function kh(t){return function(a){return t==null?r:d2(t,a)}}var Yh=m7(),Eh=m7(!0);function W9(){return[]}function T9(){return!1}function Jh(){return{}}function Dh(){return""}function _h(){return!0}function jh(t,a){if(t=K(t),t<1||t>p1)return[];var e=z1,c=Z1(t,z1);a=Y(a),t-=z1;for(var h=E3(c,a);++e<t;)a(e);return h}function Ph(t){return j(t)?B1(t,G0):t0(t)?[t]:J1(L7(u1(t)))}function Kh(t){var a=++oi;return u1(t)+a}var $h=F4(function(t,a){return t+a},0),qh=m9("ceil"),tu=F4(function(t,a){return t/a},1),au=m9("floor");function ru(t){return t&&t.length?V4(t,j1,r9):r}function eu(t,a){return t&&t.length?V4(t,Y(a,2),r9):r}function iu(t){return za(t,j1)}function nu(t,a){return za(t,Y(a,2))}function ou(t){return t&&t.length?V4(t,j1,o9):r}function cu(t,a){return t&&t.length?V4(t,Y(a,2),o9):r}var lu=F4(function(t,a){return t*a},1),hu=m9("round"),uu=F4(function(t,a){return t-a},0);function su(t){return t&&t.length?Y3(t,j1):0}function vu(t,a){return t&&t.length?Y3(t,Y(a,2)):0}return u.after=yc,u.ary=Y7,u.assign=bl,u.assignIn=ir,u.assignInWith=Q4,u.assignWith=Vl,u.at=Cl,u.before=E7,u.bind=F9,u.bindAll=wh,u.bindKey=J7,u.castArray=Jc,u.chain=T7,u.chunk=to,u.compact=ao,u.concat=ro,u.cond=Fh,u.conforms=Gh,u.constant=U9,u.countBy=sc,u.create=Hl,u.curry=D7,u.curryRight=_7,u.debounce=j7,u.defaults=Ml,u.defaultsDeep=Il,u.defer=Zc,u.delay=Uc,u.difference=eo,u.differenceBy=io,u.differenceWith=no,u.drop=oo,u.dropRight=co,u.dropRightWhile=lo,u.dropWhile=ho,u.fill=uo,u.filter=gc,u.flatMap=xc,u.flatMapDeep=mc,u.flatMapDepth=fc,u.flatten=N7,u.flattenDeep=so,u.flattenDepth=vo,u.flip=Nc,u.flow=Sh,u.flowRight=Lh,u.fromPairs=go,u.functions=Ll,u.functionsIn=yl,u.groupBy=zc,u.initial=xo,u.intersection=mo,u.intersectionBy=fo,u.intersectionWith=zo,u.invert=Ul,u.invertBy=Nl,u.invokeMap=bc,u.iteratee=N9,u.keyBy=Vc,u.keys=S1,u.keysIn=_1,u.map=U4,u.mapKeys=Ol,u.mapValues=Wl,u.matches=yh,u.matchesProperty=Zh,u.memoize=X4,u.merge=Tl,u.mergeWith=nr,u.method=Uh,u.methodOf=Nh,u.mixin=X9,u.negate=O4,u.nthArg=Oh,u.omit=Ql,u.omitBy=kl,u.once=Xc,u.orderBy=Cc,u.over=Wh,u.overArgs=Oc,u.overEvery=Th,u.overSome=Qh,u.partial=G9,u.partialRight=P7,u.partition=Hc,u.pick=Yl,u.pickBy=or,u.property=gr,u.propertyOf=kh,u.pull=Co,u.pullAll=O7,u.pullAllBy=Ho,u.pullAllWith=Mo,u.pullAt=Io,u.range=Yh,u.rangeRight=Eh,u.rearg=Wc,u.reject=Ac,u.remove=Ao,u.rest=Tc,u.reverse=A9,u.sampleSize=Fc,u.set=Jl,u.setWith=Dl,u.shuffle=Gc,u.slice=wo,u.sortBy=Lc,u.sortedUniq=Zo,u.sortedUniqBy=Uo,u.split=xh,u.spread=Qc,u.tail=No,u.take=Xo,u.takeRight=Oo,u.takeRightWhile=Wo,u.takeWhile=To,u.tap=rc,u.throttle=kc,u.thru=Z4,u.toArray=ar,u.toPairs=cr,u.toPairsIn=lr,u.toPath=Ph,u.toPlainObject=er,u.transform=_l,u.unary=Yc,u.union=Qo,u.unionBy=ko,u.unionWith=Yo,u.uniq=Eo,u.uniqBy=Jo,u.uniqWith=Do,u.unset=jl,u.unzip=w9,u.unzipWith=W7,u.update=Pl,u.updateWith=Kl,u.values=k2,u.valuesIn=$l,u.without=_o,u.words=sr,u.wrap=Ec,u.xor=jo,u.xorBy=Po,u.xorWith=Ko,u.zip=$o,u.zipObject=qo,u.zipObjectDeep=tc,u.zipWith=ac,u.entries=cr,u.entriesIn=lr,u.extend=ir,u.extendWith=Q4,X9(u,u),u.add=$h,u.attempt=vr,u.camelCase=rh,u.capitalize=hr,u.ceil=qh,u.clamp=ql,u.clone=Dc,u.cloneDeep=jc,u.cloneDeepWith=Pc,u.cloneWith=_c,u.conformsTo=Kc,u.deburr=ur,u.defaultTo=Rh,u.divide=tu,u.endsWith=eh,u.eq=H0,u.escape=ih,u.escapeRegExp=nh,u.every=vc,u.find=dc,u.findIndex=Z7,u.findKey=Al,u.findLast=pc,u.findLastIndex=U7,u.findLastKey=wl,u.floor=au,u.forEach=Q7,u.forEachRight=k7,u.forIn=Fl,u.forInRight=Gl,u.forOwn=Rl,u.forOwnRight=Sl,u.get=L9,u.gt=$c,u.gte=qc,u.has=Zl,u.hasIn=y9,u.head=X7,u.identity=j1,u.includes=Bc,u.indexOf=po,u.inRange=th,u.invoke=Xl,u.isArguments=m2,u.isArray=j,u.isArrayBuffer=tl,u.isArrayLike=D1,u.isArrayLikeObject=M1,u.isBoolean=al,u.isBuffer=i2,u.isDate=rl,u.isElement=el,u.isEmpty=il,u.isEqual=nl,u.isEqualWith=ol,u.isError=R9,u.isFinite=cl,u.isFunction=k0,u.isInteger=K7,u.isLength=W4,u.isMap=$7,u.isMatch=ll,u.isMatchWith=hl,u.isNaN=ul,u.isNative=sl,u.isNil=gl,u.isNull=vl,u.isNumber=q7,u.isObject=V1,u.isObjectLike=C1,u.isPlainObject=Rt,u.isRegExp=S9,u.isSafeInteger=dl,u.isSet=tr,u.isString=T4,u.isSymbol=t0,u.isTypedArray=Q2,u.isUndefined=pl,u.isWeakMap=xl,u.isWeakSet=ml,u.join=Bo,u.kebabCase=oh,u.last=d0,u.lastIndexOf=bo,u.lowerCase=ch,u.lowerFirst=lh,u.lt=fl,u.lte=zl,u.max=ru,u.maxBy=eu,u.mean=iu,u.meanBy=nu,u.min=ou,u.minBy=cu,u.stubArray=W9,u.stubFalse=T9,u.stubObject=Jh,u.stubString=Dh,u.stubTrue=_h,u.multiply=lu,u.nth=Vo,u.noConflict=Xh,u.noop=O9,u.now=N4,u.pad=hh,u.padEnd=uh,u.padStart=sh,u.parseInt=vh,u.random=ah,u.reduce=Mc,u.reduceRight=Ic,u.repeat=gh,u.replace=dh,u.result=El,u.round=hu,u.runInContext=f,u.sample=wc,u.size=Rc,u.snakeCase=ph,u.some=Sc,u.sortedIndex=Fo,u.sortedIndexBy=Go,u.sortedIndexOf=Ro,u.sortedLastIndex=So,u.sortedLastIndexBy=Lo,u.sortedLastIndexOf=yo,u.startCase=mh,u.startsWith=fh,u.subtract=uu,u.sum=su,u.sumBy=vu,u.template=zh,u.times=jh,u.toFinite=Y0,u.toInteger=K,u.toLength=rr,u.toLower=Bh,u.toNumber=p0,u.toSafeInteger=Bl,u.toString=u1,u.toUpper=bh,u.trim=Vh,u.trimEnd=Ch,u.trimStart=Hh,u.truncate=Mh,u.unescape=Ih,u.uniqueId=Kh,u.upperCase=Ah,u.upperFirst=Z9,u.each=Q7,u.eachRight=k7,u.first=X7,X9(u,function(){var t={};return w0(u,function(a,e){s1.call(u.prototype,e)||(t[e]=a)}),t}(),{chain:!1}),u.VERSION=i,h0(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){u[t].placeholder=u}),h0(["drop","take"],function(t,a){e1.prototype[t]=function(e){e=e===r?1:F1(K(e),0);var c=this.__filtered__&&!a?new e1(this):this.clone();return c.__filtered__?c.__takeCount__=Z1(e,c.__takeCount__):c.__views__.push({size:Z1(e,z1),type:t+(c.__dir__<0?"Right":"")}),c},e1.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),h0(["filter","map","takeWhile"],function(t,a){var e=a+1,c=e==Y1||e==h1;e1.prototype[t]=function(h){var v=this.clone();return v.__iteratees__.push({iteratee:Y(h,3),type:e}),v.__filtered__=v.__filtered__||c,v}}),h0(["head","last"],function(t,a){var e="take"+(a?"Right":"");e1.prototype[t]=function(){return this[e](1).value()[0]}}),h0(["initial","tail"],function(t,a){var e="drop"+(a?"":"Right");e1.prototype[t]=function(){return this.__filtered__?new e1(this):this[e](1)}}),e1.prototype.compact=function(){return this.filter(j1)},e1.prototype.find=function(t){return this.filter(t).head()},e1.prototype.findLast=function(t){return this.reverse().find(t)},e1.prototype.invokeMap=t1(function(t,a){return typeof t=="function"?new e1(this):this.map(function(e){return Mt(e,t,a)})}),e1.prototype.reject=function(t){return this.filter(O4(Y(t)))},e1.prototype.slice=function(t,a){t=K(t);var e=this;return e.__filtered__&&(t>0||a<0)?new e1(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),a!==r&&(a=K(a),e=a<0?e.dropRight(-a):e.take(a-t)),e)},e1.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},e1.prototype.toArray=function(){return this.take(z1)},w0(e1.prototype,function(t,a){var e=/^(?:filter|find|map|reject)|While$/.test(a),c=/^(?:head|last)$/.test(a),h=u[c?"take"+(a=="last"?"Right":""):a],v=c||/^find/.test(a);h&&(u.prototype[a]=function(){var d=this.__wrapped__,x=c?[1]:arguments,z=d instanceof e1,A=x[0],G=z||j(d),S=function(r1){var i1=h.apply(u,P0([r1],x));return c&&U?i1[0]:i1};G&&e&&typeof A=="function"&&A.length!=1&&(z=G=!1);var U=this.__chain__,T=!!this.__actions__.length,J=v&&!U,$=z&&!T;if(!v&&G){d=$?d:new e1(this);var D=t.apply(d,x);return D.__actions__.push({func:Z4,args:[S],thisArg:r}),new s0(D,U)}return J&&$?t.apply(this,x):(D=this.thru(S),J?c?D.value()[0]:D.value():D)})}),h0(["pop","push","shift","sort","splice","unshift"],function(t){var a=c4[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",c=/^(?:pop|shift)$/.test(t);u.prototype[t]=function(){var h=arguments;if(c&&!this.__chain__){var v=this.value();return a.apply(j(v)?v:[],h)}return this[e](function(d){return a.apply(j(d)?d:[],h)})}}),w0(e1.prototype,function(t,a){var e=u[a];if(e){var c=e.name+"";s1.call(N2,c)||(N2[c]=[]),N2[c].push({name:a,func:e})}}),N2[w4(r,m).name]=[{name:"wrapper",func:r}],e1.prototype.clone=Hi,e1.prototype.reverse=Mi,e1.prototype.value=Ii,u.prototype.at=ec,u.prototype.chain=ic,u.prototype.commit=nc,u.prototype.next=oc,u.prototype.plant=lc,u.prototype.reverse=hc,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=uc,u.prototype.first=u.prototype.head,ft&&(u.prototype[ft]=cc),u},$0=ei();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(R1._=$0,define(function(){return $0})):h2?((h2.exports=$0)._=$0,N3._=$0):R1._=$0}).call(lt)});import rd,{useCallback as ed,useState as z3,useRef as N5,useEffect as B3}from"react";import Lt from"react";import xr from"react";var Q9={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},St=xr.createContext&&xr.createContext(Q9);var n2=function(){return n2=Object.assign||function(r){for(var i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(r[l]=i[l])}return r},n2.apply(this,arguments)},zu=function(r,i){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.indexOf(o)<0&&(n[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(r);l<o.length;l++)i.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(r,o[l])&&(n[o[l]]=r[o[l]]);return n};function mr(r){return r&&r.map(function(i,n){return Lt.createElement(i.tag,n2({key:n},i.attr),mr(i.child))})}function z2(r){return function(i){return Lt.createElement(Bu,n2({attr:n2({},r.attr)},i),mr(r.child))}}function Bu(r){var i=function(n){var o=r.attr,l=r.size,s=r.title,g=zu(r,["attr","size","title"]),p=l||n.size||"1em",b;return n.className&&(b=n.className),r.className&&(b=(b?b+" ":"")+r.className),Lt.createElement("svg",n2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,g,{className:b,style:n2(n2({color:r.color||n.color},n.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),s&&Lt.createElement("title",null,s),r.children)};return St!==void 0?Lt.createElement(St.Consumer,null,function(n){return i(n)}):i(Q9)}function fr(r){return z2({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m11.998 17 7-8h-14z"}}]})(r)}function zr(r){return z2({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(r)}function Br(r){return z2({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"}}]})(r)}function br(r){return z2({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"}}]})(r)}function Vr(r){return z2({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"}}]})(r)}function k4(r){return z2({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(r)}var A8=k(Gr());var Rr=k(E());import{jsx as Nu}from"react/jsx-runtime";var Lu={baseline:"vuiFlexContainer--alignItemsBaseline",center:"vuiFlexContainer--alignItemsCenter",end:"vuiFlexContainer--alignItemsEnd",start:"vuiFlexContainer--alignItemsStart",stretch:"vuiFlexContainer--alignItemsStretch"},yu={column:"vuiFlexContainer--directionColumn",columnReverse:"vuiFlexContainer--directionColumnReverse",row:"vuiFlexContainer--directionRow",rowReverse:"vuiFlexContainer--directionRowReverse"},Zu={center:"vuiFlexContainer--justifyContentCenter",end:"vuiFlexContainer--justifyContentEnd",start:"vuiFlexContainer--justifyContentStart",spaceAround:"vuiFlexContainer--justifyContentSpaceAround",spaceBetween:"vuiFlexContainer--justifyContentSpaceBetween",spaceEvenly:"vuiFlexContainer--justifyContentSpaceEvenly"},Uu={none:"vuiFlexContainer--spacingNone",xxs:"vuiFlexContainer--spacingXxs",xs:"vuiFlexContainer--spacingXs",s:"vuiFlexContainer--spacingS",m:"vuiFlexContainer--spacingM",l:"vuiFlexContainer--spacingL",xl:"vuiFlexContainer--spacingXl",xxl:"vuiFlexContainer--spacingXxl"},n1=({children:r,alignItems:i="stretch",direction:n="row",justifyContent:o="start",spacing:l="m",wrap:s,className:g,fullWidth:p,...b})=>{let H=(0,Rr.default)(g,"vuiFlexContainer",Lu[i],yu[n],Zu[o],Uu[l],{"vuiFlexContainer--wrap":s,"vuiFlexContainer--fullWidth":p});return Nu("div",{className:H,...b,children:r})};var Sr=k(E());import{jsx as Ou}from"react/jsx-runtime";var Xu={baseline:"vuiFlexItem--alignItemsBaseline",center:"vuiFlexItem--alignItemsCenter",end:"vuiFlexItem--alignItemsEnd",start:"vuiFlexItem--alignItemsStart",stretch:"vuiFlexItem--alignItemsStretch"},a1=({children:r,grow:i,shrink:n,basis:o="auto",alignItems:l="stretch",className:s,truncate:g,...p})=>{let b=i===!1,H=n===!1,w=(0,Sr.default)("vuiFlexItem",`vuiFlexItem--${o}`,Xu[l],{[`vuiFlexItem--flexGrow${i}`]:typeof i=="number","vuiFlexItem--flexGrowNone":b,[`vuiFlexItem--flexShrink${n}`]:typeof n=="number","vuiFlexItem--flexShrinkNone":H,"vuiFlexItem--truncate":g},s);return Ou("div",{className:w,...p,children:r})};var Y9=k(E());import{cloneElement as Wu}from"react";import{jsx as Lr}from"react/jsx-runtime";var Tu={xs:"14",s:"16",m:"20",l:"24",xl:"28",xxl:"46",xxxl:"68"},v1=({children:r,size:i="m",color:n="inherit",className:o,inline:l,...s})=>{let g=(0,Y9.default)(o,"vuiIcon__inner",{[`vuiIcon--${n}`]:n}),p=(0,Y9.default)("vuiIcon",{"vuiIcon--inline":l}),b=Wu(r,{size:Tu[i]});return Lr(St.Provider,{value:{className:g},children:Lr("div",{className:p,...s,children:b})})};import{Fragment as Td,jsx as Od,jsxs as Wd}from"react/jsx-runtime";import{jsx as Yd}from"react/jsx-runtime";var qs=k(E());import{cloneElement as Lf,useEffect as yf,useRef as Zf,useState as Uf}from"react";import{useEffect as Qu,useRef as ku}from"react";import{createPortal as Yu}from"react-dom";var D2=({children:r})=>{let i=ku(null);return Qu(()=>(i.current=document.createElement("div"),document.body.appendChild(i.current),()=>{var n,o;(o=(n=i.current)==null?void 0:n.parentNode)==null||o.removeChild(i.current)}),[]),i.current?Yu(r,i.current):null};var G1=function(){return G1=Object.assign||function(i){for(var n,o=1,l=arguments.length;o<l;o++){n=arguments[o];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},G1.apply(this,arguments)};function B2(r,i){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.indexOf(o)<0&&(n[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(r);l<o.length;l++)i.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(r,o[l])&&(n[o[l]]=r[o[l]]);return n}function yr(){for(var r=0,i=0,n=arguments.length;i<n;i++)r+=arguments[i].length;for(var o=Array(r),l=0,i=0;i<n;i++)for(var s=arguments[i],g=0,p=s.length;g<p;g++,l++)o[l]=s[g];return o}function Zr(r,i,n){if(n||arguments.length===2)for(var o=0,l=i.length,s;o<l;o++)(s||!(o in i))&&(s||(s=Array.prototype.slice.call(i,0,o)),s[o]=i[o]);return r.concat(s||Array.prototype.slice.call(i))}import*as kt from"react";import*as R0 from"react";import*as N1 from"react";var b2="right-scroll-bar-position",V2="width-before-scroll-bar",E9="with-scroll-bars-hidden",J9="--removed-body-scroll-bar-size";function Ur(r,i){return typeof r=="function"?r(i):r&&(r.current=i),r}import{useState as Eu}from"react";function Nr(r,i){var n=Eu(function(){return{value:r,callback:i,facade:{get current(){return n.value},set current(o){var l=n.value;l!==o&&(n.value=o,n.callback(o,l))}}}})[0];return n.callback=i,n.facade}function yt(r,i){return Nr(i||null,function(n){return r.forEach(function(o){return Ur(o,n)})})}function Xr(r){return r}function Or(r,i){i===void 0&&(i=Xr);var n=[],o=!1,l={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:r},useMedium:function(s){var g=i(s,o);return n.push(g),function(){n=n.filter(function(p){return p!==g})}},assignSyncMedium:function(s){for(o=!0;n.length;){var g=n;n=[],g.forEach(s)}n={push:function(p){return s(p)},filter:function(){return n}}},assignMedium:function(s){o=!0;var g=[];if(n.length){var p=n;n=[],p.forEach(s),g=n}var b=function(){var w=g;g=[],w.forEach(s)},H=function(){return Promise.resolve().then(b)};H(),n={push:function(w){g.push(w),H()},filter:function(w){return g=g.filter(w),n}}}};return l}function Zt(r,i){return i===void 0&&(i=Xr),Or(r,i)}function C2(r){r===void 0&&(r={});var i=Or(null);return i.options=G1({async:!0,ssr:!1},r),i}import*as Wr from"react";var Tr=function(r){var i=r.sideCar,n=B2(r,["sideCar"]);if(!i)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=i.read();if(!o)throw new Error("Sidecar medium not found");return Wr.createElement(o,G1({},n))};Tr.isSideCarExport=!0;function H2(r,i){return r.useMedium(i),Tr}var J4=C2();var D9=function(){},D4=N1.forwardRef(function(r,i){var n=N1.useRef(null),o=N1.useState({onScrollCapture:D9,onWheelCapture:D9,onTouchMoveCapture:D9}),l=o[0],s=o[1],g=r.forwardProps,p=r.children,b=r.className,H=r.removeScrollBar,w=r.enabled,M=r.shards,y=r.sideCar,L=r.noIsolation,Z=r.inert,m=r.allowPinchZoom,B=r.as,V=B===void 0?"div":B,F=r.gapMode,R=B2(r,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=y,O=yt([n,i]),X=G1(G1({},R),l);return N1.createElement(N1.Fragment,null,w&&N1.createElement(N,{sideCar:J4,removeScrollBar:H,shards:M,noIsolation:L,inert:Z,setCallbacks:s,allowPinchZoom:!!m,lockRef:n,gapMode:F}),g?N1.cloneElement(N1.Children.only(p),G1(G1({},X),{ref:O})):N1.createElement(V,G1({},X,{className:b,ref:O}),p))});D4.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};D4.classNames={fullWidth:V2,zeroRight:b2};function _2(){return _2=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])}return r},_2.apply(this,arguments)}import*as m1 from"react";var Ut="data-focus-lock",_4="data-focus-lock-disabled",Qr="data-no-focus-lock",kr="data-autofocus-inside",Yr="data-no-autofocus";import{useEffect as Du}from"react";import*as j2 from"react";var P2={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},Er=function(i){var n=i.children;return j2.createElement(j2.Fragment,null,j2.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:P2}),n,n&&j2.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:P2}))};Er.propTypes={};Er.defaultProps={children:null};var j4=Zt({},function(r){var i=r.target,n=r.currentTarget;return{target:i,currentTarget:n}}),P4=Zt(),Jr=Zt(),K4=C2({async:!0});var _u=[],_9=m1.forwardRef(function(i,n){var o,l=m1.useState(),s=l[0],g=l[1],p=m1.useRef(),b=m1.useRef(!1),H=m1.useRef(null),w=i.children,M=i.disabled,y=i.noFocusGuards,L=i.persistentFocus,Z=i.crossFrame,m=i.autoFocus,B=i.allowTextSelection,V=i.group,F=i.className,R=i.whiteList,N=i.hasPositiveIndices,O=i.shards,X=O===void 0?_u:O,q=i.as,c1=q===void 0?"div":q,A1=i.lockProps,I0=A1===void 0?{}:A1,x0=i.sideCar,Y1=i.returnFocus,l1=i.focusOptions,h1=i.onActivation,P=i.onDeactivation,p1=m1.useState({}),i0=p1[0],m0=m1.useCallback(function(){H.current=H.current||document&&document.activeElement,p.current&&h1&&h1(p.current),b.current=!0},[h1]),z1=m1.useCallback(function(){b.current=!1,P&&P(p.current)},[P]);Du(function(){M||(H.current=null)},[]);var ut=m1.useCallback(function(E1){var o0=H.current;if(o0&&o0.focus){var c0=typeof Y1=="function"?Y1(o0):Y1;if(c0){var st=typeof c0=="object"?c0:void 0;H.current=null,E1?Promise.resolve().then(function(){return o0.focus(st)}):o0.focus(st)}}},[Y1]),n0=m1.useCallback(function(E1){b.current&&j4.useMedium(E1)},[]),Z0=P4.useMedium,P1=m1.useCallback(function(E1){p.current!==E1&&(p.current=E1,g(E1))},[]),f0=_2((o={},o[_4]=M&&"disabled",o[Ut]=V,o),I0),_0=y!==!0,A0=_0&&y!=="tail",z0=yt([n,P1]);return m1.createElement(m1.Fragment,null,_0&&[m1.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:M?-1:0,style:P2}),N?m1.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:M?-1:1,style:P2}):null],!M&&m1.createElement(x0,{id:i0,sideCar:K4,observed:s,disabled:M,persistentFocus:L,crossFrame:Z,autoFocus:m,whiteList:R,shards:X,onActivation:m0,onDeactivation:z1,returnFocus:ut,focusOptions:l1}),m1.createElement(c1,_2({ref:z0},f0,{className:F,onBlur:Z0,onFocus:n0}),w),A0&&m1.createElement("div",{"data-focus-guard":!0,tabIndex:M?-1:0,style:P2}))});_9.propTypes={};_9.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var Dr=_9;function $4(r){setTimeout(r,1)}var _r=Dr;var q4=C2(),t3="data-focus-on-hidden";var ju={preventScroll:!0},jr=R0.forwardRef(function(r,i){var n=R0.useState(!1),o=n[0],l=n[1],s=r.children,g=r.autoFocus,p=r.shards,b=r.crossFrame,H=r.enabled,w=H===void 0?!0:H,M=r.scrollLock,y=M===void 0?!0:M,L=r.focusLock,Z=L===void 0?!0:L,m=r.returnFocus,B=m===void 0?!0:m,V=r.inert,F=r.allowPinchZoom,R=r.sideCar,N=r.className,O=r.shouldIgnore,X=r.preventScrollOnFocus,q=r.style,c1=r.as,A1=r.gapMode,I0=B2(r,["children","autoFocus","shards","crossFrame","enabled","scrollLock","focusLock","returnFocus","inert","allowPinchZoom","sideCar","className","shouldIgnore","preventScrollOnFocus","style","as","gapMode"]),x0=R,Y1=o.onActivation,l1=o.onDeactivation,h1=B2(o,["onActivation","onDeactivation"]),P=G1(G1({},h1),{as:c1,style:q,sideCar:R,shards:p,allowPinchZoom:F,gapMode:A1,inert:V,enabled:w&&y});return R0.createElement(R0.Fragment,null,R0.createElement(_r,{ref:i,sideCar:R,disabled:!(o&&w&&Z),returnFocus:B,autoFocus:g,shards:p,crossFrame:b,onActivation:Y1,onDeactivation:l1,className:N,whiteList:O,lockProps:P,focusOptions:X?ju:void 0,as:D4},s),w&&R0.createElement(x0,G1({},I0,{sideCar:q4,setLockProps:l,shards:p})))});import*as pe from"react";function Nt(r,i){return Nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},Nt(r,i)}function j9(r,i){r.prototype=Object.create(i.prototype),r.prototype.constructor=r,Nt(r,i)}function o2(r){"@babel/helpers - typeof";return o2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},o2(r)}function P9(r,i){if(o2(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,i||"default");if(o2(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function K9(r){var i=P9(r,"string");return o2(i)=="symbol"?i:String(i)}function $9(r,i,n){return i=K9(i),i in r?Object.defineProperty(r,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[i]=n,r}import Pu,{PureComponent as Ku}from"react";function $u(r,i){function n(o){return o.displayName||o.name||"Component"}return function(l){var s=[],g;function p(){g=r(s.map(function(H){return H.props})),i(g)}var b=function(H){j9(w,H);function w(){return H.apply(this,arguments)||this}w.peek=function(){return g};var M=w.prototype;return M.componentDidMount=function(){s.push(this),p()},M.componentDidUpdate=function(){p()},M.componentWillUnmount=function(){var L=s.indexOf(this);s.splice(L,1),p()},M.render=function(){return Pu.createElement(l,this.props)},w}(Ku);return $9(b,"displayName","SideEffect("+n(l)+")"),b}}var Pr=$u;var X1=function(r){for(var i=Array(r.length),n=0;n<r.length;++n)i[n]=r[n];return i},M2=function(r){return Array.isArray(r)?r:[r]},a3=function(r){return Array.isArray(r)?r[0]:r};var qu=function(r){if(r.nodeType!==Node.ELEMENT_NODE)return!1;var i=window.getComputedStyle(r,null);return!i||!i.getPropertyValue?!1:i.getPropertyValue("display")==="none"||i.getPropertyValue("visibility")==="hidden"},Kr=function(r){return r.parentNode&&r.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?r.parentNode.host:r.parentNode},$r=function(r){return r===document||r&&r.nodeType===Node.DOCUMENT_NODE},ts=function(r,i){return!r||$r(r)||!qu(r)&&i(Kr(r))},q9=function(r,i){var n=r.get(i);if(n!==void 0)return n;var o=ts(i,q9.bind(void 0,r));return r.set(i,o),o},as=function(r,i){return r&&!$r(r)?es(r)?i(Kr(r)):!1:!0},t5=function(r,i){var n=r.get(i);if(n!==void 0)return n;var o=as(i,t5.bind(void 0,r));return r.set(i,o),o},a5=function(r){return r.dataset},rs=function(r){return r.tagName==="BUTTON"},qr=function(r){return r.tagName==="INPUT"},r5=function(r){return qr(r)&&r.type==="radio"},te=function(r){return!((qr(r)||rs(r))&&(r.type==="hidden"||r.disabled))},es=function(r){var i=r.getAttribute(Yr);return![!0,"true",""].includes(i)},Xt=function(r){var i;return!!(r&&(!((i=a5(r))===null||i===void 0)&&i.focusGuard))},K2=function(r){return!Xt(r)},ae=function(r){return!!r};var is=function(r,i){var n=r.tabIndex-i.tabIndex,o=r.index-i.index;if(n){if(!r.tabIndex)return 1;if(!i.tabIndex)return-1}return n||o},e5=function(r,i,n){return X1(r).map(function(o,l){return{node:o,index:l,tabIndex:n&&o.tabIndex===-1?(o.dataset||{}).focusGuard?0:-1:o.tabIndex}}).filter(function(o){return!i||o.tabIndex>=0}).sort(is)};var re=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"];var i5=re.join(","),ns="".concat(i5,", [data-focus-guard]"),ee=function(r,i){return X1((r.shadowRoot||r).children).reduce(function(n,o){return n.concat(o.matches(i?ns:i5)?[o]:[],ee(o))},[])},os=function(r,i){var n;return r instanceof HTMLIFrameElement&&(!((n=r.contentDocument)===null||n===void 0)&&n.body)?Ot([r.contentDocument.body],i):[r]},Ot=function(r,i){return r.reduce(function(n,o){var l,s=ee(o,i),g=(l=[]).concat.apply(l,s.map(function(p){return os(p,i)}));return n.concat(g,o.parentNode?X1(o.parentNode.querySelectorAll(i5)).filter(function(p){return p===o}):[])},[])},ie=function(r){var i=r.querySelectorAll("[".concat(kr,"]"));return X1(i).map(function(n){return Ot([n])}).reduce(function(n,o){return n.concat(o)},[])};var n5=function(r,i){return X1(r).filter(function(n){return q9(i,n)}).filter(function(n){return te(n)})},o5=function(r,i){return i===void 0&&(i=new Map),X1(r).filter(function(n){return t5(i,n)})},Wt=function(r,i,n){return e5(n5(Ot(r,n),i),!0,n)},c5=function(r,i){return e5(n5(Ot(r),i),!1)},ne=function(r,i){return n5(ie(r),i)},J0=function(r,i){return r.shadowRoot?J0(r.shadowRoot,i):Object.getPrototypeOf(r).contains!==void 0&&Object.getPrototypeOf(r).contains.call(r,i)?!0:X1(r.children).some(function(n){var o;if(n instanceof HTMLIFrameElement){var l=(o=n.contentDocument)===null||o===void 0?void 0:o.body;return l?J0(l,i):!1}return J0(n,i)})};var cs=function(r){for(var i=new Set,n=r.length,o=0;o<n;o+=1)for(var l=o+1;l<n;l+=1){var s=r[o].compareDocumentPosition(r[l]);(s&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&i.add(l),(s&Node.DOCUMENT_POSITION_CONTAINS)>0&&i.add(o)}return r.filter(function(g,p){return!i.has(p)})},oe=function(r){return r.parentNode?oe(r.parentNode):r},$2=function(r){var i=M2(r);return i.filter(Boolean).reduce(function(n,o){var l=o.getAttribute(Ut);return n.push.apply(n,l?cs(X1(oe(o).querySelectorAll("[".concat(Ut,'="').concat(l,'"]:not([').concat(_4,'="disabled"])')))):[o]),n},[])};var ce=function(r){try{return r()}catch{return}};var c2=function(r){if(r===void 0&&(r=document),!(!r||!r.activeElement)){var i=r.activeElement;return i.shadowRoot?c2(i.shadowRoot):i instanceof HTMLIFrameElement&&ce(function(){return i.contentWindow.document})?c2(i.contentWindow.document):i}};var ls=function(r,i){return r===i},hs=function(r,i){return!!X1(r.querySelectorAll("iframe")).some(function(n){return ls(n,i)})},r3=function(r,i){return i===void 0&&(i=c2(a3(r).ownerDocument)),!i||i.dataset&&i.dataset.focusGuard?!1:$2(r).some(function(n){return J0(n,i)||hs(n,i)})};var l5=function(r){r===void 0&&(r=document);var i=c2(r);return i?X1(r.querySelectorAll("[".concat(Qr,"]"))).some(function(n){return J0(n,i)}):!1};var us=function(r,i){return i.filter(r5).filter(function(n){return n.name===r.name}).filter(function(n){return n.checked})[0]||r},e3=function(r,i){return r5(r)&&r.name?us(r,i):r},le=function(r){var i=new Set;return r.forEach(function(n){return i.add(e3(n,r))}),r.filter(function(n){return i.has(n)})};var h5=function(r){return r[0]&&r.length>1?e3(r[0],r):r[0]},u5=function(r,i){return r.length>1?r.indexOf(e3(r[i],r)):i};var s5="NEW_FOCUS",he=function(r,i,n,o){var l=r.length,s=r[0],g=r[l-1],p=Xt(n);if(!(n&&r.indexOf(n)>=0)){var b=n!==void 0?i.indexOf(n):-1,H=o?i.indexOf(o):b,w=o?r.indexOf(o):-1,M=b-H,y=i.indexOf(s),L=i.indexOf(g),Z=le(i),m=n!==void 0?Z.indexOf(n):-1,B=m-(o?Z.indexOf(o):b),V=u5(r,0),F=u5(r,l-1);if(b===-1||w===-1)return s5;if(!M&&w>=0)return w;if(b<=y&&p&&Math.abs(M)>1)return F;if(b>=L&&p&&Math.abs(M)>1)return V;if(M&&Math.abs(B)>1)return w;if(b<=y)return F;if(b>L)return V;if(M)return Math.abs(M)>1?w:(l+w+M)%l}};var ss=function(r){return function(i){var n,o=(n=a5(i))===null||n===void 0?void 0:n.autofocus;return i.autofocus||o!==void 0&&o!=="false"||r.indexOf(i)>=0}},ue=function(r,i,n){var o=r.map(function(s){var g=s.node;return g}),l=o5(o.filter(ss(n)));return l&&l.length?h5(l):h5(o5(i))};var g5=function(r,i){return i===void 0&&(i=[]),i.push(r),r.parentNode&&g5(r.parentNode.host||r.parentNode,i),i},v5=function(r,i){for(var n=g5(r),o=g5(i),l=0;l<n.length;l+=1){var s=n[l];if(o.indexOf(s)>=0)return s}return!1},i3=function(r,i,n){var o=M2(r),l=M2(i),s=o[0],g=!1;return l.filter(Boolean).forEach(function(p){g=v5(g||p,p)||g,n.filter(Boolean).forEach(function(b){var H=v5(s,b);H&&(!g||J0(H,g)?g=H:g=v5(H,g))})}),g},se=function(r,i){return r.reduce(function(n,o){return n.concat(ne(o,i))},[])};var vs=function(r,i){var n=new Map;return i.forEach(function(o){return n.set(o.node,o)}),r.map(function(o){return n.get(o)}).filter(ae)},ve=function(r,i){var n=c2(M2(r).length>0?document:a3(r).ownerDocument),o=$2(r).filter(K2),l=i3(n||r,r,o),s=new Map,g=c5(o,s),p=Wt(o,s).filter(function(L){var Z=L.node;return K2(Z)});if(!(!p[0]&&(p=g,!p[0]))){var b=c5([l],s).map(function(L){var Z=L.node;return Z}),H=vs(b,p),w=H.map(function(L){var Z=L.node;return Z}),M=he(w,b,n,i);if(M===s5){var y=ue(g,w,se(o,s));if(y)return{node:y};console.warn("focus-lock: cannot find any node to move focus into");return}return M===void 0?M:H[M]}};var d5=function(r){var i=$2(r).filter(K2),n=i3(r,r,i),o=new Map,l=Wt([n],o,!0),s=Wt(i,o).filter(function(g){var p=g.node;return K2(p)}).map(function(g){var p=g.node;return p});return l.map(function(g){var p=g.node,b=g.index;return{node:p,index:b,lockItem:s.indexOf(p)>=0,guard:Xt(p)}})};var ge=function(r,i){"focus"in r&&r.focus(i),"contentWindow"in r&&r.contentWindow&&r.contentWindow.focus()};var p5=0,x5=!1,n3=function(r,i,n){n===void 0&&(n={});var o=ve(r,i);if(!x5&&o){if(p5>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),x5=!0,setTimeout(function(){x5=!1},1);return}p5++,ge(o.node,n.focusOptions),p5--}};var gs=function(){return document&&document.activeElement===document.body},ds=function(){return gs()||l5()},tt=null,q2=null,at=null,Tt=!1,ps=function(){return!0},xs=function(i){return(tt.whiteList||ps)(i)},ms=function(i,n){at={observerNode:i,portaledElement:n}},fs=function(i){return at&&at.portaledElement===i};function de(r,i,n,o){var l=null,s=r;do{var g=o[s];if(g.guard)g.node.dataset.focusAutoGuard&&(l=g);else if(g.lockItem){if(s!==r)return;l=null}else break}while((s+=n)!==i);l&&(l.node.tabIndex=0)}var zs=function(i){return i&&"current"in i?i.current:i},Bs=function(i){return i?!!Tt:Tt==="meanwhile"},bs=function r(i,n,o){return n&&(n.host===i&&(!n.activeElement||o.contains(n.activeElement))||n.parentNode&&r(i,n.parentNode,o))},Vs=function(i,n){return n.some(function(o){return bs(i,o,o)})},o3=function(){var i=!1;if(tt){var n=tt,o=n.observed,l=n.persistentFocus,s=n.autoFocus,g=n.shards,p=n.crossFrame,b=n.focusOptions,H=o||at&&at.portaledElement,w=document&&document.activeElement;if(H){var M=[H].concat(g.map(zs).filter(Boolean));if((!w||xs(w))&&(l||Bs(p)||!ds()||!q2&&s)&&(H&&!(r3(M)||w&&Vs(w,M)||fs(w,H))&&(document&&!q2&&w&&!s?(w.blur&&w.blur(),document.body.focus()):(i=n3(M,q2,{focusOptions:b}),at={})),Tt=!1,q2=document&&document.activeElement),document){var y=document&&document.activeElement,L=d5(M),Z=L.map(function(m){var B=m.node;return B}).indexOf(y);Z>-1&&(L.filter(function(m){var B=m.guard,V=m.node;return B&&V.dataset.focusAutoGuard}).forEach(function(m){var B=m.node;return B.removeAttribute("tabIndex")}),de(Z,L.length,1,L),de(Z,-1,-1,L))}}}return i},xe=function(i){o3()&&i&&(i.stopPropagation(),i.preventDefault())},c3=function(){return $4(o3)},me=function(i){var n=i.target,o=i.currentTarget;o.contains(n)||ms(o,n)},Cs=function(){return null},Hs=function(i){var n=i.children;return pe.createElement("div",{onBlur:c3,onFocus:me},n)};Hs.propTypes={};var fe=function(){Tt="just",$4(function(){Tt="meanwhile"})},Ms=function(){document.addEventListener("focusin",xe),document.addEventListener("focusout",c3),window.addEventListener("blur",fe)},Is=function(){document.removeEventListener("focusin",xe),document.removeEventListener("focusout",c3),window.removeEventListener("blur",fe)};function As(r){return r.filter(function(i){var n=i.disabled;return!n})}function ws(r){var i=r.slice(-1)[0];i&&!tt&&Ms();var n=tt,o=n&&i&&i.id===n.id;tt=i,n&&!o&&(n.onDeactivation(),r.filter(function(l){var s=l.id;return s===n.id}).length||n.returnFocus(!i)),i?(q2=null,(!o||n.observed!==i.observed)&&i.onActivation(),o3(!0),$4(o3)):(Is(),q2=null)}j4.assignSyncMedium(me);P4.assignMedium(c3);Jr.assignMedium(function(r){return r({moveFocusInside:n3,focusInside:r3})});var ze=Pr(As,ws)(Cs);var Im=H2(K4,ze);import*as f1 from"react";import*as l3 from"react";import*as Ve from"react";var Be;var be=function(){if(Be)return Be;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Fs(){if(!document)return null;var r=document.createElement("style");r.type="text/css";var i=be();return i&&r.setAttribute("nonce",i),r}function Gs(r,i){r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}function Rs(r){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(r)}var m5=function(){var r=0,i=null;return{add:function(n){r==0&&(i=Fs())&&(Gs(i,n),Rs(i)),r++},remove:function(){r--,!r&&i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}}};var f5=function(){var r=m5();return function(i,n){Ve.useEffect(function(){return r.add(i),function(){r.remove()}},[i&&n])}};var I2=function(){var r=f5(),i=function(n){var o=n.styles,l=n.dynamic;return r(o,l),null};return i};var Ss={left:0,top:0,right:0,gap:0},z5=function(r){return parseInt(r||"",10)||0},Ls=function(r){var i=window.getComputedStyle(document.body),n=i[r==="padding"?"paddingLeft":"marginLeft"],o=i[r==="padding"?"paddingTop":"marginTop"],l=i[r==="padding"?"paddingRight":"marginRight"];return[z5(n),z5(o),z5(l)]},B5=function(r){if(r===void 0&&(r="margin"),typeof window>"u")return Ss;var i=Ls(r),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:i[0],top:i[1],right:i[2],gap:Math.max(0,o-n+i[2]-i[0])}};var ys=I2(),Zs=function(r,i,n,o){var l=r.left,s=r.top,g=r.right,p=r.gap;return n===void 0&&(n="margin"),`
  .`.concat(E9,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(p,"px ").concat(o,`;
  }
  body {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([i&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(g,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(p,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(b2,` {
    right: `).concat(p,"px ").concat(o,`;
  }
  
  .`).concat(V2,` {
    margin-right: `).concat(p,"px ").concat(o,`;
  }
  
  .`).concat(b2," .").concat(b2,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(V2," .").concat(V2,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body {
    `).concat(J9,": ").concat(p,`px;
  }
`)},b5=function(r){var i=r.noRelative,n=r.noImportant,o=r.gapMode,l=o===void 0?"margin":o,s=l3.useMemo(function(){return B5(l)},[l]);return l3.createElement(ys,{styles:Zs(s,!i,l,n?"":"!important")})};var V5=!1;if(typeof window<"u")try{Qt=Object.defineProperty({},"passive",{get:function(){return V5=!0,!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{V5=!1}var Qt,A2=V5?{passive:!1}:!1;var Us=function(r){return r.tagName==="TEXTAREA"},Ce=function(r,i){var n=window.getComputedStyle(r);return n[i]!=="hidden"&&!(n.overflowY===n.overflowX&&!Us(r)&&n[i]==="visible")},Ns=function(r){return Ce(r,"overflowY")},Xs=function(r){return Ce(r,"overflowX")},C5=function(r,i){var n=i.ownerDocument,o=i;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var l=He(r,o);if(l){var s=Me(r,o),g=s[1],p=s[2];if(g>p)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},Os=function(r){var i=r.scrollTop,n=r.scrollHeight,o=r.clientHeight;return[i,n,o]},Ws=function(r){var i=r.scrollLeft,n=r.scrollWidth,o=r.clientWidth;return[i,n,o]},He=function(r,i){return r==="v"?Ns(i):Xs(i)},Me=function(r,i){return r==="v"?Os(i):Ws(i)},Ts=function(r,i){return r==="h"&&i==="rtl"?-1:1},Ie=function(r,i,n,o,l){var s=Ts(r,window.getComputedStyle(i).direction),g=s*o,p=n.target,b=i.contains(p),H=!1,w=g>0,M=0,y=0;do{var L=Me(r,p),Z=L[0],m=L[1],B=L[2],V=m-B-s*Z;(Z||V)&&He(r,p)&&(M+=V,y+=Z),p instanceof ShadowRoot?p=p.host:p=p.parentNode}while(!b&&p!==document.body||b&&(i.contains(p)||i===p));return(w&&(l&&Math.abs(M)<1||!l&&g>M)||!w&&(l&&Math.abs(y)<1||!l&&-g>y))&&(H=!0),H};var h3=function(r){return"changedTouches"in r?[r.changedTouches[0].clientX,r.changedTouches[0].clientY]:[0,0]},Ae=function(r){return[r.deltaX,r.deltaY]},we=function(r){return r&&"current"in r?r.current:r},Qs=function(r,i){return r[0]===i[0]&&r[1]===i[1]},ks=function(r){return`
  .block-interactivity-`.concat(r,` {pointer-events: none;}
  .allow-interactivity-`).concat(r,` {pointer-events: all;}
`)},Ys=0,rt=[];function Fe(r){var i=f1.useRef([]),n=f1.useRef([0,0]),o=f1.useRef(),l=f1.useState(Ys++)[0],s=f1.useState(I2)[0],g=f1.useRef(r);f1.useEffect(function(){g.current=r},[r]),f1.useEffect(function(){if(r.inert){document.body.classList.add("block-interactivity-".concat(l));var m=Zr([r.lockRef.current],(r.shards||[]).map(we),!0).filter(Boolean);return m.forEach(function(B){return B.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),m.forEach(function(B){return B.classList.remove("allow-interactivity-".concat(l))})}}},[r.inert,r.lockRef.current,r.shards]);var p=f1.useCallback(function(m,B){if("touches"in m&&m.touches.length===2)return!g.current.allowPinchZoom;var V=h3(m),F=n.current,R="deltaX"in m?m.deltaX:F[0]-V[0],N="deltaY"in m?m.deltaY:F[1]-V[1],O,X=m.target,q=Math.abs(R)>Math.abs(N)?"h":"v";if("touches"in m&&q==="h"&&X.type==="range")return!1;var c1=C5(q,X);if(!c1)return!0;if(c1?O=q:(O=q==="v"?"h":"v",c1=C5(q,X)),!c1)return!1;if(!o.current&&"changedTouches"in m&&(R||N)&&(o.current=O),!O)return!0;var A1=o.current||O;return Ie(A1,B,m,A1==="h"?R:N,!0)},[]),b=f1.useCallback(function(m){var B=m;if(!(!rt.length||rt[rt.length-1]!==s)){var V="deltaY"in B?Ae(B):h3(B),F=i.current.filter(function(O){return O.name===B.type&&(O.target===B.target||B.target===O.shadowParent)&&Qs(O.delta,V)})[0];if(F&&F.should){B.cancelable&&B.preventDefault();return}if(!F){var R=(g.current.shards||[]).map(we).filter(Boolean).filter(function(O){return O.contains(B.target)}),N=R.length>0?p(B,R[0]):!g.current.noIsolation;N&&B.cancelable&&B.preventDefault()}}},[]),H=f1.useCallback(function(m,B,V,F){var R={name:m,delta:B,target:V,should:F,shadowParent:Es(V)};i.current.push(R),setTimeout(function(){i.current=i.current.filter(function(N){return N!==R})},1)},[]),w=f1.useCallback(function(m){n.current=h3(m),o.current=void 0},[]),M=f1.useCallback(function(m){H(m.type,Ae(m),m.target,p(m,r.lockRef.current))},[]),y=f1.useCallback(function(m){H(m.type,h3(m),m.target,p(m,r.lockRef.current))},[]);f1.useEffect(function(){return rt.push(s),r.setCallbacks({onScrollCapture:M,onWheelCapture:M,onTouchMoveCapture:y}),document.addEventListener("wheel",b,A2),document.addEventListener("touchmove",b,A2),document.addEventListener("touchstart",w,A2),function(){rt=rt.filter(function(m){return m!==s}),document.removeEventListener("wheel",b,A2),document.removeEventListener("touchmove",b,A2),document.removeEventListener("touchstart",w,A2)}},[]);var L=r.removeScrollBar,Z=r.inert;return f1.createElement(f1.Fragment,null,Z?f1.createElement(s,{styles:ks(l)}):null,L?f1.createElement(b5,{gapMode:r.gapMode}):null)}function Es(r){for(var i=null;r!==null;)r instanceof ShadowRoot&&(i=r.host,r=r.host),r=r.parentNode;return i}var of=H2(J4,Fe);import*as v3 from"react";var Js=function(r){if(typeof document>"u")return null;var i=Array.isArray(r)?r[0]:r;return i.ownerDocument.body},et=new WeakMap,u3=new WeakMap,s3={},H5=0,Ge=function(r){return r&&(r.host||Ge(r.parentNode))},Ds=function(r,i){return i.map(function(n){if(r.contains(n))return n;var o=Ge(n);return o&&r.contains(o)?o:(console.error("aria-hidden",n,"in not contained inside",r,". Doing nothing"),null)}).filter(function(n){return!!n})},_s=function(r,i,n,o){var l=Ds(i,Array.isArray(r)?r:[r]);s3[n]||(s3[n]=new WeakMap);var s=s3[n],g=[],p=new Set,b=new Set(l),H=function(M){!M||p.has(M)||(p.add(M),H(M.parentNode))};l.forEach(H);var w=function(M){!M||b.has(M)||Array.prototype.forEach.call(M.children,function(y){if(p.has(y))w(y);else{var L=y.getAttribute(o),Z=L!==null&&L!=="false",m=(et.get(y)||0)+1,B=(s.get(y)||0)+1;et.set(y,m),s.set(y,B),g.push(y),m===1&&Z&&u3.set(y,!0),B===1&&y.setAttribute(n,"true"),Z||y.setAttribute(o,"true")}})};return w(i),p.clear(),H5++,function(){g.forEach(function(M){var y=et.get(M)-1,L=s.get(M)-1;et.set(M,y),s.set(M,L),y||(u3.has(M)||M.removeAttribute(o),u3.delete(M)),L||M.removeAttribute(n)}),H5--,H5||(et=new WeakMap,et=new WeakMap,u3=new WeakMap,s3={})}},Re=function(r,i,n){n===void 0&&(n="data-aria-hidden");var o=Array.from(Array.isArray(r)?r:[r]),l=i||Js(r);return l?(o.push.apply(o,Array.from(l.querySelectorAll("[aria-live]"))),_s(o,l,n,"aria-hidden")):function(){return null}};import*as Se from"react";var js=I2(),Ps=`
 [`+t3+`] {
   pointer-events: none !important;
 }
`,Le=function(){return Se.createElement(js,{styles:Ps})};import{useEffect as ye,useRef as Ze,useState as Ks}from"react";var Ue=function(r){return"current"in r?r.current:r};function Ne(r){var i=r.setLockProps,n=r.onEscapeKey,o=r.onClickOutside,l=r.shards,s=r.onActivation,g=r.onDeactivation,p=r.noIsolation,b=Ks(void 0),H=b[0],w=b[1],M=Ze(null),y=Ze(0);return v3.useEffect(function(){var L=function(V){V.defaultPrevented||(V.code==="Escape"||V.key==="Escape"||V.keyCode===27)&&n&&n(V)},Z=function(V){V.defaultPrevented||V.target===M.current||V instanceof MouseEvent&&V.button!==0||l&&l.map(Ue).some(function(F){return F&&F.contains(V.target)||F===V.target})||o&&o(V)},m=function(V){Z(V),y.current=V.touches.length},B=function(V){y.current=V.touches.length};if(H)return document.addEventListener("keydown",L),document.addEventListener("mousedown",Z),document.addEventListener("touchstart",m),document.addEventListener("touchend",B),function(){document.removeEventListener("keydown",L),document.removeEventListener("mousedown",Z),document.removeEventListener("touchstart",m),document.removeEventListener("touchend",B)}},[H,o,n]),ye(function(){if(H)return s&&s(H),function(){g&&g()}},[!!H]),ye(function(){var L=function(){return null},Z=!1,m=function(V){p||(L=Re(yr([V],(l||[]).map(Ue)),document.body,t3)),w(function(){return V})},B=function(){L(),Z||w(null)};return i({onMouseDown:function(V){M.current=V.target},onTouchStart:function(V){M.current=V.target},onActivation:m,onDeactivation:B}),function(){Z=!0,i(!1)}},[]),v3.createElement(Le,null)}var Xe=H2(q4,Ne);var $s=function(r){return kt.createElement(Xe,G1({},r))},M5=kt.forwardRef(function(r,i){return kt.createElement(jr,G1({},r,{ref:i,sideCar:$s}))});import{Fragment as Tf,jsx as Of,jsxs as Wf}from"react/jsx-runtime";var Oe=k(E());import{jsx as tv}from"react/jsx-runtime";var b1=({size:r="m"})=>{let i=(0,Oe.default)("vuiSpacer",{[`vuiSpacer--${r}`]:r});return tv("div",{className:i})};import{Fragment as Pf,jsx as jf,jsxs as Kf}from"react/jsx-runtime";var av=k(E());import{jsx as tz}from"react/jsx-runtime";import{jsx as nz,jsxs as oz}from"react/jsx-runtime";var _e=k(E());import{forwardRef as zv}from"react";var w5=k(E());import{useEffect as pv,useRef as Je,useState as De}from"react";var Te=k(E());import{forwardRef as nv}from"react";import{Link as ov}from"react-router-dom";var w2=r=>r?{rel:"noopener",referrerpolicy:"no-referrer-when-downgrade"}:{rel:"noopener"};import{cloneElement as rv}from"react";var ev={xs:"xs",s:"xs",m:"s"},iv={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},l2=(r,i,n,o=iv)=>r?rv(r,{size:i?ev[i]:"s",color:r.props.color==="inherit"?o[n]:r.props.color}):null;import{jsx as I5}from"react/jsx-runtime";var e0=nv(({className:r,icon:i,color:n="primary",size:o="m",onClick:l,href:s,target:g,track:p,tabIndex:b,...H},w)=>{let M={className:(0,Te.default)("vuiIconButton",r,`vuiIconButton--${n}`,`vuiIconButton--${o}`),onClick:l,tabIndex:b,...H},y=l2(i,o,n);return s?I5(ov,{to:s,target:g,...M,...w2(p),children:I5("button",{ref:w,children:y})}):I5("button",{...M,ref:w,children:y})});var Qe=k(E());import{Link as cv,useLocation as lv}from"react-router-dom";import{jsx as it,jsxs as hv}from"react/jsx-runtime";var Et=({path:r,name:i,iconBefore:n,iconAfter:o,isActive:l,className:s,...g})=>{let p=lv(),b=(0,Qe.default)("vuiAppSideNavLink",{"vuiAppSideNavLink--active":l!=null?l:r===p.pathname},s),H=n||o?hv(n1,{alignItems:"center",spacing:"xxs",children:[n&&it(a1,{grow:!1,shrink:!1,children:it(v1,{size:"s",children:n})}),it(a1,{grow:!1,shrink:!1,children:i}),o&&it(a1,{grow:!1,shrink:!1,children:it(v1,{size:"s",children:o})})]}):i;return it(cv,{className:b,to:r!=null?r:"/",...g,children:H})};import{jsx as Jt,jsxs as sv}from"react/jsx-runtime";var ke=r=>Jt("div",{className:"vuiAppSideNavSections",children:r.map(({name:i,pages:n})=>{let o=n.map(({name:l,path:s})=>Jt(Et,{path:s,name:l},s!=null?s:l));return Jt(uv,{name:i,children:o},i)})}),uv=({name:r,children:i})=>sv("div",{className:"vuiAppSideNavSection",children:[Jt("div",{className:"vuiAppSideNavSection__title",children:r}),Jt("div",{className:"vuiAppSideNavSection__items",children:i})]},r);import{useState as vv}from"react";import{jsx as S0,jsxs as dv}from"react/jsx-runtime";var Ye=r=>S0("div",{className:"vuiAppSideNavTree",children:Ee(r)}),Ee=r=>r.map(({name:i,pages:n,path:o,iconBefore:l,iconAfter:s,isActive:g,...p})=>{if(o){if(n){let b=Ee(n);return S0(gv,{path:o,name:i,iconBefore:l,iconAfter:s,isActive:g,...p,children:b},o!=null?o:i)}return S0(Et,{path:o,name:i,iconBefore:l,iconAfter:s,isActive:g,...p},o!=null?o:i)}return S0("div",{className:"vuiAppSideNavTreeSection__subTitle",...p,children:i},i)}),gv=({name:r,path:i,children:n,iconBefore:o,iconAfter:l,isActive:s,...g})=>{let[p,b]=vv(!0);return dv("div",{className:"vuiAppSideNavTreeSection",children:[S0(Et,{path:i!=null?i:"/",name:r,iconBefore:o,iconAfter:l,isActive:s,...g}),S0(e0,{size:"s",className:"vuiAppSideNavTreeToggleButton",onClick:()=>b(!p),color:"neutral",icon:S0(v1,{children:p?S0(Vr,{}):S0(zr,{})})}),p&&S0("div",{className:"vuiAppSideNavTreeChildren",children:n})]})};import{Fragment as fv,jsx as L0,jsxs as A5}from"react/jsx-runtime";var xv=r=>mv(r)?Ye(r):ke(r),mv=r=>r.findIndex(i=>i.path)!==-1,F5=({items:r=[],content:i})=>{let[n,o]=De(!1),[l,s]=De(!1),g=Je(null),p=Je(null);pv(()=>{var M,y;n&&(l?(M=p.current)==null||M.focus():(y=g.current)==null||y.focus())},[n,l]);let b=(0,w5.default)("vuiAppSideNav",{"vuiAppSideNav-isCollapsed":l}),H=(0,w5.default)("vuiAppSideNavContent",{"vuiAppSideNavContent-isHidden":l}),w=xv(r);return L0("div",{className:b,children:A5("div",{className:"vuiAppSideNav__inner",children:[l?L0(e0,{ref:p,"aria-label":"Expand nav",onClick:()=>s(!1),className:"vuiAppSideNavExpandButton",color:"neutral",icon:L0(v1,{children:L0(br,{})})}):L0(fv,{children:L0("button",{ref:g,className:"vuiAppSideNavCollapseButton",onClick:()=>{o(!0),s(!0)},children:A5(n1,{alignItems:"center",spacing:"xxs",children:[L0(a1,{shrink:!1,grow:!1,children:L0(v1,{children:L0(Br,{})})}),L0(a1,{shrink:!1,grow:!1,children:"Collapse nav"})]})})}),A5("div",{className:H,inert:l?"":null,children:[w,i]})]})})};import{jsx as G5,jsxs as bv}from"react/jsx-runtime";var Bv=zv(({children:r,navItems:i,navContent:n,full:o},l)=>{let s=(0,_e.default)("vuiAppLayout",{"vuiAppLayout--full":o});return bv("div",{className:s,children:[(i||n)&&G5("div",{className:"vuiAppLayout__sideNav",children:G5(F5,{items:i,content:n})}),G5("div",{className:"vuiAppLayout__content",ref:l,children:r})]})});var Vv=k(E());import{Link as Kz}from"react-router-dom";import{jsx as tB}from"react/jsx-runtime";var Ke=k(E());import{forwardRef as Mv}from"react";var Pe=k(E());import{forwardRef as Cv}from"react";import{Link as Hv}from"react-router-dom";import{jsx as je,jsxs as R5}from"react/jsx-runtime";var nt=Cv(({children:r,icon:i,iconSide:n="left",className:o,size:l,fullWidth:s,onClick:g,tabIndex:p,isInert:b,isDisabled:H,href:w,target:M,track:y,htmlFor:L,...Z},m)=>{let B=(0,Pe.default)("vuiBaseButton",o,`vuiBaseButton--${l}`,{"vuiBaseButton-isInert":b,"vuiBaseButton-isDisabled":H,"vuiBaseButton--fullWidth":s,[`vuiBaseButton--${n}`]:!!i&&!!r}),V=i?je("span",{className:"vuiBaseButtonIconContainer",children:i}):null;if(L)return R5("label",{htmlFor:L,className:B,tabIndex:p,...Z,children:[V,r]});if(w)return je(Hv,{className:"vuiBaseButtonLinkWrapper",to:w,onClick:g,target:M,tabIndex:p,...Z,...w2(y),children:R5("button",{className:B,tabIndex:-1,ref:m,children:[V,r]})});let F={onClick:g,tabIndex:p,...Z};return R5("button",{className:B,...F,ref:m,children:[V,r]})});import{jsx as Av}from"react/jsx-runtime";var Iv={accent:"empty",primary:"empty",success:"empty",danger:"empty",warning:"empty",neutral:"neutral",subdued:"subdued"},$e=Mv(({children:r,icon:i,color:n,size:o="m",className:l,isSelected:s,isDisabled:g,...p},b)=>{let H=(0,Ke.default)(l,"vuiButtonPrimary",`vuiButtonPrimary--${n}`,{"vuiButtonPrimary-isSelected":s}),w=l2(i,o,n,Iv);return Av(nt,{ref:b,className:H,icon:w,size:o,isDisabled:g,...p,children:r})});var qe=k(E());import{forwardRef as wv}from"react";import{jsx as Gv}from"react/jsx-runtime";var Fv={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},y0=wv(({children:r,icon:i,color:n,size:o="m",className:l,isSelected:s,isDisabled:g,solid:p,...b},H)=>{let w=(0,qe.default)(l,"vuiButtonSecondary",`vuiButtonSecondary--${n}`,{"vuiButtonSecondary-isSelected":s,"vuiButtonSecondary--solid":p}),M=l2(i,o,n,Fv);return Gv(nt,{ref:H,className:w,icon:M,size:o,isDisabled:g,...b,children:r})});var t8=k(E());import{forwardRef as Rv}from"react";import{jsx as Lv}from"react/jsx-runtime";var Sv={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},Dt=Rv(({children:r,icon:i,color:n,size:o="m",className:l,isSelected:s,isDisabled:g,noPadding:p,...b},H)=>{let w=(0,t8.default)(l,"vuiButtonTertiary",`vuiButtonTertiary--${n}`,{"vuiButtonTertiary-isSelected":s,"vuiButtonTertiary-noPadding":p}),M=l2(i,o,n,Sv);return Lv(nt,{ref:H,className:w,icon:M,size:o,isDisabled:g,...b,children:r})});var Nv=k(E());var a8=k(E());import{cloneElement as yv}from"react";var _t=({children:r,className:i,size:n,align:o,...l})=>yv(r,{className:(0,a8.default)("vuiTitle",`vuiTitle--${n}`,{[`vuiTitle--${o}`]:o},i,r.props.className),...l});var r8=k(E());import{jsx as Zv}from"react/jsx-runtime";var Q1=({children:r,color:i,className:n})=>{let o=(0,r8.default)(n,"vuiTextColor",`vuiTextColor--${i}`);return Zv("span",{className:o,children:r})};var e8=k(E());import{jsx as Uv}from"react/jsx-runtime";var H1=({children:r,className:i,id:n,truncate:o,size:l="s",align:s,...g})=>{let p=(0,e8.default)("vuiText",`vuiText--${l}`,{[`vuiText--${s}`]:s,"vuiText--truncate":o},i);return Uv("div",{className:p,id:n,...g,children:r})};import{Fragment as EB,jsx as kB,jsxs as YB}from"react/jsx-runtime";var Xv=k(E());import{jsx as _B,jsxs as jB}from"react/jsx-runtime";import{useEffect as qV,useRef as tC,useState as aC}from"react";var og=k(E());import{jsx as rb,jsxs as eb}from"react/jsx-runtime";var Ov=k(E());import{jsx as ob}from"react/jsx-runtime";var n8=k(E());import{forwardRef as Wv,useEffect as i8,useState as Tv}from"react";import{jsx as Qv}from"react/jsx-runtime";var o8=Wv(({className:r,id:i,max:n,min:o,step:l,value:s,size:g="m",onChange:p,fullWidth:b,isInvalid:H,autoFocus:w,...M},y)=>{let[L,Z]=Tv(s);i8(()=>{s!==0&&Z(s)},[s]),i8(()=>{p(L!=null?L:0)},[L]);let m=(0,n8.default)("vuiInput",`vuiInput--${g}`,{"vuiInput-isInvalid":H,"vuiInput--fullWidth":b},r),B=F=>{if(F.target.value==="")return Z(void 0);let R=Number(F.target.value);if(isNaN(R))return Z(void 0);Z(Number(F.target.value))},V=()=>{o!==void 0&&s!==void 0&&s<o&&p(o),n!==void 0&&s!==void 0&&s>n&&p(n)};return Qv("input",{autoFocus:w,ref:y,type:"number",className:m,id:i,max:n,min:o,step:l,value:L!=null?L:"",onChange:B,onBlur:V,...M})});import{jsx as pb,jsxs as xb}from"react/jsx-runtime";var c8=k(E());import{forwardRef as kv}from"react";import{jsx as g3,jsxs as Jv}from"react/jsx-runtime";import{createElement as Ev}from"react";var Yv={m:"m",l:"l"},l8=kv(({className:r,id:i,name:n,options:o,value:l,size:s="m",onChange:g,isInvalid:p,...b},H)=>{let w=(0,c8.default)("vuiSelect",`vuiSelect--${s}`,{"vuiSelect-isInvalid":p},r),M=o.map((y,L)=>{let{text:Z,...m}=y;return Ev("option",{...m,key:L},Z)});return Jv("div",{className:w,children:[g3("select",{ref:H,id:i,name:n,value:l,onChange:g,...b,children:M}),g3("div",{className:"vuiSelect__caret",children:g3(v1,{color:"subdued",size:Yv[s],children:g3(fr,{})})})]})});import{Fragment as Sb,jsx as Rb,jsxs as Lb}from"react/jsx-runtime";import{jsx as Ob}from"react/jsx-runtime";var h8=k(E());import{forwardRef as Dv}from"react";import{jsx as _v}from"react/jsx-runtime";var jt=Dv(({className:r,id:i,placeholder:n,value:o,size:l="m",onChange:s,fullWidth:g,onSubmit:p,isInvalid:b,name:H,autoComplete:w,autoFocus:M,...y},L)=>{let Z=(0,h8.default)("vuiInput","vuiInput--text",`vuiInput--${l}`,{"vuiInput-isInvalid":b,"vuiInput--fullWidth":g},r);return _v("input",{autoComplete:w?"on":"off",autoFocus:M,ref:L,type:"text",className:Z,id:i,name:H,placeholder:n,value:o,onChange:s,onKeyDown:B=>{B.key==="Enter"&&(B.preventDefault(),B.stopPropagation(),p==null||p())},...y})});var u8=k(E());import{forwardRef as jv}from"react";import{jsx as Pv}from"react/jsx-runtime";var s8=jv(({className:r,id:i,placeholder:n,value:o,onChange:l,fullWidth:s,name:g,...p},b)=>{let H=(0,u8.default)("vuiTextArea",{"vuiTextArea--fullWidth":s},r);return Pv("textarea",{ref:b,className:H,id:i,name:g,placeholder:n,value:o,onChange:l,...p})});import{jsx as uV,jsxs as sV}from"react/jsx-runtime";var d8=k(E());import{forwardRef as tg}from"react";var S5=k(E());import{Link as qv}from"react-router-dom";import{jsx as L5}from"react/jsx-runtime";var d3=({...r})=>L5(ot,{...r,track:!0}),ot=({children:r,href:i,target:n,onClick:o,className:l,track:s,...g})=>{if(!i)return L5("button",{className:(0,S5.default)("vuiLink","vuiLink--button",l),onClick:o,...g,children:r});let p={...g,...w2(s)};return n==="_blank"&&(p.target=n),L5(qv,{className:(0,S5.default)("vuiLink",l),to:i,onClick:o,...p,children:r})};import{jsx as ct,jsxs as y5}from"react/jsx-runtime";var ag=(r,i)=>`${r}#:~:text=${i}`,rg=tg(({result:r,className:i,...n},o)=>{let{title:l,url:s,date:g,snippet:{pre:p,post:b,text:H}}=r,w=(0,d8.default)("vuiChatSearchResult","fs-mask",i);return y5("div",{className:w,ref:o,...n,children:[(l||s)&&ct(H1,{children:s?ct(ot,{href:ag(s,H),target:"_blank",children:ct("p",{children:l!=null?l:s})}):ct("p",{children:l})}),ct(H1,{size:"s",children:y5("p",{children:[g&&y5(Q1,{color:"subdued",children:[g," \u2014 "]}),p," ",ct("strong",{children:H})," ",b]})})]})});import{Fragment as GV,jsx as wV,jsxs as FV}from"react/jsx-runtime";var ng=k(E());var p8=k(E());import{jsx as F2,jsxs as p3}from"react/jsx-runtime";var ig={xs:"vuiSpinner--xs",s:"vuiSpinner--s",m:"vuiSpinner--m",l:"vuiSpinner--l",xl:"vuiSpinner--xl",xxl:"vuiSpinner--xxl",xxxl:"vuiSpinner--xxxl"},Pt=({size:r="m"})=>{let i=(0,p8.default)("vuiSpinner",ig[r]);return F2("div",{className:i,children:p3("svg",{className:"vuiSpinner__animation",version:"1.0",width:"100px",height:"100px",viewBox:"0 0 128 128",xmlSpace:"preserve",children:[p3("g",{children:[F2("path",{fill:"#d7c3fc",d:"M99.359,10.919a60.763,60.763,0,1,0,0,106.162A63.751,63.751,0,1,1,99.359,10.919Z"}),F2("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"960ms",repeatCount:"indefinite"})]}),p3("g",{children:[F2("path",{fill:"#ab81fa",d:"M28.641,117.081a60.763,60.763,0,1,0,0-106.162A63.751,63.751,0,1,1,28.641,117.081Z"}),F2("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"1440ms",repeatCount:"indefinite"})]}),p3("g",{children:[F2("path",{fill:"#7027f6",d:"M117.081,99.313a60.763,60.763,0,1,0-106.162,0A63.751,63.751,0,1,1,117.081,99.313Z"}),F2("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"2880ms",repeatCount:"indefinite"})]})]})})};import{Fragment as JV,jsx as YV,jsxs as EV}from"react/jsx-runtime";import{Fragment as zC,jsx as mC,jsxs as fC}from"react/jsx-runtime";var hg=k(x8());import{useEffect as HC}from"react";var lg=`/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	/* This background color was intended by the author of this theme. */
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lg));Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(r){r.languages.typescript=r.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),r.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete r.languages.typescript.parameter,delete r.languages.typescript["literal-property"];var i=r.languages.extend("typescript",{});delete i["class-name"],r.languages.typescript["class-name"].inside=i,r.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i}}}}),r.languages.ts=r.languages.typescript})(Prism);(function(r){var i="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+i),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+i),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};r.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+i),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+i),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=r.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=o.variable[1].inside,g=0;g<l.length;g++)s[l[g]]=r.languages.bash[l[g]];r.languages.sh=r.languages.bash,r.languages.shell=r.languages.bash})(Prism);(function(r){var i=r.util.clone(r.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(b,H){return b=b.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return l}),RegExp(b,H)}l=s(l).source,r.languages.jsx=r.languages.extend("markup",i),r.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),r.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,r.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,r.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,r.languages.jsx.tag.inside.comment=i.comment,r.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:r.languages.jsx}},r.languages.jsx.tag),r.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:r.languages.jsx}}},r.languages.jsx.tag);var g=function(b){return b?typeof b=="string"?b:typeof b.content=="string"?b.content:b.content.map(g).join(""):""},p=function(b){for(var H=[],w=0;w<b.length;w++){var M=b[w],y=!1;if(typeof M!="string"&&(M.type==="tag"&&M.content[0]&&M.content[0].type==="tag"?M.content[0].content[0].content==="</"?H.length>0&&H[H.length-1].tagName===g(M.content[0].content[1])&&H.pop():M.content[M.content.length-1].content==="/>"||H.push({tagName:g(M.content[0].content[1]),openedBraces:0}):H.length>0&&M.type==="punctuation"&&M.content==="{"?H[H.length-1].openedBraces++:H.length>0&&H[H.length-1].openedBraces>0&&M.type==="punctuation"&&M.content==="}"?H[H.length-1].openedBraces--:y=!0),(y||typeof M=="string")&&H.length>0&&H[H.length-1].openedBraces===0){var L=g(M);w<b.length-1&&(typeof b[w+1]=="string"||b[w+1].type==="plain-text")&&(L+=g(b[w+1]),b.splice(w+1,1)),w>0&&(typeof b[w-1]=="string"||b[w-1].type==="plain-text")&&(L=g(b[w-1])+L,b.splice(w-1,1),w--),b[w]=new r.Token("plain-text",L,null,L)}M.content&&typeof M.content!="string"&&p(M.content)}};r.hooks.add("after-tokenize",function(b){b.language!=="jsx"&&b.language!=="tsx"||p(b.tokens)})})(Prism);(function(r){var i=r.util.clone(r.languages.typescript);r.languages.tsx=r.languages.extend("jsx",i),delete r.languages.tsx.parameter,delete r.languages.tsx["literal-property"];var n=r.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);var ug=k(E());import{jsx as ZC,jsxs as UC}from"react/jsx-runtime";import{useEffect as dH,useState as pH}from"react";var gg=k(E());import{cloneElement as OC}from"react";import{Link as TC}from"react-router-dom";var sg=k(E());import{jsx as JC,jsxs as DC}from"react/jsx-runtime";import{jsx as KC}from"react/jsx-runtime";import{jsx as uH,jsxs as sH}from"react/jsx-runtime";import{jsx as BH}from"react/jsx-runtime";var mg=k(E());import{useEffect as IH,useRef as AH}from"react";import{jsx as pg,jsxs as xg}from"react/jsx-runtime";var Kt=({onClick:r,children:i})=>xg("div",{className:"vuiScreenBlock",children:[i,pg("div",{className:"vuiScreenBlock__mask",onClick:r})]});import{jsx as ZH,jsxs as UH}from"react/jsx-runtime";import{cloneElement as OH}from"react";import{Fragment as DH,jsx as JH,jsxs as _H}from"react/jsx-runtime";var fg=k(E());import{jsx as $H,jsxs as qH}from"react/jsx-runtime";var zg=k(E());import{Fragment as nM}from"react";import{Fragment as hM,jsx as cM,jsxs as lM}from"react/jsx-runtime";import{jsx as vM}from"react/jsx-runtime";var Bg=k(E());import{Link as fM}from"react-router-dom";import{Fragment as bM,jsx as BM,jsxs as VM}from"react/jsx-runtime";var bg=k(E());import{useEffect as IM,useRef as AM}from"react";import{jsx as ZM,jsxs as UM}from"react/jsx-runtime";var Cg=k(E());var Vg=k(E());import{Fragment as jM,jsx as DM,jsxs as _M}from"react/jsx-runtime";import{useEffect as nI,useRef as oI}from"react";import{Fragment as sI,jsx as hI,jsxs as uI}from"react/jsx-runtime";var Hg=k(E());import{jsx as mI,jsxs as fI}from"react/jsx-runtime";var Mg=k(E());import{jsx as bI}from"react/jsx-runtime";var Ig=k(E());import{jsx as HI,jsxs as MI}from"react/jsx-runtime";var Z5=k(E());import{forwardRef as Ag}from"react";import{Fragment as m8,jsx as D0,jsxs as $t}from"react/jsx-runtime";var wg=(r,i)=>`${r}#:~:text=${i}`,Fg=Ag(({result:r,position:i,isSelected:n,subTitle:o,children:l,className:s,snippetProps:g,...p},b)=>{let{title:H,url:w,date:M,snippet:{pre:y,post:L,text:Z}}=r,m=(0,Z5.default)("vuiSearchResult","fs-mask",s),B=(0,Z5.default)("vuiSearchResultPosition",{"vuiSearchResultPosition--selected":n}),V=H&&H.trim().length>0,F=w&&w.trim().length>0;return $t("div",{className:m,ref:b,...p,children:[D0("div",{"data-testid":`searchResultCitation-${i}`,className:B,children:i}),(V||F)&&D0(_t,{size:"s",children:F?D0(ot,{href:wg(w,Z),target:"_blank",children:D0("h3",{children:V?H:w})}):D0("h3",{children:H})}),o&&$t(m8,{children:[H&&D0(b1,{size:"xs"}),o]}),D0(H1,{...g,size:"s",children:$t("p",{children:[M&&$t(Q1,{color:"subdued",children:[M," \u2014 "]}),y," ",D0("strong",{children:Z})," ",L]})}),l&&$t(m8,{children:[D0(b1,{size:"s"}),l]})]})});import{useEffect as UI,useState as NI}from"react";import{jsx as EI,jsxs as JI}from"react/jsx-runtime";import{jsx as $I,jsxs as qI}from"react/jsx-runtime";import{Fragment as vA,jsx as uA,jsxs as sA}from"react/jsx-runtime";var Lg=k(E());var Sg=k(E());import{jsx as fA}from"react/jsx-runtime";import{jsx as AA}from"react/jsx-runtime";var Zg=k(E()),Ug=k(f8());import{useState as Xw}from"react";import{useState as GA}from"react";import{jsx as UA}from"react/jsx-runtime";import{jsx as OA}from"react/jsx-runtime";import{jsx as EA,jsxs as JA}from"react/jsx-runtime";var yg=k(E());import{jsx as rw,jsxs as ew}from"react/jsx-runtime";import{jsx as uw,jsxs as sw}from"react/jsx-runtime";import{useState as dw}from"react";import{jsx as Bw,jsxs as bw}from"react/jsx-runtime";import{jsx as Iw,jsxs as Aw}from"react/jsx-runtime";import{Fragment as cF,jsx as nF,jsxs as oF}from"react/jsx-runtime";var Ng=k(E());import{Link as uF}from"react-router-dom";import{jsx as gF}from"react/jsx-runtime";import{useLocation as BF}from"react-router-dom";var Xg=k(E());import{jsx as xF,jsxs as mF}from"react/jsx-runtime";import{Fragment as IF,jsx as MF,jsxs as AF}from"react/jsx-runtime";import Tg,{useCallback as Qg,useState as kg}from"react";var Yg="https://api.vectara.io/v1/query",b8=(r,i,n,o=Yg)=>{let[l,s]=kg(!1),g=Tg.useMemo(()=>{let H=new Headers;return H.append("customer-id",r),H.append("x-api-key",n),H.append("content-type","application/json"),H},[r,n]),p=Qg(H=>JSON.stringify({query:[{query:H,start:0,numResults:20,corpusKey:[{corpusId:i}]}]}),[i]);return{fetchSearchResults:async H=>{var Z,m;s(!0);let w=p(H),y=await(await fetch(o,{headers:g,body:w,method:"POST"})).json();s(!1);let L=(m=Dg((Z=y.responseSet)==null?void 0:Z[0]))!=null?m:[];return jg(L)},isLoading:l}},Eg=r=>{let i={};return r.forEach(n=>{i[n.name]=n.value}),i},Jg=r=>{let i=Eg(r);return{source:i.source,url:i.url,title:i.title||"Untitled",metadata:i}},Dg=r=>{if(!r)return;let i=[],{response:n,document:o}=r;return n.forEach(l=>{let{documentIndex:s,text:g}=l,{pre:p,post:b,text:H}=_g(g),w=o[Number(s)],{id:M,metadata:y}=w,{source:L,url:Z,title:m,metadata:B}=Jg(y);i.push({id:M,snippet:{pre:p,text:H,post:b},source:L,url:Z,title:m,metadata:B})}),i},z8="%START_SNIPPET%",B8="%END_SNIPPET%",_g=r=>{let[i,n]=r.indexOf(z8)!==-1?r.split(z8):["",r],[o,l]=n.indexOf(B8)!==-1?n.split(B8):[n,""];return{pre:i,post:l,text:o}},jg=r=>{let i={},n=[];return r.forEach(o=>{i[o.url]||(n.push(o),i[o.url]=!0)}),n};import{jsx as V8,jsxs as Pg}from"react/jsx-runtime";var C8=({searchResult:r,isSelected:i=!1,shouldOpenInNewWindow:n=!1,styles:o={}})=>{let{title:l,url:s,snippet:{text:g}}=r;return Pg("a",{className:`searchResult${i?" isSelected":""}`,href:s,target:n?"_blank":"_self",style:o,children:[V8("p",{className:"searchResultTitle",style:{fontSize:o.fontSize},children:l}),V8("p",{className:"searchResultSnippet",style:{fontSize:o.fontSize},children:g})]})};import{forwardRef as $g,useEffect as qg,useRef as td}from"react";import{jsx as ht,jsxs as Kg}from"react/jsx-runtime";var H8=({value:r,onChange:i,placeholder:n,autoFocus:o,onSubmit:l,isLoading:s,styles:g={},...p})=>ht("form",{onSubmit:l,children:Kg("div",{className:"searchInput",children:[ht("input",{className:"searchInput__input",type:"text",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:o,placeholder:n,value:r,onChange:i,style:g,...p}),s?ht("div",{className:"searchInput__submitButton",children:ht(Pt,{size:"xs"})}):ht("button",{className:"searchInput__submitButton",onClick:l,children:ht(k4,{size:"20px"})})]})});import{jsx as L1,jsxs as f3}from"react/jsx-runtime";var M8=$g(({isLoading:r,searchValue:i,onChange:n,onKeyDown:o,onClose:l,isOpen:s,resultsList:g,styles:p={}},b)=>{let H=td(null);qg(()=>{var M;s?H.current=document.activeElement:((M=H.current)==null||M.focus(),H.current=null)},[s]);let w=()=>{window.setTimeout(()=>{l()},0)};return L1(D2,{children:L1("div",{className:"styleWrapper",children:s&&L1(Kt,{children:L1(M5,{onEscapeKey:w,onClickOutside:w,returnFocus:!1,autoFocus:s,children:L1("div",{className:"searchModalContainer",children:f3("div",{ref:b,className:"searchModal",children:[L1(H8,{isLoading:r,value:i,onChange:n,onKeyDown:o,placeholder:"Search docs",styles:p==null?void 0:p.input}),g&&L1("div",{className:"searchModalResults",children:g}),f3("div",{className:"searchModalFooter",children:[L1(b1,{size:"xs"}),f3(n1,{alignItems:"center",justifyContent:"spaceBetween",children:[L1(a1,{children:L1(H1,{size:"s",align:"right",children:L1("p",{children:f3("strong",{children:[L1(Q1,{color:"subdued",children:"Built with"})," ",L1(d3,{href:"https://vectara.com",target:"_blank",children:"Vectara"})]})})})}),L1(a1,{children:L1(H1,{children:L1("p",{children:L1(Q1,{color:"subdued",children:"Ctrl+K"})})})})]}),L1(b1,{size:"xs"})]})]})})})})})})});import{useCallback as U5}from"react";var I8=(r,i=10)=>{let n=U5(()=>`vectara-search:${r}:history`,[r]),o=U5(()=>{let s=window.localStorage.getItem(n());return JSON.parse(s!=null?s:"[]")},[n]),l=U5(s=>{let g=o(),p=[s,...g].slice(0,i);window.localStorage.setItem(n(),JSON.stringify(p))},[n]);return{getPreviousSearches:o,addPreviousSearch:l}};var ad=`.vuiAccordionHeader {
  font-size: 14px;
  border-bottom: 1px solid #cbcdde;
  width: 100%;
  padding: 8px 0;
}
.vuiAccordionHeader:hover {
  text-decoration: underline;
  background-color: #f3f7fb;
}

.vuiAccordionHeader__title {
  text-align: left;
}

.vuiAppContent {
  width: 100%;
  max-width: 1200px;
}

.vuiAppContent--fullWidth {
  max-width: 100%;
}

.vuiAppContent--paddingNone {
  padding: 0;
}

.vuiAppContent--paddingXs {
  padding: 8px 10px;
}

.vuiAppContent--paddingS {
  padding: 12px 15px;
}

.vuiAppContent--paddingM {
  padding: 16px 20px;
}

.vuiAppContent--paddingL {
  padding: 24px 30px;
}

.vuiAppContent--paddingXl {
  padding: 32px 40px;
}

.vuiAppHeader {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 46px;
  background-color: #f3f7fb;
  padding: 8px 16px;
  z-index: 8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.vuiAppHeader__inner {
  flex-grow: 1;
}

.vuiAppLayout {
  display: flex;
  flex-direction: row;
  padding-top: 46px;
  height: 100vh;
}

.vuiAppLayout--full {
  padding-top: 0;
}

.vuiAppLayout__sideNav {
  border-right: 1px solid #cbcdde;
  flex-shrink: 0;
  overflow-y: auto;
}

.vuiAppLayout__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.vuiAppSideNav {
  width: 240px;
  overflow-x: hidden;
  transition: all 0.2s;
  line-height: 1;
}

.vuiAppSideNav__inner {
  width: 240px;
  padding: 28px 32px 32px 33px;
  margin-bottom: 160px;
  transition: all 0.2s;
}

.vuiAppSideNavContent {
  opacity: 1;
  transition: all 0.2s;
}

.vuiAppSideNavContent-isHidden {
  pointer-events: none;
  opacity: 0;
}

.vuiAppSideNav-isCollapsed {
  width: 60px;
  height: 100%;
  overflow-y: hidden;
}
.vuiAppSideNav-isCollapsed .vuiAppSideNav__inner {
  padding-left: 16px;
}

.vuiAppSideNavCollapseButton {
  display: block;
  color: #69707d;
  font-size: 14px;
  text-decoration: none;
  padding: 0 16px;
  margin-left: -40px;
  margin-bottom: 16px;
}
.vuiAppSideNavCollapseButton:hover {
  color: rgb(38, 76, 214);
  text-decoration: underline;
}

.vuiAppSideNavExpandButton {
  margin-top: -4px;
  margin-bottom: 6px;
}

.vuiAppSideNavLink {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #2c313a;
  font-size: 14px;
  padding: 0 16px;
  margin-left: -16px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-decoration: none;
}
.vuiAppSideNavLink * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vuiAppSideNavLink:hover {
  color: rgb(38, 76, 214);
  text-decoration: underline;
}

.vuiAppSideNavLink--active {
  background-color: rgb(217, 226, 255);
  border-radius: 16px;
}

.vuiAppSideNavSections {
  margin-top: 24px;
}

.vuiAppSideNavContent-isHidden .vuiAppSideNavSections {
  margin-top: 8px;
}

.vuiAppSideNavSection + .vuiAppSideNavSection {
  margin-top: 24px;
}

.vuiAppSideNavSection__title {
  color: #2c313a;
  font-weight: 600;
  font-size: 14px;
}

.vuiAppSideNavSection__items {
  margin-top: 12px;
}
.vuiAppSideNavSection__items > .vuiAppSideNavLink:first-child {
  margin-top: -6px;
}
.vuiAppSideNavSection__items > .vuiAppSideNavLink:last-child {
  margin-bottom: -6px;
}

.vuiAppSideNavTree {
  margin-top: -4px;
}

.vuiAppSideNavTreeSection {
  position: relative;
}

.vuiAppSideNavTreeToggleButton {
  position: absolute;
  top: 0;
  right: -30px;
}

.vuiAppSideNavTreeChildren {
  margin-left: 20px;
}

.vuiAppSideNavTreeSection__subTitle {
  display: block;
  color: #2c313a;
  font-size: 14px;
  padding: 0 16px;
  margin-left: -16px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #69707d;
}

.vuiAccountMenu {
  min-width: 260px;
}

.vuiAccounrMenuHeader {
  padding: 12px;
  border-bottom: 1px solid #e3e4f3;
  background-color: #f3f7fb;
}

.vuiAccountMenuHeaderItem__title {
  font-size: 12px;
  font-weight: 600;
  color: #2c313a;
}

.vuiAccountMenuHeaderItem__value {
  font-size: 14px;
  color: #2c313a;
  margin-top: 4px;
}

.vuiBadge {
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 12px;
  font-family: inherit;
  white-space: nowrap;
  text-decoration: none;
}

.vuiBadge--clickable {
  cursor: pointer;
}

.vuiBadge--accent {
  color: #551edf !important;
  background-color: rgba(85, 30, 223, 0.1);
  border: 1px solid rgba(85, 30, 223, 0.1);
  transition: all 0.2s;
}
.vuiBadge--accent.vuiBadge--clickable:hover {
  border-color: #551edf;
  text-decoration: none;
}

.vuiBadge--primary {
  color: rgb(38, 76, 214) !important;
  background-color: rgba(38, 76, 214, 0.1);
  border: 1px solid rgba(38, 76, 214, 0.1);
  transition: all 0.2s;
}
.vuiBadge--primary.vuiBadge--clickable:hover {
  border-color: rgb(38, 76, 214);
  text-decoration: none;
}

.vuiBadge--success {
  color: #04821f !important;
  background-color: rgba(4, 130, 31, 0.1);
  border: 1px solid rgba(4, 130, 31, 0.1);
  transition: all 0.2s;
}
.vuiBadge--success.vuiBadge--clickable:hover {
  border-color: #04821f;
  text-decoration: none;
}

.vuiBadge--warning {
  color: #965a15 !important;
  background-color: rgba(150, 90, 21, 0.1);
  border: 1px solid rgba(150, 90, 21, 0.1);
  transition: all 0.2s;
}
.vuiBadge--warning.vuiBadge--clickable:hover {
  border-color: #965a15;
  text-decoration: none;
}

.vuiBadge--danger {
  color: #c41535 !important;
  background-color: rgba(196, 21, 53, 0.1);
  border: 1px solid rgba(196, 21, 53, 0.1);
  transition: all 0.2s;
}
.vuiBadge--danger.vuiBadge--clickable:hover {
  border-color: #c41535;
  text-decoration: none;
}

.vuiBadge--neutral {
  color: #2c313a !important;
  background-color: #f3f7fb;
  border: 1px solid rgba(44, 49, 58, 0.1);
  transition: all 0.2s;
}
.vuiBadge--neutral.vuiBadge--clickable:hover {
  border-color: #2c313a;
  text-decoration: none;
}

.vuiBaseButtonIconContainer {
  line-height: 0;
}

.vuiBaseButtonLinkWrapper {
  text-decoration: none;
}
.vuiBaseButtonLinkWrapper:hover {
  text-decoration: none;
}

.vuiBaseButton {
  white-space: nowrap;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  line-height: 1;
  cursor: pointer;
}

.vuiBaseButton-isInert,
.vuiBaseButton-isDisabled {
  cursor: default;
  pointer-events: none;
}

.vuiBaseButton-isDisabled {
  opacity: 0.5;
}

.vuiBaseButton--left .vuiBaseButtonIconContainer {
  margin-right: 8px;
}

.vuiBaseButton--right {
  flex-direction: row-reverse;
}
.vuiBaseButton--right .vuiBaseButtonIconContainer {
  margin-left: 8px;
  margin-right: 0;
}

.vuiBaseButton--fullWidth {
  width: 100%;
}

.vuiBaseButton--xs {
  font-size: 14px;
  padding: 4px 8px;
  height: 24px;
}

.vuiBaseButton--s {
  font-size: 14px;
  padding: 6px 8px;
  height: 28px;
}

.vuiBaseButton--m {
  font-size: 16px;
  padding: 8px 16px;
  height: 34px;
}

.vuiButtonPrimary:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiButtonPrimary--accent {
  color: #ffffff;
  background-color: #551edf;
  border: 1px solid #551edf;
}
.vuiButtonPrimary--accent.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--primary {
  color: #ffffff;
  background-color: rgb(38, 76, 214);
  border: 1px solid rgb(38, 76, 214);
}
.vuiButtonPrimary--primary.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--success {
  color: #ffffff;
  background-color: #04821f;
  border: 1px solid #04821f;
}
.vuiButtonPrimary--success.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--danger {
  color: #ffffff;
  background-color: #c41535;
  border: 1px solid #c41535;
}
.vuiButtonPrimary--danger.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--warning {
  color: #ffffff;
  background-color: #965a15;
  border: 1px solid #965a15;
}
.vuiButtonPrimary--warning.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--neutral {
  color: #2c313a;
  background-color: rgba(44, 49, 58, 0.1);
  border: 1px solid rgba(44, 49, 58, 0.1);
}
.vuiButtonPrimary--neutral.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--subdued {
  color: #69707d;
  background-color: rgba(105, 112, 125, 0.1);
  border: 1px solid rgba(105, 112, 125, 0.1);
}
.vuiButtonPrimary--subdued.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonSecondary:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiButtonSecondary--solid {
  background-color: #ffffff;
}

.vuiButtonSecondary--accent {
  border: 1px solid rgba(85, 30, 223, 0.5);
  color: #551edf;
}
.vuiButtonSecondary--accent.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--primary {
  border: 1px solid rgba(38, 76, 214, 0.5);
  color: rgb(38, 76, 214);
}
.vuiButtonSecondary--primary.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--success {
  border: 1px solid rgba(4, 130, 31, 0.5);
  color: #04821f;
}
.vuiButtonSecondary--success.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--danger {
  border: 1px solid rgba(196, 21, 53, 0.5);
  color: #c41535;
}
.vuiButtonSecondary--danger.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--warning {
  border: 1px solid rgba(150, 90, 21, 0.5);
  color: #965a15;
}
.vuiButtonSecondary--warning.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--neutral {
  border: 1px solid #cbcdde;
  color: #2c313a;
}
.vuiButtonSecondary--neutral.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--subdued {
  border: 1px solid #e3e4f3;
  color: #69707d;
}
.vuiButtonSecondary--subdued.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonTertiary {
  padding-left: 8px;
  padding-right: 8px;
}
.vuiButtonTertiary:hover {
  text-decoration: underline;
}

.vuiButtonTertiary-noPadding {
  padding: 0;
}

.vuiButtonTertiary--accent {
  color: #551edf;
}
.vuiButtonTertiary--accent.vuiButtonTertiary-isSelected {
  background-color: rgba(85, 30, 223, 0.1);
}

.vuiButtonTertiary--primary {
  color: rgb(38, 76, 214);
}
.vuiButtonTertiary--primary.vuiButtonTertiary-isSelected {
  background-color: rgba(38, 76, 214, 0.1);
}

.vuiButtonTertiary--success {
  color: #04821f;
}
.vuiButtonTertiary--success.vuiButtonTertiary-isSelected {
  background-color: rgba(4, 130, 31, 0.1);
}

.vuiButtonTertiary--danger {
  color: #c41535;
}
.vuiButtonTertiary--danger.vuiButtonTertiary-isSelected {
  background-color: rgba(196, 21, 53, 0.1);
}

.vuiButtonTertiary--warning {
  color: #965a15;
}
.vuiButtonTertiary--warning.vuiButtonTertiary-isSelected {
  background-color: rgba(150, 90, 21, 0.1);
}

.vuiButtonTertiary--neutral {
  color: #2c313a;
}
.vuiButtonTertiary--neutral.vuiButtonTertiary-isSelected {
  background-color: rgba(44, 49, 58, 0.1);
}

.vuiButtonTertiary--subdued {
  color: #69707d;
}
.vuiButtonTertiary--subdued.vuiButtonTertiary-isSelected {
  background-color: rgba(105, 112, 125, 0.1);
}

.vuiIconButton {
  display: inline-block;
  border-radius: 4px;
  padding: 4px;
  line-height: 1;
}

.vuiIconButton--accent {
  color: #551edf;
  background-color: rgba(85, 30, 223, 0);
  transition: all 0.2s;
}
.vuiIconButton--accent:hover {
  background-color: rgba(85, 30, 223, 0.1);
}

.vuiIconButton--primary {
  color: rgb(38, 76, 214);
  background-color: rgba(38, 76, 214, 0);
  transition: all 0.2s;
}
.vuiIconButton--primary:hover {
  background-color: rgba(38, 76, 214, 0.1);
}

.vuiIconButton--success {
  color: #04821f;
  background-color: rgba(4, 130, 31, 0);
  transition: all 0.2s;
}
.vuiIconButton--success:hover {
  background-color: rgba(4, 130, 31, 0.1);
}

.vuiIconButton--warning {
  color: #965a15;
  background-color: rgba(150, 90, 21, 0);
  transition: all 0.2s;
}
.vuiIconButton--warning:hover {
  background-color: rgba(150, 90, 21, 0.1);
}

.vuiIconButton--danger {
  color: #c41535;
  background-color: rgba(196, 21, 53, 0);
  transition: all 0.2s;
}
.vuiIconButton--danger:hover {
  background-color: rgba(196, 21, 53, 0.1);
}

.vuiIconButton--neutral {
  color: #2c313a;
  background-color: rgba(44, 49, 58, 0);
  transition: all 0.2s;
}
.vuiIconButton--neutral:hover {
  background-color: rgba(44, 49, 58, 0.1);
}

.vuiIconButton--subdued {
  color: #69707d;
  background-color: rgba(105, 112, 125, 0);
  transition: all 0.2s;
}
.vuiIconButton--subdued:hover {
  background-color: rgba(105, 112, 125, 0.1);
}

.vuiIconButton--xs {
  padding: 4px;
  height: 24px;
}

.vuiIconButton--s {
  padding: 6px;
  height: 28px;
}

.vuiIconButton--m {
  padding: 8px;
  height: 34px;
}

.vuiCallout {
  width: 100%;
}

.vuiCallout--m {
  padding: 16px;
}
.vuiCallout--m .vuiCallout__closeButton {
  margin: -8px;
}

.vuiCallout--s {
  padding: 12px;
}
.vuiCallout--s .vuiCallout__closeButton {
  margin: -6px;
}

.vuiCallout--accent {
  background-color: rgba(85, 30, 223, 0.1);
}

.vuiCallout--primary {
  background-color: rgb(217, 226, 255);
}

.vuiCallout--success {
  background-color: rgba(4, 130, 31, 0.1);
}

.vuiCallout--warning {
  background-color: rgba(150, 90, 21, 0.1);
}

.vuiCallout--danger {
  background-color: #fae9eb;
}

.vuiCallout--neutral {
  background-color: #f3f7fb;
}

.vuiCard {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}

.vuiCard--interactive:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
}

.vuiCard--center {
  align-items: center;
  text-align: center;
}
.vuiCard--center .vuiCard__content,
.vuiCard--center .vuiCard__footer {
  align-items: center;
  text-align: center;
}

.vuiCard--left {
  align-items: flex-start;
  text-align: left;
}
.vuiCard--left .vuiCard__content,
.vuiCard--left .vuiCard__footer {
  align-items: flex-start;
  text-align: left;
}

.vuiCard__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px;
}

.vuiCard__footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #e3e4f3;
  padding: 16px 24px;
}

.vuiCard--s .vuiCard__content,
.vuiCard--s .vuiCard__footer {
  padding: 16px 24px;
}

.vuiCard--m .vuiCard__content,
.vuiCard--m .vuiCard__footer {
  padding: 24px 32px;
}

.vuiCard--l .vuiCard__content,
.vuiCard--l .vuiCard__footer {
  padding: 32px 40px;
}

.vuiChatTurn {
  position: relative;
  left: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #ffffff;
  padding: 24px 12px 24px 24px;
  margin-right: 4px;
  transition: all 0.2s;
}
.vuiChatTurn:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
  left: 4px;
}

.vuiChatTurn + .vuiChatTurn {
  margin-top: 1px;
}

.vuiChatQuestion {
  color: #551edf;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
}

.vuiChatQuestion--error {
  color: #c41535;
}

.vuiChat__inspectButton {
  margin-top: -4px;
}

.vuiChatAnswer {
  color: #000;
}

.vuiChatButton,
.vuiChat {
  position: fixed;
  right: 4px;
  bottom: 4px;
  z-index: 9;
}

.vuiChatButton-isHidden,
.vuiChat--closed {
  visibility: hidden;
  opacity: 0;
}

.vuiChatButton {
  padding: 8px 12px;
  font-size: 14px;
  color: #2c313a;
  background-color: rgb(217, 226, 255);
  border: 1px solid #cbcdde;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all 0.2s;
  animation: popUp 0.4s cubic-bezier(0.5, 0, 0.5, 1) 1;
}
.vuiChatButton:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  translate: translateY(-20px);
}

@keyframes popUp {
  0% {
    transform: translateY(40px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.vuiChat {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #cbcdde;
  background-color: #f3f7fb;
}
@media screen and (max-height: 600px) {
  .vuiChat {
    bottom: 4px;
    height: calc(100vh - 2 * 4px);
  }
  .vuiChat .vuiChat__conversation {
    max-height: 100%;
  }
}
@media screen and (max-width: 600px) {
  .vuiChat {
    right: 4px;
    width: calc(100vw - 2 * 4px);
    max-width: 100% !important;
  }
}

.vuiChat--tall {
  bottom: 4px;
  height: calc(100vh - 2 * 4px);
}
.vuiChat--tall .vuiChat__conversation {
  max-height: 100%;
}

.vuiChat--fullScreen {
  height: calc(100vh - 2 * 4px);
  width: calc(100vw - 2 * 4px);
  max-width: 100% !important;
}
.vuiChat--fullScreen .vuiChat__conversation {
  max-height: 100%;
}

.vuiChat__header {
  padding: 8px 12px;
  font-size: 14px;
  color: #2c313a;
  background-color: rgb(217, 226, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 2;
}

.vuiChat__conversation {
  flex-grow: 1;
  max-height: 400px;
  overflow-y: auto;
}

.vuiChat__introduction {
  padding: 16px 24px 0;
  font-size: 14px;
  color: #000;
}

.vuiChat__turns {
  font-size: 14px;
}

.vuiChat__conversationActions {
  padding: 12px;
}

.vuiChat__input {
  border-top: 1px solid #e3e4f3;
  padding: 8px 12px;
}

.vuiChatPanel {
  position: absolute;
  z-index: 5;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  padding: 4px 12px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.vuiCodeContainer {
  position: relative;
  border-left: 4px solid #cbcdde;
  max-height: 480px;
}

.vuiCodeContainer--fullHeight {
  max-height: 100%;
}

.vuiCodeCopyButton {
  position: absolute;
  right: 4px;
  top: 4px;
}

.vuiCodePre {
  padding: 0 !important;
  margin: 0 !important;
  max-height: inherit;
}

.vuiCode {
  display: block;
  width: 100%;
  padding: 16px 24px;
  background-color: #f3f7fb;
  color: #2c313a;
  font-family: "Roboto Mono", monospace;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 12px !important;
}

@keyframes drawerIn {
  0% {
    right: -680px;
  }
  100% {
    right: 0;
  }
}
.vuiDrawer {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 680px;
  background-color: #ffffff;
  border-left: 1px solid #cbcdde;
  z-index: 11;
  animation: drawerIn 0.2s cubic-bezier(0, 1, 0, 1);
}

.vuiDrawerHeader {
  padding: 24px 24px;
}

.vuiDrawerContent {
  overflow-y: auto;
  overscroll-behavior: contain;
}

.vuiDrawerContent__inner {
  padding: 24px 24px;
}

.vuiDrawer--primary .vuiDrawerHeader {
  background-color: rgb(217, 226, 255);
  color: #2c313a;
}

.vuiDrawer--danger .vuiDrawerHeader {
  background-color: #fae9eb;
  color: #c41535;
}

.vuiFlexContainer {
  display: flex;
  align-items: stretch;
}

.vuiFlexContainer--fullWidth {
  width: 100%;
}

.vuiFlexContainer--wrap {
  flex-wrap: wrap;
}

.vuiFlexContainer--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexContainer--alignItemsCenter {
  align-items: center;
}

.vuiFlexContainer--alignItemsEnd {
  align-items: end;
}

.vuiFlexContainer--alignItemsStart {
  align-items: start;
}

.vuiFlexContainer--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexContainer--directionColumn {
  flex-direction: column;
}

.vuiFlexContainer--directionColumnReverse {
  flex-direction: column-reverse;
}

.vuiFlexContainer--directionRow {
  flex-direction: row;
}

.vuiFlexContainer--directionRowReverse {
  flex-direction: row-reverse;
}

.vuiFlexContainer--justifyContentCenter {
  justify-content: center;
}

.vuiFlexContainer--justifyContentEnd {
  justify-content: end;
}

.vuiFlexContainer--justifyContentStart {
  justify-content: start;
}

.vuiFlexContainer--justifyContentSpaceAround {
  justify-content: space-around;
}

.vuiFlexContainer--justifyContentSpaceBetween {
  justify-content: space-between;
}

.vuiFlexContainer--justifyContentSpaceEvenly {
  justify-content: space-evenly;
}

.vuiFlexContainer--spacingNone {
  margin: 0;
}
.vuiFlexContainer--spacingNone > .vuiFlexItem {
  margin: 0;
}

.vuiFlexContainer--spacingXxs {
  margin: -2px;
}
.vuiFlexContainer--spacingXxs > .vuiFlexItem {
  margin: 2px;
}

.vuiFlexContainer--spacingXs {
  margin: -4px;
}
.vuiFlexContainer--spacingXs > .vuiFlexItem {
  margin: 4px;
}

.vuiFlexContainer--spacingS {
  margin: -6px;
}
.vuiFlexContainer--spacingS > .vuiFlexItem {
  margin: 6px;
}

.vuiFlexContainer--spacingM {
  margin: -8px;
}
.vuiFlexContainer--spacingM > .vuiFlexItem {
  margin: 8px;
}

.vuiFlexContainer--spacingL {
  margin: -12px;
}
.vuiFlexContainer--spacingL > .vuiFlexItem {
  margin: 12px;
}

.vuiFlexContainer--spacingXl {
  margin: -16px;
}
.vuiFlexContainer--spacingXl > .vuiFlexItem {
  margin: 16px;
}

.vuiFlexContainer--spacingXxl {
  margin: -20px;
}
.vuiFlexContainer--spacingXxl > .vuiFlexItem {
  margin: 20px;
}

.vuiFlexItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vuiFlexItem--truncate {
  min-width: 40px;
}

.vuiFlexItem--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexItem--alignItemsCenter {
  align-items: center;
}

.vuiFlexItem--alignItemsEnd {
  align-items: end;
}

.vuiFlexItem--alignItemsStart {
  align-items: start;
}

.vuiFlexItem--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexItem--flexGrow0 {
  flex-grow: 0;
}

.vuiFlexItem--flexGrow1 {
  flex-grow: 1;
}

.vuiFlexItem--flexGrow2 {
  flex-grow: 2;
}

.vuiFlexItem--flexGrow3 {
  flex-grow: 3;
}

.vuiFlexItem--flexGrow4 {
  flex-grow: 4;
}

.vuiFlexItem--flexGrow5 {
  flex-grow: 5;
}

.vuiFlexItem--flexGrow6 {
  flex-grow: 6;
}

.vuiFlexItem--flexGrow7 {
  flex-grow: 7;
}

.vuiFlexItem--flexGrow8 {
  flex-grow: 8;
}

.vuiFlexItem--flexGrow9 {
  flex-grow: 9;
}

.vuiFlexItem--flexGrow10 {
  flex-grow: 10;
}

.vuiFlexItem--flexGrowNone {
  flex-basis: auto;
  flex-grow: 0;
}

.vuiFlexItem--flexShrink0 {
  flex-shrink: 0;
}

.vuiFlexItem--flexShrink1 {
  flex-shrink: 1;
}

.vuiFlexItem--flexShrink2 {
  flex-shrink: 2;
}

.vuiFlexItem--flexShrink3 {
  flex-shrink: 3;
}

.vuiFlexItem--flexShrink4 {
  flex-shrink: 4;
}

.vuiFlexItem--flexShrink5 {
  flex-shrink: 5;
}

.vuiFlexItem--flexShrink6 {
  flex-shrink: 6;
}

.vuiFlexItem--flexShrink7 {
  flex-shrink: 7;
}

.vuiFlexItem--flexShrink8 {
  flex-shrink: 8;
}

.vuiFlexItem--flexShrink9 {
  flex-shrink: 9;
}

.vuiFlexItem--flexShrink10 {
  flex-shrink: 10;
}

.vuiFlexItem--flexShrinkNone {
  flex-basis: auto;
  flex-shrink: 0;
}

.vuiFlexItem--auto {
  flex-basis: auto;
}

.vuiFlexItem--content {
  flex-basis: content;
}

.vuiFlexItem--fill {
  flex-basis: fill;
}

.vuiFlexItem--maxContent {
  flex-basis: max-content;
}

.vuiFlexItem--minContent {
  flex-basis: min-content;
}

.vuiFlexItem--none {
  flex-basis: 0;
}

.vuiCheckboxLabel {
  font-size: 14px;
}

.vuiInput {
  appearance: none;
  border-radius: 4px;
  border: 1px solid #cbcdde;
  background-color: #ffffff;
}

.vuiInput--m {
  padding: 8px 16px;
  font-size: 14px;
}

.vuiInput--l {
  padding: 12px 16px;
  font-size: 18px;
}

.vuiInput--fullWidth {
  width: 100%;
}

.vuiInput-isInvalid {
  border-color: #c41535;
}

.vuiLabel {
  font-size: 14px;
  font-weight: 600;
  color: #2c313a;
}

.vuiRadioButtonLabel {
  font-size: 14px;
}

.vuiSelect {
  position: relative;
  max-width: 240px;
  width: 100%;
}
.vuiSelect select {
  background-color: #ffffff;
  appearance: none;
  border-radius: 4px;
  border: 1px solid #cbcdde;
  color: #000;
  width: 100%;
}

.vuiSelect__caret {
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: auto;
  right: 12px;
}

.vuiSelect--m select {
  padding: 8px 16px;
  font-size: 14px;
  padding-right: 32px;
}
.vuiSelect--m .vuiSelect__caret {
  top: calc(50% - 10px);
}

.vuiSelect--l select {
  padding: 12px 16px;
  font-size: 18px;
  padding-right: 48px;
}
.vuiSelect--l .vuiSelect__caret {
  top: calc(50% - 14px);
}

.vuiSelect-isInvalid select {
  border-color: #c41535;
}

.vuiSuperRadioGroup {
  display: grid;
  gap: 8px;
}

.vuiSuperRadioButton {
  display: block;
  width: 100%;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  text-decoration-color: #2c313a;
  text-align: left;
  background-color: #f3f7fb;
}
.vuiSuperRadioButton:hover {
  text-decoration: underline;
  text-decoration-color: #2c313a;
  background-color: rgb(217, 226, 255);
}

.vuiTextArea {
  appearance: none;
  border-radius: 4px;
  border: 1px solid #cbcdde;
  max-width: 100%;
  resize: none;
  min-height: 80px;
  font-size: 14px;
  padding: 12px;
}

.vuiTextArea--fullWidth {
  width: 100%;
}

.vuiHorizontalRule {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #cbcdde;
  width: 100%;
}

.vuiIcon {
  line-height: 0;
}

.vuiIcon--inline {
  display: inline-block;
}

.vuiIcon--accent {
  color: #551edf !important;
}

.vuiIcon--primary {
  color: rgb(38, 76, 214) !important;
}

.vuiIcon--success {
  color: #04821f !important;
}

.vuiIcon--warning {
  color: #965a15 !important;
}

.vuiIcon--danger {
  color: #c41535 !important;
}

.vuiIcon--subdued {
  color: #69707d !important;
}

.vuiIcon--neutral {
  color: #2c313a !important;
}

.vuiIcon--empty {
  color: #ffffff !important;
}

.vuiInfoTable {
  width: 100%;
  table-layout: fixed;
  border: 1px solid #e3e4f3;
}
.vuiInfoTable thead {
  background-color: #f3f7fb;
  border-bottom: 1px solid #e3e4f3;
}
.vuiInfoTable tbody tr {
  border-bottom: 1px solid #e3e4f3;
}
.vuiInfoTable th {
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  text-align: left;
}
.vuiInfoTable td {
  font-size: 14px;
  vertical-align: middle;
}

.vuiInfoTable--paddingXxs td {
  padding: 4px 12px;
}

.vuiInfoTable--paddingXs td {
  padding: 8px 12px;
}

.vuiInfoTable--paddingS td {
  padding: 12px 12px;
}

.vuiInfoTableRow--sectionHeader {
  background-color: #f3f7fb;
  border-bottom: none !important;
}

.vuiInfoTableRow--footer {
  background-color: #f3f7fb;
}

.vuiLink {
  color: rgb(38, 76, 214) !important;
  text-decoration: none;
}
.vuiLink:hover {
  text-decoration: underline;
}

.vuiLink--button {
  display: inline;
}

.vuiListNumber {
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: #f3f7fb;
  color: #69707d;
  font-weight: 600;
  line-height: 0;
  align-items: center;
}

.vuiListNumber--m {
  width: 16px;
  height: 16px;
  padding: 16px;
  font-size: 16px;
}

.vuiListNumber--s {
  width: 12px;
  height: 12px;
  padding: 12px;
  font-size: 12px;
}

.vuiListNumber-isComplete {
  background-color: #eadfff;
  color: #551edf;
}

.vuiMenu {
  border: 1px solid #cbcdde;
  border-radius: 8px;
}

.vuiMenuItem + .vuiMenuItem {
  border-top: 1px solid #cbcdde;
}

.vuiMenuItem {
  display: block;
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  text-decoration-color: #2c313a;
  text-align: left;
}
.vuiMenuItem:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  text-decoration: underline;
  text-decoration-color: #2c313a;
}

@keyframes modalIn {
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.vuiModalContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: modalIn 0.2s cubic-bezier(0, 1, 1, 1);
  pointer-events: none;
}

.vuiModal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  max-height: calc(100vh - 200px);
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  z-index: 12;
  pointer-events: all;
}

.vuiModalHeader {
  padding: 16px;
}

.vuiModalContent {
  overflow-y: scroll;
  overscroll-behavior: contain;
}

.vuiModalContent__inner {
  padding: 24px 16px 40px;
}

.vuiModal--primary .vuiModalHeader {
  background-color: rgb(217, 226, 255);
  color: #2c313a;
}

.vuiModal--danger .vuiModalHeader {
  background-color: #fae9eb;
  color: #c41535;
}

.vuiNotificationList {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  animation: popTop 0.4s cubic-bezier(0.5, 0, 0.5, 1) 1;
}

.vuiNotificationList__notifications {
  padding: 4px;
  border-bottom-left-radius: 16px;
  transition: all 0.2s;
}

.vuiNotificationList--hasMany .vuiNotificationList__notifications {
  border-bottom-left-radius: 8px;
}

.vuiNotificationContainer {
  position: relative;
}

.vuiNotification {
  position: relative;
  z-index: 1;
  border-radius: 12px;
  padding: 12px;
  font-size: 14px;
  color: #2c313a;
  width: 420px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #ffffff;
}

.vuiNotificationPlaceholder {
  position: absolute;
  z-index: 0;
  bottom: 0;
}

.vuiNotificationPlaceholder1-isVisible {
  bottom: -4px;
  animation: popBottom1 0.2s cubic-bezier(0.5, 0, 0.5, 1) 1;
}

.vuiNotificationPlaceholder2-isVisible {
  bottom: -7px;
  animation: popBottom2 0.2s cubic-bezier(0.5, 0, 0.5, 1) 1;
}

@keyframes popTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes popBottom1 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(2px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes popBottom2 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(8x);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}
.vuiOptionsButtonLeft {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.vuiOptionsButtonRight {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid;
}

.vuiButtonPrimary.vuiOptionsButtonRight--accent {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--primary {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--success {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--danger {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--warning {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--neutral {
  border-left-color: rgba(44, 49, 58, 0.2);
}

.vuiButtonSecondary.vuiOptionsButtonRight--accent {
  border-left-color: rgba(85, 30, 223, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--primary {
  border-left-color: rgba(38, 76, 214, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--success {
  border-left-color: rgba(4, 130, 31, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--danger {
  border-left-color: rgba(196, 21, 53, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--warning {
  border-left-color: rgba(150, 90, 21, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--neutral {
  border-left-color: rgba(44, 49, 58, 0.2);
}

.vuiOptionsList {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.vuiOptionsList--scrollable {
  max-height: 220px;
  overflow-y: auto;
}

.vuiOptionsList--s .vuiOptionsListItem {
  padding: 5px 8px;
}

.vuiOptionsList--m .vuiOptionsListItem {
  padding: 5px 12px;
}

.vuiOptionsList--l .vuiOptionsListItem {
  padding: 8px 12px;
}

.vuiOptionsListItem {
  background-color: #ffffff;
  text-decoration: none;
}
.vuiOptionsListItem:hover {
  text-decoration: underline;
}

.vuiOptionsListItem--accent {
  color: #551edf;
}
.vuiOptionsListItem--accent:hover {
  color: #551edf;
  background-color: #eadfff;
}

.vuiOptionsListItem--primary {
  color: rgb(38, 76, 214);
}
.vuiOptionsListItem--primary:hover {
  color: rgb(38, 76, 214);
  background-color: rgb(217, 226, 255);
}

.vuiOptionsListItem--success {
  color: #04821f;
}
.vuiOptionsListItem--success:hover {
  color: #04821f;
  background-color: #e9f2e9;
}

.vuiOptionsListItem--danger {
  color: #c41535;
}
.vuiOptionsListItem--danger:hover {
  color: #c41535;
  background-color: #fae9eb;
}

.vuiOptionsListItem--warning {
  color: #965a15;
}
.vuiOptionsListItem--warning:hover {
  color: #965a15;
  background-color: #f4eee8;
}

.vuiOptionsListItem--neutral {
  color: #2c313a;
}
.vuiOptionsListItem--neutral:hover {
  color: #2c313a;
  background-color: #f3f7fb;
}

.vuiPopover {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  z-index: 13;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.vuiOptionsListItem__selected--unselected {
  visibility: hidden;
}

.vuiPopoverTitle {
  padding: 8px 12px;
  border-bottom: 1px solid #cbcdde;
  font-weight: 600;
  font-size: 14px;
  color: #2c313a;
}

.vuiPopoverContent {
  padding: 4px 0;
}

.vuiPopoverContent--padding {
  padding: 12px;
}

.vuiProgressBar {
  position: relative;
  border-radius: 4px;
  height: 12px;
  overflow: hidden;
}

.vuiProgressBar__empty,
.vuiProgressBar__bar,
.vuiProgressBar__outline {
  position: absolute;
  width: 100%;
  height: 100%;
}

.vuiProgressBar__empty {
  z-index: 0;
  background-color: #f3f7fb;
  box-shadow: inset rgba(0, 0, 0, 0.05) 0px 2px 2px;
}

.vuiProgressBar__bar {
  transition: all 0.2s;
  z-index: 1;
}

.vuiProgressBar__outline {
  z-index: 2;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.vuiProgressBar--accent .vuiProgressBar__bar {
  background-color: #551edf;
}

.vuiProgressBar--primary .vuiProgressBar__bar {
  background-color: rgb(38, 76, 214);
}

.vuiProgressBar--success .vuiProgressBar__bar {
  background-color: #04821f;
}

.vuiProgressBar--warning .vuiProgressBar__bar {
  background-color: #965a15;
}

.vuiProgressBar--danger .vuiProgressBar__bar {
  background-color: #c41535;
}

.vuiProgressBar--neutral .vuiProgressBar__bar {
  background-color: #69707d;
}

.vuiPrompt {
  position: relative;
  border-radius: 16px;
  transition: all 0.2s;
  word-wrap: break-word;
}

.vuiPrompt--speechBubble::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  left: 48px;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-width: 20px;
  margin-left: -20px;
  margin-bottom: -20px;
  border-top-color: #f3f7fb;
  border-bottom: 0;
}

.vuiPrompt--interactive:hover {
  background-color: #eadfff;
  color: #551edf;
}

.vuiPrompt--danger {
  color: #c41535;
  background-color: #fae9eb;
}

.vuiPrompt--neutral {
  color: #69707d;
  background-color: #f3f7fb;
}

.vuiPrompt--paddingXs {
  padding: 8px;
}

.vuiPrompt--paddingS {
  padding: 12px;
}

.vuiPrompt--paddingM {
  padding: 16px;
}

.vuiPrompt--paddingL {
  padding: 24px;
}

.vuiPrompt--paddingXl {
  padding: 32px;
}

.vuiPrompt--paddingXxl {
  padding: 64px;
}

.vuiScreenBlock {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vuiScreenBlock__mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.vuiSearchInput {
  position: relative;
  display: flex;
  align-items: center;
}

.vuiSearchInput__input {
  flex-grow: 1;
  padding: 12px 16px;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  outline-width: 1px !important;
  outline-style: solid;
  outline-color: transparent;
  outline-offset: -1px !important;
}
.vuiSearchInput__input:focus-visible {
  background-color: #f3f7fb;
  outline-color: #551edf !important;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiSearchInput__submitButton {
  position: absolute;
  right: 12px;
  line-height: 0;
  color: #69707d;
  transition: all 0.2s;
}
.vuiSearchInput__submitButton:hover {
  color: #551edf;
}

.vuiSearchInput--m .vuiSearchInput__input {
  font-size: 14px;
}

.vuiSearchInput--l .vuiSearchInput__input {
  font-size: 18px;
}

.vuiSearchResult {
  position: relative;
}
.vuiSearchResult + .vuiSearchResult {
  margin-top: 24px;
}

.vuiSearchResultPosition {
  position: absolute;
  left: -42px;
  top: 0;
  font-weight: 600;
  padding: 8px;
  color: #69707d;
  padding: 4px 8px;
  width: 30px;
  text-align: center;
  font-size: 12px;
  border-radius: 8px;
  height: 23px;
  transition: all 0.2s;
}

.vuiSearchResultPosition--selected {
  background-color: rgb(38, 76, 214);
  color: #ffffff;
  height: 100%;
}

.vuiSearchSelectHeader {
  background-color: #f3f7fb;
  padding: 16px;
  border-bottom: 1px solid #cbcdde;
  font-weight: 600;
  font-size: 14px;
  color: #2c313a;
}

.vuiSearchSelect__search {
  padding: 4px 8px;
  border-bottom: 1px solid #cbcdde;
}

.vuiSpacer {
  flex-shrink: 0;
}

.vuiSpacer--xxxs {
  height: 2px;
}

.vuiSpacer--xxs {
  height: 4px;
}

.vuiSpacer--xs {
  height: 8px;
}

.vuiSpacer--s {
  height: 12px;
}

.vuiSpacer--m {
  height: 16px;
}

.vuiSpacer--l {
  height: 24px;
}

.vuiSpacer--xl {
  height: 32px;
}

.vuiSpacer--xxl {
  height: 40px;
}

.vuiSpinner--xs {
  width: 16px;
  height: 16px;
}

.vuiSpinner--s {
  width: 24px;
  height: 24px;
}

.vuiSpinner--m {
  width: 32px;
  height: 32px;
}

.vuiSpinner--l {
  width: 48px;
  height: 48px;
}

.vuiSpinner--xl {
  width: 64px;
  height: 64px;
}

.vuiSpinner--xxl {
  width: 80px;
  height: 80px;
}

.vuiSpinner--xxxl {
  width: 100px;
  height: 100px;
}

.vuiSpinner__animation {
  width: 100%;
  height: 100%;
}

.vuiSummary {
  font-size: 16px;
}

.vuiSummaryCitation {
  position: relative;
  top: -2px;
  display: inline-block !important;
}

.vuiSummaryCitation-isSelected {
  background-color: rgb(38, 76, 214);
  color: #ffffff;
}

.vuiTable {
  width: 100%;
  table-layout: fixed;
}
.vuiTable thead {
  border-bottom: 1px solid #cbcdde;
}
.vuiTable tbody tr {
  border-bottom: 1px solid #e3e4f3;
}
.vuiTable tbody tr.vuiTableRow-isBeingActedUpon, .vuiTable tbody tr:not(.vuiTableRow--inert):hover {
  background-color: #f3f7fb;
}
.vuiTable tbody tr:last-child {
  border-bottom: 1px solid #cbcdde;
}
.vuiTable th {
  font-size: 14px;
  font-weight: 600;
  padding: 4px;
}
.vuiTable td {
  font-size: 14px;
  padding: 4px;
  vertical-align: middle;
  word-break: break-word;
}

.vuiTable--fluid {
  table-layout: auto;
}

.vuiTableCell {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.vuiTableActions {
  display: flex;
  justify-content: flex-end;
}

.vuiTableManyPagesToken {
  padding: 0 8px;
}

.vuiTableManyPagesToken-isDisabled {
  opacity: 0.5;
}

.vuiTableHeaderSelect {
  width: 32px;
}

.vuiTableHeaderActions {
  width: 42px;
}

.vuiTableContent {
  height: 80px;
}

.vuiTabs {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbcdde;
  justify-content: space-between;
}

.vuiTabs--s .vuiTab {
  padding: 8px 12px;
  font-size: 14px;
}

.vuiTabs--m .vuiTab {
  padding: 8px 16px;
  font-size: 16px;
}

.vuiTabs__tabs {
  display: flex;
  align-items: center;
}

.vuiTabs__appendedContent {
  flex-basis: auto;
  flex-grow: 0;
}

.vuiTab {
  flex-grow: 0;
  flex-shrink: 0;
  color: #69707d;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: transparent 0px 1px 0px;
  cursor: pointer;
}
.vuiTab:hover, .vuiTab:active {
  color: #551edf;
  text-decoration: none;
}
.vuiTab:hover {
  background-color: #f3f7fb;
}
.vuiTab:active {
  background-color: rgba(85, 30, 223, 0.1);
}
.vuiTab.vuiTab-isActive {
  color: #2c313a;
  box-shadow: #551edf 0px 1px 0px;
}

.vuiToggle {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.vuiToggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}
.vuiToggle__input:checked + .vuiToggle__button {
  background-color: rgb(38, 76, 214);
}
.vuiToggle__input:focus-visible + .vuiToggle__button {
  outline: 2px solid rgba(38, 76, 214, 0.75);
  outline-offset: 2px;
}
.vuiToggle__input:checked + .vuiToggle__button:before {
  transform: translateX(16px);
}

.vuiToggle__button {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cbcdde;
  transition: 0.2s;
  border-radius: 16px;
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}
.vuiToggle__button:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  transition: 0.2s;
  border-radius: 50%;
}

.vuiTitle {
  color: #2c313a;
  margin-bottom: 0;
}

.vuiTitle--xxs {
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xs {
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--s {
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  color: #69707d;
}

.vuiTitle--m {
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--l {
  font-size: 30px;
  line-height: 30px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xxl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--left {
  text-align: left;
}

.vuiTitle--center {
  text-align: center;
}

.vuiTitle--right {
  text-align: right;
}

.vuiText {
  overflow-wrap: break-word;
  word-break: break-word;
}
.vuiText ul {
  list-style: disc;
}
.vuiText ol {
  list-style: auto;
}
.vuiText ul,
.vuiText ol {
  margin-left: 16px;
  margin-bottom: 8px;
}
.vuiText ul:last-child,
.vuiText ol:last-child {
  margin-bottom: 0;
}
.vuiText a {
  color: rgb(38, 76, 214);
}

.vuiText--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vuiText--truncate * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vuiText--xs {
  color: #2c313a;
  font-size: 12px;
  line-height: 1.4;
}
.vuiText--xs p {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--xs p:last-child {
  margin-bottom: 0;
}

.vuiText--s {
  color: #2c313a;
  font-size: 14px;
  line-height: 1.4;
}
.vuiText--s p {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--s p:last-child {
  margin-bottom: 0;
}

.vuiText--m {
  color: #2c313a;
  font-size: 16px;
  line-height: 1.4;
}
.vuiText--m p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--m p:last-child {
  margin-bottom: 0;
}

.vuiText--l {
  color: #2c313a;
  font-size: 18px;
  line-height: 1.4;
}
.vuiText--l p {
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--l p:last-child {
  margin-bottom: 0;
}

.vuiText--left {
  text-align: left;
}

.vuiText--center {
  text-align: center;
}

.vuiText--right {
  text-align: right;
}

.vuiTextColor--accent {
  color: #551edf !important;
}

.vuiTextColor--primary {
  color: rgb(38, 76, 214) !important;
}

.vuiTextColor--success {
  color: #04821f !important;
}

.vuiTextColor--warning {
  color: #965a15 !important;
}

.vuiTextColor--danger {
  color: #c41535 !important;
}

.vuiTextColor--subdued {
  color: #69707d !important;
}

.vuiTextColor--neutral {
  color: #2c313a !important;
}

.searchModalContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: modalIn 0.2s cubic-bezier(0, 1, 1, 1);
  pointer-events: none;
}
.searchModalContainer .searchModal {
  margin-top: 6vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  max-height: 88vh;
  z-index: 12;
  pointer-events: all;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  overflow: hidden;
}
.searchModalContainer .searchModalResults {
  border-top: 1px solid #cbcdde;
  overflow-y: auto;
}
.searchModalContainer .searchModalFooter {
  border-top: 1px solid #cbcdde;
  padding: 0 16px;
  background-color: #f3f7fb;
}

@media only screen and (max-width: 740px) {
  .searchModalContainer {
    overflow-y: auto;
  }
  .searchModalContainer .searchModal {
    margin-top: 0 !important;
    max-width: 100vw !important;
    max-height: none !important;
    border-radius: 0 !important;
    overflow: initial !important;
  }
  .searchModalContainer .searchModalResults {
    overflow-y: none !important;
  }
}
/**
 * A one-off reset for the button elements.
 */
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}

.styleWrapper {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.searchButton {
  display: flex;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  white-space: nowrap;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  line-height: 1;
  border: 1px solid #cbcdde;
  color: #2c313a;
  background-color: #ffffff;
  font-size: 16px;
  padding: 8px 1px 8px 12px;
  height: 34px;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  overflow: hidden;
}
.searchButton:hover {
  border-color: rgb(38, 76, 214);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
}

.searchButton__inner {
  flex-grow: 1;
}

.searchButtonShortcut {
  padding: 8px;
  border-radius: 2px;
  font-size: 14px;
  background-color: rgb(217, 226, 255);
  color: rgb(38, 76, 214);
}

.searchModalContainer {
  /* HTML5 display-role reset for older browsers */
}
.searchModalContainer body,
.searchModalContainer textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
.searchModalContainer *,
.searchModalContainer *:before,
.searchModalContainer *:after {
  box-sizing: border-box;
}
.searchModalContainer html,
.searchModalContainer body,
.searchModalContainer div,
.searchModalContainer span,
.searchModalContainer applet,
.searchModalContainer object,
.searchModalContainer iframe,
.searchModalContainer h1,
.searchModalContainer h2,
.searchModalContainer h3,
.searchModalContainer h4,
.searchModalContainer h5,
.searchModalContainer h6,
.searchModalContainer p,
.searchModalContainer blockquote,
.searchModalContainer pre,
.searchModalContainer a,
.searchModalContainer abbr,
.searchModalContainer acronym,
.searchModalContainer address,
.searchModalContainer big,
.searchModalContainer cite,
.searchModalContainer code,
.searchModalContainer del,
.searchModalContainer dfn,
.searchModalContainer em,
.searchModalContainer img,
.searchModalContainer ins,
.searchModalContainer kbd,
.searchModalContainer q,
.searchModalContainer s,
.searchModalContainer samp,
.searchModalContainer small,
.searchModalContainer strike,
.searchModalContainer strong,
.searchModalContainer sub,
.searchModalContainer sup,
.searchModalContainer tt,
.searchModalContainer var,
.searchModalContainer b,
.searchModalContainer u,
.searchModalContainer i,
.searchModalContainer center,
.searchModalContainer dl,
.searchModalContainer dt,
.searchModalContainer dd,
.searchModalContainer ol,
.searchModalContainer ul,
.searchModalContainer li,
.searchModalContainer fieldset,
.searchModalContainer form,
.searchModalContainer label,
.searchModalContainer legend,
.searchModalContainer table,
.searchModalContainer caption,
.searchModalContainer tbody,
.searchModalContainer tfoot,
.searchModalContainer thead,
.searchModalContainer tr,
.searchModalContainer th,
.searchModalContainer td,
.searchModalContainer article,
.searchModalContainer aside,
.searchModalContainer canvas,
.searchModalContainer details,
.searchModalContainer embed,
.searchModalContainer figure,
.searchModalContainer figcaption,
.searchModalContainer footer,
.searchModalContainer header,
.searchModalContainer hgroup,
.searchModalContainer menu,
.searchModalContainer nav,
.searchModalContainer output,
.searchModalContainer ruby,
.searchModalContainer section,
.searchModalContainer summary,
.searchModalContainer time,
.searchModalContainer mark,
.searchModalContainer audio,
.searchModalContainer video {
  margin: 0;
  padding: 0;
  border: none;
  vertical-align: baseline;
}
.searchModalContainer h1,
.searchModalContainer h2,
.searchModalContainer h3,
.searchModalContainer h4,
.searchModalContainer h5,
.searchModalContainer h6,
.searchModalContainer p {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}
.searchModalContainer article,
.searchModalContainer aside,
.searchModalContainer details,
.searchModalContainer figcaption,
.searchModalContainer figure,
.searchModalContainer footer,
.searchModalContainer header,
.searchModalContainer hgroup,
.searchModalContainer menu,
.searchModalContainer nav,
.searchModalContainer section {
  display: block;
}
.searchModalContainer a[href],
.searchModalContainer button,
.searchModalContainer [role=button] {
  cursor: pointer;
}
.searchModalContainer button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}
.searchModalContainer input {
  margin: 0;
  padding: 0;
}
.searchModalContainer input:disabled {
  opacity: 1; /* required on iOS */
}
.searchModalContainer ol,
.searchModalContainer ul {
  list-style: none;
}
.searchModalContainer blockquote,
.searchModalContainer q {
  quotes: none;
}
.searchModalContainer blockquote:before,
.searchModalContainer blockquote:after,
.searchModalContainer q:before,
.searchModalContainer q:after {
  content: "";
}
.searchModalContainer table {
  border-collapse: collapse;
  border-spacing: 0;
}
.searchModalContainer hr {
  margin: 0;
}
.searchModalContainer fieldset {
  min-inline-size: auto;
}
.searchModalContainer .searchInput {
  position: relative;
  display: flex;
  align-items: center;
}
.searchModalContainer .searchInput__input {
  flex-grow: 1;
  padding: 24px;
  background-color: #ffffff;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  outline-width: 1px;
  outline-style: solid;
  outline-color: transparent;
  outline-offset: -1px;
  font-size: 18px;
  color: #2c313a;
}
.searchModalContainer .searchInput__submitButton {
  position: absolute;
  right: 16px;
  line-height: 0;
  color: #69707d;
  transition: all 0.2s;
}
.searchModalContainer .searchInput__submitButton:hover {
  color: rgb(38, 76, 214);
}
.searchModalContainer .searchResult {
  background-color: #ffffff;
  display: block;
  padding: 12px 24px 12px 16px;
  border-left: 12px solid #ffffff;
  text-decoration: none;
  border-bottom: 1px solid #e3e4f3;
}
.searchModalContainer .searchResult:hover, .searchModalContainer .searchResult.isSelected {
  background-color: #f3f7fb;
  border-left: 12px solid rgb(38, 76, 214);
}
.searchModalContainer .searchResult:hover .searchResultTitle, .searchModalContainer .searchResult.isSelected .searchResultTitle {
  text-decoration: underline;
}
.searchModalContainer .searchResult:last-of-type {
  border-bottom: none;
}
.searchModalContainer .searchResultTitle {
  color: rgb(38, 76, 214);
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 4px;
}
.searchModalContainer .searchResultSnippet {
  color: #2c313a;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlcnlrL2NvZGUvc2VhcmNoL3NyYyIsInNvdXJjZXMiOlsidnVpL2NvbXBvbmVudHMvYWNjb3JkaW9uL19pbmRleC5zY3NzIiwidnVpL3N0eWxlVXRpbHMvX3R5cG9ncmFwaHkuc2NzcyIsInZ1aS9zdHlsZVV0aWxzL19jb2xvcnMuc2NzcyIsInZ1aS9jb21wb25lbnRzL2FwcC9hcHBDb250ZW50LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9hcHAvYXBwSGVhZGVyLnNjc3MiLCJ2dWkvc3R5bGVVdGlscy9fYXBwLnNjc3MiLCJ2dWkvc3R5bGVVdGlscy9fZGVwdGguc2NzcyIsInZ1aS9jb21wb25lbnRzL2FwcC9hcHBMYXlvdXQuc2NzcyIsInZ1aS9jb21wb25lbnRzL2FwcC9hcHBTaWRlTmF2L2FwcFNpZGVOYXYuc2NzcyIsInZ1aS9jb21wb25lbnRzL2FwcC9hcHBTaWRlTmF2L19pbmRleC5zY3NzIiwidnVpL3N0eWxlVXRpbHMvX3NpemVzLnNjc3MiLCJ2dWkvc3R5bGVVdGlscy9fbWl4aW5zLnNjc3MiLCJ2dWkvY29tcG9uZW50cy9hcHAvYXBwU2lkZU5hdi9hcHBTaWRlTmF2U2VjdGlvbnMuc2NzcyIsInZ1aS9jb21wb25lbnRzL2FwcC9hcHBTaWRlTmF2L2FwcFNpZGVOYXZUcmVlLnNjc3MiLCJ2dWkvY29tcG9uZW50cy9hY2NvdW50TWVudS9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2JhZGdlL19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2VCdXR0b24uc2NzcyIsInZ1aS9zdHlsZVV0aWxzL19zaGFkb3dzLnNjc3MiLCJ2dWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uUHJpbWFyeS5zY3NzIiwidnVpL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvblNlY29uZGFyeS5zY3NzIiwidnVpL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvblRlcnRpYXJ5LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9idXR0b24vaWNvbkJ1dHRvbi5zY3NzIiwidnVpL2NvbXBvbmVudHMvY2FsbG91dC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2NhcmQvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9jaGF0L2NoYXRUdXJuLnNjc3MiLCJ2dWkvY29tcG9uZW50cy9jaGF0L19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvY29kZS9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2RyYXdlci9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2ZsZXgvX2ZsZXhDb250YWluZXIuc2NzcyIsInZ1aS9jb21wb25lbnRzL2ZsZXgvX2ZsZXhJdGVtLnNjc3MiLCJ2dWkvY29tcG9uZW50cy9mb3JtL2NoZWNrYm94L19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvZm9ybS9pbnB1dC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2Zvcm0vbGFiZWwvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9mb3JtL3JhZGlvQnV0dG9uL19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvZm9ybS9zZWxlY3QvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9mb3JtL3N1cGVyUmFkaW9Hcm91cC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2Zvcm0vdGV4dEFyZWEvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9ob3Jpem9udGFsUnVsZS9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL2ljb24vX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9pbmZvVGFibGUvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9saW5rL19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvbGlzdC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL21lbnUvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9tb2RhbC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL29wdGlvbnNCdXR0b24vX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9vcHRpb25zTGlzdC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL3BvcG92ZXIvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9wcm9ncmVzc0Jhci9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL3Byb21wdC9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL3NjcmVlbkJsb2NrL19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvc2VhcmNoSW5wdXQvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9zZWFyY2hSZXN1bHQvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9zZWFyY2hTZWxlY3QvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9zcGFjZXIvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy9zcGlubmVyL19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvc3VtbWFyeS9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL3RhYmxlL19pbmRleC5zY3NzIiwidnVpL2NvbXBvbmVudHMvdGFicy9faW5kZXguc2NzcyIsInZ1aS9jb21wb25lbnRzL3RvZ2dsZS9faW5kZXguc2NzcyIsInZ1aS9zdHlsZVV0aWxzL19hbmltYXRpb24uc2NzcyIsInZ1aS9jb21wb25lbnRzL3R5cG9ncmFwaHkvX3RpdGxlLnNjc3MiLCJ2dWkvY29tcG9uZW50cy90eXBvZ3JhcGh5L190ZXh0LnNjc3MiLCJ2dWkvY29tcG9uZW50cy90eXBvZ3JhcGh5L190ZXh0Q29sb3Iuc2NzcyIsInNlYXJjaE1vZGFsLnNjc3MiLCJfaW5kZXguc2NzcyIsInZ1aS9fcmVzZXQuc2NzcyIsInNlYXJjaElucHV0LnNjc3MiLCJzZWFyY2hSZXN1bHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdDRWlCO0VERGpCO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0Es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WyIudnVpQWNjb3JkaW9uSGVhZGVyIHtcbiAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICRzaXplWHMgMDtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JMaWdodFNoYWRlO1xuICB9XG59XG5cbi52dWlBY2NvcmRpb25IZWFkZXJfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4kZm9udFNpemVTbWFsbDogMTJweDtcbiRmb250U2l6ZVN0YW5kYXJkOiAxNHB4O1xuJGZvbnRTaXplTWVkaXVtOiAxNnB4O1xuJGZvbnRTaXplTGFyZ2U6IDE4cHg7XG4kZm9udFNpemVYTGFyZ2U6IDI0cHg7XG4kZm9udFNpemVYeExhcmdlOiAzMHB4O1xuJGZvbnRTaXplWHh4TGFyZ2U6IDQwcHg7XG5cbiRjb2xvclRleHQ6ICRjb2xvckRhcmtlclNoYWRlO1xuJGNvbG9yU3ViZHVlZDogJGNvbG9yRGFya1NoYWRlO1xuXG4kZm9udFdlaWdodE5vcm1hbDogNDAwO1xuJGZvbnRXZWlnaHRCb2xkOiA2MDA7XG5cbiRsYWJlbEZvbnRTaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiRsYWJlbEZvbnRXZWlnaHQ6ICRmb250V2VpZ2h0Qm9sZDtcbiRsYWJlbENvbG9yOiAkY29sb3JUZXh0O1xuIiwiLy8gU2VtYW50aWMgY29sb3JzXG4kY29sb3JBY2NlbnQ6ICM1NTFlZGYgIWRlZmF1bHQ7XG4kY29sb3JQcmltYXJ5OiByZ2IoMzgsIDc2LCAyMTQpICFkZWZhdWx0O1xuJGNvbG9yU3VjY2VzczogIzA0ODIxZiAhZGVmYXVsdDtcbiRjb2xvcldhcm5pbmc6ICM5NjVhMTUgIWRlZmF1bHQ7XG4kY29sb3JEYW5nZXI6ICNjNDE1MzUgIWRlZmF1bHQ7XG5cbi8vIFNlbWFudGljIHNoYWRlc1xuJGNvbG9yQWNjZW50TGlnaHRTaGFkZTogI2VhZGZmZiAhZGVmYXVsdDtcbiRjb2xvclByaW1hcnlMaWdodFNoYWRlOiByZ2IoMjE3LCAyMjYsIDI1NSkgIWRlZmF1bHQ7XG4kY29sb3JTdWNjZXNzTGlnaHRTaGFkZTogI2U5ZjJlOSAhZGVmYXVsdDtcbiRjb2xvcldhcm5pbmdMaWdodFNoYWRlOiAjZjRlZWU4ICFkZWZhdWx0O1xuJGNvbG9yRGFuZ2VyTGlnaHRTaGFkZTogI2ZhZTllYiAhZGVmYXVsdDtcblxuLy8gTmV1dHJhbCBjb2xvcnNcbiRjb2xvckVtcHR5U2hhZGU6ICNmZmZmZmYgIWRlZmF1bHQ7XG4kY29sb3JMaWdodFNoYWRlOiAjZjNmN2ZiICFkZWZhdWx0O1xuJGNvbG9yTWVkaXVtU2hhZGU6ICNjYmNkZGUgIWRlZmF1bHQ7XG4kY29sb3JEYXJrU2hhZGU6ICM2OTcwN2QgIWRlZmF1bHQ7XG4kY29sb3JEYXJrZXJTaGFkZTogIzJjMzEzYSAhZGVmYXVsdDtcbiRjb2xvckZ1bGxTaGFkZTogIzAwMCAhZGVmYXVsdDtcbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4udnVpQXBwQ29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuLnZ1aUFwcENvbnRlbnQtLWZ1bGxXaWR0aCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLy8gUGFkZGluZ1xuJHBhZGRpbmc6IChcbiAgTm9uZTogMCxcbiAgWHM6ICRzaXplWHMgJHNpemVYcyAqIDEuMjUsXG4gIFM6ICRzaXplUyAkc2l6ZVMgKiAxLjI1LFxuICBNOiAkc2l6ZU0gJHNpemVNICogMS4yNSxcbiAgTDogJHNpemVMICRzaXplTCAqIDEuMjUsXG4gIFhsOiAkc2l6ZVhsICRzaXplWGwgKiAxLjI1XG4pO1xuXG5AZWFjaCAkcGFkZGluZ05hbWUsICRwYWRkaW5nVmFsdWUgaW4gJHBhZGRpbmcge1xuICAudnVpQXBwQ29udGVudC0tcGFkZGluZyN7JHBhZGRpbmdOYW1lfSB7XG4gICAgcGFkZGluZzogI3skcGFkZGluZ1ZhbHVlfTtcbiAgfVxufVxuIiwiLnZ1aUFwcEhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6ICRhcHBIZWFkZXJIZWlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG4gIHBhZGRpbmc6ICRzaXplWHMgJHNpemVNO1xuICB6LWluZGV4OiAkYXBwSGVhZGVyWkluZGV4O1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xufVxuXG4udnVpQXBwSGVhZGVyX19pbm5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiIsIiRhcHBIZWFkZXJIZWlnaHQ6IDQ2cHg7XG4iLCIkYXBwSGVhZGVyWkluZGV4OiA4O1xuJGNoYXRaSW5kZXg6IDk7XG4kc2NyZWVuQmxvY2taSW5kZXg6IDEwO1xuJGRyYXdlclpJbmRleDogMTE7XG4kbW9kYWxaSW5kZXg6IDEyO1xuLy8gRW5hYmxlIHBvcG92ZXJzIHRvIGJlIHBsYWNlZCBpbnNpZGUgb2YgbW9kYWxzIGFuZCBkcmF3ZXJzLlxuJHBvcG92ZXJaSW5kZXg6IDEzO1xuJG5vdGlmaWNhdGlvbnNaSW5kZXg6IDEwMDA7XG4iLCIudnVpQXBwTGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZy10b3A6ICRhcHBIZWFkZXJIZWlnaHQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi52dWlBcHBMYXlvdXQtLWZ1bGwge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnZ1aUFwcExheW91dF9fc2lkZU5hdiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvck1lZGl1bVNoYWRlO1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnZ1aUFwcExheW91dF9fY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiIsIi52dWlBcHBTaWRlTmF2IHtcbiAgd2lkdGg6ICRhcHBTaWRlTmF2V2lkdGg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4udnVpQXBwU2lkZU5hdl9faW5uZXIge1xuICAvLyBQcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBzcXVpc2hlZCBhcyBuYXYgY29sbGFwc2VzLlxuICB3aWR0aDogJGFwcFNpZGVOYXZXaWR0aDtcbiAgcGFkZGluZzogMjhweCAzMnB4IDMycHggMzNweDtcbiAgbWFyZ2luLWJvdHRvbTogJHNpemVYeGwgKiA0O1xuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcbn1cblxuLnZ1aUFwcFNpZGVOYXZDb250ZW50IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG59XG5cbi52dWlBcHBTaWRlTmF2Q29udGVudC1pc0hpZGRlbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udnVpQXBwU2lkZU5hdi1pc0NvbGxhcHNlZCB7XG4gIHdpZHRoOiAkYXBwU2lkZU5hdldpZHRoQ29sbGFwc2VkO1xuICAvLyBTdG9wIHNjcm9sbGluZy5cbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgLnZ1aUFwcFNpZGVOYXZfX2lubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICRzaXplTTtcbiAgfVxufVxuXG4udnVpQXBwU2lkZU5hdkNvbGxhcHNlQnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAkY29sb3JTdWJkdWVkO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDAgJHNpemVNO1xuICBtYXJnaW4tbGVmdDogLSRzaXplWHhsO1xuICBtYXJnaW4tYm90dG9tOiAkc2l6ZU07XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvclByaW1hcnk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnZ1aUFwcFNpZGVOYXZFeHBhbmRCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAtJHNpemVYeHM7XG4gIC8vIEVuc3VyZSB0aGUgY29udGVudCBiZWxvdyB0aGUgZXhwYW5kL2NvbGxhcHNlIGJ1dHRvbiByZW1haW5zXG4gIC8vIGF0IHRoZSBzYW1lIHZlcnRpY2FsIHBvc2l0aW9uIHdoZW4gY29sbGFwc2VkIGFuZCBleHBhbmRlZC5cbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4udnVpQXBwU2lkZU5hdkxpbmsge1xuICBAaW5jbHVkZSB0cnVuY2F0ZVRleHQ7XG4gIEBpbmNsdWRlIGFwcFNpZGVOYXZJdGVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvclByaW1hcnk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnZ1aUFwcFNpZGVOYXZMaW5rLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQcmltYXJ5TGlnaHRTaGFkZTtcbiAgYm9yZGVyLXJhZGl1czogJHNpemVNO1xufVxuIiwiJGFwcFNpZGVOYXZXaWR0aDogMjQwcHg7XG4kYXBwU2lkZU5hdldpZHRoQ29sbGFwc2VkOiA2MHB4O1xuJGFwcFNpZGVOYXZMaW5rU3BhY2luZzogJHNpemVYeHMgKyAycHg7XG5cbkBtaXhpbiBhcHBTaWRlTmF2SXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgcGFkZGluZzogMCAkc2l6ZU07XG4gIG1hcmdpbi1sZWZ0OiAtJHNpemVNO1xuICBwYWRkaW5nLXRvcDogJGFwcFNpZGVOYXZMaW5rU3BhY2luZztcbiAgcGFkZGluZy1ib3R0b206ICRhcHBTaWRlTmF2TGlua1NwYWNpbmc7XG59XG5cbkBpbXBvcnQgXCIuL2FwcFNpZGVOYXZcIjtcbkBpbXBvcnQgXCIuL2FwcFNpZGVOYXZTZWN0aW9uc1wiO1xuQGltcG9ydCBcIi4vYXBwU2lkZU5hdlRyZWVcIjtcbiIsIiRzaXplOiAxNnB4ICFkZWZhdWx0O1xuXG4kc2l6ZVh4eHM6IDJweCAhZGVmYXVsdDsgLy8gJHNpemUgKiAwLjEyNVxuJHNpemVYeHM6IDRweCAhZGVmYXVsdDsgLy8gJHNpemUgKiAwLjI1XG4kc2l6ZVhzOiA4cHggIWRlZmF1bHQ7IC8vICRzaXplICogMC41XG4kc2l6ZVM6IDEycHggIWRlZmF1bHQ7IC8vICRzaXplICogMC43NVxuJHNpemVNOiAkc2l6ZSAhZGVmYXVsdDsgLy8gJHNpemUgKiAxXG4kc2l6ZUw6IDI0cHggIWRlZmF1bHQ7IC8vICRzaXplICogMS41XG4kc2l6ZVhsOiAzMnB4ICFkZWZhdWx0OyAvLyAkc2l6ZSAqIDJcbiRzaXplWHhsOiA0MHB4ICFkZWZhdWx0OyAvLyAkc2l6ZSAqIDIuNVxuIiwiQG1peGluIHRydW5jYXRlVGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICYgKiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG4iLCIudnVpQXBwU2lkZU5hdlNlY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogJHNpemVMO1xufVxuXG4udnVpQXBwU2lkZU5hdkNvbnRlbnQtaXNIaWRkZW4ge1xuICAudnVpQXBwU2lkZU5hdlNlY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAkc2l6ZVhzO1xuICB9XG59XG5cbi52dWlBcHBTaWRlTmF2U2VjdGlvbiArIC52dWlBcHBTaWRlTmF2U2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6ICRzaXplTDtcbn1cblxuLnZ1aUFwcFNpZGVOYXZTZWN0aW9uX190aXRsZSB7XG4gIGNvbG9yOiAkY29sb3JUZXh0O1xuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xufVxuXG4udnVpQXBwU2lkZU5hdlNlY3Rpb25fX2l0ZW1zIHtcbiAgbWFyZ2luLXRvcDogJHNpemVTO1xuXG4gICYgPiAudnVpQXBwU2lkZU5hdkxpbmsge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogLSRhcHBTaWRlTmF2TGlua1NwYWNpbmc7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0kYXBwU2lkZU5hdkxpbmtTcGFjaW5nO1xuICAgIH1cbiAgfVxufVxuIiwiLnZ1aUFwcFNpZGVOYXZUcmVlIHtcbiAgbWFyZ2luLXRvcDogLSRzaXplWHhzO1xufVxuXG4udnVpQXBwU2lkZU5hdlRyZWVTZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udnVpQXBwU2lkZU5hdlRyZWVUb2dnbGVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0zMHB4O1xufVxuXG4udnVpQXBwU2lkZU5hdlRyZWVDaGlsZHJlbiB7XG4gIC8vIFNpemVkIHRvIG1hdGNoIHRoZSB3aWR0aCBvZiB0aGUgaWNvbnMuXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udnVpQXBwU2lkZU5hdlRyZWVTZWN0aW9uX19zdWJUaXRsZSB7XG4gIEBpbmNsdWRlIGFwcFNpZGVOYXZJdGVtO1xuICBmb250LXNpemU6ICRmb250U2l6ZVNtYWxsO1xuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICBjb2xvcjogJGNvbG9yRGFya1NoYWRlO1xufVxuIiwiLnZ1aUFjY291bnRNZW51IHtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLnZ1aUFjY291bnJNZW51SGVhZGVyIHtcbiAgcGFkZGluZzogJHNpemVTO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yTGlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG59XG5cbi52dWlBY2NvdW50TWVudUhlYWRlckl0ZW1fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAkZm9udFNpemVTbWFsbDtcbiAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0Qm9sZDtcbiAgY29sb3I6ICRjb2xvckRhcmtlclNoYWRlO1xufVxuXG4udnVpQWNjb3VudE1lbnVIZWFkZXJJdGVtX192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG4gIGNvbG9yOiAkY29sb3JEYXJrZXJTaGFkZTtcbiAgbWFyZ2luLXRvcDogJHNpemVYeHM7XG59XG4iLCJAdXNlIFwic2FzczptYXBcIjtcblxuLnZ1aUJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6ICRmb250U2l6ZVNtYWxsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZzogJHNpemVYeHMgJHNpemVYcztcbiAgYm9yZGVyLXJhZGl1czogJHNpemVTO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udnVpQmFkZ2UtLWNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gQ29sb3JcbiRjb2xvcjogKFxuICBhY2NlbnQ6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvckFjY2VudCxcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yQWNjZW50LCAwLjkpLFxuICAgIFwiYm9yZGVyLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvckFjY2VudCwgMC45KVxuICApLFxuICBwcmltYXJ5OiAoXG4gICAgXCJjb2xvclwiOiAkY29sb3JQcmltYXJ5LFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JQcmltYXJ5LCAwLjkpLFxuICAgIFwiYm9yZGVyLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvclByaW1hcnksIDAuOSlcbiAgKSxcbiAgc3VjY2VzczogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yU3VjY2VzcyxcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yU3VjY2VzcywgMC45KSxcbiAgICBcImJvcmRlci1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JTdWNjZXNzLCAwLjkpXG4gICksXG4gIHdhcm5pbmc6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvcldhcm5pbmcsXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvcldhcm5pbmcsIDAuOSksXG4gICAgXCJib3JkZXItY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yV2FybmluZywgMC45KVxuICApLFxuICBkYW5nZXI6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvckRhbmdlcixcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yRGFuZ2VyLCAwLjkpLFxuICAgIFwiYm9yZGVyLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvckRhbmdlciwgMC45KVxuICApLFxuICBuZXV0cmFsOiAoXG4gICAgXCJjb2xvclwiOiAkY29sb3JUZXh0LFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JMaWdodFNoYWRlLFxuICAgIFwiYm9yZGVyLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvclRleHQsIDAuOSlcbiAgKVxuKTtcblxuQGVhY2ggJGNvbG9yTmFtZSwgJGNvbG9yVmFsdWUgaW4gJGNvbG9yIHtcbiAgLnZ1aUJhZGdlLS0jeyRjb2xvck5hbWV9IHtcbiAgICBjb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcImNvbG9yXCIpfSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAje21hcC5nZXQoJGNvbG9yVmFsdWUsIFwiYm9yZGVyLWNvbG9yXCIpfTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcblxuICAgICYudnVpQmFkZ2UtLWNsaWNrYWJsZTpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJjb2xvclwiKX07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCIudnVpQmFzZUJ1dHRvbkljb25Db250YWluZXIge1xuICAvLyBFbnN1cmVzIGN1c3RvbSBpY29ucyBhbmQgdmVydGljYWxseSBjZW50ZXJlZC5cbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi52dWlCYXNlQnV0dG9uTGlua1dyYXBwZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi52dWlCYXNlQnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogJHNpemVYeHM7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNoYWRvdzogJHNoYWRvd1NtYWxsU3RhcnQ7XG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvblNwZWVkO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udnVpQmFzZUJ1dHRvbi1pc0luZXJ0LFxuLnZ1aUJhc2VCdXR0b24taXNEaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi52dWlCYXNlQnV0dG9uLWlzRGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52dWlCYXNlQnV0dG9uLS1sZWZ0IHtcbiAgLnZ1aUJhc2VCdXR0b25JY29uQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6ICRzaXplWHM7XG4gIH1cbn1cblxuLnZ1aUJhc2VCdXR0b24tLXJpZ2h0IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gIC52dWlCYXNlQnV0dG9uSWNvbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6ICRzaXplWHM7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbi52dWlCYXNlQnV0dG9uLS1mdWxsV2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gU2l6ZVxuLnZ1aUJhc2VCdXR0b24tLXhzIHtcbiAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgcGFkZGluZzogJHNpemVYeHMgJHNpemVYcztcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4udnVpQmFzZUJ1dHRvbi0tcyB7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG4gIHBhZGRpbmc6ICRzaXplWHMgKiAwLjc1ICRzaXplWHM7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLnZ1aUJhc2VCdXR0b24tLW0ge1xuICBmb250LXNpemU6ICRmb250U2l6ZU1lZGl1bTtcbiAgcGFkZGluZzogJHNpemVYcyAkc2l6ZTtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuIiwiJHNoYWRvd1NtYWxsU3RhcnQ6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDBweCAwcHggMHB4O1xuJHNoYWRvd1NtYWxsRW5kOiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4udnVpQnV0dG9uUHJpbWFyeSB7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3dTbWFsbEVuZDtcbiAgfVxufVxuXG4vLyBDb2xvclxuJGNvbG9yOiAoXG4gIGFjY2VudDogKFxuICAgIFwiY29sb3JcIjogI2ZmZmZmZixcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogJGNvbG9yQWNjZW50XG4gICksXG4gIHByaW1hcnk6IChcbiAgICBcImNvbG9yXCI6ICNmZmZmZmYsXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvclByaW1hcnlcbiAgKSxcbiAgc3VjY2VzczogKFxuICAgIFwiY29sb3JcIjogI2ZmZmZmZixcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogJGNvbG9yU3VjY2Vzc1xuICApLFxuICBkYW5nZXI6IChcbiAgICBcImNvbG9yXCI6ICNmZmZmZmYsXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvckRhbmdlclxuICApLFxuICB3YXJuaW5nOiAoXG4gICAgXCJjb2xvclwiOiAjZmZmZmZmLFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JXYXJuaW5nXG4gICksXG4gIG5ldXRyYWw6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvclRleHQsXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvclRleHQsIDAuOSlcbiAgKSxcbiAgc3ViZHVlZDogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yU3ViZHVlZCxcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yU3ViZHVlZCwgMC45KVxuICApXG4pO1xuXG5AZWFjaCAkY29sb3JOYW1lLCAkY29sb3JWYWx1ZSBpbiAkY29sb3Ige1xuICAudnVpQnV0dG9uUHJpbWFyeS0tI3skY29sb3JOYW1lfSB7XG4gICAgY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJjb2xvclwiKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcImJhY2tncm91bmQtY29sb3JcIil9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpfTtcblxuICAgICYudnVpQnV0dG9uUHJpbWFyeS1pc1NlbGVjdGVkIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCA4cHggLTJweCwgaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggNHB4IC0zcHg7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlIFwic2FzczptYXBcIjtcblxuLnZ1aUJ1dHRvblNlY29uZGFyeSB7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3dTbWFsbEVuZDtcbiAgfVxufVxuXG4udnVpQnV0dG9uU2Vjb25kYXJ5LS1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG59XG5cbi8vIENvbG9yXG4kY29sb3I6IChcbiAgYWNjZW50OiAoXG4gICAgXCJib3JkZXItY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yQWNjZW50LCAwLjUpLFxuICAgIFwiY29sb3JcIjogJGNvbG9yQWNjZW50XG4gICksXG4gIHByaW1hcnk6IChcbiAgICBcImJvcmRlci1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JQcmltYXJ5LCAwLjUpLFxuICAgIFwiY29sb3JcIjogJGNvbG9yUHJpbWFyeVxuICApLFxuICBzdWNjZXNzOiAoXG4gICAgXCJib3JkZXItY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yU3VjY2VzcywgMC41KSxcbiAgICBcImNvbG9yXCI6ICRjb2xvclN1Y2Nlc3NcbiAgKSxcbiAgZGFuZ2VyOiAoXG4gICAgXCJib3JkZXItY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yRGFuZ2VyLCAwLjUpLFxuICAgIFwiY29sb3JcIjogJGNvbG9yRGFuZ2VyXG4gICksXG4gIHdhcm5pbmc6IChcbiAgICBcImJvcmRlci1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JXYXJuaW5nLCAwLjUpLFxuICAgIFwiY29sb3JcIjogJGNvbG9yV2FybmluZ1xuICApLFxuICBuZXV0cmFsOiAoXG4gICAgXCJib3JkZXItY29sb3JcIjogJGJvcmRlckNvbG9yLFxuICAgIFwiY29sb3JcIjogJGNvbG9yVGV4dFxuICApLFxuICBzdWJkdWVkOiAoXG4gICAgXCJib3JkZXItY29sb3JcIjogJGJvcmRlckNvbG9yTGlnaHQsXG4gICAgXCJjb2xvclwiOiAkY29sb3JTdWJkdWVkXG4gIClcbik7XG5cbkBlYWNoICRjb2xvck5hbWUsICRjb2xvclZhbHVlIGluICRjb2xvciB7XG4gIC52dWlCdXR0b25TZWNvbmRhcnktLSN7JGNvbG9yTmFtZX0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJib3JkZXItY29sb3JcIil9O1xuICAgIGNvbG9yOiAje21hcC5nZXQoJGNvbG9yVmFsdWUsIFwiY29sb3JcIil9O1xuXG4gICAgJi52dWlCdXR0b25TZWNvbmRhcnktaXNTZWxlY3RlZCB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCAycHg7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlIFwic2FzczptYXBcIjtcblxuLnZ1aUJ1dHRvblRlcnRpYXJ5IHtcbiAgcGFkZGluZy1sZWZ0OiAkc2l6ZVhzO1xuICBwYWRkaW5nLXJpZ2h0OiAkc2l6ZVhzO1xuXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi52dWlCdXR0b25UZXJ0aWFyeS1ub1BhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vLyBDb2xvclxuJGNvbG9yOiAoXG4gIGFjY2VudDogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yQWNjZW50LFxuICAgIFwic2VsZWN0ZWQtY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yQWNjZW50LCAwLjkpXG4gICksXG4gIHByaW1hcnk6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvclByaW1hcnksXG4gICAgXCJzZWxlY3RlZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JQcmltYXJ5LCAwLjkpXG4gICksXG4gIHN1Y2Nlc3M6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvclN1Y2Nlc3MsXG4gICAgXCJzZWxlY3RlZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JTdWNjZXNzLCAwLjkpXG4gICksXG4gIGRhbmdlcjogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yRGFuZ2VyLFxuICAgIFwic2VsZWN0ZWQtY29sb3JcIjogdHJhbnNwYXJlbnRpemUoJGNvbG9yRGFuZ2VyLCAwLjkpXG4gICksXG4gIHdhcm5pbmc6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvcldhcm5pbmcsXG4gICAgXCJzZWxlY3RlZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JXYXJuaW5nLCAwLjkpXG4gICksXG4gIG5ldXRyYWw6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvclRleHQsXG4gICAgXCJzZWxlY3RlZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JUZXh0LCAwLjkpXG4gICksXG4gIHN1YmR1ZWQ6IChcbiAgICBcImNvbG9yXCI6ICRjb2xvclN1YmR1ZWQsXG4gICAgXCJzZWxlY3RlZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JTdWJkdWVkLCAwLjkpXG4gIClcbik7XG5cbkBlYWNoICRjb2xvck5hbWUsICRjb2xvclZhbHVlIGluICRjb2xvciB7XG4gIC52dWlCdXR0b25UZXJ0aWFyeS0tI3skY29sb3JOYW1lfSB7XG4gICAgY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJjb2xvclwiKX07XG5cbiAgICAmLnZ1aUJ1dHRvblRlcnRpYXJ5LWlzU2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcInNlbGVjdGVkLWNvbG9yXCIpfTtcbiAgICB9XG4gIH1cbn1cbiIsIi52dWlJY29uQnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZVh4cztcbiAgcGFkZGluZzogJHNpemVYeHM7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4vLyBDb2xvclxuJGNvbG9yOiAoXG4gIGFjY2VudDogJGNvbG9yQWNjZW50LFxuICBwcmltYXJ5OiAkY29sb3JQcmltYXJ5LFxuICBzdWNjZXNzOiAkY29sb3JTdWNjZXNzLFxuICB3YXJuaW5nOiAkY29sb3JXYXJuaW5nLFxuICBkYW5nZXI6ICRjb2xvckRhbmdlcixcbiAgbmV1dHJhbDogJGNvbG9yVGV4dCxcbiAgc3ViZHVlZDogJGNvbG9yU3ViZHVlZFxuKTtcblxuQGVhY2ggJGNvbG9yTmFtZSwgJGNvbG9yVmFsdWUgaW4gJGNvbG9yIHtcbiAgLnZ1aUljb25CdXR0b24tLSN7JGNvbG9yTmFtZX0ge1xuICAgIGNvbG9yOiAkY29sb3JWYWx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICRjb2xvclZhbHVlLCAkYW1vdW50OiAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAkY29sb3JWYWx1ZSwgJGFtb3VudDogMC45KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2l6ZVxuLnZ1aUljb25CdXR0b24tLXhzIHtcbiAgcGFkZGluZzogJHNpemVYeHM7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnZ1aUljb25CdXR0b24tLXMge1xuICBwYWRkaW5nOiAkc2l6ZVhzICogMC43NTtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4udnVpSWNvbkJ1dHRvbi0tbSB7XG4gIHBhZGRpbmc6ICRzaXplWHM7XG4gIGhlaWdodDogMzRweDtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4udnVpQ2FsbG91dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udnVpQ2FsbG91dC0tbSB7XG4gIHBhZGRpbmc6ICRzaXplTTtcblxuICAudnVpQ2FsbG91dF9fY2xvc2VCdXR0b24ge1xuICAgIG1hcmdpbjogLSRzaXplTSAqIDAuNTtcbiAgfVxufVxuXG4udnVpQ2FsbG91dC0tcyB7XG4gIHBhZGRpbmc6ICRzaXplUztcblxuICAudnVpQ2FsbG91dF9fY2xvc2VCdXR0b24ge1xuICAgIG1hcmdpbjogLSRzaXplUyAqIDAuNTtcbiAgfVxufVxuXG4vLyBDb2xvclxuJGNvbG9yOiAoXG4gIGFjY2VudDogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JBY2NlbnQsIDAuOSlcbiAgKSxcbiAgcHJpbWFyeTogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JQcmltYXJ5TGlnaHRTaGFkZVxuICApLFxuICBzdWNjZXNzOiAoXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHRyYW5zcGFyZW50aXplKCRjb2xvclN1Y2Nlc3MsIDAuOSlcbiAgKSxcbiAgd2FybmluZzogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JXYXJuaW5nLCAwLjkpXG4gICksXG4gIGRhbmdlcjogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JEYW5nZXJMaWdodFNoYWRlXG4gICksXG4gIG5ldXRyYWw6IChcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogJGNvbG9yTGlnaHRTaGFkZVxuICApXG4pO1xuXG5AZWFjaCAkY29sb3JOYW1lLCAkY29sb3JWYWx1ZSBpbiAkY29sb3Ige1xuICAudnVpQ2FsbG91dC0tI3skY29sb3JOYW1lfSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcImJhY2tncm91bmQtY29sb3JcIil9O1xuICB9XG59XG4iLCIudnVpQ2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplWHM7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcbn1cblxuLnZ1aUNhcmQtLWludGVyYWN0aXZlIHtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4udnVpQ2FyZC0tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC52dWlDYXJkX19jb250ZW50LFxuICAudnVpQ2FyZF9fZm9vdGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4udnVpQ2FyZC0tbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIC52dWlDYXJkX19jb250ZW50LFxuICAudnVpQ2FyZF9fZm9vdGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5cbi52dWlDYXJkX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICRzaXplTSAkc2l6ZUw7XG59XG5cbi52dWlDYXJkX19mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXJDb2xvckxpZ2h0O1xuICBwYWRkaW5nOiAkc2l6ZU0gJHNpemVMO1xufVxuXG4udnVpQ2FyZC0tcyB7XG4gIC52dWlDYXJkX19jb250ZW50LFxuICAudnVpQ2FyZF9fZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAkc2l6ZU0gJHNpemVMO1xuICB9XG59XG5cbi52dWlDYXJkLS1tIHtcbiAgLnZ1aUNhcmRfX2NvbnRlbnQsXG4gIC52dWlDYXJkX19mb290ZXIge1xuICAgIHBhZGRpbmc6ICRzaXplTCAkc2l6ZVhsO1xuICB9XG59XG5cbi52dWlDYXJkLS1sIHtcbiAgLnZ1aUNhcmRfX2NvbnRlbnQsXG4gIC52dWlDYXJkX19mb290ZXIge1xuICAgIHBhZGRpbmc6ICRzaXplWGwgJHNpemVYeGw7XG4gIH1cbn1cbiIsIi52dWlDaGF0VHVybiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG4gIHBhZGRpbmc6ICRzaXplTCAkc2l6ZVMgJHNpemVMICRzaXplTDtcbiAgbWFyZ2luLXJpZ2h0OiAkc2l6ZVh4cztcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAkc2l6ZVh4cztcbiAgfVxufVxuXG4udnVpQ2hhdFR1cm4gKyAudnVpQ2hhdFR1cm4ge1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi52dWlDaGF0UXVlc3Rpb24ge1xuICBjb2xvcjogJGNvbG9yQWNjZW50O1xuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBtYXJnaW4tYm90dG9tOiAkc2l6ZVhzO1xufVxuXG4udnVpQ2hhdFF1ZXN0aW9uLS1lcnJvciB7XG4gIGNvbG9yOiAkY29sb3JEYW5nZXI7XG59XG5cbi52dWlDaGF0X19pbnNwZWN0QnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLSRzaXplWHhzO1xufVxuXG4udnVpQ2hhdEFuc3dlciB7XG4gIGNvbG9yOiAkY29sb3JGdWxsU2hhZGU7XG59XG4iLCJAaW1wb3J0IFwiY2hhdFR1cm5cIjtcblxuJG1pbkNoYXRIZWlnaHQ6IDYwMHB4O1xuJG1pbkNoYXRXaWR0aDogNjAwcHg7XG5cbi52dWlDaGF0QnV0dG9uLFxuLnZ1aUNoYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAkc2l6ZVh4cztcbiAgYm90dG9tOiAkc2l6ZVh4cztcbiAgei1pbmRleDogJGNoYXRaSW5kZXg7XG59XG5cbi52dWlDaGF0QnV0dG9uLWlzSGlkZGVuLFxuLnZ1aUNoYXQtLWNsb3NlZCB7XG4gIC8vIElmIHdlIHVzZWQgZGlzcGxheTogbm9uZSwgdGhlbiB0aGUgYnV0dG9uJ3MgYW5pbWF0aW9uIHdvdWxkIHBsYXkgZXZlcnlcbiAgLy8gdGltZSB0aGUgYnV0dG9uIGlzIHNob3duLlxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0aGUgYnV0dG9ucyBpbnNpZGUgdGhlIGhlYWRlciBhcmUgdmlzaWJsZSBmb3IgYW4gZXh0cmEgZnJhbWVcbiAgLy8gYWZ0ZXIgY2xvc2luZyB0aGUgY2hhdC4gVGhpcyBmaXhlcyB0aGF0IGZsaWNrZXIuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi52dWlDaGF0QnV0dG9uIHtcbiAgcGFkZGluZzogJHNpemVYcyAkc2l6ZVM7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG4gIGNvbG9yOiAkY29sb3JUZXh0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQcmltYXJ5TGlnaHRTaGFkZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcbiAgYW5pbWF0aW9uOiBwb3BVcCAwLjRzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgMTtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDNweCA3cHggLTNweDtcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcG9wVXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi52dWlDaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplWHM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJG1pbkNoYXRIZWlnaHQpIHtcbiAgICAmIHtcbiAgICAgIGJvdHRvbTogJHNpemVYeHM7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogI3skc2l6ZVh4c30pO1xuICAgIH1cblxuICAgIC52dWlDaGF0X19jb252ZXJzYXRpb24ge1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWluQ2hhdFdpZHRoKSB7XG4gICAgJiB7XG4gICAgICByaWdodDogJHNpemVYeHM7XG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiAjeyRzaXplWHhzfSk7XG4gICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnZ1aUNoYXQtLXRhbGwge1xuICBib3R0b206ICRzaXplWHhzO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogI3skc2l6ZVh4c30pO1xuXG4gIC52dWlDaGF0X19jb252ZXJzYXRpb24ge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnZ1aUNoYXQtLWZ1bGxTY3JlZW4ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogI3skc2l6ZVh4c30pO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIgKiAjeyRzaXplWHhzfSk7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXG4gIC52dWlDaGF0X19jb252ZXJzYXRpb24ge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnZ1aUNoYXRfX2hlYWRlciB7XG4gIHBhZGRpbmc6ICRzaXplWHMgJHNpemVTO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHJpbWFyeUxpZ2h0U2hhZGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XG4gIC8vIEVuc3VyZSBzaGFkb3cgb3ZlcmxhcHMgb24gdG9wIG9mIGNvbnZlcnNhdGlvbi5cbiAgei1pbmRleDogMjtcbn1cblxuLnZ1aUNoYXRfX2NvbnZlcnNhdGlvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi52dWlDaGF0X19pbnRyb2R1Y3Rpb24ge1xuICBwYWRkaW5nOiAkc2l6ZU0gJHNpemVMIDA7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG4gIGNvbG9yOiAkY29sb3JGdWxsU2hhZGU7XG59XG5cbi52dWlDaGF0X190dXJucyB7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG59XG5cbi52dWlDaGF0X19jb252ZXJzYXRpb25BY3Rpb25zIHtcbiAgcGFkZGluZzogJHNpemVTO1xufVxuXG4udnVpQ2hhdF9faW5wdXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlckNvbG9yTGlnaHQ7XG4gIHBhZGRpbmc6ICRzaXplWHMgJHNpemVTO1xufVxuXG4udnVpQ2hhdFBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6ICRzaXplWHhzO1xuICBsZWZ0OiAkc2l6ZVh4cztcbiAgcmlnaHQ6ICRzaXplWHhzO1xuICBib3R0b206ICRzaXplWHhzO1xuICBwYWRkaW5nOiAkc2l6ZVh4cyAkc2l6ZVM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbn1cbiIsIi52dWlDb2RlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogJHNpemVYeHMgc29saWQgJGNvbG9yTWVkaXVtU2hhZGU7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xufVxuXG4udnVpQ29kZUNvbnRhaW5lci0tZnVsbEhlaWdodCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi52dWlDb2RlQ29weUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6ICRzaXplWHhzO1xuICB0b3A6ICRzaXplWHhzO1xufVxuXG4udnVpQ29kZVByZSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi52dWlDb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkc2l6ZU0gJHNpemVMO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JMaWdodFNoYWRlO1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZm9udC1zaXplOiAkZm9udFNpemVTbWFsbCAhaW1wb3J0YW50O1xufVxuIiwiQHVzZSBcInNhc3M6bWFwXCI7XG5cbiRkcmF3ZXJXaWR0aDogNjgwcHg7XG5cbkBrZXlmcmFtZXMgZHJhd2VySW4ge1xuICAwJSB7XG4gICAgcmlnaHQ6IC0kZHJhd2VyV2lkdGg7XG4gIH1cblxuICAxMDAlIHtcbiAgICByaWdodDogMDtcbiAgfVxufVxuXG4udnVpRHJhd2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6ICRkcmF3ZXJXaWR0aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIHotaW5kZXg6ICRkcmF3ZXJaSW5kZXg7XG4gIGFuaW1hdGlvbjogZHJhd2VySW4gJHRyYW5zaXRpb25TcGVlZCBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XG59XG5cbi52dWlEcmF3ZXJIZWFkZXIge1xuICBwYWRkaW5nOiAkc2l6ZUwgJHNpemVMO1xufVxuXG4udnVpRHJhd2VyQ29udGVudCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG59XG5cbi52dWlEcmF3ZXJDb250ZW50X19pbm5lciB7XG4gIHBhZGRpbmc6ICRzaXplTCAkc2l6ZUw7XG59XG5cbi8vIENvbG9yXG4kY29sb3I6IChcbiAgcHJpbWFyeTogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JQcmltYXJ5TGlnaHRTaGFkZSxcbiAgICBcImNvbG9yXCI6ICRjb2xvclRleHRcbiAgKSxcbiAgZGFuZ2VyOiAoXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvckRhbmdlckxpZ2h0U2hhZGUsXG4gICAgXCJjb2xvclwiOiAkY29sb3JEYW5nZXJcbiAgKVxuKTtcblxuQGVhY2ggJGNvbG9yTmFtZSwgJGNvbG9yVmFsdWUgaW4gJGNvbG9yIHtcbiAgLnZ1aURyYXdlci0tI3skY29sb3JOYW1lfSB7XG4gICAgLnZ1aURyYXdlckhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje21hcC5nZXQoJGNvbG9yVmFsdWUsIFwiYmFja2dyb3VuZC1jb2xvclwiKX07XG4gICAgICBjb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcImNvbG9yXCIpfTtcbiAgICB9XG4gIH1cbn1cbiIsIi52dWlGbGV4Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi52dWlGbGV4Q29udGFpbmVyLS1mdWxsV2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZ1aUZsZXhDb250YWluZXItLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIGFsaWduSXRlbXNcbiRhbGlnbkl0ZW1zOiAoXG4gIGFsaWduSXRlbXNCYXNlbGluZTogYmFzZWxpbmUsXG4gIGFsaWduSXRlbXNDZW50ZXI6IGNlbnRlcixcbiAgYWxpZ25JdGVtc0VuZDogZW5kLFxuICBhbGlnbkl0ZW1zU3RhcnQ6IHN0YXJ0LFxuICBhbGlnbkl0ZW1zU3RyZXRjaDogc3RyZXRjaFxuKTtcblxuQGVhY2ggJGFsaWduSXRlbXNOYW1lLCAkYWxpZ25JdGVtc1ZhbHVlIGluICRhbGlnbkl0ZW1zIHtcbiAgLnZ1aUZsZXhDb250YWluZXItLSN7JGFsaWduSXRlbXNOYW1lfSB7XG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zVmFsdWU7XG4gIH1cbn1cblxuLy8gZGlyZWN0aW9uXG4kZGlyZWN0aW9uOiAoXG4gIGRpcmVjdGlvbkNvbHVtbjogY29sdW1uLFxuICBkaXJlY3Rpb25Db2x1bW5SZXZlcnNlOiBjb2x1bW4tcmV2ZXJzZSxcbiAgZGlyZWN0aW9uUm93OiByb3csXG4gIGRpcmVjdGlvblJvd1JldmVyc2U6IHJvdy1yZXZlcnNlXG4pO1xuXG5AZWFjaCAkZGlyZWN0aW9uTmFtZSwgJGRpcmVjdGlvblZhbHVlIGluICRkaXJlY3Rpb24ge1xuICAudnVpRmxleENvbnRhaW5lci0tI3skZGlyZWN0aW9uTmFtZX0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uVmFsdWU7XG4gIH1cbn1cblxuLy8ganVzdGlmeUNvbnRlbnRcbiRqdXN0aWZ5Q29udGVudDogKFxuICBqdXN0aWZ5Q29udGVudENlbnRlcjogY2VudGVyLFxuICBqdXN0aWZ5Q29udGVudEVuZDogZW5kLFxuICBqdXN0aWZ5Q29udGVudFN0YXJ0OiBzdGFydCxcbiAganVzdGlmeUNvbnRlbnRTcGFjZUFyb3VuZDogc3BhY2UtYXJvdW5kLFxuICBqdXN0aWZ5Q29udGVudFNwYWNlQmV0d2Vlbjogc3BhY2UtYmV0d2VlbixcbiAganVzdGlmeUNvbnRlbnRTcGFjZUV2ZW5seTogc3BhY2UtZXZlbmx5XG4pO1xuXG5AZWFjaCAkanVzdGlmeUNvbnRlbnROYW1lLCAkanVzdGlmeUNvbnRlbnRWYWx1ZSBpbiAkanVzdGlmeUNvbnRlbnQge1xuICAudnVpRmxleENvbnRhaW5lci0tI3skanVzdGlmeUNvbnRlbnROYW1lfSB7XG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnRWYWx1ZTtcbiAgfVxufVxuXG4vLyBzcGFjaW5nXG4kc3BhY2luZzogKFxuICBzcGFjaW5nTm9uZTogMCxcbiAgc3BhY2luZ1h4czogJHNpemVYeHMsXG4gIHNwYWNpbmdYczogJHNpemVYcyxcbiAgc3BhY2luZ1M6ICRzaXplUyxcbiAgc3BhY2luZ006ICRzaXplTSxcbiAgc3BhY2luZ0w6ICRzaXplTCxcbiAgc3BhY2luZ1hsOiAkc2l6ZVhsLFxuICBzcGFjaW5nWHhsOiAkc2l6ZVh4bFxuKTtcblxuQGVhY2ggJHNwYWNpbmdOYW1lLCAkc3BhY2luZ1ZhbHVlIGluICRzcGFjaW5nIHtcbiAgLnZ1aUZsZXhDb250YWluZXItLSN7JHNwYWNpbmdOYW1lfSB7XG4gICAgbWFyZ2luOiAtJHNwYWNpbmdWYWx1ZSAqIDAuNTtcblxuICAgICYgPiAudnVpRmxleEl0ZW0ge1xuICAgICAgbWFyZ2luOiAkc3BhY2luZ1ZhbHVlICogMC41O1xuICAgIH1cbiAgfVxufVxuIiwiLnZ1aUZsZXhJdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi52dWlGbGV4SXRlbS0tdHJ1bmNhdGUge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi8vIGFsaWduSXRlbXNcbiRhbGlnbkl0ZW1zOiAoXG4gIGFsaWduSXRlbXNCYXNlbGluZTogYmFzZWxpbmUsXG4gIGFsaWduSXRlbXNDZW50ZXI6IGNlbnRlcixcbiAgYWxpZ25JdGVtc0VuZDogZW5kLFxuICBhbGlnbkl0ZW1zU3RhcnQ6IHN0YXJ0LFxuICBhbGlnbkl0ZW1zU3RyZXRjaDogc3RyZXRjaFxuKTtcblxuQGVhY2ggJGFsaWduSXRlbXNOYW1lLCAkYWxpZ25JdGVtc1ZhbHVlIGluICRhbGlnbkl0ZW1zIHtcbiAgLnZ1aUZsZXhJdGVtLS0jeyRhbGlnbkl0ZW1zTmFtZX0ge1xuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtc1ZhbHVlO1xuICB9XG59XG5cbi8vIEdyb3dcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAge1xuICAudnVpRmxleEl0ZW0tLWZsZXhHcm93I3skaX0ge1xuICAgIGZsZXgtZ3JvdzogJGk7XG4gIH1cbn1cblxuLnZ1aUZsZXhJdGVtLS1mbGV4R3Jvd05vbmUge1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG59XG5cbi8vIFNocmlua1xuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMCB7XG4gIC52dWlGbGV4SXRlbS0tZmxleFNocmluayN7JGl9IHtcbiAgICBmbGV4LXNocmluazogJGk7XG4gIH1cbn1cblxuLnZ1aUZsZXhJdGVtLS1mbGV4U2hyaW5rTm9uZSB7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyBCYXNpc1xuJGJhc2lzOiAoXG4gIGF1dG86IGF1dG8sXG4gIGNvbnRlbnQ6IGNvbnRlbnQsXG4gIGZpbGw6IGZpbGwsXG4gIG1heENvbnRlbnQ6IG1heC1jb250ZW50LFxuICBtaW5Db250ZW50OiBtaW4tY29udGVudCxcbiAgbm9uZTogMFxuKTtcblxuQGVhY2ggJGJhc2lzTmFtZSwgJGJhc2lzVmFsdWUgaW4gJGJhc2lzIHtcbiAgLnZ1aUZsZXhJdGVtLS0jeyRiYXNpc05hbWV9IHtcbiAgICBmbGV4LWJhc2lzOiAkYmFzaXNWYWx1ZTtcbiAgfVxufVxuIiwiLnZ1aUNoZWNrYm94TGFiZWwge1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xufVxuIiwiLnZ1aUlucHV0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJHNpemVYeHM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck1lZGl1bVNoYWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xufVxuXG4udnVpSW5wdXQtLW0ge1xuICBwYWRkaW5nOiAkc2l6ZVhzICRzaXplO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xufVxuXG4udnVpSW5wdXQtLWwge1xuICBwYWRkaW5nOiAkc2l6ZVMgJHNpemVNO1xuICBmb250LXNpemU6ICRmb250U2l6ZUxhcmdlO1xufVxuXG4udnVpSW5wdXQtLWZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udnVpSW5wdXQtaXNJbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3JEYW5nZXI7XG59XG4iLCIudnVpTGFiZWwge1xuICBmb250LXNpemU6ICRsYWJlbEZvbnRTaXplO1xuICBmb250LXdlaWdodDogJGxhYmVsRm9udFdlaWdodDtcbiAgY29sb3I6ICRsYWJlbENvbG9yO1xufVxuIiwiLnZ1aVJhZGlvQnV0dG9uTGFiZWwge1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xufVxuIiwiLnZ1aVNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAkc2l6ZUwgKiAxMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogJHNpemVYeHM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yTWVkaXVtU2hhZGU7XG4gICAgY29sb3I6ICRjb2xvckZ1bGxTaGFkZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udnVpU2VsZWN0X19jYXJldCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDEycHg7XG59XG5cbi52dWlTZWxlY3QtLW0ge1xuICBzZWxlY3Qge1xuICAgIHBhZGRpbmc6ICRzaXplWHMgJHNpemU7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLnZ1aVNlbGVjdF9fY2FyZXQge1xuICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgfVxufVxuXG4udnVpU2VsZWN0LS1sIHtcbiAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAkc2l6ZVMgJHNpemVNO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplTGFyZ2U7XG4gICAgcGFkZGluZy1yaWdodDogNDhweDtcbiAgfVxuXG4gIC52dWlTZWxlY3RfX2NhcmV0IHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTRweCk7XG4gIH1cbn1cblxuLnZ1aVNlbGVjdC1pc0ludmFsaWQge1xuICBzZWxlY3Qge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yRGFuZ2VyO1xuICB9XG59XG4iLCIudnVpU3VwZXJSYWRpb0dyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAkc2l6ZVhzO1xufVxuXG4udnVpU3VwZXJSYWRpb0J1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogJHNpemVYcztcbiAgcGFkZGluZzogJHNpemVTICRzaXplTDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvblNwZWVkO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICRjb2xvclRleHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAkY29sb3JUZXh0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvclByaW1hcnlMaWdodFNoYWRlO1xuICB9XG59XG4iLCIudnVpVGV4dEFyZWEge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZVh4cztcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yTWVkaXVtU2hhZGU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBwYWRkaW5nOiAkc2l6ZVM7XG59XG5cbi52dWlUZXh0QXJlYS0tZnVsbFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIudnVpSG9yaXpvbnRhbFJ1bGUge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi52dWlJY29uIHtcbiAgLy8gUmVtb3ZlIGV4dHJhIHNwYWNlIGF0IGJvdHRvbSBvZiBpY29uLlxuICBsaW5lLWhlaWdodDogMDtcbn1cblxuLnZ1aUljb24tLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuJGNvbG9yczogKFxuICBhY2NlbnQ6ICRjb2xvckFjY2VudCxcbiAgcHJpbWFyeTogJGNvbG9yUHJpbWFyeSxcbiAgc3VjY2VzczogJGNvbG9yU3VjY2VzcyxcbiAgd2FybmluZzogJGNvbG9yV2FybmluZyxcbiAgZGFuZ2VyOiAkY29sb3JEYW5nZXIsXG4gIHN1YmR1ZWQ6ICRjb2xvclN1YmR1ZWQsXG4gIG5ldXRyYWw6ICRjb2xvclRleHQsXG4gIGVtcHR5OiAjZmZmZmZmXG4pO1xuXG5AZWFjaCAkY29sb3JOYW1lLCAkY29sb3JWYWx1ZSBpbiAkY29sb3JzIHtcbiAgLnZ1aUljb24tLSN7JGNvbG9yTmFtZX0ge1xuICAgIGNvbG9yOiAkY29sb3JWYWx1ZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIudnVpSW5mb1RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvckxpZ2h0O1xuXG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JMaWdodFNoYWRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyQ29sb3JMaWdodDtcbiAgfVxuXG4gIHRib2R5IHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yTGlnaHQ7XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemVTbWFsbDtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICAgIHBhZGRpbmc6ICRzaXplWHMgJHNpemVTO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0ZCB7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbi52dWlJbmZvVGFibGUtLXBhZGRpbmdYeHMge1xuICB0ZCB7XG4gICAgcGFkZGluZzogJHNpemVYeHMgJHNpemVTO1xuICB9XG59XG5cbi52dWlJbmZvVGFibGUtLXBhZGRpbmdYcyB7XG4gIHRkIHtcbiAgICBwYWRkaW5nOiAkc2l6ZVhzICRzaXplUztcbiAgfVxufVxuXG4udnVpSW5mb1RhYmxlLS1wYWRkaW5nUyB7XG4gIHRkIHtcbiAgICBwYWRkaW5nOiAkc2l6ZVMgJHNpemVTO1xuICB9XG59XG5cbi52dWlJbmZvVGFibGVSb3ctLXNlY3Rpb25IZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JMaWdodFNoYWRlO1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi52dWlJbmZvVGFibGVSb3ctLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG59XG4iLCIudnVpTGluayB7XG4gIGNvbG9yOiAkY29sb3JQcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4udnVpTGluay0tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuIiwiLnZ1aUxpc3ROdW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZUw7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG4gIGNvbG9yOiAkY29sb3JTdWJkdWVkO1xuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICBsaW5lLWhlaWdodDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZ1aUxpc3ROdW1iZXItLW0ge1xuICB3aWR0aDogJHNpemVNO1xuICBoZWlnaHQ6ICRzaXplTTtcbiAgcGFkZGluZzogJHNpemVNO1xuICBmb250LXNpemU6ICRmb250U2l6ZU1lZGl1bTtcbn1cblxuLnZ1aUxpc3ROdW1iZXItLXMge1xuICB3aWR0aDogJHNpemVTO1xuICBoZWlnaHQ6ICRzaXplUztcbiAgcGFkZGluZzogJHNpemVTO1xuICBmb250LXNpemU6ICRmb250U2l6ZVNtYWxsO1xufVxuXG4udnVpTGlzdE51bWJlci1pc0NvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yQWNjZW50TGlnaHRTaGFkZTtcbiAgY29sb3I6ICRjb2xvckFjY2VudDtcbn1cbiIsIi52dWlNZW51IHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZVhzO1xufVxuXG4udnVpTWVudUl0ZW0gKyAudnVpTWVudUl0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xufVxuXG4udnVpTWVudUl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICRzaXplUyAkc2l6ZUw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAkc2hhZG93U21hbGxTdGFydDtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGNvbG9yVGV4dDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93U21hbGxFbmQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAkY29sb3JUZXh0O1xuICB9XG59XG4iLCJAdXNlIFwic2FzczptYXBcIjtcblxuJG1vZGFsV2lkdGg6IDUwMHB4O1xuXG5Aa2V5ZnJhbWVzIG1vZGFsSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4udnVpTW9kYWxDb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogbW9kYWxJbiAkdHJhbnNpdGlvblNwZWVkIGN1YmljLWJlemllcigwLCAxLCAxLCAxKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi52dWlNb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6ICRtb2RhbFdpZHRoO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIHotaW5kZXg6ICRtb2RhbFpJbmRleDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnZ1aU1vZGFsSGVhZGVyIHtcbiAgcGFkZGluZzogJHNpemVNO1xufVxuXG4udnVpTW9kYWxDb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xufVxuXG4udnVpTW9kYWxDb250ZW50X19pbm5lciB7XG4gIHBhZGRpbmc6ICRzaXplTCAkc2l6ZU0gJHNpemVYeGw7XG59XG5cbi8vIENvbG9yXG4kY29sb3I6IChcbiAgcHJpbWFyeTogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JQcmltYXJ5TGlnaHRTaGFkZSxcbiAgICBcImNvbG9yXCI6ICRjb2xvclRleHRcbiAgKSxcbiAgZGFuZ2VyOiAoXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvckRhbmdlckxpZ2h0U2hhZGUsXG4gICAgXCJjb2xvclwiOiAkY29sb3JEYW5nZXJcbiAgKVxuKTtcblxuQGVhY2ggJGNvbG9yTmFtZSwgJGNvbG9yVmFsdWUgaW4gJGNvbG9yIHtcbiAgLnZ1aU1vZGFsLS0jeyRjb2xvck5hbWV9IHtcbiAgICAudnVpTW9kYWxIZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcImJhY2tncm91bmQtY29sb3JcIil9O1xuICAgICAgY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJjb2xvclwiKX07XG4gICAgfVxuICB9XG59XG4iLCIudnVpTm90aWZpY2F0aW9uTGlzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogJG5vdGlmaWNhdGlvbnNaSW5kZXg7XG4gIGFuaW1hdGlvbjogcG9wVG9wIDAuNHMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSAxO1xufVxuXG4udnVpTm90aWZpY2F0aW9uTGlzdF9fbm90aWZpY2F0aW9ucyB7XG4gIHBhZGRpbmc6ICRzaXplWHhzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc2l6ZU07XG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvblNwZWVkO1xufVxuXG4udnVpTm90aWZpY2F0aW9uTGlzdC0taGFzTWFueSB7XG4gIC52dWlOb3RpZmljYXRpb25MaXN0X19ub3RpZmljYXRpb25zIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc2l6ZVhzO1xuICB9XG59XG5cbi52dWlOb3RpZmljYXRpb25Db250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52dWlOb3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplUztcbiAgcGFkZGluZzogJHNpemVTO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgd2lkdGg6IDQyMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAwIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbn1cblxuLnZ1aU5vdGlmaWNhdGlvblBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBib3R0b206IDA7XG59XG5cbi52dWlOb3RpZmljYXRpb25QbGFjZWhvbGRlcjEtaXNWaXNpYmxlIHtcbiAgYm90dG9tOiAtJHNpemVYeHM7XG4gIGFuaW1hdGlvbjogcG9wQm90dG9tMSAwLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgMTtcbn1cblxuLnZ1aU5vdGlmaWNhdGlvblBsYWNlaG9sZGVyMi1pc1Zpc2libGUge1xuICBib3R0b206IC0kc2l6ZVh4cyAqIDEuNzU7XG4gIGFuaW1hdGlvbjogcG9wQm90dG9tMiAwLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgMTtcbn1cblxuQGtleWZyYW1lcyBwb3BUb3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBvcEJvdHRvbTEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwb3BCb3R0b20yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbiIsIi52dWlPcHRpb25zQnV0dG9uTGVmdCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4udnVpT3B0aW9uc0J1dHRvblJpZ2h0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbn1cblxuLy8gQ29sb3JcbiRjb2xvclByaW1hcnlCdXR0b246IChcbiAgYWNjZW50OiB0cmFuc3BhcmVudGl6ZSgkY29sb3JFbXB0eVNoYWRlLCAwLjUpLFxuICBwcmltYXJ5OiB0cmFuc3BhcmVudGl6ZSgkY29sb3JFbXB0eVNoYWRlLCAwLjUpLFxuICBzdWNjZXNzOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JFbXB0eVNoYWRlLCAwLjUpLFxuICBkYW5nZXI6IHRyYW5zcGFyZW50aXplKCRjb2xvckVtcHR5U2hhZGUsIDAuNSksXG4gIHdhcm5pbmc6IHRyYW5zcGFyZW50aXplKCRjb2xvckVtcHR5U2hhZGUsIDAuNSksXG4gIG5ldXRyYWw6IHRyYW5zcGFyZW50aXplKCRjb2xvclRleHQsIDAuOClcbik7XG5cbkBlYWNoICRjb2xvck5hbWUsICRjb2xvclZhbHVlIGluICRjb2xvclByaW1hcnlCdXR0b24ge1xuICAudnVpQnV0dG9uUHJpbWFyeS52dWlPcHRpb25zQnV0dG9uUmlnaHQtLSN7JGNvbG9yTmFtZX0ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkY29sb3JWYWx1ZTtcbiAgfVxufVxuXG4kY29sb1NlY29uZGFyeUJ1dHRvbjogKFxuICBhY2NlbnQ6IHRyYW5zcGFyZW50aXplKCRjb2xvckFjY2VudCwgMC43KSxcbiAgcHJpbWFyeTogdHJhbnNwYXJlbnRpemUoJGNvbG9yUHJpbWFyeSwgMC43KSxcbiAgc3VjY2VzczogdHJhbnNwYXJlbnRpemUoJGNvbG9yU3VjY2VzcywgMC43KSxcbiAgZGFuZ2VyOiB0cmFuc3BhcmVudGl6ZSgkY29sb3JEYW5nZXIsIDAuNyksXG4gIHdhcm5pbmc6IHRyYW5zcGFyZW50aXplKCRjb2xvcldhcm5pbmcsIDAuNyksXG4gIG5ldXRyYWw6IHRyYW5zcGFyZW50aXplKCRjb2xvclRleHQsIDAuOClcbik7XG5cbkBlYWNoICRjb2xvck5hbWUsICRjb2xvclZhbHVlIGluICRjb2xvU2Vjb25kYXJ5QnV0dG9uIHtcbiAgLnZ1aUJ1dHRvblNlY29uZGFyeS52dWlPcHRpb25zQnV0dG9uUmlnaHQtLSN7JGNvbG9yTmFtZX0ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkY29sb3JWYWx1ZTtcbiAgfVxufVxuIiwiQHVzZSBcInNhc3M6bWFwXCI7XG5cbi52dWlPcHRpb25zTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG59XG5cbi52dWlPcHRpb25zTGlzdC0tc2Nyb2xsYWJsZSB7XG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udnVpT3B0aW9uc0xpc3QtLXMge1xuICAudnVpT3B0aW9uc0xpc3RJdGVtIHtcbiAgICBwYWRkaW5nOiAoJHNpemVYeHMgKyAxcHgpICRzaXplWHM7XG4gIH1cbn1cblxuLnZ1aU9wdGlvbnNMaXN0LS1tIHtcbiAgLnZ1aU9wdGlvbnNMaXN0SXRlbSB7XG4gICAgcGFkZGluZzogKCRzaXplWHhzICsgMXB4KSAkc2l6ZVM7XG4gIH1cbn1cblxuLnZ1aU9wdGlvbnNMaXN0LS1sIHtcbiAgLnZ1aU9wdGlvbnNMaXN0SXRlbSB7XG4gICAgcGFkZGluZzogJHNpemVYcyAkc2l6ZVM7XG4gIH1cbn1cblxuLnZ1aU9wdGlvbnNMaXN0SXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4vLyBDb2xvclxuJGNvbG9yOiAoXG4gIGFjY2VudDogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yQWNjZW50LFxuICAgIFwic2VsZWN0ZWQtY29sb3JcIjogJGNvbG9yQWNjZW50TGlnaHRTaGFkZVxuICApLFxuICBwcmltYXJ5OiAoXG4gICAgXCJjb2xvclwiOiAkY29sb3JQcmltYXJ5LFxuICAgIFwic2VsZWN0ZWQtY29sb3JcIjogJGNvbG9yUHJpbWFyeUxpZ2h0U2hhZGVcbiAgKSxcbiAgc3VjY2VzczogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yU3VjY2VzcyxcbiAgICBcInNlbGVjdGVkLWNvbG9yXCI6ICRjb2xvclN1Y2Nlc3NMaWdodFNoYWRlXG4gICksXG4gIGRhbmdlcjogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yRGFuZ2VyLFxuICAgIFwic2VsZWN0ZWQtY29sb3JcIjogJGNvbG9yRGFuZ2VyTGlnaHRTaGFkZVxuICApLFxuICB3YXJuaW5nOiAoXG4gICAgXCJjb2xvclwiOiAkY29sb3JXYXJuaW5nLFxuICAgIFwic2VsZWN0ZWQtY29sb3JcIjogJGNvbG9yV2FybmluZ0xpZ2h0U2hhZGVcbiAgKSxcbiAgbmV1dHJhbDogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yVGV4dCxcbiAgICBcInNlbGVjdGVkLWNvbG9yXCI6ICRjb2xvckxpZ2h0U2hhZGVcbiAgKVxuKTtcblxuQGVhY2ggJGNvbG9yTmFtZSwgJGNvbG9yVmFsdWUgaW4gJGNvbG9yIHtcbiAgLnZ1aU9wdGlvbnNMaXN0SXRlbS0tI3skY29sb3JOYW1lfSB7XG4gICAgY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJjb2xvclwiKX07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAje21hcC5nZXQoJGNvbG9yVmFsdWUsIFwiY29sb3JcIil9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcInNlbGVjdGVkLWNvbG9yXCIpfTtcbiAgICB9XG4gIH1cbn1cbiIsIi52dWlQb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIHotaW5kZXg6ICRwb3BvdmVyWkluZGV4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xufVxuXG4udnVpT3B0aW9uc0xpc3RJdGVtX19zZWxlY3RlZC0tdW5zZWxlY3RlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnZ1aVBvcG92ZXJUaXRsZSB7XG4gIHBhZGRpbmc6ICRzaXplWHMgJHNpemVTO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBjb2xvcjogJGNvbG9yRGFya2VyU2hhZGU7XG59XG5cbi52dWlQb3BvdmVyQ29udGVudCB7XG4gIHBhZGRpbmc6ICRzaXplWHhzIDA7XG59XG5cbi52dWlQb3BvdmVyQ29udGVudC0tcGFkZGluZyB7XG4gIHBhZGRpbmc6ICRzaXplUztcbn1cbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4udnVpUHJvZ3Jlc3NCYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplWHhzO1xuICBoZWlnaHQ6ICRzaXplUztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZ1aVByb2dyZXNzQmFyX19lbXB0eSxcbi52dWlQcm9ncmVzc0Jhcl9fYmFyLFxuLnZ1aVByb2dyZXNzQmFyX19vdXRsaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udnVpUHJvZ3Jlc3NCYXJfX2VtcHR5IHtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMnB4IDJweDtcbn1cblxuLnZ1aVByb2dyZXNzQmFyX19iYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcbiAgei1pbmRleDogMTtcbn1cblxuLnZ1aVByb2dyZXNzQmFyX19vdXRsaW5lIHtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXJhZGl1czogJHNpemVYeHM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKCMwMDAwMDAsIDAuMSk7XG59XG5cbi8vIENvbG9yXG4kY29sb3I6IChcbiAgYWNjZW50OiAoXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvckFjY2VudFxuICApLFxuICBwcmltYXJ5OiAoXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvclByaW1hcnlcbiAgKSxcbiAgc3VjY2VzczogKFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JTdWNjZXNzXG4gICksXG4gIHdhcm5pbmc6IChcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogJGNvbG9yV2FybmluZ1xuICApLFxuICBkYW5nZXI6IChcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogJGNvbG9yRGFuZ2VyXG4gICksXG4gIG5ldXRyYWw6IChcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogJGNvbG9yRGFya1NoYWRlXG4gIClcbik7XG5cbkBlYWNoICRjb2xvck5hbWUsICRjb2xvclZhbHVlIGluICRjb2xvciB7XG4gIC52dWlQcm9ncmVzc0Jhci0tI3skY29sb3JOYW1lfSB7XG4gICAgLnZ1aVByb2dyZXNzQmFyX19iYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI3ttYXAuZ2V0KCRjb2xvclZhbHVlLCBcImJhY2tncm91bmQtY29sb3JcIil9O1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSBcInNhc3M6bWFwXCI7XG5cbi52dWlQcm9tcHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplTTtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnZ1aVByb21wdC0tc3BlZWNoQnViYmxlIHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbGVmdDogNDhweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci13aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG59XG5cbi52dWlQcm9tcHQtLWludGVyYWN0aXZlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yQWNjZW50TGlnaHRTaGFkZTtcbiAgICBjb2xvcjogJGNvbG9yQWNjZW50O1xuICB9XG59XG5cbi8vIENvbG9yXG4kY29sb3I6IChcbiAgZGFuZ2VyOiAoXG4gICAgXCJjb2xvclwiOiAkY29sb3JEYW5nZXIsXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6ICRjb2xvckRhbmdlckxpZ2h0U2hhZGVcbiAgKSxcbiAgbmV1dHJhbDogKFxuICAgIFwiY29sb3JcIjogJGNvbG9yRGFya1NoYWRlLFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiAkY29sb3JMaWdodFNoYWRlXG4gIClcbik7XG5cbkBlYWNoICRjb2xvck5hbWUsICRjb2xvclZhbHVlIGluICRjb2xvciB7XG4gIC52dWlQcm9tcHQtLSN7JGNvbG9yTmFtZX0ge1xuICAgIGNvbG9yOiAje21hcC5nZXQoJGNvbG9yVmFsdWUsIFwiY29sb3JcIil9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICN7bWFwLmdldCgkY29sb3JWYWx1ZSwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpfTtcbiAgfVxufVxuXG4vLyBQYWRkaW5nXG4kcGFkZGluZzogKFxuICBwYWRkaW5nWHM6ICRzaXplWHMsXG4gIHBhZGRpbmdTOiAkc2l6ZVMsXG4gIHBhZGRpbmdNOiAkc2l6ZU0sXG4gIHBhZGRpbmdMOiAkc2l6ZUwsXG4gIHBhZGRpbmdYbDogJHNpemVYbCxcbiAgcGFkZGluZ1h4bDogJHNpemVYbCAqIDJcbik7XG5cbkBlYWNoICRwYWRkaW5nTmFtZSwgJHBhZGRpbmdWYWx1ZSBpbiAkcGFkZGluZyB7XG4gIC52dWlQcm9tcHQtLSN7JHBhZGRpbmdOYW1lfSB7XG4gICAgcGFkZGluZzogJHBhZGRpbmdWYWx1ZTtcbiAgfVxufVxuIiwiLnZ1aVNjcmVlbkJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6ICRzY3JlZW5CbG9ja1pJbmRleDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52dWlTY3JlZW5CbG9ja19fbWFzayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvckZ1bGxTaGFkZSwgMC40KTtcbn1cbiIsIi52dWlTZWFyY2hJbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZ1aVNlYXJjaElucHV0X19pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogJHNpemVTICRzaXplTTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yTWVkaXVtU2hhZGU7XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplWHM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3dTbWFsbFN0YXJ0O1xuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcbiAgb3V0bGluZS13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHggIWltcG9ydGFudDtcblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG4gICAgb3V0bGluZS1jb2xvcjogJGNvbG9yQWNjZW50ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvd1NtYWxsRW5kO1xuICB9XG59XG5cbi52dWlTZWFyY2hJbnB1dF9fc3VibWl0QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogJHNpemVTO1xuICBsaW5lLWhlaWdodDogMDsgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgYXBwbGllZCB0byBhbGwgYnV0dG9ucz9cbiAgY29sb3I6ICRjb2xvckRhcmtTaGFkZTtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvckFjY2VudDtcbiAgfVxufVxuXG4udnVpU2VhcmNoSW5wdXQtLW0ge1xuICAudnVpU2VhcmNoSW5wdXRfX2lucHV0IHtcbiAgICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICB9XG59XG5cbi52dWlTZWFyY2hJbnB1dC0tbCB7XG4gIC52dWlTZWFyY2hJbnB1dF9faW5wdXQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplTGFyZ2U7XG4gIH1cbn1cbiIsIi52dWlTZWFyY2hSZXN1bHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJiArICYge1xuICAgIG1hcmdpbi10b3A6ICRzaXplTDtcbiAgfVxufVxuXG4udnVpU2VhcmNoUmVzdWx0UG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC00MnB4O1xuICB0b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6ICRzaXplWHM7XG4gIGNvbG9yOiAkY29sb3JEYXJrU2hhZGU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogJHNpemVYcztcbiAgaGVpZ2h0OiAyM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25TcGVlZDtcbn1cblxuLnZ1aVNlYXJjaFJlc3VsdFBvc2l0aW9uLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvclByaW1hcnk7XG4gIGNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIudnVpU2VhcmNoU2VsZWN0SGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcbiAgcGFkZGluZzogJHNpemVNO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBjb2xvcjogJGNvbG9yRGFya2VyU2hhZGU7XG59XG5cbi52dWlTZWFyY2hTZWxlY3RfX3NlYXJjaCB7XG4gIHBhZGRpbmc6ICRzaXplWHhzICRzaXplWHM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG59XG4iLCIudnVpU3BhY2VyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbiRzaXplOiAoXG4gIHh4eHM6ICRzaXplWHh4cyxcbiAgeHhzOiAkc2l6ZVh4cyxcbiAgeHM6ICRzaXplWHMsXG4gIHM6ICRzaXplUyxcbiAgbTogJHNpemVNLFxuICBsOiAkc2l6ZUwsXG4gIHhsOiAkc2l6ZVhsLFxuICB4eGw6ICRzaXplWHhsXG4pO1xuXG5AZWFjaCAkc2l6ZU5hbWUsICRzaXplVmFsdWUgaW4gJHNpemUge1xuICAudnVpU3BhY2VyLS0jeyRzaXplTmFtZX0ge1xuICAgIGhlaWdodDogJHNpemVWYWx1ZTtcbiAgfVxufVxuIiwiJHNpemU6IChcbiAgeHM6ICRzaXplWHMgKiAyLFxuICBzOiAkc2l6ZVMgKiAyLFxuICBtOiAkc2l6ZU0gKiAyLFxuICBsOiAkc2l6ZUwgKiAyLFxuICB4bDogJHNpemVYbCAqIDIsXG4gIHh4bDogJHNpemVYeGwgKiAyLFxuICB4eHhsOiAkc2l6ZVh4bCAqIDIuNVxuKTtcblxuQGVhY2ggJHNpemVOYW1lLCAkc2l6ZVZhbHVlIGluICRzaXplIHtcbiAgLnZ1aVNwaW5uZXItLSN7JHNpemVOYW1lfSB7XG4gICAgd2lkdGg6ICRzaXplVmFsdWU7XG4gICAgaGVpZ2h0OiAkc2l6ZVZhbHVlO1xuICB9XG59XG5cbi52dWlTcGlubmVyX19hbmltYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLnZ1aVN1bW1hcnkge1xuICBmb250LXNpemU6ICRmb250U2l6ZU1lZGl1bTtcbn1cblxuLnZ1aVN1bW1hcnlDaXRhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnZ1aVN1bW1hcnlDaXRhdGlvbi1pc1NlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG59XG4iLCIudnVpVGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcblxuICB0aGVhZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgfVxuXG4gIHRib2R5IHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yTGlnaHQ7XG5cbiAgICAmLnZ1aVRhYmxlUm93LWlzQmVpbmdBY3RlZFVwb24sXG4gICAgJjpub3QoLnZ1aVRhYmxlUm93LS1pbmVydCk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICB9XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICAgIHBhZGRpbmc6ICRzaXplWHhzO1xuICB9XG5cbiAgdGQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG4gICAgcGFkZGluZzogJHNpemVYeHM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG59XG5cbi52dWlUYWJsZS0tZmx1aWQge1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG59XG5cbi52dWlUYWJsZUNlbGwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnZ1aVRhYmxlQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi52dWlUYWJsZU1hbnlQYWdlc1Rva2VuIHtcbiAgcGFkZGluZzogMCAkc2l6ZVhzO1xufVxuXG4udnVpVGFibGVNYW55UGFnZXNUb2tlbi1pc0Rpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4udnVpVGFibGVIZWFkZXJTZWxlY3Qge1xuICB3aWR0aDogMzJweDtcbn1cblxuLnZ1aVRhYmxlSGVhZGVyQWN0aW9ucyB7XG4gIHdpZHRoOiA0MnB4O1xufVxuXG4udnVpVGFibGVDb250ZW50IHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuIiwiLnZ1aVRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi52dWlUYWJzLS1zIHtcbiAgLnZ1aVRhYiB7XG4gICAgcGFkZGluZzogJHNpemVYcyAkc2l6ZVM7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiAgfVxufVxuXG4udnVpVGFicy0tbSB7XG4gIC52dWlUYWIge1xuICAgIHBhZGRpbmc6ICRzaXplWHMgJHNpemVNO1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplTWVkaXVtO1xuICB9XG59XG5cbi52dWlUYWJzX190YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZ1aVRhYnNfX2FwcGVuZGVkQ29udGVudCB7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMDtcbn1cblxuLnZ1aVRhYiB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiAkY29sb3JTdWJkdWVkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvblNwZWVkO1xuICBib3gtc2hhZG93OiB0cmFuc3BhcmVudCAwcHggMXB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogJGNvbG9yQWNjZW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yQWNjZW50LCAwLjkpO1xuICB9XG5cbiAgJi52dWlUYWItaXNBY3RpdmUge1xuICAgIGNvbG9yOiAkY29sb3JUZXh0O1xuICAgIGJveC1zaGFkb3c6ICRjb2xvckFjY2VudCAwcHggMXB4IDBweDtcbiAgfVxufVxuIiwiJHRvZ2dsZVdpZHRoOiAkc2l6ZUwgKiAxLjU7XG4kdG9nZ2xlSGVpZ2h0OiAkc2l6ZU0gKiAxLjI1O1xuJGJ1dHRvbk9mZnNldDogMnB4O1xuJGJ1dHRvblNpemU6ICR0b2dnbGVIZWlnaHQgLSAoJGJ1dHRvbk9mZnNldCAqIDIpO1xuXG4udnVpVG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAkdG9nZ2xlV2lkdGg7XG4gIGhlaWdodDogJHRvZ2dsZUhlaWdodDtcbn1cblxuLnZ1aVRvZ2dsZV9faW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuXG4gICY6Y2hlY2tlZCArIC52dWlUb2dnbGVfX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSArIC52dWlUb2dnbGVfX2J1dHRvbiB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50aXplKCRjb2xvclByaW1hcnksIDAuMjUpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOmNoZWNrZWQgKyAudnVpVG9nZ2xlX19idXR0b246YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRvZ2dsZVdpZHRoIC0gJGJ1dHRvblNpemUgLSAoJGJ1dHRvbk9mZnNldCAqIDIpKTtcbiAgfVxufVxuXG4udnVpVG9nZ2xlX19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JNZWRpdW1TaGFkZTtcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25TcGVlZDtcbiAgYm9yZGVyLXJhZGl1czogJGJ1dHRvblNpemU7XG4gIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMnB4IDJweDtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAkYnV0dG9uU2l6ZTtcbiAgICB3aWR0aDogJGJ1dHRvblNpemU7XG4gICAgbGVmdDogJGJ1dHRvbk9mZnNldDtcbiAgICBib3R0b206ICRidXR0b25PZmZzZXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvblNwZWVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuIiwiJHRyYW5zaXRpb25TcGVlZDogMC4ycztcbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4udnVpVGl0bGUge1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuJHNpemU6IChcbiAgeHhzOiAoXG4gICAgc2l6ZTogJGZvbnRTaXplU21hbGwsXG4gICAgbGluZS1oZWlnaHQ6IDEuNCxcbiAgICB3ZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsLFxuICAgIGNvbG9yOiAkY29sb3JUZXh0XG4gICksXG4gIHhzOiAoXG4gICAgc2l6ZTogJGxhYmVsRm9udFNpemUsXG4gICAgbGluZS1oZWlnaHQ6IDEuNCxcbiAgICB3ZWlnaHQ6ICRsYWJlbEZvbnRXZWlnaHQsXG4gICAgY29sb3I6ICRsYWJlbENvbG9yXG4gICksXG4gIHM6IChcbiAgICBzaXplOiAkZm9udFNpemVMYXJnZSxcbiAgICBsaW5lLWhlaWdodDogMS4zLFxuICAgIHdlaWdodDogJGZvbnRXZWlnaHRCb2xkLFxuICAgIGNvbG9yOiAkY29sb3JTdWJkdWVkXG4gICksXG4gIG06IChcbiAgICBzaXplOiAkZm9udFNpemVYTGFyZ2UsXG4gICAgd2VpZ2h0OiAkZm9udFdlaWdodEJvbGQsXG4gICAgbGluZS1oZWlnaHQ6IDEuMixcbiAgICBjb2xvcjogJGNvbG9yVGV4dFxuICApLFxuICBsOiAoXG4gICAgc2l6ZTogJGZvbnRTaXplWHhMYXJnZSxcbiAgICB3ZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsLFxuICAgIGxpbmUtaGVpZ2h0OiAxLjEsXG4gICAgY29sb3I6ICRjb2xvclRleHRcbiAgKSxcbiAgeGw6IChcbiAgICBzaXplOiAkZm9udFNpemVYeHhMYXJnZSxcbiAgICB3ZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsLFxuICAgIGxpbmUtaGVpZ2h0OiAxLFxuICAgIGNvbG9yOiAkY29sb3JUZXh0XG4gICksXG4gIHh4bDogKFxuICAgIHNpemU6ICRmb250U2l6ZVh4eExhcmdlLFxuICAgIGxpbmUtaGVpZ2h0OiAxLFxuICAgIHdlaWdodDogJGZvbnRXZWlnaHRCb2xkLFxuICAgIGNvbG9yOiAkY29sb3JUZXh0XG4gIClcbik7XG5cbkBlYWNoICRzaXplTmFtZSwgJHNpemVWYWx1ZSBpbiAkc2l6ZSB7XG4gIC52dWlUaXRsZS0tI3skc2l6ZU5hbWV9IHtcbiAgICBmb250LXNpemU6ICN7bWFwLmdldCgkc2l6ZVZhbHVlLCBcInNpemVcIil9O1xuICAgIGxpbmUtaGVpZ2h0OiAje21hcC5nZXQoJHNpemVWYWx1ZSwgXCJzaXplXCIpfTtcbiAgICBmb250LXdlaWdodDogI3ttYXAuZ2V0KCRzaXplVmFsdWUsIFwid2VpZ2h0XCIpfTtcbiAgICBjb2xvcjogI3ttYXAuZ2V0KCRzaXplVmFsdWUsIFwiY29sb3JcIil9O1xuICB9XG59XG5cbiRhbGlnbjogbGVmdCwgY2VudGVyLCByaWdodDtcblxuQGVhY2ggJGFsaWduVmFsdWUgaW4gJGFsaWduIHtcbiAgLnZ1aVRpdGxlLS0jeyRhbGlnblZhbHVlfSB7XG4gICAgdGV4dC1hbGlnbjogI3skYWxpZ25WYWx1ZX07XG4gIH1cbn1cbiIsIi52dWlUZXh0IHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgfVxuXG4gIG9sIHtcbiAgICBsaXN0LXN0eWxlOiBhdXRvO1xuICB9XG5cbiAgdWwsXG4gIG9sIHtcbiAgICBtYXJnaW4tbGVmdDogJHNpemVNO1xuICAgIG1hcmdpbi1ib3R0b206ICRzaXplWHM7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgfVxufVxuXG4udnVpVGV4dC0tdHJ1bmNhdGUge1xuICBAaW5jbHVkZSB0cnVuY2F0ZVRleHQ7XG59XG5cbkBtaXhpbiBkZWZpbmVUZXh0U3R5bGVzKCRmb250U2l6ZSkge1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAkc2l6ZVhzO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5cbiRzaXplOiAoXG4gIHhzOiAkZm9udFNpemVTbWFsbCxcbiAgczogJGZvbnRTaXplU3RhbmRhcmQsXG4gIG06ICRmb250U2l6ZU1lZGl1bSxcbiAgbDogJGZvbnRTaXplTGFyZ2Vcbik7XG5cbkBlYWNoICRzaXplTmFtZSwgJGZvbnRTaXplIGluICRzaXplIHtcbiAgLnZ1aVRleHQtLSN7JHNpemVOYW1lfSB7XG4gICAgQGluY2x1ZGUgZGVmaW5lVGV4dFN0eWxlcygkZm9udFNpemUpO1xuICB9XG59XG5cbiRhbGlnbjogbGVmdCwgY2VudGVyLCByaWdodDtcblxuQGVhY2ggJGFsaWduVmFsdWUgaW4gJGFsaWduIHtcbiAgLnZ1aVRleHQtLSN7JGFsaWduVmFsdWV9IHtcbiAgICB0ZXh0LWFsaWduOiAjeyRhbGlnblZhbHVlfTtcbiAgfVxufVxuIiwiJGNvbG9yOiAoXG4gIGFjY2VudDogJGNvbG9yQWNjZW50LFxuICBwcmltYXJ5OiAkY29sb3JQcmltYXJ5LFxuICBzdWNjZXNzOiAkY29sb3JTdWNjZXNzLFxuICB3YXJuaW5nOiAkY29sb3JXYXJuaW5nLFxuICBkYW5nZXI6ICRjb2xvckRhbmdlcixcbiAgc3ViZHVlZDogJGNvbG9yU3ViZHVlZCxcbiAgbmV1dHJhbDogJGNvbG9yVGV4dFxuKTtcblxuQGVhY2ggJGNvbG9yTmFtZSwgJGNvbG9yVmFsdWUgaW4gJGNvbG9yIHtcbiAgLnZ1aVRleHRDb2xvci0tI3skY29sb3JOYW1lfSB7XG4gICAgY29sb3I6ICRjb2xvclZhbHVlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIiRtb2RhbFBhZGRpbmc6IDZ2aDtcblxuLnNlYXJjaE1vZGFsQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYW5pbWF0aW9uOiBtb2RhbEluIDAuMnMgY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDEpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAuc2VhcmNoTW9kYWwge1xuICAgIG1hcmdpbi10b3A6ICRtb2RhbFBhZGRpbmc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCRtb2RhbFBhZGRpbmcgKiAyKSk7XG4gICAgei1pbmRleDogJG1vZGFsWkluZGV4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XG4gICAgYm9yZGVyLXJhZGl1czogJHNpemVYcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNlYXJjaE1vZGFsUmVzdWx0cyB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgLnNlYXJjaE1vZGFsRm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIHBhZGRpbmc6IDAgJHNpemVNO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0U2hhZGU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAuc2VhcmNoTW9kYWxDb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuc2VhcmNoTW9kYWwge1xuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VhcmNoTW9kYWxSZXN1bHRzIHtcbiAgICAgIG92ZXJmbG93LXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuL3Z1aS9jb21wb25lbnRzL2luZGV4XCI7XG5AaW1wb3J0IFwiLi9zZWFyY2hNb2RhbFwiO1xuXG4vKipcbiAqIEEgb25lLW9mZiByZXNldCBmb3IgdGhlIGJ1dHRvbiBlbGVtZW50cy5cbiAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5zdHlsZVdyYXBwZXIge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsXG4gICAgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xufVxuXG4uc2VhcmNoQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZVh4cztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIGNvbG9yOiAkY29sb3JUZXh0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICBmb250LXNpemU6ICRmb250U2l6ZU1lZGl1bTtcbiAgcGFkZGluZzogJHNpemVYcyAxcHggJHNpemVYcyAkc2l6ZVM7XG4gIGhlaWdodDogMzRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93ICR0cmFuc2l0aW9uU3BlZWQsIGJvcmRlci1jb2xvciAkdHJhbnNpdGlvblNwZWVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4uc2VhcmNoQnV0dG9uX19pbm5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnNlYXJjaEJ1dHRvblNob3J0Y3V0IHtcbiAgcGFkZGluZzogJHNpemVYcztcbiAgYm9yZGVyLXJhZGl1czogJHNpemVYeHhzO1xuICBmb250LXNpemU6ICRmb250U2l6ZVN0YW5kYXJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQcmltYXJ5TGlnaHRTaGFkZTtcbiAgY29sb3I6ICRjb2xvclByaW1hcnk7XG59XG5cbi5zZWFyY2hNb2RhbENvbnRhaW5lciB7XG4gIEBpbXBvcnQgXCIuL3Z1aS9fcmVzZXRcIjtcbiAgQGltcG9ydCBcIi4vc2VhcmNoSW5wdXRcIjtcbiAgQGltcG9ydCBcIi4vc2VhcmNoUmVzdWx0XCI7XG59XG4iLCJib2R5LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsXG4gICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIEVyaWMgTWV5ZXIncyByZXNldCAoaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8sIHYyLjAgfCAyMDExMDEyNikuICovXG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYVtocmVmXSxcbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlucHV0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMTsgLyogcmVxdWlyZWQgb24gaU9TICovXG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHIge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWluLWlubGluZS1zaXplOiBhdXRvO1xufVxuIiwiLnNlYXJjaElucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoSW5wdXRfX2lucHV0IHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAkc2l6ZUw7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckVtcHR5U2hhZGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogJHNoYWRvd1NtYWxsU3RhcnQ7XG4gIG91dGxpbmUtd2lkdGg6IDFweDtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbiAgZm9udC1zaXplOiAkZm9udFNpemVMYXJnZTtcbiAgY29sb3I6ICRjb2xvclRleHQ7XG59XG5cbi5zZWFyY2hJbnB1dF9fc3VibWl0QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogJHNpemVNO1xuICBsaW5lLWhlaWdodDogMDsgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgYXBwbGllZCB0byBhbGwgYnV0dG9ucz9cbiAgY29sb3I6ICRjb2xvckRhcmtTaGFkZTtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvclByaW1hcnk7XG4gIH1cbn1cbiIsIi5zZWFyY2hSZXN1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogJHNpemVTICRzaXplTCAkc2l6ZVMgJHNpemVNO1xuICBib3JkZXItbGVmdDogJHNpemVTIHNvbGlkICRjb2xvckVtcHR5U2hhZGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJDb2xvckxpZ2h0O1xuXG4gICY6aG92ZXIsXG4gICYuaXNTZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcbiAgICBib3JkZXItbGVmdDogJHNpemVTIHNvbGlkICRjb2xvclByaW1hcnk7XG5cbiAgICAuc2VhcmNoUmVzdWx0VGl0bGUge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cblxuLnNlYXJjaFJlc3VsdFRpdGxlIHtcbiAgY29sb3I6ICRjb2xvclByaW1hcnk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206ICRzaXplWHhzO1xufVxuXG4uc2VhcmNoUmVzdWx0U25pcHBldCB7XG4gIGNvbG9yOiAkY29sb3JEYXJrZXJTaGFkZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ad));import{BrowserRouter as id}from"react-router-dom";import{Fragment as od,jsx as k1,jsxs as X5}from"react/jsx-runtime";var nd=(r,i)=>{let n=r.get(i);if(n)return decodeURIComponent(n)},zS=({customerId:r,apiKey:i,corpusId:n,apiUrl:o,historySize:l=10,styles:s})=>{var x0,Y1;let g=rd.useMemo(()=>(0,A8.default)(`${r}-${n}-${i}`),[r,n,i]),{addPreviousSearch:p}=I8(g,l),{fetchSearchResults:b,isLoading:H}=b8(r,n,i,o),[w,M]=z3(null),[y,L]=z3([]),[Z,m]=z3(!1),[B,V]=z3(""),F=N5(null),R=N5(null),N=N5(0);B3(()=>{let l1=new URLSearchParams(window.location.search),h1=nd(l1,"search");h1&&(m(!0),V(h1),O(h1))},[]);let O=async l1=>{if(l1.length===0)return;let h1=new URLSearchParams(window.location.search);h1.set("search",l1),history.replaceState(null,"","?"+h1.toString()),p(l1);let P=++N.current,p1=await b(l1);P===N.current&&(L(p1),M(null),R.current=null)};B3(()=>{let l1=setTimeout(()=>{O(B)},500);return()=>clearTimeout(l1)},[B]);let X=l1=>{let h1=l1.target.value;V(h1),h1.length===0&&c1()},q=ed(l1=>{let h1=l1.key;h1==="Enter"&&(l1.preventDefault(),w!==null?window.open(y[w].url,"_self"):O(B)),y.length!==0&&(h1==="ArrowDown"&&M(P=>P===null||P===y.length-1?0:P+1),h1==="ArrowUp"&&M(P=>P===null||P===0?y.length-1:P-1))},[y,w]),c1=()=>{L([]),M(null),R.current=null},A1=()=>{m(!1),V(""),c1();let l1=new URLSearchParams(window.location.search);l1.delete("search"),history.replaceState(null,"","?"+l1.toString())},I0=y.length===0?null:y.map((l1,h1)=>{let{snippet:{pre:P,text:p1,post:i0}}=l1;return k1("div",{ref:w===h1?R:void 0,children:k1(C8,{searchResult:l1,isSelected:w===h1,styles:s==null?void 0:s.resultItem})},`${P}${p1}${i0}`)});return B3(()=>{R.current&&R.current.scrollIntoView({behavior:"instant",block:"nearest"})},[R.current]),B3(()=>{let l1=h1=>{h1.key==="k"&&h1.ctrlKey&&m(!0)};return document.addEventListener("keyup",l1),()=>{document.removeEventListener("keyup",l1)}},[]),k1(od,{children:k1(id,{children:X5("div",{className:"styleWrapper",children:[k1("div",{ref:F,children:k1("button",{className:"searchButton",onClick:()=>m(!0),style:s==null?void 0:s.toggle,children:X5(n1,{alignItems:"center",spacing:"none",justifyContent:"spaceBetween",className:"searchButton__inner",children:[k1(a1,{children:X5(n1,{alignItems:"center",spacing:"xs",children:[k1(a1,{children:k1(v1,{children:k1(k4,{})})}),k1(a1,{children:k1(H1,{children:k1("div",{style:{fontSize:(Y1=(x0=s==null?void 0:s.toggle)==null?void 0:x0.fontSize)!=null?Y1:"inherit"},children:"Search"})})})]})}),k1("div",{className:"searchButtonShortcut",children:"Ctrl + K"})]})})}),k1(M8,{isLoading:H,searchValue:B,onChange:X,onKeyDown:q,isOpen:Z,resultsList:I0,onClose:A1,styles:{input:s==null?void 0:s.input,resultItem:s==null?void 0:s.input}})]})})})};export{zS as Search};
/*! Bundled license information:

js-md5/src/md5.js:
  (**
   * [js-md5]{@link https://github.com/emn178/js-md5}
   *
   * @namespace md5
   * @version 0.7.3
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   *)

js-sha1/src/sha1.js:
  (*
   * [js-sha1]{@link https://github.com/emn178/js-sha1}
   *
   * @version 0.6.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=index.esm.js.map
