import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import './css/index.css';

class LoadData extends Component {

    constructor(){
        super();

        this.readCSV = this.readCSV.bind(this);
    }

    readCSV(e){
        this.props.onDataCharge(e);
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" aria-label="Input CSV">Please select the data</h5>
                    <label htmlFor="CSVInput" className="visuallyhidden">Upload CSV</label>
                    <CSVReader
                        id="csvreader"
                        onFileLoaded={this.readCSV}
                        inputId="CSVInput"
                        aria-required="true"/>
                </div>
            </div>
        );
    }
}

export default LoadData;
