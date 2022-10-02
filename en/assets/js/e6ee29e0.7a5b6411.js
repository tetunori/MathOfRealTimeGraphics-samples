"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9167],{56086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905)),c=t(72915);const a={sidebar_position:10},s="8_8_box",i={unversionedId:"chapter8/8_8_box",id:"chapter8/8_8_box",title:"8_8_box",description:"Code 8.12, 8.13, Figure 8.10:",source:"@site/docs/chapter8/8_8_box.md",sourceDirName:"chapter8",slug:"/chapter8/8_8_box",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter8/8_8_box",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"8_7_rotSphere",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter8/8_7_rotSphere"},next:{title:"Chapter 9: SDF Recipe",permalink:"/MathOfRealTimeGraphics-samples/en/docs/category/chapter-9-sdf-recipe"}},p={},l=[{value:"Code 8.12, 8.13, Figure 8.10:",id:"code-812-813-figure-810",level:2}],v={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"8_8_box"},"8_8_box"),(0,o.kt)("h2",{id:"code-812-813-figure-810"},"Code 8.12, 8.13, Figure 8.10:"),(0,o.kt)(c.Z,{fragName:"8_8_box.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nconst float PI = 3.14159265359;\nconst float TAU = 6.2831853;\n//begin rot\nvec2 rot2(vec2 p, float t){\n    return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\nvec3 rotX(vec3 p, float t){\n    return vec3(p.x, rot2(p.yz, t));\n}\nvec3 rotY(vec3 p, float t){\n    return vec3(p.y, rot2(p.zx, t)).zxy;\n}\nvec3 rotZ(vec3 p, float t){\n    return vec3(rot2(p.xy, t), p.z);\n}\nvec3 euler(vec3 p, vec3 t){\n    return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\nfloat boxSDF(vec3 p, vec3 c, vec3 d, float t){\n    p = abs(p - c);\n    return length(max(p - d, vec3(0.0))) + min(max(max(p.x - d.x, p.y - d.y), p.z - d.z), 0.0) - t;\n}\n\nfloat sceneSDF(vec3 p){\n    vec3 center = vec3(0.0, 0.0, 0.0);\n    vec3 scale = vec3(0.5);\n    float thickness = 0.1;\n    return boxSDF(p, center, scale, thickness);\n}\nvec3 gradSDF(vec3 p){\n    float eps = 0.001;\n    return normalize(vec3(\n        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n    ));\n}\n\nvoid main(){\n    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n    \n    vec3 t = vec3(u_time * 0.5);\n    vec3 cPos = euler(vec3(0.0, 0.0, 2.0), t);\n    vec3 cDir = euler(vec3(0.0, 0.0, - 1.0), t);\n    vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);\n    vec3 lDir = euler(vec3(0.0, 0.0, 1.0), t);\n    vec3 cSide = cross(cDir, cUp);\n\n    float targetDepth = 1.0;\n    \n    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n    vec3 rPos = ray + cPos;\n    ray = normalize(ray);\n    fragColor.rgb = vec3(0.0);\n    for(int i = 0; i < 50; i ++ ){\n        if (sceneSDF(rPos) > 0.001){\n            rPos += sceneSDF(rPos) * ray;\n        } else {\n            float amb = 0.1;\n            float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n            vec3 col = vec3(0.0, 1.0, 1.0);\n            fragColor.rgb = col * (diff + amb);\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}u.isMDXComponent=!0}}]);