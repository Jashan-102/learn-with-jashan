import React from 'react'
import CodeContainer from '../../Other/CodeContainer'

export default function LifeCycleMethods() {
  return (
    <div className='container'>
      <h1 className='h1'>LifeCycle Methods</h1>
      <p>The phases of LifeCycle Methods</p>
      <ol className='list-inside list-decimal'>
        <li>Mount = Component Loaded = Load Product</li>
        <li>Update = Component state/props Updated = Update Product</li>
        <li>UnMount = Component is Removed = Remove Product</li>
      </ol>
      <div>
        <h2>Class Component LifeCycle Methods</h2>
        <div>
          <h6 className='h6'>1. Constructor Method:</h6>
          <ul className='list-inside list-disc'>
            <li>It is very first LCM. Whenever a component render this method is called at first.</li>
            <li>This method is invoked before HTML renders
              <CodeContainer>
                {`constructor(props) {
      super(props);
      // add your code 
    }`}
              </CodeContainer>
            </li>
            {/* <li>Don't with constructor: Never call your API here call it in componentDidMount</li> */}
          </ul>
          <h6 className='h6'>2. render Method</h6>
          <ul className='list-disc'>
            <li>It is a required method in a class component that determines what will be displayed on the screen.</li>
            <li>Inside this we write JSX code.</li>
            <li>Whenever a state/props changes render method re-rendered.</li>
          </ul>
          <h6 className='h6'>3. componentDidMount:</h6>
          <ul className='list-disc'>
            <li>Mount = HTML/CSS is ready</li>
            <li>It has no impact on state and props change</li>
            <li>API calls should be done here as it only calls once no again-again API calls.</li>
          </ul>
          <h6 className='h6'>4. ComponentDidUpdate</h6>
          <ul className='list-disc'>
            <li>It belongs to update Phase. Whenever a State/props updates this method invoked.</li>
            <li>Never update an state inside this method. As it run on every state update, and it will lead to an infinite loop of triggering this method on update.</li>
            <li>Still in a case if we have to update state inside this method: You can update by using condition.
              As this methods provide us prevProps, prevState and snapshot as params. On basis of these we can add condition.
              <CodeContainer>
                {`componentDidUpdate(prevProps, prevState, snapshot) {
  // add condition here on the basis of prev state/props and current state/props
}`}
              </CodeContainer>
              <ol>
                <li>prevProps: consist previous value of props</li>
                <li>prevState: consist previous value of state</li>
                <li>snapshot: it will be undefined until you use getSnapshotBeforeUpdate Method.</li>
              </ol>
            </li>
            <li>Stop using componentDidUpdate instead of this use shouldComponentUpdate()</li>
          </ul>
          <h6 className='h6'>5. shouldComponentUpdate</h6>
          <ul>
            <li> It provides control over whether a component should re-render or not. It will update component only if the defined condition fulfilled.</li>
            <li>eg: You want a component to update only when count is 5.
              <CodeContainer>
                {`shouldComponentUpdate(nextProps, nextState) {
    if (this.props.count !== nextProps.count) {
      if (nextProps.count === 5) {
        return true;
      }
    }
    return false;
}`}
              </CodeContainer>
            </li>
            <li>By default it always returns false.</li>
            <li>It blocks component unnecessary re-rendering of component. Only re-render when return true.</li>
          </ul>
          <h6 className='h6'>6. componentWillUnmount:</h6>
          <ul>
            <li>Whenever a component Removes from DOM this method will be called.</li>
            <li>It called before component delete or removed</li>
            <li>Use of this Method: stop an API load, setTimeOut removed, an function called</li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <h2>Function Component LifeCycle Methods</h2>
        <p>In functional component we use useEffect() Hook for LifeCycleMethod. useEffect took an function as a first parameter and a dependency as a second parameter. You can use n number of useEffect hooks in a component.</p>
        <ul>
          <li>
            Run on every render (No dependency passed): This will call on every state and props updates. It belongs to component every state and props update.
            <CodeContainer>
              {`useEffect(() => console.log('hii))`}
            </CodeContainer>
          </li>
          <li>
            Run on first render and on dependency update: This belongs to count state only. If count changes only then this hook will be invoked.
            <CodeContainer>
              {`useEffect(() => console.log(count),[count])`}
            </CodeContainer>
            You can pass multiple dependency to useEffect. This Hook can be use as shouldComponentUpdate, ComponentDidUpdate
            <CodeContainer>
              {`useEffect(() => console.log(count),[count. props.data])`}
            </CodeContainer>
          </li>
          <li>
            You can also update a state inside useEffect but be careful that should be in condition so that No infinite loop is their.
          </li>
          <li>
            constructor and componentDidMount: Runs only on the first render (Pass an empty array as dependency)
            <CodeContainer>
              {`useEffect(() => console.log('run on first render),[])`}
            </CodeContainer>
          </li>
          <li>componentWillUnmount:
            <CodeContainer>
              {`  useEffect(() => {
    // Run this code when the component is mounted
    return () => {
      // Run this code when the component is unmounted (cleanup)
      reset()
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)
`}
            </CodeContainer>
          </li>
        </ul>
      </div>
    </div>
  )
}
