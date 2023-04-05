import CopyContainer from "../../Other/CopyContainer";
import Note from "../../Other/Note";

function AboutArrays() {
  return (
    <section>
      <h3 className="h3">Arrays in JS</h3>
      <p>
        Arrays are ordered collection of items. Array is a Reference Data Type. It is preferable to use "const" while
        defining Reference Type.
      </p>
      <ol className="list-decimal list-inside">
        <li>Arrays are Reference Data Type</li>
        <li>Ordered Collection of items</li>
        <li>Arrays defined inside square brackets: {"[1,2,3]"}</li>
        <li>You can store any data type in Array: null, string, undefined</li>
        <li>Arrays are mutable, means you can change an Array value</li>
        <li>To check typeof an Array:<CopyContainer copyText="Array.isArray(arrayName)" /></li>
      </ol>
      <h6 className="h6">Array Methods:</h6>
      <ul className="list-decimal list-inside">
        <li>
          push <CopyContainer copyText='arr.push("new array")' /> Add new array at the end.
        </li>
        <li>
          pop <CopyContainer copyText='arr.pop("new array")' /> Add new array at the end.Also
          You can sore poped value into a variable.
        </li>
        <li>
          unshift: <CopyContainer copyText='arr.unshift("new item")' />Add value in the
          starting of array
        </li>
        <li>
          shift:  <CopyContainer copyText='arr.shift()' />: Remove value from starting of array.
          Like <strong>pop</strong> it also return deleted value.
        </li>
        <Note
          note="push and pop are fast as compare to shift and unshift. Because shift and unshift firstly shift the element from the starting then add or remove themselves in the beginning."
        />
      </ul>
      <h6 className="h6">How to clone OR copy an array:</h6>
      <span>You can clone an array with 2-3 ways:</span>
      <ol className="list-decimal list-inside">
        <li>
          slice method: <CopyContainer copyText="const cloneingArray = arr.slice(0)" />
        </li>
        <li>concat method: <CopyContainer copyText="const cloneingArray = [].concat(arr)" /></li>
        <li>
          spread operator: <CopyContainer copyText="const cloneingArray = [...arr]" />
        </li>
      </ol>

      <div>
        <h6 className="h6">Loops in Array:</h6>
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
