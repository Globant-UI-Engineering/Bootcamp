import React from "react";
import PlaylistBadges from "./PlaylistBadges";
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
  const offset = playlistTracks.length;
  return (
    <div className={styles.container}>
      <div className={styles.titleAndCover}>
        <h1>{name}</h1>
        <h2>By {owner.display_name}</h2>
        <PlaylistBadges isPublic={isPublic} collaborative={collaborative} />
        <img src={images[0].url} alt={`${name}'s cover.`} />
      </div>
      <div className={styles.tracksContainer}>
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
    </div>
  );
}

PlaylistWithTracks.defaultProps = {};
