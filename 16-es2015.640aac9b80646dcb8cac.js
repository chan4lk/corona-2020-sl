(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/TIM":function(t,n,e){"use strict";var r=e("AKWm");e.d(n,"a",(function(){return r.a}))},"8d86":function(t,n,e){"use strict";var r=e("ZQwz");e.d(n,"a",(function(){return r.a}));var i=e("iPFw");e.d(n,"b",(function(){return i.a}))},JLuJ:function(t,n,e){"use strict";e.r(n);var r=e("8Y7J");class i{}var u,l,a=e("pMnS"),s=e("056m"),o=e("ilI0"),f=e("iInd"),h=e("MKJQ"),c=e("sZkV"),d=e("TSSN"),b=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN};function p(){}function v(t,n){var e=new p;if(t instanceof p)t.each((function(t,n){e.set(n,t)}));else if(Array.isArray(t)){var r,i=-1,u=t.length;if(null==n)for(;++i<u;)e.set(i,t[i]);else for(;++i<u;)e.set(n(r=t[i],i,t),r)}else if(t)for(var l in t)e.set(l,t[l]);return e}1===(u=b).length&&(l=u,u=function(t,n){return b(l(t),n)}),Math.sqrt(50),Math.sqrt(10),Math.sqrt(2),e("X486"),Math,Math,Math,Math,e("6txh"),p.prototype=v.prototype={constructor:p,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var g=v;function y(){}var x=g.prototype;y.prototype=(function(t,n){var e=new y;if(t instanceof y)t.each((function(t){e.add(t)}));else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}).prototype={constructor:y,has:x.has,add:function(t){return this["$"+(t+="")]=t,this},remove:x.remove,clear:x.clear,values:x.keys,size:x.size,empty:x.empty,each:x.each};var C={},_={};function m(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function w(t){var n=Object.create(null),e=[];return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function M(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}var A=function(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],u=t.length,l=0,a=0,s=u<=0,o=!1;function f(){if(s)return _;if(o)return o=!1,C;var n,r,i=l;if(34===t.charCodeAt(i)){for(;l++<u&&34!==t.charCodeAt(l)||34===t.charCodeAt(++l););return(n=l)>=u?s=!0:10===(r=t.charCodeAt(l++))?o=!0:13===r&&(o=!0,10===t.charCodeAt(l)&&++l),t.slice(i+1,n-1).replace(/""/g,'"')}for(;l<u;){if(10===(r=t.charCodeAt(n=l++)))o=!0;else if(13===r)o=!0,10===t.charCodeAt(l)&&++l;else if(r!==e)continue;return t.slice(i,n)}return s=!0,t.slice(i,u)}for(10===t.charCodeAt(u-1)&&--u,13===t.charCodeAt(u-1)&&--u;(r=f())!==_;){for(var h=[];r!==C&&r!==_;)h.push(r),r=f();n&&null==(h=n(h,a++))||i.push(h)}return i}function i(n,e){return n.map((function(n){return e.map((function(t){return l(n[t])})).join(t)}))}function u(n){return n.map(l).join(t)}function l(t){return null==t?"":t instanceof Date?(i=(e=t).getUTCHours(),u=e.getUTCMinutes(),l=e.getUTCSeconds(),a=e.getUTCMilliseconds(),isNaN(e)?"Invalid Date":((r=e.getUTCFullYear())<0?"-"+M(-r,6):r>9999?"+"+M(r,6):M(r,4))+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(a?"T"+M(i,2)+":"+M(u,2)+":"+M(l,2)+"."+M(a,3)+"Z":l?"T"+M(i,2)+":"+M(u,2)+":"+M(l,2)+"Z":u||i?"T"+M(i,2)+":"+M(u,2)+"Z":"")):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t;var e,r,i,u,l,a}return{parse:function(t,n){var e,i,u=r(t,(function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=m(t);return function(r,i){return n(e(r),i,t)}}(t,n):m(t)}));return u.columns=i||[],u},parseRows:r,format:function(n,e){return null==e&&(e=w(n)),[e.map(l).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=w(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(u).join("\n")},formatRow:u,formatValue:l}},R=A(",").parse,N=A("\t").parse;function k(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var L=function(t,n){return fetch(t,n).then(k)};function U(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),L(n,e).then((function(n){return t(n,r)}))}}function T(t){return function(n,e){return L(n,e).then((function(n){return(new DOMParser).parseFromString(n,t)}))}}function j(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,u,l,a,s,o,f,h,c,d=t._root,b={data:r},p=t._x0,v=t._y0,g=t._x1,y=t._y1;if(!d)return t._root=b,t;for(;d.length;)if((o=n>=(u=(p+g)/2))?p=u:g=u,(f=e>=(l=(v+y)/2))?v=l:y=l,i=d,!(d=d[h=f<<1|o]))return i[h]=b,t;if(a=+t._x.call(null,d.data),s=+t._y.call(null,d.data),n===a&&e===s)return b.next=d,i?i[h]=b:t._root=b,t;do{i=i?i[h]=new Array(4):t._root=new Array(4),(o=n>=(u=(p+g)/2))?p=u:g=u,(f=e>=(l=(v+y)/2))?v=l:y=l}while((h=f<<1|o)==(c=(s>=l)<<1|a>=u));return i[c]=d,i[h]=b,t}U(R),U(N),T("application/xml"),T("text/html"),T("image/svg+xml");var P=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i};function q(t){return t[0]}function O(t){return t[1]}function E(t,n,e,r,i,u){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=u,this._root=void 0}function Y(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var I=(function(t,n,e){var r=new E(null==n?q:n,null==e?O:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}).prototype=E.prototype;I.copy=function(){var t,n,e=new E(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Y(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Y(n));return e},I.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return j(this.cover(n,e),n,e,t)},I.addAll=function(t){var n,e,r,i,u=t.length,l=new Array(u),a=new Array(u),s=1/0,o=1/0,f=-1/0,h=-1/0;for(e=0;e<u;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(l[e]=r,a[e]=i,r<s&&(s=r),r>f&&(f=r),i<o&&(o=i),i>h&&(h=i));if(s>f||o>h)return this;for(this.cover(s,o).cover(f,h),e=0;e<u;++e)j(this,l[e],a[e],t[e]);return this},I.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,u=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,u=(r=Math.floor(n))+1;else{for(var l,a,s=i-e,o=this._root;e>t||t>=i||r>n||n>=u;)switch(a=(n<r)<<1|t<e,(l=new Array(4))[a]=o,o=l,s*=2,a){case 0:i=e+s,u=r+s;break;case 1:e=i-s,u=r+s;break;case 2:i=e+s,r=u-s;break;case 3:e=i-s,r=u-s}this._root&&this._root.length&&(this._root=o)}return this._x0=e,this._y0=r,this._x1=i,this._y1=u,this},I.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},I.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},I.find=function(t,n,e){var r,i,u,l,a,s,o,f=this._x0,h=this._y0,c=this._x1,d=this._y1,b=[],p=this._root;for(p&&b.push(new P(p,f,h,c,d)),null==e?e=1/0:(f=t-e,h=n-e,c=t+e,d=n+e,e*=e);s=b.pop();)if(!(!(p=s.node)||(i=s.x0)>c||(u=s.y0)>d||(l=s.x1)<f||(a=s.y1)<h))if(p.length){var v=(i+l)/2,g=(u+a)/2;b.push(new P(p[3],v,g,l,a),new P(p[2],i,g,v,a),new P(p[1],v,u,l,g),new P(p[0],i,u,v,g)),(o=(n>=g)<<1|t>=v)&&(s=b[b.length-1],b[b.length-1]=b[b.length-1-o],b[b.length-1-o]=s)}else{var y=t-+this._x.call(null,p.data),x=n-+this._y.call(null,p.data),C=y*y+x*x;if(C<e){var _=Math.sqrt(e=C);f=t-_,h=n-_,c=t+_,d=n+_,r=p.data}}return r},I.remove=function(t){if(isNaN(u=+this._x.call(null,t))||isNaN(l=+this._y.call(null,t)))return this;var n,e,r,i,u,l,a,s,o,f,h,c,d=this._root,b=this._x0,p=this._y0,v=this._x1,g=this._y1;if(!d)return this;if(d.length)for(;;){if((o=u>=(a=(b+v)/2))?b=a:v=a,(f=l>=(s=(p+g)/2))?p=s:g=s,n=d,!(d=d[h=f<<1|o]))return this;if(!d.length)break;(n[h+1&3]||n[h+2&3]||n[h+3&3])&&(e=n,c=h)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[h]=i:delete n[h],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[c]=d:this._root=d),this):(this._root=i,this)},I.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},I.root=function(){return this._root},I.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},I.visit=function(t){var n,e,r,i,u,l,a=[],s=this._root;for(s&&a.push(new P(s,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(s=n.node,r=n.x0,i=n.y0,u=n.x1,l=n.y1)&&s.length){var o=(r+u)/2,f=(i+l)/2;(e=s[3])&&a.push(new P(e,o,f,u,l)),(e=s[2])&&a.push(new P(e,r,f,o,l)),(e=s[1])&&a.push(new P(e,o,i,u,f)),(e=s[0])&&a.push(new P(e,r,i,o,f))}return this},I.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new P(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var u,l=n.x0,a=n.y0,s=n.x1,o=n.y1,f=(l+s)/2,h=(a+o)/2;(u=i[0])&&e.push(new P(u,l,a,f,h)),(u=i[1])&&e.push(new P(u,f,a,s,h)),(u=i[2])&&e.push(new P(u,l,h,f,o)),(u=i[3])&&e.push(new P(u,f,h,s,o))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},I.x=function(t){return arguments.length?(this._x=t,this):this._x},I.y=function(t){return arguments.length?(this._y=t,this):this._y},e("xo8x"),e("dPRQ"),Math,Math.sqrt(5);var D=e("pD2Y"),$=function(){return Math.random()},z=(function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}($),function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var u;if(null!=r)u=r,r=null;else do{r=2*n()-1,u=2*n()-1,i=r*r+u*u}while(!i||i>1);return t+e*u*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}($)),J=(function t(n){function e(){var t=z.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}($),function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}($));function S(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}(function t(n){function e(t){var e=J.source(n)(t);return function(){return e()/t}}return e.source=t,e})($),function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}($);var F=Array.prototype.slice,K={name:"implicit"};e("6h3Y"),e("4xfg"),e("WFeF"),e("CbjS"),e("2TPD"),e("EjHT"),e("2Ynt"),e("2tFh"),e("oVo9"),e("lgMH"),e("sUwa"),e("dCyY"),e("s8O9"),e("LDjW"),e("Xt/6"),e("GAlb"),e("TCOF"),e("d65L");var H=e("GOKn"),X=(Object(H.a)((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()})),e("Jzny"),e("brLB"),e("Fzhe"));Object(H.a)((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*X.b)}),(function(t,n){return(n-t)/X.b}),(function(t){return t.getUTCHours()})),Object(H.a)((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*X.c)}),(function(t,n){return(n-t)/X.c}),(function(t){return t.getUTCMinutes()}));var B,V=e("42CK"),Z=(B=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map((function(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e})),Object(V.b)(B[B.length-1])),Q=e("/TIM"),W=e("8d86");function G(){this._=null}function tt(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function nt(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function et(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function rt(t){for(;t.L;)t=t.L;return t}e("sQjb"),G.prototype={constructor:G,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=rt(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(nt(this,e),e=(t=e).U),e.C=!1,r.C=!0,et(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(et(this,e),e=(t=e).U),e.C=!1,r.C=!0,nt(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,u=t.L,l=t.R;if(e=u?l?rt(l):u:l,i?i.L===t?i.L=e:i.R=e:this._=e,u&&l?(r=e.C,e.C=t.C,e.L=u,u.U=e,e!==l?(i=e.U,e.U=t.U,i.L=t=e.R,e.R=l,l.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,nt(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,et(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,nt(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,et(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,nt(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,et(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var it=G;function ut(t,n,e,r){var i=[null,null],u=Lt.push(i)-1;return i.left=t,i.right=n,e&&at(i,t,n,e),r&&at(i,n,t,r),Nt[t.index].halfedges.push(u),Nt[n.index].halfedges.push(u),i}function lt(t,n,e){var r=[n,e];return r.left=t,r}function at(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function st(t,n,e,r,i){var u,l=t[0],a=t[1],s=l[0],o=l[1],f=0,h=1,c=a[0]-s,d=a[1]-o;if(u=n-s,c||!(u>0)){if(u/=c,c<0){if(u<f)return;u<h&&(h=u)}else if(c>0){if(u>h)return;u>f&&(f=u)}if(u=r-s,c||!(u<0)){if(u/=c,c<0){if(u>h)return;u>f&&(f=u)}else if(c>0){if(u<f)return;u<h&&(h=u)}if(u=e-o,d||!(u>0)){if(u/=d,d<0){if(u<f)return;u<h&&(h=u)}else if(d>0){if(u>h)return;u>f&&(f=u)}if(u=i-o,d||!(u<0)){if(u/=d,d<0){if(u>h)return;u>f&&(f=u)}else if(d>0){if(u<f)return;u<h&&(h=u)}return!(f>0||h<1)||(f>0&&(t[0]=[s+f*c,o+f*d]),h<1&&(t[1]=[s+h*c,o+h*d]),!0)}}}}}function ot(t,n,e,r,i){var u=t[1];if(u)return!0;var l,a,s=t[0],o=t.left,f=t.right,h=o[0],c=o[1],d=f[0],b=f[1],p=(h+d)/2;if(b===c){if(p<n||p>=r)return;if(h>d){if(s){if(s[1]>=i)return}else s=[p,e];u=[p,i]}else{if(s){if(s[1]<e)return}else s=[p,i];u=[p,e]}}else if(a=(c+b)/2-(l=(h-d)/(b-c))*p,l<-1||l>1)if(h>d){if(s){if(s[1]>=i)return}else s=[(e-a)/l,e];u=[(i-a)/l,i]}else{if(s){if(s[1]<e)return}else s=[(i-a)/l,i];u=[(e-a)/l,e]}else if(c<b){if(s){if(s[0]>=r)return}else s=[n,l*n+a];u=[r,l*r+a]}else{if(s){if(s[0]<n)return}else s=[r,l*r+a];u=[n,l*n+a]}return t[0]=s,t[1]=u,!0}function ft(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function ht(t,n){return n[+(n.left!==t.site)]}function ct(t,n){return n[+(n.left===t.site)]}var dt,bt=[];function pt(){tt(this),this.x=this.y=this.arc=this.site=this.cy=null}function vt(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,u=e.site;if(r!==u){var l=i[0],a=i[1],s=r[0]-l,o=r[1]-a,f=u[0]-l,h=u[1]-a,c=2*(s*h-o*f);if(!(c>=-Tt)){var d=s*s+o*o,b=f*f+h*h,p=(h*d-o*b)/c,v=(s*b-f*d)/c,g=bt.pop()||new pt;g.arc=t,g.site=i,g.x=p+l,g.y=(g.cy=v+a)+Math.sqrt(p*p+v*v),t.circle=g;for(var y=null,x=kt._;x;)if(g.y<x.y||g.y===x.y&&g.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}kt.insert(y,g),y||(dt=g)}}}}function gt(t){var n=t.circle;n&&(n.P||(dt=n.N),kt.remove(n),bt.push(n),tt(n),t.circle=null)}var yt=[];function xt(){tt(this),this.edge=this.site=this.circle=null}function Ct(t){var n=yt.pop()||new xt;return n.site=t,n}function _t(t){gt(t),Rt.remove(t),yt.push(t),tt(t)}function mt(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],u=t.P,l=t.N,a=[t];_t(t);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<Ut&&Math.abs(r-s.circle.cy)<Ut;)u=s.P,a.unshift(s),_t(s),s=u;a.unshift(s),gt(s);for(var o=l;o.circle&&Math.abs(e-o.circle.x)<Ut&&Math.abs(r-o.circle.cy)<Ut;)l=o.N,a.push(o),_t(o),o=l;a.push(o),gt(o);var f,h=a.length;for(f=1;f<h;++f)at((o=a[f]).edge,(s=a[f-1]).site,o.site,i);(o=a[h-1]).edge=ut((s=a[0]).site,o.site,null,i),vt(s),vt(o)}function wt(t){for(var n,e,r,i,u=t[0],l=t[1],a=Rt._;a;)if((r=Mt(a,l)-u)>Ut)a=a.L;else{if(!((i=u-At(a,l))>Ut)){r>-Ut?(n=a.P,e=a):i>-Ut?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}!function(t){Nt[t.index]={site:t,halfedges:[]}}(t);var s=Ct(t);if(Rt.insert(n,s),n||e){if(n===e)return gt(n),e=Ct(n.site),Rt.insert(s,e),s.edge=e.edge=ut(n.site,s.site),vt(n),void vt(e);if(e){gt(n),gt(e);var o=n.site,f=o[0],h=o[1],c=t[0]-f,d=t[1]-h,b=e.site,p=b[0]-f,v=b[1]-h,g=2*(c*v-d*p),y=c*c+d*d,x=p*p+v*v,C=[(v*y-d*x)/g+f,(c*x-p*y)/g+h];at(e.edge,o,b,C),s.edge=ut(o,t,null,C),e.edge=ut(t,b,null,C),vt(n),vt(e)}else s.edge=ut(n.site,s.site)}}function Mt(t,n){var e=t.site,r=e[0],i=e[1],u=i-n;if(!u)return r;var l=t.P;if(!l)return-1/0;var a=(e=l.site)[0],s=e[1],o=s-n;if(!o)return a;var f=a-r,h=1/u-1/o,c=f/o;return h?(-c+Math.sqrt(c*c-2*h*(f*f/(-2*o)-s+o/2+i-u/2)))/h+r:(r+a)/2}function At(t,n){var e=t.N;if(e)return Mt(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var Rt,Nt,kt,Lt,Ut=1e-6,Tt=1e-12;function jt(t,n){return n[1]-t[1]||n[0]-t[0]}function Pt(t,n){var e,r,i,u=t.sort(jt).pop();for(Lt=[],Nt=new Array(t.length),Rt=new it,kt=new it;;)if(i=dt,u&&(!i||u[1]<i.y||u[1]===i.y&&u[0]<i.x))u[0]===e&&u[1]===r||(wt(u),e=u[0],r=u[1]),u=t.pop();else{if(!i)break;mt(i.arc)}if(function(){for(var t,n,e,r,i=0,u=Nt.length;i<u;++i)if((t=Nt[i])&&(r=(n=t.halfedges).length)){var l=new Array(r),a=new Array(r);for(e=0;e<r;++e)l[e]=e,a[e]=ft(t,Lt[n[e]]);for(l.sort((function(t,n){return a[n]-a[t]})),e=0;e<r;++e)a[e]=n[l[e]];for(e=0;e<r;++e)n[e]=a[e]}}(),n){var l=+n[0][0],a=+n[0][1],s=+n[1][0],o=+n[1][1];!function(t,n,e,r){for(var i,u=Lt.length;u--;)ot(i=Lt[u],t,n,e,r)&&st(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Ut||Math.abs(i[0][1]-i[1][1])>Ut)||delete Lt[u]}(l,a,s,o),function(t,n,e,r){var i,u,l,a,s,o,f,h,c,d,b,p,v=Nt.length,g=!0;for(i=0;i<v;++i)if(u=Nt[i]){for(l=u.site,a=(s=u.halfedges).length;a--;)Lt[s[a]]||s.splice(a,1);for(a=0,o=s.length;a<o;)b=(d=ct(u,Lt[s[a]]))[0],p=d[1],h=(f=ht(u,Lt[s[++a%o]]))[0],c=f[1],(Math.abs(b-h)>Ut||Math.abs(p-c)>Ut)&&(s.splice(a,0,Lt.push(lt(l,d,Math.abs(b-t)<Ut&&r-p>Ut?[t,Math.abs(h-t)<Ut?c:r]:Math.abs(p-r)<Ut&&e-b>Ut?[Math.abs(c-r)<Ut?h:e,r]:Math.abs(b-e)<Ut&&p-n>Ut?[e,Math.abs(h-e)<Ut?c:n]:Math.abs(p-n)<Ut&&b-t>Ut?[Math.abs(c-n)<Ut?h:t,n]:null))-1),++o);o&&(g=!1)}if(g){var y,x,C,_=1/0;for(i=0,g=null;i<v;++i)(u=Nt[i])&&(C=(y=(l=u.site)[0]-t)*y+(x=l[1]-n)*x)<_&&(_=C,g=u);if(g){var m=[t,n],w=[t,r],M=[e,r],A=[e,n];g.halfedges.push(Lt.push(lt(l=g.site,m,w))-1,Lt.push(lt(l,w,M))-1,Lt.push(lt(l,M,A))-1,Lt.push(lt(l,A,m))-1)}}for(i=0;i<v;++i)(u=Nt[i])&&(u.halfedges.length||delete Nt[i])}(l,a,s,o)}this.edges=Lt,this.cells=Nt,Rt=kt=Lt=Nt=null}function qt(t,n,e){this.k=t,this.x=n,this.y=e}Pt.prototype={constructor:Pt,polygons:function(){var t=this.edges;return this.cells.map((function(n){var e=n.halfedges.map((function(e){return ht(n,t[e])}));return e.data=n.site.data,e}))},triangles:function(){var t=[],n=this.edges;return this.cells.forEach((function(e,r){if(u=(i=e.halfedges).length)for(var i,u,l,a,s,o,f=e.site,h=-1,c=n[i[u-1]],d=c.left===f?c.right:c.left;++h<u;)l=d,d=(c=n[i[h]]).left===f?c.right:c.left,l&&d&&r<l.index&&r<d.index&&((a=f)[0]-(o=d)[0])*((s=l)[1]-a[1])-(a[0]-s[0])*(o[1]-a[1])<0&&t.push([f.data,l.data,d.data])})),t},links:function(){return this.edges.filter((function(t){return t.right})).map((function(t){return{source:t.left.data,target:t.right.data}}))},find:function(t,n,e){for(var r,i,u=this,l=u._found||0,a=u.cells.length;!(i=u.cells[l]);)if(++l>=a)return null;var s=t-i.site[0],o=n-i.site[1],f=s*s+o*o;do{i=u.cells[r=l],l=null,i.halfedges.forEach((function(e){var r=u.edges[e],a=r.left;if(a!==i.site&&a||(a=r.right)){var s=t-a[0],o=n-a[1],h=s*s+o*o;h<f&&(f=h,l=a.index)}}))}while(null!==l);return u._found=r,null==e||f<=e*e?i.site:null}},e("tU+D"),e("znUM"),e("AWXE"),e("4k54"),e("AKWm"),e("YJZE"),qt.prototype={constructor:qt,scale:function(t){return 1===t?this:new qt(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new qt(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new qt(1,0,0);class Ot{constructor(t){this.translate=t,this.data=[],this.margin={top:20,right:20,bottom:30,left:50},this.width=900-this.margin.left-this.margin.right,this.height=500-this.margin.top-this.margin.bottom,this.radius=Math.min(this.width,this.height)/2}ngOnInit(){this.initSvg(),this.drawPie()}initSvg(){this.color=function t(){var n=g(),e=[],r=[],i=K;function u(t){var u=t+"",l=n.get(u);if(!l){if(i!==K)return i;n.set(u,l=e.push(t))}return r[(l-1)%r.length]}return u.domain=function(t){if(!arguments.length)return e.slice();e=[],n=g();for(var r,i,l=-1,a=t.length;++l<a;)n.has(i=(r=t[l])+"")||n.set(i,e.push(r));return u},u.range=function(t){return arguments.length?(r=F.call(t),u):r.slice()},u.unknown=function(t){return arguments.length?(i=t,u):i},u.copy=function(){return t(e,r).unknown(i)},S.apply(u,arguments),u}().domain(this.data.map(t=>t.x)).range(Object(D.a)(t=>Z(.8*t+.1),this.data.length).reverse()),this.arc=Object(W.a)().outerRadius(this.radius-10).innerRadius(0),this.labelArc=Object(W.a)().outerRadius(this.radius-40).innerRadius(this.radius-40),this.pie=Object(W.b)().sort(null).value(t=>t.y),this.svg=Object(Q.a)("#pieChart").append("svg").attr("width","100%").attr("height","100%").attr("viewBox","0 0 "+Math.min(this.width,this.height)+" "+Math.min(this.width,this.height)).append("g").attr("transform","translate("+Math.min(this.width,this.height)/2+","+Math.min(this.width,this.height)/2+")")}drawPie(){const t=this.svg.selectAll(".arc").data(this.pie(this.data)).enter().append("g").attr("class","arc");t.append("path").attr("d",this.arc).style("fill",t=>this.color(t.data.x)),t.append("text").attr("transform",t=>"translate("+this.labelArc.centroid(t)+")").attr("dy",".35em").text(t=>this.translate.instant(t.data.x))}}var Et=r.ob({encapsulation:0,styles:[[""]],data:{}});function Yt(t){return r.Lb(0,[(t()(),r.qb(0,0,null,null,0,"div",[["id","pieChart"]],null,null,null,null,null))],null,null)}var It=e("SVse"),Dt=e("HyEY"),$t=e("nYR2"),zt=e("lJxs");class Jt{constructor(t){this.api=t}ngOnInit(){this.doRefresh()}doRefresh(t){this.info$=this.api.getCountryData().pipe(Object($t.a)(()=>t&&t.target.complete())),this.data$=this.info$.pipe(Object(zt.a)(t=>[{x:"COUNTRY.ACTIVE",y:this.getActiveInfo(t)},{x:"COUNTRY.RECOVERED",y:this.getRecoveryInfo(t)},{x:"COUNTRY.DEATHS",y:this.getDeathInfo(t)}]))}getDeathInfo(t){return t.deaths/(t.deaths+t.active+t.recovered)*100}getRecoveryInfo(t){return t.recovered/(t.deaths+t.active+t.recovered)*100}getActiveInfo(t){return t.active/(t.deaths+t.active+t.recovered)*100}}var St=r.ob({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-content[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]],data:{}});function Ft(t){return r.Lb(0,[(t()(),r.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),r.qb(1,0,null,null,1,"app-country-info",[],null,null,null,s.b,s.a)),r.pb(2,114688,null,0,o.a,[f.m],{info:[0,"info"]},null)],(function(t,n){t(n,2,0,n.context.ngIf)}),null)}function Kt(t){return r.Lb(0,[(t()(),r.qb(0,0,null,null,6,null,null,null,null,null,null,null)),(t()(),r.qb(1,0,null,null,3,"ion-label",[],null,null,null,h.P,h.o)),r.pb(2,49152,null,0,c.K,[r.h,r.k,r.x],null,null),(t()(),r.Jb(3,0,[" "," "])),r.Eb(131072,d.k,[d.l,r.h]),(t()(),r.qb(5,0,null,null,1,"app-pie-chart",[],null,null,null,Yt,Et)),r.pb(6,114688,null,0,Ot,[d.l],{data:[0,"data"]},null)],(function(t,n){t(n,6,0,n.context.ngIf)}),(function(t,n){t(n,3,0,r.Kb(n,3,0,r.Cb(n,4).transform("TAB1.CHART1")))}))}function Ht(t){return r.Lb(0,[(t()(),r.qb(0,0,null,null,7,"ion-header",[],null,null,null,h.K,h.j)),r.pb(1,49152,null,0,c.y,[r.h,r.k,r.x],{translucent:[0,"translucent"]},null),(t()(),r.qb(2,0,null,0,5,"ion-toolbar",[],null,null,null,h.bb,h.A)),r.pb(3,49152,null,0,c.wb,[r.h,r.k,r.x],null,null),(t()(),r.qb(4,0,null,0,3,"ion-title",[],null,null,null,h.ab,h.z)),r.pb(5,49152,null,0,c.ub,[r.h,r.k,r.x],null,null),(t()(),r.Jb(6,0,[" "," "])),r.Eb(131072,d.k,[d.l,r.h]),(t()(),r.qb(8,0,null,null,19,"ion-content",[],null,null,null,h.J,h.i)),r.pb(9,49152,null,0,c.r,[r.h,r.k,r.x],{fullscreen:[0,"fullscreen"]},null),(t()(),r.qb(10,0,null,0,7,"ion-header",[["collapse","condense"]],null,null,null,h.K,h.j)),r.pb(11,49152,null,0,c.y,[r.h,r.k,r.x],{collapse:[0,"collapse"]},null),(t()(),r.qb(12,0,null,0,5,"ion-toolbar",[],null,null,null,h.bb,h.A)),r.pb(13,49152,null,0,c.wb,[r.h,r.k,r.x],null,null),(t()(),r.qb(14,0,null,0,3,"ion-title",[["size","large"]],null,null,null,h.ab,h.z)),r.pb(15,49152,null,0,c.ub,[r.h,r.k,r.x],{size:[0,"size"]},null),(t()(),r.Jb(16,0,["",""])),r.Eb(131072,d.k,[d.l,r.h]),(t()(),r.qb(18,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(t,n,e){var r=!0;return"ionRefresh"===n&&(r=!1!==t.component.doRefresh(e)&&r),r}),h.U,h.s)),r.pb(19,49152,null,0,c.X,[r.h,r.k,r.x],null,null),(t()(),r.qb(20,0,null,0,1,"ion-refresher-content",[],null,null,null,h.T,h.t)),r.pb(21,49152,null,0,c.Y,[r.h,r.k,r.x],null,null),(t()(),r.fb(16777216,null,0,2,null,Ft)),r.pb(23,16384,null,0,It.j,[r.M,r.J],{ngIf:[0,"ngIf"]},null),r.Eb(131072,It.b,[r.h]),(t()(),r.fb(16777216,null,0,2,null,Kt)),r.pb(26,16384,null,0,It.j,[r.M,r.J],{ngIf:[0,"ngIf"]},null),r.Eb(131072,It.b,[r.h])],(function(t,n){var e=n.component;t(n,1,0,!0),t(n,9,0,!0),t(n,11,0,"condense"),t(n,15,0,"large"),t(n,23,0,r.Kb(n,23,0,r.Cb(n,24).transform(e.info$))),t(n,26,0,r.Kb(n,26,0,r.Cb(n,27).transform(e.data$)))}),(function(t,n){t(n,6,0,r.Kb(n,6,0,r.Cb(n,7).transform("TAB1.HEADER"))),t(n,16,0,r.Kb(n,16,0,r.Cb(n,17).transform("TAB1.HEADER")))}))}function Xt(t){return r.Lb(0,[(t()(),r.qb(0,0,null,null,1,"app-tab1",[],null,null,null,Ht,St)),r.pb(1,114688,null,0,Jt,[Dt.a],null,null)],(function(t,n){t(n,1,0)}),null)}var Bt=r.mb("app-tab1",Jt,Xt,{},{},[]),Vt=e("s7LF"),Zt=e("qtYk"),Qt=e("PCNd");e.d(n,"Tab1PageModuleNgFactory",(function(){return Wt}));var Wt=r.nb(i,[],(function(t){return r.zb([r.Ab(512,r.j,r.X,[[8,[a.a,Bt]],[3,r.j],r.v]),r.Ab(4608,It.l,It.k,[r.s,[2,It.t]]),r.Ab(4608,c.a,c.a,[r.x,r.g]),r.Ab(4608,c.Ab,c.Ab,[c.a,r.j,r.p]),r.Ab(4608,c.Db,c.Db,[c.a,r.j,r.p]),r.Ab(4608,Vt.c,Vt.c,[]),r.Ab(4608,d.h,d.g,[]),r.Ab(4608,d.d,d.f,[]),r.Ab(4608,d.j,d.e,[]),r.Ab(4608,d.c,d.b,[]),r.Ab(4608,d.l,d.l,[d.m,d.h,d.d,d.j,d.c,d.n,d.p,d.o,d.a]),r.Ab(1073742336,It.c,It.c,[]),r.Ab(1073742336,c.yb,c.yb,[]),r.Ab(1073742336,Vt.b,Vt.b,[]),r.Ab(1073742336,Vt.a,Vt.a,[]),r.Ab(1073742336,Zt.a,Zt.a,[]),r.Ab(1073742336,f.n,f.n,[[2,f.s],[2,f.m]]),r.Ab(1073742336,d.i,d.i,[]),r.Ab(1073742336,Qt.a,Qt.a,[]),r.Ab(1073742336,i,i,[]),r.Ab(256,d.p,void 0,[]),r.Ab(256,d.n,void 0,[]),r.Ab(256,d.o,void 0,[]),r.Ab(256,d.a,void 0,[]),r.Ab(1024,f.k,(function(){return[[{path:"",component:Jt}]]}),[])])}))},pD2Y:function(t,n,e){"use strict";var r=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e};e.d(n,"a",(function(){return r}))},znUM:function(t,n,e){"use strict";var r=Math.SQRT2;function i(t){return((t=Math.exp(t))+1/t)/2}n.a=function(t,n){var e,u,l=t[0],a=t[1],s=t[2],o=n[2],f=n[0]-l,h=n[1]-a,c=f*f+h*h;if(c<1e-12)u=Math.log(o/s)/r,e=function(t){return[l+t*f,a+t*h,s*Math.exp(r*t*u)]};else{var d=Math.sqrt(c),b=(o*o-s*s+4*c)/(2*s*2*d),p=(o*o-s*s-4*c)/(2*o*2*d),v=Math.log(Math.sqrt(b*b+1)-b),g=Math.log(Math.sqrt(p*p+1)-p);u=(g-v)/r,e=function(t){var n,e=t*u,o=i(v),c=s/(2*d)*(o*(n=r*e+v,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(v));return[l+c*f,a+c*h,s*o/i(r*e+v)]}}return e.duration=1e3*u,e}}}]);