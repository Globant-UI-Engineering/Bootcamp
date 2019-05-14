import React from 'react';

const Todos = ({ todos }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.task}</span>
        </div>
      )
    })
  ) : (
      <p className="center">No to-do 's left</p>
    )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;