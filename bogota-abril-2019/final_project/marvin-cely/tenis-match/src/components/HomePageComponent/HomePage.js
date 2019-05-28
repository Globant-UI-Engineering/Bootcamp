import React from '../../../node_modules/react';
import '../../css/HomePage.css';
import tennisRacket from '../../images/tennisRacket.png';
import rising from '../../images/rising.png';

class HomePage extends React.Component {
  render() { 
    return(
      <React.Fragment>    
        <main>
          <figure aira-lable="Foto de una pelota de tennis" role="banner">
            <p>Anota tus puntos en vivo</p>
          </figure>
          <section>
            <h1>Tennis Match</h1>
            <p>Perfecto para los amantes del tenis, tú y tu amigos podrán ver estadísticas de partido, historial de partidos y puntaje de sus competidores. Con Tennis Match estarás preparado para tu próximo juego y así disfrutar lo mejor del deporte blanco.</p>
          </section>
          <figure role="banner">
            <p>Compite contra tus amigos por el mejor ranking.</p>
          </figure>
          <section>
            <img className="img-fluid d-none d-md-block" src={rising} alt="Barra de estadistica"/>
            <img className="img-fluid" src={tennisRacket} alt="Raqueta y pelota de tenis"/>
            <p>Mejora tus estadisticas, revisa en el historial. Observa tus fortalezas y habilidades por mejorar; y encuentra la mejor estrategia al instante.</p>
          </section>
          <figure role="banner">
            <p>¡Todo en tiempo real!</p>
          </figure>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;