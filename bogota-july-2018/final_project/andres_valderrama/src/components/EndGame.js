import React from 'react'

export default function (props) {
  let { poster, video } = props

  console.log(props)
  return (
    <div className="videofit">
      <video poster={poster} src={video} autoPlay loop muted></video>
    </div>
  )
}
