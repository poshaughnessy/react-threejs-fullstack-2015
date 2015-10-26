import React from 'react';

/**
 * TODO this has ended up being pretty useless now. I could probably ditch it...
 */
let composeSlide = (ChildComponent, backgroundColour) => {

    class Slide extends React.Component {

        constructor() {
            super();
        }

        render() {

            let style = {};

            if( backgroundColour ) {
                style.backgroundColor = backgroundColour;
            }

            return (
                <div className="slide" style={style}>
                    <ChildComponent/>
                </div>
            );

        }

    }

    Slide.propTypes = {
        style: React.PropTypes.object
    };

    return Slide;

};

export default composeSlide;
