import { combineReducers } from "redux";
import {
  ADD_ALBUM_DETAIL,
  ADD_ARTIST_ALBUMS_PAGE,
  ADD_ARTIST_TOP_TRACKS,
  ADD_CREDENTIALS,
  ADD_PLAYLISTS_PAGE,
  ADD_TOP_ARTISTS_PAGE,
  ADD_TOP_TRACKS_PAGE,
  CLEAR_ARTIST_ALBUMS,
  CLEAR_ARTIST_TOP_TRACKS,
  CLEAR_CREDENTIALS,
  CLEAR_PLAYLISTS,
  CLEAR_TOP_ARTISTS,
  CLEAR_TOP_TRACKS,
  REMOVE_ALBUM_DETAIL,
  SET_ALBUM_LOADING,
  SET_ARTIST_ALBUMS_LOADING,
  SET_ARTIST_TOP_TRACKS_LOADING,
  SET_PLAYLISTS_LOADING,
  SET_TOP_ARTISTS_LOADING,
  SET_TOP_TRACKS_LOADING,
  SHOW_ALBUM_ERROR,
  SHOW_ARTIST_ALBUMS_ERROR,
  SHOW_ARTIST_TOP_TRACKS_ERROR,
  SHOW_PLAYLISTS_ERROR,
  SHOW_TOP_ARTISTS_ERROR,
  SHOW_TOP_TRACKS_ERROR,
} from "./actions";

function credentials(
  state = {},
  { type, access_token, expires_in, token_type },
) {
  switch (type) {
    case ADD_CREDENTIALS:
      return { access_token, expires_in, token_type };
    case CLEAR_CREDENTIALS:
      return {};
    default:
      return state;
  }
}

function topArtists(state = [], { type, page }) {
  switch (type) {
    case ADD_TOP_ARTISTS_PAGE:
      return [...state, page];
    case CLEAR_TOP_ARTISTS:
      return [];
    default:
      return state;
  }
}

function topArtistsLoading(
  state = { isLoading: false },
  { type, isLoading, error },
) {
  switch (type) {
    case SET_TOP_ARTISTS_LOADING:
      return { isLoading };
    case SHOW_TOP_ARTISTS_ERROR:
      return { isLoading, error };
    default:
      return state;
  }
}

function artistAlbums(state = {}, { type, artistId, page }) {
  switch (type) {
    case ADD_ARTIST_ALBUMS_PAGE:
      const prevPages = state[artistId];
      const newPages = [...(prevPages ? prevPages : []), page];
      return { ...state, [artistId]: newPages };
    case CLEAR_ARTIST_ALBUMS:
      return { ...state, [artistId]: undefined };
    default:
      return state;
  }
}

function artistAlbumsLoading(
  state = { isLoading: false },
  { type, isLoading, error },
) {
  switch (type) {
    case SET_ARTIST_ALBUMS_LOADING:
      return { isLoading };
    case SHOW_ARTIST_ALBUMS_ERROR:
      return { isLoading, error };
    default:
      return state;
  }
}

function artistTopTracks(state = {}, { type, artistId, tracks }) {
  switch (type) {
    case ADD_ARTIST_TOP_TRACKS:
      return { ...state, [artistId]: tracks };
    case CLEAR_ARTIST_TOP_TRACKS:
      return { ...state, [artistId]: undefined };
    default:
      return state;
  }
}

function artistTopTracksLoading(
  state = { isLoading: false },
  { type, isLoading, error },
) {
  switch (type) {
    case SET_ARTIST_TOP_TRACKS_LOADING:
      return { isLoading };
    case SHOW_ARTIST_TOP_TRACKS_ERROR:
      return { isLoading, error };
    default:
      return state;
  }
}

function albums(state = {}, { type, album, albumId }) {
  switch (type) {
    case ADD_ALBUM_DETAIL:
      return { ...state, [album.id]: album };
    case REMOVE_ALBUM_DETAIL:
      return { ...state, [albumId]: undefined };
    default:
      return state;
  }
}

function albumLoading(
  state = { isLoading: false },
  { type, isLoading, error },
) {
  switch (type) {
    case SET_ALBUM_LOADING:
      return { isLoading };
    case SHOW_ALBUM_ERROR:
      return { isLoading, error };
    default:
      return state;
  }
}

function topTracks(state = [], { type, page }) {
  switch (type) {
    case ADD_TOP_TRACKS_PAGE:
      return [...state, page];
    case CLEAR_TOP_TRACKS:
      return [];
    default:
      return state;
  }
}

function topTracksLoading(
  state = { isLoading: false },
  { type, isLoading, error },
) {
  switch (type) {
    case SET_TOP_TRACKS_LOADING:
      return { isLoading };
    case SHOW_TOP_TRACKS_ERROR:
      return { isLoading, error };
    default:
      return state;
  }
}

function playlists(state = [], { type, page }) {
  switch (type) {
    case ADD_PLAYLISTS_PAGE:
      return [...state, page];
    case CLEAR_PLAYLISTS:
      return [];
    default:
      return state;
  }
}

function playlistsLoading(
  state = { isLoading: false },
  { type, isLoading, error },
) {
  switch (type) {
    case SET_PLAYLISTS_LOADING:
      return { isLoading };
    case SHOW_PLAYLISTS_ERROR:
      return { isLoading, error };
    default:
      return state;
  }
}

const appReducer = combineReducers({
  credentials,
  topArtists,
  topArtistsLoading,
  artistAlbums,
  artistAlbumsLoading,
  artistTopTracks,
  artistTopTracksLoading,
  albums,
  albumLoading,
  topTracks,
  topTracksLoading,
  playlists,
  playlistsLoading,
});

export default appReducer;

export const getAccessToken = state => state.credentials.access_token;

export const getTopArtistsList = state =>
  [].concat(...state.topArtists.map(page => page.items));
export const getTopArtistsIsLoading = state =>
  state.topArtistsLoading.isLoading;
export const getTopArtistsError = state => state.topArtistsLoading.error;

export const getArtistAlbumsList = (state, artistId) => {
  let albums = state.artistAlbums[artistId];
  if (!albums) {
    albums = [];
  }
  return [].concat(...albums.map(page => page.items));
};
export const getArtistAlbumsIsLoading = state =>
  state.artistAlbumsLoading.isLoading;
export const getArtistAlbumsError = state => state.artistAlbumsLoading.error;

export const getArtistTopTracksList = (state, artistId) => {
  let topTracks = state.artistTopTracks[artistId];
  if (!topTracks) {
    topTracks = [];
  }
  return topTracks;
};
export const getArtistTopTracksIsLoading = state =>
  state.artistTopTracksLoading.isLoading;
export const getArtistTopTracksError = state =>
  state.artistTopTracksLoading.error;

export const getAlbum = (state, albumId) => state.albums[albumId];
export const getAlbumIsLoading = state => state.albumLoading.isLoading;
export const getAlbumError = state => state.albumLoading.error;

export const getTopTracksList = state =>
  [].concat(...state.topTracks.map(page => page.items));
export const getTopTracksIsLoading = state => state.topTracksLoading.isLoading;
export const getTopTracksError = state => state.topTracksLoading.error;

export const getPlaylists = state =>
  [].concat(...state.playlists.map(page => page.items));
export const getPlaylistsIsLoading = state => state.playlistsLoading.isLoading;
export const getPlaylistsError = state => state.playlistsLoading.error;

export const getAllErrorsList = state =>
  [
    state.topArtistsLoading.error,
    state.artistTopTracksLoading.error,
    state.artistAlbumsLoading.error,
    state.albumLoading.error,
    state.topTracksLoading.error,
    state.playlistsLoading.error,
  ].filter(error => error);
