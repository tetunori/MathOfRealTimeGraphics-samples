"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2919],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),v=r,m=p["".concat(i,".").concat(v)]||p[v]||f[v]||s;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7462),r=t(7294);function s(e){let{fragUrl:n,disableFullscreen:t,limitWidth:s,...l}=e;const[o,i]=(0,r.useState)(!1);return r.createElement("div",{className:"glslcanvas-box-wrapper",style:s?{width:s,display:"table",margin:"0 auto"}:{}},!t&&r.createElement("button",{"aria-label":o?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");o?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),i(!o)}},o?r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},r.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},r.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),r.createElement("iframe",(0,a.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(o?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},l)))}},8123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),s=t(5896);const l={sidebar_position:1},o="5_0_fbm",i={unversionedId:"chapter5/5_0_fbm",id:"chapter5/5_0_fbm",title:"5_0_fbm",description:"Code 5.1, Figure 5.1:",source:"@site/docs/chapter5/5_0_fbm.md",sourceDirName:"chapter5",slug:"/chapter5/5_0_fbm",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_0_fbm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter5/5_0_fbm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chapter 5: Noise Recipe",permalink:"/MathOfRealTimeGraphics-samples/docs/category/chapter-5-noise-recipe"},next:{title:"5_1_warp",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_1_warp"}},c={},u=[{value:"Code 5.1, Figure 5.1:",id:"code-51-figure-51",level:2}],f={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5_0_fbm"},"5_0_fbm"),(0,r.kt)("h2",{id:"code-51-figure-51"},"Code 5.1, Figure 5.1:"),(0,r.kt)(s.Z,{fragUrl:"/frags/ch5/5_0_fbm.frag",mdxType:"GLSLCanvasBox"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="5_0_fbm.frag"',showLineNumbers:!0,title:'"5_0_fbm.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n//start vnoise\nfloat vnoise21(vec2 p){\n    vec2 n = floor(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = hash21(n + vec2(i, j));\n        }\n    }\n    vec2 f = fract(p);\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\n//end vnoise\n\n//start pnoise\nfloat gtable2(vec2 lattice, vec2 p){\n    uvec2 n = floatBitsToUint(lattice);\n    uint ind = uhash22(n).x >> 29;\n    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n//end pnoise\n\nfloat base21(vec2 p){\n    return channel == 0 ? vnoise21(p) - 0.5 : \n        pnoise21(p) - 0.5;\n}\n\nfloat fbm21(vec2 p, float g){\n    float val = 0.0;\n    float amp = 1.0;\n    float freq = 1.0;\n    for (int i = 0; i < 4; i++){\n        val += amp * base21(freq * p);\n        amp *= g;\n        freq *= 2.01;\n    }\n    return 0.5 * val + 0.5;\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n    channel = int(2.0 * gl_FragCoord.x / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    float g = abs(mod(0.2 * u_time, 2.0) - 1.0);\n    fragColor = vec4(vec3(fbm21(pos, g)), 1.0);\n}\n")))}p.isMDXComponent=!0}}]);