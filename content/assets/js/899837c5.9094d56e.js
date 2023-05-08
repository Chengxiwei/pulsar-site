"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(87462),a=r(67294),i=r(86010),o=r(12466),l=r(16550),s=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),v=(()=>{const e=s??p;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var v=r(72389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",g,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},58437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const i={id:"client-api-overview",title:"Client API",sidebar_label:"Overview"},o=void 0,l={unversionedId:"client-api-overview",id:"version-2.11.x/client-api-overview",title:"Client API",description:"Pulsar client APIs allow you to create and configure producers, consumers, and readers; produce and consume messages; perform authentication and authorization tasks, and so on via programmable interfaces. They encapsulate and optimize Pulsar\u2019s client-broker communication protocols and add additional features using Pulsar primitives. Pulsar exposes client APIs with language bindings for Java, C++, Python, Go, Node.js, WebSocket, and C#.",source:"@site/versioned_docs/version-2.11.x/client-api-overview.md",sourceDirName:".",slug:"/client-api-overview",permalink:"/docs/2.11.x/client-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/client-api-overview.md",tags:[],version:"2.11.x",frontMatter:{id:"client-api-overview",title:"Client API",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/2.11.x/pulsar-api-overview"},next:{title:"Overview",permalink:"/docs/2.11.x/admin-api-overview"}},s={},u=[{value:"Next steps",id:"next-steps",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pulsar client APIs allow you to create and configure producers, consumers, and readers; produce and consume messages; perform authentication and authorization tasks, and so on via programmable interfaces. They encapsulate and optimize Pulsar\u2019s client-broker communication protocols and add additional features using Pulsar primitives. Pulsar exposes client APIs with language bindings for ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-java"},"Java"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-cpp"},"C++"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-python"},"Python"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-go"},"Go"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-node"},"Node.js"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-websocket"},"WebSocket"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-dotnet"},"C#"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Client APIs - Definition",src:r(1112).Z,width:"1210",height:"375"})),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"For more details about Pulsar clients, including language-specific client libraries, feature matrix, third-party clients, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries"},"Pulsar client - Overview"),"."))}p.isMDXComponent=!0},1112:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/client-api-definition-d44017eab8965a0a3e55c420f7864158.svg"}}]);