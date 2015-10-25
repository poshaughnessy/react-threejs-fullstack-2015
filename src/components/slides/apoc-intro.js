import React from 'react';
import composeSlide from '../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>Project Apoc</h2>
                <img src="/images/project-apoc-screengrab.png" width="80%" alt="Project Apoc screenshot"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
