import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents webgl-support-1">
                <h2>WebGL Support</h2>
                <img src="/images/webgl-support-caniuse.png" alt="WebGL support chart"/>
                <p className="caption"><span className="yellow-green"></span> = depends on graphics card / drivers</p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
