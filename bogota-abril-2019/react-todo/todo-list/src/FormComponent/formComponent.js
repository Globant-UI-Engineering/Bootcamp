import React, { Component } from 'react'
import './formComponent.css'

import { connect } from 'react-redux';
import { createTask } from '../actions/taskActions';

class FormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="formContainer">
                <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} ></input>
                <button onClick={this.handleClick}> + </button>
            </div>
        )
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleClick(event) {
        this.setState({
            clicked: !this.state.clicked
        }, function () {
            this.setState({
                inputValue: ''
            })
            this.props.createTask(this.state.inputValue,this.props.id);
        })
    }

}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps, { createTask })(FormComponent);