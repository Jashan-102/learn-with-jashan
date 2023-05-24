import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const { blogDetails: { wrapperClasses, linkTo, description, title } } = props
  return (
    <Link to={linkTo}>
      <div className={`card bg-light border border-gray space-y-6 ${wrapperClasses}`}>
        <div className={`card-body`}>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
