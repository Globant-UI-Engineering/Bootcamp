import { combineReducers } from "redux";
import {
  ADD_CREDENTIALS,
  ADD_TOP_ARTISTS_PAGE,
  CLEAR_CREDENTIALS,
  SET_TOP_ARTISTS_LOADING,
  SHOW_TOP_ARTISTS_ERROR,
} from "./actions";

function topArtists(state = [], { type, page }) {
  switch (type) {
    case ADD_TOP_ARTISTS_PAGE:
      return [...state, page];
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
  credentials,
});

export default appReducer;

export const getAccessToken = state => state.credentials.access_token;

export const getTopArtistsList = state =>
  [].concat(...state.topArtists.map(page => page.items));

export const getTopArtistsIsLoading = state =>
  state.topArtistsLoading.isLoading;

export const getTopArtistsError = state => state.topArtistsLoading.error;
