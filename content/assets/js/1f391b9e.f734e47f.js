"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3085],{14247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(86010),i=n(10833),r=n(35281),c=n(95298),o=n(70143),s=n(85491);const d="mdxPageWrapper_j9I6";function m(e){const{content:t}=e,{metadata:{title:n,description:m,frontMatter:u}}=t,{wrapperClassName:v,hide_table_of_contents:f}=u;return l.createElement(i.FG,{className:(0,a.Z)(v??r.k.wrapper.mdxPages,r.k.page.mdxPage)},l.createElement(i.d,{title:n,description:m}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,a.Z)("row",d)},l.createElement("div",{className:(0,a.Z)("col",!f&&"col--8")},l.createElement("article",null,l.createElement(o.Z,null,l.createElement(t,null)))),!f&&t.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},93743:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(87462),a=n(67294),i=n(86668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>o(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=s(c,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:l,isChild:i}=e;return t.length?a.createElement("ul",{className:i?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const v=a.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const h=(0,i.L)(),g=d??h.tableOfContents.minHeadingLevel,p=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>c({toc:r(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:g,maxHeadingLevel:p});return m((0,a.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:p}}),[o,s,g,p])),a.createElement(v,(0,l.Z)({toc:E,className:n,linkClassName:o},f))}},85491:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(87462),a=n(67294),i=n(86010),r=n(93743);const c="tableOfContents_jeP5";var o;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",s({style:{width:"initial",height:"initial"},width:12,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,o||(o=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.563 3.316A1.31 1.31 0 0 0 19.687 3h-1.688v9h1.688a1.31 1.31 0 0 0 1.312-1.077V4.077a1.31 1.31 0 0 0-.436-.761ZM16 12.788l-3.608 8.117A1.999 1.999 0 0 1 11 19v-4a1 1 0 0 0-1-1H4.328a1.002 1.002 0 0 1-1-1.15l1.38-9a1 1 0 0 1 1-.85h10.291v9.788ZM19.661 1a3.31 3.31 0 0 1 3.329 2.866c.006.044.01.09.01.134v7c0 .045-.004.09-.01.134A3.31 3.31 0 0 1 19.661 14h-2.012l-3.736 8.406a1 1 0 0 1-.914.594 4 4 0 0 1-4-4v-3H4.344a3 3 0 0 1-2.994-3.45l1.38-9A3.002 3.002 0 0 1 5.724 1h13.937Z",fill:"currentColor"})))};var m;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u.apply(this,arguments)}const v=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",u({style:{width:"initial",height:"initial"},width:12,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,m||(m=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.086 1.594A1 1 0 0 1 11 1a4 4 0 0 1 4 4v3h4.655a3 3 0 0 1 2.994 3.45l-1.38 9A3.002 3.002 0 0 1 18.275 23H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2.35l3.736-8.406ZM8 11.212l3.608-8.117A2 2 0 0 1 13 5v4a1 1 0 0 0 1 1h5.671a1 1 0 0 1 1 1.15l-1.38 9a1 1 0 0 1-1 .85H8v-9.788ZM6 21v-9H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2Z",fill:"currentColor"})))},f=()=>{const[e,t]=(0,a.useState)(),n=n=>{e||(t(n),window&&window._paq&&window._paq.push(["trackEvent","Website Feedback",n,location.pathname]))};let l={justifyContent:"center",display:"flex",borderRadius:"99999px",width:"2.5rem",height:"2.5rem"};return e||(l.cursor="pointer"),a.createElement("div",{className:"border"},a.createElement("div",{style:{color:"var(--ifm-toc-link-color)"}},"Was this helpful?"),a.createElement("div",{style:{borderWidth:"1px",padding:"3px",display:"flex"}},a.createElement("div",{style:{...l,background:"up"===e?"#84bef5":"",color:"up"===e?"#e9f1f2":""},onClick:()=>n("up")},a.createElement(v,null)),a.createElement("div",{style:{...l,marginLeft:"30px",background:"down"===e?"#84bef5":"",color:"down"===e?"#e9f1f2":""},onClick:()=>n("down")},a.createElement(d,null))))};function h(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},a.createElement(f,null),a.createElement(r.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);