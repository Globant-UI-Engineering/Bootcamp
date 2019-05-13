import React from 'react';
import './Board.css';
import TaskCard from '../TaskCard/TaskCard'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let taskList = this.props.taskList;
        const tasksToBoard = taskList.map((task,index) => {
            return (
                <TaskCard 
                    key={index}
                    title={task.title}
                    responsible={task.responsible}
                    description={task.description}
                    priority={task.priority}
                    taskState={task.taskState}
                    removeItSelf={() => this.props.removeTask(task, index)}
                    changeState={() => this.props.changeTaskState(task, index) }
                />
            );
        });

        return (
            <section className="row">
                {tasksToBoard}
            </section>
        );
    }
}

export default Board;