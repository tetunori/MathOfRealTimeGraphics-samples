---
sidebar_position: 2
---

# Exercise 3.1

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch3/exercise_3_1.frag'
/>

```glsl showLineNumbers title="exercise_3_1.frag"
#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
int channel;

//start hash
uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;
uvec2 uhash22(uvec2 n){
    n ^= (n.yx << u.xy);
    n ^= (n.yx >> u.xy);
    n *= k.xy;
    n ^= (n.yx << u.xy);
    return n * k.xy;
}
uvec3 uhash33(uvec3 n){
    n ^= (n.yzx << u);
    n ^= (n.yzx >> u);
    n *= k;
    n ^= (n.yzx << u);
    return n * k;
}

float hash21(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return float(uhash22(n).x) / float(UINT_MAX);
}
float hash31(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return float(uhash33(n).x) / float(UINT_MAX);
}
//end hash


float vnoise21(vec2 p, float l){
    vec2 n = floor(p);
    float[4] v;
    for (int j = 0; j < 2; j ++){
        for (int i = 0; i < 2; i++){
            v[i+2*j] = hash21(n + l + vec2(i, j));
        }
    }
    vec2 f = fract(p);
    f = f * f * (3.0 -2.0 * f); // Hermite interpolation
    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);
}

vec3 vnoise23(vec2 p){     
    return vec3(vnoise21(p, 12.0), vnoise21(p, 34.0), vnoise21(p, 56.0));
}

float vnoise31(vec3 p, float l){
    vec3 n = floor(p);
    float[8] v;
    for (int k = 0; k < 2; k++ ){
        for (int j = 0; j < 2; j++ ){
            for (int i = 0; i < 2; i++){
                v[i+2*j+4*k] = hash31(n + l + vec3(i, j, k));
            }
        }
    }
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f); // Hermite interpolation
    float[2] w;
    for (int i = 0; i < 2; i++){
        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);
    }
    return mix(w[0], w[1], f[2]);
}

vec3 vnoise33(vec3 p){     
    return vec3(vnoise31(p, 98.0), vnoise31(p, 76.0), vnoise31(p, 54.0));
}

void main(){
    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);
    channel = int(gl_FragCoord.x * 2.0 / u_resolution.x);
    pos = 10.0 * pos + u_time;
    if (channel < 1){
      fragColor = vec4(vnoise23(pos), 1.0);
    } else {
      fragColor = vec4(vnoise33(vec3(pos, u_time)), 1.0);
    }
}
```
