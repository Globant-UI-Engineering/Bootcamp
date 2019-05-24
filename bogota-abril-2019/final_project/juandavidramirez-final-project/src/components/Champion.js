import React from "react";
class Champion extends React.Component {
  render() {
    const { name, image } = this.props;

    return (
      <React.Fragment>
        <img alt={name} src={image} />
        <h3 className="champion-name">{name}</h3>
      </React.Fragment>
    );
  }
}

export default Champion;
