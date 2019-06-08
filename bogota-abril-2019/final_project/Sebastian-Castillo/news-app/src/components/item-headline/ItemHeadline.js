import React from 'react';

import './ItemHeadline.css';

class ItemHeadline extends React.Component {
  formatPosition = (position) => {
    const strPosition = (position + 1).toString();
    if (strPosition.length < 2) {
      return '0' + strPosition;
    } else {
      return strPosition;
    }
  };

  render() {
    return (
      <article className="Item__headline">
        <div className="Item__headline_index">
          {this.formatPosition(this.props.id)}
        </div>
        <div className="Item__headline_info">
          <a href={this.props.url} target="__blank">
            <h2 className="Item__headline_title">{this.props.title}</h2>
          </a>
          <a href={this.props.url} target="__blank">
            <p className="Item__headline_description">
              {this.props.description}
            </p>
          </a>
        </div>
      </article>
    );
  }
}

export default ItemHeadline;
