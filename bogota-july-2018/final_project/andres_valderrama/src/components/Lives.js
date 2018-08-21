import React from 'react'

export default function ({ lives }) {
  return (
    <section className="lives">
      <p>lives:</p>
      <div>
        { Array.from({length: lives}, (lives, i) => <span key={i} role="img" aria-label="live" className="live">️💀</span>)}
      </div>
    </section>
  )
}
