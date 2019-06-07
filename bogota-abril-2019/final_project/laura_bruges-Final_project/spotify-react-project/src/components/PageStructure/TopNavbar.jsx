import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopNavbar = ({ children }) => {
    return (
        <Navbar variant='dark' bg='dark sticky-top shadow'>
            <img alt='playify-logo' src='/img/play-button.png' width='30' height='30' />
            <Navbar.Brand href="/">Playify</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    {children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

};

export default TopNavbar;