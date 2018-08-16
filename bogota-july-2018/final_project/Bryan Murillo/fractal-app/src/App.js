import React, { Component } from 'react';
import './App.css';
import PageNav from './components/containers/nav/pageNav.js';
import FractalPages from './components/FractalPages.js';

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="Fractal-header">
          <h1 className="Fractal-title"><b>Fractal-Graph</b></h1>
        </header>
        <PageNav />
        <FractalPages />
      </section>
    );
  }
}

export default App;
