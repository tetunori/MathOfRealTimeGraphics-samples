"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[8120],{22862:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>f,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>v});var o=t(87462),a=(t(67294),t(3905)),i=t(72915);const r={sidebar_position:4},s="5_3_conversion",c={unversionedId:"chapter5/5_3_conversion",id:"chapter5/5_3_conversion",title:"5_3_conversion",description:"\u30b3\u30fc\u30c9 5.4, \u56f3 5.6:",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/chapter5/5_3_conversion.md",sourceDirName:"chapter5",slug:"/chapter5/5_3_conversion",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_3_conversion",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"5_2_warpRot",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_2_warpRot"},next:{title:"5_4_blending",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter5/5_4_blending"}},f={},v=[{value:"\u30b3\u30fc\u30c9 5.4, \u56f3 5.6:",id:"\u30b3\u30fc\u30c9-54-\u56f3-56",level:2}],l={toc:v};function u(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"5_3_conversion"},"5_3_conversion"),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9-54-\u56f3-56"},"\u30b3\u30fc\u30c9 5.4, \u56f3 5.6:"),(0,a.kt)(i.Z,{fragName:"5_3_conversion.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\nconst float PI = 3.1415926;\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n//start vnoise\nfloat vnoise21(vec2 p){\n  vec2 n = floor(p);\n  float[4] v;\n  for (int j = 0; j < 2; j ++){\n    for (int i = 0; i < 2; i++){\n      v[i+2*j] = hash21(n + vec2(i, j));\n    }\n  }\n  vec2 f = fract(p);\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\n//end vnoise\n\n//start pnoise\nfloat gtable2(vec2 lattice, vec2 p){\n  uvec2 n = floatBitsToUint(lattice);\n  uint ind = uhash22(n).x >> 29;\n  float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n  float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n  return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\n\nfloat pnoise21(vec2 p){\n  vec2 n = floor(p);\n  vec2 f = fract(p);\n  float[4] v;\n  for (int j = 0; j < 2; j ++){\n    for (int i = 0; i < 2; i++){\n      v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));\n    }\n  }\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n//end pnoise\n\nfloat fbm21(vec2 p, float g){\n  float val = 0.0;\n  float amp = 1.0;\n  float freq = 1.0;\n  for (int i = 0; i < 4; i++){\n    val += amp * (vnoise21(freq * p) - 0.5);\n    amp *= g;\n    freq *= 2.01;\n  }\n  return 0.5 * val + 0.5;\n}\n\nfloat base21(vec2 p){\n  return mod(u_time, 20.0) < 10.0 ?\n  fbm21(p, 0.5) : \n  pnoise21(p);\n}\n\nfloat warp21(vec2 p, float g){\n  float val = 0.0;\n  for (int i = 0; i < 4; i++){\n    val = base21(p + g * vec2(cos(2.0 * PI * val), sin(2.0 * PI * val)));\n  }\n  return val;\n}\n\nfloat converter(float v){\n  float time = abs(mod(0.1 * u_time, 2.0) - 1.0);\n  float n = floor(8.0 * time);\n  return channel == ivec2(1, 0) ? step(time, v) : \n    channel == ivec2(2, 0) ? (floor(n * v) + step(0.5, fract (n * v))) / n :\n    channel == ivec2(0, 1) ? smoothstep(0.5 * (1.0 - time), 0.5 * (1.0 + time), v): \n    channel == ivec2(1, 1) ? pow(v, 2.0 * time) : \n    channel == ivec2(2, 1) ? 0.5 * sin(4.0 *  PI * v +  u_time) + 0.5 :\n    v;\n}\n\nvoid main(){\n  vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n  channel = ivec2(vec2(3, 2) * gl_FragCoord.xy / u_resolution.xy);\n  pos = 10.0 * pos + u_time;\n  fragColor.rgb = vec3(converter(warp21(pos, 1.0)));\n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}u.isMDXComponent=!0}}]);