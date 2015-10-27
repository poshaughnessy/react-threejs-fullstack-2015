import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';
import ToDoList from './to-do-list-demo';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents top to-do-list-code">
                <Highlight className="javascript">
                {`class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = {items: [], text: ''};
    }

    render() {

        let items = this.state.items.map(function(itemText, index) {
            return <li key={index}>{itemText}</li>;
        });

        return (
            <div>
                <h2>Peter's To Do List</h2>

                <ul>{items}</ul>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.text}
                           onChange={this.onInputChange.bind(this)}/>
                    <button>
                        {'Add #' + (this.state.items.length + 1)}
                    </button>
                </form>
            </div>
        );
    }

    onInputChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    }

}
                `}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
