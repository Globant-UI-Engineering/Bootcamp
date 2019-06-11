import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar-sticky'>
                <Nav className='flex-column'>
                    <NavItem className='nav-item'>
                        <Link to='/user/'>User</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/playlist/'>Playlists</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/lyrics/'>Lyrics</Link>
                    </NavItem>
                </Nav>
            </div>
    );
}

export default Sidebar;