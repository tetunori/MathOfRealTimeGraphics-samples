(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[7918],{31986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(87462),l=n(67294),o=n(86010),r=n(35281),c=n(52802),s=n(48596),i=n(39960),m=n(44996),d=n(95999);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function h(e){let{children:t,href:n,isLast:a}=e;const o="breadcrumbs__link";return a?l.createElement("span",{className:o,itemProp:"name"},t):n?l.createElement(i.Z,{className:o,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:o},t)}function f(e){let{children:t,active:n,index:r,addMicrodata:c}=e;return l.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function v(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,o.Z)("breadcrumbs__link",p.breadcrumbsItemLink),href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}function b(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,o.Z)(r.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(v,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(f,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},9360:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ct});var a=n(67294),l=n(1944),o=n(902);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new o.i6("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:n,assets:o}=s();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=o.image)?e:n.image})}var m=n(86010),d=n(87524),u=n(4966);function p(){const{metadata:e}=s();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var h=n(23120),f=n(44364),v=n(35281),b=n(95999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return a.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=n(87462);const L="iconEdit_Z9Sw";function y(e){let{className:t,...n}=e;return a.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(L,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},a.createElement(y,null),a.createElement(b.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Z=n(39960);const _="tag_zVej",T="tagRegular_sFm0",B="tagWithCount_h2kH";function w(e){let{permalink:t,label:n,count:l}=e;return a.createElement(Z.Z,{href:t,className:(0,m.Z)(_,l?B:T)},n,l&&a.createElement("span",null,l))}const x="tags_jXut",A="tag_QGVx";function H(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,m.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:A},a.createElement(w,{label:t,permalink:n}))}))))}const M="lastUpdated_vwxv";function I(e){return a.createElement("div",{className:(0,m.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(H,e)))}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,m.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(C,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",M)},(n||l)&&a.createElement(N,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function U(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,c=r.length>0,i=!!(t||n||o);return c||i?a.createElement("footer",{className:(0,m.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(I,{tags:r}),i&&a.createElement(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var V=n(86043),z=n(86668);function j(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function R(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=R({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function O(e){const t=e.getBoundingClientRect();return t.top===t.bottom?O(e.parentNode):t}function P(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>O(e).top>=a));if(l){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(O(l))?l:null!=(o=e[e.indexOf(l)-1])?o:null}return null!=(n=e[e.length-1])?n:null}function D(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,z.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function W(e){const t=(0,a.useRef)(void 0),n=D();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=P(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function F(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(F,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const q=a.memo(F);function G(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:c,...s}=e;const i=(0,z.L)(),m=null!=r?r:i.tableOfContents.minHeadingLevel,d=null!=c?c:i.tableOfContents.maxHeadingLevel,u=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>R({toc:j(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:m,maxHeadingLevel:d});return W((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:d}}),[l,o,m,d])),a.createElement(q,(0,k.Z)({toc:u,className:n,linkClassName:l},s))}const $="tocCollapsibleButton_TO0P",J="tocCollapsibleButtonExpanded_MG3E";function Q(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,k.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",$,!t&&J,n.className)}),a.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Y="tocCollapsible_ETCw",X="tocCollapsibleContent_vkbj",K="tocCollapsibleExpanded_sAul";function ee(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:c}=(0,V.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(Y,!r&&K,n)},a.createElement(Q,{collapsed:r,onClick:c}),a.createElement(V.z,{lazy:!0,className:X,collapsed:r},a.createElement(G,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const te="tocMobile_ITEo";function ne(){const{toc:e,frontMatter:t}=s();return a.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(v.k.docs.docTocMobile,te)})}const ae="tableOfContents_bqdL";function le(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,m.Z)(ae,"thin-scrollbar",t)},a.createElement(G,(0,k.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function oe(){const{toc:e,frontMatter:t}=s();return a.createElement(le,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var re=n(92503),ce=n(3905),se=n(35742);var ie=n(72389),me=n(66412),de=n(87594),ue=n.n(de);const pe=/title=(?<quote>["'])(?<title>.*?)\1/,he=/\{(?<range>[\d,-]+)\}/,fe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function ve(e,t){const n=e.map((e=>{const{start:n,end:a}=fe[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function be(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:l,metastring:o}=t;if(o&&he.test(o)){const e=o.match(he).groups.range;if(0===l.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=l[0].className,a=ue()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ve(["js","jsBlock"],t);case"jsx":case"tsx":return ve(["js","jsBlock","jsx"],t);case"html":return ve(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ve(["bash"],t);case"markdown":case"md":return ve(["html","jsx","bash"],t);default:return ve(Object.keys(fe),t)}}(a,l),c=n.split("\n"),s=Object.fromEntries(l.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(l.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=p+",":m[t]?s[m[t]].start=p:d[t]&&(s[d[t]].range+=s[d[t]].start+"-"+(p-1)+","),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;ue()(n).forEach((e=>{null!=u[e]||(u[e]=[]),u[e].push(t)}))})),{lineClassNames:u,code:n}}const ge="codeBlockContainer_Ckt0";function Ee(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,l]=e;const o=t[a];o&&"string"==typeof l&&(n[o]=l)})),n}((0,me.p)());return a.createElement(t,(0,k.Z)({},n,{style:l,className:(0,m.Z)(n.className,ge,v.k.common.codeBlock)}))}const Ne={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function ke(e){let{children:t,className:n}=e;return a.createElement(Ee,{as:"pre",tabIndex:0,className:(0,m.Z)(Ne.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Ne.codeBlockLines},t))}const Le={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ye(e,t){const[n,l]=(0,a.useState)(),r=(0,a.useCallback)((()=>{var t;l(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,a.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=Le);const l=(0,o.zX)(t),r=(0,o.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(l);return e&&t.observe(e,r),()=>t.disconnect()}),[e,l,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Ce=n(23746);const Ze="codeLine_lJS_",_e="codeLineNumber_Tfdd",Te="codeLineContent_feaV";function Be(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:o,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,m.Z)(n,l&&Ze)}),s=t.map(((e,t)=>a.createElement("span",(0,k.Z)({key:t},r({token:e,key:t})))));return a.createElement("span",c,l?a.createElement(a.Fragment,null,a.createElement("span",{className:_e}),a.createElement("span",{className:Te},s)):a.createElement(a.Fragment,null,s,a.createElement("br",null)))}const we={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function xe(e){let{code:t,className:n}=e;const[l,o]=(0,a.useState)(!1),r=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}n.remove(),o&&(l.removeAllRanges(),l.addRange(o)),a&&a.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),a.createElement("button",{type:"button","aria-label":l?(0,b.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,b.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,m.Z)("clean-btn",n,we.copyButton,l&&we.copyButtonCopied),onClick:c},a.createElement("span",{className:we.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:we.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:we.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Ae="wordWrapButtonIcon_Bwma",He="wordWrapButtonEnabled_EoeP";function Me(e){let{className:t,onClick:n,isEnabled:l}=e;const o=(0,b.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,m.Z)("clean-btn",t,l&&He),"aria-label":o,title:o},a.createElement("svg",{className:Ae,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Ie(e){var t;let{children:n,className:l="",metastring:o,title:r,showLineNumbers:c,language:s}=e;const{prism:{defaultLanguage:i,magicComments:d}}=(0,z.L)(),u=null!=(t=null!=s?s:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(l))?t:i,p=(0,me.p)(),h=function(){const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(null),r=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");l(n)}),[o]);return ye(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:r}}(),f=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(pe))?void 0:n.groups.title)?t:""}(o)||r,{lineClassNames:v,code:b}=be(n,{metastring:o,language:u,magicComments:d}),g=null!=c?c:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(Ee,{as:"div",className:(0,m.Z)(l,u&&!l.includes("language-"+u)&&"language-"+u)},f&&a.createElement("div",{className:Ne.codeBlockTitle},f),a.createElement("div",{className:Ne.codeBlockContent},a.createElement(Ce.ZP,(0,k.Z)({},Ce.lG,{theme:p,code:b,language:null!=u?u:"text"}),(e=>{let{className:t,tokens:n,getLineProps:l,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,m.Z)(t,Ne.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,m.Z)(Ne.codeBlockLines,g&&Ne.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(Be,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:v[t],showLineNumbers:g})))))})),a.createElement("div",{className:Ne.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&a.createElement(Me,{className:Ne.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),a.createElement(xe,{className:Ne.codeButton,code:b}))))}function Se(e){let{children:t,...n}=e;const l=(0,ie.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof o?Ie:ke;return a.createElement(r,(0,k.Z)({key:String(l)},n),o)}const Ue="details_lb9f",Ve="isBrowser_bmU9",ze="collapsibleContent_i85q";function je(e){return!!e&&("SUMMARY"===e.tagName||je(e.parentElement))}function Re(e,t){return!!e&&(e===t||Re(e.parentElement,t))}function Oe(e){let{summary:t,children:n,...l}=e;const o=(0,ie.Z)(),r=(0,a.useRef)(null),{collapsed:c,setCollapsed:s}=(0,V.u)({initialState:!l.open}),[i,d]=(0,a.useState)(l.open);return a.createElement("details",(0,k.Z)({},l,{ref:r,open:i,"data-collapsed":c,className:(0,m.Z)(Ue,o&&Ve,l.className),onMouseDown:e=>{je(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;je(t)&&Re(t,r.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(V.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),d(!e)}},a.createElement("div",{className:ze},n)))}const Pe="details_b_Ee";function De(e){let{...t}=e;return a.createElement(Oe,(0,k.Z)({},t,{className:(0,m.Z)("alert alert--info",Pe,t.className)}))}function We(e){return a.createElement(re.Z,e)}const Fe="containsTaskList_mC6p";const qe="img_ev3q";const Ge="admonition_LlT9",$e="admonitionHeading_tbUL",Je="admonitionIcon_kALy",Qe="admonitionContent_S0QG";const Ye={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(b.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(b.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(b.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Xe={secondary:"note",important:"info",success:"tip",warning:"danger"};function Ke(e){var t;const{mdxAdmonitionTitle:n,rest:l}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:l}}const et={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(se.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(Se,e)},a:function(e){return a.createElement(Z.Z,e)},pre:function(e){var t;return a.createElement(Se,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(De,(0,k.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,k.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Fe))}));var t},img:function(e){return a.createElement("img",(0,k.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,qe))}));var t},h1:e=>a.createElement(We,(0,k.Z)({as:"h1"},e)),h2:e=>a.createElement(We,(0,k.Z)({as:"h2"},e)),h3:e=>a.createElement(We,(0,k.Z)({as:"h3"},e)),h4:e=>a.createElement(We,(0,k.Z)({as:"h4"},e)),h5:e=>a.createElement(We,(0,k.Z)({as:"h5"},e)),h6:e=>a.createElement(We,(0,k.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:o}=Ke(e),r=function(e){var t;const n=null!=(t=Xe[e])?t:e;return Ye[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),Ye.info)}(n),c=null!=l?l:r.label,{iconComponent:s}=r,i=null!=o?o:a.createElement(s,null);return a.createElement("div",{className:(0,m.Z)(v.k.common.admonition,v.k.common.admonitionType(e.type),"alert","alert--"+r.infimaClassName,Ge)},a.createElement("div",{className:$e},a.createElement("span",{className:Je},i),c),a.createElement("div",{className:Qe},t))}};function tt(e){let{children:t}=e;return a.createElement(ce.Zo,{components:et},t)}function nt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(v.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(re.Z,{as:"h1"},n)),a.createElement(tt,null,t))}var at=n(31986);const lt="docItemContainer_Djhp",ot="docItemCol_VOVn";function rt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,d.i)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(ne,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(oe,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&ot)},a.createElement(h.Z,null),a.createElement("div",{className:lt},a.createElement("article",null,a.createElement(at.Z,null),a.createElement(f.Z,null),n.mobile,a.createElement(nt,null,t),a.createElement(U,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ct(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(c,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(rt,null,a.createElement(n,null))))}},4966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(87462),l=n(67294),o=n(95999),r=n(86010),c=n(39960);function s(e){const{permalink:t,title:n,subLabel:a,isNext:o}=e;return l.createElement(c.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(s,(0,a.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(s,(0,a.Z)({},n,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),l=n(86010),o=n(95999),r=n(35281),c=n(74477);function s(e){let{className:t}=e;const n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(67294),l=n(86010),o=n(52263),r=n(39960),c=n(95999),s=n(80143),i=n(35281),m=n(60373),d=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:l},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,s.Jo)(c),v=null!=u?u:(b=f).docs.find((e=>e.id===b.mainDocId));var b;return a.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:f.label,to:v.path,onClick:()=>d(f.name)})))}function v(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(f,{className:t,versionMetadata:n}):null}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),o=n(86010),r=n(95999),c=n(86668);const s="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},m,{className:(0,o.Z)("anchor",d?i:s),id:n}),m.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},m,{id:void 0}))}},87594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,l,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);