import React from "react";
import styles from "./Tracks.module.css";

let currentAudio;

function toggleAudio(url) {
  let prevUrl;
  if (currentAudio) {
    prevUrl = currentAudio.src;
    currentAudio.pause();
    currentAudio = undefined;
  }
  if (prevUrl === url) {
    return;
  }

  if (url) {
    currentAudio = new Audio(url);
    currentAudio.play();
  }
}

function Track({ name, id, album, popularity, preview_url }) {
  return (
    <li
      key={id}
      className={`${styles.track} ${preview_url ? "" : styles.disabled}`}
      onClick={e => toggleAudio(preview_url)}
    >
      <h1 title={name}>{name}</h1>
      <h2 title={album.name}>{album.name}</h2>
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
