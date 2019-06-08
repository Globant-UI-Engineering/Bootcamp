import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Visibilities } from '../actions'

const Footer = () => (
  <footer className='links'>
    <FilterLink filter={Visibilities.DISPLAY_ALL}>All</FilterLink> 
    <FilterLink filter={Visibilities.DISPLAY_ACTIVE}>Active</FilterLink>
    <FilterLink filter={Visibilities.DISPLAY_COMPLETED}>Completed</FilterLink>
  </footer>
  
)

export default Footer