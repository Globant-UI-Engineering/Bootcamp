import React, { Component } from 'react';
import Todolist from './global/Todolist'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
         <h1 className="tittle">To do list React-JS</h1>
         </header>
         <Todolist />
         <footer>
           <span>Designed by <a href="https://codepen.io/juan-paez/#">Juan Forero</a></span>
         </footer>
      </div>
    );
  }
}

export default App;
