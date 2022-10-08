"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[6488],{1746:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),i=(t(67294),t(3905)),a=t(72915);const r={sidebar_position:7},s="7_5_lpVoronoi",l={unversionedId:"chapter7/7_5_lpVoronoi",id:"chapter7/7_5_lpVoronoi",title:"7_5_lpVoronoi",description:"\u56f3 7.12:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter7/7_5_lpVoronoi.md",sourceDirName:"chapter7",slug:"/chapter7/7_5_lpVoronoi",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter7/7_5_lpVoronoi",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"7_4_lp",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter7/7_4_lp"},next:{title:"\u554f\u984c 7.2",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter7/exercise_7_2"}},u={},p=[{value:"\u56f3 7.12:",id:"\u56f3-712",level:2}],c={toc:p};function h(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"7_5_lpvoronoi"},"7_5_lpVoronoi"),(0,i.kt)("h2",{id:"\u56f3-712"},"\u56f3 7.12:"),(0,i.kt)(a.Z,{fragName:"7_5_lpVoronoi.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\nfloat length2(vec2 p){\n  p = abs(p);\n  float d = 4.0 * sin(u_time) + 5.0;\n  return pow(pow(p.x, d) + pow(p.y, d), 1.0 / d);\n}\n\nvec2 voronoi2(vec2 p){\n  vec2 n = floor(p + 0.5);\n  float dist = length2(vec2(1));\n  vec2 id;\n  for(float j = 0.0; j <= 2.0; j ++ ){\n    vec2 glid;\n    glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n    if (abs(glid.y - p.y) - 0.5 > dist){\n      continue;\n    }\n    for(float i = -1.0; i <= 1.0; i ++ ){\n      glid.x = n.x + i;\n      vec2 jitter = hash22(glid) - 0.5;\n      if (length2(glid + jitter - p) <= dist){\n        dist = length2(glid + jitter - p);\n        id = glid;\n      }\n    }\n  }\n  return id;\n}\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y); \n  pos *= 10.0;\n  pos += u_time;\n  fragColor = vec4(hash22(voronoi2(pos)), 1, 1);\n}",mdxType:"LiveGlslCodeBlock"}))}h.isMDXComponent=!0}}]);