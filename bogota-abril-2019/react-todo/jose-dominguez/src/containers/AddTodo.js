import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <input type="text" placeholder="What needs to be done?" ref={node => input = node} />
        </form>
    )
}

export default connect()(AddTodo)
