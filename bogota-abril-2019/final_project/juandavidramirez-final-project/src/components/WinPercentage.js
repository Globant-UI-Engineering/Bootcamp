import React from "react";

class WinPercentage extends React.Component {
  calculatesPercentage = (wins, losses) => {
    return Math.round((wins / (wins + losses)) * 100);
  };
  render() {
    const { wins, losses } = this.props;

    return (
      <div>
        <p>
          {wins}/{losses} <span>{this.calculatesPercentage(wins, losses)}</span>
          <span>%</span>
        </p>
      </div>
    );
  }
}

export default WinPercentage;
