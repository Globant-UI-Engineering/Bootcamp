import React, {Component} from "react";
import '../styles/menu-icon-component.css'
import {Redirect} from "react-router-dom";

export class MenuIconComponent extends Component {
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      redirectToComparative: false
    }
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
  }
  
  navigateToComparative = () => {
    this.setState({
      redirectToComparative: true
    })
  };
  
  render() {
    if (this.state.redirectToComparative) {
      return(
        <Redirect to={'/comparative'}/>
      )
    }
    else {
      return (
        <button onClick={this.navigateToComparative} style={this.props.style} className={'menu-icon-container'}>
          <div className={'menu-icon-bar'}/>
          <div className={'menu-icon-bar'}/>
          <div className={'menu-icon-bar'}/>
          <div className={'menu-icon-bar'}/>
        </button>
      )
    }
  }
}
