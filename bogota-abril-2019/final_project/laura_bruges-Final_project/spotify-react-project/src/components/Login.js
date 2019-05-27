import React from 'react';
import '../App.css';
import queryString from 'query-string';
import axios from 'axios';
import { USER_INFO_URL,
  PLAY_TRACK_URL } from '../utils/EndpointSettings';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';

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
      <article className='main-container'>
        <header>
          <Navbar variant='dark' bg='dark'>
            <img alt='playify-logo' src='/img/play-button.png' width='30' height='30' />
            <Navbar.Brand href="/">Playify</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Button>Log in</Button>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <section>
          <Container>
            <Row col>
              <Col lg={12} className='content'>
                <h1 className='main-title'>Playify</h1>
                <h3>Let's enjoy music together ♪♫♬</h3>
                <Button variant='success'>Get started</Button>
              </Col>
              
            </Row>            
          </Container>
        </section>
      </article>
    );
  }
}

export default App;
