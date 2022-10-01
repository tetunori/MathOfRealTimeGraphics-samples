"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[1938],{67637:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>_,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905)),r=t(72915);const s={sidebar_position:5},i="1_4_polar",l={unversionedId:"chapter1/1_4_polar",id:"chapter1/1_4_polar",title:"1_4_polar",description:"Code 1.6, 1.7, 1.8, Figure 1.10:",source:"@site/docs/chapter1/1_4_polar.md",sourceDirName:"chapter1",slug:"/chapter1/1_4_polar",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter1/1_4_polar",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"1_3_posterization",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter1/1_3_posterization"},next:{title:"1_5_polarRot",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter1/1_5_polarRot"}},p={},c=[{value:"Code 1.6, 1.7, 1.8, Figure 1.10:",id:"code-16-17-18-figure-110",level:2}],u={toc:c};function _(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1_4_polar"},"1_4_polar"),(0,a.kt)("h2",{id:"code-16-17-18-figure-110"},"Code 1.6, 1.7, 1.8, Figure 1.10:"),(0,a.kt)(r.Z,{fragName:"1_4_polar.frag",fragCode:"#version 300 es\nprecision highp float;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nconst float PI = 3.1415926;\nfloat atan2(float y, float x){\n    if (x == 0.0){\n        return sign(y) * PI / 2.0;\n    } else {\n        return atan(y, x);\n    }\n    // or use '?:' as follows:\n    // return x == 0.0 ? sign(y) * PI / 2.0 : atan(y, x);\n}\nvec2 xy2pol(vec2 xy){\n    return vec2(atan2(xy.y, xy.x), length(xy));\n}\nvec2 pol2xy(vec2 pol){\n    return pol.y * vec2(cos(pol.x), sin(pol.x));\n}\nvec3 tex(vec2 st){\n    vec3[3] col3 = vec3[](\n        vec3(0.0, 0.0, 1.0),\n        vec3(1.0, 0.0, 0.0),\n        vec3(1.0)\n    );\n    st.s = st.s / PI + 1.0;\n    int ind = int(st.s) ;\n    vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));\n    return mix(col3[2], col, st.t);\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / u_resolution.xy;\n    pos = 2.0 * pos.xy - vec2(1.0);\n    pos = xy2pol(pos);    \n    fragColor = vec4(tex(pos), 1.0);\n}",mdxType:"LiveGlslCodeBlock"}))}_.isMDXComponent=!0}}]);