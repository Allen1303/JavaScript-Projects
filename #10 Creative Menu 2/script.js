"use strict";
//Create a Container Div and append it to the body of the document
const divContainer = document.createElement("div");
divContainer.className = "container";
document.body.appendChild(divContainer);

//Create and append the ul Element to the Div container
const ulElement = document.createElement("ul");
divContainer.appendChild(ulElement);

//Create List Items (li) and Anchor Links (a) using for...of loop

const listArray = ["Home", "About", "Services", "Team", "Contact"];

for (const listItems of listArray) {
  const liElement = document.createElement("li");
  const aTag = document.createElement("a");
  aTag.href = `${listItems.toLowerCase}`
  aTag.className = "list-items";
  aTag.textContent = listItems;

  liElement.appendChild(aTag);
  ulElement.appendChild(liElement);
}

//Create The Style element for the CSS Styling
const styleElement = document.createElement("style");
styleElement.innerHTML = `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
  }
  
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  li {
    list-style: none;
  }
  
  .list-items {
    position: relative;
    display: block;
    padding: 15px 30px;
    text-decoration: none;
    /*text-transform: uppercase;*/
    color: #000;
    font-size: 22px;
    font-weight: bold;
    transition: 1s;
  }
  
  .list-items:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scaleY(2);
    transition: 1s;
    border-top: 2px solid crimson;
    border-bottom: 2px solid crimson;
  }
  
  .list-items:hover:before {
    transform: scaleY(1.2);
    opacity: 1;
  }
  
  .list-items:after {
    content: "";
    background: crimson;
    position: absolute;
    top: 2;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s;
    transform: scale(0);
    z-index: -1;
  }
  
  .list-items:hover:after {
    transform: scale(1);
  }
  
  .list-items:hover {
    color: #fff;
  }
`;
document.head.appendChild(styleElement);
