import React from "react";
import ProgressBar from "./ProgressBar";

const InfoCategory = ({ label, value }) => {
  return (
    <div>
      <p>{label}</p>
      <div>
        <ProgressBar value={value} total={10} type="value" />
      </div>
    </div>
  );
};

export default InfoCategory;
