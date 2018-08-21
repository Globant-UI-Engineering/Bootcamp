import React, { Component } from 'react'
import { connect } from 'react-redux'
import Letter from './Letter'


const matStateToProps = ({ game }) => ({
  letters: game.emptyLetters,
  isTheLetterInTheWord: game.isTheLetterInTheWord
})

class Word extends Component {
  render () {
    let { letters } = this.props
    return (
      <section className="word">
        { letters.map((letter, i) => <Letter key={i} letter={letter}/>) }
      </section>
    )
  }
}

export default connect(matStateToProps)(Word)
