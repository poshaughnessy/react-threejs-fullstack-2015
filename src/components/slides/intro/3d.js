import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents three-d">
                <h2>Hello, 3rd dimension!</h2>
                <img src="/images/apoc-wireframe.png" alt="Design for Project Apoc"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
