import React, { Component } from "react";

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
        [false, "Make bed"]
      ]
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClicked = this.onAddClicked.bind(this);
    this.onCheckClicked = this.onCheckClicked.bind(this);
    this.onCloseClicked = this.onCloseClicked.bind(this);
  }
  render() {
    return (
      <div className="App">
        <h3>React Todo List</h3>
        <TodoHeader />
        <TodoControls text={this.state.text} 
                      onInputChange={this.onInputChange} 
                      onAddClicked={this.onAddClicked} />
        <TodoList items={this.state.items} 
                  onCheckClicked={this.onCheckClicked} 
                  onCloseClicked={this.onCloseClicked} />
      </div>
    )
  }
}

export default App;
