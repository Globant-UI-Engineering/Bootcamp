import { LIST_TASKS, ADD_TASK, DELETE_TASK } from './types';

export const listTasks = () => {
    return {
        type: LIST_TASKS
    }
}


export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload:task
    }
}