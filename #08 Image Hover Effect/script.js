"use strict";
const section = document.createElement("section");
section.className = "container";
document.body.appendChild(section);

/*Create the Div that holds all other Divs*/
const divOne = document.createElement("div");
divOne.className = "clip clip1";
section.appendChild(divOne);

const divTwo = document.createElement("div");
divTwo.className = "clip clip2";
section.appendChild(divTwo);

const divThree = document.createElement("div");
divThree.className = "clip clip3";
section.appendChild(divThree);


/* ========APPLY THE CSS==WITH JAVASCRIPT==========*/
/*Step 1. create the style element */
const styleElement = document.createElement("style");

/*=== Step 2: Set CSS Style==*/
styleElement.innerHTML = ` body {
    margin: 0;
    padding: 0;
    background: #555;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    position: relative;
    width: 800px;
    height: 500px;
    background: #222;
  }
  
  .clip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }
  
  .clip1 {
    background: url(https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80);
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 46% 0, 39% 100%, 0 100%);
  }
  
  .clip2 {
    background: url(https://images.unsplash.com/photo-1502228213426-d4e9f2add0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
    background-size: cover;
    background-position: center;
    clip-path: polygon(19% 0, 87% 0, 64% 100%, 33% 100%);
  }
  
  .clip3 {
    background: url(https://images.unsplash.com/photo-1519757043093-285fcb07a4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
    background-size: cover;
    background-position: center;
    clip-path: polygon(82% 0, 100% 0, 100% 100%, 63% 100%);
  }
  
  .container:hover .clip {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  
  .container .clip:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }`;

/*==Step 3: Append Style Element to Head==*/
document.head.appendChild(styleElement);
