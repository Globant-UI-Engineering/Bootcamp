import React from "react";

import { Tooltip } from "@material-ui/core";

import "./ProgressBar.css";

class ProgressBar extends React.Component {
  calculatePercentage = (value, total) => {
    return Math.round((value / total) * 100);
  };

  render() {
    const { value, total, type } = this.props;

    const percentage = this.calculatePercentage(value, total);

    var label = "";

    if (type === "percentage") {
      label = value + "/" + (total - value) + " " + percentage + "%";
    } else if (type === "value") {
      label = value;
    }

    return (
      <Tooltip title={label} placement={"bottom-start"} enterDelay={300}>
        <div
          role="progressbar"
          aria-valuenow={percentage}
          className="linear-progress-bar"
          variant="determinate"
          value={percentage}
        >
          <div
            className="progress-bar-child"
            style={{ transform: `scaleX(${percentage / 100})` }}
          />
        </div>
      </Tooltip>
    );
  }
}

export default ProgressBar;
