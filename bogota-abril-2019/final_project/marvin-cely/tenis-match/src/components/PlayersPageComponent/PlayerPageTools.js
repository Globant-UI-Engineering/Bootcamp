import React from 'react';
import '../../css/PlayerPageTools.css';
import { observer } from 'mobx-react';
import { dataPlayersPage } from '../../data-component/data-players-page';


const PlayerPageTools = observer(
  class PlayerPageTools extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        orderButton: dataPlayersPage.orderButton,
        newPlayerButton: dataPlayersPage.newPlayerButton,
        inscribedMessage: dataPlayersPage.inscribedMessage,
      }   

      this.ToggleButtonRef = React.createRef();
      this.OrderAscendingButtonRef = React.createRef();
      
      this.iconAscendingToggle = this.iconAscendingToggle.bind(this);
      this.activeToggleButton = this.activeToggleButton.bind(this);
      this.handleInput = this.handleInput.bind(this);  
    }

    iconAscendingToggle = () => {
      if(this.props.store.playersTable.isAscending) {
        this.OrderAscendingButtonRef.current.firstChild.className = 'fas fa-sort-amount-down';
      } else {
        this.OrderAscendingButtonRef.current.firstChild.className = 'fas fa-sort-amount-up';
      }
    }

    activeToggleButton = () => {
      for (const iterator of this.ToggleButtonRef.current.children) {
        if (iterator.firstChild.value === this.props.store.playersTable.orderType) {
          iterator.classList.add('active');          
        }
      }
      this.iconAscendingToggle();
    }

    handleInput = (event) =>  {
      const { name, value } = event.target;
      if( name === 'toggleOrder' ) {
        this.OrderAscendingButtonRef.current.blur();   
        this.props.store.playersTable.isAscending = !this.props.store.playersTable.isAscending;     
        this.iconAscendingToggle();
      }else if (name === 'orderOption') {
        this.props.store.playersTable.orderType = value;
      }
      this.props.handleInput(event);
    };

    componentDidMount() {
      if (this.ToggleButtonRef.current !== null) {
        this.activeToggleButton(); 
      }      
    }

    render() { 
      const orderOption = () => {
        return this.state.orderButton.map(({value, namebutton}, index) => { 
            return(
              <label className="btn btn-info" key={index}>
                <input type="radio" name="orderOption" value={value} onFocus={this.handleInput} autoComplete="off"/>
                {namebutton}
              </label>
            );
        });
      };

      return(
        <React.Fragment>
          <section className="sticky-top">
              <header className="row">                   
                <section className="col-md-8 col-lg-9">
                  <div className="row">
                    <section className="col-lg-6">      
                      <fieldset>
                        <span className="fa fa-search form-control-feedback" aria-label="Icono de buscar"></span>
                        <input type="text" 
                          className="form-control" 
                          placeholder="Buscar jugador" 
                          name='search' 
                          aria-label="Buscar jugador"
                          value={this.props.store.playersTable.searchValue} 
                          onChange={this.handleInput}/>
                      </fieldset>  
                    </section>
                    <section className="col-lg-6">
                      <div className="btn-group">
                        <button 
                          type="button" 
                          className="btn btn-info" 
                          name="toggleOrder" 
                          aria-label="Cambiar orden ascendente"
                          onClick={this.handleInput} 
                          ref={this.OrderAscendingButtonRef}>
                            <i className="fas fa-sort-amount-down"></i>
                        </button>
                        <div 
                          className="btn-group btn-group-toggle" 
                          data-toggle="buttons" 
                          ref={this.ToggleButtonRef}>        
                            {orderOption()}                        
                        </div>
                      </div>
                    </section>                               
                  </div>
                </section>
                <section className="col-md-4 col-lg-3">
                  <button type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#ModalCRUDPlayer"
                    aria-label="Inscribir nuevo jugador"
                    name="addPlayer"
                    value={dataPlayersPage.idPlayerSelectedDefault}
                    onClick={this.handleInput}
                    >
                      <i className={this.state.newPlayerButton.icon}></i>
                      &nbsp;{this.state.newPlayerButton.name}
                  </button>
                  <small className="text-muted">
                    {this.state.inscribedMessage}&nbsp;
                    <span>{this.props.store.players.length}</span>
                  </small>
                </section> 
              </header>
            </section>
        </React.Fragment>
      );
    }
  }
);

export default PlayerPageTools;