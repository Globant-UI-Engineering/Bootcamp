export const ADD_CREDENTIALS = "ADD_CREDENTIALS";
export const CLEAR_CREDENTIALS = "CLEAR_CREDENTIALS";
export const ADD_TOP_ARTISTS_PAGE = "ADD_TOP_ARTISTS_PAGE";
export const CLEAR_TOP_ARTISTS = "CLEAR_TOP_ARTISTS";
export const SHOW_TOP_ARTISTS_ERROR = "SHOW_TOP_ARTISTS_ERROR";
export const SET_TOP_ARTISTS_LOADING = "SET_TOP_ARTISTS_LOADING";
export const ADD_ARTIST_ALBUMS_PAGE = "ADD_ARTIST_ALBUMS_PAGE";
export const CLEAR_ARTIST_ALBUMS = "CLEAR_ARTIST_ALBUMS";
export const SHOW_ARTIST_ALBUMS_ERROR = "SHOW_ARTIST_ALBUMS_ERROR";
export const SET_ARTIST_ALBUMS_LOADING = "SET_ARTIST_ALBUMS_LOADING";

export const addCredentials = ({ access_token, expires_in, token_type }) => ({
  type: ADD_CREDENTIALS,
  access_token,
  expires_in,
  token_type,
});
export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS,
});

export const addTopArtistsPage = page => ({ type: ADD_TOP_ARTISTS_PAGE, page });
export const clearTopArtists = () => ({ type: CLEAR_TOP_ARTISTS });
export const showTopArtistsError = error => ({
  type: SHOW_TOP_ARTISTS_ERROR,
  isLoading: false,
  error,
});
export const setTopArtistsLoading = isLoading => ({
  type: SET_TOP_ARTISTS_LOADING,
  isLoading,
});

export const addArtistAlbumsPage = (artistId, page) => ({
  type: ADD_ARTIST_ALBUMS_PAGE,
  page,
  artistId,
});
export const clearArtistAlbums = (artistId, page) => ({
  type: CLEAR_ARTIST_ALBUMS,
  artistId,
});
export const showArtistAlbumsError = error => ({
  type: SHOW_ARTIST_ALBUMS_ERROR,
  isLoading: false,
  error,
});
export const setArtistAlbumsLoading = isLoading => ({
  type: SET_ARTIST_ALBUMS_LOADING,
  isLoading,
});

function getHeaders(access_token) {
  return {
    Authorization: "Bearer " + access_token,
  };
}

export function fetchTopArtists(offset, access_token) {
  return dispatch => {
    dispatch(setTopArtistsLoading(true));
    fetch(`https://api.spotify.com/v1/me/top/artists?offset=${offset}`, {
      headers: getHeaders(access_token),
    })
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

export function fetchArtistAlbums(artistId, offset, access_token) {
  return dispatch => {
    dispatch(setArtistAlbumsLoading(true));
    fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?offset=${offset}`,
      {
        headers: getHeaders(access_token),
      },
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setArtistAlbumsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(page => dispatch(addArtistAlbumsPage(artistId, page)))
      .catch(() =>
        dispatch(
          showArtistAlbumsError(
            `Artists request failed for access_token ${access_token} artistId ${artistId} and offset ${offset}.`,
          ),
        ),
      );
  };
}
