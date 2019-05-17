import React from 'react';
import './Board.css';
import TaskCard from '../TaskCard/TaskCard'

class Board extends React.Component {
    render() {
        let taskList = this.props.taskList.filter(task => task.taskState === this.props.boardState);
        const tasksToBoard = taskList.map((task) => {
            return (
                <TaskCard 
                    key={task.id}
                    title={task.title}
                    responsible={task.responsible}
                    description={task.description}
                    priority={task.priority}
                    taskState={task.taskState}
                    removeItSelf={() => this.props.removeTask(task.id)}
                    changeState={() => this.props.changeTaskState(task.id) }
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

Board.defaultProps = {
    boardState: 'Todo',
}

export default Board;