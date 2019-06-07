import axios from "axios";

export class PokeapiService {
  static pokeapiUrl = "https://pokeapi.co/api/v2/";
  // evolution-chain/2=id
  static search = (pokemonName) => {
    return pokemonName.trim() !== '' ? axios.get(this.pokeapiUrl + 'pokemon/' + pokemonName.toLowerCase()): {}
  };
  
  static getAllNames = () => {
    return axios.get(this.pokeapiUrl + 'pokemon', {
      params: {
        limit: 1000
      }
    })
  };
  
  static getEvolution = (pokemonName) => {
  
  }
}
