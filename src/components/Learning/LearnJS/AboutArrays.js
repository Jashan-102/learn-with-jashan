function AboutArrays() {
  return (
    <section>
      <h3>Arrays in JS</h3>
      <p>
        Arrays are ordered collection of items.
        <br />
        Array is a Reference Data Type. It is preferable to use "const" while
        defining Reference Type.
      </p>
      <ol className="">
        <li>Arrays are Reference Data Type</li>
        <li>Ordered Collection of items</li>
        <li>Arrays defined inside square brackets{"[]"}</li>
        <li>You can store any data type in Array: null, string, undefined</li>
        <li>Arrays are mutable, means you can change an Array value</li>
        <li>
          Proper way to ensure typeof an Array:{" "}
          <code>Array.isArray(arrname)</code>
        </li>
      </ol>
      <h3>Array Methods:</h3>
      <ul>
        <li>
          push <code>arr.push("new array"): </code> Add new array at the end.
        </li>
        <li>
          pop <code>arr.pop("new array"): </code> Add new array at the end.Also
          You can sore poped value into a variable.
        </li>
        <li>
          unshift: <code>arr.unshift("new item"): </code>Add value in the
          starting of array
        </li>
        <li>
          shift: <code>arr.shift(): </code>Remove value from starting of array.
          As
          <code>pop</code> it also return deleted value.
        </li>
        <p>
          <strong>Note: </strong>
          <code>push and pop</code> are fast as compare to{" "}
          <code>shift and unshift</code>. Because{" "}
          <code>shift and unshift </code>firstly shift the element from the
          starting then add themselves in the beginning.
        </p>
      </ul>

      <div>
        <h3>How to clone OR copy an array:</h3>
        <span>You can clone an array with 2-3 ways</span>
        <ol>
          <li>
            Slice method: <code>const cloneingArray = arr.slice(0)</code>
          </li>
          <li>
            concat method: <code>const cloneingArray = [].concat(arr)</code>{" "}
          </li>
          <li>
            spread operator: <code> const cloneingArray = [...arr]</code>
          </li>
        </ol>
        <div></div>
      </div>

      <div>
        <h3>Loops in Array:</h3>
        <ol>
          <li>for</li>
          <li>while</li>
          <li>do while</li>
          <li>for of</li>
          <li>for in</li>
        </ol>
        <p>
          <strong>-"for of" Loop: </strong>This loop lead reduce repeated.This
          loop will run as much values are present in var.
          <code>
            <br /> for (const myLoopArray of arr)
            <br />
            {"console.log(myLoopArray)"}
          </code>
          <br />
          This loop took single single value of array "arr" and place one by one
          in variable "myLoopArray".
          <br />
          O/P
        </p>
        <p>
          <strong>-"for in" Loop: </strong>This loop basically give us index of
          arr. It store index only not value.
          <code>
            <br /> for (const myLoopArray in arr)
            <br />
            {"console.log(myLoopArray)"}
          </code>
          <br />
          This loop took single single index of array "arr" and place one by one
          in variable "myLoopArray".
          <br />
          O/P
        </p>
      </div>
      <h3>Array Destructing: </h3>
      <p>
        Introduced in ES6
        <br />
        Array Destructing means store single-2 array value in d/f variables
        <br />
        <code>let [arrvalue1, , arrvalue2, ...restArrValues] = arr;</code>
      </p>
    </section>
  );
}
export default AboutArrays;
