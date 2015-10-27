import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents problem-1">
                <h2>Don't forget to stop!</h2>
                <Highlight className='javascript'>
                        {`// reactComponent.js
componentWillUnmount: function() {

   ThreejsScene.dispose();

}

// threejsScene.js
this.dispose = function() {

    cancelAnimationFrame(this.rafId);

    this.camera = null;
    this.scene = null;
    this.renderer = null;
    ...
}
`}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
