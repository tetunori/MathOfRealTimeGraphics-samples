---
sidebar_position: 1
---

# 0_0_helloWorld
## Code 0.2, Figure 0.2: 

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  fragUrl='/frags/ch0/0_0_helloWorld.frag'
/>

```glsl showLineNumbers title="0_0_helloWorld.frag"
#version 300 es
precision highp float;
out vec4 fragColor;
void main(){
    fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```
