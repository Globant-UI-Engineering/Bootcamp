import React, { useEffect } from "react";
import { connect } from "react-redux";
import PlaylistWithTracks from "../components/PlaylistWithTracks";
import {
  clearPlaylistTracks,
  fetchPlaylistDetail,
  fetchPlaylistTracks,
  removePlaylistDetail,
} from "../store/actions";
import {
  getPlaylistDetail,
  getPlaylistDetailsError,
  getPlaylistDetailsIsLoading,
  getPlaylistTracksError,
  getPlaylistTracksIsLoading,
  getPlaylistTracksList,
} from "../store/reducers";

function PlaylistDetail({
  playlist,
  playlistTracks,
  fetchPlaylist,
  fetchTracks,
  removePlaylist,
  clearTracks,
  isLoadingTracks,
  errorPlaylist,
  errorTracks,
  match,
}) {
  const { playlistId } = match.params;

  useEffect(() => {
    if (playlist) {
      document.title = `${playlist.name}`;
    }
  }, [playlist]);

  useEffect(() => {
    fetchPlaylist(playlistId);
    return () => removePlaylist(playlistId);
  }, [fetchPlaylist, removePlaylist, playlistId]);

  useEffect(() => {
    fetchTracks(playlistId, 0);
    return () => clearTracks(playlistId);
  }, [fetchTracks, clearTracks, playlistId]);

  if (errorPlaylist || errorTracks) {
    return null;
  }

  if (!playlist) {
    return null;
  }

  return (
    <PlaylistWithTracks
      {...playlist}
      playlistTracks={playlistTracks}
      fetchTracks={fetchTracks}
      isLoadingTracks={isLoadingTracks}
    />
  );
}

const mapStateToProps = (state, { match }) => ({
  playlist: getPlaylistDetail(state, match.params.playlistId),
  playlistTracks: getPlaylistTracksList(state, match.params.playlistId),
  isLoadingPlaylist: getPlaylistDetailsIsLoading(state),
  isLoadingTracks: getPlaylistTracksIsLoading(state),
  errorPlaylist: getPlaylistDetailsError(state),
  errorTracks: getPlaylistTracksError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylistDetail(playlistId)),
  fetchTracks: (playlistId, offset) =>
    dispatch(fetchPlaylistTracks(playlistId, offset)),
  removePlaylist: playlistId => dispatch(removePlaylistDetail(playlistId)),
  clearTracks: playlistId => dispatch(clearPlaylistTracks(playlistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistDetail);
