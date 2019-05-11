import React, { Component } from 'react'
import './taskComponent.css'

class TaskComponent extends Component {

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
                <button>X</button>
            </div>
        )
    }

    stateCheckEvent(event) {
        this.setState({
            checked: !this.state.checked,
        })
    }
}

export default TaskComponent