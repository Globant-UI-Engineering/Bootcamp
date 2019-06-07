import React, {Component} from "react";
import '../styles/glowing-circle-component.css'

export class GlowingCircleComponent extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    // console.captureKeyPress(this.props);
    let glowingCircleMainStyle = {
      backgroundColor: this.props.darkColor,
      width: this.props.size,
      height: this.props.size,
      ...this.props.style
    };
    let glowingCircleLightStyle = {
      backgroundColor: this.props.lightColor,
      width: this.props.size,
      height: this.props.size
    };
    let glowingCircleShineStyle = {
      backgroundColor: this.props.shineColor,
      // width: this.props.shineSize,
      // height: this.props.shineSize
    };
    return(
      <div className='glowing-circle-main' style={glowingCircleMainStyle}>
        <div className='glowing-circle-light' style={glowingCircleLightStyle}>
        </div>
        <div className='glowing-circle-shine' style={glowingCircleShineStyle}>
        </div>
      </div>
    )
  }
}
