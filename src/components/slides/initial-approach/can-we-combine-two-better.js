import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents declarative">
                <h2>Can we combine them better?</h2>
                <ul>
                    <li>Declarative 3D scene</li>
                    <li>Driven by React's 'state'</li>
                    <li>One-way data flow</li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
