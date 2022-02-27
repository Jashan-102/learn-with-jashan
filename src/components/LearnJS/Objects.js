function ObjectsJS() {
  return (
    <>
      <h3>Objects in JS:</h3>
      <ul>
        <li>Objects are of Reference Type</li>
        <li>Arrays are good but not sufficient for real world data</li>
        <li>Objects store data in Key: "value" pairs</li>
        <li>Objects don't have index</li>
        <li>Object's Key also known as property</li>
        <li>
          Objects Creating also know as Object Literals i.e by using {"{}"}-
          currly braces
        </li>
        <li>
          In a object you can't use same name of key again. If you do so that
          key value will override.(last occurring key will override firstly
          occurred.)
        </li>
        <li>
          You can access an object value by <code>objectName.key</code>
        </li>
        <li>You can also add array in object</li>
        <li>
          Add new Key: "value". <code>objectName.newKey = "newKeyValue"</code>
        </li>
      </ul>

      <h3>D/F b/w dot(.) and bracket([]) Notation:</h3>
      <ol>
        <li>
          You can't access split word by using dot Notation.
          <br />
          <code>(objectName.split word) </code>Not work in this case
          <br />
          <code>(objectName[split word]) </code>Work in this case
        </li>
        <li>
          basically bracket Notation will compute the value of key and return
          email from it
        </li>
        <li>
          You can assign key in a variable and later you will assign value to
          the variable. In that case bracket Notation will work
        </li>
      </ol>
      <h3>How to iterate object:</h3>
      <strong>Mainly two ways we use to iterate Objects:</strong>
      <ol>
        <li>for in loop</li>
        <li>Object.Keys</li>
      </ol>
      <p>
        <strong>for in loop</strong>
        <br />
        <code>
          for (let keys in person)
          <br /> {"{console.log(keys, ':', person[keys]);}"}
        </code>
        <br />
        person[keys] will compute value of Object person's Key
      </p>
      <p>
        <strong>Object.Keys</strong>
        <br />
        <code>
          for (let keyss of Object.keys(person))
          <br /> {"  {console.log(keyss, ':', person[keyss]);}"}
        </code>
        <br />
        person[keys] will compute value of Object person's Key
      </p>
      <h3>Computed property in objects:</h3>
      <p>
        [ ]- is computed property
        <br />
        <code>
          const key1 = "obbj1";
          <br />
          const obj = {"{[key1] : 'value1'}"}
        </code>
        <br />
        OR
        <br />
        <code>
          const key1 = "obbj1";
          <br />
          const obj = {"{}"}
          <br />
          obj[key1] : 'value1'
        </code>
      </p>
      <h3>Spread operator in Object</h3>
      <p>
        <code>...</code> these three dots are spread operator. These lead to
        spread elements.
      </p>
    </>
  );
}

export default ObjectsJS;
