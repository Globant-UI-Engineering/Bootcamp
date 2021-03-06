import React from 'react';
import '../../css/ToolsPage.css';
import { observer } from 'mobx-react';
import { dataTournamentsPage } from '../../data-component/data-tournaments-page';


const TournamentPageTools = observer(
  class TournamentPageTools extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        searchTournamentLabel: dataTournamentsPage.searchTournamentLabel,
        orderButton: dataTournamentsPage.orderButton,
        newTournamentButton: dataTournamentsPage.newTournamentButton,
        inscribedMessage: dataTournamentsPage.inscribedMessage,
      }   

      this.ToggleButtonRef = React.createRef();
      this.OrderAscendingButtonRef = React.createRef();
      
      this.iconAscendingToggle = this.iconAscendingToggle.bind(this);
      this.activeToggleButton = this.activeToggleButton.bind(this);
      this.handleInput = this.handleInput.bind(this);  
    }

    iconAscendingToggle = () => {
      if(this.props.store.tournamentsTable.isAscending) {
        this.OrderAscendingButtonRef.current.firstChild.className = 'fas fa-sort-amount-down';
      } else {
        this.OrderAscendingButtonRef.current.firstChild.className = 'fas fa-sort-amount-up';
      }
    }

    activeToggleButton = () => {
      for (const iterator of this.ToggleButtonRef.current.children) {
        if (iterator.firstChild.value === this.props.store.tournamentsTable.orderType) {
          iterator.classList.add('active');          
        }
      }
      this.iconAscendingToggle();
    }

    handleInput = (event) =>  {
      const { name, value } = event.target;
      if( name === 'toggleOrder' ) {
        this.OrderAscendingButtonRef.current.blur();   
        this.props.store.tournamentsTable.isAscending = !this.props.store.tournamentsTable.isAscending;     
        this.iconAscendingToggle();
      }else if (name === 'orderOption') {
        this.props.store.tournamentsTable.orderType = value;
      }
      this.props.handleInput(event);
    };

    componentDidMount() {
      if (this.ToggleButtonRef.current !== null) {
        this.activeToggleButton();
        this.toggleOneTime = false;        
      }      
    }

    render() { 
      const orderOption = () => {
        return this.state.orderButton.map(({value, namebutton}, index) => { 
            return(
              <label className="btn btn-light" key={index}>
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
                          placeholder={this.state.searchTournamentLabel} 
                          name='search' 
                          aria-label={this.state.searchTournamentLabel}
                          value={this.props.store.tournamentsTable.searchValue} 
                          onChange={this.handleInput}/>
                      </fieldset>  
                    </section>
                    <section className="col-lg-6">
                      <div className="btn-group">
                        <button 
                          type="button" 
                          className="btn btn-light" 
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
                 {/**TODO:Cambiar modal */}
                <section className="col-md-4 col-lg-3">
                  <button type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#ModalCRUDTournament"                   
                    aria-label="Crear nuevo torneo"
                    name="addTournament"
                    value={dataTournamentsPage.idTournamentSelectedDefault}
                    onClick={this.handleInput}
                    >
                      <i className={this.state.newTournamentButton.icon}></i>
                      &nbsp;{this.state.newTournamentButton.name}
                  </button>
                  <small className="text-muted">
                    {this.state.inscribedMessage}&nbsp;
                    <span>{this.props.store.tournaments.length}</span>
                  </small>
                </section> 
              </header>
            </section>
        </React.Fragment>
      );
    }
  }
);

export default TournamentPageTools;