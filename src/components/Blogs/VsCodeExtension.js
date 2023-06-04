import React from 'react'
import { VsCodeExtensionContent } from '../Other/content/vsCodeExt'

export default function VsCodeExtension() {
  return (
    <div className='container'>
      <h3 className='h3'>VS Code Extensions:</h3>
      <ol className='list-decimal list-inside'>
        {VsCodeExtensionContent?.map((extension) => <li key={extension.id}>
          <a href={extension.link} target='_blank'>{extension.name}</a>
        </li>)}
      </ol>
    </div>
  )
}
