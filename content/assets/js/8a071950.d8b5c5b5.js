"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[94138],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23089:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"},i=void 0,o={unversionedId:"io-jdbc-sink",id:"version-2.5.1/io-jdbc-sink",title:"JDBC sink connector",description:"The JDBC sink connector pulls messages from Pulsar topics",source:"@site/versioned_docs/version-2.5.1/io-jdbc-sink.md",sourceDirName:".",slug:"/io-jdbc-sink",permalink:"/docs/2.5.1/io-jdbc-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/io-jdbc-sink.md",tags:[],version:"2.5.1",frontMatter:{id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The JDBC sink connector pulls messages from Pulsar topics\nand persists the messages to MySQL or SQlite."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Currently, INSERT, DELETE and UPDATE operations are supported.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the JDBC sink connector has the following properties."),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The username used to connect to the database specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"jdbcUrl"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: ",(0,r.kt)("inlineCode",{parentName:"strong"},"userName")," is case-sensitive."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The password used to connect to the database specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"jdbcUrl"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: ",(0,r.kt)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbcUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC URL of the database to which the connector connects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tableName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table to which the connector writes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonKey")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list contains the fields used in updating events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list contains the fields used in ",(0,r.kt)("inlineCode",{parentName:"td"},"where")," condition of updating and deleting events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutMs")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC operation timeout in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"The batch size of updates made to the database.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Before using the JDBC sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "root",\n    "password": "jdbc",\n    "jdbcUrl": "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink",\n    "tableName": "pulsar_mysql_jdbc_sink"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    userName: "root"\n    password: "jdbc"\n    jdbcUrl: "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink"\n    tableName: "pulsar_mysql_jdbc_sink"\n\n')))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("strong",{parentName:"p"},"how to use a JDBC sink connector"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.5.1/io-quickstart#connect-pulsar-to-mysql"},"connect Pulsar to MySQL"),"."))}u.isMDXComponent=!0}}]);