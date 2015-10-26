import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        // TODO if time, replace image with working in-place demo?
        return (
            <div className="contents why-react">
                <h2>Why React?</h2>
                <ul>
                    <li>Simpler, declarative code</li>
                    <li>Fast UIs by default</li>
                </ul>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
