const initialState = {
  lives: 10,
  letter: null,
  ready: false,
  message: 'game start, please select a letter.',
  end: 0
}

export function game (state = initialState, {type, payload}) {
  let actions = {
    START_GAME: () => {
      let letters = Array.from(payload.word)
      let emptyLetters = letters.map(letter => letter === ' ' ? ' ' : undefined)
      let newState = Object.assign({}, state, {
        ready: true,
        word: payload.word,
        letters, emptyLetters,
        poster: payload.poster,
        video: payload.video
      })

      return newState
    },
    CATCH_LETTER: () => {
      if (payload.buttom.tagName !== 'BUTTON' || payload.buttom.disabled) return state

      let newState
      let button = payload.buttom
      let letter = button.children[0].innerHTML

      button.disabled = true

      newState = Object.assign({}, state, { letter })
      return newState
    },
    CHECK_IF_LETTER_IS_IN_THE_WORD: () => {
      let newState
      let addLettersIfExist = state.letters
        .map(letter => letter === payload.letter ? letter : undefined)
        .map((letter, i) => state.emptyLetters[i] || letter)

      let isTheLetterInTheWord = addLettersIfExist.some(letter => letter === payload.letter)
      let isTheWordComplete = state.word === addLettersIfExist.join('') ? true : false

      newState = Object.assign({}, state, { emptyLetters: addLettersIfExist, isTheLetterInTheWord, isTheWordComplete })
      return newState
    },
    UPDATE_MESSAGE: () => {
      let { message } = payload
      let newState = Object.assign({}, state, { message })

      return newState
    },
    REMOVE_LIVE: () => {
      let newState = Object.assign({}, state, { lives: state.lives - payload.cant})
      return newState
    },
    END_GAME: () => {
      let { end, poster, video } = payload
      let newState = Object.assign({}, state, { end, poster, video })

      return newState
    }
  }
  if (actions[type]) return actions[type]()
  return state
}
