import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AlbumDetail from "./routes/AlbumDetail";
import Login from "./routes/Login";
import MyPlaylists from "./routes/MyPlaylists";
import PlaylistDetail from "./routes/PlaylistDetail";
import TopArtists from "./routes/TopArtists";
import TopTracks from "./routes/TopTracks";
import { store } from "./store/store";
class DebugRouter extends BrowserRouter {
  constructor(props) {
    super(props);
    console.log("initial history is: ", JSON.stringify(this.history, null, 2));
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${
          location.hash
        }`,
      );
      console.log(
        `The last navigation action was ${action}`,
        JSON.stringify(this.history, null, 2),
      );
    });
  }
}
function App() {
  return (
    <Provider store={store}>
      <DebugRouter>
        {/* <ErrorModal /> */}
        <NavBar
          links={[
            { name: "My Top Artists", href: "/top-artists" },
            { name: "My Top Tracks", href: "/top-tracks" },
            { name: "My Playlists", href: "/playlists" },
          ]}
        />
        <Switch>
          <Route path="/playlists/:playlistId" component={PlaylistDetail} />
          <Route path="/albums/:albumId" component={AlbumDetail} />
          <Route path="/top-artists" component={TopArtists} />
          <Route path="/top-tracks" component={TopTracks} />
          <Route path="/playlists" component={MyPlaylists} />
          <Redirect to="/top-artists" />
        </Switch>
        <Route component={Login} />
      </DebugRouter>
    </Provider>
  );
}

export default App;
