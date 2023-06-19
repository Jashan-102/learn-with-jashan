import React from 'react'
import CodeContainer from '../../Other/CodeContainer'

export default function RefsInReact() {
  return (
    <div className='container'>
      <h1 className='h1'>Refs in ReactJS</h1>
      <div>
        <ol>
          <li>Refs provide a way to access and manipulate DOM elements or React components directly.</li>
          <li>React says, their should be minimal use of Refs. Don't manipulate DOM directly as it leads to make react app slow. Instead of refs handle stuff by using state/props.</li>
          <li>Refs in class component:
            <CodeContainer>
              {`  constructor(props) {
    super(props);
    // Create a ref with name myRef by using React.createRef()
    this.myRef = React.createRef();
  }`}
            </CodeContainer>
            To Access this ref use: this.myRef.current
            <CodeContainer>
              {`handleClick = () => {
    // Access the ref using this.myRef.current
    this.myRef.current.focus();
  };

<input type="text" ref={this.myRef} />
<button onClick={this.handleClick}>Focus Input</button>`}
            </CodeContainer>
            this.myRef.current.value = 100: ref - current state of element - DOM property you want to access or apply.
          </li>
          <li>useRef Hook in functional components: useRef(defaultValue)
            <CodeContainer>
              {`const inputRef = useRef(null);
 const handleClick = () => {
    inputRef.current.focus();
  };
<input type="text" ref={inputRef} />
<button onClick={handleClick}>Focus Input</button>
`}
            </CodeContainer>
          </li>
        </ol>
      </div>

      <div>
        <h6>forwardRef in ReactJS</h6>
        <ol>
          <li>When you want to access a DOM but the element is in d/f component forwardRef helps us.</li>
          <li>Basically we are forwarding ref from one component to another.</li>
          <li>forward ref from parent to child component:<br />
            Declaring forwardRef in parent component:
            <CodeContainer>
              {`const inputRef = React.createRef();

const handleClick = () => {
inputRef.current.focus();
}

// pass ref to child component 
<ChildComponent ref={inputRef} />
<button onClick={handleClick}>Focus Input</button>
`}
            </CodeContainer>
            Accessing in Child Component:
            <CodeContainer>
              {`const ChildComponent = forwardRef((props, ref) => {
  // Child component logic
  return <input ref={ref} />;
});`}
            </CodeContainer>
            In this basically we are declaring ref in parent component and performing DOM manipulation in parent component but the element presents in Child Component.
            <ul>
              <li>You have created an ref in parent component</li>
              <li>Pass ref as a prop to child component. But you wnt get ref inside child component prop.</li>
              <li>To access ref in child component you have to pass ref with prop as a second parameter</li>
              <li>Assign ref to you element</li>
              <li>Wrap you component with forwardRef</li>
              <li>In case we are using multiple aspects to wrap a component use it as:
                <CodeContainer>
                  {`export default connect(mapstateToprops,{forwardRef: true},(ComponentName)`}
                </CodeContainer>
                OR you can Do
                <CodeContainer>
                  {`const MyComponent = forwardRef((props, ref) => {
  // Component logic here
  return <div ref={ref}>Hello, World!</div>;
});

const ConnectedComponent = connect(mapStateToProps)(MyComponent);

export default ConnectedComponent;`}
                </CodeContainer>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  )
}
