import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
//import './main.css';

import TodoForm from '../todo-form';
import TodoListView from '../todo-view';

class Todo extends Component {
    render() {
        return (
            <Row>
                <Col xs="12" md="6" lg="6">
                    <TodoForm />
                </Col>
                <Col xs="12" md="6" lg="6">
                    <TodoListView />
                </Col>
            </Row>
        );
    }
}

export default Todo;