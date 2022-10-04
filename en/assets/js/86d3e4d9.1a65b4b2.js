"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2564],{4123:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>f,metadata:()=>s,toc:()=>v});var o=i(87462),t=(i(67294),i(3905)),a=i(72915);const f={sidebar_position:2},r="4_1_noiseRange",s={unversionedId:"chapter4/4_1_noiseRange",id:"chapter4/4_1_noiseRange",title:"4_1_noiseRange",description:"Code 4.2, Figure 4.4:",source:"@site/docs/chapter4/4_1_noiseRange.md",sourceDirName:"chapter4",slug:"/chapter4/4_1_noiseRange",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter4/4_1_noiseRange",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4_0_gnoise",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter4/4_0_gnoise"},next:{title:"4_2_rotNoise",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter4/4_2_rotNoise"}},c={},v=[{value:"Code 4.2, Figure 4.4:",id:"code-42-figure-44",level:2}],u={toc:v};function l(n){let{components:e,...i}=n;return(0,t.kt)("wrapper",(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"4_1_noiserange"},"4_1_noiseRange"),(0,t.kt)("h2",{id:"code-42-figure-44"},"Code 4.2, Figure 4.4:"),(0,t.kt)(a.Z,{fragName:"4_1_noiseRange.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n\nvec3 hsv2rgb(in vec3 c){\n  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);\n  return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n\n//start vnoise\nfloat vnoise21(vec2 p){\n  vec2 n = floor(p);\n  float[4] v;\n  for (int j = 0; j < 2; j ++){\n    for (int i = 0; i < 2; i++){\n      v[i+2*j] = hash21(n + vec2(i, j));\n    }\n  }\n  vec2 f = fract(p);\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\n\nfloat vnoise31(vec3 p){\n  vec3 n = floor(p);\n  float[8] v;\n  for (int k = 0; k < 2; k++ ){\n    for (int j = 0; j < 2; j++ ){\n      for (int i = 0; i < 2; i++){\n        v[i+2*j+4*k] = hash31(n + vec3(i, j, k));\n      }\n      \n    }\n  }\n  vec3 f = fract(p);\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  float[2] w;\n  for (int i = 0; i < 2; i++){\n    w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n  }\n  return mix(w[0], w[1], f[2]);\n}\n//end vnoise\n\n//start gnoise\nfloat gnoise21(vec2 p){\n  vec2 n = floor(p);\n  vec2 f = fract(p);\n  float[4] v;\n  for (int j = 0; j < 2; j ++){\n    for (int i = 0; i < 2; i++){\n      vec2 g = normalize(hash22(n + vec2(i,j)) - vec2(0.5));\n      v[i+2*j] = dot(g, f - vec2(i, j));\n    }\n  }\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n\nfloat gnoise31(vec3 p){\n  vec3 n = floor(p);\n  vec3 f = fract(p);\n  float[8] v;\n  for (int k = 0; k < 2; k++ ){\n    for (int j = 0; j < 2; j++ ){\n      for (int i = 0; i < 2; i++){\n        vec3 g = normalize(hash33(n + vec3(i, j, k)) - vec3(0.5));\n        v[i+2*j+4*k] = dot(g, f - vec3(i, j, k));\n      }\n    }\n  }\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  float[2] w;\n  for (int i = 0; i < 2; i++){\n    w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n  }\n  return 0.5 * mix(w[0], w[1], f[2]) + 0.5;\n}\n//end gnoise\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n  pos = 20.0 * pos + u_time;\n  channel = ivec2(2.0 * gl_FragCoord.xy / u_resolution.xy);\n  float v;\n  if (channel[0] == 0){\n    if (channel[1] == 0){\n      v = vnoise21(pos);\n    } else {\n      v = vnoise31(vec3(pos, u_time));\n    }\n  } else {\n    if (channel[1] == 0){\n      v = gnoise21(pos);\n    } else {\n      v = gnoise31(vec3(pos, u_time));\n    }\n  }\n  fragColor.rgb = hsv2rgb(vec3(v, 1.0, 1.0));\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}l.isMDXComponent=!0}}]);