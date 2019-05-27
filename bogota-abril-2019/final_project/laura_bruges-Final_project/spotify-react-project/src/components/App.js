import React from 'react';
import '../App.css';
import queryString from 'query-string';
import axios from 'axios';
import { USER_INFO_URL,
  PLAY_TRACK_URL } from '../utils/EndpointSettings';
//https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterString: ''
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.playCurrentTrack = this.playCurrentTrack.bind(this);
    this.updateNowPlaying = this.updateNowPlaying.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   let parsed = queryString.parse(window.location.search);
   let accessToken = parsed.access_token;
   let refreshToken = parsed.refresh_token;

   if(accessToken) {
     this.setState({
       accessToken: accessToken,
       refreshToken: refreshToken
     }, () => {
      axios.get(USER_INFO_URL, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
      .then((response) => {
        this.setState({
         user: response.data
        }, () => {
          console.log(this.state.user)})
      });
     })    

   }   
  }

  updateNowPlaying() {
    /*
    axios.get(NOW_PLAYING_URL, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
    .then((response) => {
      let trackData = response.data;
      this.setState({
        playing: {
          progressMs: trackData.progress_ms,
          durationMs: trackData.item.duration_ms
        }
      })
    })
    */
    setInterval(() => {
      console.log('hello');
      axios.get('https://api.spotify.com/v1/me/player', { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
    .then((response) => {
      
      let data = response.data;
      let playing = {
        item: data.item,
        isPlaying: data.is_playing,
        progressMs: data.progress_ms
      }
      this.setState({
        playing: playing
      });
    })
    }, 1000)
    
  }

  playCurrentTrack() {   
    axios.put(PLAY_TRACK_URL, {}, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
    .then(() => {
      this.updateNowPlaying();
    }).catch((err) => {
      console.log(err);
    })
  }

  handleLoginClick() {
    window.location="http://localhost:8888/login"; 
  }

  handleChange(time) {
    console.log("triggered");
    console.log(time);
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? 
        <div>
          <a href={this.state.user.external_urls.spotify}>{this.state.user.display_name}</a>
          <button onClick={this.playCurrentTrack}>Play!</button>
        </div> : 
        <button onClick={this.handleLoginClick}>Log in with Spotify</button>
        }
        {this.state.playing  && this.state.playing.item &&
        
       
        <input type="range" min="0" max={this.state.playing.item.duration_ms} value={this.state.playing.progressMs}  step="1000" onMouseUp={(event)=>this.handleChange(event)} />
        
        }
        {/*this.state.playing ? <div>{this.state.playing.name}</div> : <div>No track playing</div>*/}

      </div>
    );
  }
}

export default App;
