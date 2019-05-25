import React from 'react';
import FormNewPlayer from './FormNewPlayer';
import { observer } from 'mobx-react';
import serviceAddData from '../../services/serviceAddData';

const ModalAddPlayer = observer(
  class ModalAddPlayer extends React.Component {
    constructor(props){
      super(props);
      this.state = {  
        titleForm: 'Perfil del Jugador',
        successButton: 'Inscribir',
        cancelButton: 'Cancelar',
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
      console.log(this.state.enrollPlayerForm);
      // serviceAddData.serviceAddData(this.props.fireStore, thesaurus.collectionsName.PLAYERS ,this.state.enrollPlayerForm); // TODO:Enviar nuevo jugador
      event.target.reset();
    }

    render() {
      return(
      <React.Fragment>
        <div className="modal fade" id="modalAddPlayer" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <form className="modal-content" onSubmit={this.handleSubmit}>
              <header className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">{this.state.titleForm}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </header>
              <main className="modal-body Container pl-5 pr-5">
                <FormNewPlayer sendValue={this.handleForm} store={this.props.store}/>
              </main>
              <footer className="modal-footer">
                <button type="button" 
                  className="btn btn-secondary" 
                  data-dismiss="modal">
                    {this.state.cancelButton}
                </button>
                <button type="submit" 
                  className="btn btn-info" 
                  data-toggle="modal">
                    {this.state.successButton}
                </button>
              </footer>
            </form>
          </div>
        </div>
      </React.Fragment>
      );
    }
  }
);

export default ModalAddPlayer;