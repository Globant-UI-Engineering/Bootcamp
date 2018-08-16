import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header/>
        <Board/>
      </main>
    );
  }
}

export default App;
