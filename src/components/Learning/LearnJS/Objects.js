import CopyContainer from "../../Other/CopyContainer";

function ObjectsJS() {

  return (
    <section id="js-objects">
      <h3 className="h3">Objects in JS:</h3>
      <ul className="list-decimal list-inside">
        <li>Objects are of Reference Type</li>
        <li>Arrays are good but not sufficient for real world data</li>
        <li>Objects store data in Key: "value" pairs</li>
        <li>Objects don't have index</li>
        <li>Object's Key also known as property</li>
        <li>
          Objects Creating also know as Object Literals i.e by using-
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

      <h6 className="h6">D/F b/w dot(.) and bracket([ ]) Notation:</h6>
      <ol className="list-decimal list-inside">
        <li>
          You can't access split word by using dot Notation.
          <br />
          Not work in this case
          <CopyContainer copyText="(objectName.split word)" />
          <br />
          Work in this case
          <CopyContainer copyText="(objectName[split word])" />
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
      <h6 className="h6">How to iterate object:</h6>
      <p>Mainly two ways we use to iterate Objects:</p>
      <h6 className="h6">for in loop</h6>
      <CopyContainer copyText={` for (let keys in person) {"{console.log(keys, ':', person[keys]);}"}`} />
      <p>person[keys] will compute value of Object person's Key </p>
      <h6 className="h6">Object.Keys</h6>
      <CopyContainer copyText={`for (let keyss of Object.keys(person)){"{console.log(keyss, ':', person[keyss]);}"}`} />
      <p>person[keys] will compute value of Object person's Key</p>
      <h6 className="h6">Computed property in objects:</h6>
      <p>
        [ ]- This is know for computed property
      </p>
      <CopyContainer copyText={`const key1 = "obbj1"; const obj = {[key1] : 'value1'}`} />
      <span>OR</span>
      <CopyContainer copyText={` const key1 = "obbj1"; const obj = {"{}"} obj[key1] : 'value1'`} />
      <h6 className="h6">Spread operator in Object</h6>
      <br />
      <br />
      <br />
      <p>
        <strong>( ... )</strong> these three dots are spread operator. These lead to
        spread elements.
        <br />
        Without <code>...</code> dots - result will be, it will return whole
        array
        <br />
        <strong>In object</strong>
        <br />
        Inside object as same name keys are not allowed, if their is, then last
        occurred will considered means its value override.
        <br />
        <code>const newobjs = {"{ ...obj, ...obj2 }"};</code>
        <br />
        Incase if both obj having same key then last occurring override first
        one.
      </p>
      <h6 className="h6">Object Destructing:</h6>
      <p>
        By default variable name should be same as key name:
        <br />
        <code>let {"{ name, age, ...restItems }"} = person;</code>
        <br />
        To use d/f variable name (key: variableName):
        <br />
        <code>
          let {"{ name: personName, age: personAge, ...restItems }"} = person;
        </code>
        <br />
        RestItems: It will store rest items by using spread operator, which we
        don't wanna to Destruct as variable.
      </p>
      <h3>Object inside array:</h3>
      <p>
        These are very useful in real-world as we use objects inside arrays.
        <br />
        <code>
          const users = [<br />
          {'  { userId: "1", userName: "Jashan", gender: "Female" },'}
          <br />
          {'  { userId: "2", userName: "Maninder", gender: "Male" },'}
          <br />
          ];
          <br /> const [user1, user2, user3, user4] = users;
          <br />
          console.log(user2.userName);
        </code>
        <br />
        Nested Destructuring: Take out an particular value of any user
        <br />
        extracting 2 props from an object
        <br />
        <code>
          const [<br />
          {"{ userName: user1Name , userId }"},<br />
          {"{ userName: user2Name }"},<br />
          {" { gender: user3Gender }"},<br />
          ] = users;
          <br />
          console.log(user1Name, ",", userId);
          <br />
          console.log(user2Name);
          <br />
          console.log(user3Gender);
          <br />
        </code>
      </p>
    </section>
  );
}

export default ObjectsJS;
