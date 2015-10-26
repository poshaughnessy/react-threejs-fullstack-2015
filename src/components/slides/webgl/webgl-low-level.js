import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents webgl-low-level">
                <h3>WebGL is very low-level</h3>
                <img src="/images/green-triangle.svg" alt="Green triangle"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
