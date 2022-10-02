#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
const float PI = 3.14159265359;
const float TAU = 6.2831853;
//begin rot
vec2 rot2(vec2 p, float t){
    return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);
}
vec3 rotX(vec3 p, float t){
    return vec3(p.x, rot2(p.yz, t));
}
vec3 rotY(vec3 p, float t){
    return vec3(p.y, rot2(p.zx, t)).zxy;
}
vec3 rotZ(vec3 p, float t){
    return vec3(rot2(p.xy, t), p.z);
}
//end rot
//start hash
uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;
uint uhash11(uint n){
    n ^= (n << u.x);
    n ^= (n >> u.x);
    n *= k.x;
    n ^= (n << u.x);
    return n * k.x;
}
uvec2 uhash22(uvec2 n){
    n ^= (n.yx << u.xy);
    n ^= (n.yx >> u.xy);
    n *= k.xy;
    n ^= (n.yx << u.xy);
    return n * k.xy;
}
uvec3 uhash33(uvec3 n){
    n ^= (n.yzx << u);
    n ^= (n.yzx >> u);
    n *= k;
    n ^= (n.yzx << u);
    return n * k;
}
float hash11(float p){
    uint n = floatBitsToUint(p);
    return float(uhash11(n)) / float(UINT_MAX);
}
float hash21(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return float(uhash22(n).x) / float(UINT_MAX);
}
float hash31(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return float(uhash33(n).x) / float(UINT_MAX);
}
vec2 hash22(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return vec2(uhash22(n)) / vec2(UINT_MAX);
}
vec3 hash33(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return vec3(uhash33(n)) / vec3(UINT_MAX);
}
//end hash

//start vnoise
float vnoise21(vec2 p){
    vec2 n = floor(p);
    float[4] v;
    for (int j = 0; j < 2; j ++){
        for (int i = 0; i < 2; i++){
            v[i+2*j] = hash21(n + vec2(i, j));
        }
    }
    vec2 f = fract(p);
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);
}
//end vnoise
//start processing noise
float base21(vec2 p){
    return vnoise21(p) - 0.5;
}
float fbm21(vec2 p, float g){
    float val = 0.0;
    float amp = 1.0;
    float freq = 1.0;
    for (int i = 0; i < 4; i++){
        val += amp * base21(freq * p);
        amp *= g;
        freq *= 2.01;
    }
    return 0.5 * val + 0.5;
}
float warp21(vec2 p, float g){
    float val = 0.0;
    for (int i = 0; i < 3; i++){
        val = fbm21(p + g * vec2(cos(TAU * val), sin(TAU * val)), 0.5);
    }
    return val;
}
//end processing noise
vec2 grad2(vec2 uv){
    uv += 0.3 * u_time;
    float d = 0.001;
    return 0.5 * (vec2(
        warp21(uv + vec2(d, 0.0), 1.0)
             - warp21(uv - vec2(d, 0.0), 1.0),
            warp21(uv + vec2(0.0, d), 1.0) - warp21(uv - vec2(0.0, d), 1.0)
        )) / d;
}
void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec3 cPos = vec3(0.0, 0.0, 0.0);
    float t = -0.25 * PI;
    vec3 cDir = rotX(vec3(0.0, 0.0, - 1.0), t);
    vec3 cUp = rotX(vec3(0.0, 1.0, 0.0), t);
    vec3 cSide = cross(cDir, cUp);
    float targetDepth = 1.0;
    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth - cPos;
    ray = normalize(ray);
    vec3 groundNormal = vec3(0.0, 1.0, 0.0);
    float groundHeight = 1.5;
    vec3 lPos = vec3(0.,0.,0.);
    if (dot(ray, groundNormal) < 0.0){
        vec3 hit = cPos - ray * groundHeight / dot(ray, groundNormal);
        groundNormal.zx += grad2(hit.zx);
        groundNormal = normalize(groundNormal);
        float diff = max(dot(normalize(lPos - hit), groundNormal), 0.0);
        diff *= 1.5;
        diff /= pow(length(lPos - hit), 1.5) ;
        fragColor = vec4(diff);
    } else {
        fragColor = vec4(0.0);
    }  
    fragColor.a = 1.0;
}