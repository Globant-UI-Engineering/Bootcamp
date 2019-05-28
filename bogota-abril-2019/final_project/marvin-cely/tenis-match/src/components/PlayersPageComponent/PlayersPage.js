import React from '../../../node_modules/react';
import '../../css/PlayersPage.css';
import { observer } from '../../../node_modules/mobx-react';
import TablePlayer from './TablePlayer';
import ModalCRUDPlayer from './ModalCRUDPlayer';
import utils from '../../utils/utils';
import { LoadingComponent, ErrorServiceComponent } from '../SmallPieceComponent';
import thesaurus from '../../utils/thesaurus';

const PlayersPage = observer(
  class PlayersPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nameComponent: 'Jugadores',
        newPlayerButton: {
          name: 'Inscribir jugador',
          icon: 'fas fa-user-plus',
        },
        orderButton: [{
            value: 'name',
            namebutton: 'Nombre'
          },
          { 
            value: 'birthDate',
            namebutton: 'Edad'
          }, 
          {
            value: 'ranking',
            namebutton: 'Puntaje'
        }],
        idPlayerSelected: 'newPlayer',
      }
      this.handleInput = this.handleInput.bind(this);
      this.orderTable = this.orderTable.bind(this);
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      if (name === 'orderOption') this.orderTable(value);
      else if (name === 'editPlayer' || name === 'addPlayer') {
        this.setState({
          idPlayerSelected: value,
        });
      }  
    }

    orderTable = (value) => {
      const elementsToSort = [ this.props.store.players, value]
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
                {namebutton}
              </label>
            );
        });
      };

      const tableContent = () => {
        return(
          <main className="container">    
            <section className="sticky-top">
              <header>                
                <section>
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
                <section>
                  <h5 className="text-muted">Ordenar Lista:</h5>
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    {orderOption()}
                  </div>
                </section>
              </header>
            </section>
            <ModalCRUDPlayer store={this.props.store} idPlayerSelected={this.state.idPlayerSelected}/>      
            <TablePlayer store={this.props.store} onClick={this.handleInput}/>
          </main>
        );
      };

      const store = this.props.store;
      const collectionsName = [ thesaurus.collectionsName.PLAYERS, thesaurus.collectionsName.COUNTRIES];
      const statusComponent = [tableContent(), <LoadingComponent/>, <ErrorServiceComponent/>];
      const validationComponent = () => utils.validationService( store, collectionsName, statusComponent);

      return (
        <React.Fragment>
          <aside>
            <figure aira-lable="Foto de la pagina jugadores">
              <figcaption>{this.state.nameComponent}</figcaption>
            </figure>
          </aside>        
          {validationComponent()}
        </React.Fragment>
      );
    }
  }
);

export default PlayersPage;