import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AlbumDetail from "./containers/AlbumDetail";
import TopArtists from "./containers/TopArtists";
import TopTracks from "./containers/TopTracks";
import LoginRedirect from "./routes/LoginRedirect";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar links={[{ name: "My Top Artists", href: "/top-artists" }, { name: "My Top Tracks", href: "/top-tracks" }]} />
        <Switch>
          <Route path="/top-artists" component={TopArtists} />
          <Route path="/top-tracks" component={TopTracks} />
          <Route path="/album/:albumId" component={AlbumDetail} />
          <Route path={"/spotify-redirect"} component={LoginRedirect} />
          <Redirect to="/top-artists" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
