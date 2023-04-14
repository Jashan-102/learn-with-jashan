import CopyContainer from "../../Other/CopyContainer";
import Note from "../../Other/Note";
import CodeImg from "../../../assets/imgs/learning/js/code.png";
import PushArrayImg from "../../../assets/imgs/learning/js/code1.png";

function AboutArrays(props) {
  return (
    <section id="js-arrays">
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
        <li>To check typeof an Array:<CopyContainer copyText="Array.isArray(arrayName)" imgSrc={CodeImg} /></li>
      </ol>
      <h6 className="h6">Array Methods:</h6>
      <ul className="list-decimal list-inside">
        <li>
          push <CopyContainer copyText='arr.push("new array")' imgSrc={PushArrayImg} /> Add new array at the end.
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
        <h6 className="h6 my-4">Loops in Array:</h6>
        <h6 className="h6">1. "for of" Loop:</h6>
        <p>
          This loop lead reduce repeated.This loop will run as much values are present in var.<br />
          This loop took single single value of array "arr" and place one by one
          in variable "myLoopArray".
        </p>
        <CopyContainer copyText='for (const myLoopArray of arr) { console.log(myLoopArray)}' />
        <h6 className="h6">2. "for in" Loop:</h6>
        <p>
          This loop basically give us index of arr. It store index only not value.<br />
          This loop took single single index of array "arr" and place one by one
          in variable "myLoopArray".
        </p>
        <CopyContainer copyText='for (const myLoopArray in arr) {console.log(myLoopArray)}' />
      </div>
      <h6 className="h6">Array Destructing: </h6>
      <p>
        Array Destructing concept is introduced in ES6.
        <br />
        Array Destructing means store single-2 array value in d/f variables
        <br />
        <CopyContainer copyText='let [arrvalue1, , arrvalue2, ...restArrValues] = arr;' />
      </p>
    </section>
  );
}
export default AboutArrays;
