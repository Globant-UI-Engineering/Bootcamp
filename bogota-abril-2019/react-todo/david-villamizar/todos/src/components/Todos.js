import PropTypes from "prop-types";
import React from "react";
import Todo from "./Todo";
import { FILTER_FUNCTIONS } from "./TodosFilterFunctions";

export default function Todos({ todos, filterType }) {
  return todos.filter(FILTER_FUNCTIONS[filterType]).map(v => <Todo {...v} />);
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

Todos.defaultProps = {
  todos: Array(10)
    .fill(0)
    .map((v, i) => ({ title: `Task ${i}`, checked: i % 2 === 0 })),
};
