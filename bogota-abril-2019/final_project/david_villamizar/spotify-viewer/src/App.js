import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Playlists from "./components/Playlists";
import AlbumDetail from "./routes/AlbumDetail";
import Login from "./routes/Login";
import TopArtists from "./routes/TopArtists";
import TopTracks from "./routes/TopTracks";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <ErrorModal /> */}
        <NavBar
          links={[
            { name: "My Top Artists", href: "/top-artists" },
            { name: "My Top Tracks", href: "/top-tracks" },
            { name: "My Playlists", href: "/playlists" },
          ]}
        />
        <Switch>
          <Route path="/top-artists" component={TopArtists} />
          <Route path="/top-tracks" component={TopTracks} />
          <Route path="/playlists" component={Playlists} />
          <Route path="/albums/:albumId" component={AlbumDetail} />
          <Redirect to="/top-artists" />
        </Switch>
        <Route component={Login} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
