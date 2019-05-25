import React from 'react';
import '../../css/FormNewPlayer.css';
import { observer } from 'mobx-react';
import {CountryOptionComponent} from '../SmallPieceComponent';

const FormNewPlayer = observer(
  class FormNewPlayer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        fullNameForm: 'Nombre completo',
        instructionFullNameForm: 'Procure utilizar un nombre y un apellido.',
        birthDateForm: 'Fecha de nacimiento',
        nationalityForm: 'Nacionalidad',
        selectMessageForm: '--eliga el país--',
        defaultSelected: '',
      }
      
      this.handleInput = this.handleInput.bind(this);
    }
    render() { 
      return(
        <React.Fragment>
            <section className="form-row">
              <article className="form-group col-md-8">
                <label htmlFor="fullName">{this.state.fullNameForm}</label>
                <input type="text" 
                  className="form-control" 
                  name="name"
                  id="fullName" 
                  placeholder="Nombre completo" 
                  aria-describedby="instructionName" 
                  aria-required="true"
                  onChange={ this.handleInput }
                  required/>
                <small id="instructionName" className="form-text text-muted">
                  {this.state.instructionFullNameForm}
                </small>
              </article>
              <article className="form-group col-md-4">
                <label htmlFor="birthDate">{this.state.birthDateForm}</label>
                <input type="date" 
                  className="form-control" 
                  name="birthDate"
                  id="birthDate" 
                  aria-required="true" 
                  onChange={ this.handleInput }
                  required/>
              </article>
            </section>
            <article className="form-group">
              <label htmlFor="nationalitySelector">{this.state.nationalityForm}</label>
              <select className="form-control" name="nationality" id="nationalitySelector" onChange={ this.handleInput } required>
                <CountryOptionComponent countries={this.props.store.countries}/>
              </select>
            </article>
        </React.Fragment>
      );
    }

    handleInput = (event) => {
      const { name, value } = event.target;
      this.props.sendValue({ [name]: value });
    }
  }
);

export default FormNewPlayer;