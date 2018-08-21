import React from 'react'
import { connect } from 'react-redux'

import StartGame from './components/StartGame'
import GameWall from './components/GameWall'

const mapStateToProps = ({ game }) => ({ game })

function Hangman (props) {
  let { game } = props
  console.log(game.word)
  return !game.ready ? <StartGame/> : <GameWall/>
}

export default  connect(mapStateToProps)(Hangman)

