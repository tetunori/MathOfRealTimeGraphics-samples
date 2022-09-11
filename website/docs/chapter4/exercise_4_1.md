---
sidebar_position: 6
---

# Exercise 4.1

3変数の時は、原点中心で $(\pm{1}, \pm{1}, \pm{1})$ らを頂点に持つ3次元立方体をとり、その中心から各辺の中点へのベクトルを勾配として取っていた。
4変数についても同様に、原点中心で $(\pm{1}, \pm{1}, \pm{1}, \pm{1})$ らを頂点に持つ4次元立方体をとり、その中心から各辺の中点へのベクトルを勾配として定義してみる。

さて、4次元立方体の辺の総数は32個であるので、各辺の中点も下記の通り32個存在する。
$$
(1,1,1,0),(1,-1,1,0),(1,1,-1,0),(1,-1,-1,0),\\
(-1,1,1,0),(-1,-1,1,0),(-1,1,-1,0),(-1,-1,-1,0),\\
(1,1,0,1),(1,-1,0,1),(1,1,0,-1),(1,-1,0,-1),\\
(-1,1,0,1),(-1,-1,0,1),(-1,1,0,-1),(-1,-1,0,-1),\\
(1,0,1,1),(1,0,-1,1),(1,0,1,-1),(1,0,-1,-1),\\
(-1,0,1,1),(-1,0,-1,1),(-1,0,1,-1),(-1,0,-1,-1),\\
(0,1,1,1),(0,1,-1,1),(0,1,1,-1),(0,1,-1,-1),\\
(0,-1,1,1),(0,-1,-1,1),(0,-1,1,-1),(0,-1,-1,-1),
$$
これらと4次元ベクトル $(x,y,z,w)$ との内積の値は
$$
x+y+z, x-y+z, x+y-z, x-y-z, \\
-x+y+z, -x-y+z, -x+y-z, -x-y-z, \\
x+y+w, x-y+w, x+y-w, x-y-w, \\
-x+y+w, -x-y+w, -x+y-w, -x-y-w, \\
x+z+w, x-z+w, x+z-w, x-z-w, \\
-x+z+w, -x-z+w, -x+z-w, -x-z-w, \\
y+z+w, y-z+w, y+z-w, y-z-w, \\
-y+z+w, -y-z+w, -y+z-w, -y-z-w
$$
の32通りとなる。ハッシュ値をこの32通りの計算に対応させて4変数パーリンノイズを実現させる。

以下、まだ4変数を同時に確認できるコードが書けないため、4つのうちの1つを固定し(x座標, y座標, 経過時間)の3変数でノイズの様子を視覚化した結果である。

$$
\begin{matrix}
\text{(x座標, 0, y座標, 経過時間)} & \text{(0, x座標, y座標, 経過時間)} \\
\text{(x座標, y座標, 経過時間, 0)} & \text{(x座標, y座標, 0, 経過時間)}
\end{matrix}
$$

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch4/exercise_4_1.frag'
/>

出力を観察してみると、右上以外では、縦横方向に筋の様なアーティファクトが生じている気がする。勾配の取り方が良くなかったのだろうか？

```glsl showLineNumbers title="exercise_4_1.frag"
#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
ivec2 channel;

//start hash
uvec4 k = uvec4(0x456789abu, 0x6789ab45u, 0x89ab4567u, 0xab456789u);
uvec4 u = uvec4(1, 2, 3, 4);
const uint UINT_MAX = 0xffffffffu;
uvec4 uhash44(uvec4 n){
    n ^= (n.yzwx << u);
    n ^= (n.yzwx >> u);
    n *= k;
    n ^= (n.yzwx << u);
    return n * k;
}
//end hash

//start pnoise
float gtable4(vec4 lattice, vec4 p){
    uvec4 n = floatBitsToUint(lattice);
    uint ind = uhash44(n).x >> 27;
    float t = ind < 24u ? p.x : p.y;
    float u = ind < 16u ? p.y : p.z;
    float v = ind < 8u ? p.z : p.w;
    return (
      ((ind & 3u) == 0u? t: -t) 
      + ((ind & 1u) == 0u? u : -u)
      + ((ind & 2u) == 0u? v : -v)
    );
}
float pnoise41(vec4 p4){
    vec4 p = vec4(p4.x, p4.y, p4.z, p4.w);
    vec4 n = floor(p);
    vec4 f = fract(p);
    float[16] v;
    for (int l = 0; l < 2; l++ ){
      for (int k = 0; k < 2; k++ ){
          for (int j = 0; j < 2; j++ ){
              for (int i = 0; i < 2; i++){
                  v[i+2*j+4*k+8*l] = gtable4(n + vec4(i, j, k, l), f - vec4(i, j, k, l)) * 0.57735027; // 0.57735027 is 1/sqrt(3)
              }
          }
      }
    }
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
    float[4] w;
    for (int i = 0; i < 4; i++){
        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);
    }
    float[2] u;
    for (int i = 0; i < 2; i++){
        u[i] = mix(w[2*i], w[2*i+1], f[2]);
    }
    return 0.5 * mix(u[0], u[1], f[3]) + 0.5;
}
//end pnoise

void main(){
    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);
    channel = ivec2(2.0 * gl_FragCoord.xy / u_resolution.xy);
    pos = 10.0 * pos + u_time;
    float v;

    if (channel[0] == 0){
        if (channel[1] == 0){
          // left-bottom
          v = pnoise41(vec4(pos.x, pos.y, u_time, 0));  
        } else {
          // right-bottom
          v = pnoise41(vec4(pos.x, pos.y, 0, u_time));  
        }
    } else{
        if (channel[1] == 0){
          // left-up
          v = pnoise41(vec4(pos.x, 0, pos.y, u_time));  
        } else {
          // right-up
          v = pnoise41(vec4(0, pos.x, pos.y, u_time));  
        }
    }

    fragColor.rgb = vec3(v);
    fragColor.a = 1.0;
}
```
