import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { removeCartItem } from '../../redux/actions/cart.js';
import { Delete } from '@material-ui/icons';
import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    ListItem,
    ListItemText
    } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '800px',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    image: {
        display: 'inline-block'
    }
});

class ShoppingTable extends Component {

    deleteItem = product => {
        const index = this.props.cartList.indexOf(product);
        this.props.removeCartItem(index)
    };

    render() {
        const { classes, rows } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Productos</TableCell>
                            <TableCell numeric>Precio</TableCell>
                            <TableCell numeric>Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <ListItem>
                                            <Paper className={classes.image}>
                                                <img
                                                    src={row.image}
                                                    alt="Imagen de la Proteina"
                                                    height={120}
                                                />
                                            </Paper>
                                            <ListItemText primary={row.title} secondary={row.brand} />
                                        </ListItem>
                                    </TableCell>
                                    <TableCell numeric>{row.pricing.price}</TableCell>
                                    <TableCell numeric>
                                        <IconButton onClick={() => this.deleteItem(row)}>
                                            <Delete color='error'/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

ShoppingTable.propTypes = {
    cartList: PropTypes.array.isRequired,
    removeCartItem: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        cartList: state.cart.cartList
    }
}

export default connect(mapStateToProps, {removeCartItem})(withStyles(styles)(ShoppingTable));