import React from 'react';
import '../../css/FormCRUDPlayer.css';
import { observer } from 'mobx-react';
import {CountryOptionComponent} from '../SmallPieceComponent';
import { dataPlayersPage } from '../../data-component/data-players-page';
import utils from '../../utils/utils';

const FormCRUDPlayer = observer(
  class FormCRUDPlayer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        maxDate: utils.toStringDate(new Date()),
      }

      this.optionRef = null;
      this.handleInput = this.handleInput.bind(this);
    }
    render() { 
      return(
        <React.Fragment>
            <section className="form-row">
              <article className="form-group col-md-7">
                <label htmlFor="fullName">{dataPlayersPage.FormCRUD.fullNameForm}</label>
                <input type="text" 
                  className="form-control" 
                  name="name"
                  id="fullName" 
                  placeholder={dataPlayersPage.FormCRUD.fullNameFormExample} 
                  aria-describedby="instructionName" 
                  aria-required="true"
                  value={this.props.playerForm.name}
                  onChange={ this.handleInput }
                  required/>
                <small id="instructionName" className="form-text text-muted">
                  {dataPlayersPage.FormCRUD.instructionFullNameForm}
                </small>
              </article>              
              <article className="form-group col-md-5">
                <label htmlFor="birthDate">{dataPlayersPage.FormCRUD.birthDateForm}</label>
                <input type="date" 
                  className="form-control" 
                  name="birthDate"
                  id="birthDate" 
                  aria-required="true" 
                  max={this.state.maxDate}
                  min={dataPlayersPage.FormCRUD.minDate}
                  value={this.props.playerForm.birthDate}
                  onChange={ this.handleInput }
                  required/>
              </article>
            </section>
            <article className="form-group">
              <label htmlFor="countrytySelector">{dataPlayersPage.FormCRUD.nationalityForm}</label>
              <select className="form-control" name="idCountry" id="countrytySelector" value={this.props.playerForm.idCountry} onChange={ this.handleInput } required>
                <CountryOptionComponent countries={this.props.store.countries}/>
              </select>              
            </article>            
        </React.Fragment>
      );
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      this.props.receiveValue({ [name]: value });
    }
  }
);

export default FormCRUDPlayer;