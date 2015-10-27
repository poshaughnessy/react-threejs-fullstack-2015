import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents code-links">
                <h2>Code</h2>
                <p className="demo-link">Robot demo: <a href="https://github.com/poshaughnessy/react-three-demo">bit.ly/react-three-demo-code</a></p>
                <p className="slides-link">Slides: <a href="https://github.com/poshaughnessy/react-threejs-fullstack-2015">bit.ly/react-three-slides-code</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
