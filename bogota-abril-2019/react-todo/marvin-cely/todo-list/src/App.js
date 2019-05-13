import React from 'react';
import TodoForm from "./components/TodoForm/TodoForm";
import './App.css';
import logo from './logo.svg';
import Board from './components/Board/Board';

import { taskList } from "./tasks.json";


class App extends React.Component {   
  constructor (props) {
    super(props);
    
    this.state = {
      Todo: taskList,
      Doing: [],
      Done: [],
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleStatusTask = this.handleStatusTask.bind(this);
  }
  
  render () {
    return (
      <React.Fragment>
        <header>
          <h1>To Do List in React</h1>
        </header>
        <section className="container-fluid">
          <div className="row">
            <aside className="col-md-3">
              <img src={logo} className="App-logo" alt="logo"/>
              <TodoForm addTask={ this.handleAddTodo }/>
            </aside>
            <main className="col-md-9">
                <Board
                  taskList={this.state.Todo}
                  removeTask={(task, index) => this.handleRemoveTask(task, index)}
                  changeTaskState={(task, index) => this.handleStatusTask(task, index)}
                />
            </main>
          </div>
        </section>     
      </React.Fragment>
    )
  }

  handleAddTodo(newTask) {
    let task = Object.assign({}, newTask);
    this.setState({
      Todo: [...this.state.taskList, task],
    });
  };

  handleRemoveTask(oldTask, index) {
    this.setState({
      [oldTask.taskState]: this.state[oldTask.taskState].filter((task,i) => i !== index),
    });
  }

  handleStatusTask(oldTask, index) {
    this.handleRemoveTask(oldTask, index);
    let task = Object.assign({}, oldTask);
    this.setState({
      [task.taskState]: [...this.state.taskList, task],
    });
  }
}

export default App;
