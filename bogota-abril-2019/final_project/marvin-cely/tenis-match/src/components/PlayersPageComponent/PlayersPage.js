import React from '../../../node_modules/react';
import '../../css/PlayersPage.css';
import { observer } from '../../../node_modules/mobx-react';
import TablePlayer from './TablePlayer';
import ModalCRUDPlayer from './ModalCRUDPlayer';
import utils from '../../utils/utils';
import { LoadingComponent, ErrorServiceComponent } from '../SmallPieceComponent';
import thesaurus from '../../utils/thesaurus';
import { dataPlayersPage } from '../../data-component/data-players-page';

const PlayersPage = observer(
  class PlayersPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newPlayerButton: dataPlayersPage.newPlayerButton,
        orderButton: dataPlayersPage.orderButton,
        idPlayerSelected: 'newPlayer',
        counterAction: 0,
      }      

      this.handleInput = this.handleInput.bind(this);
      this.orderTable = this.orderTable.bind(this);
      this.filterTable = this.filterTable.bind(this);
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      if (name === 'orderOption') this.orderTable(value);
      else if(name === 'search') this.filterTable(value);
      else if (name === 'editPlayer' || name === 'addPlayer') {
        this.setState({
          idPlayerSelected: value,
          counterAction: this.state.counterAction + 1,
        });
      }  
    }

    filterTable = (value) => {// TODO: considerar si no poner el buscar...Resolver actualización de estados de players y playerTable
      const elementsToFilter = [ this.props.store.players, value];// TODO: Revisar comportamiento del this.playersTable en el store
      // this.props.store.players = utils.filterAllByArrayList(...elementsToFilter);
    }

    orderTable = (value) => {
      const elementsToSort = [ this.props.store.players, value];
      switch (value) {
        case 'name':
          this.props.store.players = utils.sortByAlphaArrayList(...elementsToSort);
          break;
        case 'birthDate':
          this.props.store.players = utils.sortByAgeArrayList(...elementsToSort, utils.getAge);
          break;
        case 'ranking':
          this.props.store.players = utils.sortByNumberArrayList(...elementsToSort);
          break;   
        default:
          break;
      }
    }

    render() {   
      const orderOption = () => {
        return this.state.orderButton.map(({value, namebutton}, index) => { 
            return(
              <label className="btn btn-info" key={index}>
                <input type="radio" name="orderOption" value={value} onFocus ={this.handleInput} autoComplete="off"/> 
                <i className="fas fa-sort-amount-up"></i>&nbsp;
                {namebutton}
              </label>
            );
        });
      };

      const tableContent = () => {
        return(
          <main className="container">    
            <section className="sticky-top">
              <header className="row">                   
                <section className="col-md-8">
                  <div className="row">
                    <form className="col-lg-4">
                      <fieldset>
                        <input type="text" className="form-control form-control-md" placeholder="Buscar" name='search' onChange={this.handleInput}/>
                      </fieldset>
                    </form>  
                    <section className="col-lg-8">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        {orderOption()}
                      </div>
                    </section>                               
                  </div>
                </section>
                <section className="col-md-4">
                  <button type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#ModalCRUDPlayer"
                    name="addPlayer"
                    value="newPlayer"
                    onClick={this.handleInput}
                    >
                      <i className={this.state.newPlayerButton.icon}></i>
                      &nbsp;{this.state.newPlayerButton.name}
                  </button>
                </section> 
              </header>
            </section>
            <ModalCRUDPlayer counterAction={this.state.counterAction} store={this.props.store} idPlayerSelected={this.state.idPlayerSelected}/>      
            <TablePlayer store={this.props.store} onClick={this.handleInput}/>
          </main>
        );
      };

      const store = this.props.store;
      const collectionsName = [ thesaurus.collectionsName.PLAYERS, thesaurus.collectionsName.COUNTRIES];
      const statusComponent = [tableContent(), <LoadingComponent/>, <ErrorServiceComponent/>];
      const validationComponent = () => utils.validationService( store, collectionsName, statusComponent);//TODO: Poner la copia de playerTable y verificar comportamiento en CRUD

      return (
        <React.Fragment>
          <aside>
            <figure aira-lable="Foto de la pagina jugadores">
              <figcaption>{this.props.titlePage}</figcaption>
            </figure>
          </aside>        
          {validationComponent()}
        </React.Fragment>
      );
    }
  }
);

export default PlayersPage;