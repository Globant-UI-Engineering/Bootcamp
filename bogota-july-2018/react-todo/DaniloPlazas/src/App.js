import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleTodo from './AppControl/TitleTodo';
import ListOfItems from './AppControl/List.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DC Movies New 52</h1>
          <h2 className="App-subtitle">A simple TODO List</h2>
        </header>

        <article className="Todo-List-Parent">
          <TitleTodo title="Movies DC New 52 to see"/>
          <ListOfItems/>
        </article>
        <footer className="">
        </footer>
      </div>
    );
  }
}

export default App;
