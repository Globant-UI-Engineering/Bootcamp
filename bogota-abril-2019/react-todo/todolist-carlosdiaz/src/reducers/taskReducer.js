import { ADD_TASK , DELETE_TASK, ADD_DELETED_TASK, CLEAR_TASKS, GET_TASKS, GET_DELETED_TASKS} from '../actions/type';

const initialState = {
    tareas : [],
    eliminadas : []
};

export default function(state = initialState, action){
    switch (action.type){
        case GET_TASKS:
            return{
                ...state
            }
        case GET_DELETED_TASKS:
            return{
                ...state
            }
        case ADD_TASK:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }
        case DELETE_TASK:
            return{
                ...state,
               tareas : state.tareas.filter( tarea => tarea.id !== action.payload)
            }
        case ADD_DELETED_TASK:
            return{
                ...state,
                 eliminadas : [...state.eliminadas, action.payload]
            }
        case CLEAR_TASKS:
            return{
                ...state,
                eliminadas : []
            }
        default:
         return state;
    }

}