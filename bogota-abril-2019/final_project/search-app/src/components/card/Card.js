import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {

  render () {
    return (
      <section  className="card">
        <h1>{this.props.title}</h1>
        <img src = {this.props.image} alt = "result" className = "result-image"></img>
      </section>
    )}
}

Card.propTypes  = {
  title:PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Card;

