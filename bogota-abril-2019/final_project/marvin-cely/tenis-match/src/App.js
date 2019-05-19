import React from 'react';
import './App.css';
import { observer } from "mobx-react";
import serviceGetData from './services/serviceGetData';
import utils from './utils/utils'

const App = observer(
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unSubcribePlayers: null,
    }
    // Here is the firestore's onSnapshot when gets the "()" Unlink a listening agent. See componentWillMount
    this.unSubcribePlayers = serviceGetData.obtainAll(this.props.store, this.props.fireStore, utils.collectionsName.PLAYERS);
    this.unSubcribeMatches = serviceGetData.obtainAll(this.props.store, this.props.fireStore, utils.collectionsName.MATCHES);
    this.unSubcribePoints = serviceGetData.obtainAll(this.props.store, this.props.fireStore, utils.collectionsName.POINTS);
  }

  componentWillUnmount() {
    this.unSubcribePlayers();
    this.unSubcribeMatches();
    this.unSubcribePoints();
  }

  
  render() {

    return (
        <div>
          Hello world! Soy Marvin Cely
          <p>Helooooo </p>
          <p>
            {(this.props.store.isLoading) ? <marquee>Loading...</marquee>: this.props.store.players[0].name}
          </p>
          <p>
          {this.props.store.players.length}
          </p>
        </div>
    );
  }
}
);

export default App;
