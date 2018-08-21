import React, { Component } from 'react';

import Navbar from './components/navbar';
import List from "./components/list";
import Add from "./components/add";

class App extends Component {
  state = {
    tasks: [
      // { id: 1, value: 'Task1', selected: true },
      // { id: 2, value: 'Task2', selected: false },
      // { id: 3, value: 'Task3', selected: false },
      // { id: 4, value: 'Task4', selected: true }
    ]
  };

  addItem = newItem => {
    // console.log(newItem);
    // console.log('ArrInicial', this.state.tasks);
    this.state.tasks.push({
      id: this.state.tasks.length + 1,
      value: newItem.newItem,
      selected: false
    });
    this.setState({ tasks: this.state.tasks });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container shadow p-3 mb-5 rounded">
          <Add onAdd={this.addItem} />

          <List items={this.state.tasks} />
        </main >
      </React.Fragment>
    );
  }
}

export default App;
