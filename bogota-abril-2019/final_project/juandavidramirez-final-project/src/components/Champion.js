import React from "react";
import { Link } from "@reach/router";
class Champion extends React.Component {
  render() {
    const { name, image, nameKey } = this.props;

    return (
      <React.Fragment>
        <Link to={`/champion/${nameKey}`}>
          <img alt={name} src={image} />
        </Link>

        <h3 className="champion-name">{name}</h3>
      </React.Fragment>
    );
  }
}

export default Champion;
