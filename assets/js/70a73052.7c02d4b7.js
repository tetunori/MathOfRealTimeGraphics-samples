"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9560],{53260:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=i(87462),t=(i(67294),i(3905)),a=i(72915);const r={sidebar_position:4},s="9_3_smoothMin",c={unversionedId:"chapter9/9_3_smoothMin",id:"chapter9/9_3_smoothMin",title:"9_3_smoothMin",description:"\u30b3\u30fc\u30c9 9.3, \u56f3 9.7:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter9/9_3_smoothMin.md",sourceDirName:"chapter9",slug:"/chapter9/9_3_smoothMin",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_3_smoothMin",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"9_2_morphing",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_2_morphing"},next:{title:"\u554f\u984c 9.1",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/exercise_9_1"}},l={},p=[{value:"\u30b3\u30fc\u30c9 9.3, \u56f3 9.7:",id:"\u30b3\u30fc\u30c9-93-\u56f3-97",level:2}],m={toc:p};function f(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"9_3_smoothmin"},"9_3_smoothMin"),(0,t.kt)("h2",{id:"\u30b3\u30fc\u30c9-93-\u56f3-97"},"\u30b3\u30fc\u30c9 9.3, \u56f3 9.7:"),(0,t.kt)(a.Z,{fragName:"9_3_smoothMin.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\nfloat sphereSDF(vec3 p, vec3 cent, float rad){\n  return distance(p, cent) - rad;\n}\n\nfloat smin(float a, float b, float k){\n  float h = clamp(0.5 - 0.5 * (b - a) / k, 0.0, 1.0);\n  return mix(a, b, h) - k * h * (1.0 - h); \n}\n\nfloat sceneSDF(vec3 p){\n  float[3] smallS, bigS;\n  for(int i = 0; i < 3; i ++ ){\n    smallS[i] = sphereSDF(p, vec3(float(i - 1), sin(u_time), 0.0), 0.3);\n    bigS[i] = sphereSDF(p, vec3(float(i - 1), 0.0, 0.0), 0.4);\n  }\n  float cap = smin(smallS[0], bigS[0], 0.1);\n  float cup = smin(smallS[1], bigS[1], 0.3);\n  float minus = smin(smallS[2], bigS[2], 0.5);\n  return min(min(cap, cup), minus);\n}\n\nvec3 gradSDF(vec3 p){\n  float eps = 0.0001;\n  return normalize(vec3(\n    sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p + vec3(-eps, 0.0, 0.0)),\n    sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p + vec3(0.0, - eps, 0.0)),\n    sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p + vec3(0.0, 0.0, - eps))\n  ));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n\n  vec3 cPos = vec3(0.0, 0.0, 2.0);\n  vec3 cDir = vec3(0.0, 0.0, - 1.0);\n  vec3 cUp = vec3(0.0, 1.0, 0.0);\n  vec3 cSide = cross(cDir, cUp);\n  float targetDepth = 1.0;\n\n  vec3 lDir = vec3(0.0, 0.0, 1.0);\n\n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n  vec3 rPos = cPos + ray;\n  ray = normalize(ray);\n  fragColor.rgb = vec3(0.0);\n  for(int i = 0; i < 50; i ++ ){\n    if (sceneSDF(rPos) > 0.001){\n      rPos += sceneSDF(rPos) * ray;\n    } else {\n      float amb = 0.1;\n      float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n      vec3 col = vec3(1.0);\n      fragColor.rgb = col * (diff + amb);\n      break;\n    }\n  }\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}f.isMDXComponent=!0}}]);