import React, { Component } from 'react';
import { Text } from 'react-native';

// Rajdhani Light
export class LightText extends Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'Rajdhani-Light' }]} />
  }
}

// Rajdhani Regular
export class RegularText extends Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'Rajdhani-Regular' }]} />
  }
}

// Rajdhani Bold
export class BoldText extends Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'Rajdhani-Bold' }]} />
  }
}

// Monospace
export class MonoText extends Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'SpaceMono-Regular' }]} />;
  }
}
