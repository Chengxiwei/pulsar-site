"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:r}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??u;return y({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var h=n(72389);const f="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==s&&(u(t),l(r))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:d},i,{className:(0,o.Z)("tabs__item",g,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(C,(0,r.Z)({key:String(t)},e))}},45542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption"},l=void 0,c={unversionedId:"security-encryption",id:"version-2.4.1/security-encryption",title:"Pulsar Encryption",description:"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages.",source:"@site/versioned_docs/version-2.4.1/security-encryption.md",sourceDirName:".",slug:"/security-encryption",permalink:"/docs/2.4.1/security-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/security-encryption.md",tags:[],version:"2.4.1",frontMatter:{id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption"},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Authorization and ACLs",permalink:"/docs/2.4.1/security-authorization"},next:{title:"Extend Authentication and Authorization",permalink:"/docs/2.4.1/security-extending"}},p={},u=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Get started",id:"get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enable encryption at the producer application",id:"enable-encryption-at-the-producer-application",level:2},{value:"Decrypt encrypted messages at the consumer application",id:"decrypt-encrypted-messages-at-the-consumer-application",level:2},{value:"Handle failures",id:"handle-failures",level:2}],d={toc:u};function y(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."),(0,a.kt)("h2",{id:"asymmetric-and-symmetric-encryption"},"Asymmetric and symmetric encryption"),(0,a.kt)("p",null,"Pulsar uses a dynamically generated symmetric AES key to encrypt messages(data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the AES key(data key), so you do not have to share the secret with everyone."),(0,a.kt)("p",null,"Key is a public and private key pair used for encryption or decryption. The producer key is the public key of the key pair, and the consumer key is the private key of the key pair."),(0,a.kt)("p",null,"The application configures the producer with the public key. You can use this key to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key (in this case the consumer) are able to decrypt the data key which is used to decrypt the message."),(0,a.kt)("p",null,"You can encrypt a message with more than one key. Any one of the keys used for encrypting the message is sufficient to decrypt the message."),(0,a.kt)("p",null,"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost, and is unrecoverable."),(0,a.kt)("h2",{id:"producer"},"Producer"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(65362).Z,title:"Pulsar Encryption Producer",width:"960",height:"540"})),(0,a.kt)("h2",{id:"consumer"},"Consumer"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(75304).Z,title:"Pulsar Encryption Consumer",width:"960",height:"540"})),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create your ECDSA or RSA public and private key pair by using the following commands.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ECDSA\uff08for Java clients only)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RSA (for C++, Python and Node.js clients)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform pkcs8 -out test_rsa_pubkey.pem\n\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," interface, specifically ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader.getPublicKey()")," for producer and ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader.getPrivateKey()")," for consumer, which Pulsar client invokes to load the key.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Add the encryption key name to the producer builder: PulsarClient.newProducer().addEncryptionKey("myapp.key").')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," to a producer, consumer or reader."))),(0,a.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nString topic = "persistent://my-tenant/my-ns/my-topic";\n// RawFileKeyReader is just an example implementation that\'s not provided by Pulsar\nCryptoKeyReader keyReader = new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .cryptoKeyReader(keyReader)\n        .addEncryptionKey("myappkey")\n        .create();\n\nConsumer<byte[]> consumer = pulsarClient.newConsumer()\n        .topic(topic)\n        .subscriptionName("my-subscriber-name")\n        .cryptoKeyReader(keyReader)\n        .subscribe();\n\nReader<byte[]> reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(MessageId.earliest)\n        .cryptoKeyReader(keyReader)\n        .create();\n\n'))),(0,a.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\nstd::string topic = "persistent://my-tenant/my-ns/my-topic";\n// DefaultCryptoKeyReader is a built-in implementation that reads public key and private key from files\nauto keyReader = std::make_shared<DefaultCryptoKeyReader>("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setCryptoKeyReader(keyReader);\nproducerConf.addEncryptionKey("myappkey");\nclient.createProducer(topic, producerConf, producer);\n\nConsumer consumer;\nConsumerConfiguration consumerConf;\nconsumerConf.setCryptoKeyReader(keyReader);\nclient.subscribe(topic, "my-subscriber-name", consumerConf, consumer);\n\nReader reader;\nReaderConfiguration readerConf;\nreaderConf.setCryptoKeyReader(keyReader);\nclient.createReader(topic, MessageId::earliest(), readerConf, reader);\n\n'))),(0,a.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, CryptoKeyReader\n\nclient = Client('pulsar://localhost:6650')\ntopic = 'persistent://my-tenant/my-ns/my-topic'\n# CryptoKeyReader is a built-in implementation that reads public key and private key from files\nkey_reader = CryptoKeyReader('test_ecdsa_pubkey.pem', 'test_ecdsa_privkey.pem')\n\nproducer = client.create_producer(\n    topic=topic,\n    encryption_key='myappkey',\n    crypto_key_reader=key_reader\n)\n\nconsumer = client.subscribe(\n    topic=topic,\n    subscription_name='my-subscriber-name',\n    crypto_key_reader=key_reader\n)\n\nreader = client.create_reader(\n    topic=topic,\n    start_message_id=MessageId.earliest,\n    crypto_key_reader=key_reader\n)\n\nclient.close()\n\n"))),(0,a.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nodejs"},"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n// Create a client\nconst client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n});\n\n// Create a producer\nconst producer = await client.createProducer({\n    topic: 'persistent://public/default/my-topic',\n    sendTimeoutMs: 30000,\n    batchingEnabled: true,\n    publicKeyPath: \"public-key.client-rsa.pem\",\n    encryptionKey: \"encryption-key\"\n});\n\n// Create a consumer\nconst consumer = await client.subscribe({\n    topic: 'persistent://public/default/my-topic',\n    subscription: 'sub1',\n    subscriptionType: 'Shared',\n    ackTimeoutMs: 10000,\n    privateKeyPath: \"private-key.client-rsa.pem\"\n});\n\n// Send messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = `my-message-${i}`;\n    producer.send({\n    data: Buffer.from(msg),\n    });\n    console.log(`Sent message: ${msg}`);\n}\nawait producer.flush();\n\n// Receive messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = await consumer.receive();\n    console.log(msg.getData().toString());\n    consumer.acknowledge(msg);\n}\n\nawait consumer.close();\nawait producer.close();\nawait client.close();\n})();\n\n")))),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Below is an example of a ",(0,a.kt)("strong",{parentName:"li"},"customized")," ",(0,a.kt)("inlineCode",{parentName:"li"},"CryptoKeyReader")," implementation.")),(0,a.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\n'))),(0,a.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"\nclass CustomCryptoKeyReader : public CryptoKeyReader {\n    public:\n    Result getPublicKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n\n    Result getPrivateKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n};\n\nauto keyReader = std::make_shared<CustomCryptoKeyReader>(/* ... */);\n// TODO: create producer, consumer or reader based on keyReader here\n\n")),(0,a.kt)("p",null,"Besides, you can use the ",(0,a.kt)("strong",{parentName:"p"},"default")," implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," by specifying the paths of ",(0,a.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public key"),".")),(0,a.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("p",null,"Currently, ",(0,a.kt)("strong",{parentName:"p"},"customized")," ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Python. However, you can use the ",(0,a.kt)("strong",{parentName:"p"},"default")," implementation by specifying the path of ",(0,a.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public key"),".")),(0,a.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,a.kt)("p",null,"Currently, ",(0,a.kt)("strong",{parentName:"p"},"customized")," ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Node.js. However, you can use the ",(0,a.kt)("strong",{parentName:"p"},"default")," implementation by specifying the path of ",(0,a.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public key"),"."))),(0,a.kt)("h2",{id:"key-rotation"},"Key rotation"),(0,a.kt)("p",null,"Pulsar generates a new AES data key every 4 hours or after publishing a certain number of messages. A producer fetches the asymmetric public key every 4 hours by calling CryptoKeyReader.getPublicKey() to retrieve the latest version."),(0,a.kt)("h2",{id:"enable-encryption-at-the-producer-application"},"Enable encryption at the producer application"),(0,a.kt)("p",null,"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The consumer application provides you access to their public key, which you add to your producer keys."),(0,a.kt)("li",{parentName:"ol"},"You grant access to one of the private keys from the pairs that producer uses.")),(0,a.kt)("p",null,"When producers want to encrypt the messages with multiple keys, producers add all such keys to the config. Consumer can decrypt the message as long as the consumer has access to at least one of the keys."),(0,a.kt)("p",null,"If you need to encrypt the messages using 2 keys (",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.messagekey1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.messagekey2"),"), refer to the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n\n')),(0,a.kt)("h2",{id:"decrypt-encrypted-messages-at-the-consumer-application"},"Decrypt encrypted messages at the consumer application"),(0,a.kt)("p",null,"Consumers require to access one of the private keys to decrypt messages that the producer produces. If you want to receive encrypted messages, create a public or private key and give your public key to the producer application to encrypt messages using your public key."),(0,a.kt)("h2",{id:"handle-failures"},"Handle failures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Producer/Consumer loses access to the key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)")," to control the producer behavior. The default behavior is to fail the request."),(0,a.kt)("li",{parentName:"ul"},"If consumption fails due to decryption failure or missing keys in consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)")," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."))),(0,a.kt)("li",{parentName:"ul"},"Batch messaging",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if cryptoFailureAction() is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsumerCryptoFailureAction.CONSUME"),"."))),(0,a.kt)("li",{parentName:"ul"},"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages.")))}y.isMDXComponent=!0},75304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},65362:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"}}]);