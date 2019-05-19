import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers/addTodoReducer';
import Header from './components/header/Header';
import Todo from './containers/todo/Todo';
import Form from './containers/form/Form';
import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Todo} />
          <Route path="/form" component={Form} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
