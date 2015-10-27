import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents react-intro">
                <h1>What about the rest of the UI?</h1>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
