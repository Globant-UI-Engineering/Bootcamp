import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchInput from './components/search-bar';
import SingleAnime from './components/single-anime';



import './CSS/style.css';
import 'whatwg-fetch'

import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <Switch>
            <Route exact path="/" component={SearchInput}/>
            <Route path="/:series/:id" component={SingleAnime} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
