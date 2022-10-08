"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2254],{35242:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>_,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var t=i(87462),p=(i(67294),i(3905)),l=i(72915);const o={sidebar_position:2},a="1_1_lerpTriple",n={unversionedId:"chapter1/1_1_lerpTriple",id:"chapter1/1_1_lerpTriple",title:"1_1_lerpTriple",description:"Code 1.2, Figure 1.3:",source:"@site/docs/chapter1/1_1_lerpTriple.md",sourceDirName:"chapter1",slug:"/chapter1/1_1_lerpTriple",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_1_lerpTriple",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1_0_lerp",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_0_lerp"},next:{title:"1_2_bilerp",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_2_bilerp"}},s={},c=[{value:"Code 1.2, Figure 1.3:",id:"code-12-figure-13",level:2}],d={toc:c};function _(e){let{components:r,...i}=e;return(0,p.kt)("wrapper",(0,t.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"1_1_lerptriple"},"1_1_lerpTriple"),(0,p.kt)("h2",{id:"code-12-figure-13"},"Code 1.2, Figure 1.3:"),(0,p.kt)(l.Z,{fragName:"1_1_lerpTriple.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nuniform vec2 u_resolution;\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n  vec3[3] col3 = vec3[](\n    vec3(1.0, 0.0, 0.0),\n    vec3(0.0, 0.0, 1.0),\n    vec3(0.0, 1.0, 0.0)\n  );\n  pos.x *= 2.0;\n  int ind = int(pos.x);\n  vec3 col = mix(col3[ind], col3[ind + 1], fract(pos.x));\n  fragColor = vec4(col, 1.0);\n}",mdxType:"LiveGlslCodeBlock"}))}_.isMDXComponent=!0}}]);