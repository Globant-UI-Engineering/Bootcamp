import React from "react";

class HashTagList extends React.Component {
  render() {
    const { values } = this.props;
    return (
      <ul aria-label="Champion Roles" className="champion-roles">
        {values.map(value => (
          <li key={value}>
            <p id={`hashtag-${value}`} aria-label={`Hashtag ${value}`}>
              #<span aria-labelledby={`hashtag-${value}`}>{value}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default HashTagList;
