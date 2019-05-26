import React, { useEffect } from "react";
import { connect } from "react-redux";
import Artists from "../components/Artists";
import { clearTopArtists, fetchTopArtists } from "../store/actions";
import {
  getTopArtistsError,
  getTopArtistsIsLoading,
  getTopArtistsList,
} from "../store/reducers";
import styles from "./TopArtists.module.css";

function TopArtists({
  artists,
  fetchArtists,
  clearArtists,
  isLoading,
  error,
  ...routerProps
}) {
  useEffect(() => {
    document.title = "My Top Artists";
  }, []);

  useEffect(() => {
    fetchArtists(0);
    return () => clearArtists();
  }, [fetchArtists, clearArtists]);

  if (error) {
    return null;
  }

  const offset = artists.length;
  return (
    <>
      <Artists artists={artists} {...routerProps} />
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
  fetchArtists: offset => dispatch(fetchTopArtists(offset)),
  clearArtists: () => dispatch(clearTopArtists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopArtists);
