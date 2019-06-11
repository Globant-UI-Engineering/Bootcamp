import React, { useEffect } from "react";
import { connect } from "react-redux";
import Albums from "../components/Albums";
import { clearArtistAlbums, fetchArtistAlbums } from "../store/actions";
import {
  getArtistAlbumsError,
  getArtistAlbumsIsLoading,
  getArtistAlbumsList,
} from "../store/reducers";
import styles from "./ArtistAlbums.module.css";

function ArtistAlbums({
  albums,
  artistId,
  artistName,
  fetchAlbums,
  clearAlbums,
  isLoading,
  error,
}) {
  useEffect(() => {
    document.title = `${artistName}'s Albums`;
  }, [artistName]);

  useEffect(() => {
    fetchAlbums(artistId, 0);
    return () => clearAlbums(artistId);
  }, [artistId, fetchAlbums, clearAlbums]);

  if (error) {
    return null;
  }

  const offset = albums.length;
  return (
    <>
      <Albums albums={albums} />
      <button
        className={styles.loadMore}
        disabled={isLoading}
        onClick={e => fetchAlbums(artistId, offset)}
      >
        Load More
      </button>
    </>
  );
}

const mapStateToProps = (state, { artistId }) => ({
  albums: getArtistAlbumsList(state, artistId),
  isLoading: getArtistAlbumsIsLoading(state),
  error: getArtistAlbumsError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (artistId, offset) =>
    dispatch(fetchArtistAlbums(artistId, offset)),
  clearAlbums: artistId => dispatch(clearArtistAlbums(artistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistAlbums);
