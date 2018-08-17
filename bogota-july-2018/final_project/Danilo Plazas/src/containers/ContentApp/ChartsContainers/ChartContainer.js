import React, { Component } from 'react';
import Chart from 'react-google-charts';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {filterData, filterOnlyTheColumnsNeeded,
        parseFloatArray, trasposeArray, deleteRow} from './FilterData';

import { optionsChart } from './assets/OptionsFile.json';
import './assets/styles.css';

class ChartData extends Component {

    defineOptionsChart(){

        var {chartType} = this.props;
        var options = optionsChart[chartType];

        var { factSelected,
            marketSelected,
            categorySelected
        } = this.props.selectedData;

        options = {
            ...options,
            title: "Market: " + marketSelected + " - Category: " + categorySelected,
            animation: {duration: 1000, easing: 'out', startup: true}
        }

        return options;

    }

    verifyRenderChart(){

        var {chartType} = this.props;

        var { factSelected,
            marketSelected,
            categorySelected
        } = this.props.selectedData;

        var options = this.defineOptionsChart();

        if (!this.props.isCharged) {
            return (
                <div class="p-3 mb-2 bg-danger text-white">
                    Please Charge the info
                </div>
            );
        }else if (
                    factSelected === '' ||
                    marketSelected === '' ||
                    categorySelected === ''
                 ) {
             return (
                 <div class="p-3 mb-2 bg-warning text-dark">
                     Please select the info for the graph
                 </div>
             );
        }else {
            return (
                <Chart
                  chartType={chartType}
                  width="100%"
                  height="700px"
                  options={options}
                  data={this.getDataToGraph()}
                />
            );
        }

    }

    getDataToGraph(){
        const {
            factSelected,
            marketSelected,
            categorySelected
        } = this.props.selectedData;

        const {chartType} = this.props;

        var dataToGraph = [];

        if (
            !(factSelected === '' ||
            marketSelected === '' ||
            categorySelected === '')
        ) {

            dataToGraph = filterData(
                this.props.data, {
                    factSelected,
                    marketSelected,
                    categorySelected
                });

            dataToGraph = filterOnlyTheColumnsNeeded(
                dataToGraph,
                3);

            dataToGraph = parseFloatArray(dataToGraph);

            if (chartType === "PieChart" || chartType === "ColumnChart")
                {dataToGraph = deleteRow(dataToGraph, 1);}

            if (chartType !== "PieChart" && chartType !== "Table")
                 {dataToGraph = trasposeArray(dataToGraph);}
        }

        return dataToGraph;
    }

    render() {
        return (
            <div>
                {this.verifyRenderChart()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.data,
        isCharged: state.data.isCharged,
        selectedData: state.selectedData.selectedData,
    }
}

ChartData = withRouter(connect(mapStateToProps, null)(ChartData));

export default ChartData;
