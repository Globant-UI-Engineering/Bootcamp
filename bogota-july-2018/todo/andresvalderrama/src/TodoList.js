import React, { Component } from 'react'
import Todo from './Todo'

export default function ({ todos, toggleCompletedTodo }) {
    return (
      <section className="todo-list">
        <h2>Todo list</h2>
        <ul className="todo-list" onClick={toggleCompletedTodo} onKeyDown={toggleCompletedTodo}>
        {
          (todos.length) 
            ? todos.map(todo => <Todo key={todo.id} todo={todo} />)
            : <p className="todo-list-empty">There isn't nothing todo</p>
        }
        </ul>
      </section>
    )
} 