import React from 'react';
import THREE from 'three';
import ReactTHREE from 'react-three';
import ControlsComponent from '../../demos/robots/controls';
import SceneComponent from '../../demos/robots/scene';
import Constants from '../../../constants';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    constructor() {

        super();

        this.state = {
            robot: Constants.ROBOT.ROBBY,
            spinDirection: Constants.SPIN.LEFT,
            spinSpeed: Constants.SPIN_SPEED_DEFAULT
        };

        this._onChangeRobot = this._onChangeRobot.bind(this);
        this._onChangeSpinDirection = this._onChangeSpinDirection.bind(this);
        this._onChangeSpinSpeed = this._onChangeSpinSpeed.bind(this);

    }

    render() {

        return (
            <div className="contents demo">
                <ControlsComponent robot={this.state.robot} spinDirection={this.state.spinDirection} spinSpeed={this.state.spinSpeed} onChangeRobot={this._onChangeRobot} onChangeSpinDirection={this._onChangeSpinDirection} onChangeSpinSpeed={this._onChangeSpinSpeed}/>
                <SceneComponent robot={this.state.robot} spinDirection={this.state.spinDirection} spinSpeed={this.state.spinSpeed}/>
                <div className="credits">Robby The Robot by <a href="http://www.blendswap.com/user/planemo">Planemo</a>, Mech Robot by <a href="http://www.blendswap.com/user/mirov777">mirov777</a></div>
            </div>
        );

    }

    _onChangeRobot(robotName) {
        this.setState({robot: robotName});
    }

    _onChangeSpinDirection(spinDirection) {
        this.setState({spinDirection: spinDirection});
    }

    _onChangeSpinSpeed(spinSpeed) {
        this.setState({spinSpeed: spinSpeed});
    }

}

export default composeSlide(SlideContents);
