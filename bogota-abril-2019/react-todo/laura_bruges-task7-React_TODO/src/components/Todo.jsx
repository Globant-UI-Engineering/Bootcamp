import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({id, onClick, makeEditable, makeNotEditable, onEdit, onDelete, completed, editable, text }) => (
    <li
      onClick={ editable ?  null : () => onClick(id)}
      className={ editable ? 'editable' : completed ? 'completed': ''}
    >
        <span className='option delete' onClick={(event) => {event.stopPropagation(); onDelete(id); }}>X</span>
        <span className='option status' onClick={(event) => {event.stopPropagation(); makeEditable(id); }}>E</span>
        { editable ? 
            <input className='taskTitle' type='text' defaultValue={text} onKeyDown={(event) => { editTodo(event, id, onEdit, makeNotEditable) } }></input> :
            <span className='taskTitle'>{text}</span> 
        } 
    </li>
);

const editTodo = (event, id, onEdit, makeNotEditable) => {
    let key = event.key;
    switch(key) {
        case 'Enter':
            onEdit(id, event.target.value);
            makeNotEditable(id);
            break;
        case 'Escape':
            makeNotEditable(id);
            break;
        default:
            break;
    }
}
  
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    makeEditable: PropTypes.func.isRequired,
    makeNotEditable: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    editable: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
  
  export default Todo