"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2675],{19749:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905)),i=o(72915);const t={sidebar_position:1},c="9_0_boolOp3d",s={unversionedId:"chapter9/9_0_boolOp3d",id:"chapter9/9_0_boolOp3d",title:"9_0_boolOp3d",description:"\u30b3\u30fc\u30c9 9.1, \u56f3 9.1:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter9/9_0_boolOp3d.md",sourceDirName:"chapter9",slug:"/chapter9/9_0_boolOp3d",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_0_boolOp3d",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chapter 9: SDF Recipe",permalink:"/MathOfRealTimeGraphics-samples/docs/category/chapter-9-sdf-recipe"},next:{title:"9_1_boolOp2d",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_1_boolOp2d"}},p={},l=[{value:"\u30b3\u30fc\u30c9 9.1, \u56f3 9.1:",id:"\u30b3\u30fc\u30c9-91-\u56f3-91",level:2}],d={toc:l};function m(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"9_0_boolop3d"},"9_0_boolOp3d"),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9-91-\u56f3-91"},"\u30b3\u30fc\u30c9 9.1, \u56f3 9.1:"),(0,a.kt)(i.Z,{fragName:"9_0_boolOp3d.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\nfloat sphereSDF(vec3 p, vec3 c, float r){\n  return length(p - c) - r;\n}\n\nfloat sceneSDF(vec3 p){\n  float[3] smallS, bigS;\n  for (int i = 0; i < 3; i++){\n    smallS[i] = sphereSDF(p, vec3(float(i - 1), sin(u_time), 0.0), 0.3);\n    bigS[i] = sphereSDF(p, vec3(float(i - 1), 0.0, 0.0), 0.5);\n  }\n  float cap = max(smallS[0], bigS[0]);\n  float cup = min(smallS[1], bigS[1]);\n  float minus = max(smallS[2], -bigS[2]);\n  return min(min(cap, cup), minus);\n}\n\nvec3 gradSDF(vec3 p){\n  float eps = 0.001;\n  return normalize(vec3(\n    sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p + vec3(-eps, 0.0, 0.0)),\n    sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p + vec3(0.0, - eps, 0.0)),\n    sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p + vec3(0.0, 0.0, - eps))\n  ));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n  \n  vec3 cPos = vec3(0.0, 0.0, 2.0);\n  vec3 cDir = vec3(0.0, 0.0, -1.0);\n  vec3 cUp = vec3(0.0, 1.0, 0.0);\n  vec3 cSide = cross(cDir, cUp);\n  float targetDepth = 1.0;\n  \n  vec3 lDir = vec3(0.0, 0.0, 1.0);\n\n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n  \n  vec3 rPos = cPos + ray;\n  ray = normalize(ray);\n  fragColor.rgb = vec3(0.0);\n  for(int i = 0; i < 50; i ++ ){\n    if (sceneSDF(rPos) > 0.001){\n      rPos += sceneSDF(rPos) * ray;\n    } else {\n      float amb = 0.1;\n      float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n      vec3 col = vec3(1.0);\n      fragColor.rgb = col * (diff + amb);\n      break;\n    }\n  }\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}m.isMDXComponent=!0}}]);