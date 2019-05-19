import React from 'react';
import './Card.css';

class Card extends React.Component {

  render () {
    return (
      <section  className="card">
        <h1>{this.props.title}</h1>
        <img src = {this.props.image} alt = "result" className = "result-image"></img>
      </section>
    )}
}

export default Card;

