import React from '../../../node_modules/react';
import '../../css/HomePage.css';
import tennisRacket from '../../images/tennisRacket.png';
import rising from '../../images/rising.png';
import { dataHomePage } from '../../data-component/data-home-page';
import { dataApp } from '../../data-component/data-app';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleApp: dataApp.nameApp,
      firstBanner: dataHomePage.firstBanner,
      firstParagraph: dataHomePage.firstParagraph,
      secondBanner: dataHomePage.secondBanner,
      secondParagraph: dataHomePage.secondParagraph,
      thirdParagraph: dataHomePage.thirdParagraph,
    }
  }
  render() { 
    return(
      <React.Fragment>    
        <main>
          <figure aira-lable="Pelota de tenis verde, al lado de una linea en una cancha azul" role="banner">
            <p>{this.state.firstBanner}</p>
          </figure>
          <section>
            <h1>{this.state.titleApp}</h1>
            <p>{this.state.firstParagraph}</p>
          </section>
          <figure aira-lable="Cancha de tenis en piso de ladrillo" role="banner">
            <p>{this.state.secondBanner}</p>
          </figure>
          <section>
            <img className="img-fluid d-none d-md-block" src={rising} alt="Barra de estadistica"/>
            <img className="img-fluid" src={tennisRacket} alt="Raqueta y pelota de tenis"/>
            <p>{this.state.secondParagraph}</p>
          </section>
          <figure aira-lable="Mujer haciendo gesto en saque de servicio de tenis" role="banner">
            <p>{this.state.thirdParagraph}</p>
          </figure>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;