import React from 'react'
import CodeContainer from '../../Other/CodeContainer';

export default function AjaxInJS() {
  return (
    <div>
      <h2>AJAX: Asynchronous JS and XML</h2>
      <p>
        <strong>XML</strong> is a data format. We don't use it now. We use JSON instead. No more XML format.<br />
        Browser(Client) requests server(Backend) for data through HTTP requests.<br />
        HTTP requests: Client and server communicate using HTTP requests.<br />
        <strong>AJAX</strong> is a set of 'web development techniques' belongs to client-side to create Asynchronous web applications.<br />
        With AJAX, web applications can send and retrieve data from server Asynchronously(in background) without interfering with the display and behavior of existing page.
        <br />We use JSON data format now. No more XML format.
      </p>
      <p>
        3 common way to create and send requests to server:<br />
        1. xmlHTTPRequest (old way)<br />
        2. fetch API (New way, mostly used now days)<br />
        3. axios (Third party library, mostly used now days)<br />
        To send and create requests to server can call: HTTP requests, API call, API request.<br />
      </p>
      <p>
        <strong>REST API methods or HTTP methods or HTTP verbs:</strong><br />
        1. GET (Get existing data)<br />
        2. POST (Create data)<br />
        3. PUT (Update in existing data)<br />
        5. PATCH (Minor update in existing data)<br />
        5. DELETE (Delete data)<br />
        Browser by default always create a 'GET' request. API response is always in <i>string format</i>.<br />
        You can use API methods in both 'lowercase' and 'uppercase'.
      </p>
      <p>
        <strong>JSON: JavaScript Object Notation </strong>
        difference between JSON and JS object:<br />
        JS object: key: 1, You can use <br />
        JSON: 'key': 1, key always need double quotes and You can't use methods init.
      </p>
      <p>
        <strong>Dev Tools: </strong>
        Dev Tools {`>`} Network {`> `}Headers<br />You may see 3 sub-headings:<br />
        General- It shows General API information<br />Response Header- It shows Server's response information<br />
        Request Header- It shows send info from client side to server.<br />
        Dev Tools {`>`} Network {`>`} Response<br />It shows response from API or server in JSON format.
      </p>

      <p>
        <strong>XHR: </strong> XML HTTP Request. XMLHttpRequest() is constructor method which returns a XHR object.
        <CodeContainer>
          {`const xhr = new XMLHttpRequest();
console.log(xhr);
const URL = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");`}
        </CodeContainer>
        Your API has a state, which you can check by using xhr Object.
        <CodeContainer>
          {`console.log(xhr);
console.log(xhr.onreadystatechange);`}
        </CodeContainer>
      </p>
      <p>
        <strong>Ready states are: </strong>Value {`>`} State {`>`} Description<br />
        0 {`>`} UNSENT {`>`} Client has been create xhr.open but not called yet.<br />
        1 {`>`} OPENED {`>`} xhr.open has been called.
        2 {`>`} HEADERS_RECEIVING {`>`} xhr.send() called, headers and status available.<br />
        3 {`>`} LOADING {`>`} Downloading: responseText hold partial data.<br />
        4 {`>`} DONE {`>`} operation is completed.<br />
        <strong> xhr.response: </strong>On readystate 4, we get the response in JSON format.<br />JSON always in string form.You can check it by using typeof of xhr.response<br />
        To convert JSON data into JS object we need to parse the response data.
        <CodeContainer>
          {`xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const response = xhr.response;
    console.log(typeof response);
    var data = JSON.parse(response);
    console.log(typeof data);
    console.log(data);
    console.log(xhr.status);
  }
};`}
        </CodeContainer>
        <strong>Status Codes: </strong>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</a>
        <strong>xhr.load(): </strong>This function only work when readyState = 4
        <CodeContainer>
          {`console.log(xhr.status);

xhr.onload = () => {
  const response = xhr.response;
  console.log(typeof response);
  var data = JSON.parse(response);
  console.log(typeof data);
  console.log(data);
  console.log(xhr.status);
};`}
        </CodeContainer>
        <strong>XHR error Handling:</strong><br />
        1. Parse response after status code = 200<br />
        2. Network related error handling:
        <CodeContainer>
          {`xhr.onerror = () => {
  console.log("Network error");
};`}
        </CodeContainer>
        You can also get specific user data by passing its ID into API URL.<br />
        <strong>We can use the Promises with XHR. Which is a clean way:</strong>
        <CodeContainer>
          {`function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Went wrong"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Something went wrong"));
    };

    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((res) => {
    const response = JSON.parse(res);
    console.log(response);
    return response;
  })
  .then((data) => {
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url = '${'URL'}/${'id'}';
    return sendRequest("GET", url);
  })
  .then((newResponse) => {
    0;
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch((error) => {
    console.log("error");
  });
`}
        </CodeContainer>

        <h3>Fetch API: </h3>
        1. It is a JS function.<br />
        2. It always returns a Promise means .then() works with this.<br />
        3. By default fetch API create GET request.
        <CodeContainer>
          {`fetch(URL)
  .then((response) => {
    console.log("aa", response);
    return response.json();
  })
  .then((data) => {
    console.log("Fetch Data", data);
  })
  .catch((err) => {
    console.log("Fetch API: Network Error");
  });`}
        </CodeContainer>
        The catch block execute when Promise rejected. Fetch function only reject when their is Network Error means when their is no Internet. Only then catch block runs.<br />
        Question arise: How can we check their is an Error in fetch API response. In response object you will got a key named 'OK'.<br />
        If its value is 'false' means failed. If 'true' means success.
        <CodeContainer>
          {`fetch(URL)
  .then((response) => {
    console.log("aa", response);
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error in response");
    }
  })
  .then((data) => {
    console.log("Fetch Data", data);
  })
  .catch((err) => {
    console.log("Fetch API: Network Error");
  });`}
        </CodeContainer>
        <strong>Request Params:</strong><br />
        <strong>API request method: </strong>By default fetch do GET API request. when we want to us other request. We need to specific it.<br />
        <strong>body: </strong> JSON.stringify({ }): As we always get data in JSON format.<br />So, need to send data also in JSON format. Thats why we declare this method. ANd inside this we define which data will be used.<br />
        <strong>headers: { }: </strong>It is most important. charset is optional.
        <CodeContainer>
          {`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    console.log("POST", response);
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error in response");
    }
  })
  .then((data) => {
    console.log("Fetch Data", data);
  })
  .catch((err) => {
    console.log("Fetch API: Network Error");
  });
`}
        </CodeContainer>
      </p>
    </div>
  )
}

