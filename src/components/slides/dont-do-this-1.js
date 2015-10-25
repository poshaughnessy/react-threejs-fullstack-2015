import React from 'react';
import composeSlide from '../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents">
                <h2>First Method</h2>
                <pre>
                    <code>
                        {'componentDidMount: function() {\n' +
                        '  ...\n' +
                        '  Scene.init(this);\n' +
                        '}'}
                    </code>
                </pre>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
