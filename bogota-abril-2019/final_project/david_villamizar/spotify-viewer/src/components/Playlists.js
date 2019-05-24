import React from "react";
import { MdGroup, MdLock, MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";
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
        <h3>{name}</h3>
        <img src={images[0].url} alt={name} />
        <h4 className={styles.badges}>
          {isPublic ? (
            <span className={styles.badge}>
              <MdPublic /> Public
            </span>
          ) : (
            <span className={styles.badge}>
              <MdLock /> Private
            </span>
          )}
          {collaborative ? (
            <span className={styles.badge}>
              <MdGroup /> Collaborative
            </span>
          ) : null}
        </h4>
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
