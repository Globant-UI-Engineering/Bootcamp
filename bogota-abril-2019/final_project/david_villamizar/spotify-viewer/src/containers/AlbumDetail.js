import React, { useEffect } from "react";
import { connect } from "react-redux";
import AlbumWithTracks from "../components/AlbumWithTracks";
import LoginWarning from "../components/LoginWarning";
import { fetchAlbumDetail, removeAlbumDetail } from "../store/actions";
import {
  getAccessToken,
  getAlbum,
  getAlbumError,
  getAlbumIsLoading,
} from "../store/reducers";
import { store } from "../store/store";

function AlbumDetail({
  album,
  match,
  fetchAlbum,
  removeAlbum,
  isLoading,
  error,
  ...props
}) {
  const { albumId } = match.params;
  useEffect(() => {
    fetchAlbum(albumId);
    return () => removeAlbum(albumId);
  }, [fetchAlbum, removeAlbum, albumId]);
  if (error) {
    return <LoginWarning />;
  }
  if (!album) {
    return <div />;
  }
  return <AlbumWithTracks {...album} />;
}

const mapStateToProps = (state, { match }) => ({
  album: getAlbum(state, match.params.albumId),
  isLoading: getAlbumIsLoading(state),
  error: getAlbumError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: albumId =>
    dispatch(fetchAlbumDetail(albumId, getAccessToken(store.getState()))),
  removeAlbum: albumId => dispatch(removeAlbumDetail(albumId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumDetail);
