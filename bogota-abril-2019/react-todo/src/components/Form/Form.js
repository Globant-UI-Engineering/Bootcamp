import React from 'react';
import {Link} from 'react-router-dom';
import './Form.css';
import { connect } from 'react-redux';

class TaskForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this); 

    }

    handleChange(event){
        this.setState({
            task: event.target.value
        });
    }

    render(){
        return(
            <section>
                <label className="taskLabel" htmlFor="taskInput">Task: </label>
                <input id="taskInput" className="newTask" type="text"  placeholder="Insert your new task here" onChange={this.handleChange} />
                <Link to= {`/taskList`}>
                <button title="Save" className="createTaskButton" value={this.state.task} onClick={this.createNewTask.bind(this)}>
                    Save
                </button>
                </Link>
            </section>
        )
    }

    createNewTask(event){
        var dataTask = event.target.value;
        this.props.dispatch({
            type: 'ADD_TASK',
            payload:{
                    description: dataTask,
                    done: false
            }
        })
    }
}

export default connect()(TaskForm);