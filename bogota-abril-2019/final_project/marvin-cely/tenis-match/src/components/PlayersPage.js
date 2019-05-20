import React from 'react';
import '../css/PlayersPage.css';
import { observer } from 'mobx-react';

const PlayersPage = observer(
  class PlayersPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nameComponent: 'Jugadores',
        newPlayerButton: {
          name: 'Inscribir jugador',
          icon: 'fas fa-user-plus',
        },
        photoDescription: 'Photo by Christopher Burns on Unsplash',
      }
    }

    render() {
      let playersList = this.props.store.players.map(({id, name, nationality, birthYear, ranking}) => {
            return (
              <section className="row" key={id}>
                <article className="col-lg-3">
                  {name}
                </article>
                <article className="col-lg-3">
                  {nationality}
                </article>
                <article className="col-lg-3">
                  {birthYear}
                </article>
                <article className="col-lg-3">
                  {ranking}
                </article>
              </section>
            );
          });
      return(
        <React.Fragment>
          <aside>
            <figure aira-lable="Foto de la pagina jugadores">
              <figcaption>{this.state.photoDescription}</figcaption>
            </figure>
          </aside>        
          <main className="container">    
            <section className="sticky-top">
              <header className="d-flex justify-content-between">
                <h2>{this.state.nameComponent}</h2>
                <button type="button" className="btn btn-success">
                  <i className={this.state.newPlayerButton.icon}></i>
                  &nbsp;{this.state.newPlayerButton.name}
                </button>
              </header>
            </section>        
              {(this.props.store.players.length > 0) ? playersList : <p>Cargando...</p>}

              <section>algo</section><div>algo</div><div>algo</div><div>algo</div><div>algo</div>
              <div>algo</div><div>algo</div><div>algo</div><div>algo</div><div>algo</div>
              <div>algo</div><div>algo</div><div>algo</div><div>algo</div><div>algo</div>

          </main>
        </React.Fragment>
      );
    }
  }
);

export default PlayersPage;