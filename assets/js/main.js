!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);const i={default:["col-12","col-md-6","col-lg-3","row","m-0"],containerOpen:["col-12","col-sm-12","col-md-12","col-lg-12"],cardWrapperDefault:["card_wrapper","m-auto","m-lg-0","col-12"],cardWrapperThumbOpen:["col-sm-8","m-0","col-lg-4"],cardWrapperSideDefault:["card_side-pane","col-sm-8","m-0","col-lg-4","d-none"],cardWrapperBottomDefault:["card_bottom-pane","col-lg-12","d-none"]};function a(e,t,n){var r=document.createElement(e);t&&Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])}));return n&&"string"!=typeof n?n.forEach((function(e){"string"!=typeof e&&Boolean(e)?r.appendChild(e):r.appendChild(document.createTextNode(e))})):"string"==typeof n&&r.appendChild(document.createTextNode(n)),r}function s(e){const t=a("button",{class:"card_expand-button mt-auto"},["+"]);t.addEventListener("click",(function(t){console.log("clicked ",e)}));const n=a("p",null,[...e.tags]),r=a("h3",{class:"text-primary font-light"},[e.company]),o=a("h2",{class:"margin-0 font-regular"},[e.name]),s=a("div",{class:"card_text"},[r,n]),c=a("div",{class:"card_title"},[o]),l=a("span",{class:"card_pill"},[document.createTextNode(e.status)]),u=a("img",{class:"card_img",src:"assets/images/240_F_9.png"}),h=a("div",{class:"card_body"},[c,s]),d=a("div",{class:"card"},[l,u,h,t]),f=a("div",{class:"card_wrapper m-auto m-lg-0 col-12"},[d]);return a("div",{"data-key":e.index,class:i.default.join(" ")},[f])}const c="https://next.json-generator.com/api/json/get/EyliyHKbd",l=document.getElementById("mainGrid"),u=document.querySelector(".nav"),h=document.querySelector("form[name=search]"),d=document.querySelector("input");function f(e){return fetch(e).then(e=>e.json())}window.addEventListener("load",(function(e){f(c).then(g)})),u.addEventListener("click",(function(e){e.target.classList.contains("nav_item")&&(document.querySelectorAll(".nav_item").forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),v(l),f(c).then((function(t){console.log(t),g(t.filter((function(t){return t.status.toLowerCase()===e.target.id.toLowerCase()})))})))}));let p="";function v(e){e.innerHTML=""}function g(e){console.log(e),v(l),e.forEach((function(e){l.appendChild(s(e))}))}h.addEventListener("submit",(function(e){e.preventDefault(),alert("Ping!")})),d.addEventListener("keyup",(function(e){e.target.value===p&&console.log(e.target.value),p=e.target.value,f(c).then((function(t){var n,r;g((n=e.target.value,r=t,new o.a(r,{threshold:.3,keys:["name","company","status","email","telephone"]}).search(n)))}))})),window.createElement=a,window.buildCard=s},function(e,t,n){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.caseSensitive,f=void 0!==d&&d,p=n.tokenSeparator,v=void 0===p?/ +/g:p,g=n.findAllMatches,m=void 0!==g&&g,y=n.minMatchCharLength,b=void 0===y?1:y,S=n.id,k=void 0===S?null:S,x=n.keys,_=void 0===x?[]:x,M=n.shouldSort,w=void 0===M||M,L=n.getFn,O=void 0===L?a:L,C=n.sortFn,j=void 0===C?function(e,t){return e.score-t.score}:C,A=n.tokenize,P=void 0!==A&&A,I=n.matchAllTokens,E=void 0!==I&&I,T=n.includeMatches,z=void 0!==T&&T,F=n.includeScore,q=void 0!==F&&F,D=n.verbose,N=void 0!==D&&D;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:m,minMatchCharLength:b,id:k,keys:_,includeMatches:z,includeScore:q,shouldSort:w,getFn:O,sortFn:j,verbose:N,tokenize:P,matchAllTokens:E},this.setCollection(t)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,l=n.length;c<l;c+=1)for(var u=n[c],h=0,d=this.options.keys.length;h<d;h+=1){var f=this.options.keys[h];if("string"!=typeof f){if(s[f.name]={weight:1-f.weight||1},f.weight<=0||f.weight>1)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else s[f]={weight:1};this._analyze({key:f,value:this.options.getFn(u,f),record:u,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,f=t.resultMap,p=void 0===f?{}:f,v=t.results,g=void 0===v?[]:v;if(null!=i){var m=!1,y=-1,b=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=d.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var k=i.split(this.options.tokenSeparator),x=[],_=0;_<u.length;_+=1){var M=u[_];this._log('\nPattern: "'.concat(M.pattern,'"'));for(var w=!1,L=0;L<k.length;L+=1){var O=k[L],C=M.search(O),j={};C.isMatch?(j[O]=C.score,m=!0,w=!0,x.push(C.score)):(j[O]=1,this.options.matchAllTokens||x.push(1)),this._log('Token: "'.concat(O,'", score: ').concat(j[O]))}w&&(b+=1)}y=x[0];for(var A=x.length,P=1;P<A;P+=1)y+=x[P];y/=A,this._log("Token score average:",y)}var I=S.score;y>-1&&(I=(I+y)/2),this._log("Score average:",I);var E=!this.options.tokenize||!this.options.matchAllTokens||b>=u.length;if(this._log("\nCheck Matches: ".concat(E)),(m||S.isMatch)&&E){var T=p[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:I,matchedIndices:S.matchedIndices}):(p[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:I,matchedIndices:S.matchedIndices}]},g.push(p[c]))}}else if(s(i))for(var z=0,F=i.length;z<F;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:p,results:g,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var l=e?e[o[c].key].weight:1,u=(1===l?o[c].score:o[c].score||.001)*l;1!==l?s=Math.min(s,u):(o[c].nScore=u,a*=u)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}))),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},l=0,u=o.length;l<u;l+=1)o[l](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.isCaseSensitive,f=void 0!==d&&d,p=n.tokenSeparator,v=void 0===p?/ +/g:p,g=n.findAllMatches,m=void 0!==g&&g,y=n.minMatchCharLength,b=void 0===y?1:y;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:m,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,l=a.threshold,u=a.findAllMatches,h=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&r(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,l=i.length;c<l;c+=1){var u=i[c];s.push([e.indexOf(u),u.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,l=void 0===c?100:c,u=i.threshold,h=void 0===u?.6:u,d=i.findAllMatches,f=void 0!==d&&d,p=i.minMatchCharLength,v=void 0===p?1:p,g=s,m=e.length,y=h,b=e.indexOf(t,g),S=t.length,k=[],x=0;x<m;x+=1)k[x]=0;if(-1!==b){var _=r(t,{errors:0,currentLocation:b,expectedLocation:g,distance:l});if(y=Math.min(_,y),-1!==(b=e.lastIndexOf(t,g+S))){var M=r(t,{errors:0,currentLocation:b,expectedLocation:g,distance:l});y=Math.min(M,y)}}b=-1;for(var w=[],L=1,O=S+m,C=1<<(S<=31?S-1:30),j=0;j<S;j+=1){for(var A=0,P=O;A<P;)r(t,{errors:j,currentLocation:g+P,expectedLocation:g,distance:l})<=y?A=P:O=P,P=Math.floor((O-A)/2+A);O=P;var I=Math.max(1,g-P+1),E=f?m:Math.min(g+P,m)+S,T=Array(E+2);T[E+1]=(1<<j)-1;for(var z=E;z>=I;z-=1){var F=z-1,q=n[e.charAt(F)];if(q&&(k[F]=1),T[z]=(T[z+1]<<1|1)&q,0!==j&&(T[z]|=(w[z+1]|w[z])<<1|1|w[z+1]),T[z]&C&&(L=r(t,{errors:j,currentLocation:F,expectedLocation:g,distance:l}))<=y){if(y=L,(b=F)<=g)break;I=Math.max(1,2*g-b)}}if(r(t,{errors:j+1,currentLocation:g,expectedLocation:g,distance:l})>y)break;w=T}return{isMatch:b>=0,score:0===L?.001:L,matchedIndices:o(k,v)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,l=void 0===c?100:c,u=r/e.length,h=Math.abs(s-i);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])}]);