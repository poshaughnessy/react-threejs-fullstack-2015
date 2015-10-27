import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents webgl-support-1">
                <h2>WebGL Support</h2>
                <img src="/images/webgl-support-caniuse.png" alt="WebGL support chart"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
