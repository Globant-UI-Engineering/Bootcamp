import React from "react";
import styles from "./Tracks.module.css";

function Track({ name, id, album, popularity }) {
  return (
    <li key={id} className={styles.track}>
      <h3>{name}</h3>
      <p>{album.name}</p>
      <p>{popularity}</p>
    </li>
  );
}

export default function Tracks({ tracks }) {
  return <ol className={styles.tracks}>{tracks.map(Track)}</ol>;
}

Tracks.defaultProps = {
  tracks: [],
};
