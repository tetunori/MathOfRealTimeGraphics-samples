"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[8474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=c(t),h=a,f=v["".concat(s,".").concat(h)]||v[h]||p[h]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=v;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7462),a=t(7294);function l(e){let{baseUrl:n,fragUrl:t,disableFullscreen:l,limitWidth:i,...o}=e;const[s,c]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:i?{width:i,display:"table",margin:"0 auto"}:{}},!l&&a.createElement("button",{"aria-label":s?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");s?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),c(!s)}},s?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(s?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="'+n+'/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="'+n+'/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+"/"+t+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},o)))}},3393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),l=t(5896);const i={sidebar_position:4},o="7_3_varyVoronoi",s={unversionedId:"chapter7/7_3_varyVoronoi",id:"chapter7/7_3_varyVoronoi",title:"7_3_varyVoronoi",description:"Figure 7.10:",source:"@site/docs/chapter7/7_3_varyVoronoi.md",sourceDirName:"chapter7",slug:"/chapter7/7_3_varyVoronoi",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter7/7_3_varyVoronoi",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"7_2_varyDist",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter7/7_2_varyDist"},next:{title:"Exercise 7.1",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter7/exercise_7_1"}},c={},u=[{value:"Figure 7.10:",id:"figure-710",level:2}],p={toc:u};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7_3_varyvoronoi"},"7_3_varyVoronoi"),(0,a.kt)("h2",{id:"figure-710"},"Figure 7.10:"),(0,a.kt)(l.Z,{baseUrl:"/MathOfRealTimeGraphics-samples",fragUrl:"/frags/ch7/7_3_varyVoronoi.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="7_3_varyVoronoi.frag"',showLineNumbers:!0,title:'"7_3_varyVoronoi.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\nfloat length2(vec2 p){\n    float t = mod(u_time, 3.0);\n    p = abs(p);\n    return channel.x == 0 ? length(p):\n        channel.x == 1 ? dot(p, vec2(1.0)):\n        max(p.x, p.y);\n}\nfloat length3(vec3 p){\n    float t = mod(u_time, 3.0);\n    p = abs(p);\n    return channel.x == 0 ? length(p):\n        channel.x == 1 ? dot(p, vec3(1.0)):\n        max(max(p.x, p.y), p.z);\n}\nvec2 voronoi2(vec2 p){\n    vec2 n = floor(p + 0.5);\n    float dist = length2(vec2(1));\n    vec2 id;\n    for(float j = 0.0; j <= 2.0; j ++ ){\n        vec2 glid;\n        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n        if (abs(glid.y - p.y) - 0.5 > dist){\n            continue;\n        }\n        for(float i = -1.0; i <= 1.0; i ++ ){\n            glid.x = n.x + i;\n            vec2 jitter = hash22(glid) - 0.5;\n            if (length2(glid + jitter - p) <= dist){\n                dist = length2(glid + jitter - p);\n                id = glid;\n            }\n        }\n    }\n    return id;\n}\nvec3 voronoi3(vec3 p){\n    vec3 n = floor(p + 0.5);\n    float dist = length3(vec3(1));\n    vec3 id;\n    for(float k = 0.0; k <= 2.0; k ++ ){\n            vec3 glid;\n            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n            if (abs(glid.z - p.z) - 0.5 > dist){\n                continue;\n            }\n        for(float j = 0.0; j <= 2.0; j ++ ){\n            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n            if (abs(glid.y - p.y) - 0.5 > dist){\n                continue;\n            }\n            for(float i = -1.0; i <= 1.0; i ++ ){\n                glid.x = n.x + i;\n                vec3 jitter = hash33(glid) - 0.5;\n                if (length3(glid + jitter - p) <= dist){\n                    dist = length3(glid + jitter - p);\n                    id = glid;\n                }\n            }\n        }\n    }\n    return id;\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n    channel = ivec2(vec2(3, 2) * gl_FragCoord.xy/ u_resolution.xy); \n    pos *= 10.0;\n    pos += u_time;\n    fragColor = channel.y == 0 ? vec4(hash22(voronoi2(pos)), 1, 1) : vec4(hash33(voronoi3(vec3(pos, 0.5 * u_time))), 1);\n}\n")))}v.isMDXComponent=!0}}]);