---
sidebar_position: 5
---

# Exercise 9.1
## $x=x_0$ での微分可能性
まず、与えられた $g(x)$ の導関数を計算して、
$$
\begin{aligned}
g'(x) &= f'(x) - kh'(x)(1-h(x)) - k h(x)(-h'(x)) \\
&= f'(x) - kh'(x) + \underline{kh'(x)h(x)} + \underline{kh(x)h'(x)} \\
&= f'(x) - kh'(x) + 2kh'(x)h(x)
\end{aligned}
$$
を得る。 $h(x) \xrightarrow{x \to x_0} 0$ なので、 $x_0$ での微分係数を求める際は $f'(x) - kh'(x)$ のみを計算すれば良い。

さて、P.130の(9.1)式より $\lim_{x \to x_0-0}f'(x) = a'(x_0)$ であり、 $h(x)$ の左微分係数が $0$ であることから、 $g(x)$ の左微分係数は以下の様に容易に導かれる。 
$$
\lim_{x \to x_0-0}g'(x) = \lim_{x \to x_0-0}f'(x) - \lim_{x \to x_0-0}kh'(x)
= a'(x_0) - 0 = a'(x_0)
$$

次に、P.130の(9.1)式より、$\lim_{x \to x_0+0}f'(x) = a'(x_0) - \frac{b'(x_0) - a'(x_0)}{2}$ であり、$h(x)$ の右微分係数が $-\frac{b'(x_0) - a'(x_0)}{2k}$ であることから、 $g(x)$ の右微分係数も以下の様に求められる。
$$
\begin{aligned}
\lim_{x \to x_0+0}g'(x) &= \lim_{x \to x_0+0}f'(x) - \lim_{x \to x_0+0}kh'(x) \\
&= a'(x_0) - \frac{b'(x_0) - a'(x_0)}{2} - k(-\frac{b'(x_0) - a'(x_0)}{2k}) \\
&= a'(x_0) - \frac{b'(x_0) - a'(x_0)}{2} + \frac{b'(x_0) - a'(x_0)}{2} \\
&= a'(x_0)
\end{aligned}
$$
上記より $x = x_0$ で、左微分係数と右微分係数が等しいので、微分可能であることがわかった。

## $x=x_1$ での微分可能性
$x=x_0$の時と同様に、
$$
g'(x) = f'(x) - kh'(x) + 2kh'(x)h(x)
$$
であり、$h(x) \xrightarrow{x \to x_1} 1$ なので、 $x_1$ での微分係数を求める際は $f'(x) + kh'(x)$ のみを計算すれば良い。

さて、P.130の(9.2)式より $\lim_{x \to x_1+0}f'(x) = b'(x_1) + \frac{b'(x_1) - a'(x_1)}{2}$ であり、 $h(x)$ の左微分係数が $-\frac{b'(x_1) - a'(x_1)}{2k}$ であることから、 $g(x)$ の左微分係数は以下の様に計算できる。 
$$
\begin{aligned}
\lim_{x \to x_1-0}g'(x) &= \lim_{x \to x_1-0}f'(x) + \lim_{x \to x_1-0}kh'(x) \\
&= b'(x_1) + \frac{b'(x_1) - a'(x_1)}{2} - k\frac{b'(x_1) - a'(x_1)}{2k} \\
&= b'(x_1)
\end{aligned}

$$

次に、P.130の(9.2)式より、$\lim_{x \to x_1+0}f'(x) = b'(x_1)$ であり、また $h(x)$ が $h(x)=1$のまま $h(x_1) = 1$に近づくことから、右微分係数が $0$ であることがわかる。 これらの事実より、$g(x)$ の右微分係数も以下の様に求められる。
$$
\begin{aligned}
\lim_{x \to x_1+0}g'(x) &= \lim_{x \to x_1+0}f'(x) + \lim_{x \to x_1+0}kh'(x) \\
&= b'(x_1)
\end{aligned}
$$
上記より $x = x_1$ で、左微分係数と右微分係数が等しいので、微分可能であることがわかった。