import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {   
  constructor (props) {
    super(props);
    
    this.state = {
      clicked: false,
      inputValue: ''
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  render () {
    return (
      <Fragment>
             
      </Fragment>
    )
  }
        
  handleInputChange (event) {
    this.setState({
      inputValue: event.target.value
    })
  }
  
  handleClick (event) {
    this.setState({
      clicked: !this.state.clicked
    }, function () {
      console.log(this.state);
    })
  }
}

export default App;
