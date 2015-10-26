import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents threejs-spinning-cube-intro">
                <h2>Quick Three.js example</h2>
                <img src="/images/spinning-cube-still.png" alt="ThreeJS cube example"/>
                <h3>Let's make a spinning cube</h3>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
