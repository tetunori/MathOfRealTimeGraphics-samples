"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[6254],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>N});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),h=i(t),N=s,d=h["".concat(l,".").concat(N)]||h[N]||o[N]||r;return t?n.createElement(d,p(p({ref:a},c),{},{components:t})):n.createElement(d,p({ref:a},c))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=h;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m.mdxType="string"==typeof e?e:s,p[1]=m;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5896:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7462),s=t(7294);function r(e){let{baseUrl:a,fragUrl:t,disableFullscreen:r,limitWidth:p,...m}=e;const[l,i]=(0,s.useState)(!1);return s.createElement("div",{className:"glslcanvas-box-wrapper",style:p?{width:p,display:"table",margin:"0 auto"}:{}},!r&&s.createElement("button",{"aria-label":l?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const a=e.target.closest(".glslcanvas-box-wrapper");l?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen(),i(!l)}},l?s.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},s.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):s.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},s.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),s.createElement("iframe",(0,n.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(l?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="'+a+'/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="'+a+'/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+a+"/"+t+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},m)))}},13:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),r=t(5896);const p={sidebar_position:5},m="Exercise 6.1",l={unversionedId:"chapter6/exercise_6_1",id:"chapter6/exercise_6_1",title:"Exercise 6.1",description:"Inigo Quilez\u3055\u3093\u306b\u3088\u308b\u3001\u4e0b\u8a18\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3001Voronoi edge shader\u3092\u69cb\u6210\u3057\u305f\u3002",source:"@site/docs/chapter6/exercise_6_1.md",sourceDirName:"chapter6",slug:"/chapter6/exercise_6_1",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter6/exercise_6_1",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"6_3_voronoi",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter6/6_3_voronoi"},next:{title:"6_4_fdist4",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter6/6_4_fdist4"}},i={},c=[],o={toc:c};function h(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"exercise-61"},"Exercise 6.1"),(0,s.kt)("p",null,"Inigo Quilez\u3055\u3093\u306b\u3088\u308b\u3001\u4e0b\u8a18\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3001Voronoi edge shader\u3092\u69cb\u6210\u3057\u305f\u3002",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://iquilezles.org/articles/voronoilines/"},"https://iquilezles.org/articles/voronoilines/"),"  "),(0,s.kt)("p",null,"\u5177\u4f53\u7684\u306a\u65b9\u91dd\u3068\u3057\u3066\u306f\u3001\u4e0e\u3048\u3089\u308c\u305f\u70b9p\u306b\u5bfe\u3057\u3066\u4ee5\u4e0b\u3092\u8a08\u7b97\u3057\u3066\u3044\u308b\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Voronoi\u5206\u5272\u306e\u7b2c1\u8fd1\u508d\u70b9 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mover",{parentName:"mrow",accent:"true"},(0,s.kt)("mi",{parentName:"mover"},"a"),(0,s.kt)("mo",{parentName:"mover"},"\u20d7"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{a}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.714em"}}),(0,s.kt)("span",{parentName:"span",className:"mord accent"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,s.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))))))))))," \u306eID\u3092\u7b97\u51fa(",(0,s.kt)("a",{parentName:"li",href:"/MathOfRealTimeGraphics-samples/docs/chapter6/6_3_voronoi"},"6_3_voronoi.frag"),"\u306e\u5185\u5bb9\u305d\u306e\u307e\u307e)"),(0,s.kt)("li",{parentName:"ol"},"\u7b2c1\u8fd1\u508d\u70b9 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mover",{parentName:"mrow",accent:"true"},(0,s.kt)("mi",{parentName:"mover"},"a"),(0,s.kt)("mo",{parentName:"mover"},"\u20d7"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{a}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.714em"}}),(0,s.kt)("span",{parentName:"span",className:"mord accent"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,s.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))))))))))," \u306eID\u3092\u4e2d\u5fc3\u3068\u3057\u305f ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"5"),(0,s.kt)("mtext",{parentName:"msup"},"dimension"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"5^{\\text{dimension}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord text mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"dimension"))))))))))))))," \u500b\u306e\u683c\u5b50\u70b9\u3092\u63a2\u7d22\u3057\u3001\u305d\u3053\u304b\u3089\u751f\u6210\u3055\u308c\u305f\u8fd1\u508d\u70b9 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mover",{parentName:"mrow",accent:"true"},(0,s.kt)("mi",{parentName:"mover"},"b"),(0,s.kt)("mo",{parentName:"mover"},"\u20d7")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260"),(0,s.kt)("mover",{parentName:"mrow",accent:"true"},(0,s.kt)("mi",{parentName:"mover"},"a"),(0,s.kt)("mo",{parentName:"mover"},"\u20d7")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{b}( \\neq \\vec{a} )")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2274em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord accent"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9774em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")),(0,s.kt)("span",{parentName:"span",style:{top:"-3.2634em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,s.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"}))))))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mrel"},(0,s.kt)("span",{parentName:"span",className:"mrel"},(0,s.kt)("span",{parentName:"span",className:"mord vbox"},(0,s.kt)("span",{parentName:"span",className:"thinbox"},(0,s.kt)("span",{parentName:"span",className:"rlap"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"inner"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mrel"},"\ue020"))),(0,s.kt)("span",{parentName:"span",className:"fix"}))))),(0,s.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord accent"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,s.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"}))))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u3089\u306e\u4e2d\u3067\u3001\u70b9p\u3068 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mover",{parentName:"mrow",accent:"true"},(0,s.kt)("mi",{parentName:"mover"},"a"),(0,s.kt)("mo",{parentName:"mover"},"\u20d7")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mover",{parentName:"mrow",accent:"true"},(0,s.kt)("mi",{parentName:"mover"},"b"),(0,s.kt)("mo",{parentName:"mover"},"\u20d7"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{a}, \\vec{b}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1719em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord accent"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,s.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"}))))))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord accent"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9774em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")),(0,s.kt)("span",{parentName:"span",style:{top:"-3.2634em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,s.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))))))))))," \u9593\u306e\u30dc\u30fc\u30c0\u30fc\u3068\u306e\u8ddd\u96e2\u304c\u6700\u3082\u77ed\u304f\u306a\u308b\u3068\u304d\u306e\u8ddd\u96e2\u3092\u8fd4\u3059\u3002")),(0,s.kt)("p",null,"\u306a\u304a\u30012.\u306b\u304a\u3051\u308b\u30dc\u30fc\u30c0\u30fc\u304b\u3089\u306e\u8ddd\u96e2\u306e\u8a08\u7b97\u5f0f\u306f\u3001\u70b9p\u3092\u4e2d\u5fc3\u306b\u8003\u3048\u308b\u3053\u3068\u3067\u3001\u4ee5\u4e0b\u306e\u5185\u7a4d\u3092\u4f7f\u3063\u305f\u8868\u73fe\u3067\u5b9f\u88c5\u3067\u304d\u308b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-glsl"},"  distance = dot( 0.5*(a + b), normalize(b - a) );\n")),(0,s.kt)(r.Z,{baseUrl:"/MathOfRealTimeGraphics-samples",fragUrl:"/frags/ch6/exercise_6_1.frag",mdxType:"GLSLCanvasBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="exercise_6_1.frag"',showLineNumbers:!0,title:'"exercise_6_1.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\nvec2 voronoi2(vec2 p){\n    vec2 n = floor(p + 0.5);\n    float dist = sqrt(2.0);\n    vec2 id;\n    for(float j = 0.0; j <= 2.0; j ++ ){\n        vec2 glid;\n        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n        if (abs(glid.y - p.y) - 0.5 > dist){\n            continue;\n        }\n        for(float i = -1.0; i <= 1.0; i ++ ){\n            glid.x = n.x + i;\n            vec2 jitter = hash22(glid) - 0.5;\n            if (length(glid + jitter - p) <= dist){\n                dist = length(glid + jitter - p);\n                id = glid;\n            }\n        }\n    }\n    return id;\n}\n\nfloat voronoiEdge2d(vec2 p){\n    vec2 n = floor(p + 0.5);\n    float dist = sqrt(2.0);\n    vec2 id;\n    for(float j = 0.0; j <= 2.0; j ++ ){\n        vec2 glid;\n        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n        if (abs(glid.y - p.y) - 0.5 > dist){\n            continue;\n        }\n        for(float i = -1.0; i <= 1.0; i ++ ){\n            glid.x = n.x + i;\n            vec2 jitter = hash22(glid) - 0.5;\n            if (length(glid + jitter - p) <= dist){\n                dist = length(glid + jitter - p);\n                id = glid;\n            }\n        }\n    }\n\n    // Reference: https://iquilezles.org/articles/voronoilines/\n    float md = sqrt(2.0);\n    vec2 a = id + hash22(id) - 0.5 - p;\n\n    for(float j = -2.0; j <= 2.0; j++ ){\n      for(float i = -2.0; i <= 2.0; i++ ){\n        vec2 glid = id + vec2(float(i),float(j));\n        vec2 b = glid + hash22(glid) - 0.5 - p;\n        if( dot(a - b, a - b) > 0.0001 ){\n          // it is not a\n          md = min( md, dot( 0.5*(a+b), normalize(b - a) ) );\n        }\n      }\n    }\n\n    return md;\n\n}\n\nvec3 voronoi3(vec3 p){\n    vec3 n = floor(p + 0.5);\n    float dist = sqrt(3.0);\n    vec3 id;\n    for(float k = 0.0; k <= 2.0; k ++ ){\n            vec3 glid;\n            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n            if (abs(glid.z - p.z) - 0.5 > dist){\n                continue;\n            }\n        for(float j = 0.0; j <= 2.0; j ++ ){\n            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n            if (abs(glid.y - p.y) - 0.5 > dist){\n                continue;\n            }\n            for(float i = -1.0; i <= 1.0; i ++ ){\n                glid.x = n.x + i;\n                vec3 jitter = hash33(glid) - 0.5;\n                if (length(glid + jitter - p) <= dist){\n                    dist = length(glid + jitter - p);\n                    id = glid;\n                }\n            }\n        }\n    }\n    return id;\n}\n\nfloat voronoiEdge3d(vec3 p){\n    vec3 n = floor(p + 0.5);\n    float dist = sqrt(3.0);\n    vec3 id;\n    for(float k = 0.0; k <= 2.0; k ++ ){\n            vec3 glid;\n            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n            if (abs(glid.z - p.z) - 0.5 > dist){\n                continue;\n            }\n        for(float j = 0.0; j <= 2.0; j ++ ){\n            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n            if (abs(glid.y - p.y) - 0.5 > dist){\n                continue;\n            }\n            for(float i = -1.0; i <= 1.0; i ++ ){\n                glid.x = n.x + i;\n                vec3 jitter = hash33(glid) - 0.5;\n                if (length(glid + jitter - p) <= dist){\n                    dist = length(glid + jitter - p);\n                    id = glid;\n                }\n            }\n        }\n    }\n    \n    // Reference: https://iquilezles.org/articles/voronoilines/\n    float md = sqrt(3.0);\n    vec3 a = id + hash33(id) - 0.5 - p;\n\n    for(float k = -2.0; k <= 2.0; k++ ){\n      for(float j = -2.0; j <= 2.0; j++ ){\n        for(float i = -2.0; i <= 2.0; i++ ){\n          vec3 glid = id + vec3(float(i),float(j),float(k));\n          vec3 b = glid + hash33(glid) - 0.5 - p;\n          if( dot(a - b, a - b) > 0.0001 ){\n            // it is not a\n            md = min( md, dot( 0.5*(a + b), normalize(b - a) ) );\n          }\n        }\n      }\n    }\n\n    return md;\n}\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n    channel = int(2.0 * gl_FragCoord.x/ u_resolution.x); \n    pos *= 10.0;\n    pos += u_time;\n    fragColor = channel == 0 ? \n      mix( vec4(1.0, 1.0, 1.0, 1.0), \n           vec4(hash22(voronoi2(pos)), 1.0, 1.0 * (sin(u_time) + 0.5) ), \n           smoothstep( 0.02, 0.04, voronoiEdge2d(pos) )) : \n      mix( vec4(1.0, 1.0, 1.0, 1.0), \n           vec4(hash33(voronoi3(vec3(pos, u_time))), 1.0 * (sin(u_time) + 0.5) ), \n           smoothstep( 0.02, 0.04, voronoiEdge3d(vec3(pos, u_time)) ));\n}\n")))}h.isMDXComponent=!0}}]);