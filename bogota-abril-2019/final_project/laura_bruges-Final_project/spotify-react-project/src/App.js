import React from 'react';
import './App.css';
import queryString from 'query-string';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterString: ''
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.playCurrentTrack = this.playCurrentTrack.bind(this);
  }

  componentDidMount() {
   let parsed = queryString.parse(window.location.search);
   let accessToken = parsed.access_token;

   if(accessToken) {
    axios.get('https://api.spotify.com/v1/me', { headers: { Authorization: `Bearer ${accessToken}` } })
    .then((response) => {
      this.setState({
       user: response.data,
       accessToken: accessToken
      }, () => {console.log(this.state.user)})
    });
    
    axios.get('https://api.spotify.com/v1/me/player/currently-playing', { headers: { "Authorization": `Bearer ${accessToken}` } })
    .then((response) => {
      let data = response.data;
      let playing = {
        item: data.item,
        isPlaying: data.is_playing,
        progressMs: data.progress_ms
      }
      this.setState({
        playing: playing
      }, () => {
        console.log(data);
      });
    }).catch((err) => {
      console.log(err);
    })

   }   
  }

  playCurrentTrack() {
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
      }, () => {
        console.log(data);
      });
    })
    /* 
    axios.put("https://api.spotify.com/v1/me/player/play", {}, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
    .then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
    */
  }

  handleLoginClick() {
    window.location="http://localhost:8888/login"; 
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
        {this.state.playing ? <div>{this.state.playing.item}</div> : <div>No track playing</div>}
      </div>
    );
  }
}

export default App;
