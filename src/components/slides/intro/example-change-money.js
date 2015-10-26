import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents changemoney">
                <video src="/videos/changemoney.mp4" controls/>
                <p className="caption"><a href="http://changemoney.org">changemoney.org</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
