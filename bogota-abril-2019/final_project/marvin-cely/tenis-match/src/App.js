import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import serviceGetData from './services/serviceGetData';
import serviceAddData from './services/serviceAddData';
import serviceUpdateData from './services/serviceUpdateData';
import serviceDeleteData from './services/serviceDeleteData';
import thesaurus from './utils/thesaurus';

const App = observer(
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unSubcribePlayers: null,
    }
    // Here is the firestore's onSnapshot when gets the "()" Unlink a listening agent. See componentWillMount
    this.unSubcribePlayers = serviceGetData.obtainAll(this.props.store, this.props.fireStore, thesaurus.collectionsName.PLAYERS);
    this.unSubcribeMatches = serviceGetData.obtainAll(this.props.store, this.props.fireStore, thesaurus.collectionsName.MATCHES);
    this.unSubcribePoints = serviceGetData.obtainAll(this.props.store, this.props.fireStore, thesaurus.collectionsName.POINTS);
  }

  async componentDidMount() {

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
            {(this.props.store.isLoadingPlayers) ? <marquee>Loading...</marquee>: this.props.store.players[0].name}
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
