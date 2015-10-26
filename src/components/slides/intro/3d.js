import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents threed">
                <h2>Hello, 3rd dimension</h2>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
