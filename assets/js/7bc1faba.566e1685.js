"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[8550],{82227:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),c=t(72915);const a={sidebar_position:9},p="8_7_rotSphere",s={unversionedId:"chapter8/8_7_rotSphere",id:"chapter8/8_7_rotSphere",title:"8_7_rotSphere",description:"\u30b3\u30fc\u30c9 8.11:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter8/8_7_rotSphere.md",sourceDirName:"chapter8",slug:"/chapter8/8_7_rotSphere",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_7_rotSphere",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8_6_sphere",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_6_sphere"},next:{title:"8_8_box",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_8_box"}},i={},l=[{value:"\u30b3\u30fc\u30c9 8.11:",id:"\u30b3\u30fc\u30c9-811",level:2}],v={toc:l};function h(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"8_7_rotsphere"},"8_7_rotSphere"),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9-811"},"\u30b3\u30fc\u30c9 8.11:"),(0,o.kt)(c.Z,{fragName:"8_7_rotSphere.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nconst float PI = 3.14159265359;\nconst float TAU = 6.2831853;\n//begin rot\nvec2 rot2(vec2 p, float t){\n    return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\nvec3 rotX(vec3 p, float t){\n    return vec3(p.x, rot2(p.yz, t));\n}\nvec3 rotY(vec3 p, float t){\n    return vec3(p.y, rot2(p.zx, t)).zxy;\n}\nvec3 rotZ(vec3 p, float t){\n    return vec3(rot2(p.xy, t), p.z);\n}\nvec3 euler(vec3 p, vec3 t){\n    return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\nfloat sphereSDF(vec3 p, vec3 c, float r){\n    return length(p - c) - r;\n}\n\nfloat sceneSDF(vec3 p){\n    vec3 cent = rotY(vec3(0.0, 0.0, - 0.5), u_time);\n    float scale = 0.3;\n    return sphereSDF(p, cent, scale);\n}\nvec3 gradSDF(vec3 p){\n    float eps = 0.001;\n    return normalize(vec3(\n        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n    ));\n}\n\nvoid main(){\n    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n    \n    vec3 cPos = vec3(0.0, 0.0, 2.0);\n    vec3 cDir = vec3(0.0, 0.0, - 1.0);\n    vec3 cUp = vec3(0.0, 1.0, 0.0);\n    vec3 cSide = cross(cDir, cUp);\n    \n    float targetDepth = 1.0;\n    \n    vec3 lDir = rotY(vec3(0.0, 0.0, 1.0), u_time);\n    \n    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n    vec3 rPos = ray + cPos;\n    ray = normalize(ray);\n    fragColor.rgb = vec3(0.0);\n    for(int i = 0; i < 50; i ++ ){\n        if (sceneSDF(rPos) > 0.001){\n            rPos += sceneSDF(rPos) * ray;\n        } else {\n            float amb = 0.1;\n            float diff = 0.9 * max(dot(lDir, gradSDF(rPos)), 0.0);\n            vec3 col = vec3(0.0, 1.0, 1.0);\n            fragColor.rgb = col * (diff + amb);\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}h.isMDXComponent=!0}}]);