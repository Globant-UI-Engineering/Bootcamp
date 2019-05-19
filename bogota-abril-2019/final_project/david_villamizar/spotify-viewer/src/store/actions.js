export const ADD_ARTIST_PAGE = "ADD_ARTIST_PAGE";
export const ADD_CREDENTIALS = "ADD_CREDENTIALS";

export const addArtistPage = page => ({ type: ADD_ARTIST_PAGE, page });

export const addCredentials = ({ access_token, expires_in, token_type }) => ({
  type: ADD_CREDENTIALS,
  access_token,
  expires_in,
  token_type,
});
