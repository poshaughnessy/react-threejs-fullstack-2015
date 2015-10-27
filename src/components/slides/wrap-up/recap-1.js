import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>Summary</h2>
                <ul>
                    <li>We're increasingly combining 2D &amp; 3D</li>
                    <li>React is great for UIs</li>
                    <li>Three.js is great for 3D</li>
                    <li>Combine them yourself, or use <a href="https://github.com/Izzimach/react-three">react-three</a></li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
