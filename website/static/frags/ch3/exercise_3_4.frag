#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
int channel;

//start hash
uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;

uvec2 uhash22(uvec2 n){
  n ^= (n.yx << u.xy);
  n ^= (n.yx >> u.xy);
  n *= k.xy;
  n ^= (n.yx << u.xy);
  return n * k.xy;
}

float hash21(vec2 p){
  uvec2 n = floatBitsToUint(p);
  return float(uhash22(n).x) / float(UINT_MAX);
}
//end hash

vec2 gradAnalyticDiff(vec2 p){
  vec2 n = floor(p);
  float[4] v;
  for (int j = 0; j < 2; j ++){
    for (int i = 0; i < 2; i++){
      v[i+2*j] = hash21(n + vec2(i, j));
    }
  }

  vec2 f = fract(p);
  vec2 df = fract(p);

  if (channel == 0){
    f = f * f * (3.0 -2.0 * f); // Hermite interpolation
    df = 6.0 * df * (1.0 - df);
  } else {
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f); //quintic Hermite interpolation
    df = 30.0 * df * df * ( df * df - 2.0 * df + 1.0);
  }

  return vec2(
    df[0] * ( -v[0] + v[1] + (v[0] - v[1] - v[2] + v[3]) * f[1]),
    df[1] * ( -v[0] + v[2] + (v[0] - v[1] - v[2] + v[3]) * f[0])
  );
}

void main(){
  vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);
  channel = int(gl_FragCoord.x * 2.0 / u_resolution.x);
  pos = 3.0 * pos+u_time;
  fragColor.rgb = vec3(dot(vec2(1), gradAnalyticDiff(pos)));
  fragColor.a = 1.0;
}