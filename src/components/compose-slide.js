import React from 'react';

let composeSlide = (ChildComponent, backgroundColour) => {

    class Slide extends React.Component {

        constructor() {
            super();
            this._isVisible = this._isVisible.bind(this);
        }


        _isVisible() {
            return this.props.currentSlideNum === this.props.slideNum
        }

        _getSlideClassName() {
            return 'slide ' + (this._isVisible() ? 'show' : 'hide');
        }

        render() {

            let style = {};

            if( backgroundColour ) {
                style.backgroundColor = backgroundColour;
            }

            return (
                <div className={this._getSlideClassName()} style={style}>
                    <ChildComponent/>
                </div>
            );

        }

    }

    Slide.propTypes = {
        currentSlideNum: React.PropTypes.number,
        slideNum: React.PropTypes.number,
        style: React.PropTypes.object
    };

    return Slide;

};

export default composeSlide;
