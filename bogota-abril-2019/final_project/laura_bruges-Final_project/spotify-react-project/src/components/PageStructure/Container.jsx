import React from 'react';
import TopNavbar from './TopNavbar';
import Player from '../Player';
import Sidebar from './Sidebar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FRONT_HOMEPAGE } from '../../utils/EndpointSettings';
import './Container.css';

const MainContainer = ({children}) => {
    return (
        <article>
            <header>
                <TopNavbar>
                    <Button variant='danger' onClick={ logOut }>Log out</Button>
                </TopNavbar>
            </header>
            <Container fluid>
                <Row>
                    <Col md={2} className='d-none d-md-block bg-dark sidebar'>
                        <Sidebar />
                    </Col>
                    <Col md={10} className='ml-auto my-auto'>
                        <Row className='mx-auto'>
                            <Col md={12}>                        
                                { children }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Player />
        </article>
    );

};

function logOut() {
    const url = 'https://accounts.spotify.com/en/logout';
    const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')                                                                                                
    setTimeout(() => {
        spotifyLogoutWindow.close();
    }, 2000);
    window.location = FRONT_HOMEPAGE;
}

export default MainContainer;