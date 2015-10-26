import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents apoc">
                <h3>...To This</h3>
                <video src="/videos/apoc-demo.mp4" poster="/images/project-apoc-screengrab.png" controls/>
                <p className="caption"><a href="http://labs.pearson.com/prototypes/apoc/">labs.pearson.com/prototypes/apoc/</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
