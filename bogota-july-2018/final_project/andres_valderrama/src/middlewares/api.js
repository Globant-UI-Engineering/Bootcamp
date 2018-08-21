import axios from 'axios'
import { startGame } from '../actions/game'

function getRandomNumber (lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}

function getWord () {
  return axios.get('https://hangmapi.herokuapp.com/words')
    .then(({ data }) => {
      let _randomNumber = getRandomNumber(0, data.length)
      return data[_randomNumber]
    })
}

export const fetchData = () => dispatch => {
  axios.all([getWord()])
    .then(axios.spread(function (word) {
      dispatch(startGame(word))
    }))
}
