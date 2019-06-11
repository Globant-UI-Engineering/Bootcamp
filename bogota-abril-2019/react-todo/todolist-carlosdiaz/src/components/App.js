import React, { Component } from 'react';
import Router from './Router';
import '../css/App.css'
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  
  
  render() {
    return (
      <Provider store={store}> 
          <Router/>
      </Provider>
    );
  }
}

export default App;