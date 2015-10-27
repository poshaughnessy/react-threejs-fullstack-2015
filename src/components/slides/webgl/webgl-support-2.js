import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents webgl-support-2">
                <img src="/images/webgl-support-webglstats.png" alt="WebGL support graph"/>
                <p><strong>91%</strong> have support for WebGL - <a href="http://WebGLStats.com">WebGLStats.com</a></p>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
