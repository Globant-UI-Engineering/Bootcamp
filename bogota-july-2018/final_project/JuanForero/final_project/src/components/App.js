//Dependencies
import React, { Component } from 'react';
import PropType  from 'prop-types';
//Components
import Header from  './global/Header';
import Content from  './global/Content';
import Footer from  './global/Footer';
import ConectorContentFooter from './global/ConectorContentFooter';
//Styles
import './global/styles/App.css';
//Data
import navItemsFooter from '../data/menuFooter';
import navItemsHeader from '../data/menuHeader';

class App extends Component {
  static propTypes={
    children: PropType.object.isRequired,
  }
  render() {
    const{children}=this.props;
    return (
      <div className="App">
          <Header headerNav={navItemsHeader}/>
          <Content body={children} />
          <ConectorContentFooter />
          <Footer  footerNav={navItemsFooter}/>
      </div>
    );
  }
}

export default App;
