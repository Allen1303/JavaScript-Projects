"use strict";
/*Create The Div Containing the Gray Heart */
const grayHeart = document.createElement("div");
grayHeart.className = "gray-heart";

/*Create The Div Containing the Red Heart */
const redHeart = document.createElement("div");
redHeart.className = "red-heart";

/*Append Both Gray and Red Heart Div to the Body of the Document */
document.body.appendChild(grayHeart);
document.body.appendChild(redHeart);

/*Adding Event listeners to Gray Heart element */
grayHeart.addEventListener("click", function () {
  redHeart.classList.add("animation");
  grayHeart.classList.add("fill-color");
});

/*Adding Event listeners to Red Heart element */
redHeart.addEventListener("click", function () {
  redHeart.classList.add("animation");
  grayHeart.classList.remove("fill-color");
});

/*Create the style Elements and append it to the Document using JavaScript only */

const styleElement = document.createElement("style");
styleElement.innerHTML = `

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    --main-color: #dc143c;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgb(7, 7, 20);
  }
  
  /* gray-heart */
  .gray-heart {
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: relative;
    top: 0;
    transform: rotate(-45deg);
    cursor: pointer;
  }
  
  .gray-heart:before,
  .gray-heart:after {
    content: "";
    background: #ccc;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    position: absolute;
  }
  
  .gray-heart:before {
    top: -50px;
    left: 0;
  }
  
  .gray-heart:after {
    left: 50px;
    top: 0;
  }
  
  /* red-heart */
  .red-heart {
    background: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    transform: rotate(-45deg);
    position: absolute;
    visibility: hidden;
    cursor: pointer;
  }
  
  .red-heart:before,
  .red-heart:after {
    content: "";
    background: var(--main-color);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
  }
  
  .red-heart:before {
    top: -50px;
    left: 0;
  }
  
  .red-heart:after {
    left: 50px;
    top: 0;
  }
  
  .red-heart.animation {
    animation: pop 0.9s linear;
    visibility: visible;
  }
  
  .red-heart.fill-color {
    background: var(--main-color);
  }
  
  @keyframes pop {
    100% {
      transform: scale(1.7) rotate(-45deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleElement);
