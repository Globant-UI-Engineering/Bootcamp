import React from 'react';
import '../../css/PlayersPage.css';
import { observer } from 'mobx-react';
import TablePlayer from './TablePlayer';
import ModalAddPlayer from './ModalAddPlayer';
import utils from '../../utils/utils';
import { LoadingComponent, ErrorServiceComponent } from '../SmallPieceComponent';
import thesaurus from '../../utils/thesaurus';

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
      const store = this.props.store;
      const collectionsName = [ thesaurus.collectionsName.PLAYERS, thesaurus.collectionsName.COUNTRIES];
      const stateComponent = [<TablePlayer store={this.props.store}/>,
                              <LoadingComponent/>,
                              <ErrorServiceComponent/>];
      const validationComponent = () => utils.validationService( store, collectionsName, stateComponent);

      return (
        <React.Fragment>
          <aside>
            <figure aira-lable="Foto de la pagina jugadores">
              <figcaption>{this.state.photoDescription}</figcaption>
            </figure>
          </aside>        
          <main className="container">    
            <section className="sticky-top">
              <header>
                <article>
                  <h2>{this.state.nameComponent}</h2>
                </article>
                <section>
                  <button type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#modalAddPlayer">
                      <i className={this.state.newPlayerButton.icon}></i>
                      &nbsp;{this.state.newPlayerButton.name}
                  </button>
                </section>
              </header>
            </section>
            <ModalAddPlayer store={this.props.store}/>      
            {validationComponent()}
          </main>
        </React.Fragment>
      );
    }
  }
);

export default PlayersPage;