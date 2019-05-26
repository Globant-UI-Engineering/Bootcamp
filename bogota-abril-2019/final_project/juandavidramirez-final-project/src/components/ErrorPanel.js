import React from "react";
import sadTeemo from "../../public/images/sadTeemo.gif";

const ErrorPanel = ({ status }) => {
  return (
    <div className="error-panel-container">
      <div>
        <h2>error:</h2>
        <p>{status.code}</p>
      </div>
      <p>{status.message}</p>
      <img alt="Animated error" src={sadTeemo} />
    </div>
  );
};

export default ErrorPanel;
