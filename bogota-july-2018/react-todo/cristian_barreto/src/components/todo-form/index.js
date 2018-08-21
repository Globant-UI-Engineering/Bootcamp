import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todo-actions';

import './main.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userToDoInput: '',
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmitFormAndClean = this.handleSubmitFormAndClean.bind(this);
    }

    handleChangeInput(e) {
        e.preventDefault();

        this.setState({
            userToDoInput: e.target.value,
        });
    }

    handleSubmitFormAndClean(e) {
        e.preventDefault();

        const { userToDoInput } = this.state;

        if (userToDoInput.trim() === '')
            return;

        this.props.dispatch(addTodo(userToDoInput));

        this.setState({ userToDoInput: '' });
    }

    render() {
        return (
            <Row className="todo-form">
                <form onSubmit={this.handleSubmitFormAndClean}>
                    <Col>
                        <label htmlFor="new-activity">New Activity</label>
                    </Col>
                    <Col>
                        <input
                            value={this.state.userToDoInput}
                            onChange={this.handleChangeInput}
                            className="new-activity-input"
                            name="new-activity"
                            type="text"
                            placeholder="Enter your new activity"
                        >
                        </input>
                    </Col>
                    <Col>
                        <button type="submit" className="new-activity-button">
                            Add
                        </button>
                    </Col>
                </form>
            </Row>

        );
    }
}

export default connect()(TodoForm);
