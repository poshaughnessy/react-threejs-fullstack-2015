import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents problem-2">
                <h2>Re-using textures error</h2>
                <h4>To avoid: reload everything (incl. textures) or retain the whole &lt;canvas&gt;</h4>
                <img src="/images/webgl-context-bug.png" alt="WebGL context bug"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
