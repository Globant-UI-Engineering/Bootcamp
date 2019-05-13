import React from 'react';

// Tasks
import TaskBox from "./components/list/TaskBox";
import TaskList from "./components/list/TaskList";
import TaskStore from "./stores/TaskStore";

// Actions
import TaskActions from "./actions/tasks/TaskActions";

TaskActions.getAllTasks();

let getAppState = () => {
    return { tasksList: TaskStore.getAll() }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        TaskStore.addChangeListener(this._onChange)
    }
    componentWillUnmount() {
        TaskStore.removeChangeListener(this._onChange)
    }
    _onChange() {
        this.setState(getAppState());
    }
    render() {
        return (
            <div>
                <TaskBox />
                <TaskList tasks={this.state.tasksList}/>
            </div>
        );
    };
};

export default App;
