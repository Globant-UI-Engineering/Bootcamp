import React from 'react';
import '../../css/FormCRUDTournament.css';
import { observer } from 'mobx-react';
import utils from '../../utils/utils';

const FormCRUDTournament = observer(
  class FormCRUDTournament extends React.Component {
    constructor(props) {
      super(props);

      this.state = {//TODO: PASAAR a data-
        tournamentNameForm: 'Titulo de torneo',
        tournamentNameFormExample: 'Grand Slam',
        instructionFullNameForm: 'Utilice titulos simples sin número de puntos de torneo.',
        tournamentPointsTitle: 'Distribución de puntos',//TODO:poner
        winnerTournamentForm: 'Ganador',
        finalistTournamentForm: 'Finalista',
        semifinalistTournamentForm: 'Semifinalista',
        quarterfinalTournamentForm: 'Cuartos de final',
        winnerTournamentFormExample: '2000',
        finalistTournamentFormExample: '1200',
        semifinalistTournamentExample: '720',
        quarterfinalTournamentFormExample: '360',
        maxWinner: 2000,
        minWinner: 50,
        minFinalist: 25,
        minSemifinalist: 10,
        minQuarterfinal: 5,
      }

      this.optionRef = null;
      this.handleInput = this.handleInput.bind(this);
    }
    render() { 
      return(
        <React.Fragment>
            <section className="form-row">
              <article className="form-group col-md-12">
                <label htmlFor="tournamentNameForm">{this.state.tournamentNameForm}</label>
                <input type="text" 
                  className="form-control" 
                  name="tournamentName"
                  id="tournamentNameForm" 
                  placeholder={this.state.tournamentNameFormExample} 
                  aria-describedby="instructionName" 
                  aria-required="true"
                  value={this.props.tournamentForm.tournamentName}
                  onChange={ this.handleInput }
                  required/>
                <small id="instructionName" className="form-text text-muted">
                  {this.state.instructionFullNameForm}
                </small>
              </article>              
            </section>
            {/**TODO: poner titulo de Distribución de puntos */}
            <section className="form-row">              
              <article className="form-group col-md-3">
                <label htmlFor="winnerTournamentForm">{this.state.winnerTournamentForm}</label>
                <input type="number" 
                  className="form-control" 
                  name="winner"
                  id="winnerTournamentForm" 
                  aria-required="true"
                  placeholder={this.state.winnerTournamentFormExample}
                  max={this.state.maxWinner}
                  min={this.state.minWinner}
                  value={this.props.tournamentForm.winner}
                  onChange={ this.handleInput }
                  required/>
              </article>                
              <article className="form-group col-md-3">
                <label htmlFor="finalistTournamentForm">{this.state.finalistTournamentForm}</label>
                <input type="number" 
                  className="form-control" 
                  name="finalist"
                  id="finalistTournamentForm" 
                  aria-required="true"
                  placeholder={this.state.finalistTournamentFormExample}
                  max={this.props.tournamentForm.winner - 1}
                  min={this.state.minFinalist}
                  value={this.props.tournamentForm.finalist}
                  onChange={ this.handleInput }
                  required/>
              </article> 
              <article className="form-group col-md-3">
                <label htmlFor="semifinalistTournamentForm">{this.state.semifinalistTournamentForm}</label>
                <input type="number" 
                  className="form-control" 
                  name="semifinalist"
                  id="semifinalistTournamentForm" 
                  aria-required="true"
                  placeholder={this.state.semifinalistTournamentFormExample}
                  max={this.props.tournamentForm.finalist - 1}
                  min={this.state.minSemifinalist}
                  value={this.props.tournamentForm.semifinalist}
                  onChange={ this.handleInput }
                  required/>
              </article>   
              <article className="form-group col-md-3">
                <label htmlFor="quarterfinalTournamentForm">{this.state.quarterfinalTournamentForm}</label>
                <input type="number" 
                  className="form-control" 
                  name="quarterfinal"
                  id="quarterfinalTournamentForm" 
                  aria-required="true"
                  placeholder={this.state.quarterfinalTournamentFormExample}
                  max={this.props.tournamentForm.semifinalist - 1}
                  min={this.state.minQuarterfinal}
                  value={this.props.tournamentForm.quarterfinal}
                  onChange={ this.handleInput }
                  required/>
              </article>           
            </section>     
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