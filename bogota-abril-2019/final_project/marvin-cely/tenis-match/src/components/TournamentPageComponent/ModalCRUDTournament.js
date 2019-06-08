import React from 'react';
import '../../css/ModalCRUD.css';
import FormCRUDTournament from './FormCRUDTournament';
import { observer } from 'mobx-react';
import serviceAddData from '../../services/serviceAddData';
import serviceUpdateData from '../../services/serviceUpdateData';
import serviceDeleteData from '../../services/serviceDeleteData';
import thesaurus from '../../utils/thesaurus';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { dataTournamentsPage } from '../../data-component/data-tournaments-page';

const ModalCRUDTournament = observer(
  class ModalCRUDTournament extends React.Component {
    constructor(props){
      super(props);
      this.state = {  
        titleForm: dataTournamentsPage.ModalForm.titleForm,
        successButton: dataTournamentsPage.ModalForm.successButton,
        cancelButton: dataTournamentsPage.ModalForm.cancelButton,
        deleteButton: dataTournamentsPage.ModalForm.deleteButton,
        deleteConfirmTitle: dataTournamentsPage.ModalForm.deleteConfirmTitle,
        deleteConfirmMessage: dataTournamentsPage.ModalForm.deleteConfirmMessage,
        submitStyle: dataTournamentsPage.ModalForm.submitStyle,
        tournamentForm: Object.assign({}, dataTournamentsPage.ModalForm.initialValueForm),
        prevTournamentForm: Object.assign({}, dataTournamentsPage.ModalForm.initialValueForm),
        isUpdate: false,
        oneTimeDisabled: true,
      }

      this.formRef = null;
      this.buttonSubmitRef = React.createRef();
      this.buttonDeleteRef = React.createRef();
      this.handleForm = this.handleForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.setFormRef = this.setFormRef.bind(this);
      this.getTournamentToUpdate = this.getTournamentToUpdate.bind(this);
      this.updateForm = this.updateForm.bind(this);
      this.hideblockSubmitBotton = this.hideblockSubmitBotton.bind(this);
      this.addTournament = this.addTournament.bind(this);
      this.updateTournament = this.updateTournament.bind(this);
      this.deleteTournament = this.deleteTournament.bind(this);
    }

    componentWillUnmount() {
      this.closeModal();
    }

    componentDidUpdate(prevProps, prevState) {      
      if (this.props.counterAction !== prevProps.counterAction)
        this.updateForm(this.props.idTournamentSelected);  
                      
      if (this.state.tournamentForm !== prevState.tournamentForm)
        this.hideblockSubmitBotton();      
    }

    getTournamentToUpdate() {
      const tournamentToUpdate = this.props.store.obtainTournament(this.props.idTournamentSelected);
      return (this.props.store.obtainTournament(this.props.idTournamentSelected) !== undefined) ?
              Object.assign({}, tournamentToUpdate) :
              Object.assign({}, dataTournamentsPage.ModalForm.initialValueForm);
    }

    updateForm(idTournamentSelected) {
      if(idTournamentSelected !== dataTournamentsPage.idTournamentSelectedDefault) {                 
        this.setState({
          successButton: dataTournamentsPage.ModalForm.updateButton,
          submitStyle: 'btn btn-success',
          isUpdate: true,
          tournamentForm: this.getTournamentToUpdate(),
          prevTournamentForm: this.getTournamentToUpdate(),
        }); 
        this.buttonDeleteRef.current.hidden = false;        
      } else {
        this.setState({
          successButton: dataTournamentsPage.ModalForm.inscribeButton,
          submitStyle: 'btn btn-info',
          isUpdate: false,
          tournamentForm: Object.assign({}, dataTournamentsPage.ModalForm.initialValueForm),
        });

        this.buttonSubmitRef.current.disabled = false;
        this.buttonDeleteRef.current.hidden = true;
      } 
    }

    hideblockSubmitBotton() { 
      if(this.props.idTournamentSelected !== dataTournamentsPage.idTournamentSelectedDefault) {
        const areSame = JSON.stringify(this.state.tournamentForm) === JSON.stringify(this.state.prevTournamentForm);
        if ( this.state.oneTimeDisabled && !areSame) {
          this.buttonSubmitRef.current.disabled = false;
          this.setState({
            oneTimeDisabled: false,
          })
        } else if (areSame) {
          this.buttonSubmitRef.current.disabled = true;
          this.setState({
            oneTimeDisabled: true,
          })
        }
      }
    }

    setFormRef = (element) => this.modalRef = element;

    handleForm(valuesForm) {
      this.setState({
        tournamentForm: Object.assign({}, this.state.tournamentForm, valuesForm),
      });
    }

    deleteTournament() {
      const sendData = [this.props.store.fireStore, thesaurus.collectionsName.TOURNAMENTS ,this.props.idTournamentSelected];
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

    addTournament(tournamentToSend) {
      const sendData = [this.props.store.fireStore, thesaurus.collectionsName.TOURNAMENTS, tournamentToSend];
      serviceAddData.createData(...sendData);
    }

    updateTournament(tournamentToSend) {
      const tournamentToupdate = Object.assign({}, tournamentToSend, {id: this.props.idTournamentSelected});
      const sendData = [this.props.store.fireStore, thesaurus.collectionsName.TOURNAMENTS, tournamentToupdate];
      serviceUpdateData.updateData(...sendData);
    }

    handleSubmit(event) {
      event.preventDefault();
      if(this.state.isUpdate) 
        this.updateTournament(this.state.tournamentForm);
      else
        this.addTournament(this.state.tournamentForm);
        
      this.closeModal();  
    }

    closeModal() {
      this.formRef.children[0].children[1].click(); // Close Modal
      this.updateForm(this.props.idTournamentSelected);
      this.buttonSubmitRef.current.disabled = false;
      this.formRef.reset();
    }

    render() {
      return(
      <React.Fragment>
        <section className="modal fade" id="ModalCRUDTournament" tabIndex="-1" role="dialog" aria-labelledby="caracteristicasTorneo" aria-hidden="true" ref={this.setFormRef}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <form className="modal-content" onSubmit={this.handleSubmit} ref={element => this.formRef = element}>
              <header className="modal-header">
                <h5 className="modal-title" id="caracteristicasTorneo">
                  {this.state.titleForm}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </header>
              <main className="modal-body container pl-5 pr-5">
                <FormCRUDTournament
                  tournamentForm={this.state.tournamentForm}
                  receiveValue={this.handleForm} 
                  store={this.props.store}/>
              </main>
              <footer className="modal-footer">
                <section>
                  <button type="button" 
                    className="btn btn-danger" onClick={this.deleteTournament} ref={this.buttonDeleteRef} hidden={true} title={this.state.deleteButton}>
                      <i className="fas fa-minus-square"></i>
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

export default ModalCRUDTournament;