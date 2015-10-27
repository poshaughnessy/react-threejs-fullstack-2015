import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>Summary</h2>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
