---
sidebar_position: 8
---

# Exercise 7.2

まず、任意の $p \leq 1$ と2つのベクトル $A = (a_0, a_1), B = (b_0, b_1)$ をとる。  
$d_p$ の定義を2通りで計算することで
$$
\begin{aligned}
d_p(A, B) &= ( |a_0 - b_0| ^ p + |a_1 - b_1| ^ p ) ^ {\frac{1}{p}} \\
    &\leq ( 2 \text{max}(|a_0 - b_0|, |a_1 - b_1|) ^ p ) ^ {\frac{1}{p}} \\
    &= 2 ^ {\frac{1}{p}} \text{max}(|a_0 - b_0|, |a_1 - b_1|) \\
    &= 2 ^ {\frac{1}{p}} d_将(A, B) \xrightarrow{p\to\infty} d_将(A, B)
\end{aligned}
$$
と逆向きの不等号の式
$$
\begin{aligned}
d_p(A, B) &= ( |a_0 - b_0| ^ p + |a_1 - b_1| ^ p ) ^ {\frac{1}{p}} \\
    &\geq ( \text{max}(|a_0 - b_0|, |a_1 - b_1|) ^ p ) ^ {\frac{1}{p}} \\
    &= \text{max}(|a_0 - b_0|, |a_1 - b_1|) \\
    &= d_将(A, B)
\end{aligned}
$$
を得る。

上記より、 $d_p \xrightarrow{p\to\infty} d_将$ であることがわかった。
