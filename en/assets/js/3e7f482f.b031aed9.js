"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2205],{78363:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=t(87462),s=(t(67294),t(3905)),o=t(72915);const a={sidebar_position:8},c="6_6_cnoise",r={unversionedId:"chapter6/6_6_cnoise",id:"chapter6/6_6_cnoise",title:"6_6_cnoise",description:"Code 6.6, Figure 6.14:",source:"@site/docs/chapter6/6_6_cnoise.md",sourceDirName:"chapter6",slug:"/chapter6/6_6_cnoise",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_6_cnoise",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"6_5_fdist4RGB",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_5_fdist4RGB"},next:{title:"Chapter 7: Distance and SDF",permalink:"/MathOfRealTimeGraphics-samples/en/docs/category/chapter-7-distance-and-sdf"}},l={},u=[{value:"Code 6.6, Figure 6.14:",id:"code-66-figure-614",level:2}],d={toc:u};function v(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"6_6_cnoise"},"6_6_cnoise"),(0,s.kt)("h2",{id:"code-66-figure-614"},"Code 6.6, Figure 6.14:"),(0,s.kt)(o.Z,{fragName:"6_6_cnoise.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\nvec4 sort(vec4 list, float v){\n  bvec4 res = bvec4(step(v, list));\n  return res.x ? vec4(v, list.xyz):\n    res.y ? vec4(list.x, v, list.yz):\n    res.z ? vec4(list.xy, v, list.z):\n    res.w ? vec4(list.xyz, v):\n    list;\n}\n\nvec4 fdist24(vec2 p){\n  vec2 n = floor(p) + 0.5;\n  vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n  for(float j = 0.0; j <= 4.0; j ++ ){\n    vec2 glid;\n    glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n    if (abs(glid.y - p.y) - 0.5 > dist4.w){\n      continue;\n    }\n    for(float i = -2.0; i <= 2.0; i ++ ){\n      glid.x = n.x + i;\n      vec2 jitter = hash22(glid) - 0.5;\n      dist4 = sort(dist4, length(glid + jitter - p));\n    }\n  }\n  return dist4;\n}\n\nvec4 fdist34(vec3 p){\n  vec3 n = floor(p) + 0.5;\n  vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n  for(float k = 0.0; k <= 4.0; k ++ ){\n      vec3 glid;\n      glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n      if (abs(glid.z - p.z) - 0.5 > dist4.w){\n        continue;\n      }\n    for(float j = 0.0; j <= 4.0; j ++ ){\n      glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n      if (abs(glid.y - p.y) - 0.5 > dist4.w){\n        continue;\n      }\n      for(float i = -2.0; i <= 2.0; i ++ ){\n        glid.x = n.x + i;\n        vec3 jitter = hash33(glid) - 0.5;\n        dist4 = sort(dist4, length(glid + jitter - p));\n      }\n    }\n  }\n  return dist4;\n}\n\nvec4 wt;\nfloat cnoise21(vec2 p){\n  return abs(dot(wt, fdist24(p)));\n}\n\nfloat cnoise31(vec3 p){\n  return abs(dot(wt, fdist34(p)));\n}\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n  channel = ivec2(vec2(3, 2) * gl_FragCoord.xy/ u_resolution.xy); \n  pos *= 10.0;\n  pos += u_time;\n  wt = channel.x == 0 ? vec4(0.2):\n    channel.x == 1 ? vec4(0.5, -1.0, 1.4, -0.1):\n    vec4(-0.3, -0.5, -1.2, 1.0);\n  fragColor = vec4(channel.y == 0 ? cnoise21(pos) : cnoise31(vec3(pos, u_time)));\n  fragColor.a = 1.0;\n}\n",mdxType:"LiveGlslCodeBlock"}))}v.isMDXComponent=!0}}]);