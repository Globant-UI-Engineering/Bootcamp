import React from 'react';
import '../../css/PlayersPage.css';
import { observer } from 'mobx-react';
import TablePlayer from './TablePlayer';
import ModalCRUDPlayer from './ModalCRUDPlayer';
import utils from '../../utils/utils';
import { LoadingComponent, ErrorServiceComponent, BackgroundImage } from '../SmallPieceComponent';
import thesaurus from '../../utils/thesaurus';
import { dataPlayersPage } from '../../data-component/data-players-page';
import PlayerPageTools from './PlayerPageTools';

const PlayersPage = observer(
  class PlayersPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bannerBackgroundDescription: dataPlayersPage.bannerBackgroundDescription,
        idPlayerSelected: dataPlayersPage.idPlayerSelectedDefault,
        counterCRUDAction: 0,
        counterTableAction: 0,
      }      
      this.handleInput = this.handleInput.bind(this);      
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      if (name === 'editPlayer' || name === 'addPlayer') {
        this.setState({
          idPlayerSelected: value,
          counterCRUDAction: this.state.counterCRUDAction + 1,
        });
      } 
      else {        
        if (name === 'search')
          this.props.store.playersTable.searchValue = value;
          
        this.setState({ counterTableAction: this.state.counterTableAction + 1 });
      }
    }

    render() {   
      const tableContent = () => {
        return(
          <main className="container">    
            <PlayerPageTools handleInput={this.handleInput} store={this.props.store}/>
            <ModalCRUDPlayer counterAction={this.state.counterCRUDAction} store={this.props.store} idPlayerSelected={this.state.idPlayerSelected}/>      
            <TablePlayer counterAction={this.state.counterTableAction} store={this.props.store} onClick={this.handleInput}/>
          </main>
        );
      };

      const store = this.props.store;
      const collectionsName = [ thesaurus.collectionsName.PLAYERS, thesaurus.collectionsName.COUNTRIES];
      const statusComponent = [tableContent(), <LoadingComponent/>, <ErrorServiceComponent/>];
      const validationComponent = () => utils.validationService( store, collectionsName, statusComponent);

      return (
        <React.Fragment>
          <BackgroundImage 
            titleBanner={this.props.titlePage} 
            a11yDescription={this.state.bannerBackgroundDescription}/>   
          {validationComponent()}
        </React.Fragment>
      );
    }
  }
);

export default PlayersPage;