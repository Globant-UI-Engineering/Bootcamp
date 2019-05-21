import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginWarning from "../components/LoginWarning";
import Artists from "../routes/Artists";
import { clearTopArtists, fetchTopArtists } from "../store/actions";
import {
  getAccessToken,
  getTopArtistsError,
  getTopArtistsIsLoading,
  getTopArtistsList,
} from "../store/reducers";
import { store } from "../store/store";
import styles from "./TopArtists.module.css";

function TopArtists({
  artists,
  fetchArtists,
  clearArtists,
  isLoading,
  error,
  ...props
}) {
  useEffect(() => {
    fetchArtists(0);
    return () => clearArtists();
  }, [fetchArtists, clearArtists]);

  const offset = artists.length;
  if (error) {
    return <LoginWarning />;
  }
  return (
    <>
      <Artists artists={artists} {...props} />
      <button
        className={styles.loadMore}
        disabled={isLoading}
        onClick={e => fetchArtists(offset)}
      >
        Load More
      </button>
    </>
  );
}

const mapStateToProps = state => ({
  artists: getTopArtistsList(state),
  isLoading: getTopArtistsIsLoading(state),
  error: getTopArtistsError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: offset =>
    dispatch(fetchTopArtists(offset, getAccessToken(store.getState()))),
  clearArtists: () => dispatch(clearTopArtists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopArtists);
