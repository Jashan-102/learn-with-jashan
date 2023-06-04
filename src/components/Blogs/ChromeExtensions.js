import React from 'react'
import { chromeExtensionContent } from '../Other/content/chromeExt'

export default function ChromeExtensions() {
  return (
    <div className='container'>
      <h3 className='h3'>Chrome Extensions:</h3>
      <ol className='list-decimal list-inside'>
        {chromeExtensionContent?.map((extension) => <li key={extension.id}>
          <a href={extension.link} target='_blank'>{extension.name}</a>
        </li>)}
      </ol>
    </div>
  )
}
