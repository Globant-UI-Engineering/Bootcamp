import React from "react";
import { Link } from "@reach/router";

const Champion = ({ name, image, nameKey }) => {
  return (
    <React.Fragment>
      <Link to={`/champion/${nameKey}`}>
        <img alt={name} src={image} />
      </Link>

      <h3>{name}</h3>
    </React.Fragment>
  );
};

export default Champion;
