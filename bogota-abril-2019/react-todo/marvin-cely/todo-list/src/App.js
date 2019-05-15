import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoForm from "./components/TodoForm/TodoForm";
import './App.css';
import logo from './logo.svg';
import Board from './components/Board/Board';
import utils from './Utils/utils'

import { taskList } from "./tasks.json";

class App extends React.Component {   
  constructor (props) {
    super(props);
    
    this.state = {
      taskList: taskList.map(task => Object.assign({}, task, {id: utils.uniqueIdGenerator()})),
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleStatusTask = this.handleStatusTask.bind(this);
  }

  rederBoard = (boardState) => {
    return(
      <Board
      taskList={this.state.taskList}
      removeTask={(taskId) => this.handleRemoveTask(taskId)}
      changeTaskState={(taskId) => this.handleStatusTask(taskId)}
      boardState={boardState}
      />
    );
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
              <Router>
                <nav>
                  <ul>
                    <li>
                      <Link to="/todo">To Do</Link>
                    </li>
                    <li>
                      <Link to="/doing">Doing</Link>
                    </li>
                    <li>
                      <Link to="/done">Done</Link>
                    </li>
                  </ul>
                </nav>
                <section>
                  {/* TODO: Realizar Router  */}
                  {/* <Route path="/todo" component={} />
                  <Route path="/doing" component={} />
                  <Route path="/done" component={} /> */}
                  {/* <Route component={props => <h1>Not Found</h1>} /> */}
                  <Board
                    taskList={this.state.taskList}
                    removeTask={(taskId) => this.handleRemoveTask(taskId)}
                    changeTaskState={(taskId) => this.handleStatusTask(taskId)}
                    boardState={'Todo'}
                  />
                </section>
              </Router>
            </main>
          </div>
        </section>     
      </React.Fragment>
    )
  }

  handleAddTodo(task) {
    let newTask = Object.assign({}, task, {id: utils.uniqueIdGenerator()});
    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
  };

  handleRemoveTask(taskId) {
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id !== taskId),
    });
  }

  handleStatusTask(taskId) {
    let newTaskList = this.state.taskList.slice();
    newTaskList.forEach(task => {
        if(task.id === taskId) {
          task.taskState = utils.nextTaskState(task.taskState);//TODO: Revizar actualización del boton!!!!
        }
    });

    this.setState({
      taskList: newTaskList,
    });
  }
}

export default App;
