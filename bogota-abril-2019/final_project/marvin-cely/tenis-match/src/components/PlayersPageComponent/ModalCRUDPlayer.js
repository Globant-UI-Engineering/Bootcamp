import React from 'react';
import '../../css/ModalCRUDPlayer.css';
import FormNewPlayer from './FormNewPlayer';
import { observer } from 'mobx-react';
import firebase from 'firebase';
import serviceAddData from '../../services/serviceAddData';
import serviceUpdateData from '../../services/serviceUpdateData';
import serviceDeleteData from '../../services/serviceDeleteData';
import thesaurus from '../../utils/thesaurus';
import utils from '../../utils/utils';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ModalCRUDPlayer = observer(
  class ModalCRUDPlayer extends React.Component {
    constructor(props){
      super(props);
      this.state = {  
        titleForm: 'Perfil del Jugador',
        successButton: 'Inscribir',
        cancelButton: 'Cancelar',
        deleteButton: 'Eliminar jugador',
        deleteConfirmTitle: 'Mensaje de confirmación',
        deleteConfirmMessage: '¿Esta seguro de eliminar este jugador?',
        submitStyle: 'btn btn-info',
        playerForm: {
          name: '',
          idCountry: '',
          birthDate: '',
        },
        scoreDefault: 0,
        isUpdate: false,
        oneTimeDisabled: true,
      }

      this.formRef = null;
      this.buttonSubmitRef = React.createRef();
      this.buttonDeleteRef = React.createRef();
      this.handleForm = this.handleForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.restartForm = this.restartForm.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.setFormRef = this.setFormRef.bind(this);
      this.getPlayerToUpdate = this.getPlayerToUpdate.bind(this);
      this.updateForm = this.updateForm.bind(this);
      this.hideblockSubmitBotton = this.hideblockSubmitBotton.bind(this);
      this.adjustNewPlayer = this.adjustNewPlayer.bind(this);
      this.adjustUpdatePlayer = this.adjustUpdatePlayer.bind(this);
      this.addPlayer = this.addPlayer.bind(this);
      this.updatePlayer = this.updatePlayer.bind(this);
      this.deletePlayer = this.deletePlayer.bind(this);
    }

    componentWillUnmount() {
      this.closeModal();
    }

    componentDidUpdate(prevProps) {      
      if (this.props.idPlayerSelected !== prevProps.idPlayerSelected) {
        this.updateForm(this.props.idPlayerSelected);                
      }
      this.hideblockSubmitBotton();      
    }

    getPlayerToUpdate() {
      const playerToUpdate = this.props.store.obtainPlayer(this.props.idPlayerSelected);
      const birthDate = playerToUpdate.birthDate.toDate();
      const player = {
        name: playerToUpdate.name,
        idCountry: playerToUpdate.idCountry,
        birthDate: utils.toStringDate(birthDate),
      }
      return Object.assign({}, player);
    }

    updateForm(idPlayerSelected) {
      if(idPlayerSelected !== 'newPlayer') {                 
        this.setState({
          successButton: 'Actualizar',
          submitStyle: 'btn btn-success',
          isUpdate: true,
          playerForm: this.getPlayerToUpdate(),
        }); 

        this.buttonDeleteRef.current.hidden = false;        
      } else {
        this.setState({
          successButton: 'Inscribir',
          submitStyle: 'btn btn-info',
          isUpdate: false,
          playerForm: {
            name: '',
            idCountry: '',
            birthDate: '',
          },
        });

        this.buttonSubmitRef.current.disabled = false;
        this.buttonDeleteRef.current.hidden = true;
      } 
    }

    hideblockSubmitBotton() {
      if(this.props.idPlayerSelected !== 'newPlayer') {
        const areSame = JSON.stringify(this.state.playerForm) === JSON.stringify(this.getPlayerToUpdate());
        if ( this.state.oneTimeDisabled && !areSame) {
          this.buttonSubmitRef.current.disabled = false;
          this.state.oneTimeDisabled = false;
        } else if (areSame) {
          this.buttonSubmitRef.current.disabled = true;
          this.state.oneTimeDisabled = true;
        }
      }
    }

    setFormRef = (element) => this.modalRef = element;

    handleForm(valuesForm) {
      this.setState({
        playerForm: Object.assign({}, this.state.playerForm, valuesForm), 
      });
    }

    deletePlayer() {
      const sendData = [this.props.store.fireStore, thesaurus.collectionsName.PLAYERS ,this.props.idPlayerSelected];
      confirmAlert({
        message: this.state.deleteConfirmMessage,
        buttons: [
          {
            label: 'Si',
            onClick: () => {
              serviceDeleteData.removeData(...sendData);
              this.closeModal();
            }
          },{ label: 'No', }
        ]
      });
    }

    adjustNewPlayer() {
      const {birthDate} = this.state.playerForm;
      const adjustData = {
        birthDate: firebase.firestore.Timestamp.fromDate(new Date(birthDate)),
        ranking: this.state.scoreDefault,
      }
      return Object.assign({}, this.state.playerForm, adjustData);
    }

    adjustUpdatePlayer() {
      const {birthDate} = this.state.playerForm;
      const adjustData = {
        birthDate: firebase.firestore.Timestamp.fromDate(new Date(birthDate)),
      }
      return Object.assign({}, this.state.playerForm, adjustData);
    }

    addPlayer(playerToSend) {
      const sendData = [this.props.store.fireStore, thesaurus.collectionsName.PLAYERS, playerToSend];
      serviceAddData.createData(...sendData);
    }

    updatePlayer(playerToSend) {
      const playerToupdate = Object.assign({}, playerToSend, {id: this.props.idPlayerSelected});
      const sendData = [this.props.store.fireStore, thesaurus.collectionsName.PLAYERS, playerToupdate];
      serviceUpdateData.updateData(...sendData);//Id Requerido
    }

    handleSubmit(event) {
      event.preventDefault();
      if(this.state.isUpdate){
        const playerToSend = this.adjustUpdatePlayer();      
        this.updatePlayer(playerToSend);
      }
      else{
        const playerToSend = this.adjustNewPlayer();
        this.addPlayer(playerToSend);
      }  
      this.closeModal();  
    }

    restartForm() {
      this.setState({
        playerForm: Object.assign({}, {name: '', idCountry: '', birthDate: ''}),
      });      
      this.formRef.children[1].children[1].children[1].selectedIndex = 0; // Put first select option
    }

    closeModal() {
      this.formRef.children[0].children[1].click(); // Close Modal
      this.updateForm(this.props.idPlayerSelected); //FIXME: Update player form then update handle!!
      this.buttonSubmitRef.current.disabled = false;
    }

    render() {
      return(
      <React.Fragment>
        <section className="modal fade" id="ModalCRUDPlayer" tabIndex="-1" role="dialog" aria-labelledby="perfilJugador" aria-hidden="true" ref={this.setFormRef}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <form className="modal-content" onSubmit={this.handleSubmit} ref={element => this.formRef = element}>
              <header className="modal-header">
                <h5 className="modal-title" id="perfilJugador">
                  {this.state.titleForm}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </header>
              <main className="modal-body container pl-5 pr-5">
                <FormNewPlayer
                  playerForm={this.state.playerForm}
                  receiveValue={this.handleForm} 
                  store={this.props.store}/>
              </main>
              <footer className="modal-footer">
                <section>
                  <button type="button" 
                    className="btn btn-danger" onClick={this.deletePlayer} ref={this.buttonDeleteRef} hidden={true} title={this.state.deleteButton}>
                      <i className="fas fa-user-times"></i>
                      <span className='d-none d-sm-inline'>&nbsp;{this.state.deleteButton}</span>
                  </button>
                </section>
                <section>                
                  <button type="button" 
                    className="btn btn-secondary" 
                    data-dismiss="modal"
                    onClick={this.closeModal}>
                      {this.state.cancelButton}
                  </button>
                  <button type="submit" 
                    className={this.state.submitStyle}
                    ref={this.buttonSubmitRef}
                    disabled={false}>
                      {this.state.successButton}
                  </button>
                </section>  
              </footer>
            </form>
          </div>
        </section>
      </React.Fragment>
      );
    }
  }
);

export default ModalCRUDPlayer;