"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9170],{56689:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=o(87462),r=(o(67294),o(3905)),c=o(72915);const a={sidebar_position:13},i="Exercise 9.3-2",s={unversionedId:"chapter9/exercise_9_3-2",id:"chapter9/exercise_9_3-2",title:"Exercise 9.3-2",description:"13 Semi-Regular Polyhedrons:",source:"@site/docs/chapter9/exercise_9_3-2.md",sourceDirName:"chapter9",slug:"/chapter9/exercise_9_3-2",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/exercise_9_3-2",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Exercise 9.3-1",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/exercise_9_3-1"},next:{title:"9_9_dist",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter9/9_9_dist"}},p={},d=[{value:"13 Semi-Regular Polyhedrons:",id:"13-semi-regular-polyhedrons",level:2},{value:"11 polyhedrons except for snubs",id:"11-polyhedrons-except-for-snubs",level:3},{value:"2 snub polyhedrons",id:"2-snub-polyhedrons",level:3}],l={toc:d};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercise-93-2"},"Exercise 9.3-2"),(0,r.kt)("h2",{id:"13-semi-regular-polyhedrons"},"13 Semi-Regular Polyhedrons:"),(0,r.kt)("h3",{id:"11-polyhedrons-except-for-snubs"},"11 polyhedrons except for snubs"),(0,r.kt)("p",null,"Truncated tetrahedron -> Truncated cube -> Truncated octahedron -> Truncated dodecahedron -> Truncated icosahedron -> Cuboctahedron -> Icosidodecahedron -> Rhombicuboctahedron -> Rhombicosidodecahedron -> Truncated cuboctahedron -> Truncated icosidodecahedron"),(0,r.kt)(c.Z,{fragName:"exercise_9_3-2-1.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n//begin rot\nvec2 rot2(vec2 p, float t){\n    return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\nvec3 rotX(vec3 p, float t){\n    return vec3(p.x, rot2(p.yz, t));\n}\nvec3 rotY(vec3 p, float t){\n    return vec3(p.y, rot2(p.zx, t)).zxy;\n}\nvec3 rotZ(vec3 p, float t){\n    return vec3(rot2(p.xy, t), p.z);\n}\nvec3 euler(vec3 p, vec3 t){\n    return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\nfloat smin(float d1, float d2, float r){\n    float c = clamp(0.5 + (d2 - d1) * (0.5 / r), 0.0, 1.0);\n    return mix(d2, d1, c) - r * c * (1.0 - c);\n}\n\n// Reference: MIT License Copyright (c) 2018 Mikael Hvidtfeldt Christensen\n// https://github.com/Syntopia/Polytopia/blob/master/polyhedron.glsl\n// https://syntopia.github.io/Polytopia/polytopes.html\n\n// Reference: Polyhedron again\n// https://www.shadertoy.com/view/XlX3zB by knighty \n\n#define PI 3.141592\n\nvec3 nc,initVertex,pab,pbc,pca;\nfloat Degree = 5.0;\nfloat V=0., W=1., U = 0.;\nint polyidx = 0;\n\n// degree, v, w, u\nvec4[11] paramArray = vec4[](\n  vec4(3.0, 1.0, 0.0, 1.0), // \u5207\u9802\u56db\u9762\u4f53, Truncated tetrahedron\n  vec4(4.0, 1.0, 0.0, 1.0), // \u5207\u9802\u516d\u9762\u4f53, Truncated cube\n  vec4(4.0, 1.0, 1.0, 0.0), // \u5207\u9802\u516b\u9762\u4f53, Truncated octahedron\n  vec4(5.0, 1.0, 0.0, 1.0), // \u5207\u9802\u5341\u4e8c\u9762\u4f53, Truncated dodecahedron\n  vec4(5.0, 1.0, 1.0, 0.0), // \u5207\u9802\u4e8c\u5341\u9762\u4f53, Truncated icosahedron\n  vec4(4.0, 1.0, 0.0, 0.0), // \u7acb\u65b9\u516b\u9762\u4f53, Cuboctahedron\n  vec4(5.0, 1.0, 0.0, 0.0), // \u4e8c\u5341\u30fb\u5341\u4e8c\u9762\u4f53, Icosidodecahedron\n  vec4(4.0, 0.0, 1.0, 1.0), // \u659c\u65b9\u7acb\u65b9\u516b\u9762\u4f53, Rhombicuboctahedron\n  vec4(5.0, 0.0, 1.0, 1.0), // \u659c\u65b9\u4e8c\u5341\u30fb\u5341\u4e8c\u9762\u4f53, Rhombicosidodecahedron\n  vec4(4.0, 1.0, 1.0, 1.0), // \u659c\u65b9\u5207\u9802\u7acb\u65b9\u516b\u9762\u4f53, Truncated cuboctahedron\n  vec4(5.0, 1.0, 1.0, 1.0) // \u659c\u65b9\u5207\u9802\u4e8c\u5341\u30fb\u5341\u4e8c\u9762\u4f53, Truncated icosidodecahedron\n  // \u5909\u5f62\u7acb\u65b9\u4f53\u3001\u5909\u5f62\u5341\u4e8c\u9762\u4f53\u306f\u3053\u306e\u5f62\u3067\u306f\u4f5c\u308c\u306a\u3044\u3002\n);\n\nvoid init( int idx ) {\n  vec4 param = paramArray[idx];\n  Degree = param.x;\n  V = param.y;\n  W = param.z;\n  U = param.w;\n\n\tfloat cospin=cos(PI/Degree), scospin=sqrt(0.75-cospin*cospin);\n\tnc=vec3(-0.5,-cospin,scospin);// 3rd folding plane. The two others are xz and yz planes\n\tpab=vec3(0.,0.,1.);\n\tpbc=vec3(scospin,0.,0.5);\n\tpca=vec3(0.,scospin,cospin);\n\n\tinitVertex=normalize((V*pab+W*pbc+U*pca));\n\tpbc=normalize(pbc);\n\tpca=normalize(pca);\n}\n\nvec3 fold(vec3 pos) {\n\tint max = 5; //int(Degree);\n\tfor(int i=0;i<7;i++){\n\t\tpos.xy=abs(pos.xy);\n\t\tfloat t=-2.*min(0.,dot(pos,nc));\n\t\tpos+=t*nc;\n\t\tif (i>=max) break;\n\t}\n\treturn pos;\n}\n\nfloat D2Planes(vec3 pos) {\n\tfloat d0=dot(pos,pab)-dot(pab,initVertex);\n\tfloat d1=dot(pos,pbc)-dot(pbc,initVertex);\n\tfloat d2=dot(pos,pca)-dot(pca,initVertex);\n\t\n\treturn abs(max(max(d0,d1),d2));\n}\n\nfloat regularPolyhedronSDF(vec3 pos, int idx, float s){\n  init(idx);\n  vec3 oPos = pos;\n\tpos=fold(pos);\n\tfloat d=10000.;\n\td=min(d,D2Planes(pos));\n\treturn d;\n}\n\nfloat sceneSDF(vec3 p){\n  return regularPolyhedronSDF(p, polyidx, 0.5);\n}\n\nvec3 gradSDF(vec3 p){\n  float eps = 0.003;\n  return normalize(vec3(\n      sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n      sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n      sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n  ));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n  \n  vec3 t = 2.0 + vec3(u_time * 0.5);\n  vec3 cPos = euler(vec3(0.0, 0.0, 2.0), t);\n  vec3 cDir = euler(vec3(0.0, 0.0, -1.0), t);\n  vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);\n  vec3 cSide = cross(cDir, cUp);\n  \n  float targetDepth = 1.0;\n  \n  vec3 lDir = euler(vec3(0.0, 0.0, 1.0), t);\n\n  float sec = 6.0;\n  polyidx = int(floor(mod(float(u_time),11.0*sec)/sec));\n\n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n  vec3 rPos = ray + cPos;\n  ray = normalize(ray);\n  fragColor.rgb = vec3(0.078, 0.129, 0.239);\n  for(int i = 0; i < 50; i ++ ){\n      if (sceneSDF(rPos) > 0.001){\n          rPos += sceneSDF(rPos) * ray;\n      } else {\n          float amb = 0.1;\n          float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n          vec3 col = vec3(0.988, 0.639, 0.067);\n          fragColor.rgb = col * (diff + amb);\n          break;\n      }\n  }\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}),(0,r.kt)("h3",{id:"2-snub-polyhedrons"},"2 snub polyhedrons"),(0,r.kt)("p",null,"(Not Yet...)\nSnub cube -> Snub dodecahedron"),(0,r.kt)(c.Z,{fragName:"exercise_9_3-2-2.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nvoid main(){\n    fragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n",mdxType:"LiveGlslCodeBlock"}))}u.isMDXComponent=!0}}]);