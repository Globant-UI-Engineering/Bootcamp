import React from 'react'

export default function (props) {
  let {letter, message, end } = props

  return (
    <section className="status">
      <div className={letter && end === 0 ? 'letter' : 'emoji'}>
        {!end
          ? <span>{letter ? letter : '😑'}</span>
          : <span>{end >= 0 ? '😎' : '👻'}</span>
        }
      </div>
      <p>{message}</p>
    </section>
  )
}
