"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9701],{66929:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>t,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(87462),o=(n(67294),n(3905)),a=n(72915);const c={sidebar_position:8},t="8_6_sphere",i={unversionedId:"chapter8/8_6_sphere",id:"chapter8/8_6_sphere",title:"8_6_sphere",description:"Code 8.9, 8.10, Figure 8.9:",source:"@site/docs/chapter8/8_6_sphere.md",sourceDirName:"chapter8",slug:"/chapter8/8_6_sphere",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_6_sphere",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"8_5_raymarching",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_5_raymarching"},next:{title:"8_7_rotSphere",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_7_rotSphere"}},p={},l=[{value:"Code 8.9, 8.10, Figure 8.9:",id:"code-89-810-figure-89",level:2}],h={toc:l};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},h,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"8_6_sphere"},"8_6_sphere"),(0,o.kt)("h2",{id:"code-89-810-figure-89"},"Code 8.9, 8.10, Figure 8.9:"),(0,o.kt)(a.Z,{fragName:"8_6_sphere.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nfloat sphereSDF(vec3 p){\n    return length(p) - 1.0;\n}\nfloat sceneSDF(vec3 p){\n    return sphereSDF(p);\n}\nvec3 gradSDF(vec3 p){\n    float eps = 0.001;\n    return normalize(vec3(\n        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n    ));\n}\nvoid main(){\n    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n    \n    vec3 cPos = vec3(0.0, 0.0, 2.0);\n    vec3 cDir = vec3(0.0, 0.0, - 1.0);\n    vec3 cUp = vec3(0.0, 1.0, 0.0);\n    vec3 cSide = cross(cDir, cUp);\n    \n    float targetDepth = 1.0;\n    \n    vec3 lPos = vec3(2.0);\n    \n    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n    vec3 rPos = ray + cPos;\n    ray = normalize(ray);\n    \n    fragColor.rgb = vec3(0.0);\n    for(int i = 0; i < 50; i ++ ){\n        if (sceneSDF(rPos) > 0.001){\n            rPos += sceneSDF(rPos) * ray;\n        } else {\n            float amb = 0.1;\n            float diff = 0.9 * max(dot(normalize(lPos - rPos), gradSDF(rPos)), 0.0);\n            vec3 col = vec3(0.0, 1.0, 1.0);\n            col *= diff + amb;\n            fragColor.rgb = col;\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}d.isMDXComponent=!0}}]);