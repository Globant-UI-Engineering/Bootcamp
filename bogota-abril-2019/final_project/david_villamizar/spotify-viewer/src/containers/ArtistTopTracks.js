import React, { useEffect } from "react";
import { connect } from "react-redux";
import Albums from "../components/Albums";
import LoginWarning from "../components/LoginWarning";
import { clearArtistAlbums, fetchArtistAlbums } from "../store/actions";
import {
  getAccessToken,
  getArtistAlbumsError,
  getArtistAlbumsIsLoading,
  getArtistAlbumsList,
} from "../store/reducers";
import { store } from "../store/store";
import styles from "./ArtistAlbums.module.css";

function ArtistAlbums({
  albums,
  artistId,
  fetchAlbums,
  clearAlbums,
  isLoading,
  error,
  ...props
}) {
  useEffect(() => {
    fetchAlbums(artistId, 0);
    return () => clearAlbums();
  }, [artistId, fetchAlbums, clearAlbums]);

  const offset = albums.length;
  if (error) {
    return <LoginWarning />;
  }
  return (
    <>
      <Albums albums={albums} {...props} />
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
    dispatch(
      fetchArtistAlbums(artistId, offset, getAccessToken(store.getState())),
    ),
  clearAlbums: artistId => dispatch(clearArtistAlbums(artistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistAlbums);
