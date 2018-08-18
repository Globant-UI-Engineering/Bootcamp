import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import footerStyle from '../../assets/jss/styles/footerStyle.jsx';

const Footer = ({ classes }) => (
    <footer className={classes.footerContainer} >
        <span className={classes.titleFooter}>
            2018 Hus Protein. All Rights Reserved.
        </span>
    </footer>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);