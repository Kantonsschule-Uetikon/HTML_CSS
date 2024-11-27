#version 300 es

out highp vec4 color;
in lowp vec4 vposition;
uniform lowp float elapsed;
uniform lowp vec2 offset;
uniform lowp float boost;



void main() {
    highp vec3 f_normal = normalize(cross(dFdx(vposition.xyz), dFdy(vposition.xyz)));
    color = vec4(f_normal, 0.1);
    highp float dist = distance(vposition.xyz, vec3(10.0));
    lowp vec2 pos = vec2(vposition.x, -vposition.y) * vposition.z / 200.0;
    highp float highlight1 = abs(1.0 - smoothstep(0.0, 0.1, distance(pos, offset + vec2(-0.5))));
    highp float highlight2 = abs(1.0 - smoothstep(0.0, 0.6, distance(pos, offset + vec2(-0.5))));
    color = vec4(f_normal * 0.1 + 0.2, 0.2) + vec4(vec3(highlight1), highlight1 / 2.0)
    + vec4(vec3(sin(highlight2 * 10.0 + boost*0.5) * 0.05), 0.0);
    color += color * max(boost, 0.0)*0.1;
}