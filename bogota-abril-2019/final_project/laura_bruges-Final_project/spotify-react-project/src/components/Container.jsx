import React from 'react';
import TopNavbar from './TopNavbar';
import Player from './Player';
import Sidebar from './Sidebar';
import { Button, Container, Row } from 'react-bootstrap';
import '../styles/Container.css';

const MainContainer = () => {
    return (
        <article>
            <header>
                <TopNavbar>
                    <Button variant='danger'>Log out</Button>
                </TopNavbar>
            </header>
            <Container fluid>
                <Row>
                    <Sidebar />
                </Row>
            </Container>
            <Player />
        </article>
    );

};


export default MainContainer;