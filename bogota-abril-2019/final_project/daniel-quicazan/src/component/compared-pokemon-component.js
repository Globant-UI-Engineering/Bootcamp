import React, {Component} from "react";
import '../styles/compared-pokemon-component.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class ComparedPokemonComponent extends Component {
  
  renderedStats = ['speed', 'attack', 'defense', 'hp'];
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      pokemonImage: ComparedPokemonComponent.getPokemonImage(this.props.pokemonData),
      pokemonStats: this.getPokemonStats(this.props.pokemonData),
      pokemonNumber: ComparedPokemonComponent.getPokemonNumber(this.props.pokemonData)
    }
  }
  
  statTypeImages = {
    "base_exp": "certificate",
    "attack": "bolt",
    "defense": "shield-alt",
    "hp": "heart",
    "speed": "running"
  };
  
  static getPokemonImage(pokemonData) {
    return pokemonData.sprites.front_default
  };
  
  static getPokemonBaseExp(pokemonData) {
    return pokemonData.base_experience
  }
  
  static getPokemonNumber(pokemonData) {
    return pokemonData.id
  }
  
  getPokemonStats(pokemonData) {
    let stats = pokemonData.stats.filter(stat => this.renderedStats.includes(stat.stat.name))
      .map(stat => ({type: stat.stat.name, value: stat.base_stat}))
      .sort((stat1, stat2) => {
        if(stat1.type > stat2.type) {return 1}
        if(stat1.type < stat2.type) {return -1}
        return 0;
      });
    
    stats.unshift({type: 'base_exp', value: ComparedPokemonComponent.getPokemonBaseExp(pokemonData)})
    
    return stats
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
  }
  
  statRow = (type, value) => {
    return(
      <div key={type} className={'comparative-stat-row'}>
        <FontAwesomeIcon icon={this.statTypeImages[type]}/>
        <label>{value}</label>
      </div>
    )
  };
  
  render() {
    console.log(this.props.pokemonData);
    return(
      <div className={'pokemon-div'}>
        <img src={this.state.pokemonImage} alt={'pokemon'} className={'comparative-pokemon-image'}/>
        <label className={'comparative-pokemon-number'}>{this.state.pokemonNumber}</label>
        {
          this.state.pokemonStats.map(pokemonStat => this.statRow(pokemonStat.type, pokemonStat.value) )
        }
      </div>
    )
  }
}
