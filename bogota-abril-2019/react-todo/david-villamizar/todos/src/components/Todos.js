import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addTodo, setChecked, setTitle } from "../store/actions";
import Todo from "./Todo";
import styles from "./Todos.module.css";
import { FILTER_FUNCTIONS } from "./TodosFilterFunctions";

function Todos({
  todos,
  filterType,
  onCheckedChange,
  onTitleChange,
  onAddTodo,
}) {
  return (
    <>
      <ul className={styles.todos}>
        {todos
          .filter(FILTER_FUNCTIONS[filterType])
          .map(({ id, checked, title }) => (
            <Todo
              key={id}
              checked={checked}
              title={title}
              onCheckedChange={e => onCheckedChange(id, e)}
              onTitleChange={e => onTitleChange(id, e)}
            />
          ))}
      </ul>
      <button onClick={onAddTodo}>Add To Do</button>
    </>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ),
  filterType: PropTypes.string.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (id, value) => {
      dispatch(setTitle(id, value));
    },
    onCheckedChange: (id, value) => {
      dispatch(setChecked(id, value));
    },
    onAddTodo: () => {
      dispatch(addTodo());
    },
  };
};

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Todos),
);

export default VisibleTodoList;
