import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import {
    visibilityFilters,
    toggleTodo,
    removeTodo,
    setTodoVisibilityFilter
} from '../../actions/todo-actions';

import './main.css';

const TodoViewFilters = ({ activeFilter, onChangeFilter }) => {

    return (
        <Row className="todo-actions">
            <Col
                className={activeFilter === visibilityFilters.SHOW_ALL ? "selected" : null}
                onClick={() => onChangeFilter(visibilityFilters.SHOW_ALL)}
            >
                All
            </Col>
            <Col
                className={activeFilter === visibilityFilters.SHOW_ACTIVE ? "selected" : null}
                onClick={() => onChangeFilter(visibilityFilters.SHOW_ACTIVE)}
            >
                Pending
            </Col>
            <Col
                className={activeFilter === visibilityFilters.SHOW_COMPLETED ? "selected" : null}
                onClick={() => onChangeFilter(visibilityFilters.SHOW_COMPLETED)}
            >
                Completed
            </Col>
        </Row>
    );
}

const TodoItem = ({ id, title, checked, onRemove, onCheck }) => {
    let itemClassName = "todo-list-item";

    if (checked)
        itemClassName += " item-checked";

    return (
        <Row className={itemClassName}>
            <Col>
                <p>{title}</p>
            </Col>
            <Col xs="2" md="2" lg="2">
                <input
                    className="action"
                    type="checkbox"
                    checked={checked}
                    onChange={() => onCheck(id)}>
                </input>
            </Col>
            <Col xs="2" md="2" lg="2">
                <button
                    className="action remove-action"
                    onClick={() => onRemove(id)}>
                    &#x2716;
                </button>
            </Col>
        </Row>
    );
}

class TodoListView extends Component {

    constructor(props) {
        super(props);

        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleToggleItem = this.handleToggleItem.bind(this);
        this.handleChangeView = this.handleChangeView.bind(this);
    }

    handleRemoveItem(id) {
        this.props.removeTodo(id);
    }

    handleToggleItem(id) {
        this.props.toggleTodo(id);
    }

    handleChangeView(filter) {
        this.props.setTodoVisibilityFilter(filter);
    }

    render() {
        const { todos, filter } = this.props;

        return (
            <div className="todo-list-view">
                <TodoViewFilters
                    activeFilter={filter}
                    onChangeFilter={this.handleChangeView}
                />
                <h3>Here your activities:</h3>
                {
                    todos.length ?
                        todos.map((item, index) =>
                            <TodoItem
                                key={item.id}
                                id={item.id}
                                title={item.text}
                                checked={item.checked}
                                onCheck={this.handleToggleItem}
                                onRemove={this.handleRemoveItem}
                            />
                        )
                        :
                        <p>Nothing to show in this section</p>
                }

            </div>
        );
    }
}

const sortToDoListByFilter = (todos, filter) => {

    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.checked)
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.checked)
        default:
            return todos
    }
}

const mapStateToProps = state => ({
    todos: sortToDoListByFilter(state.todos, state.toDoFilter),
    filter: state.toDoFilter
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
    setTodoVisibilityFilter: filter => dispatch(setTodoVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);