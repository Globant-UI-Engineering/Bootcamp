export const actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

const addTodo = (title, description) => ({
  type: actions.ADD_TODO,
  todo: {
    title: title,
    description: description,
  },
});

export const addTodoToList = (title, description) => (dispatch) => {
  dispatch(addTodo(title, description));
};
