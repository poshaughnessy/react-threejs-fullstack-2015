import React from 'react';
import * as slides from './slides/index';

const SLIDES = [
    slides.Title,
    slides.ThreeDimensions,
    slides.ChangeMoneyExample,
    slides.BodyLabsExample,
    slides.WebGLSupport1,
    slides.WebGLSupport2,
    slides.ApocIntro,
    slides.DontDoThis1,
    slides.ReactThreeIntro,
    slides.ReactThreeExample1,
    slides.RobotDemo,
    slides.Thanks
];

class AppComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentSlideNum: props.initialSlideNum || 1
        };

        this._onKeyUp = this._onKeyUp.bind(this);
        this._onLeft = this._onLeft.bind(this);
        this._onRight = this._onRight.bind(this);

    }

    componentWillMount() {
        var hashTokens = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
        if( hashTokens.length > 0 ) {
            let firstToken = hashTokens[0];
            if( firstToken ) {

                try {
                    let slideNum = parseInt(firstToken);

                    if( slideNum > 0 ) {
                        console.log('Set page number from hash', slideNum);
                        this.setState({currentSlideNum: slideNum});
                    }
                } catch(err) {
                    console.error('Unable to parse hash token', firstToken, err);
                }


            }
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this._onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this._onKeyUp);
    }

    render() {

        window.location.hash = this.state.currentSlideNum;

        let slideElements = [];

        SLIDES.forEach((slide, index) => {
            slideElements.push( React.createElement(slide, {key: index, slideNum: index+1, currentSlideNum: this.state.currentSlideNum}) );
        });

        return (
            React.createElement('div', {}, slideElements)
        );

    }

    _onKeyUp(e) {

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

        if( this.state.currentSlideNum > 1 ) {
            this.setState({currentSlideNum: this.state.currentSlideNum - 1});
        }

    }

    _onRight() {

        if( this.state.currentSlideNum < SLIDES.length ) {
            this.setState({currentSlideNum: this.state.currentSlideNum + 1});
        }

    }

}

AppComponent.propTypes = {
    initialSlideNum: React.PropTypes.number
};

export default AppComponent;
