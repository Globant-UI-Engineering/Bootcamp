import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, onDeleteClick }) => (
    <li
        onClick={onClick}
        className={completed ? 'completed' : ''}
    >
        {text}
        <span onClick={onDeleteClick}> &times;</span>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
