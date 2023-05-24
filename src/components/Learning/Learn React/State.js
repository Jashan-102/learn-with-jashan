import React from 'react'

export default function State() {
  return (
    <div>
      <h3 className='h3'>State</h3>
      <ul className='list-disc'>
        <li>State is a simple JS Object used to store data.</li>
        <li>
          React State v/s JS variable: On React State update, State inform Component that some update happens whereas JS variable can't. React only understand props and state update only.
        </li>
      </ul>

      <h6>useStateHook:</h6>
    </div>
  )
}
