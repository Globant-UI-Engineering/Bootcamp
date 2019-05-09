import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }

    this.makeEditable = this.makeEditable.bind(this);
    this.updateStatus = this.updateStatus.bind(this); 
    this.editTaskTitle = this.editTaskTitle.bind(this);
  }

  makeEditable() {
    let editable = this.state.editable;
    this.setState({
      editable: !editable
    })    
  }

  updateStatus() {
    if(!this.state.editable) {
      this.props.onUpdateStatus(this.props.task);
    }  
  }

  editTaskTitle(event){
    let key = event.key;
    
    if(key === 'Enter') {
      this.props.onEdit(this.props.task, event.target.value);
      this.setState({
        editable: false
      });
    } else if(key === 'Escape') {
      this.setState({
        editable: false
      });
    }
  }

  render() {
    return <li onClick={this.updateStatus} className={ this.state.editable ? 'editable' : this.props.task.completed ? 'completed':''}>
      <span className='option delete' onClick={(event) => {event.stopPropagation(); this.props.onRemove(this.props.task)}}>X</span>
      <span className='option status' onClick={(event) => {event.stopPropagation(); this.makeEditable();}}>E</span>
      {this.state.editable ? <input className='taskTitle' type='text' defaultValue={this.props.task.title} onKeyDown={(event) => this.editTaskTitle(event) }></input> : <span className='taskTitle'>{this.props.task.title}</span> } 
    </li>;
  }   
}

let ToDoList = (props) => {
  return <ul>
    {props.children}
  </ul>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
    //TODO: move tasks to react proper event
    let tasks = [{
      title: 'Watch Netflix',
      completed: false
    },
    {
      title: 'Walk the dog',
      completed: false
    }];
    this.state = {
      tasks: tasks,
      displayedTasks: tasks,
      showAddInput: true
    }
    this.createTask = this.createTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.editTaskTitle = this.editTaskTitle.bind(this);
  }

  createTask(event) {
    if(event.key === 'Enter') {
      if(event.target.value && event.target.value.trim()) {
        let tasks = this.state.tasks;
        tasks.push({title: event.target.value, completed: false});
        this.setState({
          tasks: tasks
        });
        event.target.value = '';
      }      
    }
  }

  deleteTask(task) {
    let tasks = this.state.tasks.slice(0).filter((currTask) => currTask !== task);

    this.setState({
      tasks: tasks
    });
  }

  addTask() {
    let showAddInput = !this.state.showAddInput;
    this.setState({
      showAddInput: showAddInput
    });
  }

  updateTaskStatus(task) {
    let tasks = this.state.tasks.slice(0);    

    let targetTask = tasks.find((currTask) => currTask === task);
    targetTask.completed = !targetTask.completed;

    this.setState({
      tasks: tasks
    });
  }

  editTaskTitle(task, newTitle) {
    let tasks = this.state.tasks.slice(0);
    
    let targetTask = tasks.find((currTask) => currTask === task);
    targetTask.title = newTitle;
    
    this.setState({
      tasks: tasks
    });
  }

  render() {
    // TODO: show tasks accorting to completation status and add footer (react router after that)
    // TODO optional: edit task
    return (
      <BrowserRouter>
        <article className='container'>
          <header>
            <h1>To-do list <span onClick={this.addTask}>{this.state.showAddInput ? '-':'+'}</span></h1>
          </header>
          <section>
            <input type='text' className={this.state.showAddInput ? 'addTodo':'addTodo hidden'} placeholder='Add new to-do' onKeyDown={(event) => this.createTask(event)}></input>
          </section>
          <section>
            <ToDoList>
              {this.state.tasks.map((task) => {
                return <ToDoItem task={task} onUpdateStatus = {this.updateTaskStatus} onRemove = {this.deleteTask} onEdit = {this.editTaskTitle}/>;
              })}
            </ToDoList>
          </section>
          <footer>
              <Link to={'/'}>All</Link>
              <Link to={'/active'}>Active</Link>
              <Link to={'/completed'}>Completed</Link>
          </footer>
        </article>
      </BrowserRouter>      
    );
  }
}

export default App;
