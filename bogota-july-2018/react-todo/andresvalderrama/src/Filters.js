import React from 'react'
import { NavLink } from 'react-router-dom'

export default function (props) {
  return (
    <section className="filters">
      <b>Filters:</b> <NavLink exact to="/">Show all</NavLink> <NavLink exact to="/completed">Show completed</NavLink> <NavLink exact to="/active">show active</NavLink>
    </section>
  )
} 