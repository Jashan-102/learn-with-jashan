import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 as codeTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeContainer(props) {
  return (
    <div className='w-11/12	mx-auto my-6 syntax-highlighter'>
      <SyntaxHighlighter language="javascript" style={codeTheme}>
        {props.children}
      </SyntaxHighlighter>
    </div>
  )
}
