"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[5334],{57164:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=o(87462),a=(o(67294),o(3905)),s=o(72915);const n={sidebar_position:7},i="1_6_hsv2rgb",c={unversionedId:"chapter1/1_6_hsv2rgb",id:"chapter1/1_6_hsv2rgb",title:"1_6_hsv2rgb",description:"Code 1.10, Figure 1.12:",source:"@site/docs/chapter1/1_6_hsv2rgb.md",sourceDirName:"chapter1",slug:"/chapter1/1_6_hsv2rgb",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_6_hsv2rgb",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"1_5_polarRot",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_5_polarRot"},next:{title:"Chapter 2: Pseudo-Random Number",permalink:"/MathOfRealTimeGraphics-samples/en/docs/category/chapter-2-pseudo-random-number"}},p={},l=[{value:"Code 1.10, Figure 1.12:",id:"code-110-figure-112",level:2}],h={toc:l};function d(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},h,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1_6_hsv2rgb"},"1_6_hsv2rgb"),(0,a.kt)("h2",{id:"code-110-figure-112"},"Code 1.10, Figure 1.12:"),(0,a.kt)(s.Z,{fragName:"1_6_hsv2rgb.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nconst float PI = 3.1415926;\nfloat atan2(float y, float x){\n    if (x == 0.0){\n        return sign(y) * PI / 2.0;\n    } else {\n        return atan(y, x);\n    }\n}\nvec2 xy2pol(vec2 xy){\n    return vec2(atan2(xy.y, xy.x), length(xy));\n}\nvec2 pol2xy(vec2 pol){\n    return pol.y * vec2(cos(pol.x), sin(pol.x));\n}\nvec3 hsv2rgb(vec3 c){ // fork from https://www.shadertoy.com/view/MsS3Wc\n    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n    pos = 2.0 * pos.xy - vec2(1.0);\n    pos = xy2pol(pos);\n    pos.x = mod(0.5 * pos.x / PI, 1.0);\n    fragColor.rgb = hsv2rgb(vec3(pos, 1.0));\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}d.isMDXComponent=!0}}]);