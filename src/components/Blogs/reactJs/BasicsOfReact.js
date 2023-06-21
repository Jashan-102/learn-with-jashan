import React from 'react'

export default function BasicsOfReact() {
  return (
    <div className='container'>
      BasicsOfReact
      <div>
        <h6>React JS</h6>
        <p>
          ReactJS is JS library used for build UI.<br />
          It was developed and maintained by Facebook.<br />
          ReactJS supports Single Page Application(SPA). That means no page reload and fast speed.<br />
          React.js uses a virtual DOM (Document Object Model). The virtual DOM is a lightweight representation of the actual browser DOM. Whenever a components state and props changes. React calculates the difference between previous virtual DOM and new one and then updates only necessary part of actual browser DOM.<br />
          This minimized the number of manipulations and improve app performance.
        </p>
      </div>
      <div>
        <h6>History of React JS</h6>
        <p>
          React.js was created by Jordan Walke, a software engineer at Facebook. The development of React began in 2011 as an internal project at Facebook, and it was first deployed on Facebook's newsfeed in 2012.<br />
          In 29 May 2013, Facebook announced React.js to the public, open-sourcing it and making it available for developers outside of Facebook. <br />
          2013: React.js was initially released with a focus on the concept of reusable UI components and a virtual DOM implementation. <br />
          2015:React Native, a framework for building native mobile applications using React, was introduced by Facebook. It allowed developers to use React.js concepts and components to create cross-platform mobile apps. <br />
          2016: React Fiber, a new reconciliation algorithm and rendering engine, was introduced. Fiber was designed to improve performance and enable asynchronous rendering, making React more efficient and capable of handling complex UI interactions.<br />
          2018: React Hooks for functional components were introduced with the release of React 16.8. <br />
          2020:  React 17 was released, focusing on improvements in the React ecosystem's compatibility and providing a smoother upgrade path for existing applications. It introduced features like the new JSX transform and React.StrictMode enhancements.<br />
          2022: React 18 was released with new Concurrent Features, Transitions and Suspense on the server.
        </p>
      </div>
      <div>
        <h6>Features of React JS</h6>
        <p>
          Component-based Architecture: Which allows developers to break complex UI code and functionality into small and reusable components.<br />
          Virtual DOM:<br />

          JSX:<br />

          Lifecycle Methods: React components have a set of lifecycle methods that are called at specific points during the component's life cycle, such as mounting, updating, and unmounting. These methods allow developers to perform actions and handle events at appropriate times, such as initializing data, making API calls, or cleaning up resources. <br />

          React Hooks: React Hooks are a feature introduced in React v16.8 which made react functional components powerful. It allow functional components to have state and lifecycle methods which were previously owned by class component only.<br />
          Unidirectional Data Flow or one-way data binding: data flows in a single direction, from parent components to child components. This simplifies the understanding and debugging of data flow within the application.
        </p>
      </div>
      <h6>JSX</h6>
      <p>
        JSX stands for JavaScript XML. JSX is a syntax extension used in React.js which allow us to write HTML and JS code together. JSX helps to improves code readability and maintainability. JSX allows you to embed JavaScript expressions within curly braces { }. within this expression you can add dynamic content and perform computations and access variables. JSX also supports HTML attributes. But in HTML we define attributes in lowercase and in JSX we define in CamelCase. Browser doesn't understands JSX so, under the hood react convert JSX into plain JS functions by using transpiler babel.
      </p>
      <h6>Components in ReactJS</h6>
      controlled-uncontrolled components
      components re-rendering
      <h6>State and props in ReactJS</h6>
      accessing previous state/props
      <h6>package.json</h6>
      <h6>Events in ReactJS</h6>
      <h6>Styles in ReactJS</h6>
      <h6>Lists and Keys in ReactJS</h6>
      <h6>React Fragments</h6>
      <h6>Lifecycle Methods in ReactJS</h6>
      <h6>React Hooks</h6>
      <h6>Context API</h6>
      <h6>Error handling</h6>
      <h6>Forms</h6>
      <h6>Routing</h6>
      <h6>State Management</h6>
      <h6>Server-side Rendering (SSR)</h6>
      <p>
        React can be used to render components on the server and send the pre-rendered HTML to the client for faster initial page loads and improved SEO.
      </p>
      <h6>Testing</h6>
      <p>
        React components can be tested using various testing libraries and frameworks like Jest and React Testing Library.
      </p>
      <h6>Performance Optimization:</h6>
      <p>
        Techniques such as memoization, code splitting, lazy loading, and virtualization can be employed to optimize React applications for better performance.
      </p>
    </div>
  )
}
