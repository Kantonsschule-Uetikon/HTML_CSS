import {drawScene} from "./util/redraw.js";
import {initBuffers} from "./util/buffer-init.js";
import {initShaderProgram, SHADERS} from "./util/shader-init.js";

main();

async function main() {

    const text = document.getElementsByClassName("text");
    const canvas = document.querySelector("#gl-canvas");
    var rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const offset = [0,0];
    let boost = 1.0;
    canvas.onclick = function (event) {
        boost = 10.0;
    }
    canvas.onmousemove = function (event) {
        offset[0]=event.offsetX/canvas.getAttribute("width");
        offset[1]=event.offsetY/canvas.getAttribute("height");};

    const gl = canvas.getContext("webgl2");

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
            position: gl.getAttribLocation(shaderProgram, "position"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, "projectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, "modelViewMatrix"),
            rot4Matrix: gl.getUniformLocation(shaderProgram, "rot4Matrix"),
            elapsed: gl.getUniformLocation(shaderProgram, "elapsed"),
            offset: gl.getUniformLocation(shaderProgram, "offset"),
            boost: gl.getUniformLocation(shaderProgram, "boost"),
        },
    };

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    const buffers = initBuffers(gl);

    let deltaTime = 0;
    let then = 0;
    let elapsed = 0;
    function render(now) {
        if (boost>0.0) {
            boost *= 0.92;
        }
        now *= 0.001;
        deltaTime = now - then;
        then = now;
        elapsed += deltaTime*boost;
        drawScene(gl, elapsed, offset, boost, programInfo, buffers);
        requestAnimationFrame(render);
        text[0].textContent = `elapsed: ${elapsed}`;
        text[1].textContent = `"boost": ${boost}`;
    }
    requestAnimationFrame(render);
}


