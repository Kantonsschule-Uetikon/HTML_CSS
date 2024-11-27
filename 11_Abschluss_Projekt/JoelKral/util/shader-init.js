export { initShaderProgram }
export { SHADERS }




function fetchToString(shader) {
    return fetch(shader).then(response => response.text());
}

const SHADERS = {
    vertex: ['./shaders/vertex_shader.vert',],
    fragment: ['./shaders/fragment_shader.frag',],
    compute: ['./shaders/compute_shader.comp',],
};



async function initShaderProgram(gl, vsSource, fsSource) {

    const shaders = [await fetchToString(vsSource), await fetchToString(fsSource)];
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, shaders[0]);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, shaders[1]);
    //compute shader here?
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
            `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                shaderProgram)}`,
        );
        return null;
    }
    return shaderProgram;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(
            `An error occurred compiling the shaders: ${gl.getShaderInfoLog(
                shader)}`,
        );
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}


