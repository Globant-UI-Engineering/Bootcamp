import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Artists from "./routes/Artists";
import Login from "./routes/Login";
function App() {
  return (
    <BrowserRouter>
      <NavBar
        links={[
          { name: "Login", href: "/login" },
          { name: "Artists", href: "/artists" },
        ]}
      />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/artists" component={Artists} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
