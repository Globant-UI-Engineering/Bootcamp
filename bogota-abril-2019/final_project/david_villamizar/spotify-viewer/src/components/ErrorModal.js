import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllErrorsList } from "../store/reducers";
import styles from "./LoginWarningModal.module.css";

function ErrorModal({ errors }) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.loginWarning}>
        <h1>Error</h1>
        <p>{errors[0]}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  errors: getAllErrorsList(state),
});

export default withRouter(connect(mapStateToProps)(ErrorModal));
