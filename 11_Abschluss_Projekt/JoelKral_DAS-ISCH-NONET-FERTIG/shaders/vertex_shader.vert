#version 300 es

in lowp vec4 aVertexPosition;

uniform mat4 uMAGIC;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;

    gl_Position = uMAGIC * gl_Position;
}