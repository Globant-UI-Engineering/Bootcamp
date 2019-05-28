import React from 'react';
import '../App.css';
import { AUTH_URL } from '../utils/EndpointSettings';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';

//https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6
class App extends React.Component {
  constructor() {
    super();
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    window.location=AUTH_URL; 
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
                    <Button onClick={this.handleLoginClick} >Log in</Button>
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
                <Button variant='success' onClick={this.handleLoginClick} >Connect with Spotify</Button>
              </Col>
              
            </Row>            
          </Container>
        </section>
      </article>
    );
  }
}

export default App;
