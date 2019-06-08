import React from 'react';
import '../../css/TournamentLogo.css';
import playingTennisG1 from '../../images/playingTennisG1.png';
import playingTennisG2 from '../../images/playingTennisG2.png';
import playingTennisG3 from '../../images/playingTennisG3.png';
import { observer } from 'mobx-react';
import { dataTournamentsPage } from '../../data-component/data-tournaments-page';


const TournamentLogo = observer(
  class TournamentLogo extends React.Component {
    constructor(props) {
      super(props);

      this.silhouetteSelected = this.silhouetteSelected.bind(this);
    }

    silhouetteSelected = (styleCard) => {
      if(styleCard === dataTournamentsPage.TournamentCard.styleGradeOne)
        return playingTennisG1;
      else if(styleCard === dataTournamentsPage.TournamentCard.styleGradeTwo)
        return playingTennisG2;
      else 
        return playingTennisG3;
    }

    render() { 
      return(
        <React.Fragment>
          <figure aria-label='Logo del torneo' className={this.props.styleCard}>
            <h2>{this.props.maxScore}</h2>
            <img src={this.silhouetteSelected(this.props.styleCard)} alt="Torneo Logo" className="img-fluid"></img>
            <h1>{this.props.tournamentName}</h1>
          </figure>
        </React.Fragment>
      );
    }
  }
);

export default TournamentLogo;