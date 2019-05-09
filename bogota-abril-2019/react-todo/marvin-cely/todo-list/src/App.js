import React, { Component, Fragment } from 'react';
import './App.css';
import { todos } from "./todo.json";

class App extends Component {   
  constructor (props) {
    super(props);    
    this.state = {
      todos
    }
    // Crear métodos del componente y darles el scope del this con el .bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  render () {
    return (
      <Fragment>
        <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} />
        <br />
        <br />
        <button onClick={this.handleClick} >
          Hello :D
        </button>
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
