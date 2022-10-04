"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[6398],{38283:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>u,toc:()=>f});var i=t(87462),a=(t(67294),t(3905)),s=t(72915);const r={sidebar_position:3},o="6_2_fdistGrad",u={unversionedId:"chapter6/6_2_fdistGrad",id:"chapter6/6_2_fdistGrad",title:"6_2_fdistGrad",description:"Figure 6.8:",source:"@site/docs/chapter6/6_2_fdistGrad.md",sourceDirName:"chapter6",slug:"/chapter6/6_2_fdistGrad",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_2_fdistGrad",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"6_1_fdistImproved",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_1_fdistImproved"},next:{title:"6_3_voronoi",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_3_voronoi"}},c={},f=[{value:"Figure 6.8:",id:"figure-68",level:2}],d={toc:f};function l(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6_2_fdistgrad"},"6_2_fdistGrad"),(0,a.kt)("h2",{id:"figure-68"},"Figure 6.8:"),(0,a.kt)(s.Z,{fragName:"6_2_fdistGrad.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\nfloat fdist(vec2 p){\n  vec2 n = floor(p + 0.5);\n  float dist = sqrt(2.0);\n  for(float j = 0.0; j <= 2.0; j ++ ){\n    vec2 glid;\n    glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n    if (abs(glid.y - p.y) - 0.5 > dist){\n      continue;\n    }\n    for(float i = -1.0; i <= 1.0; i ++ ){\n      glid.x = n.x + i;\n      vec2 jitter = hash22(glid) - 0.5;\n      dist = min(dist, length(glid + jitter - p));\n    }\n  }\n  return dist;\n}\n\nvec2 grad(vec2 p){\n  float eps = 0.001;\n  return 0.5 * (vec2(\n      fdist(p + vec2(eps, 0.0)) - fdist(p - vec2(eps, 0.0)),\n      fdist(p + vec2(0.0, eps)) - fdist(p - vec2(0.0, eps))\n    )) / eps;\n}\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n  channel = int(2.0 * gl_FragCoord.x/ u_resolution.x); \n  pos *= 10.0;\n  pos += u_time;\n  fragColor = channel == 0 ? vec4(fdist(pos)) : vec4(grad(pos), 1.0, 1.0);\n  fragColor.a = 1.0;\n}\n",mdxType:"LiveGlslCodeBlock"}))}l.isMDXComponent=!0}}]);