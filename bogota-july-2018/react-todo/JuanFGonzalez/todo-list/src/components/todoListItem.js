import React, { Component } from "react";

class TodoListItem extends Component {
  render() {
    let textClass = this.props.isChecked
      ? "todo-list-item-text todo-list-item-checked"
      : "todo-list-item-text";
    let closeClass = this.props.isChecked
      ? "todo-list-item-close todo-list-item-checked"
      : "todo-list-item-close";
    return (
      <div className="todo-list-item">
        <input
          className="todo-list-item-check"
          type="checkbox"
          onChange={this.props.onCheckClicked}
          checked={this.props.isChecked}
        />
        <span className={textClass}>{this.props.text}</span>
        <button
          className={closeClass}
          type="button"
          onClick={this.props.onCloseClicked}
          value="X"
        />
      </div>
    );
  }
}

export default TodoListItem;
