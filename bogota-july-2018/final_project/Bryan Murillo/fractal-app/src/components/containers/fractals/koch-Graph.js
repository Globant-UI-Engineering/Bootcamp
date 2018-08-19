import React, { Component } from 'react';
import { connect } from 'react-redux';
import GraphLine from '../../presentational/graph/graph-Line';
import { SIN60 } from '../../graphConstans';
import { graphKochA } from '../../../actions/index';
import { graphKochB } from '../../../actions/index';
import { graphKochC } from '../../../actions/index';

class KochGraph extends Component {
  constructor(props) {
    super(props);

    this.setPoints = this.setPoints.bind(this);
    this.getCoords = this.getCoords.bind(this);
  }

  getCoords = (coords, i) => {
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

  setPoints = (coords, i, type) => {
    let newCoords = this.getCoords(coords, i);
    switch (type) {
      case 'a':
        this.props.graphKochA(newCoords);
        break;
      case 'b':
        this.props.graphKochB(newCoords);
        break;
      case 'c':
        this.props.graphKochC(newCoords);
      break;
      default:

    }
    return newCoords;
  }

  static defaultProps = { width: 500, height: 500 };

  render(){
    const { defPoints } = this.props;

    return (
      <svg width={this.props.width} height={this.props.height}>
        <GraphLine points={this.getCoords(defPoints.a, this.props.iteration)}/>
        <GraphLine points={this.getCoords(defPoints.b, this.props.iteration)}/>
        <GraphLine points={this.getCoords(defPoints.c, this.props.iteration)}/>
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return { defPoints: state.graphReducer.pointsKoch };
};

export default connect (
  mapStateToProps,
  null
)(KochGraph);
