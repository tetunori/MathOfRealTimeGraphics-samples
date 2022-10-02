"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[4708],{43226:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(87462),o=(i(67294),i(3905)),a=i(72915);const s={sidebar_position:4},r="4_3_noiseQuality",c={unversionedId:"chapter4/4_3_noiseQuality",id:"chapter4/4_3_noiseQuality",title:"4_3_noiseQuality",description:"\u30b3\u30fc\u30c9 4.5, \u56f3 4.6:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter4/4_3_noiseQuality.md",sourceDirName:"chapter4",slug:"/chapter4/4_3_noiseQuality",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_3_noiseQuality",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"4_2_rotNoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_2_rotNoise"},next:{title:"4_4_pnoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_4_pnoise"}},u={},l=[{value:"\u30b3\u30fc\u30c9 4.5, \u56f3 4.6:",id:"\u30b3\u30fc\u30c9-45-\u56f3-46",level:2}],f={toc:l};function p(n){let{components:e,...i}=n;return(0,o.kt)("wrapper",(0,t.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"4_3_noisequality"},"4_3_noiseQuality"),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9-45-\u56f3-46"},"\u30b3\u30fc\u30c9 4.5, \u56f3 4.6:"),(0,o.kt)(a.Z,{fragName:"4_3_noiseQuality.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n\nvec2[4] diag = vec2[](    // 0.70710678 = 1.0 / sqrt(2.0)\n    vec2(0.70710678,0.70710678),\n    vec2(-0.70710678,0.70710678),\n    vec2(0.70710678,-0.70710678),\n    vec2(-0.70710678,-0.70710678)\n);\nvec2[4] axis = vec2[](\n    vec2(1, 0),\n    vec2(-1, 0),\n    vec2(0, 1),\n    vec2(0, -1)\n);\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nfloat gnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            uvec2 m = floatBitsToUint(n + vec2(i, j));\n            uint ind = (uhash22(m).x >> 30);\n            if (channel == 0){\n                v[i+2*j] = dot(diag[ind], f - vec2(i, j));\n            } else {\n                v[i+2*j] = dot(axis[ind], f - vec2(i, j));\n            }\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / min(u_resolution.x, u_resolution.y);\n    channel = int(gl_FragCoord.x * 2.0 / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    float v = gnoise21(pos);\n    if (v > 0.85 || v < 0.15){\n        fragColor.rgb = vec3(1.,0.,0.);\n    }   else {\n        fragColor.rgb = vec3(v);\n    }\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}p.isMDXComponent=!0}}]);