(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{8220:function(e,t){var r,n,o;n=[],void 0!==(o="function"==typeof(r=function(){var e=function(){},t={},r={},n={};function o(e,t){if(e){var o=n[e];if(r[e]=t,o)for(;o.length;)o[0](e,t),o.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function c(r,n,c){var u,s;if(n&&n.trim&&(u=n),s=(u?c:n)||{},u){if(u in t)throw"LoadJS";t[u]=!0}function l(t,n){!function(t,r,n){var o,i,c=(t=t.push?t:[t]).length,u=c,s=[];for(i=0,o=function(e,t,n){if("e"==t&&s.push(e),"b"==t){if(!n)return;s.push(e)}--c||r(s)};i<u;i++)!function t(r,n,o,i){var c,u,s,l=document,f=o.async,a=(o.numRetries||0)+1,p=o.before||e,d=r.replace(/[\?|#].*$/,""),v=r.replace(/^(css|img|module|nomodule)!/,"");if(i=i||0,/(^css!|\.css$)/.test(d))(s=l.createElement("link")).rel="stylesheet",s.href=v,(c="hideFocus"in s)&&s.relList&&(c=0,s.rel="preload",s.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d))(s=l.createElement("img")).src=v;else if((s=l.createElement("script")).src=v,s.async=void 0===f||f,u="noModule"in s,/^module!/.test(d)){if(!u)return n(r,"l");s.type="module"}else if(/^nomodule!/.test(d)&&u)return n(r,"l");s.onload=s.onerror=s.onbeforeload=function(e){var u=e.type[0];if(c)try{s.sheet.cssText.length||(u="e")}catch(e){18!=e.code&&(u="e")}if("e"==u){if((i+=1)<a)return t(r,n,o,i)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";n(r,u,e.defaultPrevented)},!1!==p(r,s)&&l.head.appendChild(s)}(t[i],o,n)}(r,function(e){i(s,e),t&&i({success:t,error:n},e),o(u,e)},s)}if(s.returnPromise)return new Promise(l);l()}return c.ready=function(e,t){return function(e,t){e=e.push?e:[e];var o,i,c,u=[],s=e.length,l=s;for(o=function(e,r){r.length&&u.push(e),--l||t(u)};s--;){if(c=r[i=e[s]]){o(i,c);continue}(n[i]=n[i]||[]).push(o)}}(e,function(e){i(t,e)}),c},c.done=function(e){o(e,[])},c.reset=function(){t={},r={},n={}},c.isDefined=function(e){return e in t},c})?r.apply(t,n):r)&&(e.exports=o)},5802:(e,t,r)=>{"use strict";r.d(t,{Kf:()=>p});var n=r(2115),o=r(8220),i=r.n(o),c="twttr",u=!!("undefined"!=typeof window&&window.document&&window.document.createElement);function s(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function l(e){var t=(0,n.useRef)();return!function(e,t){if(s(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!s(e[r[o]],t[r[o]]))return!1;return!0}(e,t.current)&&(t.current=e),t.current}function f(e){return"object"==typeof e?Object.assign({},e):e}var a="twdiv",p=function(e){var t=e.dataSource,r=e.options,o=e.onLoad,s=e.renderError,p=function(e,t,r,o){var s=(0,n.useState)(null),p=s[0],d=s[1],v=(0,n.useRef)(null);if(!u)return{ref:v,error:p};var m=[e,l(t),l(r)];return(0,n.useEffect)(function(){d(null);var n=!1;if(v.current){if((u=v.current)&&u.querySelectorAll("*").forEach(function(e){e.hasAttribute(a)&&e.remove()}),!v||!v.current)return;var u,s=document.createElement("div");s.setAttribute(a,"yes"),v.current.appendChild(s),new Promise(function(e,t){var r=function(){return t(Error("Could not load remote twitter widgets js"))};i().isDefined(c)||i()("https://platform.twitter.com/widgets.js",c),i().ready(c,{success:function(){var t=window[c];t&&t.widgets||r(),e(t.widgets)},error:r})}).then(function(n){return n[e](f(t),s,f(r))}).then(function(e){if(!e&&!n)throw Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");if(v&&v.current){if(n){s&&s.remove();return}o&&o()}}).catch(function(e){console.error(e),d(e)})}return function(){n=!0}},m),{ref:v,error:p}}("createTimeline",t,r,o),d=p.ref,v=p.error;return n.createElement("div",{ref:d},v&&s&&s(v))}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>f});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),c=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return t=>n.createElement(a,u({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function a(e){var t=t=>{var r,{attr:o,size:i,title:s}=e,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c),a=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);