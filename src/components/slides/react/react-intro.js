import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents react-intro">
                <h2>What about the rest of the UI?</h2>
                <img src="/images/apoc.png" alt="Project Apoc"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
