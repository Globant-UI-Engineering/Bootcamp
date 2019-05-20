import React from 'react';
import '../css/PlayersPage.css';
import { observer } from 'mobx-react';
import TablePlayer from './TablePlayer';
import utils from '../utils/utils';
import {LoadingComponent} from './SmallPieceComponent';

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
            {utils.validationComponent(this.props.store.players.length > 0,
                                      <TablePlayer players={this.props.store.players}/>,
                                      <LoadingComponent/>)}
          </main>
        </React.Fragment>
      );
    }
  }
);

export default PlayersPage;