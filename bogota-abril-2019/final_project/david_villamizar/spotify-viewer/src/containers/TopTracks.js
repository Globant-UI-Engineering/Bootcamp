import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginWarning from "../components/LoginWarning";
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
  ...props
}) {
  useEffect(() => {
    fetchTopTracks(0);
    return () => clearTopTracks();
  }, [fetchTopTracks, clearTopTracks]);

  const offset = tracks.length;
  if (error) {
    return <LoginWarning />;
  }
  return (
    <>
      <Tracks tracks={tracks} {...props} />
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
