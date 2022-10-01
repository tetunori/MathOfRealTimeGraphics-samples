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

import LiveGlslCodeBlock from "../../static/js/liveGLSLCodeBlock";
import code from '!!raw-loader!/frags/ch6/exercise_6_1.frag';

<LiveGlslCodeBlock fragName='exercise_6_1.frag' fragCode={code} />
