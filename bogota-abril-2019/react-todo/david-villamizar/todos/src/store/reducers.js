import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, SET_CHECKED, SET_TITLE } from "./actions";

let lastId = 10;

function todos(
  state = Array(lastId)
    .fill(0)
    .map((v, i) => ({ id: i, checked: i % 2 === 0, title: `Task ${i}` })),
  action,
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: lastId++, checked: false, title: "" }];
    case SET_CHECKED:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, checked: action.value };
        }
        return todo;
      });
    case SET_TITLE:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, title: action.value };
        }
        return todo;
      });
    case DELETE_TODO:
      debugger;
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
});

export default todoApp;
