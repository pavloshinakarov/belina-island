(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4774:function(e,t,n){Promise.resolve().then(n.bind(n,4404)),Promise.resolve().then(n.bind(n,7640)),Promise.resolve().then(n.bind(n,239)),Promise.resolve().then(n.t.bind(n,4080,23)),Promise.resolve().then(n.t.bind(n,4671,23)),Promise.resolve().then(n.t.bind(n,5910,23)),Promise.resolve().then(n.bind(n,8726)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.t.bind(n,1537,23))},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(7437),a=n(2265)},4404:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:r="dataLayer",nonce:c}=e;return void 0===a&&(a=r),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(r,"'] = window['").concat(r,"'] || [];\n          function gtag(){window['").concat(r,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:c}),(0,o.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:c})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))};let o=n(7437),i=n(2265),l=(r=n(1877))&&r.__esModule?r:{default:r}},7640:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:r="dataLayer",auth:c,preview:u,dataLayer:s,nonce:d}=e;l=r;let f="dataLayer"!==r?"&l=".concat(r):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s?"w[l].push(".concat(JSON.stringify(s),")"):"","\n      })(window,'").concat(r,"');")},nonce:d}),(0,a.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(c?"&gtm_auth=".concat(c):"").concat(u?"&gtm_preview=".concat(u,"&gtm_cookies_win=x"):"")})]})};let a=n(7437),o=n(2265),i=(r=n(1877))&&r.__esModule?r:{default:r},l="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||l;window[n]=window[n]||[],window[n].push(e)}},1877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(4080),a=n.n(r),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var c;(null==n?void 0:null==(c=n.tagName)?void 0:c.toLowerCase())===e&&l.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(o(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return h}});let r=n(9920),a=n(1452),o=n(7437),i=r._(n(4887)),l=a._(n(2265)),c=n(6590),u=n(905),s=n(9189),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],_=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:c,stylesheets:s}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,c);return}let g=()=>{a&&a(),f.add(m)},h=document.createElement("script"),y=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(o?(h.innerHTML=o.__html||"",g()):i?(h.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",g()):t&&(h.src=t,d.set(t,y)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();h.setAttribute(e,r)}"worker"===l&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",l),s&&_(s),document.body.appendChild(h)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))}):m(e)}function h(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:p,..._}=e,{updateScripts:g,scripts:h,getIsSsr:y,appDir:v,nonce:b}=(0,l.useContext)(c.HeadManagerContext),w=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))})),x.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(g?(h[u]=(h[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,..._}]),g(h)):y&&y()?f.add(t||n):y&&!y()&&m(e)),v){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(i.default.preload(n,_.integrity?{as:"script",integrity:_.integrity,nonce:b}:{as:"script",nonce:b}),(0,o.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{..._,id:t}])+")"}})):(_.dangerouslySetInnerHTML&&(_.children=_.dangerouslySetInnerHTML.__html,delete _.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{..._,id:t}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,_.integrity?{as:"script",integrity:_.integrity,nonce:b}:{as:"script",nonce:b})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3054:function(){},1537:function(){},4671:function(e){e.exports={style:{fontFamily:"'__Inter_cf9ed4', '__Inter_Fallback_cf9ed4'",fontStyle:"normal"},className:"__className_cf9ed4"}},5910:function(e){e.exports={style:{fontFamily:"'__Mogra_1cd7a5', '__Mogra_Fallback_1cd7a5'",fontWeight:400,fontStyle:"normal"},className:"__className_1cd7a5"}}},function(e){e.O(0,[12,190,971,23,744],function(){return e(e.s=4774)}),_N_E=e.O()}]);