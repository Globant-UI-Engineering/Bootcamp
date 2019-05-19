import { combineReducers } from "redux";
import { artistPages } from "../mock";
import { ADD_ARTIST_PAGE, ADD_CREDENTIALS } from "./actions";

function artists(state = artistPages, { type, page }) {
  switch (type) {
    case ADD_ARTIST_PAGE:
      return [...state, page];
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
    default:
      return state;
  }
}

const appReducer = combineReducers({
  artists,
  credentials,
});

export default appReducer;
