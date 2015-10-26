import React from 'react';
import composeSlide from '../../compose-slide';
import Highlight from 'react-highlight';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents top webgl-low-level-code">
                <Highlight>
                    {`if( window.WebGLRenderingContext ) {

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("webgl") ||
canvas.getContext('experimental-webgl');

if( ctx ) {

    var vertexPosBuffer = ctx.createBuffer();
    ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexPosBuffer);

    var vertices = [
        -0.5, -0.5,
        0.5, -0.5,
        0, 0.5
    ];

    ctx.bufferData( ctx.ARRAY_BUFFER, new Float32Array(vertices),
        ctx.STATIC_DRAW );

    var vertexShaderSource = 'attribute vec2 pos;' +
    'void main() {' +
    '  gl_Position = vec4( pos, 0.0, 1.0 );' + // xyzw
    '}';

    var fragmentShaderSource = 'precision mediump float;' +
    'void main() {' +
    '  gl_FragColor = vec4( 0.0, 1.0, 0.0, 1.0 );' + // rgba
    '}';

    var vertexShader = ctx.createShader(ctx.VERTEX_SHADER);
    ctx.shaderSource( vertexShader, vertexShaderSource );
    ctx.compileShader( vertexShader );

    var fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER);
    ctx.shaderSource( fragmentShader, fragmentShaderSource );
    ctx.compileShader( fragmentShader );

    var program = ctx.createProgram();
    ctx.attachShader( program, vertexShader );
    ctx.attachShader( program, fragmentShader );
    ctx.linkProgram( program );

    ctx.useProgram(program);

    program.vertexPosAttrib = ctx.getAttribLocation( program, 'pos' );

    ctx.enableVertexAttribArray( program.vertexPosAttrib );

    ctx.vertexAttribPointer( program.vertexPosAttrib, 2, ctx.FLOAT, false, 0, 0 );

    ctx.drawArrays(ctx.TRIANGLES, 0, 3);

    }
}`}
                    </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
