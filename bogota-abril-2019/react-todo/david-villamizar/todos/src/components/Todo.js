import PropTypes from "prop-types";
import React from "react";
import styles from "./Todo.module.css";

export default function Todo({
  checked,
  title,
  onCheckedChange,
  onTitleChange,
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
      </label>
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onTitleChange: PropTypes.func.isRequired,
  onCheckedChange: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  title: "",
  checked: false,
};
