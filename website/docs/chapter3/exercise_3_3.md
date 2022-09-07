---
sidebar_position: 4
---

# Exercise 3.3

まずは前方差分を得るために、任意の数 $a$ と、任意のとても小さい $\varepsilon>0$ を取り、$f(a+\varepsilon)$ を $a$ 点周りでテーラー展開して以下の式を得る。
$$
\tag{ex3.1.1}
f(a+\varepsilon) = f(a)+f'(a)\varepsilon+\frac{f''(a)}{2!}\varepsilon^{2}+\frac{f'''(a)}{3!}\varepsilon^{3}+\cdots
$$

この式を変形すると
$$
\frac{f(a+\varepsilon) - f(a)}{\varepsilon} = f'(a)+\frac{f''(a)}{2!}\varepsilon+\frac{f'''(a)}{3!}\varepsilon^{2}+\cdots
$$
となり、さらに移項した後の絶対値を取ることで、以下の様に、前方差分の誤差を得ることができる。
$$
\tag{ex3.1.2}
\left| \frac{f(a+\varepsilon) - f(a)}{\varepsilon} - f'(a) \right| = \left| \frac{f''(a)}{2!}\varepsilon+\frac{f'''(a)}{3!}\varepsilon^{2}+\cdots \right| 
$$

同様に、 $(a-\varepsilon)$ を $a$ 点周りでテーラー展開して
$$
\tag{ex3.1.3}
f(a-\varepsilon) = f(a)-f'(a)\varepsilon+\frac{f''(a)}{2!}\varepsilon^{2}-\frac{f'''(a)}{3!}\varepsilon^{3}+\cdots
$$
と後方差分の誤差
$$
\tag{ex3.1.4}
\left| \frac{f(a)-f(a-\varepsilon) }{\varepsilon} - f'(a) \right| = \left| -\frac{f''(a)}{2!}\varepsilon+\frac{f'''(a)}{3!}\varepsilon^{2}-\cdots \right| 
$$
を得ることができる。

次に、(ex3.1.1)式と(ex3.1.3)式の差分から、
$$
f(a+\varepsilon) - f(a-\varepsilon) = 2f'(a)\varepsilon+2\frac{f'''(a)}{3!}\varepsilon^{3}+2\frac{f'''''(a)}{5!}\varepsilon^{5}+\cdots
$$
を得られるので、両辺を $2 \varepsilon$ で割って移項すると、中央差分の誤差
$$
\tag{ex3.1.5}
\left| \frac{f(a+\varepsilon) - f(a-\varepsilon) }{2\varepsilon} - f'(a) \right| = \left| \frac{f'''(a)}{3!}\varepsilon^{2}+\frac{f'''''(a)}{5!}\varepsilon^{4}+\cdots \right| 
$$
も得ることができる。

ここで(ex3.1.2)式、(ex3.1.4)式、(ex3.1.4)式の各誤差の右辺の各項を順番に見比べると、前方差分・後方差分の $n$ 項目 $\varepsilon$ の乗数が $n$ なのに対し、中央差分の $n$ 項目では $2n$ となっている。今、十分に小さい $\varepsilon$ を取っているので、これらを比較すると、中央差分の誤差の方が小さくなることがわかる。
