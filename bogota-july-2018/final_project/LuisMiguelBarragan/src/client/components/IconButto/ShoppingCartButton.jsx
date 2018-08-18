import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Badge, IconButton} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';

const ShoppingCartButton = ({ cartListLength , to}) => (
    <IconButton color="inherit" component={Link} to={to} aria-label="Ver carrito de compras">
        { cartListLength > 0 ? <BadgeIcon number={cartListLength} /> : <ShoppingCart />}
        { console.log(cartListLength)}
    </IconButton>
);

const BadgeIcon = ({ number }) => (
    <Badge badgeContent={number} color="secondary">
        <ShoppingCart />
    </Badge>
);

ShoppingCartButton.propTypes = {
    cartListLength: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired,
};

function mapStateToProps (state) {
    return {
        cartListLength: state.cart.cartList.length,
    };
}

export default connect(mapStateToProps)(ShoppingCartButton)
