import React from 'react';
import './App.css';
import { AUTH_URL } from '../../utils/EndpointSettings';
import { Button, Container, Row, Col } from 'react-bootstrap';
import TopNavbar from '../PageStructure/TopNavbar';

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
          <TopNavbar>
            <Button onClick={this.handleLoginClick} >Log in</Button>
          </TopNavbar>
        </header>
        <section>
          <Container>
            <Row>
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
