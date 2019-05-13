import React from "react";
import PropTypes from 'prop-types';
import "./TodoItem.css";

const TodoItem = ({done, name}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={done}/>
            <label>{name}</label>
        </div>
    );
}

TodoItem.propTypes = {
    done: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default TodoItem;