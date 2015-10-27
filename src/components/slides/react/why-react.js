import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents why-react">
                <h2>Why React?</h2>
                <ul>
                    <li><strong>Declarative:</strong> simpler code</li>
                    <li><strong>Reactive:</strong> updates with your data</li>
                    <li><strong>Modular:</strong> components encourage it</li>
                    <li><strong>Fast:</strong> by default (Virtual DOM)</li>
                    <li><strong>Universal:</strong> server-side rendering</li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
