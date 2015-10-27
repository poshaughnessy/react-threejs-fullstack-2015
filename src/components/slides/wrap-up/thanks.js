import React from 'react';
import composeSlide from '../../compose-slide';
import * as Constants from '../../../constants';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents thanks">
                <h1>Thanks!</h1>
                <div>
                    <p className="github"><a href="https://github.com/poshaughnessy">github.com/poshaughnessy</a></p>
                </div>
                <div>
                    <p className="twitter"><a href="https://twitter.com/poshaughnessy">@poshaughnessy</a></p>
                </div>
                <div className="hiring">
                    <p><em>We're hiring full-stack JS developers!</em></p>
                    <p><a href="http://pebblecode.com/careers/">pebblecode.com/careers/</a></p>
                </div>
            </div>
        );

    }

}

export default composeSlide(SlideContents, Constants.COLOURS.PEBBLE_CODE_PINK);
