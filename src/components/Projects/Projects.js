import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects(props) {
  return (
    <div className='container mx-auto content'>
      <Link to="/projects/covid-tracker">CovidTracker</Link>
    </div>
  )
}
