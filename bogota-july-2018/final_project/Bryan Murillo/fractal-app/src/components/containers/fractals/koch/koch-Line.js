import React, { Component } from 'react';

class KochLine extends Component {
  render(){
    return(
      <polyline points={this.props.points} stroke='#606' strokeWidth={2} fill='transparent'/>
    );
  }
}

export default KochLine;
