import React, { Component } from 'react';
import '../assets/styles/List.css';
import { taskings } from '../data/task.json'
import Item from './Item';

class ToDoing extends Component {
  constructor(){
      super();
      this.state = {
          isActiveClass: true,
          taskings
      }
      
      this.addTasking = this.addTasking.bind(this);
      this.addActiveClass= this.addActiveClass.bind(this);
  }
    
  addActiveClass() {
        const currentState = this.state.isActiveClass;
        this.setState({ isActiveClass: !currentState });
    };

  addTasking(){
      let newTask = {
          description : this.refs.taskRef.value,
          type : "todoing"
      }
      this.setState({
          taskings : [...this.state.taskings, newTask]
      });
  }
    
  onDeleteTask = (task) => {
      if(window.confirm('Do you want to remove this task?')){
        let newArray = this.state.taskings.filter(tasking => tasking != task);
        this.setState({ taskings: newArray });
      }
    }
  
  render() {
    return (
        <div className="List">
            <header className="list-header">
                <h2>To Doing</h2>
            </header>
            <ul className="list-content">
               {this.state.taskings.filter(tasking => tasking.type == "todoing").map((item, index) =>(
                    <Item key={index} item={item} onDelete={this.onDeleteTask} />
                 ))} 
            </ul>
            <footer className="list-footer">
                <div onClick={this.addActiveClass} className={this.state.isActiveClass ? null : 'link-add'}>
                    <i>+</i><span> Add Task...</span>
                </div>
                <div className={this.state.isActiveClass ? 'add-form' : null}>
                    <textarea className="input-task" placeholder="Add Task..." ref="taskRef"></textarea>
                    <button className="addTask" onClick={this.addTasking}>Add Task</button>
                    <i onClick={this.addActiveClass} className="close-addTask">X</i>
                </div>
            </footer>
        </div>
    );
  }
}

export default ToDoing;
