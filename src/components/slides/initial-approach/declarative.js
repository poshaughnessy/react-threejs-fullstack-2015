import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>How about we used the same declarative style as React?</h2>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
