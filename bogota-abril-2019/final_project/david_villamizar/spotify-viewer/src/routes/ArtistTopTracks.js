import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tracks from "../components/Tracks";
import { clearArtistTopTracks, fetchArtistTopTracks } from "../store/actions";
import {
  getArtistTopTracksError,
  getArtistTopTracksIsLoading,
  getArtistTopTracksList,
} from "../store/reducers";

function ArtistTopTracks({
  tracks,
  artistId,
  artistName,
  fetchTopTracks,
  clearTopTracks,
  error,
}) {
  useEffect(() => {
    document.title = `Top ${artistName} Tracks`;
  }, [artistName]);

  useEffect(() => {
    fetchTopTracks(artistId);
    return () => clearTopTracks();
  }, [artistId, fetchTopTracks, clearTopTracks]);

  if (error) {
    return null;
  }

  return <Tracks tracks={tracks} />;
}

const mapStateToProps = (state, { artistId }) => ({
  tracks: getArtistTopTracksList(state, artistId),
  isLoading: getArtistTopTracksIsLoading(state),
  error: getArtistTopTracksError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTopTracks: (artistId, countryIso) =>
    dispatch(fetchArtistTopTracks(artistId, countryIso)),
  clearTopTracks: artistId => dispatch(clearArtistTopTracks(artistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistTopTracks);
