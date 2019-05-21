import React from "react";
import { login } from "../routes/LoginRedirect";
import styles from "./LoginWarning.module.css";

export default function LoginWarning() {
  return (
    <div className={styles.loginWarning}>
      <h1>Log in</h1>
      <p>You need to log in to Spotify first.</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
