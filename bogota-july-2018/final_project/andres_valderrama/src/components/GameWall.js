import React from 'react'
import { connect } from 'react-redux'

import Keyboard from './Keyboard'
import GameStatus from './GameStatus'
import Word from './Word'
import Lives from './Lives'
import EndGame from './EndGame'

const mapStateToProps = ({ game }) => ({
  game
})

function GameWall (props) {
  let {
    letter,
    lives,
    message,
    end,
    video,
    poster
  } = props.game
  const EndGameComponent = <EndGame poster={poster} video={video}/>;
  const PlayingGame = <div> <Word/> <Lives lives={lives}/> </div> ;
  return (
    <article className="game">
      <div className="gameWall">
        <GameStatus letter={letter} message={message} lives={lives} end={end}/>
        { end === 0 ? <PlayingGame /> : < EndGameComponent />}
      </div>
      { end === 0 ? <Keyboard/> : '' }
    </article>
  )
}

export default connect(mapStateToProps)(GameWall)
