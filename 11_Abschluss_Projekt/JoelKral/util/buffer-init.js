export { initBuffers }




function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
    const indexBuffer = initIndexBuffer(gl);
    return {
        position: positionBuffer,
        indices: indexBuffer,
    };
}

function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
        1,1,1,1, -1,1,1,1, 1,-1,1,1, -1,-1,1,1, 1,1,-1,1, -1,1,-1,1, 1,-1,-1,1, -1,-1,-1,1,
        1,1,1,-1, -1,1,1,-1, 1,-1,1,-1, -1,-1,1,-1, 1,1,-1,-1, -1,1,-1,-1, 1,-1,-1,-1, -1,-1,-1,-1,];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return positionBuffer;
}


function initIndexBuffer(gl) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const R = 65535;
    const indices = [
        0,1,2,3,R,4,5,6,7,R,8,9,10,11,R,12,13,14,15,R,
        0,2,8,10,R,1,3,9,11,R,4,6,12,14,R,5,7,13,15,R,
        0,1,8,9,R,2,3,10,11,R,4,5,12,13,R,6,7,14,15,R,
        0,2,4,6,R,1,3,5,7,R,8,10,12,14,R,9,11,13,15,R,
        0,1,4,5,R,2,3,6,7,R,8,9,12,13,R,10,11,14,15,R,
        0,4,8,12,R,1,5,9,13,R,2,6,10,14,R,3,7,11,15,
    ];

    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW,
    );

    return indexBuffer;
}




