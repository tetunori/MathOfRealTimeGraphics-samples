"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[8227],{71851:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>f,toc:()=>u});var t=i(87462),o=(i(67294),i(3905)),a=i(72915);const r={sidebar_position:1},s="4_0_gnoise",f={unversionedId:"chapter4/4_0_gnoise",id:"chapter4/4_0_gnoise",title:"4_0_gnoise",description:"\u30b3\u30fc\u30c9 4.1, \u56f3 4.3:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter4/4_0_gnoise.md",sourceDirName:"chapter4",slug:"/chapter4/4_0_gnoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_0_gnoise",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chapter 4: Gradient Noise",permalink:"/MathOfRealTimeGraphics-samples/docs/category/chapter-4-gradient-noise"},next:{title:"4_1_noiseRange",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter4/4_1_noiseRange"}},c={},u=[{value:"\u30b3\u30fc\u30c9 4.1, \u56f3 4.3:",id:"\u30b3\u30fc\u30c9-41-\u56f3-43",level:2}],l={toc:u};function h(n){let{components:e,...i}=n;return(0,o.kt)("wrapper",(0,t.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"4_0_gnoise"},"4_0_gnoise"),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9-41-\u56f3-43"},"\u30b3\u30fc\u30c9 4.1, \u56f3 4.3:"),(0,o.kt)(a.Z,{fragName:"4_0_gnoise.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n\nfloat gnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            vec2 g = normalize(hash22(n + vec2(i,j)) - vec2(0.5));\n            v[i+2*j] = dot(g, f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\nfloat gnoise31(vec3 p){\n    vec3 n = floor(p);\n    vec3 f = fract(p);\n    float[8] v;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                vec3 g = normalize(hash33(n + vec3(i, j, k)) - vec3(0.5));\n                v[i+2*j+4*k] = dot(g, f - vec3(i, j, k));\n            }\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    float[2] w;\n    for (int i = 0; i < 2; i++){\n        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n    }\n    return 0.5 * mix(w[0], w[1], f[2]) + 0.5;\n}\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n    channel = int(gl_FragCoord.x * 2.0 / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    if (channel < 1){\n        fragColor = vec4(gnoise21(pos));  //left\n    } else {\n        fragColor = vec4(gnoise31(vec3(pos, u_time)));\n        \n    }\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}h.isMDXComponent=!0}}]);