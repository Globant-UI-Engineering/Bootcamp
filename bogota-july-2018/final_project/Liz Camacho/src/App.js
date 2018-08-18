import React, { Component } from 'react';
import NavBar from './components/views/navbar';
import Routes from "./components/routes";
import Footer from "./components/views/footer";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
};
export default App