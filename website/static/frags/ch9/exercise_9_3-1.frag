#version 300 es
precision highp float;
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

float smin(float d1, float d2, float r){
  float c = clamp(0.5 + (d2 - d1) * (0.5 / r), 0.0, 1.0);
  return mix(d2, d1, c) - r * c * (1.0 - c);
}

// Reference: MIT License Copyright (c) 2018 Mikael Hvidtfeldt Christensen
// https://github.com/Syntopia/Polytopia/blob/master/polyhedron.glsl
// https://syntopia.github.io/Polytopia/polytopes.html

#define PI 3.141592

vec3 nc,pNorm,pab,pbc,pca;
float Degree = 5.0;
float V=0., W=1., U = 0.;
int polyidx = 0;

// degree, v, w, u
vec4[5] paramArray = vec4[](
  vec4(3.0, 0.0, 0.0, 1.0), // Tetrahedron 
  vec4(4.0, 0.0, 0.0, 1.0), // Hexahedron
  vec4(4.0, 0.0, 1.0, 0.0), // Octahedron
  vec4(5.0, 0.0, 0.0, 1.0), // Dodecahedron
  vec4(5.0, 0.0, 1.0, 0.0)  // Icosahedron
);

void init( int idx ) {
  vec4 param = paramArray[idx];
  Degree = param.x;
  V = param.y;
  W = param.z;
  U = param.w;

	float cospin=cos(PI/Degree), scospin=sqrt(0.75-cospin*cospin);
	nc=vec3(-0.5,-cospin,scospin);
	pab=vec3(0.,0.,1.);
	pbc=vec3(scospin,0.,0.5);
	pca=vec3(0.,scospin,cospin);

	pNorm=normalize((V*pab+W*pbc+U*pca));
	pbc=normalize(pbc);
	pca=normalize(pca);
}

vec3 fold(vec3 pos) {
	int max = 5; //int(Degree);
	for(int i=0;i<7;i++){
		pos.xy=abs(pos.xy);
		float t=-2.*min(0.,dot(pos,nc));
		pos+=t*nc;
		if (i>=max) break;
	}
	return pos;
}

float D2Planes(vec3 pos) {
	float d0=dot(pos,pab)-dot(pab,pNorm);
	float d1=dot(pos,pbc)-dot(pbc,pNorm);
	float d2=dot(pos,pca)-dot(pca,pNorm);
	
	return abs(max(max(d0,d1),d2));
}

float regularPolyhedronSDF(vec3 pos, int idx, float s){
  init(idx);
  vec3 oPos = pos;
	pos=fold(pos);
	float d=10000.;
	d=min(d,D2Planes(pos));
	return d;
}

float sceneSDF(vec3 p){
  return regularPolyhedronSDF(p, polyidx, 0.5);
}

vec3 gradSDF(vec3 p){
  float eps = 0.003;
  return normalize(vec3(
    sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),
    sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),
    sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))
  ));
}

void main(){
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  vec3 t = 2.0 + vec3(u_time * 0.5);
  vec3 cPos = euler(vec3(0.0, 0.0, 2.0), t);
  vec3 cDir = euler(vec3(0.0, 0.0, -1.0), t);
  vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);
  vec3 cSide = cross(cDir, cUp);
  
  float targetDepth = 1.0;
  
  vec3 lDir = euler(vec3(0.0, 0.0, 1.0), t);

  float sec = 6.0;
  polyidx = int(floor(mod(float(u_time),5.0*sec)/sec));

  vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;
  vec3 rPos = ray + cPos;
  ray = normalize(ray);
  fragColor.rgb = vec3(0.078, 0.129, 0.239);
  for(int i = 0; i < 50; i ++ ){
    if (sceneSDF(rPos) > 0.001){
      rPos += sceneSDF(rPos) * ray;
    } else {
      float amb = 0.1;
      float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);
      vec3 col = vec3(0.988, 0.639, 0.067);
      fragColor.rgb = col * (diff + amb);
      break;
    }
  }
  fragColor.a = 1.0;
}