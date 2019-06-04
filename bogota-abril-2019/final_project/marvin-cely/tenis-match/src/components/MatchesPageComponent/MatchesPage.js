import React from '../../../node_modules/react';
import '../../css/MatchesPage.css';
import { InConstructionComponent } from '../SmallPieceComponent'

class MatchesPage extends React.Component {
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

export default MatchesPage;