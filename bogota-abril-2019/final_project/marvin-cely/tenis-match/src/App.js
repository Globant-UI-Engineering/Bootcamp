import React from '../node_modules/react';
import { BrowserRouter as Router, Route, Link } from "../node_modules/react-router-dom";
import { observer } from '../node_modules/mobx-react';
import './css/App.css';
import tennisLogo from './images/tennisLogo.png';
import FooterPage from './components/FooterComponent/FooterPage';
import serviceGetData from './services/serviceGetData';
import thesaurus from './utils/thesaurus';
import routesPages from './components/router';
import { dataApp } from './data-component/data-app'

const App = observer(
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameApp: dataApp.nameApp,
    }

    this.collapseButtonRef = React.createRef();
    this.collapseButton = this.collapseButton.bind(this);
    // Here is the firestore's onSnapshot when gets the "()" Unlink a listening agent. See componentWillMount.
    const {PLAYERS, TOURNAMENTS, COUNTRIES} = thesaurus.collectionsName;
    this.unSubcribePlayers = serviceGetData.listenAllElementsList(this.props.store, PLAYERS)
    this.unSubcribeTournaments = serviceGetData.listenAllElementsList(this.props.store, TOURNAMENTS);
    this.unSubcribeCountires = serviceGetData.listenAllElementsMap(this.props.store, COUNTRIES);
  }

  componentWillUnmount() {
    this.unSubcribePlayers();
    this.unSubcribeTournaments();
    this.unSubcribeCountires();
  }

  collapseButton() {
    if(this.collapseButtonRef.current.classList.length === 1)
      this.collapseButtonRef.current.click();
  }
  
  render() {
    const linkList = routesPages.map(({path, icon, title}, index) => {
      return (
        <Link
          key={index}
          className="nav-link"
          to={path}
          onClick={this.collapseButton}
        >
          <i className={icon}></i>
          &nbsp;{title}
        </Link>
      );
    });

    const navBar = () => {
      return(
        <nav 
          className="navbar sticky-top navbar-expand-lg navbar-dark justify-content-between" 
          aria-label="Menú principal">
            <Link
              to={routesPages[0].path}
              id="navegacion-inicio-tab" 
              role="tab" 
              aria-controls="navegacion-inicio" 
              aria-selected="true">
                <header className="d-flex align-items-center">
                  <img className="img-fluid" src={tennisLogo} alt="Logo Pelota de tenis" />
                  <h1>{this.state.nameApp}</h1>
                </header>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#barraNavegacion" aria-controls="barraNavegacion" aria-expanded="false" aria-label="Toggle navigation" ref={this.collapseButtonRef}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse" id="barraNavegacion">
              <article className="navbar-nav ml-3 mt-2 mt-lg-0 ml-md-auto">
                {linkList}
              </article>
            </section>
        </nav>
      );
    };

    const routesList = routesPages.map(({title, path, exact, component: ComponentPage}, key) => {
      return (
        <Route
          key={key}
          exact={exact}
          path={path}
          render={(props) => <ComponentPage {...props} titlePage={title} store={this.props.store}/>}
        />
      );
    });

    return (
      <React.Fragment>
        <main>
          <Router>
            {navBar()}
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
