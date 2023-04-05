import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const { buttonClasses, wrapperClasses, linkTo, cardDescription, cardTitle } = props
  return (
    <div className={`card w-96 bg-base-100 shadow-xl space-y-6 ${wrapperClasses}`}>
      <div className={`card-body`}>
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
        <div className="card-actions justify-end">
          <Link to={linkTo} className="me-4 pe-4">
            <button className={`btn btn-primary ${buttonClasses}`}>
              Read Now !
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
