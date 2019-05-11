import React, { Component } from 'react'
import './todoListComponent.css'
import TaskComponent from '../taskComponent/taskComponent.js';
import FormComponent from '../formComponent/formComponent.js'; 

import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
 
class TodoList extends Component {

    constructor(props) {
        super(props);
        props.getTasks(props.id);
    }

    render() {
        const tasks = this.props.tasks;

        return ( 
            <div className="listado">
                <FormComponent id={this.props.id} />
                <ul>
                    {tasks.map((task, index) => {
                        return <li key={index}>
                            <TaskComponent id={this.props.id}>{task}</TaskComponent>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps, { getTasks })(TodoList);