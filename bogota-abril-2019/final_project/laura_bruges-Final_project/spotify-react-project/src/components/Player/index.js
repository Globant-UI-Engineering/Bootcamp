import Player from './component';
import { setNowPlaying, resumeTrack, pauseTrack, nextTrack, previousTrack } from '../../actions/playerActions';
import { fetchDeviceList } from '../../actions/deviceActions';
import { connect } from 'react-redux'


const mapStatetoProps = state=>({
    token: state.tokenReducer.authToken,
    playing: state.playerReducer.playing,
    devices: state.deviceReducer.devices
})


const mapDispatchToProps = dispatch =>{
    return{
        setNowPlaying: token =>{
            dispatch(setNowPlaying(token))
        },
        resumeTrack: (token, deviceId) =>{
            dispatch(resumeTrack(token, deviceId))
        },
        pauseTrack: token =>{
            dispatch(pauseTrack(token))
        },
        nextTrack: token =>{
            dispatch(nextTrack(token))
        },
        previousTrack: token =>{
            dispatch(previousTrack(token))
        },
        getDevices: token => {
            dispatch(fetchDeviceList(token));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);