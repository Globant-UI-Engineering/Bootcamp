import React from 'react';
import '../../css/TableTournament.css';
import TournamentCard from './TournamentCard'
import { autorun, toJS } from "mobx";
import { observer } from 'mobx-react';
import { dataTournamentsPage } from '../../data-component/data-tournaments-page';
import { NotFoundComponent } from '../SmallPieceComponent';
import utils from '../../utils/utils';

const TableTournament = observer(
  class TableTournament extends React.Component {
    constructor(props) {
      super(props);

      this.isUpdateTournaments = false;
      this.tournamentsUpdateDisposer = null;
      this.thereIsAction = this.thereIsAction.bind(this);
      this.orderTable = this.orderTable.bind(this);
      this.filterTable = this.filterTable.bind(this);
    }

    componentDidMount() { 
      this.filterTable(this.props.store.tournamentsTable.searchValue);
      this.orderTable(this.props.store.tournamentsTable.orderType);
      this.tournamentsUpdateDisposer = autorun(()=> {
        const _tournaments = this.props.store.tournaments;
        this.isUpdateTournaments = true;        
      })
    }
    
    componentWillUnmount() {
      this.tournamentsUpdateDisposer();
    }

    componentDidUpdate(prevProps) { 
      if(this.thereIsAction(prevProps) || this.isUpdateTournaments) {  
        this.filterTable(this.props.store.tournamentsTable.searchValue);
        this.orderTable(this.props.store.tournamentsTable.orderType);
        this.isUpdateTournaments = false;
      }
    }

    thereIsAction = (prevProps) => this.props.counterAction !== prevProps.counterAction;

    filterTable = (value) => { 
      const elementsToFilter = [ this.props.store.tournaments, value, dataTournamentsPage.orderButton[0].value];
      this.props.store.tournamentsTable.tournamentsList = utils.filterAllByArrayList(...elementsToFilter);
    }

    orderTable = (orderType) => {
      const elementsToSort = [ this.props.store.tournamentsTable.tournamentsList, orderType, this.props.store.tournamentsTable.isAscending];
      if(orderType === dataTournamentsPage.orderButton[0].value)
        this.props.store.tournamentsTable.tournamentsList = utils.sortByAlphaArrayList(...elementsToSort);
      else if(orderType === dataTournamentsPage.orderButton[1].value)
        this.props.store.tournamentsTable.tournamentsList = utils.sortByNumberArrayList(...elementsToSort);
    }

    render() {       
      const _tournamentsList = toJS(this.props.store.tournaments);
      const tournamentsList = this.props.store.tournamentsTable.tournamentsList.map(({id, tournamentName, winner, finalist, semifinalist, quarterfinal}) => {
        return (    
            <TournamentCard  key={id} tournamentName={tournamentName} scores={{winner, finalist, semifinalist, quarterfinal}} idTournament={id} onClick={this.props.onClick}/>
        );
      });

      const tournamentBoard = 
            <React.Fragment>
              <section className="row"> 
                {tournamentsList}
              </section> 
            </React.Fragment>;

      const resultSearchComponent = () => {
        return (tournamentsList.length === 0 && this.props.store.tournamentsTable.searchValue !== '') ?
          <NotFoundComponent thing={dataTournamentsPage.orderButton[0].namebutton}/> :
          tournamentBoard;
      }

      return(
        <React.Fragment>        
          <section role="table" 
            aria-label="Estadisticas de Jugadores" 
            summary="Tabla de los jugadores y sus esetadísticas">
              {resultSearchComponent()}
          </section>
          
            
        </React.Fragment>
      );
    }
  }
);

export default TableTournament;