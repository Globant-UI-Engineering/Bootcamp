import React from 'react';
import { Col, Nav, NavItem } from 'react-bootstrap';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <Col md={2} className='d-none d-md-block bg-dark sidebar'>
            <div className='sidebar-sticky'>
                <Nav className='flex-column'>
                    <NavItem>
                        <Link to='/user/'>User</Link>
                    </NavItem>
                </Nav>
            </div>
        </Col>
    );
}

export default Sidebar;