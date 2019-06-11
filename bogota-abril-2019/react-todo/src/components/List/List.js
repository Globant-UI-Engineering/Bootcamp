import React from 'react';
import './List.css';
import { connect } from 'react-redux';

class Listcomponent extends React.Component{
    render(){
      return(
        <ul className="task_list">
          {this.props.taskList.map((task,index) => <ReduxTaskContainer key={index} list={this.props.taskList} data={task}/> )}
        </ul>
      )
    }
  }
  
class Task extends React.Component{

    constructor(props){
      super(props);

      this.onChange = this.onChange.bind(this);
      this.searchTask = this.searchTask.bind(this);
      this.getClassName = this.getClassName.bind(this);
    }

    render(){
        var task = this.props.data;
        var idTask = "task" + task.description;

        var className = this.getClassName(task);
        return(
        <li className={className} >
            <input type="checkbox" id={idTask} onChange={this.onChange} checked={task.done} ></input>
            <label htmlFor={idTask} >{task.description}</label>
        </li>
        )
    }

    getClassName = (task) => (task.done) ?  "done_task" : "pending_task";

    onChange (){
      var newList = this.props.list.map((task) => this.searchTask(task))
      this.props.dispatch({
        type: 'CHANGE_CHECKED',
        payload:{
                listUpdated : newList
        }
    })
    }

    searchTask(task){ 
      if(task.description === this.props.data.description){
        task.done = !task.done
      }
      return task  
    }
}

var mapStateToProps = (state) => {
  return {
    taskList: state.list
  }
}

const ReduxListContainer = connect(mapStateToProps)(Listcomponent);
const ReduxTaskContainer = connect()(Task);

export default ReduxListContainer;