"use strict";

/*Create thes Main Section Element that will hold all the list items */

const sectionElement = document.createElement("section");
//Add the Class Name for the section element
sectionElement.className = "container";
//Appending the section element to the body of the document
document.body.appendChild(sectionElement);
//Create the ul element and append it to sectionElement
const ulElement = document.createElement("ul");
sectionElement.appendChild(ulElement);

//Create List Items (li) and Anchor Links (a) using for...of loop
const liArray = ["Home", "Service", "Portfolio", "Contact"];
for (const liArrayItems of liArray) {
  const liElement = document.createElement("li");
  const aTag = document.createElement("a");

  aTag.href = `${liArrayItems.toLowerCase()}`;
  aTag.textContent = liArrayItems;

  liElement.appendChild(aTag);
  ulElement.appendChild(liElement);
}

/*Create The Styling Element */
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
    background: #000;
  }
  
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  
  ul li {
    list-style: none;
  }
  
  ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    padding: 1rem 2rem;
    position: relative;
  }
  
  a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transition: all 1s;
    transform-origin: left;
  }
  
  ul li a:hover:before,
  ul li a:hover:after {
    transform: scaleX(1);
  }
  
  a:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transition: all 1s;
    transform-origin: right;
  }
`;
document.head.appendChild(styleElement);
