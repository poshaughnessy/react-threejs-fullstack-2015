import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>First Method</h2>
                <Highlight>
                        {`componentDidMount: function() {
    ...
    Scene.init(this);
}`}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
