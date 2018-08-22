import React, { Component } from 'react';
import { items } from "../data/menu.json"
import PropTypes from "prop-types";

import './Global/css/App.css';
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import Content from "./Global/Content"; 



class App extends Component {
    static propTypes ={
        children: PropTypes.object.isRequired
    };    
  
    render() {
        const url = window.location.pathname;
        const {children}= this.props
        return (
            <div className={"App" + (url==="/home"|url==="/" ? ' home' : ' sub-pages') }>            
                <Header items={items}/>          
                <Content body={children} />
                <Footer />
            </div>
        );
    }
}

export default App;
