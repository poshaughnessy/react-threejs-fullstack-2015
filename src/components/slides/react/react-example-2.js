import React from 'react';
import Highlight from 'react-highlight';
import composeSlide from '../../compose-slide';
import ToDoList from './to-do-list-demo';

class SlideContents extends React.Component {

    render() {

        return (
            <div className="contents top to-do-list-code">
                <Highlight className="javascript">
                {`var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h2>Peter's To Do List</h2>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});
                `}
                </Highlight>
            </div>
        );

    }

}

export default composeSlide(SlideContents);
