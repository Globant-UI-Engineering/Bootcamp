//Dependencies
import React, { Component } from 'react';
//Styles
import './global/Styles/App.css';
//Components
import AddTask from './global/AddTask';
import ShowTask from './global/ShowTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List JS-React</h1> 
        </header>
        <section>
          <AddTask />
        </section>
        <section>
          <ShowTask />          
        </section>
       
        </div>
    );
  }
}

export default App;
