import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../containers/form/Form';

import './Fab.css';

class Fab extends React.Component {
  render() {
    return (
      <Link to="/form" component={Form}>
        <button className="Todo__fab" />
      </Link>
    );
  }
}

export default Fab;
