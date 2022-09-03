#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
const float PI = 3.14159265359;
float rect(vec2 p, vec2 c, vec2 d){
    p = abs(p - c);
    return length(max(p - d, vec2(0.0))) + min(max(p.x - d.x, p.y - d.y), 0.0);
}
vec3 contour(float v, float interval){
    return abs(v) < 0.01 ? vec3(0.0):
    mod(v, interval) < 0.01 ? vec3(1.0):
    mix(vec3(0, 0, 1), vec3(1, 0, 0), atan(v) / PI + 0.5);
}
void main(){
    vec2 pos = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
    fragColor.rgb = vec3(contour(rect(pos, vec2(0.0), vec2(0.5)), 0.1));
    fragColor.a = 1.0;
}
