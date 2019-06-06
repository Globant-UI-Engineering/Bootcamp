import Playlist from './component';
import { fetchPlaylist, fetchUserPlaylists } from '../../actions/playlistActions';
import { connect } from 'react-redux';


const mapStatetoProps = state=>({
    token: state.tokenReducer.authToken,
    playlistId: state.playerReducer.playing && state.playerReducer.playing.currPlaylistId,
    currPlaylist: state.playlistReducer.currPlaylist
})


const mapDispatchToProps = dispatch =>{
    return{
        fetchPlaylist: (token, playlistId) =>{
            dispatch(fetchPlaylist(token, playlistId))
        },
        fetchUserPlaylists: (token)  => {
            dispatch(fetchUserPlaylists(token));
        }        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Playlist);