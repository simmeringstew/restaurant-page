(()=>{"use strict";var e={841:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"/* page setup\n--------------------------------\n*/\n\n:root {\n    font-family: 'Poppins', sans-serif;\n    background-attachment: fixed;\n    background-image: linear-gradient(to right top, #78716c, #645c5b, #4e494a, #393739, #262626);\n}\n\n* {\n    -webkit-tap-highlight-color: transparent;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* header\n--------------------------------\n*/\n\nheader {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: #e4e4e7;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    width: 100%;\n}\n\n.navigation-links {\n    display: flex;\n    gap: 20px;\n}\n\n.navigation-links:hover {\n    cursor: pointer;\n}\n\n.name {\n    margin-left: 10px;\n}\n\n.navigation {\n    margin-right: 10px;\n}\n\n/* main portion\n--------------------------------\n*/\n\n.main {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.hours, .location, .review, h1, .menu-list, .contact-area {\n    background-color: #e4e4e7;\n    border-radius: 4px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    width: 80%;\n}\n\nh1 {\n    font-size: 1.1rem;\n}\n\nh2 {\n    align-self: flex-start;\n    margin-bottom: -20px;\n}\n\nimg {\n    height: 12rem;\n    width: 16rem;\n}\n\n@media screen and (min-width: 1000px) {\n    .hours, .location, .review, h1, .menu-list, .contact-area {\n        width: 30%;\n    }\n}\n\n/* contact page items\n--------------------------------\n*/\n\n.contact-box {\n    width: 100%;\n}\n\n.contact-box:focus, .email-input:focus {\n   outline: black;\n}\n\n.submit-area {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.email-input {\n    width: 10rem;\n    border-radius: 4px;\n    border: solid 1px black;\n}\n\n.submit-button {\n    border-radius: 16px;\n    border:none;\n    background-color: black;\n    color: #e4e4e7;\n    padding: 5px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(841),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(426),g={};function b(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.lastChild)}g.styleTagTransform=p(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const v=t.p+"b4dc1a90e28657b0d60e.jpeg";function x(){const e=document.querySelector(".main"),n=document.createElement("h1");n.textContent="simmeringstew's simmeringstew",e.appendChild(n);const t=document.createElement("div");t.classList.add("hours");const o=document.createElement("h2");o.textContent="Hours";const a=document.createElement("ul"),r=document.createElement("li");r.textContent="Sunday: 1PM - 11PM";const i=document.createElement("li");i.textContent="Closed";const c=document.createElement("li");c.textContent="Tuesday: 5PM - 11PM";const s=document.createElement("li");s.textContent="Wednesday: 5PM - 11PM";const l=document.createElement("li");l.textContent="Thursday: 5PM - 11PM";const d=document.createElement("li");d.textContent="Friday: 1PM - 11PM";const u=document.createElement("li");u.textContent="Saturday: 1PM - 11PM";const p=[r,i,c,s,l,d,u];for(let e=0;e<p.length;e++)a.appendChild(p[e]);t.appendChild(o),t.appendChild(a),e.appendChild(t);const m=document.createElement("div");m.classList.add("location");const h=document.createElement("h2");h.textContent="Location";const f=document.createElement("p");f.textContent="123 Elf Road North Pole, 88888",m.appendChild(h),m.appendChild(f),e.appendChild(m);const g=document.createElement("div");g.classList.add("review");const b=new Image;b.src=v;const x=document.createElement("p");x.textContent="This is the best restaurant ever. I think it is run by Santa since I had to travel all the way to the north poll to eat there, overall 5/5 I suppose.",g.appendChild(b),g.appendChild(x),e.appendChild(g)}const y=t.p+"53f66c5359c962c413e8.jpeg",C=t.p+"687697d7e8b502a7b9d6.jpeg",E=t.p+"337e12d763309435f405.jpeg";window.onload=x,document.querySelector(".home").addEventListener("click",(()=>{b(),x()})),document.querySelector(".menu").addEventListener("click",(()=>{b(),function(){const e=document.querySelector(".main"),n=document.createElement("h1");n.textContent="Our Menu",e.appendChild(n);const t=document.createElement("div");t.classList.add("menu-list");const o=new Image;o.src=y;const a=document.createElement("h2");a.textContent="Eggs";const r=document.createElement("p");r.textContent="Enjoy this delicious egg, meat, and other sides dish";const i=new Image;i.src=C;const c=document.createElement("h2");c.textContent="Pancakes";const s=document.createElement("p");s.textContent="Buttermilk pancakes with real Canadian maple syrup and fresh fruit of your choosing";const l=new Image;l.src=v;const d=document.createElement("h2");d.textContent="Pizza";const u=document.createElement("p");u.textContent="Wood fire pizza with fresh basil, sundried tomatoes, and mozzarella";const p=new Image;p.src=E;const m=document.createElement("h2");m.textContent="Salmon";const h=document.createElement("p");h.textContent="Smoked salmon appetizers with cream and chives";const f=[o,a,r,i,c,s,l,d,u,p,m,h];for(let e=0;e<f.length;e++)t.appendChild(f[e]);e.appendChild(t)}()})),document.querySelector(".contact").addEventListener("click",(()=>{b(),function(){const e=document.querySelector(".main"),n=document.createElement("h1");n.textContent="Contact Us",e.appendChild(n);const t=document.createElement("div");t.classList.add("contact-area");const o=document.createElement("textarea");o.name="contact",o.maxLength="2000",o.classList.add("contact-box"),o.cols="80",o.rows="20";const a=document.createElement("div");a.classList.add("submit-area");const r=document.createElement("label");r.textContent="Email:",r.htmlFor="email";const i=document.createElement("input");i.name="email",i.id="email",i.maxLength="50",i.classList.add("email-input");const c=document.createElement("button");c.textContent="Submit",c.classList.add("submit-button");const s=[r,i,c];for(let e=0;e<s.length;e++)a.appendChild(s[e]);t.appendChild(o),t.appendChild(a),e.appendChild(t)}()}))})()})();