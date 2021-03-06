import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents webgl-logo">
                <img src="/images/webgl-logo.svg" alt="WebGL logo"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
