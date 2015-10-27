import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents the-problem">
                <h3>How Do We Go From This...</h3>
                <img src="/images/Active_Margin.svg" alt="Active margin plate tectonics diagram"/>
                <p className="caption small"><a href="https://commons.wikimedia.org/wiki/File:Active_Margin.svg">Booyabazooka, Wikimedia</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
