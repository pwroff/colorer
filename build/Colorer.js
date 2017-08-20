!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){"use strict";var o=r(1);window.Colorer=o.Colorer},function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r(2),s=a.defineColorSchema,u=a.HEXtoRGB,l=a.RGBtoHSV,h=a.HSVtoHSL,v=a.HSLtoHSV,c=a.HSVtoRGB,f="rgb",d=function(){function t(e){o(this,t);var r=e,n=s(r);if(!n)throw new Error("Unsupported color schema");"hex"===n&&(n=f,r=u(r)),this.model=n,this.value=this._setValue(r),this._initialColor=r}return i(t,[{key:"valueOf",value:function(){return this.stringValue}},{key:"toString",value:function(){return this.valueOf()}},{key:"alpha",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toRGB();var r=parseFloat((e/100).toFixed(2)),o=Math.max(0,this.value.a+r),n=Math.min(1,o),i=new t(this.toString());return i.value.a=n,i}},{key:"light",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toHSV();var r=parseFloat((e/100).toFixed(2)),o=Math.max(0,this.value.v+r);this.value.v=Math.min(1,o),this.toRGB();var n=new t(this.toString());return this.value=this._setValue(this._initialColor),n}},{key:"depth",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toHSV();var r=parseFloat((e/100).toFixed(2)),o=Math.max(0,this.value.s+r);this.value.s=Math.min(1,o),this.toRGB();var n=new t(this.toString());return this.value=this._setValue(this._initialColor),n}},{key:"tone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toHSV();var r=Math.max(e,-1*e),o=this.value.h+r/100;this.value.h=parseFloat((o%3.6).toFixed(2)),this.toRGB();var n=new t(this.toString());return this.value=this._setValue(this._initialColor),n}},{key:"toHSL",value:function(){return"hsl"===this.model?this:(this.model===f&&this.toHSV(),this.value=h(this.value),this.model="hsl",this)}},{key:"toHSV",value:function(){return"hsv"===this.model?this:(this.model===f&&(this.value=l(this.value),this.model="hsv"),"hsl"===this.model&&(this.model="hsl",this.value=v(this.value)),this)}},{key:"toRGB",value:function(){return this.model===f?this:("hsl"===this.model&&this.toHSV(),this.model=f,this.value=c(this.value),this)}},{key:"_setValue",value:function(t){for(var e=t.replace(/[a-z()%]/g,"").split(","),r={},o=0;o<e.length;o++){r[this.model[o]||"a"]=parseInt(e[o].trim(),10)}return r.a=r.a||1,r}},{key:"stringValue",get:function(){var t=Object.keys(this.value),e=t.join(""),r=e+"(",o=!0,n=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var u=a.value,l=void 0,h=this.value[u];/[hslv]/.test(u)&&(h=Math.round(100*h)),/[slv]/.test(u)?(h=Math.min(100,h),l=h+"%,"):l=h+",",r+=l}}catch(t){n=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(n)throw i}}return r.replace(/.$/,")")}}]),t}(),b=function t(e){return Object.keys(e).forEach(function(r){"object"===n(e[r])?e[r]=t(e[r]):e[r]=new d(e[r])}),Object.assign({},e)},m=function(t){return"object"===(void 0===t?"undefined":n(t))?b(t):new d(t)};m.Colorer=d,t.exports=m},function(t,e,r){"use strict";var o={HSVtoRGB:function(t){var e=t.h,r=t.s,o=t.v,n=t.a,i=void 0,a=void 0,s=void 0,u=void 0,l=void 0,h=void 0,v=void 0,c=void 0;switch(u=Math.floor(6*e),l=6*e-u,h=o*(1-r),v=o*(1-l*r),c=o*(1-(1-l)*r),u%6){case 0:i=o,a=c,s=h;break;case 1:i=v,a=o,s=h;break;case 2:i=h,a=o,s=c;break;case 3:i=h,a=v,s=o;break;case 4:i=c,a=h,s=o;break;case 5:i=o,a=h,s=v}return{r:Math.round(255*i),g:Math.round(255*a),b:Math.round(255*s),a:n}},RGBtoHSV:function(t){var e=t.r,r=t.g,o=t.b,n=t.a,i=Math.max(e,r,o),a=Math.min(e,r,o),s=i-a,u=void 0,l=0===i?0:s/i,h=i/255;switch(i){case a:u=0;break;case e:u=r-o+s*(r<o?6:0),u/=6*s;break;case r:u=o-e+2*s,u/=6*s;break;case o:u=e-r+4*s,u/=6*s}return{h:u,s:l,v:h,a:n}},HSVtoHSL:function(t){var e=t.h,r=t.s,o=t.v,n=t.a,i=e,a=r*o,s=(2-r)*o;return a/=s<=1?s:2-s,s/=2,{h:i,s:a,l:s,a:n}},HSLtoHSV:function(t){var e=t.h,r=t.s,o=t.l,n=t.a,i=e,a=void 0,s=void 0;return o*=2,r*=o<=1?o:2-o,s=(o+r)/2,a=2*r/(o+r),{h:i,s:a,v:s,a:n}},HEXtoRGB:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,r,o){return e+e+r+r+o+o});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?"rgba("+parseInt(r[1],16)+", "+parseInt(r[2],16)+", "+parseInt(r[3],16)+", 1)":null},RGBtoHEX:function(t){function e(t){var e=t.toString(16);return 1==e.length?"0"+e:e}var r=t.r,o=t.g,n=t.b;return"#"+e(r)+e(o)+e(n)},defineColorSchema:function(t){return/#/.test(t)?"hex":/rgba/.test(t)?"rgb":/rgb/.test(t)?"rgb":/hsv/.test(t)?"hsv":/hsl/.test(t)?"hsl":void 0}};t.exports=o}]);