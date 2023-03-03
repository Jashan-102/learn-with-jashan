import React from 'react'
import Components from './Components'
import Events from './Events'
import JSX from './JSX'
import PackageJson from './PackageJson'
import State from './State'

export default function LearnReact() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center'>Learn ReactJS</h1>
      <div>
        <h3>Introduction</h3>
        <ul>
          <li>It is a JS Library.</li>
          <li>
            It is a Single Page Application.
            <br />No Page Reload
            <br />Fast Speed
          </li>
          <li>It is Fast Library as it uses Virtual DOM. And Virtual DOM updated only <strong>what</strong> required.</li>
          <li>It is maintained by Facebook.</li>
          <li>It's first release was in 29 May 2013.</li>
        </ul>
      </div>
      {/* <PackageJson />
      <Components />
      <JSX />
      <Events /> */}
      <State />

    </div>
  )
}
