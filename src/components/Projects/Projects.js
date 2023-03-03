import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='container mx-auto'>
      <Link to="/projects/covid-tracker">CovidTracker</Link>
    </div>
  )
}
