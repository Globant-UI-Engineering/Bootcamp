import React from 'react';

import News from '../../components/news/News';
import Headlines from '../../components/headlines/Headlines';

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <News />
        <Headlines />
      </div>
    );
  }
}

export default Main;
