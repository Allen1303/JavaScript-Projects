/*Create the Section Element */
const sectionElement = document.createElement("section");
sectionElement.className = "wrapper";
document.body.appendChild(sectionElement);

/*Add all divs to the section element */
const sectionDiv = document.createElement("div");
sectionDiv.className = "loader";
sectionElement.appendChild(sectionDiv);

/*Use For loop to create and Iterate through all 4 Div's with loading class name */
for (let loadIndex = 0; loadIndex <= 3; loadIndex++) {
  const loaderDiv = document.createElement("div");
  loaderDiv.className = `loading ${loadIndex}`;
  loaderDiv.style.animationDelay = `${0.4 + loadIndex * 0.1}s`;
  sectionDiv.appendChild(loaderDiv);
}

/* ========APPLY THE CSS==WITH JAVASCRIPT==========*/
/*Step 1. create the style element */
const styleElement = document.createElement("style");

/*=== Step 2: Set CSS Style==*/
styleElement.innerHTML = `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #b64c31;
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
    animation-delay: 0.4s;
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
document.head.appendChild(styleElement);
