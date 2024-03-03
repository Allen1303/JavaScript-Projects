"use strict";
//Create the Button Element
const buttonElement = document.createElement("button");
buttonElement.id = "btn";
buttonElement.textContent = "Click Me";

//Cretae the H2 Element
const h2Element = document.createElement("h2");
h2Element.id = "hexCode";
h2Element.textContent = "#8a2be2";

//Append Button and H2 element to the document body
document.body.appendChild(buttonElement);
document.body.appendChild(h2Element);

// JavaScript Color Functionality
const button2 = document.getElementById("btn");
let hexColorCode = document.getElementById("hexCode");

//Create the function to change the background colors
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.trunc(Math.random() * 16)];
  }
  return color;
}
BigInt,
  addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    hexColorCode.innerHTML = randomColor();
  });

//Dynamically add the CSS Styling
const styleElement = document.createElement("style");
styleElement.innerHTML = `
body {
    background: blueviolet;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  h2 {
    color: #fff;
    font-weight: 200;
  }
  
  button {
    padding: 15px;
    background: transparent;
    border: 2px solid white;
    color: #fff;
    transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  button:hover {
    background: #fff;
    color: #000;
    cursor: pointer;
  }
  
  button:active {
    padding: 5px;
  }
`;
document.head.appendChild(styleElement);
