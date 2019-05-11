import React, { } from 'react'
import './todoListComponent.css'
import TaskComponent from '../TaskComponent/taskComponent.js';
import FormComponent from '../FormComponent/formComponent.js';

import { connect } from 'react-redux';
import { listTasks } from '../Actions/taskActions';

function TodoList(props) {
    props.listTasks(props.id);
    const tasks = props.tasks;
    return (
        <div className="listado">
            <FormComponent />
            <ul>
                {tasks.map((task,index) => {
                    return <li key={index}>
                        <TaskComponent>{task}</TaskComponent>
                    </li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps, { listTasks })(TodoList);