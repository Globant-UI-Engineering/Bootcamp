import React, { Component } from 'react'; 
import './App.css';

import TodosList from './todosList';

const toDos = [
  {
    task: 'Make react tutorial',
    isCompleted: true
  },
  {
    task: 'Complete CSS tutorial',
    isCompleted: false
  }
];


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      toDos
    }
  }


  render() {
    return (
      <div className="App">
        <TodosList   todos ={ this.state.toDos }/>
      </div>
    );
  }
}

export default App;