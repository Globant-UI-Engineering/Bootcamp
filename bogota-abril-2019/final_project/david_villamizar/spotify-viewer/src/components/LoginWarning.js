import React from "react";
import { login } from "../routes/LoginRedirect";

export default function LoginWarning({ history }) {
  return (
    <>
      <h1>Log in</h1>
      <p>You need to log in to Spotify first.</p>
      <button onClick={login}>Log in</button>
    </>
  );
}
