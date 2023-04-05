import React from 'react'

export default function CopyContainer(props) {
  const { copyText } = props

  function copyToClipBoard(copyText) {
    navigator.clipboard.writeText(copyText)
  }

  return (
    <span className='text-amber-900 mx-3 cursor-pointer' onClick={() => copyToClipBoard(copyText)}>{copyText}</span>
  )
}
