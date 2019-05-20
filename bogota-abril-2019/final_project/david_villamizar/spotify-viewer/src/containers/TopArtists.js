import React from "react";
import { connect } from "react-redux";
import LoginWarning from "../components/LoginWarning";
import Artists from "../routes/Artists";
import { fetchTopArtists } from "../store/actions";
import {
  getAccessToken,
  getTopArtistsError,
  getTopArtistsIsLoading,
  getTopArtistsList,
} from "../store/reducers";
import { store } from "../store/store";
import styles from "./TopArtists.module.css";
function TopArtists({ artists, fetchTopArtists, isLoading, error, ...props }) {
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
        onClick={e => fetchTopArtists(offset)}
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
  fetchTopArtists: offset =>
    dispatch(fetchTopArtists(offset, getAccessToken(store.getState()))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopArtists);
