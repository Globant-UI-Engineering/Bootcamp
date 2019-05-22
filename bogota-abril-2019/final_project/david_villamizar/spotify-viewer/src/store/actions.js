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

export const ADD_ARTIST_TOP_TRACKS = "ADD_ARTIST_TOP_TRACKS";
export const CLEAR_ARTIST_TOP_TRACKS = "CLEAR_ARTIST_TOP_TRACKS";
export const SHOW_ARTIST_TOP_TRACKS_ERROR = "SHOW_ARTIST_TOP_TRACKS_ERROR";
export const SET_ARTIST_TOP_TRACKS_LOADING = "SET_ARTIST_TOP_TRACKS_LOADING";

export const ADD_ALBUM_DETAIL = "ADD_ALBUM_DETAIL";
export const REMOVE_ALBUM_DETAIL = "REMOVE_ALBUM_DETAIL";
export const SHOW_ALBUM_ERROR = "SHOW_ALBUM_ERROR";
export const SET_ALBUM_LOADING = "SET_ALBUM_LOADING";

export const ADD_TOP_TRACKS_PAGE = "ADD_TOP_TRACKS_PAGE";
export const CLEAR_TOP_TRACKS = "CLEAR_TOP_TRACKS";
export const SHOW_TOP_TRACKS_ERROR = "SHOW_TOP_TRACKS_ERROR";
export const SET_TOP_TRACKS_LOADING = "SET_TOP_TRACKS_LOADING";

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
export const clearArtistAlbums = artistId => ({
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

export const addArtistTopTracks = (artistId, tracks) => ({
  type: ADD_ARTIST_TOP_TRACKS,
  tracks,
  artistId,
});
export const clearArtistTopTracks = artistId => ({
  type: CLEAR_ARTIST_TOP_TRACKS,
  artistId,
});
export const showArtistTopTracksError = error => ({
  type: SHOW_ARTIST_TOP_TRACKS_ERROR,
  isLoading: false,
  error,
});
export const setArtistTopTracksLoading = isLoading => ({
  type: SET_ARTIST_TOP_TRACKS_LOADING,
  isLoading,
});

export const addAlbumDetail = album => ({
  type: ADD_ALBUM_DETAIL,
  album,
});
export const removeAlbumDetail = albumId => ({
  type: REMOVE_ALBUM_DETAIL,
  albumId,
});
export const showAlbumError = error => ({
  type: SHOW_ALBUM_ERROR,
  isLoading: false,
  error,
});
export const setAlbumLoading = isLoading => ({
  type: SET_ALBUM_LOADING,
  isLoading,
});

export const addTopTracksPage = (page) => ({
  type: ADD_TOP_TRACKS_PAGE,
  page,
});
export const clearTopTracks = () => ({
  type: CLEAR_TOP_TRACKS,
});
export const showTopTracksError = error => ({
  type: SHOW_TOP_TRACKS_ERROR,
  isLoading: false,
  error,
});
export const setTopTracksLoading = isLoading => ({
  type: SET_TOP_TRACKS_LOADING,
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

export function fetchArtistTopTracks(
  artistId,
  access_token,
  countryIso = "from_token",
) {
  return dispatch => {
    dispatch(setArtistTopTracksLoading(true));
    fetch(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=${countryIso}`,
      {
        headers: getHeaders(access_token),
      },
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setArtistTopTracksLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(topTracks =>
        dispatch(addArtistTopTracks(artistId, topTracks.tracks)),
      )
      .catch(() =>
        dispatch(
          showArtistTopTracksError(
            `Artists request failed for access_token ${access_token} artistId ${artistId} and country ISO ${countryIso}.`,
          ),
        ),
      );
  };
}

export function fetchAlbumDetail(albumId, access_token) {
  return dispatch => {
    dispatch(setAlbumLoading(true));
    fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: getHeaders(access_token),
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setAlbumLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(album => dispatch(addAlbumDetail(album)))
      .catch(() =>
        dispatch(
          showAlbumError(
            `Artists request failed for access_token ${access_token} and album ${albumId}.`,
          ),
        ),
      );
  };
}

export function fetchTopTracks(offset, access_token) {
  return dispatch => {
    dispatch(setTopTracksLoading(true));
    fetch(`https://api.spotify.com/v1/me/top/tracks?offset=${offset}`, {
      headers: getHeaders(access_token),
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setTopTracksLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(page => dispatch(addTopTracksPage(page)))
      .catch(() =>
        dispatch(
          showTopTracksError(
            `Artists request failed for access_token ${access_token} and offset ${offset}.`,
          ),
        ),
      );
  };
}
