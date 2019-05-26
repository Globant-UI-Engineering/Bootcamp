import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ name }) => (
  <div className="loading-container">
    <CircularProgress color="secondary" />
    <p>loading {name}</p>
  </div>
);

export default Loading;
