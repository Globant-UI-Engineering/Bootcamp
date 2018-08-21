import React from 'react'
import { connect } from 'react-redux'

import Sign from './Sign'
import { catchLetter } from '../actions/game'

const fullAlphabet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '-']
function keyboard (props) {
  return (
    <form className="keyboard" onClick={ e => {e.preventDefault(); props.catchLetter(e.target)} }>
      {fullAlphabet.map((sign, i) => <Sign key={i} sign={sign} />)}
    </form>
  )
}

export default connect(null, { catchLetter })(keyboard)
