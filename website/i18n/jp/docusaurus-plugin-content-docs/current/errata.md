---
sidebar_position: 12
---

# 誤植
Errata for 1st version( 2022/09/13 ).

## P.50 Equation (3.3)

$$
h(x) = \left\{
\begin{array}{ll}
\text{mix}(0.3, 0.9, c(x+1)) = 0.9 + 1.8x^2 + 1.2x^3 & (-1 \leq x \leq 0)\\
\text{mix}(0.9, 0.6, c(x)) = 0.9 - 0.9x^2 + 0.6x^3 & (0 \leq x \leq 1)
\end{array}
\right.
$$

->

$$
h(x) = \left\{
\begin{array}{ll}
\text{mix}(0.3, 0.9, c(x+1)) = 0.9 - 1.8x^2 - 1.2x^3 & (-1 \leq x \leq 0)\\
\text{mix}(0.9, 0.6, c(x)) = 0.9 - 0.9x^2 + 0.6x^3 & (0 \leq x \leq 1)
\end{array}
\right.
$$


## P.51 left differential coefficient

$$
\frac{h( - \varepsilon) - h(0)}{\varepsilon} = \frac{ 1.8 \varepsilon ^ 2 - 1.2 \varepsilon ^ 3 }{ \varepsilon } \rightarrow	 0
$$

->

$$
\frac{h( - \varepsilon) - h(0)}{\varepsilon} = \frac{ -1.8 \varepsilon ^ 2 + 1.2 \varepsilon ^ 3 }{ \varepsilon } \rightarrow	 0
$$

## P.51 derived function

$$
h'(x) = \left\{
\begin{array}{ll}
3.6x(1+x) & (-1 \leq x \leq 0)\\
1.8x(-1+x) & (0 \leq x \leq 1)
\end{array}
\right.
$$

->

$$
h'(x) = \left\{
\begin{array}{ll}
-3.6x(1+x) & (-1 \leq x \leq 0)\\
1.8x(-1+x) & (0 \leq x \leq 1)
\end{array}
\right.
$$

## P.52 second derived function

$$
h''(x) = \left\{
\begin{array}{ll}
3.6+7.2x & (-1 \leq x \lt 0)\\
-1.8+3.6x & (0 \lt x \leq 1)
\end{array}
\right.
$$

->

$$
h''(x) = \left\{
\begin{array}{ll}
-3.6-7.2x & (-1 \leq x \lt 0)\\
-1.8+3.6x & (0 \lt x \leq 1)
\end{array}
\right.
$$

## P.131 コード 9.3
This is not strictly a typo but if you want to conform to the text, this expression might be better.

```glsl
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
```

->

```glsl
float smin(float a, float b, float k){
  float h = clamp(0.5 - 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(a, b, h) - k * h * (1.0 - h); 
}
```

