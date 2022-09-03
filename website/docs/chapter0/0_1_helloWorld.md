---
sidebar_position: 2
---

# 0_1_helloWorld
## Code 0.4, Figure 0.4: 

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch0/0_1_helloWorld.frag'
/>

```glsl showLineNumbers title="0_1_helloWorld.frag"
#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    fragColor = vec4(1.0, pos, 1.0);
}
```
