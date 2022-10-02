#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.14159265359;
float rectSDF(vec2 p, vec2 c, vec2 d){
    p = abs(p - c);
    return length(max(p - d, vec2(0.0))) + min(max(p.x - d.x, p.y - d.y), 0.0);
}
float circleSDF(vec2 p, vec2 c, float r){
    return length(p - c) - r;
}
vec3 contour(float v, float interval){
    return abs(v) < 0.01 ? vec3(0.0):
    mod(v, interval) < 0.01 ? vec3(1.0):
    mix(vec3(0, 0, 1), vec3(1, 0, 0), atan(v) / PI + 0.5);
}
void main(){
    vec2 pos = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ u_resolution.yy;
    float v1 = circleSDF(pos, vec2(0.2), 0.4);
    float v2 = rectSDF(pos, vec2(-0.2), vec2(0.4));
    float v = int(u_time) % 3 == 0 ? max(v1, v2):
        int(u_time)% 3 == 1 ? min(v1, v2):
        max(v1, -v2);
    fragColor = vec4(contour(v, 0.1), 1.0);
}
