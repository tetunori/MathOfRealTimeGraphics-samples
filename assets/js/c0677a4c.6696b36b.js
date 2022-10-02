"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[7249],{73762:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>f,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),i=t(72915);const r={sidebar_position:3},s="5_2_warpRot",f={unversionedId:"chapter5/5_2_warpRot",id:"chapter5/5_2_warpRot",title:"5_2_warpRot",description:"\u30b3\u30fc\u30c9 5.3, \u56f3 5.5:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter5/5_2_warpRot.md",sourceDirName:"chapter5",slug:"/chapter5/5_2_warpRot",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_2_warpRot",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5_1_warp",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_1_warp"},next:{title:"5_3_conversion",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_3_conversion"}},u={},p=[{value:"\u30b3\u30fc\u30c9 5.3, \u56f3 5.5:",id:"\u30b3\u30fc\u30c9-53-\u56f3-55",level:2}],c={toc:p};function l(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"5_2_warprot"},"5_2_warpRot"),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9-53-\u56f3-55"},"\u30b3\u30fc\u30c9 5.3, \u56f3 5.5:"),(0,o.kt)(i.Z,{fragName:"5_2_warpRot.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\nconst float PI = 3.1415926;\n\n//begin hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n//begin vnoise\nfloat vnoise21(vec2 p){\n    vec2 n = floor(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = hash21(n + vec2(i, j));\n        }\n    }\n    vec2 f = fract(p);\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\n//end vnoise\n\n//begin pnoise\nfloat gtable2(vec2 lattice, vec2 p){\n    uvec2 n = floatBitsToUint(lattice);\n    uint ind = uhash22(n).x >> 29;\n    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n//end pnoise\n\nfloat fbm21(vec2 p, float g){\n    float val = 0.0;\n    float amp = 1.0;\n    float freq = 1.0;\n    for (int i = 0; i < 4; i++){\n        val += amp * (vnoise21(freq * p) - 0.5);\n        amp *= g;\n        freq *= 2.01;\n    }\n    return 0.5 * val + 0.5;\n}\nfloat base21(vec2 p){\n    return channel == 0 ? fbm21(p, 0.5) : \n        pnoise21(p);\n}\nfloat warp21(vec2 p, float g){\n    float val = 0.0;\n    for (int i = 0; i < 4; i++){\n        val = base21(p + g * vec2(cos(2.0 * PI * val), sin(2.0 * PI * val)));\n    }\n    return val;\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n    channel = int(2.0 * gl_FragCoord.x / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    fragColor = vec4(vec3(warp21(pos, 1.0)), 1.0);\n}",mdxType:"LiveGlslCodeBlock"}))}l.isMDXComponent=!0}}]);