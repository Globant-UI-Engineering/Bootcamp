import React, {Component} from "react";
import '../styles/comparative.css';
import storage from "../storage/storage";
import {ComparedPokemonComponent} from "../component/compared-pokemon-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router-dom";

export class ComparativeComponent extends Component {
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      backPressed: false
    }
  }
  
  componentWillMount() {
    this.setState({
      pokemons: storage.getState().pokemons
    })
  }
  
  componentDidMount() {
  }
  
  goBack = () => {
    this.setState({
      backPressed: true
    })
  };
  
  render() {
    if (this.state.backPressed) {
      return (
        <Redirect to={'/'} />
      )
    } else {
      return (
        <div style={{color: 'white'}}>
          <div className={'comparative-container col align-self-center'}>
            <div className={'comparative-inside-container'}>
              {
                this.state.pokemons.map(pokemonData =>
                  <ComparedPokemonComponent key={pokemonData.id} pokemonData={pokemonData}/>
                )
              }
            </div>
            <button onClick={this.goBack}>
              <FontAwesomeIcon icon={'arrow-circle-left'}/>
            </button>
          </div>
        </div>
      )
    }
  }
}
