import React from 'react'
import Card from '../Other/Card'

export default function Blogs(props) {
  return (
    <div className="container mx-auto content">
      <Card
        cardTitle='Stripe JS with ReactJS'
        cardDescription='will add soon'
        linkTo='/blog/stripe-with-react'
        buttonClasses=""
        wrapperClasses=""
      />
    </div>
  )
}
