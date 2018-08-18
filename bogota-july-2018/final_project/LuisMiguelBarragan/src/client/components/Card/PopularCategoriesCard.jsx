import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from "@material-ui/core";
import popularCategoriesCardStyle from '../../assets/jss/styles/popularCategoriesCardStyle.jsx';
import slider from '../../assets/img/slider.jpg';



const PopularCategoriesCard = ({ classes }) => (
    <Grid className={classes.container} container spacing={16} >
        <Grid item xs={6} sm={8} >
            <Paper>
                <Typography className={classes.cardTitle} component='h3'>Proteinas</Typography>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={4} >
            <Paper>
                <Typography className={classes.cardTitle} component='h3'>Alimentos</Typography>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
            <Paper>
                <Typography className={classes.cardTitle} component='h3'>Vitaminas</Typography>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={8}>
            <Paper>
                <Typography className={classes.cardTitle} component='h3'>Nuevos Productos</Typography>
            </Paper>
        </Grid>
    </Grid>
);

PopularCategoriesCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(popularCategoriesCardStyle)(PopularCategoriesCard);