import React from 'react';
import composeSlide from '../../compose-slide';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents 3d">
                <h2>Say hello to the 3rd dimension</h2>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
