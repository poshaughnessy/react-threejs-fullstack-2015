import React from 'react';
import composeSlide from '../compose-slide';
import * as Constants from '../../constants';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h1>React &amp; Three.js</h1>
                <h2>React All The Things!</h2>
                <img src="/images/X-All-The-Y.jpg" alt="All the things"/>
                <p>Peter O'Shaughnessy</p>
            </div>
        );

    }

}

export default composeSlide(SlideContents, Constants.PEBBLE_CODE_PINK);
