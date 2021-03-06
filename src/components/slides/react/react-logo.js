import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents react-logo">
                <img src="/images/react-logo.svg" alt="React logo"/>
                <p>React</p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
