/*Create the Section Element */
const sectionElement = document.createElement("section");
sectionElement.className = "wrapper";
document.body.appendChild(sectionElement);

/*Add all divs to the section element */
const sectionDiv = document.createElement("div");
sectionDiv.className = "loader";
sectionElement.appendChild(sectionDiv);

const divLoaderOne = document.createElement("div");
divLoaderOne.className = "loading one";
sectionDiv.appendChild(divLoaderOne);

const divLoaderTwo = document.createElement("div");
divLoadeTwoclassName = "loading two";
sectionDiv.appendChild(divLoaderTwo);

const divLoaderThree = document.createElement("div");
divLoaderThree.className = "loading three";
sectionDiv.appendChild(divLoaderThree);

const divLoaderFour = document.createElement("div");
divLoaderFour.className = "loading four";
sectionDiv.appendChild(divLoaderFour);

/* ========APPLY THE CSS==WITH JAVASCRIPT==========*/
/*Step 1. create the style element */
const styleElemnt = document.createElement("style");

/*=== Step 2: Set CSS Style==*/
styleElemnt.innerHTML = `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #fb896b;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .wrapper .loader {
    display: flex;
    justify-content: space-evenly;
    padding: 0 20px;
  }
  
  .loader .loading {
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 0 10px;
    animation: load 0.8s ease infinite;
  }
  
  .loader .loading.one {
    animation-delay: 0.3s;
  }
  .loader .loading.two {
    animation-delay: 0.4s;
  }
  .loader .loading.three {
    animation-delay: 0.5s;
  }
  
  @keyframes load {
    0% {
      width: 30px;
      height: 30px;
    }
    50% {
      width: 20px;
      height: 20px;
    }
  }

`;
/*==Step 3: Append Style Element to Head==*/
document.head.appendChild(styleElemnt);
