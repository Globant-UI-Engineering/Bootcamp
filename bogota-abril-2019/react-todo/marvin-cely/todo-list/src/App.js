import React from 'react';
import './App.css';

class App extends React.Component {   
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
      <React.Fragment>
        <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} />
        <br />
        <br />
        <button onClick={this.handleClick} >
          Hello :D
        </button>
      </React.Fragment>
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
