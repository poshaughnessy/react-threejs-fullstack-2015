import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>First Approach</h2>
                <Highlight className='javascript'>
                        {`// reactComponent.js
componentDidMount: function() {
    // Kick off 3D scene
    ThreejsScene.init( this.refs.canvas );
}

// threejsScene.js
this.init = function(canvas) {
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    …
    animate();
}`}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
