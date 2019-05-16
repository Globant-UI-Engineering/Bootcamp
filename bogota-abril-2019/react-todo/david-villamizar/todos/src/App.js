import React from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "../../../../../../../../../Library/Caches/typescript/3.4.3/node_modules/redux";
import "./App.css";
import NavBar from "./components/NavBar";
import VisibleTodoList from "./components/Todos";
import todoApp from "./store/reducers";

const store = createStore(todoApp);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <h1>Tasks</h1>
        <NavBar />
        <Switch>
          <Route
            path="/done"
            render={props => <VisibleTodoList {...props} filterType="done" />}
          />
          <Route
            path="/pending"
            render={props => (
              <VisibleTodoList {...props} filterType="pending" />
            )}
          />
          <Route
            path="/all"
            render={props => <VisibleTodoList {...props} filterType="all" />}
          />
          <Redirect to="/all" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
