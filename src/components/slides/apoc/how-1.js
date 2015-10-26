import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        // TODO if time, replace image with working in-place demo?
        return (
            <div className="contents how">
                <h2>How would you develop this?</h2>
                <img src="/images/apoc.png" alt="Project Apoc"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
