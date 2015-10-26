import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>react-three</h2>
                <blockquote>“React bindings to create and control a 3D scene using Three.js”</blockquote>
                <p><a href="https://github.com/Izzimach/react-three">github.com/Izzimach/react-three</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
