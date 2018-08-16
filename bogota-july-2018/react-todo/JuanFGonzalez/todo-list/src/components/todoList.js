import React, { Component } from "react";

import TodoListItem from "./todoListItem";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.items.map((items, i) => (
          <TodoListItem
            key={i}
            onCheckClicked={() => this.props.onCheckClicked(i)}
            onCloseClicked={() => this.props.onCloseClicked(i)}
            isChecked={items[0]}
            text={items[1]}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
