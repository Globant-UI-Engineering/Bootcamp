import { LIST_TASKS, ADD_TASK, DELETE_TASK } from './types';

export const listTasks = (id) => {
    return {
        type: LIST_TASKS,
        payload:id
    }
}

export const addTask = (task,id) => {
    return {
        type: ADD_TASK,
        payload: task,
        id:id
    }
}

export const deleteTask = (task,id) => {
    return {
        type: DELETE_TASK,
        payload: task,
        id:id
    }
}