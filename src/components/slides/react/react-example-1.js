import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents react-example">
                <h2>[Example Here]</h2>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
