import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import CreateTodo from './components/todos/CreateTodo';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/create" component={CreateTodo}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
