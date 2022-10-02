---
sidebar_position: 3
---

# 問題 2.1
## 計算
| Number | Calculation |
| :---: | :---: |
|  1.0 | $(-1)^0 \times 2^{127-127} \times 1.0000 \dots 0$ |
|  2.0 | $(-1)^0 \times 2^{128-127} \times 1.0000 \dots 0$ |
|  3.0 | $(-1)^0 \times 2^{128-127} \times 1.1000 \dots 0$ |
|  4.0 | $(-1)^0 \times 2^{129-127} \times 1.0000 \dots 0$ |
|  5.0 | $(-1)^0 \times 2^{129-127} \times 1.0100 \dots 0$ |
|  6.0 | $(-1)^0 \times 2^{129-127} \times 1.1000 \dots 0$ |
|  7.0 | $(-1)^0 \times 2^{129-127} \times 1.1100 \dots 0$ |
|  8.0 | $(-1)^0 \times 2^{130-127} \times 1.0000 \dots 0$ |
|  9.0 | $(-1)^0 \times 2^{130-127} \times 1.0010 \dots 0$ |
| 10.0 | $(-1)^0 \times 2^{130-127} \times 1.0100 \dots 0$ |

## 確認

import LiveGlslCodeBlock from "/js/liveGLSLCodeBlock";
import code from '!!raw-loader!/frags/ch2/exercise_2_1.frag';

<LiveGlslCodeBlock fragName='exercise_2_1.frag' fragCode={code} />
