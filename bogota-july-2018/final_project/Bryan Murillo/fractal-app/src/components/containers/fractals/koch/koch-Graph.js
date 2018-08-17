import React, { Component } from 'react';
import KochLine from './koch-Line';
import { SIN60 } from '../../../graphConstans';

class KochGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pointsA: '400,150 100,150',
      pointsB: '100,150 250,409.8',
      pointsC: '250,409.8 400,150'
    };
    this.setPoints = this.setPoints.bind(this);
  }

  setPoints = (coords, i) => {
    if (i > 0) {

      let points = coords.split(' ');
      let pointA = points[0].split(',');
      let pointB = points[1].split(',');

      let distanceX = Number(pointB[0] - pointA[0]) / 3;
      let distanceY = Number(pointB[1] - pointA[1]) / 3;
      let newX = Number(pointA[0]) + (3 * distanceX / 2) - (SIN60 * distanceY);
      let newY = Number(pointA[1]) + (3 * distanceY / 2) + (SIN60 * distanceX);

      let coordsA = pointA.toString() + ' ' + (Number(pointA[0]) + distanceX) + ',' + (Number(pointA[1]) + distanceY) + ' ';
      let coordsB = (Number(pointA[0]) + distanceX) + ',' + (Number(pointA[1]) + distanceY) + ' ' + newX + ',' + newY + ' ';
      let coordsC = newX + ',' + newY + ' ' + (Number(pointB[0]) - distanceX) + ',' + (Number(pointB[1]) - distanceY) + ' ';
      let coordsD = (Number(pointB[0]) - distanceX) + "," + (Number(pointB[1]) - distanceY) + ' ' + pointB.toString() + ' ';
      coords = this.setPoints(coordsA, i-1) + this.setPoints(coordsB, i-1) + this.setPoints(coordsC, i-1) + this.setPoints(coordsD, i-1);
    }
    return coords;
  }

  static defaultProps = { width: 500, height: 500 };

  render(){
    return (
      <svg width={this.props.width} height={this.props.height}>
        <KochLine points={this.setPoints(this.state.pointsA, 3)}/>
        <KochLine points={this.setPoints(this.state.pointsB, 3)}/>
        <KochLine points={this.setPoints(this.state.pointsC, 3)}/>
      </svg>
    );
  }
}

export default KochGraph;
