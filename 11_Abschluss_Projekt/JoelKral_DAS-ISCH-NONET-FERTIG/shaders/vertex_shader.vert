#version 300 es

in lowp vec4 position;
out lowp vec4 vposition;

uniform lowp float elapsed;
uniform mat4 rot4Matrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
void main() {
    vec4 adj_position = rot4Matrix * position;
    float dist = distance(adj_position,vec4(0,0,0,1.0));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(adj_position.xyz*dist,3);
    vposition = gl_Position;

}