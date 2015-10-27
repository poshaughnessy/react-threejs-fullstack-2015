import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>React All The Things!</h2>
                <ul>
                    <li><a href="https://facebook.github.io/react-native/">React Native</a></li>
                    <li><a href="https://github.com/Flipboard/react-canvas">React Canvas</a></li>
                    <li><a href="https://github.com/Izzimach/react-pixi">React Pixi</a></li>
                    <li>...</li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
