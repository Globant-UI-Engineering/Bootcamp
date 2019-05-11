import { LIST_TASKS, ADD_TASK, DELETE_TASK } from '../Actions/types';


const initialState = {
    tasks: [
        'Hacer tarea de Patrones',
        'Hacer Ejercicio',
        'Llamar a Natalia'
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LIST_TASKS:
            return {
                ...state
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}