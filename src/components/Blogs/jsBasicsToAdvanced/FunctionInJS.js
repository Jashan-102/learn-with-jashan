import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function FunctionInJS() {
  return (
    <div>
      <h2>Functions In JS</h2>
      <p>
        <strong>Function Declaration/Definition: </strong>
        <CodeContainer>
          {`function sumOfTwo(n1, n2) {
  return n1 + n2;
}
const sumOfTwoAns = sumOfTwo(2, 6);
// This will return full function
// console.log(sumOfTwo);
// This will provide O/P
console.log(sumOfTwoAns);`}
        </CodeContainer>
        <strong>Function Expression: </strong>Assign function to a variable.
        <CodeContainer>
          {`const sumOfThree = function (n1, n2, n3) {
  return n1 + n2 + n3;
};
console.log(sumOfThree(2, 2, 2));`}
        </CodeContainer>
        <strong>Arrow Function: </strong> Functions without name. Its a simple and short way of using functions.
        <CodeContainer>
          {`const doubleNumber = (n1) => {
  return n1 * 2;
};
console.log(doubleNumber(11));
// If having only one parameter and only one line of execution then you can do:
const doubleNumber2 = (n1) => n1 * 2;
`}
        </CodeContainer>
      </p>
      <p>
        <strong>Hoisting in JS: </strong>
        <br />In case of:<br />1.function declaration,<br />2.var<br />only you can access a function or value even before declare it.<br />
        Try Hoisting in JS for variables:<br />
        This will work fine as we are using var for name.
        <CodeContainer>
          {`console.log(name);`}
        </CodeContainer>
        In this case it will throw error as we are using const for fullName.
        <CodeContainer>
          {`console.log(fullName);`}
        </CodeContainer>
        <CodeContainer>
          {`var name = "Jashandeep";
const fullname = "Jashandeep Kaur";`}
        </CodeContainer>

        <strong>Try Hoisting in JS for functions: </strong>
        This will work fine as we are using function declaration/definition.
        <CodeContainer>
          {`console.log(myname());`}
        </CodeContainer>
        This will work fine as we are using function expression.
        <CodeContainer>
          {`console.log(fullnameFunc());`}
        </CodeContainer>
        <CodeContainer>
          {`function myname() {
  return "Jashandeep";
}
const fullnameFunc = function fullnameFunc() {
  return "Jashandeep Kaur";
};`}
        </CodeContainer>
      </p>
      <p>
        <strong>Function inside Function:</strong><br />You can use a function inside a function.
        <CodeContainer>
          {`function MathOperations() {
  const addTwo = (n1, n2) => n1 + n2;
  const SubTwo = (n1, n2) => n1 - n2;
  const MultiplyTwo = (n1, n2) => n1 * n2;
  console.log(addTwo(2, 4));
  console.log(SubTwo(2, 4));
  console.log(MultiplyTwo(2, 4));
}
MathOperations();`}
        </CodeContainer>
        <strong>Lexical Scope: </strong><br />When a variable didn't find inside function then it will check in its Lexical Scope. i.e, Parent Scope.
        <CodeContainer>
          {`function LexicalScopp() {
  const myVar = "Hi";
  function childfunc() {
    const myVar2 = "Hi2";
    console.log(myVar);
    console.log(myVar2);
  }
  childfunc();
  // This will not accessible
  // console.log(myVar2);
}
LexicalScopp();`}
        </CodeContainer>
      </p>
      <p>
        <strong>Block Scope and Function Scope: </strong><br />
        1. Let and Const are Block Scope<br />
        2. var is function Scope.
        <strong>Block Scope: </strong><br />{` ->`} This is a Block<br />You can use same variable name in 2 d/f blocks. As out of one block their is d/f block scope.
        <CodeContainer>
          {`  const fname = "const-Jashan";
  console.log(fname);
  let fname = "let-Jashan";
  console.log(fname);`}
        </CodeContainer>
        <strong>Function Scope:</strong>
        <br />Consider a JS as a function(even if nothing is written their). So, 'var' have full access in this function Scope, inside or outside a block.
        <CodeContainer>
          {`var fname = "var-Jashan";
console.log(fname);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Default Parameter: </strong><br />You can pass a Default value to the function parameters.<br />Useful in case when arguments are not passed, and will not return undefined.
        <CodeContainer>
          {`function passvalue(n1, n2, n3, n4 = 0) {
  console.log(n1, n2, n3, n4);
}
passvalue(1, 2);`}
        </CodeContainer>
        <strong>Rest Parameters/Spread: </strong><br />Let the rest of the parameters value  store in single parameter which gonna be add  in the form of array.<br />This lead to be use n numbers of params in functions.
        <CodeContainer>
          {`function restparams(a, b, ...c) {
  let tootal1 = a + b;
  // console.log(tootal1);
  let total = tootal1 + 0;
  for (const restparam of c) {
    total = restparam + total;
  }
  console.log(total);
}
restparams(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);`}
        </CodeContainer>
        <strong>Param Destructuring: </strong><br />We mainly use this with objects.<br />It lead to create variable for that particular block scope.
        <CodeContainer>
          {`const person1 = {
  firstname: "Jashan",
  age: 21,
  gender: "female",
};

function printDetails({ firstname, age, gender }) {
  console.log(firstname);
  console.log(age);
  console.log(gender);
}

printDetails(person1);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Callback Functions: </strong><br />As in a function parameter, you can pass anything. i.e, string, array, object.<br />But you can also pass function as parameter in another function.<br />This is called Callback Function.<br />We mainly use this when we fetch data from DB and want to process in another function.
        <CodeContainer>
          {`function getperson2(firstname) {
  console.log("Inside Callback.");
  console.log("My Name is", firstname);
}

function printUserData(callback) {
  console.log("I am main function having Callback to process.");
  // Call your param function
  callback("Jashandeep Kaur");
}
// Passes callback to the main function
printUserData(getperson2);`}
        </CodeContainer>
      </p>
      <p>
        <strong> Function returning Function: </strong><br />Return a function inside function's return.
        <CodeContainer>
          {`function myFunc() {
  function hello() {
    return "Hii";
  }
  return hello();
}
console.log(myFunc());`}
        </CodeContainer>
        OR in more optimized way:
        <CodeContainer>
          {`function myFunc2() {
  return function () {
    return "Hii2";
  };
}`}
        </CodeContainer>
        Now myFun2 have a returned function:
        <CodeContainer>
          {`console.log(myFunc2());`}
        </CodeContainer>
        It will execute that returned function. So, we getting desired O/P.
        <CodeContainer>
          {`const ans = myFunc2();
console.log(ans());`}
        </CodeContainer>
      </p>
      <p>
        <strong>High Order Functions: </strong><br />HOF are:<br />
        1. Function returning Function<br />
        2. Callback Function<br />
        3. Function do both FRF and Callback
      </p>
    </div>
  )
}