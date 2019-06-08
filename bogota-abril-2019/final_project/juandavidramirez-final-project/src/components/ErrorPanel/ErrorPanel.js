import React from "react";

import sadTeemo from "../../../public/images/sadTeemo.gif";

import "./ErrorPanel.css";

const ErrorPanel = ({ error }) => {
  return (
    <div className="error-panel-container">
      <div>
        <h2>error:</h2>
        <p>{error.status}</p>
      </div>
      <p>{error.data.status.message}</p>
      <img alt="Animated error" src={sadTeemo} />
    </div>
  );
};

export default ErrorPanel;
