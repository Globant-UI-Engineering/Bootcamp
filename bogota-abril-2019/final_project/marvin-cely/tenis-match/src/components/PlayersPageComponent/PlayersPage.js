import React from '../../../node_modules/react';
import '../../css/PlayersPage.css';
import { observer } from '../../../node_modules/mobx-react';
import { toJS } from "mobx";
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
        counterCRUDAction: 0,
        counterTableAction: 0,
        playersList: null,
      }      

      this.ToggleButtonRef = React.createRef();
      this.toggleOneTime = true;
      this.activeToggleButton = this.activeToggleButton.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.filterTable = this.filterTable.bind(this);// TODO: probable pasarlo a PlayerTable
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      if (name === 'orderOption') {
        this.setState({ counterTableAction: this.state.counterTableAction + 1 });
        this.props.store.playersTable.orderType = value;
      }
      else if (name === 'search') {
        //TODO:...
      }
      else if (name === 'editPlayer' || name === 'addPlayer') {
        this.setState({
          idPlayerSelected: value,
          counterCRUDAction: this.state.counterCRUDAction + 1,
        });
      }  
    }

    filterTable = (value) => {// TODO: considerar si no poner el buscar...Resolver actualización de estados de players y playerTable
      const elementsToFilter = [ this.props.store.players, value];// TODO: Revisar comportamiento del this.playersTable en el store
      // this.props.store.players = utils.filterAllByArrayList(...elementsToFilter);
    }

    activeToggleButton = () => {
      for (const iterator of this.ToggleButtonRef.current.children) {
        if (iterator.firstChild.hasAttribute("value") && iterator.firstChild.value === this.props.store.playersTable.orderType) {
          iterator.classList.add('active');
        }
      }
    }

    componentDidMount() {
      if (this.ToggleButtonRef.current !== null) {
        this.activeToggleButton();
        this.toggleOneTime = false;
      }      
    }

    componentDidUpdate(_prevProps) {
      if (this.toggleOneTime && this.ToggleButtonRef.current !== null) {
        this.activeToggleButton();
        this.toggleOneTime = false;
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
              <header className="row">                   
                <section className="col-md-8">
                  <div className="row">
                    <form className="col-lg-4">
                      <fieldset>
                        <input type="text" className="form-control form-control-md" placeholder="Buscar" name='search' onChange={this.handleInput}/>
                      </fieldset>
                    </form>  
                    <section className="col-lg-8">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons" ref={this.ToggleButtonRef}>        
                        <span className="badge badge-info">
                          <i className="fas fa-sort-amount-up"></i>
                        </span>
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
                  {/* <p className="text-muted">Total inscritos 17</p> TODO: Poner total inscritos*/}
                </section> 
              </header>
            </section>
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