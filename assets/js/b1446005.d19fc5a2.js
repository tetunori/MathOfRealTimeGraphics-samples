"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[4378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:13},o="Others",s={unversionedId:"others",id:"others",title:"Others",description:"About this site\ud83d\udcdd",source:"@site/docs/others.md",sourceDirName:".",slug:"/others",permalink:"/MathOfRealTimeGraphics-samples/docs/others",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Errata",permalink:"/MathOfRealTimeGraphics-samples/docs/errata"}},l={},c=[{value:"About this site\ud83d\udcdd",id:"about-this-site",level:2},{value:"Environment\ud83d\udcbb",id:"environment",level:2},{value:"Supported devices",id:"supported-devices",level:3},{value:"License\u2696\ufe0f",id:"license\ufe0f",level:2},{value:"Reference\ud83d\udcd6",id:"reference",level:2},{value:"Shader codes",id:"shader-codes",level:3},{value:"Emoji icons",id:"emoji-icons",level:3},{value:"GLSL library",id:"glsl-library",level:3},{value:"Static site generator",id:"static-site-generator",level:3},{value:"GLSL canvas box",id:"glsl-canvas-box",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"others"},"Others"),(0,n.kt)("h2",{id:"about-this-site"},"About this site\ud83d\udcdd"),(0,n.kt)("p",null,"You can view ",(0,n.kt)("strong",{parentName:"p"},"UNOFFICIAL")," samples for the book\ud83d\udcda ",(0,n.kt)("a",{parentName:"p",href:"https://gihyo.jp/book/2022/978-4-297-13034-3"},'"Mathmatics of Real-Time Graphics" | "\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u6570\u5b66"')," written by Tatsuki HAYAMA and published by Gijutsu-Hyohron Co., Ltd.",(0,n.kt)("br",{parentName:"p"}),"\n","Hosted on GitHub. Version ",(0,n.kt)("inlineCode",{parentName:"p"},"0.5.0"),". "),(0,n.kt)("h2",{id:"environment"},"Environment\ud83d\udcbb"),(0,n.kt)("h3",{id:"supported-devices"},"Supported devices"),(0,n.kt)("p",null,"This site can be viewed from PCs/Smartphones/tablets.\nAlso, A lot of latest OS/browser support ",(0,n.kt)("inlineCode",{parentName:"p"},"WebGL 2.0")," now. Please check ",(0,n.kt)("a",{parentName:"p",href:"https://caniuse.com/webgl2"},"can I use site"),".",(0,n.kt)("br",{parentName:"p"}),"\n","But please update your device beforehand."),(0,n.kt)("h2",{id:"license\ufe0f"},"License\u2696\ufe0f"),(0,n.kt)("p",null,"Copyright (c) 2022 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tetunori"},"Tetsunori Nakayama"),". MIT License."),(0,n.kt)("h2",{id:"reference"},"Reference\ud83d\udcd6"),(0,n.kt)("h3",{id:"shader-codes"},"Shader codes"),(0,n.kt)("p",null,"All shader codes are from ",(0,n.kt)("a",{parentName:"p",href:"https://gihyo.jp/book/2022/978-4-297-13034-3/support"},"official samples"),"."),(0,n.kt)("h3",{id:"emoji-icons"},"Emoji icons"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/fluentui-emoji"},"fluentui-emoji")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft"},"Microsoft"),". MIT License."),(0,n.kt)("h3",{id:"glsl-library"},"GLSL library"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/actarian/glsl-canvas"},"glsl-canvas")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/actarian"},"actarian"),". MIT License."),(0,n.kt)("h3",{id:"static-site-generator"},"Static site generator"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"docusaurus")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook"},"Meta"),". MIT License."),(0,n.kt)("h3",{id:"glsl-canvas-box"},"GLSL canvas box"),(0,n.kt)("p",null,"Forked from ",(0,n.kt)("a",{parentName:"p",href:"https://flatifycss.com/"},"FlatifyCSS")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/amir2mi"},"amir2mi"),". MIT License."))}u.isMDXComponent=!0}}]);