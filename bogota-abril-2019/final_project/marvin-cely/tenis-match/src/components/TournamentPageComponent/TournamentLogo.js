import React from 'react';
import '../../css/TournamentLogo.css';
import playingTennis from '../../images/playingTennis.png';

class TournamentLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return(
      <React.Fragment>
        <figure aria-label='Logo del torneo'>
          <h2>{this.props.maxScore}</h2>
          <img src={playingTennis} alt="Torneo Logo" className="img-fluid"></img>
          <h1>{this.props.tournamentName}</h1>
        </figure>
      </React.Fragment>
    );
  }
}

export default TournamentLogo;