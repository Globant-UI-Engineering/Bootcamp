import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import {Paper, Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import labelProductStatusStyle from '../../assets/jss/styles/LabelProductStatusStyle.jsx';


const LabelProductStatus = ({...props} ) => {

    const {
        classes,
        inStock,
    } = props;

    const labelTitle = classnames({
        'AGOTADO': !inStock,
        'PRODUCTO': inStock
    });

    const labelClasses = classnames({
        [classes.labelOutOfStock]: !inStock,
        [classes.labelInStock]: inStock,
    });

    return (
        <Paper className={labelClasses} color='secondary'>
            <Typography component="span">
                {labelTitle}
            </Typography>
        </Paper>
    )
};

LabelProductStatus.propTypes = {
    classes: PropTypes.object.isRequired,
    inStock: PropTypes.bool,
};

export default withStyles(labelProductStatusStyle)(LabelProductStatus)