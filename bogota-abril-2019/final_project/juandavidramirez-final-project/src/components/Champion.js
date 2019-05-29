import React from "react";
import { Link } from "@reach/router";

const Champion = ({ name, image, nameKey }) => {
  return (
    <React.Fragment>
      <Link to={`/champion/${nameKey}`}>
        <img
          alt={name}
          src={image}
          aria-labelledby={`champion-name-${nameKey}`}
        />
      </Link>

      <h3 id={`champion-name-${nameKey}`}>{name}</h3>
    </React.Fragment>
  );
};

export default Champion;
