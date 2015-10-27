import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents all-the-things">
                <h2>React <em>All</em> The Things!</h2>
                <ul>
                    <li><a href="https://facebook.github.io/react-native/">React Native</a> for mobile apps</li>
                    <li><a href="https://github.com/Flipboard/react-canvas">React Canvas</a> for HTML5 &lt;canvas&gt;</li>
                    <li><a href="https://github.com/Izzimach/react-pixi">React Pixi</a> for Pixi.js (2D)</li>
                </ul>
                <img src="/images/X-All-The-Y.png" alt="All the things"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
