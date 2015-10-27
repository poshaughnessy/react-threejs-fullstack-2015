import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents why-react">
                <h2>Why React?</h2>
                <ul>
                    <li>Simpler, declarative code</li>
                    <li>Components encourages modular code</li>
                    <li>Fast UIs by default (Virtual DOM)</li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
