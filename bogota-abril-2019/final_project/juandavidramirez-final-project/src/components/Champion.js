import React from "react";
class Champion extends React.Component {
  render() {
    const { name, image } = this.props;

    return (
      <li>
        <h2 className="champion-name">{name}</h2>
        <img alt={name} src={image} />
      </li>
    );
  }
}

export default Champion;
