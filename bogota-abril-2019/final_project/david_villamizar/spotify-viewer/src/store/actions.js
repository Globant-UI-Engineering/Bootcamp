export const ADD_TOP_ARTISTS_PAGE = "ADD_TOP_ARTISTS_PAGE";
export const ADD_CREDENTIALS = "ADD_CREDENTIALS";
export const CLEAR_CREDENTIALS = "CLEAR_CREDENTIALS";
export const SHOW_TOP_ARTISTS_ERROR = "SHOW_TOP_ARTISTS_ERROR";
export const SET_TOP_ARTISTS_LOADING = "SET_TOP_ARTISTS_LOADING";

export const addTopArtistsPage = page => ({ type: ADD_TOP_ARTISTS_PAGE, page });

export const addCredentials = ({ access_token, expires_in, token_type }) => ({
  type: ADD_CREDENTIALS,
  access_token,
  expires_in,
  token_type,
});
export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS,
});

export const showTopArtistsError = error => ({
  type: SHOW_TOP_ARTISTS_ERROR,
  isLoading: false,
  error,
});

export const setTopArtistsLoading = isLoading => ({
  type: SET_TOP_ARTISTS_LOADING,
  isLoading,
});

export function fetchTopArtists(offset, access_token) {
  return dispatch => {
    dispatch(setTopArtistsLoading(true));
    fetch(
      `https://api.spotify.com/v1/me/top/artists?offset=${encodeURIComponent(
        offset,
      )}`,
      {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      },
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setTopArtistsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(page => dispatch(addTopArtistsPage(page)))
      .catch(() =>
        dispatch(
          showTopArtistsError(
            `Artists request failed for access_token ${access_token} and offset ${offset}.`,
          ),
        ),
      );
  };
}
