import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginWarningModal from "../components/LoginWarningModal";
import Tracks from "../components/Tracks";
import { clearArtistTopTracks, fetchArtistTopTracks } from "../store/actions";
import {
  getAccessToken,
  getArtistTopTracksError,
  getArtistTopTracksIsLoading,
  getArtistTopTracksList,
} from "../store/reducers";
import { store } from "../store/store";

function ArtistTopTracks({
  tracks,
  artistId,
  fetchTopTracks,
  clearTopTracks,
  error,
  ...routerProps
}) {
  useEffect(() => {
    fetchTopTracks(artistId);
    return () => clearTopTracks();
  }, [artistId, fetchTopTracks, clearTopTracks]);

  if (error) {
    return <LoginWarningModal />;
  }
  return (
    <>
      <Tracks tracks={tracks} {...routerProps} />
    </>
  );
}

const mapStateToProps = (state, { artistId }) => ({
  tracks: getArtistTopTracksList(state, artistId),
  isLoading: getArtistTopTracksIsLoading(state),
  error: getArtistTopTracksError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTopTracks: (artistId, countryIso) =>
    dispatch(
      fetchArtistTopTracks(
        artistId,
        getAccessToken(store.getState()),
        countryIso,
      ),
    ),
  clearTopTracks: artistId => dispatch(clearArtistTopTracks(artistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistTopTracks);
