#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
const float PI = 3.14159265359;
float circle(vec2 p, vec2 c, float r){
    float d = 0.5 + u_mouse.x / u_resolution.x;
    return pow(dot(p - c, p - c), d) - r;
}
vec3 contour(float v, float interval){
    return abs(v) < 0.01 ? vec3(0.0):
    mod(v, interval) < 0.01 ? vec3(1.0):
    mix(vec3(0, 0, 1), vec3(1, 0, 0), atan(v) / PI + 0.5);
}
void main(){
    vec2 pos = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
    float interval = 0.3;
    fragColor.rgb = vec3(contour(circle(pos, vec2(0.0), 1.0), interval));
    fragColor.a = 1.0;
}
