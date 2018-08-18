import React, { Component } from 'react';
import PropTypes from 'prop-types';
import homeStyle from '../../assets/jss/styles/views/homeStyle.jsx'; 
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { ProductCard, PopularCategoriesCard } from '../../components';

const products = [
  { id: 1, name: 'Whey Gold Standard', provider: 'Optimum Nutrition', price: 129900 },
  { id: 2, name: 'NitroTech', provider: 'MuscleTech', price: 125000 },
  { id: 3, name: 'Super Mass Gainer', provider: 'Dymatize', price: 129000 },
  { id: 4, name: 'Whey HD', provider: 'Bpi', price: 135000 },
]

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div> 
        <Grid className={classes.container} container>
          <Grid item xs={12}>
            <Paper className={classes.slider}>
              <img src="" alt=""/>
            </Paper>
          </Grid>
        </Grid>

        <section className={classes.containerCategories}>
          <Typography  className={classes.categoriesTitle} component='h2' >
            Categorías Populares
          </Typography>
          <Grid container justify='center'  >
            <PopularCategoriesCard />
          </Grid>
        </section>

      </div>
    )
  }
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeStyle)(Home);