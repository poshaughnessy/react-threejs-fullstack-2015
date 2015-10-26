import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    constructor(props) {
        super(props);
        this._initScene = this._initScene.bind(this);
        this._animate = this._animate.bind(this);
        this._destroyScene == this._destroyScene.bind(this);
    }

    _initScene() {

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Create a WebGL renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );

        // Add generated <canvas> to page
        this.container = this.refs.spinningCubeContainer;
        this.container.appendChild( this.renderer.domElement );

        // Make a scene
        this.scene = new THREE.Scene();

        // Create a camera
        this.camera = new THREE.PerspectiveCamera(
            45,           // Field of View
            width/height, // Aspect ratio
            1,            // zNear
            10000         // zFar
        );

        this.camera.position.z = 200;

        // Add it to the scene
        this.scene.add( this.camera );

        // Set up a texture
        var texture = THREE.ImageUtils.loadTexture('/images/react-logo.jpg');

        // Make a cube
        this.cube = new THREE.Mesh(
            new THREE.CubeGeometry( 50, 50, 50 ),
            new THREE.MeshBasicMaterial( {map: texture} ));

        // Add it to the scene
        this.scene.add( this.cube );

        // Start animation going
        this._animate();

    }

    _animate() {
        // Angles are in radians
        this.cube.rotation.y += 0.05;

        // Re-render
        this.renderer.render(this.scene, this.camera);

        // Call animate again once browser's ready for next frame
        this._rafId = requestAnimationFrame( this._animate )
    }

    _destroyScene() {

        if( this._rafId ) {
            cancelAnimationFrame(this.rafId);
        }

        this.camera = null;
        this.cube = null
        this.scene = null;
        this.renderer = null;

    }

    componentDidMount() {

        this._initScene();

    }

    componentWillUnmount() {

        this._destroyScene();

    }

    render() {

        return (
            <div className="contents top threejs-spinning-cube-demo">
                <div ref="spinningCubeContainer"></div>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
