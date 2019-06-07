let my_state = {
  pokemons: []
}

const reducer = (state=my_state, action) => {
  switch (action.type) {
    case 'SAVE_POKEMON': {
        state.pokemons.push(action.payload)
    }
    case 'GET_STATE': {
      console.log(state);
    }
    default: return state;
  }
};

export default reducer;
