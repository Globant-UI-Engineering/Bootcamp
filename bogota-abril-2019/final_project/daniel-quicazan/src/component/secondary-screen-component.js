import React, {Component} from "react";
import '../styles/secondary-screen-component.css';

export class SecondaryScreenComponent extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
    SecondaryScreenComponent.renderPokemonStats = SecondaryScreenComponent.renderPokemonStats.bind(this)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }
  
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static renderPokemonStats(pokemonStats) {
     return pokemonStats
       .map((stat) => SecondaryScreenComponent.capitalizeFirstLetter(stat.stat.name) + ': ' + stat.base_stat)
       .reduce((a, b) => a + ' ' + b)
  }

  render() {
    return(
      <div className={'secondary-screen-container'}>
        <label className={'pokemon-number'}>
          {this.props.pokemonData ? this.props.pokemonData.id : ''}
        </label>
        <label className={'pokemon-stats'}>
          {this.props.pokemonData ? SecondaryScreenComponent.renderPokemonStats(this.props.pokemonData.stats) : ''}
        </label>
      </div>
    )
  }
}
