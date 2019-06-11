import { ADD_TASK , DELETE_TASK, ADD_DELETED_TASK, CLEAR_TASKS, GET_TASKS, GET_DELETED_TASKS} from './type';

export const getTasks = () => {
    return{
        type: GET_TASKS
    }
}

export const getDeletedTasks = () => {
    return{
        type:GET_DELETED_TASKS
    }
}

export const addTask = (task) =>{
    return{
        type: ADD_TASK,
        payload: task
    }
}


export const deleteTask =(id) => {
    return{
        type: DELETE_TASK,
        payload: id
    }
}

export const addDeletedTask = (deleted) =>{
    return{
        type : ADD_DELETED_TASK,
        payload : deleted
    }
}

export const clearTasks = () =>{
    return{
        type : CLEAR_TASKS,
    }
}