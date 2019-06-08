import React from 'react';
import {connect} from "react-redux"
import {deleteTodo} from "../../store/actions/todoAction"

const TodoSummary = (props) => {
    const todo = props.todo;
    const handleClick = () => {
    props.deleteTodo(todo.id);
    }
    return (
        <div className="card pink darken-2">
             <div className="card-content white-text">
                <i onClick={()=>{handleClick()}} className="medium material-icons right">close</i>
                <span className="card-title">{todo.title}</span>
                <p>{todo.todo}</p>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoSummary);

