import React, { Component } from "react";

import TodoListItem from "./todoListItem";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.items.map((items, index) => (
          <TodoListItem
            key={index}
            onCheckClicked={() => this.props.onCheckClicked(index)}
            onCloseClicked={() => this.props.onCloseClicked(index)}
            isChecked={items[0]}
            text={items[1]}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
