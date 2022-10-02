---
sidebar_position: 2
---

# Exercise 8.1
## (1)
$\textbf{x} = (x_1, x_2, x_3), \textbf{y} = (y_1, y_2, y_3)$ に対し、
$$
\begin{aligned}
\textbf{x} \times	\textbf{y} &= (x_2y_3 - x_3y_2, x_3y_1 - x_1y_3, x_1y_2 - x_2y_1) \\
&= (y_3x_2 - y_2x_3, y_1x_3 - y_3x_1, y_2x_1 - y_1x_2) \\
&= - (y_2x_3 - y_3x_2, y_3x_1 - y_1x_3, y_1x_2 - y_2x_1) \\
&= - \textbf{y} \times	\textbf{x}
\end{aligned}
$$
となる。
したがって、 $\textbf{x} \times	\textbf{y} = - \textbf{y} \times	\textbf{x}$ を得る。

## (2)
$\textbf{x} = (x_1, x_2, x_3), \textbf{y} = (y_1, y_2, y_3)$ に対し、
$$
\begin{aligned}
\textbf{x} \cdot (\textbf{x} \times \textbf{y}) &= \textbf{x} \cdot (x_2y_3 - x_3y_2, x_3y_1 - x_1y_3, x_1y_2 - x_2y_1)\\
&= \utilde{x_1x_2y_3} - \underline{x_1x_3y_2} + \underlinesegment{x_2x_3y_1} - \utilde{x_2x_1y_3} + \underline{x_3x_1y_2} - \underlinesegment{x_3x_2y_1} \\
&= 0 \\
\end{aligned}
$$
$$
\begin{aligned}
\textbf{y} \cdot (\textbf{x} \times \textbf{y}) &= \textbf{y} \cdot (x_2y_3 - x_3y_2, x_3y_1 - x_1y_3, x_1y_2 - x_2y_1)\\
&= \utilde{y_1x_2y_3} - \underline{y_1x_3y_2} + \underline{y_2x_3y_1} - \underlinesegment{y_2x_1y_3} + \underlinesegment{y_3x_1y_2} - \utilde{y_3x_2y_1} \\
&= 0 \\
\end{aligned}
$$

となる。
したがって、 $\textbf{x} \cdot (\textbf{x} \times \textbf{y}) = \textbf{y} \cdot (\textbf{x} \times \textbf{y}) = 0$ を得る。
