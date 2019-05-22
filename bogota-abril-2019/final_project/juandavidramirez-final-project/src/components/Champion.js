import React from "react";
class Champion extends React.Component {
  render() {
    const { name, image } = this.props;

    return (
      <li className="champions-item">
        <img alt={name} src={image} />
        <h3 className="champion-name">{name}</h3>
      </li>
    );
  }
}

export default Champion;
