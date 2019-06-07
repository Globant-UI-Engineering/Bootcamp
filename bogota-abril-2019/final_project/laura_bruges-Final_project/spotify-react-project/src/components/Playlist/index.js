import Playlist from './component';
import { fetchPlaylist, fetchUserPlaylists } from '../../actions/playlistActions';
import { resumeTrack, pauseTrack, shuffleContext, setRepeatStateContext } from '../../actions/playerActions';
import { connect } from 'react-redux';


const mapStatetoProps = state=>({
    token: state.tokenReducer.authToken,
    playing: state.playerReducer.playing,
    currPlaylist: state.playlistReducer.currPlaylist
})


const mapDispatchToProps = dispatch =>{
    return{
        fetchPlaylist: (token, playlistId) =>{
            dispatch(fetchPlaylist(token, playlistId))
        },
        fetchUserPlaylists: (token)  => {
            dispatch(fetchUserPlaylists(token));
        },
        resumeTrack: (token, playlistId, currTrackId) => {
            dispatch(resumeTrack(token, null, playlistId, currTrackId));
        },
        pauseTrack: (token) => {
            dispatch(pauseTrack(token))
        },
        shuffleContext: (token, isShuffled) => {
            dispatch(shuffleContext(token, isShuffled))
        },
        setRepeatStateContext: (token, repeatState) => {
            dispatch(setRepeatStateContext(token, repeatState))
        }        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Playlist);