import Lyrics from './component';
import { addLyrics, getTrackLyrics, getLatestLyrics } from '../../actions/lyricsActions';
import { resumeTrack } from '../../actions/playerActions';
import { connect } from 'react-redux';


const mapStatetoProps = state=>({
    token: state.tokenReducer.authToken,
    playing: state.playerReducer.playing,
    userName: state.userReducer.user.display_name,
    currTrackLyrics: state.lyricsReducer.currTrackLyrics,
    latestLyrics: state.lyricsReducer.latestLyrics 
})


const mapDispatchToProps = dispatch =>{
    return{
        addLyrics: (trackId, name, artist, lyrics, addedBy) =>{
            dispatch(addLyrics(trackId, name, artist, lyrics, addedBy))
        },
        getTrackLyrics: (trackId) => {
            dispatch(getTrackLyrics(trackId))
        },
        getLatestLyrics: () => {
            dispatch(getLatestLyrics())
        },
        resumeTrack: (token, trackId) => {
            dispatch(resumeTrack(token, null, null, trackId));
        }     
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Lyrics);