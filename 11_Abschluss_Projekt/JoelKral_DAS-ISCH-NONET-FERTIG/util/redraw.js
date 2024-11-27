export { drawScene }



function drawScene(gl, elapsed, offset, boost, programInfo, buffers) {

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    const fieldOfView = (45 * Math.PI) / 180; // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);


    const modelViewMatrix = mat4.create();
    mat4.translate(
        modelViewMatrix,
        modelViewMatrix,
        [-0.0, 0.0, -6.0],
    );
    mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        elapsed/3,
        [1.0, 0.0, 0.0],
    );
    mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        elapsed/3,
        [0.0, 1.0, 0.0],
    );
    mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        elapsed/3,
        [0.0, 0.0, 1.0],
    );


    const rot4Matrix = mat4.fromValues(
        1.0,0.0,0.0,0.0,
        0.0,Math.cos(elapsed),0.0,-Math.sin(elapsed),
        0.0,0.0,1.0,0.0,
        0.0,Math.sin(elapsed),0.0,Math.cos(elapsed));


    setPositionAttribute(gl, buffers, programInfo);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    gl.useProgram(programInfo.program);

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix,
    );
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix,
    );
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.rot4Matrix,
        false,
        rot4Matrix,
    );
    gl.uniform1f(
        programInfo.uniformLocations.elapsed,
        elapsed,
    );
    gl.uniform2fv(
        programInfo.uniformLocations.offset,
        offset,
    );
    gl.uniform1f(
        programInfo.uniformLocations.boost,
        boost,
    );


    {
        const vertexCount = 24*4;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLE_STRIP, vertexCount, type, offset);
    }
}


function setPositionAttribute(gl, buffers, programInfo) {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.position,
        numComponents,
        type,
        normalize,
        stride,
        offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.position);
}

