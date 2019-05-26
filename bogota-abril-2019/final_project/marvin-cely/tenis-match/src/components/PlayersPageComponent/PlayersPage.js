import React from 'react';
import '../../css/PlayersPage.css';
import { observer } from 'mobx-react';
import TablePlayer from './TablePlayer';
import ModalAddPlayer from './ModalAddPlayer';
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
      }
      this.handleInput = this.handleInput.bind(this);
      this.orderTable = this.orderTable.bind(this);
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      if (name === 'orderOption') {
        this.orderTable(value);
      }      
    }
    
    orderTable = (value) => {
      switch (value) {
        case 'name':
          this.props.store.players = utils.sortByAlphaArrayList(this.props.store.players, value);
          break;
        case 'birthDate':
          this.props.store.players = utils.sortByAgeArrayList(this.props.store.players, value, utils.getAge);
          break;
        case 'ranking':
          this.props.store.players = utils.sortByNumberArrayList(this.props.store.players, value);
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
                    data-target="#modalAddPlayer">
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
            <ModalAddPlayer store={this.props.store}/>      
            <TablePlayer store={this.props.store}/>
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