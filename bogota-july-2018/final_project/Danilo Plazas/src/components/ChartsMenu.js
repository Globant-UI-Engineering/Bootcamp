import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import barChartImg from '../imgs/BarChart.png'
import pieChartImg from '../imgs/PieChart.png'
import lineChartImg from '../imgs/LineChart.png'
import tableDataImg from '../imgs/TableData.png'

import './css/index.css';

class ChartsMenu extends Component {
    render(){
        return(
            <div className="mw-100 mt-4 container">
                <div className="mt-5 row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">
                                    <Link to="/GraphBar" aria-current="page">Bar Chart</Link>
                                </h5>
                            </div >
                            <div className="card-body">
                                <img src={barChartImg} className="max-width-75" alt="Bar Chart"/>
                            </div>
                            <div className="card-footer">
                                <p className="card-text">
                                    A bar graph is a visual representation of the data that the user has previously loaded in a horizontal way,
                                    which allows him to know in which iteration he had a greater growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">
                                    <Link to="/GraphPie" aria-current="page">Pie Chart</Link>
                                </h5>
                            </div>
                            <div className="card-body">
                                <img src={pieChartImg} className="max-width-75" alt="Pie Chart"/>
                            </div>
                            <div className="card-footer">
                                <p className="card-text">
                                    A pie chart is a visual representation of the data that the user previously
                                    charged in a circular manner that lets you see how much weight had a category
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">
                                    <Link to="/GraphLine" aria-current="page">Line Chart</Link>
                                </h5>
                            </div>
                            <div className="card-body">
                                <img src={lineChartImg} className="max-width-75" alt="Line Chart"/>
                            </div>
                            <div className="card-footer">
                                <p className="card-text">
                                    A line graph is a visual representation that allows you to see how much
                                    growth or decrease a category had during a certain period of time
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">
                                    <Link to="/GraphTable" aria-current="page">Table Data</Link>
                                </h5>
                            </div>
                            <div className="card-body">
                                <img src={tableDataImg} className="max-width-75" alt="Data Table"/>
                            </div>
                            <div className="card-footer">
                                <p className="card-text">
                                    A data table allows you to see the absolute data of all the loaded information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChartsMenu;
