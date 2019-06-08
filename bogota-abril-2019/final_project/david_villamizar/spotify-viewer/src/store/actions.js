import axios from "axios";
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

export const ADD_PLAYLISTS_PAGE = "ADD_PLAYLISTS_PAGE";
export const CLEAR_PLAYLISTS = "CLEAR_PLAYLISTS";
export const SHOW_PLAYLISTS_ERROR = "SHOW_PLAYLISTS_ERROR";
export const SET_PLAYLISTS_LOADING = "SET_PLAYLISTS_LOADING";

export const ADD_PLAYLIST_TRACKS_PAGE = "ADD_PLAYLIST_TRACKS_PAGE";
export const CLEAR_PLAYLIST_TRACKS = "CLEAR_PLAYLIST_TRACKS";
export const SHOW_PLAYLIST_TRACKS_ERROR = "SHOW_PLAYLIST_TRACKS_ERROR";
export const SET_PLAYLIST_TRACKS_LOADING = "SET_PLAYLIST_TRACKS_LOADING";

export const ADD_PLAYLIST_DETAIL = "ADD_PLAYLIST_DETAIL";
export const REMOVE_PLAYLIST_DETAIL = "REMOVE_PLAYLIST_DETAIL";
export const SHOW_PLAYLIST_DETAILS_ERROR = "SHOW_PLAYLIST_DETAILS_ERROR";
export const SET_PLAYLIST_DETAILS_LOADING = "SET_PLAYLIST_DETAILS_LOADING";

export const addCredentials = ({ access_token, expires_in, token_type }) => {
  access_token = `Bearer ${access_token}`;
  axios.defaults.headers.common["Authorization"] = access_token;
  return {
    type: ADD_CREDENTIALS,
    access_token,
    expires_in,
    token_type,
  };
};
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
  artistId,
  page,
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
  artistId,
  tracks,
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

export const addTopTracksPage = page => ({
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

export const addPlaylistsPage = page => ({
  type: ADD_PLAYLISTS_PAGE,
  page,
});
export const clearPlaylists = () => ({
  type: CLEAR_PLAYLISTS,
});
export const showPlaylistsError = error => ({
  type: SHOW_PLAYLISTS_ERROR,
  isLoading: false,
  error,
});
export const setPlaylistsLoading = isLoading => ({
  type: SET_PLAYLISTS_LOADING,
  isLoading,
});

export const addPlaylistTracksPage = (playlistId, page) => ({
  type: ADD_PLAYLIST_TRACKS_PAGE,
  playlistId,
  page,
});
export const clearPlaylistTracks = playlistId => ({
  type: CLEAR_PLAYLIST_TRACKS,
  playlistId,
});
export const showPlaylistTracksError = error => ({
  type: SHOW_PLAYLIST_TRACKS_ERROR,
  isLoading: false,
  error,
});
export const setPlaylistTracksLoading = isLoading => ({
  type: SET_PLAYLIST_TRACKS_LOADING,
  isLoading,
});

export const addPlaylistDetail = playlist => ({
  type: ADD_PLAYLIST_DETAIL,
  playlist,
});
export const removePlaylistDetail = playlistId => ({
  type: REMOVE_PLAYLIST_DETAIL,
  playlistId,
});
export const showPlaylistDetailsError = error => ({
  type: SHOW_PLAYLIST_DETAILS_ERROR,
  isLoading: false,
  error,
});
export const setPlaylistDetailsLoading = isLoading => ({
  type: SET_PLAYLIST_DETAILS_LOADING,
  isLoading,
});

export function fetchTopArtists(offset) {
  return async dispatch => {
    try {
      dispatch(setTopArtistsLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/me/top/artists`,
        { params: { offset } },
      );

      dispatch(addTopArtistsPage(response.data));
    } catch (e) {
      dispatch(
        showTopArtistsError(
          `Top artists request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } and offset ${offset}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setTopArtistsLoading(false));
    }
  };
}

export function fetchArtistAlbums(artistId, offset) {
  return async dispatch => {
    try {
      dispatch(setArtistAlbumsLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/albums`,
        { params: { offset } },
      );
      dispatch(addArtistAlbumsPage(artistId, response.data));
    } catch (e) {
      dispatch(
        showArtistAlbumsError(
          `Artist's albums request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } artistId ${artistId} and offset ${offset}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setArtistAlbumsLoading(false));
    }
  };
}

export function fetchArtistTopTracks(artistId, country = "from_token") {
  return async dispatch => {
    try {
      dispatch(setArtistTopTracksLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
        { params: { country } },
      );
      dispatch(addArtistTopTracks(artistId, response.data.tracks));
    } catch (e) {
      dispatch(
        showArtistTopTracksError(
          `Artist's top tracks request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } artistId ${artistId} and country ISO ${country}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setArtistTopTracksLoading(false));
    }
  };
}

export function fetchAlbumDetail(albumId) {
  return async dispatch => {
    try {
      dispatch(setAlbumLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/albums/${albumId}`,
      );
      dispatch(addAlbumDetail(response.data));
    } catch (e) {
      dispatch(
        showAlbumError(
          `Album detail request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } and album ${albumId}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setAlbumLoading(false));
    }
  };
}

export function fetchTopTracks(offset) {
  return async dispatch => {
    try {
      dispatch(setTopTracksLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks`,
        {
          params: { offset },
        },
      );
      dispatch(addTopTracksPage(response.data));
    } catch (e) {
      dispatch(
        showTopTracksError(
          `Top tracks request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } and offset ${offset}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setTopTracksLoading(false));
    }
  };
}

export function fetchPlaylists(offset) {
  return async dispatch => {
    try {
      dispatch(setPlaylistsLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/me/playlists`,
        {
          params: { offset },
        },
      );
      dispatch(addPlaylistsPage(response.data));
    } catch (e) {
      dispatch(
        showPlaylistsError(
          `Playlists request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } and offset ${offset}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setPlaylistsLoading(false));
    }
  };
}

export function fetchPlaylistTracks(playlistId, offset) {
  return async dispatch => {
    try {
      dispatch(setPlaylistTracksLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          params: { offset },
        },
      );
      dispatch(addPlaylistTracksPage(playlistId, response.data));
    } catch (e) {
      dispatch(
        showPlaylistTracksError(
          `Playlist's tracks request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } artistId ${playlistId} and offset ${offset}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setPlaylistTracksLoading(false));
    }
  };
}

export function fetchPlaylistDetail(playlistId) {
  return async dispatch => {
    try {
      dispatch(setPlaylistDetailsLoading(true));
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
      );
      dispatch(addPlaylistDetail(response.data));
    } catch (e) {
      dispatch(
        showPlaylistDetailsError(
          `Playlist detail request failed for access_token ${
            axios.defaults.headers.common["Authorization"]
          } and playlist ${playlistId}.`,
        ),
      );
      throw e;
    } finally {
      dispatch(setPlaylistDetailsLoading(false));
    }
  };
}
