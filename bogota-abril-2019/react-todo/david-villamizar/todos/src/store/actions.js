export const ADD_TODO = "ADD_TODO";
export const SET_TITLE = "SET_TITLE";
export const SET_CHECKED = "SET_CHECKED";
export const DELETE_TODO = "DELETE_TODO";
export const FILTER_TODOS = "FILTER_TODOS";

export const addTodo = () => ({ type: ADD_TODO });
export const setChecked = (id, value) => ({ type: SET_CHECKED, id, value });
export const setTitle = (id, value) => ({ type: SET_TITLE, id, value });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const filterTodos = filterFunction => ({
  type: FILTER_TODOS,
  filterFunction,
});
