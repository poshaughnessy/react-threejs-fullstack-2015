import React from 'react';
import * as slides from './slides/index';

const SLIDES = [
    slides.Title,
    slides.ApocIntro,
    slides.DontDoThis1,
    slides.ReactThreeIntro,
    slides.RobotDemo,
    slides.Thanks
];

class AppComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentSlideNum: props.initialSlideNum
        };

        this._onKeyUp = this._onKeyUp.bind(this);
        this._onLeft = this._onLeft.bind(this);
        this._onRight = this._onRight.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keyup', this._onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this._onKeyUp);
    }

    render() {

        let slideElements = [];

        SLIDES.forEach((slide, index) => {
            slideElements.push( React.createElement(slide, {key: index, slideNum: index+1, currentSlideNum: this.state.currentSlideNum}) );
        });

        return (
            React.createElement('div', {}, slideElements)
        );

    }

    _onKeyUp(e) {

        console.log('onKeyUp', e);

        switch( e.keyCode ) {
            case 37: // left arrow
                this._onLeft();
                break;
            case 39: // right arrow
                this._onRight();
                break;
        }
    }

    _onLeft() {

        console.log('Left');

        if( this.state.currentSlideNum > 1 ) {
            this.setState({currentSlideNum: this.state.currentSlideNum - 1});
        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

    _onRight() {

        console.log('Right');

        if( this.state.currentSlideNum < SLIDES.length ) {
            this.setState({currentSlideNum: this.state.currentSlideNum + 1});
        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

}

AppComponent.propTypes = {
    initialSlideNum: React.PropTypes.number
};

export default AppComponent;
