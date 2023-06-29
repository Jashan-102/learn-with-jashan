import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function ArrayInJS() {
  return (
    <div>
      <h2>Array In JS</h2>
      Arrays are ordered collection of items.<br />Array is a Reference Data Type.<br />
      Proper way to ensure typeof an Array:
      <CodeContainer>
        {`var myArr1 = ["Jashan", "deep", "Kaur"];
var word = "Morning";
Array.isArray(myArr1)
console.log(typeof word)`}
      </CodeContainer>

      <p>
        <strong>push: </strong>
        <CodeContainer>
          {`let fruits = ["fru:", "mango", "apple", "grapes"];
        let vegetables = ["veg:", "carrot", "peas", "potatoes", "onions"];
        fruits.push("guava");`}
        </CodeContainer>
        <strong>pop: </strong>
        <CodeContainer>
          {`var popedvegetable = vegetables.pop();
console.log("After a pop:", vegetables);
console.log("Poped value is:", popedvegetable);`}
        </CodeContainer>
        As you can store poped value in an variable<br />
        <strong>unshift:</strong>
        <CodeContainer>
          {`fruits.unshift("pineapple");
console.log("Add value in the starting:", fruits);`}
        </CodeContainer>
        <strong>shift:</strong>
        <CodeContainer>
          {`fruits.shift();
console.log("Remove value from starting", fruits);`}
        </CodeContainer>
      </p>
      <p>
        <strong>clone OR copy an array:</strong>
        you can clone an array with 2-3 ways:<br />
        1. Slice method
        <CodeContainer>
          {`let cloneingArray;
console.log("clone with slice:");
cloneingArray = vegetables.slice(0);
console.log(cloneingArray);`}
        </CodeContainer>
        2. concat
        <CodeContainer>
          {`console.log("clone with concat:");
cloneingArray = [].concat(fruits);
console.log(cloneingArray);`}
        </CodeContainer>
        3. spread operator
        <CodeContainer>
          {`console.log("clone with spread operator:");
cloneingArray = [...vegetables];
console.log(cloneingArray);`}
        </CodeContainer>

      </p>
      <p>
        <strong>Loops with Array: </strong>
        <strong>Simple Loops:</strong>
        <CodeContainer>
          {`for (let a = 0; a < vegetables.length; a++) {
  const element = vegetables[a];
  console.log(element);
}

for (let a = 1; a <= 6; a++) {
  console.log("count with me:", a);
}

a = 1;
while (a <= 6) {
  console.log(a);
  a++;
}

a = 1;
do {
  console.log(a);
  a++;
} while (a <= 0);
`}
        </CodeContainer>
        <strong>for of loop:</strong>
        <CodeContainer>
          {`for (const myLoopArray of vegetables) {
  console.log(myLoopArray);
}`}
        </CodeContainer>
        <strong>for in loop:</strong>
        <CodeContainer>
          {`for (const myLoopArray in vegetables) {
  console.log(myLoopArray);
}`}
        </CodeContainer>
      </p>
      <p>
        <strong>Array Destructing:</strong>

        <CodeContainer>
          {`console.log(fruits);
let [fruit1, , fruit3, ...restItems] = fruits;
console.log("reset items are:", restItems);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Some Array Important Methods: </strong>
        <strong> forEach():</strong><br />It lead to for each element perform a function.<br />Its take a callback function as Input.<br />It will call its callback function again and again till traverse all elements defined.<br />It will took first element process it as define in its callback function then took 2nd element. so on so fourth.
        <CodeContainer>
          {`let myarr = [9, 8, 7, 6];
// Way-1 to use forEach
function forEach1(number, index) {
  console.log(index, number);
}
myarr.forEach(forEach1);
// Way-2 to use forEach
myarr.forEach((number, index) => {
  console.log(index, number);
});
// forEach with objects
const users = [
  { userId: "1", userName: "Jashan", gender: "Female" },
  { userId: "2", userName: "Maninder", gender: "Male" },
  { userId: "3", userName: "Arsh", gender: "Female" },
  { userId: "4", userName: "John", gender: "Male" },
];
users.forEach((users) => {
  console.log(users.userId, users.userName, users.gender);
});`}
        </CodeContainer>
      </p>
      <p>
        <strong>map Array Method: </strong><br />It take a callback function as Input.<br />Map function always lead to create a new array as Output.<br />You can also store that O/P in an variable.<br />It is required to use return as O/P, else O/P will be undefined.
        <CodeContainer>
          {`// square
const square = myarr.map((num) => {
  // need return in this case
  num * num;
});
console.log(square);
// no need in this case
myarr.map((num) => {
  console.log(num * num);
});

const printValue = users.map((user) => {
  // need return in this case
  user.userId;
});
console.log(printValue);
users.map((user) => {
  // no need in this case
  console.log(user.userId);
});`}
        </CodeContainer>
        <strong>filter: </strong><br />It takes callback function as I/P.<br />filter callback function always return a boolean value.<br />It always create a new array as O/P.
        <CodeContainer>
          {`let myarr2 = [1, 2, 3, 42, 2, 6, 7, 8, 9, 4, 6, 4];
const evenValues = myarr2.filter((val) => {
  return val % 2 === 0;
  // for odd
  // return val % 2!== 0;
});
console.log(evenValues);`}
        </CodeContainer>
      </p>
      <p>
        <strong>reduce: </strong> Reduce take callback function as I/P and By reducing it will give one value as O/P.
        <CodeContainer>
          {`const myans = myarr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(myans);`}
        </CodeContainer>
        How reduce method Work:<br />
        Step-1: At initial step accumulator's and currentValue's value will be 1st and 2nd value as define in array respectively<br />As per myarr2{`->`}<br /> accumulator=1<br /> currentValue=2<br />
        Step-2:We have wrote a function that will add them i.e, 1+2 and return 3.<br />
        Step-3:Now the accumulator value will be the returned value and currentValue will move to the next value of the array.<br />Now:<br /> accumulator=3<br /> currentValue=3<br />
        Step-4:Again value add as defined in function and return value move to the accumulator and currentValue took the next value.<br />
        Step-5:This process will keep going till reach to the last item.And in return it will provide one value as O/P only.<br />Use reduce: Add to cart item (addition).<br />In reduce you can assign an initial value to the accumulator.
        <CodeContainer>
          {`const usersCart = [
  { userId: "1", userName: "Jashan", gender: "Female", userCart: 62000 },
  { userId: "2", userName: "Maninder", gender: "Male", userCart: 22000 },
  { userId: "3", userName: "Arsh", gender: "Female", userCart: 3000 },
  { userId: "4", userName: "John", gender: "Male", userCart: 16000 },
];

const Amount = usersCart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.userCart;
}, 0);
console.log(Amount);`}
        </CodeContainer>
      </p>
      <p>
        <strong>sort: </strong><br />
        Sort method change original array.<br />JS firstly convert your given array into string, then just look on only first digit of all the elements and assign ASCII value to all of them and then sort it according to its ASCII value.<br />
        eg:- If their is 710 {`->`} It will only consider '7' ASCII value not of other values i.e, '1','0'<br />Cons: It not sort number/Sort as ASCII value<br />In case of alphabetic string. It will work fine. As we find in dictionary.['ABC','abc']<br />Capital will come first after sort bcz Capital word ASCII code is lower than lowerCase word.
        <CodeContainer>
          {`const num2 = [2, 4, 5, 6, 7, 7, 0, 6, 3, 3, 2, 22, 21, 134, 4, 643, 278];
console.log(num2.sort());`}
        </CodeContainer>
      </p>
      <p>
        <strong>Number Sort: </strong><br />In sort method optionally you can take a callback.<br />Real eg: LowToHight / HighToLow.
        <CodeContainer>
          {`// Ascending order
const abnum = num2.sort((a, b) => {
  return a - b;
});
console.log(abnum);
// Descending order
const abnum2 = num2.sort((a, b) => {
  return b - a;
});
console.log(abnum2);

const LowToHight = usersCart.slice(0).sort((a, b) => {
  return a.userCart - b.userCart;
});
console.log(LowToHight);`}
        </CodeContainer>
        By default sort change our original array. If dont't want to do so, You can clone your array an work on it.
      </p>
      <p>
        <strong>find: </strong><br />
        It takes callback function as I/P<br />It looks for first occurrence only<br />This method is useful in the case of finding unique ID.
        <CodeContainer>
          {`const animal = ["dog", "cat", "Horse", "lion"];

const ThreeDigitAnimal = animal.find((string) => {
  return string.length === 3;
});
console.log(ThreeDigitAnimal);
const findById = usersCart.find((usersCart) => {
  return usersCart.userId == 3;
});
console.log(findById);`}
        </CodeContainer>
        <strong>every: </strong><br />
        It take Callback function as I/P.<br />every method return True/False.<br />It will return True only if its callback returns true. means, If callback condition fullfil<br />[2,4,6,8,10]{` -> `}true<br />[2,4,6,9,10]{` -> `}false. Because of 9 it fail.
        <CodeContainer>
          {`const num3 = [2, 4, 8, 8, 10];
// const num3 = [2, 4, 9, 8, 10];
console.log(
  num3.every((num3) => {
    return num3 % 2 === 0;
  })
);

console.log(usersCart);
console.log(
  usersCart.every((usersCart2) => {
    return usersCart2.userCart < 2000000;
  })
);`}
        </CodeContainer>
        <strong>some:</strong>
        <br />some take an callback as I/P.<br />return true if any of item in array fullfil the condition
        <CodeContainer>
          {`console.log(
  num3.some((num3) => {
    return num3 === 12;
  })
);

console.log(
  usersCart.some((usersCart) => {
    return usersCart.userCart < 200000;
  })
);`}
        </CodeContainer>
        <strong>fill:</strong>
        <br />Wanna a Array say need to have 10 elements of same value.<br />It will change your original array.<br />fill method: took three values.<br />1. value {`->`} value want to add<br />2. start{` ->`} from which index to start<br />3. end {`->`} till which index need to change.
        <CodeContainer>
          {`const myarr3 = [2, 3, 4, 5, 6, 7, 8, 9];
myarr3.fill(1, 3, 9);
console.log(myarr3);`}
        </CodeContainer>
        <strong>splice: </strong>
        <br />It will change your original array<br />If you want to delete and insert values inside an array us splice method<br />splice method: took three values.<br />1. start {`->`} where to start do delete and insertion<br />2. delete {`->`} No. of items to delete<br />3. insert {`->`} new item to add<br />You can also store an deleted item into an variable. i.e, splice will return you deleted item.
        <CodeContainer>
          {`const animal2 = ["dog", "cat", "camel", "horse", "lion"];
console.log(animal2);
// To delete only
const deleteditem = animal2.splice(1, 3);
console.log("items deleted:", deleteditem);
animal2.splice(1, 0, "newanimal");
console.log(animal2);`}
        </CodeContainer>
        <strong>Flatting Array: </strong>
        <CodeContainer>
          {`const mixedArray = [
  [1, 2, 3],
  [4, 32, 13],
  [55, 292, 88],
  [67, 89, 89],
];
const mixsingleArr = mixedArray.flat();
console.log(mixsingleArr);

// Array Destructuring
const array1 = [1, 2, 3];
const array2 = [4, 32, 13];
const array3 = [55, 292, 88];
const array4 = [67, 89, 89];
const mynewarr = [...array1, ...array2, ...array3, ...array4];
console.log(mynewarr);`}
        </CodeContainer>
        <strong>Maths.random() </strong><br />
        It will give us random number in between 0-9, but will not give 1.
        <CodeContainer>
          {`console.log(Math.random());
          console.log(Math.random());`}
        </CodeContainer>
        <strong>To get 1: </strong>
        <CodeContainer>
          {`console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);`}
        </CodeContainer>
        <strong>Only want integer not float: </strong>
        <CodeContainer>
          {`console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));`}
        </CodeContainer>
        <strong>Required in between of specified numbers</strong>
        <CodeContainer>
          {`console.log(Math.floor(Math.random() * 50));
console.log(Math.floor(Math.random() * 3));`}
        </CodeContainer>
      </p>
    </div>
  )
}
