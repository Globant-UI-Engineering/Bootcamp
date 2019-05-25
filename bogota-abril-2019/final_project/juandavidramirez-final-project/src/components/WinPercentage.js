import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { LinearProgress, Tooltip } from "@material-ui/core";

class WinPercentage extends React.Component {
  calculatesPercentage = (wins, losses) => {
    return Math.round((wins / (wins + losses)) * 100);
  };
  render() {
    const { wins, losses } = this.props;

    const percentage = this.calculatesPercentage(wins, losses);

    return (
      <Tooltip
        title={`${wins}/${losses} ${percentage}%`}
        placement={"bottom-start"}
        enterDelay={300}
      >
        <LinearProgress
          className="linear-progress-bar"
          variant="determinate"
          value={percentage}
        />
      </Tooltip>
    );
  }
}

export default WinPercentage;
