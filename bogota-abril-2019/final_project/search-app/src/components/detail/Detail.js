import React from 'react';
import './Detail.css';

class Detail extends React.Component {

  render () {

    return (
      <div className = "detail">
        <header className = "detail-title">
          <h1>{this.props.title}</h1>
        {/* <h1>React</h1> */}
        </header>
        <content className = "detail-body">
          <section className = "detail-content">
            <p>{this.props.content}</p>
            {/* <p>In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p> */}
          </section>
          <section className = "detail-image">
            <img src = {this.props.image} alt = "detail" ></img>
            {/* <img src = "http://i2.wp.com/www.enrique7mc.com/wp-content/uploads/2016/07/react-js.png?fit=897%2C440" alt = "detail" ></img> */}
            
          </section>
        </content>
      </div>
    )}
}

export default Detail;

