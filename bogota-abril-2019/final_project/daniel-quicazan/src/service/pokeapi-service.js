import axios from "axios";

export class PokeapiService {
  static pokeapiUrl = "https://pokeapi.co/api/v2/";

  static search = (pokemonName) => {
    return axios.get(this.pokeapiUrl + 'pokemon/' + pokemonName.toLowerCase())
  };
}
