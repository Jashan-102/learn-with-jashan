import React, { useState } from 'react'

export default function CopyContainer(props) {
  const { copyText, imgSrc } = props
  const [isCopied, setIsCopied] = useState(false)

  function copyToClipBoard(copyText) {
    setIsCopied(true)
    navigator.clipboard.writeText(copyText)
    setTimeout(() => setIsCopied(false), 1000);
  }

  return (
    <div className='my-6 code-card'>
      <div className="card w-50 bg-base-100 shadow-xl">
        <div className="card-body bg-[#1E1E1E] text-white rounded-lg">
          <div className='flex justify-between'>
            <img src={imgSrc} className='w-3/12' />
            {/* <code className='text-white mx-3 whitespace-pre'>{copyText}</code> */}
            <button className='cursor-pointer btn m-3' onClick={() => copyToClipBoard(copyText)}>{isCopied ? 'Copied!' : 'Copy'}</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
