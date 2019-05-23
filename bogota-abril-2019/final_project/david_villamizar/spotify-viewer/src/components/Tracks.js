import React from "react";
import styles from "./Tracks.module.css";

function Track({ name, id, album, popularity }) {
  console.log(popularity);
  return (
    <li key={id} className={styles.track}>
      <h3 title={name}>{name}</h3>
      <h4 title={album.name}>{album.name}</h4>
      {popularity ? <p>{popularity}</p> : null}
    </li>
  );
}

export default function Tracks({ tracks }) {
  return <ol className={styles.tracks}>{tracks.map(Track)}</ol>;
}

Tracks.defaultProps = {
  tracks: [],
};
