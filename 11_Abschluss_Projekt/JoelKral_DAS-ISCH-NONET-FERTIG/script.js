import {drawScene} from "./util/redraw.js";
import {initBuffers} from "./util/buffer-init.js";
import {initShaderProgram, SHADERS} from "./util/shader-init.js";


main();





async function main() {


    const canvas = document.querySelector("#gl-canvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl2");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }


    const shaderProgram = await initShaderProgram(gl, SHADERS.vertex[0], SHADERS.fragment[0]);
    if (shaderProgram === null) {
        alert(
            "Unable to compile shaders.",
        );
        return;
    }

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        },
        uniformLocations: {
            MAGIC: gl.getUniformLocation(shaderProgram, "uMAGIC"),
            projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
        },
    };


    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    const buffers = initBuffers(gl);
    drawScene(gl, programInfo, buffers);
}


