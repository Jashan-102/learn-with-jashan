
import React from 'react'
import CodeContainer from '../../Other/CodeContainer';
import DOMTreeImg from "../../../assets/imgs/dom.gif";
export default function JSDOM() {
  return (
    <div>
      <h2>DOM: Document Object Model</h2>
      <p>
        Ways to link JS file into HTML:<br />
        Their is a HTML file, browser start parse it means start read and execute it line by line. Browser found this JS script in
        <CodeContainer>
          {`<head></head> of the document<br /><script src='myjs.js'></script><br />`}
        </CodeContainer>
        Now HTML parsing stopped and browser start executing this JS script. JS will throw error bcz the HTML elements we have defined into the document is not executed by browser yet so, for browser it doesn't exist which lead to JS failure.<br />
        2. We can use
        <CodeContainer>
          {`<script src='myjs.js'></script>`}
        </CodeContainer>
        tag at the end of the HTML and just before the closing {`</body>`} tag.<br />But this way lead to time consuming.As:<br />HTML parsed<br />JS load<br />JS execution
        3. async keyword:
        <CodeContainer>
          {`<script src='myjs.js' async></script>`}
        </CodeContainer>
        This async keyword  will lead to ask browser continue HTML parsing along with JS load.<br />But, when JS loaded, then browser stop HTML parsing and start JS execution. This also lead to an problem as JS execution starts and HTML is not fully loaded yet.

        4. defer keyword:<br />use this script inside {`<head></head>`} tag
        <CodeContainer>
          {`<script src='myjs.js' defer></script>`}
        </CodeContainer>
        defer lead to parse and load JS at same time like async keyword.<br />But it will not directly start execute JS when JS is loaded done.<br />It will wait for HTML fully parsed then start JS execution.<br />Its is time saving as HTML parsing and JS loading done, just left JS execution"
      </p>

      <p>
        <strong>DOM: Document Object Model:</strong><br />
        As browser start parsing HTML an object created whose name is document. You can find this document object inside window object (window.document). This document object has our all HTML elements in object from inside init.<br />
        This lead to show human readable representation of document object:<br />
        <CodeContainer>
          {`console.log(window.document)`}
        </CodeContainer>
        This lead to JS representation of document object:
        <CodeContainer>
          {`console.dir(window.document)`}
        </CodeContainer>
      </p>

      <p>
        Document object has a lot of properties Or you can say 'events'.<br />
        <strong>JS methods/ Properties/ Events:</strong><br />
        <strong>getSingle element:</strong><br />
        1. getElementById:<br />Now this will return us an object as we know JS store HTML elements inside document objects in form of object. You can check type by using typeof.<br />
        2. querySelector<br />
        <strong>getMultiple elements:</strong><br />
        1. getElementByClassName<br />2. getElementByTagName<br />3. querySelectorAll<br />
        Both getElementByClassName and getElementByTagName will be return list of elements occurred in the form of Array like object. Both will show list of items inside HTMLCollection.<br />
        This will show list of items inside NodeList.<br />
        Ways to iterate elements:<br />1. for loop<br />2. for of loop<br />3. forEach loop
      </p>
      <p>
        <strong>HTMLCollection:</strong> You can't use forEach method in the case of HTMLCollection O/P. Because we need Array not Array like object. So, to use we have to firstly convert them into Array like:
        <CodeContainer>
          {`let headItem = document.getElementsByClassName("myhead");
console.log(headItem);
// headItem.forEach(value => console.log(value));
headItem = Array.from(headItem);
console.log(headItem);
headItem.forEach((value) => console.log(value));`}
        </CodeContainer>
        <strong>NodeList:</strong> In this case you can use any of list and also can use Array change methods.<br />
        <strong>textContent and innerText:</strong>Both are used for change the text.
        <CodeContainer>
          {`const mytxt = document.getElementById("mytext");
console.log(mytxt);
console.log(mytxt.textContent);
console.log(mytxt.innerText);
mytxt.textContent = "Hii, I am Jashan";
// mytxt.innerText = "Hii, I am Jashan";
console.log(mytxt.textContent);`}
        </CodeContainer>
        d/f b/w both textContent and innerText is:<br />textContent will return the whole text inside element, even if it was hidden by 'd-none'.<br />innerText will return the text on screen only
      </p>
      <p>
        <strong> Change style of element:</strong><br />It took:<br />element.styleObject.property= 'value'<br />JS use CamelCase for CSS properties.
        <CodeContainer>
          {`mytxt.style.color = "red";
mytxt.style.backgroundColor = "hotpink";`}
        </CodeContainer>
      </p>
      <p>
        <strong>get/set Attributes:</strong>These are use to get and set tags attributes.
        <CodeContainer>
          {`const mytxt2 = document.getElementById("mytxt2");
console.log(mytxt2.getAttribute("class"));
mytxt2.setAttribute("class", "abc");
console.log(mytxt2.getAttribute("class"));`}
        </CodeContainer>
      </p>
      <p>
        <strong>innerHTML:</strong>We are targeting a div or div's element then, that's div's all child belong to that div's innerHTML.
        <CodeContainer>
          {`const myheading = document.querySelector(".head");
console.log(myheading);
// myheading.innerHTML = "<h1>Hello world</h1>";`}
        </CodeContainer>
        This lead to Add HTML inside a particular selected element.<br />
        <strong>[+=]:</strong> This means Add this with the already defined HTML.<br />
        <strong>[\"\"]:</strong> As we can't use '' this inside ''. So. we can use this \" \" it will not throw an error.
        <CodeContainer>
          {`myheading.innerHTML += '<h1 class="abc">Hello world</h1>';
console.log(myheading);`}
        </CodeContainer>
      </p>
      <p>
        <strong>DOM Tree:</strong><br />
        <img className='mx-auto py-7' src={DOMTreeImg} />
      </p>
      <p>
        <strong>Traversing the DOM tree:</strong>
        <CodeContainer>
          {`const rootNode = document.getRootNode();
console.log(rootNode);
const htmlNode = rootNode.childNodes;
console.log(htmlNode);
const headElementNode = rootNode.childNodes[1];
console.log(headElementNode);
const parentElementNode = headElementNode.parentNode;
console.log(parentElementNode);

const Childs = headElementNode.childNodes[0];
console.log(Childs);

const nextsiblings = headElementNode.childNodes[0];
console.log(nextsiblings.nextSibling);`}
        </CodeContainer>
        This will return nextSibling but always ignore TextNode.
        <CodeContainer>
          {`console.log(nextsiblings.nextElementSibling);`}
        </CodeContainer>
        This is same as childNode, it will ignore TextNode.
        <CodeContainer>
          {`console.log(nextsiblings.children);`}
        </CodeContainer>
        On Traverse the Nodes, we can see TextNode which having spaces, but we never seen these spaces in out HTML page because by default browser sets a CSS: <i>white-space: normal</i>
      </p>

      <p>
        <strong>Classlist/add/remove/toggle:</strong><br />
        <CodeContainer>
          {`const selectHead = document.querySelector(".head");
console.log(selectHead.classList);`}
        </CodeContainer>
        <strong>Add a class:</strong>
        <CodeContainer>
          {`selectHead.classList.add("xyz")`}
        </CodeContainer>
        <strong>Remove a class:</strong>
        <CodeContainer>
          {`selectHead.classList.remove("xyz")`}
        </CodeContainer>
        <strong>Toggle a class:</strong> Toggle a class means: if not present- Add it If present-remove it
        <CodeContainer>
          {`selectHead.classList.toggle("xyz")`}
        </CodeContainer>
      </p>
      <p>
        <strong>Add HTML elements using JS:</strong><br />
        innerHTML, createElement, append, prepend, remove, before, after<br />
        <strong>innerHTML: </strong> We never use this way bcz this lead to an performance issue. As whenever a new HTML add by using innerHTML it reload all the items related to that query. But you can use it in case where you want to change an single text.
        <strong>createElement: </strong>It will create a new HTML element.
        <CodeContainer>
          {`const myTodo = document.createElement("li");
const myTodo2 = document.createElement("li");
console.log(myTodo);`}
        </CodeContainer>
        <strong>Ways to add text into it:</strong>
        <CodeContainer>
          {`const addTextNode = document.createTextNode("New added")
console.log(addTextNode);
myTodo.textContent = "Newly added";`}
        </CodeContainer>
        <strong>To add it:</strong>
        <CodeContainer>
          {`const toDoList = document.querySelector(".todoList");`}
        </CodeContainer>
        <strong>To add new HTML at the end of element use <i>append</i>.</strong>
        <CodeContainer>
          {`toDoList.append(myTodo);`}
        </CodeContainer>
        <strong>To add new HTML at the starting of element use <i>prepend</i>.</strong>
        <CodeContainer>
          {`toDoList.prepend(myTodo);`}
        </CodeContainer>
        <strong>To add new HTML before the selected element use <i>before</i>.</strong>
        <CodeContainer>
          {`toDoList.before(myTodo);`}
        </CodeContainer>
        <strong>To add new HTML after the selected element use <i>after</i>.</strong>
        <CodeContainer>
          {`toDoList.after(myTodo);`}
        </CodeContainer>
        <strong>To remove the element.</strong>
        <CodeContainer>
          {`const todo1 = document.querySelector(".todoList li");
console.log(todo1);
todo1.remove();`}
        </CodeContainer>
        As querySelector only look for first occurrence, So, first element removed
      </p>
      <p>
        <strong>insertAdjacent in HTML:</strong> Other way of Adding HTML element. In which the HTML element and where to add are used as params.
        <CodeContainer>
          {`myTodo2.textContent = "Newly added by insertAdjacentElement";

toDoList.insertAdjacentElement("beforebegin", myTodo2); // before
toDoList.insertAdjacentElement("afterbegin", myTodo2); // prepend
toDoList.insertAdjacentElement("beforeend", myTodo2); // append
toDoList.insertAdjacentElement("afterend", myTodo2); // after`}
        </CodeContainer>
      </p>
      <p>
        <strong>Clone Nodes:</strong>You want to use both append and prepend. Todo so we have to clone the Node.
        <CodeContainer>
          {`const li = document.querySelector("li");
console.log(li);
li.textContent = "New Added by Clone Nodes";`}
        </CodeContainer>
        li.cloneNode() will clone li into li2. And this true lead to do deep cloning also: clone with their children.
        <CodeContainer>
          {`const li2 = li.cloneNode(true);
toDoList.append(li);
toDoList.prepend(li2);`}
        </CodeContainer>
      </p>
      <p>
        <strong>static list and live list: </strong>NodeList querySelectorAll belongs to static list. <br />HTML Collection getElementById belong to live list.
        <strong>get dimension of an element: </strong>getBoundingClientRect() will return us all the object of element with their width, height and other properties.<br />It also provide top/bottom and onScroll their values change and go into negative. <br />
        To get specific property add propertyName at end.
        <CodeContainer>
          {`console.log(toDoList.getBoundingClientRect());
console.log(toDoList.getBoundingClientRect().top);`}
        </CodeContainer>
        <strong>events: </strong>An action is made and now performed a particular task on this action.<br />
        Ways to use events:<br />
        1.{` <button onClick="Task">Click ME!</button>`}
        2. Add EventListener Method
        <CodeContainer>
          {`const btn = document.getElementsByTagName("button");
console.log(btn);
btn.addEventListener("event", function doSomething() {
  // to something
});`}
        </CodeContainer>
        <strong>This keyword inside event listener callback function: </strong>This value will be the selected element. i.e, btn in this case.<br />In case of arrow function It will be window object as in arrow function, for this it always look a step up for this value. So, it will not consider btn but one step up i.e, window object<br />
        <strong>event on Multiple elements: </strong>You can do so, by using loops:<br />for of loop<br />for loop<br />forEach loop.<br />Select all the elements then apply loop to it.
        <CodeContainer>
          {`const allH1 = document.querySelectorAll("h1");
console.log(allH1);
allH1.forEach((value) => {
  console.log(value.innerHTML);
});`}
        </CodeContainer>
      </p>
      <p>
        <strong>event Object (Synthetic event): </strong>JS Engine execute code line by line.<br />
        JS Engine also have some extra features + WebAPIs. Whenever a event perform browser do 2 things:<br />
        1. give callback function to JS Engine for execution.<br />
        2. With callback function it also give performed event info in the form of object. We can access this event object by passing it as an argument in function. You can keep any name for this event object i.e, e, event, abc.<br />
        Now, as its hard to use arrow function in EventListener bcz that lead to problem with this keyword. So, we can use event object with arrow functions. Which provide us set of objects having info related to that event.

      </p>
      <p>
        <strong>events behind the scenes: </strong>
        Their is a JS Engine and inside it callback, Web API, Event Loop, Callback Queue
        <strong>JS Engine: </strong>Lead to execution of JS code as it has CallStack / GEC inside it.<br />
        <strong>Web API: </strong>These are browser APIs which lead to help browser to complete the tasks which going to be hard while executing JS.<br />
        <strong>Callback Queue: </strong> It is a Queue where EventListener's callback functions waits to perform events.<br />
        <strong>Event Loop: </strong> It lead to take care about send callback function present in callback Queue to the CallStack for execution. It look for when CallStack is free, so, it can send Callback Queue's Callback to the CallStack.<br />
        eg: We are using onClick event, So, browser will keep his eyes on button clicks. So, that it can run its callback function.
        <CodeContainer>
          {`btn.addEventListener("click", (e) => console.log(e));`}
        </CodeContainer>
      </p>
      <p>
        When JS engine look something like this (i.e, eventListener) then, It assign this to browser and browser Web APIs keep his eyes on task. So, that JS engine will not stuck their by keep eyes on event perform. It continue its execution.<br />Event Loop will look for empty callStack and then assign callback function to CallStack for execution.
      </p>
      <p>
        <strong>Keypress / mouse events: </strong>Their are many events you can use. like: keypress, onchange, onclick
        <CodeContainer>
          {`body.addEventListener("keypress", function(e){
  console.log(e)
})`}
        </CodeContainer>
      </p>
      <p>
        <strong>Event bubbling OR event propagation: </strong>
        Event bubbling is when you have clicked on event , then its parent's callback will also called, then its parent callback will be called.<br />its parent callback will be called means its ancestors called.<br />To stop bubbling you can use:<br />
        <CodeContainer>
          {`event.stopPropagation()`}
        </CodeContainer>
        <strong>Event Capturing: </strong>In this addEventListener took three values:<br />
        btn.addEventListener('click', callback, true)<br />
        This true boolean value defined for declaring is we want to capture the event OR not.<br />Capturing first goes through ancestors chain down.<br />
        <strong>Capturing and bubbling: </strong>You can consider them an event processing phases.<br />
        1. Capturing Phase: event goes down to the element<br />
        2. Targets Phase: event reach to the element<br />
        3. Bubbles Phase: event bubbles up from the element<br />
        img<br />
        The event first goes through ancestors chain down to the element i.e, Capturing Phase<br />\
        Then it reach to the target and triggers there i.e, Targets Phase<br />
        Then it goes up (i.e, Bubbling Phase) calling handlers on its way.<br />
        It work like:<br />Capturing --- Bubbling
      </p>
      <p>
        <strong>Event Delegation: </strong>Capturing and bubbling allow us to implement one of the most powerful event handling patter called event delegation.<br />
        If you want a lot of elements handle in similar ways, then instead assigning a handler to each of them. We put a single handler for each element on their common ancestor.<br />
        eg: We have added handlers to ancestor i.e, grandparent but it also work with when we click on child element. This is called event delegation.<br />
        It happen because on click bubbling goes upwards to check and call parent's callback.
      </p>
    </div>
  )
}
