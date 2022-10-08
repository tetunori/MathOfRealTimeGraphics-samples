"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9985],{29615:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),i=n(72915);const t={sidebar_position:7},c="8_5_raymarching",s={unversionedId:"chapter8/8_5_raymarching",id:"chapter8/8_5_raymarching",title:"8_5_raymarching",description:"\u56f3 8.8:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter8/8_5_raymarching.md",sourceDirName:"chapter8",slug:"/chapter8/8_5_raymarching",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_5_raymarching",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"8_4_normalMapping",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_4_normalMapping"},next:{title:"8_6_sphere",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter8/8_6_sphere"}},l={},p=[{value:"\u56f3 8.8:",id:"\u56f3-88",level:2}],u={toc:p};function d(r){let{components:e,...n}=r;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8_5_raymarching"},"8_5_raymarching"),(0,a.kt)("h2",{id:"\u56f3-88"},"\u56f3 8.8:"),(0,a.kt)(i.Z,{fragName:"8_5_raymarching.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\n\nfloat circleSDF(vec2 p, vec2 c, float r){\n  return length(p - c) - r;\n}\n\nfloat contour(float v){\n  return step(abs(v), 0.002);\n}\n\nfloat point(vec2 p, vec2 c){\n  return step(length(p-c), 0.01);\n}\n\nfloat line(vec2 p, vec2 c, vec2 d){\n  return step(abs(dot(p - c, vec2(-d.y, d.x))), 0.002);\n}\n\nvoid main(){\n  vec2 pos = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ u_resolution.yy;\n  vec2 cPos = vec2(-0.5, 0.0);  //camera position\n  vec2 oPos = vec2(1.0, 0.0); //object position\n  vec2 ray = oPos - cPos;\n  ray.y +=  2.0 * u_mouse.y / u_resolution.y - 1.0;\n  ray = normalize(ray);\n  float rad = 0.8;\n  vec2 rPos = cPos;\n  fragColor.rgb = contour(circleSDF(pos, oPos, rad)) * vec3(1);  //draw circle of object\n  fragColor.rgb += line(pos, cPos, ray) * vec3(0,0,1);  //draw line\n  for (int i = 0; i < 50; i++){\n    fragColor.rgb += point(pos, rPos) * vec3(1.0, 0.0, 0.0);  //plot ray position\n    float dist = circleSDF(rPos, oPos, rad);\n    if (dist < 0.01){\n      break;\n    }\n    fragColor.rgb += contour(circleSDF(pos, rPos, dist)) * vec3(0.5, 0.5, 0.0);   //draw circle with radius of SDF value\n    rPos += dist * ray;\n    if (rPos.x > oPos.x + rad){\n      break;\n    }\n  }\n  fragColor.a = 1.0;\n}\n",mdxType:"LiveGlslCodeBlock"}))}d.isMDXComponent=!0}}]);