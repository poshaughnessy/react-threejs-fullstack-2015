import React from 'react';
import composeSlide from '../../compose-slide';
import * as Constants from '../../../constants';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents title">
                <h1>React &amp; Three.js</h1>
                <h2>React All The Things!</h2>
                <img src="/images/X-All-The-Y.png" alt="All the things"/>
                <p>Peter O'Shaughnessy</p>
                <img className="logo" src="/images/pebblecodelogo.png" alt="pebble {code} logo"/>
                <p className="twitter"><a href="https://twitter.com/poshaughnessy">@poshaughnessy</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents, Constants.COLOURS.PEBBLE_CODE_PINK);
