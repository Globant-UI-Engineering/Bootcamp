import React from "react";
import styles from "./Tracks.module.css";

let currentAudio;

function playAudio(url) {
  if (currentAudio) {
    currentAudio.pause();
  }
  currentAudio = new Audio(url);
  currentAudio.play();
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = undefined;
  }
}

function Track({ name, id, album, popularity, preview_url }) {
  return (
    <li
      key={id}
      className={styles.track}
      onMouseEnter={e => playAudio(preview_url)}
      onMouseLeave={e => stopAudio()}
      onTouchStart={e => playAudio(preview_url)}
      onTouchEnd={e => stopAudio()}
    >
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
