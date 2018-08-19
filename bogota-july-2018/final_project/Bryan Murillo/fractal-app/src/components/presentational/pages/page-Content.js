import React, { Component } from 'react';
import PageHome from './page-Home';
import PageGraph from './page-Graph';

class PageContent extends Component {

  render(){
    console.log(this.props.page);
    if (this.props.page === 'HOME') {
      return React.createElement(PageHome);
    } else {
      return React.createElement(PageGraph, {page: this.props.page});
    }
  }
}

export default PageContent;
