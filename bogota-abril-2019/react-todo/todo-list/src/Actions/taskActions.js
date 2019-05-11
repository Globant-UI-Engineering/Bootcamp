import { GET_TASKS, CREATE_TASK, DELETE_TASK } from './types';

export const getTasks = (id) => {
    return {
        type: GET_TASKS,
        payload:id
    }
}

export const createTask = (task,id) => {
    return {
        type: CREATE_TASK,
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