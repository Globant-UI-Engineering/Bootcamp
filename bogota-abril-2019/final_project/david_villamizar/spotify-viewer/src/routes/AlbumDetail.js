import React, { useEffect } from "react";
import { connect } from "react-redux";
import AlbumWithTracks from "../components/AlbumWithTracks";
import { fetchAlbumDetail, removeAlbumDetail } from "../store/actions";
import {
  getAccessToken,
  getAlbum,
  getAlbumError,
  getAlbumIsLoading,
} from "../store/reducers";
import { store } from "../store/store";

function AlbumDetail({ album, fetchAlbum, removeAlbum, error, match }) {
  const { albumId } = match.params;

  useEffect(() => {
    if (album) {
      document.title = `${album.name}`;
    }
  }, [album]);

  useEffect(() => {
    fetchAlbum(albumId);
    return () => removeAlbum(albumId);
  }, [fetchAlbum, removeAlbum, albumId]);

  if (error) {
    return null;
  }

  if (!album) {
    return null;
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
