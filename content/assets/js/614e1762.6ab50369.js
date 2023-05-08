"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var k=a(72389);const h="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==o&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",g,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},53652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),l=a(85162);const o={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication "},s=void 0,u={unversionedId:"cookbooks-deduplication",id:"version-2.4.1/cookbooks-deduplication",title:"Message deduplication",description:"When Message deduplication is enabled, it ensures that each message produced on Pulsar topics is persisted to disk only once, even if the message is produced more than once. Message deduplication is handled automatically on the server side.",source:"@site/versioned_docs/version-2.4.1/cookbooks-deduplication.md",sourceDirName:".",slug:"/cookbooks-deduplication",permalink:"/docs/2.4.1/cookbooks-deduplication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/cookbooks-deduplication.md",tags:[],version:"2.4.1",frontMatter:{id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication "},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Topic compaction",permalink:"/docs/2.4.1/cookbooks-compaction"},next:{title:"Non-persistent messaging",permalink:"/docs/2.4.1/cookbooks-non-persistent"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication",id:"enable-message-deduplication",level:3},{value:"Disable message deduplication",id:"disable-message-deduplication",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When ",(0,r.kt)("strong",{parentName:"p"},"Message deduplication")," is enabled, it ensures that each message produced on Pulsar topics is persisted to disk ",(0,r.kt)("em",{parentName:"p"},"only once"),", even if the message is produced more than once. Message deduplication is handled automatically on the server side."),(0,r.kt)("p",null,"To use message deduplication in Pulsar, you need to configure your Pulsar brokers and clients."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"You can enable or disable message deduplication at the namespace level or the topic level. By default, it is disabled on all namespaces or topics. You can enable it in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable deduplication for all namespaces/topics at the broker-level."),(0,r.kt)("li",{parentName:"ul"},"Enable deduplication for a specific namespace with the ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar-admin namespaces")," interface."),(0,r.kt)("li",{parentName:"ul"},"Enable deduplication for a specific topic with the ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar-admin topics")," interface.")),(0,r.kt)("h2",{id:"configure-message-deduplication"},"Configure message deduplication"),(0,r.kt)("p",null,"You can configure message deduplication in Pulsar using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#broker"},(0,r.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file. The following deduplication-related parameters are available."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", message deduplication is enabled on all namespaces/topics. If it is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", you have to enable or disable deduplication at the namespace level or the topic level."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationMaxNumberOfProducers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of producers for which information is stored for deduplication purposes."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationSnapshotIntervalSeconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time period after which a deduplication informational snapshot is taken. It runs simultaneously with ",(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"120"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationProducerInactivityTimeoutMinutes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"360")," (6 hours)")))),(0,r.kt)("h3",{id:"set-default-value-at-the-broker-level"},"Set default value at the broker-level"),(0,r.kt)("p",null,"By default, message deduplication is ",(0,r.kt)("em",{parentName:"p"},"disabled")," on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and re-start the broker."),(0,r.kt)("p",null,"Even if you set the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled"),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker-level."),(0,r.kt)("h3",{id:"enable-message-deduplication"},"Enable message deduplication"),(0,r.kt)("p",null,"Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-pulsar-admin#namespace-set-deduplication"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-deduplication"))," or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-pulsar-admin#topic-set-deduplication"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--enable"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," flag and specify the namespace/topic."),(0,r.kt)("p",null,"The following example shows how to enable message deduplication at the namespace level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --enable # or just -e\n\n")),(0,r.kt)("h3",{id:"disable-message-deduplication"},"Disable message deduplication"),(0,r.kt)("p",null,"Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-pulsar-admin#namespace-set-deduplication"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespace set-deduplication"))," or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-pulsar-admin#topic-set-deduplication"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag and specify the namespace/topic."),(0,r.kt)("p",null,"The following example shows how to disable message deduplication at the namespace level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --disable # or just -d\n\n")),(0,r.kt)("h2",{id:"pulsar-clients"},"Pulsar clients"),(0,r.kt)("p",null,"If you enable message deduplication in Pulsar brokers, you need complete the following tasks for your client producers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Specify a name for the producer."),(0,r.kt)("li",{parentName:"ol"},"Set the message timeout to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (namely, no timeout).")),(0,r.kt)("p",null,"The instructions for Java, Python, and C++ clients are different."),(0,r.kt)(i.Z,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java clients",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable message deduplication on a ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-java.md#producers"},"Java producer"),", set the producer name using the ",(0,r.kt)("inlineCode",{parentName:"p"},"producerName")," setter, and set the timeout to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTimeout")," setter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n\n'))),(0,r.kt)(l.Z,{value:"Python clients",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable message deduplication on a ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-python.md#producers"},"Python producer"),", set the producer name using ",(0,r.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n\n'))),(0,r.kt)(l.Z,{value:"C++ clients",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable message deduplication on a ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-cpp.md#producer"},"C++ producer"),", set the producer name using ",(0,r.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n\n')))))}m.isMDXComponent=!0}}]);