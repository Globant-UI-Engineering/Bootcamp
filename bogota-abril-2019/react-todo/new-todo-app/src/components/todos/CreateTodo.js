import React, { Component } from 'react'
import {createTodo} from "../../store/actions/todoAction"
import {connect} from "react-redux"

class CreateTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            title:"",
            todo:"",  
        }
    }
    handleChange = (event) => {
        const {todos} = this.props;
        this.setState({
            id: todos.length+1,
            [event.target.id] : event.target.value
        })   
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo(this.state)
        this.props.history.push("/");
    } 
    render() {
        return (
            <article className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <button className="btn waves-effect waves-teal pink darken-2 right" id="save">save</button>
                    </div>
                    <h5 className="grey-text text-darken-3">New To Do</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input className="validate" type="text" id="title" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="todo">To-Do</label>
                        <textarea className="materialize-textarea validate" id="todo" onChange={this.handleChange} required/>
                    </div>
                </form>
            </article>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
