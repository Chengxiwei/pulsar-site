"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var f=a(72389);const k="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},o,{className:(0,i.Z)("tabs__item",g,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},91267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),o=a(85162);const s={id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic",original_id:"security-basic-auth"},l=void 0,u={unversionedId:"security-basic-auth",id:"version-2.7.0/security-basic-auth",title:"Authentication using HTTP basic",description:"Basic authentication is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials.",source:"@site/versioned_docs/version-2.7.0/security-basic-auth.md",sourceDirName:".",slug:"/security-basic-auth",permalink:"/docs/2.7.0/security-basic-auth",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/security-basic-auth.md",tags:[],version:"2.7.0",frontMatter:{id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic",original_id:"security-basic-auth"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Authentication using OAuth 2.0 access tokens",permalink:"/docs/2.7.0/security-oauth2"},next:{title:"Authorization and ACLs",permalink:"/docs/2.7.0/security-authorization"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your authentication file",id:"create-your-authentication-file",level:2},{value:"Enable basic authentication on brokers",id:"enable-basic-authentication-on-brokers",level:2},{value:"Enable basic authentication on proxies",id:"enable-basic-authentication-on-proxies",level:2},{value:"Configure basic authentication in CLI tools",id:"configure-basic-authentication-in-cli-tools",level:2},{value:"Configure basic authentication in Pulsar clients",id:"configure-basic-authentication-in-pulsar-clients",level:2}],h={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic authentication")," is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html"},(0,r.kt)("inlineCode",{parentName:"a"},"htpasswd"))," in your environment to create a password file for storing username-password pairs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Ubuntu/Debian, run the following command to install ",(0,r.kt)("inlineCode",{parentName:"p"},"htpasswd"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2-utils\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For CentOS/RHEL, run the following command to install ",(0,r.kt)("inlineCode",{parentName:"p"},"htpasswd"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install httpd-tools\n")))),(0,r.kt)("h2",{id:"create-your-authentication-file"},"Create your authentication file"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, you can use MD5 (recommended) and CRYPT encryption to authenticate your password.")),(0,r.kt)("p",null,"Create a password file named ",(0,r.kt)("inlineCode",{parentName:"p"},".htpasswd")," with a user account ",(0,r.kt)("inlineCode",{parentName:"p"},"superuser/admin"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use MD5 encryption (recommended):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -cmb /path/to/.htpasswd superuser admin\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use CRYPT encryption:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -cdb /path/to/.htpasswd superuser admin\n")))),(0,r.kt)("p",null,"You can preview the content of your password file by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat path/to/.htpasswd\nsuperuser:$apr1$GBIYZYFZ$MzLcPrvoUky16mLcK6UtX/\n")),(0,r.kt)("h2",{id:"enable-basic-authentication-on-brokers"},"Enable basic authentication on brokers"),(0,r.kt)("p",null,"To configure brokers to authenticate clients, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'# Configuration to enable Basic authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\n\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n\n# If this flag is set then the broker authenticates the original Auth data\n# else it just accepts the originalPrincipal and authorizes it (if required).\nauthenticateOriginalAuthData=true\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can also set an environment variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," and the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"),". Pulsar reads this environment variable to implement HTTP basic authentication.")),(0,r.kt)("h2",{id:"enable-basic-authentication-on-proxies"},"Enable basic authentication on proxies"),(0,r.kt)("p",null,"To configure proxies to authenticate clients, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'# For clients connecting to the proxy\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\n\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n\n# Whether client authorization credentials are forwarded to the broker for re-authorization.\n# Authentication must be enabled via authenticationEnabled=true for this to take effect.\nforwardAuthorizationCredentials=true\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can also set an environment variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," and the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"),". Pulsar reads this environment variable to implement HTTP basic authentication.")),(0,r.kt)("h2",{id:"configure-basic-authentication-in-cli-tools"},"Configure basic authentication in CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},"Command-line tools"),", such as ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar-admin"),", ",(0,r.kt)("a",{href:"/tools/pulsar-perf/",target:"_blank"},"Pulsar-perf")," and ",(0,r.kt)("a",{href:"/tools/pulsar-client/",target:"_blank"},"Pulsar-client"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file in your Pulsar installation. To configure basic authentication in Pulsar CLI tools, you need to add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nauthParams={"userId":"superuser","password":"admin"}\n')),(0,r.kt)("h2",{id:"configure-basic-authentication-in-pulsar-clients"},"Configure basic authentication in Pulsar clients"),(0,r.kt)("p",null,"The following example shows how to configure basic authentication when using Pulsar clients."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthenticationBasic auth = new AuthenticationBasic();\nauth.configure("{\\"userId\\":\\"superuser\\",\\"password\\":\\"admin\\"}");\nPulsarClient client = PulsarClient.builder()\n   .serviceUrl("pulsar://broker.example.com:6650")\n   .authentication(auth)\n   .build();\n'))),(0,r.kt)(o.Z,{value:"C++",label:"C++",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nint main() {\n    pulsar::ClientConfiguration config;\n    AuthenticationPtr auth = pulsar::AuthBasic::create("admin", "123456")\n    config.setAuth(auth);\n    pulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n    return 0;\n}\n')))))}d.isMDXComponent=!0}}]);