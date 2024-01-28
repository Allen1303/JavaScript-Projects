"use strict";

// Refactor the Code By Creating a Function that calls Each accordion Element
function createAccordion(ulElement, id, question, answer) {
  // Create The first li element with lable and Input field Type
  const list = document.createElement("li");
  ulElement.appendChild(list);

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = `${question}`;
  list.appendChild(label);

  //create a span element for the label
  const span = document.createElement("span");
  span.innerHTML = "&#x3e;";
  label.appendChild(span);

  //Create the Input element
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "accordion";
  input.id = id;
  list.appendChild(input);

  //Create the first Div Element
  const div = document.createElement("div");
  div.className = "content";
  const pTag = document.createElement("p");
  pTag.innerText = answer;
  //Append the Paragraph Tag to the Div and the Div Tag to the List element.
  div.appendChild(pTag);
  list.appendChild(div);

  // Add event listener to the label element to handle the click event
  // label.addEventListener("click", function () {
  //   // Get the next sibling element, which is the content div
  //   const content = this.nextElementSibling;
  //   // Toggle the max-height property of the content div
  //   content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  // });
}

//Create The main ul Element and append It To The body Of The Document
const ulElement = document.createElement("ul");
ulElement.id = "accordion";
document.body.appendChild(ulElement);
//First Accordion
createAccordion(
  ulElement,
  "first",
  "What is HTML?",
  `The HyperText Markup Language or HTML is the standard markup
language for documents designed to be displayed in a web browser. It
can be assisted by technologies such as Cascading Style Sheets and
 scripting languages such as JavaScript`
);

//Second Accordion
createAccordion(
  ulElement,
  "second",
  "What is CSS",
  `Cascading Style Sheets is a style sheet language used for describing
 the presentation of a document written in a markup language such as
HTML. CSS is a cornerstone technology of the World Wide Web,
  alongside HTML and JavaScript `
);
//Third Accordion
createAccordion(
  ulElement,
  "third",
  "What is JavaScript",
  ` JavaScript, often abbreviated JS, is a programming language that is
 one of the core technologies of the World Wide Web, alongside HTML
 and CSS. Over 97% of websites use JavaScript on the client side for
 web page behavior, often incorporating third-party libraries. `
);
//Fourth Accordion
createAccordion(
  ulElement,
  "fourth",
  "What is React",
  `React is a free and open-source front-end JavaScript library for
 building user interfaces based on UI components. It is maintained by
 Meta and a community of individual developers and companies.`
);
//Fifth Accordion
createAccordion(
  ulElement,
  "fifth",
  "What is Node.js",
  `Node.js is an open-source, cross-platform, back-end JavaScript
 runtime environment that runs on the V8 engine and executes
 JavaScript code outside a web browser`
);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Create and aoppent the CSS styling to the Body of thge document using javaScript Template Literals
const styleElement = document.createElement("style");
styleElement.innerHTML = `

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #3187c7;
  font-family: sans-serif;
}

#accordion {
  margin: 100px auto;
  width: 600px;
}

#accordion li {
  list-style: none;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);
  text-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);

}

#accordion li label {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: dodgerblue;
  cursor: pointer;
}

#accordion li label span {
  transform: rotate(90deg);
  font-size: 22px;
  color: dodgerblue;
}

#accordion label + input[type="radio"] {
  display: none;
}

#accordion .content {
  padding: 0 10px;
  line-height: 26px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
}

#accordion label + input[type="radio"]:checked + .content {
  max-height: 400px;
}
`;
document.head.appendChild(styleElement);
