---
sidebar_position: 6
---

# 問題 3.4
## 計算

[3_1_vnoiseGrad.frag](./3_1_vnoiseGrad.md) では、関数 `vnoise21()` を数値微分して勾配を求めていたが、この演習問題では、同関数を解析微分することで、勾配を求めてみたい。

まず、関数 `vnoise21()` の内部を改めて確認すると、与えられた2次元ベクトル`p`に対し、`p`から生成される4つのハッシュ値(`v[0], v[1], v[2], v[3]`)およびエルミート補間関数で補間された各次元ごとの値(`f[0], f[1]`)を使って、以下の値を返すものである。
```
return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);
```

以降でこれを数式で表記するため、以下の様に置き換えて考えることにする。
- `vnoise21(p)`関数: $V(x, y)$
- 4つのハッシュ値(`v[0], v[1], v[2], v[3]`): $v_0, v_1, v_2, v_3$
- エルミート補間関数: $h()$

さて、$V(x, y)$ の実装を素直に数式で表現すると、
$$
\tag{ex3.4.1}
V(x,y) =\text{mix}( \text{mix}(v_0, v_1, h(x)), \text{mix}(v_2, v_3, h(x)), h(y));
$$
である。この(ex3.4.1)式の右辺に登場する $\text{mix}$ を計算しておくと
$$
\tag{ex3.4.2}
\begin{array}{c}
\text{mix}(v_0, v_1, h(x)) = v_0(1 - h(x)) + v_1 h(x) = v_0 + h(x)(v_1 - v_0) \\
\text{mix}(v_2, v_3, h(x)) = v_2(1 - h(x)) + v_3 h(x) = v_2 + h(x)(v_3 - v_2) 
\end{array}
$$
となるので、改めて(ex3.4.1)式と(ex3.4.2)式より $V(x, y)$ は以下の様に記述することができる。
$$
\begin{align*}
V(x,y) &= (v_0 + h(x)(v_1 - v_0))(1-h(y)) + (v_2 + h(x)(v_3 - v_2) )h(y) \\
       &= a + bh(x) + ch(y) + dh(x)h(y)
\end{align*}
$$
ただし、ここで
$$
\tag{ex3.4.3}
\begin{align*}
a &= v_0 \\
b &= - v_0 + v_1 \\
c &= - v_0 + v_2 \\
d &= v_0 - v_1 - v_2 + v_3 
\end{align*}
$$
である

さて、この $V(x,y)$ を $x$, $y$ でそれぞれ偏微分すると、
$$
\frac{\partial}{\partial x}	V(x,y) = h'(x)(b + dh(y)) \\
$$
$$
\frac{\partial}{\partial y}	V(x,y) = h'(y)(c + dh(x))
$$

となる。
つまり、(ex3.4.3)式の $b$, $c$, $d$ とエルミート関数 $h$ およびその導関数 $h'$ を用いれば、勾配 $\text{grad}V$ は
$$
\text{grad}V(x,y) = ( h'(x)(b + dh(y)), h'(y)(c + dh(x)) )
$$
と表現できることがわかった。

## 確認

上記で得られた勾配をプログラムで実装したい。
なお、エルミート関数の導関数が以下であることを利用している。
$$
\begin{align*}
h(x) = 3x^2 - 2x^3 &\Rightarrow h'(x) = 6(x - 1) \\
h(x) = 6x^5 - 15x^4 + 10x^3 &\Rightarrow h'(x) = 30x^2(x^2 - 2x + 1)
\end{align*}
$$

import LiveGlslCodeBlock from "/js/liveGLSLCodeBlock";
import code from '!!raw-loader!/frags/ch3/exercise_3_4.frag';

<LiveGlslCodeBlock fragName='exercise_3_4.frag' fragCode={code} />
