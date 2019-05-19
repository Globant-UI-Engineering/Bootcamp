import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TopArtists from "./containers/TopArtists";
import Login from "./routes/Login";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar
          links={[
            { name: "Login", href: "/login" },
            { name: "Artists", href: "/artists" },
          ]}
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/artists" component={TopArtists} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
