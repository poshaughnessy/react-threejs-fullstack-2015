import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents how">
                <h2>Three.js with React?</h2>
                <img src="/images/apoc.png" alt="Project Apoc"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
