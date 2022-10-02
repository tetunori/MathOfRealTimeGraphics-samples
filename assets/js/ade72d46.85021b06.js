"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[7060],{17054:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=e(87462),s=(e(67294),e(3905)),a=e(72915);const r={sidebar_position:7},o="6_5_fdist4RGB",c={unversionedId:"chapter6/6_5_fdist4RGB",id:"chapter6/6_5_fdist4RGB",title:"6_5_fdist4RGB",description:"\u30b3\u30fc\u30c9 6.5, \u56f3 6.13:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter6/6_5_fdist4RGB.md",sourceDirName:"chapter6",slug:"/chapter6/6_5_fdist4RGB",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter6/6_5_fdist4RGB",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6_4_fdist4",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter6/6_4_fdist4"},next:{title:"6_6_cnoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter6/6_6_cnoise"}},u={},l=[{value:"\u30b3\u30fc\u30c9 6.5, \u56f3 6.13:",id:"\u30b3\u30fc\u30c9-65-\u56f3-613",level:2}],f={toc:l};function h(n){let{components:t,...e}=n;return(0,s.kt)("wrapper",(0,i.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"6_5_fdist4rgb"},"6_5_fdist4RGB"),(0,s.kt)("h2",{id:"\u30b3\u30fc\u30c9-65-\u56f3-613"},"\u30b3\u30fc\u30c9 6.5, \u56f3 6.13:"),(0,s.kt)(a.Z,{fragName:"6_5_fdist4RGB.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\nvec4 sort(vec4 list, float v){\n    bvec4 res = bvec4(step(v, list));\n    return res.x ? vec4(v, list.xyz):\n        res.y ? vec4(list.x, v, list.yz):\n        res.z ? vec4(list.xy, v, list.z):\n        res.w ? vec4(list.xyz, v):\n        list;\n}\nvec4 fdist24(vec2 p){\n    vec2 n = floor(p) + 0.5;\n    vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n    for(float j = 0.0; j <= 4.0; j ++ ){\n        vec2 glid;\n        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n        if (abs(glid.y - p.y) - 0.5 > dist4.w){\n            continue;\n        }\n        for(float i = -2.0; i <= 2.0; i ++ ){\n            glid.x = n.x + i;\n            vec2 jitter = hash22(glid) - 0.5;\n            dist4 = sort(dist4, length(glid + jitter - p));\n        }\n    }\n    return dist4;\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n    channel = ivec2(vec2(4, 2) * gl_FragCoord.xy/ u_resolution.xy); \n    pos *= 3.0;\n    pos += u_time;\n    float thr = 0.7;\n    bvec4 dist4b = bvec4(step(thr, fdist24(pos)));\n    fragColor = dist4b.x ? vec4(1,1,1,1): \n        dist4b.y ? vec4(1,0,0,1): \n        dist4b.z ? vec4(0,1,0,1): \n        dist4b.w ? vec4(0,0,1,1):\n        vec4(0,0,0,1);\n}\n",mdxType:"LiveGlslCodeBlock"}))}h.isMDXComponent=!0}}]);