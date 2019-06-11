import React from "react";
import { Link } from "react-router-dom";
import PlaylistBadges from "./PlaylistBadges";
import styles from "./Playlists.module.css";

function Playlist({
  name,
  images,
  id,
  collaborative,
  public: isPublic,
  owner,
  tracks,
}) {
  const { total: totalTracks } = tracks;
  return (
    <Link to={`/playlists/${id}`} key={id}>
      <li className={styles.playlist}>
        <h1>{name}</h1>
        <img src={images[0].url} alt={name} />
        <PlaylistBadges isPublic={isPublic} collaborative={collaborative} />
        <p>By {owner.display_name}</p>
        <p>
          {totalTracks} {totalTracks === 1 ? "track" : "tracks"}
        </p>
      </li>
    </Link>
  );
}

export default function Playlists({ playlists }) {
  return <ul className={styles.playlists}>{playlists.map(Playlist)}</ul>;
}

Playlists.defaultProps = {
  playlists: [],
};
