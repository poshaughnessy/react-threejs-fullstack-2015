import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <Highlight className="javascript">
                        {`render: function() {
    …

    return React.createElement(
        ReactTHREE.Scene,
        {
            width: this.props.width,
            height: this.props.height,
            camera:'mainCamera'
        },
        MainCameraElement,
        React.createElement(Robot, this.props.robotData)
   );
}`}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
