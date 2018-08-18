import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/actions/cart.js';


import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import proteinPageStyle from '../../assets/jss/styles/views/proteinPageStyle.jsx';
import PropTypes from 'prop-types';
import { getProteinProducts } from '../../api/product.js';
import ProductCard from '../../components/Card/ProductCard.jsx';


class FoodPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            status: false
        };
    };

    componentDidMount() {
        console.log(this.props.match.params.category);
        getProteinProducts(this.props.match.params.category)
            .then( products => {
                this.setState( () => ({
                    products: products.data
                }));
            })
    }

    addToCart = item => {
        this.props.addCartItem(item)
    };

    render() {
        const { products } = this.state;
        const { classes } = this.props;
        return (
            <section className={classes.container}>
                <Grid container wrap='wrap' justify='center' spacing={16} >
                    { products.map( (feature) => {
                        return (
                            <Grid item key={feature._id}>
                                <ProductCard
                                    {...feature}
                                    onClick={() => this.addToCart({ ...feature })}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </section>
        );
    }
}

FoodPage.propTypes = {
    classes: PropTypes.object.isRequired,
    addCartItem: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCartItem }, dispatch)
}

export default connect(null, mapDispatchToProps)(withStyles(proteinPageStyle)(FoodPage));