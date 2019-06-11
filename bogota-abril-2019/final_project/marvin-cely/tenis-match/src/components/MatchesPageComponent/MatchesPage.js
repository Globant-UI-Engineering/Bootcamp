import React from 'react';
import '../../css/MatchesPage.css';
import { dataMatchesPage } from '../../data-component/data-matches-page';
import { BackgroundImage, InConstructionComponent } from '../SmallPieceComponent';

class MatchesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      bannerBackgroundDescription: dataMatchesPage.bannerBackgroundDescription,
    }
  }

  render() { 
    return(
      <React.Fragment>
        <BackgroundImage 
          titleBanner={this.props.titlePage} 
          a11yDescription={this.state.bannerBackgroundDescription}/> 
        <InConstructionComponent thing={this.props.titlePage}/>
      </React.Fragment>
    );
  }
}

export default MatchesPage;