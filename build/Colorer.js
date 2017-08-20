!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){"use strict";var n=r(1);window.Colorer=n.Colorer},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(2),s=a.defineColorSchema,u=a.HEXtoRGB,l=a.RGBtoHSV,h=a.HSVtoHSL,v=a.HSLtoHSV,c=a.HSVtoRGB,f="rgb",d=function(){function t(e){n(this,t);var r=e,o=s(r);if(!o)throw new Error("Unsupported color schema");"hex"===o&&(o=f,r=u(r)),this.model=o,this.value=this._setValue(r),this._initialColor=r}return i(t,[{key:"valueOf",value:function(){return this.stringValue}},{key:"toString",value:function(){return this.valueOf()}},{key:"alpha",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toRGB();var r=e/100,n=Math.max(0,this.value.a+r),o=Math.min(1,n),i=new t(this.toString());return i.value.a=o,i}},{key:"light",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toHSV();var r=e/100,n=Math.max(0,this.value.v+r);this.value.v=Math.min(1,n),this.toRGB();var o=new t(this.toString());return this.value=this._setValue(this._initialColor),o}},{key:"depth",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toHSV();var r=e/100,n=Math.max(0,this.value.s+r);this.value.s=Math.min(1,n),this.toRGB();var o=new t(this.toString());return this.value=this._setValue(this._initialColor),o}},{key:"tone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toHSV();var r=Math.max(e,-1*e),n=this.value.h+r/100;this.value.h=n%3.6,this.toRGB();var o=new t(this.toString());return this.value=this._setValue(this._initialColor),o}},{key:"toHSL",value:function(){return"hsl"===this.model?this:(this.model===f&&this.toHSV(),this.value=h(this.value),this.model="hsl",this)}},{key:"toHSV",value:function(){return"hsv"===this.model?this:(this.model===f&&(this.value=l(this.value),this.model="hsv"),"hsl"===this.model&&(this.model="hsl",this.value=v(this.value)),this)}},{key:"toRGB",value:function(){return this.model===f?this:("hsl"===this.model&&this.toHSV(),this.model=f,this.value=c(this.value),this)}},{key:"_setValue",value:function(t){for(var e=t.replace(/[a-z()%]/g,"").split(","),r={},n=0;n<e.length;n++){r[this.model[n]||"a"]=parseInt(e[n].trim(),10)}return r.a=r.a||1,r}},{key:"stringValue",get:function(){var t=Object.keys(this.value),e=t.join(""),r=e+"(",n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value,l=void 0,h=this.value[u];/[hslv]/.test(u)&&(h=Math.round(100*h)),/[slv]/.test(u)?(h=Math.min(100,h),l=h+"%,"):l=h+",",r+=l}}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r.replace(/.$/,")")}}]),t}(),b=function t(e){return Object.keys(e).forEach(function(r){"object"===o(e[r])?e[r]=t(e[r]):e[r]=new d(e[r])}),Object.assign({},e)},m=function(t){return"object"===(void 0===t?"undefined":o(t))?b(t):new d(t)};m.Colorer=d,t.exports=m},function(t,e,r){"use strict";var n={HSVtoRGB:function(t){var e=t.h,r=t.s,n=t.v,o=t.a,i=void 0,a=void 0,s=void 0,u=void 0,l=void 0,h=void 0,v=void 0,c=void 0;switch(u=Math.floor(6*e),l=6*e-u,h=n*(1-r),v=n*(1-l*r),c=n*(1-(1-l)*r),u%6){case 0:i=n,a=c,s=h;break;case 1:i=v,a=n,s=h;break;case 2:i=h,a=n,s=c;break;case 3:i=h,a=v,s=n;break;case 4:i=c,a=h,s=n;break;case 5:i=n,a=h,s=v}return{r:Math.round(255*i),g:Math.round(255*a),b:Math.round(255*s),a:o}},RGBtoHSV:function(t){var e=t.r,r=t.g,n=t.b,o=t.a,i=Math.max(e,r,n),a=Math.min(e,r,n),s=i-a,u=void 0,l=0===i?0:s/i,h=i/255;switch(i){case a:u=0;break;case e:u=r-n+s*(r<n?6:0),u/=6*s;break;case r:u=n-e+2*s,u/=6*s;break;case n:u=e-r+4*s,u/=6*s}return{h:u,s:l,v:h,a:o}},HSVtoHSL:function(t){var e=t.h,r=t.s,n=t.v,o=t.a,i=e,a=r*n,s=(2-r)*n;return a/=s<=1?s:2-s,s/=2,{h:i,s:a,l:s,a:o}},HSLtoHSV:function(t){var e=t.h,r=t.s,n=t.l,o=t.a,i=e,a=void 0,s=void 0;return n*=2,r*=n<=1?n:2-n,s=(n+r)/2,a=2*r/(n+r),{h:i,s:a,v:s,a:o}},HEXtoRGB:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,r,n){return e+e+r+r+n+n});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?"rgba("+parseInt(r[1],16)+", "+parseInt(r[2],16)+", "+parseInt(r[3],16)+", 1)":null},RGBtoHEX:function(t){function e(t){var e=t.toString(16);return 1==e.length?"0"+e:e}var r=t.r,n=t.g,o=t.b;return"#"+e(r)+e(n)+e(o)},defineColorSchema:function(t){return/#/.test(t)?"hex":/rgba/.test(t)?"rgb":/rgb/.test(t)?"rgb":/hsv/.test(t)?"hsv":/hsl/.test(t)?"hsl":void 0}};t.exports=n}]);