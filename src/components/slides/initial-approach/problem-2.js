import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents problem-2">
                <h2>Reload everything (incl. textures) or retain the whole &lt;canvas&gt;</h2>
                <img src="/images/webgl-context-bug.png" alt="WebGL context bug"/>
                <p className="caption"><em>After changing page - I had re-initialised Three.js scene without reloading textures</em></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
