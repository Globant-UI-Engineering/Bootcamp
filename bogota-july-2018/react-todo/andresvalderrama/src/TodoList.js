import React from 'react'
import Todo from './Todo'

function filterTodos(todos, filter) {
  const filters = {
    'active': todos.filter(todo => !todo.completed),
    'completed': todos.filter(todo => todo.completed),
    'default': todos
  }

  if (filters[filter]) return filters[filter]
  return filters['default']
}

export default function ({ todos, toggleCompletedTodo, match }) {
  let todosFiltered = filterTodos(todos, match.params.filter)

  return (
    <section className="todo-list">
      <h2>Todo list</h2>
      <ul className="todo-list" onClick={toggleCompletedTodo} onKeyDown={toggleCompletedTodo}>
        {(todosFiltered.length)
          ? todosFiltered.map(todo => <Todo key={todo.id} todo={todo} />)
          : <p className="todo-list-empty">There isn't nothing todo</p>
        }
      </ul>
    </section>
  )
} 