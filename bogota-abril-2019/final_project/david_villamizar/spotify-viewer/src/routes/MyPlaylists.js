import React, { useEffect } from "react";
import { connect } from "react-redux";
import Playlists from "../components/Playlists";
import { clearPlaylists, fetchPlaylists } from "../store/actions";
import {
  getPlaylistsError,
  getPlaylistsIsLoading,
  getPlaylistsList,
} from "../store/reducers";
import styles from "./MyPlaylists.module.css";

function MyPlaylists({
  playlists,
  isLoading,
  fetchPlaylists,
  clearPlaylists,
  error,
}) {
  useEffect(() => {
    document.title = "My Playlists";
  }, []);

  useEffect(() => {
    fetchPlaylists(0);
    return () => clearPlaylists();
  }, [fetchPlaylists, clearPlaylists]);

  if (error) {
    return null;
  }

  const offset = playlists.length;
  return (
    <>
      <div className={styles.container}>
        <Playlists playlists={playlists} />
      </div>
      <button
        className={styles.loadMore}
        disabled={isLoading}
        onClick={e => fetchPlaylists(offset)}
      >
        Load More
      </button>
    </>
  );
}

const mapStateToProps = state => ({
  playlists: getPlaylistsList(state),
  isLoading: getPlaylistsIsLoading(state),
  error: getPlaylistsError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: offset => dispatch(fetchPlaylists(offset)),
  clearPlaylists: () => dispatch(clearPlaylists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPlaylists);
