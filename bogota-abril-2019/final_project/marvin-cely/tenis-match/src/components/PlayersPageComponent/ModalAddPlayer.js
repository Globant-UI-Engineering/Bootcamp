import React from 'react';
import FormNewPlayer from './FormNewPlayer';
import { observer } from 'mobx-react';
import firebase from 'firebase';
import serviceAddData from '../../services/serviceAddData';
import thesaurus from '../../utils/thesaurus';

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
          idCountry: '',
          birthDate: null,
          ranking: 0,
        },
      }
      this.handleForm = this.handleForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleForm(valuesForm) {
      let {birthDate} = valuesForm;
      if(birthDate) {
        Object.assign(valuesForm, {birthDate: firebase.firestore.Timestamp.fromDate(new Date(birthDate))});
      }
      this.setState({
          enrollPlayerForm: Object.assign({}, this.state.enrollPlayerForm, valuesForm), 
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      event.target.reset();
      event.target.children[1].children[1].children[1].selectedIndex = 0; // put select to first position
      serviceAddData.createData(this.props.store.fireStore, thesaurus.collectionsName.PLAYERS ,this.state.enrollPlayerForm);
    }

    render() {
      return(
      <React.Fragment>
        <div className="modal fade" id="modalAddPlayer" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <form className="modal-content" onSubmit={this.handleSubmit}>
              <header className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  {this.state.titleForm}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </header>
              <main className="modal-body Container pl-5 pr-5">
                <FormNewPlayer
                  receiveValue={this.handleForm} 
                  store={this.props.store}/>
              </main>
              <footer className="modal-footer">
                <button type="button" 
                  className="btn btn-secondary" 
                  data-dismiss="modal">
                    {this.state.cancelButton}
                </button>
                <button type="submit" 
                  className="btn btn-info">
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