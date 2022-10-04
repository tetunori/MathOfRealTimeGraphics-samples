"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[874],{98671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),c=(t(67294),t(3905)),o=t(72915);const a={sidebar_position:9},p="9_6_repeat",s={unversionedId:"chapter9/9_6_repeat",id:"chapter9/9_6_repeat",title:"9_6_repeat",description:"Code 9.6, Figure 9.11:",source:"@site/docs/chapter9/9_6_repeat.md",sourceDirName:"chapter9",slug:"/chapter9/9_6_repeat",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_6_repeat",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"9_5_displacement",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_5_displacement"},next:{title:"9_7_octahedron",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_7_octahedron"}},i={},l=[{value:"Code 9.6, Figure 9.11:",id:"code-96-figure-911",level:2}],v={toc:l};function u(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"9_6_repeat"},"9_6_repeat"),(0,c.kt)("h2",{id:"code-96-figure-911"},"Code 9.6, Figure 9.11:"),(0,c.kt)(o.Z,{fragName:"9_6_repeat.frag",fragCode:"#version 300 es\nprecision mediump float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\n//begin rot\nvec2 rot2(vec2 p, float t){\n  return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\n\nvec3 rotX(vec3 p, float t){\n  return vec3(p.x, rot2(p.yz, t));\n}\n\nvec3 rotY(vec3 p, float t){\n  return vec3(p.y, rot2(p.zx, t)).zxy;\n}\n\nvec3 rotZ(vec3 p, float t){\n  return vec3(rot2(p.xy, t), p.z);\n}\n\nvec3 euler(vec3 p, vec3 t){\n  return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\n\nfloat sphereSDF(vec3 p, vec3 c, float s){\n  return sqrt(dot(p - c, p - c)) - s;\n}\n\nfloat sceneSDF(vec3 p){\n  vec3 center = vec3(0.0);\n  float scale = 0.1;\n  return sphereSDF(fract(p+0.5)-0.5, center, scale);\n}\n\nvec3 gradSDF(vec3 p){\n  float eps = 0.001;\n  return normalize (vec3(\n    sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n    sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n    sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n  ));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n\n  vec3 t = vec3(u_time * 0.1);\n  vec3 cPos = euler(vec3(0.0, 0.0,.5), t);\n  vec3 cDir = euler(vec3(0.0, 0.0, - 1.0), t);\n  vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);\n  vec3 cSide = cross(cDir, cUp);\n\n  float targetDepth = 1.0;\n\n  vec3 lDir = vec3(1.0);\n\n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n  vec3 rPos = cPos;\n  ray = normalize(ray);\n  fragColor.rgb = vec3(0.0);\n  for(int i = 0; i < 50; i ++ ){\n    if (sceneSDF(rPos) > 0.001){\n      rPos += sceneSDF(rPos) * ray;\n    } else {\n      float amb = 0.1;\n      float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n      vec3 col = vec3(0.0, 1.0, 1.0);\n      fragColor.rgb = col * (diff + amb);\n      break;\n    }\n  }\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}u.isMDXComponent=!0}}]);