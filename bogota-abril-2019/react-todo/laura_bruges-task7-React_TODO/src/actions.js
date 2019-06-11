export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_VISIBLE_TODOS = 'SET_VISIBLE_TODOS';
export const MAKE_TODO_EDITABLE = 'MAKE_TODO_EDITABLE';
export const MAKE_TODO_NOT_EDITABLE = 'MAKE_TODO_NOT_EDITABLE';

export const Visibilities = {
    DISPLAY_ALL: 'DISPLAY_ALL',
    DISPLAY_COMPLETED: 'DISPLAY_COMPLETED',
    DISPLAY_ACTIVE: 'DISPLAY_ACTIVE'
}

let currId = 0;

// ------ Action creators ------
export function addTodo(text) {
    const id = currId + 1;
    currId = id;
    return { type: ADD_TODO, id, text }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function deleteTodo(id) {
    return { type: DELETE_TODO, id }
}

export function makeTodoEditable(id) {
    return { type: MAKE_TODO_EDITABLE, id }
}

export function makeTodoNotEditable(id) {
    return { type: MAKE_TODO_NOT_EDITABLE, id }
}

export function editTodo(id, newText) {
    return { type: EDIT_TODO, id, newText }
}

export function setVisibleTodos(filter) {
    return { type: SET_VISIBLE_TODOS, filter }
}