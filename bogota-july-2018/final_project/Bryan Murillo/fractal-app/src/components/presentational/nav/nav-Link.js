import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const PageLink = ({ onClick, active, page, children }) => (
  <NavItem>
    <NavLink active={active} className={'nav-link'} onClick={onClick} tag={Link} to={page === 'HOME' ? '/' : `/${ page }`}>
      {children}
    </NavLink>
  </NavItem>
)

PageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PageLink;
