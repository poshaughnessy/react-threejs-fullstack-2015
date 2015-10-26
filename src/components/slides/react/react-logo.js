import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        // TODO if time, replace image with working in-place demo?
        return (
            <div className="contents react-logo">
                <img src="/images/react-logo.svg" alt="React logo"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
