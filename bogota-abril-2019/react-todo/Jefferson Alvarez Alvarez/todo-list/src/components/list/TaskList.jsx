import React from "react";

import Task from "./Task"

class TaskList extends React.Component {
    render() {
        let tasks =
            this.props.tasks.map(task => <Task key={task.id} {...task}/>);
        return (
            <ol>
                {tasks}
            </ol>
        );
    };
};

export default TaskList;
