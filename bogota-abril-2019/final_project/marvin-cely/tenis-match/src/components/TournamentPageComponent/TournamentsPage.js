import React from 'react';
import '../../css/TournamentsPage.css';
import { observer } from 'mobx-react';
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
    }

    render() { 
      const tournamentContent = () => {
        return(
          <section>
            {this.props.store.tournaments.length}
          </section>        
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