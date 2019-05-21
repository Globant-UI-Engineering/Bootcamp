import React from 'react';
import './Detail.css';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class Detail extends React.Component {

  render () {

    return (
      <div>
        <div className = "detail">
          <header className = "detail-title">
            <h1>{this.props.title}</h1>
          </header>
          <content className = "detail-body">
            <section className = "detail-content">
              <p>{this.props.content}</p>
            </section>
            <section className = "detail-image">
              <img src = {this.props.image} alt = "detail" ></img>
            </section>
          </content>
        </div>
        <footer className = "detail-back-button">
          <Link to= {`/`} >
            <button >Back to Search</button>
          </Link>
        </footer>
    </div>
    )}
}

Detail.propTypes  = {
  title:PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content:PropTypes.string.isRequired
}
export default Detail;

