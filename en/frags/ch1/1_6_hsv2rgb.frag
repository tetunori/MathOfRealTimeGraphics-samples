#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;
float atan2(float y, float x){
    if (x == 0.0){
        return sign(y) * PI / 2.0;
    } else {
        return atan(y, x);
    }
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}
vec3 hsv2rgb(vec3 c){ // fork from https://www.shadertoy.com/view/MsS3Wc
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return c.z * mix(vec3(1.0), rgb, c.y);
}
void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    pos = 2.0 * pos.xy - vec2(1.0);
    pos = xy2pol(pos);
    pos.x = mod(0.5 * pos.x / PI, 1.0);
    fragColor.rgb = hsv2rgb(vec3(pos, 1.0));
    fragColor.a = 1.0;
}