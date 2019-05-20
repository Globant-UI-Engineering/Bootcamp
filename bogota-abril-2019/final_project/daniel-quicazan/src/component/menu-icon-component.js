import React, {Component} from "react";
import '../styles/menu-icon-component.css'

export class MenuIconComponent extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return(
      <div style={this.props.style} className={'menu-icon-container'}>
        <div className={'menu-icon-bar'}/>
        <div className={'menu-icon-bar'}/>
        <div className={'menu-icon-bar'}/>
        <div className={'menu-icon-bar'}/>
      </div>
    )
  }
}
