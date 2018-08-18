import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebase';
import Project from '../../entities/Project.js';
import '../../css/AddProjectForm.css';

class AddProjectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {nameValue: '',
                  descriptionValue: '',
                  estimatedTimeValue: '',
                  privacityValue: 'private',
                  error: null,
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
      const {value, name} = event.target;
      this.setState({
        [name]: value
      });
  }

  handleSubmit(event) {
    if (this.state.nameValue!=='' && this.state.descriptionValue!=='' && this.state.estimatedTimeValue!=='' && !isNaN(this.state.estimatedTimeValue)){

    db.createProject(new Project(this.state.nameValue, this.state.privacityValue,
                                 this.state.descriptionValue, this.state.estimatedTimeValue,
                                 this.props.authUserId, this.props.authUserName))
    .then(() => {
       this.props.visibilityHandler();
       this.setState({nameValue: '',
                     descriptionValue: '',
                     estimatedTimeValue: '',
                     privacityValue: 'private',
                     });
    })
    .catch(exception => {
        this.setState({error: exception});
    });
    event.preventDefault();

    }else{
      alert('Please enter valid values on all fields');
      event.preventDefault();
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.visible?
          <section className="New-project">
            <form className="New-project-form" onSubmit={this.handleSubmit}>
              <div className="Form-field">
                <label htmlFor="nameValue">Project Name :</label>
                <input type="text" name="nameValue" placeholder="Project Name" value={this.state.nameValue} onChange={this.handleInputChange} />
              </div>
              <div className="Form-field">
                <label htmlFor="descriptionValue">Project Description :</label>
                <textarea name="descriptionValue" placeholder="Project Description" rows= "3" value={this.state.descriptionValue} onChange={this.handleInputChange} />
              </div>
              <div className="Form-field">
                <label htmlFor="estimatedTimeValue">Estimated Time in Hours :</label>
                <input type="text" name="estimatedTimeValue" placeholder="Estimated Time" value={this.state.estimatedTimeValue} onChange={this.handleInputChange} />
              </div>
              <div className="Form-field">
                <label htmlFor="privacityValue">Privacity :</label>
                <select name="privacityValue" value={this.state.privacityValue} onChange={this.handleInputChange}>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
              </div>
              <button type="submit" value="Submit" className="Button-new">Create</button>
              <button type="button" className="Button-remove" onClick={()=>this.props.visibilityHandler()}>Cancel</button>
              { this.state.error && <p>{this.state.error.message}</p> }
            </form>
          </section>
          :
            <p></p>
        }
      </React.Fragment>
    );
  }
}

AddProjectForm.propTypes = {
  visible: PropTypes.bool,
  visibilityHandler: PropTypes.func
}

export default AddProjectForm;
