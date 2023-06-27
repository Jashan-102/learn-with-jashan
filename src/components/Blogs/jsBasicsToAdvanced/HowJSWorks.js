import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function JSWorks() {
  return (
    <div>
      <h2>How JS Work and JS code execute?</h2>
      <p>
        Their are 2 phases to execute JS code:<br />
        1. Creation Phase or Compilation Phase <br />
        2. Code execution Phase
      </p>
      <p>
        In first Phase:<br />One by One Memory will be allocate to all the var and functions. Because of this hoisting supports as memory is already allocated and that var and functions are present in memory. In this phase memory is allocated in Global Memory where window object is already present by default, provided by browser.
      </p>
      <p>window and this is same:<br />window:{ }<br />this:{`window`}</p>
      <p>
        In case of function declaration:<br />Whole function is going to place in global memory by Creation Phase.<br />
        In case of function expression:<br />The function is going to treat as variable in global memory. So, it will set as undefined. just like any other variable.
      </p>
      <p>
        <strong>Are let and const Hoisted?</strong><br />
        In case of let and const while Creation Phase, the memory allocation will be:<br />
        uninitialized<br />
        You can only use let and const when they are initialized else Throw Reference error.<br />
        Now, question is are let and const hoisted? Ans is Yes, Memory is allocated to them but you can't use them till you initialized them.
      </p>
      <p>
        <strong>Function Execution Context:</strong><br />
        Whenever the function is called an FEC is created for Function Execution inside Creation Phase.<br />
        This also have Two phases:<br />
        1. Creation Phase [allocate memory in Local Memory Creation]<br />
        2. Code Execution
      </p>
      <p>
        <strong>arguments</strong><br />
        arguments are array like object.<br />
        While FEC firstly an array like object is created to which values are assigned at the time of function invocation. It lead yto store our arguments inside argument Array like object.<br />It exists inside function's local memory.<br />First Parameter Value = First argument Value.
        <CodeContainer>
          {`function getName(a, b) {
            console.log(arguments);
          console.log(a + b);
          }
          getName(2, 4)`}
        </CodeContainer>
      </p>
      <p>
        <strong>Scope Chain and Lexical Environment:</strong><br />
        If a variable is not present in a local memory, then JS will look for it, in its lexical environment or you can say in its parent scope.<br />Whenever a GEC is created, Lexical Environment is also created. Lexical Environment is a local memory along with the lexical environment of its parent.<br />Whenever EC is created their is also an reference to the lexical environment of its parent (inside memory). GEC has not parent, so it is null
      </p>
      <p>
        <strong>Closures in JS:</strong><br />
        Functions can return a function.<br />
        fname and lname are printFullName's local memory variables.<br />
        Whenever a function is returned from a function. It always returned with its local memory variable.<br />Mean printName will return with printFullName's local memory variables.<br />Which means printName has access of fname and lname variables.
        <CodeContainer>
          {`function printFullName(fname, lname) {
  function printName() {
    console.log(fname, lname);
  }
  return printName();
}
printFullName("Jashandeep", "Kaur");`}
        </CodeContainer>
      </p>
      <CodeContainer>
        {`function runOnceOnly() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hii");
      counter++;
    } else {
      console.log("Ik baar hi chaluga mai.");
    }
  };
}
const myFunc = runOnceOnly();

myFunc();
myFunc();
myFunc();
myFunc();`}
      </CodeContainer>

    </div>
  )
}
