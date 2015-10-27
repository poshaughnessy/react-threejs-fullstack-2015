import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents declarative">
                <h2>Can we combine the two in a better way?</h2>
                <ul>
                    <li>Declarative 3D scene</li>
                    <li>Driven by React state/props</li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
