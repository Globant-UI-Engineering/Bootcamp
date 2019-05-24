import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tracks from "../components/Tracks";
import { clearTopTracks, fetchTopTracks } from "../store/actions";
import {
  getAccessToken,
  getTopTracksError,
  getTopTracksIsLoading,
  getTopTracksList,
} from "../store/reducers";
import { store } from "../store/store";
import styles from "./TopTracks.module.css";

function TopTracks({
  tracks,
  isLoading,
  fetchTopTracks,
  clearTopTracks,
  error,
}) {
  useEffect(() => {
    document.title = "My Top Tracks";
  }, []);

  useEffect(() => {
    fetchTopTracks(0);
    return () => clearTopTracks();
  }, [fetchTopTracks, clearTopTracks]);

  if (error) {
    return null;
  }

  const offset = tracks.length;
  return (
    <>
      <div className={styles.container}>
        <Tracks tracks={tracks} />
      </div>
      <button
        className={styles.loadMore}
        disabled={isLoading}
        onClick={e => fetchTopTracks(offset)}
      >
        Load More
      </button>
    </>
  );
}

const mapStateToProps = state => ({
  tracks: getTopTracksList(state),
  isLoading: getTopTracksIsLoading(state),
  error: getTopTracksError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTopTracks: offset =>
    dispatch(fetchTopTracks(offset, getAccessToken(store.getState()))),
  clearTopTracks: () => dispatch(clearTopTracks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopTracks);
