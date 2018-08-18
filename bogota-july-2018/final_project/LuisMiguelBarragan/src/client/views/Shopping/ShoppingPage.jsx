import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import  { Grid, Typography } from '@material-ui/core';
import shoppingPageStyle from '../../assets/jss/styles/views/shoppingPageStyle.jsx';
import ShoppingTable from '../../components/Table/ShoppingTable.jsx';


class ShoppingPage extends Component {

    render() {
        const { classes, items } = this.props;
        return (
            <main className={classes.container}>
                <Grid container direction='column' alignItems='center'>
                    <Typography className={classes.title} component='h2' >Carrito de compras</Typography>

                    <ShoppingTable rows={items} deleteButton={ () => this.deleteItem(index)}/>

                    <Typography className={classes.paragraph} component='p' >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto odio dignissim
                        qui blandit praesent luptatum zzril delenit augue duis
                        dolore te feugait nulla facilisi.
                    </Typography>
                </Grid>
            </main>
        );
    }
}

ShoppingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        items: state.cart.cartList
    }
}

export default connect(mapStateToProps)(withStyles(shoppingPageStyle)(ShoppingPage));