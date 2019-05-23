import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AlbumDetail from "./routes/AlbumDetail";
import LoginRedirect from "./routes/LoginRedirect";
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
          ]}
        />
        <Switch>
          <Route path="/top-artists" component={TopArtists} />
          <Route path="/top-tracks" component={TopTracks} />
          <Route path="/album/:albumId" component={AlbumDetail} />
          <Redirect to="/top-artists" />
        </Switch>
        <Route component={LoginRedirect} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
