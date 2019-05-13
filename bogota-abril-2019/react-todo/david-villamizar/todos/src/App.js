import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Todos from "./components/Todos";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          path="/done"
          render={props => <Todos {...props} filterType="done" />}
        />
        <Route
          path="/pending"
          render={props => <Todos {...props} filterType="pending" />}
        />
        <Route
          path="/all"
          render={props => <Todos {...props} filterType="all" />}
        />
        <Redirect to="/all" />
      </Switch>
    </Router>
  );
}

export default App;
