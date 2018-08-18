import React, { Component } from 'react';
import './home.css';
import WhatFractals from './home-whatFractals.js';
import WhatApp from './home-whatApp.js';

class Home extends Component {
  render(){
    return (
      <section className='homePage'>
        <WhatFractals />
        <WhatApp />
      </section>
    );
  }
}

export default Home;
