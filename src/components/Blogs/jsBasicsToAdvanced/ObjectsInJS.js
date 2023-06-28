import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function ObjectsInJS() {
  return (
    <div>
      <h2>Objects In JS</h2>
      <p>
        Objects store data in 'key : value' Pair.<br />
        Objects don't have index. <br />
        Object can also be called as instance.<br />
        Creating objects way also know as Object Literals i.e by using { }-curly braces<br />
        In a object you can't use same name of key again. If you do so that key value will override.<br />
        If you use any value inside {`{curly braces}`} That will act like a child of that object. Like:
        <CodeContainer>
          {`const person = {
  name: "Jashandeep Kaur",
  age: "22",
  // hobbies: ["Singing", "Dancing", "Listening Music"],
  hobbies: { ...hobbies },
  // mynameDestruct: { ..."Jashandeep" }, //This will make array inside object
  mynameDestruct: [..."Jashandeep"], //This will make list of array
  "person languages": ["English", "Punjabi", "Hindi"],
};
console.log(person.hobbies);
const mydest = person.mynameDestruct;
// console.log(typeof mydest);
console.log(Array.isArray(mydest));
console.log(mydest);`}
        </CodeContainer>
      </p>

      <p>
        <strong>Adding new pair of object:</strong>
        <CodeContainer>
          {`person.gender = "female";
console.log(person);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Difference between dot notation and Bracket notation:</strong>
        <CodeContainer>
          {`console.log(person.hobbies[0]);
console.log(person.person languages); // In this dot notation will throw error
console.log(person["person languages"]); // So,we will use Bracket Notation for this type of objects`}
        </CodeContainer>
        <strong>Another use of bracket notation</strong>
        proper way to add a 'key: value' pair
        <CodeContainer>
          {`const key = "email";
          person[key] = "jashandeep@gmail.com";
console.log(key, ":", person[key]);
console.log(person);
console.log("Iterate an Object's Values:");`}
        </CodeContainer>
      </p>
      <p>
        <strong>Mainly Two ways:</strong><br />
        1. for in loop OR for of loop
        <CodeContainer>
          {`for (let keys in person) {
  console.log(keys, ":", person[keys]);
}`}
        </CodeContainer>
        2. object.keys: Object.keys returns an array:
        <CodeContainer>
          {`console.log("");
for (let keyss of Object.keys(person)) {
  console.log(keyss, ":", person[keyss]);
}`}
        </CodeContainer>
      </p>
      <p>
        Computed properties in objects:<br />'[property]' - This is computed property.<br />
        <CodeContainer>
          {`const key1 = "obbj1";
const key2 = "obbj2";
const value1 = "myvalue1";
const value2 = "myvalue2";`}
        </CodeContainer>
        Compute const value in one object:
        <CodeContainer>
          {`// Way-1
const obj = {
  [key1]: "value1",
  [key2]: value2,
  key7: "valueee",
};
console.log(obj);
// Way-2
const obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;
obj2.key3 = "myval";
console.log(obj2);`}
        </CodeContainer>
      </p>
      <p>
        Spread operators:<br />This is '...name' speared operator. This lead to spread elements.
        <CodeContainer>
          {`const newobjs = { ...obj, ...obj2 };
console.log(newobjs);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Object Destructuring:</strong>
        <CodeContainer>
          {`let { name, age } = person;
console.log(name);
console.log(age);`}
        </CodeContainer>
        Rename Keys while Object Destructuring<br />
        <CodeContainer>
          {`let { name: personName, age: personAge, ...restItems } = person;
console.log(personName);
console.log(personAge);
console.log(restItems);`}
        </CodeContainer>
        <strong>restItems: </strong>It will return rest element which we didn't destruct.
      </p>
      <p>
        <strong>Objects Inside an array:</strong>
        <CodeContainer>
          {`const users = [
  { userId: "1", userName: "Jashan", gender: "Female" },
  { userId: "2", userName: "Maninder", gender: "Male" },
  { userId: "3", userName: "Arsh", gender: "Female" },
  { userId: "4", userName: "John", gender: "Male" },
];

const [user1, user2, user3, user4] = users;
console.log(user2.userName);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Nested Destructuring: </strong>Take out an particular value of any user
        <CodeContainer>
          {`const [
  // extracting 2 props from an object
  { userName: user1Name, userId },
  { userName: user2Name },
  ,
  { gender: user3Gender },
] = users;
console.log(user1Name, ",", userId);
console.log(user2Name);
console.log(user3Gender);`}
        </CodeContainer>
      </p>
    </div>
  )
}