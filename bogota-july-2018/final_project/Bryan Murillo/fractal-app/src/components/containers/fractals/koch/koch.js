import React, { Component } from 'react';
import KochGraph from './koch-Graph';
import './koch.css';

class Koch extends Component {
  render() {
    return (
      <div className='kochPage'>
        <p>This is the koch page!</p>
        <KochGraph />
      </div>
    );
  }
}

export default Koch
