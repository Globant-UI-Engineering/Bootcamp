import React from "react";

class HashTagList extends React.Component {
  render() {
    return (
      <ul aria-label="Champion Roles" className="champion-roles">
        {this.getValues()}
      </ul>
    );
  }

  getValues = () => {
    const { values } = this.props;
    return values.map(value => (
      <li key={value}>
        <p id={`hashtag-${value}`} aria-label={`Hashtag ${value}`}>
          #<span aria-labelledby={`hashtag-${value}`}>{value}</span>
        </p>
      </li>
    ));
  };
}

export default HashTagList;
