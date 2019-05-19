import React from "react";
import { Route } from "react-router-dom";

export default function Login({ match }) {
  return (
    <div>
      <button onClick={login}>Login to Spotify</button>
      <Route
        path={match.path + "/spotify-redirect"}
        component={LoginRedirect}
      />
    </div>
  );
}

function login() {
  // https://developer.spotify.com/dashboard/login
  const clientId = "37073364f98646ebb1f587b1a5747043";
  // The exact redirectUri must be registered with spotify first.
  // https://developer.spotify.com/dashboard/login
  const redirectUri = "http://localhost:3000/login/spotify-redirect/";
  // https://developer.spotify.com/documentation/general/guides/scopes/#user-read-recently-played
  const scopes = ["user-read-email", "user-top-read"].join(" ");
  const e = encodeURIComponent;
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${e(
    redirectUri,
  )}&response_type=token&scope=${e(scopes)}`;
}

function LoginRedirect(props) {
  const params = {};
  props.location.hash
    .slice(1)
    .split("&")
    .forEach(keyVal => {
      const [key, val] = keyVal
        .split("=")
        .map(token => encodeURIComponent(token));
      params[key] = val;
    });
  console.log(params);
  return (
    <div>
      <input
        className="accessToken"
        type="text"
        readOnly
        value={params.access_token}
      />
      <button
        onClick={e => {
          document.querySelector(".accessToken").select();
          document.execCommand("copy");
        }}
      >
        Copy
      </button>
    </div>
  );
}
