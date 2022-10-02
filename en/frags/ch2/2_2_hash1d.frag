#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uint k = 0x456789abu;
const uint UINT_MAX = 0xffffffffu;
uint uhash11(uint n){
    n ^= (n << 1);
    n ^= (n >> 1);
    n *= k;
    n ^= (n << 1);
    return n * k;
}
float hash11(float p){
    uint n = floatBitsToUint(p);
    return float(uhash11(n)) / float(UINT_MAX);
}
void main(){
    float time = floor(60.0 * u_time);
    vec2 pos = gl_FragCoord.xy + time;
    fragColor.rgb = vec3(hash11(pos.x));
    fragColor.a = 1.0;
}