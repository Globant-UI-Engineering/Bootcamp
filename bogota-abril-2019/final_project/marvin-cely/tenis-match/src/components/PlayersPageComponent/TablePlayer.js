import React from '../../../node_modules/react';
import '../../css/TablePlayer.css';
import { autorun, toJS } from "mobx";
import { observer } from '../../../node_modules/mobx-react';
import { dataPlayersPage } from '../../data-component/data-players-page';
import { ImageCountry, NotFoundComponent } from '../SmallPieceComponent';
import utils from '../../utils/utils';
import thesaurus from '../../utils/thesaurus';

const TablePlayer = observer(
  class TablePlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        flagSize: 64,
        NATIONALITY: thesaurus.elementKey.NATIONALITY,
        NATIONALITY_ABBREVIATION: thesaurus.elementKey.NATIONALITY_ABBREVIATION,
      }

      this.isUpdatePlayers = false;
      this.playersUpdateDisposer = null;
      this.thereIsAction = this.thereIsAction.bind(this);
      this.orderTable = this.orderTable.bind(this);
      this.filterTable = this.filterTable.bind(this);
    }

    componentDidMount() { 
      this.filterTable(this.props.store.playersTable.searchValue);
      this.orderTable(this.props.store.playersTable.orderType);
      this.playersUpdateDisposer = autorun(()=> {
        const _players = this.props.store.players;
        this.isUpdatePlayers = true;        
      })
    }

    componentWillUnmount() {
      this.playersUpdateDisposer();
    }

    componentDidUpdate(prevProps) {      
      if(this.thereIsAction(prevProps) || this.isUpdatePlayers) {  
        this.filterTable(this.props.store.playersTable.searchValue);
        this.orderTable(this.props.store.playersTable.orderType);
        this.isUpdatePlayers = false;
      }
    }

    thereIsAction = (prevProps) => this.props.counterAction !== prevProps.counterAction;

    filterTable = (value) => { 
      const elementsToFilter = [ this.props.store.players, value, dataPlayersPage.orderButton[0].value];
      this.props.store.playersTable.playersList = utils.filterAllByArrayList(...elementsToFilter);
    }

    orderTable = (orderType) => {
      const elementsToSort = [ this.props.store.playersTable.playersList, orderType, this.props.store.playersTable.isAscending];
      switch (orderType) {
        case dataPlayersPage.orderButton[0].value:
          this.props.store.playersTable.playersList = utils.sortByAlphaArrayList(...elementsToSort);
          break;
        case dataPlayersPage.orderButton[1].value:
            const countriesList = toJS(this.props.store.countries);   
            this.props.store.playersTable.playersList = utils.sortByCountryList(...elementsToSort, countriesList);
            break;
        case dataPlayersPage.orderButton[2].value:
          this.props.store.playersTable.playersList = utils.sortByAgeArrayList(...elementsToSort);
          break;
        case dataPlayersPage.orderButton[3].value:
          this.props.store.playersTable.playersList = utils.sortByNumberArrayList(...elementsToSort);
          break;   
        default:
          break;
      }
    }

    render() { 
      const tableHeader = (headerList) => {
        return(
          <section className="row">
            <article className="col-10">
              <div className="row">
                <h4 className="col-md-3" role="columnheader">{headerList.name}</h4>
                <h4 className="col-md-3" role="columnheader">{headerList.nationality}</h4>
                <h4 className="col-md-3" role="columnheader">{headerList.age}</h4>
                <h4 className="col-md-3" role="columnheader">{headerList.ranking}</h4>
              </div>
            </article>
            <span className="col-md-2"></span>
          </section>
        );
      }

      const countries = this.props.store.countries;    
      const _playersList = toJS(this.props.store.players);
      const playersList = this.props.store.playersTable.playersList.map(({id, name, idCountry, birthDate, ranking}) => {
        return (
          <section className="row" key={id} role="row">            
            <article className="col-10">
              <div className="row">
                <p className="col-md-3" role="cell">
                  {name}
                </p>
                <p className="col-md-3" role="cell">
                    <ImageCountry
                      abbreviation={countries.get(idCountry)[this.state.NATIONALITY_ABBREVIATION]}
                      shinyTheme={true}
                      flagSize={this.state.flagSize}
                      countryName={countries.get(idCountry)[this.state.NATIONALITY]}
                    />
                </p>
                <p className="col-md-3" role="cell">
                  {utils.getAge(birthDate)}
                  &nbsp;<span className="d-inline d-md-none">años</span>
                </p>
                <p className="col-md-3" role="cell">
                  {ranking}&nbsp;<span className="d-inline d-md-none">puntos</span>
                </p>
              </div>
            </article>
            <section className="col-2">
              <button type="button" className="btn btn-light" role="cell" aria-label="opciones" title="Opciones" data-toggle="modal" data-target="#ModalCRUDPlayer" name="editPlayer" value={id} onClick={this.props.onClick}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </section>   
          </section>
        );
      });

      const resultSearchComponent = () => {
        return (playersList.length === 0 && this.props.store.playersTable.searchValue !== '') ?
          <NotFoundComponent thing={dataPlayersPage.playerListHeader.name}/> :          
          playersList;
      }

      return(
        <React.Fragment>        
          <section role="table" 
            aria-label="Estadisticas de Jugadores" 
            summary="Tabla de los jugadores y sus esetadísticas">
              <section className="sticky-top d-none d-md-block" role="heading">
                {tableHeader(dataPlayersPage.playerListHeader)}
              </section>
              {resultSearchComponent()}
          </section>
        </React.Fragment>
      );
    }
  }
);

export default TablePlayer;