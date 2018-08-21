import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../middlewares/api'

class StartGame extends Component {
  render () {
    return (
      <article className="home">
        <h1>Hangman</h1>
        <button onClick={() => this.props.fetchData()}>Start Game</button>
      </article>
    )
  }
}

export default connect(null, { fetchData })(StartGame)
