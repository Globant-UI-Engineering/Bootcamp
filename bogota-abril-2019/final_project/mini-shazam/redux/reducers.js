import { combineReducers } from "redux";

const songs = (state = [
  {
    id: 1,
    artist: "Ozzy Osbourne",
    title: "Mr. Crowley",
    album: "Blizzard of Ozz (Expanded Edition)",
    release_date: "2011-05-27",
    label: "Epic/Legacy",
  }
], action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [
        ...state,
        {...action.song}
      ]
    case 'REMOVE_SONG':
      return state.filter( item => item.id !== action.id )
    case 'INIT_SONGS':
      return action.songs
    default:
      return state
  }
}

export default combineReducers({
  songs
})