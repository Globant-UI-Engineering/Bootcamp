import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, makeTodoEditable, makeTodoNotEditable, onEditTodo, onDeleteTodo }) => (
  <section>
    <ul>
      {todos.map((todo, index) => (
        <Todo key={ index } { ...todo } 
          onClick={ onTodoClick } 
          makeEditable={ makeTodoEditable } 
          makeNotEditable={ makeTodoNotEditable } 
          onEdit={ onEditTodo } 
          onDelete={ onDeleteTodo } 
        />
      ))}
    </ul>
  </section>
  
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      editable: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  makeTodoEditable: PropTypes.func.isRequired,
  makeTodoNotEditable: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default TodoList