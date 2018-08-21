import React, { Component } from 'react';
import KochGraph from '../../containers/fractals/koch-Graph';
import { Input } from 'reactstrap';

class PageGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      iterations: 1
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
      iterations: e.target.value
    })
  }
  render(){
    let {iterations} = this.state;

    return(
      <article>
        <h2>this is the <span>{this.props.page}</span> graph!</h2>
        <p>Select the level of the iteration and look the fractal!</p>
        <KochGraph iteration={iterations}/>
        <Input type='range' min='1' max='4' value={iterations} aria-label='Number of Iterations' onChange={(e) => this.handleOnChange(e)}/>
      </article>
    );
  }
}

export default PageGraph;
