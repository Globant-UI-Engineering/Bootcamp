import React from "react";
import { Link } from "react-router-dom";
import styles from "./Albums.module.css";

function Album({ name, images, id, release_date, total_tracks }) {
  return (
    <Link to={`/album/${id}`}>
      <li className={styles.album} key={id}>
        <h3>{name}</h3>
        <img src={images[0].url} alt={name} />
        <p>Released on {new Date(release_date).toLocaleDateString()}</p>
        <p>
          {total_tracks} {total_tracks === 1 ? "track" : "tracks"}
        </p>
      </li>
    </Link>
  );
}

export default function Albums({ id, albums }) {
  return <ul className={styles.albums}>{albums.map(Album)}</ul>;
}

Albums.defaultProps = {
  albums: [],
};
