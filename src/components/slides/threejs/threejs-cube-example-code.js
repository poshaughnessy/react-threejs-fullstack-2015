import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents top threejs-spinning-cube-code">
                <Highlight>
                        {`// 1. Set up a WebGL renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
container.appendChild( renderer.domElement );

// 2. Make a scene
var scene = new THREE.Scene();

// 3. And a camera
var camera = new THREE.PerspectiveCamera( 45, width/height,
1, 1000 );
scene.add( camera );

// 4. Load a texture
var texture = THREE.ImageUtils.loadTexture('react-logo.jpg');

// 5. Now for our cube
var cube = new THREE.Mesh(
   new THREE.CubeGeometry( 50, 50, 50 ),
   new THREE.MeshBasicMaterial( {map: texture} )
);
scene.add( cube );

// 6. Spin it!
function animate() {
   cube.rotation.y += 0.1;
   renderer.render( scene, camera );
   requestAnimationFrame( animate );
}
animate();`}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
