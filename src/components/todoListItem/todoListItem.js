import React, { Component } from 'react';
import './todoListItem.css';

class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  handleLableClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  handleMarkImportant = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classes = 'todo-list-item';
    classes += done ? ' done' : '';
    classes += important ? ' important' : '';

    return (
      <span className={classes}>
        <span className="todo-list-item-label" onClick={this.handleLableClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.handleMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
