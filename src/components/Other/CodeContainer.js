import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { kimbieLight as codeTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeContainer(props) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={codeTheme}>
        {props.children}
      </SyntaxHighlighter>
    </div>
  )
}
