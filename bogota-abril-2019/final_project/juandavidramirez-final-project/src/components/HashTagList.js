import React from "react";

class HashTagList extends React.Component {
  render() {
    const { values } = this.props;
    return values.map(value => {
      return (
        <p key={value}>
          #<span>{value}</span>
        </p>
      );
    });
  }
}

export default HashTagList;
