"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9242],{65291:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=i(87462),o=(i(67294),i(3905)),a=i(72915);const s={sidebar_position:3},n="1_2_bilerp",p={unversionedId:"chapter1/1_2_bilerp",id:"chapter1/1_2_bilerp",title:"1_2_bilerp",description:"\u30b3\u30fc\u30c9 1.3, \u56f3 1.4:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter1/1_2_bilerp.md",sourceDirName:"chapter1",slug:"/chapter1/1_2_bilerp",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter1/1_2_bilerp",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1_1_lerpTriple",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter1/1_1_lerpTriple"},next:{title:"1_3_posterization",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter1/1_3_posterization"}},l={},c=[{value:"\u30b3\u30fc\u30c9 1.3, \u56f3 1.4:",id:"\u30b3\u30fc\u30c9-13-\u56f3-14",level:2}],_={toc:c};function m(e){let{components:r,...i}=e;return(0,o.kt)("wrapper",(0,t.Z)({},_,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1_2_bilerp"},"1_2_bilerp"),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9-13-\u56f3-14"},"\u30b3\u30fc\u30c9 1.3, \u56f3 1.4:"),(0,o.kt)(a.Z,{fragName:"1_2_bilerp.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n  vec3[4] col4 = vec3[](\n    vec3(1.0, 0.0, 0.0),\n    vec3(0.0, 0.0, 1.0),\n    vec3(0.0, 1.0, 0.0),\n    vec3(1.0, 1.0, 0.0)\n  );\n  \n  vec3 col = mix(mix(col4[0], col4[1], pos.x), mix(col4[2], col4[3], pos.x), pos.y);\n  fragColor = vec4(col, 1.0);\n}",mdxType:"LiveGlslCodeBlock"}))}m.isMDXComponent=!0}}]);