import PropTypes from "prop-types";
import React from "react";
import styles from "./Todo.module.css";

export default function Todo(props) {
  return (
    <div className={styles.todo}>
      <label>
        <div className={styles.checkContainer}>
          <input
            name="check"
            type="checkbox"
            checked={props.checked}
            onChange={e => props.onChangeChecked(e.target.checked, e)}
          />
          <span className={styles.checkToggle} />
        </div>
        <input
          type="text"
          value={props.title}
          onChange={e => props.onChangeTitle(e.target.value, e)}
        />
      </label>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onChangeTitle: PropTypes.func,
  onChangeChecked: PropTypes.func,
};

Todo.defaultProps = {
  title: "",
  checked: false,
};
