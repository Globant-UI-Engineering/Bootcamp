import React from '../../../node_modules/react';
import '../../css/NewMatchPage.css';
import { InConstructionComponent } from '../SmallPieceComponent'

class NewMatchPage extends React.Component {
  render() { 
    return(
      <React.Fragment>
        <InConstructionComponent thing={'Nuevo Partido'}/>
      </React.Fragment>
    );
  }
}

export default NewMatchPage;