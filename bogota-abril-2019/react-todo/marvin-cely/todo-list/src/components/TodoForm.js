import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.AddTodo(this.state);
        // TODO: Create a message confirmation
    }

    render() {

    }
}

export default TodoForm;