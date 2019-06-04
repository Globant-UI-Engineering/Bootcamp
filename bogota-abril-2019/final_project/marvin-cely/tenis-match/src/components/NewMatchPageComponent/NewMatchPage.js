import React from '../../../node_modules/react';
import '../../css/NewMatchPage.css';
import { InConstructionComponent } from '../SmallPieceComponent';

class NewMatchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return(
      <React.Fragment>
        <InConstructionComponent thing={this.props.titlePage}/>
      </React.Fragment>
    );
  }
}

export default NewMatchPage;