"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[357],{79003:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(87462),s=(t(67294),t(3905)),a=t(72915);const o={sidebar_position:6},r="6_4_fdist4",c={unversionedId:"chapter6/6_4_fdist4",id:"chapter6/6_4_fdist4",title:"6_4_fdist4",description:"Code 6.4, Figure 6.12:",source:"@site/docs/chapter6/6_4_fdist4.md",sourceDirName:"chapter6",slug:"/chapter6/6_4_fdist4",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_4_fdist4",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Exercise 6.1",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/exercise_6_1"},next:{title:"6_5_fdist4RGB",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_5_fdist4RGB"}},l={},u=[{value:"Code 6.4, Figure 6.12:",id:"code-64-figure-612",level:2}],f={toc:u};function d(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,i.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"6_4_fdist4"},"6_4_fdist4"),(0,s.kt)("h2",{id:"code-64-figure-612"},"Code 6.4, Figure 6.12:"),(0,s.kt)(a.Z,{fragName:"6_4_fdist4.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\nvec4 sort(vec4 list, float v){\n  bvec4 res = bvec4(step(v, list));\n  return res.x ? vec4(v, list.xyz):\n    res.y ? vec4(list.x, v, list.yz):\n    res.z ? vec4(list.xy, v, list.z):\n    res.w ? vec4(list.xyz, v):\n    list;\n}\n\nvec4 fdist24(vec2 p){\n  vec2 n = floor(p + 0.5);\n  vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n  for(float j = 0.0; j <= 4.0; j ++ ){\n    vec2 glid;\n    glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n    if (abs(glid.y - p.y) - 0.5 > dist4.w){\n      continue;\n    }\n    for(float i = -2.0; i <= 2.0; i ++ ){\n      glid.x = n.x + i;\n      vec2 jitter = hash22(glid) - 0.5;\n      dist4 = sort(dist4, length(glid + jitter - p));\n    }\n  }\n  return dist4;\n}\n\nvec4 fdist34(vec3 p){\n  vec3 n = floor(p + 0.5);\n  vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n  for(float k = 0.0; k <= 4.0; k ++ ){\n      vec3 glid;\n      glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n      if (abs(glid.z - p.z) - 0.5 > dist4.w){\n        continue;\n      }\n    for(float j = 0.0; j <= 4.0; j ++ ){\n      glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n      if (abs(glid.y - p.y) - 0.5 > dist4.w){\n        continue;\n      }\n      for(float i = -2.0; i <= 2.0; i ++ ){\n        glid.x = n.x + i;\n        vec3 jitter = hash33(glid) - 0.5;\n        dist4 = sort(dist4, length(glid + jitter - p));\n      }\n    }\n  }\n  return dist4;\n}\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n  channel = ivec2(vec2(4, 2) * gl_FragCoord.xy/ u_resolution.xy); \n  pos *= 10.0;\n  pos += u_time;\n  fragColor = channel.y == 0 ? vec4(fdist24(pos)[channel.x % 4]) : vec4(fdist34(vec3(pos, u_time))[channel.x % 4]);\n  fragColor.a = 1.0;\n}\n",mdxType:"LiveGlslCodeBlock"}))}d.isMDXComponent=!0}}]);