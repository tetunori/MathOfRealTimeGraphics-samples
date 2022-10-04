"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[8922],{73843:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=i(87462),t=(i(67294),i(3905)),r=i(72915);const a={sidebar_position:4},s="6_3_voronoi",l={unversionedId:"chapter6/6_3_voronoi",id:"chapter6/6_3_voronoi",title:"6_3_voronoi",description:"Code 6.3, Figure 6.10:",source:"@site/docs/chapter6/6_3_voronoi.md",sourceDirName:"chapter6",slug:"/chapter6/6_3_voronoi",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_3_voronoi",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"6_2_fdistGrad",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/6_2_fdistGrad"},next:{title:"Exercise 6.1",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter6/exercise_6_1"}},c={},u=[{value:"Code 6.3, Figure 6.10:",id:"code-63-figure-610",level:2}],d={toc:u};function h(n){let{components:e,...i}=n;return(0,t.kt)("wrapper",(0,o.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"6_3_voronoi"},"6_3_voronoi"),(0,t.kt)("h2",{id:"code-63-figure-610"},"Code 6.3, Figure 6.10:"),(0,t.kt)(r.Z,{fragName:"6_3_voronoi.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\nvec2 voronoi2(vec2 p){\n  vec2 n = floor(p + 0.5);\n  float dist = sqrt(2.0);\n  vec2 id;\n  for(float j = 0.0; j <= 2.0; j ++ ){\n    vec2 glid;\n    glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n    if (abs(glid.y - p.y) - 0.5 > dist){\n      continue;\n    }\n    for(float i = -1.0; i <= 1.0; i ++ ){\n      glid.x = n.x + i;\n      vec2 jitter = hash22(glid) - 0.5;\n      if (length(glid + jitter - p) <= dist){\n        dist = length(glid + jitter - p);\n        id = glid;\n      }\n    }\n  }\n  return id;\n}\n\nvec3 voronoi3(vec3 p){\n  vec3 n = floor(p + 0.5);\n  float dist = sqrt(3.0);\n  vec3 id;\n  for(float k = 0.0; k <= 2.0; k ++ ){\n      vec3 glid;\n      glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n      if (abs(glid.z - p.z) - 0.5 > dist){\n        continue;\n      }\n    for(float j = 0.0; j <= 2.0; j ++ ){\n      glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n      if (abs(glid.y - p.y) - 0.5 > dist){\n        continue;\n      }\n      for(float i = -1.0; i <= 1.0; i ++ ){\n        glid.x = n.x + i;\n        vec3 jitter = hash33(glid) - 0.5;\n        if (length(glid + jitter - p) <= dist){\n          dist = length(glid + jitter - p);\n          id = glid;\n        }\n      }\n    }\n  }\n  return id;\n}\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n  channel = int(2.0 * gl_FragCoord.x/ u_resolution.x); \n  pos *= 10.0;\n  pos += u_time;\n  fragColor.rgb = channel == 0 ? vec3(hash22(voronoi2(pos)), 1) : vec3(hash33(voronoi3(vec3(pos, u_time))));\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}h.isMDXComponent=!0}}]);