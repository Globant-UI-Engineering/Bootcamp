import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './css/index.css';

class HeaderApp extends Component {

    renderMsg(message, charged){
        if (charged) {
            return(
                <span className="badge badge-pill badge-success ml-2">
                  {message}
                </span>
            );
        }else {
            return(
                <span className="badge badge-pill badge-danger ml-2">
                  {message}
                </span>
            );
        }
    }

    renderAddInfo(info){
        if (info === '') {
            return null;
        }else {
            return(
                <span className="badge badge-light ml-2">
                  {info}
                </span>
            );
        }
    }

    render(){

        const {message, charged, addInf} = this.props;

        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-labelledby="mainmenulabel">
                    <h2 id="mainmenulabel" className="visuallyhidden">App Graph</h2>
                    <Link to="/index" className="navbar-brand text-white" aria-current="page">App Graph</Link>
                    <nav className="navbar-nav mr-2 mt-2 mt-lg-0" aria-labelledby="secondarymenulabel">
                        <h2 id="secondarymenulabel" className="visuallyhidden">Kind of Charts</h2>
                        <Link to="/GraphBar" className="pl-2 text-white" aria-current="page">Bar Graph</Link>
                        <Link to="/GraphPie" className="pl-2 text-white" aria-current="page">Pie Graph</Link>
                        <Link to="/GraphLine" className="pl-2 text-white" aria-current="page">Line Graph</Link>
                        <Link to="/GraphTable" className="pl-2 text-white" aria-current="page">Table</Link>
                    </nav>
                    {this.renderMsg(message, charged)}
                    {this.renderAddInfo(addInf)}
                </nav>
            </header>
        );
    }
}

export default HeaderApp;
