import PropTypes from "prop-types";
import React from "react";
import styles from "./Todo.module.css";

export default function Todo({
  checked,
  title,
  onChangeChecked,
  onChangeTitle,
}) {
  return (
    <div className={styles.todo}>
      <label>
        <div className={styles.checkContainer}>
          <input
            name="check"
            type="checkbox"
            checked={checked}
            onChange={e => onChangeChecked(e.target.checked, e)}
          />
          <span className={styles.checkToggle} />
        </div>
        <input
          type="text"
          value={title}
          onChange={e => onChangeTitle(e.target.value, e)}
        />
      </label>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeChecked: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  title: "",
  checked: false,
};
