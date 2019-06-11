import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tasks = [];
const CHANGE_EVENT = "CHANGE";

class TaskEventEmitter extends EventEmitter {
    getAll() {
        return _tasks;
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
};

let TaskStore = new TaskEventEmitter();

AppDispatcher.register(action => {
    let task, index;
    switch(action.actionType) {
        case ActionTypes.RECEIVED_TASKS:
            _tasks = action.rawTasks;
            TaskStore.emitChange();
            break;
        case ActionTypes.RECEIVED_ONE_TASK:
            _tasks.unshift(action.rawTask);
            TaskStore.emitChange();
            break;
        case ActionTypes.CHECKED_ONE_TASK:
            task = _tasks.find(task => task.id === action.id);
            index = _tasks.indexOf(task);
            if(index > -1) {
                _tasks[index].isDone = !_tasks[index].isDone;
                TaskStore.emitChange();
            }
            break;
        case ActionTypes.DELETED_ONE_TASK:
            task = _tasks.find(task => task.id === action.id);
            index = _tasks.indexOf(task);
            _tasks.splice(index, 1);
            TaskStore.emitChange();
            break;
        default:
            // Nothing to do
    }
});

export default TaskStore;