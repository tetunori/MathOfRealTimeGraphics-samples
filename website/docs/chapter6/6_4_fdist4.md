---
sidebar_position: 6
---

# 6_4_fdist4
## Code 6.4, Figure 6.12: 

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch6/6_4_fdist4.frag'
/>

```glsl showLineNumbers title="6_4_fdist4.frag"
#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
ivec2 channel;
//start hash
uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;
uint uhash11(uint n){
    n ^= (n << u.x);
    n ^= (n >> u.x);
    n *= k.x;
    n ^= (n << u.x);
    return n * k.x;
}
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
float hash11(float p){
    uint n = floatBitsToUint(p);
    return float(uhash11(n)) / float(UINT_MAX);
}
float hash21(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return float(uhash22(n).x) / float(UINT_MAX);
}
float hash31(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return float(uhash33(n).x) / float(UINT_MAX);
}
vec2 hash22(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return vec2(uhash22(n)) / vec2(UINT_MAX);
}
vec3 hash33(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return vec3(uhash33(n)) / vec3(UINT_MAX);
}
//end hash
vec4 sort(vec4 list, float v){
    bvec4 res = bvec4(step(v, list));
    return res.x ? vec4(v, list.xyz):
        res.y ? vec4(list.x, v, list.yz):
        res.z ? vec4(list.xy, v, list.z):
        res.w ? vec4(list.xyz, v):
        list;
}
vec4 fdist24(vec2 p){
    vec2 n = floor(p + 0.5);
    vec4 dist4 = vec4(length(1.5 - abs(p - n)));
    for(float j = 0.0; j <= 4.0; j ++ ){
        vec2 glid;
        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);
        if (abs(glid.y - p.y) - 0.5 > dist4.w){
            continue;
        }
        for(float i = -2.0; i <= 2.0; i ++ ){
            glid.x = n.x + i;
            vec2 jitter = hash22(glid) - 0.5;
            dist4 = sort(dist4, length(glid + jitter - p));
        }
    }
    return dist4;
}
vec4 fdist34(vec3 p){
    vec3 n = floor(p + 0.5);
    vec4 dist4 = vec4(length(1.5 - abs(p - n)));
    for(float k = 0.0; k <= 4.0; k ++ ){
            vec3 glid;
            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);
            if (abs(glid.z - p.z) - 0.5 > dist4.w){
                continue;
            }
        for(float j = 0.0; j <= 4.0; j ++ ){
            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);
            if (abs(glid.y - p.y) - 0.5 > dist4.w){
                continue;
            }
            for(float i = -2.0; i <= 2.0; i ++ ){
                glid.x = n.x + i;
                vec3 jitter = hash33(glid) - 0.5;
                dist4 = sort(dist4, length(glid + jitter - p));
            }
        }
    }
    return dist4;
}
void main(){
    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);
    channel = ivec2(vec2(4, 2) * gl_FragCoord.xy/ u_resolution.xy); 
    pos *= 10.0;
    pos += u_time;
    fragColor = channel.y == 0 ? vec4(fdist24(pos)[channel.x % 4]) : vec4(fdist34(vec3(pos, u_time))[channel.x % 4]);
    fragColor.a = 1.0;
}

```
