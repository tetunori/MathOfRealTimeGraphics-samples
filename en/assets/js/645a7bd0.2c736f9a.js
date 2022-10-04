"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[169],{58383:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>f,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(87462),o=(t(67294),t(3905)),r=t(72915);const a={sidebar_position:5},s="8_3_noiseTexturing",c={unversionedId:"chapter8/8_3_noiseTexturing",id:"chapter8/8_3_noiseTexturing",title:"8_3_noiseTexturing",description:"Code 8.7, Figure 8.6:",source:"@site/docs/chapter8/8_3_noiseTexturing.md",sourceDirName:"chapter8",slug:"/chapter8/8_3_noiseTexturing",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter8/8_3_noiseTexturing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"8_2_lighting",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter8/8_2_lighting"},next:{title:"8_4_normalMapping",permalink:"/MathOfRealTimeGraphics-samples/en/docs/chapter8/8_4_normalMapping"}},f={},l=[{value:"Code 8.7, Figure 8.6:",id:"code-87-figure-86",level:2}],u={toc:l};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"8_3_noisetexturing"},"8_3_noiseTexturing"),(0,o.kt)("h2",{id:"code-87-figure-86"},"Code 8.7, Figure 8.6:"),(0,o.kt)(r.Z,{fragName:"8_3_noiseTexturing.frag",fragCode:"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nconst float PI = 3.14159265359;\nconst float TAU = 6.2831853;\n\n//begin rot\nvec2 rot2(vec2 p, float t){\n  return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\n\nvec3 rotX(vec3 p, float t){\n  return vec3(p.x, rot2(p.yz, t));\n}\n\nvec3 rotY(vec3 p, float t){\n  return vec3(p.y, rot2(p.zx, t)).zxy;\n}\n\nvec3 rotZ(vec3 p, float t){\n  return vec3(rot2(p.xy, t), p.z);\n}\n//end rot\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\n\nuint uhash11(uint n){\n  n ^= (n << u.x);\n  n ^= (n >> u.x);\n  n *= k.x;\n  n ^= (n << u.x);\n  return n * k.x;\n}\n\nuvec2 uhash22(uvec2 n){\n  n ^= (n.yx << u.xy);\n  n ^= (n.yx >> u.xy);\n  n *= k.xy;\n  n ^= (n.yx << u.xy);\n  return n * k.xy;\n}\n\nuvec3 uhash33(uvec3 n){\n  n ^= (n.yzx << u);\n  n ^= (n.yzx >> u);\n  n *= k;\n  n ^= (n.yzx << u);\n  return n * k;\n}\n\nfloat hash11(float p){\n  uint n = floatBitsToUint(p);\n  return float(uhash11(n)) / float(UINT_MAX);\n}\n\nfloat hash21(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return float(uhash22(n).x) / float(UINT_MAX);\n}\n\nfloat hash31(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return float(uhash33(n).x) / float(UINT_MAX);\n}\n\nvec2 hash22(vec2 p){\n  uvec2 n = floatBitsToUint(p);\n  return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\n\nvec3 hash33(vec3 p){\n  uvec3 n = floatBitsToUint(p);\n  return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n//start vnoise\nfloat vnoise21(vec2 p){\n  vec2 n = floor(p);\n  float[4] v;\n  for (int j = 0; j < 2; j ++){\n    for (int i = 0; i < 2; i++){\n      v[i+2*j] = hash21(n + vec2(i, j));\n    }\n  }\n  vec2 f = fract(p);\n  f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n  return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\n//end vnoise\n\n//start processing noise\nfloat base21(vec2 p){\n  return vnoise21(p) - 0.5;\n}\n\nfloat fbm21(vec2 p, float g){\n  float val = 0.0;\n  float amp = 1.0;\n  float freq = 1.0;\n  for (int i = 0; i < 4; i++){\n    val += amp * base21(freq * p);\n    amp *= g;\n    freq *= 2.01;\n  }\n  return 0.5 * val + 0.5;\n}\n\nfloat warp21(vec2 p, float g){\n  float val = 0.0;\n  for (int i = 0; i < 3; i++){\n    val = fbm21(p + g * vec2(cos(TAU * val), sin(TAU * val)), 0.5);\n  }\n  return val;\n}\n//end processing noise\n\n//start cnoise\nfloat fdist31(vec3 p){\n  vec3 n = floor(p + 0.5);\n  float dist = sqrt(3.0);\n  for(float k = 0.0; k <= 2.0; k ++ ){\n    vec3 glid;\n    glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n    if (abs(glid.z - p.z) - 0.5 > dist){\n      continue;\n    }\n    for(float j = 0.0; j <= 2.0; j ++ ){\n      glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n      if (abs(glid.y - p.y) - 0.5 > dist){\n        continue;\n      }\n      for(float i = -1.0; i <= 1.0; i ++ ){\n        glid.x = n.x + i;\n        vec3 jitter = hash33(glid) - 0.5;\n        dist = min(dist, length(glid + jitter - p));\n      }\n    }\n  }\n  return dist;\n}\n//end cnoise\n\nfloat text(vec2 st){\n  float time = 0.3 * u_time;\n  float v0 = warp21(st + time, 1.0);\n  float v1 = fdist31(vec3(st + time, time));\n  time = abs(mod(time, 2.0) - 1.0);\n  return mix(v0, v1, smoothstep(0.25, 0.75, time));\n}\n\nvoid main(){\n  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n  vec3 cPos = vec3(0.0, 0.0, 0.0);\n  float t = -0.25 * PI;\n  vec3 cDir = rotX(vec3(0.0, 0.0, - 1.0), t);\n  vec3 cUp = rotX(vec3(0.0, 1.0, 0.0), t);\n  vec3 cSide = cross(cDir, cUp);\n  float targetDepth = 1.0;\n  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth - cPos;\n  ray = normalize(ray);\n  vec3 groundNormal = vec3(0.0, 1.0, 0.0);\n  float groundHeight = 1.5;\n  vec3 lPos = vec3(0.,0.,0.);\n  if (dot(ray, groundNormal) < 0.0){\n    vec3 hit = cPos - ray * groundHeight / dot(ray, groundNormal);\n    float diff = max(dot(normalize(lPos - hit), groundNormal), 0.0);\n    diff *= 1.2;\n    diff = pow(diff, 0.8);\n    fragColor.rgb = vec3(diff * text(hit.zx));\n  } else {\n    fragColor.rgb = vec3(0.0);\n  }  \n  fragColor.a = 1.0;\n}",mdxType:"LiveGlslCodeBlock"}))}p.isMDXComponent=!0}}]);