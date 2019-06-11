import { connect } from 'react-redux'
import { toggleTodo, makeTodoEditable, makeTodoNotEditable, editTodo, deleteTodo, Visibilities } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Visibilities.DISPLAY_ALL:
      return todos;
    case Visibilities.DISPLAY_COMPLETED:
      return todos.filter(t => t.completed);
    case Visibilities.DISPLAY_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return [];
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibleTodos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    },
    makeTodoEditable: (id) => {
        dispatch(makeTodoEditable(id));
    },
    makeTodoNotEditable: (id) => {
        dispatch(makeTodoNotEditable(id));
    },
    onEditTodo: (id, newText) => {
        dispatch(editTodo(id, newText));
    },
    onDeleteTodo: (id) => {
        dispatch(deleteTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;