import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './PivotFunction.css';
import * as SelectedDataActions from '../../../actions/SelectedDataActions';
import {filterData} from './FilterOptions'

class PivotFunction extends Component {

    onPivotChange(e){
        e.preventDefault();

        const {id, value} = e.target;

        this.triggerActionsInProps(id, value);

    }

    triggerActionsInProps(id, value){
        switch (id) {
            case 'fact':
                this.props.SelectedDataActions.setFactSelected(value);
                break;
            case 'market':
                this.props.SelectedDataActions.setMarketSelected(value);
                break;
            case 'category':
                this.props.SelectedDataActions.setCategorySelected(value);
                break;
            default:

        }

    }

    renderFooter(){
        return(
            <div className="text-left card-footer">
                <p className="card-text">Fact: {this.props.selectedData.factSelected} </p>
                <p className="card-text">Market: {this.props.selectedData.marketSelected}</p>
                <p className="card-text">Category: {this.props.selectedData.categorySelected}</p>
            </div>
        );
    }

    getOptions(id = ''){
        var filterOptions = [];
        var optionsToRender = [];

        switch (id) {
            case 'fact':
                filterOptions = filterData(this.props.data, 0);
                break;

            case 'market':
                filterOptions = filterData(this.props.data, 1);
                break;

            case 'category':
                filterOptions = filterData(this.props.data, 2);
                break;

            default:
                filterOptions.push('');
        }

        optionsToRender = filterOptions.map((data, i) => {
            return(
                <option key={i} > {data} </option>
            );
        });

        return optionsToRender;
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title" aria-label="Select Info">
                        Select your data for the next pivots
                    </h5>
                </div>
                <div className="card-body">
                    <form className="form">
                        <label htmlFor="fact">Facts:</label>
                        <select
                            type="text"
                            id="fact"
                            className="form-control"
                            aria-label="Facts"
                            onChange={this.onPivotChange.bind(this)}>
                            {this.getOptions('fact')}
                        </select>
                        <label htmlFor="market">Markets:</label>
                        <select
                            type="text"
                            id="market"
                            className="form-control"
                            aria-label="Markets"
                            onChange={this.onPivotChange.bind(this)}>
                            {this.getOptions('market')}
                        </select>
                        <label htmlFor="category">Categories:</label>
                        <select
                            type="text"
                            id="category"
                            className="form-control"
                            aria-label="Categories"
                            onChange={this.onPivotChange.bind(this)}>
                            {this.getOptions('category')}
                        </select>
                    </form>
                </div>
                {this.renderFooter()}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedData: {
            factSelected: state.selectedData.selectedData.factSelected,
            marketSelected: state.selectedData.selectedData.marketSelected,
            categorySelected: state.selectedData.selectedData.categorySelected
        },
        data: state.data.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SelectedDataActions: bindActionCreators(SelectedDataActions, dispatch),
    }
}

PivotFunction = connect(mapStateToProps, mapDispatchToProps)(PivotFunction);

export default PivotFunction;
