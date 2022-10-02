"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[4539],{11824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>f});var o=i(87462),t=(i(67294),i(3905)),r=i(72915);const a={sidebar_position:7},p="4_5_periodicNoise",s={unversionedId:"chapter4/4_5_periodicNoise",id:"chapter4/4_5_periodicNoise",title:"4_5_periodicNoise",description:"Code 4.8, Figure 4.9:",source:"@site/docs/chapter4/4_5_periodicNoise.md",sourceDirName:"chapter4",slug:"/chapter4/4_5_periodicNoise",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter4/4_5_periodicNoise",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Exercise 4.1",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter4/exercise_4_1"},next:{title:"Chapter 5: Noise Recipe",permalink:"/MathOfRealTimeGraphics-samples/en/docs/category/chapter-5-noise-recipe"}},c={},f=[{value:"Code 4.8, Figure 4.9:",id:"code-48-figure-49",level:2}],l={toc:f};function u(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,o.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"4_5_periodicnoise"},"4_5_periodicNoise"),(0,t.kt)("h2",{id:"code-48-figure-49"},"Code 4.8, Figure 4.9:"),(0,t.kt)(r.Z,{fragName:"4_5_periodicNoise.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\n//start xy<->pol\nconst float PI = 3.1415926;\nfloat atan2(float y, float x){\n    return x == 0.0 ? sign(y) * PI / 2.0 : atan(y, x);\n}\nvec2 xy2pol(vec2 xy){\n    return vec2(atan2(xy.x, xy.y), length(xy));\n}\nvec2 pol2xy(vec2 pol){\n    return pol.y * vec2(cos(pol.x), sin(pol.x));\n}\n//end xy<->pol\n\nuint uhash11(uint n){\n    n ^= (n << 1u);\n    n ^= (n >> 1u);\n    n *= 0x456789abu;\n    n ^= (n << 1u);\n    return n * 0x456789abu;\n}\nfloat gtable2(vec2 lattice, vec2 p){\n    uvec2 n = floatBitsToUint(lattice);\n    uint ind = (uhash11(uhash11(n.x) + n.y) >> 29);\n    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat periodicNoise21(vec2 p, float period){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = gtable2(mod(n + vec2(i, j), period), f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\nfloat gtable3(vec3 lattice, vec3 p){\n    uvec3 n = floatBitsToUint(lattice);\n    uint ind = (uhash11(uhash11(uhash11(n.x) + n.y) + n.z) >> 28);\n    float u = ind < 8u ? p.x : p.y;\n    float v = ind < 4u ? p.y : ind == 12u || ind == 14u ? p.x : p.z;\n    return ((ind & 1u) == 0u? u: -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat periodicNoise31(vec3 p, float period){\n    vec3 n = floor(p);\n    vec3 f = fract(p);\n    float[8] v;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                v[i+2*j+4*k] = gtable3(mod(n + vec3(i, j, k), period), f - vec3(i, j, k)) * 0.70710678;\n            }\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    float[2] w;\n    for (int i = 0; i < 2; i++){\n        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n    }\n    return 0.5 * mix(w[0], w[1], f[2]) + 0.5;\n}\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n    pos = 2.0 * pos.xy - vec2(1.0);\n    pos = xy2pol(pos);\n    pos = vec2(5.0 / PI, 5.0) * pos + u_time;\n    fragColor = vec4(periodicNoise21(pos, 10.0));\n    fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}u.isMDXComponent=!0}}]);