import React from "react";

// Actions
import TaskActions from "../../actions/tasks/TaskActions";

class TaskBox extends React.Component {
    sendTask(event) {
        event.preventDefault();
        TaskActions.sendTask(this.refs.taskTextArea.value,
                             this.refs.taskStartDate.value,
                             this.refs.taskEndDate.value)
        this.refs.taskTextArea.value = "";
        this.refs.taskStartDate.value = "";
        this.refs.taskEndDate.value = "";
    }
    render() {
        return (
            <div className="todos-box">
                <form onSubmit={this.sendTask.bind(this)}>
                    <input className="input-todo"
                           ref="taskTextArea"
                           placeholder="Add a TODO" />
                    <input className="input-date-todo"
                           type="date"
                           ref="taskStartDate" />
                    <input className="input-date-todo"
                           type="date"
                           ref="taskEndDate" />
                    <button className="button-todo"
                            type="submit">Save</button>
                </form>
            </div>
        );
    };
};

export default TaskBox;