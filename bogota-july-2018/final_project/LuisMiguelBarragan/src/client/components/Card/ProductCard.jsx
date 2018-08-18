import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import productCardStyle from '../../assets/jss/styles/productCardStyle.jsx';
import LabelProduct from '../Label/LabelProductStatus.jsx';
import classNames from 'classnames';
import { AddShoppingCart } from '@material-ui/icons';
import { 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography, 
    IconButton } from '@material-ui/core';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inStock: false,
        };
    };

    componentDidMount() {
        this.validateStatus();
    }

    validateStatus = () => {
        if (this.props.quantity) {
            this.setState({inStock: !this.state.inStock,})
        }
    };

    render() {
        const { classes, image, title, brand, pricing } = this.props;
        const { inStock } = this.state;
    return (
      <div>
        <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                component='img'
                src={image}
                title='Imagen de la proteina'/>
            <CardContent>

                <LabelProduct
                    inStock={inStock}
                />
                <Typography className={classes.title} variant="headline" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    {brand}
                </Typography>
                
            </CardContent>

            <CardActions className={classes.action}>
                <Typography className={classes.price}  color='secondary' variant='title' component="p">
                   ${pricing.price.toLocaleString()}
                </Typography>
                <div className={classes.actionContainer}>

                    <IconButton
                        color="default"
                        className={classes.button}
                        aria-label="Agregar a carrito de compras"
                        onClick={this.props.onClick}
                    >
                        <AddShoppingCart className={classNames(classes.rightIcon, classes.iconSmall)}/>
                    </IconButton>

                </div>  
            </CardActions>

        </Card>
      </div>
    )
  }
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    pricing: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
};


export default withStyles(productCardStyle)(ProductCard);