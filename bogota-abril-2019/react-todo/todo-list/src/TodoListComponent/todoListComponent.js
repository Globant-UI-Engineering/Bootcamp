import React, { } from 'react'
import './todoListComponent.css'
import TaskComponent from '../TaskComponent/taskComponent.js';
import FormComponent from '../FormComponent/formComponent.js';

function TodoList(props) {
    const tasks = Array.from(props.tasks);
    return (
        <div className="listado">
            <FormComponent/>
            <ul>
                {tasks.map(task => {
                    return <li><TaskComponent>{task}</TaskComponent></li>
                })}
            </ul>
        </div>
    )
}

export default TodoList