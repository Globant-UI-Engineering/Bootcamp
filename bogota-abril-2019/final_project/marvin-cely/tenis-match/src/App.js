import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from 'mobx-react';
import './css/App.css';
import tennisLogo from './images/tennisLogo.png';
import FooterPage from './components/FooterComponent/FooterPage';
import serviceGetData from './services/serviceGetData';
import thesaurus from './utils/thesaurus';
import menuList from './components/menuList';
import routesPages from './components/routesPages';

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
    const {PLAYERS, MATCHES, POINTS} = thesaurus.collectionsName;
    this.unSubcribePlayers = serviceGetData.listenAllElements(this.props.store, PLAYERS);
    this.unSubcribeMatches = serviceGetData.listenAllElements(this.props.store, MATCHES);
    this.unSubcribePoints = serviceGetData.listenAllElements(this.props.store, POINTS);
  }

  componentWillUnmount() {
    this.unSubcribePlayers();
    this.unSubcribeMatches();
    this.unSubcribePoints();
  }
  
  render() {
    const linkList = menuList.map(({to, icon, title}, key) => {
      return (
        <Link
          key={key}
          className="nav-link"
          to={to}
        >
          <i className={icon}></i>
          &nbsp;{title}
        </Link>
      );
    });

    const routesList = routesPages.map(({path, exact, component: ComponentPage}, key) => {
      return (
        <Route
          key={key}
          exact={exact}
          path={path}
          render={(props) => <ComponentPage {...props} store={this.props.store}/>}
        />
      );
    });

    return (
      <React.Fragment>
        <main>
          <Router>
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark justify-content-between">
              <Link
                to="/"
                id="navegacion-inicio-tab" 
                role="tab" 
                aria-controls="navegacion-inicio" 
                aria-selected="true">
                  <header class="d-flex align-items-center">
                    <img className="img-fluid" src={tennisLogo} alt="Logo Pelota de tenis" />
                    <h1>{this.state.nameApp}</h1>
                  </header>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#barraNavegacion" aria-controls="barraNavegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <section class="collapse navbar-collapse" id="barraNavegacion">
                <article class="navbar-nav ml-3 mt-2 mt-lg-0 ml-md-auto">
                  {linkList}
                </article>
              </section>
            </nav>
            <section>
              {routesList}
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
