import axios from "axios";

export class PokeapiService {
  static pokeapiUrl = "https://pokeapi.co/api/v2/";

  static search = (pokemonName) => {
    
    return pokemonName.trim() !== '' ? axios.get(this.pokeapiUrl + 'pokemon/' + pokemonName.toLowerCase()): {}
  };
  
  static getAllNames = () => {
    return axios.get(this.pokeapiUrl + 'pokemon', {
      params: {
        limit: 1000
      }
    })
  }
}
