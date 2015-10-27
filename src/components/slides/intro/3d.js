import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents three-d">
                <h1>Can't we do better?</h1>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
