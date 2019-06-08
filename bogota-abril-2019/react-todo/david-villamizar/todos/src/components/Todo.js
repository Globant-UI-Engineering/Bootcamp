import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../store/actions";
import styles from "./Todo.module.css";

function Todo({
  id,
  checked,
  title,
  onCheckedChange,
  onTitleChange,
  onDelete,
}) {
  return (
    <li className={styles.todo}>
      <label>
        <div className={styles.checkContainer}>
          <input
            name="check"
            type="checkbox"
            checked={checked}
            onChange={e => onCheckedChange(e.target.checked, e)}
          />
          <span className={styles.checkToggle} />
        </div>
        <input
          type="text"
          value={title}
          onChange={e => onTitleChange(e.target.value, e)}
        />
        <button onClick={e => onDelete(id)}>X</button>
      </label>
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  checked: PropTypes.bool,
  onTitleChange: PropTypes.func.isRequired,
  onCheckedChange: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  title: "",
  checked: false,
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(
  undefined,
  mapDispatchToProps,
)(Todo);
