"use strict";

function createCard() {
  const mainSection = document.createElement("section");
  mainSection.className = "card";

  const secondSection = document.createElement("section");
  secondSection.className = "imgBox";

  const imageElement = document.createElement("img");
  imageElement.src = "./images/dreamy-young-woman-sunglasses-looking-front.jpg";
  secondSection.appendChild(imageElement);

  const articleElement = document.createElement("article");
  articleElement.className = "details";

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Briana";
  articleElement.appendChild(h2Element);

  mainSection.appendChild(secondSection);
  mainSection.appendChild(articleElement);
  document.body.appendChild(mainSection);
}
createCard();

// Apply All CSS Styling Using Template Literals
const styleElement = document.createElement("style");
styleElement.innerHTML = `

body {
    margin: 0;
    height: 100vh;
    background: linear-gradient(hsl(40, 90%, 70%), hsl(35, 80%, 60%));
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
  }
  
  .card {
    position: relative;
    width: 30rem;
    height: 30rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  }
  
  .card:before,
  .card:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 15px;
    transition: 1s;
    z-index: -1;
  }
  
  .card:hover:before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  
  .card:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  
  .imgBox {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background: #222;
    border-radius:20px;
    transition: 1s;
    z-index: 2;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:20px;
  }
  
  .card:hover .imgBox {
    bottom: 80px;
  }
  
  .details {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
  }

`;
document.head.appendChild(styleElement);
