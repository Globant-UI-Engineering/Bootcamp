import { combineReducers } from "redux";
import {
  ADD_ARTIST_ALBUMS_PAGE,
  ADD_ARTIST_TOP_TRACKS,
  ADD_CREDENTIALS,
  ADD_TOP_ARTISTS_PAGE,
  CLEAR_ARTIST_ALBUMS,
  CLEAR_ARTIST_TOP_TRACKS,
  CLEAR_CREDENTIALS,
  CLEAR_TOP_ARTISTS,
  SET_ARTIST_ALBUMS_LOADING,
  SET_ARTIST_TOP_TRACKS_LOADING,
  SET_TOP_ARTISTS_LOADING,
  SHOW_ARTIST_ALBUMS_ERROR,
  SHOW_ARTIST_TOP_TRACKS_ERROR,
  SHOW_TOP_ARTISTS_ERROR,
} from "./actions";

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

const appReducer = combineReducers({
  topArtists,
  topArtistsLoading,
  artistAlbums,
  artistAlbumsLoading,
  artistTopTracks,
  artistTopTracksLoading,
  credentials,
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
