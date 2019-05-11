import React, { Component } from 'react'
import './taskComponent.css'


import { connect } from 'react-redux';
import { deleteTask } from '../Actions/taskActions';

class TaskComponent extends Component {

    deleteTask = () => {
        debugger
        this.props.deleteTask(this.props.children);
    }

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }

        this.stateCheckEvent = this.stateCheckEvent.bind(this);
    }

    render() {
        return (
            <div className="container">
                <input type="checkbox" value={this.state.checked} onChange={this.stateCheckEvent}></input>
                <p className={this.state.checked ? 'checkedStyle' : ''}>{this.props.children}</p>
                <button onClick={this.deleteTask}>X</button>
            </div>
        )
    }

    stateCheckEvent(event) {
        this.setState({
            checked: !this.state.checked,
        })
    }
}

export default connect(null, { deleteTask })(TaskComponent);