import React from 'react'
import CodeContainer from '../../Other/CodeContainer'

export default function HigherOrderComponent() {
  return (
    <div className='container'>
      <h1 className='h1'>Higher Order Components (HOC)</h1>
      <p>HOC took component as a props and return that component with additional props or behavior.</p>
      <CodeContainer>
        {`import React from 'react';

 // HOC component 
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component has mounted');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Normal component
const MyComponent = () => {
  return <div>My Component</div>;
};

const EnhancedComponent = withLogger(MyComponent);

export default EnhancedComponent;
`}
      </CodeContainer>
      HOC take component as input and return component as output.
      <p>
        Note that HOCs are a powerful pattern in React, but they can be complex to manage and may lead to prop conflicts or other issues. Alternatively, you can consider using React Hooks, such as the useEffect or useContext, which provide a more straightforward and flexible way to modify component behavior.
      </p>
    </div>
  )
}
