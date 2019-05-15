import React, { Component } from "react";
import PropTypes from 'prop-types';
import store from "../store";
import "./TodoItem.css";

class TodoItem extends Component {

    constructor(props) {
        super();
        this.state = {
            name: props.name,
            checked: props.done
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" defaultChecked={this.state.checked} onClick={() => toggle(this)}/>
                <label>{this.state.name}</label>
            </div>
        );
    }
}

const toggle = (checkbox) => {
    store.dispatch({
        type: "TOGGLE",
        element: checkbox.props.name,
    });
}

TodoItem.propTypes = {
    done: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default TodoItem;