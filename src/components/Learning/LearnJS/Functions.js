function JSFunctions() {
  return (
    <section id="js-functions">
      <h3 className="h3">Function in JS:</h3>
      <ol>
        <li>Functions are to perform some task.</li>
        <li>
          There could be more than 1 function and a function can help OR call
          another function too.
        </li>
      </ol>
      <p>
        <strong>Function Declaration/Definition:</strong>
        <br />
        n1, n2 is Parameter variable
        <br />
        <code>
          function sumOfTwo(n1, n2)
          <br />
          {"{return n1 + n2;}"}
        </code>
        <br />
        Invoke/call/run a function
        <br />
        2,3 is Parameter value OR Arguments
        <br />
        <code>sumOfTwo(2,3)</code>
        <br />
        Parameter are like a variable which are undefined when declare OR define
        a function.
        <br />
        And got values at the time of call/ Invoke/ run a function. This value
        Definition called as Arguments.
        <br />
        <strong>Function Expression: </strong> Assign function to a variable.
        <br />
        <code>
          const sumOfThree = function (n1, n2, n3) <br />{" "}
          {"{return n1 + n2 + n3;}"};
        </code>
      </p>
      <p>Note: Addition of undefine leads to NAN.</p>
      <h3>Arrow Functions:</h3>
      <p>
        Functions without name/ simple/short way of using function is Arrow
        function.
        <br />
        <code>
          const doubleNumber = (n1) {"=>"} <br /> {"{return n1 * 2;}"};
        </code>
        <br />
        If their is only one Parameters:
        <br />
        <code>
          const doubleNumber = n1 {"=>"} <br /> {"{return n1 * 2;}"};
        </code>
        <br />
        If their is single line of execution:
        <br />
        <code>
          const doubleNumber = n1 {"=>"} <br />
          return n1 * 2;
        </code>
      </p>
      <h3>Hoisting in JS:</h3>
      <p>
        <strong>In case of:</strong>
      </p>
      <ul>
        <li>function declaration</li>
        <li>var</li>
      </ul>
      <p>
        Only you can access a function even before declare it. <br />
        In rest of the cases you will got error
      </p>
      <h3>Function inside Function</h3>
      <p>
        You can use a function inside a function
        <br />
        <code>
          function MathOpertions() {"{"}
          const addTwo = (n1, n2) {"=>"} n1 + n2;
          <br />
          const SubTwo = (n1, n2) {"=>"} n1 - n2;
          <br />
          const MultiplyTwo = (n1, n2) {"=>"} n1 * n2;
          <br />
          console.log(addTwo(2, 4));
          <br />
          console.log(SubTwo(2, 4));
          <br />
          console.log(MultiplyTwo(2, 4));
          <br />
          {"}"}
          <br />
          MathOpertions();
        </code>
      </p>
      <h3>Lexical Scope:</h3>
      <p>
        When a variable didn't find inside function then it will check in its
        Lexical Scope. i.e, Parent Scope
        <br />
        <code>
          function LexicalScopp() {"{"}
          <br />
          const myVar = "Hi";
          <br />
          function childfunc() {"{"}
          <br />
          const myVar2 = "Hi2";
          <br />
          console.log(myVar);
          <br />
          console.log(myVar2);
          <br />
          {" }"}
          <br />
          childfunc();
          <br />
          This will not accessible <br />
          console.log(myVar2);
          {"}"}
          <br />
          LexicalScopp();
        </code>
      </p>
    </section>
  );
}

export default JSFunctions;
