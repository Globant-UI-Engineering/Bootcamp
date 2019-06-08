import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
    return (
        <div className="list-container">
            {props.data.map((item, value) => {
                return (
                    <TodoItem key={value} done={item.done} name={item.name}></TodoItem>
                );
            })}
        </div>
    );
};

TodoList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
