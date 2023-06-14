import React from 'react'
import CodeContainer from '../../Other/CodeContainer'

export default function PureComponents() {
  return (
    <div className='container'>
      <h2 className='h2'>Pure Components in Class Components</h2>
      <ol className='list-inside list-decimal'>
        <li>It help to enhance App performance.</li>
        <li>Pure Components belongs to class Components only</li>
        <li>Pure Components stop re-rendering of your Component if the value of props and state is same.</li>
        <li>eg: Onclick we want to set a name = Jashan, On every click component will re-render as we are using state. Pure Component will check is this value changes. If yes, only then re-render the component.</li>
        <li>How to declare a Component as a Pure Component:
          <CodeContainer>
            {`class App extends React.Components{ ...}`}
          </CodeContainer>
        </li>
        <li>Add Pure Component to those components whom ypu don't wants to re-render.</li>
      </ol>
      <br />
      <h2 className='h2'>UseMemo in Functional Components</h2>
      <ol className='list-inside list-decimal'>
        <li>Its is Basically Pure Component Concept for Functional Component</li>
        <li>It help to enhance App performance.</li>
        <li>It is a React Hook</li>
        <li>Whenever a component's props/state updates component re-render. Sometimes its also refer to re-render functions which are not required or not having any update. Incase that function consist setTimeout or any long load logic then it leads to slow down app unnecessarily. In this case UseMemo() help us.</li>
        <li>On update it will check is props/state updated. If yes, only then that specify function will be rendered.</li>
        <li>It took 2 parameters:
          <CodeContainer>
            {`  const renderCount = useMemo(() => {
              console.log(count *5)
            }, [count]);`}
          </CodeContainer>
          first param is a function<br />
          second param is a depend state/props<br />
          Now this function only render if count updates. even if whole component re-renders this function will not re-render until count changes.
        </li>

        <li>UseMemo is not a function. So, Whenever you want to invoke it, use it as a variable:<br />
          Like: renderCount<br />
          Not: renderCount()
        </li>
      </ol>
    </div>
  )
}
