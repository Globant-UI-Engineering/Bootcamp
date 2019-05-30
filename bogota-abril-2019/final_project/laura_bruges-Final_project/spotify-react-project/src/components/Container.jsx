import React from 'react';
import TopNavbar from './TopNavbar';
import Player from './Player';
import Sidebar from './Sidebar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Container.css';

const MainContainer = ({children}) => {
    return (
        <article>
            <header>
                <TopNavbar>
                    <Button variant='danger'>Log out</Button>
                </TopNavbar>
            </header>
            <Container fluid>
                <Row>
                    <Col md={2} className='d-none d-md-block bg-dark sidebar'>
                        <Sidebar />
                    </Col>
                    <Col md={10}>
                        <Container>
                            {children}
                        </Container>                    
                    </Col>
                </Row>
            </Container>
            <Player />
        </article>
    );

};


export default MainContainer;