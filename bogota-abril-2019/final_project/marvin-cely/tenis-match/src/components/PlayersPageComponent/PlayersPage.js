import React from 'react';
import '../../css/PlayersPage.css';
import { observer } from 'mobx-react';
import TablePlayer from './TablePlayer';
import FormNewPlayer from './FormNewPlayer';
import utils from '../../utils/utils';
import {LoadingComponent} from '../SmallPieceComponent';
import serviceAddData from '../../services/serviceAddData';
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
        enrollPlayerForm: {
          name: '',
          nationality: '',
          birthDate: null,
        },
      }
      this.handleForm = this.handleForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleForm(valuesForm) {
      this.setState({
          enrollPlayerForm: Object.assign({}, this.state.enrollPlayerForm, valuesForm), 
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      // serviceAddData.serviceAddData(this.props.fireStore, thesaurus.collectionsName.PLAYERS ,this.state.enrollPlayerForm); // TODO:Enviar nuevo jugador
      event.target.reset();
    }

    render() {
      const AddPlayerModal = 
      <React.Fragment>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <form className="modal-content" onSubmit={this.handleSubmit}>
                  <header className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Perfil del Jugador</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </header>
                  <main className="modal-body Container pl-5 pr-5">
                    <FormNewPlayer sendValue={this.handleForm}/>
                  </main>
                  <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-info" data-toggle="modal">Inscribir</button>
                  </footer>
                </form>
              </div>
            </div>
        </React.Fragment>;

      return (
        <React.Fragment>
          <aside>
            <figure aira-lable="Foto de la pagina jugadores">
              <figcaption>{this.state.photoDescription}</figcaption>
            </figure>
          </aside>        
          <main className="container">    
            <section className="sticky-top">
              <header className="d-flex justify-content-between flex-wrap">
                <h2>{this.state.nameComponent}</h2>
                <button type="button" 
                  className="btn btn-info" 
                  data-toggle="modal" 
                  data-target="#exampleModalCenter">
                      <i className={this.state.newPlayerButton.icon}></i>
                  &nbsp;{this.state.newPlayerButton.name}
                </button>
              </header>
            </section>
            {AddPlayerModal}       
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