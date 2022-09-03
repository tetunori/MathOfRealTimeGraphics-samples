---
sidebar_position: 2
---

# 1_1_lerpTriple
## Code 1.2, Figure 1.3: 

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch1/1_1_lerpTriple.frag'
/>

```glsl showLineNumbers title="1_1_lerpTriple.frag"
#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    vec3[3] col3 = vec3[](
        vec3(1.0, 0.0, 0.0),
        vec3(0.0, 0.0, 1.0),
        vec3(0.0, 1.0, 0.0)
        );
    pos.x *= 2.0;
    int ind = int(pos.x);
    vec3 col = mix(col3[ind], col3[ind + 1], fract(pos.x));
    fragColor = vec4(col, 1.0);
}
```
