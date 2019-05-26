import React from "react";
import { MdGroup, MdLock, MdPublic } from "react-icons/md";
import styles from "./PlaylistWithTracks.module.css";
import Tracks from "./Tracks";

export default function PlaylistWithTracks({
  id,
  name,
  owner,
  images,
  playlistTracks,
  public: isPublic,
  collaborative,
  fetchTracks,
  isLoadingTracks,
}) {
  debugger;
  const offset = playlistTracks.length;
  return (
    <div className={styles.container}>
      <div className={styles.titleAndCover}>
        <h1>{name}</h1>
        <h2>By {owner.display_name}</h2>
        <h3 className={styles.badges}>
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
        </h3>
        <img src={images[0].url} alt={`${name}'s cover.`} />
      </div>

      <Tracks
        tracks={playlistTracks.map(playlistTrack => ({
          ...playlistTrack.track,
          id: `${playlistTrack.added_at}#${playlistTrack.track.id}`,
        }))}
      />
      <button
        className={styles.loadMore}
        disabled={isLoadingTracks}
        onClick={e => fetchTracks(id, offset)}
      >
        Load More
      </button>
    </div>
  );
}

PlaylistWithTracks.defaultProps = {};
