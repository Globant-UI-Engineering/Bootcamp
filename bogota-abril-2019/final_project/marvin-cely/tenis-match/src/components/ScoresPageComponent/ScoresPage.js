import React from 'react';
import '../../css/ScoresPage.css';
import { BackgroundImage } from '../SmallPieceComponent';
import { dataScoresPage } from '../../data-component/data-scores-page';

class ScoresPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      bannerBackgroundDescription: dataScoresPage.bannerBackgroundDescription,
    }
  }

  render() { 
    return(
      <React.Fragment>
        <BackgroundImage 
          titleBanner={this.props.titlePage} 
          a11yDescription={this.state.bannerBackgroundDescription}/> 
      </React.Fragment>
    );
  }
}

export default ScoresPage;