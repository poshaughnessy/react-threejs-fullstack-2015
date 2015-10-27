import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents problem-3">
                <h2>I ended up with...</h2>
                <img src="/images/messy-code.png" alt="Messy code"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
