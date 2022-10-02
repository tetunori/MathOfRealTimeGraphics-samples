"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[636],{23266:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),n=(t(67294),t(3905)),o=t(72915);const i={sidebar_position:1},s="2_0_legacy",c={unversionedId:"chapter2/2_0_legacy",id:"chapter2/2_0_legacy",title:"2_0_legacy",description:"\u30b3\u30fc\u30c9 2.1, \u56f3 2.2:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter2/2_0_legacy.md",sourceDirName:"chapter2",slug:"/chapter2/2_0_legacy",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter2/2_0_legacy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chapter 2: Pseudo-Random Number",permalink:"/MathOfRealTimeGraphics-samples/docs/category/chapter-2-pseudo-random-number"},next:{title:"2_1_binary",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter2/2_1_binary"}},l={},p=[{value:"\u30b3\u30fc\u30c9 2.1, \u56f3 2.2:",id:"\u30b3\u30fc\u30c9-21-\u56f3-22",level:2}],u={toc:p};function f(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2_0_legacy"},"2_0_legacy"),(0,n.kt)("h2",{id:"\u30b3\u30fc\u30c9-21-\u56f3-22"},"\u30b3\u30fc\u30c9 2.1, \u56f3 2.2:"),(0,n.kt)(o.Z,{fragName:"2_0_legacy.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\nfloat fractSin11(float x){ // 1 in, 1 out\n    return fract(1000.0 * sin(x));\n}\nfloat fractSin21(vec2 xy){ // 2 in, 1 out\n    return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.5453123);\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy;\n    pos += floor(60.0 * u_time);\n    channel = int(2.0 * gl_FragCoord.x / u_resolution.x);\n    if (channel == 0){ //left\n        fragColor = vec4(fractSin11(pos.x));\n    } else { //right\n        fragColor = vec4(fractSin21(pos.xy / u_resolution.xy));\n    }\n    fragColor.a = 1.0; \n}",mdxType:"LiveGlslCodeBlock"}))}f.isMDXComponent=!0}}]);