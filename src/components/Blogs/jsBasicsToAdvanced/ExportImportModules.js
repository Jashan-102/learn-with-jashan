import React from 'react'
import CodeContainer from '../../Other/CodeContainer'

export default function ExportImportModules() {
  return (
    <div>
      <h2>ES6 Modules</h2>
      <div>
        <p>
          ES6 Modules are introduced in ES6[2015] year.<br />
          It lead us to use multiple files for our code. i.e, you can split your code among multiple files.<br />
          To do so we have to use:<br />
          <strong>import:</strong> import the function from a file.<br />
          <strong>export:</strong> export the function where define it.<br />
          <strong> type= 'module':</strong> This lead us to use ES6 modules and also do the defer work. So, we no need to add defer with type='module'
          <CodeContainer>
            {`<script type="module" src="my.js"></script>`}
          </CodeContainer>
          Also you can rename the export function while importing it.
          <CodeContainer>
            {`import {firstName as fname} from 'abc.js'`}
          </CodeContainer>
          <strong>export default:</strong> export default lead to import function name without wrapped in curly braces.<br />You can only use one export default in one file.<br />
          <strong>With export default:</strong>
          <CodeContainer>
            {`import firstName from 'abc.js'`}
          </CodeContainer>
          <strong>Without export default:</strong>
          <CodeContainer>
            {`import {firstName} from 'abc.js'`}
          </CodeContainer>
        </p>
      </div>
    </div>
  )
}
