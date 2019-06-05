import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SurferCreate extends React.Component {
  // Improving accessibility using ARIA standard.
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Must enter title';
  }

  if (!formValues.description) {
    errors.description = 'Must enter description';
  }

  return errors;
};

export default reduxForm({
  form: 'surferCreate',
  validate
})(SurferCreate);