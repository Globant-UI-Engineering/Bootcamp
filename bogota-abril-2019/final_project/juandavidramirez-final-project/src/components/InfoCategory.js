import React from "react";
import ProgressBar from "./ProgressBar";
import animate from "@jam3/gsap-promise";
import { findDOMNode } from "react-dom";

class InfoCategory extends React.Component {
  componentDidMount() {
    animate.from(this.progressBar, 0.9, { width: 0, delay: 0.2 });
  }
  render() {
    const { label, value } = this.props;
    return (
      <div>
        <p>{label}</p>
        <div>
          <ProgressBar
            value={value}
            total={10}
            type="value"
            ref={progressDiv => (this.progressBar = findDOMNode(progressDiv))}
          />
        </div>
      </div>
    );
  }
}

export default InfoCategory;
