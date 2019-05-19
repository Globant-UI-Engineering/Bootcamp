import { actions } from '../actions/addTodoAction';

const initialState = {
  todos: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO: {
      const { title, description } = action.todo;
      let itemId = 0;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: itemId++,
            title: title,
            description: description,
            complete: false,
          },
        ],
      };
    }
    case actions.TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos
          .filter((todo) => todo.id === id)
          .map((todo) => {
            return {
              id: todo.id,
              title: todo.title,
              description: todo.description,
              complete: !todo.complete,
            };
          }),
      };
    }
    default: {
      return state;
    }
  }
}
