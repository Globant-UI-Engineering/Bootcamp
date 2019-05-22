import React from "react";
import { connect } from "react-redux";
import { login } from "../routes/LoginRedirect";
import { getAllErrorsList } from "../store/reducers";
import styles from "./LoginWarningModal.module.css";

function LoginWarningModal({ errors }) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.loginWarning}>
        <h1>Log in</h1>
        <p>You need to log in to Spotify first.</p>
        <button onClick={login}>Log in</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  errors: getAllErrorsList(state),
});

export default connect(mapStateToProps)(LoginWarningModal);
