import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <Highlight>
                        {`render: function() {

    return <Scene width={this.props.width}
                  height={this.props.height}
                  camera=\'mainCamera\'>

        <PerspectiveCamera name=\'mainCamera\'
                           {...cameraProps}/>

        <Robot {...this.props.robotData}/>

    </Scene>
}`}
                </Highlight>
            </div>
        );

    }

}

console.log('SlideContents', SlideContents);

export default composeSlide(SlideContents);
