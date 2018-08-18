import React, { Component } from "react";

import * as amiiboTypes from "../utils/amiibos";
class Search extends Component {
  state = {
    character: "",
    amiiboseries: "",
    gameSeries: ""
  };

  characterHandler = event => {
    this.setState({ character: event.target.value });
  };

  amiiboseriesHandler = event => {
    this.setState({ amiiboseries: event.target.value });
  };

  gameSeriesHandler = event => {
    this.setState({ gameSeries: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form role="search">
          <fieldset>
            <div className="searchFilters">
              <div aria-label="Select character">
                <label htmlFor="sauce">Game Character: </label>
                <select
                  name="game-character"
                  id="game-character"
                  onChange={this.characterHandler}
                >
                  <option defaultValue="" selected>
                    --
                  </option>
                  {amiiboTypes.characters.map(char => (
                    <option key={char} value={char}>
                      {char}
                    </option>
                  ))}
                </select>
              </div>
              <div aria-label="Select character">
                <label htmlFor="sauce">Amiibo Series: </label>
                <select
                  name="amiibo-series"
                  id="amiibo-series"
                  onChange={this.amiiboseriesHandler}
                >
                  <option defaultValue="" selected>
                    --
                  </option>
                  {amiiboTypes.amiiboSeries.map(series => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </div>
              <div aria-label="Select character">
                <label htmlFor="sauce">Game Series: </label>
                <select
                  name="game-series"
                  id="game-series"
                  onChange={this.gameSeriesHandler}
                >
                  <option defaultValue="" selected>
                    --
                  </option>
                  {amiiboTypes.gameSeries.map(series => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>
        </form>
        <button
          className="searchButton"
          onClick={() =>
            this.props.searchParams(
              this.state.amiiboseries,
              this.state.character,
              this.state.gameSeries
            )
          }
        >
          Search Amiibo
        </button>
      </React.Fragment>
    );
  }
}

export default Search;
