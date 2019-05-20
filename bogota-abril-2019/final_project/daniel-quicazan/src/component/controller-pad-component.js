import React, {Component} from "react";
import '../styles/controller-pad-component.css'

export class ControllerPadComponent extends Component {

  upButton = undefined;
  leftButton = undefined;
  downButton = undefined;
  rightButton = undefined;

  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.upButton = document.getElementById('controller-up-button');
    this.leftButton = document.getElementById('controller-left-button');
    this.downButton = document.getElementById('controller-down-button');
    this.rightButton = document.getElementById('controller-right-button');
    let width = getComputedStyle(this.upButton).width;
    this.upButton.style.height = width;
    this.leftButton.style.height = width;
    this.downButton.style.height = width;
    this.rightButton.style.height = width;
  }

  render() {
    return(
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-4'}/>
          <button className={'col-4 controller-pad-up controller-pad-button'} id={'controller-up-button'}/>
          <div className={'col-4'}/>
        </div>
        <div className={'row'}>
          <button className={'col-4 controller-pad-left controller-pad-button'}  id={'controller-left-button'}/>
          <div className={'col-4 controller-pad-button'}>
            <div className={'controller-pad-circle'} />
          </div>
          <button className={'col-4 controller-pad-right controller-pad-button'}  id={'controller-right-button'}/>
        </div>
        <div className={'row'}>
          <div className={'col-4'}/>
          <button className={'col-4 controller-pad-down controller-pad-button'} id={'controller-down-button'}/>
          <div className={'col-4'}/>
        </div>
      </div>
    )
  }
}
