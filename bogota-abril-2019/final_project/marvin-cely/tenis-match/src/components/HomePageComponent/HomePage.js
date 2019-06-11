import React from '../../../node_modules/react';
import '../../css/HomePage.css';
import tennisRacket from '../../images/tennisRacket.png';
import rising from '../../images/rising.png';
import { dataHomePage } from '../../data-component/data-home-page';
import { dataApp } from '../../data-component/data-app';
import { BackgroundImage } from '../SmallPieceComponent';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleApp: dataApp.nameApp,
      firstBanner: dataHomePage.firstBanner,
      firstBannerA11yDescription: dataHomePage.firstBannerA11yDescription,
      firstParagraph: dataHomePage.firstParagraph,
      secondBanner: dataHomePage.secondBanner,
      secondBannerA11yDescription: dataHomePage.secondBannerA11yDescription,
      secondParagraph: dataHomePage.secondParagraph,
      thirdBanner: dataHomePage.thirdBanner,
      thirdBannerA11yDescription: dataHomePage.thirdBannerA11yDescription,
    }
  }
  render() { 
    const generalDescription = () => 
      <section>
        <h1>{this.state.titleApp}</h1>
        <p>{this.state.firstParagraph}</p>
      </section>;

    const pageInfo = () => 
      <section>
        <img className="img-fluid d-none d-md-block" src={rising} alt="Barra de estadistica"/>
        <img className="img-fluid" src={tennisRacket} alt="Raqueta y pelota de tenis"/>
        <p>{this.state.secondParagraph}</p>
      </section>;

    return(
      <React.Fragment>    
        <main>
          <BackgroundImage 
            titleBanner={this.state.firstBanner} 
            a11yDescription={this.state.firstBannerA11yDescription}/>
          {generalDescription()}
          <BackgroundImage 
            titleBanner={this.state.secondBanner} 
            a11yDescription={this.state.secondBannerA11yDescription}/>
          {pageInfo()}
          <BackgroundImage 
            titleBanner={this.state.thirdBanner} 
            a11yDescription={this.state.thirdBannerA11yDescription}/>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;