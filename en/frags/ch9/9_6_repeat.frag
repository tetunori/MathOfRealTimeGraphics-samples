#version 300 es
precision mediump float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
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
vec3 euler(vec3 p, vec3 t){
    return rotZ(rotY(rotX(p, t.x), t.y), t.z);
}
//end rot

float sphereSDF(vec3 p, vec3 c, float s){
    return sqrt(dot(p - c, p - c)) - s;
}

float sceneSDF(vec3 p){
    vec3 center = vec3(0.0);
    float scale = 0.1;
    return sphereSDF(fract(p+0.5)-0.5, center, scale);
}
vec3 gradSDF(vec3 p){
    float eps = 0.001;
    return normalize (vec3(
        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),
        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),
        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))
    ));
}

void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);

    vec3 t = vec3(u_time * 0.1);
    vec3 cPos = euler(vec3(0.0, 0.0,.5), t);
    vec3 cDir = euler(vec3(0.0, 0.0, - 1.0), t);
    vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);
    vec3 cSide = cross(cDir, cUp);

    float targetDepth = 1.0;

    vec3 lDir = vec3(1.0);

    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;
    vec3 rPos = cPos;
    ray = normalize(ray);
    fragColor.rgb = vec3(0.0);
    for(int i = 0; i < 50; i ++ ){
        if (sceneSDF(rPos) > 0.001){
            rPos += sceneSDF(rPos) * ray;
        } else {
            float amb = 0.1;
            float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);
            vec3 col = vec3(0.0, 1.0, 1.0);
            fragColor.rgb = col * (diff + amb);
            break;
        }
    }
    fragColor.a = 1.0;
}