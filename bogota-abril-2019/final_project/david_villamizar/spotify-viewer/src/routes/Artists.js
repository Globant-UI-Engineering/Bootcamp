import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Tracks from "../components/Tracks";
import ArtistAlbums from "../containers/ArtistAlbums";
import styles from "./Artists.module.css";

export default function Artists({ artists, ...props }) {
  return (
    <ul className={styles.artists}>
      {artists.map(artist => (
        <ArtistListItem key={artist.id} {...artist} {...props} />
      ))}
    </ul>
  );
}

function ArtistListItem({ name, images, genres, id, match, location }) {
  return (
    <li
      className={`${styles.artist} ${
        location.pathname.startsWith(`${match.path}/${id}`) ? styles.active : ""
      }`}
      style={{ maxHeight: Math.min(images[0].height, 500) }}
    >
      <img src={images[0].url} alt={name} />
      <NavLink activeClassName={styles.active} to={`${match.path}/${id}`}>
        <h1>{name}</h1>
        <p>{genres.join(", ")}</p>
      </NavLink>
      <NavBar
        links={[
          { name: "Albums", href: `${match.path}/${id}/albums` },
          { name: "Top Tracks", href: `${match.path}/${id}/top-tracks` },
        ]}
      />
      <Switch>
        <Route
          path={`${match.path}/${id}/albums`}
          render={props => <ArtistAlbums artistId={id} {...props} />}
        />
        <Route
          path={`${match.path}/${id}/top-tracks`}
          render={props => <Tracks artistId={id} {...props} />}
        />
        <Redirect
          from={`${match.path}/${id}`}
          to={`${match.path}/${id}/albums`}
        />
      </Switch>
    </li>
  );
}

Artists.defaultProps = {
  artists: [],
};
