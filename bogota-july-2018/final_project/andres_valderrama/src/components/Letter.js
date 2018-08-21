import React from 'react'

function getClassName (letter) {
  let spaceOrLetter = letter === ' ' ? 'space' : 'letter'
  let isLetterFill = letter !== undefined && spaceOrLetter === 'letter' ? 'fill' : ''


  return `${spaceOrLetter} ${isLetterFill}`
}

export default function (props) {
  let { letter } = props
  return (<div className={getClassName(letter)}><span>{letter}  </span></div>)
}
