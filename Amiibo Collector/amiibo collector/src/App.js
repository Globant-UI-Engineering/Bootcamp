import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";

import Shelf from "./containers/Shelf";
import Search from "./containers/Search";
import InitialPage from "./components/InitialPage";
import Navigation from "./components/Navigation";

import "./css/app.css";
import logo from "./assets/logo_amiibo.png";

import * as actionTypes from "./store/actions/index";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.searchAmiibo();
  }

  searchAmiibo() {
    axios
      .get(`http://www.amiiboapi.com/api/amiibo/`)
      .then(response =>
        this.props.AddAllAmiibos(
          response.data.amiibo.map(amiibo => {
            return { ...amiibo, shelf: "MissingAmiibo" };
          })
        )
      )
      .catch(e => {
        console.log("error", e);
      });
  }

  render() {
    let searchedAmiibos = [];
    searchedAmiibos = this.props.allAmi.filter(amiibo => {
      let character = amiibo.character === this.props.character;
      let gameSeries = amiibo.gameSeries === this.props.gameSeries;
      let amiiboSeries = amiibo.amiiboSeries === this.props.amiiboSeries;

      let characterAndGSeries = character && gameSeries;
      let characterAndASeries = character && amiiboSeries;
      let gSeriesAndaSeries = gameSeries && amiiboSeries;

      if (character && gameSeries && amiiboSeries) {
        return amiibo;
      }

      if (characterAndGSeries && !this.props.amiiboSeries) {
        return amiibo;
      } else if (characterAndASeries && !this.props.gameSeries) {
        return amiibo;
      } else if (gSeriesAndaSeries && !this.props.character) {
        return amiibo;
      }

      if (character && (!this.props.gameSeries && !this.props.amiiboSeries)) {
        return amiibo;
      }
      if (gameSeries && (!this.props.character && !this.props.amiiboSeries)) {
        return amiibo;
      }
      if (amiiboSeries && (!this.props.character && !this.props.gameSeries)) {
        return amiibo;
      }
    });

    return (
      <React.Fragment>
        <header className="wrapper" role="banner">
          <img src={logo} alt="amiibo" className="nav-logo" />
          <Navigation />
          <Switch>
            <Route
              path="/(collection|wishlist|shelf)"
              render={() => <Search searchParams={this.props.searchParams} />}
            />
          </Switch>
        </header>
        <main className="wrapper" role="Main">
          <Switch>
            <Route
              path="/"
              exact
              render={() => <InitialPage NoAmiibos={this.props.noAmi} />}
            />
            <Route
              path="/shelf"
              render={() => (
                <Shelf
                  amiibos={searchedAmiibos}
                  addCol={this.props.addtoCollection}
                  addWish={this.props.addtoWishList}
                  shelf={"MissingAmiibo"}
                />
              )}
            />
            <Route
              path="/collection"
              render={() => (
                <Shelf
                  amiibos={searchedAmiibos}
                  addDel={this.props.deleteAmiibo}
                  addWish={this.props.addtoWishList}
                  shelf={"Collection"}
                />
              )}
            />
            <Route
              path="/wishlist"
              render={() => (
                <Shelf
                  amiibos={searchedAmiibos}
                  addDel={this.props.deleteAmiibo}
                  addCol={this.props.addtoCollection}
                  shelf={"WishList"}
                />
              )}
            />
          </Switch>
        </main>
        <footer className="wrapper" role="contentinfo">
          <p>Amiibo Collector 2018 by DomGalop</p>
        </footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allAmi: state.allAmiibos,
    gameSeries: state.gameSeries,
    amiiboSeries: state.amiiboSeries,
    character: state.character
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addtoCollection: key => dispatch(actionTypes.addToCollection(key)),
    addtoWishList: key => dispatch(actionTypes.addToWishList(key)),
    deleteAmiibo: key => dispatch(actionTypes.deleteAmiibo(key)),
    AddAllAmiibos: amiibos => dispatch(actionTypes.allAmiibos(amiibos)),
    searchParams: (amiiboSeries, character, gameSeries) =>
      dispatch(actionTypes.searchParams(amiiboSeries, character, gameSeries))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
