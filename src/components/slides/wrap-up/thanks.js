import React from 'react';
import composeSlide from '../../compose-slide';
import * as Constants from '../../../constants';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents thanks">
                <h1>Thanks!</h1>
                <p className="twitter"><a href="https://twitter.com/poshaughnessy">@poshaughnessy</a></p>
                <div className="hiring">
                    <p><em>We're hiring!</em></p>
                    <p><a href="http://pebblecode.com/careers/">pebblecode.com/careers/</a></p>
                </div>
            </div>
        );

    }

}

export default composeSlide(SlideContents, Constants.COLOURS.PEBBLE_CODE_PINK);
