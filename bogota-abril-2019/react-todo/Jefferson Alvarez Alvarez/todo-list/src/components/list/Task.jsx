import React from "react";

// Actions
import TaskActions from "../../actions/tasks/TaskActions";

class Task extends React.Component {
    checkTask(id) {
        TaskActions.checkTask(id)
    }
    deleteTask(id) {
        TaskActions.deleteTask(id)
    }
    render() {
        return (
            <li onClick={() => this.checkTask(this.props.id)}>
                <p className={this.props.isDone ? "through text-todo" :
                                                  "text-todo"}>
                    Task: {this.props.text}
                    <br/>
                    From: {this.props.stDate}
                    <br/>
                    To:{this.props.endDate}
                </p>
                <button className="remove-todo button-remove"
                        onClick={() => this.deleteTask(this.props.id)}>
                        Remove
                </button>
            </li>
        );
    };
};

export default Task;
