import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function StringInJS() {
  return (
    <div>
      <h1>String In JS</h1>
      <p>
        <strong>String Methods:</strong>
        The String object is used to represent and manipulate a sequence of characters.<br />
        Special characters can be encoded using escape sequences:
        <CodeContainer>
          {`let firstName = "Jashandeep Kaur";
let age = 21;
// String Indexing:
// J a s h a n d e e p      K  a  u   r
// 0 1 2 3 4 5 6 7 8 9  10  11 12 13 14`}
        </CodeContainer>
        <strong>Length</strong>
        <CodeContainer>
          {`console.log('Length of my name is:  ${'firstName.length'}');`}
        </CodeContainer>

        <strong>CharAt and at method</strong><br />
        <CodeContainer>
          {`function findLast(arr) {
  return arr.at(-1); // Will nor work for chatAt method
}

let findLastWord = "Lastword0s";
console.log(findLast("findLastWord"));
console.log(findLastWord.charAt(6)); //Will not work for -1
console.log(typeof findLastWord);
console.log(findLastWord.at(4)); // Will work work for both -1 and 3`}
        </CodeContainer>
        <strong>charCodeAt</strong><br />
        <CodeContainer>
          console.log(firstName.at(2));
          console.log(firstName.charCodeAt(2));
          console.log(firstName.codePointAt(2));
        </CodeContainer>

        <strong>concat()</strong><br />
        <CodeContainer>
          {`let str1 = "jashandeep";
          let str2 = "kaur";
          console.log('I am concat method: ${'str1.concat(" " + str2)'}`}
        </CodeContainer>
        <strong>endsWith()</strong><br />
        <CodeContainer>
          {`const sentence = "sky awaits your presence, rise up.";
          console.log(sentence);
          console.log('I am endWith method: ${'sentence.endsWith("up.")'});`}
        </CodeContainer>
        <strong>startsWith()</strong>
        <CodeContainer>
          console.log(sentence.startsWith("sky", 0));
        </CodeContainer>


        <strong>include()</strong>
        <CodeContainer>
          {`const sentence2 = "The doors of Waheguru Ji will never close for you";
const word = "Waheguru Ji";
console.log(sentence2);
console.log('The word ${'word'} ${'sentence2.includes(word)' ? "is " : "is not "}present in sentence');`}
        </CodeContainer>


        <strong>indexOf()</strong><br />
        <CodeContainer>
          {`const sentence3 = "This is my year of growth only my year";
const word1 = "my";
console.log(sentence3.length);
console.log(
  'Tell first occurring index of ${'word1'}: ${'sentence3.indexOf(word1, 6)'}'
); // 6 = from where to start search`}
        </CodeContainer>

        <strong>lastindexOf()</strong>
        <CodeContainer>
          {`
console.log(
  'Tell last occurring index of ${'word1'}: ${'sentence3.lastIndexOf("my", 30)'}'
); // 30 = search till this index`}
        </CodeContainer>


        <strong>padEnds()</strong>
        <CodeContainer>
          {`const word3 = "Read More ";
console.log(word3.padEnd(12, "."));`}
        </CodeContainer>

        <strong>padStart()</strong>
        <CodeContainer>
          {`const phone = "6353535353";
console.log(phone.length);
console.log(phone.padStart(13, "*"));`}
        </CodeContainer>

        <strong>repeat()</strong>
        <CodeContainer>
          {`const sentence4 = "'I am happy' ";
console.log('Display sentence "${'sentence4'}" 7 times: ${'sentence4.repeat(6)'})`}
        </CodeContainer>

        <strong>replace() and replaceAll()</strong>
        <CodeContainer>
          {`console.log(sentence3.replace("my", "our"));
console.log(sentence3.replaceAll("my", "our"));`}
        </CodeContainer>

        <strong>search() its support regular Expression search</strong>
        <CodeContainer>
          {`console.log(sentence3);
var regExp1 = sentence3.search(/[u-z]/);
console.log(regExp1);`}
        </CodeContainer>

        <strong>slice() returns a part of string</strong>
        <CodeContainer>
          {`console.log(sentence3);
console.log(sentence3.slice(1, 10));`}
        </CodeContainer>

        <strong>spilt() split strig into array</strong>
        <CodeContainer>
          const sentence5 = "Yellow Yellow Dirty Fellow ;)";
          console.log(sentence5);
          console.log(sentence5.split(""));
          console.log(sentence5.split(" "));
        </CodeContainer>

        <strong>substring()</strong>
        <CodeContainer>
          console.log(sentence3);
          console.log(sentence3.substring(10, 17));
        </CodeContainer>

        <strong>toLowerCase() and toUpperCase()</strong>
        <CodeContainer>
          console.log(sentence5.toUpperCase());
          console.log(sentence5.toLowerCase());
        </CodeContainer>

        <strong> toString()</strong>
        <CodeContainer>
          let word4 = 56;
          console.log(typeof word4);
          console.log(word4.toString());
          console.log(typeof word4.toString());
        </CodeContainer>
        <strong>trim()</strong>
        <CodeContainer>
          const sentence6 = "     Hii I am Jashan         ";
          console.log(sentence6.trim());
        </CodeContainer>
        <strong>valueOf()</strong><br />
        valueOf() method is the default method for JavaScript strings.<br />
        It is used internally by JavaScript.<br />Normally, you will not use it in your code.
      </p>
    </div>
  )
}
