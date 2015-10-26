import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents shapex">
                <video src="/videos/bodylabs.mp4" controls/>
                <p className="caption"><a href="http://shapex.bodylabs.com">shapex.bodylabs.com</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
