import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoForm from "./components/TodoForm/TodoForm";
import './App.css';
import logo from './logo.svg';
import Board from './components/Board/Board';
import utils from './Utils/utils'

import { taskList } from "./data/tasks.json";

class App extends React.Component {   
  constructor (props) {
    super(props);    
    this.state = {
      taskList: taskList.map(task => Object.assign({}, task, {id: utils.uniqueIdGenerator()})),
    }
    this.notificationRef = null;
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleStatusTask = this.handleStatusTask.bind(this);
    this.setNotificationRef = this.setNotificationRef.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
    this.showNotification = this.showNotification.bind(this);
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
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">To Do</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/doing">Doing</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/done">Done</Link>
                    </li>
                  </ul>
                </nav>
                <p 
                  className="alert alert-primary alert-dismissible fade show"
                  role="alert" 
                  ref={this.setNotificationRef}>
                    <strong>Nueva tarea Agregada!</strong> Se creó en la lista To Do.
                    <button 
                      type="button" 
                      className="close" 
                      data-dismiss="alert" 
                      aria-label="Close"
                      onClick={this.closeNotification}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                </p>
                <section>
                  <Route exact path="/" render={ (props) => 
                      <Board
                        {...props}
                        taskList={this.state.taskList}
                        removeTask={(taskId) => this.handleRemoveTask(taskId)}
                        changeTaskState={(taskId) => this.handleStatusTask(taskId)}
                        boardState={'Todo'}
                      />
                    }
                  />
                  <Route path="/doing" render={ (props) => 
                      <Board
                        {...props}
                        taskList={this.state.taskList}
                        removeTask={(taskId) => this.handleRemoveTask(taskId)}
                        changeTaskState={(taskId) => this.handleStatusTask(taskId)}
                        boardState={'Doing'}
                      />
                    } 
                  />
                  <Route path="/done" render={ (props) => 
                      <Board
                        {...props}
                        taskList={this.state.taskList}
                        removeTask={(taskId) => this.handleRemoveTask(taskId)}
                        changeTaskState={(taskId) => this.handleStatusTask(taskId)}
                        boardState={'Done'}
                      />
                    }
                  />                  
                </section>
              </Router>
            </main>
          </div>
        </section> 
        <footer>
          <p><strong>Design by:</strong>&nbsp;Marvin Cely</p>
        </footer>    
      </React.Fragment>
    )
  }

  handleAddTodo(task) {
    let newTask = Object.assign({}, task, {id: utils.uniqueIdGenerator()});
    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
    this.showNotification();
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
          task.taskState = utils.nextTaskState(task.taskState);
        }
    });

    this.setState({
      taskList: newTaskList,
    });
  }

  setNotificationRef = (element) => this.notificationRef = element;

  closeNotification = () => this.notificationRef.style.display = 'none';
  showNotification = () => {
    this.notificationRef.style.display = 'block';
    setTimeout(() => {
      this.closeNotification(); 
    },3000);
  }
}

export default App;
