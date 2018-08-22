import React from 'react'

export default function ({ todo, toggleCompletedTodo }) {
  let { id, text, completed } = todo
  let classNames = `todo-item ${completed ? 'completed' : ''}`
  return (
    <li id={id} className={classNames} tabIndex="0">{text}</li>
  )
}