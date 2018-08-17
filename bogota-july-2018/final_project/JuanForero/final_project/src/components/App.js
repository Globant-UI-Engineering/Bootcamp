//Dependencies
import React, { Component } from 'react';
import PropType  from 'prop-types';
//Components
import Header from  './global/Header';
import Content from  './global/Content';
import Footer from  './global/Footer';
//Styles
import './global/styles/App.css';
//Data
import navItems from '../data/menuFooter';


class App extends Component {
  static propTypes={
    children: PropType.object.isRequired,
  }
  render() {
    const{children}=this.props;
    return (
      <div className="App">
          <Header />
          <Content body={children} />
          <Footer  footerNav={navItems}/>
      </div>
    );
  }
}

export default App;
