import React from 'react';
import Router from '../Router/Router';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Router/>
    </Provider>
  );
}

export default App;
