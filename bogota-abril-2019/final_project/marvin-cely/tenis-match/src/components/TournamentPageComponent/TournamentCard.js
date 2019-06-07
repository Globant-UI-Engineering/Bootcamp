import React from 'react';
import '../../css/TournamentCard.css';
import TournamentsLogo from './TournamentLogo';
import { observer } from 'mobx-react';

const TournamentCard = observer(
  class TournamentCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() { 
      return(
        <React.Fragment>
          <section className='col-md-6'>
            <div className="card">
            <div class="card-header">
              <button type="button" className="btn btn-light" aria-label="opciones" title="Opciones" data-toggle="modal" data-target="#ModalCRUDPlayer">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
              <div className="card-body">
                <div className='row'>
                  <div className='col-md-6'>
                    <TournamentsLogo 
                      maxScore={this.props.scores.winner} 
                      tournamentName={this.props.tournamentName}/>
                  </div>
                  <div className='col-md-6'>
                    <p>Distribución de puntos.<hr/>
                    Ganador: 2000<br/>
                    Finalista: 1200<br/>
                    Semifinalistas: 720<br/>
                    Cuartos: 360</p>            
                  </div>    
                </div>
              </div>
            </div>  
          </section>
        </React.Fragment>
      );
    }
  }
);

export default TournamentCard;