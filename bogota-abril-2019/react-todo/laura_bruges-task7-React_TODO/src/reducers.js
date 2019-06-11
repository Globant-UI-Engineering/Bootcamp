import { 
   ADD_TODO,
   TOGGLE_TODO,
   SET_VISIBLE_TODOS,
   MAKE_TODO_EDITABLE,
   MAKE_TODO_NOT_EDITABLE,   
   EDIT_TODO,
   DELETE_TODO,
   Visibilities
} from './actions';
import { combineReducers } from 'redux';

const { DISPLAY_ALL } = Visibilities;

function visibleTodos(state = DISPLAY_ALL, action) {
    switch(action.type) {
        case SET_VISIBLE_TODOS:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    editable: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        case MAKE_TODO_EDITABLE:
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return Object.assign({}, todo, {
                        editable: true
                    })
                }
                return todo;
            });
        case MAKE_TODO_NOT_EDITABLE:
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return Object.assign({}, todo, {
                        editable: false
                    })
                }
                return todo;
            });
        case EDIT_TODO:
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return Object.assign({}, todo, {
                        text: action.newText
                    })
                }
                return todo;
            });
        
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibleTodos,
    todos
});

export default todoApp;