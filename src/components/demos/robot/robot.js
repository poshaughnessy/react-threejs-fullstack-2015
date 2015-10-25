import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class RobotComponent extends React.Component {

    constructor() {

        super();

        this.displayName = 'Robot';

        let loader = new THREE.JSONLoader();

        loader.load('/models/robby/RobbyTheRobot_FanArt.js', (geometry, materials) => {

            console.log('Loaded robot', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials ); // Use materials[0] for the monster

        });

    }

    render() {

        return React.createElement( ReactTHREE.Mesh, {
            geometry: this.geometry,
            material: this.material,
            position: this.props.position || new THREE.Vector3(0,0,0),
            scale: 8
        });

    }

}

RobotComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default RobotComponent;
