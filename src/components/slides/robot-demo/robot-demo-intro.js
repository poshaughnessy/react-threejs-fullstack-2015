import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h1>Robot Demo Time</h1>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
