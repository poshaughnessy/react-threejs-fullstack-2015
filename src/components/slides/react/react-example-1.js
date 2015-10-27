import React from 'react';
import composeSlide from '../../compose-slide';
import ToDoList from './to-do-list-demo';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents to-do-list-example">
                <ToDoList/>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
