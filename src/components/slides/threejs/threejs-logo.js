import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents threejs-logo">
                <h2>three.js</h2>
                <img src="/images/threejs-org.png" alt="ThreeJS examples"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
