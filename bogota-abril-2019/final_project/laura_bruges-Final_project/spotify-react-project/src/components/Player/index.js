import Player from './component';
import { setNowPlaying, resumeTrack, pauseTrack } from '../../actions/playerActions';
import { connect } from 'react-redux'


const mapStatetoProps = state=>({
    token: state.tokenReducer.authToken,
    playing: state.playerReducer.playing
})


const mapDispatchToProps = dispatch =>{
    return{
        setNowPlaying: token =>{
            dispatch(setNowPlaying(token))
        },
        resumeTrack: token =>{
            dispatch(resumeTrack(token))
        },
        pauseTrack: token =>{
            dispatch(pauseTrack(token))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);