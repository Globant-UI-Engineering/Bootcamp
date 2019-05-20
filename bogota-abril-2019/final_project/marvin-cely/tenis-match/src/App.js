import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from 'mobx-react';
import './css/App.css';
import tennisLogo from './images/tennisLogo.png';
import HomePage from './components/HomePage';
import NewMatchPage from './components/NewMatchPage';
import MatchesPage from './components/MatchesPage';
import PlayersPage from './components/PlayersPage';
import RankingPage from './components/RankingPage';
import FooterPage from './components/FooterPage';
import serviceGetData from './services/serviceGetData';
import thesaurus from './utils/thesaurus';
import menuLinkList from './utils/menuLinkList';

import serviceAddData from './services/serviceAddData'; // TODO: Utilizar importación Luego
import serviceUpdateData from './services/serviceUpdateData'; // TODO: Utilizar importación Luego
import serviceDeleteData from './services/serviceDeleteData'; // TODO: Utilizar importación Luego


const App = observer(
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameApp: 'Tennis Match',
    }
    // Here is the firestore's onSnapshot when gets the "()" Unlink a listening agent. See componentWillMount.
    this.unSubcribePlayers = serviceGetData.obtainAll(this.props.store, this.props.fireStore, thesaurus.collectionsName.PLAYERS);
    this.unSubcribeMatches = serviceGetData.obtainAll(this.props.store, this.props.fireStore, thesaurus.collectionsName.MATCHES);
    this.unSubcribePoints = serviceGetData.obtainAll(this.props.store, this.props.fireStore, thesaurus.collectionsName.POINTS);
  }

  componentWillUnmount() {
    this.unSubcribePlayers();
    this.unSubcribeMatches();
    this.unSubcribePoints();
  }
  
  render() {
    const linkList = menuLinkList.map(({to, id, role, ariaControls, icon, title}, key) => {
      return (
        <Link
          key={key}
          to={to}
          id={id} 
          role={role} 
          aria-controls={ariaControls}>
            <i className={icon}></i>
            &nbsp;{title}
        </Link>
      );
    });
    return (
      <React.Fragment>
        <main>
          <Router>   
            <nav className="sticky-top shadow-lg pl-5 pr-5" role="tablist">
              <Link
                to="/"
                id="navegacion-inicio-tab" 
                role="tab" 
                aria-controls="navegacion-inicio" 
                aria-selected="true">
                  <header>
                    <img src={tennisLogo} alt="Logo Pelota de tenis"/>
                    <h1>                    
                      {this.state.nameApp}
                    </h1>
                  </header>
              </Link>
              <section>  
                {linkList}            
              </section>
            </nav>
            <section>
              <Route
                id="navegacion-inicio"
                role="tabpanel"
                aria-labelledby="navegacion-inicio-tab"
                exact path="/" render={ (props) => 
                  <HomePage
                    {...props}
                    store={this.props.store}
                  />
                }
              />
              <Route
                id="navegacion-nuevo-partido"
                role="tabpanel"
                aria-labelledby="navegacion-nuevo-partido-tab"
                exact path="/new-match" render={ (props) => 
                  <NewMatchPage
                    {...props}
                    store={this.props.store}
                  />
                }
              />
              <Route
                id="navegacion-partidos"
                role="tabpanel"
                aria-labelledby="navegacion-partidos-tab"
                exact path="/matches" render={ (props) => 
                  <MatchesPage
                    {...props}
                    store={this.props.store}
                  />
                }
              />
              <Route
                id="navegacion-jugadores"
                role="tabpanel"
                aria-labelledby="navegacion-jugadores-tab"
                exact path="/players" render={ (props) => 
                  <PlayersPage
                    {...props}
                    store={this.props.store}
                    fireStore={this.props.fireStore}
                  />
                }
              />
              <Route
                id="navegacion-ranking"
                role="tabpanel"
                aria-labelledby="navegacion-ranking-tab"
                exact path="/ranking" render={ (props) => 
                  <RankingPage
                    {...props}
                    store={this.props.store}
                  />
                }
              />
            </section>
          </Router>
          <FooterPage/>
        </main>
      </React.Fragment>
    );
  }
}
);

export default App;
