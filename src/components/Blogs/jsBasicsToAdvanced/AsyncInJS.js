import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function AsyncInJS() {
  return (
    <div>
      <h2>Asynchronous JS:</h2>
      <p>
        <strong>Synchronous Programming: </strong>
        JS execute step by step As it is a synchronous programming and single threaded language.<br />
        <strong>setTimeout(): </strong>
        This function is provided by browser not by JS.<br />Whenever JS find this function it will assign it to browser APIs to look for it till the defined time finishes.<br />
        <CodeContainer>
          {`setTimeout(callback function, minimum Time)`}
        </CodeContainer>
        When the time finish the callback function go to the callback Queue and event loop will wait for callStack getting free[After executing entire script].<br />
        Event loop will assign the callback function to callStack for execution.<br />
        setTimeout minimum Time is always in milliseconds.<br />
        Every setTimeout having its unique Id. You can store it into a variable like:
        <CodeContainer>
          {`const setTimeoutID = setTimeout(() => {
  console.log("Hii");
}, 2000);
console.log(setTimeoutID);`}
        </CodeContainer>
        <strong>clearTimeout(id):</strong><br />This method took a setTimeout's id as parameter. This lead to stop or terminate the setTimeout method.<br />
        <strong>setInterval():</strong><br />
        It is also browser's method. It is same a 'setTimeout' method'. But, 'setTimeout' execution once only but setInterval lead to execute the code after the specified minimum Time. <br />
        You can take eg for change a screen bg color.
        <CodeContainer>
          {` setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = 'rgba(${'red'}, ${'green'}, ${'blue'})';
          return   document.body.style.backgroundColor = randomColor;;
}, 2000);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Callbacks:</strong><br />
        Callbacks are mostly used in Async Programming.<br />
        <strong>Async Callback: Callback, Callback hell, pyramid of doom</strong><br /><br />
        <strong>Callback hell:</strong><br /> It is nested callbacks. Solution of this is Promises.<br />
        Suppose we have to change the color of headings after 2-2 seconds. Heres the code by using callbacks:
        <CodeContainer>
          {`const headings = document.querySelectorAll(".myhead");
console.log(headings);
setTimeout(() => {
  console.log(headings);
  headings[0].textContent = "One";
  setTimeout(() => {
    console.log(headings);
    headings[1].textContent = "Two";
    setTimeout(() => {
      console.log(headings);
      headings[2].textContent = "Three";
      setTimeout(() => {
        console.log(headings);
        headings[3].textContent = "Four";
        setTimeout(() => {
          console.log(headings);
          headings[4].textContent = "Five";
          setTimeout(() => {
            console.log(headings);
            headings[5].textContent = "Six";
            setTimeout(() => {
              console.log(headings);
              headings[6].textContent = "Seven";
              setTimeout(() => {
                console.log(headings);
                headings[7].textContent = "Eight";
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);`}
        </CodeContainer>
      </p>
      <p>
        <strong>The pyramid of doom:</strong><br />
        Its solution is also Promises. Lets try to solve the same problem using function.
        <CodeContainer>
          {`function changeText(element, text, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onFailure) {
        onFailure();
      }
    }
  }, time);
}

changeText(headings[0],'One',2000,() => {
  changeText(headings[1],'Two',2000,() => {
    changeText(headings[2],'Three',2000,() => {
      changeText(headings[3],'Four',2000,() => {
        changeText(headings[4],'Five',2000,() => {
          changeText(headings[5],'Six',2000,() => {
            changeText(headings[6],'Seven',2000,() => {
              changeText(headings[7],'Eight',2000,() => {

              },()=>console.log("Failed to change text"))
            },()=>console.log("Failed to change text"))
          },()=>console.log("Failed to change text"))
        },()=>console.log("Failed to change text"))
      },()=>console.log("Failed to change text"))
    },()=>console.log("Failed to change text"))
  },()=>console.log("Failed to change text"))
}, ()=>console.log("Failed to change text"))`}
        </CodeContainer>
      </p>
      <p>
        <strong>Promises:<br /></strong>
        Promise is a object.<br />Promise is browser feature not of JS.<br />Promises lead to value we not have yet, but will get in future.<br />
        Promise = future value<br />
        Promise firstly know as 'future value'. After that it named as Promises.<br />
        <strong>Promises status:</strong><br />1. Pending<br />2. Fulfilled<br />3. Rejected<br /><br />
        <strong>Create Promises OR Produce Promises:</strong><br />
        Promise constructor is used to create a Promise.
        Promise took two parameters:<br />
        1. resolve - Its is a method you can use when a promise is fulfilled.<br />
        2. reject - which are also functions.<br />
        <CodeContainer>
          {`const bucket = ["vegetables", "rice", "salt"];

const friedRice = new Promise((resolve, reject) => {
  if (bucket.includes("no")) {
    resolve("Fried Rice");
  } else {
    reject("No Fried Rice");
  }
});
console.log(friedRice);`}
        </CodeContainer>

        <strong>How to use Promise OR Consume Promise:</strong><br />
        As JS developer You consume Promise more than Produce.<br />How to consume Promise is important than Produce:<br />
        .then is a method.<br />.then took 2 Callbacks.<br />
        1. First one is for resolved O/P.<br />
        2. Second one is for error/rejected O/P [optional]
        <CodeContainer>
          {`friedRice.then(
  (res) => { },
  (err) => { }
);
friedRice.then(
  (res) => {
    console.log("Lets eat", res);
  },
  (err) => {
    const error = new Error(err);
    console.log(error);
  }
);`}
        </CodeContainer>
        You can also use Error Constructor for error message.<br />
        error callback in .then method is optional<br />Instead of it we use .catch method.<br />
        .catch method: It placed after .then method which lead to catch error Or handle reject case.
        <CodeContainer>
          {`friedRice
  .then((res) => {
    console.log("Lets eat", res);
  })
  .catch((err) => {
    console.log(err);
  });`}
        </CodeContainer>
        Promises works Asynchronously.As Promise task assigned to or handle by browser.<br />
        Promise is a object having 2 values in it.<br />{`state:  value:`}<br />
        <strong>Promise Async Description:</strong><br />
        1. Firstly Promise Produce and Promise object created.<br />
        2. Promise consume task is being assigned to or handle by browser. Browser and Promise objects in memory having connection with each other to perform tasks.<br />
        3. When Promise is resolved by browser it will give .then method to MicrotaskQueue. If rejected .catch method will be place in MicrotaskQueue. All the promises wait in MicrotaskQueue and eventLoop handle their execution. When the callStack empty, eventLoop assign that task to callStack for execution.
        <br />
        <strong>Promise and setTimeout:<br /></strong>
        MicrotaskQueue has high priority.<br />
        If their is task present in callback Queue and in MicrotaskQueue:<br />
        Firstly MicrotaskQueue execution performed.
      </p>

      <p>
        <strong>Function returning Promise:<br /></strong>
        A function returning promise as a output. creating a promise through function.
        <CodeContainer>
          {`function myPromise() {
  const name = ["Jashandeep", "Maninder", "Arsh"];
  return new Promise((resolve, reject) => {
    if (name.includes("Arsh")) {
      resolve("Yes");
    } else {
      reject("Not");
    }
  });
}

myPromise()
  .then((res) => {
    return console.log(res, "Present");
  })
  .catch((err) => {
    return console.log(err, "Present");
  });
`}
        </CodeContainer>
        <strong>Promise and setTimeout:</strong><br />
        <CodeContainer>
          {`function myPromise2() {
  const name2 = ["Jashandeep", "Maninder", "Arsh"];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name2.includes("Arsh")) {
        resolve("2 Yes");
      } else {
        reject("2 Not");
      }
    }, 2000);
  });
}

myPromise2()
  .then((res) => {
    return console.log(res, "Present");
  })
  .catch((err) => {
    return console.log(err, "Present");
  });`}
        </CodeContainer>
      </p>

      <p>
        <strong>Promise resolve and Promise chaining:<br /></strong>
        .then method always return a Promise. You can also store this in a variable to check.
        <CodeContainer>
          {`const isPromiseMyPromise2 = Promise.resolve("abc");`}
        </CodeContainer>
        Promise always return something. If you not mention return O/P will be undefined.<br />
        Returned value is equal to = Promise.resolve('value')<br />
        This has returned promise to us now we can use .then method
      </p>
      <p>
        <strong>Promise chaining:</strong><br />
        Promise chaining means using .then method again and again.
        <CodeContainer>
          {`myPromise()
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    return res;
  });`}
        </CodeContainer>
      </p>
      <p>
        <strong>Callback hell to flat Code:</strong><br />
        Callback hell can be solve using Promises.
        <CodeContainer>
          {`function changeText2(element, text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

changeText2(headings[0], "One", 1000)
  .then(() => changeText2(headings[1], "Two", 1000))
  .then(() => changeText2(headings[2], "Three", 1000))
  .then(() => changeText2(headings[3], "Four", 1000))
  .then(() => changeText2(headings[4], "Five", 1000))
  .then(() => changeText2(headings[5], "Six", 1000))
  .then(() => changeText2(headings[6], "Seven", 1000))
  .then(() => changeText2(headings[7], "Eight", 1000))
  .catch(() => alert("Error"));`}
        </CodeContainer>
      </p>
    </div>
  )
}
