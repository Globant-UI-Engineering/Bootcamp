import React from "react";
import "./RenderChampion.css";

const RenderChampion = ({ name, image }) => {
  return (
    <li>
      <h2 className="champion-name">{name}</h2>
      <img alt={name} src={image} />
    </li>
  );
};

export default RenderChampion;
