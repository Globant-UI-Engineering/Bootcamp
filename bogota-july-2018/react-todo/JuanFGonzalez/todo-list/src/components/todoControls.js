import React, { Component } from "react";

class TodoControls extends Component {
  render() {
    return (
      <div className="todo-controls">
        <input
          className="todo-new-task-input"
          value={this.props.text ? this.props.text : ""}
          onChange={this.props.onInputChange}
        />
        <button
          className="todo-add-button"
          type="button"
          onClick={this.props.onAddClicked}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoControls;
