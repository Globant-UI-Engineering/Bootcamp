import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Player.css';
class Player extends React.Component {
    render(){
        return (
            <footer className='page-footer fixed-bottom'>
                <Container>
                    <Row>         
                        <Col md={12}>
                            <input type='range'/>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={12}>
                            <span className='float-left'>00:00</span>
                            <span className='float-right'>03:58</span>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Button>Prev</Button>
                            <Button>Play</Button>
                            <Button>Next</Button>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Player;