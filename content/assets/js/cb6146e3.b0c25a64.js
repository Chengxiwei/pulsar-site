"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13353],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},12117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},i=void 0,c={unversionedId:"security-bouncy-castle",id:"version-2.5.1/security-bouncy-castle",title:"Bouncy Castle Providers",description:"BouncyCastle Introduce",source:"@site/versioned_docs/version-2.5.1/security-bouncy-castle.md",sourceDirName:".",slug:"/security-bouncy-castle",permalink:"/docs/2.5.1/security-bouncy-castle",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/security-bouncy-castle.md",tags:[],version:"2.5.1",frontMatter:{id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Extend Authentication and Authorization",permalink:"/docs/2.5.1/security-extending"},next:{title:"Java",permalink:"/docs/2.5.1/client-libraries-java"}},l={},s=[{value:"BouncyCastle Introduce",id:"bouncycastle-introduce",level:2},{value:"Include dependencies of BC-non-FIPS",id:"include-dependencies-of-bc-non-fips",level:2},{value:"Pulsar Client and Broker dependencies on BC-non-FIPS",id:"pulsar-client-and-broker-dependencies-on-bc-non-fips",level:3},{value:"Exclude BC-non-FIPS and include BC-FIPS",id:"exclude-bc-non-fips-and-include-bc-fips",level:2},{value:"BC-FIPS",id:"bc-fips",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bouncycastle-introduce"},"BouncyCastle Introduce"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," is a Java library that complements the default Java Cryptographic Extension (JCE),\nand it many more cipher suites and algorithms than the default JCE provided by Sun."),(0,a.kt)("p",null,"In addition to that, ",(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," has lots of utilities for reading arcane formats like PEM and ASN.1 that no sane person would want to rewrite themselves."),(0,a.kt)("p",null,"In Pulsar, security and crypto have dependencies on BouncyCastle Jars. For the detailed installing and configuring Bouncy Castle FIPS, see ",(0,a.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/documentation.html"},"BC FIPS Documentation"),", especially the ",(0,a.kt)("strong",{parentName:"p"},"User Guides")," and ",(0,a.kt)("strong",{parentName:"p"},"Security Policy")," PDFs."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," provides both ",(0,a.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/fips_faq.html"},"FIPS")," and non-FIPS version. But in a JVM, you can not include both of the 2 versions, and you need to exclude the current version before include the other."),(0,a.kt)("p",null,"In Pulsar, the security and crypto methods also depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle"),", especially in ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/security-tls-authentication"},"TLS Authentication")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/security-encryption"},"Transport Encryption"),". This document contains the configuration between BouncyCastle FIPS(BC-FIPS) and non-FIPS(BC-non-FIPS) version while using Pulsar."),(0,a.kt)("h2",{id:"include-dependencies-of-bc-non-fips"},"Include dependencies of BC-non-FIPS"),(0,a.kt)("p",null,"By default, BouncyCastle non-FIPS version is build along with Pulsar's Broker and Java client."),(0,a.kt)("p",null,"Pulsar module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),", which defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bc/pom.xml")," contains the needed non-FIPS jars for Pulsar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-jdk15on</artifactId>\n      <version>${bouncycastle.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcprov-ext-jdk15on</artifactId>\n      <version>${bouncycastle.version}</version>\n    </dependency>\n\n")),(0,a.kt)("p",null,"By using this ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," module, user can easily include and exclude BouncyCastle non-FIPS jars."),(0,a.kt)("h3",{id:"pulsar-client-and-broker-dependencies-on-bc-non-fips"},"Pulsar Client and Broker dependencies on BC-non-FIPS"),(0,a.kt)("p",null,"Pulsar Client(",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-client-original"),") module include BouncyCastle non-FIPS jars by add dependency like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>bouncy-castle-bc</artifactId>\n      <version>${project.parent.version}</version>\n      <classifier>pkg</classifier>\n    </dependency>\n\n")),(0,a.kt)("p",null,"And Pulsar Broker (",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-broker"),") module include BouncyCastle non-FIPS jars by indirectly include Pulsar Client(",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-client-original"),") module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-original</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n\n")),(0,a.kt)("h2",{id:"exclude-bc-non-fips-and-include-bc-fips"},"Exclude BC-non-FIPS and include BC-FIPS"),(0,a.kt)("p",null,"After understanding the above dependencies, user can easily exclude non-FIPS version and include FIPS version."),(0,a.kt)("h3",{id:"bc-fips"},"BC-FIPS"),(0,a.kt)("p",null,"Pulsar module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips"),", which defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bcfips/pom.xml")," contains the needed FIPS jars for Pulsar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bc-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n")),(0,a.kt)("p",null,"User can choose include module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," module directly, or include original BC-FIPS jars."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>${project.groupId}</groupId>\n      <artifactId>pulsar-broker</artifactId>\n      <version>${project.version}</version>\n      <exclusions>\n        <exclusion>\n          <groupId>${project.groupId}</groupId>\n          <artifactId>bouncy-castle-bc</artifactId>\n        </exclusion>\n      </exclusions>\n    </dependency>\n\n    \x3c!--exclude bouncy castle non-FIPS version, then load fips version--\x3e\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bc-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n")),(0,a.kt)("p",null,"Besides this, module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," builds contain an output with format NAR, you can set java environment by ",(0,a.kt)("inlineCode",{parentName:"p"},"-DBcPath='nar/file/path'"),", Pulsar will auto load it."),(0,a.kt)("p",null,"For more example, you can reference module ",(0,a.kt)("inlineCode",{parentName:"p"},"bcfips-include-test")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bcfips-nar-test"),"."))}u.isMDXComponent=!0}}]);