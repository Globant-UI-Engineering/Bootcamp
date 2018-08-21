import axios from 'axios'

function getRandomNumber (lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}

export const startGame = (data) => ({
  type: 'START_GAME',
  payload: data
})

export const catchLetter = (buttom) => (dispatch, getState) => {
  dispatch(catchLetter1(buttom))
  dispatch(isLetterIntoWord(getState().game.letter))

  if (getState().game.isTheWordComplete) {
    dispatch(endGame(1))
    dispatch(updateMessage('you won!!'))
    return
  }

  if (getState().game.isTheLetterInTheWord) {
    return dispatch(updateMessage('great'))
  }

  dispatch(updateMessage('wrong :('))
  dispatch(removeLive(1))

  if (!getState().game.lives) {
    dispatch(endGame(-1))
    dispatch(updateMessage('game over'))
    return
  }
}

const catchLetter1 = (buttom) => ({
  type: 'CATCH_LETTER',
  payload: {
    buttom
  }
})

const updateMessage = (message) => ({
  type: 'UPDATE_MESSAGE',
  payload: {
    message
  }
})

const isLetterIntoWord = (letter) => ({
  type: 'CHECK_IF_LETTER_IS_IN_THE_WORD',
  payload: {
    letter
  }
})

const removeLive = (cant) => ({
  type: 'REMOVE_LIVE',
  payload: {
    cant
  }
})

const endGame = (status) => (dispatch) => {
  let finalStatus = status === 1 ? 'happy' : 'nope'

  axios.get(`http://api.giphy.com/v1/gifs/search?q=${finalStatus}&api_key=Yw90akm5ZH6q4RV923zO9SiyKnn4dIyf&limit=150`)
    .then(({ data }) => {
      let _randomNumber = getRandomNumber(0, data.data.length)

      let poster = data.data[_randomNumber]['images']['480w_still'].url
      let video = data.data[_randomNumber]['images']['original_mp4'].mp4

      console.log('>>>', poster, video)

      dispatch({
        type: 'END_GAME',
        payload: {
          end: status,
          poster,
          video
        }
      })
    })
}
