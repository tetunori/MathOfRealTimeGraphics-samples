"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[6763],{20510:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var o=r(87462),t=(r(67294),r(3905)),a=r(72915);const s={sidebar_position:3},l="1_2_bilerp",n={unversionedId:"chapter1/1_2_bilerp",id:"chapter1/1_2_bilerp",title:"1_2_bilerp",description:"Code 1.3, Figure 1.4:",source:"@site/docs/chapter1/1_2_bilerp.md",sourceDirName:"chapter1",slug:"/chapter1/1_2_bilerp",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_2_bilerp",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1_1_lerpTriple",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_1_lerpTriple"},next:{title:"1_3_posterization",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter1/1_3_posterization"}},p={},c=[{value:"Code 1.3, Figure 1.4:",id:"code-13-figure-14",level:2}],_={toc:c};function d(e){let{components:i,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},_,r,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"1_2_bilerp"},"1_2_bilerp"),(0,t.kt)("h2",{id:"code-13-figure-14"},"Code 1.3, Figure 1.4:"),(0,t.kt)(a.Z,{fragName:"1_2_bilerp.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n    vec3[4] col4 = vec3[](\n        vec3(1.0, 0.0, 0.0),\n        vec3(0.0, 0.0, 1.0),\n        vec3(0.0, 1.0, 0.0),\n        vec3(1.0, 1.0, 0.0)\n    );\n    \n    vec3 col = mix(mix(col4[0], col4[1], pos.x), mix(col4[2], col4[3], pos.x), pos.y);\n    fragColor = vec4(col, 1.0);\n}",mdxType:"LiveGlslCodeBlock"}))}d.isMDXComponent=!0}}]);