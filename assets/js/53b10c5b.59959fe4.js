"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9340],{72821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),r=(t(67294),t(3905)),c=t(72915);const a={sidebar_position:12},p="\u554f\u984c 9.3-1",i={unversionedId:"chapter9/exercise_9_3-1",id:"chapter9/exercise_9_3-1",title:"\u554f\u984c 9.3-1",description:"5\u7a2e\u306e\u6b63\u591a\u9762\u4f53:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter9/exercise_9_3-1.md",sourceDirName:"chapter9",slug:"/chapter9/exercise_9_3-1",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/exercise_9_3-1",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"9_8_truncation",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_8_truncation"},next:{title:"\u554f\u984c 9.3-2",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/exercise_9_3-2"}},s={},l=[{value:"5\u7a2e\u306e\u6b63\u591a\u9762\u4f53:",id:"5\u7a2e\u306e\u6b63\u591a\u9762\u4f53",level:2}],d={toc:l};function v(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u554f\u984c-93-1"},"\u554f\u984c 9.3-1"),(0,r.kt)("h2",{id:"5\u7a2e\u306e\u6b63\u591a\u9762\u4f53"},"5\u7a2e\u306e\u6b63\u591a\u9762\u4f53:"),(0,r.kt)("p",null,"Tetrahedron -> Hexahedron -> Octahedron -> Dodecahedron -> Icosahedron  "),(0,r.kt)(c.Z,{fragName:"exercise_9_3-1.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\n//begin rot\nvec2 rot2(vec2 p, float t){\n  return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\n\nvec3 rotX(vec3 p, float t){\n  return vec3(p.x, rot2(p.yz, t));\n}\n\nvec3 rotY(vec3 p, float t){\n  return vec3(p.y, rot2(p.zx, t)).zxy;\n}\n\nvec3 rotZ(vec3 p, float t){\n  return vec3(rot2(p.xy, t), p.z);\n}\n\nvec3 euler(vec3 p, vec3 t){\n  return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\n\nfloat smin(float d1, float d2, float r){\n  float c = clamp(0.5 + (d2 - d1) * (0.5 / r), 0.0, 1.0);\n  return mix(d2, d1, c) - r * c * (1.0 - c);\n}\n\n// Reference: MIT License Copyright (c) 2018 Mikael Hvidtfeldt Christensen\n// https://github.com/Syntopia/Polytopia/blob/master/polyhedron.glsl\n// https://syntopia.github.io/Polytopia/polytopes.html\n\n#define PI 3.141592\n\nvec3 nc,pNorm,pab,pbc,pca;\nfloat Degree = 5.0;\nfloat V=0., W=1., U = 0.;\nint polyidx = 0;\n\n// degree, v, w, u\nvec4[5] paramArray = vec4[](\n  vec4(3.0, 0.0, 0.0, 1.0), // Tetrahedron \n  vec4(4.0, 0.0, 0.0, 1.0), // Hexahedron\n  vec4(4.0, 0.0, 1.0, 0.0), // Octahedron\n  vec4(5.0, 0.0, 0.0, 1.0), // Dodecahedron\n  vec4(5.0, 0.0, 1.0, 0.0)  // Icosahedron\n);\n\nvoid init( int idx ) {\n  vec4 param = paramArray[idx];\n  Degree = param.x;\n  V = param.y;\n  W = param.z;\n  U = param.w;\n\n\tfloat cospin=cos(PI/Degree), scospin=sqrt(0.75-cospin*cospin);\n\tnc=vec3(-0.5,-cospin,scospin);\n\tpab=vec3(0.,0.,1.);\n\tpbc=vec3(scospin,0.,0.5);\n\tpca=vec3(0.,scospin,cospin);\n\n\tpNorm=normalize((V*pab+W*pbc+U*pca));\n\tpbc=normalize(pbc);\n\tpca=normalize(pca);\n}\n\nvec3 fold(vec3 pos) {\n\tint max = 5; //int(Degree);\n\tfor(int i=0;i<7;i++){\n\t\tpos.xy=abs(pos.xy);\n\t\tfloat t=-2.*min(0.,dot(pos,nc));\n\t\tpos+=t*nc;\n\t\tif (i>=max) break;\n\t}\n\treturn pos;\n}\n\nfloat D2Planes(vec3 pos) {\n\tfloat d0=dot(pos,pab)-dot(pab,pNorm);\n\tfloat d1=dot(pos,pbc)-dot(pbc,pNorm);\n\tfloat d2=dot(pos,pca)-dot(pca,pNorm);\n\t\n\treturn abs(max(max(d0,d1),d2));\n}\n\nfloat regularPolyhedronSDF(vec3 pos, int idx, float s){\n  init(idx);\n  vec3 oPos = pos;\n\tpos=fold(pos);\n\tfloat d=10000.;\n\td=min(d,D2Planes(pos));\n\treturn d;\n}\n\nfloat sceneSDF(vec3 p){\n  return regularPolyhedronSDF(p, polyidx, 0.5);\n}\n\nvec3 gradSDF(vec3 p){\n  float eps = 0.003;\n  return normalize(vec3(\n    sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n    sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n    sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n  ));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n  \n  vec3 t = 2.0 + vec3(u_time * 0.5);\n  vec3 cPos = euler(vec3(0.0, 0.0, 2.0), t);\n  vec3 cDir = euler(vec3(0.0, 0.0, -1.0), t);\n  vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);\n  vec3 cSide = cross(cDir, cUp);\n  \n  float targetDepth = 1.0;\n  \n  vec3 lDir = euler(vec3(0.0, 0.0, 1.0), t);\n\n  float sec = 6.0;\n  polyidx = int(floor(mod(float(u_time),5.0*sec)/sec));\n\n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n  vec3 rPos = ray + cPos;\n  ray = normalize(ray);\n  fragColor.rgb = vec3(0.078, 0.129, 0.239);\n  for(int i = 0; i < 50; i ++ ){\n    if (sceneSDF(rPos) > 0.001){\n      rPos += sceneSDF(rPos) * ray;\n    } else {\n      float amb = 0.1;\n      float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n      vec3 col = vec3(0.988, 0.639, 0.067);\n      fragColor.rgb = col * (diff + amb);\n      break;\n    }\n  }\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}v.isMDXComponent=!0}}]);