import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <Highlight className="javascript">
                        {`render: function() {

    return <Scene width={this.props.width}
                  height={this.props.height}
                  camera=\'mainCamera\'>

        <PerspectiveCamera name=\'mainCamera\'
                           {...cameraProps}/>

        <Cube {...this.props.cubeData}/>

    </Scene>
}`}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
