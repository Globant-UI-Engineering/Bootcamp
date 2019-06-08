import React from 'react';
import '../../css/TournamentCard.css';
import TournamentsLogo from './TournamentLogo';
import { observer } from 'mobx-react';
import { dataTournamentsPage } from '../../data-component/data-tournaments-page';

const TournamentCard = observer(
  class TournamentCard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        tournamentCardStyle: dataTournamentsPage.TournamentCard.styleGradeThree,
      }

      this.styleCard = this.styleCard.bind(this);
    }
    
    componentDidMount() {
      this.styleCard(this.props.scores.winner);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.scores.winner !== this.props.scores.winner)
        this.styleCard(this.props.scores.winner);
    }

    styleCard = (score) => {      
      if(score > 1000)
        this.setState({ tournamentCardStyle: dataTournamentsPage.TournamentCard.styleGradeOne });
      else if(score > 500)
        this.setState({ tournamentCardStyle: dataTournamentsPage.TournamentCard.styleGradeTwo });
      else
        this.setState({ tournamentCardStyle: dataTournamentsPage.TournamentCard.styleGradeThree });
    }

    render() { 
      return(
        <React.Fragment>
          <section className="col-md-6 col-lg-4" role="gridcell">
            <div className="card shadow-sm m-1">
              <div className='row p-2'>
                <section className='col-6' role="figure">
                  <TournamentsLogo 
                    maxScore={this.props.scores.winner} 
                    tournamentName={this.props.tournamentName}
                    styleCard={this.state.tournamentCardStyle}/>
                </section>
                <div className='col-6'>
                  <section className='row d-flex justify-content-end'>
                    <button type="button" className="btn btn-light" aria-label='opciones' title='Opciones' data-toggle="modal" data-target="#ModalCRUDTournament" name="editTournament" value={this.props.idTournament} onClick={this.props.onClick}>
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </section>
                  <section className='row'>
                    <article className='col-12' role='contentinfo'>                
                      <table>
                        <caption>{dataTournamentsPage.TournamentCard.rankingPointsTitle}</caption>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <abbr title="Ganador">
                                {dataTournamentsPage.TournamentCard.winnerAbbreviation}
                              </abbr>
                            </th>
                            <td>{this.props.scores.winner}</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <abbr title="Finalista">
                                {dataTournamentsPage.TournamentCard.finalistAbbreviation}
                              </abbr>
                            </th>
                            <td>{this.props.scores.finalist}</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <abbr title="Semifinalista">
                                {dataTournamentsPage.TournamentCard.semifinalistAbbreviation}
                              </abbr>
                            </th>
                            <td>{this.props.scores.semifinalist}</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <abbr title="Cuartos de final">
                                {dataTournamentsPage.TournamentCard.quarterfinalAbbreviation}
                              </abbr>
                            </th>
                            <td>{this.props.scores.quarterfinal}</td>
                          </tr>
                        </tbody>
                      </table>          
                    </article> 
                  </section>
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