import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents the-problem">
                <h3>Let's Go From This...</h3>
                <img src="/images/Active_Margin.svg" alt="Active margin plate tectonics diagram"/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
