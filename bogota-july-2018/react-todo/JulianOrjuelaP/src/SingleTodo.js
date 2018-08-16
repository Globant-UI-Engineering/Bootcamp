import React from 'react';

const SingleTodo = props => {
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    )
}

export default SingleTodo;