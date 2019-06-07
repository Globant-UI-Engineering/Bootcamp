import React from 'react';
import '../../css/TournamentsPage.css';
import { observer } from 'mobx-react';
import TournamentPageTools from './TournamentPageTools';
import TableTournament from './TableTournament';
import TournamentCard from './TournamentCard';
import { LoadingComponent, ErrorServiceComponent, BackgroundImage } from '../SmallPieceComponent';
import { dataTournamentPage } from '../../data-component/data-tournament-page';
import thesaurus from '../../utils/thesaurus';
import utils from '../../utils/utils';


const TournamentsPage = observer(
  class TournamentsPage extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        bannerBackgroundDescription: dataTournamentPage.bannerBackgroundDescription,
        idTournamentSelected: dataTournamentPage.idTournamentSelectedDefault,
        counterCRUDAction: 0,
        counterTableAction: 0,
      }

      this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      if (name === 'editTournament' || name === 'addTournament') {
        this.setState({
          idTournamentSelected: value,
          // counterCRUDAction: this.state.counterCRUDAction + 1,
        });
      } 
      else {
        if (name === 'search') {
          this.props.store.tournamentsTable.searchValue = value;
        }
        this.setState({ counterTableAction: this.state.counterTableAction + 1 });
      }
    }

    render() { 
      const tournamentContent = () => {
        return(
          <main className="container"> 
            <TournamentPageTools handleInput={this.handleInput} store={this.props.store}/>
            <TableTournament counterAction={this.state.counterTableAction} store={this.props.store} onClick={this.handleInput}/>
          </main>        
        );
      }

      const store = this.props.store;
      const collectionsName = [ thesaurus.collectionsName.TOURNAMENTS, thesaurus.collectionsName.COUNTRIES];
      const statusComponent = [tournamentContent(), <LoadingComponent/>, <ErrorServiceComponent/>];
      const validationComponent = () => utils.validationService( store, collectionsName, statusComponent);

      return(
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

export default TournamentsPage;