import React from 'react';
import '../../css/FormCRUDTournament.css';
import { observer } from 'mobx-react';
import { dataTournamentsPage } from '../../data-component/data-tournaments-page';

const FormCRUDTournament = observer(
  class FormCRUDTournament extends React.Component {
    constructor(props) {
      super(props);
      this.handleInput = this.handleInput.bind(this);
    }
    render() { 
      return(
        <React.Fragment>
            <section className="form-row">
              <article className="form-group col-md-12">
                <label htmlFor="tournamentNameForm">{dataTournamentsPage.FormCRUD.tournamentNameForm}</label>
                <input type="text" 
                  className="form-control" 
                  name="tournamentName"
                  id="tournamentNameForm" 
                  placeholder={dataTournamentsPage.FormCRUD.tournamentNameFormExample} 
                  aria-describedby="instructionName" 
                  aria-required="true"
                  value={this.props.tournamentForm.tournamentName}
                  onChange={ this.handleInput }
                  required/>
                <small id="instructionName" className="form-text text-muted">
                  {dataTournamentsPage.FormCRUD.instructionFullNameForm}
                </small>
              </article>              
            </section> 
            <fieldset>
              <legend>{dataTournamentsPage.FormCRUD.tournamentPointsTitle}</legend>  
              <div className="form-row">
                <div className="col-lg-6"> 
                  <div className="form-row"> 
                    <article className="form-group col-md-6">
                      <label htmlFor="winnerTournamentForm">{dataTournamentsPage.FormCRUD.winnerTournamentForm}</label>
                      <input type="number" 
                        className="form-control" 
                        name="winner"
                        id="winnerTournamentForm" 
                        aria-required="true"
                        placeholder={dataTournamentsPage.FormCRUD.winnerTournamentFormExample}
                        max={dataTournamentsPage.FormCRUD.maxWinner}
                        min={dataTournamentsPage.FormCRUD.minWinner}
                        value={this.props.tournamentForm.winner}
                        onChange={ this.handleInput }
                        required/>
                    </article>                
                    <article className="form-group col-md-6">
                      <label htmlFor="finalistTournamentForm">{dataTournamentsPage.FormCRUD.finalistTournamentForm}</label>
                      <input type="number" 
                        className="form-control" 
                        name="finalist"
                        id="finalistTournamentForm" 
                        aria-required="true"
                        placeholder={dataTournamentsPage.FormCRUD.finalistTournamentFormExample}
                        max={this.props.tournamentForm.winner - 1}
                        min={dataTournamentsPage.FormCRUD.minFinalist}
                        value={this.props.tournamentForm.finalist}
                        onChange={ this.handleInput }
                        required/>
                    </article> 
                  </div> 
                </div> 
                <div className="col-lg-6">   
                  <div className="form-row">
                    <article className="form-group col-md-6">
                      <label htmlFor="semifinalistTournamentForm">{dataTournamentsPage.FormCRUD.semifinalistTournamentForm}</label>
                      <input type="number" 
                        className="form-control" 
                        name="semifinalist"
                        id="semifinalistTournamentForm" 
                        aria-required="true"
                        placeholder={dataTournamentsPage.FormCRUD.semifinalistTournamentFormExample}
                        max={this.props.tournamentForm.finalist - 1}
                        min={dataTournamentsPage.FormCRUD.minSemifinalist}
                        value={this.props.tournamentForm.semifinalist}
                        onChange={ this.handleInput }
                        required/>
                    </article>   
                    <article className="form-group col-md-6">
                      <label htmlFor="quarterfinalTournamentForm">{dataTournamentsPage.FormCRUD.quarterfinalTournamentForm}</label>
                      <input type="number" 
                        className="form-control" 
                        name="quarterfinal"
                        id="quarterfinalTournamentForm" 
                        aria-required="true"
                        placeholder={dataTournamentsPage.FormCRUD.quarterfinalTournamentFormExample}
                        max={this.props.tournamentForm.semifinalist - 1}
                        min={dataTournamentsPage.FormCRUD.minQuarterfinal}
                        value={this.props.tournamentForm.quarterfinal}
                        onChange={ this.handleInput }
                        required/>
                    </article>
                  </div>                     
                </div>       
              </div>        
            </fieldset>  
        </React.Fragment>
      );
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      this.props.receiveValue({ [name]: value });
    }
  }
);

export default FormCRUDTournament;