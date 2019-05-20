import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TopArtists from "./containers/TopArtists";
import LoginRedirect from "./routes/LoginRedirect";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar links={[{ name: "My Top Artists", href: "/top-artists" }]} />
        <Switch>
          <Route path={"/spotify-redirect"} component={LoginRedirect} />
          <Route path="/top-artists" component={TopArtists} />
          <Redirect to="/top-artists" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
