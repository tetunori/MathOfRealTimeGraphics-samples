"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[902],{80868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905)),c=t(72915);const a={sidebar_position:10},s="9_7_octahedron",i={unversionedId:"chapter9/9_7_octahedron",id:"chapter9/9_7_octahedron",title:"9_7_octahedron",description:"Code 9.7, 9.8, Figure 9.13:",source:"@site/docs/chapter9/9_7_octahedron.md",sourceDirName:"chapter9",slug:"/chapter9/9_7_octahedron",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_7_octahedron",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9_6_repeat",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_6_repeat"},next:{title:"9_8_truncation",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_8_truncation"}},p={},l=[{value:"Code 9.7, 9.8, Figure 9.13:",id:"code-97-98-figure-913",level:2}],d={toc:l};function v(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"9_7_octahedron"},"9_7_octahedron"),(0,o.kt)("h2",{id:"code-97-98-figure-913"},"Code 9.7, 9.8, Figure 9.13:"),(0,o.kt)(c.Z,{fragName:"9_7_octahedron.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\n//begin rot\nvec2 rot2(vec2 p, float t){\n  return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\n\nvec3 rotX(vec3 p, float t){\n  return vec3(p.x, rot2(p.yz, t));\n}\n\nvec3 rotY(vec3 p, float t){\n  return vec3(p.y, rot2(p.zx, t)).zxy;\n}\n\nvec3 rotZ(vec3 p, float t){\n  return vec3(rot2(p.xy, t), p.z);\n}\n\nvec3 euler(vec3 p, vec3 t){\n  return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\n\nfloat smin(float d1, float d2, float r){\n  float c = clamp(0.5 + (d2 - d1) * (0.5 / r), 0.0, 1.0);\n  return mix(d2, d1, c) - r * c * (1.0 - c);\n}\n\nfloat sphereSDF(vec3 p, vec3 c, float r){\n  return length(p - c) - r;\n}\n\nfloat planeSDF(vec3 p, vec3 n, float s){\n  return dot(normalize(n), p) - s;\n}\n\nfloat octaSDF(vec3 p, float s){\n  return planeSDF(abs(p), vec3(1.0), s);\n}\n\nfloat sceneSDF(vec3 p){\n  float t = 0.3 + 0.2 * sin(u_time);\n  float d1 = octaSDF(p, 0.5);\n  float d2 = sphereSDF(abs(p), vec3(t), 0.1);\n  return smin(d1, d2, 0.1);\n}\n\nvec3 gradSDF(vec3 p){\n  float eps = 0.001;\n  return normalize(vec3(\n    sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n    sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n    sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n  ));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n  \n  vec3 t = vec3(u_time * 0.3);\n  vec3 cPos = euler(vec3(0.0, 0.0, 2.0), t);\n  vec3 cDir = euler(vec3(0.0, 0.0, - 1.0), t);\n  vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);\n  vec3 cSide = cross(cDir, cUp);\n  \n  float targetDepth = 1.0;\n  \n  vec3 lDir = euler(vec3(0.0, 0.0, 1.0), t);\n  \n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n  vec3 rPos = ray + cPos;\n  ray = normalize(ray);\n  fragColor.rgb = vec3(0.0);\n  for(int i = 0; i < 50; i ++ ){\n    if (sceneSDF(rPos) > 0.001){\n      rPos += sceneSDF(rPos) * ray;\n    } else {\n      float amb = 0.1;\n      float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n      vec3 col = vec3(0.0, 1.0, 1.0);\n      fragColor.rgb = col * (diff + amb);\n      break;\n    }\n  }\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}v.isMDXComponent=!0}}]);