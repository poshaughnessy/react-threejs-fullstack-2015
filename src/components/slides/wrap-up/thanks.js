import React from 'react';
import composeSlide from '../../compose-slide';
import * as Constants from '../../../constants';
import ColladaLoader from '../../../../bower_components/threejs/examples/js/loaders/ColladaLoader.js'
import TWEEN from 'tween.js';

const RAD_20 = Math.PI / 9;
const RAD_30 = Math.PI / 6;
const RAD_360 = Math.PI * 2;

class ThanksSlideContents extends React.Component {

    constructor(props) {
        super(props);
        this._initScene = this._initScene.bind(this);
        this._initRobot = this._initRobot.bind(this);
        this._initRobotAnimations = this._initRobotAnimations.bind(this);
        this._animate = this._animate.bind(this);
        this._destroyScene == this._destroyScene.bind(this);
    }

    _initScene() {

        let width = 400;
        let height = 300;

        // Create a WebGL renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize( width, height );

        // Add generated <canvas> to page
        this.container = this.refs.robotContainer;
        this.container.appendChild( this.renderer.domElement );

        // Make a scene
        this.scene = new THREE.Scene();

        let ambientLight = new THREE.AmbientLight( 0x555555 );
        this.scene.add( ambientLight );

        let directionalLight = new THREE.DirectionalLight( 0xeeeeff, 0.5 );
        directionalLight.position.set(0, 0, 1);
        this.scene.add( directionalLight );

        // Create a camera
        this.camera = new THREE.PerspectiveCamera(
            45,           // Field of View
            width/height, // Aspect ratio
            1,            // zNear
            10000         // zFar
        );

        this.camera.position.z = 800;

        // Add it to the scene
        this.scene.add( this.camera );

        this._initRobot();

        // Start animation going
        this._animate();

    }

    _initRobot() {

        let loader = new THREE.ColladaLoader();

        /* Robot from 'WebGL: Up & Running Book' - licence applies, but it no longer appears */
        /* to be up at the URL referenced in the book (turbosquid.com/FullPreview/Index.cfm/ID/475463) */
        /* (It now redirects to another robot). If you're the creator of the model, */
        /* please get in touch with me and I'll happily credit you or pay to use it. Thanks! */

        this.robot = {};

        loader.load( '/models/robot_cartoon_02/robot_cartoon_02.dae', function( collada ) {

            let model = collada.scene;
            model.position.set(0, -250, 0);
            model.rotation.y = Math.PI / 4;
            model.scale.set(1, 1, 1);

            this.robot.model = model;

            this.robot.key = model.getObjectByName('clef');
            this.robot.head = model.getObjectByName('tete');
            this.robot.leftLeg = model.getObjectByName('jambe_G');
            this.robot.rightLeg = model.getObjectByName('jambe_D');
            this.robot.leftArm = model.getObjectByName('bras_G');
            this.robot.rightArm = model.getObjectByName('axe_bras_droit');

            // Right arm is not quite in the right place for some reason
            this.robot.rightArm.position.z -= 20;

            this._initRobotAnimations();

            this.scene.add( model );


        }.bind(this));

    }

    _initRobotAnimations() {

        // Need to set this to allow us to change rotation of child elements
        this.robot.key.useQuaternion = false;
        this.robot.head.useQuaternion = false;
        this.robot.leftLeg.useQuaternion = false;
        this.robot.rightLeg.useQuaternion = false;
        this.robot.leftArm.useQuaternion = false;
        this.robot.rightArm.useQuaternion = false;


        let tweenKeyTurn = new TWEEN.Tween( this.robot.key.rotation )
            .to( { x: this.robot.key.rotation.x - (RAD_360) }, 3000)
            .onComplete(function() {
                this.robot.key.rotation.x = 0;
            }.bind(this));

        let tweenHeadTurn = new TWEEN.Tween( this.robot.head.rotation )
            .to( { y: this.robot.head.rotation.y + (RAD_30) }, 3000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenHeadTurnBack = new TWEEN.Tween( this.robot.head.rotation )
            .to( { y: this.robot.head.rotation.y - (RAD_30) }, 3000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenLeftLegForwards = new TWEEN.Tween( this.robot.leftLeg.rotation )
            .to( { z: this.robot.leftLeg.rotation.z - (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenLeftLegBackwards = new TWEEN.Tween( this.robot.leftLeg.rotation )
            .to( { z: this.robot.leftLeg.rotation.z + (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenRightLegForwards = new TWEEN.Tween( this.robot.rightLeg.rotation )
            .to( { z: this.robot.rightLeg.rotation.z - (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenRightLegBackwards = new TWEEN.Tween( this.robot.rightLeg.rotation )
            .to( { z: this.robot.rightLeg.rotation.z + (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenLeftArmForwards = new TWEEN.Tween( this.robot.leftArm.rotation )
            .to( { z: this.robot.leftArm.rotation.z - (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenLeftArmBackwards = new TWEEN.Tween( this.robot.leftArm.rotation )
            .to( { z: this.robot.leftArm.rotation.z + (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenRightArmForwards = new TWEEN.Tween( this.robot.rightArm.rotation )
            .to( { z: this.robot.rightArm.rotation.z - (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        let tweenRightArmBackwards = new TWEEN.Tween( this.robot.rightArm.rotation )
            .to( { z: this.robot.rightArm.rotation.z + (RAD_20) }, 1000 )
            .easing( TWEEN.Easing.Quadratic.InOut );

        tweenKeyTurn.chain( tweenKeyTurn );

        tweenHeadTurn.chain( tweenHeadTurnBack );
        tweenHeadTurnBack.chain( tweenHeadTurn );

        tweenLeftLegForwards.chain( tweenLeftLegBackwards );
        tweenLeftLegBackwards.chain( tweenLeftLegForwards );

        tweenRightLegForwards.chain( tweenRightLegBackwards );
        tweenRightLegBackwards.chain( tweenRightLegForwards );

        tweenLeftArmForwards.chain( tweenLeftArmBackwards );
        tweenLeftArmBackwards.chain( tweenLeftArmForwards );

        tweenRightArmForwards.chain( tweenRightArmBackwards );
        tweenRightArmBackwards.chain( tweenRightArmForwards );

        tweenKeyTurn.start();
        tweenHeadTurn.start();
        tweenLeftLegForwards.start();
        tweenRightLegBackwards.start();
        tweenLeftArmForwards.start();
        tweenRightArmBackwards.start();

    }

    _animate() {

        TWEEN.update();

        if( this.robot.model != undefined ) {
            this.robot.model.updateMatrix();
            this.robot.model.matrixWorldNeedsUpdate = true;
        }

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
        this._initScene()
    }

    componentWillUnmount() {
        this._destroyScene();
    }

    render() {

        return (
            <div className="contents thanks">
                <h1>Thanks!</h1>
                <div ref="robotContainer"></div>
                <div>
                    <p className="github"><a href="https://github.com/poshaughnessy">github.com/poshaughnessy</a></p>
                </div>
                <div>
                    <p className="twitter"><a href="https://twitter.com/poshaughnessy">@poshaughnessy</a></p>
                </div>
                <div className="hiring">
                    <p><em>We're hiring full-stack JS developers!</em></p>
                    <p><a href="http://pebblecode.com/careers/">pebblecode.com/careers/</a></p>
                </div>
            </div>
        );

    }

}

export default composeSlide(ThanksSlideContents, Constants.COLOURS.PEBBLE_CODE_PINK);
