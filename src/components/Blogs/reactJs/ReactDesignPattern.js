import React from 'react'

export default function ReactDesignPattern() {
  return (
    <div className='container'>
      <h1>ReactJS Design Pattern:</h1>
      {/* reuse component oin react js notes */}
      <div>
        <h6>Favor Functional Components</h6>
        <p>
          👎 Class components are verbose (using more words or long syntax than needed)<br />
          👍 Functional components are easier to read and maintain
        </p>
        <h6>Write Consistent Components</h6>
        <p>
          👎 Using different styles for every components.<br />
          👍 Stick to the same style for your components. Put helper functions in the same place, export the same way and follow the same naming patterns.
        </p>
        <h6>Name Components</h6>
        <p>
          👎 Avoid using anonymous function <br />
          👍 Use proper name of Component. It helps in reading an error stack trace and using react dev tools.
        </p>

        <h6>Organize Helper Functions</h6>
        <p>
          👎 Avoid nesting functions which don't need to hold a closure.<br />
          👍 Place the helper functions after the component. Make helper functions in d/f file and structure them in such way so, that they can be easy to fit everywhere. Break a complex function into small functions as much as we can.
        </p>
        <h6>Don't Hardcode Repetitive Markup</h6>
        <p>
          👎 Hardcoded markup is harder to manage. <br />
          👍 Use loops and configuration objects
        </p>

        <h6>Manage Component Size</h6>
        <p>
          👍 if you have too much functionality, split it in smaller components and call them instead. If a part of the markup is complex, requires loops and conditionals - extract it.
        </p>
        <h6>Write Comments in JSX</h6>
        <p>
          👍 When you feel that something needs more clarity - provide it. Add Comments
        </p>

        <h6>Use Error Boundaries</h6>
        <p>
          👎 An error in one component shouldn’t bring down the entire UI. <br />
          👍 Use Error Boundaries. Wrap your elements inside Error Boundary
        </p>

        <h6>Destructure Props</h6>
        <p>
          👎 Don't repeat props everywhere in your component. like: props.name, props.age <br />
          👍 Destruct the props.
        </p>
        <h6>Manage the Number of Props</h6>
        <p>
          👎 A high number of props is a signal that a component is doing too much. <br />
          👍 If I go above 5 props I consider whether this component should be split. In some cases, it may just need a lot of data. An input field, for example, may have a lot of props. In others it’s a sign that something needs to be extracted.<br />
          Note:  The more props a component takes, the more reasons to rerender.
        </p>
        <h6>Pass Objects Instead of Primitives</h6>
        <p>
          👎 Don't pass values on by one if they're related. like: {`name={user.name} age={user.age}`} <br />
          👍 Use an object that holds all of them instead. like: {`user={user}`}
        </p>
        <h6>Conditional Rendering</h6>
        <p>
          👎 Try to avoid short-circuit operators. like: {`count && {count}`} <br />
          👍 Use a ternary instead. like: {`count ? {count} : null`}<br />
          In some situations using short circuit operators for conditional rendering may backfire and you may end up with an unwanted 0 in your UI.
        </p>
        <h6>Avoid Nested Ternary Operators</h6>
        <p>
          👎 Nested ternaries are hard to read in JSX <br />
          👍 Place them inside a component on their own
        </p>
        <h6>Move Lists in a Separate Component</h6>
        <p>
          👎 Don't write loops together with the rest of the markup <br />
          👍 Extract the list in its own component
        </p>
        <h6>Assign Default Props When Destructuring</h6>
        <p>
          👎 Don't define the default props outside of the function<br />
          👍 Place them in the arguments list
        </p>

        <h6>Avoid Nested Render Functions</h6>
        <p>
          👎 Don't write nested render functions<br />
          👍 Extract it in its own component
        </p>

        <h4>State Management</h4>
        <h6>Use Reducers</h6>
        <p>useReducer is React Hook allows us to manage complex state and state transitions in functional components</p>
        <p>
          👎 Don't use too many separate pieces of state in component <br />
          👍 Unify them in a reducer instead i.e, useReducer Hook
        </p>

        <h6>Prefer Hooks to HOCs and Render Props</h6>
        <p>
          👎 Avoid using render props <br />
          👍 Favor hooks for their simplicity and readability. Create customs Hooks rather than HOC and render props.
        </p>

        <h6>Use Data Fetching Libraries</h6>
        <p>
          👍 Often the data that we want to manage in state is retrieved from an API. We need to keep that data in memory, update it and access it in multiple places.<br />
          Modern data fetching libraries like React Query, axios provide enough mechanisms to manage the external data. We can cache it, invalidate it and fetch it anew. They can be used for sending data as well, triggering a refresh for another piece of data.
        </p>

        <h6>State Management Libraries</h6>
        <p>
          👍 most cases you don’t need a state management library but large applications that require managing complex state should use it. Like: Redux, Recoil, MobX, React context.
        </p>

        <h4>Component Mental Models</h4>
        <h6>Container & Presentational</h6>
        <p>
          The predominant line of thinking is to split components in two groups - presentational and container components. Also known as smart and dumb. <br />
          presentational - Don’t have any functionality and state. They are just called by the parent component with some props.<br />
          container - components contain the business logic, do the data fetching and manage the state.
        </p>

        <h4>Application Structure</h4>
        <h6>Group by Route/Module</h6>
        <p>It belongs to proper component folder structure</p>
        <p>
          👎 Don't group by technical details<br />
          👍 Group by module/domain. like: common {`>`} Input, Radio | dashboard {`>`} Table, sidebar
        </p>
        <h6>Create a Common Module</h6>
        <p>
          👍 Components like buttons, inputs and cards are used all over the place. Even if you’re not going with a module based structure it’s good to extract those. It helps to avoid duplication. You don’t want everyone on the team to make their own version of a button.
        </p>
        <h6>Use Absolute Paths</h6>
        <p>
          👎 Don't use relative paths. like: ../../../modules/common/components/Input<br />
          👍 Absolute ones don't change. like: @modules/common/components/Input<br />
          I use the @ prefix to signal that it’s an internal module but I’ve seen it done with ~ as well.
        </p>
        <h6>Wrap External Components</h6>
        <p>
          👎 Don't import directly. like: imp Button from 'module' | imp DatePicker from 'module' <br />
          👍 Export the component and use it referencing your internal module. We can change the library in a single place. like: imp  Button, DatePicker from '@modules/common/components'
        </p>
        <h6>Move Components in Folders </h6>
        <p>
          👎 Don't keep all component files together. like: all component in on folder<br />
          👍 Move them in their own folder. like: footer in footer folder
        </p>

        <h4>Performance</h4>
        <h6>Don't Optimize Prematurely</h6>
        <p>
          👍 When you notice a performance problem in your application - measure and identify the cause of your problem. No point in trying to reduce rerender count if your bundle size is enormous.<br />
          Once you know where the performance problems are coming from, fix them in the order of their impact.
        </p>
        <h6>Watch The Bundle Size</h6>
        <p>
          The amount of JavaScript that has to be sent to the browser is the most important factor of your application’s performance.<br />
          👍 Make sure you’re sending the least amount of JS possible.
        </p>
        <h6>Rerenders - Callbacks, Arrays and Objects</h6>
        <p>It’s good to try and reduce the amount of unnecessary rerenders that your app makes. Keep this in mind but also note that unnecessary rerenders will rarely have the greatest impact on your app. <br />
          👎 Avoid passing callback functions as props <br />
          👍 Using one means that a new function will be created each time, triggering a rerender.<br />
          👎 Passing down arrays or objects <br />
        </p>
        {/* 
        <h4>Styling</h4>
        <h6>Use CSS-in-JS </h6>
        <p>
          👎 <br />
          👍
        </p>



        <h6></h6>
        <p>
          👎 <br />
          👍
        </p> */}
      </div>
    </div>
  )
}
