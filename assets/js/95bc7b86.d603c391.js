"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2543],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>v});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=c(t),v=r,h=p["".concat(l,".").concat(v)]||p[v]||f[v]||i;return t?a.createElement(h,o(o({ref:e},u),{},{components:t})):a.createElement(h,o({ref:e},u))}));function v(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5896:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(7462),r=t(7294);function i(n){let{fragUrl:e,disableFullscreen:t,limitWidth:i,...o}=n;const[s,l]=(0,r.useState)(!1);return r.createElement("div",{className:"glslcanvas-box-wrapper",style:i?{width:i,display:"table",margin:"0 auto"}:{}},!t&&r.createElement("button",{"aria-label":s?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:n=>{const e=n.target.closest(".glslcanvas-box-wrapper");s?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),l(!s)}},s?r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},r.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},r.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),r.createElement("iframe",(0,a.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(s?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+e+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},o)))}},5025:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),i=t(5896);const o={sidebar_position:5},s="4_4_pnoise",l={unversionedId:"chapter4/4_4_pnoise",id:"chapter4/4_4_pnoise",title:"4_4_pnoise",description:"Code 4.6, 4.7, Figure 4.7:",source:"@site/docs/chapter4/4_4_pnoise.md",sourceDirName:"chapter4",slug:"/chapter4/4_4_pnoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_4_pnoise",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter4/4_4_pnoise.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4_3_noiseQuality",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_3_noiseQuality"},next:{title:"4_5_periodicNoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_5_periodicNoise"}},c={},u=[{value:"Code 4.6, 4.7, Figure 4.7:",id:"code-46-47-figure-47",level:2}],f={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4_4_pnoise"},"4_4_pnoise"),(0,r.kt)("h2",{id:"code-46-47-figure-47"},"Code 4.6, 4.7, Figure 4.7:"),(0,r.kt)(i.Z,{fragUrl:"/frags/ch4/4_4_pnoise.frag",mdxType:"GLSLCanvasBox"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="4_4_pnoise.frag"',showLineNumbers:!0,title:'"4_4_pnoise.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n//start gnoise\nfloat gnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2[4] g;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            g[i+2*j] = normalize(hash22(n + vec2(i,j)) - vec2(0.5));\n        }\n    }\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = dot(g[i+2*j], f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\nfloat gnoise31(vec3 p){\n    vec3 n = floor(p);\n    vec3[8] g;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                g[i+2*j+4*k] = normalize(hash33(n + vec3(i, j, k)) - vec3(0.5));\n            }\n            \n        }\n    }\n    vec3 f = fract(p);\n    float[8] v;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                v[i+2*j+4*k] = dot(g[i+2*j+4*k], f - vec3(i, j, k));\n            }\n            \n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    float[2] w;\n    for (int i = 0; i < 2; i++){\n        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n    }\n    return 0.5 * mix(w[0], w[1], f[2]) + 0.5;\n}\n//end gnoise\n\n//start pnoise\nfloat gtable2(vec2 lattice, vec2 p){\n    uvec2 n = floatBitsToUint(lattice);\n    uint ind = uhash22(n).x >> 29;\n    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\nfloat gtable3(vec3 lattice, vec3 p){\n    uvec3 n = floatBitsToUint(lattice);\n    uint ind = uhash33(n).x >> 28;\n    float u = ind < 8u ? p.x : p.y;\n    float v = ind < 4u ? p.y : ind == 12u || ind == 14u ? p.x : p.z;\n    return ((ind & 1u) == 0u? u: -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise31(vec3 p){\n    vec3 n = floor(p);\n    vec3 f = fract(p);\n    float[8] v;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                v[i+2*j+4*k] = gtable3(n + vec3(i, j, k), f - vec3(i, j, k)) * 0.70710678;\n            }\n            \n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    float[2] w;\n    for (int i = 0; i < 2; i++){\n        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n    }\n    return 0.5 * mix(w[0], w[1], f[2]) + 0.5;\n}\n//end pnoise\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n    pos = 10.0 * pos + u_time;\n    channel = ivec2(2.0 * gl_FragCoord.xy / u_resolution.xy);\n    float v = channel[0] == 0 ? \n        channel[1] == 0 ? gnoise21(pos) :\n        gnoise31(vec3(pos, u_time)) :\n        channel[1] == 0 ? pnoise21(pos) : \n        pnoise31(vec3(pos, u_time));\n    fragColor.rgb = vec3(v);\n    fragColor.a = 1.0;\n}\n")))}p.isMDXComponent=!0}}]);