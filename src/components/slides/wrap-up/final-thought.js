import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents final-thought">
                <h1>Let's build better user interfaces</h1>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
