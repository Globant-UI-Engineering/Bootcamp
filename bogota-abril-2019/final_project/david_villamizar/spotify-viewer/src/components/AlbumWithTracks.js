import React from "react";
import Tracks from "./Tracks";

export default function AlbumWithTracks({
  name,
  artists,
  genres,
  images,
  tracks,
}) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{artists.map(artist => artist.name).join(",")}</h2>
      {genres.lenght > 0 ? (
        <h3>{genres.map(genre => genre.name).join(",")}</h3>
      ) : null}
      <img src={images[0].url} alt={`${name}'s cover.`} />
      <Tracks
        tracks={tracks.items.map(track => ({ ...track, album: { name } }))}
      />
    </>
  );
}

AlbumWithTracks.defaultProps = {};
