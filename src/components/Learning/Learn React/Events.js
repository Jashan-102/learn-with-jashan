import React from 'react'

export default function Events() {
  return (
    <div>
      <h3>Click Event and Function</h3>
      <ul>
        <li>onClick={`{alert}`}</li>
        <li>onClick={`{() => alert('hii')}`}</li>
        <li>onClick={`{() => alert()}`}</li>
      </ul>
    </div>
  )
}
