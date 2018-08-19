import React, { Component } from 'react';
import './App.css';
import PageNav from '../containers/nav/pageNav';
import RoutePages from '../routePages';

class App extends Component {
  render() {
    return (
      <section className="App">
        <PageNav />
        <header className="Fractal-header">
          <h1 className="Fractal-title"><b>Fractal-Graph</b></h1>
        </header>
        <RoutePages />
      </section>
    );
  }
}

export default App;
