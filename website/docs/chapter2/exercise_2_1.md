---
sidebar_position: 3
---

# Exercise 2.1
## Calculation
| Number | Calculation |
| :---: | :---: |
|  1.0 | $(-1)^0 \times 2^{127-127} \times 1.0000 \dots 0$ |
|  2.0 | $(-1)^0 \times 2^{128-127} \times 1.0000 \dots 0$ |
|  3.0 | $(-1)^0 \times 2^{128-127} \times 1.1000 \dots 0$ |
|  4.0 | $(-1)^0 \times 2^{129-127} \times 1.0000 \dots 0$ |
|  5.0 | $(-1)^0 \times 2^{129-127} \times 1.0100 \dots 0$ |
|  6.0 | $(-1)^0 \times 2^{129-127} \times 1.1000 \dots 0$ |
|  7.0 | $(-1)^0 \times 2^{129-127} \times 1.1100 \dots 0$ |
|  8.0 | $(-1)^0 \times 2^{130-127} \times 1.0000 \dots 0$ |
|  9.0 | $(-1)^0 \times 2^{130-127} \times 1.0010 \dots 0$ |
| 10.0 | $(-1)^0 \times 2^{130-127} \times 1.0100 \dots 0$ |

## Verification
import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch2/exercise_2_1.frag'
/>

```glsl showLineNumbers title="exercise_2_1.frag"
#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    pos *= vec2(32.0, 10.0);
    uint[10] a = uint[](
        floatBitsToUint(1.0),
        floatBitsToUint(2.0),
        floatBitsToUint(3.0),
        floatBitsToUint(4.0),
        floatBitsToUint(5.0),
        floatBitsToUint(6.0),
        floatBitsToUint(7.0),
        floatBitsToUint(8.0),
        floatBitsToUint(9.0),
        floatBitsToUint(10.0)
    );
    if (fract(pos.x) < 0.1){
        if (floor(pos.x) == 1.0){
            fragColor = vec4(1, 0, 0, 1);
        } else if (floor(pos.x) == 9.0){
            fragColor = vec4(0, 1, 0, 1);
        } else {
            fragColor = vec4(0.5);
        }
    } else if (fract(pos.y) < 0.1){
        fragColor = vec4(0.5);
    } else {
        uint b = a[int(pos.y)]; 
        b = (b << uint(pos.x)) >> 31;
        fragColor = vec4(vec3(b), 1.0); 
    }
}
```
