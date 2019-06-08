let my_state = {
  pokemons: [],
  leftPokemon: undefined,
  rightPokemon: undefined
};

const reducer = (state=my_state, action) => {
  switch (action.type) {
    case 'SAVE_POKEMON': {
        state.pokemons.push(action.payload)
    }
    case 'SAVE_LEFT_POKEMON' : {
      state.leftPokemon = action.payload
    }
    case 'SAVE_RIGHT_POKEMON' : {
      state.rightPokemon = action.payload
    }
    case 'GET_STATE': {
      console.log(state);
    }
    default: return state;
  }
};

export default reducer;
