#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;

float sphereSDF(vec3 p, vec3 c, float r){
    return length(p - c) - r;
}
float sceneSDF(vec3 p){
    float[3] smallS, bigS;
    for (int i = 0; i < 3; i++){
        smallS[i] = sphereSDF(p, vec3(float(i - 1), sin(u_time), 0.0), 0.3);
        bigS[i] = sphereSDF(p, vec3(float(i - 1), 0.0, 0.0), 0.5);
    }
    float cap = max(smallS[0], bigS[0]);
    float cup = min(smallS[1], bigS[1]);
    float minus = max(smallS[2], -bigS[2]);
    return min(min(cap, cup), minus);
}
vec3 gradSDF(vec3 p){
    float eps = 0.001;
    return normalize(vec3(
        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p + vec3(-eps, 0.0, 0.0)),
        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p + vec3(0.0, - eps, 0.0)),
        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p + vec3(0.0, 0.0, - eps))
    ));
}
void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    
    vec3 cPos = vec3(0.0, 0.0, 2.0);
    vec3 cDir = vec3(0.0, 0.0, -1.0);
    vec3 cUp = vec3(0.0, 1.0, 0.0);
    vec3 cSide = cross(cDir, cUp);
    float targetDepth = 1.0;
    
    vec3 lDir = vec3(0.0, 0.0, 1.0);

    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;
    
    vec3 rPos = cPos + ray;
    ray = normalize(ray);
    fragColor.rgb = vec3(0.0);
    for(int i = 0; i < 50; i ++ ){
        if (sceneSDF(rPos) > 0.001){
            rPos += sceneSDF(rPos) * ray;
        } else {
            float amb = 0.1;
            float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);
            vec3 col = vec3(1.0);
            fragColor.rgb = col * (diff + amb);
            break;
        }
    }
    fragColor.a = 1.0;
}