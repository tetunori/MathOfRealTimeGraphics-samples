---
sidebar_position: 5
---

# Exercise 6.1

Inigo Quilezさんによる、下記記事を参考に、Voronoi edge shaderを構成した。  
https://iquilezles.org/articles/voronoilines/  

具体的な方針としては、与えられた点pに対して以下を計算している。
1. Voronoi分割の第1近傍点 $\vec{a}$ のIDを算出([6_3_voronoi.frag](./6_3_voronoi.md)の内容そのまま)
2. 第1近傍点 $\vec{a}$ のIDを中心とした $5^{\text{dimension}}$ 個の格子点を探索し、そこから生成された近傍点 $\vec{b}( \neq	\vec{a} )$ らの中で、点pと $\vec{a}, \vec{b}$ 間のボーダーとの距離が最も短くなるときの距離を返す。

なお、2.におけるボーダーからの距離の計算式は、点pを中心に考えることで、以下の内積を使った表現で実装できる。
```glsl
  distance = dot( 0.5*(a + b), normalize(b - a) );
```

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch6/exercise_6_1.frag'
/>

```glsl showLineNumbers title="exercise_6_1.frag"
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
vec2 voronoi2(vec2 p){
    vec2 n = floor(p + 0.5);
    float dist = sqrt(2.0);
    vec2 id;
    for(float j = 0.0; j <= 2.0; j ++ ){
        vec2 glid;
        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);
        if (abs(glid.y - p.y) - 0.5 > dist){
            continue;
        }
        for(float i = -1.0; i <= 1.0; i ++ ){
            glid.x = n.x + i;
            vec2 jitter = hash22(glid) - 0.5;
            if (length(glid + jitter - p) <= dist){
                dist = length(glid + jitter - p);
                id = glid;
            }
        }
    }
    return id;
}

float voronoiEdge2d(vec2 p){
    vec2 n = floor(p + 0.5);
    float dist = sqrt(2.0);
    vec2 id;
    for(float j = 0.0; j <= 2.0; j ++ ){
        vec2 glid;
        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);
        if (abs(glid.y - p.y) - 0.5 > dist){
            continue;
        }
        for(float i = -1.0; i <= 1.0; i ++ ){
            glid.x = n.x + i;
            vec2 jitter = hash22(glid) - 0.5;
            if (length(glid + jitter - p) <= dist){
                dist = length(glid + jitter - p);
                id = glid;
            }
        }
    }

    // Reference: https://iquilezles.org/articles/voronoilines/
    float md = sqrt(2.0);
    vec2 a = id + hash22(id) - 0.5 - p;

    for(float j = -2.0; j <= 2.0; j++ ){
      for(float i = -2.0; i <= 2.0; i++ ){
        vec2 glid = id + vec2(float(i),float(j));
        vec2 b = glid + hash22(glid) - 0.5 - p;
        if( dot(a - b, a - b) > 0.0001 ){
          // it is not a
          md = min( md, dot( 0.5*(a+b), normalize(b - a) ) );
        }
      }
    }

    return md;

}

vec3 voronoi3(vec3 p){
    vec3 n = floor(p + 0.5);
    float dist = sqrt(3.0);
    vec3 id;
    for(float k = 0.0; k <= 2.0; k ++ ){
            vec3 glid;
            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);
            if (abs(glid.z - p.z) - 0.5 > dist){
                continue;
            }
        for(float j = 0.0; j <= 2.0; j ++ ){
            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);
            if (abs(glid.y - p.y) - 0.5 > dist){
                continue;
            }
            for(float i = -1.0; i <= 1.0; i ++ ){
                glid.x = n.x + i;
                vec3 jitter = hash33(glid) - 0.5;
                if (length(glid + jitter - p) <= dist){
                    dist = length(glid + jitter - p);
                    id = glid;
                }
            }
        }
    }
    return id;
}

float voronoiEdge3d(vec3 p){
    vec3 n = floor(p + 0.5);
    float dist = sqrt(3.0);
    vec3 id;
    for(float k = 0.0; k <= 2.0; k ++ ){
            vec3 glid;
            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);
            if (abs(glid.z - p.z) - 0.5 > dist){
                continue;
            }
        for(float j = 0.0; j <= 2.0; j ++ ){
            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);
            if (abs(glid.y - p.y) - 0.5 > dist){
                continue;
            }
            for(float i = -1.0; i <= 1.0; i ++ ){
                glid.x = n.x + i;
                vec3 jitter = hash33(glid) - 0.5;
                if (length(glid + jitter - p) <= dist){
                    dist = length(glid + jitter - p);
                    id = glid;
                }
            }
        }
    }
    
    // Reference: https://iquilezles.org/articles/voronoilines/
    float md = sqrt(3.0);
    vec3 a = id + hash33(id) - 0.5 - p;

    for(float k = -2.0; k <= 2.0; k++ ){
      for(float j = -2.0; j <= 2.0; j++ ){
        for(float i = -2.0; i <= 2.0; i++ ){
          vec3 glid = id + vec3(float(i),float(j),float(k));
          vec3 b = glid + hash33(glid) - 0.5 - p;
          if( dot(a - b, a - b) > 0.0001 ){
            // it is not a
            md = min( md, dot( 0.5*(a + b), normalize(b - a) ) );
          }
        }
      }
    }

    return md;
}

void main(){
    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);
    channel = int(2.0 * gl_FragCoord.x/ u_resolution.x); 
    pos *= 10.0;
    pos += u_time;
    fragColor = channel == 0 ? 
      mix( vec4(1.0, 1.0, 1.0, 1.0), 
           vec4(hash22(voronoi2(pos)), 1.0, 1.0 * (sin(u_time) + 0.5) ), 
           smoothstep( 0.02, 0.04, voronoiEdge2d(pos) )) : 
      mix( vec4(1.0, 1.0, 1.0, 1.0), 
           vec4(hash33(voronoi3(vec3(pos, u_time))), 1.0 * (sin(u_time) + 0.5) ), 
           smoothstep( 0.02, 0.04, voronoiEdge3d(vec3(pos, u_time)) ));
}
```
