import React from 'react';

import { auth } from '../firebase';

const LogOutButton = () =>
  <button className="Logout-button Button-remove" onClick={auth.doSignOut}>
    Log Out
  </button>

export default LogOutButton;
