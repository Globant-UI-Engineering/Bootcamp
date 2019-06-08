/* eslint-disable react/no-find-dom-node */
import React from "react";
import animate from "@jam3/gsap-promise";
import { findDOMNode } from "react-dom";

import ProgressBar from "../ProgressBar/ProgressBar";

class InfoCategory extends React.Component {
  componentDidMount() {
    animate.from(this.progressBar, 0.9, { width: 0, delay: 0.2 });
  }
  render() {
    const { label, value } = this.props;
    return (
      <div
        id={`category-description-${label}`}
        aria-label={`${label}, ${value}`}
      >
        <p aria-labelledby={`category-description-${label}`}>{label}</p>
        <div aria-labelledby={`category-description-${label}`}>
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
