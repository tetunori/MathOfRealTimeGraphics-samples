"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[8840],{68669:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>f,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),t=n(72915);const a={sidebar_position:2},s="2_1_binary",f={unversionedId:"chapter2/2_1_binary",id:"chapter2/2_1_binary",title:"2_1_binary",description:"Code 2.2, Figure 2.3:",source:"@site/docs/chapter2/2_1_binary.md",sourceDirName:"chapter2",slug:"/chapter2/2_1_binary",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter2/2_1_binary",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"2_0_legacy",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter2/2_0_legacy"},next:{title:"Exercise 2.1",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter2/exercise_2_1"}},l={},c=[{value:"Code 2.2, Figure 2.3:",id:"code-22-figure-23",level:2}],p={toc:c};function u(e){let{components:i,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2_1_binary"},"2_1_binary"),(0,o.kt)("h2",{id:"code-22-figure-23"},"Code 2.2, Figure 2.3:"),(0,o.kt)(t.Z,{fragName:"2_1_binary.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n    pos *= vec2(32.0, 9.0);\n    uint[9] a = uint[](\n        uint(u_time),\n        0xbu,\n        9u,\n        0xbu ^ 9u,\n        0xffffffffu,\n        0xffffffffu + uint(u_time),\n        floatBitsToUint(floor(u_time)),\n        floatBitsToUint(-floor(u_time)),\n        floatBitsToUint(11.5625)\n    );\n    if (fract(pos.x) < 0.1){\n        if (floor(pos.x) == 1.0){\n            fragColor = vec4(1, 0, 0, 1);\n        } else if (floor(pos.x) == 9.0){\n            fragColor = vec4(0, 1, 0, 1);\n        } else {\n            fragColor = vec4(0.5);\n        }\n    } else if (fract(pos.y) < 0.1){\n        fragColor = vec4(0.5);\n    } else {\n        uint b = a[int(pos.y)]; \n        b = (b << uint(pos.x)) >> 31;\n        fragColor = vec4(vec3(b), 1.0); \n    }\n    \n}",mdxType:"LiveGlslCodeBlock"}))}u.isMDXComponent=!0}}]);