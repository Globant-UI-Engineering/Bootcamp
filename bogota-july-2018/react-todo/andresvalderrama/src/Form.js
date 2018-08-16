import React from 'react'

export default function (props) {
    return (
      <form onSubmit={props.handleOnSubmit}>
        <div>
          <label htmlFor="add-todo">Add new todo</label>
          <input type="text" id="add-todo" autoFocus/>
        </div>
        <div>
          <button> Create Todo</button>
        </div>
      </form>
    )
}