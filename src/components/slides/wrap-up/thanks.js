import React from 'react';
import composeSlide from '../../compose-slide';
import * as Constants from '../../../constants';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>Thanks!</h2>
                <p><a href="https://twitter.com/poshaughnessy">@poshaughnessy</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents, Constants.COLOURS.PEBBLE_CODE_PINK);
