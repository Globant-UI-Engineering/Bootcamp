import React from 'react';
import '../../css/TournamentsPage.css';
import { observer } from 'mobx-react';
import TournamentPageTools from './TournamentPageTools';
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
      }

      this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      // if (name === 'editPlayer' || name === 'addPlayer') {
      //   this.setState({
      //     idPlayerSelected: value,
      //     counterCRUDAction: this.state.counterCRUDAction + 1,
      //   });
      // } 
      // else {
      //   if(name === 'toggleOrder') {     
      //     this.props.store.playersTable.isAscending = !this.props.store.playersTable.isAscending;
      //   }
      //   else if (name === 'orderOption') {
      //     this.props.store.playersTable.orderType = value;
      //   }
      //   else if (name === 'search') {
      //     this.props.store.playersTable.searchValue = value;
      //   }
      //   this.setState({ counterTableAction: this.state.counterTableAction + 1 });
      // }
    }

    render() { 
      const tournamentContent = () => {
        return(
          <main className="container"> 
            <TournamentPageTools handleInput={this.handleInput} store={this.props.store}/>
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
          {/* <main>
            <TournamentCard scores={{winner: 2000, finalist: 1200}} tournamentName={'Grand Slam'}/>
          </main> */}
          {validationComponent()}        
        </React.Fragment>
      );
    }
  }
);

export default TournamentsPage;