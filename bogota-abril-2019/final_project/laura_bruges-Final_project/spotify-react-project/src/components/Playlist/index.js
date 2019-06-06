import Playlist from './component';
import { fetchPlaylist } from '../../actions/playlistActions';
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
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Playlist);