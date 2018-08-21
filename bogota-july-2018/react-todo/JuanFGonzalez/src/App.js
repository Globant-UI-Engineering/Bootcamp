import React, { Component } from "react";

import "./App.css";
import TodoList from './components/todoList';
import TodoHeader from './components/todoHeader';
import TodoControls from './components/todoControls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      items: [
        [false, "Do homework"],
        [false, "Make dinner"],
        [false, "Do workout"]
      ]
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClicked = this.onAddClicked.bind(this);
    this.onCheckClicked = this.onCheckClicked.bind(this);
    this.onCloseClicked = this.onCloseClicked.bind(this);
  }

  onInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  onAddClicked(event) {
    if (this.state.text.trim() === "") {
      return;
    }
    let newItems = this.state.items.slice();
    newItems.push([false, this.state.text]);
    this.setState({
      text: "",
      items: newItems
    });
  }

  onCheckClicked(i) {
    let newItems = this.state.items.slice();
    newItems[i] = [!this.state.items[i][0], this.state.items[i][1]];
    this.setState({
      items: newItems
    });
  }

  onCloseClicked(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div className="App">
        <h2>React Todo List</h2>
        <TodoHeader />
        <TodoControls
          text={this.state.text}
          onInputChange={this.onInputChange}
          onAddClicked={this.onAddClicked}
        />
        <TodoList
          items={this.state.items}
          onCheckClicked={this.onCheckClicked}
          onCloseClicked={this.onCloseClicked}
        />
      </div>
    );
  }
}

export default App;
