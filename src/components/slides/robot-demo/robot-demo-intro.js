import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>Robot Demo Time</h2>
            </div>
        );

    }

}

console.log('SlideContents', SlideContents);

export default composeSlide(SlideContents);
